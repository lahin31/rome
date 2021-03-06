/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {root, devFolder} = require("./_constants.cjs");
const packageJson = require("../package.json");
const child = require("child_process");
const path = require("path");
const net = require("net");
const fs = require("fs");
const os = require("os");

exports.unlink = function(loc) {
	if (!fs.existsSync(loc)) {
		return;
	}

	const stats = fs.lstatSync(loc);
	if (stats.isFile()) {
		fs.unlinkSync(loc);
	} else if (stats.isDirectory()) {
		for (const filename of fs.readdirSync(loc)) {
			exports.unlink(path.join(loc, filename));
		}
		fs.rmdirSync(loc);
	}
};

exports.exec = function(cmd, args, opts) {
	const res = child.spawnSync(
		cmd,
		args,
		{
			stdio: "inherit",
			...opts,
		},
	);
	if (res.status !== 0) {
		//console.error(`Error executing ${cmd} ${args.join(" ")}`);
		if (opts.stdio !== undefined && opts.stdio !== "inherit") {
			console.error(res.stderr.toString());
		}
		process.exit(1);
	}
	return res;
};

exports.execNode = function(args, opts) {
	return exports.exec(process.execPath, [...process.execArgv, ...args], opts);
};

exports.writtenFiles = [];

exports.write = function(loc, content) {
	// `content` will always have `\r` stripped so add it back for Windows
	if (process.platform === "win32") {
		content = content.replace(/\n/g, "\r\n");
	}

	exports.writtenFiles.push(loc);
	console.log("Wrote", loc);
	fs.mkdirSync(path.dirname(loc), {recursive: true});
	fs.writeFileSync(loc, content);
};

exports.getBuilderName = function(name) {
	const [startingCapitals] = name.match(/^([A-Z]+)/);

	if (startingCapitals.length === 1) {
		// Only one capital
		return name[0].toLowerCase() + name.slice(1);
	} else {
		// Take all and capitalize the first lowercase
		const rest = name.slice(startingCapitals.length - 1);
		return startingCapitals.slice(0, -1).toLowerCase() + rest;
	}
};

exports.heading = function(str) {
	console.log(`\u001b[7m ${str} \u001b[27m`);
};

exports.isDevDaemonRunning = function() {
	// Path and version logic copied from packages/@romefrontend/core/common/constants.ts
	// If there is a running daemon then we shouldn't build and just use the existing bundle
	// We'll log to let the developer know what's going on
	const version = `${packageJson.version}-dev`;
	const socketPath = path.join(os.tmpdir(), `rome-${version}.sock`);

	return new Promise((resolve) => {
		const socket = net.createConnection(
			{
				path: socketPath,
			},
			() => {
				resolve(true);
				socket.end();
			},
		);

		socket.on(
			"error",
			() => {
				resolve(false);
			},
		);
	});
};

exports.execMain = function(fn) {
	return fn().then(() => {
		process.exit(0);
	}).catch((err) => {
		console.error(err.stack);
		process.exit(1);
	});
};

exports.execDev = async function(argv) {
	await exports.buildTrunk();
	exports.heading("Executing trunk");
	const args = [path.join(devFolder, "index.js"), ...argv];
	if (process.env.ROME_DEV_DEBUG === "1") {
		args.unshift("--inspect", "--inspect-brk");
	}
	exports.execNode(
		args,
		{
			env: {
				...process.env,
				ROME_DEV: "1",
			},
		},
	);
};

exports.execVendor = function(args, opts) {
	return exports.execNode(
		[path.join(__dirname, "vendor/rome.cjs"), ...args],
		opts,
	);
};

exports.buildRelease = function(argv) {
	exports.execNode([
		path.join(__dirname, "dev-rome"),
		"bundle",
		path.join(root, "packages/rome"),
		...argv,
	]);
};

exports.buildTrunk = async function() {
	if (await exports.isDevDaemonRunning()) {
		console.log(
			"\x1b[1m\x1b[33m!!!! A dev daemon is currently running. Skipping new build. !!!!\x1b[39m\x1b[22m",
		);
		console.log(
			"\x1b[34mIf you want to run new code and stop the daemon you can stop the daemon with:\x1b[39m",
		);
		console.log("\x1b[2m$ ./scripts/dev-rome stop\x1b[22m");
		console.log();
		return;
	}

	exports.unlink(devFolder);
	fs.mkdirSync(devFolder);

	exports.heading("Building trunk");
	exports.execVendor([
		"bundle",
		path.join(root, "packages/@romefrontend/cli/bin/rome.ts"),
		devFolder,
		"--quiet",
	]);
};

const COMMENT_REGEX = /(\/\/|<!--) EVERYTHING BELOW IS AUTOGENERATED\. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS([\s\S]+)$/;
const COMMENT_TEXT = "EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS";

exports.readGeneratedFile = function(loc, raw) {
	let file = exports.readFile(loc, "utf8");
	if (raw) {
		return file;
	}

	const isJS = loc.endsWith(".ts") || loc.endsWith(".js");

	file = file.replace(COMMENT_REGEX, "");
	file = file.trim();
	file += "\n\n";
	if (isJS) {
		file += "// ";
	} else {
		file += "<!-- ";
	}
	file += COMMENT_TEXT;
	if (!isJS) {
		file += " -->";
	}
	file += "\n\n";
	return file;
};

exports.readFile = function(loc) {
	// Remove Windows carriage line endings
	return fs.readFileSync(loc, "utf8").replace(/\r/g, "");
};

exports.toCamelCase = function(str, forceCapitalize) {
	if (str.length === 0) {
		return str;
	}

	// Prepend uppercase letters with a space
	str = str.replace(/([A-Z+])/g, " $1");

	// We no longer care about the casing
	str = str.toLowerCase();

	// Capitalize all characters after a symbol or space
	str = str.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase());

	// Capitalize characters after a number
	str = str.replace(/\d+(\w|$)/g, (m) => m.toUpperCase());

	// Force capitalize if necessary
	if (forceCapitalize) {
		str = str[0].toUpperCase() + str.slice(1);
	}

	return str;
};

exports.dedent = function(str) {
	// Find min indentation
	const match = String(str).match(/^[ \t]*(?=\S)/gm);
	if (match === null) {
		return str;
	}

	const indent = Math.min(...match.map((x) => x.length));

	// Remove indentation
	return String(str).replace(new RegExp(`^[ \\t]{${indent}}`, "gm"), "").trim();
};

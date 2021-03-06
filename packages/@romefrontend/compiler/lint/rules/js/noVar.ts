/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyNode} from "@romefrontend/ast";
import {Path} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";

export default {
	name: "noVar",
	enter(path: Path): AnyNode {
		const {context, node: declaration} = path;

		if (
			declaration.type === "JSVariableDeclaration" &&
			declaration.kind === "var"
		) {
			context.addNodeDiagnostic(declaration, descriptions.LINT.JS_NO_VAR);
		}

		return declaration;
	},
};

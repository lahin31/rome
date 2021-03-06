/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NodeBaseWithComments} from "@romefrontend/ast";
import {createQuickBuilder} from "../../utils";

export type JSNumericLiteral = NodeBaseWithComments & {
	type: "JSNumericLiteral";
	value: number;
	format?: "octal" | "binary" | "hex";
};

export const jsNumericLiteral = createQuickBuilder<JSNumericLiteral, "value">(
	"JSNumericLiteral",
	"value",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

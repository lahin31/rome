/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Scope from "../Scope";
import {AnyNode, jsClassDeclaration} from "@romefrontend/ast";
import {createScopeEvaluator} from "./index";

export default createScopeEvaluator({
	enter(node: AnyNode, parent: AnyNode, scope: Scope) {
		node =
			node.type === "JSClassExpression" ? node : jsClassDeclaration.assert(node);
		const newScope = scope.fork("class", node);
		newScope.injectEvaluate(node.meta.typeParameters);
		return newScope;
	},
});

import {
	ParserOptionsWithRequiredPath,
	createParser,
	isDigit,
	readUntilLineBreak,
} from "@romefrontend/parser-core";
import {State, Tokens} from "@romefrontend/markdown-parser/types";
import {
	MarkdownDividerBlock,
	MarkdownHeadingBlock,
	MarkdownListBlock,
	MarkdownListItem,
	MarkdownParagraph,
	MarkdownRoot,
	MarkdownText,
} from "@romefrontend/ast";
import {Number0, ob1Add} from "@romefrontend/ob1";
import {isEscaped} from "@romefrontend/string-utils";
import {
	AnyMarkdownInlineNode,
	AnyMarkdownNode,
	MarkdownListChildren,
} from "@romefrontend/ast/markdown/unions";
import {hasThematicBreak} from "@romefrontend/markdown-parser/utils";
import {descriptions} from "@romefrontend/diagnostics";

export const createMarkdownParser = createParser((
	ParserCore,
	ParserWithRequiredPath,
) =>
	class MarkdownParser extends ParserWithRequiredPath<Tokens, State> {
		constructor(opts: ParserOptionsWithRequiredPath) {
			super(
				opts,
				"parse/markdown",
				{
					isBlockHead: false,
				},
			);

			this.ignoreWhitespaceTokens = false;
		}

		consumeHeading(index: Number0) {
			const [value, end] = this.readInputFrom(
				index,
				(char1) => {
					return char1 === "#";
				},
			);
			if (value.length > 6) {
				const [textValue, endText] = this.readInputFrom(end, readUntilLineBreak);
				return this.finishValueToken("Text", value + textValue, endText);
			}
			return this.finishValueToken("HeadingLevel", value.length, end);
		}

		consumeBlock(blockChar: string, index: Number0, currentChar: string) {
			const nextChar = this.getInputCharOnly(index, 1);
			const nextNextChar = this.getInputCharOnly(index, 2);
			if (hasThematicBreak([currentChar, nextChar, nextNextChar].join(""))) {
				// by spec, should be at least 3, with an infinite number
				const [, endIndex] = this.readInputFrom(
					index,
					(char) => {
						return char === blockChar;
					},
				);
				return this.finishToken("Break", endIndex);
			}
			return undefined;
		}

		tokenizeWithState(index: Number0, state: State) {
			const char = this.getInputCharOnly(index);
			const escaped = isEscaped(index, this.input);
			if (!escaped) {
				if (char === "#") {
					return {
						token: this.consumeHeading(index),
						state,
					};
				}

				if (char === "\n") {
					const nextChar = this.getInputCharOnly(index, 1);
					if (nextChar === "#") {
						return {
							token: this.consumeHeading(ob1Add(index, 1)),
							state,
						};
					}

					return {
						token: this.finishToken("NewLine"),
						state,
					};
				}

				// dividers
				if (char === "-") {
					const block = this.consumeBlock("-", index, char);
					if (block) {
						return {token: block, state};
					}
				}
				if (char === "_") {
					const block = this.consumeBlock("_", index, char);
					if (block) {
						return {token: block, state};
					}
				}
				if (char === "*") {
					const block = this.consumeBlock("*", index, char);
					if (block) {
						return {token: block, state};
					}
				}

				if (isDigit(char)) {
					const nextChar = this.getInputCharOnly(index, 1);
					const nextNextChar = this.getInputCharOnly(index, 2);
					if (nextChar === "." && nextNextChar === " ") {
						return {
							token: this.finishValueToken(
								"ListItem",
								"numeric-list",
								ob1Add(index, 3),
							),
							state,
						};
					}
				}
			}

			const [value, endIndex] = this.readInputFrom(index, readUntilLineBreak);

			return {
				token: this.finishValueToken("Text", value, endIndex),
				state,
			};
		}

		parseHeading(): MarkdownHeadingBlock {
			const start = this.getPosition();
			const token = this.getToken();
			if (token.type === "HeadingLevel") {
				const nextToken = this.nextToken();
				if (nextToken.type === "Text") {
					this.nextToken();
					return this.finishNode(
						start,
						{
							type: "MarkdownHeadingBlock",
							level: token.value,
							value: nextToken.value.trim(),
						},
					);
				}
			}
			throw this.unexpected({
				description: descriptions.MARKDOWN_PARSER.INVALID_SEQUENCE,
			});
		}

		parseText(): MarkdownText {
			const token = this.expectToken("Text");
			const pos = this.getPosition();
			return this.finishNode(
				pos,
				{
					type: "MarkdownText",
					value: token.value,
				},
			);
		}

		parseParagraph(): MarkdownParagraph {
			const start = this.getPosition();
			const children: Array<AnyMarkdownInlineNode> = [];

			while (!this.matchToken("EOF") && !this.matchToken("NewLine")) {
				const token = this.getToken();
				switch (token.type) {
					case "Text": {
						children.push(this.parseText());
						break;
					}
				}
				this.nextToken();
			}

			return this.finishNode(
				start,
				{
					type: "MarkdownParagraph",
					children,
				},
			);
		}

		parseBreak(): MarkdownDividerBlock {
			this.expectToken("Break");
			const start = this.getPosition();

			return this.finishNode(
				start,
				{
					type: "MarkdownDividerBlock",
				},
			);
		}

		parseItem(): MarkdownListItem {
			this.expectToken("ListItem");
			const pos = this.getPosition();
			const children: Array<MarkdownListChildren> = [];

			while (!this.matchToken("EOF") && this.matchToken("Text")) {
				children.push(this.parseParagraph());
			}

			return this.finishNode(
				pos,
				{
					// TODO handle check
					checked: null,
					type: "MarkdownListItem",
					children,
				},
			);
		}

		parseListBlock(): MarkdownListBlock {
			const pos = this.getPosition();
			const children: Array<MarkdownListItem> = [];

			while (!this.matchToken("EOF") && this.matchToken("ListItem")) {
				const item = this.parseItem();
				children.push(item);
			}

			return this.finishNode(
				pos,
				{
					type: "MarkdownListBlock",

					// TODO to review the type of list
					kind: "dot-list",
					children,
				},
			);
		}
		parseBlock(): undefined | AnyMarkdownNode {
			const token = this.getToken();

			switch (token.type) {
				case "NewLine": {
					this.nextToken();
					return undefined;
				}
				case "HeadingLevel":
					return this.parseHeading();

				case "ListItem":
					return this.parseListBlock();

				case "Break":
					return this.parseBreak();

				case "Text":
					return this.parseParagraph();

				default:
					throw this.unexpected();
			}
		}

		parse(): MarkdownRoot {
			const start = this.getPosition();
			const body: Array<AnyMarkdownNode> = [];

			while (!this.matchToken("EOF")) {
				const child = this.parseBlock();
				if (child !== undefined) {
					body.push(child);
				}
			}

			this.finalize();

			return this.finishNode(
				start,
				this.finishRoot({
					type: "MarkdownRoot",
					body,
				}),
			);
		}
	}
);

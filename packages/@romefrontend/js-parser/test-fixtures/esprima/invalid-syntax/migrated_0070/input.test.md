# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0070`

### `ast`

```javascript
JSRoot {
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 31
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	comments: Array [
		CommentBlock {
			id: "0"
			value: " Some multiline\ncomment "
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 10
					index: 28
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unknown start to an statement expression"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 0
					index: 0
					line: 1
				}
				start: Object {
					column: 0
					index: 29
					line: 3
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			leadingComments: Array ["0"]
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 30
					line: 3
				}
				start: Object {
					column: 0
					index: 29
					line: 3
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				leadingComments: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 30
						line: 3
					}
					start: Object {
						column: 0
						index: 29
						line: 3
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:3 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    1 │ /* Some multiline
    2 │ comment */
    3 │ )

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > identifiers > invalid-escape-seq-if`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
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
			index: 23
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Escape sequence in keyword if"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 6
					index: 6
					line: 1
				}
				start: Object {
					column: 6
					index: 6
					line: 1
				}
			}
		}
	]
	body: Array [
		JSIfStatement {
			alternate: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 22
					index: 22
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSBooleanLiteral {
				value: true
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 18
						index: 18
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
			}
			consequent: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 20
						index: 20
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:6 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Escape sequence in keyword if

    \u0069\u{66} (true) {}
          ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

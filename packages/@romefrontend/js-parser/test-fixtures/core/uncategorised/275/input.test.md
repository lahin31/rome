# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 275`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
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
			column: 26
			index: 26
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSThrowStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 26
					index: 26
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			argument: JSObjectExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 26
						index: 26
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "message"
								loc: Object {
									filename: "input.js"
									identifierName: "message"
									end: Object {
										column: 15
										index: 15
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 15
									index: 15
									line: 1
								}
								start: Object {
									column: 8
									index: 8
									line: 1
								}
							}
						}
						value: JSStringLiteral {
							value: "Error"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 17
									index: 17
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```

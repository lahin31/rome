# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 114`

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
			column: 12
			index: 12
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 12
					index: 12
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSNewExpression {
				arguments: Array []
				optional: undefined
				typeArguments: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 12
						index: 12
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				callee: JSMemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 4
							index: 4
							line: 1
						}
					}
					object: JSReferenceIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 7
								index: 7
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
					}
					property: JSComputedMemberProperty {
						value: JSReferenceIdentifier {
							name: "bar"
							loc: Object {
								filename: "input.js"
								identifierName: "bar"
								end: Object {
									column: 11
									index: 11
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
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```

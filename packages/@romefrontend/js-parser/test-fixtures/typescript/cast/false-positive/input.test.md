# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > false-positive`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 15
			line: 2
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
				filename: "input.ts"
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 13
						index: 13
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "f"
					loc: Object {
						filename: "input.ts"
						identifierName: "f"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				arguments: Array [
					JSBinaryExpression {
						operator: "<"
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 7
								index: 7
								line: 1
							}
							start: Object {
								column: 2
								index: 2
								line: 1
							}
						}
						left: JSReferenceIdentifier {
							name: "x"
							loc: Object {
								filename: "input.ts"
								identifierName: "x"
								end: Object {
									column: 3
									index: 3
									line: 1
								}
								start: Object {
									column: 2
									index: 2
									line: 1
								}
							}
						}
						right: JSNumericLiteral {
							value: 0
							format: undefined
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
						}
					}
					JSRegExpLiteral {
						global: false
						insensitive: false
						multiline: false
						noDotNewline: false
						sticky: false
						unicode: false
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						expression: JSRegExpSubExpression {
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 11
									index: 11
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
							body: Array [
								JSRegExpCharacter {
									value: "a"
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 11
											index: 11
											line: 1
										}
										start: Object {
											column: 10
											index: 10
											line: 1
										}
									}
								}
							]
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

# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 539`

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
			column: 31
			index: 31
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: Object {
					filename: "input.js"
					identifierName: "f"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 31
					index: 31
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 31
						index: 31
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 29
								index: 29
								line: 1
							}
							start: Object {
								column: 16
								index: 16
								line: 1
							}
						}
					}
				]
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 13
						index: 13
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "f"
						loc: Object {
							filename: "input.js"
							identifierName: "f"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 11
								index: 11
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 11
									index: 11
									line: 1
								}
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

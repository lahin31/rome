# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > meta-properties > new-invalid-prop`

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
			column: 1
			index: 27
			line: 3
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "The only valid meta property for new is new.target"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 10
					index: 25
					line: 2
				}
				start: Object {
					column: 6
					index: 21
					line: 2
				}
			}
		}
	]
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
					column: 1
					index: 27
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 12
						index: 12
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 27
						line: 3
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 10
								index: 25
								line: 2
							}
							start: Object {
								column: 2
								index: 17
								line: 2
							}
						}
						expression: JSMetaProperty {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 10
									index: 25
									line: 2
								}
								start: Object {
									column: 2
									index: 17
									line: 2
								}
							}
							meta: JSIdentifier {
								name: "new"
								loc: Object {
									filename: "input.js"
									identifierName: "new"
									end: Object {
										column: 5
										index: 20
										line: 2
									}
									start: Object {
										column: 2
										index: 17
										line: 2
									}
								}
							}
							property: JSIdentifier {
								name: "prop"
								loc: Object {
									filename: "input.js"
									identifierName: "prop"
									end: Object {
										column: 10
										index: 25
										line: 2
									}
									start: Object {
										column: 6
										index: 21
										line: 2
									}
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

 input.js:2:6 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The only valid meta property for new is new.target

    1 │ function f() {
  > 2 │   new.prop
      │       ^^^^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

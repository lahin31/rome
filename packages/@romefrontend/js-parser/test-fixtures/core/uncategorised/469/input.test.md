# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 469`

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
			column: 53
			index: 53
			line: 1
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "arguments is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 45
					index: 45
					line: 1
				}
				start: Object {
					column: 36
					index: 36
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: Object {
					filename: "input.js"
					identifierName: "hello"
					end: Object {
						column: 14
						index: 14
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
					column: 53
					index: 53
					line: 1
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
				hasHoistedVars: true
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 53
						index: 53
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
				]
				body: Array [
					JSVariableDeclarationStatement {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 51
								index: 51
								line: 1
							}
							start: Object {
								column: 32
								index: 32
								line: 1
							}
						}
						declaration: JSVariableDeclaration {
							kind: "var"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 51
									index: 51
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
							declarations: Array [
								JSVariableDeclarator {
									id: JSBindingIdentifier {
										name: "arguments"
										loc: Object {
											filename: "input.js"
											identifierName: "arguments"
											end: Object {
												column: 45
												index: 45
												line: 1
											}
											start: Object {
												column: 36
												index: 36
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 50
											index: 50
											line: 1
										}
										start: Object {
											column: 36
											index: 36
											line: 1
										}
									}
									init: JSNumericLiteral {
										value: 10
										format: undefined
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 50
												index: 50
												line: 1
											}
											start: Object {
												column: 48
												index: 48
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
		}
	]
}
```

### `diagnostics`

```

 input.js:1:36 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ arguments is a reserved word

    function hello() {'use strict'; var arguments = 10; }
                                        ^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

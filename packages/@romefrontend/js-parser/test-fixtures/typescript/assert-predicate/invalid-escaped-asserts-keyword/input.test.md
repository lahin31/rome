# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > assert-predicate > invalid-escaped-asserts-keyword`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
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
			index: 69
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected ("}
			}
			location: Object {
				filename: "input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 31
					index: 31
					line: 1
				}
				start: Object {
					column: 17
					index: 17
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "function"
				loc: Object {
					filename: "input.ts"
					identifierName: "function"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 8
						index: 8
						line: 1
					}
				}
			}
			declare: true
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 68
					index: 68
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
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 31
						index: 31
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "assertIsString"
						loc: Object {
							filename: "input.ts"
							identifierName: "assertIsString"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 17
								index: 17
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 17
									index: 17
									line: 1
								}
							}
						}
					}
				]
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 68
						index: 68
						line: 1
					}
					start: Object {
						column: 31
						index: 31
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 47
								index: 47
								line: 1
							}
							start: Object {
								column: 31
								index: 31
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "value"
							loc: Object {
								filename: "input.ts"
								identifierName: "value"
								end: Object {
									column: 37
									index: 37
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 48
								index: 48
								line: 1
							}
							start: Object {
								column: 47
								index: 47
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 48
									index: 48
									line: 1
								}
								start: Object {
									column: 47
									index: 47
									line: 1
								}
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 61
								index: 61
								line: 1
							}
							start: Object {
								column: 49
								index: 49
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "asserts"
							loc: Object {
								filename: "input.ts"
								identifierName: "asserts"
								end: Object {
									column: 61
									index: 61
									line: 1
								}
								start: Object {
									column: 49
									index: 49
									line: 1
								}
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 68
								index: 68
								line: 1
							}
							start: Object {
								column: 62
								index: 62
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "value"
							loc: Object {
								filename: "input.ts"
								identifierName: "value"
								end: Object {
									column: 67
									index: 67
									line: 1
								}
								start: Object {
									column: 62
									index: 62
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

 input.ts:1:17 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected (

    declare function assertIsString(value: unknown): \u{61}sserts value;
                     ^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-pattern > patterned-catch`

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
			column: 0
			index: 50
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSTryStatement {
			finalizer: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 49
					index: 49
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			block: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 4
						index: 4
						line: 1
					}
				}
			}
			handler: JSCatchClause {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 49
						index: 49
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 49
							index: 49
							line: 1
						}
						start: Object {
							column: 47
							index: 47
							line: 1
						}
					}
				}
				param: JSBindingArrayPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 45
							index: 45
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
					elements: Array [
						JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "input.js"
								identifierName: "a"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 15
										index: 15
										line: 1
									}
								}
							}
						}
						JSBindingIdentifier {
							name: "b"
							loc: Object {
								filename: "input.js"
								identifierName: "b"
								end: Object {
									column: 18
									index: 18
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
									filename: "input.js"
									end: Object {
										column: 18
										index: 18
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
						JSBindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 44
									index: 44
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 44
										index: 44
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "c"
											loc: Object {
												filename: "input.js"
												identifierName: "c"
												end: Object {
													column: 22
													index: 22
													line: 1
												}
												start: Object {
													column: 21
													index: 21
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 22
												index: 22
												line: 1
											}
											start: Object {
												column: 21
												index: 21
												line: 1
											}
										}
									}
									value: JSBindingIdentifier {
										name: "c"
										loc: Object {
											filename: "input.js"
											identifierName: "c"
											end: Object {
												column: 22
												index: 22
												line: 1
											}
											start: Object {
												column: 21
												index: 21
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 22
											index: 22
											line: 1
										}
										start: Object {
											column: 21
											index: 21
											line: 1
										}
									}
								}
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "d"
											loc: Object {
												filename: "input.js"
												identifierName: "d"
												end: Object {
													column: 25
													index: 25
													line: 1
												}
												start: Object {
													column: 24
													index: 24
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 25
												index: 25
												line: 1
											}
											start: Object {
												column: 24
												index: 24
												line: 1
											}
										}
									}
									value: JSBindingAssignmentPattern {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 29
												index: 29
												line: 1
											}
											start: Object {
												column: 26
												index: 26
												line: 1
											}
										}
										left: JSBindingIdentifier {
											name: "e"
											loc: Object {
												filename: "input.js"
												identifierName: "e"
												end: Object {
													column: 27
													index: 27
													line: 1
												}
												start: Object {
													column: 26
													index: 26
													line: 1
												}
											}
										}
										right: JSNumericLiteral {
											value: 0
											format: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 29
													index: 29
													line: 1
												}
												start: Object {
													column: 28
													index: 28
													line: 1
												}
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 29
											index: 29
											line: 1
										}
										start: Object {
											column: 24
											index: 24
											line: 1
										}
									}
								}
								JSBindingObjectPatternProperty {
									key: JSComputedPropertyKey {
										value: JSReferenceIdentifier {
											name: "f"
											loc: Object {
												filename: "input.js"
												identifierName: "f"
												end: Object {
													column: 33
													index: 33
													line: 1
												}
												start: Object {
													column: 32
													index: 32
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 34
												index: 34
												line: 1
											}
											start: Object {
												column: 31
												index: 31
												line: 1
											}
										}
									}
									value: JSBindingAssignmentPattern {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 38
												index: 38
												line: 1
											}
											start: Object {
												column: 35
												index: 35
												line: 1
											}
										}
										left: JSBindingIdentifier {
											name: "g"
											loc: Object {
												filename: "input.js"
												identifierName: "g"
												end: Object {
													column: 36
													index: 36
													line: 1
												}
												start: Object {
													column: 35
													index: 35
													line: 1
												}
											}
										}
										right: JSNumericLiteral {
											value: 0
											format: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 38
													index: 38
													line: 1
												}
												start: Object {
													column: 37
													index: 37
													line: 1
												}
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 38
											index: 38
											line: 1
										}
										start: Object {
											column: 31
											index: 31
											line: 1
										}
									}
								}
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "h"
											loc: Object {
												filename: "input.js"
												identifierName: "h"
												end: Object {
													column: 41
													index: 41
													line: 1
												}
												start: Object {
													column: 40
													index: 40
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 41
												index: 41
												line: 1
											}
											start: Object {
												column: 40
												index: 40
												line: 1
											}
										}
									}
									value: JSBindingAssignmentPattern {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 43
												index: 43
												line: 1
											}
											start: Object {
												column: 40
												index: 40
												line: 1
											}
										}
										left: JSBindingIdentifier {
											name: "h"
											loc: Object {
												filename: "input.js"
												identifierName: "h"
												end: Object {
													column: 41
													index: 41
													line: 1
												}
												start: Object {
													column: 40
													index: 40
													line: 1
												}
											}
										}
										right: JSReferenceIdentifier {
											name: "i"
											loc: Object {
												filename: "input.js"
												identifierName: "i"
												end: Object {
													column: 43
													index: 43
													line: 1
												}
												start: Object {
													column: 42
													index: 42
													line: 1
												}
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 43
											index: 43
											line: 1
										}
										start: Object {
											column: 40
											index: 40
											line: 1
										}
									}
								}
							]
						}
					]
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

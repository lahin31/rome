# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-from-named-as-default`

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
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 36
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportExternalDeclaration {
			defaultSpecifier: undefined
			exportKind: undefined
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 35
					index: 35
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: JSStringLiteral {
				value: "foo"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 34
						index: 34
						line: 1
					}
					start: Object {
						column: 29
						index: 29
						line: 1
					}
				}
			}
			namedSpecifiers: Array [
				JSExportExternalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 22
							index: 22
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
					exported: JSIdentifier {
						name: "default"
						loc: Object {
							filename: "input.js"
							identifierName: "default"
							end: Object {
								column: 22
								index: 22
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
					}
					local: JSIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
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
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```

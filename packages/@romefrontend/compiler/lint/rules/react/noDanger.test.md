# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `react/noDanger`

### `0`

```

 lint/react/noDanger/reject/1/file.tsx:1:5 lint/react/noDanger ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid passing content using the dangerouslySetInnerHTML prop.

    <div dangerouslySetInnerHTML={{ __html: 'child' }}></div>;
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Setting content using code can expose users to cross-site scripting (XSS) attacks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<div dangerouslySetInnerHTML={{__html: "child"}}>
</div>;

```

### `1`

```

 lint/react/noDanger/reject/2/file.tsx:1:28 lint/react/noDanger ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid passing content using the dangerouslySetInnerHTML prop.

    React.createElement('div', {dangerouslySetInnerHTML: { __html: 'child' }})
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Setting content using code can expose users to cross-site scripting (XSS) attacks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
React.createElement("div", {dangerouslySetInnerHTML: {__html: "child"}});

```

### `2`

```

 lint/react/noDanger/reject/3/file.tsx:1:22 lint/react/noDanger ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid passing content using the dangerouslySetInnerHTML prop.

    createElement('div', {dangerouslySetInnerHTML: { __html: 'child' }})
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Setting content using code can expose users to cross-site scripting (XSS) attacks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
createElement("div", {dangerouslySetInnerHTML: {__html: "child"}});

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```
<div>
	Hello World
</div>;

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
React.createElement("div", child);

```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```
createElement("div", child);

```

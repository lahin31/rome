---
title: Lint Rule js/duplicateImportSource
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation: {
	key: lint-rules/js/duplicateImportSource,
	parent: lint-rules,
	title: js/duplicateImportSource
}
---

# js/duplicateImportSource

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS -->


## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span>  <span class="token variable">foo</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token punctuation">{</span><span class="token variable">bar</span><span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token variable">type</span>  <span class="token punctuation">{</span><span class="token variable">fooType</span><span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span>  <span class="token variable">typedFoo</span><span class="token punctuation">:</span>  <span class="token variable">fooType</span>  <span class="token operator">=</span>  <span class="token punctuation">{</span>
  <span class="token variable">type</span><span class="token punctuation">:</span>  <span class="token string">&apos;foo&apos;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span><strong><span style="background-color: red">import</span></strong><strong><span style="background-color: red">  </span></strong><strong><span style="background-color: red">foo</span></strong><strong><span style="background-color: red">  </span></strong><strong><span style="background-color: red">from</span></strong><strong><span style="background-color: red">  </span></strong><strong><span style="background-color: red">&apos;./testdummy.ts&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:2</span> <strong>lint/js/duplicateImportSource</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">This module has </span><span style="color: Tomato;"><strong>already been imported</strong></span><span style="color: Tomato;">.</span>

  <strong>  1</strong><strong> │ </strong>import  foo  from  &apos;./testdummy.ts&apos;;
  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 2</strong><strong> │ </strong>import  {bar}  from  &apos;./testdummy.ts&apos;;
     <strong> │ </strong><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  3</strong><strong> │ </strong>import  type  {fooType}  from  &apos;./testdummy.ts&apos;;

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Previously imported here</span>

  <strong><span style="color: Tomato;">&gt;</span></strong><strong> 1</strong><strong> │ </strong><span class="token keyword">import</span>  <span class="token variable">foo</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>
     <strong> │ </strong><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>
  <strong>  2</strong><strong> │ </strong><span class="token keyword">import</span>  <span class="token punctuation">{</span><span class="token variable">bar</span><span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>
  <strong>  3</strong><strong> │ </strong><span class="token keyword">import</span>  <span class="token variable">type</span>  <span class="token punctuation">{</span><span class="token variable">fooType</span><span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">&apos;./testdummy.ts&apos;</span><span class="token punctuation">;</span>

</code></pre>
### Valid

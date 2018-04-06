webpackJsonp([0xdd6e472c0dfa],{682:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-03-04-js-function-declaration-and-function-expression/index.md absPath of file >>> MarkdownRemark",html:'<h1>Function declaration and Function expression</h1>\n<h2>Function declaration vs Function expression</h2>\n<p>As we know there are couple of ways to create functions in Javascript: you can store function in variable and declare it directly. The former is known as function expression and the latter is known as function declaration. First, let’s take a look at function expression.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So we create a <code class="language-text">const</code>, give it a name <code class="language-text">a</code>, and afterwards can call the function by calling\n<code class="language-text">a()</code>. Works as we expected, we create something, and can use that afterwards. And what about\nfunction expressions. Consider the following piece of code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello, \'</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Here we cerate a <code class="language-text">greet</code> function which outputs <code class="language-text">Hello</code> and the argument we pass to it. However,\nsomething strange happens when we call the greet function before it is declared.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">\'void\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs `Hello, void`</span>\n<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello, \'</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It just works. Why? Doesn’t javascript read programs line by line, and shouldn’t it throw an error ?\nWell, not actually. Javascript engines and their execution process is quiet complicated, and to\nunderstand why the very mentioned happens, we should get acquainted with a new concept, called\n<code class="language-text">Hoisting</code>.</p>\n<h2>Hoisting</h2>\n<p>To understand hoisting we should first understand how the piece of code we write in Javascript is\nexecuted. As already mentioned, it is not a trivial process, and to dumb it up, consists of two\ngeneral parts. First the piece of code that we wrote is “compiled” (not really), and then\ninterpreted. For example here.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> a<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//logs 2;</span>\n</code></pre>\n      </div>\n<p>Here is how the above code outputs 2 and not undefined when <code class="language-text">var a</code> is redeclared on the second\nline. First our program “compiles” the code, and declares known variables, in this case some <code class="language-text">var a</code>, after, during interpretation it looks for value assignments and assigns <code class="language-text">2</code> to it’s already\nknown <code class="language-text">var a</code>. So the declaration <code class="language-text">var a</code> comes befor the assignment of <code class="language-text">2</code>. Same is with the\nfunction declarations. However, the hoisting noly affects the same scope, that is, it is immpossible\nto access the declared function outside of the scope. It is important to remember, that only\nfunction declarations are hoisted. Let’s take a look at the following piece of code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">someFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError!</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">someFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here we can see, that the program doesn’t throw a <code class="language-text">ReferenceError</code>; but instead it throws a\n<code class="language-text">TypeError</code>, saying that <code class="language-text">someFunc is not a function</code>. This happens for the following reason. The\n<code class="language-text">compiler</code> initializes <code class="language-text">someFunc</code> as a variable, and, because there are no other declarations,\nengine starts interpreting the program, when it gets to the first line, it sees <code class="language-text">someFunc</code> being\ncalled as a function, however, it sees <code class="language-text">someFunc</code> initialized as a variable, and not a function.</p>\n<h2>Summary</h2>\n<p>You would think, that we should be really carefull while writing declaring functions or variables in\nJS. While it’s mostly true, in the development you wouldn’t be using <code class="language-text">var</code>, but <code class="language-text">let</code> and <code class="language-text">const</code>,\nwhich are block scoped and were introduced in\nES6. <a href="http://javascriptkit.com/javatutors/javascript-es6-let-const.shtml">http://javascriptkit.com/javatutors/javascript-es6-let-const.shtml</a>). Also, if for some bizzare\nreasons you need to write ES5, then <code class="language-text">&quot;use strict&quot;</code> comes to help\n(<a href="https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/">https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/</a>).</p>',frontmatter:{title:"Function declaration and Function expression",tags:"javascript, development",author:"Zaven Snkhchyan",date:"March 04, 2018",discussionId:"2018-03-04-js-function-declaration-and-function-expression"}}},pathContext:{slug:"/2018-03-04-js-function-declaration-and-function-expression/"}}}});
//# sourceMappingURL=path---2018-03-04-js-function-declaration-and-function-expression-05e7b324fa110be53570.js.map
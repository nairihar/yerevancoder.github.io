webpackJsonp([0x689e1568f728],{612:function(a,n){a.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2017-12-31-elm-intro/index.md absPath of file >>> MarkdownRemark",html:'<p><em>By Grigori Aramyan</em>,\ncatch me on <a href=\'https://twitter.com/@griaram\'>twitter</a></p>\n<p>Elm is a strongly-typed functional programming language for\nfrontend. It has simplicity and maintainability of functional\nprogramming paradigm in general, but exposes beauty of it’s own\narchitecture as well. It’s a compiled language and compiler makes max\nefforts to ensure bug-free runtime code, which, on the other\nhand-side, means your code won’t compile, if there’s a mistype, use of\nundefined variable or similar stuff. Elm’s error messages are one of\nthe “proud points” of Evan’s team though (creator of Elm, Evan\nCzaplicki). Compiler produces nice, human-readable messages with\nhints, pointing exactly to where/what is wrong with code, assisting\ndevs as much as machines can probably do.</p>\n<h2>The Elm Architecture</h2>\n<p>Workflow of any Elm application is pretty straightforward: user fires a message (read event) by interacting with UI (text input, button click etc.), <code class="language-text">update</code> function handles it by pattern matching on type of message and modifying model accordingly, <code class="language-text">view</code> function re-renders UI using it’s virtual dom, so only minimal required render is performed. If you’re familiar with React/Redux, this architecture won’t be confusing. (Redux workflow was partially inspired by the elm architecture, according to Dan Abramov, author of Redux) Otherwise, it won’t be confusing after you play with it a bit. I made a simple todo app for this post, showing the very basics of Elm application, like module structure, code conventions, syntax, UI component styling, interop with JavaScript etc. You can find it under this repo: <a href="https://github.com/grigor-aramyan/todo-elm">https://github.com/grigor-aramyan/todo-elm</a>. Read the Readme, it explains how you can run the app and make changes to elm code itself. I made a skeleton boilerplate of <code class="language-text">Main.elm</code> as well, that can get you up-and-running in seconds. You can play with it also, or just copy/paste it’s content in every Main.elm of your projects (main Elm module, from which compiler starts running, is called <code class="language-text">Main.elm</code>). Here’s the boilerplate gist: <a href="https://gist.github.com/grigor-aramyan/b29a6272f5656d9ddc56f591a3e03063">https://gist.github.com/grigor-aramyan/b29a6272f5656d9ddc56f591a3e03063</a>.</p>\n<p>Elm has it’s own REPL. You’ll get that after installing Elm on your\nlocal machine from official website <a href="http://elm-lang.org/">http://elm-lang.org/</a>. After\ninstalling, type <code class="language-text">elm</code> in shell to see what you’ve got.</p>\n<h2>Type and type aliases</h2>\n<p>You can define your own types in Elm.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elm"><code class="language-elm"><span class="token keyword">type</span> <span class="token constant">Visualize</span> <span class="token operator">=</span>\n    <span class="token constant">All</span>\n    <span class="token operator">|</span> <span class="token constant">Completed</span>\n    <span class="token operator">|</span> <span class="token constant">Active</span>\n</code></pre>\n      </div>\n<p>This chunk defines “Visualize” type, which can have 3 values, either <code class="language-text">All</code>, <code class="language-text">Completed</code> or <code class="language-text">Active</code>. One use case for custom types is dispatch events/messages - by having enum-like data, <code class="language-text">update</code> function can precisely pattern match fired message and perform tasks accordingly. Also, it helps compiler to help us by warning, that not all possible type values are covered in <code class="language-text">update</code>. Actually, it’s not warning us, it just won’t compile.</p>\n<p>Type aliases make possible to combine primitive types into more\ncomplex structures.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elm"><code class="language-elm"><span class="token keyword">type</span> <span class="token keyword">alias</span> <span class="token constant">TodoItem</span> <span class="token operator">=</span>\n    <span class="token punctuation">{</span> <span class="token hvariable">title</span> <span class="token operator">:</span> <span class="token constant">String</span>\n    <span class="token punctuation">,</span> <span class="token hvariable">completed</span> <span class="token operator">:</span> <span class="token constant">Bool</span>\n    <span class="token punctuation">,</span> <span class="token hvariable">id</span> <span class="token operator">:</span> <span class="token constant">Int</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The above chunk defines <code class="language-text">TodoItem</code> custom type (read, record or\nobject or class), that has 3 fields. Type aliases are often used to\ndefine application model structure. Here’s an example of it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-elm"><code class="language-elm"><span class="token keyword">type</span> <span class="token keyword">alias</span> <span class="token constant">Model</span> <span class="token operator">=</span>\n    <span class="token punctuation">{</span> <span class="token hvariable">todoItems</span> <span class="token operator">:</span> <span class="token constant">List</span> <span class="token constant">TodoItem</span>\n    <span class="token punctuation">,</span> <span class="token hvariable">currentTodo</span> <span class="token operator">:</span> <span class="token constant">String</span>\n    <span class="token punctuation">,</span> <span class="token hvariable">show</span> <span class="token operator">:</span> <span class="token constant">Visualize</span>\n    <span class="token punctuation">,</span> <span class="token hvariable">currentIndex</span> <span class="token operator">:</span> <span class="token constant">Int</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Interop, Encode/Decode</h2>\n<p>Elm application can communicate with JavaScript modules through ports\n(and flags, actually, but ports are more flexible, so get to know them\nfrom the beggining). Elm is strongly typed language, JavaScript - is\nnot, so there’s need of encoders and decoders, that will explain to\nJavaScript modules what particular Elm values mean and vice\nversa. Decoders have another major role - they want let data to pass\nthrough port and into Elm, if it doesn’t comply to type defined in\ndecoder, so JavaScript side bugs will stay there only.</p>\n<p>The above mentioned Todo application has Encoders/Decoders and interop\nwith Javascript implemented, so you can check them at work. Also,\n(actually, in first place) look up the <code class="language-text">Get Started</code> guide in Elm\nofficial website docs. For community discussions, join Elm’s page on\nReddit: <a href="https://www.reddit.com/r/elm/">https://www.reddit.com/r/elm/</a></p>\n<h2>Partial function</h2>\n<p>Maybe one of the most challenging parts in Elm application are type\nannotations. Here’s an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-elm"><code class="language-elm"><span class="token hvariable">update</span> <span class="token operator">:</span> <span class="token constant">Msg</span> <span class="token operator">-></span> <span class="token constant">Model</span> <span class="token operator">-></span> <span class="token punctuation">(</span><span class="token constant">Model</span><span class="token punctuation">,</span> <span class="token constant">Cmd</span> <span class="token constant">Msg</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>It says, function “update” receives 2 parameters of types “Msg” and\n“Model”, then returns a type “Model, Cmd Msg”. Here’s the question -\nwhy arrows, instead of commas. And here’s the answer - because Elm has\nthe idea of “partial functions” built within.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-elm"><code class="language-elm"><span class="token hvariable">someFunc</span> <span class="token operator">:</span> <span class="token constant">String</span> <span class="token operator">-></span> <span class="token constant">Int</span> <span class="token operator">-></span> <span class="token constant">Int</span> <span class="token operator">-></span> <span class="token constant">Bool</span>\n</code></pre>\n      </div>\n<p>If you give “someFunc” all 3 declared parameters, it will return a\n“Bool” type value. On the other hand, if you give it just “String”, it\nwill return an anonymous function whith following type annotation\n<code class="language-text">Int -&gt; Int -&gt; Bool</code> (the former “String” is excluded, because\nit’s matched already with one-parameter function call). That’s the\nreason why there is no clear separation of function arguments and it’s\nreturn value - argument values can become return values, if partial\nfunctions are in play.</p>\n<p>Hope this post will help to get some feel of Elm beauty.</p>\n<p>Happy hacking ;)</p>',frontmatter:{title:"Elm, beauty of functional programming to frontend",tags:"elm, frontend",author:"Grigori Aramyan",date:"December 31, 2017",discussionId:"2017-12-31-elm-intro"}}},pathContext:{slug:"/2017-12-31-elm-intro/"}}}});
//# sourceMappingURL=path---2017-12-31-elm-intro-d1f82d5ff13a3304f8ed.js.map
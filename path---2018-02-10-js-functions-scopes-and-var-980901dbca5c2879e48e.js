webpackJsonp([0x65ff09de5a1e],{635:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-10-js-functions-scopes-and-var/index.md absPath of file >>> MarkdownRemark",html:'<h1>Functions and scope</h1>\n<h2>What the function?</h2>\n<p>Alright, we already know the very basic statements that are enough for writing some reasonable, somewhat useful programs. The next thing to do is studying functions. So what exactly are functions?</p>\n<p>So all of you tried to solve a jigsaw puzzle right? There is a “strategy” of doing that. If you have tried to do it with your friends, usually each one of you solves just one part of the puzzle and then at the end you connect all the parts together.</p>\n<p>In programming world, all the problems are interesting puzzles that need to be solved. And usually, the same strategy works — divide the puzzle into smaller pieces, solve them getting bigger pieces, and then merge those bigger pieces together. These bigger pieces that contain some smaller things, like <code class="language-text">for</code>’s and <code class="language-text">if</code>’s are called functions. For example, usually when solving puzzle we start with connecting the edges because the edges are simpler to find and locate correctly.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">solveEdges</span> <span class="token operator">=</span> puzzle <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> piece <span class="token keyword">in</span> puzzle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>piece <span class="token operator">===</span> <span class="token string">\'edge\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">locatePiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">addToPuzzle</span><span class="token punctuation">(</span>puzzle<span class="token punctuation">,</span> piece<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>How many new things do you see?</p>\n<ol>\n<li>Function declaration - There are several ways to define a function in JS and we will talk about them in 10 minutes. However, nowadays, the most popular and advised way of creating a function is using the syntax below.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">anyFunctionName</span> <span class="token operator">=</span> putArgumentsHere <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// body</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The syntax is straigtforward. The arrow basically says “take whatever inside the parantheses before me, give them to where I point and do whatever it says until you see a return”</p>\n<ol start="2">\n<li>Function call to locatePiece - We see a function call and the syntax is pretty easy. You put the name of the function you want to call and then parantheses. In parantheses you can put ANY number of arguments (values that will be passed to the function).</li>\n<li>Function call to addToPuzzle - This is the logical continuation of #2 here. We put 2 arguments inside the parantheses.</li>\n</ol>\n<p>In a sense, functions in math and functions in programming are pretty close syntax-wise. We specify how it will behave, and after that we give some arguments to them and get back values after applying the rules we specified.</p>\n<p>To make this more clear, let’s imagine my friend Edgar is a function. I told him that when I call his name and say a number to him, he should shout back my number times 2. So if I shout Edgar 5 he will get back saying 10. Edgar in this case, is a function which takes one argument - a number and returns a number.</p>\n<p>So now a question, what if we shout Edgar and instead of a number tell, let’s say a word. Will it work or not?</p>\n<p>Challenge, can you write the Edgar function now?</p>\n<p>So how many ways are there to create a function. Well let’s just count them but we will use just one of those types for now.</p>\n<ol>\n<li>Normal function. - Defining a function as a function.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">something</span><span class="token punctuation">(</span>someArg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> someArg <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>Anonymous function - Not the best way to do it.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>Arrow (or sometimes called Fat Arrow) functions - Modern clear and preferable way to create functions.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> name <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">\'Hello \'</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There are some differences between these three declarations, but those are a out of scope of today’s discussion because they are a bit more advanced.</p>\n<h3>Nesting the functions.</h3>\n<p>As functions are just like numbers and strings, you can put them in any variable almost at any place. This means that even in some function, you can still create functions inside of them. Let’s take a look.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token punctuation">(</span>aaa<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span>bbb<span class="token punctuation">)</span> <span class="token operator">=></span>\n            <span class="token comment">// So on.</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is called nesting and this will be useful for explaining scopes.</p>\n<h2>Scopes</h2>\n<p>Scope is a topic that is closely related to functions. We will discuss it now.</p>\n<p>Question. What do we usually do if we are looking for remote control or for a sock to make a pair? :smile: We start with the couch (under the bed) and then after not finding it there we start looking around the table and then in the room and then in the whole house and then maybe, if you desperately need it, outside (with a bloody rage in your eyes already :sweat_smile:) So what if a computer needs something like a remote control? How does it work? Let’s have a look at a code</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So how does the computer find the variable <code class="language-text">a</code> to console.log it. Just like you try to locate the remote control! When the computer is already informed that it is asked to print a, it will start looking for it. The first search is done within the first pair of curly braces the statement is in, then the second one is done in a bigger body, and this grows bigger until global <code class="language-text">scope</code>. If it manages to find one, it will run the program, if not, it will give undefined.</p>\n<p>There are 3 types of scopes. <code class="language-text">Functional</code>, <code class="language-text">global</code> and <code class="language-text">block</code> scopes. Before <code class="language-text">let</code> and <code class="language-text">const</code>, there was no notion of block scope. let and const brought the idea of block scopes to the JS. So what’s the difference. The names may suggest some things but let’s talk about it in detail.</p>\n<ul>\n<li>Functional scope - This means that the search area widens function by function. If you call <code class="language-text">a</code>, it will look inside a function, and then if not found, maybe in the function that original function was declared in and so on. If it cannot find <code class="language-text">a</code> in any level though, it will go out to global scope.</li>\n<li>Block scope - This means that the search area widens block by block. As you may remember, block is anything that starts with <code class="language-text">{</code> and ends with <code class="language-text">}</code>.</li>\n</ul>\n<p>_NOTE: The variables get destroyed as soon as the execution of the program leaves its scope. This means that if the <code class="language-text">for</code> loop is finished, all the <code class="language-text">const</code>s and <code class="language-text">let</code>s that were declared inside it (including the one declared in the parantheses after the keyword for) will be deleted.</p>\n<p>Let’s take a look at the examples to see how it works.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">someFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">></span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Imagine this as going into rooms. For example here outside we have a box with <code class="language-text">a</code> written on it. We put 15 in it and move into someFunction room. In this room we also have a box with <code class="language-text">a</code> written on it. We put 8 in it. Now suppose a guy who was not outside wants to find an <code class="language-text">a</code>. Which one do you think it will find. The same logic applies to all the scopes, but the notion of room changes — in case of function — functions are rooms in case of blocks any <code class="language-text">{}</code> block is a room.</p>\n<p>Let’s figure out this example the same way. Keep in mind that <code class="language-text">const</code>s are block scoped.</p>\n<h2>Var</h2>\n<p>Now we have <code class="language-text">const</code> and <code class="language-text">let</code>, both are block scoped. There should be another way of declaring a variable for a functional scope. That way is called <code class="language-text">var</code>. The name <code class="language-text">var</code> comes from the word… variable. The only difference is that it’s functionally scoped. Usually using <code class="language-text">let</code>s and <code class="language-text">const</code>s is better as it makes the code more readable and clear. Generally, for any variable, you need to keep its scope as small as possible. Not doing that will cause confusion and maybe some unwanted side effects. Have a soul, write good code please.</p>\n<p>Whatever, we need to talk about var anyways, as there is a bunch of legacy code that needs to be supported. Maybe one day you will encounter such code and work on it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">somefunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"JavaScript. Functions scopes and var.",tags:"javascript, development",author:"Robert Gevorgyan",date:"February 10, 2018",discussionId:"2018-02-10-js-functions-scopes-and-var"}}},pathContext:{slug:"/2018-02-10-js-functions-scopes-and-var/"}}}});
//# sourceMappingURL=path---2018-02-10-js-functions-scopes-and-var-980901dbca5c2879e48e.js.map
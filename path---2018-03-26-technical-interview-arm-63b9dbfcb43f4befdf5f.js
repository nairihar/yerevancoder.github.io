webpackJsonp([0x924268a4b7cd],{688:function(n,t){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-03-26-technical-interview-arm/index.md absPath of file >>> MarkdownRemark",html:'<p>Հայ | <a href="../2018-03-26-technical-interview-eng/">Eng</a></p>\n<h1>Տեխնիկական հարցազրույց</h1>\n<h6><strong>Նկարագրություն</strong>: Տվյալ փաստաթուղթը իրենից ներկայացնում է «Տեխնիկական հարցազույց»֊ի սահմանումը, կիրառման ձեւերը, անցկացման մեթոդները, կարեւորությունը եւ ներառում է ընդհանուր խորհուրդներ։</h6>\n<h6><strong>Տերմինաբանություն</strong>: Այսուհետ հարցազրույց անցնող անձին կանվանենք դիմորդ, իսկ հարցազրույց անցկացնող անձին՝ տեխ. մասնագետ։</h6>\n<h6><strong>Նշում</strong>: Նյութը կազմել եմ հիմնվելով իմ փորձի՝ իմ կողմից անցկացրած ավելի քան 100 տեխնիկական հարցազրույցների եւ դիմորդներից ստացած feedback - ների հիման վրա։</h6>\n<hr>\n<h1>Բովանդակություն</h1>\n<ul>\n<li><a href="#%D5%8D%D5%A1%D5%B0%D5%B4%D5%A1%D5%B6%D5%B8%D6%82%D5%B4">Սահմանում</a></li>\n<li>\n<p><a href="#%D4%B1%D5%B6%D6%81%D5%AF%D5%A1%D6%81%D5%B4%D5%A1%D5%B6-%D5%B4%D5%A5%D5%A9%D5%B8%D5%A4%D5%B6%D5%A5%D6%80%D5%A8">Անցկացման մեթոդները</a></p>\n<ul>\n<li><a href="#%D4%B2%D5%A1%D5%B6%D5%A1%D5%BE%D5%B8%D6%80">Բանավոր</a></li>\n<li><a href="#%D5%80%D5%A1%D5%B4%D5%A1%D5%BA%D5%A1%D5%BF%D5%A1%D5%BD%D5%AD%D5%A1%D5%B6-%D5%B4%D5%AB%D5%BB%D5%A1%D5%BE%D5%A1%D5%B5%D6%80">համապատասխան միջավայր</a></li>\n<li><a href="#%D5%8F%D5%A5%D5%AD%D5%B6%D5%AB%D5%AF%D5%A1%D5%AF%D5%A1%D5%B6-%D5%B0%D5%A1%D6%80%D6%81%D5%A1%D5%A4%D6%80%D5%B8%D6%82%D5%B4%D5%B6%D5%A5%D6%80%D5%AB-%D5%B3%D5%AB%D5%B7%D5%BF-%D5%B0%D5%A5%D6%80%D5%A9%D5%A1%D5%AF%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6">Տեխնիկական հարցադրումների ճիշտ հերթականություն</a></li>\n<li><a href="#%D4%B8%D5%B6%D5%A4%D5%B0%D5%A1%D5%B6%D5%B8%D6%82%D6%80-%D5%B0%D5%A1%D6%80%D6%81%D5%A5%D6%80">Ընդհանուր հարցեր</a></li>\n<li><a href="#%D5%8E%D5%A5%D6%80%D5%BB%D5%AB%D5%B6-%D5%B0%D5%A1%D6%80%D6%81%D5%A8">“Վերջին” հարցը</a></li>\n<li><a href="#quiz">Quiz</a></li>\n<li><a href="#task">Task</a></li>\n<li><a href="#%D5%80%D5%A1%D5%B4%D5%A5%D5%B4%D5%A1%D5%BF%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6">Համեմատություն</a></li>\n</ul>\n</li>\n<li><a href="#%D5%8F%D5%A5%D5%AD%D5%B6%D5%AB%D5%AF%D5%A1%D5%AF%D5%A1%D5%B6-%D5%B0%D5%A1%D6%80%D6%81%D5%A1%D5%A6%D6%80%D5%B8%D6%82%D5%B5%D6%81%D5%AB-%D5%AF%D5%A1%D6%80%D5%A5%D6%82%D5%B8%D6%80%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6">Տեխնիկական հարցազրույցի կարեւորություն</a></li>\n<li><a href="#disclaimer">Disclaimer</a></li>\n<li><a href="#%D5%86%D5%B7%D5%B8%D6%82%D5%B4%D5%B6%D5%A5%D6%80">Նշումներ</a></li>\n</ul>\n<hr>\n<h1>Սահմանում</h1>\n<p>Տեխնիկական հարցազրույցը, որպես պրոցես, հետապնդում է հետևյալ նպատակը՝\n<strong>Ֆիքսված ժամանակում մաքսիմալ օբյեկտիվ գնահատել դիմորդի տեխնիկական գիտելիքները ժամանակի տվյալ պահին եւ հնարավոր պոտենցիալը առաջիկա t ժամանակահատվածում։</strong></p>\n<hr>\n<h1>Անցկացման մեթոդները</h1>\n<p>Տեխնիկական հարցազրույցի հիմնական անցկացման մեթոդներն են՝ “Բանավոր”, “Թեստային” ( quiz ) եւ “Տեխնիկական Առաջադրանք” ( task )։ Ցանկացած մեթոդ ունի իր նպատակը եւ անցկացման կարգը։ Վերը նշվածները կարող են անցկացվել, որպես առանձին փուլեր, տարբեր հերթականությամբ, հնարավոր է նաեւ “Թեստային” եւ “Տեխնիկական Առաջադրանք” փուլերի բացակայություն, կախված ընկերության պահանջներից։ Տեխնիկական\nհարցազրույցի հիմնական փուլեր համարվում են “Բանավորը”, որը որպես կանոն համարվում է կարեւոր եւ մինիմալ բաղկացուցիչ մասը, եւ “Տեխնիկական առաջադրանքը”։</p>\n<h3>Բանավոր</h3>\n<h4>Համապատասխան միջավայր</h4>\n<p>Ելնելով վերը նշված սահմանումից՝ տեխ. մասնագետի հիմնական նպատակը դիմողի տեխնիկական գիտելիքների մաքսիմալ օբյեկտիվ գնահատումն է, այսինքն՝ առաջին հերթին պետք է ստեղծել համապատասխան միջավայր, որպեսզի դիմորդը հոգեբանական տեսանկյունից լինի հավասարակշռված վիճակում, հակառակ դեպքում գնահատականը օբյեկտիվ չի կարող համարվել։ Եթե դիմորդը լինի լարված, այդ փաստը կարող է ազդել նրա պատասխանների եւ ինքնաարտահայտման վրա։</p>\n<p>Կոմֆորտ միջավայր ստեղծելու համար.</p>\n<ul>\n<li>Ցանկալի է տեխնիկական հարցազրույցը անցկացնել մեկ կամ երկու տեխ. մասնագետի հետ, բայց ոչ ավել <a href="#%D5%86%D5%B7%D5%B8%D6%82%D5%B4-1">(1)</a>.</li>\n<li>Չսկսել անմիջապես տեխնիկական հարցերից։</li>\n</ul>\n<details>\n  <summary>Օրինակ. </summary>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Բարեւ Ձեզ։ ( ժպիտ :) )</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- Բարեւ Զեզ։</td>\n</tr>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Իմ անունը Կարեն է։</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- Հաճելի է, Արմեն։</td>\n</tr>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Հաճելի է Արմեն ջան, ի՞նչպես եք։</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- Լավ, շնորհակալություն, Դու՞ք։</td>\n</tr>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Լավ, շնորհակալություն, ինչպե՞ս է տրամադրությունը։</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- Մարտական :)</td>\n</tr>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Օքայ, Արմեն ջան, լինելու է տեխնիկական հարցազրույց, հիմնականում JavaScript - ից, բայց մինչեւ ֆորմալ հարցադրումներին անցնելը, կխնդրեմ ծանոթանանք, լա՞վ։ Մի քիչ պատմեք Ձեր մասին, կրթություն, փորձ եւ այլն։</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- …</td>\n</tr>\n</tbody>\n</table>\n</details>\n<ul>\n<li>հարցազրույցի ընթացքում մաքսիմալ խուսափեք դիմորդի արտահայտած միտքը ժխտելուց (“Սխալ եք”, “Պնդումը ճիշտ չէր” եւ այլն)։ Հարցազրույցի վերջում, դիմորդի ցանկությամբ, կարող եք անդրադառնալ նրա բոլոր սխալներին, հարկ եղած դեպքում տալ խորհուրդներ եւ այլն <a href="#%D5%86%D5%B7%D5%B8%D6%82%D5%B4-2">(2)</a>։ Միեւնույն ժամանակ հարցազրույցը չպետք է իրենից ներկայացնի միակողմանի հարցադրումներ։ Օրինակ.  </li>\n</ul>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Տեխ. մասնագետ</strong></td>\n<td>- Խնդրում եմ ներկայացրեք JavaScript - ը, որպես ծրագրավորման լեզու, մի քանի նախադասությամբ, Ձեր բառերով, ինչպես Ձեզ հարմար է։</td>\n</tr>\n<tr>\n<td><strong>Դիմորդ</strong></td>\n<td>- Դե, JavaScript - ը սկրիպտային լեզու է, արագ է, օգտագործվում է զննարկիչում, նաեւ BackEnd - ում, եւ այլն։</td>\n</tr>\n</tbody>\n</table>\n<p>Վերը նշված պատասխանը տեխնիկական տեսանկյունից, ոչ կոռեկտ, անբավարար պատասխան է։ Ցանկալի, համեմատաբար ավելի պռոֆեսիոնալ եւ սպասելի պատասխան կարող էր լինել հետեւյալը։</p>\n<p>- JavaScript - ը բազմապարադիգմ, ինտերպրետացվող, միահոսք ու դինամիկ տիպիզացված ծրագրավորման լեզու է։</p>\n<p>Դիմորդի պատասխանի եւ ենթադրյալ ճիշտ պատասխանի տարբերությունը դեռ բավարար չէ ենթադրելու համար, որ դիմորդը չգիտի այնպիսի գաղափարների մասին, ինչպիսիք են՝ “բազմապարադիգմ” - ը, “ինտերպրետացվող” - ը, “միահոսք” - ը, “դինամիկ տիպիզացված” - ը եւ այլն։ Հաջորդ հարցը։</p>\n<p>- Նայեք, գրեթե բոլոր ծրագրավորման լեզուներն ունեն ընդհանուր բնորոշիչներ, դրանք են - դինամիկ տիպիզացված է, թե՞ ստատիկ, միահոսք է, թե՞ բազմահոսք, ինտերպրետացվող է, թե՞ կոմպիլացվող եւ այլն։ Եկեք, փորձենք պատասխանել հետեւյալ հարցերին, խոսակցության target դիտարկելով JavaScript - ը։ Սկսենք առաջինից - դինամիկ տիպիզացված է, թե՞ ստատիկ։  </p>\n<h4>Տեխնիկական հարցադրումների ճիշտ հերթականություն</h4>\n<p>Տեխնիկական հարցադրումների ճիշտ հերթականությունը ( բարդության տեսանկյունից ) հնարավորություն է տալիս հնարավորինս ստույգ գնահատել դիմորդի գիտելիքները։ Սովորաբար խնդիր է առաջանում ոչ թե իմանալ, թե արդյոք դիմորդը գիտի կամ չգիտի տվյալ խնդիրը, այլ քանի տոկոսով գիտի։ Նման դեպքերում պետք է կարողանալ ճիշտ գնահատել տոկոսային հարաբերակցությունը, որի համար պետք է, որ տվյալ խնդրին վերաբերող հարցերը լինեն բարդության տեսանկյունից աճման կարգով դասավորված, իսկ նրանց սկզբնակետը կամ հաջորդին անցման քայլի չափը որոշվում է դիմորդի տեխնիկական մակարդակից (junior, middle, senior եւ այլն)։</p>\n<p>Հաճախ հանդիպող խնդիր.\nսովորաբար ավելի ցածր մակարդակի մասնագետին տրվում է «բարդ» հարց, որին չպատասխանելով, տվյալ խնդրի վերաբերյալ դիմորդի գիտելիքները գնահատվում է 0, այնինչ դիմորդը տվյալ խնդրի մասին ուներ որոշ պատկերացումներ եւ գիտելիքներ։</p>\n<p>Տեխնիկական հարցադրումների ճիշտ հերթականության կազմակերպումը պատկերացնելու համար հարցերը բաժանենք երկու խմբի։</p>\n<ol>\n<li>Կոնկրետ թեմային վերաբերող հարցեր, եւ այդ հարցերի դասակարգում ըստ բարդության։</li>\n</ol>\n<p>Օրինակ ( որպես օրինակ կդիտարկվի setTimeout - ը WebApi - ից )։<br>\nՀնարավոր հարցերը կապված setTimeout - ի հետ ըստ ճիշտ հերթականության.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Նկարագրեք setTimeout - ը որպես ֆունկցիա։\n<br/>\n*\n ոչ կարեւոր հարցեր: \n<br/>\n1. Կարո՞ղ է setTimeout - ի առաջին արգումենտը ֆունցիա չլինել։ \n<br/>\n2. գոյություն ու՞նի երրորդ արգումենտ setTimeout - ի համար, եթե այո ապա ինչ է իրենից ներկայացնում եւ ունի արդյոք սահմանափակումներ, եթե այո ապա ինչպիսի։</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Տվեք մաթեմատիկական պնդում setTimeout - ի երկրորդ արգումենտի համար։</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- setTimeout - ի աշխատանքի մանրամասն նկարագրություն։</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Ռեկուրսիվ setTimeout եւ setInterval։</td>\n</tr>\n<tr>\n<td>5</td>\n<td>- setTimeout(fn, 0) - ն որպես բացառություն։</td>\n</tr>\n<tr>\n<td>6</td>\n<td>- Dom minimum timeout value.</td>\n</tr>\n<tr>\n<td>7</td>\n<td>- setImmediate, setImmediate - ի polyfill, polyfill - ի իմպլեմենտացիան։</td>\n</tr>\n<tr>\n<td>8</td>\n<td>- process.nextTick, Promise.resolve(). Համեմատությունը setTimeout() - ի հետ</td>\n</tr>\n<tr>\n<td>9</td>\n<td>- Task, MicroTask, տարբերությունները, կատարման հերթականությունը, իմպլեմենտացիան տարբեր զննարկիչներում։</td>\n</tr>\n<tr>\n<td>10</td>\n<td>- setTimeout - ների կատարման հերթականությունը հերթից, FIFO, LIFO, random</td>\n</tr>\n</tbody>\n</table>\n<p>Եթե չկազմենք ճիշտ հերթականություն, եւ օրինակ սկսենք խոսել setTimeout - ի մասին սկսելով 6 - րդ հարցից կամ նրա մասնավոր դեպքից, օրինակ.</p>\n<p>- Խնդրում եմ, նշեք DOM<em>MIN</em>TIMEOUT<em>VALUE - ը կամ DOM</em>CLAMP<em>TIMEOUT</em>NESTING_LEVEL - ը Google Chrome - ում եւ FireFox֊ում։</p>\n<p>ապա հարցի սխալ պատասխանը կամ պատասխանի բացակայությունը չի կարող տալ ոչ մի ինֆորմացիա դիմորդի setTimeout - ի մասին ունեցած գիտելիքների մասին։</p>\n<p><strong>Օգտագործեք հարցադրումների ճիշտ հերթականություն։</strong></p>\n<ol start="2">\n<li>Թեմաներ, որոնց կարող եք անդրադառնալ, միայն եթե դիմորդը համապատասխանում է տվյալ մակարդակին։</li>\n</ol>\n<p>Օրինակ - հարցեր Engine - ից</p>\n<ul>\n<li>\n<p>Parsing</p>\n<ul>\n<li>Lazy Parsing</li>\n<li>Pre parsing</li>\n<li>Full parsing</li>\n</ul>\n</li>\n<li>Tockenazing/Lexing</li>\n<li>AST ( Abstract Syntax Tree )</li>\n<li>\n<p>JIT (Just in Time compiler)</p>\n<ul>\n<li>Compile + Optimization</li>\n<li>Re-optimization / De-optimization</li>\n</ul>\n</li>\n<li>\n<p>Հիշողության ավտոմատ կառավարում - Automate Memory Management - GC</p>\n<ul>\n<li>համեմատություն Manual memory management - ի հետ</li>\n<li>առավելություններ/թերություններ</li>\n</ul>\n</li>\n<li>\n<p>Web Assemble</p>\n<ul>\n<li>toolchain</li>\n<li>emscripten</li>\n<li>clang</li>\n<li>llvm</li>\n<li>Աշխատանքի մանրամասն նկարագրություն։</li>\n</ul>\n</li>\n<li>եւ այլն</li>\n</ul>\n<h4>Ընդհանուր հարցեր</h4>\n<p>Հիմնական հարցերը տրվում են դիտարկվող position - ին վերաբերող հարցերից առանձին ( առաջ կամ հետո ), կարող է անցկացվել նաեւ առանձին փուլով։<br>\nՎերջիններն իրենց հերթին բաժանվում են երկու խմբի.</p>\n<ol>\n<li>\n<p>Ընդհանուր ՏՏ զարգացվածության հարցեր</p>\n<ul>\n<li>Ալգորիթմների տեսություն</li>\n<li>Թյուրինգի մեքենա</li>\n<li>Վերջավոր ավտոմատներ</li>\n<li>“Բաժանիր եւ տիրիր” - Divide-and-Conquer</li>\n<li>Սորտավորման ալգորիթմներ</li>\n<li>…</li>\n<li>Օպերացիոն համակարգեր</li>\n<li>Գրաֆների տեսություն</li>\n<li>Գրաֆ</li>\n<li>Ծառ</li>\n<li>\n<p>Փնտրման ալգորիթմներ</p>\n<ul>\n<li>DFS - Depth-First Search</li>\n<li>BFS - Breadth-First Search</li>\n</ul>\n</li>\n<li>Կարճագույն ճանապարհ</li>\n<li>Մինիմալ կմախքային ենթածառ</li>\n<li>…</li>\n<li>Տվյալների կառուցվածք</li>\n<li>Հերթ</li>\n<li>Ստեկ</li>\n<li>Ցուցակ</li>\n<li>B-Tree</li>\n<li>…</li>\n<li>Տվյալների հենքեր</li>\n<li>Հավանականության տեսություն</li>\n<li>Խաղերի տեսություն</li>\n<li>Դիսկրետ մաթեմատիկա</li>\n<li>Ֆունկցիոնալ ծրագրավորման հիմունքներ</li>\n<li>Կլասիֆիկացիա / Կանխատեսման ալգորիթմներ - Մեքենայական ուսուցում</li>\n</ul>\n<p><strong>Նշում:</strong> * Տվյալ հարցաշարը կախված ընկերության պահանջներից, դիտարկվող position - ից եւ դիմորդի տեխնիկական մակարդակից, կարող է փոխվել։</p>\n</li>\n<li>\n<p>Հարցեր կապված դիմորդի ՏՏ նախասիրություննեի հետ</p>\n</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Նախընտրելի օպերացիոն համակարգ</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Նախընտրելի տեքստային խմբագրիչ կամ IDE</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- Բացի Ձեր հիմնական ծրագրավորման լեզվից, նշեք այլ լեզուներ, որոնցով հետաքրքրված եք կամ կցանկանայիք աշխատել։</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Ինչպե՞ս եք հետեւում նորություններին։ Ի՞նչ ռեսուրսներից եք օգտվում։</td>\n</tr>\n<tr>\n<td>5</td>\n<td>- Ի՞նչ նպատակների է ծառայում Ձեր GitHub account - ը ( եթե այն կա )</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Նշում:</strong> Տվյալ հարցաշարի ցանկացած հարց, որպես առանձին հարց, հնարավոր է բավարար ինֆորմացիա չտա դիմորդի մասին։ Սակայն բոլոր հարցերի պատասխանները, որպես մեկ ամբողջություն, կարող է թույլ տալ հասկանալ դիմորդի աշխարհայացքը ՏՏ ոլորտում։ Օրինակ. դիտարկեք երկու տարբեր դիմորդների պատասխաններ։</p>\n<p>Տարբերակ 1.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Windows</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Microsoft Visual Studio, WebStorm, Notepad++</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- C#, Visual Basic, PHP</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Փնտրում եմ Google - ում, ինչ ինձ պետք է։ Կարդում եմ Toster.ru, եւ հիմնականում նայում եմ screencast - եր Youtube.com - ում։</td>\n</tr>\n</tbody>\n</table>\n<p>Տարբերակ 2.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Linux, Unix-like operating systems.</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Vim, Sublime Text կամ այլ տեքստային խմբագրիչ, բայց ոչ IDE</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- C/C++, Rust, OCaml, Elixir (Erlang/OPT), Python</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Medium, Hackernoon, Habr, Twitter… subscribe եղած եմ Google - ի եւ Mozilla - ի Youtube - ի channel - ներին։</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Նշում:</strong> Օրինակները բերված են իրական կյանքից։</p>\n<h4>“Վերջին” հարցը</h4>\n<p><strong>- Խնդրում եմ գնահատեք Ձեր տեխնիկական գիտելիքները 0 - 10 բալանոց համակարգում։</strong></p>\n<p>Հարցազրույցի ընթացքում տեխ. մասնագետի մոտ ձեւավորվելու է գնահատական, որը կհամարվի ենթադրյալ օբյեկիվ գնահատականը, կարեւոր է ստանալ նաեւ այդ գնահատականը դիմորդի կողմից։ Եւ ստացված երկու գնահատականների համեմատությունից կարելի անել հավելյալ ենթադրություններ։</p>\n<h3>Task</h3>\n<p>Տեխնիկական առաջադրանքը իրենից ներկայացնում է դիտարկվող position - ին համապատասխան տեխնիկական խնդրի ներկայացում։ Տվյալ մեթոդի նպատակը դիմորդի տեխնիկական գիտելիքների գնահատումն է պրակտիկ առաջադրանքների կատարման տեսանկյունից։<br>\nԴրանք կարող են լինել.</p>\n<ul>\n<li>Code quality</li>\n<li>Coding style</li>\n<li>Code architecture</li>\n<li>Naming convention</li>\n<li>File/Folder structure</li>\n<li>…</li>\n</ul>\n<h5>Կարեւոր կետեր</h5>\n<ul>\n<li>Խնդրի ժամանակային տեսանկյունից գնահատումը ( estimation ), պետք է թողնել դիմորդի հայեցողությանը։ Նրա խնդրի բարդության գնահատականը եւ ժամանակ / որակ հարաբերակցությունը կարող է հանդիսանալ հավելյալ տեղեկություն։</li>\n<li>Խնդրի բարդությունը չի հանդիսանում գլխավոր նպատակը, եւ հիմնականում լինում է ավելի ցածր քան դիմորդի տեխնիկական մակարդակը։</li>\n<li>Առաջադրանքի պատասխանները ցանկալի է ստուգվեն մի քանի տեխնիկական մասնագետների կողմից ավելի օբյեկտիվ գնահատական ստանալու համար։</li>\n<li>Առաջադրանքը պետք է ունենա ֆունկցիոնալ եւ տեխնիկական մասնագիր։</li>\n</ul>\n<h3>Quiz</h3>\n<p>Quiz կամ թեստային աշխատանքը իրենից ներկայացնում է ինչ-որ քանակությամբ հարցերի հաջորդականություն հնարավոր պատասխաններով։ Տվյալ մեթոդը կարող է օգտագործվել նախընտրական փուլերի ֆիլտրացիայի համար, կամ որպես հավելյալ ինֆորմացիա հիմնական փուլերին։</p>\n<h3>Համեմատություն</h3>\n<ul>\n<li>Quiz</li>\n<li>Առավելություն<br>\nՄինիմալ ջանքերի գործադրում։</li>\n<li>Թերություն<br>\nՀաճախ տրվող հարցերին պատասխանելը եւ բանավոր խոսքի բացակայությունը հնարավոր է, որ չլինի օբյեկտիվ գնահատական։</li>\n<li>Task</li>\n<li>Առավելություն<br>\nՊրակտիկ աշխատանքի գնահատման հնարավորություն։</li>\n<li>Թերություն<br>\nՍովորաբար “տեխնիկական աշխատանք” - ը կատարվում է remote, եւ վերահսկողության բացակայությունն ու կողմնակի օգնություններից օգտվելու հնարավորության առկայությունը ազդում են աշխատանքի գնահատականի հիմնավոր լինելու վրա։</li>\n<li>Oral</li>\n<li>Առավելություն<br>\nՏեսական գիտելիքների օբյեկտիվ գնահատում, բանավոր խոսքի առկայություն։</li>\n<li>Թերություն<br>\nՈրոշ դեպքերում բարդություն է առաջանում գնահատել դիմորդի գիտելիքները, նրա՝ բանավոր խոսքի կամ ինքնաարտահայտման խնդիրներից ելնելով։</li>\n</ul>\n<hr>\n<h1>Տեխնիկական հարցազրույցի կարեւորություն</h1>\n<p>Ցանկացած տեխնիկական հարցազրույցի անցկացման կարգ միարժեքորեն ցույց է տալիս տվյալ ընկերության տեխնիկական մակարդակը։<br>\n<br />\nՀարցազրույց անցկացնող անձի գնահատականի վրա հիմնվելով՝ ընկերությունը կարող է աշխատանքի ընդունել դիմողին։ Հարցազրույց անցկացնող անձի սխալ գնահատականը հետագայում կարող է առաջացնել խնդիրներ։</p>\n<hr>\n<h1>Disclaimer</h1>\n<p>Փաստաթուղթը նպատակ չի հետապնդում կազմելու տեխնիկական հարցազրույցի կարգավորված ընթացք կամ անցկացման փուլեր կոնկրետ ծրագրավորման լեզվի, տեխնոլոգիայի կամ ընկերության համար։ Վերը նշված կետերը հանդիսանում են հիմնական դրույթներ ՏՏ ոլորտում տեխնիկական հարցազրույցների համար, իսկ JavaScript - ը այս դեպքում ուղղակի հանդիսանում էր օրինակ։ ( JavaScript - ի ավելի մանրամասն հարցաշար, որպես հարցազրույցի ուղեցույց կարող եք գտնել հետեւյալ <a href="https://github.com/SurenAt93/Technical-Interview/blob/master/javascript.md">ֆայլում</a> )։ Հեղինակը փորձել է չսահմանել տեխնիկական հարցազրույցի անցկացման փուլերը փաստաթղթի ճկունությունը պահելու համար։ Հարցազրույցի անցկացման փուլերի քանակը եւ հերթականությունը կարող է կախված լինել ծրագրավորման լեզվից, տեխնոլոգիայից, դիմորդի տեխնիկական մակարդակից, ընկերության պահանջներից ու ռեսուրսներց։ Վերը նշված կետերը կհամարվեն ճիշտ նաեւ կոնկրետ library - ների կամ framework - երի հետ կապված հարցազրույցների համար։ Օրինակ.</p>\n<p>JavaScript - ReactJs / NodeJs and etc.<br>\nPython - Django and etc.<br>\nRust - Exonum and etc.<br>\n…</p>\n<hr>\n<h1>Նշումներ</h1>\n<h6>Նշում 1</h6>\n<p>Երկուսից ավելի տեխ. մասնագետների ներկայությունը սենյակում (որում անցկացվելու է հարցազրույցը) կարող է ստեղծել ճնշող մթնոլորտ։ Երկրորդ տեխ. մասնագետի ներկայությունը ցանկալի է ավելի օբյեկտիվ կարծիք կազմելու համար։ Սակայն, եթե տեխ. մասնագետը փորձառու է եւ կարող է անցկացնել հարցազրույցը միայնակ, ապա մեկ տեխ. մասնագետի ներկայությունը կլինի ավելի օպտիմալ։</p>\n<h6>Նշում 2</h6>\n<p>Հարցազրույցի վերջում, անկախ դիմորդի գնահատականից կամ նրա պոտենցիալ թեքնածու լինել կամ չլինելուց, տրամադրեք 5 րոպե խորհրդակցության համար, նշեք կատարված սխալները, տվեք խորհուրդներ, ուղղորդեք եւ ցույց տվեք այն բացերը, որն ունի տեխիկական գիտելիքներում։ Ուղարկեք համապատասխան հոդվածների հղումներ, գրքեր կամ այլ ռեսուրսներ բացը լրացնելու համար։ Դարձնենք աշխարհը փոքր-ինչ ավելի լավը :)</p>\n<p>Շնորհակալություն։</p>\n<hr>\n<h6>This post in <a href="https://github.com/SurenAt93/Technical-Interview">GitHub</a></h6>',frontmatter:{title:"Technical Interview - Armenian",tags:"technical interview",author:"Suren Atoyan",date:"March 26, 2018",discussionId:"2018-03-26-technical-interview-arm"}}},pathContext:{slug:"/2018-03-26-technical-interview-arm/"}}}});
//# sourceMappingURL=path---2018-03-26-technical-interview-arm-63b9dbfcb43f4befdf5f.js.map
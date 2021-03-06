import React from 'react'

export const CuratedList = () => {
    console.log('hi')
    return (<><div className="container " style={{ width: "100vw", textAlign: "center" }}>
        <h1 id="awesome-competitive-programming-awesome-https-cdn-rawgit-com-sindresorhus-awesome-d7305f38d29fed78fa85652e3a63e154dd8e8829-media-badge-svg-https-github-com-sindresorhus-awesome-">Awesome Competitive Programming </h1>
        <p>A curated list of awesome <code>Competitive Programming</code>, <code>Algorithm</code> and <code>Data Structure</code> resources.</p>
        <p>Created with a view to connecting people to information, this list below contains a complete collection of all the fantastic resources I&#39;ve collected over the course of my 11-year competitive programming career. I hope you&#39;ll find it useful :)</p>
        <p><a href="https://www.quora.com/What-is-competitive-programming-2">What is competitive programming? - Quora</a></p>
        <h2 id="table-of-contents">Table of Contents</h2>
        <div className="container" style={{ width: "100vw", textAlign: "left" }}>
            <ul>
                <li><a href="#list-of-lists">List of Lists</a></li>
                <li><a href="#syllabuses">Syllabuses</a></li>
                <li><a href="#tutorial-websites">Tutorial Websites</a></li>
                <li><a href="#open-courses">Open Courses</a><ul>
                    <li><a href="#open-courses-for-algorithms-and-data-structures">Open Courses for Algorithms and Data Structures</a></li>
                </ul>
                </li>
                <li><a href="#books">Books</a><ul>
                    <li><a href="#books-for-algorithms">Books for Algorithms</a> | <a href="#books-for-mathematics">Books for Mathematics</a></li>
                </ul>
                </li>
                <li><a href="#sites-for-practice">Sites for Practice</a><ul>
                    <li><a href="#problem-classifiers">Problem Classifiers</a> | <a href="#contest-calendars">Contest Calendars</a></li>
                </ul>
                </li>
                <li><a href="#camps-and-trainings">Camps and Trainings</a></li>
                <li><a href="#sites-for-questions">Sites for Questions</a></li>
                <li><a href="#implementations">Implementations</a></li>
                <li><a href="#language-specifics">Language Specifics</a><ul>
                    <li><a href="#cc">C/C++</a> | <a href="#java">Java</a> | <a href="#miscellaneous">Miscellaneous</a></li>
                </ul>
                </li>
                <li><a href="#tools">Tools</a><ul>
                    <li><a href="#ides">IDEs</a> | <a href="#personal-use">Personal use</a> | <a href="#contest-preparation">Contest Preparation</a></li>
                </ul>
                </li>
                <li><a href="#community">Community</a><ul>
                    <li><a href="#blogs">Blogs</a> | <a href="#youtube-and-livestreams">Youtube and Livestreams</a> | <a href="#quora">Quora</a></li>
                </ul>
                </li>
                <li><a href="#other-awesome-resources">Other Awesome Resources</a> <ul>
                    <li><a href="#articles">Articles</a> | <a href="#faqs">FAQs</a> | <a href="#awesome-lists">Awesome Lists</a> | <a href="#interview-questions">Interview Questions</a></li>
                </ul>
                </li>
                <li><a href="#license">License</a></li>
            </ul>
        </div>
        <h1 id="list-of-lists">List of Lists</h1>
        <blockquote>
            <p>Awesome curated lists classified by topics.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/13529">Good Blog Post Resources about Algorithm and Data Structures - Codeforces</a></td>
                    <td>A collection of fantastic tutorial blog posts written by Codeforces users. Some intriguing ones include Palindromic Trees, Policy Based Data Structures, and a lot more.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/57282">All of the good tutorials found on codeforces - Codeforces</a></td>
                    <td>Another good collection of tutorial blog posts written by Codeforces users.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.quora.com/What-is-a-list-of-data-structures-that-a-competitive-programmer-must-know/answer/Sameer-Gulati-3">Data Structures and Algorithms - CodeChef Discuss</a></td>
                    <td>A very complete list of competitive programming resources. A must-have in your browser bookmark.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.geeksforgeeks.org/how-to-prepare-for-acm-icpc/">How to prepare for ACM - ICPC? - GeeksforGeeks</a></td>
                    <td>A detailed walk-through of the preparations for ACM-ICPC.</td>
                </tr>
            </tbody>
        </table>
        {/* </div> */}
        <h1 id="syllabuses">Syllabuses</h1>
        <blockquote>
            <p>Find out what topics you need to learn.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://people.ksp.sk/~misof/ioi-syllabus/">IOI Syllabus</a></td>
                    <td>A detailed syllabus on which IOI contestants will be tested. This is still somewhat relevant to ACM-ICPC.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.geeksforgeeks.org/how-to-prepare-for-acm-icpc/">How to prepare for ACM - ICPC? - GeeksforGeeks</a></td>
                    <td>A detailed walk-through of the preparations for ACM-ICPC.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://docs.google.com/document/d/1_dc3Ifg7Gg1LxhiqMMmE9UbTsXpdRiYh4pKILYG2eA4/edit">Programming Camp Syllabus</a></td>
                    <td>A list of important topics in competitive programming with exercise problems.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://goo.gl/unDETI">Juniors Training Sheet</a>, by <a href="https://sites.google.com/site/mostafasibrahim/">Mostafa Saad Ibrahim</a></td>
                    <td>~800 ordered problems for newcomers to be good up to Div2-D</td>
                </tr>
            </tbody>
        </table>
        <h1 id="tutorial-websites">Tutorial Websites</h1>
        <blockquote>
            <p>Awesome websites with great tutorials.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{
            fontSize: 'smaller',
            width: '100%'
        }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.topcoder.com/community/data-science/data-science-tutorials/">Topcoder Data Science Tutorials</a></td>
                    <td>A list of tutorials written by respected Topcoder members. Many top programmers started learning data sciences from here.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://e-maxx.ru/algo/">E-Maxx (Russian)</a>, <a href="http://cp-algorithms.com/">(English)</a></td>
                    <td>A tutorial website widely used and referenced in the Russian-speaking competitive programming community. Most of the articles of the original site have been translated into English, Google Translate works okay for the remaining ones.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">Algorithms - GeeksforGeeks</a></td>
                    <td>A website with a large archive of nicely written articles on different topics. It is a great complimentary resource for algorithm courses.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://wcipeg.com/wiki/Special:AllPages">PEGWiki</a></td>
                    <td>A website with amazing in-depth wiki-like writeups on many topics. It&#39;s far better than those on Wikipedia in my opinion.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.hackerearth.com/practice/notes/trending/">Notes - HackerEarth</a></td>
                    <td>A great crowdsourcing platform for tutorials. Also visit <a href="https://www.hackerearth.com/practice/codemonk/">Code Monk</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://www.usaco.org/">USA Computing Olympiad (USACO)</a></td>
                    <td>Contains several training pages on its website which are designed to develop one&#39;s skills in programming solutions to difficult and varied algorithmic problems at one&#39;s own pace.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://medium.com/basecs">basecs</a></td>
                    <td>A blog with in-depth, illustrated tutorials on basic algorithms and data structures.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.commonlounge.com/discussion/d4a14f601eb44281b6c579e73d126cca/main?r=acp">Competitive Programming - Commonlounge</a></td>
                    <td>Short video tutorials for beginner and intermediate concepts. Advanced tutorials selected from the best ones available on various CP blogs.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.mii.lt/olympiads_in_informatics/index.html">OLYMPIADS IN INFORMATICS</a></td>
                    <td>An international journal focused on the research and practice of professionals who are working in the field of teaching and learning informatics to talented student.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://algolist.manual.ru/">algolist (Russian)</a></td>
                    <td>A Russian website devoted to algorithms of all sorts. Some topics listed on this website seems pretty interesting.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://web.ntnu.edu.tw/~algo/">??????????????? (Algorithm Notes) (Chinese)</a></td>
                    <td>One of the most popular tutorial websites among the Taiwanese competitive programming community. The maintainer for this website spends immense efforts on researching algorithms.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://download.csdn.net/album/detail/657/1/1">????????????????????? 1999-2015 (Papers from Chinese IOI training camps) (Chinese)</a></td>
                    <td>Papers from the Chinese IOI training camps. It&#39;s interesting for the fact that one can tell different regions emphasize different things.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://github.com/mostafa-saad/MyCompetitiveProgramming">Mini-Editorials</a>, by <a href="https://sites.google.com/site/mostafasibrahim/">Mostafa Saad Ibrahim</a> trainees</td>
                    <td>Solutions with mini-editorials for many problems, including UVA/SPOJ/IOI/Olympiad problems</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://oi-wiki.org/">OI Wiki (Competitive Programming) (Chinese)</a></td>
                    <td>OI Wiki is committed to being a free and open continuously updated programming competition (competitive programming) knowledge integration site. This wiki is a sort of companion or guide for the competitive programmer who&#39;s trying to learn something</td>
                </tr>
            </tbody>
        </table>
        <h1 id="open-courses">Open Courses</h1>
        <blockquote>
            <p>Consider beginning your competitive programming journey with these awesome courses!</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " >
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.hackerearth.com/practice/codemonk/">Code Monk</a>, by HackerEarth</td>
                    <td>A fantastic step-by-step tutorial on the essential topics in competitive programming.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://web.stanford.edu/class/cs97si/">Stanford CS 97SI: Introduction to Competitive Programming Contests</a></td>
                    <td>Offers comprehensive lecture slides and a short list of exercise problems.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.edx.org/course/how-to-win-coding-competitions-secrets-of-champions-0">How to Win Coding Competitions: Secrets of Champions</a></td>
                    <td>A course by ITMO University on competitive coding on edX.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.youtube.com/playlist?list=PLi0ZM-RCX5nsTc2Z6woHr5qoF6n3b-thO">Codechef&#39;s Indian Programming Camp</a></td>
                    <td>Video Lectures from <a href="https://blog.codechef.com/2016/08/03/lectures-from-indian-coding-camp/">Codechef&#39;s Indian Programming Camp 2016</a>. Lectures given by top competitive programmers like Sergey Kulik, Kevin Charles Atienza and Anudeep Nekkanti. Primarily focused on exploring these concepts by applying them to actual competitive contest problems.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://algo.is/competitive-programming-course/">Reykjavik T-414-??FLV: A Competitive Programming Course</a></td>
                    <td>An awesome course taught by <a href="https://algo.is">Bjarki ??g??st Gu??mundsson (SuprDewd)</a>. These lectures feature neat slides and a nice list of problems to practice.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://sites.google.com/site/mzshieh/courses/problem-solving-and-programming-techniques-spring-2014">NCTU DCP4631: Problem Solving and Programming Techniques</a></td>
                    <td>A course on basic topics featuring good lecture slides.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://github.com/mostafa-saad/ArabicCompetitiveProgramming">Materials (English)</a> from <a href="https://www.youtube.com/user/nobody123497">Arabic Competitive Programming YouTube Channel</a></td>
                    <td>Some materials (slides &amp; source codes) covering a broad range of algorithmic topics by Mostafa Saad Ibrahim.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="open-courses-for-algorithms-and-data-structures">Open Courses for Algorithms and Data Structures</h3>
        <table className=" table table-dark table-bordered table-hover " style={{
            fontSize: 'smaller',
            width: '100%'
        }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://github.com/prakhar1989/awesome-courses#algorithms">prakhar1989/awesome-courses#algorithms</a></td>
                    <td>A fantastic list of open courses offered by notable institutions (MIT, Stanford, UC Berkeley ... etc.).</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/">MIT SMA 5503: Introduction to Algorithms</a></td>
                    <td>Lectured by Prof. Charles Leiserson (one of the coauthors of Introduction to Algorithms) and Prof. Erik Demaine (a brilliant professor who has made remarkable breakthroughs in data science), the course offers great materials, accompanied by intuitive and comprehensive analyses.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://jeffe.cs.illinois.edu/teaching/algorithms/">UIUC Algorithm Course</a></td>
                    <td>lecture notes, homeworks, exams, and discussion problems covering a broad range of algorithmic topics</td>
                </tr>
            </tbody>
        </table>
        <h1 id="books">Books</h1>
        <blockquote>
            <p>A list of recommended books for competitive programming.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://cpbook.net/">Competitive Programming</a>, by Steven and Felix Halim</td>
                    <td>This book contains a collection of relevant data structures, algorithms, and programming tips. It&#39;s a well-received book. ... The first edition is free for <a href="http://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp1.pdf">download (pdf)</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638">Programming Challenges: The Programming Contest Training Manual</a>, by Steven Skiena and Miguel Revilla</td>
                    <td>This book includes more than 100 programming challenges, as well as the theory and key concepts necessary for approaching them. Problems are organized by topic, and supplemented by complete tutorial material.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://cses.fi/book/index.html">Competitive Programmer&#39;s Handbook</a>, by Antti Laaksonen</td>
                    <td>An introduction to competitive programming for aspiring IOI and ICPC contestants. Free to <a href="https://cses.fi/book/book.pdf">download (pdf)</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Computational-Geometry-Applications-Mark-Berg/dp/3540779736">Computational Geometry: Algorithms and Applications</a>, by Mark de Berg, Otfried Cheong, Marc van Kreveld, Mark Overmars</td>
                    <td>This is a well-written book which covers a broad range of computational geometry problems.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://comscigate.com/Books/contests/icpc.pdf">The Hitchhiker???s Guide to the Programming Contests</a>, by Nite Nimajneb</td>
                    <td>This book is free for <a href="http://comscigate.com/Books/contests/icpc.pdf">download (pdf)</a>. This book covers various topics relevant to competitive programming.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://goo.gl/M4yfbr">???????????????????????????????????????????????????????????? (Japanese)</a>, by ????????????, ????????????, ????????????</td>
                    <td>An absolutely phenomenal book. The contents, organized in a very coherent manner, are nothing short of amazing. ... ?????????????????????????????????????????????????????????????????????????????????????????????????????? (Chinese Traditional)</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://www.tup.com.cn/booksCenter/book_05568701.html">???????????????????????? (Chinese)</a>, by ?????????</td>
                    <td>The Art of Algorithms and Programming Contests (English), ???????????????????????????????????????????????????????????? (Chinese Traditional)</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.cn/????????????????????????-????????????-?????????/dp/B009SJJGOU">?????????????????????????????????????????? (Chinese)</a>, by ?????????, ??????</td>
                    <td>???????????????????????????????????????????????????????????????????????????????????? (Chinese Traditional)</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://goo.gl/O1tr8v">?????????????????????????????? (Chinese)</a>, by ?????????, ??????</td>
                    <td>An old-time classic. It&#39;s old but the contents in this book are still considered to be very difficult by today&#39;s standards.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="books-for-algorithms">Books for Algorithms</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://mitpress.mit.edu/books/introduction-algorithms">Introduction to Algorithms</a>, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein</td>
                    <td>Also known as CLRS (taken from name initials), this book is often referred to as the &quot;bible&quot; for algorithms and data structures. It&#39;s one of the most popular textbooks for university algorithm courses. This book covered various algorithms and data structures in great detail. The writing is more rigorous and can be difficult to some.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://amzn.to/VjhioK">Algorithm Design</a>, by Jon Kleinberg and ??va Tardos</td>
                    <td>This book revolves around techniques for designing algorithms. It&#39;s well-organized and written in a clear, understandable language. Each chapter is backed with practical examples and helpful exercises. The chapter on network flow is highly praised by lots. ... The lecture slides that accompany the textbook are available on its <a href="http://www.cs.princeton.edu/~wayne/kleinberg-tardos/">official website</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693">The Algorithm Design Manual</a>, by Steven S. Skiena</td>
                    <td>The book is written in more readable text. Some find it comprehensive than other books. You can also find some good resources (including the author&#39;s own video lectures) on its <a href="http://www.algorist.com">official website</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X">Algorithms</a>, by Robert Sedgewick and Kevin Wayne</td>
                    <td>This book is neatly categorized, coupled with elaborate explanations and fantastic illustrations. It is used in some IOI training camps as a textbook.</td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="https://www.manning.com/books/algorithms-and-data-structures-in-action">Algorithms and Data Structures in Action</a>, by Marcello La Rocca</td>
                    <td>This book provides a different approach to algorithms, balancing theory with a more practical angle, with a section per-chapter focusing on how to apply algorithms to real-world use cases that can be found in your daily work, or in competitive programming; it also presents a blend of classic, advanced, and new algorithms.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://jeffe.cs.illinois.edu/teaching/algorithms/">Algorithms</a>, by Jeff Erickson</td>
                    <td>A free electronic version of a self-published textbook licensed under CC by 4.0. This is a well written book from lecture notes of theoretical computer science courses at the University of Illinois. Covers the main paradigms of backtracking, dynamic programming, greedy, and particularly graphs in depth.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="books-for-mathematics">Books for Mathematics</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Discrete-Mathematics-Applications-Kenneth-Rosen/dp/0072899050">Discrete Mathematics and Its Applications</a>, by Kenneth H. Rosen</td>
                    <td>Discrete Mathematics is closely relevant to competitive programming. This book provides comprehensive materials on a wide range of topics including: Logics and Proofs, Sets, Functions, Sequences, Matrices, Number Theory, Recursion, Counting, Probability, Graphs, Trees and Boolean Alegra to name but a few.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Concrete-Mathematics-Foundation-Computer-Science/dp/0201558025">Concrete Mathematics: A Foundation for Computer Science</a>, by Ronald L. Graham, Donald E. Knuth, Oren Patashnik</td>
                    <td>The book offers a deeper insight into Discrete Mathematics with more emphases on number-related topics.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/Linear-Algebra-Its-Applications-5th/dp/032198238X/ref=sr_1_1?ie=UTF8&amp;qid=1455475253&amp;sr=8-1&amp;keywords=Linear+Algebra+and+Its+Applications">Linear Algebra and Its Applications</a>, by David C. Lay, Steven R. Lay, Judi J. McDonald</td>
                    <td>The book does a brilliant job at bridging the gap between a physical system (for scientists and engineers) and an abstract system (for mathematicians).</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://www.dartmouth.edu/~chance/teaching_aids/books_articles/probability_book/book.html">Introduction to Probability</a>, by Charles M. Grinstead, J. Laurie Snell</td>
                    <td>This is a well-written introductory probabilities book. ... It&#39;s free for <a href="http://www.dartmouth.edu/~chance/teaching_aids/books_articles/probability_book/amsbook.mac.pdf">download (pdf)</a> (released under GNU Free Documentation License).</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.amazon.com/How-Solve-It-Mathematical-Princeton/dp/069111966X">How to Solve It: A New Aspect of Mathematical Method</a>, by G. Polya</td>
                    <td>An old-time classic. In this book, the author provides a systematic way to solve problems creatively.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://artofproblemsolving.com/store/item/intermediate-counting">Intermediate Counting &amp; Probability</a>, by David Patrick</td>
                    <td>Topics in counting and probability byformer USA Mathematical Olympiad winner David Patrick , topics  include inclusion-exclusion, 1-1 correspondences, the Pigeonhole Principle, constructive expectation, Fibonacci and Catalan numbers, recursion, conditional probability, generating functions, graph theory, and much more..</td>
                </tr>
            </tbody>
        </table>
        <h1 id="sites-for-practice">Sites for Practice</h1>
        <blockquote>
            <p>Good online judge systems / contest platforms to practice.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/">Codeforces</a></td>
                    <td>Codeforces is one of, if not, the most popular contest platforms out there. Currently maintained by Saratov State University, it features regular contests and countless awesome original problems. Additionally, every contest provides immediate helpful tutorials (usually) written by the authors themselves. Codeforces also houses a strong and engaging community. All in all, one would indeed learn and improve tremendously here.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.topcoder.com/">Topcoder</a></td>
                    <td>Topcoder has been around since 2001. Rich in history, It&#39;s considered to be one of the most prestigious organizations when it comes to technology competitions. Hundreds of SRMs gave birth to an abundant problemset. Problems here are typically more challenging than others and Topcoder therefore appeals to many elite programmers. The annual Topcoder Open (TCO) is also a widely-discussed event.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://code.google.com/codejam/">Google Code Jam</a></td>
                    <td>Google Code Jam is certainly one of the most highly-esteemed programming competitions. The competition consists of unique programming challenges which must be solved in a fixed amount of time. Competitors may use any programming language and development environment to obtain their solutions.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://atcoder.jp">AtCoder</a></td>
                    <td>AtCoder is a new but phenomenal contest platform created by a team of highly-rated Japanese competitive programmers.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.codechef.com/">CodeChef</a></td>
                    <td>CodeChef is a non-profit educational initiative of Directi. It&#39;s a global competitive programming platform and has a large community of programmers that helps students and professionals test and improve their coding skills. Its objective is to provide a platform for practice, competition and improvement for both students and professional software developers. Apart from this, it aims to reach out to students while they are young and inculcate a culture of programming in India.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.spoj.com/">SPOJ</a></td>
                    <td>The SPOJ platform is centered around an online judge system. It holds a staggering amount of problems prepared by its community of problem setters or taken from previous programming contests, some of which are great problems for practice (refer to the <a href="#problem-classifiers">Problem classifiers</a> section). SPOJ also allows advanced users to organize contests under their own rules.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://acm.timus.ru/">Timus</a></td>
                    <td>Timus Online Judge is the largest Russian archive of programming problems with automatic judging system. Problems are mostly collected from contests held at the Ural Federal University, Ural Championships, Ural ACM ICPC Subregional Contests, and Petrozavodsk Training Camps.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://acm.hdu.edu.cn/">HDU</a></td>
                    <td>HDU is an online judge maintained by Hangzhou Dianzi University. It&#39;s home to many classic problems from the Chinese IOI scene.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://judge.u-aizu.ac.jp/onlinejudge/index.jsp">Aizu Online Judge</a></td>
                    <td>Aizu online judge is a contest platform and problem archive hosted by The University of Aizu. It has a lot of great problems from programming competitions in Japan.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://uva.onlinejudge.org/">UVa</a></td>
                    <td>An old-school problem archive / online judge with rich history. Thousands of problems, including many classic ones, are featured here. However, it is strongly advised that you practice with <a href="https://uhunt.onlinejudge.org/id/0">uHunt</a> following its &quot;Competitive Programming Exercise&quot; section.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.hackerrank.com">HackerRank</a></td>
                    <td>HackerRank is a company that focuses on competitive programming challenges for both consumers and businesses. HackerRank&#39;s programming challenges can be solved in a variety of programming languages and span multiple computer science domains.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://poj.org/">POJ</a></td>
                    <td>POJ is an online judge with many great problems maintained by Peking University. Most Chinese competitive programmers began their journey here. The platform is really dated so mysterious compilation and run-time issues may occur.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://projecteuler.net/">Project Euler</a></td>
                    <td>Project Euler features a stunning set of good math problems. It also hosts a forum where people can discuss.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.hackerearth.com/">Hackerearth</a></td>
                    <td>HackerEarth is a startup technology company based in Bangalore, India that provides recruitment solutions.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://coj.uci.cu/index.xhtml">Caribbean Online Judge</a></td>
                    <td>COJ is hosted by University of Informatics Sciences (UCI, by its acronym in Spanish), located in Cuba. Feature ACM ICPC and Progressive contest styles, mostly from Caribbean and Latin American problem setters, also has problem classifier and contest calendar.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://csacademy.com">CS Academy</a></td>
                    <td>New in the competitive programming scene, CS Academy is a growing online judge that hosts competitions once every two weeks. It supports live chat, interactive lessons and an integrated online editor (that actually works).</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.russiancodecup.ru/en/">Russian Code Cup</a></td>
                    <td>Programming competitions powered by Mail.Ru Group. Competition consists of 3 qualification, 1 elimination and 1 final rounds. For each round contestants are given 4-8 problems which must be solved in a fixed amount of time.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://codesignal.com/">CodeFights</a></td>
                    <td>CodeFights is a website for competitive programming practice and interview preparation. It features daily challenges of varying difficulty, an archive of problems and regular (every 15 minutes) mini-tournaments. Good for beginners.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="problem-classifiers">Problem Classifiers</h3>
        <blockquote>
            <p>Sites classifying programming problems.<br />Choose a category (eg. DP) of interest and practice problems on that topic.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://a2oj.com/Categories.jsp">A2 Online Judge</a></td>
                    <td>Mixed</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://problemclassifier.appspot.com/">Problem Classifier</a></td>
                    <td>SPOJ</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=8">UVa Online Judge</a></td>
                    <td>CP Book</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/problemset?tags=dp">Codeforces Tags</a></td>
                    <td>CF (DP)</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=warmup">HackerRank</a></td>
                    <td>HackerRank</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://goo.gl/unDETI">Juniors Training Sheet</a>, by <a href="https://sites.google.com/site/mostafasibrahim/">Mostafa Saad Ibrahim</a></td>
                    <td>~800 ordered problems for newcomers to be good up to Div2-D</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://luckycat.kshs.kh.edu.tw/">Lucky?????? UVA???ACM????????? (Chinese)</a></td>
                    <td>UVa</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://community.topcoder.com/tc?module=ProblemArchive">Topcoder problem archive</a></td>
                    <td>List of problems with categories and complexity levels</td>
                </tr>
            </tbody>
        </table>
        <h1 id="sites-for-questions">Sites for Questions</h1>
        <blockquote>
            <p>These are great sites to ask questions.<br />Paste your codes at <a href="https://ideone.com/">ideone</a>, <a href="https://pastebin.com/">pastebin</a> or other sites to avoid formatting issues.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/">Codeforces</a></td>
                    <td>For quick answers, Codeforces is definitely the go-to place to ask about anything competition-related.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.quora.com/topic/Competitive-Programming">Competitive Programming - Quora</a></td>
                    <td>You would typically get more elaborate answers on Quora, but you might not have your questions answered straightaway.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://cstheory.stackexchange.com/">Theoretical Computer Science Stack Exchange</a></td>
                    <td>This place is generally for the academics, so don&#39;t ask questions about contest problems here.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="camps-and-trainings">Camps and Trainings</h3>
        <blockquote>
            <p>Online Trainings and Camps.</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://codeforces.com/blog/mostafa.saad.fci">Online Free Problem-Solving Coaching</a>, by <a href="https://sites.google.com/site/mostafasibrahim/">Mostafa Saad Ibrahim</a></td>
                    <td>See the coaching details and people comments on its nature/quality.</td>
                </tr>
            </tbody>
        </table>
        <h1 id="implementations">Implementations</h1>
        <blockquote>
            <p>Algorithm &amp; Data structure implementations.  </p>
        </blockquote>
        <div className="table-responsive">
            <table className=" table table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th>???</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>?????????</td>
                        <td><a href="http://code-library.herokuapp.com/">CodeLibrary</a>, by Andrey Naumenko (indy256)</td>
                        <td>CodeLibrary contains a large collection of implementations for algorithms and data structures in Java and C++. You may also visit his <a href="https://github.com/indy256/codelibrary">GitHub Repository</a>.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/spaghetti-source/algorithm">spaghetti-source/algorithm</a>, by Takanori MAEHARA (@tmaehara)</td>
                        <td>High-quality implementations of many hard algorithms and data structures.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/kth-competitive-programming/kactl">kth-competitive-programming/kactl</a>, by Simon Lindholm (simonlindholm) et al.</td>
                        <td>A phenomenally organized, documented and tested team notebook from KTH Royal Institute of Technology. One of the most well-crafted team notebooks (contest libraries) I&#39;ve ever seen.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/jaehyunp/stanfordacm">jaehyunp/stanfordacm</a></td>
                        <td>Stanford&#39;s team notebook is well maintained and the codes within are of high-quality.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/ngthanhtrung23/ACM_Notebook_new">ngthanhtrung23/ACM_Notebook_new</a>, by team RR Watameda (I_love_Hoang_Yen, flashmt, nguyenhungtam) from National University of Singapore</td>
                        <td>RR Watameda represented National University of Singapore for the 2016 ACM-ICPC World Finals. The items in this notebook are pretty standard and well-organized.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/bobogei81123/bcw_codebook">bobogei81123/bcw_codebook</a>, by team bcw0x1bd2 (darkhh, bobogei81123, step5) from National Taiwan University</td>
                        <td>bcw0x1bd2 represented National Taiwan University for the 2016 ACM-ICPC World Finals. This notebook contains robust implementations for advanced data structures and algorithms.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="https://github.com/foreverbell/acm-icpc-cheat-sheet">foreverbell/acm-icpc-cheat-sheet</a>, by foreverbell (foreverbell)</td>
                        <td>A notebook with some advanced data structures and algorithms including some from the China informatics scene.</td>
                    </tr>
                    <tr>
                        <td>?????????</td>
                        <td><a href="http://shygypsy.com/tools/">igor&#39;s code archive</a>, by Igor Naverniouk (Abednego)</td>
                        <td>A good notebook by Igor Naverniouk who is currently a software engineer at Google and part of the Google Code Jam team.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h1 id="language-specifics">Language Specifics</h1>
        <blockquote>
            <p>Languages and other miscellaneous knowledge.</p>
        </blockquote>
        <h3 id="c-c-">C/C++</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.topcoder.com/community/data-science/data-science-tutorials/power-up-c-with-the-standard-template-library-part-1/">Power up C++ with the Standard Template Library - Topcoder: Part 1</a>, <a href="https://www.topcoder.com/community/data-science/data-science-tutorials/power-up-c-with-the-standard-template-library-part-2/">Part 2</a></td>
                    <td>An introductory tutorial on basic C++ STLs.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/5217">Yet again on C++ input/output - Codeforces</a></td>
                    <td>Learn more about C++ I/O optimizations.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/15643">C++ Tricks - Codeforces</a> ... <a href="https://www.quora.com/Competitive-Programming/What-are-some-cool-C++-tricks-to-use-in-a-programming-contest">What are some cool C++ tricks to use in a programming contest? - Quora</a></td>
                    <td>Plentiful C++ tricks for competitive programming. Note that some should be used with care.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/11080">C++ STL: Policy based data structures - Codeforces: Part 1</a>, <a href="http://codeforces.com/blog/entry/13279">Part 2</a></td>
                    <td>Detailed introduction to the extra data structures implemented in GNU C++. The official documentation can be found <a href="https://gcc.gnu.org/onlinedocs/libstdc++/ext/pb_ds/">here</a>.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://www.stroustrup.com/C++11FAQ.html">C++11 FAQ (English, Chinese, Russian, Japanese, Korean)</a></td>
                    <td>A list of FAQs regarding C++11 collected and written by Bjarne Stroustrup, the creator of C++.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="java">Java</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/7018">How to read input in Java ??? tutorial - Codeforces</a></td>
                    <td>Learn how to read input faster. This is a must-read for those who intend to use Java for competitive programming</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/7108">How to sort arrays in Java and avoid TLE - Codeforces</a></td>
                    <td>Some tips on how to avoid hitting the worst case of quick sort</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/17235">BigNum arithmetic in Java ??? Let&#39;s outperform BigInteger! - Codeforces</a></td>
                    <td>A basic but faster custom BigInteger class</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/14328">EZ Collections, EZ Life (new Java library for contests) - Codeforces</a></td>
                    <td>A Java library for contests written by Alexey Dergunov (dalex). ArrayList, ArrayDeque, Heap, Sort, HashSet, HashMap, TreeSet, TreeMap, TreeList and pair classes are implemented</td>
                </tr>
            </tbody>
        </table>
        <h3 id="miscellaneous">Miscellaneous</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://graphics.stanford.edu/~seander/bithacks.html">Bit Twiddling Hacks</a></td>
                    <td>A huge compiled list of bit manipulation tricks.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://randomascii.wordpress.com/2012/02/25/comparing-floating-point-numbers-2012-edition/">Comparing Floating Point Numbers, 2012 Edition - Random ASCII</a></td>
                    <td>Everything you need to know about floating point numbers. A must read especially for geometry topics.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://hyperpolyglot.org/cpp">Object-Oriented C Style Languages: C++, Objective-C, Java, C# - a side-by-side reference sheet</a></td>
                    <td>A detailed side-by-side reference sheet for common syntaxes.</td>
                </tr>
            </tbody>
        </table>
        <h1 id="tools">Tools</h1>
        <blockquote>
            <p>Awesome tools that will make your life easier.</p>
        </blockquote>
        <h3 id="ides">IDEs</h3>
        <table className=" table table-dark table-bordered table-hover " style={{
            fontSize: 'smaller',
            width: '100%'
        }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Platform</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.vim.org/download.php">Vim</a></td>
                    <td>CLI / Cross-Platform</td>
                    <td>Vim is one of the most popular text editors among advanced programmers. It allows text-editing to be done very efficiently with solely keystrokes. Vim is also highly configurable, extensible and integrates with shells (command lines) really well. The only setback about Vim is that it has a high learning curve for beginners.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.gnu.org/software/emacs/download.html">Emacs</a></td>
                    <td>CLI / Cross-Platform</td>
                    <td>Emacs is another popular text editor (or development environment to be more precise). The debate on &quot;Vim vs. Emacs&quot; is constantly brought up due to their popularity. Basically Emacs is more than just a text editor. It has plugins like file managers, web browsers, mail clients and news clients that allows users to performs these tasks directly inside Emacs. Emacs is &quot;heavier&quot; because of this, but it arguably has a relatively easier learning curve for beginners.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.farmanager.com/download.php?l=en">Far Manager</a></td>
                    <td>Hybrid / Windows</td>
                    <td>Far Manager is the most widely-used editor in the RU/CIS competitive programming community. It&#39;s actually a file manager in its bare bones, but you can install <a href="http://colorer.sourceforge.net/farplugin.html">FarColorer</a> - a syntax highlighter plugin to program on it. Properly configured, Far Manager allows you to navigate between files very efficiently while writing your codes.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeblocks.org/downloads">Code::Blocks</a></td>
                    <td>GUI / Cross-Platform</td>
                    <td>Code::Blocks is the go-to IDE for C/C++. It&#39;s a full-fledged, versatile IDE with numerous great features. Code::Blocks is usually provided along with Vim in programming contests.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.jetbrains.com/idea/#chooseYourEdition">IntelliJ IDEA</a></td>
                    <td>GUI / Cross-Platform</td>
                    <td>IntelliJ IDEA is certainly one of the best IDEs for Java. It&#39;s used by most competitive programmers who use Java as their main language. Be sure to check out <a href="https://plugins.jetbrains.com/plugin/7091-chelper">CHelper</a>, a very handy plugin written for programming contests.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.sublimetext.com/3">Sublime Text</a></td>
                    <td>GUI / Cross-Platform</td>
                    <td>Sublime Text is an extraordinary text editor. Packed with powerful and innovative features like Multiple Carets, Minimaps and Command Palletes, it attracts a strong and engaging community. Sublime Text is highly extensible, so be sure to have <a href="https://packagecontrol.io/">Package Control</a> installed and explore perhaps one of the largest catalogue of plugins!</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.eclipse.org/downloads/">Eclipse</a></td>
                    <td>GUI / Cross-Platform</td>
                    <td>Eclipse is another good IDE for Java. It&#39;s an okay alternative to Intellij IDEA (A tad inferior to IDEA by today&#39;s standards). Sometimes contests only provide Eclipse for some reason, so this might be a good incentive to try and use Eclipse.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.jetbrains.com/clion/download/">CLion</a></td>
                    <td>GUI / Cross-Platform</td>
                    <td>CLion, produced by JetBrains - the same company who made Intellij IDEA, is a powerful IDE for C++. Free educational licenses are available OR you can try out their <a href="https://confluence.jetbrains.com/display/CLION/Early+Access+Program">EAP (Early Access Program)</a> which is still free as of Apr, 2018. You may want to turn off its code inspection feature as it will cause quite a bit of lag.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td>Other IDEs</td>
                    <td>Mixed</td>
                    <td><a href="https://visualstudio.microsoft.com/vs/community/">Visual Studio</a> is the IDE to use in case you want to code in C#. ... Both <a href="https://atom.io/">Atom</a> and <a href="https://code.visualstudio.com/">Visual Studio Code</a> are built with Electron (written in JavaScript) and therefore somewhat resource-hogging. ... <a href="https://codelite.org/">CodeLite</a> is a newly rising IDE. Beware that the load-up and project-creation times can be extraordinary.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="personal-use">Personal use</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://visualgo.net/en">VisuAlgo</a></td>
                    <td>A website featuring a large collection of visualization tools for algorithms and data structures.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td>General Practice Helpers: ... <a href="https://plugins.jetbrains.com/plugin/7091-chelper">CHelper</a> (IntelliJ IDEA) (<a href="http://codeforces.com/blog/entry/3273">manual</a>) ... <a href="https://github.com/slycelote/caide">caide</a> (Visual Studio, CodeLite, standalone command line app) ... <a href="http://codeforces.com/blog/entry/13369">JHelper</a> (AppCode, CLion) <a href="https://github.com/kmyk/online-judge-tools">online-judge-tools</a> (Stand alone CLI tool, It is actively maintained.)</td>
                    <td>Great tools that parse contests, inline library codes and provide testing frameworks. They save you from spending your precious time on switching windows and copy-pasting back and forth.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td>Codeforces Parsers: ... <a href="https://github.com/johnathan79717/codeforces-parser">Codeforces Parser</a> ... <a href="https://github.com/sukeesh/GoCF">GoCF</a> ... <a href="https://github.com/gnull/cfparser">cfparser</a> (emacs) <a href="https://github.com/ikatanic/cfparser">cfparser</a> (cli)</td>
                    <td>These tools parse Codeforces contest problems and help run sample tests.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://oeis.org/">The On-Line Encyclopedia of Integer Sequences (OEIS)</a></td>
                    <td>A stunning encyclopedia with a database of countless integer sequences. It also features a powerful search engine. Sometimes a seemingly difficult combinatorics problem could be equivalent to a simple or studied integer sequence.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td>Syntax Highlighters: ... <a href="https://tohtml.com/">tohtml.com</a> ... <a href="http://markup.su/highlighter/">markup.su</a> ... <a href="http://hilite.me/">hilite.me</a></td>
                    <td>Very handy for creating slides or team notebooks with pretty, formatted code snippets. Just copy the highlighted code snippets and paste them in your favorite WYSIWYG (What-You-See-Is-What-You-Get) editor!</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td>Code Sharing: ... <a href="https://ideone.com/">Ideone.com</a> ... <a href="https://pastebin.com/">Pastebin.com</a> ... <a href="https://paste.ubuntu.com/">Ubuntu Pastebin</a></td>
                    <td>These tools generate semi-permanent pages for code sharing. Very useful especially when you&#39;re trying to get someone else to look into your code.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://codeforces.com/blog/entry/19083">Ineffable</a></td>
                    <td>A simple command-line grader for local grading.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.udebug.com/">uDebug</a></td>
                    <td>A platform that provides expected outputs for user-specified inputs to problems on the UVa Online Judge. Some problems also provide additional test cases for debugging.</td>
                </tr>
            </tbody>
        </table>
        <h3 id="contest-preparation">Contest Preparation</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>???</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://polygon.codeforces.com/">polygon</a></td>
                    <td>polygon provides a platform and a rich set of tools for professional contest preparation. ... An example: <a href="http://codeforces.com/blog/entry/18426">Validators with testlib.h - Codeforces</a></td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://csacademy.com/app/graph_editor/">Graph Editor</a></td>
                    <td>A fantastic tool to create and visualize graphs.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://github.com/ia-toki/tcframe">tcframe</a></td>
                    <td>A C++ framework for generating test cases of competitive programming problems.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="http://vjudge.net">Virtual Judge (vjudge)</a></td>
                    <td>Virtual Judge (vjudge) allows users to create virtual contests with problems from notable problem archives.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://www.bnuoj.com/v3/">BNU Online Judge</a></td>
                    <td>BNU Online Judge also allows users to create virtual contests.</td>
                </tr>
                <tr>
                    <td>?????????</td>
                    <td><a href="https://open.kattis.com/">Kattis</a></td>
                    <td>Kattis assists in contest preparation (E-mail them for assistance).</td>
                </tr>
            </tbody>
        </table>
        <h3 id="quora">Quora</h3>
        <blockquote>
            <p>Visit <a href="https://www.quora.com/topic/Competitive-Programming">Competitive Programming - Quora</a> (<a href="https://www.quora.com/topic/Competitive-Programming/writers">Top 10 Most Viewed Writers</a>).</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>Important Community Figures</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://www.quora.com/profile/Bill-Poucher">Bill Poucher</a></td>
                    <td>Executive Director of <a href="https://icpc.baylor.edu">ACM-ICPC</a>. CS Professor at Baylor University.</td>
                </tr>
                <tr>
                    <td><a href="https://www.quora.com/profile/Michal-Fori%C5%A1ek">Michal Fori??ek (misof)</a></td>
                    <td>Organizer of <a href="https://ipsc.ksp.sk">IPSC</a> and <a href="https://ioinformatics.org/">IOI</a>. CS Teacher at Comenius University in Slovakia. Algorithm and CS Education Researcher. Former highly-rated competitive programmer.</td>
                </tr>
                <tr>
                    <td><a href="https://www.quora.com/profile/Ahmed-Aly">Ahmed Aly (ahmed_aly)</a></td>
                    <td>Founder of <a href="https://www.quora.com/profile/Ahmed-Aly">A2OJ</a>. <a href="https://www.hackerrank.com">HackerRank</a> Lead Software Engineer. Former member of the <a href="https://code.google.com/codejam/">Google Code Jam</a> team.</td>
                </tr>
            </tbody>
        </table>
        <h1 id="other-awesome-resources">Other Awesome Resources</h1>
        <h3 id="articles">Articles</h3>
        <blockquote>
            <p>Informative and helpful articles</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="http://psyho.gg/overview-of-programming-contests/">Overview of Programming Contests</a>, by Przemys??aw D??biak (Psyho)</td>
                </tr>
                <tr>
                    <td><a href="http://codeforces.com/blog/entry/17842">The &#39;science&#39; of training in competitive programming - Codeforces</a>, by Thanh Trung Nguyen (I_love_Hoang_Yen)</td>
                </tr>
                <tr>
                    <td><a href="http://codeforces.com/blog/entry/16599">If you ask me how to improve your algorithm competition skill, I will give you the link of this blog. - Codeforces</a>, by Huang I-Wen (dreamoon)</td>
                </tr>
                <tr>
                    <td><a href="http://www.geeksforgeeks.org/how-to-prepare-for-acm-icpc/">How to prepare for ACM - ICPC? - GeeksforGeeks</a>, by Vishwesh Shrimali</td>
                </tr>
                <tr>
                    <td><a href="https://www.hackerearth.com/getstarted-competitive-programming/">Complete reference to competitive programming - HackerEarth</a>, by Ravi Ojha</td>
                </tr>
                <tr>
                    <td><a href="https://www.hackerearth.com/practice/notes/getting-started-with-the-sport-of-programming/">Getting started with the sport of competitive programming - HackerEarth</a>, by Triveni Mahatha</td>
                </tr>
            </tbody>
        </table>
        <h3 id="faqs">FAQs</h3>
        <blockquote>
            <p>Fine answers to frequently-asked questions </p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>Question</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://www.quora.com/How-do-I-start-competitive-programming-5">How do I start competitive programming? - Quora</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.quora.com/How-can-I-become-good-at-competitive-programming-Are-there-any-courses-that-will-take-me-one-step-forward-before-I-start-doing-SPOJ-or-TopCoder-problems">How can I become good at competitive programming? - Quora</a> ... <a href="https://www.quora.com/What-is-the-best-strategy-to-improve-my-skills-in-competitive-programming-in-2-3-months">What is the best strategy to improve my skills in competitive programming in 2-3 months? - Quora</a> ... <a href="https://www.quora.com/What-is-a-good-6-month-plan-to-start-and-progress-through-competitive-programming">What is a good 6 month plan to start and progress through competitive programming? - Quora</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.quora.com/How-is-competitive-programming-different-from-real-life-programming">How is competitive programming different from real-life programming? - Quora</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.quora.com/What-have-you-gained-from-competitive-programming">What have you gained from competitive programming? - Quora</a></td>
                </tr>
            </tbody>
        </table>
        <h3 id="awesome-lists">Awesome Lists</h3>
        <blockquote>
            <p>Relevant awesome lists</p>
        </blockquote>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>C++ Books</td>
                    <td><a href="https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list">The Definitive C++ Book Guide and List - Stack Overflow</a></td>
                </tr>
                <tr>
                    <td>Java Books</td>
                    <td><a href="https://www.quora.com/What-are-the-best-books-to-learn-Java">What are the best books to learn Java? - Quora</a></td>
                </tr>
                <tr>
                    <td>Advanced Java Books</td>
                    <td><a href="https://www.quora.com/What-is-the-best-book-for-advanced-Java-programming">What is the best book for advanced Java programming? - Quora</a></td>
                </tr>
                <tr>
                    <td>Algorithms</td>
                    <td><a href="https://github.com/tayllan/awesome-algorithms">tayllan/awesome-algorithms</a></td>
                </tr>
                <tr>
                    <td>Algorithm Visualization</td>
                    <td><a href="https://github.com/enjalot/algovis">enjalot/algovis</a></td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td><a href="https://github.com/rossant/awesome-math">rossant/awesome-math</a></td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td><a href="https://github.com/fffaraz/awesome-cpp">fffaraz/awesome-cpp</a></td>
                </tr>
                <tr>
                    <td>Java</td>
                    <td><a href="https://github.com/akullpp/awesome-java">akullpp/awesome-java</a></td>
                </tr>
                <tr>
                    <td>Courses</td>
                    <td><a href="https://github.com/prakhar1989/awesome-courses">prakhar1989/awesome-courses</a></td>
                </tr>
                <tr>
                    <td>Free Programming Books</td>
                    <td><a href="https://github.com/EbookFoundation/free-programming-books">vhf/free-programming-books</a></td>
                </tr>
                <tr>
                    <td>Community-curated C++ Resources</td>
                    <td><a href="https://hackr.io/tutorials/learn-c-plus-plus">Hackr.io</a></td>
                </tr>
            </tbody>
        </table>
        <h3 id="interview-questions">Interview Questions</h3>
        <table className=" table table-dark table-bordered table-hover " style={{ overflowX: "auto" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://www.careercup.com">CareerCup</a></td>
                    <td>The most popular website for software engineering interview preparation.</td>
                </tr>
                <tr>
                    <td><a href="https://www.interviewbit.com">InterviewBit</a></td>
                    <td>Features intriguing and refreshing game-play designs which are designed to invoke one&#39;s interest in practicing.</td>
                </tr>
                <tr>
                    <td><a href="https://github.com/MaximAbramchuck/awesome-interview-questions">Awesome Interviews</a></td>
                    <td>A curated list of awesome interview questions</td>
                </tr>
                <tr>
                    <td><a href="https://leetcode.com">LeetCode</a></td>
                    <td>Well-organized website for software engineering interview preparation with best explanined solutions.</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>)
}
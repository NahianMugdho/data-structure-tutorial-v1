# Data Structure Tutorial Site — Rebuild & Handoff Document
**Audience: any AI/developer.** This file lets you (A) rebuild the site exactly, or (B) continue from where the previous author stopped. Appendix at the bottom contains the **full source of every file** — recreate each file byte-for-byte, then follow "Next tasks".

## 1. Project brief (what the user asked for)
User (Bangla speaker, prepares for CS/IT exams such as Bangladesh Bank AD-ICT) wanted a complete Data Structure tutorial **slide site**: separate HTML files, interactive animations/figures, Bangla explanation beside every graphic, all facts from the source PDFs, exam questions placed **section-wise** at the end of each topic, and a final **Model Test** with 30 random questions that can be shuffled. Language: Bangla with English technical terms. No server/build — plain HTML/CSS/JS, open `index.html` directly.
Source PDFs (Cloud IT Online Batch-13 notes): Searching_Sorting-Full, Searching-Sorting-Scenario, Senario-based-tree, tree, Tree-bangla, Tree-Summery, stack, time-complexity, DS-UNIT-45 (Trees & Hashing slides by BMSCE).

## 2. Status (as of this version)
DONE (v5): complexity (operation counting, 3n+3, T1 vs T2, Big-O/Ω/Θ, loop lab), search-sort (linear, binary with generated comparison tables, C code, exercises 1 & 3, scenarios), sorts (bubble, selection, insertion, quick with PDF 13-element trace, merge, heap, animation lab, exercises 1–9 solved by program), stack (ops, C code, **prefix/postfix/infix converters both ways + prefix evaluator + 10 solved conversions (v6)**, applications, infix→postfix & postfix evaluator, queue, P-Q-R-S-T puzzle, all PYQ+practice with explanations), linkedlist (+2D address calculator), graph (BFS/DFS, Dijkstra, Bellman-Ford, SPFA, Floyd-Warshall, Kruskal, Prim animations). Earlier: **tree.html fully rewritten (v4)** to cover tree.pdf, Tree-bangla, Tree-Summery, Senario-based-tree and DS-UNIT-45 tree part completely (PDF's own tree A–K, 12 interactive terms, all types with figures, BST 3 delete cases, traversals, expression tree, heap, C code, solved problems, 10 scenarios). Complexity, Linear/Binary search, Bubble/Selection/Insertion/Quick/Heap/Merge sort animations, Stack/Queue, Linked List, Tree terminology + BST + traversals + heap/delete notes + code, AVL (insert+delete+rotations), Hashing (chaining, linear, quadratic, double; search/delete), Graph (BFS/DFS + notes), How-to-read intro, Bangla explanation cards, **125 questions** (cx 11, ss 31, st 19, tr 30, hs 17, ll 7, gr 10), Model Test.
NOT DONE / next tasks (pick up here):
0. (Resolved in v5) User complained earlier pages dropped PDF details / explanations were disjointed. v4 rewrote tree.html; **v5 rewrote complexity, search-sort, sorts, stack, linkedlist, graph** from the PDFs (exercise page and quick-sort worked example were read from page images). Keep this standard for any new page: concept → Bangla explanation → figure/animation → generated worked example → code → exam notes, nothing omitted.
1. (Still open) DS-UNIT-45 hashing slides had picture-only examples (linear/quadratic/double, comparison) — current tables were recomputed by hand (mod 7, keys 50,700,76,85,92,73,101); compare with the PDF images.
2. Not every line of every PDF is on the site: re-read each PDF and diff against pages (esp. Tree-bangla heap/traversal prose, Searching_Sorting-Full quick-sort trace & exercises 1–9, time-complexity handwritten pages).
3. Animations still missing: Quick-sort partition pointers (up/down), Dijkstra, Kruskal/Prim, Huffman, Trie, BST delete (3 cases), Heap insert/extract as tree, Queue variants (circular, deque, priority).
4. More questions: search BD job exams (BB, ICB, Sonali/Janata etc. ICT) and GATE-style sets; write **original** wording (do not copy), verify every answer by hand, append to `bank.js`. Known source-PDF errors are listed in §7.
5. Optional: export this doc as Word/Doc; add a progress tracker (localStorage) and score history in model.html.

## 3. Architecture (no dependencies)
- Every page: `<link style.css>`, `<section class="slide">…</section>` blocks, then `<script src="bank.js">` (if quiz), `<script src="app.js">`, then page script. **app.js must load after all slides exist** (it collects `.slide` once). Quiz slide is the last slide of a topic page.
- `fig.js` (v5): shared helpers `fig(spec,highlight)` / `F(id,spec)` draw tree figures from nested arrays `['label',child,…]` (null = empty slot); `tb(headers,rows)` builds tables; `AS(array)` heap-array→tree spec. Pages that use it load `bank.js`, `fig.js`, `app.js` in that order (tree.html and avl.html keep their own copies).
- `app.js`: defines `$`, `$$`, `sleep`; array `PAGES=[[file,label],…]` builds the top nav (current page highlighted); injects bottom bar (◀ `#pv`, `#pg`, ▶ `#nx`); `go(n)` shows slide n (class `on`); ←/→ keys (ignored while typing in an input).
- `style.css`: CSS variables `--bg --fg --card --ac(blue) --ok(green) --hl(amber) --bd`, dark mode via `prefers-color-scheme`. Classes: `.slide .card .cells .cell(.lo .hi .mid .ok .dim) .bars .bar(.cmp .done) .stk .box .arr .bkt .nd(.on) .q .good .bad .ctl`. Colour meaning: amber = being compared/visited, green = done/found, blue = active range.
- `bank.js` = **single source of all questions**. `BANK` is a template string, one question per line: `sec|question|opt1~opt2~opt3~opt4|correctIndex(0-3)|explanation`. Never use `|` or `~` inside text. Sections: `cx` complexity, `ss` search+sort, `st` stack/queue, `tr` tree/BST/AVL/heap, `hs` hashing, `ll` linked list/array, `gr` graph. Helpers: `shuf(array)`, `renderQ(list,el,id)` (instant feedback unless `el.dataset.exam`), `quiz(sec,selector)`.
- Pages and their quiz section: complexity(cx) · search-sort(ss) · sorts(ss) · stack(st) · linkedlist(ll) · tree(tr) · avl(tr) · hashing(hs) · graph(gr) · model (all; picks 30 random, shuffles questions **and options**, "জমা দাও" shows score).

## 4. Page-by-page content order (slides)
- **index**: how-to-read (4 steps, order, colour legend) → what is a data structure.
- **complexity**: operation counting T(n)=4n+4 → growth slider table (`draw()`) + Bangla card → loop A–D question (C=O(log n); D never ends) → best/avg/worst + Big-O/Ω/Θ → handwritten notes (Big-O arithmetic, function types) → quiz.
- **search-sort**: linear search → binary search animation (`bsInit/bsStep`, array 4,7,8,9,16,20,24,38,39,45,54,77) + Bangla card → bubble sort animation (33,44,22,11,66,55) → sort comparison table → scenarios (dress shop, library, ID sheet, dictionary, ATM/hash/B-tree, algorithm-use list) → sorting notes (internal/external, pass counts) → quiz.
- **sorts**: buttons Selection/Insertion/Quick/Heap/Merge; `fr(alg)` records frames `[arrayCopy,highlightIdx[]]`, `run()` plays at 350 ms; `X` object holds the Bangla description shown in `#ex`.
- **stack**: LIFO/ops → interactive stack (size 5, overflow/underflow) → queue → postfix evaluation → applications + P,Q,R,S,T puzzle (answer S) → quiz.
- **linkedlist**: head/tail insert, delete head, reverse + Bangla card → quiz (also array address questions).
- **tree**: terminology on SVG tree (A–G) → types & formulas → BST interactive (`ins/srch/trav`, layout `lay()` = inorder index→x, depth→y) → delete/heap/scenarios → extra notes + C code + 10 scenarios → quiz.
- **avl**: theory table (LL/RR/LR/RL, delete) → interactive (`bal/ins/del`, BF label per node) → quiz.
- **hashing**: concepts (functions, collision, chaining, open addressing) → worked example table for 4 methods → comparison tables → interactive mod-7 table with Insert/Search/Delete (`ⓓ` = deleted marker; double hashing h2=5−k%5) → quiz.
- **graph**: BFS/DFS animation on fixed 6-node graph (A–F), shortest path/MST notes → quiz. **model**: described above.

## 5. How to extend
New question → one line in `bank.js`. New slide → `<section class="slide">` before the quiz slide. New page → copy any page skeleton, add `['file','Label']` to `PAGES`, add a section code if needed. Animation pattern: build a list of frames first, then play with `await sleep(ms)`; always add a Bangla "বাংলায় ব্যাখ্যা" card next to the graphic.

## 6. Verification checklist (previous author could not open a browser)
Run in Node: extract each inline `<script>` and `new Function(code)` to catch syntax errors; evaluate `bank.js` and assert every question has 4 distinct options and a valid index. Then manually open every page: slide buttons, each animation, quiz feedback, model shuffle/submit.

## 7. Known errors in the source PDFs (corrected on the site)
- stack.pdf: postfix `6 3 2 4 + − *` is −18, not "between 15 and 100".
- tree.pdf Q30: shortest path in weighted graph is Dijkstra (PDF says DFS).
- time-complexity book page: 4n³+10n²+5n+8 ≤ 5n³ for n≥4 is wrong (needs n≥11); site uses c=27, n₀=1.
- Max-heap from 30,10,80,60,15,55 is 80,60,55,10,15,30 (PDF option B is wrong) — question omitted.
- "Maximum nodes in binary tree of N levels" is 2^N − 1.

## 8. Online question sources used for patterns (June–Oct 2026 search)
Concept patterns (BFS→queue, hierarchical→tree, delete node with two children→inorder successor, full binary tree 2n+1 nodes, iterative quicksort→stack, heap index formulas, hash tables with chaining/linear probing, row/column-major address, infix→postfix) were taken from public university exam papers and GATE/BB-style question banks (e.g. GATE Overflow topic pages, Berkeley CS61B and Rhodes CS exam files, Scribd DS MCQ sets, SattAcademy BB question banks, HamroCSIT). All questions in `bank.js` are **re-worded and answer-verified by hand**; none copied verbatim.

## 9. Prompt you can give another AI
"Read HANDOFF (this file). Recreate all files from the Appendix exactly, verify with §6, then do §2 tasks 1–4 in order, keeping the conventions in §3 and §5, Bangla explanations beside every graphic, and update this document's Status and Appendix when done."

# Appendix — full source files

## style.css
```css
:root{--bg:#fff;--fg:#1d2433;--card:#f2f5fa;--ac:#2563eb;--ok:#16a34a;--hl:#f59e0b;--bd:#cfd8e6}
@media(prefers-color-scheme:dark){:root{--bg:#0f1420;--fg:#e6ebf5;--card:#1a2233;--ac:#60a5fa;--ok:#4ade80;--hl:#fbbf24;--bd:#34415a}}
*{box-sizing:border-box}body{margin:0;font:16px/1.6 "Noto Sans Bengali",system-ui,sans-serif;background:var(--bg);color:var(--fg)}
nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 14px;background:var(--card);border-bottom:1px solid var(--bd)}
nav a{padding:4px 10px;border-radius:6px;text-decoration:none;color:var(--fg)}nav a.cur{background:var(--ac);color:#fff}
.slide{display:none;max-width:900px;margin:0 auto;padding:22px 18px 80px}.slide.on{display:block}
h1,h2{color:var(--ac);margin:.2em 0 .5em}.card{background:var(--card);border:1px solid var(--bd);border-radius:10px;padding:12px 16px;margin:10px 0}
button,input{font:inherit;padding:6px 12px;border-radius:6px;border:1px solid var(--bd);background:var(--bg);color:var(--fg);margin:3px}
button{cursor:pointer;background:var(--ac);color:#fff;border:0}table{border-collapse:collapse;width:100%}td,th{border:1px solid var(--bd);padding:5px 8px;text-align:center}
code,pre{background:var(--card);border-radius:6px;padding:2px 6px;font-family:ui-monospace,monospace}pre{padding:10px;overflow:auto}
.ctl{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;gap:10px;padding:8px;background:var(--card);border-top:1px solid var(--bd)}
.cells{display:flex;gap:4px;flex-wrap:wrap}.cell{min-width:42px;padding:8px;text-align:center;border:2px solid var(--bd);border-radius:6px;background:var(--bg)}
.cell.lo,.cell.hi{border-color:var(--ac)}.cell.mid{background:var(--hl);color:#000}.cell.ok{background:var(--ok);color:#000}.cell.dim{opacity:.3}
.bars{display:flex;align-items:flex-end;gap:6px;height:150px}.bar{width:38px;background:var(--ac);color:#fff;text-align:center;border-radius:4px 4px 0 0;transition:.3s}.bar.cmp{background:var(--hl);color:#000}.bar.done{background:var(--ok);color:#000}
.stk{display:flex;flex-direction:column-reverse;gap:4px;width:120px;min-height:200px;border:3px solid var(--fg);border-top:0;padding:4px}.stk .cell{background:var(--ac);color:#fff}
svg text{fill:currentColor;font-size:14px;text-anchor:middle}.nd circle{fill:var(--bg);stroke:var(--ac);stroke-width:2}.nd.on circle{fill:var(--hl)}.nd.on text{fill:#000}svg line{stroke:var(--bd);stroke-width:2}
.q{margin:10px 0}.q label{display:block;padding:4px 8px;cursor:pointer}.good{color:var(--ok);font-weight:700}.bad{color:#dc2626}
.box{display:inline-block;padding:6px 12px;border:2px solid var(--ac);border-radius:6px;margin:2px}.arr{color:var(--ac)}.bkt{display:flex;gap:6px;align-items:center;margin:3px 0}.bkt b{width:30px}

```

## app.js
```js
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],sleep=ms=>new Promise(r=>setTimeout(r,ms));
const PAGES=[['index','হোম'],['complexity','Complexity'],['search-sort','Search'],['sorts','Sorting'],['stack','Stack/Queue'],['linkedlist','Linked List'],['tree','Tree/BST'],['avl','AVL'],['hashing','Hashing'],['graph','Graph'],['model','Model Test']];
document.body.insertAdjacentHTML('afterbegin','<nav>'+PAGES.map(p=>`<a href="${p[0]}.html" class="${location.pathname.endsWith(p[0]+'.html')||(p[0]=='index'&&location.pathname.endsWith('/'))?'cur':''}">${p[1]}</a>`).join('')+'</nav>');
document.body.insertAdjacentHTML('beforeend','<div class="ctl"><button id="pv">◀ আগে</button><span id="pg"></span><button id="nx">পরে ▶</button></div>');
const S=$$('.slide');let cur=0;
function go(n){cur=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>s.classList.toggle('on',k==cur));$('#pg').textContent=(cur+1)+' / '+S.length;scrollTo(0,0)}
addEventListener('keydown',e=>{if(e.target.tagName=='INPUT')return;if(e.key=='ArrowRight')go(cur+1);if(e.key=='ArrowLeft')go(cur-1)});
$('#nx').onclick=()=>go(cur+1);$('#pv').onclick=()=>go(cur-1);go(0);

```

## fig.js
```js
function lay(n,d,c){if(!n){c.i++;return null}if(n.length==1)return{l:n[0],x:c.i++,y:d,k:[]};const s=c.i,k=n.slice(1).map(x=>lay(x,d+1,c)).filter(Boolean);return{l:n[0],x:(s+c.i-1)/2,y:d,k}}
function fig(sp,hl=[]){const c={i:0},r=lay(sp,0,c),all=[];(function f(n){all.push(n);n.k.forEach(f)})(r);const X=n=>26+n.x*46,Y=n=>22+n.y*48,W=52+(c.i-1)*46,Hh=44+Math.max(...all.map(n=>n.y))*48;
return '<svg viewBox="0 0 '+W+' '+Hh+'" style="max-width:'+W*1.4+'px;width:100%">'+all.map(n=>n.k.map(k=>'<line x1="'+X(n)+'" y1="'+Y(n)+'" x2="'+X(k)+'" y2="'+Y(k)+'"/>').join('')).join('')+all.map(n=>'<g class="nd '+(hl.includes(n.l)?'on':'')+'"><circle cx="'+X(n)+'" cy="'+Y(n)+'" r="15"/><text x="'+X(n)+'" y="'+(Y(n)+5)+'">'+n.l+'</text></g>').join('')+'</svg>'}
const F=(id,sp,hl)=>$('#'+id).innerHTML=fig(sp,hl);
const tb=(h,r)=>'<table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(a=>'<tr>'+a.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</table>';
const AS=(H,i=0)=>{if(i>=H.length)return null;const l=AS(H,2*i+1),r=AS(H,2*i+2);return l||r?[H[i],l,r]:[H[i]]};

```

## bank.js
```js
const BANK=`cx|for(i=1;i<n;i*=2) এর complexity?|O(n)~O(log n)~O(n²)~O(1)|1|i দ্বিগুণ হয় ⇒ log₂n।
cx|for(i=0;i<n;i+=2) এর complexity?|O(log n)~O(n)~O(n²)~O(1)|1|n/2 বার, constant বাদ ⇒ O(n)।
cx|T(n)=7n²+2n+37 এর Big-O?|O(n)~O(n²)~O(2ⁿ)~O(1)|1|শুধু বড় term।
cx|সঠিক ক্রম (ছোট→বড়)?|log n<n<n log n<n²~n<log n<n²<n log n~n²<n<log n~log n<n log n<n<n²|0|
cx|for(i<n) for(j=1;j<=n;j*=2) এর complexity?|O(n)~O(n log n)~O(n²)~O(log n)|1|O(n)×O(log n)।
cx|Linear search-এর best case?|O(1)~O(n)~O(log n)~O(n²)|0|প্রথমেই পাওয়া গেলে।
cx|Worst case analysis কী দেয়?|lower bound~upper bound~গড়~কিছুই না|1|কখনোই এর চেয়ে বেশি সময় লাগবে না।
cx|T(n)=3 (সর্বদা) হলে complexity?|O(n)~O(1)~O(log n)~O(3ⁿ)|1|Constant।
cx|for(i=n;i>-1;i/=2) loop-এ সমস্যা?|কিছু না~i=0 হয়ে আটকে থাকে~i negative হয়~log n লাগে|1|0/2=0 এবং 0>-1 সবসময় সত্য।
ss|Serial search-এর worst case?|Constant~Quadratic~Logarithmic~Linear|3|
ss|Binary search-এর জন্য array-তে কী শর্ত?|heap হতে হবে~≥২ element~sorted হতে হবে~size 2-এর ঘাত|2|
ss|কোন searching recursive করা যায়?|Linear~দুটোই~Binary~কোনোটিই নয়|1|
ss|n element selection sort-এ swap সর্বোচ্চ কতবার?|1~n²~n−1~n log n|2|
ss|100 item selection sort-এর 42 iteration পর কতটি চূড়ান্ত জায়গায়?|21~41~42~43|2|
ss|Insertion sort কখন ভালো?|element বড়~মাত্র কয়েকটি item জায়গার বাইরে~processor দ্রুত~সবসময়|1|
ss|Quick sort-এর worst case?|O(log n)~O(n)~O(n log n)~O(n²)|3|
ss|প্রথম partition-এর পর array: 2 5 1 7 9 12 11 10 — pivot কোনটি হতে পারে?|7 বা 9 দুটোই~শুধু 9~শুধু 7~কোনোটিই নয়|0|দুটোর বামে সব ছোট, ডানে সব বড়।
ss|Heap sort-এর worst case?|O(log n)~O(n)~O(n log n)~O(n²)|2|
ss|Quick sort কোন technique?|Divide & conquer~Greedy~Backtracking~DP|0|
ss|Quick sort-এ partition element হিসেবে ভালো?|প্রথম~শেষ~median~যেকোনো|2|
ss|অগোছালো data-য় সবচেয়ে দ্রুত (সাধারণত)?|Heap~Selection~Quick~Bubble|2|
ss|Bubble ও Selection sort-এর running time?|O(log n)~O(n log n)~O(n)~O(n²)|3|
ss|Insertion sort-এর best case?|O(log n)~O(n log n)~O(n)~O(n²)|2|
ss|8,22,7,9,31,19,5,13 bubble sort-এ swap সংখ্যা?|11~12~13~14|3|Inversion গুনলে 14।
ss|কোনটি stable sort?|Bubble~Selection~Quick~কোনোটিই নয়|0|
ss|Heap কীসের জন্য ভালো?|Priority queue~Linear queue~Deque~কোনোটিই নয়|0|
ss|Min heap-এ সবচেয়ে ছোট element কোথায়?|leaf~root~মাঝের parent~যেকোনো|1|
ss|Heap-এ insert-এর complexity?|O(log n)~O(n²)~O(n log n)~O(n)|0|
ss|অল্প memory-র PC-তে বিশাল array sort — Heap না Quick?|Heap (in-place, worst O(n log n))~Quick সবসময়~সমান~কোনোটিই নয়|0|
ss|Binary search-এ প্রতি ধাপে কী হয়?|একটি বাদ~অর্ধেক বাদ~এক-তৃতীয়াংশ বাদ~কিছু না|1|
ss|Binary search কোথায় কার্যকর?|Linked list~Array~দুটোই~কোনোটিই নয়|1|Random access লাগে।
ss|লাইব্রেরি catalog (sorted) খুঁজতে?|Linear~Binary search~DFS~Bubble|1|
ss|ছোট unsorted attendance sheet-এ ID খুঁজতে?|Linear search~Binary search~Merge sort~B-Tree|0|
st|Stack-এ insert-এর নাম?|Create~Push~Evaluation~Pop|1|
st|পূর্ণ stack-এ push করলে?|Overflow~Crash~Underflow~User flow|0|
st|খালি stack-এ pop করলে?|Underflow~Overflow~Garbage~Empty collection|0|
st|Stack-এর অন্য নাম?|FIFO~LIFO~Last in last out~First in last out|1|
st|a+(b-c)*d এর postfix?|abc-d*+~abcd*+~ad*bc-~abcd+*|0|
st|Front থেকে delete, rear-এ insert?|Stack~Queue~Dequeue~BST|1|
st|push(1),push(2),pop,push(4),push(5),pop — শেষ state?|2,5~2,4~4,5~1,4|3|[1]→[1,4]→[1,4]।
st|push1,push2,pop,push1,push2,pop,pop,pop,push2 — pop sequence?|2 2 1 1 2~2 2 1 2 1~2 2 2 2 1~2 2 2 1 2|0|
st|Balanced parenthesis / postfix মূল্যায়নে?|Stack~Queue~Array~Tree|0|
st|Java recursion পরিচালনায় OS কোন DS?|Array~Stack~Queue~Tree|1|
st|P,Q,R,S,T push; ৪ বার pop করে queue-তে; queue থেকে ২টি delete করে stack-এ push; এখন pop — কী?|S~T~P~Q|0|Queue: T,S,R,Q → delete T,S → push T,S → pop = S।
st|কোনটি linear DS?|Stack~Graph~Tree~Binary tree|0|
st|4+3*(6*3-12) infix→postfix-এ stack-এ একসাথে সর্বোচ্চ symbol?|1~2~3~4|3|
st|Linked list stack-এ push হয়?|শুরুতে~শেষে~মাঝে~কোথাও না|0|
tr|Binary tree-এর ধরন নয় কোনটি?|Full~Complete~Extended~Linked binary tree|3|Linked = implementation।
tr|n node-এর binary tree-র সর্বোচ্চ height (root=0)?|log₂n~n~n−1~n/2|2|Skewed tree।
tr|BST-এর inorder traversal দেয়?|Preorder ক্রম~Sorted ক্রম~Postorder~Level|1|
tr|n leaf-যুক্ত full binary tree-তে মোট node?|2n~2n−1~n−1~n/2|1|
tr|Preorder 15,10,8,12,20,16,25 হলে inorder?|8,10,12,15,16,20,25~25,20,16,15,12,10,8~15,10,8,12,20,16,25~10,8,12,15,16,20,25|0|
tr|Postorder DBECA, Inorder DBAEC হলে Preorder?|ABDCE~ABDEC~ACEBD~BDACE|1|
tr|4টি distinct key দিয়ে কতটি BST?|5~14~24~35|1|Catalan C₄।
tr|3টি unlabeled node দিয়ে কতটি binary tree?|3~5~6~30|1|
tr|3টি labeled node দিয়ে কতটি binary tree?|5~6~30~60|2|5×3!।
tr|BST-তে 50,15,62,5,20,58,91,3,8,37,60,24 insert — root-এর বাম, ডান subtree-র node সংখ্যা?|4,7~7,4~8,3~3,8|1|
tr|7,5,1,8,3,6,0,9,4,2 BST-এর preorder?|7,5,1,0,3,2,4,6,8,9~0,2,4,3,1,6,5,9,8,7~0..9~9,8,6,4,2,3,0,1,5,7|0|
tr|Preorder 30,20,10,15,25,23,39,35,42 BST-এর postorder?|10,20,15,23,25,35,42,39,30~15,10,25,23,20,42,35,39,30~15,20,10,23,25,42,35,39,30~15,10,23,25,20,35,42,39,30|3|
tr|N level-এর binary tree-তে সর্বোচ্চ node?|2ᴺ~2ᴺ⁻¹~2ᴺ−1~N²|2|1+2+…+2ᴺ⁻¹।
tr|Binary tree-তে degree-2 node n₂ হলে leaf N₀?|n₂−1~n₂+1~2n₂~n₂|1|
tr|n vertex-এর tree-তে edge?|n~n+1~n−1~n²|2|
tr|AVL tree-এর balance factor?|{−1,0,+1}~{0,1}~{−2..2}~যেকোনো|0|
tr|Skewed BST-এ search?|O(1)~O(log n)~O(n)~O(n²)|2|
tr|DB indexing-এ কোন tree?|B/B+ Tree~Heap~Trie~Expression tree|0|
tr|Expression tree-এর inorder/preorder/postorder থেকে পাওয়া যায়?|infix/prefix/postfix~সব infix~সব postfix~কিছুই না|0|
hs|hash 'key mod 7'-এ 85 কোন bucket-এ?|0~1~3~6|1|
hs|101 mod 7 =?|2~3~4~5|1|
hs|Hashing-এ গড় search time?|O(n)~O(log n)~O(1)~O(n²)|2|
hs|দুই key একই bucket-এ গেলে?|Overflow~Collision~Underflow~Rehash|1|
hs|Linear probing-এর প্রধান সমস্যা?|Clustering~বেশি memory~দুটি hash function~chain|0|
hs|Separate chaining collision সামলায়?|পরের bucket দিয়ে~linked list দিয়ে~দ্বিতীয় hash দিয়ে~table বড় করে|1|
hs|Quadratic probing-এ i-তম ধাপে bucket?|h+i~h+i²~h+i·h2~2h|1|
hs|Double hashing-এ i-তম ধাপে?|h+i·hash2(x)~h+i²~h+i~h|0|
ll|Linked list-এর head-এ insert?|O(1)~O(n)~O(log n)~O(n²)|0|
ll|Linked list-এ binary search কার্যকর নয় কেন?|random access নেই~sorted নয়~memory কম~কারণ নেই|0|
ll|Singly linked list reverse?|O(1)~O(n)~O(log n)~O(n²)|1|
gr|Unweighted graph-এ এক vertex থেকে সব দূরত্ব?|BFS~DFS~Kruskal~Heap sort|0|
gr|Weighted graph-এ shortest path (non-negative)?|BFS~DFS~Dijkstra~Prim|2|(PDF-এ DFS লেখা — ভুল)
gr|Negative edge থাকলে single source?|Dijkstra~Bellman-Ford~Kruskal~BFS|1|
gr|All-pairs shortest path?|Floyd-Warshall~Dijkstra~DFS~Prim|0|
gr|MST-এর greedy algorithm?|Kruskal~Prim~দুটোই~কোনোটিই নয়|2|
ss|Merge sort-এর time complexity?|O(n)~O(n log n)~O(n²)~O(log n)|1|সব case-এ।
ss|Merge sort কোন technique?|Divide & conquer~Greedy~DP~Backtracking|0|
ss|External sorting-এ সাধারণত কোনটি?|Merge sort~Bubble~Selection~Insertion|0|
tr|AVL tree-এ delete-এর পর প্রয়োজনে কী করতে হয়?|rotation করে re-balance~কিছুই না~নতুন tree বানানো~শুধু root বদল|0|
tr|AVL: node-এর BF=+2, বাম child-এর BF=+1 হলে?|LL (right rotate)~LR~RR~RL|0|
tr|AVL: node-এর BF=+2, বাম child-এর BF=−1 হলে?|LR~LL~RR~RL|0|
hs|mod 7 linear probing: 50,700,76,85 insert — 85 কোথায়?|bucket 1~bucket 2~bucket 3~bucket 6|1|1 ভরা (50) ⇒ 2।
hs|Linear probing-এ কোন clustering হয়?|Primary~Secondary~কোনোটিই না~Tertiary|0|
hs|Open addressing-এ delete করলে bucket-এ কী করা হয়?|deleted চিহ্ন~খালি রাখা~পরেরগুলো সরানো~table নতুন বানানো|0|
hs|কোন পদ্ধতিতে load factor ১ ছাড়াতে পারে?|Separate chaining~Open addressing~দুটোই~কোনোটিই নয়|0|
hs|mod 7 quadratic probing: 85 (1 ভরা) কোন bucket-এ যাবে?|2~3~4~5|0|1+1²=2।
cx|T(n)=T(n/2)+1 (binary search recurrence) থেকে complexity?|O(n)~O(log n)~O(n log n)~O(1)|1|প্রতি ধাপে সমস্যা অর্ধেক।
cx|for(i=0;i<n;i++) for(j=0;j<i;j++) — মোট ধাপ?|O(n)~O(n log n)~O(n²)~O(log n)|2|0+1+…+(n−1)=n(n−1)/2।
ss|Merge sort-এ বাড়তি memory কত লাগে?|O(1)~O(n)~O(log n)~O(n²)|1|merge-এর জন্য temporary array।
ss|Selection sort কি stable (সাধারণ swap-সহ)?|হ্যাঁ সবসময়~না, equal key-এর ক্রম বদলে যেতে পারে~শুধু sorted হলে~কোনোটিই নয়|1|দূরের swap।
ss|Quick sort-এ pivot সবসময় সবচেয়ে ছোট বা বড় হলে কী হয়?|O(n log n)~O(n²)~O(n)~O(log n)|1|ভারসাম্যহীন partition।
ss|Sorted array-তে একটি key 1000 বার খোঁজা হবে। কোনটি ভালো?|Linear (প্রতিবার)~Binary (প্রতিবার)~Bubble sort চালিয়ে~কোনোটিই নয়|1|প্রতিবার O(log n)।
st|A+B*C−D/F এর postfix?|ABC*+DF/−~AB+C*DF/−~ABC*+D−F/~A+BC*−DF/|0|* ও / আগে, তারপর +,−।
st|Quick sort iterative করতে কোন DS দরকার?|Queue~Stack~Heap~Tree|1|recursion-এর বিকল্প call stack।
st|DFS-এ কোন DS ব্যবহার হয় (iterative)?|Queue~Stack~Heap~Hash|1|BFS-এ queue, DFS-এ stack।
st|Array-ভিত্তিক circular queue পূর্ণ হওয়ার শর্ত (size n)?|(rear+1)%n==front~rear==n~front==0~rear==front|0|
st|Priority queue বানানোর সবচেয়ে কার্যকর DS?|Heap~Stack~Array (sorted না)~Singly list|0|insert ও remove O(log n)।
tr|দুই child-যুক্ত BST node delete করলে কার দ্বারা প্রতিস্থাপন করা হয় (সাধারণত)?|Inorder successor~Preorder predecessor~Postorder successor~Root|0|ডান subtree-র সবচেয়ে ছোট।
tr|2n+1 node-যুক্ত full binary tree-তে internal node কতটি?|n~n+1~n−1~2n|0|leaf = n+1।
tr|প্রতিটি internal node-এর ঠিক ৩ child; internal node i টি হলে leaf?|i+1~2i+1~3i~2i|1|leaf = (k−1)i+1।
tr|0-indexed heap array-তে index i-এর বাম child?|2i~2i+1~2i+2~i+1|1|parent = ⌊(i−1)/2⌋।
tr|1,7,2,6,3,5,8 পরপর max-heap-এ insert করলে root?|1~7~8~6|2|8 উপরে উঠে আসে। Array: 8,6,7,1,3,2,5।
tr|15 node-যুক্ত complete binary tree (heap)-এর height (edge)?|3~4~2~15|0|⌊log₂15⌋=3।
tr|Tree-র মতো hierarchical সম্পর্ক বোঝাতে উপযুক্ত DS?|Tree~Stack~Queue~Array|0|
tr|BST-তে 10,5,15,3,7 insert করলে height (edge)?|1~2~3~4|1|3 ও 7 হলো level 2।
hs|Table size 5, hash=k mod 5, linear probing: 2,8,17,12 insert — 12 কোথায়?|bucket 2~bucket 3~bucket 4~bucket 0|3|2→2, 8→3, 17→4, 12→2,3,4 ভরা ⇒ 0।
hs|Chaining, size 5, k mod 5: 2,8,17,12 — bucket 2-এ কী থাকে?|2,17,12~2,8~17~12|0|তিনটি key-ই 2 mod 5।
hs|Size 11, h(k)=k mod 11, linear probing: 26,42,5,44,92 — 92 কোথায়?|bucket 4~bucket 5~bucket 6~bucket 7|2|92 mod 11=4 ভরা (26), 5 ভরা (5), 6 খালি।
hs|Linear probing-এর অসুবিধা কী?|Clustering ও খোঁজা ধীর হওয়া~memory বেশি~hash function বেশি~O(1) থাকে না কখনোই|0|
ll|Data[20][50], প্রতি element 4 byte, base 2000 — row-major-এ Data[10][10]-এর ঠিকানা?|4040~2840~2440~4440|0|2000+4×(10×50+10)।
ll|একই array column-major-এ Data[10][10]?|4040~2840~2440~2000|1|2000+4×(10×20+10)।
ll|Doubly linked list-এর প্রতি node-এ কয়টি pointer?|১~২~৩~০|1|prev ও next।
ll|Circular linked list-এর শেষ node কোথায় যুক্ত?|NULL~প্রথম node~মাঝের node~নিজের সাথে না|1|
gr|n vertex-এর complete undirected graph-এ edge?|n(n−1)/2~n²~n−1~2n|0|
gr|BFS-এ node ধরে রাখতে কোন DS?|Stack~Queue~Tree~Array|1|
gr|Adjacency matrix-এ V vertex-এর space?|O(V)~O(V²)~O(V log V)~O(E)|1|
gr|Network-এর সব node সংযুক্ত রেখে সবচেয়ে কম খরচের tree?|Minimum spanning tree~DFS tree~Heap~BST|0|
st|A+B*C এর prefix?|+A*BC~*+ABC~ABC*+~+*ABC|0|* আগে হয় ⇒ B*C, তারপর A+(B*C)।
st|(A+B)*C এর postfix?|AB+C*~ABC*+~AB*C+~A+BC*|0|
st|a+(b-c)*d এর prefix?|+a*-bcd~*+a-bcd~+a-b*cd~abc-d*+|0|
st|A-B-C এর postfix?|AB-C-~ABC--~A-BC-~AB-C+|0|বাম-সংযুক্ত।
st|A^B^C এর postfix (^ ডান-সংযুক্ত)?|ABC^^~AB^C^~^^ABC~A^BC^|0|A^(B^C)।
st|(A+B)*(C-D) এর prefix?|*+AB-CD~+A*B-CD~AB+CD-*~*A+B-CD|0|
st|A*(B+C)/D এর postfix?|ABC+*D/~AB*C+D/~ABCD+*/~A*BC+D/|0|
st|Prefix expression-এর মান নির্ণয়ে কোন দিক থেকে পড়া হয়?|ডান থেকে বামে~বাম থেকে ডানে~মাঝ থেকে~যেকোনো|0|
st|Prefix - * + 2 3 4 5 এর মান?|15~20~25~5|0|(2+3)*4−5।
st|Postfix 2 3 1 * + 9 - এর মান?|-4~4~14~-14|0|2+3*1−9।
st|Postfix/Prefix-এ বন্ধনী লাগে না কেন?|operator-এর অবস্থানই কাজের ক্রম ঠিক করে~কম্পিউটার বন্ধনী বোঝে না~precedence নেই~অপারেটর কম|0|
gr|Network loop এড়াতে?|Spanning tree~Heap~Stack~Queue|0|`.split('\n').map(l=>{const p=l.split('|');return{s:p[0],q:p[1],o:p[2].split('~'),a:+p[3],e:p[4]||''}});
function shuf(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function renderQ(list,el,id){el.innerHTML=list.map((q,i)=>`<div class="q card"><b>${i+1}. ${q.q}</b>${q.o.map((o,j)=>`<label><input type="radio" name="${id}${i}" data-i="${i}" data-j="${j}"> ${o}</label>`).join('')}<div id="${id}r${i}"></div></div>`).join('');
 el.onchange=e=>{const i=+e.target.dataset.i,j=+e.target.dataset.j,q=list[i],ok=j==q.a;if(el.dataset.exam)return;$('#'+id+'r'+i).innerHTML=`<span class="${ok?'good':'bad'}">${ok?'সঠিক ✔':'ভুল ✘ — সঠিক: '+q.o[q.a]}</span> ${q.e}`}}
function quiz(sec,sel){renderQ(BANK.filter(q=>q.s==sec),$(sel),sec)}

```

## index.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Data Structure Tutorial</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h1>Data Structure — পূর্ণাঙ্গ টিউটোরিয়াল</h1><p>Cloud IT Online Batch-13 নোট + Bangladesh Bank / ICB ইত্যাদি পরীক্ষার প্রশ্ন + ইন্টারেক্টিভ অ্যানিমেশন।</p>
<div class="card"><b>কীভাবে চালাবে:</b> ← → কী বা নিচের বোতাম দিয়ে স্লাইড বদলাও। প্রতিটি পেজে নিজে চালানো যায় এমন অ্যানিমেশন আছে।</div>
<div class="card"><b>পাঠক্রম:</b> Complexity · Search · Sorting · Stack/Queue · Linked List · Tree/BST · AVL · Hashing · Graph · Model Test (৩০টি random প্রশ্ন)</div></section>
<section class="slide"><h2>এই সাইট কীভাবে পড়বে</h2><ol><li><b>স্লাইড পড়ো:</b> প্রতি পেজে আগে বাংলা ব্যাখ্যা ও সংজ্ঞা। ← → কী বা নিচের বোতামে স্লাইড বদলাবে।</li><li><b>অ্যানিমেশন নিজে চালাও:</b> প্রতিটি ছবির পাশে “বাংলায় ব্যাখ্যা” কার্ড আছে — বোতাম চেপে ধাপগুলো মিলিয়ে দেখো।</li><li><b>অনুশীলন প্রশ্ন:</b> প্রতি পেজের শেষে সেই বিষয়ের প্রশ্ন; উত্তর বেছে নিলেই ব্যাখ্যা আসবে।</li><li><b>Model Test:</b> সবশেষে ৩০টি random প্রশ্ন, Shuffle করে বারবার দিতে পারবে।</li></ol><div class="card"><b>প্রস্তাবিত ক্রম:</b> Complexity → Search → Sorting → Stack/Queue → Linked List → Tree/BST → AVL → Hashing → Graph → Model Test।</div><div class="card"><b>রঙের অর্থ:</b> হলুদ = এখন তুলনা/ভিজিট হচ্ছে; সবুজ = সম্পন্ন/পাওয়া গেছে; নীল = সক্রিয় সীমা বা সাধারণ অবস্থা; ধূসর = বাদ পড়া অংশ।</div></section><section class="slide"><h2>Data Structure কী?</h2><p>Data সাজিয়ে রাখার ও ব্যবহারের পদ্ধতি। <b>Linear:</b> Array, Stack, Queue, Linked List। <b>Non-linear:</b> Tree, Graph।</p><p>Data Structure ও Algorithm একে অপরের সাথে যুক্ত — সঠিক structure বেছে নিলে algorithm দ্রুত হয়।</p></section>
<script src="app.js"></script></body></html>

```

## complexity.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Complexity</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Time Complexity কী?</h2>
<p>একটি algorithm চালাতে processor-কে কতগুলো <b>মৌলিক operation</b> করতে হয়, তার হিসাবই time complexity। যে algorithm-এর operation কম, সে বেশি দ্রুত (faster)। ঘড়ির সেকেন্ডে সময় মাপলে কম্পিউটারভেদে ফল বদলায়, তাই আমরা operation গুনি।</p>
<div class="card"><b>গোনার নিয়ম:</b> Assignment (=) → ১; Arithmetic (+ − * /) → ১; Comparison (&gt; &lt; ==) → ১; return → ১। Algorithm-এর মোট operation = সব আলাদা operation-এর যোগফল।</div>
<div class="card"><b>উদাহরণ ১:</b> <code>int function1(int x){ x = x + 1; return x * 5; }</code><br>x+1 → ১ (যোগ) + ১ (assign) = ২; x*5 → ১ + return ১ = ২; মোট <b>4 operation</b>।</div>
<div class="card"><b>উদাহরণ ২ (loop):</b> <pre>int sum = 0;                 // 1
for(int i=1; i&lt;=n; i++)      // i=1 → 1;  i&lt;=n → n+1 বার;  i++ → n বার
    sum = sum + i;           // 2n   (যোগ + assign)
return sum;                  // 1
T(n) = 1 + 1 + (n+1) + n + 2n + 1 = <b>4n + 4</b></pre>n=1 হলে 8 operation (হাতের নোটের “Total time: 8”)। Loop-এর ভেতরের কাজ যত বার চলে, খরচও তত বার যোগ হয়।</div></section>

<section class="slide"><h2>তুলনা: Linear search কত operation খায়?</h2>
<pre>int linearsearch(int A[], int n, int value){
  for(i=0; i&lt;n; i++)          // 1 + (n+1) + n
     if(A[i]==value)          // n বার তুলনা
         return i;            // সফল হলে
  return -1; }                // 1</pre>
<p>সবচেয়ে খারাপ ক্ষেত্রে (value নেই বা শেষে): <b>T(n) = 1 + (n+1) + n + n + 1 = 3n + 3</b>। অর্থাৎ n=10 হলে <b>33 operation</b>, n=100 হলে 303, n বাড়লে operation ও সমানুপাতে বাড়ে।</p>
<div class="card"><b>Input size-এর ওপর নির্ভর করে না এমন:</b> <code>int fun(int a,int b){ x=a*b; return x; }</code> → T(n) = 2 + 1 = 3 সবসময় (constant)। Input যত বড়ই হোক সময় একই।</div>
<div class="card"><b>Best/Worst case:</b> একই algorithm-এ input-এর ধরনভেদে সময় আলাদা হয়। যদি time complexity সবচেয়ে বেশি হতে পারে এমন input ধরি, সেটিই <b>Worst case time complexity</b>। সাধারণত worst case-ই বিশ্লেষণ করা হয়, কারণ এটি “এর বেশি সময় কখনোই লাগবে না” এই নিশ্চয়তা দেয়।</div></section>

<section class="slide"><h2>Time Complexity দিয়ে algorithm তুলনা</h2>
<p>ধরা যাক দুটি algorithm: <b>T₁(n) = n²</b> এবং <b>T₂(n) = 215·n</b>। ছোট n-এ T₁ কম, কিন্তু n বাড়লে T₁ অনেক দ্রুত বাড়ে।</p>
<div id="cmp"></div>
<div class="card">n = 215 পর্যন্ত n² ≤ 215n; n=215-এ দুটি সমান (46225); তার পর থেকে n² সবসময় বেশি। <b>সিদ্ধান্ত:</b> input বড় হলে T₂ (linear) জেতে — তাই আমরা “n বড় হলে কে কেমন” তা দেখি। এই বড় n-এর আচরণই <b>asymptotic</b> বিশ্লেষণ।</div></section>

<section class="slide"><h2>শুধু সবচেয়ে বড় term রাখি</h2>
<p>T₁(n) = 67n² + 58n + 35, ধরা যাক n = 10⁷। তখন 67n² ≈ 67×10¹⁴ আর 58n ≈ 58×10⁷; দ্বিতীয় অংশ প্রথমটির তুলনায় এত ছোট যে ধরার দরকার নেই। তাই <b>T₁(n) = O(n²)</b> (শুধু বড় term, constant বাদ)। একইভাবে T₂(n) = 55n² + 10√n + 3 = O(n²)।</p>
<div class="card">নিচের সবগুলো <b>O(n²)</b>: 7n²+2n+37, n²+√n, 75n²। নিচের সবগুলো <b>O(n)</b>: 6n+39, 6n+log n+39, 85n।</div>
<div class="card"><b>বৃদ্ধির ক্রম (ছোট→বড়):</b> 1 &lt; log n &lt; √n &lt; n &lt; n log n &lt; n² &lt; 2ⁿ &lt; n!</div>
<table><tr><th>Notation</th><th>নাম</th><th>উদাহরণ ফাংশন</th></tr><tr><td>O(1)</td><td>Constant</td><td>f(n)=2, 5, 5000</td></tr><tr><td>O(log n)</td><td>Logarithmic</td><td>i*=2 loop</td></tr><tr><td>O(n)</td><td>Linear</td><td>2n+3, 5000n+700, n/3000+6</td></tr><tr><td>O(n²)</td><td>Quadratic</td><td>দুই nested loop</td></tr><tr><td>O(n³)</td><td>Cubic</td><td>তিন nested loop</td></tr><tr><td>O(2ⁿ), O(3ⁿ)</td><td>Exponential</td><td>সব subset</td></tr></table></section>

<section class="slide"><h2>Big-O অ্যারিথমেটিক ও loop বিশ্লেষণ</h2>
<div class="card"><b>যোগ নিয়ম:</b> O(f(n)) + O(g(n)) = O(সবচেয়ে বড়টি)। <b>গুণ নিয়ম:</b> O(f(n)) × O(g(n)) = O(f(n)·g(n))।</div>
<pre>int n = 5;                       // O(1)
int sum = 0;                     // O(1)
for(int i=1; i&lt;=n; i++) sum += i;    // O(n)
for(i=1; i&lt;=n; i++)              // O(n)
   for(j=1; j&lt;=n; j++) ;          // × O(n)  ⇒ O(n²)
মোট = O(1)+O(1)+O(n)+O(n²) = <b>O(n²)</b>

for(int i=1; i&lt;=n; i++)          // O(n)
   for(j=1; j&lt;=n; j=j*2) ;       // × O(log n)  ⇒ <b>O(n log n)</b></pre>
<table><tr><th>Loop ধরন</th><th>Complexity</th><th>কেন</th></tr><tr><td>Constant বার চলে (i≤c)</td><td>O(1)</td><td>swap() ফাংশনও O(1)</td></tr><tr><td>i += c বা i −= c</td><td>O(n)</td><td>n/c বার</td></tr><tr><td>i *= c বা i /= c</td><td>O(log n)</td><td>প্রতিবার c-গুণ/ভাগ</td></tr><tr><td>Nested loop</td><td>O(nᶜ)</td><td>ভেতরের statement-এর মোট বার</td></tr></table></section>

<section class="slide"><h2>Worst, Average ও Best case</h2>
<p><b>Worst case:</b> সবচেয়ে বেশি সময় (upper bound)। Linear search-এ element শেষে বা নেই ⇒ n তুলনা ⇒ Θ(n)।<br><b>Best case:</b> সবচেয়ে কম সময় (lower bound)। element প্রথম ঘরে ⇒ ১ তুলনা ⇒ Θ(1)।<br><b>Average case:</b> সম্ভাব্য সব ইনপুটের সময়ের গড়। Element i-তম ঘরে থাকলে i তুলনা:</p>
<div class="card">গড় = (1+2+…+n)/n = [n(n+1)/2]/n = (n+1)/2 ⇒ <b>Θ(n)</b></div>
<div class="card">বাস্তবে প্রায় সবসময় worst case বিশ্লেষণ করা হয় (নিশ্চয়তা দেয়)। Average case কঠিন — সব ইনপুটের বণ্টন জানতে হয়। Best case-এর মূল্য কম, কারণ worst case-এ algorithm অনেক খারাপ চলতে পারে।</div></section>

<section class="slide"><h2>Asymptotic Notation: O, Ω, Θ</h2>
<div class="card"><b>Big-O (upper bound):</b> f(n) = O(g(n)) যদি ধনাত্মক c ও n₀ থাকে যাতে <b>0 ≤ f(n) ≤ c·g(n)</b> সব n ≥ n₀-এর জন্য।</div>
<div class="card"><b>Big-Ω (lower bound):</b> f(n) = Ω(g(n)) যদি <b>0 ≤ c·g(n) ≤ f(n)</b> সব n ≥ n₀।</div>
<div class="card"><b>Θ (tight bound):</b> f(n) = Θ(g(n)) যদি c₁·g(n) ≤ f(n) ≤ c₂·g(n), অর্থাৎ O ও Ω দুটিই সত্য।</div>
<div class="card"><b>উদাহরণ (Big-O):</b> f(n) = 4n³+10n²+5n+8, g(n) = n³। n ≥ 1-এর জন্য f(n) ≤ (4+10+5+8)n³ = 27n³ ⇒ c=27, n₀=1 দিয়ে প্রমাণিত, f(n) = O(n³)। (বইয়ে c=5, n≥4 লেখা আছে — এটি ঠিক নয়: n=4-এ f=444 > 5×64=320। c=5-এর জন্য n₀=11 লাগে।)</div>
<div class="card"><b>উদাহরণ (Big-Ω):</b> f(n)=3n+2, g(n)=n। c=3 নিলে 3n ≤ 3n+2 সব n-এ সত্য ⇒ f(n) = Ω(n)। আবার 3n+2 ≤ 4n (n≥2) ⇒ O(n) ⇒ <b>Θ(n)</b>।</div></section>

<section class="slide"><h2>প্রশ্ন: কোন loop সবচেয়ে efficient?</h2>
<p>চারটি function; সবগুলোতে একটি for loop ও ভেতরে একই কাজ। n ধনাত্মক input size।</p>
<table><tr><th>Loop</th><th>কত বার চলে</th><th>Complexity</th></tr><tr><td>A: for(i=0;i&lt;n;i++)</td><td>n বার</td><td>O(n)</td></tr><tr><td>B: for(i=0;i&lt;n;i+=2)</td><td>n/2 বার (constant বাদ)</td><td>O(n)</td></tr><tr><td>C: for(i=1;i&lt;n;i*=2)</td><td>i = 1,2,4,…,2ᵏ; 2ᵏ=n ⇒ k = log₂n</td><td><b>O(log n)</b></td></tr><tr><td>D: for(i=n;i&gt;−1;i/=2)</td><td>i কখনো −1-এর নিচে যায় না (শেষে 0/2=0), condition সবসময় সত্য ⇒ থামে না</td><td>অসীম</td></tr></table>
<div class="card"><b>উত্তর: C।</b> log n &lt; n/2 ≈ n তাই C সবচেয়ে দ্রুত; D তো শেষই হয় না।</div></section>

<section class="slide"><h2>ইন্টারেক্টিভ ল্যাব</h2>
<div class="card"><b>কীভাবে চালাবে:</b> n-এর slider সরাও এবং loop বেছে নাও — loop আসলে কত বার চলে ও কোন complexity-র সাথে মেলে তা সাথে সাথে দেখাবে। নিচের টেবিলে ফাংশনগুলোর মানও বদলাবে।</div>
n = <input id="n" type="range" min="1" max="64" value="16"> <b id="nv"></b>
<select id="lp" onchange="lab()"><option value="0">for(i=0;i&lt;n;i++)</option><option value="1">for(i=0;i&lt;n;i+=2)</option><option value="2">for(i=1;i&lt;n;i*=2)</option><option value="3">for(i=n;i&gt;0;i/=2)</option><option value="4">nested n × n</option><option value="5">nested n × log n</option></select>
<p id="res"></p><table id="t"></table></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
quiz('cx','#qz');
$('#cmp').innerHTML=tb(['n','T₁ = n²','T₂ = 215n','ছোট কে?'],[1,2,10,100,215,216,1000].map(n=>[n,n*n,215*n,n*n<215*n?'T₁':n*n==215*n?'সমান':'T₂']));
function cnt(k,n){let c=0,i;if(k==0)for(i=0;i<n;i++)c++;if(k==1)for(i=0;i<n;i+=2)c++;if(k==2)for(i=1;i<n;i*=2)c++;if(k==3)for(i=n;i>0;i=Math.floor(i/2))c++;if(k==4)c=n*n;if(k==5)c=n*cnt(2,n);return c}
const NM=['O(n)','O(n)','O(log n)','O(log n)','O(n²)','O(n log n)'];
function lab(){const n=+$('#n').value,k=+$('#lp').value;$('#nv').textContent=n;$('#res').innerHTML='ভেতরের statement চলবে <b>'+cnt(k,n)+'</b> বার ⇒ '+NM[k];
$('#t').innerHTML=tb(['ফাংশন','মান'],[['1',1],['log n',Math.round(Math.log2(n)*100)/100],['n',n],['n log n',Math.round(n*Math.log2(n))],['n²',n*n],['2ⁿ',n>50?'বিশাল':2**n]])}
$('#n').oninput=lab;lab();</script></body></html>

```

## search-sort.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Searching</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Searching — খোঁজার কৌশল</h2>
<p>কম্পিউটার প্রোগ্রামিংয়ের দুটি দিক: (১) data সাজিয়ে রাখা (data structure) এবং (২) সঠিক algorithm বেছে সমস্যা সমাধান। Searching হলো কোনো element data-র <b>কোন অবস্থানে</b> আছে তা বের করা। দুটি প্রধান পদ্ধতি:</p>
<div class="card"><b>১. Linear (Sequential) search</b> — শুরু থেকে এক এক করে দেখা; list sorted না হলেও চলে।<br><b>২. Binary search</b> — sorted list-এর মাঝখানে দেখে প্রতিবার অর্ধেক বাদ দেওয়া।</div>
<div class="card">যা সাজানো আছে তা খোঁজা সহজ: দোকানে পোশাক size/দামে সাজানো, শ্রেণিকক্ষে নাম বর্ণানুক্রমে, লাইব্রেরিতে বই বর্ণানুক্রমে — এজন্য sorting ও searching একসাথে শেখা হয়।</div></section>

<section class="slide"><h2>Linear Search</h2>
<p>List (ordered বা unordered) শুরু থেকে এক এক করে দেখা হয়, কাঙ্ক্ষিত element পাওয়া গেলে search সফল, নইলে ব্যর্থ। কতগুলো তুলনা লাগবে তা element কোথায় আছে তার ওপর নির্ভর করে: প্রথমে থাকলে ১টি, দ্বিতীয়ে ২টি, … গড়ে প্রায় (n+1)/2টি; না থাকলে n-টিই। <b>Time complexity: O(n)</b>।</p>
<pre>linsrch(a[n], x){
  index = 0; flag = 0;
  while (index &lt; n) do {
     if (x == a[index]) { flag = 1; break; }
     index++;
  }
  if (flag == 1) "found" else "not found" }</pre>
<div class="card"><b>উদাহরণ ১:</b> unsorted list 45 39 8 54 77 38 24 16 4 7 9 20। নিচে যেকোনো মান বেছে খুঁজে দেখো কত তুলনা লাগে।</div>
<select id="lk"></select><button onclick="lin()">Linear search</button><div class="cells" id="la"></div><p id="lm"></p>
<div class="card"><b>উদাহরণ ২:</b> index 0..8-এ −15 −6 0 7 9 23 54 82 101। x=7 ⇒ index 3-এ পাওয়া যায় (সফল); x=82 ⇒ index 7-এ (সফল); x=42 ⇒ পাওয়া যায় না (ব্যর্থ, ৯টি তুলনা)।</div></section>

<section class="slide"><h2>Linear search-এর C program</h2>
<pre>/* non-recursive */
for(i = 0; i &lt; n; i++){ if(number[i] == data){ flag = 1; break; } }
if(flag == 1) printf("Data found at location: %d", i+1);
else          printf("Data not found");

/* recursive */
void linear_search(int a[], int data, int position, int n){
  if(position &lt; n){
     if(a[position] == data) printf("Data Found at %d", position);
     else linear_search(a, data, position+1, n);
  } else printf("Data not found"); }</pre>
<div class="card">Recursive সংস্করণ প্রতিবার position ১ বাড়িয়ে নিজেকে ডাকে; position n ছুঁলে (base case) “not found”। সময় একই O(n), তবে recursion-এ call stack ব্যবহার হয়।</div></section>

<section class="slide"><h2>Binary Search</h2>
<p>List অবশ্যই <b>sorted</b>। মাঝের ঘর (mid) দেখি: a[mid] = x হলে পেলাম; x &lt; a[mid] হলে শুধু বামের অংশে, x &gt; a[mid] হলে শুধু ডানের অংশে খুঁজি। প্রতিবার অর্ধেক বাদ পড়ে, তাই n কে ২ দিয়ে ভাগ করতে করতে ১-এ পৌঁছাতে প্রায় log₂n ধাপ লাগে ⇒ <b>O(log n)</b> (সফল ও ব্যর্থ দুই ক্ষেত্রেই)।</p>
<pre>binsrch(a[], n, x){
  low = 1; high = n;
  while (low &lt;= high) do {
     mid = (low + high)/2
     if (x &lt; a[mid]) high = mid − 1;
     else if (x &gt; a[mid]) low = mid + 1;
     else return mid;
  }
  return 0; }</pre>
<div class="card">প্রতি ধাপে low বাড়ে অথবা high কমে — দুটি সংখ্যা পরস্পরের দিকে এগোয় এবং শেষে low &gt; high হলে element নেই বোঝা যায়।</div></section>

<section class="slide"><h2>Binary search অ্যানিমেশন</h2>
<div class="card"><b>কীভাবে চালাবে:</b> মান লিখে “শুরু” চাপো, তারপর “পরের ধাপ” চাপতে থাকো। হলুদ = mid; ঝাপসা = বাদ পড়া অংশ; সবুজ = পাওয়া গেছে। নিচে প্রতি ধাপের low/high/mid ও সিদ্ধান্ত লেখা হবে।</div>
<div class="cells" id="ba"></div>
<p>খুঁজবো: <input id="x" type="number" value="38" style="width:80px"><button onclick="bsInit()">শুরু</button><button onclick="bsStep()">পরের ধাপ</button></p><p id="bm"></p><div id="bl"></div></section>

<section class="slide"><h2>Binary search: কত তুলনা? (সব element)</h2>
<p>Array: 4 7 8 9 16 20 24 38 39 45 54 77 (১২টি)। নিচের টেবিল program দিয়ে গোনা হয়েছে।</p><div id="b12"></div>
<div class="card" id="s12"></div>
<p>Array: −15 −6 0 7 9 23 54 82 101 (৯টি):</p><div id="b9"></div><div class="card" id="s9"></div></section>

<section class="slide"><h2>Binary search-এর C program</h2>
<pre>/* non-recursive */
low = 0; high = n-1;
while(low &lt;= high){
   mid = (low + high)/2;
   if(number[mid] == data){ flag = 1; break; }
   else if(data &lt; number[mid]) high = mid - 1;
   else low = mid + 1; }

/* recursive (Exercise 1) */
void bin_search(int a[], int data, int low, int high){
  int mid;
  if(low &lt;= high){
     mid = (low + high)/2;
     if(a[mid] == data) printf("found at %d", mid+1);
     else if(data &lt; a[mid]) bin_search(a, data, low, mid-1);
     else bin_search(a, data, mid+1, high);
  } else printf("not found"); }</pre>
<div class="card"><b>Exercise 1: complexity।</b> প্রতি call-এ সমস্যা অর্ধেক হয় এবং ১টি তুলনা লাগে: T(n) = T(n/2) + 1 ⇒ T(n) = O(log₂n)।</div></section>

<section class="slide"><h2>Exercise 3: x কতবার আছে ও প্রথম অবস্থান</h2>
<pre>count = 0; first = -1;
for(i = 0; i &lt; n; i++){
   if(arr[i] == x){ count++; if(first == -1) first = i; } }
printf("%d বার, প্রথম index %d", count, first);</pre>
<div class="card">একবার পুরো array দেখতে হয় ⇒ O(n)। (Sorted হলে binary search দিয়ে প্রথম ও শেষ অবস্থান বের করে count = শেষ − প্রথম + 1; সময় O(log n)।)</div>
<div class="card"><b>Linear বনাম Binary:</b> Linear — sorting লাগে না, ছোট/unsorted data-তে ভালো, best O(1), worst O(n)। Binary — sorted দরকার, বড় data-তে অনেক দ্রুত O(log n), array-তে (random access) কার্যকর, linked list-এ নয়।</div></section>

<section class="slide"><h2>Scenario: কোন searching কোথায়?</h2>
<table><tr><th>ঘটনা</th><th>সমাধান ও কারণ</th></tr>
<tr><td>পোশাকের দোকান — size (Small→XL) বা দাম অনুযায়ী সাজানো</td><td>Sort: Insertion/Quick/Merge; Search: ছোট দোকানে Linear, sorted হলে Binary</td></tr>
<tr><td>হাজার হাজার বইয়ের লাইব্রেরি</td><td>বর্ণানুক্রমে সাজাও (Merge sort), Binary search — data sorted থাকে, খোঁজা খুব দ্রুত</td></tr>
<tr><td>ছোট unsorted attendance sheet-এ student ID খোঁজা</td><td>Linear search — সহজ, sorting লাগে না; best O(1), worst O(n)</td></tr>
<tr><td>অভিধানে শব্দ (বড় sorted data)</td><td>Binary search — O(log n), বিশাল sorted data-তে অত্যন্ত দ্রুত</td></tr>
<tr><td>ATM-এ কোটি কোটি ক্লায়েন্টের মধ্যে তথ্য আসা</td><td>Hashing (গড় O(1)), sorted/indexed হলে Binary search O(log n), database-এ B-Tree/B+ Tree (বিশাল data, দ্রুত disk access)</td></tr></table>
<div class="card"><b>অন্যান্য searching:</b> DFS — maze/puzzle পথ; BFS — সামাজিক মাধ্যমে বন্ধুর মধ্যে ছোট পথ; A* — গেম/রোবটে সবচেয়ে ভালো পথ। (দেখো: <a href="graph.html">Graph পেজ</a>)</div></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন (Searching)</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
renderQ(BANK.filter(q=>q.s=='ss'&&/[Ss]earch|খুঁজ|catalog|attendance|সার্চ/.test(q.q)),$('#qz'),'sr');
const LL=[45,39,8,54,77,38,24,16,4,7,9,20];$('#lk').innerHTML=LL.concat([99]).map(v=>'<option>'+v+'</option>').join('');
async function lin(){const x=+$('#lk').value;let f=0;for(let i=0;i<LL.length;i++){$('#la').innerHTML=LL.map((v,j)=>'<div class="cell '+(j==i?'mid':'')+(j<i?' dim':'')+'">'+v+'</div>').join('');$('#lm').textContent=(i+1)+'টি তুলনা…';await sleep(350);if(LL[i]==x){$('#la').innerHTML=LL.map((v,j)=>'<div class="cell '+(j==i?'ok':'dim')+'">'+v+'</div>').join('');$('#lm').textContent=x+' পাওয়া গেছে, '+(i+1)+'টি তুলনায়';return}}$('#lm').textContent=x+' নেই — '+LL.length+'টি তুলনার পরও ব্যর্থ'}
const A=[4,7,8,9,16,20,24,38,39,45,54,77];let lo,hi,cnt;
function showB(m,f){$('#ba').innerHTML=A.map((v,i)=>'<div class="cell '+(i<lo||i>hi?'dim':'')+(i==m?(f?' ok':' mid'):'')+'">'+v+'<br><small>'+(i+1)+'</small></div>').join('')}
function bsInit(){lo=0;hi=A.length-1;cnt=0;showB(-1);$('#bm').textContent='low=1, high=12';$('#bl').innerHTML=''}
function bsStep(){if(lo===undefined)bsInit();if(lo>hi){$('#bm').textContent='low > high ⇒ পাওয়া যায়নি';return}const x=+$('#x').value,m=(lo+hi)>>1;cnt++;const L=lo+1,H=hi+1;showB(m,A[m]==x);
let d=A[m]==x?'পাওয়া গেছে!':(x<A[m]?'x < a[mid] ⇒ high = mid−1':'x > a[mid] ⇒ low = mid+1');$('#bl').innerHTML+='<div>ধাপ '+cnt+': low='+L+', high='+H+', mid='+(m+1)+', a[mid]='+A[m]+' — '+d+'</div>';
if(A[m]==x){$('#bm').textContent=x+' পাওয়া গেছে, '+cnt+'টি তুলনায়';lo=1;hi=0;return}if(x<A[m])hi=m-1;else lo=m+1}
bsInit();
function bc(a,x){let l=0,h=a.length-1,c=0;while(l<=h){const m=(l+h)>>1;c++;if(a[m]==x)return c;if(x<a[m])h=m-1;else l=m+1}return -c}
function summ(a,id,sid){const s=a.map(x=>bc(a,x));$(id).innerHTML=tb(['Element'].concat(a),[['তুলনা'].concat(s)]);
const g=[a[0]-1].concat(a.slice(0,-1).map((v,i)=>(v+a[i+1])/2),[a[a.length-1]+1]).map(x=>-bc(a,x));
$(sid).innerHTML='সফল search-এ মোট '+s.reduce((p,c)=>p+c)+' ⇒ গড় '+s.reduce((p,c)=>p+c)+'/'+a.length+' ≈ <b>'+(s.reduce((p,c)=>p+c)/a.length).toFixed(2)+'</b> তুলনা; সর্বোচ্চ '+Math.max(...s)+'।<br>ব্যর্থ search-এর '+g.length+'টি সম্ভাবনায় তুলনা: '+g.join(', ')+' ⇒ গড় '+g.reduce((p,c)=>p+c)+'/'+g.length+' = <b>'+(g.reduce((p,c)=>p+c)/g.length).toFixed(2)+'</b>'}
summ(A,'#b12','#s12');summ([-15,-6,0,7,9,23,54,82,101],'#b9','#s9');</script></body></html>

```

## sorts.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sorting</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Sorting কী ও কেন?</h2>
<p>Sorting হলো element-গুলোকে কোনো উদ্দেশ্যে নির্দিষ্ট ক্রমে (ছোট→বড় বা বর্ণানুক্রমে) সাজানো। অভিধানে শব্দ আর ফোন ডিরেক্টরিতে নাম বর্ণানুক্রমে থাকে বলেই খোঁজা সহজ। সাজানো data-তে Binary search চালানো যায়।</p>
<div class="card"><b>দুই ধরন:</b> <b>Internal sorting</b> — সব element main memory-তে। <b>External sorting</b> — কিছু element secondary storage-এ (যেমন Merge sort বিশাল ফাইলে)। এই পেজে internal sorting।</div>
<div class="card"><b>আমরা যা শিখব:</b> Bubble · Selection · Insertion · Quick · Merge · Heap। প্রতিটির জন্য: ধারণা → ধাপে ধাপে হিসাব (program দিয়ে তৈরি) → code → complexity।</div></section>

<section class="slide"><h2>Bubble Sort</h2>
<p>Array-কে বারবার পাশাপাশি দুটি দুটি করে তুলনা করা হয় (X[i] বনাম X[i+1]); ক্রম ভুল হলে অদলবদল (swap)। প্রতি pass-এ সবচেয়ে বড় মান “বুদবুদের মতো” ডানে ভেসে যায়। এর আরেক নাম <b>exchange sort</b>। n টি element-এ <b>n−1 pass</b> লাগে।</p>
<div id="tb1"></div><div class="card" id="bn"></div>
<pre>void bubblesort(int x[], int n){
  int i, j, temp;
  for(i = 0; i &lt; n; i++)
    for(j = 0; j &lt; n - i - 1; j++)
      if(x[j] &gt; x[j+1]){ temp = x[j]; x[j] = x[j+1]; x[j+1] = temp; } }</pre>
<div class="card"><b>Complexity:</b> n−1 pass × প্রতি pass-এ ≈ n−1 তুলনা = (n−1)² = n²−2n+1 ⇒ <b>O(n²)</b>। (সঠিক গণনায় pass-এ তুলনা কমে বলে মোট n(n−1)/2।) Element বেশি হলে বহু অকার্যকর।</div></section>

<section class="slide"><h2>Selection Sort</h2>
<p>প্রতি pass-এ বাকি অংশ থেকে <b>সবচেয়ে ছোট</b> element খুঁজে তাকে সামনের ঘরের সাথে swap করা হয়। Pass 1: x[0..n−1]-এর ক্ষুদ্রতম x[0]-এর সাথে swap; Pass 2: x[1..n−1]-এর ক্ষুদ্রতম x[1]-এর সাথে; … মোট (n−1) pass এবং <b>সর্বোচ্চ n−1 swap</b>।</p>
<div id="tb2"></div>
<pre>void selectionSort(int low, int high){
  int i, j, temp, minindex;
  for(i = low; i &lt;= high; i++){
     minindex = i;
     for(j = i+1; j &lt;= high; j++)
        if(a[j] &lt; a[minindex]) minindex = j;
     temp = a[i]; a[i] = a[minindex]; a[minindex] = temp; } }</pre>
<div class="card"><b>Recursive রূপ:</b> selectionSort(n) → x[n..]-এর ক্ষুদ্রতম খুঁজে x[n]-এর সাথে swap, তারপর selectionSort(n+1); n শেষ index-এ পৌঁছালে থামে। <b>Complexity:</b> O(n²), তবে swap কম — তাই insertion/bubble-এ অনেক swap লাগলে selection পছন্দের।</div></section>

<section class="slide"><h2>Insertion Sort</h2>
<p>বামের অংশ sorted ধরে রাখা হয়। ডান থেকে একটি করে নতুন element (key) নিয়ে sorted অংশে সঠিক জায়গা খুঁজে ঢোকানো হয় — তাস সাজানোর মতো। যে element বড়, সে এক ঘর ডানে সরে।</p>
<div id="tb3"></div>
<div class="card"><b>Complexity:</b> Best (প্রায় sorted) <b>O(n)</b>, Average/Worst O(n²)। <b>কখন ভালো:</b> array-তে মাত্র কয়েকটি item জায়গার বাইরে থাকলে; live leaderboard-এর মতো প্রায় sorted data। এটি stable।</div></section>

<section class="slide"><h2>Quick Sort — Divide &amp; Conquer</h2>
<p>একটি <b>pivot</b> বেছে array-কে দুই ভাগে ভাগ করা হয়: pivot-এর চেয়ে ছোটগুলো বামে, বড়গুলো ডানে। তারপর দুই ভাগেই একই কাজ recursively করা হয়। সব ভাগ শেষ হলে পুরো array sorted।</p>
<div class="card"><b>partition() কীভাবে কাজ করে:</b> pivot = প্রথম element। ‘up’ pointer বাম থেকে ডানে চলে pivot-এর চেয়ে <b>বড়</b> element খোঁজে; ‘down’ pointer ডান থেকে বামে চলে pivot-এর চেয়ে <b>ছোট</b> element খোঁজে। দুটিই পেলে (up &lt; down) swap। up ও down পার হয়ে গেলে pivot ও a[down] অদলবদল — pivot তার চূড়ান্ত জায়গায়।</div>
<pre>quicksort(p, q){ if(p &lt; q){ j = PARTITION(a, p, q+1); quicksort(p, j-1); quicksort(j+1, q); } }
partition(a, m, p){ v = a[m]; up = m; down = p;
  do{ repeat up = up+1 until (a[up] &gt;= v);
      repeat down = down-1 until (a[down] &lt;= v);
      if(up &lt; down) interchange(a, up, down);
  } while(up &lt; down);
  a[m] = a[down]; a[down] = v; return down; }</pre>
<p><b>PDF-এর ১৩ element-এর উদাহরণ</b> (38 08 16 06 79 57 24 56 02 58 04 70 45) — প্রতিটি partition-এর পর:</p><div id="tb4"></div>
<div class="card"><b>Complexity:</b> গড় ও best O(n log n); pivot যদি সবসময় সবচেয়ে ছোট/বড় হয় তবে worst O(n²)। ভালো pivot = median। অগোছালো data-য় সাধারণত সবচেয়ে দ্রুত। Quick sort stable নয়।</div></section>

<section class="slide"><h2>Merge Sort</h2>
<p>Array-কে বারবার অর্ধেক করে ভাগ করা হয় যতক্ষণ না প্রতিটি ভাগে ১টি element; তারপর দুটি sorted অংশকে তুলনা করে <b>merge</b> করে বড় sorted অংশ বানানো হয়। প্রতিবার দুই অংশের সামনের element তুলনা করে ছোটটি নেওয়া হয়।</p>
<div id="tb5"></div>
<div class="card"><b>Complexity:</b> সব ক্ষেত্রে <b>O(n log n)</b>; বাড়তি O(n) memory লাগে; stable। বিশাল ফাইল (external sorting) ও library catalog-এ উপযোগী।</div></section>

<section class="slide"><h2>Heap Sort</h2>
<p>Heap হলো complete binary tree। <b>Max heap-এ root সবচেয়ে বড়।</b> ধাপ: (১) array থেকে max heap বানাও। (২) root (সবচেয়ে বড়) শেষের ঘরে swap করো এবং heap-এর আকার ১ কমিয়ে heapify করো। (৩) পুরো array sorted না হওয়া পর্যন্ত চালাও। Heap নিয়ে বিস্তারিত: <a href="tree.html">Tree পেজ</a>।</p>
<div id="tb6"></div>
<div class="card"><b>Complexity:</b> সব ক্ষেত্রে <b>O(n log n)</b>; বাড়তি memory প্রায় লাগে না (in-place); stable নয়। Priority queue ও OS-এর task scheduling-এ heap ব্যবহৃত।</div></section>

<section class="slide"><h2>অ্যানিমেশন ল্যাব</h2>
<div class="card" id="ex"><b>বাংলায় ব্যাখ্যা:</b> একটি বোতাম চাপো। হলুদ = এখন তুলনা/বদল হচ্ছে।</div>
<button onclick="run('sel')">Selection</button><button onclick="run('ins')">Insertion</button><button onclick="run('quick')">Quick</button><button onclick="run('heap')">Heap</button><button onclick="run('merge')">Merge</button><button onclick="run('bub')">Bubble</button><button onclick="rnd()">নতুন array</button><div class="bars" id="bb"></div><p id="m"></p></section>

<section class="slide"><h2>Sort তুলনা</h2>
<table><tr><th>Sort</th><th>Best</th><th>Average</th><th>Worst</th><th>বাড়তি memory</th><th>Stable?</th></tr>
<tr><td>Bubble</td><td>O(n)*</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr><tr><td>Selection</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>না</td></tr><tr><td>Insertion</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr><tr><td>Quick</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>না</td></tr><tr><td>Merge</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>হ্যাঁ</td></tr><tr><td>Heap</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>না</td></tr></table>
<p>*যদি “swap হয়নি” পতাকা ব্যবহার করা হয়; PDF-এর সাধারণ রূপে O(n²)।</p>
<div class="card"><b>কোথায় কোনটি:</b> Quick — database record sort · Merge — external sort · Bubble — শেখানো/ছোট list · Insertion — প্রায় sorted data (leaderboard) · Heap — priority queue, OS task scheduling।</div></section>

<section class="slide"><h2>Exercise (PDF) — সমাধান</h2><div id="exs"></div></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন (Sorting)</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
renderQ(BANK.filter(q=>q.s=='ss'&&!/[Ss]earch|খুঁজ|catalog|attendance|সার্চ/.test(q.q)),$('#qz'),'so');
function bub(a){const A=[...a],r=[];let c=0,s=0;for(let i=0;i<A.length-1;i++){for(let j=0;j<A.length-1-i;j++){c++;if(A[j]>A[j+1]){[A[j],A[j+1]]=[A[j+1],A[j]];s++}}r.push(['Pass '+(i+1),A.join(' '),'সবচেয়ে বড় '+A[A.length-1-i]+' জায়গায়'])}return{r,c,s}}
function sel(a){const A=[...a],r=[];for(let i=0;i<A.length-1;i++){let m=i;for(let j=i+1;j<A.length;j++)if(A[j]<A[m])m=j;[A[i],A[m]]=[A[m],A[i]];r.push(['Pass '+(i+1),'ক্ষুদ্রতম '+A[i]+' ⇄ index '+i,A.join(' ')])}return r}
function ins(a){const A=[...a],r=[];for(let i=1;i<A.length;i++){const k=A[i];let j=i-1;while(j>=0&&A[j]>k){A[j+1]=A[j];j--}A[j+1]=k;r.push(['key = '+k,A.slice(0,i+1).join(' ')+' | '+A.slice(i+1).join(' ')])}return r}
function part(A,m,p){const v=A[m];let up=m,dn=p;do{do{up++}while(up<p&&A[up]<v);do{dn--}while(A[dn]>v);if(up<dn){const t=A[up];A[up]=A[dn];A[dn]=t}}while(up<dn);A[m]=A[dn];A[dn]=v;return dn}
function qk(a){const A=[...a],r=[];const q=(l,h)=>{if(l>=h)return;const v=A[l],j=part(A,l,h+1);r.push(['pivot '+v+' (ঘর '+(l+1)+'–'+(h+1)+')','pivot এখন ঘর '+(j+1),A.join(' ')]);q(l,j-1);q(j+1,h)};q(0,A.length-1);return r}
function mg(a){const A=[...a],r=[];const m=(l,h)=>{if(l>=h)return;const k=(l+h)>>1;m(l,k);m(k+1,h);const t=[];let i=l,j=k+1;while(i<=k||j<=h){if(j>h||(i<=k&&A[i]<=A[j]))t.push(A[i++]);else t.push(A[j++])}t.forEach((x,z)=>A[l+z]=x);r.push(['merge ঘর '+(l+1)+'–'+(h+1),A.slice(l,h+1).join(' '),A.join(' ')])};m(0,A.length-1);return r}
function hp(a){const A=[...a],n=A.length,r=[];const sd=(i,m)=>{for(;;){let l=2*i+1,x=l+1,g=i;if(l<m&&A[l]>A[g])g=l;if(x<m&&A[x]>A[g])g=x;if(g==i)return;[A[i],A[g]]=[A[g],A[i]];i=g}};for(let i=(n>>1)-1;i>=0;i--)sd(i,n);r.push(['Max-heap তৈরি',A.join(' ')]);for(let e=n-1;e>0;e--){[A[0],A[e]]=[A[e],A[0]];sd(0,e);r.push(['root ⇄ ঘর '+(e+1)+'; heap আকার '+e,A.join(' ')])}return r}
const E=[33,44,22,11,66,55];let b=bub(E);
$('#tb1').innerHTML='<p>উদাহরণ: '+E.join(' ')+' (ছোট→বড়)</p>'+tb(['Pass','ফল','মন্তব্য'],b.r);$('#bn').innerHTML='৬টি element-এ <b>৫ pass</b> (n−1)। এই উদাহরণে মোট তুলনা '+b.c+', swap '+b.s+'।';
$('#tb2').innerHTML='<p>উদাহরণ: 70 80 50 45 55 75 65 60</p>'+tb(['Pass','কাজ','ফল'],sel([70,80,50,45,55,75,65,60]));
$('#tb3').innerHTML='<p>উদাহরণ: 3 1 4 5 9 2 6 5 (Exercise 9) — “|”-এর বাম পাশ sorted</p>'+tb(['ধাপ','ফল'],ins([3,1,4,5,9,2,6,5]));
$('#tb4').innerHTML=tb(['Partition','ফল','পুরো array'],qk([38,8,16,6,79,57,24,56,2,58,4,70,45]));
$('#tb5').innerHTML='<p>উদাহরণ: 38 27 43 3 9 82 10</p>'+tb(['ধাপ','merge-এর ফল','পুরো array'],mg([38,27,43,3,9,82,10]));
$('#tb6').innerHTML='<p>উদাহরণ: 33 44 22 11 66 55</p>'+tb(['ধাপ','array'],hp(E));
// exercises
const e2=bub([7,1,3,4,10,9,8,6,5,2]);let P=[5,3,8,9,1,7,0,2,6,4];const pj=part(P,0,10);
const c7=[3,0,2,4,5,8,7,6,9].filter((x,i,a)=>a.slice(0,i).every(y=>y<x)&&a.slice(i+1).every(y=>y>x));
function hins(a){const H=[];a.forEach(v=>{H.push(v);let i=H.length-1;while(i>0){const p=(i-1)>>1;if(H[p]>H[i]){[H[p],H[i]]=[H[i],H[p]];i=p}else break}});return H}
const H8=hins([10,12,1,14,6,5,8,15,3,9,7,4,11,13,2]);
$('#exs').innerHTML='<div class="card"><b>১.</b> Recursive binary search ও complexity: <a href="search-sort.html">Searching পেজ</a> — T(n)=T(n/2)+1 ⇒ O(log n)।</div>'+
'<div class="card"><b>২. Bubble sort, n=10:</b> প্রত্যাশিত pass = n−1 = <b>9</b>; তুলনা — PDF-সূত্র (n−1)×(n−1) = 81, সঠিক গণনায় n(n−1)/2 = 45; worst-case swap = 45। <b>7 1 3 4 10 9 8 6 5 2</b>-এ আসলে: pass '+e2.r.length+', তুলনা <b>'+e2.c+'</b>, swap <b>'+e2.s+'</b> (swap সংখ্যা = inversion সংখ্যা)। ফল: '+e2.r[e2.r.length-1][1]+'</div>'+
'<div class="card"><b>৩.</b> x-এর সংখ্যা ও প্রথম অবস্থান: <a href="search-sort.html">Searching পেজ</a>-এর শেষের দিকে code।</div>'+
'<div class="card"><b>৪. Matrix row-wise ও column-wise sort:</b> <pre>for(i=0;i&lt;R;i++) sort(m[i], C);        // প্রতিটি সারি আলাদা sort\nfor(j=0;j&lt;C;j++){ for(i=0;i&lt;R;i++) col[i]=m[i][j]; sort(col,R); for(i=0;i&lt;R;i++) m[i][j]=col[i]; }</pre>প্রতিটি সারি/কলাম আলাদা array ধরে যেকোনো sort (যেমন bubble) চালানো হয়।</div>'+
'<div class="card"><b>৫. Heap sort নাকি Quick sort (সীমিত memory)?</b> <b>Heap sort</b>: in-place (বাড়তি O(1)), worst case O(n log n)। Quick sort-এ recursion stack লাগে (O(log n) থেকে worst O(n)) এবং worst case O(n²)।</div>'+
'<div class="card"><b>৬.</b> 5 3 8 9 1 7 0 2 6 4, pivot 5, partition-এর পর: <b>'+P.join(' ')+'</b> (pivot 5 এখন ঘর '+(pj+1)+'; বামে সব ছোট, ডানে সব বড়)।</div>'+
'<div class="card"><b>৭.</b> 3,0,2,4,5,8,7,6,9 — pivot হতে পারে যার বামে সব ছোট ও ডানে সব বড়: <b>'+c7.join(', ')+'</b>।</div>'+
'<div class="card"><b>৮.</b> 10,12,1,14,6,5,8,15,3,9,7,4,11,13,2 পরপর min-heap-এ insert করলে array: <b>'+H8.join(' ')+'</b><div id="h8"></div></div>'+
'<div class="card"><b>৯.</b> 3,1,4,5,9,2,6,5 insertion sort: উপরের Insertion slide-এ ধাপে ধাপে দেখানো আছে; ফল <b>1 2 3 4 5 5 6 9</b>।</div>';
$('#h8').innerHTML=fig(AS(H8));
// animation lab
let D=[33,44,22,11,66,55,38,9],busy=0;const dr=(a,h=[])=>$('#bb').innerHTML=a.map((v,i)=>'<div class="bar '+(h.includes(i)?'cmp':'')+'" style="height:'+v*2+'px">'+v+'</div>').join('');
function rnd(){D=Array.from({length:8},()=>Math.floor(Math.random()*70)+5);dr(D)}
function fr(alg){const f=[],A=[...D],p=(h=[])=>f.push([[...A],h]);p();
if(alg=='bub')for(let i=0;i<A.length-1;i++)for(let j=0;j<A.length-1-i;j++){p([j,j+1]);if(A[j]>A[j+1]){[A[j],A[j+1]]=[A[j+1],A[j]];p([j,j+1])}}
if(alg=='sel')for(let i=0;i<A.length-1;i++){let m=i;for(let j=i+1;j<A.length;j++){p([m,j]);if(A[j]<A[m])m=j}[A[i],A[m]]=[A[m],A[i]];p([i,m])}
if(alg=='ins')for(let i=1;i<A.length;i++){let j=i;while(j>0&&A[j-1]>A[j]){p([j-1,j]);[A[j-1],A[j]]=[A[j],A[j-1]];j--}p([j])}
if(alg=='quick'){const qs=(l,h)=>{if(l>=h)return;let pv=A[h],i=l;for(let j=l;j<h;j++){p([j,h]);if(A[j]<pv){[A[i],A[j]]=[A[j],A[i]];i++}}[A[i],A[h]]=[A[h],A[i]];p([i]);qs(l,i-1);qs(i+1,h)};qs(0,A.length-1)}
if(alg=='merge'){const ms=(l,r)=>{if(l>=r)return;const m=(l+r)>>1;ms(l,m);ms(m+1,r);const t=[];let i=l,j=m+1;while(i<=m||j<=r){if(j>r||(i<=m&&A[i]<=A[j]))t.push(A[i++]);else t.push(A[j++])}for(let k=0;k<t.length;k++){A[l+k]=t[k];p([l+k])}};ms(0,A.length-1)}
if(alg=='heap'){const n=A.length,sd=(i,m)=>{for(;;){let l=2*i+1,r=l+1,g=i;if(l<m&&A[l]>A[g])g=l;if(r<m&&A[r]>A[g])g=r;if(g==i)return;p([i,g]);[A[i],A[g]]=[A[g],A[i]];i=g}};for(let i=(n>>1)-1;i>=0;i--)sd(i,n);for(let e=n-1;e>0;e--){[A[0],A[e]]=[A[e],A[0]];p([0,e]);sd(0,e)}}
p();return f}
const X={bub:'পাশাপাশি দুটি তুলনা; ভুল ক্রমে হলে swap। প্রতি pass-এ সবচেয়ে বড় মান ডানে বসে।',sel:'বাকি অংশের সবচেয়ে ছোটটি খুঁজে সামনের ঘরের সাথে swap। সর্বোচ্চ n−1 swap।',ins:'বাম অংশ sorted ধরে প্রতিটি নতুন মানকে সঠিক জায়গায় ঢোকানো।',quick:'শেষ মানকে pivot ধরে ছোটগুলো বামে, বড়গুলো ডানে; তারপর দুই পাশে একই কাজ। (এখানে সহজ Lomuto partition, উপরের টেবিলে PDF-এর up/down পদ্ধতি।)',heap:'প্রথমে max-heap; তারপর root শেষে পাঠিয়ে heap ঠিক করা।',merge:'অর্ধেক অর্ধেক ভাগ করে sorted দুই অংশ জোড়া লাগানো।'};
async function run(a){if(busy)return;busy=1;$('#ex').innerHTML='<b>বাংলায় ব্যাখ্যা:</b> '+X[a];const f=fr(a);for(let i=0;i<f.length;i++){dr(f[i][0],f[i][1]);$('#m').textContent=(i+1)+' / '+f.length+' ধাপ';await sleep(300)}busy=0}dr(D)
</script></body></html>

```

## stack.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Stack</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Stack কী?</h2>
<p>Stack একটি <b>Abstract Data Type (ADT)</b>। বাস্তবের স্তূপের মতো — তাসের ডেক বা থালার স্তূপ: নতুন থালা শুধু উপরে রাখা যায়, আবার তোলাও যায় শুধু উপর থেকে। Stack-এও সব operation <b>এক প্রান্ত (top)</b> থেকে হয়; যেকোনো সময় শুধু top element-টাই পাওয়া যায়।</p>
<div class="card"><b>LIFO = Last In First Out:</b> যে element সবার শেষে ঢুকেছে সেটিই সবার আগে বের হয়। ঢোকানোর operation = <b>PUSH</b>, সরানোর operation = <b>POP</b>। (ভুল নাম: FIFO — সেটি Queue-র; Stack-এর অন্য নাম LIFO list, Pile, Push-down list।)</div>
<div style="display:flex;gap:30px;align-items:flex-end"><div><b>Push</b> ⬇<div class="stk"><div class="cell">30 (top)</div><div class="cell">20</div><div class="cell">10</div></div></div><div><b>Pop</b> ⬆ → 30 বের হলো<div class="stk"><div class="cell">20 (top)</div><div class="cell">10</div></div></div></div></section>

<section class="slide"><h2>Stack-এর operation ও implementation</h2>
<p>Stack বানানো যায় Array, Structure, Pointer বা Linked list দিয়ে; আকার স্থির (fixed) বা প্রয়োজনে বাড়ানো (dynamic) হতে পারে। Array দিয়ে বানালে আকার স্থির।</p>
<table><tr><th>Operation</th><th>কাজ</th></tr><tr><td>push()</td><td>element stack-এ রাখা (storing)</td></tr><tr><td>pop()</td><td>top element সরানো/পাওয়া (accessing)</td></tr><tr><td>peek()</td><td>সরানো ছাড়া শুধু top দেখা</td></tr><tr><td>isFull()</td><td>stack পূর্ণ কি না (পূর্ণে push ⇒ <b>Overflow</b>)</td></tr><tr><td>isEmpty()</td><td>stack খালি কি না (খালিতে pop ⇒ <b>Underflow</b>)</td></tr></table>
<pre>int stack[MAXSIZE]; int top = -1;
int isempty(){ return top == -1; }        int isfull(){ return top == MAXSIZE-1; }
int peek(){ return stack[top]; }
int pop(){  if(!isempty()) return stack[top--]; else printf("Stack is empty"); }
void push(int d){ if(!isfull()) stack[++top] = d; else printf("Stack is full"); }</pre>
<div class="card">Linked list দিয়ে stack বানালে push করলে নতুন node <b>list-এর সামনে (head-এ)</b> বসে এবং pop-ও head থেকে — দুটিই O(1)। Array stack-এও push/pop O(1)।</div></section>

<section class="slide"><h2>Stack ইন্টারেক্টিভ (size 5)</h2>
<div class="card"><b>কীভাবে চালাবে:</b> সংখ্যা লিখে Push দাও, Pop/Peek করো। ৫টি ভরলে Push-এ Overflow, খালি থাকলে Pop-এ Underflow বার্তা আসবে। সবচেয়ে উপরেরটিই আগে বের হয় — LIFO।</div>
<div style="display:flex;gap:24px;align-items:flex-end"><div class="stk" id="st"></div><div><input id="v" type="number" value="1" style="width:70px"><button onclick="push()">Push</button><button onclick="pop()">Pop</button><button onclick="peek()">Peek</button><p id="sm"></p></div></div></section>

<section class="slide"><h2>Stack-এর প্রয়োগ</h2>
<table><tr><th>প্রয়োগ</th><th>কীভাবে stack কাজে লাগে</th></tr><tr><td>Memory management / Function call (recursion)</td><td>প্রতিটি call-এর local variable ও return ঠিকানা stack-এ; শেষ call আগে ফেরে (Java recursion-এ OS stack ব্যবহার করে)</td></tr><tr><td>Parenthesis checking</td><td>( পেলে push, ) পেলে pop; শেষে খালি থাকলে balanced</td></tr><tr><td>String reversal</td><td>অক্ষর push করে pop করলে উল্টো ক্রম</td></tr><tr><td>Backtracking</td><td>আগের অবস্থায় ফেরা (maze, undo)</td></tr><tr><td>Syntax parsing / Java compiler (postfix)</td><td>Compiler expression ও গঠন যাচাই করে</td></tr><tr><td>HTML tag matching</td><td>খোলা tag push, বন্ধ tag-এ pop ও মিলানো</td></tr><tr><td>Expression evaluation/conversion</td><td>infix→prefix/postfix রূপান্তর ও postfix মান নির্ণয়</td></tr><tr><td>Java Virtual Machine</td><td>JVM নিজেই stack ব্যবহার করে</td></tr></table>
<div class="card">আরও: Tower of Hanoi, factorial (recursion), DFS (graph), iterative Quick sort।</div></section>

<section class="slide"><h2>Infix, Prefix, Postfix ও Expression</h2>
<p><b>Infix:</b> A+B (operator মাঝে) · <b>Prefix:</b> +AB · <b>Postfix:</b> AB+। Postfix-এ বন্ধনী ও precedence লাগে না — তাই কম্পিউটার সহজে মান বের করে। Precedence: ^ &gt; * / &gt; + −।</p>
<div class="card"><b>Infix → Postfix (stack দিয়ে):</b> operand হলে সরাসরি output-এ; ( হলে push; ) হলে ( পর্যন্ত pop করে output-এ; operator হলে stack-এর top-এর precedence সমান/বেশি থাকলে আগে pop করে output-এ, তারপর নিজে push; শেষে বাকি সব pop।</div>
<div class="card"><b>Postfix মান নির্ণয়:</b> operand হলে push; operator হলে দুটি pop (দ্বিতীয়টি ডানের operand), অপারেশন করে ফল push। শেষে stack-এ একটিই মান থাকে।</div>
<p>Infix লিখো (যেমন a+(b-c)*d বা 4+3*(6*3-12)):</p><input id="inf" value="a+(b-c)*d" style="width:260px"><button onclick="cv()">Postfix বানাও</button><p id="po"></p><div id="pt"></div>
<p>Postfix মান বের করো (স্পেস দিয়ে লেখো, যেমন 6 3 2 4 + - *):</p><input id="pf" value="6 3 2 4 + - *" style="width:260px"><button onclick="ev()">মান নির্ণয়</button><div id="et"></div></section>

<section class="slide"><h2>Prefix ও রূপান্তর (ইন্টারেক্টিভ)</h2>
<p><b>Prefix (Polish notation):</b> operator আগে, তারপর operand — যেমন +AB। Prefix ও postfix দুটিতেই বন্ধনী ও precedence-এর ঝামেলা থাকে না; operator-এর অবস্থানই কাজের ক্রম ঠিক করে দেয়।</p>
<div class="card"><b>Infix → Prefix (stack দিয়ে):</b> (১) expression উল্টে দাও এবং ( ও ) পরস্পর বদলে নাও। (২) উল্টানো expression-কে postfix-এর মতোই stack দিয়ে রূপান্তর করো, তবে <b>সমান precedence-এ আগের operator pop করবে না</b> (শুধু ^ ছাড়া)। (৩) ফল আবার উল্টে দাও।</div>
<div class="card"><b>Prefix মান নির্ণয়:</b> <b>ডান থেকে বামে</b> পড়ো। operand হলে push; operator হলে প্রথম pop = <i>বাম</i> operand, দ্বিতীয় pop = <i>ডান</i> operand; “বাম op ডান” ফল push। (Postfix-এ বাম থেকে ডানে পড়া হয় এবং প্রথম pop ডান operand।)</div>
<div class="card"><b>Postfix/Prefix → Infix:</b> operand হলে push; operator হলে দুটি operand তুলে “( বাম op ডান )” বানিয়ে আবার push। তিন রূপের যেকোনোটি থেকে বাকি দুটি পাওয়া যায়।</div>
<p>রূপ বেছে expression লিখে রূপান্তর করো (postfix/prefix হলে symbol-গুলো স্পেস দিয়ে লেখো):</p>
<select id="ty"><option value="in">Infix</option><option value="post">Postfix</option><option value="pre">Prefix</option></select> <input id="cin" value="A+B*C-D/F" style="width:260px"><button onclick="cvt()">রূপান্তর</button><div id="cr"></div><div id="ct"></div>
<p>Prefix মান নির্ণয় (যেমন - * + 2 3 4 5): <input id="pe" value="- * + 2 3 4 5" style="width:220px"><button onclick="evp()">মান নির্ণয়</button></p><div id="pet"></div></section>
<section class="slide"><h2>অনুশীলন: Infix, Postfix, Prefix (সমাধানসহ)</h2>
<p>নিচের টেবিল program দিয়ে বের করা। নিজে হাতে করে পরে মিলিয়ে নাও; ধাপ দেখতে উপরের converter-এ expression বসাও।</p><div id="xt"></div>
<p><b>মান নির্ণয়ের অনুশীলন:</b></p><div id="xv"></div>
<div class="card"><b>মনে রাখার কৌশল:</b> Postfix-এ operator আসে দুই operand-এর <i>পরে</i>, Prefix-এ <i>আগে</i>। A−B−C ⇒ postfix AB−C− , prefix −−ABC (বাম-সংযুক্ত operator-এ বামেরটি আগে হয়)। A^B^C ডান-সংযুক্ত ⇒ postfix ABC^^ , prefix ^A^BC।</div></section>
<section class="slide"><h2>Queue — FIFO</h2>
<p>Queue-তে নতুন element <b>পিছনে (rear)</b> ঢোকে (enqueue) এবং <b>সামনে (front)</b> থেকে বের হয় (dequeue) — টিকিট কাউন্টারের লাইনের মতো। First In First Out। Stack-এ একই প্রান্তে ঢোকা-বেরোনো, Queue-তে দুই প্রান্তে।</p>
<div class="cells" id="qq" style="min-height:44px"></div><button onclick="enq()">Enqueue</button><button onclick="deq()">Dequeue</button>
<div class="card"><b>বাংলায় ব্যাখ্যা:</b> Enqueue চাপলে নতুন সংখ্যা ডানে (rear) যুক্ত হয়; Dequeue চাপলে সবচেয়ে বাম (front) সংখ্যা বেরিয়ে যায়।</div>
<div class="card"><b>অন্যান্য queue:</b> Circular queue (array শেষ হলে শুরুতে ঘোরে; পূর্ণ: (rear+1)%n == front), Deque (দুই প্রান্তেই insert/delete), Priority queue (heap দিয়ে; সবচেয়ে বেশি অগ্রাধিকার আগে)। BFS-এ queue, DFS-এ stack।</div></section>

<section class="slide"><h2>ধাঁধা: P, Q, R, S, T</h2>
<p>পাঁচটি item P,Q,R,S,T একে একে stack-এ push হলো। stack ৪ বার pop করে প্রতিটি queue-তে ঢোকানো হলো। queue থেকে ২টি delete করে stack-এ push করা হলো। এখন stack থেকে ১টি pop — কোনটি?</p><div id="pq"></div></section>

<section class="slide"><h2>পূর্ববর্তী বছরের প্রশ্ন (ব্যাখ্যাসহ)</h2><div id="py"></div>
<h3>Q9 ধাপে ধাপে: push(1), push(2), pop, push(1), push(2), pop, pop, pop, push(2), pop</h3><div id="q9"></div></section>

<section class="slide"><h2>Practice প্রশ্ন (ব্যাখ্যাসহ)</h2><div id="pp"></div></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
quiz('st','#qz');
let st=[],q=[],k=1;const msg=t=>$('#sm').textContent=t;
function rs(){$('#st').innerHTML=st.map(v=>'<div class="cell">'+v+'</div>').join('')}
function push(){if(st.length>=5)return msg('Overflow!');st.push($('#v').value);rs();msg('push সম্পন্ন')}
function pop(){if(!st.length)return msg('Underflow!');msg('pop: '+st.pop());rs()}
function peek(){msg(st.length?'top = '+st[st.length-1]:'খালি')}
function rq(){$('#qq').innerHTML=q.map(v=>'<div class="cell">'+v+'</div>').join('')}
function enq(){q.push(k++);rq()}function deq(){q.shift();rq()}
const toks=s=>s.match(/\d+|[A-Za-z]|[-+*\/^()]/g)||[];
function toPost(s){const pr={'+':1,'-':1,'*':2,'/':2,'^':3},out=[],S=[],rows=[];let mx=0;for(const t of toks(s)){if(/[\dA-Za-z]/.test(t[0]))out.push(t);else if(t=='(')S.push(t);else if(t==')'){while(S.length&&S[S.length-1]!='(')out.push(S.pop());S.pop()}else{while(S.length&&S[S.length-1]!='('&&(pr[S[S.length-1]]>pr[t]||(pr[S[S.length-1]]==pr[t]&&t!='^')))out.push(S.pop());S.push(t)}mx=Math.max(mx,S.length);rows.push([t,S.join(' '),out.join(' ')])}while(S.length)out.push(S.pop());rows.push(['(শেষ)','',out.join(' ')]);return{out:out.join(' '),rows,mx}}
function cv(){const r=toPost($('#inf').value);$('#po').innerHTML='Postfix: <b>'+r.out+'</b> (stack-এ একসাথে সর্বোচ্চ '+r.mx+'টি symbol)';$('#pt').innerHTML=tb(['পড়া symbol','Stack','Output'],r.rows)}
function evP(s){const S=[],rows=[];for(const t of s.trim().split(/\s+/)){if(/^-?\d+(\.\d+)?$/.test(t))S.push(+t);else{const b=S.pop(),a=S.pop();S.push(t=='+'?a+b:t=='-'?a-b:t=='*'?a*b:t=='/'?a/b:Math.pow(a,b))}rows.push([t,S.join(', ')])}return rows}
function ev(){const r=evP($('#pf').value);$('#et').innerHTML=tb(['Symbol','Stack'],r)+'<p>ফল = <b>'+r[r.length-1][1]+'</b></p>'}cv();ev();
function sim(ops){const S=[],pp=[],rows=[];for(const o of ops){if(o[0]=='push')S.push(o[1]);else pp.push(S.pop());rows.push([o[0]=='push'?'Push '+o[1]:'Pop',S.length?S.join(', '):'Empty',pp.join(', ')])}return rows}
$('#q9').innerHTML=tb(['Operation','Stack','Pop sequence'],sim([['push',1],['push',2],['pop'],['push',1],['push',2],['pop'],['pop'],['pop'],['push',2],['pop']]));
(function(){const S=[],Q=[],L=[];'PQRST'.split('').forEach(c=>S.push(c));L.push('Push: P,Q,R,S,T ⇒ stack (নিচ→উপর) = '+S.join(' '));for(let i=0;i<4;i++)Q.push(S.pop());L.push('৪ বার pop ⇒ queue (front→rear) = '+Q.join(' ')+'; stack = '+S.join(' '));const d=[Q.shift(),Q.shift()];L.push('Queue থেকে ২টি delete ⇒ '+d.join(', ')+' বের হলো; queue = '+Q.join(' '));d.forEach(x=>S.push(x));L.push('সেই দুটি stack-এ push ⇒ stack = '+S.join(' '));L.push('এখন pop ⇒ <b>'+S.pop()+'</b>');$('#pq').innerHTML=L.map(x=>'<div class="card">'+x+'</div>').join('')})();
const PY=[['১','a+(b−c)*d-এর postfix? [SBL-SO 2020]','abc−d*+','প্রথমে বন্ধনী (b−c) ⇒ bc−; তারপর *d ⇒ bc−d*; শেষে a+ ⇒ abc−d*+'],['২','কোন DS-এ front থেকে delete, rear-এ insert? [ICB 2017]','Queue','FIFO'],['৩','Push ও pop কীসের সাথে সম্পর্কিত? [AME 2018]','Stack',''],['৪','কোন নামটি stack-এর সাথে সম্পর্কিত নয়? [ICB 2017, HBFC/KB 2018]','FIFO list','FIFO Queue-র; stack LIFO/Pile/Push-down list'],['৬','OS recursion পরিচালনায় কোন DS? [IT/ICT 2018]','Stack','Call stack'],['৭','5 size-এর পূর্ণ stack-এ push করলে? [AP 2018]','Overflow',''],['৮','Parenthesis balance / postfix evaluation-এ কোন DS? [AP 2018, ICB 2017]','Stack',''],['৯','push(1),push(2),pop,push(1),push(2),pop,pop,pop,push(2) [BB AP 2016]','2 2 1 1 2','নিচের ধাপ-টেবিল দেখো'],['১০','Stack operation কী কী? [SBL 2016]','push, pop',''],['১১','push(1),push(2),pop(),push(4),push(5),pop() শেষে stack? [SBL&JBL 2020]','1, 4','[1,2]→[1]→[1,4]→[1,4,5]→[1,4]']];
$('#py').innerHTML=tb(['নং','প্রশ্ন','উত্তর','ব্যাখ্যা'],PY);
const PP=[['১','Stack-এ element ঢোকানো প্রক্রিয়ার নাম?','Push',''],['২','Stack-এর application কোনটি?','সবগুলো','function call, stock span, expression evaluation'],['৩','Linked list stack-এ নতুন node push করলে?','list-এর সামনে বসে','head-এ O(1)'],['৪','খালি stack থেকে remove করলে?','Underflow',''],['৫','Stack-এর entries “ordered” মানে?','ক্রমিক (sequential) entry','একটির পর একটি'],['৬','Stack থেকে সরানো হয় কোন ক্রমে?','Reverse (উল্টো)','LIFO'],['৭','কোনটি stack ব্যবহার করে?','সবগুলো','parentheses balancing, local variable tracking, compiler syntax analyzer'],['৮','Postfix 6 3 2 4 + − * এর মান?','<b>−18</b>','2 4 + = 6; 3 6 − = −3; 6 × (−3) = −18। (PDF-এ উত্তর d “15–100” — ভুল)'],['৯','4+3*(6*3−12) → postfix-এ stack-এ একসাথে সর্বোচ্চ symbol?','4','+ * ( * (উপরের converter-এ যাচাই করো)'],['১০','কোনটি stack-এর application?','সবগুলো','factorial, Tower of Hanoi, infix→postfix'],['১১','Stack-কে আরও কী বলে?','Last in first out',''],['১২','কোনটি linear DS?','Stack','Graph/Tree non-linear']];
$('#pp').innerHTML=tb(['নং','প্রশ্ন','উত্তর','ব্যাখ্যা'],PP);
const OPR=/^[-+*\/^]$/,sp=s=>s.includes(' ')?s.trim().split(/\s+/):toks(s);
function toPre(s){const T=toks(s).reverse().map(t=>t=='('?')':t==')'?'(':t),pr={'+':1,'-':1,'*':2,'/':2,'^':3},out=[],S=[],rows=[];for(const t of T){if(/[\dA-Za-z]/.test(t[0]))out.push(t);else if(t=='(')S.push(t);else if(t==')'){while(S.length&&S[S.length-1]!='(')out.push(S.pop());S.pop()}else{while(S.length&&S[S.length-1]!='('&&(pr[S[S.length-1]]>pr[t]||(pr[S[S.length-1]]==pr[t]&&t=='^')))out.push(S.pop());S.push(t)}rows.push([t,S.join(' '),out.join(' ')])}while(S.length)out.push(S.pop());rows.push(['(শেষ)','',out.join(' ')+' → উল্টালে '+[...out].reverse().join(' ')]);return{out:[...out].reverse().join(' '),rows}}
function toInfix(s,ty){const S=[],rows=[],T=sp(s),seq=ty=='pre'?[...T].reverse():T;for(const t of seq){if(OPR.test(t)){let a,b;if(ty=='pre'){a=S.pop();b=S.pop()}else{b=S.pop();a=S.pop()}S.push('('+a+t+b+')')}else S.push(t);rows.push([t,S.join(' , ')])}return{out:S[0],rows}}
function evPre(s){const S=[],rows=[];for(const t of [...sp(s)].reverse()){if(OPR.test(t)){const a=S.pop(),b=S.pop();S.push(t=='+'?a+b:t=='-'?a-b:t=='*'?a*b:t=='/'?a/b:Math.pow(a,b))}else S.push(+t);rows.push([t,S.join(', ')])}return rows}

function cvt(){const s=$('#cin').value,ty=$('#ty').value;let inf,po,pr,rows,hd;
if(ty=='in'){const a=toPost(s),b=toPre(s);inf=s;po=a.out;pr=b.out;$('#ct').innerHTML='<p><b>Infix → Postfix ধাপ:</b></p>'+tb(['Symbol','Stack','Output'],a.rows)+'<p><b>Infix → Prefix ধাপ (উল্টানো expression পড়া হচ্ছে):</b></p>'+tb(['Symbol','Stack','Output'],b.rows)}
else{const a=toInfix(s,ty);inf=a.out;po=ty=='post'?sp(s).join(' '):toPost(inf).out;pr=ty=='pre'?sp(s).join(' '):toPre(inf).out;$('#ct').innerHTML='<p><b>'+(ty=='post'?'Postfix → Infix (বাম→ডান)':'Prefix → Infix (ডান→বাম)')+' ধাপ:</b></p>'+tb(['Symbol','Stack'],a.rows)}
$('#cr').innerHTML='<div class="card">Infix: <b>'+inf+'</b><br>Postfix: <b>'+po+'</b><br>Prefix: <b>'+pr+'</b></div>'}
function evp(){const r=evPre($('#pe').value);$('#pet').innerHTML=tb(['Symbol (ডান→বাম)','Stack'],r)+'<p>ফল = <b>'+r[r.length-1][1]+'</b></p>'}
$('#xt').innerHTML=tb(['Infix','Postfix','Prefix'],['A+B*C','(A+B)*C','A+B*C-D/F','a+(b-c)*d','A*(B+C)/D','A^B^C','(A+B)*(C-D)','4+3*(6*3-12)','A-B-C','(A+B*C)/(D-E)'].map(e=>[e,toPost(e).out,toPre(e).out]));
$('#xv').innerHTML=tb(['Expression','ধরন','মান'],[['5 3 2 * +','Postfix',evP('5 3 2 * +').pop()[1]],['6 3 2 4 + - *','Postfix',evP('6 3 2 4 + - *').pop()[1]],['2 3 1 * + 9 -','Postfix',evP('2 3 1 * + 9 -').pop()[1]],['- * + 2 3 4 5','Prefix',evPre('- * + 2 3 4 5').pop()[1]],['+ * 2 3 4','Prefix',evPre('+ * 2 3 4').pop()[1]],['/ + 8 4 * 2 3','Prefix',evPre('/ + 8 4 * 2 3').pop()[1]]]);
cvt();evp();
</script></body></html>
```

## linkedlist.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Linked</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Linked List কী?</h2>
<p>Array-তে element পাশাপাশি ঘরে থাকে; Linked list-এ প্রতিটি <b>node</b>-এ দুটি অংশ: <b>data</b> ও পরের node-এর ঠিকানা (<b>next pointer</b>)। শেষ node-এর next = NULL। শুরুর node-কে ধরে রাখে <b>head</b>। ফলে memory-তে ছড়ানো থাকলেও শিকলের মতো যুক্ত থাকে।</p>
<div class="card"><b>ধরন:</b> Singly (শুধু next), Doubly (prev ও next — প্রতি node-এ ২টি pointer), Circular (শেষ node-এর next = প্রথম node)।</div>
<table><tr><th></th><th>Array</th><th>Linked list</th></tr><tr><td>Access (i-তম)</td><td>O(1) — সরাসরি index</td><td>O(n) — head থেকে হাঁটতে হয়</td></tr><tr><td>Head-এ insert</td><td>O(n) (সবাইকে সরাতে হয়)</td><td>O(1)</td></tr><tr><td>Tail-এ insert</td><td>O(1) (জায়গা থাকলে)</td><td>O(n) (tail pointer থাকলে O(1))</td></tr><tr><td>Binary search</td><td>করা যায়</td><td>কার্যকর নয় (random access নেই)</td></tr><tr><td>আকার</td><td>স্থির</td><td>প্রয়োজনমতো বাড়ে/কমে</td></tr></table></section>
<section class="slide"><h2>Linked list ইন্টারেক্টিভ</h2>
<div class="card"><b>কীভাবে চালাবে:</b> মান লিখে head/tail/নির্দিষ্ট অবস্থানে insert করো; মান লিখে delete বা search করো; Reverse চাপলে সব তীর উল্টে যায়। Search-এ কয়টি node ঘুরতে হলো তা দেখাবে।</div>
<input id="v" type="number" value="5" style="width:70px"> অবস্থান <input id="p" type="number" value="1" style="width:55px">
<button onclick="L.unshift(+$('#v').value);d('head-এ insert O(1)')">Head-এ insert</button><button onclick="L.push(+$('#v').value);d('tail-এ insert — শেষ পর্যন্ত হাঁটা O(n)')">Tail-এ insert</button><button onclick="at()">অবস্থানে insert</button><button onclick="del()">মান delete</button><button onclick="sr()">Search</button><button onclick="L.reverse();d('Reverse — প্রতিটি pointer উল্টে গেল O(n)')">Reverse</button>
<div id="ll" style="margin:14px 0"></div><p id="lm"></p>
<pre>struct node { int data; struct node *next; };
void insertHead(struct node **h,int v){ struct node *n=malloc(sizeof *n); n->data=v; n->next=*h; *h=n; }
void deleteValue(struct node **h,int v){ while(*h &amp;&amp; (*h)->data!=v) h=&amp;(*h)->next;
   if(*h){ struct node *t=*h; *h=t->next; free(t);} }</pre></section>
<section class="slide"><h2>2D Array-র ঠিকানা (Row-major / Column-major)</h2>
<p>Array memory-তে এক লাইনে থাকে। দুই-মাত্রার array R×C-কে সারি ধরে (row-major) বা কলাম ধরে (column-major) সাজানো যায়:</p>
<div class="card">Row-major: ঠিকানা = Base + size × (i × C + j) · Column-major: ঠিকানা = Base + size × (j × R + i) (i, j = 0 থেকে শুরু)।</div>
<p>R <input id="R" type="number" value="20" style="width:60px"> C <input id="C" type="number" value="50" style="width:60px"> element size <input id="S" type="number" value="4" style="width:55px"> Base <input id="B" type="number" value="2000" style="width:75px"> i <input id="i" type="number" value="10" style="width:55px"> j <input id="j" type="number" value="10" style="width:55px"> <button onclick="ad()">হিসাব</button></p><p id="am"></p></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
quiz('ll','#qz');let L=[3,7,9];
function d(t){$('#ll').innerHTML='<span class="box">head</span><span class="arr">→</span>'+L.map(v=>'<span class="box">'+v+'</span><span class="arr">→</span>').join('')+'<span class="box">NULL</span>';if(t)$('#lm').textContent=t}
function at(){const p=Math.max(1,Math.min(L.length+1,+$('#p').value));L.splice(p-1,0,+$('#v').value);d('অবস্থান '+p+'-এ insert — p−1 ধাপ হাঁটতে হয়েছে')}
function del(){const i=L.indexOf(+$('#v').value);if(i<0)return d('মান নেই');L.splice(i,1);d('delete — '+(i+1)+'টি node ঘুরে পাওয়া গেছে')}
function sr(){const i=L.indexOf(+$('#v').value);d(i<0?'পাওয়া যায়নি, '+L.length+'টি node ঘুরতে হলো':'পাওয়া গেছে, '+(i+1)+'টি node ঘুরে')}
function ad(){const R=+$('#R').value,C=+$('#C').value,S=+$('#S').value,B=+$('#B').value,i=+$('#i').value,j=+$('#j').value;$('#am').innerHTML='Row-major: '+B+' + '+S+'×('+i+'×'+C+'+'+j+') = <b>'+(B+S*(i*C+j))+'</b><br>Column-major: '+B+' + '+S+'×('+j+'×'+R+'+'+i+') = <b>'+(B+S*(j*R+i))+'</b>'}
d();ad();</script></body></html>

```

## tree.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tree</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Tree কী?</h2>
<p>Tree একটি <b>non-linear</b> data structure যেখানে data <b>hierarchical</b> (উপর-নিচ ধাপে) সাজানো থাকে। ফোল্ডারের ভেতরে ফোল্ডার, পরিবারের বংশতালিকা — সবই tree। এটি <b>recursive</b> সংজ্ঞা: প্রতিটি child নিজেই একটি ছোট tree (subtree)।</p>
<div class="card"><b>Tree-র সংজ্ঞা (তিনভাবে):</b> (১) Node ও edge দিয়ে গঠিত hierarchical structure। (২) Cycle ছাড়া connected graph। (৩) যে graph-এ যেকোনো দুই vertex-এর মধ্যে <b>ঠিক একটি</b> পথ আছে।</div>
<div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div id="f0a"></div><p>✘ Tree নয় — E-F যুক্ত হওয়ায় C,E,F cycle তৈরি করেছে।</p></div><div style="flex:1;min-width:200px"><div id="f0b"></div><p>✔ Tree — কোনো cycle নেই।</p></div></div>
<div class="card"><b>গুরুত্বপূর্ণ বৈশিষ্ট্য:</b> প্রতি জোড়া vertex-এর মধ্যে একটাই পথ · n vertex হলে ঠিক <b>n−1 edge</b> · Graph tree ⇔ minimally connected · n vertex ও n−1 edge-এর যেকোনো connected graph একটি tree · cycle থাকবে না · root থেকে যেকোনো node-এ একটাই পথ।</div></section>

<section class="slide"><h2>Tree-র পরিভাষা (ইন্টারেক্টিভ)</h2>
<p>নিচের tree-টি PDF-এর উদাহরণ। একটি পরিভাষার বোতাম চাপলে সংজ্ঞা আসবে এবং সংশ্লিষ্ট node হলুদ হবে।</p>
<div id="tb"></div><div id="f1"></div><div class="card" id="tx">একটি বোতাম বেছে নাও।</div></section>

<section class="slide"><h2>প্রতিটি node-এর Degree, Depth, Height</h2>
<table><tr><th>Node</th><th>A</th><th>B</th><th>C</th><th>G</th><th>I</th><th>H</th><th>E</th><th>F</th><th>J</th><th>K</th><th>D</th></tr>
<tr><th>Degree (child সংখ্যা)</th><td>2</td><td>3</td><td>2</td><td>0</td><td>2</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><th>Depth/Level (root থেকে edge)</th><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th>Height (সবচেয়ে লম্বা নিচের পথ)</th><td>3</td><td>2</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>
<div class="card"><b>মনে রাখার নিয়ম:</b> Depth = উপর থেকে নিচে গোনা (root=0); Height = নিচ থেকে উপরে গোনা (leaf=0)। Tree-র height = root-এর height = 3; Tree-র degree = সবচেয়ে বেশি degree = Degree(B) = 3। “Level” ও “depth” একই অর্থে ব্যবহৃত হয়। Level 0: A · Level 1: B,C · Level 2: G,I,H,E,F · Level 3: J,K,D।</div></section>

<section class="slide"><h2>Tree-র ধরন</h2>
<p><b>General tree:</b> child সংখ্যার কোনো সীমা নেই (ফোল্ডার, পরিবার)। <b>Binary tree:</b> প্রতি node-এ সর্বোচ্চ ২ child (left, right)। Binary tree-র বিশেষ রূপ:</p>
<div style="display:flex;gap:12px;flex-wrap:wrap"><div style="flex:1;min-width:180px"><b>Full/Strict</b> (প্রতি node-এ 0 বা 2 child)<div id="t1"></div></div><div style="flex:1;min-width:180px"><b>Perfect</b> (সব internal node-এ 2 child, সব leaf একই level)<div id="t2"></div></div><div style="flex:1;min-width:180px"><b>Complete/Almost complete</b> (শেষ level বাদে পূর্ণ, শেষটি বাম থেকে)<div id="t3"></div></div><div style="flex:1;min-width:180px"><b>Skewed</b> (সবাই একদিকে, linked list-এর মতো, depth n−1)<div id="t4"></div></div></div>
<div class="card"><b>Balanced:</b> যেকোনো node-এ বাম ও ডান subtree-র height-এর পার্থক্য ≤ 1। <b>Rooted binary tree:</b> একটি root আছে এবং প্রতি node-এ ≤ 2 child। <b>Labeled/Unlabeled:</b> node-এ নাম থাকলে labeled।</div>
<div class="card"><b>সূত্র:</b> n node-এর tree-তে n−1 edge · Height h-এ সর্বোচ্চ node = 2<sup>h+1</sup>−1 · Level k-এ সর্বোচ্চ 2<sup>k</sup> node · N level-এ সর্বোচ্চ 2<sup>N</sup>−1 · degree-2 node n₂ হলে leaf N₀ = n₂+1 · n leaf-এর full binary tree-এ মোট 2n−1 node · n unlabeled node-এ binary tree = 2nCn/(n+1) (n=3 ⇒ 5; labeled ⇒ 5×3! = 30; n=4 ⇒ 14)।</div></section>

<section class="slide"><h2>Binary Search Tree (BST)</h2>
<p>BST হলো এমন binary tree যেখানে <b>প্রতি node-এর বাম subtree-র সব মান তার চেয়ে ছোট, আর ডান subtree-র সব মান বড়</b>। তাই খোঁজার সময় প্রতি ধাপে অর্ধেক বাদ পড়ে — গড়ে O(log n); tree একদিকে ঝুঁকে গেলে (skewed) O(n)।</p>
<div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:230px"><b>উদাহরণ ১:</b> 50,30,70,20,40,60,80<div id="b1"></div></div><div style="flex:1;min-width:230px"><b>উদাহরণ ২ (ক্রমানুসারে insert):</b> 50,70,60,20,90,10,40,100<div id="b2"></div></div></div>
<div class="card"><b>Construct করার নিয়ম:</b> প্রথম মান root; এরপর প্রতিটি মান root থেকে তুলনা করে নামতে নামতে ফাঁকা জায়গায় বসাও। উদাহরণ ২-এর inorder: 10,20,40,50,60,70,90,100 (সবসময় sorted)।</div>
<div class="card"><b>Search 40:</b> 50-এ ছোট ⇒ বামে; 30-এ বড় ⇒ ডানে; 40 পেলাম। <b>Insert 25:</b> 50→বামে, 30→বামে, 20-এ বড় ⇒ 20-এর ডান child।</div>
<div class="card"><b>Delete-এর ৩ case:</b> (১) Leaf — সরাও। (২) এক child — সেই child দিয়ে প্রতিস্থাপন। (৩) দুই child — ডান subtree-র সবচেয়ে ছোট (inorder successor) দিয়ে প্রতিস্থাপন করে সেটি delete। উদাহরণ: 30 মুছলে 40 ওর জায়গায় বসে।</div></section>

<section class="slide"><h2>BST ইন্টারেক্টিভ</h2>
<div class="card"><b>কীভাবে চালাবে:</b> সংখ্যা লিখে Insert দাও — tree নিজে সাজাবে। Search চাপলে খোঁজার পথ হলুদ হবে। Delete-এ তিন case-ই চলে। Preorder/Inorder/Postorder/Level চাপলে node-গুলো ক্রমানুসারে হলুদ হবে এবং ক্রম নিচে লেখা হবে।</div>
<input id="k" type="number" value="45" style="width:80px"><button onclick="ins()">Insert</button><button onclick="srch()">Search</button><button onclick="dl()">Delete</button><button onclick="trav('pre')">Preorder</button><button onclick="trav('in')">Inorder</button><button onclick="trav('post')">Postorder</button><button onclick="trav('lvl')">Level</button><br><button onclick="pre([50,30,70,20,40,60,80])">উদাহরণ ১</button><button onclick="pre([50,70,60,20,90,10,40,100])">উদাহরণ ২</button><button onclick="R=null;draw();$('#om').textContent=''">Reset</button>
<svg id="sv" viewBox="0 0 600 300" width="100%"></svg><p id="om"></p></section>

<section class="slide"><h2>Tree Traversal — প্রতিটি node ঠিক একবার ভিজিট</h2>
<p>কোনো operation করতে আগে node-এ পৌঁছাতে হয়। ভিজিট করার ক্রম অনুযায়ী চারটি পদ্ধতি; প্রথম তিনটি <b>Depth First</b>, শেষটি <b>Breadth First</b> (queue ব্যবহার করে)।</p>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center"><div id="tt" style="min-width:200px"></div><table style="flex:1"><tr><th>পদ্ধতি</th><th>ক্রম</th><th>ফল (বামের tree)</th></tr><tr><td>Preorder</td><td>Root → Left → Right</td><td>1,2,4,5,3,6</td></tr><tr><td>Inorder</td><td>Left → Root → Right</td><td>4,2,5,1,3,6</td></tr><tr><td>Postorder</td><td>Left → Right → Root</td><td>4,5,2,6,3,1</td></tr><tr><td>Level order</td><td>স্তর ধরে বাম→ডান</td><td>1,2,3,4,5,6</td></tr></table></div>
<div class="card"><b>Level order:</b> root queue-তে রাখো → queue থেকে একটি node তুলে ভিজিট করো, তার child-দের queue-তে দাও → queue খালি না হওয়া পর্যন্ত।</div>
<div class="card"><b>ব্যবহার:</b> BST-এর inorder = sorted output · Preorder থেকে expression-এর prefix, Postorder থেকে postfix · Postorder: tree মুছে ফেলতে · Level order: স্তরভিত্তিক কাজ · দুই traversal (inorder + preorder/postorder) থেকে tree পুনর্গঠন সম্ভব। <b>উদাহরণ:</b> Postorder = D B E C A, Inorder = D B A E C ⇒ root A (postorder-এর শেষ), বাম = {D,B}, ডান = {E,C} ⇒ Preorder = A B D E C।</div></section>

<section class="slide"><h2>Expression Tree</h2>
<p>Operator হলো internal node, operand হলো leaf। Tree-র <b>inorder</b> দিলে infix, <b>preorder</b> দিলে prefix, <b>postorder</b> দিলে postfix expression পাওয়া যায়।</p>
<div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:2;min-width:260px"><b>(a+b)/(a*b−c)+d</b><div id="e1"></div></div><div style="flex:1;min-width:150px"><b>(5+3)*2</b><div id="e2"></div></div></div>
<div class="card">Infix: (a+b)/(a*b−c)+d · Prefix: + / + a b − * a b c d · Postfix: a b + a b * c − / d +। (5+3)*2: আগে 5+3=8, তারপর 8×2 = <b>16</b>।</div></section>

<section class="slide"><h2>Heap (Min Heap ও Max Heap)</h2>
<p>Heap একটি <b>complete binary tree</b> (শেষ level বাদে পূর্ণ, শেষটি বাম থেকে ভরা) যা priority queue ও heap sort-এ ব্যবহৃত হয়। <b>Min heap:</b> প্রতি parent ≤ তার child, তাই root = সবচেয়ে ছোট। <b>Max heap:</b> প্রতি parent ≥ child, root = সবচেয়ে বড়।</p>
<div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:220px"><b>Min heap</b><div id="h1"></div></div><div style="flex:1;min-width:220px"><b>Max heap</b><div id="h2"></div></div></div>
<div class="card"><b>Insert:</b> সবচেয়ে নিচের স্তরে বামদিকের ফাঁকা জায়গায় বসাও, তারপর parent-এর সাথে তুলনা করে উপরে ওঠাও (<b>heapify-up</b>) — O(log n)। <b>Remove min/max:</b> root সরাও, শেষ node root-এ আনো, নিচে নামাও (<b>heapify-down</b>) — O(log n)। <b>Peek:</b> root দেখা — O(1)।</div>
<div class="card"><b>Heap sort:</b> (১) max heap বানাও (২) root (সবচেয়ে বড়) শেষের ঘরে সরাও ও heap ছোট করে heapify করো (৩) পুরো array sorted না হওয়া পর্যন্ত চালাও — O(n log n)। <b>Array সূত্র (0-index):</b> parent = ⌊(i−1)/2⌋, বাম child = 2i+1, ডান child = 2i+2।</div></section>

<section class="slide"><h2>AVL, B-Tree ও অন্যান্য Tree</h2>
<table><tr><th>Tree</th><th>বৈশিষ্ট্য</th><th>ব্যবহার</th></tr><tr><td>AVL</td><td>Self-balancing BST; BF = h(left)−h(right) ∈ {−1,0,+1}; সব operation O(log n)</td><td>দ্রুত search নিশ্চিত করা</td></tr><tr><td>Red-Black</td><td>Self-balancing BST, সবসময় O(log n)</td><td>Library map/set</td></tr><tr><td>B-Tree / B+ Tree</td><td>Multiway search tree, এক node-এ একাধিক child, balanced</td><td>Database/File system index</td></tr><tr><td>Trie</td><td>String-এর prefix ধরে গঠিত</td><td>Autocomplete, router</td></tr><tr><td>Syntax tree</td><td>Program-এর গঠন</td><td>Compiler</td></tr><tr><td>Huffman tree</td><td>Frequency অনুযায়ী code</td><td>Data compression</td></tr></table>
<div class="card"><b>Complexity:</b> BST — balanced: O(log n), skewed (worst): O(n); search/insert/delete সবই O(h), h = height। AVL/Red-Black — সবসময় O(log n)। <a href="avl.html">AVL ইন্টারেক্টিভ →</a></div></section>

<section class="slide"><h2>C code (PDF থেকে)</h2>
<pre>void inorder(node *r){ if(r){ inorder(r->left); printf("%d ",r->data); inorder(r->right);} }
void preorder(node *r){ if(r){ printf("%d ",r->data); preorder(r->left); preorder(r->right);} }
void postorder(node *r){ if(r){ postorder(r->left); postorder(r->right); printf("%d ",r->data);} }

struct node *search(struct node *n,int key){      // BST search
  if(n==NULL||n->key==key) return n;
  return key<n->key ? search(n->left,key) : search(n->right,key); }
struct node *insert(struct node *n,int key){      // BST insert
  if(n==NULL) return newNode(key);
  if(key<n->key) n->left=insert(n->left,key); else n->right=insert(n->right,key);
  return n; }
int getLeafCount(Node *n){ if(!n) return 0; if(!n->left&&!n->right) return 1;
  return getLeafCount(n->left)+getLeafCount(n->right); }
int countnodes(struct node *r){ return r? 1+countnodes(r->left)+countnodes(r->right):0; }
int maxDepth(struct node *n){ if(!n) return 0; int l=maxDepth(n->left),r=maxDepth(n->right); return (l>r?l:r)+1; }
bool isBST(Node *n,int lo,int hi){ if(!n) return true; if(n->data&lt;lo||n->data>hi) return false;
  return isBST(n->left,lo,n->data)&&isBST(n->right,n->data,hi); }
int kthSmallest(Node *r,int *i,int k){ /* inorder-এ k-তম node */
  if(!r) return INT_MAX; int L=kthSmallest(r->left,i,k); if(L!=INT_MAX) return L;
  if(++*i==k) return r->data; return kthSmallest(r->right,i,k); }</pre>
<div class="card">সব function-ই recursion ব্যবহার করে — base case: node NULL। Inorder traversal করলে BST-এর মান ascending ক্রমে আসে, তাই k-তম ছোট মান পেতে k-তম node-এ থামলেই হয়।</div></section>

<section class="slide"><h2>সমাধানসহ অনুশীলন (DS-UNIT-45)</h2>
<div class="card"><b>সমস্যা ১:</b> 50,15,62,5,20,58,91,3,8,37,60,24 insert করলে root-এর বাম ও ডান subtree-তে node কত? <br>বামে (&lt;50): 15,5,20,3,8,37,24 = <b>7</b>; ডানে (&gt;50): 62,58,91,60 = <b>4</b> ⇒ উত্তর (7, 4)।</div>
<div class="card"><b>সমস্যা ২:</b> 4টি distinct key দিয়ে কতটি BST? Catalan C₄ = 8C4/5 = <b>14</b>।</div>
<div class="card"><b>সমস্যা ৩:</b> 7,5,1,8,3,6,0,9,4,2 insert। Inorder = 0,1,2,…,9 (sorted)। Preorder = 7,5,1,0,3,2,4,6,8,9।</div>
<div class="card"><b>সমস্যা ৪:</b> Preorder 30,20,10,15,25,23,39,35,42 (BST) ⇒ Postorder = 15,10,23,25,20,35,42,39,30। (30 root; বাম: 20 [10→ডানে 15, 25→বামে 23]; ডান: 39 [35, 42])।</div>
<div class="card"><b>সমস্যা ৫:</b> Max heap-এ 1,7,2,6,3,5,8 পরপর insert ⇒ array 8,6,7,1,3,2,5 (root 8)।</div></section>

<section class="slide"><h2>Scenario: Tree কোথায় কীভাবে?</h2>
<table><tr><th>ঘটনা</th><th>কোন Tree ও কেন</th></tr><tr><td>File system</td><td>General tree — প্রতি folder-এ বহু child। DFS দিয়ে গভীরে খোঁজা, BFS দিয়ে স্তর ধরে খোঁজা</td></tr><tr><td>Family app</td><td>Root = দাদা-দাদি, leaf = সবচেয়ে ছোট প্রজন্ম; Level order-এ প্রজন্ম ধরে দেখানো</td></tr><tr><td>Website menu</td><td>N-ary tree: Electronics → Mobile → Android/iPhone; নতুন category = parent-এর নিচে নতুন child</td></tr><tr><td>Bank database</td><td>B/B+ Tree — balanced, disk access কম, search O(log n)</td></tr><tr><td>Medical AI</td><td>Decision tree — node = প্রশ্ন (জ্বর? কাশি?), branch = উত্তর, leaf = ফলাফল</td></tr><tr><td>(5+3)*2</td><td>Expression tree ⇒ 16</td></tr><tr><td>Nested comments</td><td>Tree — parent = মূল comment, child = reply</td></tr><tr><td>Router loop</td><td>Spanning tree — cycle মুছে loop আটকায়</td></tr><tr><td>বইয়ের ID</td><td>BST — left&lt;root&lt;right; গড় O(log n), unbalanced হলে O(n)</td></tr><tr><td>Browser HTML</td><td>DOM tree: html → body → h1</td></tr></table></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="app.js"></script><script>
quiz('tr','#qz');
// ---- generic figure drawer: node=[label,...children], null = empty slot ----
function lay(n,d,c){if(!n){c.i++;return null}if(n.length==1)return{l:n[0],x:c.i++,y:d,k:[]};const s=c.i,k=n.slice(1).map(x=>lay(x,d+1,c)).filter(Boolean);return{l:n[0],x:(s+c.i-1)/2,y:d,k}}
function fig(sp,hl=[]){const c={i:0},r=lay(sp,0,c),all=[];(function f(n){all.push(n);n.k.forEach(f)})(r);const X=n=>26+n.x*46,Y=n=>22+n.y*48,W=52+(c.i-1)*46,Hh=44+Math.max(...all.map(n=>n.y))*48;
return '<svg viewBox="0 0 '+W+' '+Hh+'" style="max-width:'+W*1.4+'px;width:100%">'+all.map(n=>n.k.map(k=>'<line x1="'+X(n)+'" y1="'+Y(n)+'" x2="'+X(k)+'" y2="'+Y(k)+'"/>').join('')).join('')+all.map(n=>'<g class="nd '+(hl.includes(n.l)?'on':'')+'"><circle cx="'+X(n)+'" cy="'+Y(n)+'" r="15"/><text x="'+X(n)+'" y="'+(Y(n)+5)+'">'+n.l+'</text></g>').join('')+'</svg>'}
const F=(id,sp,hl)=>$('#'+id).innerHTML=fig(sp,hl);
const P=['A',['B',['G'],['I',['J'],['K']],['H']],['C',['E',['D']],['F']]];
F('f0a',['A',['B'],['C',['E'],['F']]],[]);$('#f0a').innerHTML=$('#f0a').innerHTML.replace('</svg>','<line x1="98" y1="70" x2="144" y2="70" style="stroke:#dc2626"/></svg>');F('f0b',['A',['B'],['C',['E'],['F']]]);
const TM={Root:[['A'],'যে node থেকে tree শুরু। প্রতি tree-তে ঠিক একটি root; একাধিক root থাকতে পারে না। এখানে A।'],
Edge:[[],'দুই node-কে যুক্তকারী রেখা। n node-এর tree-তে ঠিক n−1 edge — এখানে 11 node, 10 edge।'],
Parent:[['A','B','I','C','E'],'যে node-এর এক বা একাধিক child আছে। A-র child B,C; B-র child G,I,H; I-র child J,K; C-র child E,F; E-র child D।'],
Child:[['B','C','G','I','H','J','K','E','F','D'],'যে node অন্য node-এর নিচে যুক্ত। root ছাড়া সবাই কারো না কারো child। B,C হলো A-র child; J,K হলো I-র child; D হলো E-র child।'],
Siblings:[['B','C','G','I','H','J','K','E','F'],'একই parent-এর child-রা siblings: (B,C), (G,I,H), (J,K), (E,F)।'],
Degree:[['B'],'Node-এর degree = তার child সংখ্যা: A=2, B=3, C=2, D=0। Tree-র degree = সবচেয়ে বড় node degree = B-র 3।'],
Internal:[['A','B','C','I','E'],'কমপক্ষে একটি child আছে এমন node (non-terminal)। এখানে A,B,C,I,E।'],
Leaf:[['G','J','K','H','D','F'],'যার কোনো child নেই (external/terminal node)। এখানে G,J,K,H,D,F।'],
Level:[['A'],'উপর থেকে নিচে ধাপ; root = level 0। Level 0: A · 1: B,C · 2: G,I,H,E,F · 3: J,K,D।'],
Height:[['A'],'Node থেকে নিচের সবচেয়ে লম্বা পথের edge সংখ্যা। Leaf-এর height 0; B=2, A=3। Tree-র height = root-এর height = 3।'],
Depth:[['J'],'Root থেকে ওই node পর্যন্ত edge সংখ্যা: A=0, B=1, C=1, J=3। Tree-র depth = সবচেয়ে গভীর leaf-এর depth = 3।'],
Subtree:[['B','G','I','J','K','H'],'কোনো node ও তার সব descendant মিলে subtree। এখানে B-কে root ধরে হলুদ অংশ একটি subtree।'],
Forest:[[],'আলাদা (disjoint) কয়েকটি tree-র সমষ্টি। Tree-র root সরালে তার child-দের subtree গুলো একটি forest হয়।']};
$('#tb').innerHTML=Object.keys(TM).map(k=>'<button onclick="tm(\''+k+'\')">'+k+'</button>').join('');F('f1',P);
function tm(k){F('f1',P,TM[k][0]);$('#tx').innerHTML='<b>'+k+':</b> '+TM[k][1]}
F('t1',['A',['B',['D'],['E']],['C']]);F('t2',['A',['B',['D'],['E']],['C',['F'],['G']]]);F('t3',['A',['B',['D'],['E']],['C',['F'],null]]);F('t4',['A',null,['B',null,['C',null,['D']]]]);
F('b1',['50',['30',['20'],['40']],['70',['60'],['80']]]);F('b2',['50',['20',['10'],['40']],['70',['60'],['90',null,['100']]]]);
F('tt',['1',['2',['4'],['5']],['3',null,['6']]]);
F('e1',['+',['/',['+',['a'],['b']],['−',['*',['a'],['b']],['c']]],['d']]);F('e2',['*',['+',['5'],['3']],['2']]);
F('h1',['10',['15',['25'],['30']],['20',['35'],['40']]]);F('h2',['40',['30',['25'],['20']],['35',['15'],['10']]]);
// ---- interactive BST ----
let R=null;const mk=v=>({v,l:null,r:null});
function put(v){if(!R){R=mk(v);return}let c=R;for(;;){if(v==c.v)return;const s=v<c.v?'l':'r';if(!c[s]){c[s]=mk(v);return}c=c[s]}}
function ins(){put(+$('#k').value);draw();$('#om').textContent='Insert সম্পন্ন'}
function pre(a){R=null;a.forEach(put);draw();$('#om').textContent='ক্রম: '+a.join(', ')}
function rm(n,v){if(!n)return n;if(v<n.v)n.l=rm(n.l,v);else if(v>n.v)n.r=rm(n.r,v);else{if(!n.l)return n.r;if(!n.r)return n.l;let s=n.r;while(s.l)s=s.l;n.v=s.v;n.r=rm(n.r,s.v)}return n}
function dl(){const v=+$('#k').value,a=nodes(R).find(n=>n.v==v);let t='পাওয়া যায়নি';if(a)t=!a.l&&!a.r?'Case 1: leaf সরানো হলো':(!a.l||!a.r)?'Case 2: এক child দিয়ে প্রতিস্থাপন':'Case 3: inorder successor দিয়ে প্রতিস্থাপন';R=rm(R,v);draw();$('#om').textContent=v+' delete — '+t}
function ly(n,d,o){if(!n)return;ly(n.l,d+1,o);n.x=o.i++;n.y=d;ly(n.r,d+1,o)}
function nodes(n,a=[]){if(n){nodes(n.l,a);a.push(n);nodes(n.r,a)}return a}
function draw(on=[]){const o={i:0};ly(R,0,o);const a=nodes(R),X=n=>30+n.x*(540/Math.max(a.length,1)),Y=n=>30+n.y*55;
$('#sv').innerHTML=a.map(n=>[n.l,n.r].map(c=>c?'<line x1="'+X(n)+'" y1="'+Y(n)+'" x2="'+X(c)+'" y2="'+Y(c)+'"/>':'').join('')).join('')+a.map(n=>'<g class="nd '+(on.includes(n)?'on':'')+'"><circle cx="'+X(n)+'" cy="'+Y(n)+'" r="16"/><text x="'+X(n)+'" y="'+(Y(n)+5)+'">'+n.v+'</text></g>').join('')}
function order(t,n=R,a=[]){if(!n)return a;if(t=='pre')a.push(n);order(t,n.l,a);if(t=='in')a.push(n);order(t,n.r,a);if(t=='post')a.push(n);return a}
function lvl(){const a=[],q=R?[R]:[];while(q.length){const n=q.shift();a.push(n);n.l&&q.push(n.l);n.r&&q.push(n.r)}return a}
async function trav(t){const a=t=='lvl'?lvl():order(t);for(let i=1;i<=a.length;i++){draw(a.slice(0,i));$('#om').textContent=a.slice(0,i).map(n=>n.v).join(', ');await sleep(600)}}
async function srch(){const v=+$('#k').value;let c=R,p=[];while(c){p.push(c);draw(p);$('#om').textContent=v+' ও '+c.v+' তুলনা: '+(v==c.v?'পাওয়া গেছে':v<c.v?'ছোট ⇒ বামে':'বড় ⇒ ডানে');await sleep(700);if(c.v==v)return;c=v<c.v?c.l:c.r}$('#om').textContent=v+' পাওয়া যায়নি'}
pre([50,30,70,20,40,60,80]);
</script></body></html>

```

## avl.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DS</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>AVL Tree — বাংলায় ধারণা</h2><p>সাধারণ BST-তে sorted data দিলে tree একদিকে ঝুঁকে linked list হয়ে যায় (search O(n))। <b>AVL tree</b> প্রতিটি node-এর <b>Balance Factor (BF) = height(বাম) − height(ডান)</b> সবসময় −1, 0 বা +1 রাখে; এর বাইরে গেলেই <b>rotation</b> করে ঠিক করে। ফলে সব operation O(log n)।</p>
<table><tr><th>অবস্থা</th><th>সমাধান</th></tr><tr><td>BF=+2, বাম child-এর BF ≥ 0 (LL)</td><td>Right rotate</td></tr><tr><td>BF=−2, ডান child-এর BF ≤ 0 (RR)</td><td>Left rotate</td></tr><tr><td>BF=+2, বাম child-এর BF &lt; 0 (LR)</td><td>আগে বামে left rotate, তারপর right rotate</td></tr><tr><td>BF=−2, ডান child-এর BF &gt; 0 (RL)</td><td>আগে ডানে right rotate, তারপর left rotate</td></tr></table>
<div class="card"><b>Delete:</b> BST-এর মতোই মোছো (leaf / এক child / দুই child হলে inorder successor); তারপর উপরের দিকে প্রতিটি node-এ BF দেখে প্রয়োজনে rotation। Insert-এ সর্বোচ্চ ১টি rotation (বা double) লাগে, delete-এ একাধিক লাগতে পারে।</div></section>
<section class="slide"><h2>AVL (ইন্টারেক্টিভ)</h2><div class="card"><b>কীভাবে চালাবে:</b> 10, 20, 30 insert করলে RR rotation দেখবে। তারপর কিছু মান delete করে দেখো tree আবার balance হয় কি না। নিচের বার্তায় কোন rotation হলো লেখা থাকবে।</div><input id="k" type="number" value="10" style="width:80px"><button onclick="go2()">Insert</button><button onclick="dl()">Delete</button><button onclick="R=null;dr();$('#m').textContent=''">Reset</button><svg id="sv" viewBox="0 0 600 300" width="100%"></svg><p id="m"></p></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section><script src="bank.js"></script><script src="app.js"></script><script>quiz('tr','#qz');let R=null,log='';const H=n=>n?n.h:0,U=n=>n.h=1+Math.max(H(n.l),H(n.r)),BF=n=>H(n.l)-H(n.r);
const rr=y=>{const x=y.l;y.l=x.r;x.r=y;U(y);U(x);return x},rl=x=>{const y=x.r;x.r=y.l;y.l=x;U(x);U(y);return y};
function bal(n){U(n);const b=BF(n);if(b>1){if(BF(n.l)<0){n.l=rl(n.l);log+='LR '}else log+='LL ';return rr(n)}if(b<-1){if(BF(n.r)>0){n.r=rr(n.r);log+='RL '}else log+='RR ';return rl(n)}return n}
function ins(n,v){if(!n)return{v,h:1,l:null,r:null};if(v<n.v)n.l=ins(n.l,v);else if(v>n.v)n.r=ins(n.r,v);else return n;return bal(n)}
function del(n,v){if(!n)return n;if(v<n.v)n.l=del(n.l,v);else if(v>n.v)n.r=del(n.r,v);else{if(!n.l||!n.r)return n.l||n.r;let s=n.r;while(s.l)s=s.l;n.v=s.v;n.r=del(n.r,s.v)}return bal(n)}
function lay(n,d,o){if(!n)return;lay(n.l,d+1,o);n.x=o.i++;n.y=d;lay(n.r,d+1,o)}function nd(n,a=[]){if(n){nd(n.l,a);a.push(n);nd(n.r,a)}return a}
function dr(){lay(R,0,{i:0});const a=nd(R),X=n=>30+n.x*(540/Math.max(a.length,1)),Y=n=>30+n.y*55;$('#sv').innerHTML=a.map(n=>[n.l,n.r].map(c=>c?'<line x1="'+X(n)+'" y1="'+Y(n)+'" x2="'+X(c)+'" y2="'+Y(c)+'"/>':'').join('')).join('')+a.map(n=>'<g class="nd"><circle cx="'+X(n)+'" cy="'+Y(n)+'" r="18"/><text x="'+X(n)+'" y="'+(Y(n)+4)+'">'+n.v+'</text><text x="'+(X(n)+22)+'" y="'+(Y(n)-14)+'" style="font-size:10px">BF '+BF(n)+'</text></g>').join('')}
function go2(){log='';R=ins(R,+$('#k').value);$('#k').value=+$('#k').value+10;$('#m').textContent=log?'Rotation: '+log:'rotation লাগেনি';dr()}
function dl(){log='';R=del(R,+$('#k').value);$('#m').textContent=log?'Delete-এর পর rotation: '+log:'rotation লাগেনি';dr()}dr()</script></body></html>

```

## hashing.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DS</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Hashing — বাংলায় ধারণা</h2><p>অনেক data-র মধ্যে একটা খুঁজতে হলে সাধারণত তুলনা করতে হয়। Hashing-এ একটি <b>hash function</b> key-কে সরাসরি একটি ছোট সংখ্যা (index) বানিয়ে দেয়, আর data সেই index-এর <b>bucket</b>-এ রাখা হয়। ফলে খোঁজার সময় n-এর ওপর নির্ভর করে না — গড়ে <b>O(1)</b>।</p>
<div class="card">Hash function: <b>Division</b> (key mod m), <b>Mid-square</b> (key² এর মাঝের অংশ), <b>Folding</b> (key ভেঙে যোগ)। ভালো function দ্রুত হয়, collision কম করে, key সমানভাবে ছড়ায়।</div>
<div class="card"><b>Collision</b>: দুটি key একই bucket-এ পড়লে। সমাধান: <b>Separate chaining</b> (bucket-এ linked list) বা <b>Open addressing</b> (table-এর ভেতরেই খালি জায়গা খোঁজা): Linear (h+i), Quadratic (h+i²), Double (h+i·hash2)।</div></section>
<section class="slide"><h2>উদাহরণ: keys 50, 700, 76, 85, 92, 73, 101 — hash = key mod 7</h2>
<p>mod 7: 50→1, 700→0, 76→6, 85→1, 92→1, 73→3, 101→3 (85, 92, 101 collision)।</p>
<table><tr><th>Bucket</th><th>Chaining</th><th>Linear</th><th>Quadratic</th><th>Double (h2=5−k mod 5)</th></tr>
<tr><td>0</td><td>700</td><td>700</td><td>700</td><td>700</td></tr><tr><td>1</td><td>50 → 85 → 92</td><td>50</td><td>50</td><td>50</td></tr><tr><td>2</td><td>–</td><td>85</td><td>85</td><td>101</td></tr><tr><td>3</td><td>73 → 101</td><td>92</td><td>73</td><td>92</td></tr><tr><td>4</td><td>–</td><td>73</td><td>101</td><td>85</td></tr><tr><td>5</td><td>–</td><td>101</td><td>92</td><td>73</td></tr><tr><td>6</td><td>76</td><td>76</td><td>76</td><td>76</td></tr></table>
<div class="card"><b>Linear:</b> 85→1 ভরা, 2-এ। 92→1,2 ভরা, 3-এ। 73→3 ভরা, 4-এ। 101→3,4 ভরা, 5-এ।<br><b>Quadratic:</b> 85→1, 1+1=2 ✔। 92→1, 2 ভরা, 1+4=5 ✔। 101→3 ভরা, 3+1=4 ✔।<br><b>Double:</b> 85→h2=5, 1+5=6 ভরা, 1+10=11 mod 7=4 ✔। 92→h2=3: 4 ভরা, 7 mod 7=0 ভরা, 10 mod 7=3 ✔। 73→h2=2: 5 ✔। 101→h2=4: 0,4,1,5 সবই ভরা, 23 mod 7=2 ✔।<br><i>(PDF-র উদাহরণ ছিল ছবি, তাই একই key দিয়ে আমি নিজে হিসাব করেছি।)</i></div></section>
<section class="slide"><h2>তুলনা</h2><table><tr><th></th><th>Separate chaining</th><th>Open addressing</th></tr><tr><td>Key কোথায়</td><td>table-এর বাইরে linked list-এ</td><td>সব table-এর ভেতরে</td></tr><tr><td>Load factor</td><td>১-এর বেশি হতে পারে</td><td>সর্বোচ্চ ১</td></tr><tr><td>Delete</td><td>সহজ (list থেকে সরাও)</td><td>“deleted” চিহ্ন দিতে হয়</td></tr><tr><td>Extra memory</td><td>pointer লাগে</td><td>লাগে না</td></tr></table><br>
<table><tr><th>Probing</th><th>সুবিধা</th><th>সমস্যা</th></tr><tr><td>Linear</td><td>সহজ হিসাব</td><td>Primary clustering</td></tr><tr><td>Quadratic</td><td>Primary clustering কম</td><td>Secondary clustering; সব bucket নাও পেতে পারে</td></tr><tr><td>Double</td><td>clustering প্রায় নেই</td><td>দুটি hash function, বেশি হিসাব</td></tr></table></section>
<section class="slide"><h2>Hash table (mod 7, ইন্টারেক্টিভ)</h2><div class="card"><b>কীভাবে চালাবে:</b> পদ্ধতি বেছে key লিখে Insert দাও; collision হলে বার্তায় দেখবে কোন ধাপে কোথায় বসল। Search ও Delete-ও করতে পারবে। ⓓ = deleted চিহ্ন।</div>
<select id="md" onchange="M=this.value;rs()"><option value="ch">Chaining</option><option value="lin">Linear</option><option value="quad">Quadratic</option><option value="dbl">Double (h2=5−k%5)</option></select><input id="k" type="number" value="50" style="width:80px"><button onclick="add()">Insert</button><button onclick="se()">Search</button><button onclick="de()">Delete</button><button onclick="rs()">Reset</button><button onclick="[50,700,76,85,92,73,101].forEach(x=>{$('#k').value=x;add()})">উদাহরণ চালাও</button><div id="t"></div><p id="m"></p></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section><script src="bank.js"></script><script src="app.js"></script><script>quiz('hs','#qz');let T,M='ch';function rs(){T=Array.from({length:7},()=>[]);dw();$('#m').textContent=''}
const D=b=>b[0]==='D',ix=(k,i)=>{const h=k%7;return M=='lin'?(h+i)%7:M=='quad'?(h+i*i)%7:(h+i*(5-k%5))%7};
function dw(){$('#t').innerHTML=T.map((b,i)=>'<div class="bkt"><b>'+i+'</b>'+b.map(v=>'<span class="box">'+(v==='D'?'ⓓ':v)+'</span>').join('<span class="arr">→</span>')+'</div>').join('')}
function add(){const k=+$('#k').value,h=k%7;let t='h='+h;if(M=='ch'){if(T[h].length)t+=' collision → chain-এ যোগ';T[h].push(k)}else{let ok=0;for(let i=0;i<7;i++){const x=ix(k,i);if(!T[x].length||D(T[x])){T[x]=[k];t+=' → bucket '+x+(i?' ('+i+' বার probe)':'');ok=1;break}}if(!ok)t+=' → জায়গা পাওয়া যায়নি'}$('#m').textContent=k+': '+t;dw()}
function se(){const k=+$('#k').value;let c=0,f=-1;if(M=='ch'){const b=T[k%7];c=b.indexOf(k)<0?b.length:b.indexOf(k)+1;f=b.includes(k)?k%7:-1}else for(let i=0;i<7;i++){const x=ix(k,i);if(!T[x].length)break;c++;if(T[x][0]===k){f=x;break}}$('#m').textContent=k+(f<0?' পাওয়া যায়নি':' পাওয়া গেছে (bucket '+f+')')+', '+c+' তুলনা'}
function de(){const k=+$('#k').value;if(M=='ch'){const b=T[k%7],j=b.indexOf(k);if(j>=0)b.splice(j,1)}else for(let i=0;i<7;i++){const x=ix(k,i);if(!T[x].length)break;if(T[x][0]===k){T[x]=['D'];break}}$('#m').textContent=k+' delete চেষ্টা সম্পন্ন';dw()}rs()</script></body></html>

```

## graph.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Graph</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Graph — মৌলিক ধারণা</h2>
<p>Graph = <b>vertex (node)</b>-এর সেট + তাদের যুক্তকারী <b>edge</b>-এর সেট। Tree-র বিপরীতে graph-এ cycle থাকতে পারে। Tree হলো এমন graph যা connected ও cycle-হীন (n vertex ⇒ n−1 edge)।</p>
<table><tr><th>পরিভাষা</th><th>অর্থ</th></tr><tr><td>Directed / Undirected</td><td>edge-এ দিক আছে / নেই</td></tr><tr><td>Weighted</td><td>প্রতি edge-এ খরচ/দূরত্ব (weight)</td></tr><tr><td>Path / Cycle</td><td>vertex-এর ধারা / যে path শুরুর vertex-এই ফেরে</td></tr><tr><td>Connected</td><td>যেকোনো দুই vertex-এর মধ্যে path আছে</td></tr><tr><td>Degree</td><td>কোনো vertex-এ যুক্ত edge সংখ্যা</td></tr></table>
<div class="card">n vertex-এর complete undirected graph-এ edge = n(n−1)/2। <b>ব্যবহার:</b> সড়ক/নেটওয়ার্ক, সামাজিক সংযোগ, গেমের মানচিত্র, রাউটিং।</div>
<p>এই পেজের উদাহরণ graph (weighted, undirected):</p><div id="g0" style="max-width:460px"></div><div id="rep"></div>
<div class="card"><b>Representation:</b> Adjacency matrix (V×V টেবিল; space O(V²); edge আছে কি না O(1)) · Adjacency list (প্রতি vertex-এর প্রতিবেশীর তালিকা; space O(V+E))।</div></section>

<section class="slide"><h2>BFS ও DFS</h2>
<div class="card"><b>কীভাবে চালাবে:</b> বোতাম চাপলে A থেকে শুরু করে node-গুলো ক্রমানুসারে হলুদ হবে এবং ক্রম নিচে লেখা হবে। BFS কাছের প্রতিবেশীদের আগে (queue); DFS একটি পথে যতদূর যায়, শেষ হলে ফিরে অন্য পথে (stack/recursion)।</div>
<div id="g1" style="max-width:460px"></div><button onclick="tr('bfs')">BFS (queue)</button><button onclick="tr('dfs')">DFS (stack)</button><p id="m1"></p>
<table><tr><th></th><th>BFS</th><th>DFS</th></tr><tr><td>Data structure</td><td>Queue</td><td>Stack / recursion</td></tr><tr><td>Complexity</td><td>O(V+E)</td><td>O(V+E)</td></tr><tr><td>ব্যবহার</td><td>unweighted graph-এ এক vertex থেকে সব vertex-এর দূরত্ব/ছোট পথ; বন্ধু-সুপারিশ</td><td>maze/puzzle পথ, cycle খোঁজা, গভীর ফোল্ডার খোঁজা</td></tr></table></section>

<section class="slide"><h2>Shortest Path — Dijkstra</h2>
<p><b>Single source</b> shortest path: এক উৎস (A) থেকে বাকি সব vertex-এ সবচেয়ে কম খরচের পথ। <b>নেগেটিভ weight চলবে না।</b> কৌশল (greedy): অনির্ধারিত vertex-দের মধ্যে যার দূরত্ব সবচেয়ে কম সেটিকে চূড়ান্ত করো, তার প্রতিবেশীদের দূরত্ব ছোট হলে আপডেট (relax) করো।</p>
<div class="card"><b>কীভাবে চালাবে:</b> “পরের ধাপ” চাপো; হলুদ node = চূড়ান্ত হওয়া; নিচের টেবিলে প্রতিটি vertex-এর বর্তমান দূরত্ব; হলুদ edge = এখন পর্যন্ত পাওয়া shortest-path tree।</div>
<div id="g2" style="max-width:460px"></div><button onclick="dj(0)">রিসেট</button><button onclick="dj(1)">পরের ধাপ</button><div id="d2"></div>
<div class="card"><b>Complexity:</b> array দিয়ে O(V²); min-heap দিয়ে O((V+E) log V)। BFS দিয়েও unweighted graph-এ shortest path হয়, কিন্তু weighted-এ Dijkstra লাগে।</div></section>

<section class="slide"><h2>Bellman-Ford ও SPFA</h2>
<p><b>Bellman-Ford</b> single-source shortest path, যেখানে <b>edge-এর weight নেগেটিভ</b> হতে পারে। পদ্ধতি: (V−1) বার সব edge relax করো। নেগেটিভ cycle থাকলে shortest path অর্থহীন (V-তম বারেও কমলে নেগেটিভ cycle ধরা পড়ে)। Complexity O(V·E)।</p>
<p>উদাহরণ (directed): A→B = 4, A→C = 5, B→C = −3, C→D = 2; উৎস A:</p><div id="bf"></div>
<div class="card"><b>SPFA (Shortest Path Faster Algorithm):</b> Bellman-Ford-এরই queue-ভিত্তিক দ্রুত রূপ — শুধু যে vertex-এর দূরত্ব বদলেছে তাদের queue-তে রেখে relax করে। single-source; গড়ে খুব দ্রুত, তাত্ত্বিক worst case O(V·E)।</div></section>

<section class="slide"><h2>Floyd-Warshall — সব জোড়ার shortest path</h2>
<p><b>All-pairs</b> shortest path, Dynamic Programming দিয়ে। প্রতিটি vertex k-কে “মাঝের স্টেশন” ধরে পরীক্ষা: <code>d[i][j] = min(d[i][j], d[i][k] + d[k][j])</code>। Complexity O(V³)।</p>
<div class="card"><b>কীভাবে চালাবে:</b> “পরের k” চাপলে একটি করে vertex মাঝের স্টেশন হিসেবে যুক্ত হবে এবং কমে যাওয়া দূরত্ব হলুদ হবে। (উপরের graph, undirected)</div>
<button onclick="fw(0)">রিসেট</button><button onclick="fw(1)">পরের k</button><div id="fw"></div></section>

<section class="slide"><h2>Minimum Spanning Tree (MST)</h2>
<p><b>Spanning tree:</b> সব vertex যুক্ত অথচ cycle-হীন subgraph (V−1 edge)। <b>MST:</b> weighted graph-এ মোট weight সবচেয়ে কম spanning tree। নেটওয়ার্কে loop আটকাতে (spanning tree protocol) ও কম খরচে তার/পাইপ টানতে ব্যবহৃত।</p>
<div class="card"><b>Kruskal (greedy):</b> সব edge weight অনুযায়ী ছোট→বড় সাজাও; একে একে নাও, তবে cycle তৈরি হলে বাদ দাও। V−1 edge হলে শেষ। Complexity O(E log E)।</div>
<div class="card"><b>Prim (greedy):</b> একটি vertex থেকে শুরু; প্রতিবার ইতোমধ্যে নেওয়া অংশ থেকে বেরোনো সবচেয়ে সস্তা edge নাও। Complexity O(V²) বা heap-এ O(E log V)।</div>
<div class="card"><b>কীভাবে চালাবে:</b> Kruskal/Prim বোতাম চাপলে একটি করে edge বিবেচনা হয় — সবুজাভ হলুদ = নেওয়া হলো, নিচের লেখায় কেন নেওয়া/বাদ দেওয়া হলো তা থাকবে।</div>
<div id="g3" style="max-width:460px"></div><button onclick="mst('k',0)">Kruskal রিসেট</button><button onclick="mst('k',1)">Kruskal পরের</button><button onclick="mst('p',0)">Prim রিসেট</button><button onclick="mst('p',1)">Prim পরের</button><p id="m3"></p></section>

<section class="slide"><h2>Algorithm সারসংক্ষেপ</h2>
<table><tr><th>Algorithm</th><th>উদ্দেশ্য</th><th>নেগেটিভ edge?</th><th>Complexity</th></tr><tr><td>BFS / DFS</td><td>traversal; unweighted shortest path (BFS)</td><td>–</td><td>O(V+E)</td></tr><tr><td>Dijkstra</td><td>single-source shortest path</td><td>না</td><td>O(V²) / O((V+E)log V)</td></tr><tr><td>Bellman-Ford</td><td>single-source shortest path</td><td>হ্যাঁ</td><td>O(VE)</td></tr><tr><td>SPFA</td><td>Bellman-Ford-এর queue রূপ</td><td>হ্যাঁ</td><td>গড়ে দ্রুত, worst O(VE)</td></tr><tr><td>Floyd-Warshall</td><td>all-pairs shortest path (DP)</td><td>হ্যাঁ (নেগেটিভ cycle ছাড়া)</td><td>O(V³)</td></tr><tr><td>Kruskal</td><td>MST (edge বাছাই)</td><td>–</td><td>O(E log E)</td></tr><tr><td>Prim</td><td>MST (vertex বাড়ানো)</td><td>–</td><td>O(V²) / O(E log V)</td></tr><tr><td>A*</td><td>গেম/রোবটে heuristic-সহ shortest path</td><td>–</td><td>heuristic-নির্ভর</td></tr></table>
<div class="card">পরীক্ষার ফাঁদ: weighted graph-এ সবচেয়ে কার্যকর shortest path = Dijkstra (DFS বা BFS নয়); নেগেটিভ weight থাকলে Bellman-Ford; সব জোড়া হলে Floyd-Warshall।</div></section>
<section class="slide"><h2>অনুশীলন প্রশ্ন</h2><div id="qz"></div></section>
<script src="bank.js"></script><script src="fig.js"></script><script src="app.js"></script><script>
quiz('gr','#qz');
const V=['A','B','C','D','E','F'],PS={A:[50,130],B:[150,45],C:[150,215],D:[290,45],E:[290,215],F:[385,130]},EG=[['A','B',4],['A','C',2],['B','C',1],['B','D',5],['C','D',8],['C','E',10],['D','E',2],['D','F',6],['E','F',3]],INF=1e9;
const key=(a,b)=>[a,b].sort().join(''),adj=n=>EG.filter(e=>e[0]==n||e[1]==n).map(e=>[e[0]==n?e[1]:e[0],e[2]]).sort();
function dg(id,hn=[],he=[],lab={}){$('#'+id).innerHTML='<svg viewBox="0 0 440 260" width="100%">'+EG.map(e=>{const p=PS[e[0]],q=PS[e[1]],on=he.includes(key(e[0],e[1]));return '<line x1="'+p[0]+'" y1="'+p[1]+'" x2="'+q[0]+'" y2="'+q[1]+'" style="'+(on?'stroke:var(--hl);stroke-width:5':'')+'"/><text x="'+(p[0]+q[0])/2+'" y="'+((p[1]+q[1])/2-5)+'" style="font-size:12px">'+e[2]+'</text>'}).join('')+V.map(v=>'<g class="nd '+(hn.includes(v)?'on':'')+'"><circle cx="'+PS[v][0]+'" cy="'+PS[v][1]+'" r="17"/><text x="'+PS[v][0]+'" y="'+(PS[v][1]+5)+'">'+v+'</text>'+(lab[v]!==undefined?'<text x="'+PS[v][0]+'" y="'+(PS[v][1]+34)+'" style="font-size:12px">'+lab[v]+'</text>':'')+'</g>').join('')+'</svg>'}
dg('g0');dg('g1');dg('g3');
$('#rep').innerHTML='<p><b>Adjacency list:</b></p>'+tb(['Vertex','প্রতিবেশী (weight)'],V.map(v=>[v,adj(v).map(a=>a[0]+'('+a[1]+')').join(', ')]))+'<p><b>Adjacency matrix (weight):</b></p>'+tb([''].concat(V),V.map(a=>[a].concat(V.map(b=>{const e=EG.find(e=>key(e[0],e[1])==key(a,b));return e?e[2]:'–'}))));
async function tr(t){const seen=['A'],q=['A'],o=[];while(q.length){const n=t=='bfs'?q.shift():q.pop();o.push(n);dg('g1',o);$('#m1').textContent=o.join(' → ');await sleep(700);const a=adj(n).map(x=>x[0]);(t=='bfs'?a:a.reverse()).forEach(x=>{if(!seen.includes(x)){seen.push(x);q.push(x)}})}}
function dijF(){const d={},vis=[],pv={},fr=[];V.forEach(v=>d[v]=INF);d.A=0;for(let k=0;k<V.length;k++){let u=null;V.forEach(v=>{if(!vis.includes(v)&&(u===null||d[v]<d[u]))u=v});vis.push(u);adj(u).forEach(a=>{if(d[u]+a[1]<d[a[0]]){d[a[0]]=d[u]+a[1];pv[a[0]]=u}});fr.push({u,d:{...d},vis:[...vis],pv:{...pv}})}return fr}
const DF=dijF();let di=-1;
function dj(s){di=s?Math.min(di+1,DF.length-1):-1;if(di<0){dg('g2',[],[],{A:0});$('#d2').innerHTML='<p>শুরু: A = 0, বাকি সব ∞</p>';return}const f=DF[di];dg('g2',f.vis,Object.keys(f.pv).filter(v=>f.vis.includes(v)).map(v=>key(v,f.pv[v])),Object.fromEntries(V.map(v=>[v,f.d[v]>=INF?'∞':f.d[v]])));
$('#d2').innerHTML='<p>ধাপ '+(di+1)+': <b>'+f.u+'</b> চূড়ান্ত (দূরত্ব '+f.d[f.u]+') এবং তার প্রতিবেশীদের দূরত্ব আপডেট।</p>'+tb(['Vertex'].concat(V),[['দূরত্ব'].concat(V.map(v=>f.d[v]>=INF?'∞':f.d[v])),['চূড়ান্ত?'].concat(V.map(v=>f.vis.includes(v)?'✔':''))])}dj(0);
(function(){const E=[['A','B',4],['A','C',5],['B','C',-3],['C','D',2]],N=['A','B','C','D'],d={A:0,B:INF,C:INF,D:INF},rows=[['শুরু'].concat(N.map(v=>d[v]>=INF?'∞':d[v]))];for(let i=1;i<N.length;i++){E.forEach(e=>{if(d[e[0]]<INF&&d[e[0]]+e[2]<d[e[1]])d[e[1]]=d[e[0]]+e[2]});rows.push(['Pass '+i].concat(N.map(v=>d[v]>=INF?'∞':d[v])))}$('#bf').innerHTML=tb(['ধাপ'].concat(N),rows)+'<p>B→C = −3 থাকায় C-এর দূরত্ব 5 থেকে কমে 4−3 = 1 হয়েছে; Dijkstra এখানে ভুল ফল দিতে পারত।</p>'})();
const FW=(()=>{let D=V.map(a=>V.map(b=>a==b?0:(EG.find(e=>key(e[0],e[1])==key(a,b))||[0,0,INF])[2])),fr=[{k:-1,D:D.map(r=>[...r]),ch:[]}];for(let k=0;k<V.length;k++){const ch=[];D=D.map(r=>[...r]);for(let i=0;i<V.length;i++)for(let j=0;j<V.length;j++)if(D[i][k]+D[k][j]<D[i][j]){D[i][j]=D[i][k]+D[k][j];ch.push(i+','+j)}fr.push({k,D:D.map(r=>[...r]),ch})}return fr})();let fi=0;
function fw(s){fi=s?Math.min(fi+1,FW.length-1):0;const f=FW[fi];$('#fw').innerHTML='<p>'+(f.k<0?'শুরু: সরাসরি edge-এর খরচ (∞ = সংযোগ নেই)':'k = '+V[f.k]+' মাঝের স্টেশন; '+f.ch.length+'টি দূরত্ব কমেছে')+'</p>'+tb([''].concat(V),V.map((a,i)=>['<b>'+a+'</b>'].concat(V.map((b,j)=>(f.ch.includes(i+','+j)?'<span style="background:var(--hl);color:#000;padding:0 4px">':'<span>')+(f.D[i][j]>=INF?'∞':f.D[i][j])+'</span>'))))}fw(0);
function kF(){const S=[...EG].sort((a,b)=>a[2]-b[2]),p={};V.forEach(v=>p[v]=v);const f=x=>p[x]==x?x:(p[x]=f(p[x]));const ch=[],fr=[];let tot=0;S.forEach(e=>{const a=f(e[0]),b=f(e[1]);let ok=a!=b;if(ok){p[a]=b;ch.push(key(e[0],e[1]));tot+=e[2]}fr.push({e,ok,ch:[...ch],tot})});return fr}
function pF(){const inn=['A'],ch=[],fr=[];let tot=0;while(inn.length<V.length){let best=null;EG.forEach(e=>{const a=inn.includes(e[0]),b=inn.includes(e[1]);if(a!=b&&(!best||e[2]<best[2]))best=e});const nv=inn.includes(best[0])?best[1]:best[0];inn.push(nv);ch.push(key(best[0],best[1]));tot+=best[2];fr.push({e:best,nv,ch:[...ch],tot,inn:[...inn]})}return fr}
const KF=kF(),PF=pF();let ki=-1,pi=-1;
function mst(t,s){if(t=='k'){ki=s?Math.min(ki+1,KF.length-1):-1;if(ki<0){dg('g3');$('#m3').textContent='Kruskal: edge-গুলো weight অনুযায়ী: '+[...EG].sort((a,b)=>a[2]-b[2]).map(e=>e[0]+e[1]+'('+e[2]+')').join(', ');return}const f=KF[ki];dg('g3',[],f.ch);$('#m3').textContent='edge '+f.e[0]+f.e[1]+' (weight '+f.e[2]+'): '+(f.ok?'নেওয়া হলো (cycle হয়নি)':'বাদ — cycle তৈরি হতো')+'। এ পর্যন্ত মোট weight = '+f.tot+(ki==KF.length-1?' ⇒ MST মোট = '+f.tot:'')}
else{pi=s?Math.min(pi+1,PF.length-1):-1;if(pi<0){dg('g3',['A']);$('#m3').textContent='Prim: A থেকে শুরু';return}const f=PF[pi];dg('g3',f.inn,f.ch);$('#m3').textContent='সবচেয়ে সস্তা বেরোনো edge '+f.e[0]+f.e[1]+' ('+f.e[2]+') ⇒ '+f.nv+' যুক্ত। মোট weight = '+f.tot}}
</script></body></html>

```

## model.html
```html
<!doctype html><html lang="bn"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DS</title><link rel="stylesheet" href="style.css"></head><body>
<section class="slide"><h2>Model Test — ৩০টি random প্রশ্ন</h2><p>সব section-এর প্রশ্ন থেকে। প্রতিবার <b>Shuffle</b> চাপলে নতুন ৩০টি।</p><button onclick="nw()">Shuffle / নতুন টেস্ট</button><button onclick="sub()">জমা দাও</button><span id="sc"></span><div id="qz"></div></section>
<script src="bank.js"></script><script src="app.js"></script><script>let cur=[];function nw(){cur=shuf(BANK).slice(0,30);cur.forEach(q=>{const c=q.o[q.a],o=shuf(q.o);q.o=o;q.a=o.indexOf(c)});$('#qz').dataset.exam=1;renderQ(cur,$('#qz'),'m');$('#sc').textContent=''}
function sub(){let s=0;cur.forEach((q,i)=>{const c=document.querySelector('input[name=m'+i+']:checked'),ok=c&&+c.dataset.j==q.a;if(ok)s++;$('#mr'+i).innerHTML='<span class="'+(ok?'good':'bad')+'">'+(ok?'সঠিক ✔':'সঠিক: '+q.o[q.a])+'</span> '+q.e});$('#sc').textContent=' স্কোর: '+s+' / 30'}nw()</script></body></html>

```

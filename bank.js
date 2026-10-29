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

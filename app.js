const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],sleep=ms=>new Promise(r=>setTimeout(r,ms));
const PAGES=[['index','হোম'],['complexity','Complexity'],['search-sort','Search'],['sorts','Sorting'],['stack','Stack/Queue'],['linkedlist','Linked List'],['tree','Tree/BST'],['avl','AVL'],['hashing','Hashing'],['graph','Graph'],['model','Model Test']];
document.body.insertAdjacentHTML('afterbegin','<nav>'+PAGES.map(p=>`<a href="${p[0]}.html" class="${location.pathname.endsWith(p[0]+'.html')||(p[0]=='index'&&location.pathname.endsWith('/'))?'cur':''}">${p[1]}</a>`).join('')+'</nav>');
document.body.insertAdjacentHTML('beforeend','<div class="ctl"><button id="pv">◀ আগে</button><span id="pg"></span><button id="nx">পরে ▶</button></div>');
const S=$$('.slide');let cur=0;
function go(n){cur=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>s.classList.toggle('on',k==cur));$('#pg').textContent=(cur+1)+' / '+S.length;scrollTo(0,0)}
addEventListener('keydown',e=>{if(e.target.tagName=='INPUT')return;if(e.key=='ArrowRight')go(cur+1);if(e.key=='ArrowLeft')go(cur-1)});
$('#nx').onclick=()=>go(cur+1);$('#pv').onclick=()=>go(cur-1);go(0);

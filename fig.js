function lay(n,d,c){if(!n){c.i++;return null}if(n.length==1)return{l:n[0],x:c.i++,y:d,k:[]};const s=c.i,k=n.slice(1).map(x=>lay(x,d+1,c)).filter(Boolean);return{l:n[0],x:(s+c.i-1)/2,y:d,k}}
function fig(sp,hl=[]){const c={i:0},r=lay(sp,0,c),all=[];(function f(n){all.push(n);n.k.forEach(f)})(r);const X=n=>26+n.x*46,Y=n=>22+n.y*48,W=52+(c.i-1)*46,Hh=44+Math.max(...all.map(n=>n.y))*48;
return '<svg viewBox="0 0 '+W+' '+Hh+'" style="max-width:'+W*1.4+'px;width:100%">'+all.map(n=>n.k.map(k=>'<line x1="'+X(n)+'" y1="'+Y(n)+'" x2="'+X(k)+'" y2="'+Y(k)+'"/>').join('')).join('')+all.map(n=>'<g class="nd '+(hl.includes(n.l)?'on':'')+'"><circle cx="'+X(n)+'" cy="'+Y(n)+'" r="15"/><text x="'+X(n)+'" y="'+(Y(n)+5)+'">'+n.l+'</text></g>').join('')+'</svg>'}
const F=(id,sp,hl)=>$('#'+id).innerHTML=fig(sp,hl);
const tb=(h,r)=>'<table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(a=>'<tr>'+a.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</table>';
const AS=(H,i=0)=>{if(i>=H.length)return null;const l=AS(H,2*i+1),r=AS(H,2*i+2);return l||r?[H[i],l,r]:[H[i]]};

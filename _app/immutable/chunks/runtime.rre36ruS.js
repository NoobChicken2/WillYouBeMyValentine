var Nn=Array.isArray,Zt=Array.prototype.indexOf,Cn=Array.from,bn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,Fn=Array.prototype,Wt=Object.getPrototypeOf;function qn(t){return typeof t=="function"}const Ln=()=>{};function Mn(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,j=8,at=16,g=32,B=64,K=128,x=256,$=512,d=1024,R=2048,O=4096,C=8192,P=16384,Jt=32768,yt=65536,Yn=1<<17,Qt=1<<19,wt=1<<20,vt=Symbol("$state"),Hn=Symbol("legacy props"),jn=Symbol("");function Tt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Bn(t,n){return t!==n}function mt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function $n(){J=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=4,er=1,lr=2,un="[",on="[!",fn="]",At={},sr=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ar(t){return _n(ut(t))}function ur(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&u.f&y&&(w===null?gn([t]):w.push(t)),t}function or(t,n){return u!==null&&Q()&&u.f&(y|at)&&(w===null||!w.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),gt(t,R),Q()&&f!==null&&f.f&d&&!(f.f&(g|B))&&(m===null?Rn([t]):m.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&R||!e&&a===f||(T(a,n),o&(d|x)&&(o&y?gt(a,O):ft(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let b=!1;function ir(t){b=t}let A;function L(t){if(t===null)throw Rt(),At;return A=t}function fr(){return L(F(A))}function _r(t){if(b){if(F(A)!==null)throw Rt(),At;A=t}}function cr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=F(n);n.remove(),n=e}}var pt,Dt,It;function vr(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,It=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function F(t){return It.call(t)}function pr(t,n){if(!b)return et(t);var r=et(A);if(r===null)r=A.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),L(e),e}return L(r),r}function hr(t,n){if(!b){var r=et(t);return r instanceof Comment&&r.data===""?F(r):r}return A}function dr(t,n=1,r=!1){let e=b?A:t;for(var l;n--;)l=e,e=F(e);if(!b)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function Er(t){t.textContent=""}function vn(t){var n=y|R;f===null?n|=x:f.f|=wt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:_,deps:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function yr(t){const n=vn(t);return n.equals=mt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):S(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function xt(t){var n,r=f;W(pn(t));try{St(t),n=Ut(t)}finally{W(r)}return n}function Ot(t){var n=xt(t),r=(I||t.f&x)&&t.deps!==null?O:d;T(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function ot(t){St(t),H(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){f===null&&u===null&&en(),u!==null&&u.f&x&&rn(),it&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&B)!==0,s=f,a={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=k;try{ht(!0),nt(a),a.f|=Jt}catch(v){throw S(a),v}finally{ht(o)}}else n!==null&&ft(a);var c=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(wt|K))===0;if(!c&&!l&&e&&(s!==null&&hn(a,s),u!==null&&u.f&y)){var p=u;(p.children??(p.children=[])).push(a)}return a}function wr(t){const n=q(j,null,!1);return T(n,d),n.teardown=t,n}function Tr(t){kt();var n=f!==null&&(f.f&g)!==0&&_!==null&&!_.m;if(n){var r=_;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Nt(t);return e}}function mr(t){return kt(),dn(t)}function Ar(t){const n=q(B,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Nt(t){return q(Et,t,!1)}function dn(t){return q(j,t,!0)}function gr(t){return En(t)}function En(t,n=0){return q(j|at|n,t,!0)}function Rr(t,n=!0){return q(j|g,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=it,e=u;dt(!0),z(null);try{n.call(null)}finally{dt(r),z(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:F(e);e.remove(),e=s}r=!0}Pt(t,n&&!r),bt(t),H(t,0),T(t,P);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Ct(t);var o=t.parent;o!==null&&o.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];qt(t,r,!0),Tn(r,()=>{S(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&g)!==0;qt(e,n,s?r:!1),e=l}}}function Dr(t){Lt(t,!0)}function Lt(t,n){if(t.f&C){U(t)&&nt(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&g)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let Z=!1,lt=[];function Mt(){Z=!1;const t=lt.slice();lt=[],Xt(t)}function Ir(t){Z||(Z=!0,queueMicrotask(Mt)),lt.push(t)}function mn(){Z&&Mt()}const Yt=0,An=1;let V=!1,G=Yt,M=!1,Y=null,k=!1,it=!1;function ht(t){k=t}function dt(t){it=t}let D=[],N=0;let u=null;function z(t){u=t}let f=null;function W(t){f=t}let w=null;function gn(t){w=t}let h=null,E=0,m=null;function Rn(t){m=t}let Ht=1,X=0,I=!1,_=null;function jt(){return++Ht}function Q(){return!J||_!==null&&_.l===null}function U(t){var p;var n=t.f;if(n&R)return!0;if(n&O){var r=t.deps,e=(n&x)!==0;if(r!==null){var l,s,a=(n&$)!==0,o=e&&f!==null&&!I,c=r.length;if(a||o){for(l=0;l<c;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=$)}for(l=0;l<c;l++)if(s=r[l],U(s)&&Ot(s),s.wv>t.wv)return!0}(!e||f!==null&&!I)&&T(t,d)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&K)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw V=!1,t}function In(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&K)===0)}function tt(t,n,r,e){if(V){if(r===null&&(V=!1),In(n))throw t;return}r!==null&&(V=!0);{Dn(t,n);return}}function Bt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Bt(s,n,r+1):n===s&&(r===0?T(s,R):s.f&d&&T(s,O),ft(s))}}function Ut(t){var _t;var n=h,r=E,e=m,l=u,s=I,a=w,o=_,c=t.f;h=null,E=0,m=null,u=c&(g|B)?null:t,I=!k&&(c&x)!==0,w=null,_=t.ctx,X++;try{var p=(0,t.fn)(),v=t.deps;if(h!==null){var i;if(H(t,E),v!==null&&E>0)for(v.length=E+h.length,i=0;i<h.length;i++)v[E+i]=h[i];else t.deps=v=h;if(!I)for(i=E;i<v.length;i++)((_t=v[i]).reactions??(_t.reactions=[])).push(t)}else v!==null&&E<v.length&&(H(t,E),v.length=E);if(Q()&&m!==null&&!(t.f&(y|O|R)))for(i=0;i<m.length;i++)Bt(m[i],t);return l!==null&&X++,p}finally{h=n,E=r,m=e,u=l,I=s,w=a,_=o}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,O),n.f&(x|$)||(n.f^=$),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function nt(t){var n=t.f;if(!(n&P)){T(t,d);var r=f,e=_;f=t;try{n&at?yn(t):Pt(t),bt(t),Ct(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(o){tt(o,t,r,e||t.ctx)}finally{f=r}}}function Vt(){if(N>1e3){N=0;try{ln()}catch(t){if(Y!==null)tt(t,Y,null);else throw t}}N++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=k;k=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];Kt(l,s),xn(s)}}finally{k=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|C)))try{U(e)&&(nt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function On(){if(M=!1,N>1001)return;const t=D;D=[],Gt(t),M||(N=0,Y=null)}function ft(t){G===Yt&&(M||(M=!0,queueMicrotask(On))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|g)){if(!(r&d))return;n.f^=d}}D.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&g)!==0,a=s&&(l&d)!==0,o=r.next;if(!a&&!(l&C))if(l&j){if(s)r.f^=d;else try{U(r)&&nt(r)}catch(i){tt(i,r,null,r.ctx)}var c=r.first;if(c!==null){r=c;continue}}else l&Et&&e.push(r);if(o===null){let i=r.parent;for(;i!==null;){if(t===i)break t;var p=i.next;if(p!==null){r=p;continue t}i=i.parent}}r=o}for(var v=0;v<e.length;v++)c=e[v],n.push(c),Kt(c,n)}function $t(t){var n=G,r=D;try{Vt();const l=[];G=An,D=l,M=!1,Gt(r);var e=t==null?void 0:t();return mn(),(D.length>0||l.length>0)&&$t(),N=0,Y=null,e}finally{G=n,D=r}}async function Sr(){await Promise.resolve(),$t()}function xr(t){var v;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=xt(t);return ot(t),e}if(u!==null){w!==null&&w.includes(t)&&sn();var l=u.deps;t.rv<X&&(t.rv=X,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var c=a;o=c,a=c.parent}else{var p=a;(v=p.deriveds)!=null&&v.includes(o)||(p.deriveds??(p.deriveds=[])).push(o);break}return r&&(s=t,U(s)&&Ot(s)),t.v}function Or(t){const n=u;try{return u=null,t()}finally{u=n}}const kn=~(R|O|d);function T(t,n){t.f=t.f&kn|n}function kr(t,n=!1,r){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(_.l={s:null,u:null,r1:[],r2:ut(!1)})}function Nr(t){const n=_;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];W(s.effect),z(s.reaction),Nt(s.fn)}}finally{W(r),z(e)}}_=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{pt as $,ut as A,Gn as B,ct as C,f as D,yt as E,Kn as F,Nn as G,on as H,Nt as I,dn as J,Or as K,jn as L,Ir as M,_ as N,J as O,mr as P,Xt as Q,Mn as R,vt as S,Cr as T,sr as U,vn as V,$n as W,S as X,z as Y,W as Z,u as _,Nr as a,wr as a0,bn as a1,vr as a2,et as a3,un as a4,F as a5,At as a6,fn as a7,Rt as a8,Un as a9,g as aA,B as aB,Xn as aC,Jn as aD,tr as aE,Hn as aF,nr as aG,$t as aH,Sr as aI,Er as aa,Cn as ab,Ar as ac,rt as ad,C as ae,cn as af,qt as ag,Tn as ah,yr as ai,ur as aj,zn as ak,Zn as al,Wn as am,er as an,lr as ao,Q as ap,Bn as aq,tn as ar,at as as,Jt as at,qn as au,rr as av,Vn as aw,Yn as ax,Qn as ay,mt as az,ar as b,pr as c,dr as d,fr as e,hr as f,xr as g,b as h,En as i,cr as j,L as k,ir as l,Dr as m,Ln as n,Rr as o,kr as p,wn as q,_r as r,or as s,gr as t,Tr as u,A as v,Wt as w,zt as x,Pn as y,Fn as z};

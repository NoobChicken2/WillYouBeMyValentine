var Wt=t=>{throw TypeError(t)};var je=(t,e,n)=>e.has(t)||Wt("Cannot "+n);var b=(t,e,n)=>(je(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as Rt,aq as $e,w as C,o as O,k as N,aH as De}from"./runtime.Djh71vJq.js";import{o as Yt}from"./index-client.OYSxZ8Fi.js";const V=[];function Ot(t,e=Rt){let n=null;const r=new Set;function a(s){if($e(t,s)&&(t=s,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(s){a(s(t))}function i(s,c=Rt){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||Rt),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}new URL("sveltekit-internal://");function Fe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ve(t){return t.split("%25").map(decodeURI).join("%25")}function Be(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function It({href:t}){return t.split("#")[0]}function qe(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));e();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ge="/__data.json",Me=".html__data.json";function He(t){return t.endsWith(".html")?t.replace(/\.html$/,Me):t.replace(/\/$/,"")+Ge}function Ke(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function We(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const le=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Nt(t)),le(t,e));const W=new Map;function Ye(t,e){const n=Nt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=We(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function ze(t,e,n){if(W.size>0){const r=Nt(t,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(e,n)}function Nt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ke(...a)}"]`}return r}const Je=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Qe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ut(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=Je.exec(c),[,d,y,u,g]=h;return e.push({name:u,matcher:g,optional:!!d,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return Ut(c)}).join("")}).join("")}/?$`),params:e}}function Ze(t){return!/^\([^)]+\)$/.test(t)}function Qe(t){return t.slice(1).split("/").filter(Ze)}function tn(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=e[s+1],d=a[s+1];h&&!h.rest&&h.optional&&d&&c.chained&&(i=0),!h&&!d&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function en({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,h]])=>{const{pattern:d,params:y}=Xe(s),u={id:s,exec:g=>{const f=d.exec(g);if(f)return tn(f,y,r)},errors:[1,...h||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function fe(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function zt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ae;const x=((ae=globalThis.__sveltekit_1aphu)==null?void 0:ae.base)??"";var oe;const nn=((oe=globalThis.__sveltekit_1aphu)==null?void 0:oe.assets)??x,rn="1737308783367",ue="sveltekit:snapshot",he="sveltekit:scroll",de="sveltekit:states",an="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function pe(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function jt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Jt={...ut,"":ut.hover};function ge(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function me(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ge(t)}}function xt(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),e===null&&(e=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=ge(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Jt[r??"off"],preload_data:Jt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Xt(t){const e=Ot(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const ye={v:()=>{}};function on(){const{set:t,subscribe:e}=Ot(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${nn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==rn;return i&&(t(!0),ye.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Zt(t){const e=cn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function cn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=sn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const ln=-1,fn=-2,un=-3,hn=-4,dn=-5,pn=-6;function gn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===ln)return;if(o===un)return NaN;if(o===hn)return 1/0;if(o===dn)return-1/0;if(o===pn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const h=new Set;r[o]=h;for(let u=1;u<s.length;u+=1)h.add(a(s[u]));break;case"Map":const d=new Map;r[o]=d;for(let u=1;u<s.length;u+=2)d.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=Zt(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Zt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const h=s[l];h!==fn&&(c[l]=a(h))}}else{const c={};r[o]=c;for(const l in s){const h=s[l];c[l]=a(h)}}return r[o]}return a(0)}const _e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[..._e];const mn=new Set([..._e]);[...mn];function yn(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class we{constructor(e,n){this.status=e,this.location=n}}class $t extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const _n="x-sveltekit-invalidated",wn="x-sveltekit-trailing-slash";function dt(t){return t instanceof bt||t instanceof $t?t.status:500}function vn(t){return t instanceof $t?t.text:"Internal Error"}let U,X,Lt;const bn=Yt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Yt.toString());var tt,et,nt,rt,at,ot,st,it,se,ct,ie,lt,ce;bn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Lt={current:!1}):(U=new(se=class{constructor(){P(this,tt,C({}));P(this,et,C(null));P(this,nt,C(null));P(this,rt,C({}));P(this,at,C({id:null}));P(this,ot,C({}));P(this,st,C(-1));P(this,it,C(new URL("https://example.com")))}get data(){return O(b(this,tt))}set data(e){N(b(this,tt),e)}get form(){return O(b(this,et))}set form(e){N(b(this,et),e)}get error(){return O(b(this,nt))}set error(e){N(b(this,nt),e)}get params(){return O(b(this,rt))}set params(e){N(b(this,rt),e)}get route(){return O(b(this,at))}set route(e){N(b(this,at),e)}get state(){return O(b(this,ot))}set state(e){N(b(this,ot),e)}get status(){return O(b(this,st))}set status(e){N(b(this,st),e)}get url(){return O(b(this,it))}set url(e){N(b(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,se),X=new(ie=class{constructor(){P(this,ct,C(null))}get current(){return O(b(this,ct))}set current(e){N(b(this,ct),e)}},ct=new WeakMap,ie),Lt=new(ce=class{constructor(){P(this,lt,C(!1))}get current(){return O(b(this,lt))}set current(e){N(b(this,lt),e)}},lt=new WeakMap,ce),ye.v=()=>Lt.current=!0);function kn(t){Object.assign(U,t)}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),F=fe(he)??{},Z=fe(ue)??{},$={url:Xt({}),page:Xt({}),navigating:Ot(null),updated:on()};function Dt(t){F[t]=jt()}function Sn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function ve(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function Qt(){}let kt,Pt,pt,j,Ct,A;const be=[],gt=[];let L=null;const ke=new Set,En=new Set,Y=new Set;let _={branch:[],error:null,url:null},Ft=!1,mt=!1,te=!0,Q=!1,H=!1,Ae=!1,Vt=!1,Se,I,T,yt;const z=new Set;async function Bn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),A=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),kt=en(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],pt=t.nodes[1],Pt(),pt(),I=(i=history.state)==null?void 0:i[q],T=(s=history.state)==null?void 0:s[J],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[J]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Cn(Ct,n):xn(location.href,{replaceState:!0}),Pn()}function Rn(){be.length=0,Vt=!1}function Ee(t){gt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=gt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Re(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=gt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function ee(){Dt(I),zt(he,F),Ee(T),zt(ue,Z)}async function Ie(t,e,n,r){return K({type:"goto",url:pe(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Vt=!0)}})}async function In(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Le({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Tt(t){const e=kt.find(n=>n.exec(Te(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ue(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),Se=new A.root({target:e,props:{...t.props,stores:$,components:gt},hydrate:n,sync:!1}),Re(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),mt=!0}function _t({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(x&&(t.pathname===x||t.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=Fe(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:yn(n).map(u=>u.node.component),page:Mt(U)}};i!==void 0&&(c.props.form=i);let l={},h=!U,d=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(h=!0),g&&(l={...l,...g.data},h&&(c.props[`data_${d}`]=l),d+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||h)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:h?l:U.data}),c}async function Bt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var h,d,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((h=l.universal)!=null&&h.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:qe(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),mt?ze(k,E.href,p):Ye(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(d=l.universal)!=null&&d.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ne(t,e,n,r,a,o){if(Vt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(be.some(s=>s(new URL(i))))return!0;return!1}function qt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Un(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function re({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Mt(U),constructors:[]}}}async function Le({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let h=null;const d=_.url?t!==wt(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=Un(_.url,n);let g=!1;const f=l.map((m,w)=>{var D;const S=_.branch[w],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||ne(g,y,d,u,(D=S.server)==null?void 0:D.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{h=await Ce(n,f)}catch(m){const w=await G(m,{url:n,params:r,route:{id:t}});return z.has(o)?re({error:w,url:n,params:r,route:a}):At({status:dt(m),error:w,url:n,route:a})}if(h.type==="redirect")return h}const p=h==null?void 0:h.nodes;let k=!1;const E=l.map(async(m,w)=>{var St;if(!m)return;const S=_.branch[w],R=p==null?void 0:p[w];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!ne(k,y,d,u,(St=S.universal)==null?void 0:St.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Bt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Kt;const Ht={};for(let Et=0;Et<w;Et+=1)Object.assign(Ht,(Kt=await E[Et])==null?void 0:Kt.data);return Ht},server_data_node:qt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await E[m])}catch(w){if(w instanceof we)return{type:"redirect",location:w.location};if(z.has(o))return re({error:await G(w,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=dt(w),R;if(p!=null&&p.includes(w))S=w.status??S,R=w.error;else if(w instanceof bt)R=w.body;else{if(await $.updated.check())return await ve(),await M(n);R=await G(w,{params:r,url:n,route:{id:a.id}})}const D=await Ln(m,v,i);return D?_t({url:n,params:r,branch:v.slice(0,D.idx).concat(D.node),status:S,error:R,route:a}):await Pe(n,{id:a.id},R,S)}else v.push(void 0);return _t({url:n,params:r,branch:v,status:200,error:null,route:a,form:e?void 0:null})}async function Ln(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:r}){const a={};let o=null;if(A.server_loads[0]===0)try{const l=await Ce(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Ft)&&await M(n)}const s=await Bt({loader:Pt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qt(o)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return _t({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Gt(t,e){if(!t||vt(t,x,A.hash))return;let n;try{if(n=A.hooks.reroute({url:new URL(t)})??t,typeof n=="string"){const a=new URL(t);A.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Te(n);for(const a of kt){const o=a.exec(r);if(o)return{id:wt(t),invalidating:e,route:a,params:Be(o),url:t}}}function Te(t){return Ve(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function wt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function xe({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Ne(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Q||ke.forEach(s=>s(i)),a?null:o}async function K({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Qt,block:h=Qt}){const d=Gt(e,!1),y=xe({url:e,type:t,delta:n==null?void 0:n.delta,intent:d});if(!y){h();return}const u=I,g=T;l(),Q=!0,mt&&$.navigating.set(X.current=y.navigation),yt=c;let f=d&&await Le(d);if(!f){if(vt(e,x,A.hash))return await M(e);f=await Pe(e,{id:null},await G(new $t(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(d==null?void 0:d.url)||e,yt!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await At({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Ie(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await ve(),await M(e));if(Rn(),Dt(u),Ee(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=o?0:1,m={[q]:I+=v,[J]:T+=v,[de]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||Sn(I,T)}if(L=null,f.props.page.state=i,mt){_=f.state,f.props.page&&(f.props.page.url=e);const v=(await Promise.all(Array.from(En,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(w=>{Y.delete(w)})};v.push(m),v.forEach(w=>{Y.add(w)})}Se.$set(f.props),kn(f.props.page),Ae=!0}else Ue(f,Ct,!1);const{activeElement:p}=document;await De();const k=n?n.scroll:a?jt():null;if(te){const v=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):v?v.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&On(),te=!0,f.props.page&&Object.assign(U,f.props.page),Q=!1,t==="popstate"&&Re(T),y.fulfil(void 0),Y.forEach(v=>v(y.navigation)),$.navigating.set(X.current=null)}async function Pe(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Ft?await At({status:r,error:n,url:t,route:e}):await M(t)}function Tn(){let t;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Tt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=me(o,j);if(!s)return;const{url:c,external:l,download:h}=xt(s,x,A.hash);if(l||h)return;const d=ht(s),y=c&&wt(_.url)===wt(c);if(!d.reload&&!y)if(i<=d.preload_data){const u=Gt(c,!1);u&&In(u)}else i<=d.preload_code&&Tt(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=xt(o,x,A.hash);if(s||c)continue;const l=ht(o);l.reload||(l.preload_code===ut.viewport&&n.observe(o),l.preload_code===ut.eager&&Tt(i))}}Y.add(a),a()}function G(t,e){if(t instanceof bt)return t.body;const n=dt(t),r=vn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function xn(t,e={}){return t=new URL(pe(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Ie(t,e,0)}function Pn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ee(),!Q){const a=Ne(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ke.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ee()}),(e=navigator.connection)!=null&&e.saveData||Tn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=me(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=xt(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[h,d]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===It(location);if(o||c.reload&&(!y||!d)){xe({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(d!==void 0&&y){const[,u]=_.url.href.split("#");if(u===d){if(n.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(d));g&&(g.scrollIntoView(),g.focus())}return}if(H=!0,Dt(I),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(s,x,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),d=a==null?void 0:a.getAttribute("name");d&&h.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(h).toString(),K({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(yt={},a===I)return;const o=F[a],i=n.state[de]??{},s=new URL(n.state[an]??location.href),c=n.state[J],l=It(location)===It(_.url);if(c===T&&(Ae||l)){i!==U.state&&(U.state=i),t(s),F[I]=jt(),o&&scrollTo(o.x,o.y),I=a;return}const d=a-I;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:d},accept:()=>{I=a,T=c},block:()=>{history.go(-d)},nav_token:yt})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[J]:T},"",location.href)):A.hash&&_.url.hash===location.hash&&K({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){_.url=U.url=n,$.page.set(Mt(U)),$.page.notify()}}async function Cn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Ft=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Gt(c,!1)||{});let l,h=!0;try{const d=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=Oe(p.uses)),Bt({loader:A.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await d[E]).data);return k},server_data_node:qt(p)})}),y=await Promise.all(d),u=kt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=_t({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(d){if(d instanceof we){await M(new URL(d.location,location.href));return}l=await At({status:dt(d),error:await G(d,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",h=!1}l.props.page&&(l.props.page.state={}),Ue(l,t,h)}async function Ce(t,e){var a;const n=new URL(t);n.pathname=He(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(wn,"1"),n.searchParams.append(_n,e.map(o=>o?"1":"0").join(""));const r=await le(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new bt(r.status,o)}return new Promise(async o=>{var d;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return gn(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let h="";for(;;){const{done:y,value:u}=await s.read();if(y&&!h)break;for(h+=!u&&h?`
`:c.decode(u,{stream:!0});;){const g=h.indexOf(`
`);if(g===-1)break;const f=JSON.parse(h.slice(0,g));if(h=h.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(d=f.nodes)==null||d.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Oe(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,v=i.get(p);i.delete(p),E?v.reject(l(E)):v.fulfil(l(k))}}}})}function Oe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function On(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Ne(t,e,n,r){var c,l;let a,o;const i=new Promise((h,d)=>{a=h,o=d});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}function Mt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}export{Bn as a,U as p,$ as s,Lt as u};

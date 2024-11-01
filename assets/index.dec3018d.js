import{u as Fr}from"./index.esm.7ca71ba7.js";import{a as ue,K as V,M as Br,j as b,Y as Ht,X as Vt}from"./loginSlice.fb6ef6fe.js";import{r as jr,i as Hr,a as Vr,u as qr,e as Wr,bx as zr,B as F,d as $r,T as ie,b as Le,by as Kr}from"./App.1c5c91e0.js";import{E as Tt,p as Rn,L as Gr,q as Jr,s as Yr,_ as qt,C as Wt,r as zt,a as An,t as Xr,b as Qr,i as Zr,S as ke,u as B,g as G,w as ei,d as ti,j as On,m as C,F as Ee,x as ni,y as ri,z as we,A as ve,B as Pe,D as ii}from"./index.esm.4a4e9a53.js";import{_ as bt}from"./tslib.es6.5e9bfff6.js";import{M as si}from"./Meta.cc120b23.js";import{T as $t}from"./TextField.187184d4.js";import"./index.9698288f.js";import"./index.module.c8fc47a3.js";import"./Input.ba80ce12.js";var St={},ai=Hr.exports;Object.defineProperty(St,"__esModule",{value:!0});var Cn=St.default=void 0;li(ue.exports);var oi=ai(jr()),ci=Vr;function Nn(n){if(typeof WeakMap!="function")return null;var e=new WeakMap,t=new WeakMap;return(Nn=function(r){return r?t:e})(n)}function li(n,e){if(!e&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var t=Nn(e);if(t&&t.has(n))return t.get(n);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in n)if(s!=="default"&&Object.prototype.hasOwnProperty.call(n,s)){var a=i?Object.getOwnPropertyDescriptor(n,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=n[s]}return r.default=n,t&&t.set(n,r),r}var ui=(0,oi.default)((0,ci.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");Cn=St.default=ui;function Ln(n,e){return function(){return n.apply(e,arguments)}}const{toString:di}=Object.prototype,{getPrototypeOf:kt}=Object,Ye=(n=>e=>{const t=di.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),x=n=>(n=n.toLowerCase(),e=>Ye(e)===n),Xe=n=>e=>typeof e===n,{isArray:me}=Array,Te=Xe("undefined");function hi(n){return n!==null&&!Te(n)&&n.constructor!==null&&!Te(n.constructor)&&N(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Un=x("ArrayBuffer");function fi(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Un(n.buffer),e}const pi=Xe("string"),N=Xe("function"),Dn=Xe("number"),Qe=n=>n!==null&&typeof n=="object",mi=n=>n===!0||n===!1,De=n=>{if(Ye(n)!=="object")return!1;const e=kt(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},gi=x("Date"),_i=x("File"),yi=x("Blob"),wi=x("FileList"),vi=n=>Qe(n)&&N(n.pipe),Ii=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||N(n.append)&&((e=Ye(n))==="formdata"||e==="object"&&N(n.toString)&&n.toString()==="[object FormData]"))},Ei=x("URLSearchParams"),[Ti,bi,Si,ki]=["ReadableStream","Request","Response","Headers"].map(x),Pi=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Re(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),me(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(r=0;r<a;r++)o=s[r],e.call(null,n[o],o,n)}}function Mn(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const se=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xn=n=>!Te(n)&&n!==se;function ht(){const{caseless:n}=xn(this)&&this||{},e={},t=(r,i)=>{const s=n&&Mn(e,i)||i;De(e[s])&&De(r)?e[s]=ht(e[s],r):De(r)?e[s]=ht({},r):me(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Re(arguments[r],t);return e}const Ri=(n,e,t,{allOwnKeys:r}={})=>(Re(e,(i,s)=>{t&&N(i)?n[s]=Ln(i,t):n[s]=i},{allOwnKeys:r}),n),Ai=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Oi=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Ci=(n,e,t,r)=>{let i,s,a;const o={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)a=i[s],(!r||r(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&kt(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Ni=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},Li=n=>{if(!n)return null;if(me(n))return n;let e=n.length;if(!Dn(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Ui=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&kt(Uint8Array)),Di=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},Mi=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},xi=x("HTMLFormElement"),Fi=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),Kt=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Bi=x("RegExp"),Fn=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Re(t,(i,s)=>{let a;(a=e(i,s,n))!==!1&&(r[s]=a||i)}),Object.defineProperties(n,r)},ji=n=>{Fn(n,(e,t)=>{if(N(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(!!N(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Hi=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return me(n)?r(n):r(String(n).split(e)),t},Vi=()=>{},qi=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e,at="abcdefghijklmnopqrstuvwxyz",Gt="0123456789",Bn={DIGIT:Gt,ALPHA:at,ALPHA_DIGIT:at+at.toUpperCase()+Gt},Wi=(n=16,e=Bn.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function zi(n){return!!(n&&N(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const $i=n=>{const e=new Array(10),t=(r,i)=>{if(Qe(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=me(r)?[]:{};return Re(r,(a,o)=>{const c=t(a,i+1);!Te(c)&&(s[o]=c)}),e[i]=void 0,s}}return r};return t(n,0)},Ki=x("AsyncFunction"),Gi=n=>n&&(Qe(n)||N(n))&&N(n.then)&&N(n.catch),jn=((n,e)=>n?setImmediate:e?((t,r)=>(se.addEventListener("message",({source:i,data:s})=>{i===se&&s===t&&r.length&&r.shift()()},!1),i=>{r.push(i),se.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",N(se.postMessage)),Ji=typeof queueMicrotask<"u"?queueMicrotask.bind(se):typeof process<"u"&&process.nextTick||jn,u={isArray:me,isArrayBuffer:Un,isBuffer:hi,isFormData:Ii,isArrayBufferView:fi,isString:pi,isNumber:Dn,isBoolean:mi,isObject:Qe,isPlainObject:De,isReadableStream:Ti,isRequest:bi,isResponse:Si,isHeaders:ki,isUndefined:Te,isDate:gi,isFile:_i,isBlob:yi,isRegExp:Bi,isFunction:N,isStream:vi,isURLSearchParams:Ei,isTypedArray:Ui,isFileList:wi,forEach:Re,merge:ht,extend:Ri,trim:Pi,stripBOM:Ai,inherits:Oi,toFlatObject:Ci,kindOf:Ye,kindOfTest:x,endsWith:Ni,toArray:Li,forEachEntry:Di,matchAll:Mi,isHTMLForm:xi,hasOwnProperty:Kt,hasOwnProp:Kt,reduceDescriptors:Fn,freezeMethods:ji,toObjectSet:Hi,toCamelCase:Fi,noop:Vi,toFiniteNumber:qi,findKey:Mn,global:se,isContextDefined:xn,ALPHABET:Bn,generateString:Wi,isSpecCompliantForm:zi,toJSONObject:$i,isAsyncFn:Ki,isThenable:Gi,setImmediate:jn,asap:Ji};function _(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}u.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Hn=_.prototype,Vn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Vn[n]={value:n}});Object.defineProperties(_,Vn);Object.defineProperty(Hn,"isAxiosError",{value:!0});_.from=(n,e,t,r,i,s)=>{const a=Object.create(Hn);return u.toFlatObject(n,a,function(c){return c!==Error.prototype},o=>o!=="isAxiosError"),_.call(a,n.message,e,t,r,i),a.cause=n,a.name=n.name,s&&Object.assign(a,s),a};const Yi=null;function ft(n){return u.isPlainObject(n)||u.isArray(n)}function qn(n){return u.endsWith(n,"[]")?n.slice(0,-2):n}function Jt(n,e,t){return n?n.concat(e).map(function(i,s){return i=qn(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function Xi(n){return u.isArray(n)&&!n.some(ft)}const Qi=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function Ze(n,e,t){if(!u.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=u.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,f){return!u.isUndefined(f[y])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,a=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(e);if(!u.isFunction(i))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(u.isDate(p))return p.toISOString();if(!c&&u.isBlob(p))throw new _("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(p)||u.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,y,f){let P=p;if(p&&!f&&typeof p=="object"){if(u.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(u.isArray(p)&&Xi(p)||(u.isFileList(p)||u.endsWith(y,"[]"))&&(P=u.toArray(p)))return y=qn(y),P.forEach(function(w,A){!(u.isUndefined(w)||w===null)&&e.append(a===!0?Jt([y],A,s):a===null?y:y+"[]",l(w))}),!1}return ft(p)?!0:(e.append(Jt(f,y,s),l(p)),!1)}const h=[],v=Object.assign(Qi,{defaultVisitor:d,convertValue:l,isVisitable:ft});function E(p,y){if(!u.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(p),u.forEach(p,function(P,R){(!(u.isUndefined(P)||P===null)&&i.call(e,P,u.isString(R)?R.trim():R,y,v))===!0&&E(P,y?y.concat(R):[R])}),h.pop()}}if(!u.isObject(n))throw new TypeError("data must be an object");return E(n),e}function Yt(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pt(n,e){this._pairs=[],n&&Ze(n,this,e)}const Wn=Pt.prototype;Wn.append=function(e,t){this._pairs.push([e,t])};Wn.toString=function(e){const t=e?function(r){return e.call(this,r,Yt)}:Yt;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Zi(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zn(n,e,t){if(!e)return n;const r=t&&t.encode||Zi,i=t&&t.serialize;let s;if(i?s=i(e,t):s=u.isURLSearchParams(e)?e.toString():new Pt(e,t).toString(r),s){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class es{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Xt=es,$n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ts=typeof URLSearchParams<"u"?URLSearchParams:Pt,ns=typeof FormData<"u"?FormData:null,rs=typeof Blob<"u"?Blob:null,is={isBrowser:!0,classes:{URLSearchParams:ts,FormData:ns,Blob:rs},protocols:["http","https","file","blob","url","data"]},Rt=typeof window<"u"&&typeof document<"u",ss=(n=>Rt&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),as=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),os=Rt&&window.location.href||"http://localhost",cs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rt,hasStandardBrowserWebWorkerEnv:as,hasStandardBrowserEnv:ss,origin:os},Symbol.toStringTag,{value:"Module"})),U={...cs,...is};function ls(n,e){return Ze(n,new U.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return U.isNode&&u.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function us(n){return u.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ds(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function Kn(n){function e(t,r,i,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=t.length;return a=!a&&u.isArray(i)?i.length:a,c?(u.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!o):((!i[a]||!u.isObject(i[a]))&&(i[a]=[]),e(t,r,i[a],s)&&u.isArray(i[a])&&(i[a]=ds(i[a])),!o)}if(u.isFormData(n)&&u.isFunction(n.entries)){const t={};return u.forEachEntry(n,(r,i)=>{e(us(r),i,t,0)}),t}return null}function hs(n,e,t){if(u.isString(n))try{return(e||JSON.parse)(n),u.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const At={transitional:$n,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=u.isObject(e);if(s&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return i?JSON.stringify(Kn(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e)||u.isReadableStream(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ls(e,this.formSerializer).toString();if((o=u.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ze(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),hs(e)):e}],transformResponse:[function(e){const t=this.transitional||At.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(u.isResponse(e)||u.isReadableStream(e))return e;if(e&&u.isString(e)&&(r&&!this.responseType||i)){const a=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?_.from(o,_.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:U.classes.FormData,Blob:U.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],n=>{At.headers[n]={}});const Ot=At,fs=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ps=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(a){i=a.indexOf(":"),t=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!t||e[t]&&fs[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Qt=Symbol("internals");function ye(n){return n&&String(n).trim().toLowerCase()}function Me(n){return n===!1||n==null?n:u.isArray(n)?n.map(Me):String(n)}function ms(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const gs=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function ot(n,e,t,r,i){if(u.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!u.isString(e)){if(u.isString(r))return e.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(e)}}function _s(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function ys(n,e){const t=u.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,a){return this[r].call(this,e,i,s,a)},configurable:!0})})}class et{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(o,c,l){const d=ye(c);if(!d)throw new Error("header name must be a non-empty string");const h=u.findKey(i,d);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=Me(o))}const a=(o,c)=>u.forEach(o,(l,d)=>s(l,d,c));if(u.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(u.isString(e)&&(e=e.trim())&&!gs(e))a(ps(e),t);else if(u.isHeaders(e))for(const[o,c]of e.entries())s(c,o,r);else e!=null&&s(t,e,r);return this}get(e,t){if(e=ye(e),e){const r=u.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return ms(i);if(u.isFunction(t))return t.call(this,i,r);if(u.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ye(e),e){const r=u.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||ot(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(a){if(a=ye(a),a){const o=u.findKey(r,a);o&&(!t||ot(r,r[o],o,t))&&(delete r[o],i=!0)}}return u.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||ot(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return u.forEach(this,(i,s)=>{const a=u.findKey(r,s);if(a){t[a]=Me(i),delete t[s];return}const o=e?_s(s):String(s).trim();o!==s&&delete t[s],t[o]=Me(i),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return u.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&u.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Qt]=this[Qt]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=ye(a);r[o]||(ys(i,a),r[o]=!0)}return u.isArray(e)?e.forEach(s):s(e),this}}et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(et.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});u.freezeMethods(et);const D=et;function ct(n,e){const t=this||Ot,r=e||t,i=D.from(r.headers);let s=r.data;return u.forEach(n,function(o){s=o.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Gn(n){return!!(n&&n.__CANCEL__)}function ge(n,e,t){_.call(this,n==null?"canceled":n,_.ERR_CANCELED,e,t),this.name="CanceledError"}u.inherits(ge,_,{__CANCEL__:!0});function Jn(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new _("Request failed with status code "+t.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function ws(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function vs(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),d=r[s];a||(a=l),t[i]=c,r[i]=l;let h=s,v=0;for(;h!==i;)v+=t[h++],h=h%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),l-a<e)return;const E=d&&l-d;return E?Math.round(v*1e3/E):void 0}}function Is(n,e){let t=0,r=1e3/e,i,s;const a=(l,d=Date.now())=>{t=d,i=null,s&&(clearTimeout(s),s=null),n.apply(null,l)};return[(...l)=>{const d=Date.now(),h=d-t;h>=r?a(l,d):(i=l,s||(s=setTimeout(()=>{s=null,a(i)},r-h)))},()=>i&&a(i)]}const Ve=(n,e,t=3)=>{let r=0;const i=vs(50,250);return Is(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,c=a-r,l=i(c),d=a<=o;r=a;const h={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&d?(o-a)/l:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(h)},t)},Zt=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},en=n=>(...e)=>u.asap(()=>n(...e)),Es=U.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(a){const o=u.isString(a)?i(a):a;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}(),Ts=U.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const a=[n+"="+encodeURIComponent(e)];u.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),u.isString(r)&&a.push("path="+r),u.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bs(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Ss(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Yn(n,e){return n&&!bs(e)?Ss(n,e):e}const tn=n=>n instanceof D?{...n}:n;function ae(n,e){e=e||{};const t={};function r(l,d,h){return u.isPlainObject(l)&&u.isPlainObject(d)?u.merge.call({caseless:h},l,d):u.isPlainObject(d)?u.merge({},d):u.isArray(d)?d.slice():d}function i(l,d,h){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l,h)}else return r(l,d,h)}function s(l,d){if(!u.isUndefined(d))return r(void 0,d)}function a(l,d){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function o(l,d,h){if(h in e)return r(l,d);if(h in n)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,d)=>i(tn(l),tn(d),!0)};return u.forEach(Object.keys(Object.assign({},n,e)),function(d){const h=c[d]||i,v=h(n[d],e[d],d);u.isUndefined(v)&&h!==o||(t[d]=v)}),t}const Xn=n=>{const e=ae({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:o}=e;e.headers=a=D.from(a),e.url=zn(Yn(e.baseURL,e.url),n.params,n.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let c;if(u.isFormData(t)){if(U.hasStandardBrowserEnv||U.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[l,...d]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];a.setContentType([l||"multipart/form-data",...d].join("; "))}}if(U.hasStandardBrowserEnv&&(r&&u.isFunction(r)&&(r=r(e)),r||r!==!1&&Es(e.url))){const l=i&&s&&Ts.read(s);l&&a.set(i,l)}return e},ks=typeof XMLHttpRequest<"u",Ps=ks&&function(n){return new Promise(function(t,r){const i=Xn(n);let s=i.data;const a=D.from(i.headers).normalize();let{responseType:o,onUploadProgress:c,onDownloadProgress:l}=i,d,h,v,E,p;function y(){E&&E(),p&&p(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let f=new XMLHttpRequest;f.open(i.method.toUpperCase(),i.url,!0),f.timeout=i.timeout;function P(){if(!f)return;const w=D.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),L={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:w,config:n,request:f};Jn(function(g){t(g),y()},function(g){r(g),y()},L),f=null}"onloadend"in f?f.onloadend=P:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(P)},f.onabort=function(){!f||(r(new _("Request aborted",_.ECONNABORTED,n,f)),f=null)},f.onerror=function(){r(new _("Network Error",_.ERR_NETWORK,n,f)),f=null},f.ontimeout=function(){let A=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const L=i.transitional||$n;i.timeoutErrorMessage&&(A=i.timeoutErrorMessage),r(new _(A,L.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,n,f)),f=null},s===void 0&&a.setContentType(null),"setRequestHeader"in f&&u.forEach(a.toJSON(),function(A,L){f.setRequestHeader(L,A)}),u.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),o&&o!=="json"&&(f.responseType=i.responseType),l&&([v,p]=Ve(l,!0),f.addEventListener("progress",v)),c&&f.upload&&([h,E]=Ve(c),f.upload.addEventListener("progress",h),f.upload.addEventListener("loadend",E)),(i.cancelToken||i.signal)&&(d=w=>{!f||(r(!w||w.type?new ge(null,n,f):w),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const R=ws(i.url);if(R&&U.protocols.indexOf(R)===-1){r(new _("Unsupported protocol "+R+":",_.ERR_BAD_REQUEST,n));return}f.send(s||null)})},Rs=(n,e)=>{let t=new AbortController,r;const i=function(c){if(!r){r=!0,a();const l=c instanceof Error?c:this.reason;t.abort(l instanceof _?l:new ge(l instanceof Error?l.message:l))}};let s=e&&setTimeout(()=>{i(new _(`timeout ${e} of ms exceeded`,_.ETIMEDOUT))},e);const a=()=>{n&&(s&&clearTimeout(s),s=null,n.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",i):c.unsubscribe(i))}),n=null)};n.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",i));const{signal:o}=t;return o.unsubscribe=a,[o,()=>{s&&clearTimeout(s),s=null}]},As=Rs,Os=function*(n,e){let t=n.byteLength;if(!e||t<e){yield n;return}let r=0,i;for(;r<t;)i=r+e,yield n.slice(r,i),r=i},Cs=async function*(n,e,t){for await(const r of n)yield*Os(ArrayBuffer.isView(r)?r:await t(String(r)),e)},nn=(n,e,t,r,i)=>{const s=Cs(n,e,i);let a=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:d,value:h}=await s.next();if(d){c(),l.close();return}let v=h.byteLength;if(t){let E=a+=v;t(E)}l.enqueue(new Uint8Array(h))}catch(d){throw c(d),d}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},tt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Qn=tt&&typeof ReadableStream=="function",pt=tt&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Zn=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Ns=Qn&&Zn(()=>{let n=!1;const e=new Request(U.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),rn=64*1024,mt=Qn&&Zn(()=>u.isReadableStream(new Response("").body)),qe={stream:mt&&(n=>n.body)};tt&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!qe[e]&&(qe[e]=u.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new _(`Response type '${e}' is not supported`,_.ERR_NOT_SUPPORT,r)})})})(new Response);const Ls=async n=>{if(n==null)return 0;if(u.isBlob(n))return n.size;if(u.isSpecCompliantForm(n))return(await new Request(n).arrayBuffer()).byteLength;if(u.isArrayBufferView(n)||u.isArrayBuffer(n))return n.byteLength;if(u.isURLSearchParams(n)&&(n=n+""),u.isString(n))return(await pt(n)).byteLength},Us=async(n,e)=>{const t=u.toFiniteNumber(n.getContentLength());return t==null?Ls(e):t},Ds=tt&&(async n=>{let{url:e,method:t,data:r,signal:i,cancelToken:s,timeout:a,onDownloadProgress:o,onUploadProgress:c,responseType:l,headers:d,withCredentials:h="same-origin",fetchOptions:v}=Xn(n);l=l?(l+"").toLowerCase():"text";let[E,p]=i||s||a?As([i,s],a):[],y,f;const P=()=>{!y&&setTimeout(()=>{E&&E.unsubscribe()}),y=!0};let R;try{if(c&&Ns&&t!=="get"&&t!=="head"&&(R=await Us(d,r))!==0){let O=new Request(e,{method:"POST",body:r,duplex:"half"}),g;if(u.isFormData(r)&&(g=O.headers.get("content-type"))&&d.setContentType(g),O.body){const[S,T]=Zt(R,Ve(en(c)));r=nn(O.body,rn,S,T,pt)}}u.isString(h)||(h=h?"include":"omit"),f=new Request(e,{...v,signal:E,method:t.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:h});let w=await fetch(f);const A=mt&&(l==="stream"||l==="response");if(mt&&(o||A)){const O={};["status","statusText","headers"].forEach(X=>{O[X]=w[X]});const g=u.toFiniteNumber(w.headers.get("content-length")),[S,T]=o&&Zt(g,Ve(en(o),!0))||[];w=new Response(nn(w.body,rn,S,()=>{T&&T(),A&&P()},pt),O)}l=l||"text";let L=await qe[u.findKey(qe,l)||"text"](w,n);return!A&&P(),p&&p(),await new Promise((O,g)=>{Jn(O,g,{data:L,headers:D.from(w.headers),status:w.status,statusText:w.statusText,config:n,request:f})})}catch(w){throw P(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,n,f),{cause:w.cause||w}):_.from(w,w&&w.code,n,f)}}),gt={http:Yi,xhr:Ps,fetch:Ds};u.forEach(gt,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const sn=n=>`- ${n}`,Ms=n=>u.isFunction(n)||n===null||n===!1,er={getAdapter:n=>{n=u.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let a;if(r=t,!Ms(t)&&(r=gt[(a=String(t)).toLowerCase()],r===void 0))throw new _(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+s]=r}if(!r){const s=Object.entries(i).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(sn).join(`
`):" "+sn(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:gt};function lt(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ge(null,n)}function an(n){return lt(n),n.headers=D.from(n.headers),n.data=ct.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),er.getAdapter(n.adapter||Ot.adapter)(n).then(function(r){return lt(n),r.data=ct.call(n,n.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Gn(r)||(lt(n),r&&r.response&&(r.response.data=ct.call(n,n.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const tr="1.7.4",Ct={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Ct[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const on={};Ct.transitional=function(e,t,r){function i(s,a){return"[Axios v"+tr+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,o)=>{if(e===!1)throw new _(i(a," has been removed"+(t?" in "+t:"")),_.ERR_DEPRECATED);return t&&!on[a]&&(on[a]=!0,console.warn(i(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};function xs(n,e,t){if(typeof n!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],a=e[s];if(a){const o=n[s],c=o===void 0||a(o,s,n);if(c!==!0)throw new _("option "+s+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}}const _t={assertOptions:xs,validators:Ct},Q=_t.validators;class We{constructor(e){this.defaults=e,this.interceptors={request:new Xt,response:new Xt}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ae(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&_t.assertOptions(r,{silentJSONParsing:Q.transitional(Q.boolean),forcedJSONParsing:Q.transitional(Q.boolean),clarifyTimeoutError:Q.transitional(Q.boolean)},!1),i!=null&&(u.isFunction(i)?t.paramsSerializer={serialize:i}:_t.assertOptions(i,{encode:Q.function,serialize:Q.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&u.merge(s.common,s[t.method]);s&&u.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),t.headers=D.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(c=c&&y.synchronous,o.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let d,h=0,v;if(!c){const p=[an.bind(this),void 0];for(p.unshift.apply(p,o),p.push.apply(p,l),v=p.length,d=Promise.resolve(t);h<v;)d=d.then(p[h++],p[h++]);return d}v=o.length;let E=t;for(h=0;h<v;){const p=o[h++],y=o[h++];try{E=p(E)}catch(f){y.call(this,f);break}}try{d=an.call(this,E)}catch(p){return Promise.reject(p)}for(h=0,v=l.length;h<v;)d=d.then(l[h++],l[h++]);return d}getUri(e){e=ae(this.defaults,e);const t=Yn(e.baseURL,e.url);return zn(t,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){We.prototype[e]=function(t,r){return this.request(ae(r||{},{method:e,url:t,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(e){function t(r){return function(s,a,o){return this.request(ae(o||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}We.prototype[e]=t(),We.prototype[e+"Form"]=t(!0)});const xe=We;class Nt{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{r.subscribe(o),s=o}).then(i);return a.cancel=function(){r.unsubscribe(s)},a},e(function(s,a,o){r.reason||(r.reason=new ge(s,a,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Nt(function(i){e=i}),cancel:e}}}const Fs=Nt;function Bs(n){return function(t){return n.apply(null,t)}}function js(n){return u.isObject(n)&&n.isAxiosError===!0}const yt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yt).forEach(([n,e])=>{yt[e]=n});const Hs=yt;function nr(n){const e=new xe(n),t=Ln(xe.prototype.request,e);return u.extend(t,xe.prototype,e,{allOwnKeys:!0}),u.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return nr(ae(n,i))},t}const k=nr(Ot);k.Axios=xe;k.CanceledError=ge;k.CancelToken=Fs;k.isCancel=Gn;k.VERSION=tr;k.toFormData=Ze;k.AxiosError=_;k.Cancel=k.CanceledError;k.all=function(e){return Promise.all(e)};k.spread=Bs;k.isAxiosError=js;k.mergeConfig=ae;k.AxiosHeaders=D;k.formToJSON=n=>Kn(u.isHTMLForm(n)?new FormData(n):n);k.getAdapter=er.getAdapter;k.HttpStatusCode=Hs;k.default=k;const Vs=k;function rr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qs=rr,ir=new Tt("auth","Firebase",rr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Gr("@firebase/auth");function Ws(n,...e){ze.logLevel<=On.WARN&&ze.warn(`Auth (${ke}): ${n}`,...e)}function Fe(n,...e){ze.logLevel<=On.ERROR&&ze.error(`Auth (${ke}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,...e){throw Lt(n,...e)}function j(n,...e){return Lt(n,...e)}function sr(n,e,t){const r=Object.assign(Object.assign({},qs()),{[e]:t});return new Tt("auth","Firebase",r).create(e,{appName:n.name})}function $(n){return sr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ir.create(n,...e)}function m(n,e,...t){if(!n)throw Lt(e,...t)}function q(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fe(e),new Error(e)}function K(n,e){n||q(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zs(){return cn()==="http:"||cn()==="https:"}function cn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zs()||Zr()||"connection"in navigator)?navigator.onLine:!0}function Ks(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.shortDelay=e,this.longDelay=t,K(t>e,"Short delay should be less than long delay!"),this.isMobile=Jr()||Yr()}get(){return $s()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){K(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Ae(3e4,6e4);function J(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Y(n,e,t,r,i={}){return or(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Pe(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ar.fetch()(cr(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function or(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gs),e);try{const i=new Xs(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ue(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ue(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ue(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ue(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sr(n,d,l);M(n,d)}}catch(i){if(i instanceof Ee)throw i;M(n,"network-request-failed",{message:String(i)})}}async function Oe(n,e,t,r,i={}){const s=await Y(n,e,t,r,i);return"mfaPendingCredential"in s&&M(n,"multi-factor-auth-required",{_serverResponse:s}),s}function cr(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ut(n.config,i):`${n.config.apiScheme}://${i}`}function Ys(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(j(this.auth,"network-request-failed")),Js.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ue(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=j(n,e,r);return i.customData._tokenResponse=t,i}function ln(n){return n!==void 0&&n.enterprise!==void 0}class Qs{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ys(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Zs(n,e){return Y(n,"GET","/v2/recaptchaConfig",J(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(n,e){return Y(n,"POST","/v1/accounts:delete",e)}async function lr(n,e){return Y(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ta(n,e=!1){const t=G(n),r=await t.getIdToken(e),i=Dt(r);m(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ie(ut(i.auth_time)),issuedAtTime:Ie(ut(i.iat)),expirationTime:Ie(ut(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ut(n){return Number(n)*1e3}function Dt(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fe("JWT malformed, contained fewer than 3 sections"),null;try{const i=ni(t);return i?JSON.parse(i):(Fe("Failed to decode base64 JWT payload"),null)}catch(i){return Fe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function un(n){const e=Dt(n);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ee&&na(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function na({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ie(this.lastLoginAt),this.creationTime=Ie(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(n){var e;const t=n.auth,r=await n.getIdToken(),i=await be(n,lr(t,{idToken:r}));m(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ur(s.providerUserInfo):[],o=sa(n.providerData,a),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function ia(n){const e=G(n);await $e(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ur(n){return n.map(e=>{var{providerId:t}=e,r=bt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(n,e){const t=await or(n,{},async()=>{const r=Pe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=cr(n,i,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ar.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oa(n,e){return Y(n,"POST","/v2/accounts:revokeToken",J(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):un(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){m(e.length!==0,"internal-error");const t=un(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await aa(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new he;return r&&(m(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(m(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(m(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new he,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,e){m(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class W{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=bt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ra(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await be(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ta(this,e)}reload(){return ia(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $e(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject($(this.auth));const e=await this.getIdToken();return await be(this,ea(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,o,c,l,d;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(a=t.photoURL)!==null&&a!==void 0?a:void 0,y=(o=t.tenantId)!==null&&o!==void 0?o:void 0,f=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=t.createdAt)!==null&&l!==void 0?l:void 0,R=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:A,isAnonymous:L,providerData:O,stsTokenManager:g}=t;m(w&&g,e,"internal-error");const S=he.fromJSON(this.name,g);m(typeof w=="string",e,"internal-error"),Z(h,e.name),Z(v,e.name),m(typeof A=="boolean",e,"internal-error"),m(typeof L=="boolean",e,"internal-error"),Z(E,e.name),Z(p,e.name),Z(y,e.name),Z(f,e.name),Z(P,e.name),Z(R,e.name);const T=new W({uid:w,auth:e,email:v,emailVerified:A,displayName:h,isAnonymous:L,photoURL:p,phoneNumber:E,tenantId:y,stsTokenManager:S,createdAt:P,lastLoginAt:R});return O&&Array.isArray(O)&&(T.providerData=O.map(X=>Object.assign({},X))),f&&(T._redirectEventId=f),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new he;i.updateFromServerResponse(t);const s=new W({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $e(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];m(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ur(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new he;o.updateFromIdToken(r);const c=new W({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Map;function z(n){K(n instanceof Function,"Expected a class definition");let e=dn.get(n);return e?(K(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dr.type="NONE";const hn=dr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e,t){return`firebase:${n}:${e}:${t}`}class fe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Be(this.userKey,i.apiKey,s),this.fullPersistenceKey=Be("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fe(z(hn),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||z(hn);const a=Be(r,e.config.apiKey,e.name);let o=null;for(const l of t)try{const d=await l._get(a);if(d){const h=W._fromJSON(e,d);l!==s&&(o=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fe(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new fe(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gr(e))return"Blackberry";if(_r(e))return"Webos";if(Mt(e))return"Safari";if((e.includes("chrome/")||fr(e))&&!e.includes("edge/"))return"Chrome";if(mr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hr(n=C()){return/firefox\//i.test(n)}function Mt(n=C()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fr(n=C()){return/crios\//i.test(n)}function pr(n=C()){return/iemobile/i.test(n)}function mr(n=C()){return/android/i.test(n)}function gr(n=C()){return/blackberry/i.test(n)}function _r(n=C()){return/webos/i.test(n)}function nt(n=C()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ca(n=C()){var e;return nt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function la(){return ri()&&document.documentMode===10}function yr(n=C()){return nt(n)||mr(n)||_r(n)||gr(n)||/windows phone/i.test(n)||pr(n)}function ua(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,e=[]){let t;switch(n){case"Browser":t=fn(C());break;case"Worker":t=`${fn(C())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ke}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,e={}){return Y(n,"GET","/v2/passwordPolicy",J(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=6;class pa{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:fa,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pn(this),this.idTokenSubscription=new pn(this),this.beforeStateQueue=new da(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ir,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=z(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lr(this,{idToken:e}),r=await W._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(B(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $e(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ks()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject($(this));const t=e?G(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject($(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject($(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(z(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ha(this),t=new pa(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await oa(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&z(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[z(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ws(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function le(n){return G(n)}class pn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ei(t=>this.observer=t)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ga(n){rt=n}function vr(n){return rt.loadJS(n)}function _a(){return rt.recaptchaEnterpriseScript}function ya(){return rt.gapiScript}function wa(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const va="recaptcha-enterprise",Ia="NO_RECAPTCHA";class Ea{constructor(e){this.type=va,this.auth=le(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Zs(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Qs(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;ln(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(Ia)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!t&&ln(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_a();c.length!==0&&(c+=o),vr(c).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function mn(n,e,t,r=!1){const i=new Ea(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function It(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mn(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await mn(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n,e){const t=An(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ti(s,e!=null?e:{}))return i;M(i,"already-initialized")}return t.initialize({options:e})}function ba(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(z);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sa(n,e,t){const r=le(n);m(r._canInitEmulator,r,"emulator-config-failed"),m(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Ir(e),{host:a,port:o}=ka(e),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pa()}function Ir(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ka(n){const e=Ir(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gn(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gn(a)}}}function gn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Pa(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,t){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}async function Ra(n,e){return Y(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(n,e){return Oe(n,"POST","/v1/accounts:signInWithPassword",J(n,e))}async function Oa(n,e){return Y(n,"POST","/v1/accounts:sendOobCode",J(n,e))}async function Ca(n,e){return Oa(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(n,e){return Oe(n,"POST","/v1/accounts:signInWithEmailLink",J(n,e))}async function La(n,e){return Oe(n,"POST","/v1/accounts:signInWithEmailLink",J(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends xt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Se(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return It(e,t,"signInWithPassword",Aa);case"emailLink":return Na(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return It(e,r,"signUpPassword",Ra);case"emailLink":return La(e,{idToken:t,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(n,e){return Oe(n,"POST","/v1/accounts:signInWithIdp",J(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="http://localhost";class oe extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):M("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=bt(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new oe(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return pe(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pe(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pe(e,t)}buildRequest(){const e={requestUri:Ua,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ma(n){const e=we(ve(n)).link,t=e?we(ve(e)).deep_link_id:null,r=we(ve(n)).deep_link_id;return(r?we(ve(r)).link:null)||r||t||e||n}class Ft{constructor(e){var t,r,i,s,a,o;const c=we(ve(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Da((i=c.mode)!==null&&i!==void 0?i:null);m(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const t=Ma(e);try{return new Ft(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ft.parseLink(t);return m(r,"argument-error"),Se._fromEmailAndCode(e,r.code,r.tenantId)}}_e.PROVIDER_ID="password";_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Ce{constructor(){super("facebook.com")}static credential(e){return oe._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ee.credential(e.oauthAccessToken)}catch{return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Ce{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oe._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return te.credential(t,r)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Ce{constructor(){super("github.com")}static credential(e){return oe._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com";ne.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Ce{constructor(){super("twitter.com")}static credential(e,t){return oe._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return re.credential(t,r)}catch{return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com";re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(n,e){return Oe(n,"POST","/v1/accounts:signUp",J(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await W._fromIdTokenResponse(e,r,i),a=_n(r);return new ce({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=_n(r);return new ce({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function _n(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ee{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ke.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ke(e,t,r,i)}}function Tr(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ke._fromErrorAndOperation(n,s,e,r):s})}async function Fa(n,e,t=!1){const r=await be(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ce._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(n,e,t=!1){const{auth:r}=n;if(B(r.app))return Promise.reject($(r));const i="reauthenticate";try{const s=await be(n,Tr(r,i,e,n),t);m(s.idToken,r,"internal-error");const a=Dt(s.idToken);m(a,r,"internal-error");const{sub:o}=a;return m(n.uid===o,r,"user-mismatch"),ce._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&M(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,e,t=!1){if(B(n.app))return Promise.reject($(n));const r="signIn",i=await Tr(n,r,e),s=await ce._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ja(n,e){return br(le(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n,e,t){var r;m(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),m(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(m(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(m(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n){const e=le(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Va(n,e,t){if(B(n.app))return Promise.reject($(n));const r=le(n),a=await It(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xa).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Sr(n),c}),o=await ce._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function qa(n,e,t){return B(n.app)?Promise.reject($(n)):ja(G(n),_e.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sr(n),r})}async function Wa(n,e){const t=G(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ha(t.auth,i,e);const{email:s}=await Ca(t.auth,i);s!==n.email&&await n.reload()}function za(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function $a(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function Ka(n,e,t,r){return G(n).onAuthStateChanged(e,t,r)}const Ge="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ge,"1"),this.storage.removeItem(Ge),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){const n=C();return Mt(n)||nt(n)}const Ja=1e3,Ya=10;class Pr extends kr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ga()&&ua(),this.fallbackToPolling=yr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);la()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ya):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pr.type="LOCAL";const Xa=Pr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends kr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rr.type="SESSION";const Ar=Rr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new it(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(t.origin,s)),c=await Qa(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}it.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Bt("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const v=h;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(v.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return window}function eo(n){H().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function to(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function no(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ro(){return Or()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="firebaseLocalStorageDb",io=1,Je="firebaseLocalStorage",Nr="fbase_key";class Ne{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function st(n,e){return n.transaction([Je],e?"readwrite":"readonly").objectStore(Je)}function so(){const n=indexedDB.deleteDatabase(Cr);return new Ne(n).toPromise()}function Et(){const n=indexedDB.open(Cr,io);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Je,{keyPath:Nr})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Je)?e(r):(r.close(),await so(),e(await Et()))})})}async function yn(n,e,t){const r=st(n,!0).put({[Nr]:e,value:t});return new Ne(r).toPromise()}async function ao(n,e){const t=st(n,!1).get(e),r=await new Ne(t).toPromise();return r===void 0?null:r.value}function wn(n,e){const t=st(n,!0).delete(e);return new Ne(t).toPromise()}const oo=800,co=3;class Lr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Et(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>co)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Or()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=it._getInstance(ro()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await to(),!this.activeServiceWorker)return;this.sender=new Za(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||no()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Et();return await yn(e,Ge,"1"),await wn(e,Ge),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ao(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=st(i,!1).getAll();return new Ne(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lr.type="LOCAL";const lo=Lr;new Ae(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,e){return e?z(e):(m(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ho(n){return br(n.auth,new jt(n),n.bypassAuthState)}function fo(n){const{auth:e,user:t}=n;return m(t,e,"internal-error"),Ba(t,new jt(n),n.bypassAuthState)}async function po(n){const{auth:e,user:t}=n;return m(t,e,"internal-error"),Fa(t,new jt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ho;case"linkViaPopup":case"linkViaRedirect":return po;case"reauthViaPopup":case"reauthViaRedirect":return fo;default:M(this.auth,"internal-error")}}resolve(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Ae(2e3,1e4);class de extends Ur{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,de.currentPopupAction&&de.currentPopupAction.cancel(),de.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){K(this.filter.length===1,"Popup operations only handle one event");const e=Bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(j(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(j(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,de.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(j(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mo.get())};e()}}de.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="pendingRedirect",je=new Map;class _o extends Ur{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=je.get(this.auth._key());if(!e){try{const r=await yo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}je.set(this.auth._key(),e)}return this.bypassAuthState||je.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yo(n,e){const t=Io(e),r=vo(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function wo(n,e){je.set(n._key(),e)}function vo(n){return z(n._redirectPersistence)}function Io(n){return Be(go,n.config.apiKey,n.name)}async function Eo(n,e,t=!1){if(B(n.app))return Promise.reject($(n));const r=le(n),i=uo(r,e),a=await new _o(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=10*60*1e3;class bo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!So(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Dr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(j(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=To&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(e))}saveEventToCache(e){this.cachedEventUids.add(vn(e)),this.lastProcessedEventTime=Date.now()}}function vn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function So(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e={}){return Y(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ro=/^https?/;async function Ao(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ko(n);for(const t of e)try{if(Oo(t))return}catch{}M(n,"unauthorized-domain")}function Oo(n){const e=wt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ro.test(t))return!1;if(Po.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Ae(3e4,6e4);function In(){const n=H().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function No(n){return new Promise((e,t)=>{var r,i,s;function a(){In(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{In(),t(j(n,"network-request-failed"))},timeout:Co.get()})}if(!((i=(r=H().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)a();else{const o=wa("iframefcb");return H()[o]=()=>{gapi.load?a():t(j(n,"network-request-failed"))},vr(`${ya()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw He=null,e})}let He=null;function Lo(n){return He=He||No(n),He}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Ae(5e3,15e3),Do="__/auth/iframe",Mo="emulator/auth/iframe",xo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bo(n){const e=n.config;m(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ut(e,Mo):`https://${n.config.authDomain}/${Do}`,r={apiKey:e.apiKey,appName:n.name,v:ke},i=Fo.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Pe(r).slice(1)}`}async function jo(n){const e=await Lo(n),t=H().gapi;return m(t,n,"internal-error"),e.open({where:document.body,url:Bo(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xo,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=j(n,"network-request-failed"),o=H().setTimeout(()=>{s(a)},Uo.get());function c(){H().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vo=500,qo=600,Wo="_blank",zo="http://localhost";class En{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $o(n,e,t,r=Vo,i=qo){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Ho),{width:r.toString(),height:i.toString(),top:s,left:a}),l=C().toLowerCase();t&&(o=fr(l)?Wo:t),hr(l)&&(e=e||zo,c.scrollbars="yes");const d=Object.entries(c).reduce((v,[E,p])=>`${v}${E}=${p},`,"");if(ca(l)&&o!=="_self")return Ko(e||"",o),new En(null);const h=window.open(e||"",o,d);m(h,n,"popup-blocked");try{h.focus()}catch{}return new En(h)}function Ko(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="__/auth/handler",Jo="emulator/auth/handler",Yo=encodeURIComponent("fac");async function Tn(n,e,t,r,i,s){m(n.config.authDomain,n,"auth-domain-config-required"),m(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ke,eventId:i};if(e instanceof Er){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ii(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))a[d]=h}if(e instanceof Ce){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await n._getAppCheckToken(),l=c?`#${Yo}=${encodeURIComponent(c)}`:"";return`${Xo(n)}?${Pe(o).slice(1)}${l}`}function Xo({config:n}){return n.emulator?Ut(n,Jo):`https://${n.authDomain}/${Go}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="webStorageSupport";class Qo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=Eo,this._overrideRedirectResult=wo}async _openPopup(e,t,r,i){var s;K((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Tn(e,t,r,wt(),i);return $o(e,a,Bt())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Tn(e,t,r,wt(),i);return eo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(K(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jo(e),r=new bo(e);return t.register("authEvent",i=>(m(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dt,{type:dt},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dt];a!==void 0&&t(!!a),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ao(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yr()||Mt()||nt()}}const Zo=Qo;var bn="@firebase/auth",Sn="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nc(n){qt(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;m(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wr(n)},l=new ma(r,i,s,c);return ba(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qt(new Wt("auth-internal",e=>{const t=le(e.getProvider("auth").getImmediate());return(r=>new ec(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(bn,Sn,tc(n)),zt(bn,Sn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=5*60,ic=Rn("authIdTokenMaxAge")||rc;let kn=null;const sc=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ic)return;const i=t==null?void 0:t.token;kn!==i&&(kn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ac(n=Qr()){const e=An(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ta(n,{popupRedirectResolver:Zo,persistence:[lo,Xa,Ar]}),r=Rn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=sc(s.toString());$a(t,a,()=>a(t.currentUser)),za(t,o=>a(o))}}const i=Xr("auth");return i&&Sa(t,`http://${i}`),t}function oc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ga({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=j("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",oc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nc("Browser");const Pn=n=>{switch(n==null?void 0:n.code){case"auth/invalid-email":alert("Invalid email address. Please enter a valid email.");break;case"auth/user-not-found":alert("User not found. Please check the email address.");break;case"auth/wrong-password":alert("Incorrect password. Please try again.");break;case"auth/email-already-in-use":alert("Email already in use. Please try another email.");break;case"auth/weak-password":alert("Password should be at least 6 characters.");break;case"auth/operation-not-allowed":alert("Operation not allowed. Please try again later.");break;case"auth/invalid-verification-code":alert("Invalid verification code. Please try again.");break;case"auth/invalid-verification-id":alert("Invalid verification ID. Please try again.");break;case"auth/code-expired":alert("Code expired. Please try again.");break;case"auth/invalid-action-code":alert("Invalid action code. Please try again.");break;case"auth/user-disabled":alert("User disabled. Please contact support.");break;case"auth/invalid-credential":alert("Invalid credential. Please try again.");break;case"auth/invalid-continue-uri":alert("Invalid continue URL. Please try again.");break;case"auth/unauthorized-continue-uri":alert("Unauthorized continue URL. Please try again.");break;case"auth/missing-continue-uri":alert("Missing continue URL. Please try again.");break;case"auth/missing-verification-code":alert("Missing verification code. Please try again.");break;case"auth/missing-verification-id":alert("Missing verification ID. Please try again.");break;case"auth/captcha-check-failed":alert("Captcha check failed. Please try again.");break;case"auth/invalid-phone-number":alert("Invalid phone number. Please try again.");break;case"auth/missing-phone-number":alert("Missing phone number. Please try again.");break;case"auth/quota-exceeded":alert("Quota exceeded. Please try again.");break;case"auth/missing-app-credential":alert("Missing app credential. Please try again.");break;case"auth/invalid-app-credential":alert("Invalid app credential. Please try again.");break;case"auth/session-expired":alert("Session expired. Please try again.");break;case"auth/missing-or-invalid-nonce":alert("Missing or invalid nonce. Please try again.");break;case"auth/missing-client-identifier":alert("Missing client identifier. Please try again.");break;case"auth/key-retrieval-failed":alert("Key retrieval failed. Please try again.");break;case"auth/invalid-oauth-provider":alert("Invalid OAuth provider. Please try again.");break;case"auth/invalid-oauth-client-id":alert("Invalid OAuth client ID. Please try again.");break;case"auth/invalid-cert-hash":alert("Invalid cert hash. Please try again.");break;case"auth/invalid-user-token":alert("Invalid user token. Please try again.");break;case"auth/invalid-custom-token":alert("Invalid custom token. Please try again.");break;case"auth/app-deleted":alert("App deleted. Please try again.");break;case"auth/app-not-authorized":alert("App not authorized. Please try again.");break;case"auth/argument-error":alert("Argument error. Please try again.");break;case"auth/invalid-api-key":alert("Invalid API key. Please try again.");break;case"auth/network-request-failed":alert("Network request failed. Please try again.");break;case"auth/requires-recent-login":alert("Requires recent login. Please try again.");break;case"auth/too-many-requests":alert("Too many requests. Please try again.");break;case"auth/unauthorized-domain":alert("Unauthorized domain. Please try again.");break;case"auth/user-token-expired":alert("User token expired. Please try again.");break;case"auth/web-storage-unsupported":alert("Web storage unsupported. Please try again.");break;case"auth/account-exists-with-different-credential":alert("Account exists with different credential. Please try again.");break;case"auth/auth-domain-config-required":alert("Auth domain config required. Please try again.");break;case"auth/cancelled-popup-request":alert("Cancelled popup request. Please try again.");break;case"auth/credential-already-in-use":alert("Credential already in use. Please try again.");break;case"auth/custom-token-mismatch":alert("Custom token mismatch. Please try again.");break;case"auth/provider-already-linked":alert("Provider already linked. Please try again.");break;case"auth/timeout":alert("Timeout. Please try again.");break;case"auth/missing-android-pkg-name":alert("Missing Android package name. Please try again.");break;case"auth/missing-ios-bundle-id":alert("Missing iOS bundle ID. Please try again.");break;case"auth/invalid-dynamic-link-domain":alert("Invalid dynamic link domain. Please try again.");break;case"auth/invalid-persistence-type":alert("Invalid persistence type. Please try again.");break;case"auth/unsupported-persistence-type":alert("Unsupported persistence type. Please try again.");break;case"auth/invalid-oauth-client-secret":alert("Invalid OAuth client secret. Please try again.");break;case"auth/invalid-argument":alert("Invalid argument. Please try again.");break;case"auth/invalid-creation-time":alert("Invalid creation time. Please try again.");break;case"auth/invalid-disabled-field":alert("Invalid disabled field. Please try again.");break;case"auth/invalid-display-name":alert("Invalid display name. Please try again.");break;case"auth/invalid-email-verified":alert("Invalid email verified. Please try again.");break;case"auth/invalid-hash-algorithm":alert("Invalid hash algorithm. Please try again.");break;case"auth/invalid-hash-block-size":alert("Invalid hash block size. Please try again.");break;case"auth/invalid-hash-derived-key-length":alert("Invalid hash derived key length. Please try again.");break;case"auth/invalid-hash-key":alert("Invalid hash key. Please try again.");break;case"auth/invalid-hash-memory-cost":alert("Invalid hash memory cost. Please try again.");break;case"auth/invalid-hash-parallelization":alert("Invalid hash parallelization. Please try again.");break;case"auth/invalid-hash-rounds":alert("Invalid hash rounds. Please try again.");break;case"auth/invalid-hash-salt-separator":alert("Invalid hash salt separator. Please try again.");break;case"auth/invalid-id-token":alert("Invalid ID token. Please try again.");break;case"auth/invalid-last-sign-in-time":alert("Invalid last sign in time. Please try again.");break;case"auth/invalid-page-token":alert("Invalid page token. Please try again.");break;case"auth/invalid-password":alert("Invalid password. Please try again.");break;case"auth/invalid-password-hash":alert("Invalid password hash. Please try again.");break;case"auth/invalid-password-salt":alert("Invalid password salt. Please try again.");break;case"auth/invalid-photo-url":alert("Invalid photo URL. Please try again.");break;case"auth/invalid-provider-id":alert("Invalid provider ID. Please try again.");break;case"auth/invalid-session-cookie-duration":alert("Invalid session cookie duration. Please try again.");break;case"auth/invalid-uid":alert("Invalid UID. Please try again.");break;case"auth/invalid-user-import":alert("Invalid user import. Please try again.");break;case"auth/invalid-provider-data":alert("Invalid provider data. Please try again.");break;case"auth/maximum-user-count-exceeded":alert("Maximum user count exceeded. Please try again.");break;case"auth/missing-hash-algorithm":alert("Missing hash algorithm. Please try again.");break;case"auth/missing-uid":alert("Missing UID. Please try again.");break;case"auth/reserved-claims":alert("Reserved claims. Please try again.");break;case"auth/session-cookie-revoked":alert("Session cookie revoked. Please try again.");break;case"auth/uid-already-exists":alert("UID already exists. Please try again.");break;case"auth/email-already-exists":alert("Email already exists. Please try again.");break;case"auth/phone-number-already-exists":alert("Phone number already exists. Please try again.");break;case"auth/project-not-found":alert("Project not found. Please try again.");break;case"auth/insufficient-permission":alert("Insufficient permission. Please try again.");break;case"auth/internal-error":alert("Internal error. Please try again.");break;default:alert("Oops! Something went wrong. Please try again later.")}},cc="_container_1yheg_5",lc="_leftSide_1yheg_15",uc="_portraitLeftSide_1yheg_21",dc="_rightSide_1yheg_35",hc="_portraitRightSide_1yheg_36",fc="_loginContainer_1yheg_50",pc="_portraitLoginContainer_1yheg_51",mc="_slideIn_1yheg_1",gc="_sportsIconSection_1yheg_74",_c="_sportsIcon_1yheg_74",yc="_loginSignupText_1yheg_84",wc="_getStarted_1yheg_91",vc="_signUpImmediately_1yheg_98",Ic="_loginSignupButton_1yheg_104",Ec="_googleLoginButton_1yheg_109",Tc="_emailLoginButton_1yheg_110",bc="_portraitEmailLoginButton_1yheg_111",Sc="_portraitGoogleLoginButton_1yheg_112",kc="_loginDivider_1yheg_138",Pc="_loginOption_1yheg_146",Rc="_emailSignup_1yheg_155",Ac="_emailField_1yheg_174",Oc="_passwordField_1yheg_175",Cc="_signupText_1yheg_184",I={container:cc,leftSide:lc,portraitLeftSide:uc,rightSide:dc,portraitRightSide:hc,loginContainer:fc,portraitLoginContainer:pc,slideIn:mc,sportsIconSection:gc,sportsIcon:_c,loginSignupText:yc,getStarted:wc,signUpImmediately:vc,loginSignupButton:Ic,googleLoginButton:Ec,emailLoginButton:Tc,portraitEmailLoginButton:bc,portraitGoogleLoginButton:Sc,loginDivider:kc,loginOption:Pc,emailSignup:Rc,emailField:Ac,passwordField:Oc,signupText:Cc},Nc="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql";function Wc(){const n=qr(),e=Wr(),t=ac(),r=zr(),i={}.VITE_GOOGLE_SHEET_API,[s,a]=ue.exports.useState(!1),[o,c]=ue.exports.useState(!1),[l,d]=ue.exports.useState(""),[h,v]=ue.exports.useState(""),[E,p]=ue.exports.useState(!1),y=()=>{Ka(t,g=>{if(g){const S=g.metadata.creationTime,T=g.metadata.lastSignInTime;S===T?(console.log("User is logging in for the first time"),f(g.email,g.displayName)):console.log("User has logged in before")}})},f=(g,S)=>{fetch(Nc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation createUser {
        createUser(input: {
        email: "${g}"
        name: "${S}"
        }) {
            isSuccessful
            userId
        }
        }`})}).then(T=>T.json()).then(T=>{if(T.errors)throw new Error(T.errors[0].message)}).catch(T=>{console.log(T)})},P=async g=>{Vs.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${g}`,{headers:{Authorization:`Bearer ${g}`,Accept:"application/json"}}).then(S=>{f(S.data.email,S.data.name),localStorage.setItem("userData",JSON.stringify(S.data)),R(S.data.email),r(Ht(S.data)),e("/match-queues")}).catch(S=>{alert(S)})},R=g=>{g==="admin@flickmatch.in"?r(Vt(!0)):(async T=>{const Mr=(await(await fetch(i)).json()).data.map(xr=>xr.EmailId).includes(T);r(Vt(Mr))})(g)},w=Fr({onSuccess:g=>P(g.access_token),onError:g=>alert("Login Failed "+g)}),A=()=>{Va(t,l,h).then(g=>{Wa(g.user).then(()=>{alert("A verification email has been sent to your email address. Please verify your email to login.")}),p(!1),t.signOut()}).catch(g=>{g instanceof Ee&&Pn(g)})},L=()=>{qa(t,l,h).then(g=>{const S=l.split("@")[0],T=g.user;if(T.emailVerified){const X={email:T.email,id:T.uid,name:S};localStorage.setItem("userData",JSON.stringify(X)),y(),r(Ht(X)),R(T.email),e("/match-queues")}else alert("Please verify your email to login.")}).catch(g=>{g instanceof Ee&&Pn(g)})},O=()=>{c(!0),a(!0)};return V(Br,{children:[b(si,{title:"Login/Signup"}),V(F,{className:I.container,children:[b(F,{className:n?I.portraitLeftSide:I.leftSide,children:b("img",{src:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D",alt:"Football Image"})}),b(F,{className:n?I.portraitRightSide:I.rightSide,children:V(F,{className:n?I.portraitLoginContainer:I.loginContainer,children:[b(F,{className:I.sportsIconSection,children:b($r,{className:I.sportsIcon})}),V(F,{className:I.loginSignupHeader,children:[E?b(ie,{className:I.loginSignupText,children:"Sign up"}):o?b(ie,{className:I.loginSignupText,children:"Login"}):b(ie,{className:I.loginSignupText,children:"Login / Sign up"}),b(ie,{className:I.getStarted,children:"Let's get Started"}),V(ie,{className:I.signUpImmediately,children:["Join our community and start your ",b("br",{}),"journey right away!"]})]}),s?V(F,{className:I.emailSignup,children:[b($t,{id:"outlined-basic",label:"Email",variant:"outlined",onChange:g=>d(g.target.value),className:I.emailField}),b($t,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",onChange:g=>v(g.target.value),className:I.passwordField}),E?b(Le,{variant:"outlined",className:n?I.portraitEmailLoginButton:I.emailLoginButton,onClick:()=>A(),children:"Sign up"}):b(Le,{variant:"outlined",className:n?I.portraitEmailLoginButton:I.emailLoginButton,onClick:()=>L(),children:"Sign In"}),b(F,{children:E?V(ie,{style:{marginTop:10},children:["Already have an account?"," ",b("span",{onClick:()=>p(!1),className:I.signupText,children:"Sign in"})]}):V(ie,{style:{marginTop:10},children:["Need an account?"," ",b("span",{onClick:()=>p(!0),className:I.signupText,children:"Sign up"})]})})]}):V(F,{className:I.loginSignupButton,children:[b(Le,{variant:"outlined",className:n?I.portraitGoogleLoginButton:I.googleLoginButton,onClick:()=>w(),startIcon:b(Cn,{}),children:"Log In / Sign up with Google"}),b(F,{className:I.loginDivider,children:b("span",{className:I.loginOption,children:"OR"})}),b(Le,{variant:"outlined",className:n?I.portraitGoogleLoginButton:I.googleLoginButton,onClick:()=>O(),startIcon:b(Kr,{}),children:"Log In / Sign Up with Email"})]})]})})]})]})}export{Wc as default};

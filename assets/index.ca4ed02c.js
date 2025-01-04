import{u as Fr}from"./index.esm.163c6233.js";import{W as Br,a as le,A as V,F as jr,j as S,a8 as jt,a7 as qt}from"./loginSlice.5d27ec86.js";import{r as qr,a as Hr,u as Vr,e as Wr,bQ as zr,B as F,d as $r,T as re,b as Le,bR as Gr}from"./App.b8d355c1.js";import{E as bt,p as Pn,L as Kr,q as Jr,s as Xr,_ as Ht,C as Vt,r as Wt,a as Rn,t as Yr,b as Qr,i as Zr,S as ke,u as j,g as J,w as ei,d as ti,j as An,m as U,F as Ee,x as ni,y as ri,z as we,A as ve,B as Pe,D as ii,G as si}from"./index.esm.6e37327b.js";import{_ as Tt}from"./tslib.es6.39a98506.js";import{M as ai}from"./Meta.26cbaf50.js";import{T as zt}from"./TextField.eb0e00a8.js";import"./index.f9f71479.js";import"./index.module.4cdec6c2.js";import"./Input.19f2691a.js";import"./Select.0732dde2.js";var St={},oi=Br.exports;Object.defineProperty(St,"__esModule",{value:!0});var On=St.default=void 0;ui(le.exports);var ci=oi(qr()),li=Hr;function Cn(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Cn=function(r){return r?n:e})(t)}function ui(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Cn(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=i?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}On=St.default=(0,ci.default)((0,li.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");function Nn(t,e){return function(){return t.apply(e,arguments)}}const{toString:di}=Object.prototype,{getPrototypeOf:kt}=Object,Ye=(t=>e=>{const n=di.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=t=>(t=t.toLowerCase(),e=>Ye(e)===t),Qe=t=>e=>typeof e===t,{isArray:pe}=Array,be=Qe("undefined");function hi(t){return t!==null&&!be(t)&&t.constructor!==null&&!be(t.constructor)&&L(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ln=x("ArrayBuffer");function fi(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ln(t.buffer),e}const pi=Qe("string"),L=Qe("function"),Un=Qe("number"),Ze=t=>t!==null&&typeof t=="object",gi=t=>t===!0||t===!1,De=t=>{if(Ye(t)!=="object")return!1;const e=kt(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},mi=x("Date"),_i=x("File"),yi=x("Blob"),wi=x("FileList"),vi=t=>Ze(t)&&L(t.pipe),Ii=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||L(t.append)&&((e=Ye(t))==="formdata"||e==="object"&&L(t.toString)&&t.toString()==="[object FormData]"))},Ei=x("URLSearchParams"),[bi,Ti,Si,ki]=["ReadableStream","Request","Response","Headers"].map(x),Pi=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Re(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),pe(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(r=0;r<a;r++)o=s[r],e.call(null,t[o],o,t)}}function Dn(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ie=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Mn=t=>!be(t)&&t!==ie;function ft(){const{caseless:t}=Mn(this)&&this||{},e={},n=(r,i)=>{const s=t&&Dn(e,i)||i;De(e[s])&&De(r)?e[s]=ft(e[s],r):De(r)?e[s]=ft({},r):pe(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Re(arguments[r],n);return e}const Ri=(t,e,n,{allOwnKeys:r}={})=>(Re(e,(i,s)=>{n&&L(i)?t[s]=Nn(i,n):t[s]=i},{allOwnKeys:r}),t),Ai=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Oi=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ci=(t,e,n,r)=>{let i,s,a;const o={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],(!r||r(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&kt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Ni=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Li=t=>{if(!t)return null;if(pe(t))return t;let e=t.length;if(!Un(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ui=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&kt(Uint8Array)),Di=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Mi=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},xi=x("HTMLFormElement"),Fi=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),$t=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Bi=x("RegExp"),xn=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Re(n,(i,s)=>{let a;(a=e(i,s,t))!==!1&&(r[s]=a||i)}),Object.defineProperties(t,r)},ji=t=>{xn(t,(e,n)=>{if(L(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!L(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qi=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return pe(t)?r(t):r(String(t).split(e)),n},Hi=()=>{},Vi=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,ot="abcdefghijklmnopqrstuvwxyz",Gt="0123456789",Fn={DIGIT:Gt,ALPHA:ot,ALPHA_DIGIT:ot+ot.toUpperCase()+Gt},Wi=(t=16,e=Fn.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function zi(t){return!!(t&&L(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const $i=t=>{const e=new Array(10),n=(r,i)=>{if(Ze(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=pe(r)?[]:{};return Re(r,(a,o)=>{const c=n(a,i+1);!be(c)&&(s[o]=c)}),e[i]=void 0,s}}return r};return n(t,0)},Gi=x("AsyncFunction"),Ki=t=>t&&(Ze(t)||L(t))&&L(t.then)&&L(t.catch),Bn=((t,e)=>t?setImmediate:e?((n,r)=>(ie.addEventListener("message",({source:i,data:s})=>{i===ie&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),ie.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",L(ie.postMessage)),Ji=typeof queueMicrotask<"u"?queueMicrotask.bind(ie):typeof process<"u"&&process.nextTick||Bn,u={isArray:pe,isArrayBuffer:Ln,isBuffer:hi,isFormData:Ii,isArrayBufferView:fi,isString:pi,isNumber:Un,isBoolean:gi,isObject:Ze,isPlainObject:De,isReadableStream:bi,isRequest:Ti,isResponse:Si,isHeaders:ki,isUndefined:be,isDate:mi,isFile:_i,isBlob:yi,isRegExp:Bi,isFunction:L,isStream:vi,isURLSearchParams:Ei,isTypedArray:Ui,isFileList:wi,forEach:Re,merge:ft,extend:Ri,trim:Pi,stripBOM:Ai,inherits:Oi,toFlatObject:Ci,kindOf:Ye,kindOfTest:x,endsWith:Ni,toArray:Li,forEachEntry:Di,matchAll:Mi,isHTMLForm:xi,hasOwnProperty:$t,hasOwnProp:$t,reduceDescriptors:xn,freezeMethods:ji,toObjectSet:qi,toCamelCase:Fi,noop:Hi,toFiniteNumber:Vi,findKey:Dn,global:ie,isContextDefined:Mn,ALPHABET:Fn,generateString:Wi,isSpecCompliantForm:zi,toJSONObject:$i,isAsyncFn:Gi,isThenable:Ki,setImmediate:Bn,asap:Ji};function y(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}u.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.status}}});const jn=y.prototype,qn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{qn[t]={value:t}});Object.defineProperties(y,qn);Object.defineProperty(jn,"isAxiosError",{value:!0});y.from=(t,e,n,r,i,s)=>{const a=Object.create(jn);return u.toFlatObject(t,a,function(c){return c!==Error.prototype},o=>o!=="isAxiosError"),y.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,s&&Object.assign(a,s),a};const Xi=null;function pt(t){return u.isPlainObject(t)||u.isArray(t)}function Hn(t){return u.endsWith(t,"[]")?t.slice(0,-2):t}function Kt(t,e,n){return t?t.concat(e).map(function(i,s){return i=Hn(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Yi(t){return u.isArray(t)&&!t.some(pt)}const Qi=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function et(t,e,n){if(!u.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,p){return!u.isUndefined(p[m])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(e);if(!u.isFunction(i))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(u.isDate(f))return f.toISOString();if(!c&&u.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(f)||u.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,m,p){let E=f;if(f&&!p&&typeof f=="object"){if(u.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(u.isArray(f)&&Yi(f)||(u.isFileList(f)||u.endsWith(m,"[]"))&&(E=u.toArray(f)))return m=Hn(m),E.forEach(function(T,C){!(u.isUndefined(T)||T===null)&&e.append(a===!0?Kt([m],C,s):a===null?m:m+"[]",l(T))}),!1}return pt(f)?!0:(e.append(Kt(p,m,s),l(f)),!1)}const h=[],w=Object.assign(Qi,{defaultVisitor:d,convertValue:l,isVisitable:pt});function I(f,m){if(!u.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(f),u.forEach(f,function(E,b){(!(u.isUndefined(E)||E===null)&&i.call(e,E,u.isString(b)?b.trim():b,m,w))===!0&&I(E,m?m.concat(b):[b])}),h.pop()}}if(!u.isObject(t))throw new TypeError("data must be an object");return I(t),e}function Jt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pt(t,e){this._pairs=[],t&&et(t,this,e)}const Vn=Pt.prototype;Vn.append=function(e,n){this._pairs.push([e,n])};Vn.toString=function(e){const n=e?function(r){return e.call(this,r,Jt)}:Jt;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Zi(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wn(t,e,n){if(!e)return t;const r=n&&n.encode||Zi;u.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=u.isURLSearchParams(e)?e.toString():new Pt(e,n).toString(r),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class es{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Xt=es,zn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ts=typeof URLSearchParams<"u"?URLSearchParams:Pt,ns=typeof FormData<"u"?FormData:null,rs=typeof Blob<"u"?Blob:null,is={isBrowser:!0,classes:{URLSearchParams:ts,FormData:ns,Blob:rs},protocols:["http","https","file","blob","url","data"]},Rt=typeof window<"u"&&typeof document<"u",gt=typeof navigator=="object"&&navigator||void 0,ss=Rt&&(!gt||["ReactNative","NativeScript","NS"].indexOf(gt.product)<0),as=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),os=Rt&&window.location.href||"http://localhost",cs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rt,hasStandardBrowserWebWorkerEnv:as,hasStandardBrowserEnv:ss,navigator:gt,origin:os},Symbol.toStringTag,{value:"Module"})),O={...cs,...is};function ls(t,e){return et(t,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return O.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function us(t){return u.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ds(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function $n(t){function e(n,r,i,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=n.length;return a=!a&&u.isArray(i)?i.length:a,c?(u.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!o):((!i[a]||!u.isObject(i[a]))&&(i[a]=[]),e(n,r,i[a],s)&&u.isArray(i[a])&&(i[a]=ds(i[a])),!o)}if(u.isFormData(t)&&u.isFunction(t.entries)){const n={};return u.forEachEntry(t,(r,i)=>{e(us(r),i,n,0)}),n}return null}function hs(t,e,n){if(u.isString(t))try{return(e||JSON.parse)(t),u.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const At={transitional:zn,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=u.isObject(e);if(s&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return i?JSON.stringify($n(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e)||u.isReadableStream(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ls(e,this.formSerializer).toString();if((o=u.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return et(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),hs(e)):e}],transformResponse:[function(e){const n=this.transitional||At.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(u.isResponse(e)||u.isReadableStream(e))return e;if(e&&u.isString(e)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?y.from(o,y.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],t=>{At.headers[t]={}});const Ot=At,fs=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ps=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||e[n]&&fs[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Yt=Symbol("internals");function ye(t){return t&&String(t).trim().toLowerCase()}function Me(t){return t===!1||t==null?t:u.isArray(t)?t.map(Me):String(t)}function gs(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ms=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ct(t,e,n,r,i){if(u.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!u.isString(e)){if(u.isString(r))return e.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(e)}}function _s(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ys(t,e){const n=u.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,a){return this[r].call(this,e,i,s,a)},configurable:!0})})}class tt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(o,c,l){const d=ye(c);if(!d)throw new Error("header name must be a non-empty string");const h=u.findKey(i,d);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=Me(o))}const a=(o,c)=>u.forEach(o,(l,d)=>s(l,d,c));if(u.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(u.isString(e)&&(e=e.trim())&&!ms(e))a(ps(e),n);else if(u.isHeaders(e))for(const[o,c]of e.entries())s(c,o,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ye(e),e){const r=u.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return gs(i);if(u.isFunction(n))return n.call(this,i,r);if(u.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ye(e),e){const r=u.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ct(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(a){if(a=ye(a),a){const o=u.findKey(r,a);o&&(!n||ct(r,r[o],o,n))&&(delete r[o],i=!0)}}return u.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||ct(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return u.forEach(this,(i,s)=>{const a=u.findKey(r,s);if(a){n[a]=Me(i),delete n[s];return}const o=e?_s(s):String(s).trim();o!==s&&delete n[s],n[o]=Me(i),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return u.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Yt]=this[Yt]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=ye(a);r[o]||(ys(i,a),r[o]=!0)}return u.isArray(e)?e.forEach(s):s(e),this}}tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(tt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});u.freezeMethods(tt);const D=tt;function lt(t,e){const n=this||Ot,r=e||n,i=D.from(r.headers);let s=r.data;return u.forEach(t,function(o){s=o.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Gn(t){return!!(t&&t.__CANCEL__)}function ge(t,e,n){y.call(this,t==null?"canceled":t,y.ERR_CANCELED,e,n),this.name="CanceledError"}u.inherits(ge,y,{__CANCEL__:!0});function Kn(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ws(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function vs(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),d=r[s];a||(a=l),n[i]=c,r[i]=l;let h=s,w=0;for(;h!==i;)w+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-a<e)return;const I=d&&l-d;return I?Math.round(w*1e3/I):void 0}}function Is(t,e){let n=0,r=1e3/e,i,s;const a=(l,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,l)};return[(...l)=>{const d=Date.now(),h=d-n;h>=r?a(l,d):(i=l,s||(s=setTimeout(()=>{s=null,a(i)},r-h)))},()=>i&&a(i)]}const Ve=(t,e,n=3)=>{let r=0;const i=vs(50,250);return Is(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,c=a-r,l=i(c),d=a<=o;r=a;const h={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&d?(o-a)/l:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(h)},n)},Qt=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Zt=t=>(...e)=>u.asap(()=>t(...e)),Es=O.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,O.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,bs=O.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const a=[t+"="+encodeURIComponent(e)];u.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),u.isString(r)&&a.push("path="+r),u.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ts(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ss(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Jn(t,e){return t&&!Ts(e)?Ss(t,e):e}const en=t=>t instanceof D?{...t}:t;function se(t,e){e=e||{};const n={};function r(l,d,h,w){return u.isPlainObject(l)&&u.isPlainObject(d)?u.merge.call({caseless:w},l,d):u.isPlainObject(d)?u.merge({},d):u.isArray(d)?d.slice():d}function i(l,d,h,w){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l,h,w)}else return r(l,d,h,w)}function s(l,d){if(!u.isUndefined(d))return r(void 0,d)}function a(l,d){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function o(l,d,h){if(h in e)return r(l,d);if(h in t)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,d,h)=>i(en(l),en(d),h,!0)};return u.forEach(Object.keys(Object.assign({},t,e)),function(d){const h=c[d]||i,w=h(t[d],e[d],d);u.isUndefined(w)&&h!==o||(n[d]=w)}),n}const Xn=t=>{const e=se({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:o}=e;e.headers=a=D.from(a),e.url=Wn(Jn(e.baseURL,e.url),t.params,t.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let c;if(u.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[l,...d]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];a.setContentType([l||"multipart/form-data",...d].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&u.isFunction(r)&&(r=r(e)),r||r!==!1&&Es(e.url))){const l=i&&s&&bs.read(s);l&&a.set(i,l)}return e},ks=typeof XMLHttpRequest<"u",Ps=ks&&function(t){return new Promise(function(n,r){const i=Xn(t);let s=i.data;const a=D.from(i.headers).normalize();let{responseType:o,onUploadProgress:c,onDownloadProgress:l}=i,d,h,w,I,f;function m(){I&&I(),f&&f(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let p=new XMLHttpRequest;p.open(i.method.toUpperCase(),i.url,!0),p.timeout=i.timeout;function E(){if(!p)return;const T=D.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:T,config:t,request:p};Kn(function(_){n(_),m()},function(_){r(_),m()},A),p=null}"onloadend"in p?p.onloadend=E:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(E)},p.onabort=function(){!p||(r(new y("Request aborted",y.ECONNABORTED,t,p)),p=null)},p.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let C=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const A=i.transitional||zn;i.timeoutErrorMessage&&(C=i.timeoutErrorMessage),r(new y(C,A.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,t,p)),p=null},s===void 0&&a.setContentType(null),"setRequestHeader"in p&&u.forEach(a.toJSON(),function(C,A){p.setRequestHeader(A,C)}),u.isUndefined(i.withCredentials)||(p.withCredentials=!!i.withCredentials),o&&o!=="json"&&(p.responseType=i.responseType),l&&([w,f]=Ve(l,!0),p.addEventListener("progress",w)),c&&p.upload&&([h,I]=Ve(c),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",I)),(i.cancelToken||i.signal)&&(d=T=>{!p||(r(!T||T.type?new ge(null,t,p):T),p.abort(),p=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const b=ws(i.url);if(b&&O.protocols.indexOf(b)===-1){r(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,t));return}p.send(s||null)})},Rs=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(l){if(!i){i=!0,o();const d=l instanceof Error?l:this.reason;r.abort(d instanceof y?d:new ge(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,s(new y(`timeout ${e} of ms exceeded`,y.ETIMEDOUT))},e);const o=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>u.asap(o),c}},As=Rs,Os=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Cs=async function*(t,e){for await(const n of Ns(t))yield*Os(n,e)},Ns=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},tn=(t,e,n,r)=>{const i=Cs(t,e);let s=0,a,o=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:d}=await i.next();if(l){o(),c.close();return}let h=d.byteLength;if(n){let w=s+=h;n(w)}c.enqueue(new Uint8Array(d))}catch(l){throw o(l),l}},cancel(c){return o(c),i.return()}},{highWaterMark:2})},nt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Yn=nt&&typeof ReadableStream=="function",Ls=nt&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Qn=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Us=Yn&&Qn(()=>{let t=!1;const e=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),nn=64*1024,mt=Yn&&Qn(()=>u.isReadableStream(new Response("").body)),We={stream:mt&&(t=>t.body)};nt&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!We[e]&&(We[e]=u.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new y(`Response type '${e}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Ds=async t=>{if(t==null)return 0;if(u.isBlob(t))return t.size;if(u.isSpecCompliantForm(t))return(await new Request(O.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(u.isArrayBufferView(t)||u.isArrayBuffer(t))return t.byteLength;if(u.isURLSearchParams(t)&&(t=t+""),u.isString(t))return(await Ls(t)).byteLength},Ms=async(t,e)=>{const n=u.toFiniteNumber(t.getContentLength());return n==null?Ds(e):n},xs=nt&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:a,onDownloadProgress:o,onUploadProgress:c,responseType:l,headers:d,withCredentials:h="same-origin",fetchOptions:w}=Xn(t);l=l?(l+"").toLowerCase():"text";let I=As([i,s&&s.toAbortSignal()],a),f;const m=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let p;try{if(c&&Us&&n!=="get"&&n!=="head"&&(p=await Ms(d,r))!==0){let A=new Request(e,{method:"POST",body:r,duplex:"half"}),N;if(u.isFormData(r)&&(N=A.headers.get("content-type"))&&d.setContentType(N),A.body){const[_,P]=Qt(p,Ve(Zt(c)));r=tn(A.body,nn,_,P)}}u.isString(h)||(h=h?"include":"omit");const E="credentials"in Request.prototype;f=new Request(e,{...w,signal:I,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:E?h:void 0});let b=await fetch(f);const T=mt&&(l==="stream"||l==="response");if(mt&&(o||T&&m)){const A={};["status","statusText","headers"].forEach(k=>{A[k]=b[k]});const N=u.toFiniteNumber(b.headers.get("content-length")),[_,P]=o&&Qt(N,Ve(Zt(o),!0))||[];b=new Response(tn(b.body,nn,_,()=>{P&&P(),m&&m()}),A)}l=l||"text";let C=await We[u.findKey(We,l)||"text"](b,t);return!T&&m&&m(),await new Promise((A,N)=>{Kn(A,N,{data:C,headers:D.from(b.headers),status:b.status,statusText:b.statusText,config:t,request:f})})}catch(E){throw m&&m(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,t,f),{cause:E.cause||E}):y.from(E,E&&E.code,t,f)}}),_t={http:Xi,xhr:Ps,fetch:xs};u.forEach(_t,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const rn=t=>`- ${t}`,Fs=t=>u.isFunction(t)||t===null||t===!1,Zn={getAdapter:t=>{t=u.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let a;if(r=n,!Fs(n)&&(r=_t[(a=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+s]=r}if(!r){const s=Object.entries(i).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(rn).join(`
`):" "+rn(s[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:_t};function ut(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ge(null,t)}function sn(t){return ut(t),t.headers=D.from(t.headers),t.data=lt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Zn.getAdapter(t.adapter||Ot.adapter)(t).then(function(r){return ut(t),r.data=lt.call(t,t.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Gn(r)||(ut(t),r&&r.response&&(r.response.data=lt.call(t,t.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const er="1.7.9",rt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{rt[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const an={};rt.transitional=function(e,n,r){function i(s,a){return"[Axios v"+er+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,o)=>{if(e===!1)throw new y(i(a," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!an[a]&&(an[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};rt.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Bs(t,e,n){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],a=e[s];if(a){const o=t[s],c=o===void 0||a(o,s,t);if(c!==!0)throw new y("option "+s+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}const xe={assertOptions:Bs,validators:rt},B=xe.validators;class ze{constructor(e){this.defaults=e,this.interceptors={request:new Xt,response:new Xt}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=se(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&xe.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),i!=null&&(u.isFunction(i)?n.paramsSerializer={serialize:i}:xe.assertOptions(i,{encode:B.function,serialize:B.function},!0)),xe.assertOptions(n,{baseUrl:B.spelling("baseURL"),withXsrfToken:B.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&u.merge(s.common,s[n.method]);s&&u.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=D.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(c=c&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let d,h=0,w;if(!c){const f=[sn.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,l),w=f.length,d=Promise.resolve(n);h<w;)d=d.then(f[h++],f[h++]);return d}w=o.length;let I=n;for(h=0;h<w;){const f=o[h++],m=o[h++];try{I=f(I)}catch(p){m.call(this,p);break}}try{d=sn.call(this,I)}catch(f){return Promise.reject(f)}for(h=0,w=l.length;h<w;)d=d.then(l[h++],l[h++]);return d}getUri(e){e=se(this.defaults,e);const n=Jn(e.baseURL,e.url);return Wn(n,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){ze.prototype[e]=function(n,r){return this.request(se(r||{},{method:e,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(e){function n(r){return function(s,a,o){return this.request(se(o||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}ze.prototype[e]=n(),ze.prototype[e+"Form"]=n(!0)});const Fe=ze;class Ct{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{r.subscribe(o),s=o}).then(i);return a.cancel=function(){r.unsubscribe(s)},a},e(function(s,a,o){r.reason||(r.reason=new ge(s,a,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ct(function(i){e=i}),cancel:e}}}const js=Ct;function qs(t){return function(n){return t.apply(null,n)}}function Hs(t){return u.isObject(t)&&t.isAxiosError===!0}const yt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yt).forEach(([t,e])=>{yt[e]=t});const Vs=yt;function tr(t){const e=new Fe(t),n=Nn(Fe.prototype.request,e);return u.extend(n,Fe.prototype,e,{allOwnKeys:!0}),u.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return tr(se(t,i))},n}const R=tr(Ot);R.Axios=Fe;R.CanceledError=ge;R.CancelToken=js;R.isCancel=Gn;R.VERSION=er;R.toFormData=et;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(e){return Promise.all(e)};R.spread=qs;R.isAxiosError=Hs;R.mergeConfig=se;R.AxiosHeaders=D;R.formToJSON=t=>$n(u.isHTMLForm(t)?new FormData(t):t);R.getAdapter=Zn.getAdapter;R.HttpStatusCode=Vs;R.default=R;const Ws=R;function nr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zs=nr,rr=new bt("auth","Firebase",nr());/**
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
 */const $e=new Kr("@firebase/auth");function $s(t,...e){$e.logLevel<=An.WARN&&$e.warn(`Auth (${ke}): ${t}`,...e)}function Be(t,...e){$e.logLevel<=An.ERROR&&$e.error(`Auth (${ke}): ${t}`,...e)}/**
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
 */function M(t,...e){throw Nt(t,...e)}function q(t,...e){return Nt(t,...e)}function ir(t,e,n){const r=Object.assign(Object.assign({},zs()),{[e]:n});return new bt("auth","Firebase",r).create(e,{appName:t.name})}function G(t){return ir(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rr.create(t,...e)}function g(t,e,...n){if(!t)throw Nt(e,...n)}function W(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Be(e),new Error(e)}function K(t,e){t||W(e)}/**
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
 */function wt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gs(){return on()==="http:"||on()==="https:"}function on(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ks(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gs()||Zr()||"connection"in navigator)?navigator.onLine:!0}function Js(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ae{constructor(e,n){this.shortDelay=e,this.longDelay=n,K(n>e,"Short delay should be less than long delay!"),this.isMobile=Jr()||Xr()}get(){return Ks()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lt(t,e){K(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ys=new Ae(3e4,6e4);function X(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Y(t,e,n,r,i={}){return ar(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Pe(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},s);return ii()||(l.referrerPolicy="no-referrer"),sr.fetch()(or(t,t.config.apiHost,n,o),l)})}async function ar(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xs),e);try{const i=new Zs(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ue(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ue(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ue(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ue(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ir(t,d,l);M(t,d)}}catch(i){if(i instanceof Ee)throw i;M(t,"network-request-failed",{message:String(i)})}}async function Oe(t,e,n,r,i={}){const s=await Y(t,e,n,r,i);return"mfaPendingCredential"in s&&M(t,"multi-factor-auth-required",{_serverResponse:s}),s}function or(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lt(t.config,i):`${t.config.apiScheme}://${i}`}function Qs(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(q(this.auth,"network-request-failed")),Ys.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ue(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=q(t,e,r);return i.customData._tokenResponse=n,i}function cn(t){return t!==void 0&&t.enterprise!==void 0}class ea{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qs(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ta(t,e){return Y(t,"GET","/v2/recaptchaConfig",X(t,e))}/**
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
 */async function na(t,e){return Y(t,"POST","/v1/accounts:delete",e)}async function cr(t,e){return Y(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ie(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ra(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=Ut(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ie(dt(i.auth_time)),issuedAtTime:Ie(dt(i.iat)),expirationTime:Ie(dt(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dt(t){return Number(t)*1e3}function Ut(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Be("JWT malformed, contained fewer than 3 sections"),null;try{const i=ni(n);return i?JSON.parse(i):(Be("Failed to decode base64 JWT payload"),null)}catch(i){return Be("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ln(t){const e=Ut(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Te(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ee&&ia(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ia({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ie(this.lastLoginAt),this.creationTime=Ie(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ge(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Te(t,cr(n,{idToken:r}));g(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lr(s.providerUserInfo):[],o=oa(t.providerData,a),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function aa(t){const e=J(t);await Ge(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oa(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lr(t){return t.map(e=>{var{providerId:n}=e,r=Tt(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ca(t,e){const n=await ar(t,{},async()=>{const r=Pe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=or(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",sr.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function la(t,e){return Y(t,"POST","/v2/accounts:revokeToken",X(t,e))}/**
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
 */class de{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ln(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=ln(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ca(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new de;return r&&(g(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(g(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(g(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new de,this.toJSON())}_performRefresh(){return W("not implemented")}}/**
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
 */function Q(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class z{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Te(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ra(this,e)}reload(){return aa(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new z(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ge(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(j(this.auth.app))return Promise.reject(G(this.auth));const e=await this.getIdToken();return await Te(this,na(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,c,l,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(a=n.photoURL)!==null&&a!==void 0?a:void 0,m=(o=n.tenantId)!==null&&o!==void 0?o:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:C,isAnonymous:A,providerData:N,stsTokenManager:_}=n;g(T&&_,e,"internal-error");const P=de.fromJSON(this.name,_);g(typeof T=="string",e,"internal-error"),Q(h,e.name),Q(w,e.name),g(typeof C=="boolean",e,"internal-error"),g(typeof A=="boolean",e,"internal-error"),Q(I,e.name),Q(f,e.name),Q(m,e.name),Q(p,e.name),Q(E,e.name),Q(b,e.name);const k=new z({uid:T,auth:e,email:w,emailVerified:C,displayName:h,isAnonymous:A,photoURL:f,phoneNumber:I,tenantId:m,stsTokenManager:P,createdAt:E,lastLoginAt:b});return N&&Array.isArray(N)&&(k.providerData=N.map(_e=>Object.assign({},_e))),p&&(k._redirectEventId=p),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new de;i.updateFromServerResponse(n);const s=new z({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ge(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];g(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new de;o.updateFromIdToken(r);const c=new z({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const un=new Map;function $(t){K(t instanceof Function,"Expected a class definition");let e=un.get(t);return e?(K(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,un.set(t,e),e)}/**
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
 */class ur{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ur.type="NONE";const dn=ur;/**
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
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class he{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=je(this.userKey,i.apiKey,s),this.fullPersistenceKey=je("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?z._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new he($(dn),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||$(dn);const a=je(r,e.config.apiKey,e.name);let o=null;for(const l of n)try{const d=await l._get(a);if(d){const h=z._fromJSON(e,d);l!==s&&(o=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new he(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new he(s,e,r))}}/**
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
 */function hn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mr(e))return"Blackberry";if(_r(e))return"Webos";if(hr(e))return"Safari";if((e.includes("chrome/")||fr(e))&&!e.includes("edge/"))return"Chrome";if(gr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dr(t=U()){return/firefox\//i.test(t)}function hr(t=U()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fr(t=U()){return/crios\//i.test(t)}function pr(t=U()){return/iemobile/i.test(t)}function gr(t=U()){return/android/i.test(t)}function mr(t=U()){return/blackberry/i.test(t)}function _r(t=U()){return/webos/i.test(t)}function Dt(t=U()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ua(t=U()){var e;return Dt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function da(){return ri()&&document.documentMode===10}function yr(t=U()){return Dt(t)||gr(t)||_r(t)||mr(t)||/windows phone/i.test(t)||pr(t)}/**
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
 */function wr(t,e=[]){let n;switch(t){case"Browser":n=hn(U());break;case"Worker":n=`${hn(U())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ke}/${r}`}/**
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
 */class ha{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fa(t,e={}){return Y(t,"GET","/v2/passwordPolicy",X(t,e))}/**
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
 */const pa=6;class ga{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:pa,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ma{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fn(this),this.idTokenSubscription=new fn(this),this.beforeStateQueue=new ha(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await he.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cr(this,{idToken:e}),r=await z._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(j(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ge(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Js()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(j(this.app))return Promise.reject(G(this));const n=e?J(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return j(this.app)?Promise.reject(G(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return j(this.app)?Promise.reject(G(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fa(this),n=new ga(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await la(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await he.create(this,[$(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$s(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ce(t){return J(t)}class fn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ei(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let it={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _a(t){it=t}function vr(t){return it.loadJS(t)}function ya(){return it.recaptchaEnterpriseScript}function wa(){return it.gapiScript}function va(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ia="recaptcha-enterprise",Ea="NO_RECAPTCHA";class ba{constructor(e){this.type=Ia,this.auth=ce(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{ta(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new ea(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;cn(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(Ea)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&cn(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ya();c.length!==0&&(c+=o),vr(c).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function pn(t,e,n,r=!1){const i=new ba(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function It(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pn(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pn(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function Ta(t,e){const n=Rn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ti(s,e!=null?e:{}))return i;M(i,"already-initialized")}return n.initialize({options:e})}function Sa(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ka(t,e,n){const r=ce(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ir(e),{host:a,port:o}=Pa(e),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ra()}function Ir(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Pa(t){const e=Ir(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gn(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gn(a)}}}function gn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ra(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return W("not implemented")}_getIdTokenResponse(e){return W("not implemented")}_linkToIdToken(e,n){return W("not implemented")}_getReauthenticationResolver(e){return W("not implemented")}}async function Aa(t,e){return Y(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Oa(t,e){return Oe(t,"POST","/v1/accounts:signInWithPassword",X(t,e))}async function Ca(t,e){return Y(t,"POST","/v1/accounts:sendOobCode",X(t,e))}async function Na(t,e){return Ca(t,e)}/**
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
 */async function La(t,e){return Oe(t,"POST","/v1/accounts:signInWithEmailLink",X(t,e))}async function Ua(t,e){return Oe(t,"POST","/v1/accounts:signInWithEmailLink",X(t,e))}/**
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
 */class Se extends Mt{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Se(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Se(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return It(e,n,"signInWithPassword",Oa);case"emailLink":return La(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return It(e,r,"signUpPassword",Aa);case"emailLink":return Ua(e,{idToken:n,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fe(t,e){return Oe(t,"POST","/v1/accounts:signInWithIdp",X(t,e))}/**
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
 */const Da="http://localhost";class ae extends Mt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):M("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tt(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ae(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return fe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fe(e,n)}buildRequest(){const e={requestUri:Da,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pe(n)}return e}}/**
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
 */function Ma(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xa(t){const e=we(ve(t)).link,n=e?we(ve(e)).deep_link_id:null,r=we(ve(t)).deep_link_id;return(r?we(ve(r)).link:null)||r||n||e||t}class xt{constructor(e){var n,r,i,s,a,o;const c=we(ve(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ma((i=c.mode)!==null&&i!==void 0?i:null);g(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=xa(e);try{return new xt(n)}catch{return null}}}/**
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
 */class me{constructor(){this.providerId=me.PROVIDER_ID}static credential(e,n){return Se._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xt.parseLink(n);return g(r,"argument-error"),Se._fromEmailAndCode(e,r.code,r.tenantId)}}me.PROVIDER_ID="password";me.EMAIL_PASSWORD_SIGN_IN_METHOD="password";me.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Z extends Ce{constructor(){super("facebook.com")}static credential(e){return ae._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.FACEBOOK_SIGN_IN_METHOD="facebook.com";Z.PROVIDER_ID="facebook.com";/**
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
 */class ee extends Ce{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ae._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ee.credential(n,r)}catch{return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com";ee.PROVIDER_ID="google.com";/**
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
 */class te extends Ce{constructor(){super("github.com")}static credential(e){return ae._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.GITHUB_SIGN_IN_METHOD="github.com";te.PROVIDER_ID="github.com";/**
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
 */class ne extends Ce{constructor(){super("twitter.com")}static credential(e,n){return ae._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ne.credential(n,r)}catch{return null}}}ne.TWITTER_SIGN_IN_METHOD="twitter.com";ne.PROVIDER_ID="twitter.com";/**
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
 */async function Fa(t,e){return Oe(t,"POST","/v1/accounts:signUp",X(t,e))}/**
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
 */class oe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await z._fromIdTokenResponse(e,r,i),a=mn(r);return new oe({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mn(r);return new oe({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ke extends Ee{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ke.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ke(e,n,r,i)}}function br(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ke._fromErrorAndOperation(t,s,e,r):s})}async function Ba(t,e,n=!1){const r=await Te(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oe._forOperation(t,"link",r)}/**
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
 */async function ja(t,e,n=!1){const{auth:r}=t;if(j(r.app))return Promise.reject(G(r));const i="reauthenticate";try{const s=await Te(t,br(r,i,e,t),n);g(s.idToken,r,"internal-error");const a=Ut(s.idToken);g(a,r,"internal-error");const{sub:o}=a;return g(t.uid===o,r,"user-mismatch"),oe._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&M(r,"user-mismatch"),s}}/**
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
 */async function Tr(t,e,n=!1){if(j(t.app))return Promise.reject(G(t));const r="signIn",i=await br(t,r,e),s=await oe._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qa(t,e){return Tr(ce(t),e)}/**
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
 */function Ha(t,e,n){var r;g(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),g(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Sr(t){const e=ce(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Va(t,e,n){if(j(t.app))return Promise.reject(G(t));const r=ce(t),a=await It(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fa).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Sr(t),c}),o=await oe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function Wa(t,e,n){return j(t.app)?Promise.reject(G(t)):qa(J(t),me.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sr(t),r})}async function za(t,e){const n=J(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ha(n.auth,i,e);const{email:s}=await Na(n.auth,i);s!==t.email&&await t.reload()}function $a(t,e,n,r){return J(t).onIdTokenChanged(e,n,r)}function Ga(t,e,n){return J(t).beforeAuthStateChanged(e,n)}function Ka(t,e,n,r){return J(t).onAuthStateChanged(e,n,r)}const Je="__sak";/**
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
 */class kr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Je,"1"),this.storage.removeItem(Je),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ja=1e3,Xa=10;class Pr extends kr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);da()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xa):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pr.type="LOCAL";const Ya=Pr;/**
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
 */class Rr extends kr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rr.type="SESSION";const Ar=Rr;/**
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
 */function Qa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class st{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new st(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await Qa(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}st.receivers=[];/**
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
 */function Ft(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Za{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Ft("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const w=h;if(w.data.eventId===l)switch(w.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(w.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function H(){return window}function eo(t){H().location.href=t}/**
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
 */function Or(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function to(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function no(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ro(){return Or()?self:null}/**
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
 */const Cr="firebaseLocalStorageDb",io=1,Xe="firebaseLocalStorage",Nr="fbase_key";class Ne{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function at(t,e){return t.transaction([Xe],e?"readwrite":"readonly").objectStore(Xe)}function so(){const t=indexedDB.deleteDatabase(Cr);return new Ne(t).toPromise()}function Et(){const t=indexedDB.open(Cr,io);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xe,{keyPath:Nr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xe)?e(r):(r.close(),await so(),e(await Et()))})})}async function _n(t,e,n){const r=at(t,!0).put({[Nr]:e,value:n});return new Ne(r).toPromise()}async function ao(t,e){const n=at(t,!1).get(e),r=await new Ne(n).toPromise();return r===void 0?null:r.value}function yn(t,e){const n=at(t,!0).delete(e);return new Ne(n).toPromise()}const oo=800,co=3;class Lr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Et(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>co)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Or()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=st._getInstance(ro()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await to(),!this.activeServiceWorker)return;this.sender=new Za(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||no()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Et();return await _n(e,Je,"1"),await yn(e,Je),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_n(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ao(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=at(i,!1).getAll();return new Ne(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lr.type="LOCAL";const lo=Lr;new Ae(3e4,6e4);/**
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
 */function uo(t,e){return e?$(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bt extends Mt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ho(t){return Tr(t.auth,new Bt(t),t.bypassAuthState)}function fo(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ja(n,new Bt(t),t.bypassAuthState)}async function po(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Ba(n,new Bt(t),t.bypassAuthState)}/**
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
 */class Ur{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ho;case"linkViaPopup":case"linkViaRedirect":return po;case"reauthViaPopup":case"reauthViaRedirect":return fo;default:M(this.auth,"internal-error")}}resolve(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const go=new Ae(2e3,1e4);class ue extends Ur{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ue.currentPopupAction&&ue.currentPopupAction.cancel(),ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){K(this.filter.length===1,"Popup operations only handle one event");const e=Ft();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(q(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,go.get())};e()}}ue.currentPopupAction=null;/**
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
 */const mo="pendingRedirect",qe=new Map;class _o extends Ur{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qe.get(this.auth._key());if(!e){try{const r=await yo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qe.set(this.auth._key(),e)}return this.bypassAuthState||qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yo(t,e){const n=Io(e),r=vo(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wo(t,e){qe.set(t._key(),e)}function vo(t){return $(t._redirectPersistence)}function Io(t){return je(mo,t.config.apiKey,t.name)}async function Eo(t,e,n=!1){if(j(t.app))return Promise.reject(G(t));const r=ce(t),i=uo(r,e),a=await new _o(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const bo=10*60*1e3;class To{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!So(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(q(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bo&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function So(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dr(t);default:return!1}}/**
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
 */async function ko(t,e={}){return Y(t,"GET","/v1/projects",e)}/**
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
 */const Po=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ro=/^https?/;async function Ao(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ko(t);for(const n of e)try{if(Oo(n))return}catch{}M(t,"unauthorized-domain")}function Oo(t){const e=wt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ro.test(n))return!1;if(Po.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Co=new Ae(3e4,6e4);function vn(){const t=H().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function No(t){return new Promise((e,n)=>{var r,i,s;function a(){vn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vn(),n(q(t,"network-request-failed"))},timeout:Co.get()})}if(!((i=(r=H().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)a();else{const o=va("iframefcb");return H()[o]=()=>{gapi.load?a():n(q(t,"network-request-failed"))},vr(`${wa()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw He=null,e})}let He=null;function Lo(t){return He=He||No(t),He}/**
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
 */const Uo=new Ae(5e3,15e3),Do="__/auth/iframe",Mo="emulator/auth/iframe",xo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bo(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lt(e,Mo):`https://${t.config.authDomain}/${Do}`,r={apiKey:e.apiKey,appName:t.name,v:ke},i=Fo.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pe(r).slice(1)}`}async function jo(t){const e=await Lo(t),n=H().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Bo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xo,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=q(t,"network-request-failed"),o=H().setTimeout(()=>{s(a)},Uo.get());function c(){H().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const qo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ho=500,Vo=600,Wo="_blank",zo="http://localhost";class In{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $o(t,e,n,r=Ho,i=Vo){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},qo),{width:r.toString(),height:i.toString(),top:s,left:a}),l=U().toLowerCase();n&&(o=fr(l)?Wo:n),dr(l)&&(e=e||zo,c.scrollbars="yes");const d=Object.entries(c).reduce((w,[I,f])=>`${w}${I}=${f},`,"");if(ua(l)&&o!=="_self")return Go(e||"",o),new In(null);const h=window.open(e||"",o,d);g(h,t,"popup-blocked");try{h.focus()}catch{}return new In(h)}function Go(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ko="__/auth/handler",Jo="emulator/auth/handler",Xo=encodeURIComponent("fac");async function En(t,e,n,r,i,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ke,eventId:i};if(e instanceof Er){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",si(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))a[d]=h}if(e instanceof Ce){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await t._getAppCheckToken(),l=c?`#${Xo}=${encodeURIComponent(c)}`:"";return`${Yo(t)}?${Pe(o).slice(1)}${l}`}function Yo({config:t}){return t.emulator?Lt(t,Jo):`https://${t.authDomain}/${Ko}`}/**
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
 */const ht="webStorageSupport";class Qo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=Eo,this._overrideRedirectResult=wo}async _openPopup(e,n,r,i){var s;K((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await En(e,n,r,wt(),i);return $o(e,a,Ft())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await En(e,n,r,wt(),i);return eo(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(K(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jo(e),r=new To(e);return n.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ht,{type:ht},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ht];a!==void 0&&n(!!a),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ao(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yr()||hr()||Dt()}}const Zo=Qo;var bn="@firebase/auth",Tn="1.7.9";/**
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
 */class ec{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nc(t){Ht(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wr(t)},l=new ma(r,i,s,c);return Sa(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Vt("auth-internal",e=>{const n=ce(e.getProvider("auth").getImmediate());return(r=>new ec(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(bn,Tn,tc(t)),Wt(bn,Tn,"esm2017")}/**
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
 */const rc=5*60,ic=Pn("authIdTokenMaxAge")||rc;let Sn=null;const sc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ic)return;const i=n==null?void 0:n.token;Sn!==i&&(Sn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ac(t=Qr()){const e=Rn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ta(t,{popupRedirectResolver:Zo,persistence:[lo,Ya,Ar]}),r=Pn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=sc(s.toString());Ga(n,a,()=>a(n.currentUser)),$a(n,o=>a(o))}}const i=Yr("auth");return i&&ka(n,`http://${i}`),n}function oc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_a({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=q("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nc("Browser");const kn=t=>{switch(t==null?void 0:t.code){case"auth/invalid-email":alert("Invalid email address. Please enter a valid email.");break;case"auth/user-not-found":alert("User not found. Please check the email address.");break;case"auth/wrong-password":alert("Incorrect password. Please try again.");break;case"auth/email-already-in-use":alert("Email already in use. Please try another email.");break;case"auth/weak-password":alert("Password should be at least 6 characters.");break;case"auth/operation-not-allowed":alert("Operation not allowed. Please try again later.");break;case"auth/invalid-verification-code":alert("Invalid verification code. Please try again.");break;case"auth/invalid-verification-id":alert("Invalid verification ID. Please try again.");break;case"auth/code-expired":alert("Code expired. Please try again.");break;case"auth/invalid-action-code":alert("Invalid action code. Please try again.");break;case"auth/user-disabled":alert("User disabled. Please contact support.");break;case"auth/invalid-credential":alert("Invalid credential. Please try again.");break;case"auth/invalid-continue-uri":alert("Invalid continue URL. Please try again.");break;case"auth/unauthorized-continue-uri":alert("Unauthorized continue URL. Please try again.");break;case"auth/missing-continue-uri":alert("Missing continue URL. Please try again.");break;case"auth/missing-verification-code":alert("Missing verification code. Please try again.");break;case"auth/missing-verification-id":alert("Missing verification ID. Please try again.");break;case"auth/captcha-check-failed":alert("Captcha check failed. Please try again.");break;case"auth/invalid-phone-number":alert("Invalid phone number. Please try again.");break;case"auth/missing-phone-number":alert("Missing phone number. Please try again.");break;case"auth/quota-exceeded":alert("Quota exceeded. Please try again.");break;case"auth/missing-app-credential":alert("Missing app credential. Please try again.");break;case"auth/invalid-app-credential":alert("Invalid app credential. Please try again.");break;case"auth/session-expired":alert("Session expired. Please try again.");break;case"auth/missing-or-invalid-nonce":alert("Missing or invalid nonce. Please try again.");break;case"auth/missing-client-identifier":alert("Missing client identifier. Please try again.");break;case"auth/key-retrieval-failed":alert("Key retrieval failed. Please try again.");break;case"auth/invalid-oauth-provider":alert("Invalid OAuth provider. Please try again.");break;case"auth/invalid-oauth-client-id":alert("Invalid OAuth client ID. Please try again.");break;case"auth/invalid-cert-hash":alert("Invalid cert hash. Please try again.");break;case"auth/invalid-user-token":alert("Invalid user token. Please try again.");break;case"auth/invalid-custom-token":alert("Invalid custom token. Please try again.");break;case"auth/app-deleted":alert("App deleted. Please try again.");break;case"auth/app-not-authorized":alert("App not authorized. Please try again.");break;case"auth/argument-error":alert("Argument error. Please try again.");break;case"auth/invalid-api-key":alert("Invalid API key. Please try again.");break;case"auth/network-request-failed":alert("Network request failed. Please try again.");break;case"auth/requires-recent-login":alert("Requires recent login. Please try again.");break;case"auth/too-many-requests":alert("Too many requests. Please try again.");break;case"auth/unauthorized-domain":alert("Unauthorized domain. Please try again.");break;case"auth/user-token-expired":alert("User token expired. Please try again.");break;case"auth/web-storage-unsupported":alert("Web storage unsupported. Please try again.");break;case"auth/account-exists-with-different-credential":alert("Account exists with different credential. Please try again.");break;case"auth/auth-domain-config-required":alert("Auth domain config required. Please try again.");break;case"auth/cancelled-popup-request":alert("Cancelled popup request. Please try again.");break;case"auth/credential-already-in-use":alert("Credential already in use. Please try again.");break;case"auth/custom-token-mismatch":alert("Custom token mismatch. Please try again.");break;case"auth/provider-already-linked":alert("Provider already linked. Please try again.");break;case"auth/timeout":alert("Timeout. Please try again.");break;case"auth/missing-android-pkg-name":alert("Missing Android package name. Please try again.");break;case"auth/missing-ios-bundle-id":alert("Missing iOS bundle ID. Please try again.");break;case"auth/invalid-dynamic-link-domain":alert("Invalid dynamic link domain. Please try again.");break;case"auth/invalid-persistence-type":alert("Invalid persistence type. Please try again.");break;case"auth/unsupported-persistence-type":alert("Unsupported persistence type. Please try again.");break;case"auth/invalid-oauth-client-secret":alert("Invalid OAuth client secret. Please try again.");break;case"auth/invalid-argument":alert("Invalid argument. Please try again.");break;case"auth/invalid-creation-time":alert("Invalid creation time. Please try again.");break;case"auth/invalid-disabled-field":alert("Invalid disabled field. Please try again.");break;case"auth/invalid-display-name":alert("Invalid display name. Please try again.");break;case"auth/invalid-email-verified":alert("Invalid email verified. Please try again.");break;case"auth/invalid-hash-algorithm":alert("Invalid hash algorithm. Please try again.");break;case"auth/invalid-hash-block-size":alert("Invalid hash block size. Please try again.");break;case"auth/invalid-hash-derived-key-length":alert("Invalid hash derived key length. Please try again.");break;case"auth/invalid-hash-key":alert("Invalid hash key. Please try again.");break;case"auth/invalid-hash-memory-cost":alert("Invalid hash memory cost. Please try again.");break;case"auth/invalid-hash-parallelization":alert("Invalid hash parallelization. Please try again.");break;case"auth/invalid-hash-rounds":alert("Invalid hash rounds. Please try again.");break;case"auth/invalid-hash-salt-separator":alert("Invalid hash salt separator. Please try again.");break;case"auth/invalid-id-token":alert("Invalid ID token. Please try again.");break;case"auth/invalid-last-sign-in-time":alert("Invalid last sign in time. Please try again.");break;case"auth/invalid-page-token":alert("Invalid page token. Please try again.");break;case"auth/invalid-password":alert("Invalid password. Please try again.");break;case"auth/invalid-password-hash":alert("Invalid password hash. Please try again.");break;case"auth/invalid-password-salt":alert("Invalid password salt. Please try again.");break;case"auth/invalid-photo-url":alert("Invalid photo URL. Please try again.");break;case"auth/invalid-provider-id":alert("Invalid provider ID. Please try again.");break;case"auth/invalid-session-cookie-duration":alert("Invalid session cookie duration. Please try again.");break;case"auth/invalid-uid":alert("Invalid UID. Please try again.");break;case"auth/invalid-user-import":alert("Invalid user import. Please try again.");break;case"auth/invalid-provider-data":alert("Invalid provider data. Please try again.");break;case"auth/maximum-user-count-exceeded":alert("Maximum user count exceeded. Please try again.");break;case"auth/missing-hash-algorithm":alert("Missing hash algorithm. Please try again.");break;case"auth/missing-uid":alert("Missing UID. Please try again.");break;case"auth/reserved-claims":alert("Reserved claims. Please try again.");break;case"auth/session-cookie-revoked":alert("Session cookie revoked. Please try again.");break;case"auth/uid-already-exists":alert("UID already exists. Please try again.");break;case"auth/email-already-exists":alert("Email already exists. Please try again.");break;case"auth/phone-number-already-exists":alert("Phone number already exists. Please try again.");break;case"auth/project-not-found":alert("Project not found. Please try again.");break;case"auth/insufficient-permission":alert("Insufficient permission. Please try again.");break;case"auth/internal-error":alert("Internal error. Please try again.");break;default:alert("Oops! Something went wrong. Please try again later.")}},cc="_container_1yheg_5",lc="_leftSide_1yheg_15",uc="_portraitLeftSide_1yheg_21",dc="_rightSide_1yheg_35",hc="_portraitRightSide_1yheg_36",fc="_loginContainer_1yheg_50",pc="_portraitLoginContainer_1yheg_51",gc="_slideIn_1yheg_1",mc="_sportsIconSection_1yheg_74",_c="_sportsIcon_1yheg_74",yc="_loginSignupText_1yheg_84",wc="_getStarted_1yheg_91",vc="_signUpImmediately_1yheg_98",Ic="_loginSignupButton_1yheg_104",Ec="_googleLoginButton_1yheg_109",bc="_emailLoginButton_1yheg_110",Tc="_portraitEmailLoginButton_1yheg_111",Sc="_portraitGoogleLoginButton_1yheg_112",kc="_loginDivider_1yheg_138",Pc="_loginOption_1yheg_146",Rc="_emailSignup_1yheg_155",Ac="_emailField_1yheg_174",Oc="_passwordField_1yheg_175",Cc="_signupText_1yheg_184",v={container:cc,leftSide:lc,portraitLeftSide:uc,rightSide:dc,portraitRightSide:hc,loginContainer:fc,portraitLoginContainer:pc,slideIn:gc,sportsIconSection:mc,sportsIcon:_c,loginSignupText:yc,getStarted:wc,signUpImmediately:vc,loginSignupButton:Ic,googleLoginButton:Ec,emailLoginButton:bc,portraitEmailLoginButton:Tc,portraitGoogleLoginButton:Sc,loginDivider:kc,loginOption:Pc,emailSignup:Rc,emailField:Ac,passwordField:Oc,signupText:Cc},Nc="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql";function zc(){const t=Vr(),e=Wr(),n=ac(),r=zr(),i={}.VITE_GOOGLE_SHEET_API,[s,a]=le.exports.useState(!1),[o,c]=le.exports.useState(!1),[l,d]=le.exports.useState(""),[h,w]=le.exports.useState(""),[I,f]=le.exports.useState(!1),m=()=>{Ka(n,_=>{if(_){const P=_.metadata.creationTime,k=_.metadata.lastSignInTime;P===k?(console.log("User is logging in for the first time"),p(_.email,_.displayName)):console.log("User has logged in before")}})},p=(_,P)=>{fetch(Nc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation createUser {
        createUser(input: {
        email: "${_}"
        name: "${P}"
        }) {
            isSuccessful
            userId
        }
        }`})}).then(k=>k.json()).then(k=>{if(k.errors)throw new Error(k.errors[0].message)}).catch(k=>{console.log(k)})},E=async _=>{Ws.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${_}`,{headers:{Authorization:`Bearer ${_}`,Accept:"application/json"}}).then(P=>{p(P.data.email,P.data.name),localStorage.setItem("userData",JSON.stringify(P.data)),b(P.data.email),r(jt(P.data)),e("/match-queues")}).catch(P=>{alert(P)})},b=_=>{_==="admin@flickmatch.in"?r(qt(!0)):(async k=>{const Mr=(await(await fetch(i)).json()).data.map(xr=>xr.EmailId).includes(k);r(qt(Mr))})(_)},T=Fr({onSuccess:_=>E(_.access_token),onError:_=>alert("Login Failed "+_)}),C=()=>{Va(n,l,h).then(_=>{za(_.user).then(()=>{alert("A verification email has been sent to your email address. Please verify your email to login.")}),f(!1),n.signOut()}).catch(_=>{_ instanceof Ee&&kn(_)})},A=()=>{Wa(n,l,h).then(_=>{const P=l.split("@")[0],k=_.user;if(k.emailVerified){const _e={email:k.email,id:k.uid,name:P};localStorage.setItem("userData",JSON.stringify(_e)),m(),r(jt(_e)),b(k.email),e("/match-queues")}else alert("Please verify your email to login.")}).catch(_=>{_ instanceof Ee&&kn(_)})},N=()=>{c(!0),a(!0)};return V(jr,{children:[S(ai,{title:"Login/Signup"}),V(F,{className:v.container,children:[S(F,{className:t?v.portraitLeftSide:v.leftSide,children:S("img",{src:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D",alt:"Football Image"})}),S(F,{className:t?v.portraitRightSide:v.rightSide,children:V(F,{className:t?v.portraitLoginContainer:v.loginContainer,children:[S(F,{className:v.sportsIconSection,children:S($r,{className:v.sportsIcon})}),V(F,{className:v.loginSignupHeader,children:[I?S(re,{className:v.loginSignupText,children:"Sign up"}):o?S(re,{className:v.loginSignupText,children:"Login"}):S(re,{className:v.loginSignupText,children:"Login / Sign up"}),S(re,{className:v.getStarted,children:"Let's get Started"}),V(re,{className:v.signUpImmediately,children:["Join our community and start your ",S("br",{}),"journey right away!"]})]}),s?V(F,{className:v.emailSignup,children:[S(zt,{id:"outlined-basic",label:"Email",variant:"outlined",onChange:_=>d(_.target.value),className:v.emailField}),S(zt,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",onChange:_=>w(_.target.value),className:v.passwordField}),I?S(Le,{variant:"outlined",className:t?v.portraitEmailLoginButton:v.emailLoginButton,onClick:()=>C(),children:"Sign up"}):S(Le,{variant:"outlined",className:t?v.portraitEmailLoginButton:v.emailLoginButton,onClick:()=>A(),children:"Sign In"}),S(F,{children:I?V(re,{style:{marginTop:10},children:["Already have an account?"," ",S("span",{onClick:()=>f(!1),className:v.signupText,children:"Sign in"})]}):V(re,{style:{marginTop:10},children:["Need an account?"," ",S("span",{onClick:()=>f(!0),className:v.signupText,children:"Sign up"})]})})]}):V(F,{className:v.loginSignupButton,children:[S(Le,{variant:"outlined",className:t?v.portraitGoogleLoginButton:v.googleLoginButton,onClick:()=>T(),startIcon:S(On,{}),children:"Log In / Sign up with Google"}),S(F,{className:v.loginDivider,children:S("span",{className:v.loginOption,children:"OR"})}),S(Le,{variant:"outlined",className:t?v.portraitGoogleLoginButton:v.googleLoginButton,onClick:()=>N(),startIcon:S(Gr,{}),children:"Log In / Sign Up with Email"})]})]})})]})]})}export{zc as default};

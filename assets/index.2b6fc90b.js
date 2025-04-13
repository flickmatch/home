import{u as jr}from"./index.esm.6f6cc80a.js";import{W as qr,a as de,A as W,F as Hr,j as S,a8 as Vt,a7 as Wt}from"./loginSlice.ea7b6bcd.js";import{r as Vr,a as Wr,u as zr,e as $r,bT as Gr,bU as Kr,B,d as Jr,T as ie,b as De,bV as Xr}from"./App.01c563b5.js";import{E as kt,p as On,L as Yr,q as Qr,s as Zr,_ as zt,C as $t,r as Gt,a as Cn,t as ei,b as ti,i as ni,S as Pe,u as q,g as X,w as ri,d as ii,j as Nn,m as U,F as be,x as si,y as ai,z as ve,A as Ie,B as Re,D as oi,G as ci}from"./index.esm.6e37327b.js";import{_ as Pt}from"./tslib.es6.39a98506.js";import{M as li}from"./Meta.794a7caf.js";import{T as Kt}from"./TextField.ffdefd11.js";import"./index.ca8b48a7.js";import"./index.module.86d27b7e.js";import"./Input.166e56d6.js";import"./Select.404616d8.js";var Rt={},ui=qr.exports;Object.defineProperty(Rt,"__esModule",{value:!0});var Ln=Rt.default=void 0;fi(de.exports);var di=ui(Vr()),hi=Wr;function Un(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Un=function(r){return r?n:e})(t)}function fi(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Un(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=i?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}Ln=Rt.default=(0,di.default)((0,hi.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");function Dn(t,e){return function(){return t.apply(e,arguments)}}const{toString:pi}=Object.prototype,{getPrototypeOf:At}=Object,Ze=(t=>e=>{const n=pi.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),F=t=>(t=t.toLowerCase(),e=>Ze(e)===t),et=t=>e=>typeof e===t,{isArray:me}=Array,Te=et("undefined");function gi(t){return t!==null&&!Te(t)&&t.constructor!==null&&!Te(t.constructor)&&L(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Mn=F("ArrayBuffer");function mi(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Mn(t.buffer),e}const _i=et("string"),L=et("function"),xn=et("number"),tt=t=>t!==null&&typeof t=="object",yi=t=>t===!0||t===!1,xe=t=>{if(Ze(t)!=="object")return!1;const e=At(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wi=F("Date"),vi=F("File"),Ii=F("Blob"),Ei=F("FileList"),bi=t=>tt(t)&&L(t.pipe),Ti=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||L(t.append)&&((e=Ze(t))==="formdata"||e==="object"&&L(t.toString)&&t.toString()==="[object FormData]"))},Si=F("URLSearchParams"),[ki,Pi,Ri,Ai]=["ReadableStream","Request","Response","Headers"].map(F),Oi=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ae(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),me(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(r=0;r<a;r++)o=s[r],e.call(null,t[o],o,t)}}function Fn(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const se=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Bn=t=>!Te(t)&&t!==se;function mt(){const{caseless:t}=Bn(this)&&this||{},e={},n=(r,i)=>{const s=t&&Fn(e,i)||i;xe(e[s])&&xe(r)?e[s]=mt(e[s],r):xe(r)?e[s]=mt({},r):me(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ae(arguments[r],n);return e}const Ci=(t,e,n,{allOwnKeys:r}={})=>(Ae(e,(i,s)=>{n&&L(i)?t[s]=Dn(i,n):t[s]=i},{allOwnKeys:r}),t),Ni=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Li=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ui=(t,e,n,r)=>{let i,s,a;const o={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],(!r||r(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&At(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Di=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Mi=t=>{if(!t)return null;if(me(t))return t;let e=t.length;if(!xn(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},xi=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&At(Uint8Array)),Fi=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Bi=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},ji=F("HTMLFormElement"),qi=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Jt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Hi=F("RegExp"),jn=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ae(n,(i,s)=>{let a;(a=e(i,s,t))!==!1&&(r[s]=a||i)}),Object.defineProperties(t,r)},Vi=t=>{jn(t,(e,n)=>{if(L(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!L(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wi=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return me(t)?r(t):r(String(t).split(e)),n},zi=()=>{},$i=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,ut="abcdefghijklmnopqrstuvwxyz",Xt="0123456789",qn={DIGIT:Xt,ALPHA:ut,ALPHA_DIGIT:ut+ut.toUpperCase()+Xt},Gi=(t=16,e=qn.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ki(t){return!!(t&&L(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ji=t=>{const e=new Array(10),n=(r,i)=>{if(tt(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=me(r)?[]:{};return Ae(r,(a,o)=>{const c=n(a,i+1);!Te(c)&&(s[o]=c)}),e[i]=void 0,s}}return r};return n(t,0)},Xi=F("AsyncFunction"),Yi=t=>t&&(tt(t)||L(t))&&L(t.then)&&L(t.catch),Hn=((t,e)=>t?setImmediate:e?((n,r)=>(se.addEventListener("message",({source:i,data:s})=>{i===se&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),se.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",L(se.postMessage)),Qi=typeof queueMicrotask<"u"?queueMicrotask.bind(se):typeof process<"u"&&process.nextTick||Hn,u={isArray:me,isArrayBuffer:Mn,isBuffer:gi,isFormData:Ti,isArrayBufferView:mi,isString:_i,isNumber:xn,isBoolean:yi,isObject:tt,isPlainObject:xe,isReadableStream:ki,isRequest:Pi,isResponse:Ri,isHeaders:Ai,isUndefined:Te,isDate:wi,isFile:vi,isBlob:Ii,isRegExp:Hi,isFunction:L,isStream:bi,isURLSearchParams:Si,isTypedArray:xi,isFileList:Ei,forEach:Ae,merge:mt,extend:Ci,trim:Oi,stripBOM:Ni,inherits:Li,toFlatObject:Ui,kindOf:Ze,kindOfTest:F,endsWith:Di,toArray:Mi,forEachEntry:Fi,matchAll:Bi,isHTMLForm:ji,hasOwnProperty:Jt,hasOwnProp:Jt,reduceDescriptors:jn,freezeMethods:Vi,toObjectSet:Wi,toCamelCase:qi,noop:zi,toFiniteNumber:$i,findKey:Fn,global:se,isContextDefined:Bn,ALPHABET:qn,generateString:Gi,isSpecCompliantForm:Ki,toJSONObject:Ji,isAsyncFn:Xi,isThenable:Yi,setImmediate:Hn,asap:Qi};function _(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}u.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.status}}});const Vn=_.prototype,Wn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Wn[t]={value:t}});Object.defineProperties(_,Wn);Object.defineProperty(Vn,"isAxiosError",{value:!0});_.from=(t,e,n,r,i,s)=>{const a=Object.create(Vn);return u.toFlatObject(t,a,function(c){return c!==Error.prototype},o=>o!=="isAxiosError"),_.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,s&&Object.assign(a,s),a};const Zi=null;function _t(t){return u.isPlainObject(t)||u.isArray(t)}function zn(t){return u.endsWith(t,"[]")?t.slice(0,-2):t}function Yt(t,e,n){return t?t.concat(e).map(function(i,s){return i=zn(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function es(t){return u.isArray(t)&&!t.some(_t)}const ts=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function nt(t,e,n){if(!u.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,p){return!u.isUndefined(p[m])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(e);if(!u.isFunction(i))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(u.isDate(f))return f.toISOString();if(!c&&u.isBlob(f))throw new _("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(f)||u.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,m,p){let I=f;if(f&&!p&&typeof f=="object"){if(u.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(u.isArray(f)&&es(f)||(u.isFileList(f)||u.endsWith(m,"[]"))&&(I=u.toArray(f)))return m=zn(m),I.forEach(function(b,C){!(u.isUndefined(b)||b===null)&&e.append(a===!0?Yt([m],C,s):a===null?m:m+"[]",l(b))}),!1}return _t(f)?!0:(e.append(Yt(p,m,s),l(f)),!1)}const h=[],y=Object.assign(ts,{defaultVisitor:d,convertValue:l,isVisitable:_t});function E(f,m){if(!u.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(f),u.forEach(f,function(I,T){(!(u.isUndefined(I)||I===null)&&i.call(e,I,u.isString(T)?T.trim():T,m,y))===!0&&E(I,m?m.concat(T):[T])}),h.pop()}}if(!u.isObject(t))throw new TypeError("data must be an object");return E(t),e}function Qt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ot(t,e){this._pairs=[],t&&nt(t,this,e)}const $n=Ot.prototype;$n.append=function(e,n){this._pairs.push([e,n])};$n.toString=function(e){const n=e?function(r){return e.call(this,r,Qt)}:Qt;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ns(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gn(t,e,n){if(!e)return t;const r=n&&n.encode||ns;u.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=u.isURLSearchParams(e)?e.toString():new Ot(e,n).toString(r),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class rs{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Zt=rs,Kn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},is=typeof URLSearchParams<"u"?URLSearchParams:Ot,ss=typeof FormData<"u"?FormData:null,as=typeof Blob<"u"?Blob:null,os={isBrowser:!0,classes:{URLSearchParams:is,FormData:ss,Blob:as},protocols:["http","https","file","blob","url","data"]},Ct=typeof window<"u"&&typeof document<"u",yt=typeof navigator=="object"&&navigator||void 0,cs=Ct&&(!yt||["ReactNative","NativeScript","NS"].indexOf(yt.product)<0),ls=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),us=Ct&&window.location.href||"http://localhost",ds=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ct,hasStandardBrowserWebWorkerEnv:ls,hasStandardBrowserEnv:cs,navigator:yt,origin:us},Symbol.toStringTag,{value:"Module"})),O={...ds,...os};function hs(t,e){return nt(t,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return O.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function fs(t){return u.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ps(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Jn(t){function e(n,r,i,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=n.length;return a=!a&&u.isArray(i)?i.length:a,c?(u.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!o):((!i[a]||!u.isObject(i[a]))&&(i[a]=[]),e(n,r,i[a],s)&&u.isArray(i[a])&&(i[a]=ps(i[a])),!o)}if(u.isFormData(t)&&u.isFunction(t.entries)){const n={};return u.forEachEntry(t,(r,i)=>{e(fs(r),i,n,0)}),n}return null}function gs(t,e,n){if(u.isString(t))try{return(e||JSON.parse)(t),u.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Nt={transitional:Kn,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=u.isObject(e);if(s&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return i?JSON.stringify(Jn(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e)||u.isReadableStream(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hs(e,this.formSerializer).toString();if((o=u.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return nt(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),gs(e)):e}],transformResponse:[function(e){const n=this.transitional||Nt.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(u.isResponse(e)||u.isReadableStream(e))return e;if(e&&u.isString(e)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?_.from(o,_.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],t=>{Nt.headers[t]={}});const Lt=Nt,ms=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_s=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||e[n]&&ms[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},en=Symbol("internals");function we(t){return t&&String(t).trim().toLowerCase()}function Fe(t){return t===!1||t==null?t:u.isArray(t)?t.map(Fe):String(t)}function ys(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ws=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function dt(t,e,n,r,i){if(u.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!u.isString(e)){if(u.isString(r))return e.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(e)}}function vs(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Is(t,e){const n=u.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,a){return this[r].call(this,e,i,s,a)},configurable:!0})})}class rt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(o,c,l){const d=we(c);if(!d)throw new Error("header name must be a non-empty string");const h=u.findKey(i,d);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=Fe(o))}const a=(o,c)=>u.forEach(o,(l,d)=>s(l,d,c));if(u.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(u.isString(e)&&(e=e.trim())&&!ws(e))a(_s(e),n);else if(u.isHeaders(e))for(const[o,c]of e.entries())s(c,o,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=we(e),e){const r=u.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return ys(i);if(u.isFunction(n))return n.call(this,i,r);if(u.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=we(e),e){const r=u.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||dt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(a){if(a=we(a),a){const o=u.findKey(r,a);o&&(!n||dt(r,r[o],o,n))&&(delete r[o],i=!0)}}return u.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||dt(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return u.forEach(this,(i,s)=>{const a=u.findKey(r,s);if(a){n[a]=Fe(i),delete n[s];return}const o=e?vs(s):String(s).trim();o!==s&&delete n[s],n[o]=Fe(i),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return u.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[en]=this[en]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=we(a);r[o]||(Is(i,a),r[o]=!0)}return u.isArray(e)?e.forEach(s):s(e),this}}rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(rt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});u.freezeMethods(rt);const M=rt;function ht(t,e){const n=this||Lt,r=e||n,i=M.from(r.headers);let s=r.data;return u.forEach(t,function(o){s=o.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Xn(t){return!!(t&&t.__CANCEL__)}function _e(t,e,n){_.call(this,t==null?"canceled":t,_.ERR_CANCELED,e,n),this.name="CanceledError"}u.inherits(_e,_,{__CANCEL__:!0});function Yn(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Es(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function bs(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),d=r[s];a||(a=l),n[i]=c,r[i]=l;let h=s,y=0;for(;h!==i;)y+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-a<e)return;const E=d&&l-d;return E?Math.round(y*1e3/E):void 0}}function Ts(t,e){let n=0,r=1e3/e,i,s;const a=(l,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,l)};return[(...l)=>{const d=Date.now(),h=d-n;h>=r?a(l,d):(i=l,s||(s=setTimeout(()=>{s=null,a(i)},r-h)))},()=>i&&a(i)]}const ze=(t,e,n=3)=>{let r=0;const i=bs(50,250);return Ts(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,c=a-r,l=i(c),d=a<=o;r=a;const h={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&d?(o-a)/l:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(h)},n)},tn=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},nn=t=>(...e)=>u.asap(()=>t(...e)),Ss=O.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,O.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,ks=O.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const a=[t+"="+encodeURIComponent(e)];u.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),u.isString(r)&&a.push("path="+r),u.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ps(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Rs(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Qn(t,e){return t&&!Ps(e)?Rs(t,e):e}const rn=t=>t instanceof M?{...t}:t;function ae(t,e){e=e||{};const n={};function r(l,d,h,y){return u.isPlainObject(l)&&u.isPlainObject(d)?u.merge.call({caseless:y},l,d):u.isPlainObject(d)?u.merge({},d):u.isArray(d)?d.slice():d}function i(l,d,h,y){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l,h,y)}else return r(l,d,h,y)}function s(l,d){if(!u.isUndefined(d))return r(void 0,d)}function a(l,d){if(u.isUndefined(d)){if(!u.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function o(l,d,h){if(h in e)return r(l,d);if(h in t)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,d,h)=>i(rn(l),rn(d),h,!0)};return u.forEach(Object.keys(Object.assign({},t,e)),function(d){const h=c[d]||i,y=h(t[d],e[d],d);u.isUndefined(y)&&h!==o||(n[d]=y)}),n}const Zn=t=>{const e=ae({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:o}=e;e.headers=a=M.from(a),e.url=Gn(Qn(e.baseURL,e.url),t.params,t.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let c;if(u.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[l,...d]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];a.setContentType([l||"multipart/form-data",...d].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&u.isFunction(r)&&(r=r(e)),r||r!==!1&&Ss(e.url))){const l=i&&s&&ks.read(s);l&&a.set(i,l)}return e},As=typeof XMLHttpRequest<"u",Os=As&&function(t){return new Promise(function(n,r){const i=Zn(t);let s=i.data;const a=M.from(i.headers).normalize();let{responseType:o,onUploadProgress:c,onDownloadProgress:l}=i,d,h,y,E,f;function m(){E&&E(),f&&f(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let p=new XMLHttpRequest;p.open(i.method.toUpperCase(),i.url,!0),p.timeout=i.timeout;function I(){if(!p)return;const b=M.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:b,config:t,request:p};Yn(function(D){n(D),m()},function(D){r(D),m()},A),p=null}"onloadend"in p?p.onloadend=I:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(I)},p.onabort=function(){!p||(r(new _("Request aborted",_.ECONNABORTED,t,p)),p=null)},p.onerror=function(){r(new _("Network Error",_.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let C=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const A=i.transitional||Kn;i.timeoutErrorMessage&&(C=i.timeoutErrorMessage),r(new _(C,A.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,t,p)),p=null},s===void 0&&a.setContentType(null),"setRequestHeader"in p&&u.forEach(a.toJSON(),function(C,A){p.setRequestHeader(A,C)}),u.isUndefined(i.withCredentials)||(p.withCredentials=!!i.withCredentials),o&&o!=="json"&&(p.responseType=i.responseType),l&&([y,f]=ze(l,!0),p.addEventListener("progress",y)),c&&p.upload&&([h,E]=ze(c),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",E)),(i.cancelToken||i.signal)&&(d=b=>{!p||(r(!b||b.type?new _e(null,t,p):b),p.abort(),p=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const T=Es(i.url);if(T&&O.protocols.indexOf(T)===-1){r(new _("Unsupported protocol "+T+":",_.ERR_BAD_REQUEST,t));return}p.send(s||null)})},Cs=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(l){if(!i){i=!0,o();const d=l instanceof Error?l:this.reason;r.abort(d instanceof _?d:new _e(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,s(new _(`timeout ${e} of ms exceeded`,_.ETIMEDOUT))},e);const o=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>u.asap(o),c}},Ns=Cs,Ls=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Us=async function*(t,e){for await(const n of Ds(t))yield*Ls(n,e)},Ds=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},sn=(t,e,n,r)=>{const i=Us(t,e);let s=0,a,o=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:d}=await i.next();if(l){o(),c.close();return}let h=d.byteLength;if(n){let y=s+=h;n(y)}c.enqueue(new Uint8Array(d))}catch(l){throw o(l),l}},cancel(c){return o(c),i.return()}},{highWaterMark:2})},it=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",er=it&&typeof ReadableStream=="function",Ms=it&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),tr=(t,...e)=>{try{return!!t(...e)}catch{return!1}},xs=er&&tr(()=>{let t=!1;const e=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),an=64*1024,wt=er&&tr(()=>u.isReadableStream(new Response("").body)),$e={stream:wt&&(t=>t.body)};it&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!$e[e]&&($e[e]=u.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new _(`Response type '${e}' is not supported`,_.ERR_NOT_SUPPORT,r)})})})(new Response);const Fs=async t=>{if(t==null)return 0;if(u.isBlob(t))return t.size;if(u.isSpecCompliantForm(t))return(await new Request(O.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(u.isArrayBufferView(t)||u.isArrayBuffer(t))return t.byteLength;if(u.isURLSearchParams(t)&&(t=t+""),u.isString(t))return(await Ms(t)).byteLength},Bs=async(t,e)=>{const n=u.toFiniteNumber(t.getContentLength());return n==null?Fs(e):n},js=it&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:a,onDownloadProgress:o,onUploadProgress:c,responseType:l,headers:d,withCredentials:h="same-origin",fetchOptions:y}=Zn(t);l=l?(l+"").toLowerCase():"text";let E=Ns([i,s&&s.toAbortSignal()],a),f;const m=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let p;try{if(c&&xs&&n!=="get"&&n!=="head"&&(p=await Bs(d,r))!==0){let A=new Request(e,{method:"POST",body:r,duplex:"half"}),N;if(u.isFormData(r)&&(N=A.headers.get("content-type"))&&d.setContentType(N),A.body){const[D,w]=tn(p,ze(nn(c)));r=sn(A.body,an,D,w)}}u.isString(h)||(h=h?"include":"omit");const I="credentials"in Request.prototype;f=new Request(e,{...y,signal:E,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:I?h:void 0});let T=await fetch(f);const b=wt&&(l==="stream"||l==="response");if(wt&&(o||b&&m)){const A={};["status","statusText","headers"].forEach(k=>{A[k]=T[k]});const N=u.toFiniteNumber(T.headers.get("content-length")),[D,w]=o&&tn(N,ze(nn(o),!0))||[];T=new Response(sn(T.body,an,D,()=>{w&&w(),m&&m()}),A)}l=l||"text";let C=await $e[u.findKey($e,l)||"text"](T,t);return!b&&m&&m(),await new Promise((A,N)=>{Yn(A,N,{data:C,headers:M.from(T.headers),status:T.status,statusText:T.statusText,config:t,request:f})})}catch(I){throw m&&m(),I&&I.name==="TypeError"&&/fetch/i.test(I.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,t,f),{cause:I.cause||I}):_.from(I,I&&I.code,t,f)}}),vt={http:Zi,xhr:Os,fetch:js};u.forEach(vt,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const on=t=>`- ${t}`,qs=t=>u.isFunction(t)||t===null||t===!1,nr={getAdapter:t=>{t=u.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let a;if(r=n,!qs(n)&&(r=vt[(a=String(n)).toLowerCase()],r===void 0))throw new _(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+s]=r}if(!r){const s=Object.entries(i).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(on).join(`
`):" "+on(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:vt};function ft(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _e(null,t)}function cn(t){return ft(t),t.headers=M.from(t.headers),t.data=ht.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),nr.getAdapter(t.adapter||Lt.adapter)(t).then(function(r){return ft(t),r.data=ht.call(t,t.transformResponse,r),r.headers=M.from(r.headers),r},function(r){return Xn(r)||(ft(t),r&&r.response&&(r.response.data=ht.call(t,t.transformResponse,r.response),r.response.headers=M.from(r.response.headers))),Promise.reject(r)})}const rr="1.7.9",st={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{st[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ln={};st.transitional=function(e,n,r){function i(s,a){return"[Axios v"+rr+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,o)=>{if(e===!1)throw new _(i(a," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!ln[a]&&(ln[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};st.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Hs(t,e,n){if(typeof t!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],a=e[s];if(a){const o=t[s],c=o===void 0||a(o,s,t);if(c!==!0)throw new _("option "+s+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}}const Be={assertOptions:Hs,validators:st},j=Be.validators;class Ge{constructor(e){this.defaults=e,this.interceptors={request:new Zt,response:new Zt}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ae(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Be.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),i!=null&&(u.isFunction(i)?n.paramsSerializer={serialize:i}:Be.assertOptions(i,{encode:j.function,serialize:j.function},!0)),Be.assertOptions(n,{baseUrl:j.spelling("baseURL"),withXsrfToken:j.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&u.merge(s.common,s[n.method]);s&&u.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=M.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(c=c&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let d,h=0,y;if(!c){const f=[cn.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,l),y=f.length,d=Promise.resolve(n);h<y;)d=d.then(f[h++],f[h++]);return d}y=o.length;let E=n;for(h=0;h<y;){const f=o[h++],m=o[h++];try{E=f(E)}catch(p){m.call(this,p);break}}try{d=cn.call(this,E)}catch(f){return Promise.reject(f)}for(h=0,y=l.length;h<y;)d=d.then(l[h++],l[h++]);return d}getUri(e){e=ae(this.defaults,e);const n=Qn(e.baseURL,e.url);return Gn(n,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){Ge.prototype[e]=function(n,r){return this.request(ae(r||{},{method:e,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(e){function n(r){return function(s,a,o){return this.request(ae(o||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Ge.prototype[e]=n(),Ge.prototype[e+"Form"]=n(!0)});const je=Ge;class Ut{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{r.subscribe(o),s=o}).then(i);return a.cancel=function(){r.unsubscribe(s)},a},e(function(s,a,o){r.reason||(r.reason=new _e(s,a,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ut(function(i){e=i}),cancel:e}}}const Vs=Ut;function Ws(t){return function(n){return t.apply(null,n)}}function zs(t){return u.isObject(t)&&t.isAxiosError===!0}const It={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(It).forEach(([t,e])=>{It[e]=t});const $s=It;function ir(t){const e=new je(t),n=Dn(je.prototype.request,e);return u.extend(n,je.prototype,e,{allOwnKeys:!0}),u.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return ir(ae(t,i))},n}const R=ir(Lt);R.Axios=je;R.CanceledError=_e;R.CancelToken=Vs;R.isCancel=Xn;R.VERSION=rr;R.toFormData=nt;R.AxiosError=_;R.Cancel=R.CanceledError;R.all=function(e){return Promise.all(e)};R.spread=Ws;R.isAxiosError=zs;R.mergeConfig=ae;R.AxiosHeaders=M;R.formToJSON=t=>Jn(u.isHTMLForm(t)?new FormData(t):t);R.getAdapter=nr.getAdapter;R.HttpStatusCode=$s;R.default=R;const Gs=R;function sr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ks=sr,ar=new kt("auth","Firebase",sr());/**
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
 */const Ke=new Yr("@firebase/auth");function Js(t,...e){Ke.logLevel<=Nn.WARN&&Ke.warn(`Auth (${Pe}): ${t}`,...e)}function qe(t,...e){Ke.logLevel<=Nn.ERROR&&Ke.error(`Auth (${Pe}): ${t}`,...e)}/**
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
 */function x(t,...e){throw Dt(t,...e)}function H(t,...e){return Dt(t,...e)}function or(t,e,n){const r=Object.assign(Object.assign({},Ks()),{[e]:n});return new kt("auth","Firebase",r).create(e,{appName:t.name})}function K(t){return or(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ar.create(t,...e)}function g(t,e,...n){if(!t)throw Dt(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qe(e),new Error(e)}function J(t,e){t||z(e)}/**
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
 */function Et(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xs(){return un()==="http:"||un()==="https:"}function un(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ys(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xs()||ni()||"connection"in navigator)?navigator.onLine:!0}function Qs(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oe{constructor(e,n){this.shortDelay=e,this.longDelay=n,J(n>e,"Short delay should be less than long delay!"),this.isMobile=Qr()||Zr()}get(){return Ys()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mt(t,e){J(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Zs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ea=new Oe(3e4,6e4);function Y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Q(t,e,n,r,i={}){return lr(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Re(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},s);return oi()||(l.referrerPolicy="no-referrer"),cr.fetch()(ur(t,t.config.apiHost,n,o),l)})}async function lr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zs),e);try{const i=new na(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Me(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Me(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Me(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Me(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw or(t,d,l);x(t,d)}}catch(i){if(i instanceof be)throw i;x(t,"network-request-failed",{message:String(i)})}}async function Ce(t,e,n,r,i={}){const s=await Q(t,e,n,r,i);return"mfaPendingCredential"in s&&x(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ur(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mt(t.config,i):`${t.config.apiScheme}://${i}`}function ta(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class na{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(H(this.auth,"network-request-failed")),ea.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Me(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=H(t,e,r);return i.customData._tokenResponse=n,i}function dn(t){return t!==void 0&&t.enterprise!==void 0}class ra{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ta(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ia(t,e){return Q(t,"GET","/v2/recaptchaConfig",Y(t,e))}/**
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
 */async function sa(t,e){return Q(t,"POST","/v1/accounts:delete",e)}async function dr(t,e){return Q(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ee(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aa(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=xt(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ee(pt(i.auth_time)),issuedAtTime:Ee(pt(i.iat)),expirationTime:Ee(pt(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pt(t){return Number(t)*1e3}function xt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qe("JWT malformed, contained fewer than 3 sections"),null;try{const i=si(n);return i?JSON.parse(i):(qe("Failed to decode base64 JWT payload"),null)}catch(i){return qe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hn(t){const e=xt(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Se(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof be&&oa(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ca{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ee(this.lastLoginAt),this.creationTime=Ee(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Je(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Se(t,dr(n,{idToken:r}));g(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hr(s.providerUserInfo):[],o=ua(t.providerData,a),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new bt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function la(t){const e=X(t);await Je(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ua(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hr(t){return t.map(e=>{var{providerId:n}=e,r=Pt(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function da(t,e){const n=await lr(t,{},async()=>{const r=Re({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=ur(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",cr.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ha(t,e){return Q(t,"POST","/v2/accounts:revokeToken",Y(t,e))}/**
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
 */class fe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=hn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await da(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new fe;return r&&(g(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(g(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(g(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fe,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
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
 */function Z(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ${constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ca(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Se(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aa(this,e)}reload(){return la(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Je(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(q(this.auth.app))return Promise.reject(K(this.auth));const e=await this.getIdToken();return await Se(this,sa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,c,l,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(a=n.photoURL)!==null&&a!==void 0?a:void 0,m=(o=n.tenantId)!==null&&o!==void 0?o:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:b,emailVerified:C,isAnonymous:A,providerData:N,stsTokenManager:D}=n;g(b&&D,e,"internal-error");const w=fe.fromJSON(this.name,D);g(typeof b=="string",e,"internal-error"),Z(h,e.name),Z(y,e.name),g(typeof C=="boolean",e,"internal-error"),g(typeof A=="boolean",e,"internal-error"),Z(E,e.name),Z(f,e.name),Z(m,e.name),Z(p,e.name),Z(I,e.name),Z(T,e.name);const k=new $({uid:b,auth:e,email:y,emailVerified:C,displayName:h,isAnonymous:A,photoURL:f,phoneNumber:E,tenantId:m,stsTokenManager:w,createdAt:I,lastLoginAt:T});return N&&Array.isArray(N)&&(k.providerData=N.map(P=>Object.assign({},P))),p&&(k._redirectEventId=p),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new fe;i.updateFromServerResponse(n);const s=new $({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Je(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];g(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new fe;o.updateFromIdToken(r);const c=new $({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const fn=new Map;function G(t){J(t instanceof Function,"Expected a class definition");let e=fn.get(t);return e?(J(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fn.set(t,e),e)}/**
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
 */class fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fr.type="NONE";const pn=fr;/**
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
 */function He(t,e,n){return`firebase:${t}:${e}:${n}`}class pe{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=He(this.userKey,i.apiKey,s),this.fullPersistenceKey=He("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pe(G(pn),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||G(pn);const a=He(r,e.config.apiKey,e.name);let o=null;for(const l of n)try{const d=await l._get(a);if(d){const h=$._fromJSON(e,d);l!==s&&(o=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new pe(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new pe(s,e,r))}}/**
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
 */function gn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_r(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wr(e))return"Blackberry";if(vr(e))return"Webos";if(gr(e))return"Safari";if((e.includes("chrome/")||mr(e))&&!e.includes("edge/"))return"Chrome";if(yr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pr(t=U()){return/firefox\//i.test(t)}function gr(t=U()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mr(t=U()){return/crios\//i.test(t)}function _r(t=U()){return/iemobile/i.test(t)}function yr(t=U()){return/android/i.test(t)}function wr(t=U()){return/blackberry/i.test(t)}function vr(t=U()){return/webos/i.test(t)}function Ft(t=U()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fa(t=U()){var e;return Ft(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pa(){return ai()&&document.documentMode===10}function Ir(t=U()){return Ft(t)||yr(t)||vr(t)||wr(t)||/windows phone/i.test(t)||_r(t)}/**
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
 */function Er(t,e=[]){let n;switch(t){case"Browser":n=gn(U());break;case"Worker":n=`${gn(U())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pe}/${r}`}/**
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
 */class ga{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ma(t,e={}){return Q(t,"GET","/v2/passwordPolicy",Y(t,e))}/**
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
 */const _a=6;class ya{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:_a,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class wa{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mn(this),this.idTokenSubscription=new mn(this),this.beforeStateQueue=new ga(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ar,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=G(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dr(this,{idToken:e}),r=await $._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(q(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Je(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(q(this.app))return Promise.reject(K(this));const n=e?X(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return q(this.app)?Promise.reject(K(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return q(this.app)?Promise.reject(K(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(G(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ma(this),n=new ya(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ha(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&G(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[G(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Er(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Js(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function le(t){return X(t)}class mn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ri(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let at={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function va(t){at=t}function br(t){return at.loadJS(t)}function Ia(){return at.recaptchaEnterpriseScript}function Ea(){return at.gapiScript}function ba(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ta="recaptcha-enterprise",Sa="NO_RECAPTCHA";class ka{constructor(e){this.type=Ta,this.auth=le(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{ia(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new ra(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;dn(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(Sa)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&dn(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ia();c.length!==0&&(c+=o),br(c).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function _n(t,e,n,r=!1){const i=new ka(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Tt(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _n(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _n(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function Pa(t,e){const n=Cn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ii(s,e!=null?e:{}))return i;x(i,"already-initialized")}return n.initialize({options:e})}function Ra(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(G);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Aa(t,e,n){const r=le(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Tr(e),{host:a,port:o}=Oa(e),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ca()}function Tr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Oa(t){const e=Tr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yn(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:yn(a)}}}function yn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ca(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,n){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}async function Na(t,e){return Q(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function La(t,e){return Ce(t,"POST","/v1/accounts:signInWithPassword",Y(t,e))}async function Ua(t,e){return Q(t,"POST","/v1/accounts:sendOobCode",Y(t,e))}async function Da(t,e){return Ua(t,e)}/**
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
 */async function Ma(t,e){return Ce(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}async function xa(t,e){return Ce(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}/**
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
 */class ke extends Bt{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ke(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ke(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tt(e,n,"signInWithPassword",La);case"emailLink":return Ma(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tt(e,r,"signUpPassword",Na);case"emailLink":return xa(e,{idToken:n,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ge(t,e){return Ce(t,"POST","/v1/accounts:signInWithIdp",Y(t,e))}/**
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
 */const Fa="http://localhost";class oe extends Bt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pt(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new oe(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ge(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ge(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ge(e,n)}buildRequest(){const e={requestUri:Fa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Re(n)}return e}}/**
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
 */function Ba(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ja(t){const e=ve(Ie(t)).link,n=e?ve(Ie(e)).deep_link_id:null,r=ve(Ie(t)).deep_link_id;return(r?ve(Ie(r)).link:null)||r||n||e||t}class jt{constructor(e){var n,r,i,s,a,o;const c=ve(Ie(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ba((i=c.mode)!==null&&i!==void 0?i:null);g(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=ja(e);try{return new jt(n)}catch{return null}}}/**
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
 */class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(e,n){return ke._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jt.parseLink(n);return g(r,"argument-error"),ke._fromEmailAndCode(e,r.code,r.tenantId)}}ye.PROVIDER_ID="password";ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ne extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ee extends Ne{constructor(){super("facebook.com")}static credential(e){return oe._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ee.credential(e.oauthAccessToken)}catch{return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";ee.PROVIDER_ID="facebook.com";/**
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
 */class te extends Ne{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oe._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return te.credential(n,r)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
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
 */class ne extends Ne{constructor(){super("github.com")}static credential(e){return oe._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com";ne.PROVIDER_ID="github.com";/**
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
 */class re extends Ne{constructor(){super("twitter.com")}static credential(e,n){return oe._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return re.credential(n,r)}catch{return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com";re.PROVIDER_ID="twitter.com";/**
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
 */async function qa(t,e){return Ce(t,"POST","/v1/accounts:signUp",Y(t,e))}/**
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
 */class ce{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $._fromIdTokenResponse(e,r,i),a=wn(r);return new ce({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wn(r);return new ce({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xe extends be{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xe.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xe(e,n,r,i)}}function kr(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xe._fromErrorAndOperation(t,s,e,r):s})}async function Ha(t,e,n=!1){const r=await Se(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ce._forOperation(t,"link",r)}/**
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
 */async function Va(t,e,n=!1){const{auth:r}=t;if(q(r.app))return Promise.reject(K(r));const i="reauthenticate";try{const s=await Se(t,kr(r,i,e,t),n);g(s.idToken,r,"internal-error");const a=xt(s.idToken);g(a,r,"internal-error");const{sub:o}=a;return g(t.uid===o,r,"user-mismatch"),ce._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&x(r,"user-mismatch"),s}}/**
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
 */async function Pr(t,e,n=!1){if(q(t.app))return Promise.reject(K(t));const r="signIn",i=await kr(t,r,e),s=await ce._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Wa(t,e){return Pr(le(t),e)}/**
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
 */function za(t,e,n){var r;g(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),g(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Rr(t){const e=le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $a(t,e,n){if(q(t.app))return Promise.reject(K(t));const r=le(t),a=await Tt(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qa).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Rr(t),c}),o=await ce._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function Ga(t,e,n){return q(t.app)?Promise.reject(K(t)):Wa(X(t),ye.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rr(t),r})}async function Ka(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&za(n.auth,i,e);const{email:s}=await Da(n.auth,i);s!==t.email&&await t.reload()}function Ja(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function Xa(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function Ya(t,e,n,r){return X(t).onAuthStateChanged(e,n,r)}const Ye="__sak";/**
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
 */class Ar{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ye,"1"),this.storage.removeItem(Ye),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qa=1e3,Za=10;class Or extends Ar{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ir(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);pa()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Za):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Or.type="LOCAL";const eo=Or;/**
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
 */class Cr extends Ar{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cr.type="SESSION";const Nr=Cr;/**
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
 */function to(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ot(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await to(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ot.receivers=[];/**
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
 */function qt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class no{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=qt("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const y=h;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(y.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function V(){return window}function ro(t){V().location.href=t}/**
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
 */function Lr(){return typeof V().WorkerGlobalScope<"u"&&typeof V().importScripts=="function"}async function io(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function so(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ao(){return Lr()?self:null}/**
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
 */const Ur="firebaseLocalStorageDb",oo=1,Qe="firebaseLocalStorage",Dr="fbase_key";class Le{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ct(t,e){return t.transaction([Qe],e?"readwrite":"readonly").objectStore(Qe)}function co(){const t=indexedDB.deleteDatabase(Ur);return new Le(t).toPromise()}function St(){const t=indexedDB.open(Ur,oo);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qe,{keyPath:Dr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qe)?e(r):(r.close(),await co(),e(await St()))})})}async function vn(t,e,n){const r=ct(t,!0).put({[Dr]:e,value:n});return new Le(r).toPromise()}async function lo(t,e){const n=ct(t,!1).get(e),r=await new Le(n).toPromise();return r===void 0?null:r.value}function In(t,e){const n=ct(t,!0).delete(e);return new Le(n).toPromise()}const uo=800,ho=3;class Mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await St(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ho)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ot._getInstance(ao()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await io(),!this.activeServiceWorker)return;this.sender=new no(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||so()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await St();return await vn(e,Ye,"1"),await In(e,Ye),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lo(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>In(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ct(i,!1).getAll();return new Le(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mr.type="LOCAL";const fo=Mr;new Oe(3e4,6e4);/**
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
 */function po(t,e){return e?G(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ht extends Bt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ge(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function go(t){return Pr(t.auth,new Ht(t),t.bypassAuthState)}function mo(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Va(n,new Ht(t),t.bypassAuthState)}async function _o(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Ha(n,new Ht(t),t.bypassAuthState)}/**
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
 */class xr{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return go;case"linkViaPopup":case"linkViaRedirect":return _o;case"reauthViaPopup":case"reauthViaRedirect":return mo;default:x(this.auth,"internal-error")}}resolve(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yo=new Oe(2e3,1e4);class he extends xr{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,he.currentPopupAction&&he.currentPopupAction.cancel(),he.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){J(this.filter.length===1,"Popup operations only handle one event");const e=qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(H(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,he.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yo.get())};e()}}he.currentPopupAction=null;/**
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
 */const wo="pendingRedirect",Ve=new Map;class vo extends xr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ve.get(this.auth._key());if(!e){try{const r=await Io(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ve.set(this.auth._key(),e)}return this.bypassAuthState||Ve.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Io(t,e){const n=To(e),r=bo(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Eo(t,e){Ve.set(t._key(),e)}function bo(t){return G(t._redirectPersistence)}function To(t){return He(wo,t.config.apiKey,t.name)}async function So(t,e,n=!1){if(q(t.app))return Promise.reject(K(t));const r=le(t),i=po(r,e),a=await new vo(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ko=10*60*1e3;class Po{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ro(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(H(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ko&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ro(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fr(t);default:return!1}}/**
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
 */async function Ao(t,e={}){return Q(t,"GET","/v1/projects",e)}/**
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
 */const Oo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Co=/^https?/;async function No(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ao(t);for(const n of e)try{if(Lo(n))return}catch{}x(t,"unauthorized-domain")}function Lo(t){const e=Et(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Co.test(n))return!1;if(Oo.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Uo=new Oe(3e4,6e4);function bn(){const t=V().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Do(t){return new Promise((e,n)=>{var r,i,s;function a(){bn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bn(),n(H(t,"network-request-failed"))},timeout:Uo.get()})}if(!((i=(r=V().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=V().gapi)===null||s===void 0)&&s.load)a();else{const o=ba("iframefcb");return V()[o]=()=>{gapi.load?a():n(H(t,"network-request-failed"))},br(`${Ea()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw We=null,e})}let We=null;function Mo(t){return We=We||Do(t),We}/**
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
 */const xo=new Oe(5e3,15e3),Fo="__/auth/iframe",Bo="emulator/auth/iframe",jo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ho(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mt(e,Bo):`https://${t.config.authDomain}/${Fo}`,r={apiKey:e.apiKey,appName:t.name,v:Pe},i=qo.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Re(r).slice(1)}`}async function Vo(t){const e=await Mo(t),n=V().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Ho(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jo,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=H(t,"network-request-failed"),o=V().setTimeout(()=>{s(a)},xo.get());function c(){V().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const Wo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zo=500,$o=600,Go="_blank",Ko="http://localhost";class Tn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jo(t,e,n,r=zo,i=$o){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Wo),{width:r.toString(),height:i.toString(),top:s,left:a}),l=U().toLowerCase();n&&(o=mr(l)?Go:n),pr(l)&&(e=e||Ko,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[E,f])=>`${y}${E}=${f},`,"");if(fa(l)&&o!=="_self")return Xo(e||"",o),new Tn(null);const h=window.open(e||"",o,d);g(h,t,"popup-blocked");try{h.focus()}catch{}return new Tn(h)}function Xo(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yo="__/auth/handler",Qo="emulator/auth/handler",Zo=encodeURIComponent("fac");async function Sn(t,e,n,r,i,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pe,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ci(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))a[d]=h}if(e instanceof Ne){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await t._getAppCheckToken(),l=c?`#${Zo}=${encodeURIComponent(c)}`:"";return`${ec(t)}?${Re(o).slice(1)}${l}`}function ec({config:t}){return t.emulator?Mt(t,Qo):`https://${t.authDomain}/${Yo}`}/**
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
 */const gt="webStorageSupport";class tc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nr,this._completeRedirectFn=So,this._overrideRedirectResult=Eo}async _openPopup(e,n,r,i){var s;J((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Sn(e,n,r,Et(),i);return Jo(e,a,qt())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sn(e,n,r,Et(),i);return ro(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(J(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vo(e),r=new Po(e);return n.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gt,{type:gt},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gt];a!==void 0&&n(!!a),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=No(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ir()||gr()||Ft()}}const nc=tc;var kn="@firebase/auth",Pn="1.7.9";/**
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
 */class rc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ic(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sc(t){zt(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Er(t)},l=new wa(r,i,s,c);return Ra(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new $t("auth-internal",e=>{const n=le(e.getProvider("auth").getImmediate());return(r=>new rc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(kn,Pn,ic(t)),Gt(kn,Pn,"esm2017")}/**
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
 */const ac=5*60,oc=On("authIdTokenMaxAge")||ac;let Rn=null;const cc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oc)return;const i=n==null?void 0:n.token;Rn!==i&&(Rn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lc(t=ti()){const e=Cn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pa(t,{popupRedirectResolver:nc,persistence:[fo,eo,Nr]}),r=On("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=cc(s.toString());Xa(n,a,()=>a(n.currentUser)),Ja(n,o=>a(o))}}const i=ei("auth");return i&&Aa(n,`http://${i}`),n}function uc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}va({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=H("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sc("Browser");const An=t=>{switch(t==null?void 0:t.code){case"auth/invalid-email":alert("Invalid email address. Please enter a valid email.");break;case"auth/user-not-found":alert("User not found. Please check the email address.");break;case"auth/wrong-password":alert("Incorrect password. Please try again.");break;case"auth/email-already-in-use":alert("Email already in use. Please try another email.");break;case"auth/weak-password":alert("Password should be at least 6 characters.");break;case"auth/operation-not-allowed":alert("Operation not allowed. Please try again later.");break;case"auth/invalid-verification-code":alert("Invalid verification code. Please try again.");break;case"auth/invalid-verification-id":alert("Invalid verification ID. Please try again.");break;case"auth/code-expired":alert("Code expired. Please try again.");break;case"auth/invalid-action-code":alert("Invalid action code. Please try again.");break;case"auth/user-disabled":alert("User disabled. Please contact support.");break;case"auth/invalid-credential":alert("Invalid credential. Please try again.");break;case"auth/invalid-continue-uri":alert("Invalid continue URL. Please try again.");break;case"auth/unauthorized-continue-uri":alert("Unauthorized continue URL. Please try again.");break;case"auth/missing-continue-uri":alert("Missing continue URL. Please try again.");break;case"auth/missing-verification-code":alert("Missing verification code. Please try again.");break;case"auth/missing-verification-id":alert("Missing verification ID. Please try again.");break;case"auth/captcha-check-failed":alert("Captcha check failed. Please try again.");break;case"auth/invalid-phone-number":alert("Invalid phone number. Please try again.");break;case"auth/missing-phone-number":alert("Missing phone number. Please try again.");break;case"auth/quota-exceeded":alert("Quota exceeded. Please try again.");break;case"auth/missing-app-credential":alert("Missing app credential. Please try again.");break;case"auth/invalid-app-credential":alert("Invalid app credential. Please try again.");break;case"auth/session-expired":alert("Session expired. Please try again.");break;case"auth/missing-or-invalid-nonce":alert("Missing or invalid nonce. Please try again.");break;case"auth/missing-client-identifier":alert("Missing client identifier. Please try again.");break;case"auth/key-retrieval-failed":alert("Key retrieval failed. Please try again.");break;case"auth/invalid-oauth-provider":alert("Invalid OAuth provider. Please try again.");break;case"auth/invalid-oauth-client-id":alert("Invalid OAuth client ID. Please try again.");break;case"auth/invalid-cert-hash":alert("Invalid cert hash. Please try again.");break;case"auth/invalid-user-token":alert("Invalid user token. Please try again.");break;case"auth/invalid-custom-token":alert("Invalid custom token. Please try again.");break;case"auth/app-deleted":alert("App deleted. Please try again.");break;case"auth/app-not-authorized":alert("App not authorized. Please try again.");break;case"auth/argument-error":alert("Argument error. Please try again.");break;case"auth/invalid-api-key":alert("Invalid API key. Please try again.");break;case"auth/network-request-failed":alert("Network request failed. Please try again.");break;case"auth/requires-recent-login":alert("Requires recent login. Please try again.");break;case"auth/too-many-requests":alert("Too many requests. Please try again.");break;case"auth/unauthorized-domain":alert("Unauthorized domain. Please try again.");break;case"auth/user-token-expired":alert("User token expired. Please try again.");break;case"auth/web-storage-unsupported":alert("Web storage unsupported. Please try again.");break;case"auth/account-exists-with-different-credential":alert("Account exists with different credential. Please try again.");break;case"auth/auth-domain-config-required":alert("Auth domain config required. Please try again.");break;case"auth/cancelled-popup-request":alert("Cancelled popup request. Please try again.");break;case"auth/credential-already-in-use":alert("Credential already in use. Please try again.");break;case"auth/custom-token-mismatch":alert("Custom token mismatch. Please try again.");break;case"auth/provider-already-linked":alert("Provider already linked. Please try again.");break;case"auth/timeout":alert("Timeout. Please try again.");break;case"auth/missing-android-pkg-name":alert("Missing Android package name. Please try again.");break;case"auth/missing-ios-bundle-id":alert("Missing iOS bundle ID. Please try again.");break;case"auth/invalid-dynamic-link-domain":alert("Invalid dynamic link domain. Please try again.");break;case"auth/invalid-persistence-type":alert("Invalid persistence type. Please try again.");break;case"auth/unsupported-persistence-type":alert("Unsupported persistence type. Please try again.");break;case"auth/invalid-oauth-client-secret":alert("Invalid OAuth client secret. Please try again.");break;case"auth/invalid-argument":alert("Invalid argument. Please try again.");break;case"auth/invalid-creation-time":alert("Invalid creation time. Please try again.");break;case"auth/invalid-disabled-field":alert("Invalid disabled field. Please try again.");break;case"auth/invalid-display-name":alert("Invalid display name. Please try again.");break;case"auth/invalid-email-verified":alert("Invalid email verified. Please try again.");break;case"auth/invalid-hash-algorithm":alert("Invalid hash algorithm. Please try again.");break;case"auth/invalid-hash-block-size":alert("Invalid hash block size. Please try again.");break;case"auth/invalid-hash-derived-key-length":alert("Invalid hash derived key length. Please try again.");break;case"auth/invalid-hash-key":alert("Invalid hash key. Please try again.");break;case"auth/invalid-hash-memory-cost":alert("Invalid hash memory cost. Please try again.");break;case"auth/invalid-hash-parallelization":alert("Invalid hash parallelization. Please try again.");break;case"auth/invalid-hash-rounds":alert("Invalid hash rounds. Please try again.");break;case"auth/invalid-hash-salt-separator":alert("Invalid hash salt separator. Please try again.");break;case"auth/invalid-id-token":alert("Invalid ID token. Please try again.");break;case"auth/invalid-last-sign-in-time":alert("Invalid last sign in time. Please try again.");break;case"auth/invalid-page-token":alert("Invalid page token. Please try again.");break;case"auth/invalid-password":alert("Invalid password. Please try again.");break;case"auth/invalid-password-hash":alert("Invalid password hash. Please try again.");break;case"auth/invalid-password-salt":alert("Invalid password salt. Please try again.");break;case"auth/invalid-photo-url":alert("Invalid photo URL. Please try again.");break;case"auth/invalid-provider-id":alert("Invalid provider ID. Please try again.");break;case"auth/invalid-session-cookie-duration":alert("Invalid session cookie duration. Please try again.");break;case"auth/invalid-uid":alert("Invalid UID. Please try again.");break;case"auth/invalid-user-import":alert("Invalid user import. Please try again.");break;case"auth/invalid-provider-data":alert("Invalid provider data. Please try again.");break;case"auth/maximum-user-count-exceeded":alert("Maximum user count exceeded. Please try again.");break;case"auth/missing-hash-algorithm":alert("Missing hash algorithm. Please try again.");break;case"auth/missing-uid":alert("Missing UID. Please try again.");break;case"auth/reserved-claims":alert("Reserved claims. Please try again.");break;case"auth/session-cookie-revoked":alert("Session cookie revoked. Please try again.");break;case"auth/uid-already-exists":alert("UID already exists. Please try again.");break;case"auth/email-already-exists":alert("Email already exists. Please try again.");break;case"auth/phone-number-already-exists":alert("Phone number already exists. Please try again.");break;case"auth/project-not-found":alert("Project not found. Please try again.");break;case"auth/insufficient-permission":alert("Insufficient permission. Please try again.");break;case"auth/internal-error":alert("Internal error. Please try again.");break;default:alert("Oops! Something went wrong. Please try again later.")}},dc="_container_1yheg_5",hc="_leftSide_1yheg_15",fc="_portraitLeftSide_1yheg_21",pc="_rightSide_1yheg_35",gc="_portraitRightSide_1yheg_36",mc="_loginContainer_1yheg_50",_c="_portraitLoginContainer_1yheg_51",yc="_slideIn_1yheg_1",wc="_sportsIconSection_1yheg_74",vc="_sportsIcon_1yheg_74",Ic="_loginSignupText_1yheg_84",Ec="_getStarted_1yheg_91",bc="_signUpImmediately_1yheg_98",Tc="_loginSignupButton_1yheg_104",Sc="_googleLoginButton_1yheg_109",kc="_emailLoginButton_1yheg_110",Pc="_portraitEmailLoginButton_1yheg_111",Rc="_portraitGoogleLoginButton_1yheg_112",Ac="_loginDivider_1yheg_138",Oc="_loginOption_1yheg_146",Cc="_emailSignup_1yheg_155",Nc="_emailField_1yheg_174",Lc="_passwordField_1yheg_175",Uc="_signupText_1yheg_184",v={container:dc,leftSide:hc,portraitLeftSide:fc,rightSide:pc,portraitRightSide:gc,loginContainer:mc,portraitLoginContainer:_c,slideIn:yc,sportsIconSection:wc,sportsIcon:vc,loginSignupText:Ic,getStarted:Ec,signUpImmediately:bc,loginSignupButton:Tc,googleLoginButton:Sc,emailLoginButton:kc,portraitEmailLoginButton:Pc,portraitGoogleLoginButton:Rc,loginDivider:Ac,loginOption:Oc,emailSignup:Cc,emailField:Nc,passwordField:Lc,signupText:Uc},Dc={}.VITE_API_URL;function Gc(){const t=zr(),e=$r(),n=Gr(),r=lc(),i=Kr(),s={}.VITE_GOOGLE_SHEET_API,[a,o]=de.exports.useState(!1),[c,l]=de.exports.useState(!1),[d,h]=de.exports.useState(""),[y,E]=de.exports.useState(""),[f,m]=de.exports.useState(!1),p=()=>{Ya(r,w=>{if(w){const k=w.metadata.creationTime,P=w.metadata.lastSignInTime;k===P?(console.log("User is logging in for the first time"),I(w.email,w.displayName)):console.log("User has logged in before")}})},I=(w,k)=>{fetch(Dc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation createUser {
        createUser(input: {
        email: "${w}"
        name: "${k}"
        }) {
            isSuccessful
            userId
        }
        }`})}).then(P=>P.json()).then(P=>{if(P.errors)throw new Error(P.errors[0].message)}).catch(P=>{console.log(P)})},T=async w=>{Gs.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${w}`,{headers:{Authorization:`Bearer ${w}`,Accept:"application/json"}}).then(k=>{var P,ue;I(k.data.email,k.data.name),localStorage.setItem("userData",JSON.stringify(k.data)),b(k.data.email),i(Vt(k.data)),(ue=(P=n.state)==null?void 0:P.from)!=null&&ue.includes("/event/")?e(n.state.from):e("/match-queues")}).catch(k=>{alert(k)})},b=w=>{w==="admin@flickmatch.in"?i(Wt(!0)):(async P=>{const Ue=(await(await fetch(s)).json()).data.map(Br=>Br.EmailId).includes(P);i(Wt(Ue))})(w)},C=jr({onSuccess:w=>T(w.access_token),onError:w=>alert("Login Failed "+w)}),A=()=>{$a(r,d,y).then(w=>{Ka(w.user).then(()=>{alert("A verification email has been sent to your email address. Please verify your email to login.")}),m(!1),r.signOut()}).catch(w=>{w instanceof be&&An(w)})},N=()=>{Ga(r,d,y).then(w=>{var ue,lt;const k=d.split("@")[0],P=w.user;if(P.emailVerified){const Ue={email:P.email,id:P.uid,name:k};localStorage.setItem("userData",JSON.stringify(Ue)),p(),i(Vt(Ue)),b(P.email),(lt=(ue=n.state)==null?void 0:ue.from)!=null&&lt.includes("/event/")?e(n.state.from):e("/match-queues")}else alert("Please verify your email to login.")}).catch(w=>{w instanceof be&&An(w)})},D=()=>{l(!0),o(!0)};return W(Hr,{children:[S(li,{title:"Login/Signup"}),W(B,{className:v.container,children:[S(B,{className:t?v.portraitLeftSide:v.leftSide,children:S("img",{src:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D",alt:"Football Image"})}),S(B,{className:t?v.portraitRightSide:v.rightSide,children:W(B,{className:t?v.portraitLoginContainer:v.loginContainer,children:[S(B,{className:v.sportsIconSection,children:S(Jr,{className:v.sportsIcon})}),W(B,{className:v.loginSignupHeader,children:[f?S(ie,{className:v.loginSignupText,children:"Sign up"}):c?S(ie,{className:v.loginSignupText,children:"Login"}):S(ie,{className:v.loginSignupText,children:"Login / Sign up"}),S(ie,{className:v.getStarted,children:"Let's get Started"}),W(ie,{className:v.signUpImmediately,children:["Join our community and start your ",S("br",{}),"journey right away!"]})]}),a?W(B,{className:v.emailSignup,children:[S(Kt,{id:"outlined-basic",label:"Email",variant:"outlined",onChange:w=>h(w.target.value),className:v.emailField}),S(Kt,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",onChange:w=>E(w.target.value),className:v.passwordField}),f?S(De,{variant:"outlined",className:t?v.portraitEmailLoginButton:v.emailLoginButton,onClick:()=>A(),children:"Sign up"}):S(De,{variant:"outlined",className:t?v.portraitEmailLoginButton:v.emailLoginButton,onClick:()=>N(),children:"Sign In"}),S(B,{children:f?W(ie,{style:{marginTop:10},children:["Already have an account?"," ",S("span",{onClick:()=>m(!1),className:v.signupText,children:"Sign in"})]}):W(ie,{style:{marginTop:10},children:["Need an account?"," ",S("span",{onClick:()=>m(!0),className:v.signupText,children:"Sign up"})]})})]}):W(B,{className:v.loginSignupButton,children:[S(De,{variant:"outlined",className:t?v.portraitGoogleLoginButton:v.googleLoginButton,onClick:()=>C(),startIcon:S(Ln,{}),children:"Log In / Sign up with Google"}),S(B,{className:v.loginDivider,children:S("span",{className:v.loginOption,children:"OR"})}),S(De,{variant:"outlined",className:t?v.portraitGoogleLoginButton:v.googleLoginButton,onClick:()=>D(),startIcon:S(Xr,{}),children:"Log In / Sign Up with Email"})]})]})})]})]})}export{Gc as default};

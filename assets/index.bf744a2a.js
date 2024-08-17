import{u as Sr}from"./index.esm.e197a5e8.js";import{a as se,K as F,M as kr,j as I,Y as Ut,X as Dt}from"./loginSlice.25a195ef.js";import{r as Pr,i as Rr,a as Ar,u as Or,bv as Cr,by as Nr,B as N,d as Lr,T as ee,b as Ne,bz as Ur}from"./App.44688e65.js";import{E as _t,p as yn,L as Dr,q as Mr,s as xr,_ as Mt,C as xt,r as Ft,a as wn,t as Fr,b as jr,i as Br,S as Te,u as L,g as z,w as Hr,d as Vr,j as vn,m as A,F as we,x as qr,y as Wr,z as ge,A as _e,B as be,D as zr}from"./index.esm.4a4e9a53.js";import{_ as yt}from"./tslib.es6.5e9bfff6.js";import{M as $r}from"./Meta.6458ccc6.js";import{T as jt}from"./TextField.b275fbc0.js";import"./index.7676edc5.js";import"./index.module.51bb9f99.js";import"./Input.ebacff1e.js";var wt={},Gr=Rr.exports;Object.defineProperty(wt,"__esModule",{value:!0});var In=wt.default=void 0;Yr(se.exports);var Kr=Gr(Pr()),Jr=Ar;function En(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(En=function(r){return r?n:e})(t)}function Yr(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=En(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=i?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}var Xr=(0,Kr.default)((0,Jr.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");In=wt.default=Xr;function Tn(t,e){return function(){return t.apply(e,arguments)}}const{toString:Qr}=Object.prototype,{getPrototypeOf:vt}=Object,Ge=(t=>e=>{const n=Qr.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=t=>(t=t.toLowerCase(),e=>Ge(e)===t),Ke=t=>e=>typeof e===t,{isArray:de}=Array,ve=Ke("undefined");function Zr(t){return t!==null&&!ve(t)&&t.constructor!==null&&!ve(t.constructor)&&O(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const bn=x("ArrayBuffer");function ei(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&bn(t.buffer),e}const ti=Ke("string"),O=Ke("function"),Sn=Ke("number"),Je=t=>t!==null&&typeof t=="object",ni=t=>t===!0||t===!1,Ue=t=>{if(Ge(t)!=="object")return!1;const e=vt(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ri=x("Date"),ii=x("File"),si=x("Blob"),ai=x("FileList"),oi=t=>Je(t)&&O(t.pipe),ci=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||O(t.append)&&((e=Ge(t))==="formdata"||e==="object"&&O(t.toString)&&t.toString()==="[object FormData]"))},li=x("URLSearchParams"),ui=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Se(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),de(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(r=0;r<a;r++)o=s[r],e.call(null,t[o],o,t)}}function kn(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Pn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Rn=t=>!ve(t)&&t!==Pn;function ct(){const{caseless:t}=Rn(this)&&this||{},e={},n=(r,i)=>{const s=t&&kn(e,i)||i;Ue(e[s])&&Ue(r)?e[s]=ct(e[s],r):Ue(r)?e[s]=ct({},r):de(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Se(arguments[r],n);return e}const di=(t,e,n,{allOwnKeys:r}={})=>(Se(e,(i,s)=>{n&&O(i)?t[s]=Tn(i,n):t[s]=i},{allOwnKeys:r}),t),hi=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fi=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},pi=(t,e,n,r)=>{let i,s,a;const o={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],(!r||r(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&vt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},mi=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},gi=t=>{if(!t)return null;if(de(t))return t;let e=t.length;if(!Sn(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},_i=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&vt(Uint8Array)),yi=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},wi=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},vi=x("HTMLFormElement"),Ii=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Bt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ei=x("RegExp"),An=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Se(n,(i,s)=>{let a;(a=e(i,s,t))!==!1&&(r[s]=a||i)}),Object.defineProperties(t,r)},Ti=t=>{An(t,(e,n)=>{if(O(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!O(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bi=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return de(t)?r(t):r(String(t).split(e)),n},Si=()=>{},ki=(t,e)=>(t=+t,Number.isFinite(t)?t:e),nt="abcdefghijklmnopqrstuvwxyz",Ht="0123456789",On={DIGIT:Ht,ALPHA:nt,ALPHA_DIGIT:nt+nt.toUpperCase()+Ht},Pi=(t=16,e=On.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ri(t){return!!(t&&O(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ai=t=>{const e=new Array(10),n=(r,i)=>{if(Je(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=de(r)?[]:{};return Se(r,(a,o)=>{const c=n(a,i+1);!ve(c)&&(s[o]=c)}),e[i]=void 0,s}}return r};return n(t,0)},Oi=x("AsyncFunction"),Ci=t=>t&&(Je(t)||O(t))&&O(t.then)&&O(t.catch),l={isArray:de,isArrayBuffer:bn,isBuffer:Zr,isFormData:ci,isArrayBufferView:ei,isString:ti,isNumber:Sn,isBoolean:ni,isObject:Je,isPlainObject:Ue,isUndefined:ve,isDate:ri,isFile:ii,isBlob:si,isRegExp:Ei,isFunction:O,isStream:oi,isURLSearchParams:li,isTypedArray:_i,isFileList:ai,forEach:Se,merge:ct,extend:di,trim:ui,stripBOM:hi,inherits:fi,toFlatObject:pi,kindOf:Ge,kindOfTest:x,endsWith:mi,toArray:gi,forEachEntry:yi,matchAll:wi,isHTMLForm:vi,hasOwnProperty:Bt,hasOwnProp:Bt,reduceDescriptors:An,freezeMethods:Ti,toObjectSet:bi,toCamelCase:Ii,noop:Si,toFiniteNumber:ki,findKey:kn,global:Pn,isContextDefined:Rn,ALPHABET:On,generateString:Pi,isSpecCompliantForm:Ri,toJSONObject:Ai,isAsyncFn:Oi,isThenable:Ci};function _(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}l.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Cn=_.prototype,Nn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Nn[t]={value:t}});Object.defineProperties(_,Nn);Object.defineProperty(Cn,"isAxiosError",{value:!0});_.from=(t,e,n,r,i,s)=>{const a=Object.create(Cn);return l.toFlatObject(t,a,function(c){return c!==Error.prototype},o=>o!=="isAxiosError"),_.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,s&&Object.assign(a,s),a};const Ni=null;function lt(t){return l.isPlainObject(t)||l.isArray(t)}function Ln(t){return l.endsWith(t,"[]")?t.slice(0,-2):t}function Vt(t,e,n){return t?t.concat(e).map(function(i,s){return i=Ln(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Li(t){return l.isArray(t)&&!t.some(lt)}const Ui=l.toFlatObject(l,{},null,function(e){return/^is[A-Z]/.test(e)});function Ye(t,e,n){if(!l.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=l.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,v){return!l.isUndefined(v[p])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(e);if(!l.isFunction(i))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(l.isDate(f))return f.toISOString();if(!c&&l.isBlob(f))throw new _("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(f)||l.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function h(f,p,v){let T=f;if(f&&!v&&typeof f=="object"){if(l.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(l.isArray(f)&&Li(f)||(l.isFileList(f)||l.endsWith(p,"[]"))&&(T=l.toArray(f)))return p=Ln(p),T.forEach(function(R,ie){!(l.isUndefined(R)||R===null)&&e.append(a===!0?Vt([p],ie,s):a===null?p:p+"[]",d(R))}),!1}return lt(f)?!0:(e.append(Vt(v,p,s),d(f)),!1)}const u=[],w=Object.assign(Ui,{defaultVisitor:h,convertValue:d,isVisitable:lt});function E(f,p){if(!l.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));u.push(f),l.forEach(f,function(T,P){(!(l.isUndefined(T)||T===null)&&i.call(e,T,l.isString(P)?P.trim():P,p,w))===!0&&E(T,p?p.concat(P):[P])}),u.pop()}}if(!l.isObject(t))throw new TypeError("data must be an object");return E(t),e}function qt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function It(t,e){this._pairs=[],t&&Ye(t,this,e)}const Un=It.prototype;Un.append=function(e,n){this._pairs.push([e,n])};Un.toString=function(e){const n=e?function(r){return e.call(this,r,qt)}:qt;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Di(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Dn(t,e,n){if(!e)return t;const r=n&&n.encode||Di,i=n&&n.serialize;let s;if(i?s=i(e,n):s=l.isURLSearchParams(e)?e.toString():new It(e,n).toString(r),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Mi{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){l.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Wt=Mi,Mn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xi=typeof URLSearchParams<"u"?URLSearchParams:It,Fi=typeof FormData<"u"?FormData:null,ji=typeof Blob<"u"?Blob:null,Bi={isBrowser:!0,classes:{URLSearchParams:xi,FormData:Fi,Blob:ji},protocols:["http","https","file","blob","url","data"]},xn=typeof window<"u"&&typeof document<"u",Hi=(t=>xn&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Vi=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),qi=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xn,hasStandardBrowserWebWorkerEnv:Vi,hasStandardBrowserEnv:Hi},Symbol.toStringTag,{value:"Module"})),U={...qi,...Bi};function Wi(t,e){return Ye(t,new U.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return U.isNode&&l.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function zi(t){return l.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $i(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Fn(t){function e(n,r,i,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=n.length;return a=!a&&l.isArray(i)?i.length:a,c?(l.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!o):((!i[a]||!l.isObject(i[a]))&&(i[a]=[]),e(n,r,i[a],s)&&l.isArray(i[a])&&(i[a]=$i(i[a])),!o)}if(l.isFormData(t)&&l.isFunction(t.entries)){const n={};return l.forEachEntry(t,(r,i)=>{e(zi(r),i,n,0)}),n}return null}function Gi(t,e,n){if(l.isString(t))try{return(e||JSON.parse)(t),l.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Et={transitional:Mn,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=l.isObject(e);if(s&&l.isHTMLForm(e)&&(e=new FormData(e)),l.isFormData(e))return i?JSON.stringify(Fn(e)):e;if(l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e))return e;if(l.isArrayBufferView(e))return e.buffer;if(l.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Wi(e,this.formSerializer).toString();if((o=l.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ye(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Gi(e)):e}],transformResponse:[function(e){const n=this.transitional||Et.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&l.isString(e)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?_.from(o,_.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:U.classes.FormData,Blob:U.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],t=>{Et.headers[t]={}});const Tt=Et,Ki=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ji=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||e[n]&&Ki[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},zt=Symbol("internals");function me(t){return t&&String(t).trim().toLowerCase()}function De(t){return t===!1||t==null?t:l.isArray(t)?t.map(De):String(t)}function Yi(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Xi=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function rt(t,e,n,r,i){if(l.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!l.isString(e)){if(l.isString(r))return e.indexOf(r)!==-1;if(l.isRegExp(r))return r.test(e)}}function Qi(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Zi(t,e){const n=l.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,a){return this[r].call(this,e,i,s,a)},configurable:!0})})}class Xe{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(o,c,d){const h=me(c);if(!h)throw new Error("header name must be a non-empty string");const u=l.findKey(i,h);(!u||i[u]===void 0||d===!0||d===void 0&&i[u]!==!1)&&(i[u||c]=De(o))}const a=(o,c)=>l.forEach(o,(d,h)=>s(d,h,c));return l.isPlainObject(e)||e instanceof this.constructor?a(e,n):l.isString(e)&&(e=e.trim())&&!Xi(e)?a(Ji(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=me(e),e){const r=l.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Yi(i);if(l.isFunction(n))return n.call(this,i,r);if(l.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=me(e),e){const r=l.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||rt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(a){if(a=me(a),a){const o=l.findKey(r,a);o&&(!n||rt(r,r[o],o,n))&&(delete r[o],i=!0)}}return l.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||rt(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return l.forEach(this,(i,s)=>{const a=l.findKey(r,s);if(a){n[a]=De(i),delete n[s];return}const o=e?Qi(s):String(s).trim();o!==s&&delete n[s],n[o]=De(i),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return l.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&l.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[zt]=this[zt]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=me(a);r[o]||(Zi(i,a),r[o]=!0)}return l.isArray(e)?e.forEach(s):s(e),this}}Xe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(Xe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});l.freezeMethods(Xe);const V=Xe;function it(t,e){const n=this||Tt,r=e||n,i=V.from(r.headers);let s=r.data;return l.forEach(t,function(o){s=o.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function jn(t){return!!(t&&t.__CANCEL__)}function ke(t,e,n){_.call(this,t==null?"canceled":t,_.ERR_CANCELED,e,n),this.name="CanceledError"}l.inherits(ke,_,{__CANCEL__:!0});function es(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ts=U.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const a=[t+"="+encodeURIComponent(e)];l.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),l.isString(r)&&a.push("path="+r),l.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ns(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function rs(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Bn(t,e){return t&&!ns(e)?rs(t,e):e}const is=U.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let a=s;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const o=l.isString(a)?i(a):a;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}();function ss(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function as(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),h=r[s];a||(a=d),n[i]=c,r[i]=d;let u=s,w=0;for(;u!==i;)w+=n[u++],u=u%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),d-a<e)return;const E=h&&d-h;return E?Math.round(w*1e3/E):void 0}}function $t(t,e){let n=0;const r=as(50,250);return i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,o=s-n,c=r(o),d=s<=a;n=s;const h={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i};h[e?"download":"upload"]=!0,t(h)}}const os=typeof XMLHttpRequest<"u",cs=os&&function(t){return new Promise(function(n,r){let i=t.data;const s=V.from(t.headers).normalize();let{responseType:a,withXSRFToken:o}=t,c;function d(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let h;if(l.isFormData(i)){if(U.hasStandardBrowserEnv||U.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((h=s.getContentType())!==!1){const[p,...v]=h?h.split(";").map(T=>T.trim()).filter(Boolean):[];s.setContentType([p||"multipart/form-data",...v].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+v))}const w=Bn(t.baseURL,t.url);u.open(t.method.toUpperCase(),Dn(w,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function E(){if(!u)return;const p=V.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),T={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:t,request:u};es(function(R){n(R),d()},function(R){r(R),d()},T),u=null}if("onloadend"in u?u.onloadend=E:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(E)},u.onabort=function(){!u||(r(new _("Request aborted",_.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new _("Network Error",_.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let v=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const T=t.transitional||Mn;t.timeoutErrorMessage&&(v=t.timeoutErrorMessage),r(new _(v,T.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,t,u)),u=null},U.hasStandardBrowserEnv&&(o&&l.isFunction(o)&&(o=o(t)),o||o!==!1&&is(w))){const p=t.xsrfHeaderName&&t.xsrfCookieName&&ts.read(t.xsrfCookieName);p&&s.set(t.xsrfHeaderName,p)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&l.forEach(s.toJSON(),function(v,T){u.setRequestHeader(T,v)}),l.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&a!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",$t(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",$t(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=p=>{!u||(r(!p||p.type?new ke(null,t,u):p),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const f=ss(w);if(f&&U.protocols.indexOf(f)===-1){r(new _("Unsupported protocol "+f+":",_.ERR_BAD_REQUEST,t));return}u.send(i||null)})},ut={http:Ni,xhr:cs};l.forEach(ut,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Gt=t=>`- ${t}`,ls=t=>l.isFunction(t)||t===null||t===!1,Hn={getAdapter:t=>{t=l.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let a;if(r=n,!ls(n)&&(r=ut[(a=String(n)).toLowerCase()],r===void 0))throw new _(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+s]=r}if(!r){const s=Object.entries(i).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(Gt).join(`
`):" "+Gt(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:ut};function st(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ke(null,t)}function Kt(t){return st(t),t.headers=V.from(t.headers),t.data=it.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Hn.getAdapter(t.adapter||Tt.adapter)(t).then(function(r){return st(t),r.data=it.call(t,t.transformResponse,r),r.headers=V.from(r.headers),r},function(r){return jn(r)||(st(t),r&&r.response&&(r.response.data=it.call(t,t.transformResponse,r.response),r.response.headers=V.from(r.response.headers))),Promise.reject(r)})}const Jt=t=>t instanceof V?{...t}:t;function ue(t,e){e=e||{};const n={};function r(d,h,u){return l.isPlainObject(d)&&l.isPlainObject(h)?l.merge.call({caseless:u},d,h):l.isPlainObject(h)?l.merge({},h):l.isArray(h)?h.slice():h}function i(d,h,u){if(l.isUndefined(h)){if(!l.isUndefined(d))return r(void 0,d,u)}else return r(d,h,u)}function s(d,h){if(!l.isUndefined(h))return r(void 0,h)}function a(d,h){if(l.isUndefined(h)){if(!l.isUndefined(d))return r(void 0,d)}else return r(void 0,h)}function o(d,h,u){if(u in e)return r(d,h);if(u in t)return r(void 0,d)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(d,h)=>i(Jt(d),Jt(h),!0)};return l.forEach(Object.keys(Object.assign({},t,e)),function(h){const u=c[h]||i,w=u(t[h],e[h],h);l.isUndefined(w)&&u!==o||(n[h]=w)}),n}const Vn="1.6.8",bt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{bt[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Yt={};bt.transitional=function(e,n,r){function i(s,a){return"[Axios v"+Vn+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,o)=>{if(e===!1)throw new _(i(a," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!Yt[a]&&(Yt[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};function us(t,e,n){if(typeof t!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],a=e[s];if(a){const o=t[s],c=o===void 0||a(o,s,t);if(c!==!0)throw new _("option "+s+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}}const dt={assertOptions:us,validators:bt},K=dt.validators;class He{constructor(e){this.defaults=e,this.interceptors={request:new Wt,response:new Wt}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ue(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&dt.assertOptions(r,{silentJSONParsing:K.transitional(K.boolean),forcedJSONParsing:K.transitional(K.boolean),clarifyTimeoutError:K.transitional(K.boolean)},!1),i!=null&&(l.isFunction(i)?n.paramsSerializer={serialize:i}:dt.assertOptions(i,{encode:K.function,serialize:K.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&l.merge(s.common,s[n.method]);s&&l.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=V.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(c=c&&p.synchronous,o.unshift(p.fulfilled,p.rejected))});const d=[];this.interceptors.response.forEach(function(p){d.push(p.fulfilled,p.rejected)});let h,u=0,w;if(!c){const f=[Kt.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,d),w=f.length,h=Promise.resolve(n);u<w;)h=h.then(f[u++],f[u++]);return h}w=o.length;let E=n;for(u=0;u<w;){const f=o[u++],p=o[u++];try{E=f(E)}catch(v){p.call(this,v);break}}try{h=Kt.call(this,E)}catch(f){return Promise.reject(f)}for(u=0,w=d.length;u<w;)h=h.then(d[u++],d[u++]);return h}getUri(e){e=ue(this.defaults,e);const n=Bn(e.baseURL,e.url);return Dn(n,e.params,e.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(e){He.prototype[e]=function(n,r){return this.request(ue(r||{},{method:e,url:n,data:(r||{}).data}))}});l.forEach(["post","put","patch"],function(e){function n(r){return function(s,a,o){return this.request(ue(o||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}He.prototype[e]=n(),He.prototype[e+"Form"]=n(!0)});const Me=He;class St{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{r.subscribe(o),s=o}).then(i);return a.cancel=function(){r.unsubscribe(s)},a},e(function(s,a,o){r.reason||(r.reason=new ke(s,a,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new St(function(i){e=i}),cancel:e}}}const ds=St;function hs(t){return function(n){return t.apply(null,n)}}function fs(t){return l.isObject(t)&&t.isAxiosError===!0}const ht={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ht).forEach(([t,e])=>{ht[e]=t});const ps=ht;function qn(t){const e=new Me(t),n=Tn(Me.prototype.request,e);return l.extend(n,Me.prototype,e,{allOwnKeys:!0}),l.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return qn(ue(t,i))},n}const b=qn(Tt);b.Axios=Me;b.CanceledError=ke;b.CancelToken=ds;b.isCancel=jn;b.VERSION=Vn;b.toFormData=Ye;b.AxiosError=_;b.Cancel=b.CanceledError;b.all=function(e){return Promise.all(e)};b.spread=hs;b.isAxiosError=fs;b.mergeConfig=ue;b.AxiosHeaders=V;b.formToJSON=t=>Fn(l.isHTMLForm(t)?new FormData(t):t);b.getAdapter=Hn.getAdapter;b.HttpStatusCode=ps;b.default=b;const ms=b;function Wn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gs=Wn,zn=new _t("auth","Firebase",Wn());/**
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
 */const Ve=new Dr("@firebase/auth");function _s(t,...e){Ve.logLevel<=vn.WARN&&Ve.warn(`Auth (${Te}): ${t}`,...e)}function xe(t,...e){Ve.logLevel<=vn.ERROR&&Ve.error(`Auth (${Te}): ${t}`,...e)}/**
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
 */function C(t,...e){throw kt(t,...e)}function D(t,...e){return kt(t,...e)}function $n(t,e,n){const r=Object.assign(Object.assign({},gs()),{[e]:n});return new _t("auth","Firebase",r).create(e,{appName:t.name})}function q(t){return $n(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zn.create(t,...e)}function m(t,e,...n){if(!t)throw kt(e,...n)}function j(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xe(e),new Error(e)}function W(t,e){t||j(e)}/**
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
 */function ft(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ys(){return Xt()==="http:"||Xt()==="https:"}function Xt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ws(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ys()||Br()||"connection"in navigator)?navigator.onLine:!0}function vs(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pe{constructor(e,n){this.shortDelay=e,this.longDelay=n,W(n>e,"Short delay should be less than long delay!"),this.isMobile=Mr()||xr()}get(){return ws()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pt(t,e){W(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gn{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;j("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;j("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;j("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Is={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Es=new Pe(3e4,6e4);function $(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function G(t,e,n,r,i={}){return Kn(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=be(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Gn.fetch()(Jn(t,t.config.apiHost,n,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Kn(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Is),e);try{const i=new bs(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Le(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,d]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Le(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Le(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Le(t,"user-disabled",a);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $n(t,h,d);C(t,h)}}catch(i){if(i instanceof we)throw i;C(t,"network-request-failed",{message:String(i)})}}async function Re(t,e,n,r,i={}){const s=await G(t,e,n,r,i);return"mfaPendingCredential"in s&&C(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jn(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pt(t.config,i):`${t.config.apiScheme}://${i}`}function Ts(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(D(this.auth,"network-request-failed")),Es.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Le(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=D(t,e,r);return i.customData._tokenResponse=n,i}function Qt(t){return t!==void 0&&t.enterprise!==void 0}class Ss{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ts(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ks(t,e){return G(t,"GET","/v2/recaptchaConfig",$(t,e))}/**
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
 */async function Ps(t,e){return G(t,"POST","/v1/accounts:delete",e)}async function Yn(t,e){return G(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ye(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rs(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Rt(r);m(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ye(at(i.auth_time)),issuedAtTime:ye(at(i.iat)),expirationTime:ye(at(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function at(t){return Number(t)*1e3}function Rt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xe("JWT malformed, contained fewer than 3 sections"),null;try{const i=qr(n);return i?JSON.parse(i):(xe("Failed to decode base64 JWT payload"),null)}catch(i){return xe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zt(t){const e=Rt(t);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ie(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof we&&As(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function As({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Os{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ye(this.lastLoginAt),this.creationTime=ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qe(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ie(t,Yn(n,{idToken:r}));m(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xn(s.providerUserInfo):[],o=Ns(t.providerData,a),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?d:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pt(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Cs(t){const e=z(t);await qe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ns(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xn(t){return t.map(e=>{var{providerId:n}=e,r=yt(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ls(t,e){const n=await Kn(t,{},async()=>{const r=be({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Jn(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Gn.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Us(t,e){return G(t,"POST","/v2/accounts:revokeToken",$(t,e))}/**
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
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){m(e.length!==0,"internal-error");const n=Zt(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ls(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new oe;return r&&(m(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(m(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(m(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return j("not implemented")}}/**
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
 */function J(t,e){m(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class B{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Os(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ie(this,this.stsTokenManager.getToken(this.auth,e));return m(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rs(this,e)}reload(){return Cs(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new B(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qe(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(L(this.auth.app))return Promise.reject(q(this.auth));const e=await this.getIdToken();return await Ie(this,Ps(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,c,d,h;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(a=n.photoURL)!==null&&a!==void 0?a:void 0,p=(o=n.tenantId)!==null&&o!==void 0?o:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:ie,isAnonymous:Ce,providerData:fe,stsTokenManager:g}=n;m(R&&g,e,"internal-error");const k=oe.fromJSON(this.name,g);m(typeof R=="string",e,"internal-error"),J(u,e.name),J(w,e.name),m(typeof ie=="boolean",e,"internal-error"),m(typeof Ce=="boolean",e,"internal-error"),J(E,e.name),J(f,e.name),J(p,e.name),J(v,e.name),J(T,e.name),J(P,e.name);const S=new B({uid:R,auth:e,email:w,emailVerified:ie,displayName:u,isAnonymous:Ce,photoURL:f,phoneNumber:E,tenantId:p,stsTokenManager:k,createdAt:T,lastLoginAt:P});return fe&&Array.isArray(fe)&&(S.providerData=fe.map(pe=>Object.assign({},pe))),v&&(S._redirectEventId=v),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new oe;i.updateFromServerResponse(n);const s=new B({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qe(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];m(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xn(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new oe;o.updateFromIdToken(r);const c=new B({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
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
 */const en=new Map;function H(t){W(t instanceof Function,"Expected a class definition");let e=en.get(t);return e?(W(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,en.set(t,e),e)}/**
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
 */class Qn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qn.type="NONE";const tn=Qn;/**
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
 */function Fe(t,e,n){return`firebase:${t}:${e}:${n}`}class ce{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fe(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fe("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?B._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ce(H(tn),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||H(tn);const a=Fe(r,e.config.apiKey,e.name);let o=null;for(const d of n)try{const h=await d._get(a);if(h){const u=B._fromJSON(e,h);d!==s&&(o=u),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ce(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new ce(s,e,r))}}/**
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
 */function nn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rr(e))return"Blackberry";if(ir(e))return"Webos";if(At(e))return"Safari";if((e.includes("chrome/")||er(e))&&!e.includes("edge/"))return"Chrome";if(nr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zn(t=A()){return/firefox\//i.test(t)}function At(t=A()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function er(t=A()){return/crios\//i.test(t)}function tr(t=A()){return/iemobile/i.test(t)}function nr(t=A()){return/android/i.test(t)}function rr(t=A()){return/blackberry/i.test(t)}function ir(t=A()){return/webos/i.test(t)}function Qe(t=A()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ds(t=A()){var e;return Qe(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ms(){return Wr()&&document.documentMode===10}function sr(t=A()){return Qe(t)||nr(t)||ir(t)||rr(t)||/windows phone/i.test(t)||tr(t)}function xs(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ar(t,e=[]){let n;switch(t){case"Browser":n=nn(A());break;case"Worker":n=`${nn(A())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Te}/${r}`}/**
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
 */class Fs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function js(t,e={}){return G(t,"GET","/v2/passwordPolicy",$(t,e))}/**
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
 */const Bs=6;class Hs{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Bs,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Vs{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new Fs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=H(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yn(this,{idToken:e}),r=await B._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(L(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qe(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(L(this.app))return Promise.reject(q(this));const n=e?z(e):null;return n&&m(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return L(this.app)?Promise.reject(q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return L(this.app)?Promise.reject(q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(H(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await js(this),n=new Hs(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Us(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&H(e)||this._popupRedirectResolver;m(n,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[H(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ar(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_s(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function re(t){return z(t)}class rn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hr(n=>this.observer=n)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ze={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qs(t){Ze=t}function or(t){return Ze.loadJS(t)}function Ws(){return Ze.recaptchaEnterpriseScript}function zs(){return Ze.gapiScript}function $s(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Gs="recaptcha-enterprise",Ks="NO_RECAPTCHA";class Js{constructor(e){this.type=Gs,this.auth=re(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{ks(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ss(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Qt(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ks)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Qt(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ws();c.length!==0&&(c+=o),or(c).then(()=>{i(o,s,a)}).catch(d=>{a(d)})}}).catch(o=>{a(o)})})}}async function sn(t,e,n,r=!1){const i=new Js(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mt(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sn(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await sn(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function Ys(t,e){const n=wn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vr(s,e!=null?e:{}))return i;C(i,"already-initialized")}return n.initialize({options:e})}function Xs(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(H);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qs(t,e,n){const r=re(t);m(r._canInitEmulator,r,"emulator-config-failed"),m(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cr(e),{host:a,port:o}=Zs(e),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ea()}function cr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zs(t){const e=cr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:an(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:an(a)}}}function an(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ea(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ot{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return j("not implemented")}_getIdTokenResponse(e){return j("not implemented")}_linkToIdToken(e,n){return j("not implemented")}_getReauthenticationResolver(e){return j("not implemented")}}async function ta(t,e){return G(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function na(t,e){return Re(t,"POST","/v1/accounts:signInWithPassword",$(t,e))}async function ra(t,e){return G(t,"POST","/v1/accounts:sendOobCode",$(t,e))}async function ia(t,e){return ra(t,e)}/**
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
 */async function sa(t,e){return Re(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}async function aa(t,e){return Re(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}/**
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
 */class Ee extends Ot{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ee(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ee(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mt(e,n,"signInWithPassword",na);case"emailLink":return sa(e,{email:this._email,oobCode:this._password});default:C(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mt(e,r,"signUpPassword",ta);case"emailLink":return aa(e,{idToken:n,email:this._email,oobCode:this._password});default:C(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function le(t,e){return Re(t,"POST","/v1/accounts:signInWithIdp",$(t,e))}/**
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
 */const oa="http://localhost";class te extends Ot{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):C("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yt(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new te(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return le(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,le(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,le(e,n)}buildRequest(){const e={requestUri:oa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=be(n)}return e}}/**
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
 */function ca(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function la(t){const e=ge(_e(t)).link,n=e?ge(_e(e)).deep_link_id:null,r=ge(_e(t)).deep_link_id;return(r?ge(_e(r)).link:null)||r||n||e||t}class Ct{constructor(e){var n,r,i,s,a,o;const c=ge(_e(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,u=ca((i=c.mode)!==null&&i!==void 0?i:null);m(d&&h&&u,"argument-error"),this.apiKey=d,this.operation=u,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=la(e);try{return new Ct(n)}catch{return null}}}/**
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
 */class he{constructor(){this.providerId=he.PROVIDER_ID}static credential(e,n){return Ee._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ct.parseLink(n);return m(r,"argument-error"),Ee._fromEmailAndCode(e,r.code,r.tenantId)}}he.PROVIDER_ID="password";he.EMAIL_PASSWORD_SIGN_IN_METHOD="password";he.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ae extends lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Y extends Ae{constructor(){super("facebook.com")}static credential(e){return te._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.FACEBOOK_SIGN_IN_METHOD="facebook.com";Y.PROVIDER_ID="facebook.com";/**
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
 */class X extends Ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return te._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return X.credential(n,r)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
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
 */class Q extends Ae{constructor(){super("github.com")}static credential(e){return te._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.GITHUB_SIGN_IN_METHOD="github.com";Q.PROVIDER_ID="github.com";/**
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
 */class Z extends Ae{constructor(){super("twitter.com")}static credential(e,n){return te._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Z.credential(n,r)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
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
 */async function ua(t,e){return Re(t,"POST","/v1/accounts:signUp",$(t,e))}/**
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
 */class ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await B._fromIdTokenResponse(e,r,i),a=on(r);return new ne({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=on(r);return new ne({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function on(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class We extends we{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,We.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new We(e,n,r,i)}}function ur(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?We._fromErrorAndOperation(t,s,e,r):s})}async function da(t,e,n=!1){const r=await Ie(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ne._forOperation(t,"link",r)}/**
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
 */async function ha(t,e,n=!1){const{auth:r}=t;if(L(r.app))return Promise.reject(q(r));const i="reauthenticate";try{const s=await Ie(t,ur(r,i,e,t),n);m(s.idToken,r,"internal-error");const a=Rt(s.idToken);m(a,r,"internal-error");const{sub:o}=a;return m(t.uid===o,r,"user-mismatch"),ne._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&C(r,"user-mismatch"),s}}/**
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
 */async function dr(t,e,n=!1){if(L(t.app))return Promise.reject(q(t));const r="signIn",i=await ur(t,r,e),s=await ne._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fa(t,e){return dr(re(t),e)}/**
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
 */function pa(t,e,n){var r;m(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),m(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(m(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(m(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function hr(t){const e=re(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ma(t,e,n){if(L(t.app))return Promise.reject(q(t));const r=re(t),a=await mt(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ua).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hr(t),c}),o=await ne._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function ga(t,e,n){return L(t.app)?Promise.reject(q(t)):fa(z(t),he.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hr(t),r})}async function _a(t,e){const n=z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&pa(n.auth,i,e);const{email:s}=await ia(n.auth,i);s!==t.email&&await t.reload()}function ya(t,e,n,r){return z(t).onIdTokenChanged(e,n,r)}function wa(t,e,n){return z(t).beforeAuthStateChanged(e,n)}function va(t,e,n,r){return z(t).onAuthStateChanged(e,n,r)}const ze="__sak";/**
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
 */class fr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ia(){const t=A();return At(t)||Qe(t)}const Ea=1e3,Ta=10;class pr extends fr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ia()&&xs(),this.fallbackToPolling=sr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Ms()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ta):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ea)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pr.type="LOCAL";const ba=pr;/**
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
 */class mr extends fr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mr.type="SESSION";const gr=mr;/**
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
 */function Sa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new et(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async d=>d(n.origin,s)),c=await Sa(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}et.receivers=[];/**
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
 */function Nt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ka{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const d=Nt("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(u){const w=u;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(w.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function M(){return window}function Pa(t){M().location.href=t}/**
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
 */function _r(){return typeof M().WorkerGlobalScope<"u"&&typeof M().importScripts=="function"}async function Ra(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Aa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Oa(){return _r()?self:null}/**
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
 */const yr="firebaseLocalStorageDb",Ca=1,$e="firebaseLocalStorage",wr="fbase_key";class Oe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tt(t,e){return t.transaction([$e],e?"readwrite":"readonly").objectStore($e)}function Na(){const t=indexedDB.deleteDatabase(yr);return new Oe(t).toPromise()}function gt(){const t=indexedDB.open(yr,Ca);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($e,{keyPath:wr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($e)?e(r):(r.close(),await Na(),e(await gt()))})})}async function cn(t,e,n){const r=tt(t,!0).put({[wr]:e,value:n});return new Oe(r).toPromise()}async function La(t,e){const n=tt(t,!1).get(e),r=await new Oe(n).toPromise();return r===void 0?null:r.value}function ln(t,e){const n=tt(t,!0).delete(e);return new Oe(n).toPromise()}const Ua=800,Da=3;class vr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Da)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _r()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(Oa()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ra(),!this.activeServiceWorker)return;this.sender=new ka(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Aa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gt();return await cn(e,ze,"1"),await ln(e,ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>La(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ln(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tt(i,!1).getAll();return new Oe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ua)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vr.type="LOCAL";const Ma=vr;new Pe(3e4,6e4);/**
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
 */function xa(t,e){return e?H(e):(m(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lt extends Ot{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return le(e,this._buildIdpRequest())}_linkToIdToken(e,n){return le(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return le(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fa(t){return dr(t.auth,new Lt(t),t.bypassAuthState)}function ja(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),ha(n,new Lt(t),t.bypassAuthState)}async function Ba(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),da(n,new Lt(t),t.bypassAuthState)}/**
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
 */class Ir{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fa;case"linkViaPopup":case"linkViaRedirect":return Ba;case"reauthViaPopup":case"reauthViaRedirect":return ja;default:C(this.auth,"internal-error")}}resolve(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ha=new Pe(2e3,1e4);class ae extends Ir{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ae.currentPopupAction&&ae.currentPopupAction.cancel(),ae.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){W(this.filter.length===1,"Popup operations only handle one event");const e=Nt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(D(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(D(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ae.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(D(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ha.get())};e()}}ae.currentPopupAction=null;/**
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
 */const Va="pendingRedirect",je=new Map;class qa extends Ir{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=je.get(this.auth._key());if(!e){try{const r=await Wa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}je.set(this.auth._key(),e)}return this.bypassAuthState||je.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wa(t,e){const n=Ga(e),r=$a(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function za(t,e){je.set(t._key(),e)}function $a(t){return H(t._redirectPersistence)}function Ga(t){return Fe(Va,t.config.apiKey,t.name)}async function Ka(t,e,n=!1){if(L(t.app))return Promise.reject(q(t));const r=re(t),i=xa(r,e),a=await new qa(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Ja=10*60*1e3;class Ya{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xa(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Er(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(D(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ja&&this.cachedEventUids.clear(),this.cachedEventUids.has(un(e))}saveEventToCache(e){this.cachedEventUids.add(un(e)),this.lastProcessedEventTime=Date.now()}}function un(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Er({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xa(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Er(t);default:return!1}}/**
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
 */async function Qa(t,e={}){return G(t,"GET","/v1/projects",e)}/**
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
 */const Za=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eo=/^https?/;async function to(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qa(t);for(const n of e)try{if(no(n))return}catch{}C(t,"unauthorized-domain")}function no(t){const e=ft(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!eo.test(n))return!1;if(Za.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ro=new Pe(3e4,6e4);function dn(){const t=M().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function io(t){return new Promise((e,n)=>{var r,i,s;function a(){dn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dn(),n(D(t,"network-request-failed"))},timeout:ro.get()})}if(!((i=(r=M().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=M().gapi)===null||s===void 0)&&s.load)a();else{const o=$s("iframefcb");return M()[o]=()=>{gapi.load?a():n(D(t,"network-request-failed"))},or(`${zs()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw Be=null,e})}let Be=null;function so(t){return Be=Be||io(t),Be}/**
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
 */const ao=new Pe(5e3,15e3),oo="__/auth/iframe",co="emulator/auth/iframe",lo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ho(t){const e=t.config;m(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pt(e,co):`https://${t.config.authDomain}/${oo}`,r={apiKey:e.apiKey,appName:t.name,v:Te},i=uo.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${be(r).slice(1)}`}async function fo(t){const e=await so(t),n=M().gapi;return m(n,t,"internal-error"),e.open({where:document.body,url:ho(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lo,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=D(t,"network-request-failed"),o=M().setTimeout(()=>{s(a)},ao.get());function c(){M().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const po={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mo=500,go=600,_o="_blank",yo="http://localhost";class hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wo(t,e,n,r=mo,i=go){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},po),{width:r.toString(),height:i.toString(),top:s,left:a}),d=A().toLowerCase();n&&(o=er(d)?_o:n),Zn(d)&&(e=e||yo,c.scrollbars="yes");const h=Object.entries(c).reduce((w,[E,f])=>`${w}${E}=${f},`,"");if(Ds(d)&&o!=="_self")return vo(e||"",o),new hn(null);const u=window.open(e||"",o,h);m(u,t,"popup-blocked");try{u.focus()}catch{}return new hn(u)}function vo(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Io="__/auth/handler",Eo="emulator/auth/handler",To=encodeURIComponent("fac");async function fn(t,e,n,r,i,s){m(t.config.authDomain,t,"auth-domain-config-required"),m(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Te,eventId:i};if(e instanceof lr){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",zr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))a[h]=u}if(e instanceof Ae){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const c=await t._getAppCheckToken(),d=c?`#${To}=${encodeURIComponent(c)}`:"";return`${bo(t)}?${be(o).slice(1)}${d}`}function bo({config:t}){return t.emulator?Pt(t,Eo):`https://${t.authDomain}/${Io}`}/**
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
 */const ot="webStorageSupport";class So{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gr,this._completeRedirectFn=Ka,this._overrideRedirectResult=za}async _openPopup(e,n,r,i){var s;W((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await fn(e,n,r,ft(),i);return wo(e,a,Nt())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fn(e,n,r,ft(),i);return Pa(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(W(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fo(e),r=new Ya(e);return n.register("authEvent",i=>(m(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ot,{type:ot},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ot];a!==void 0&&n(!!a),C(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=to(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sr()||At()||Qe()}}const ko=So;var pn="@firebase/auth",mn="1.7.3";/**
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
 */class Po{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ro(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ao(t){Mt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;m(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ar(t)},d=new Vs(r,i,s,c);return Xs(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mt(new xt("auth-internal",e=>{const n=re(e.getProvider("auth").getImmediate());return(r=>new Po(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(pn,mn,Ro(t)),Ft(pn,mn,"esm2017")}/**
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
 */const Oo=5*60,Co=yn("authIdTokenMaxAge")||Oo;let gn=null;const No=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Co)return;const i=n==null?void 0:n.token;gn!==i&&(gn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lo(t=jr()){const e=wn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ys(t,{popupRedirectResolver:ko,persistence:[Ma,ba,gr]}),r=yn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=No(s.toString());wa(n,a,()=>a(n.currentUser)),ya(n,o=>a(o))}}const i=Fr("auth");return i&&Qs(n,`http://${i}`),n}function Uo(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qs({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=D("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Uo().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ao("Browser");const _n=t=>{switch(t==null?void 0:t.code){case"auth/invalid-email":alert("Invalid email address. Please enter a valid email.");break;case"auth/user-not-found":alert("User not found. Please check the email address.");break;case"auth/wrong-password":alert("Incorrect password. Please try again.");break;case"auth/email-already-in-use":alert("Email already in use. Please try another email.");break;case"auth/weak-password":alert("Password should be at least 6 characters.");break;case"auth/operation-not-allowed":alert("Operation not allowed. Please try again later.");break;case"auth/invalid-verification-code":alert("Invalid verification code. Please try again.");break;case"auth/invalid-verification-id":alert("Invalid verification ID. Please try again.");break;case"auth/code-expired":alert("Code expired. Please try again.");break;case"auth/invalid-action-code":alert("Invalid action code. Please try again.");break;case"auth/user-disabled":alert("User disabled. Please contact support.");break;case"auth/invalid-credential":alert("Invalid credential. Please try again.");break;case"auth/invalid-continue-uri":alert("Invalid continue URL. Please try again.");break;case"auth/unauthorized-continue-uri":alert("Unauthorized continue URL. Please try again.");break;case"auth/missing-continue-uri":alert("Missing continue URL. Please try again.");break;case"auth/missing-verification-code":alert("Missing verification code. Please try again.");break;case"auth/missing-verification-id":alert("Missing verification ID. Please try again.");break;case"auth/captcha-check-failed":alert("Captcha check failed. Please try again.");break;case"auth/invalid-phone-number":alert("Invalid phone number. Please try again.");break;case"auth/missing-phone-number":alert("Missing phone number. Please try again.");break;case"auth/quota-exceeded":alert("Quota exceeded. Please try again.");break;case"auth/missing-app-credential":alert("Missing app credential. Please try again.");break;case"auth/invalid-app-credential":alert("Invalid app credential. Please try again.");break;case"auth/session-expired":alert("Session expired. Please try again.");break;case"auth/missing-or-invalid-nonce":alert("Missing or invalid nonce. Please try again.");break;case"auth/missing-client-identifier":alert("Missing client identifier. Please try again.");break;case"auth/key-retrieval-failed":alert("Key retrieval failed. Please try again.");break;case"auth/invalid-oauth-provider":alert("Invalid OAuth provider. Please try again.");break;case"auth/invalid-oauth-client-id":alert("Invalid OAuth client ID. Please try again.");break;case"auth/invalid-cert-hash":alert("Invalid cert hash. Please try again.");break;case"auth/invalid-user-token":alert("Invalid user token. Please try again.");break;case"auth/invalid-custom-token":alert("Invalid custom token. Please try again.");break;case"auth/app-deleted":alert("App deleted. Please try again.");break;case"auth/app-not-authorized":alert("App not authorized. Please try again.");break;case"auth/argument-error":alert("Argument error. Please try again.");break;case"auth/invalid-api-key":alert("Invalid API key. Please try again.");break;case"auth/network-request-failed":alert("Network request failed. Please try again.");break;case"auth/requires-recent-login":alert("Requires recent login. Please try again.");break;case"auth/too-many-requests":alert("Too many requests. Please try again.");break;case"auth/unauthorized-domain":alert("Unauthorized domain. Please try again.");break;case"auth/user-token-expired":alert("User token expired. Please try again.");break;case"auth/web-storage-unsupported":alert("Web storage unsupported. Please try again.");break;case"auth/account-exists-with-different-credential":alert("Account exists with different credential. Please try again.");break;case"auth/auth-domain-config-required":alert("Auth domain config required. Please try again.");break;case"auth/cancelled-popup-request":alert("Cancelled popup request. Please try again.");break;case"auth/credential-already-in-use":alert("Credential already in use. Please try again.");break;case"auth/custom-token-mismatch":alert("Custom token mismatch. Please try again.");break;case"auth/provider-already-linked":alert("Provider already linked. Please try again.");break;case"auth/timeout":alert("Timeout. Please try again.");break;case"auth/missing-android-pkg-name":alert("Missing Android package name. Please try again.");break;case"auth/missing-ios-bundle-id":alert("Missing iOS bundle ID. Please try again.");break;case"auth/invalid-dynamic-link-domain":alert("Invalid dynamic link domain. Please try again.");break;case"auth/invalid-persistence-type":alert("Invalid persistence type. Please try again.");break;case"auth/unsupported-persistence-type":alert("Unsupported persistence type. Please try again.");break;case"auth/invalid-oauth-client-secret":alert("Invalid OAuth client secret. Please try again.");break;case"auth/invalid-argument":alert("Invalid argument. Please try again.");break;case"auth/invalid-creation-time":alert("Invalid creation time. Please try again.");break;case"auth/invalid-disabled-field":alert("Invalid disabled field. Please try again.");break;case"auth/invalid-display-name":alert("Invalid display name. Please try again.");break;case"auth/invalid-email-verified":alert("Invalid email verified. Please try again.");break;case"auth/invalid-hash-algorithm":alert("Invalid hash algorithm. Please try again.");break;case"auth/invalid-hash-block-size":alert("Invalid hash block size. Please try again.");break;case"auth/invalid-hash-derived-key-length":alert("Invalid hash derived key length. Please try again.");break;case"auth/invalid-hash-key":alert("Invalid hash key. Please try again.");break;case"auth/invalid-hash-memory-cost":alert("Invalid hash memory cost. Please try again.");break;case"auth/invalid-hash-parallelization":alert("Invalid hash parallelization. Please try again.");break;case"auth/invalid-hash-rounds":alert("Invalid hash rounds. Please try again.");break;case"auth/invalid-hash-salt-separator":alert("Invalid hash salt separator. Please try again.");break;case"auth/invalid-id-token":alert("Invalid ID token. Please try again.");break;case"auth/invalid-last-sign-in-time":alert("Invalid last sign in time. Please try again.");break;case"auth/invalid-page-token":alert("Invalid page token. Please try again.");break;case"auth/invalid-password":alert("Invalid password. Please try again.");break;case"auth/invalid-password-hash":alert("Invalid password hash. Please try again.");break;case"auth/invalid-password-salt":alert("Invalid password salt. Please try again.");break;case"auth/invalid-photo-url":alert("Invalid photo URL. Please try again.");break;case"auth/invalid-provider-id":alert("Invalid provider ID. Please try again.");break;case"auth/invalid-session-cookie-duration":alert("Invalid session cookie duration. Please try again.");break;case"auth/invalid-uid":alert("Invalid UID. Please try again.");break;case"auth/invalid-user-import":alert("Invalid user import. Please try again.");break;case"auth/invalid-provider-data":alert("Invalid provider data. Please try again.");break;case"auth/maximum-user-count-exceeded":alert("Maximum user count exceeded. Please try again.");break;case"auth/missing-hash-algorithm":alert("Missing hash algorithm. Please try again.");break;case"auth/missing-uid":alert("Missing UID. Please try again.");break;case"auth/reserved-claims":alert("Reserved claims. Please try again.");break;case"auth/session-cookie-revoked":alert("Session cookie revoked. Please try again.");break;case"auth/uid-already-exists":alert("UID already exists. Please try again.");break;case"auth/email-already-exists":alert("Email already exists. Please try again.");break;case"auth/phone-number-already-exists":alert("Phone number already exists. Please try again.");break;case"auth/project-not-found":alert("Project not found. Please try again.");break;case"auth/insufficient-permission":alert("Insufficient permission. Please try again.");break;case"auth/internal-error":alert("Internal error. Please try again.");break;default:alert("Oops! Something went wrong. Please try again later.")}},Do="_container_1jlwh_10",Mo="_leftSide_1jlwh_20",xo="_portraitLeftSide_1jlwh_26",Fo="_rightSide_1jlwh_40",jo="_portraitRightSide_1jlwh_41",Bo="_loginContainer_1jlwh_55",Ho="_portraitLoginContainer_1jlwh_56",Vo="_slideIn_1jlwh_1",qo="_sportsIconSection_1jlwh_79",Wo="_sportsIcon_1jlwh_79",zo="_loginSignupText_1jlwh_89",$o="_getStarted_1jlwh_96",Go="_signUpImmediately_1jlwh_103",Ko="_loginSignupButton_1jlwh_109",Jo="_googleLoginButton_1jlwh_114",Yo="_emailLoginButton_1jlwh_115",Xo="_portraitEmailLoginButton_1jlwh_116",Qo="_portraitGoogleLoginButton_1jlwh_117",Zo="_loginDivider_1jlwh_143",ec="_loginOption_1jlwh_151",tc="_emailSignup_1jlwh_160",nc="_emailField_1jlwh_179",rc="_passwordField_1jlwh_180",ic="_signupText_1jlwh_189",y={container:Do,leftSide:Mo,portraitLeftSide:xo,rightSide:Fo,portraitRightSide:jo,loginContainer:Bo,portraitLoginContainer:Ho,slideIn:Vo,sportsIconSection:qo,sportsIcon:Wo,loginSignupText:zo,getStarted:$o,signUpImmediately:Go,loginSignupButton:Ko,googleLoginButton:Jo,emailLoginButton:Yo,portraitEmailLoginButton:Xo,portraitGoogleLoginButton:Qo,loginDivider:Zo,loginOption:ec,emailSignup:tc,emailField:nc,passwordField:rc,signupText:ic},sc="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql";function _c(){const t=Or(),e=Cr(),n=Lo(),r=Nr(),i={}.VITE_GOOGLE_SHEET_API,[s,a]=se.exports.useState(!1),[o,c]=se.exports.useState(!1),[d,h]=se.exports.useState(""),[u,w]=se.exports.useState(""),[E,f]=se.exports.useState(!1),p=()=>{va(n,g=>{if(g){const k=g.metadata.creationTime,S=g.metadata.lastSignInTime;k===S?(console.log("User is logging in for the first time"),v(g.email,g.displayName)):console.log("User has logged in before")}})},v=(g,k)=>{fetch(sc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation createUser {
        createUser(input: {
        email: "${g}"
        name: "${k}"
        }) {
            isSuccessful
            userId
        }
        }`})}).then(S=>S.json()).then(S=>{if(S.errors)throw new Error(S.errors[0].message)}).catch(S=>{console.log(S)})},T=async g=>{ms.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${g}`,{headers:{Authorization:`Bearer ${g}`,Accept:"application/json"}}).then(k=>{v(k.data.email,k.data.name),localStorage.setItem("userData",JSON.stringify(k.data)),P(k.data.email),r(Ut(k.data)),e("/match-queues")}).catch(k=>{alert(k)})},P=g=>{g==="admin@flickmatch.in"?r(Dt(!0)):(async S=>{const Tr=(await(await fetch(i)).json()).data.map(br=>br.EmailId).includes(S);r(Dt(Tr))})(g)},R=Sr({onSuccess:g=>T(g.access_token),onError:g=>alert("Login Failed "+g)}),ie=()=>{ma(n,d,u).then(g=>{_a(g.user).then(()=>{alert("A verification email has been sent to your email address. Please verify your email to login.")}),f(!1),n.signOut()}).catch(g=>{g instanceof we&&_n(g)})},Ce=()=>{ga(n,d,u).then(g=>{const k=d.split("@")[0],S=g.user;if(S.emailVerified){const pe={email:S.email,id:S.uid,name:k};localStorage.setItem("userData",JSON.stringify(pe)),p(),r(Ut(pe)),P(S.email),e("/match-queues")}else alert("Please verify your email to login.")}).catch(g=>{g instanceof we&&_n(g)})},fe=()=>{c(!0),a(!0)};return F(kr,{children:[I($r,{title:"Login/Signup"}),F(N,{className:y.container,children:[I(N,{className:t?y.portraitLeftSide:y.leftSide,children:I("img",{src:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D",alt:"Football Image"})}),I(N,{className:t?y.portraitRightSide:y.rightSide,children:F(N,{className:t?y.portraitLoginContainer:y.loginContainer,children:[I(N,{className:y.sportsIconSection,children:I(Lr,{className:y.sportsIcon})}),F(N,{className:y.loginSignupHeader,children:[E?I(ee,{className:y.loginSignupText,children:"Sign up"}):o?I(ee,{className:y.loginSignupText,children:"Login"}):I(ee,{className:y.loginSignupText,children:"Login / Sign up"}),I(ee,{className:y.getStarted,children:"Let's get Started"}),F(ee,{className:y.signUpImmediately,children:["Join our community and start your ",I("br",{}),"journey right away!"]})]}),s?F(N,{className:y.emailSignup,children:[I(jt,{id:"outlined-basic",label:"Email",variant:"outlined",onChange:g=>h(g.target.value),className:y.emailField}),I(jt,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",onChange:g=>w(g.target.value),className:y.passwordField}),E?I(Ne,{variant:"outlined",className:t?y.portraitEmailLoginButton:y.emailLoginButton,onClick:()=>ie(),children:"Sign up"}):I(Ne,{variant:"outlined",className:t?y.portraitEmailLoginButton:y.emailLoginButton,onClick:()=>Ce(),children:"Sign In"}),I(N,{children:E?F(ee,{style:{marginTop:10},children:["Already have an account?"," ",I("span",{onClick:()=>f(!1),className:y.signupText,children:"Sign in"})]}):F(ee,{style:{marginTop:10},children:["Need an account?"," ",I("span",{onClick:()=>f(!0),className:y.signupText,children:"Sign up"})]})})]}):F(N,{className:y.loginSignupButton,children:[I(Ne,{variant:"outlined",className:t?y.portraitGoogleLoginButton:y.googleLoginButton,onClick:()=>R(),startIcon:I(In,{}),children:"Log In / Sign up with Google"}),I(N,{className:y.loginDivider,children:I("span",{className:y.loginOption,children:"OR"})}),I(Ne,{variant:"outlined",className:t?y.portraitGoogleLoginButton:y.googleLoginButton,onClick:()=>fe(),startIcon:I(Ur,{}),children:"Log In / Sign Up with Email"})]})]})})]})]})}export{_c as default};

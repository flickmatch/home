import{G as nl}from"./index.esm.c1835d46.js";import{r as rl,d as os,u as il,j as zt,c as sl,a as ol,R as al}from"./index.a525f6e3.js";import{q as ll}from"./index.module.325f48be.js";import{r as Xt,_ as Ge,C as ze,E as Gs,a as Je,F as Lr,o as ul,g as Yt,b as zs,d as cl,L as Ks,i as hl,c as as,e as fl,v as dl,f as pl,h as gl,j as Mt,k as ml,S as _l,l as yl,m as vl,n as Tl}from"./index.esm2017.1529e8de.js";import{T as El}from"./ThemeProvider.98270306.js";var Hs,ls=rl.exports;Hs=ls.createRoot,ls.hydrateRoot;const Qs="@firebase/installations",Ur="0.6.7";/**
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
 */const Ws=1e4,Xs=`w:${Ur}`,Ys="FIS_v2",Il="https://firebaseinstallations.googleapis.com/v1",wl=60*60*1e3,Al="installations",Rl="Installations";/**
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
 */const Pl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jt=new Gs(Al,Rl,Pl);function Js(r){return r instanceof Lr&&r.code.includes("request-failed")}/**
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
 */function Zs({projectId:r}){return`${Il}/projects/${r}/installations`}function to(r){return{token:r.token,requestStatus:2,expiresIn:Vl(r.expiresIn),creationTime:Date.now()}}async function eo(r,t){const i=(await t.json()).error;return Jt.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function no({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Sl(r,{refreshToken:t}){const e=no(r);return e.append("Authorization",Cl(t)),e}async function ro(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Vl(r){return Number(r.replace("s","000"))}function Cl(r){return`${Ys} ${r}`}/**
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
 */async function bl({appConfig:r,heartbeatServiceProvider:t},{fid:e}){const i=Zs(r),s=no(r),a=t.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={fid:e,authVersion:Ys,appId:r.appId,sdkVersion:Xs},c={method:"POST",headers:s,body:JSON.stringify(u)},f=await ro(()=>fetch(i,c));if(f.ok){const g=await f.json();return{fid:g.fid||e,registrationStatus:2,refreshToken:g.refreshToken,authToken:to(g.authToken)}}else throw await eo("Create Installation",f)}/**
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
 */function io(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function kl(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Dl=/^[cdef][\w-]{21}$/,Cr="";function Nl(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const e=Ol(r);return Dl.test(e)?e:Cr}catch{return Cr}}function Ol(r){return kl(r).substr(0,22)}/**
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
 */function Bn(r){return`${r.appName}!${r.appId}`}/**
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
 */const so=new Map;function oo(r,t){const e=Bn(r);ao(e,t),Ml(e,t)}function ao(r,t){const e=so.get(r);if(!!e)for(const i of e)i(t)}function Ml(r,t){const e=xl();e&&e.postMessage({key:r,fid:t}),Fl()}let Kt=null;function xl(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=r=>{ao(r.data.key,r.data.fid)}),Kt}function Fl(){so.size===0&&Kt&&(Kt.close(),Kt=null)}/**
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
 */const Ll="firebase-installations-database",Ul=1,Zt="firebase-installations-store";let wr=null;function jr(){return wr||(wr=ul(Ll,Ul,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Zt)}}})),wr}async function Cn(r,t){const e=Bn(r),s=(await jr()).transaction(Zt,"readwrite"),a=s.objectStore(Zt),u=await a.get(e);return await a.put(t,e),await s.done,(!u||u.fid!==t.fid)&&oo(r,t.fid),t}async function lo(r){const t=Bn(r),i=(await jr()).transaction(Zt,"readwrite");await i.objectStore(Zt).delete(t),await i.done}async function qn(r,t){const e=Bn(r),s=(await jr()).transaction(Zt,"readwrite"),a=s.objectStore(Zt),u=await a.get(e),c=t(u);return c===void 0?await a.delete(e):await a.put(c,e),await s.done,c&&(!u||u.fid!==c.fid)&&oo(r,c.fid),c}/**
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
 */async function Br(r){let t;const e=await qn(r.appConfig,i=>{const s=jl(i),a=Bl(r,s);return t=a.registrationPromise,a.installationEntry});return e.fid===Cr?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function jl(r){const t=r||{fid:Nl(),registrationStatus:0};return uo(t)}function Bl(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ql(r,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$l(r)}:{installationEntry:t}}async function ql(r,t){try{const e=await bl(r,t);return Cn(r.appConfig,e)}catch(e){throw Js(e)&&e.customData.serverCode===409?await lo(r.appConfig):await Cn(r.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function $l(r){let t=await us(r.appConfig);for(;t.registrationStatus===1;)await io(100),t=await us(r.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Br(r);return i||e}return t}function us(r){return qn(r,t=>{if(!t)throw Jt.create("installation-not-found");return uo(t)})}function uo(r){return Gl(r)?{fid:r.fid,registrationStatus:0}:r}function Gl(r){return r.registrationStatus===1&&r.registrationTime+Ws<Date.now()}/**
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
 */async function zl({appConfig:r,heartbeatServiceProvider:t},e){const i=Kl(r,e),s=Sl(r,e),a=t.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={installation:{sdkVersion:Xs,appId:r.appId}},c={method:"POST",headers:s,body:JSON.stringify(u)},f=await ro(()=>fetch(i,c));if(f.ok){const g=await f.json();return to(g)}else throw await eo("Generate Auth Token",f)}function Kl(r,{fid:t}){return`${Zs(r)}/${t}/authTokens:generate`}/**
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
 */async function qr(r,t=!1){let e;const i=await qn(r.appConfig,a=>{if(!co(a))throw Jt.create("not-registered");const u=a.authToken;if(!t&&Wl(u))return a;if(u.requestStatus===1)return e=Hl(r,t),a;{if(!navigator.onLine)throw Jt.create("app-offline");const c=Yl(a);return e=Ql(r,c),c}});return e?await e:i.authToken}async function Hl(r,t){let e=await cs(r.appConfig);for(;e.authToken.requestStatus===1;)await io(100),e=await cs(r.appConfig);const i=e.authToken;return i.requestStatus===0?qr(r,t):i}function cs(r){return qn(r,t=>{if(!co(t))throw Jt.create("not-registered");const e=t.authToken;return Jl(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ql(r,t){try{const e=await zl(r,t),i=Object.assign(Object.assign({},t),{authToken:e});return await Cn(r.appConfig,i),e}catch(e){if(Js(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await lo(r.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Cn(r.appConfig,i)}throw e}}function co(r){return r!==void 0&&r.registrationStatus===2}function Wl(r){return r.requestStatus===2&&!Xl(r)}function Xl(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+wl}function Yl(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Jl(r){return r.requestStatus===1&&r.requestTime+Ws<Date.now()}/**
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
 */async function Zl(r){const t=r,{installationEntry:e,registrationPromise:i}=await Br(t);return i?i.catch(console.error):qr(t).catch(console.error),e.fid}/**
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
 */async function tu(r,t=!1){const e=r;return await eu(e),(await qr(e,t)).token}async function eu(r){const{registrationPromise:t}=await Br(r);t&&await t}/**
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
 */function nu(r){if(!r||!r.options)throw Ar("App Configuration");if(!r.name)throw Ar("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!r.options[e])throw Ar(e);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ar(r){return Jt.create("missing-app-config-values",{valueName:r})}/**
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
 */const ho="installations",ru="installations-internal",iu=r=>{const t=r.getProvider("app").getImmediate(),e=nu(t),i=Je(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},su=r=>{const t=r.getProvider("app").getImmediate(),e=Je(t,ho).getImmediate();return{getId:()=>Zl(e),getToken:s=>tu(e,s)}};function ou(){Ge(new ze(ho,iu,"PUBLIC")),Ge(new ze(ru,su,"PRIVATE"))}ou();Xt(Qs,Ur);Xt(Qs,Ur,"esm2017");/**
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
 */const bn="analytics",au="firebase_id",lu="origin",uu=60*1e3,cu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$r="https://www.googletagmanager.com/gtag/js";/**
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
 */const mt=new Ks("@firebase/analytics");/**
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
 */const hu={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Gs("analytics","Analytics",hu);/**
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
 */function fu(r){if(!r.startsWith($r)){const t=vt.create("invalid-gtag-resource",{gtagURL:r});return mt.warn(t.message),""}return r}function fo(r){return Promise.all(r.map(t=>t.catch(e=>e)))}function du(r,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(r,t)),e}function pu(r,t){const e=du("firebase-js-sdk-policy",{createScriptURL:fu}),i=document.createElement("script"),s=`${$r}?l=${r}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function gu(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function mu(r,t,e,i,s,a){const u=i[s];try{if(u)await t[u];else{const f=(await fo(e)).find(g=>g.measurementId===s);f&&await t[f.appId]}}catch(c){mt.error(c)}r("config",s,a)}async function _u(r,t,e,i,s){try{let a=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const c=await fo(e);for(const f of u){const g=c.find(A=>A.measurementId===f),I=g&&t[g.appId];if(I)a.push(I);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),r("event",i,s||{})}catch(a){mt.error(a)}}function yu(r,t,e,i){async function s(a,...u){try{if(a==="event"){const[c,f]=u;await _u(r,t,e,c,f)}else if(a==="config"){const[c,f]=u;await mu(r,t,e,i,c,f)}else if(a==="consent"){const[c]=u;r("consent","update",c)}else if(a==="get"){const[c,f,g]=u;r("get",c,f,g)}else if(a==="set"){const[c]=u;r("set",c)}else r(a,...u)}catch(c){mt.error(c)}}return s}function vu(r,t,e,i,s){let a=function(...u){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=yu(a,r,t,e),{gtagCore:a,wrappedGtag:window[s]}}function Tu(r){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes($r)&&e.src.includes(r))return e;return null}/**
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
 */const Eu=30,Iu=1e3;class wu{constructor(t={},e=Iu){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const po=new wu;function Au(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Ru(r){var t;const{appId:e,apiKey:i}=r,s={method:"GET",headers:Au(i)},a=cu.replace("{app-id}",e),u=await fetch(a,s);if(u.status!==200&&u.status!==304){let c="";try{const f=await u.json();!((t=f.error)===null||t===void 0)&&t.message&&(c=f.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c})}return u.json()}async function Pu(r,t=po,e){const{appId:i,apiKey:s,measurementId:a}=r.options;if(!i)throw vt.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:i};throw vt.create("no-api-key")}const u=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Cu;return setTimeout(async()=>{c.abort()},e!==void 0?e:uu),go({appId:i,apiKey:s,measurementId:a},u,c,t)}async function go(r,{throttleEndTimeMillis:t,backoffCount:e},i,s=po){var a;const{appId:u,measurementId:c}=r;try{await Su(i,t)}catch(f){if(c)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:c};throw f}try{const f=await Ru(r);return s.deleteThrottleMetadata(u),f}catch(f){const g=f;if(!Vu(g)){if(s.deleteThrottleMetadata(u),c)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:c};throw f}const I=Number((a=g==null?void 0:g.customData)===null||a===void 0?void 0:a.httpStatus)===503?as(e,s.intervalMillis,Eu):as(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(u,A),mt.debug(`Calling attemptFetch again in ${I} millis`),go(r,A,i,s)}}function Su(r,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),a=setTimeout(e,s);r.addEventListener(()=>{clearTimeout(a),i(vt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Vu(r){if(!(r instanceof Lr)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class Cu{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bu(r,t,e,i,s){if(s&&s.global){r("event",e,i);return}else{const a=await t,u=Object.assign(Object.assign({},i),{send_to:a});r("event",e,u)}}/**
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
 */async function ku(){if(fl())try{await dl()}catch(r){return mt.warn(vt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return mt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Du(r,t,e,i,s,a,u){var c;const f=Pu(r);f.then(C=>{e[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>mt.error(C)),t.push(f);const g=ku().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([f,g]);Tu(a)||pu(a,I.measurementId),s("js",new Date);const S=(c=u==null?void 0:u.config)!==null&&c!==void 0?c:{};return S[lu]="firebase",S.update=!0,A!=null&&(S[au]=A),s("config",I.measurementId,S),I.measurementId}/**
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
 */class Nu{constructor(t){this.app=t}_delete(){return delete Ue[this.app.options.appId],Promise.resolve()}}let Ue={},hs=[];const fs={};let Rr="dataLayer",Ou="gtag",ds,mo,ps=!1;function Mu(){const r=[];if(hl()&&r.push("This is a browser extension environment."),pl()||r.push("Cookies are not available."),r.length>0){const t=r.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=vt.create("invalid-analytics-context",{errorInfo:t});mt.warn(e.message)}}function xu(r,t,e){Mu();const i=r.options.appId;if(!i)throw vt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Ue[i]!=null)throw vt.create("already-exists",{id:i});if(!ps){gu(Rr);const{wrappedGtag:a,gtagCore:u}=vu(Ue,hs,fs,Rr,Ou);mo=a,ds=u,ps=!0}return Ue[i]=Du(r,hs,fs,t,ds,Rr,e),new Nu(r)}function Fu(r=zs()){r=Yt(r);const t=Je(r,bn);return t.isInitialized()?t.getImmediate():Lu(r)}function Lu(r,t={}){const e=Je(r,bn);if(e.isInitialized()){const s=e.getImmediate();if(cl(t,e.getOptions()))return s;throw vt.create("already-initialized")}return e.initialize({options:t})}function Uu(r,t,e,i){r=Yt(r),bu(mo,Ue[r.app.options.appId],t,e,i).catch(s=>mt.error(s))}const gs="@firebase/analytics",ms="0.10.3";function ju(){Ge(new ze(bn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return xu(i,s,e)},"PUBLIC")),Ge(new ze("analytics-internal",r,"PRIVATE")),Xt(gs,ms),Xt(gs,ms,"esm2017");function r(t){try{const e=t.getProvider(bn).getImmediate();return{logEvent:(i,s,a)=>Uu(e,i,s,a)}}catch(e){throw vt.create("interop-component-reg-failed",{reason:e})}}}ju();var Bu="firebase",qu="10.12.0";/**
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
 */Xt(Bu,qu,"app");var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _o;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,d){function m(){}m.prototype=d.prototype,T.D=d.prototype,T.prototype=new m,T.prototype.constructor=T,T.C=function(_,y,E){for(var p=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)p[Rt-2]=arguments[Rt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=T.g[0],m=T.g[1],y=T.g[2];var E=T.g[3],p=d+(E^m&(y^E))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=E+(y^d&(m^y))+_[1]+3905402710&4294967295,E=d+(p<<12&4294967295|p>>>20),p=y+(m^E&(d^m))+_[2]+606105819&4294967295,y=E+(p<<17&4294967295|p>>>15),p=m+(d^y&(E^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(E^m&(y^E))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=E+(y^d&(m^y))+_[5]+1200080426&4294967295,E=d+(p<<12&4294967295|p>>>20),p=y+(m^E&(d^m))+_[6]+2821735955&4294967295,y=E+(p<<17&4294967295|p>>>15),p=m+(d^y&(E^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(E^m&(y^E))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=E+(y^d&(m^y))+_[9]+2336552879&4294967295,E=d+(p<<12&4294967295|p>>>20),p=y+(m^E&(d^m))+_[10]+4294925233&4294967295,y=E+(p<<17&4294967295|p>>>15),p=m+(d^y&(E^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(E^m&(y^E))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=E+(y^d&(m^y))+_[13]+4254626195&4294967295,E=d+(p<<12&4294967295|p>>>20),p=y+(m^E&(d^m))+_[14]+2792965006&4294967295,y=E+(p<<17&4294967295|p>>>15),p=m+(d^y&(E^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^E&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=E+(m^y&(d^m))+_[6]+3225465664&4294967295,E=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(E^d))+_[11]+643717713&4294967295,y=E+(p<<14&4294967295|p>>>18),p=m+(E^d&(y^E))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^E&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=E+(m^y&(d^m))+_[10]+38016083&4294967295,E=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(E^d))+_[15]+3634488961&4294967295,y=E+(p<<14&4294967295|p>>>18),p=m+(E^d&(y^E))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^E&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=E+(m^y&(d^m))+_[14]+3275163606&4294967295,E=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(E^d))+_[3]+4107603335&4294967295,y=E+(p<<14&4294967295|p>>>18),p=m+(E^d&(y^E))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^E&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=E+(m^y&(d^m))+_[2]+4243563512&4294967295,E=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(E^d))+_[7]+1735328473&4294967295,y=E+(p<<14&4294967295|p>>>18),p=m+(E^d&(y^E))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^E)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=E+(d^m^y)+_[8]+2272392833&4294967295,E=d+(p<<11&4294967295|p>>>21),p=y+(E^d^m)+_[11]+1839030562&4294967295,y=E+(p<<16&4294967295|p>>>16),p=m+(y^E^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^E)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=E+(d^m^y)+_[4]+1272893353&4294967295,E=d+(p<<11&4294967295|p>>>21),p=y+(E^d^m)+_[7]+4139469664&4294967295,y=E+(p<<16&4294967295|p>>>16),p=m+(y^E^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^E)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=E+(d^m^y)+_[0]+3936430074&4294967295,E=d+(p<<11&4294967295|p>>>21),p=y+(E^d^m)+_[3]+3572445317&4294967295,y=E+(p<<16&4294967295|p>>>16),p=m+(y^E^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^E)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=E+(d^m^y)+_[12]+3873151461&4294967295,E=d+(p<<11&4294967295|p>>>21),p=y+(E^d^m)+_[15]+530742520&4294967295,y=E+(p<<16&4294967295|p>>>16),p=m+(y^E^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~E))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=E+(m^(d|~y))+_[7]+1126891415&4294967295,E=d+(p<<10&4294967295|p>>>22),p=y+(d^(E|~m))+_[14]+2878612391&4294967295,y=E+(p<<15&4294967295|p>>>17),p=m+(E^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~E))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=E+(m^(d|~y))+_[3]+2399980690&4294967295,E=d+(p<<10&4294967295|p>>>22),p=y+(d^(E|~m))+_[10]+4293915773&4294967295,y=E+(p<<15&4294967295|p>>>17),p=m+(E^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~E))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=E+(m^(d|~y))+_[15]+4264355552&4294967295,E=d+(p<<10&4294967295|p>>>22),p=y+(d^(E|~m))+_[6]+2734768916&4294967295,y=E+(p<<15&4294967295|p>>>17),p=m+(E^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~E))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=E+(m^(d|~y))+_[11]+3174756917&4294967295,E=d+(p<<10&4294967295|p>>>22),p=y+(d^(E|~m))+_[2]+718787259&4294967295,y=E+(p<<15&4294967295|p>>>17),p=m+(E^(y|~d))+_[9]+3951481745&4294967295,T.g[0]=T.g[0]+d&4294967295,T.g[1]=T.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+E&4294967295}i.prototype.u=function(T,d){d===void 0&&(d=T.length);for(var m=d-this.blockSize,_=this.B,y=this.h,E=0;E<d;){if(y==0)for(;E<=m;)s(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<d;)if(_[y++]=T.charCodeAt(E++),y==this.blockSize){s(this,_),y=0;break}}else for(;E<d;)if(_[y++]=T[E++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var d=1;d<T.length-8;++d)T[d]=0;var m=8*this.o;for(d=T.length-8;d<T.length;++d)T[d]=m&255,m/=256;for(this.u(T),T=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)T[m++]=this.g[d]>>>_&255;return T};function a(T,d){var m=c;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=d(T)}function u(T,d){this.h=d;for(var m=[],_=!0,y=T.length-1;0<=y;y--){var E=T[y]|0;_&&E==d||(m[y]=E,_=!1)}this.g=m}var c={};function f(T){return-128<=T&&128>T?a(T,function(d){return new u([d|0],0>d?-1:0)}):new u([T|0],0>T?-1:0)}function g(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return D(g(-T));for(var d=[],m=1,_=0;T>=m;_++)d[_]=T/m|0,m*=4294967296;return new u(d,0)}function I(T,d){if(T.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(T.charAt(0)=="-")return D(I(T.substring(1),d));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=A,y=0;y<T.length;y+=8){var E=Math.min(8,T.length-y),p=parseInt(T.substring(y,y+E),d);8>E?(E=g(Math.pow(d,E)),_=_.j(E).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var A=f(0),S=f(1),C=f(16777216);r=u.prototype,r.m=function(){if(M(this))return-D(this).m();for(var T=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);T+=(0<=_?_:4294967296+_)*d,d*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(M(this))return"-"+D(this).toString(T);for(var d=g(Math.pow(T,6)),m=this,_="";;){var y=it(m,d).g;m=z(m,y.j(d));var E=((0<m.g.length?m.g[0]:m.h)>>>0).toString(T);if(m=y,k(m))return E+_;for(;6>E.length;)E="0"+E;_=E+_}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var d=0;d<T.g.length;d++)if(T.g[d]!=0)return!1;return!0}function M(T){return T.h==-1}r.l=function(T){return T=z(this,T),M(T)?-1:k(T)?0:1};function D(T){for(var d=T.g.length,m=[],_=0;_<d;_++)m[_]=~T.g[_];return new u(m,~T.h).add(S)}r.abs=function(){return M(this)?D(this):this},r.add=function(T){for(var d=Math.max(this.g.length,T.g.length),m=[],_=0,y=0;y<=d;y++){var E=_+(this.i(y)&65535)+(T.i(y)&65535),p=(E>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);_=p>>>16,E&=65535,p&=65535,m[y]=p<<16|E}return new u(m,m[m.length-1]&-2147483648?-1:0)};function z(T,d){return T.add(D(d))}r.j=function(T){if(k(this)||k(T))return A;if(M(this))return M(T)?D(this).j(D(T)):D(D(this).j(T));if(M(T))return D(this.j(D(T)));if(0>this.l(C)&&0>T.l(C))return g(this.m()*T.m());for(var d=this.g.length+T.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<T.g.length;y++){var E=this.i(_)>>>16,p=this.i(_)&65535,Rt=T.i(y)>>>16,_e=T.i(y)&65535;m[2*_+2*y]+=p*_e,$(m,2*_+2*y),m[2*_+2*y+1]+=E*_e,$(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Rt,$(m,2*_+2*y+1),m[2*_+2*y+2]+=E*Rt,$(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new u(m,0)};function $(T,d){for(;(T[d]&65535)!=T[d];)T[d+1]+=T[d]>>>16,T[d]&=65535,d++}function Q(T,d){this.g=T,this.h=d}function it(T,d){if(k(d))throw Error("division by zero");if(k(T))return new Q(A,A);if(M(T))return d=it(D(T),d),new Q(D(d.g),D(d.h));if(M(d))return d=it(T,D(d)),new Q(D(d.g),d.h);if(30<T.g.length){if(M(T)||M(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=d;0>=_.l(T);)m=jt(m),_=jt(_);var y=gt(m,1),E=gt(_,1);for(_=gt(_,2),m=gt(m,2);!k(_);){var p=E.add(_);0>=p.l(T)&&(y=y.add(m),E=p),_=gt(_,1),m=gt(m,1)}return d=z(T,y.j(d)),new Q(y,d)}for(y=A;0<=T.l(d);){for(m=Math.max(1,Math.floor(T.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),E=g(m),p=E.j(d);M(p)||0<p.l(T);)m-=_,E=g(m),p=E.j(d);k(E)&&(E=S),y=y.add(E),T=z(T,p)}return new Q(y,T)}r.A=function(T){return it(this,T).h},r.and=function(T){for(var d=Math.max(this.g.length,T.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&T.i(_);return new u(m,this.h&T.h)},r.or=function(T){for(var d=Math.max(this.g.length,T.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|T.i(_);return new u(m,this.h|T.h)},r.xor=function(T){for(var d=Math.max(this.g.length,T.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^T.i(_);return new u(m,this.h^T.h)};function jt(T){for(var d=T.g.length+1,m=[],_=0;_<d;_++)m[_]=T.i(_)<<1|T.i(_-1)>>>31;return new u(m,T.h)}function gt(T,d){var m=d>>5;d%=32;for(var _=T.g.length-m,y=[],E=0;E<_;E++)y[E]=0<d?T.i(E+m)>>>d|T.i(E+m+1)<<32-d:T.i(E+m);return new u(y,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,_o=u}).apply(typeof _s<"u"?_s:typeof self<"u"?self:typeof window<"u"?window:{});var En=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yo,vo,Le,To,Pn,br,Eo,Io,wo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,l){return n==Array.prototype||n==Object.prototype||(n[o]=l.value),n};function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof En=="object"&&En];for(var o=0;o<n.length;++o){var l=n[o];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(n,o){if(o)t:{var l=i;n=n.split(".");for(var h=0;h<n.length-1;h++){var v=n[h];if(!(v in l))break t;l=l[v]}n=n[n.length-1],h=l[n],o=o(h),o!=h&&o!=null&&t(l,n,{configurable:!0,writable:!0,value:o})}}function a(n,o){n instanceof String&&(n+="");var l=0,h=!1,v={next:function(){if(!h&&l<n.length){var w=l++;return{value:o(w,n[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return a(this,function(o,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function g(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function I(n,o,l){return n.call.apply(n.bind,arguments)}function A(n,o,l){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function S(n,o,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,S.apply(null,arguments)}function C(n,o){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function k(n,o){function l(){}l.prototype=o.prototype,n.aa=o.prototype,n.prototype=new l,n.prototype.constructor=n,n.Qb=function(h,v,w){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return o.prototype[v].apply(h,V)}}function M(n){const o=n.length;if(0<o){const l=Array(o);for(let h=0;h<o;h++)l[h]=n[h];return l}return[]}function D(n,o){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=n.length||0,w=h.length||0;n.length=v+w;for(let V=0;V<w;V++)n[v+V]=h[V]}else n.push(h)}}class z{constructor(o,l){this.i=o,this.j=l,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function $(n){return/^[\s\xa0]*$/.test(n)}function Q(){var n=c.navigator;return n&&(n=n.userAgent)?n:""}function it(n){return it[" "](n),n}it[" "]=function(){};var jt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function gt(n,o,l){for(const h in n)o.call(l,n[h],h,n)}function T(n,o){for(const l in n)o.call(void 0,n[l],l,n)}function d(n){const o={};for(const l in n)o[l]=n[l];return o}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(n,o){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)n[l]=h[l];for(let w=0;w<m.length;w++)l=m[w],Object.prototype.hasOwnProperty.call(h,l)&&(n[l]=h[l])}}function y(n){var o=1;n=n.split(":");const l=[];for(;0<o&&n.length;)l.push(n.shift()),o--;return n.length&&l.push(n.join(":")),l}function E(n){c.setTimeout(()=>{throw n},0)}function p(){var n=Jn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class Rt{constructor(){this.h=this.g=null}add(o,l){const h=_e.get();h.set(o,l),this.h?this.h.next=h:this.g=h,this.h=h}}var _e=new z(()=>new Ia,n=>n.reset());class Ia{constructor(){this.next=this.g=this.h=null}set(o,l){this.h=o,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ve=!1,Jn=new Rt,si=()=>{const n=c.Promise.resolve(void 0);ye=()=>{n.then(wa)}};var wa=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(l){E(l)}var o=_e;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}ve=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Aa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const l=()=>{};c.addEventListener("test",l,o),c.removeEventListener("test",l,o)}catch{}return n}();function Te(n,o){if(st.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var l=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(jt){t:{try{it(o.nodeName);var v=!0;break t}catch{}v=!1}v||(o=null)}}else l=="mouseover"?o=n.fromElement:l=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ra[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Te.aa.h.call(this)}}k(Te,st);var Ra={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ee="closure_listenable_"+(1e6*Math.random()|0),Pa=0;function Sa(n,o,l,h,v){this.listener=n,this.proxy=null,this.src=o,this.type=l,this.capture=!!h,this.ha=v,this.key=++Pa,this.da=this.fa=!1}function rn(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function sn(n){this.src=n,this.g={},this.h=0}sn.prototype.add=function(n,o,l,h,v){var w=n.toString();n=this.g[w],n||(n=this.g[w]=[],this.h++);var V=tr(n,o,h,v);return-1<V?(o=n[V],l||(o.fa=!1)):(o=new Sa(o,this.src,w,!!h,v),o.fa=l,n.push(o)),o};function Zn(n,o){var l=o.type;if(l in n.g){var h=n.g[l],v=Array.prototype.indexOf.call(h,o,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(rn(o),n.g[l].length==0&&(delete n.g[l],n.h--))}}function tr(n,o,l,h){for(var v=0;v<n.length;++v){var w=n[v];if(!w.da&&w.listener==o&&w.capture==!!l&&w.ha==h)return v}return-1}var er="closure_lm_"+(1e6*Math.random()|0),nr={};function oi(n,o,l,h,v){if(h&&h.once)return li(n,o,l,h,v);if(Array.isArray(o)){for(var w=0;w<o.length;w++)oi(n,o[w],l,h,v);return null}return l=or(l),n&&n[Ee]?n.K(o,l,g(h)?!!h.capture:!!h,v):ai(n,o,l,!1,h,v)}function ai(n,o,l,h,v,w){if(!o)throw Error("Invalid event type");var V=g(v)?!!v.capture:!!v,U=ir(n);if(U||(n[er]=U=new sn(n)),l=U.add(o,l,h,V,w),l.proxy)return l;if(h=Va(),l.proxy=h,h.src=n,h.listener=l,n.addEventListener)Aa||(v=V),v===void 0&&(v=!1),n.addEventListener(o.toString(),h,v);else if(n.attachEvent)n.attachEvent(ci(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Va(){function n(l){return o.call(n.src,n.listener,l)}const o=Ca;return n}function li(n,o,l,h,v){if(Array.isArray(o)){for(var w=0;w<o.length;w++)li(n,o[w],l,h,v);return null}return l=or(l),n&&n[Ee]?n.L(o,l,g(h)?!!h.capture:!!h,v):ai(n,o,l,!0,h,v)}function ui(n,o,l,h,v){if(Array.isArray(o))for(var w=0;w<o.length;w++)ui(n,o[w],l,h,v);else h=g(h)?!!h.capture:!!h,l=or(l),n&&n[Ee]?(n=n.i,o=String(o).toString(),o in n.g&&(w=n.g[o],l=tr(w,l,h,v),-1<l&&(rn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete n.g[o],n.h--)))):n&&(n=ir(n))&&(o=n.g[o.toString()],n=-1,o&&(n=tr(o,l,h,v)),(l=-1<n?o[n]:null)&&rr(l))}function rr(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ee])Zn(o.i,n);else{var l=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(l,h,n.capture):o.detachEvent?o.detachEvent(ci(l),h):o.addListener&&o.removeListener&&o.removeListener(h),(l=ir(o))?(Zn(l,n),l.h==0&&(l.src=null,o[er]=null)):rn(n)}}}function ci(n){return n in nr?nr[n]:nr[n]="on"+n}function Ca(n,o){if(n.da)n=!0;else{o=new Te(o,this);var l=n.listener,h=n.ha||n.src;n.fa&&rr(n),n=l.call(h,o)}return n}function ir(n){return n=n[er],n instanceof sn?n:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function or(n){return typeof n=="function"?n:(n[sr]||(n[sr]=function(o){return n.handleEvent(o)}),n[sr])}function ot(){kt.call(this),this.i=new sn(this),this.M=this,this.F=null}k(ot,kt),ot.prototype[Ee]=!0,ot.prototype.removeEventListener=function(n,o,l,h){ui(this,n,o,l,h)};function dt(n,o){var l,h=n.F;if(h)for(l=[];h;h=h.F)l.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new st(o,n);else if(o instanceof st)o.target=o.target||n;else{var v=o;o=new st(h,n),_(o,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var V=o.g=l[w];v=on(V,h,!0,o)&&v}if(V=o.g=n,v=on(V,h,!0,o)&&v,v=on(V,h,!1,o)&&v,l)for(w=0;w<l.length;w++)V=o.g=l[w],v=on(V,h,!1,o)&&v}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var l=n.g[o],h=0;h<l.length;h++)rn(l[h]);delete n.g[o],n.h--}}this.F=null},ot.prototype.K=function(n,o,l,h){return this.i.add(String(n),o,!1,l,h)},ot.prototype.L=function(n,o,l,h){return this.i.add(String(n),o,!0,l,h)};function on(n,o,l,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,w=0;w<o.length;++w){var V=o[w];if(V&&!V.da&&V.capture==l){var U=V.listener,tt=V.ha||V.src;V.fa&&Zn(n.i,V),v=U.call(tt,h)!==!1&&v}}return v&&!h.defaultPrevented}function hi(n,o,l){if(typeof n=="function")l&&(n=S(n,l));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:c.setTimeout(n,o||0)}function fi(n){n.g=hi(()=>{n.g=null,n.i&&(n.i=!1,fi(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class ba extends kt{constructor(o,l){super(),this.m=o,this.l=l,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:fi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(n){kt.call(this),this.h=n,this.g={}}k(Ie,kt);var di=[];function pi(n){gt(n.g,function(o,l){this.g.hasOwnProperty(l)&&rr(o)},n),n.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),pi(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ar=c.JSON.stringify,ka=c.JSON.parse,Da=class{stringify(n){return c.JSON.stringify(n,void 0)}parse(n){return c.JSON.parse(n,void 0)}};function lr(){}lr.prototype.h=null;function gi(n){return n.h||(n.h=n.i())}function mi(){}var we={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){st.call(this,"d")}k(ur,st);function cr(){st.call(this,"c")}k(cr,st);var Bt={},_i=null;function an(){return _i=_i||new ot}Bt.La="serverreachability";function yi(n){st.call(this,Bt.La,n)}k(yi,st);function Ae(n){const o=an();dt(o,new yi(o))}Bt.STAT_EVENT="statevent";function vi(n,o){st.call(this,Bt.STAT_EVENT,n),this.stat=o}k(vi,st);function pt(n){const o=an();dt(o,new vi(o,n))}Bt.Ma="timingevent";function Ti(n,o){st.call(this,Bt.Ma,n),this.size=o}k(Ti,st);function Re(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){n()},o)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function Na(n,o,l,h,v,w){n.info(function(){if(n.g)if(w)for(var V="",U=w.split("&"),tt=0;tt<U.length;tt++){var L=U[tt].split("=");if(1<L.length){var at=L[0];L=L[1];var lt=at.split("_");V=2<=lt.length&&lt[1]=="type"?V+(at+"="+L+"&"):V+(at+"=redacted&")}}else V=null;else V=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+o+`
`+l+`
`+V})}function Oa(n,o,l,h,v,w,V){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+o+`
`+l+`
`+w+" "+V})}function ie(n,o,l,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+xa(n,l)+(h?" "+h:"")})}function Ma(n,o){n.info(function(){return"TIMEOUT: "+o})}Pe.prototype.info=function(){};function xa(n,o){if(!n.g)return o;if(!o)return null;try{var l=JSON.parse(o);if(l){for(n=0;n<l.length;n++)if(Array.isArray(l[n])){var h=l[n];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return ar(l)}catch{return o}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hr;function un(){}k(un,lr),un.prototype.g=function(){return new XMLHttpRequest},un.prototype.i=function(){return{}},hr=new un;function Dt(n,o,l,h){this.j=n,this.i=o,this.l=l,this.R=h||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ii}function Ii(){this.i=null,this.g="",this.h=!1}var wi={},fr={};function dr(n,o,l){n.L=1,n.v=dn(Pt(o)),n.m=l,n.P=!0,Ai(n,null)}function Ai(n,o){n.F=Date.now(),cn(n),n.A=Pt(n.v);var l=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),Li(l.i,"t",h),n.C=0,l=n.j.J,n.h=new Ii,n.g=ns(n.j,l?o:null,!n.m),0<n.O&&(n.M=new ba(S(n.Y,n,n.g),n.O)),o=n.U,l=n.g,h=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(di[0]=v.toString()),v=di);for(var w=0;w<v.length;w++){var V=oi(l,v[w],h||o.handleEvent,!1,o.h||o);if(!V)break;o.g[V.key]=V}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),Ae(),Na(n.i,n.u,n.A,n.l,n.R,n.m)}Dt.prototype.ca=function(n){n=n.target;const o=this.M;o&&St(n)==3?o.j():this.Y(n)},Dt.prototype.Y=function(n){try{if(n==this.g)t:{const lt=St(this.g);var o=this.g.Ba();const ae=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||zi(this.g)))){this.J||lt!=4||o==7||(o==8||0>=ae?Ae(3):Ae(2)),pr(this);var l=this.g.Z();this.X=l;e:if(Ri(this)){var h=zi(this.g);n="";var v=h.length,w=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Se(this);var V="";break e}this.h.i=new c.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(w&&o==v-1)});h.length=0,this.h.g+=n,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,Oa(this.i,this.u,this.A,this.l,this.R,lt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,tt=this.g;if((U=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(U)){var L=U;break e}}L=null}if(l=L)ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,l);else{this.o=!1,this.s=3,pt(12),qt(this),Se(this);break t}}if(this.P){l=!0;let Tt;for(;!this.J&&this.C<V.length;)if(Tt=Fa(this,V),Tt==fr){lt==4&&(this.s=4,pt(14),l=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==wi){this.s=4,pt(15),ie(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else ie(this.i,this.l,Tt,null),gr(this,Tt);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||V.length!=0||this.h.h||(this.s=1,pt(16),l=!1),this.o=this.o&&l,!l)ie(this.i,this.l,V,"[Invalid Chunked Response]"),qt(this),Se(this);else if(0<V.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Er(at),at.M=!0,pt(11))}}else ie(this.i,this.l,V,null),gr(this,V);lt==4&&qt(this),this.o&&!this.J&&(lt==4?Ji(this.j,this):(this.o=!1,cn(this)))}else tl(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),qt(this),Se(this)}}}catch{}finally{}};function Ri(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Fa(n,o){var l=n.C,h=o.indexOf(`
`,l);return h==-1?fr:(l=Number(o.substring(l,h)),isNaN(l)?wi:(h+=1,h+l>o.length?fr:(o=o.slice(h,h+l),n.C=h+l,o)))}Dt.prototype.cancel=function(){this.J=!0,qt(this)};function cn(n){n.S=Date.now()+n.I,Pi(n,n.I)}function Pi(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Re(S(n.ba,n),o)}function pr(n){n.B&&(c.clearTimeout(n.B),n.B=null)}Dt.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Ma(this.i,this.A),this.L!=2&&(Ae(),pt(17)),qt(this),this.s=2,Se(this)):Pi(this,this.S-n)};function Se(n){n.j.G==0||n.J||Ji(n.j,n)}function qt(n){pr(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,pi(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function gr(n,o){try{var l=n.j;if(l.G!=0&&(l.g==n||mr(l.h,n))){if(!n.K&&mr(l.h,n)&&l.G==3){try{var h=l.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<n.F)yn(l),mn(l);else break t;Tr(l),pt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Re(S(l.Za,l),6e3));if(1>=Ci(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Gt(l,11)}else if((n.K||l.g==n)&&yn(l),!$(o))for(v=l.Da.g.parse(o),o=0;o<v.length;o++){let L=v[o];if(l.T=L[0],L=L[1],l.G==2)if(L[0]=="c"){l.K=L[1],l.ia=L[2];const at=L[3];at!=null&&(l.la=at,l.j.info("VER="+l.la));const lt=L[4];lt!=null&&(l.Aa=lt,l.j.info("SVER="+l.Aa));const ae=L[5];ae!=null&&typeof ae=="number"&&0<ae&&(h=1.5*ae,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Tt=n.g;if(Tt){const Tn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tn){var w=h.h;w.g||Tn.indexOf("spdy")==-1&&Tn.indexOf("quic")==-1&&Tn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(_r(w,w.h),w.h=null))}if(h.D){const Ir=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ir&&(h.ya=Ir,B(h.I,h.D,Ir))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-n.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var V=n;if(h.qa=es(h,h.J?h.ia:null,h.W),V.K){bi(h.h,V);var U=V,tt=h.L;tt&&(U.I=tt),U.B&&(pr(U),cn(U)),h.g=V}else Xi(h);0<l.i.length&&_n(l)}else L[0]!="stop"&&L[0]!="close"||Gt(l,7);else l.G==3&&(L[0]=="stop"||L[0]=="close"?L[0]=="stop"?Gt(l,7):vr(l):L[0]!="noop"&&l.l&&l.l.ta(L),l.v=0)}}Ae(4)}catch{}}var La=class{constructor(n,o){this.g=n,this.map=o}};function Si(n){this.l=n||10,c.PerformanceNavigationTiming?(n=c.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vi(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ci(n){return n.h?1:n.g?n.g.size:0}function mr(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function _r(n,o){n.g?n.g.add(o):n.h=o}function bi(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Si.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ki(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const l of n.g.values())o=o.concat(l.D);return o}return M(n.i)}function Ua(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(f(n)){for(var o=[],l=n.length,h=0;h<l;h++)o.push(n[h]);return o}o=[],l=0;for(h in n)o[l++]=n[h];return o}function ja(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(f(n)||typeof n=="string"){var o=[];n=n.length;for(var l=0;l<n;l++)o.push(l);return o}o=[],l=0;for(const h in n)o[l++]=h;return o}}}function Di(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(f(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var l=ja(n),h=Ua(n),v=h.length,w=0;w<v;w++)o.call(void 0,h[w],l&&l[w],n)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ba(n,o){if(n){n=n.split("&");for(var l=0;l<n.length;l++){var h=n[l].indexOf("="),v=null;if(0<=h){var w=n[l].substring(0,h);v=n[l].substring(h+1)}else w=n[l];o(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function $t(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof $t){this.h=n.h,hn(this,n.j),this.o=n.o,this.g=n.g,fn(this,n.s),this.l=n.l;var o=n.i,l=new be;l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),Oi(this,l),this.m=n.m}else n&&(o=String(n).match(Ni))?(this.h=!1,hn(this,o[1]||"",!0),this.o=Ve(o[2]||""),this.g=Ve(o[3]||"",!0),fn(this,o[4]),this.l=Ve(o[5]||"",!0),Oi(this,o[6]||"",!0),this.m=Ve(o[7]||"")):(this.h=!1,this.i=new be(null,this.h))}$t.prototype.toString=function(){var n=[],o=this.j;o&&n.push(Ce(o,Mi,!0),":");var l=this.g;return(l||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Ce(o,Mi,!0),"@"),n.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&n.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&n.push("/"),n.push(Ce(l,l.charAt(0)=="/"?Ga:$a,!0))),(l=this.i.toString())&&n.push("?",l),(l=this.m)&&n.push("#",Ce(l,Ka)),n.join("")};function Pt(n){return new $t(n)}function hn(n,o,l){n.j=l?Ve(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function fn(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Oi(n,o,l){o instanceof be?(n.i=o,Ha(n.i,n.h)):(l||(o=Ce(o,za)),n.i=new be(o,n.h))}function B(n,o,l){n.i.set(o,l)}function dn(n){return B(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ve(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ce(n,o,l){return typeof n=="string"?(n=encodeURI(n).replace(o,qa),l&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function qa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Mi=/[#\/\?@]/g,$a=/[#\?:]/g,Ga=/[#\?]/g,za=/[#\?@]/g,Ka=/#/g;function be(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Nt(n){n.g||(n.g=new Map,n.h=0,n.i&&Ba(n.i,function(o,l){n.add(decodeURIComponent(o.replace(/\+/g," ")),l)}))}r=be.prototype,r.add=function(n,o){Nt(this),this.i=null,n=se(this,n);var l=this.g.get(n);return l||this.g.set(n,l=[]),l.push(o),this.h+=1,this};function xi(n,o){Nt(n),o=se(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Fi(n,o){return Nt(n),o=se(n,o),n.g.has(o)}r.forEach=function(n,o){Nt(this),this.g.forEach(function(l,h){l.forEach(function(v){n.call(o,v,h,this)},this)},this)},r.na=function(){Nt(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),l=[];for(let h=0;h<o.length;h++){const v=n[h];for(let w=0;w<v.length;w++)l.push(o[h])}return l},r.V=function(n){Nt(this);let o=[];if(typeof n=="string")Fi(this,n)&&(o=o.concat(this.g.get(se(this,n))));else{n=Array.from(this.g.values());for(let l=0;l<n.length;l++)o=o.concat(n[l])}return o},r.set=function(n,o){return Nt(this),this.i=null,n=se(this,n),Fi(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},r.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function Li(n,o,l){xi(n,o),0<l.length&&(n.i=null,n.g.set(se(n,o),M(l)),n.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var l=0;l<o.length;l++){var h=o[l];const w=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var v=w;V[h]!==""&&(v+="="+encodeURIComponent(String(V[h]))),n.push(v)}}return this.i=n.join("&")};function se(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Ha(n,o){o&&!n.j&&(Nt(n),n.i=null,n.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(xi(this,h),Li(this,v,l))},n)),n.j=o}function Qa(n,o){const l=new Pe;if(c.Image){const h=new Image;h.onload=C(Ot,l,"TestLoadImage: loaded",!0,o,h),h.onerror=C(Ot,l,"TestLoadImage: error",!1,o,h),h.onabort=C(Ot,l,"TestLoadImage: abort",!1,o,h),h.ontimeout=C(Ot,l,"TestLoadImage: timeout",!1,o,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Wa(n,o){const l=new Pe,h=new AbortController,v=setTimeout(()=>{h.abort(),Ot(l,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?Ot(l,"TestPingServer: ok",!0,o):Ot(l,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),Ot(l,"TestPingServer: error",!1,o)})}function Ot(n,o,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Xa(){this.g=new Da}function Ya(n,o,l){const h=l||"";try{Di(n,function(v,w){let V=v;g(v)&&(V=ar(v)),o.push(h+w+"="+encodeURIComponent(V))})}catch(v){throw o.push(h+"type="+encodeURIComponent("_badmap")),v}}function ke(n){this.l=n.Ub||null,this.j=n.eb||!1}k(ke,lr),ke.prototype.g=function(){return new pn(this.l,this.j)},ke.prototype.i=function(n){return function(){return n}}({});function pn(n,o){ot.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(pn,ot),r=pn.prototype,r.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Ne(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||c).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,De(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ui(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ui(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?De(this):Ne(this),this.readyState==3&&Ui(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,De(this))},r.Qa=function(n){this.g&&(this.response=n,De(this))},r.ga=function(){this.g&&De(this)};function De(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Ne(n)}r.setRequestHeader=function(n,o){this.u.append(n,o)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var l=o.next();!l.done;)l=l.value,n.push(l[0]+": "+l[1]),l=o.next();return n.join(`\r
`)};function Ne(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function ji(n){let o="";return gt(n,function(l,h){o+=h,o+=":",o+=l,o+=`\r
`}),o}function yr(n,o,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=ji(l),typeof n=="string"?l!=null&&encodeURIComponent(String(l)):B(n,o,l))}function K(n){ot.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(K,ot);var Ja=/^https?$/i,Za=["POST","PUT"];r=K.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,o,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hr.g(),this.v=this.o?gi(this.o):gi(hr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(w){Bi(this,w);return}if(n=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&n instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Za,o,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of l)this.g.setRequestHeader(w,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gi(this),this.u=!0,this.g.send(n),this.u=!1}catch(w){Bi(this,w)}};function Bi(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,qi(n),gn(n)}function qi(n){n.A||(n.A=!0,dt(n,"complete"),dt(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,dt(this,"complete"),dt(this,"abort"),gn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),K.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?$i(this):this.bb())},r.bb=function(){$i(this)};function $i(n){if(n.h&&typeof u<"u"&&(!n.v[1]||St(n)!=4||n.Z()!=2)){if(n.u&&St(n)==4)hi(n.Ea,0,n);else if(dt(n,"readystatechange"),St(n)==4){n.h=!1;try{const V=n.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var l;if(!(l=o)){var h;if(h=V===0){var v=String(n.D).match(Ni)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Ja.test(v?v.toLowerCase():"")}l=h}if(l)dt(n,"complete"),dt(n,"success");else{n.m=6;try{var w=2<St(n)?n.g.statusText:""}catch{w=""}n.l=w+" ["+n.Z()+"]",qi(n)}}finally{gn(n)}}}}function gn(n,o){if(n.g){Gi(n);const l=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||dt(n,"ready");try{l.onreadystatechange=h}catch{}}}function Gi(n){n.I&&(c.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function St(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),ka(o)}};function zi(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function tl(n){const o={};n=(n.g&&2<=St(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if($(n[h]))continue;var l=y(n[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=o[v]||[];o[v]=w,w.push(l)}T(o,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(n,o,l){return l&&l.internalChannelParams&&l.internalChannelParams[n]||o}function Ki(n){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oe("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oe("baseRetryDelayMs",5e3,n),this.cb=Oe("retryDelaySeedMs",1e4,n),this.Wa=Oe("forwardChannelMaxRetries",2,n),this.wa=Oe("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(n&&n.concurrentRequestLimit),this.Da=new Xa,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ki.prototype,r.la=8,r.G=1,r.connect=function(n,o,l,h){pt(0),this.W=n,this.H=o||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=es(this,null,this.W),_n(this)};function vr(n){if(Hi(n),n.G==3){var o=n.U++,l=Pt(n.I);if(B(l,"SID",n.K),B(l,"RID",o),B(l,"TYPE","terminate"),Me(n,l),o=new Dt(n,n.j,o),o.L=2,o.v=dn(Pt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(o.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=o.v,l=!0),l||(o.g=ns(o.j,null),o.g.ea(o.v)),o.F=Date.now(),cn(o)}ts(n)}function mn(n){n.g&&(Er(n),n.g.cancel(),n.g=null)}function Hi(n){mn(n),n.u&&(c.clearTimeout(n.u),n.u=null),yn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&c.clearTimeout(n.s),n.s=null)}function _n(n){if(!Vi(n.h)&&!n.s){n.s=!0;var o=n.Ga;ye||si(),ve||(ye(),ve=!0),Jn.add(o,n),n.B=0}}function el(n,o){return Ci(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=Re(S(n.Ga,n,o),Zi(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new Dt(this,this.j,n);let w=this.o;if(this.S&&(w?(w=d(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var o=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=l;break t}if(o===4096||l===this.i.length-1){o=l+1;break t}}o=1e3}else o=1e3;o=Wi(this,v,o),l=Pt(this.I),B(l,"RID",n),B(l,"CVER",22),this.D&&B(l,"X-HTTP-Session-Id",this.D),Me(this,l),w&&(this.O?o="headers="+encodeURIComponent(String(ji(w)))+"&"+o:this.m&&yr(l,this.m,w)),_r(this.h,v),this.Ua&&B(l,"TYPE","init"),this.P?(B(l,"$req",o),B(l,"SID","null"),v.T=!0,dr(v,l,null)):dr(v,l,o),this.G=2}}else this.G==3&&(n?Qi(this,n):this.i.length==0||Vi(this.h)||Qi(this))};function Qi(n,o){var l;o?l=o.l:l=n.U++;const h=Pt(n.I);B(h,"SID",n.K),B(h,"RID",l),B(h,"AID",n.T),Me(n,h),n.m&&n.o&&yr(h,n.m,n.o),l=new Dt(n,n.j,l,n.B+1),n.m===null&&(l.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Wi(n,l,1e3),l.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),_r(n.h,l),dr(l,h,o)}function Me(n,o){n.H&&gt(n.H,function(l,h){B(o,h,l)}),n.l&&Di({},function(l,h){B(o,h,l)})}function Wi(n,o,l){l=Math.min(n.i.length,l);var h=n.l?S(n.l.Na,n.l,n):null;t:{var v=n.i;let w=-1;for(;;){const V=["count="+l];w==-1?0<l?(w=v[0].g,V.push("ofs="+w)):w=0:V.push("ofs="+w);let U=!0;for(let tt=0;tt<l;tt++){let L=v[tt].g;const at=v[tt].map;if(L-=w,0>L)w=Math.max(0,v[tt].g-100),U=!1;else try{Ya(at,V,"req"+L+"_")}catch{h&&h(at)}}if(U){h=V.join("&");break t}}}return n=n.i.splice(0,l),o.D=n,h}function Xi(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;ye||si(),ve||(ye(),ve=!0),Jn.add(o,n),n.v=0}}function Tr(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=Re(S(n.Fa,n),Zi(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,Yi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=Re(S(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),mn(this),Yi(this))};function Er(n){n.A!=null&&(c.clearTimeout(n.A),n.A=null)}function Yi(n){n.g=new Dt(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=Pt(n.qa);B(o,"RID","rpc"),B(o,"SID",n.K),B(o,"AID",n.T),B(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&B(o,"TO",n.ja),B(o,"TYPE","xmlhttp"),Me(n,o),n.m&&n.o&&yr(o,n.m,n.o),n.L&&(n.g.I=n.L);var l=n.g;n=n.ia,l.L=1,l.v=dn(Pt(o)),l.m=null,l.P=!0,Ai(l,n)}r.Za=function(){this.C!=null&&(this.C=null,mn(this),Tr(this),pt(19))};function yn(n){n.C!=null&&(c.clearTimeout(n.C),n.C=null)}function Ji(n,o){var l=null;if(n.g==o){yn(n),Er(n),n.g=null;var h=2}else if(mr(n.h,o))l=o.D,bi(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){l=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;h=an(),dt(h,new Ti(h,l)),_n(n)}else Xi(n);else if(v=o.s,v==3||v==0&&0<o.X||!(h==1&&el(n,o)||h==2&&Tr(n)))switch(l&&0<l.length&&(o=n.h,o.i=o.i.concat(l)),v){case 1:Gt(n,5);break;case 4:Gt(n,10);break;case 3:Gt(n,6);break;default:Gt(n,2)}}}function Zi(n,o){let l=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(l*=2),l*o}function Gt(n,o){if(n.j.info("Error code "+o),o==2){var l=S(n.fb,n),h=n.Xa;const v=!h;h=new $t(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hn(h,"https"),dn(h),v?Qa(h.toString(),l):Wa(h.toString(),l)}else pt(2);n.G=0,n.l&&n.l.sa(o),ts(n),Hi(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ts(n){if(n.G=0,n.ka=[],n.l){const o=ki(n.h);(o.length!=0||n.i.length!=0)&&(D(n.ka,o),D(n.ka,n.i),n.h.i.length=0,M(n.i),n.i.length=0),n.l.ra()}}function es(n,o,l){var h=l instanceof $t?Pt(l):new $t(l);if(h.g!="")o&&(h.g=o+"."+h.g),fn(h,h.s);else{var v=c.location;h=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var w=new $t(null);h&&hn(w,h),o&&(w.g=o),v&&fn(w,v),l&&(w.l=l),h=w}return l=n.D,o=n.ya,l&&o&&B(h,l,o),B(h,"VER",n.la),Me(n,h),h}function ns(n,o,l){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new K(new ke({eb:l})):new K(n.pa),o.Ha(n.J),o}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function rs(){}r=rs.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function vn(){}vn.prototype.g=function(n,o){return new yt(n,o)};function yt(n,o){ot.call(this),this.g=new Ki(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!$(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!$(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new oe(this)}k(yt,ot),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){vr(this.g)},yt.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var l={};l.__data__=n,n=l}else this.u&&(l={},l.__data__=ar(n),n=l);o.i.push(new La(o.Ya++,n)),o.G==3&&_n(o)},yt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,yt.aa.N.call(this)};function is(n){ur.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const l in o){n=l;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}k(is,ur);function ss(){cr.call(this),this.status=1}k(ss,cr);function oe(n){this.g=n}k(oe,rs),oe.prototype.ua=function(){dt(this.g,"a")},oe.prototype.ta=function(n){dt(this.g,new is(n))},oe.prototype.sa=function(n){dt(this.g,new ss)},oe.prototype.ra=function(){dt(this.g,"b")},vn.prototype.createWebChannel=vn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,wo=function(){return new vn},Io=function(){return an()},Eo=Bt,br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Pn=ln,Ei.COMPLETE="complete",To=Ei,mi.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Le=mi,vo=ke,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,yo=K}).apply(typeof En<"u"?En:typeof self<"u"?self:typeof window<"u"?window:{});const ys="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Ks("@firebase/firestore");function xe(){return te.logLevel}function b(r,...t){if(te.logLevel<=Mt.DEBUG){const e=t.map(Gr);te.debug(`Firestore (${ge}): ${r}`,...e)}}function ee(r,...t){if(te.logLevel<=Mt.ERROR){const e=t.map(Gr);te.error(`Firestore (${ge}): ${r}`,...e)}}function kn(r,...t){if(te.logLevel<=Mt.WARN){const e=t.map(Gr);te.warn(`Firestore (${ge}): ${r}`,...e)}}function Gr(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(r="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+r;throw ee(t),new Error(t)}function Z(r,t){r||x()}function q(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Lr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $u{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class Gu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zu{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let a=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Z(typeof i.accessToken=="string"),new Ao(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new ct(t)}}class Ku{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Ku(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=a=>{a.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new Qu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Xu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<r;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Xu(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<e&&(i+=t.charAt(s[a]%t.length))}return i}}function j(r,t){return r<t?-1:r>t?1:0}function ce(r,t,e){return r.length===t.length&&r.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new J(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new J(0,0))}static max(){return new G(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const a=t.get(s),u=e.get(s);if(a<u)return-1;if(a>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends Ke{construct(t,e,i){return new H(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Yu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ke{construct(t,e,i){return new rt(t,e,i)}static isValidIdentifier(t){return Yu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const a=()=>{if(i.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(a(),s++)}if(a(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(H.fromString(t))}static fromName(t){return new O(H.fromString(t).popFirst(5))}static empty(){return new O(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new H(t.slice()))}}function Ju(r,t){const e=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new J(e+1,0):new J(e,i));return new Ft(s,O.empty(),t)}function Zu(r){return new Ft(r.readTime,r.key,-1)}class Ft{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ft(G.min(),O.empty(),-1)}static max(){return new Ft(G.max(),O.empty(),-1)}}function tc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
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
 */const ec="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==ec)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,a=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++a,u&&a===s&&e()},f=>i(f))}),u=!0,a===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,a)=>{i.push(e.call(this,s,a))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const a=t.length,u=new Array(a);let c=0;for(let f=0;f<a;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++c,c===a&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):i()};a()})}}function rc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $n(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}So.oe=-1;function zr(r){return r==null}function Dn(r){return r===0&&1/r==-1/0}function ic(r){return typeof r=="number"&&Number.isInteger(r)&&!Dn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ze(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Vo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||et.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new In(this.root,t,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new In(this.root,t,this.comparator,!0)}}class In{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?i(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class et{constructor(t,e,i,s,a){this.key=t,this.value=e,this.color=i!=null?i:et.RED,this.left=s!=null?s:et.EMPTY,this.right=a!=null?a:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,a){return new et(t!=null?t:this.key,e!=null?e:this.value,i!=null?i:this.color,s!=null?s:this.left,a!=null?a:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,i),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,a){return this}insert(t,e,i){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ts(this.data.getIterator())}getIteratorFrom(t){return new Ts(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Ts{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ft(rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class sc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new sc("Invalid base64 string: "+a):a}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const oc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(r){if(Z(!!r),typeof r=="string"){let t=0;const e=oc.exec(r);if(Z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function He(r){return typeof r=="string"?bt.fromBase64String(r):bt.fromUint8Array(r)}/**
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
 */function Kr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Co(r){const t=r.mapValue.fields.__previous_value__;return Kr(t)?Co(t):t}function Nn(r){const t=ne(r.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e,i,s,a,u,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}class On{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new On("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof On&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Kr(r)?4:lc(r)?9007199254740991:10:x()}function At(r,t){if(r===t)return!0;const e=he(r);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Nn(r).isEqual(Nn(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ne(s.timestampValue),c=ne(a.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,a){return He(s.bytesValue).isEqual(He(a.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,a){return nt(s.geoPointValue.latitude)===nt(a.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(a.geoPointValue.longitude)}(r,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return nt(s.integerValue)===nt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=nt(s.doubleValue),c=nt(a.doubleValue);return u===c?Dn(u)===Dn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return ce(r.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,a){const u=s.mapValue.fields||{},c=a.mapValue.fields||{};if(vs(u)!==vs(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!At(u[f],c[f])))return!1;return!0}(r,t);default:return x()}}function Qe(r,t){return(r.values||[]).find(e=>At(e,t))!==void 0}function fe(r,t){if(r===t)return 0;const e=he(r),i=he(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(a,u){const c=nt(a.integerValue||a.doubleValue),f=nt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return Es(r.timestampValue,t.timestampValue);case 4:return Es(Nn(r),Nn(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(a,u){const c=He(a),f=He(u);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(a,u){const c=a.split("/"),f=u.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=j(c[g],f[g]);if(I!==0)return I}return j(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(a,u){const c=j(nt(a.latitude),nt(u.latitude));return c!==0?c:j(nt(a.longitude),nt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(a,u){const c=a.values||[],f=u.values||[];for(let g=0;g<c.length&&g<f.length;++g){const I=fe(c[g],f[g]);if(I)return I}return j(c.length,f.length)}(r.arrayValue,t.arrayValue);case 10:return function(a,u){if(a===wn.mapValue&&u===wn.mapValue)return 0;if(a===wn.mapValue)return 1;if(u===wn.mapValue)return-1;const c=a.fields||{},f=Object.keys(c),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=j(f[A],I[A]);if(S!==0)return S;const C=fe(c[f[A]],g[I[A]]);if(C!==0)return C}return j(f.length,I.length)}(r.mapValue,t.mapValue);default:throw x()}}function Es(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=ne(r),i=ne(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function de(r){return kr(r)}function kr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const i=ne(e);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return He(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let i="[",s=!0;for(const a of e.values||[])s?s=!1:i+=",",i+=kr(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${kr(e.fields[u])}`;return s+"}"}(r.mapValue):x()}function Dr(r){return!!r&&"integerValue"in r}function Hr(r){return!!r&&"arrayValue"in r}function Sn(r){return!!r&&"mapValue"in r}function je(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ze(r.mapValue.fields,(e,i)=>t.mapValue.fields[e]=je(i)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=je(r.arrayValue.values[e]);return t}return Object.assign({},r)}function lc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Sn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=je(e)}setAll(t){let e=rt.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=je(u):s.push(c.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,i,s)}delete(t){const e=this.field(t.popLast());Sn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Sn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Ze(e,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new It(je(this.value))}}function bo(r){const t=[];return Ze(r.fields,(e,i)=>{const s=new rt([e]);if(Sn(i)){const a=bo(i.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,i,s,a,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Et(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new Et(t,2,e,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mn{constructor(t,e){this.position=t,this.inclusive=e}}function Is(r,t,e){let i=0;for(let s=0;s<r.position.length;s++){const a=t[s],u=r.position[s];if(a.field.isKeyField()?i=O.comparator(O.fromName(u.referenceValue),e.key):i=fe(u,e.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function ws(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!At(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function uc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ko{}class Y extends ko{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new hc(t,e,i):e==="array-contains"?new pc(t,i):e==="in"?new gc(t,i):e==="not-in"?new mc(t,i):e==="array-contains-any"?new _c(t,i):new Y(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new fc(t,i):new dc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fe(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends ko{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Lt(t,e)}matches(t){return Do(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Do(r){return r.op==="and"}function No(r){return cc(r)&&Do(r)}function cc(r){for(const t of r.filters)if(t instanceof Lt)return!1;return!0}function Nr(r){if(r instanceof Y)return r.field.canonicalString()+r.op.toString()+de(r.value);if(No(r))return r.filters.map(t=>Nr(t)).join(",");{const t=r.filters.map(e=>Nr(e)).join(",");return`${r.op}(${t})`}}function Oo(r,t){return r instanceof Y?function(i,s){return s instanceof Y&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(r,t):r instanceof Lt?function(i,s){return s instanceof Lt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,c)=>a&&Oo(u,s.filters[c]),!0):!1}(r,t):void x()}function Mo(r){return r instanceof Y?function(e){return`${e.field.canonicalString()} ${e.op} ${de(e.value)}`}(r):r instanceof Lt?function(e){return e.op.toString()+" {"+e.getFilters().map(Mo).join(" ,")+"}"}(r):"Filter"}class hc extends Y{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class fc extends Y{constructor(t,e){super(t,"in",e),this.keys=xo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dc extends Y{constructor(t,e){super(t,"not-in",e),this.keys=xo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function xo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class pc extends Y{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hr(e)&&Qe(e.arrayValue,this.value)}}class gc extends Y{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qe(this.value.arrayValue,e)}}class mc extends Y{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Qe(this.value.arrayValue,e)}}class _c extends Y{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Qe(this.value.arrayValue,i))}}/**
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
 */class yc{constructor(t,e=null,i=[],s=[],a=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=c,this.ue=null}}function As(r,t=null,e=[],i=[],s=null,a=null,u=null){return new yc(r,t,e,i,s,a,u)}function Qr(r){const t=q(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Nr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>de(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>de(i)).join(",")),t.ue=e}return t.ue}function Wr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!uc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Oo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ws(r.startAt,t.startAt)&&ws(r.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e=null,i=[],s=[],a=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vc(r,t,e,i,s,a,u,c){return new Gn(r,t,e,i,s,a,u,c)}function Tc(r){return new Gn(r)}function Rs(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ec(r){return r.collectionGroup!==null}function Be(r){const t=q(r);if(t.ce===null){t.ce=[];const e=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ft(rt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.ce.push(new xn(a,i))}),e.has(rt.keyField().canonicalString())||t.ce.push(new xn(rt.keyField(),i))}return t.ce}function Wt(r){const t=q(r);return t.le||(t.le=Ic(t,Be(r))),t.le}function Ic(r,t){if(r.limitType==="F")return As(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new xn(s.field,a)});const e=r.endAt?new Mn(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Mn(r.startAt.position,r.startAt.inclusive):null;return As(r.path,r.collectionGroup,t,r.filters,r.limit,e,i)}}function Or(r,t,e){return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Fo(r,t){return Wr(Wt(r),Wt(t))&&r.limitType===t.limitType}function Lo(r){return`${Qr(Wt(r))}|lt:${r.limitType}`}function Fe(r){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Mo(s)).join(", ")}]`),zr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>de(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>de(s)).join(",")),`Target(${i})`}(Wt(r))}; limitType=${r.limitType})`}function Xr(r,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):O.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,t)&&function(i,s){for(const a of Be(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(r,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const g=Is(u,c,f);return u.inclusive?g<=0:g<0}(i.startAt,Be(i),s)||i.endAt&&!function(u,c,f){const g=Is(u,c,f);return u.inclusive?g>=0:g>0}(i.endAt,Be(i),s))}(r,t)}function wc(r){return(t,e)=>{let i=!1;for(const s of Be(r)){const a=Ac(s,t,e);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function Ac(r,t,e){const i=r.field.isKeyField()?O.comparator(t.key,e.key):function(a,u,c){const f=u.data.field(a),g=c.data.field(a);return f!==null&&g!==null?fe(f,g):x()}(r.field,t,e);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return Vo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new _t(O.comparator);function Fn(){return Rc}const Uo=new _t(O.comparator);function An(...r){let t=Uo;for(const e of r)t=t.insert(e.key,e);return t}function jo(r){let t=Uo;return r.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Ht(){return qe()}function Bo(){return qe()}function qe(){return new me(r=>r.toString(),(r,t)=>r.isEqual(t))}const Pc=new _t(O.comparator),Sc=new ft(O.comparator);function ht(...r){let t=Sc;for(const e of r)t=t.add(e);return t}const Vc=new ft(j);function Cc(){return Vc}/**
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
 */function qo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dn(t)?"-0":t}}function $o(r){return{integerValue:""+r}}function bc(r,t){return ic(t)?$o(t):qo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this._=void 0}}function kc(r,t,e){return r instanceof Ln?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Kr(a)&&(a=Co(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(e,t):r instanceof We?zo(r,t):r instanceof Xe?Ko(r,t):function(s,a){const u=Go(s,a),c=Ps(u)+Ps(s.Pe);return Dr(u)&&Dr(s.Pe)?$o(c):qo(s.serializer,c)}(r,t)}function Dc(r,t,e){return r instanceof We?zo(r,t):r instanceof Xe?Ko(r,t):e}function Go(r,t){return r instanceof Un?function(i){return Dr(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class Ln extends zn{}class We extends zn{constructor(t){super(),this.elements=t}}function zo(r,t){const e=Ho(t);for(const i of r.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class Xe extends zn{constructor(t){super(),this.elements=t}}function Ko(r,t){let e=Ho(t);for(const i of r.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class Un extends zn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ps(r){return nt(r.integerValue||r.doubleValue)}function Ho(r){return Hr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Nc(r,t){return r.field.isEqual(t.field)&&function(i,s){return i instanceof We&&s instanceof We||i instanceof Xe&&s instanceof Xe?ce(i.elements,s.elements,At):i instanceof Un&&s instanceof Un?At(i.Pe,s.Pe):i instanceof Ln&&s instanceof Ln}(r.transform,t.transform)}class Oc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Kn{}function Qo(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Xo(r.key,Vt.none()):new tn(r.key,r.data,Vt.none());{const e=r.data,i=It.empty();let s=new ft(rt.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new re(r.key,i,new wt(s.toArray()),Vt.none())}}function Mc(r,t,e){r instanceof tn?function(s,a,u){const c=s.value.clone(),f=Vs(s.fieldTransforms,a,u.transformResults);c.setAll(f),a.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof re?function(s,a,u){if(!Vn(s.precondition,a))return void a.convertToUnknownDocument(u.version);const c=Vs(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(Wo(s)),f.setAll(c),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function $e(r,t,e,i){return r instanceof tn?function(a,u,c,f){if(!Vn(a.precondition,u))return c;const g=a.value.clone(),I=Cs(a.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(r,t,e,i):r instanceof re?function(a,u,c,f){if(!Vn(a.precondition,u))return c;const g=Cs(a.fieldTransforms,f,u),I=u.data;return I.setAll(Wo(a)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(A=>A.field))}(r,t,e,i):function(a,u,c){return Vn(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function xc(r,t){let e=null;for(const i of r.fieldTransforms){const s=t.data.field(i.field),a=Go(i.transform,s||null);a!=null&&(e===null&&(e=It.empty()),e.set(i.field,a))}return e||null}function Ss(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ce(i,s,(a,u)=>Nc(a,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class tn extends Kn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class re extends Kn{constructor(t,e,i,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Wo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=r.data.field(e);t.set(e,i)}}),t}function Vs(r,t,e){const i=new Map;Z(r.length===e.length);for(let s=0;s<e.length;s++){const a=r[s],u=a.transform,c=t.data.field(a.field);i.set(a.field,Dc(u,c,e[s]))}return i}function Cs(r,t,e){const i=new Map;for(const s of r){const a=s.transform,u=e.data.field(s.field);i.set(s.field,kc(a,u,t))}return i}class Xo extends Kn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fc extends Kn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&Mc(a,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Bo();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let c=this.applyToLocalView(u,a.mutatedFields);c=e.has(s.key)?null:c;const f=Qo(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(G.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(e,i)=>Ss(e,i))&&ce(this.baseMutations,t.baseMutations,(e,i)=>Ss(e,i))}}class Yr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Z(t.mutations.length===i.length);let s=function(){return Pc}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new Yr(t,e,i,s)}}/**
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
 */class Uc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,F;function jc(r){switch(r){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Bc(r){if(r===void 0)return ee("GRPC error has no .code"),P.UNKNOWN;switch(r){case W.OK:return P.OK;case W.CANCELLED:return P.CANCELLED;case W.UNKNOWN:return P.UNKNOWN;case W.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case W.INTERNAL:return P.INTERNAL;case W.UNAVAILABLE:return P.UNAVAILABLE;case W.UNAUTHENTICATED:return P.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case W.NOT_FOUND:return P.NOT_FOUND;case W.ALREADY_EXISTS:return P.ALREADY_EXISTS;case W.PERMISSION_DENIED:return P.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case W.ABORTED:return P.ABORTED;case W.OUT_OF_RANGE:return P.OUT_OF_RANGE;case W.UNIMPLEMENTED:return P.UNIMPLEMENTED;case W.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(F=W||(W={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new _o([4294967295,4294967295],0);class qc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $c(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Gc(r,t){return Mr(r,t.toTimestamp())}function ue(r){return Z(!!r),G.fromTimestamp(function(e){const i=ne(e);return new J(i.seconds,i.nanos)}(r))}function Yo(r,t){return xr(r,t).canonicalString()}function xr(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function zc(r){const t=H.fromString(r);return Z(Zc(t)),t}function Fr(r,t){return Yo(r.databaseId,t.path)}function Kc(r){const t=zc(r);return t.length===4?H.emptyPath():Qc(t)}function Hc(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Qc(r){return Z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function bs(r,t,e){return{name:Fr(r,t),fields:e.value.mapValue.fields}}function Wc(r,t){let e;if(t instanceof tn)e={update:bs(r,t.key,t.value)};else if(t instanceof Xo)e={delete:Fr(r,t.key)};else if(t instanceof re)e={update:bs(r,t.key,t.data),updateMask:Jc(t.fieldMask)};else{if(!(t instanceof Fc))return x();e={verify:Fr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(a,u){const c=u.transform;if(c instanceof Ln)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof We)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Un)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:Gc(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:x()}(r,t.precondition)),e}function Xc(r,t){return r&&r.length>0?(Z(t!==void 0),r.map(e=>function(s,a){let u=s.updateTime?ue(s.updateTime):ue(a);return u.isEqual(G.min())&&(u=ue(a)),new Oc(u,s.transformResults||[])}(e,t))):[]}function Yc(r){let t=Kc(r.parent);const e=r.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Z(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let a=[];e.where&&(a=function(A){const S=Jo(A);return S instanceof Lt&&No(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(S=>function(k){return new xn(le(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(A){let S;return S=typeof A=="object"?A.value:A,zr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,C=A.values||[];return new Mn(C,S)}(e.startAt));let g=null;return e.endAt&&(g=function(A){const S=!A.before,C=A.values||[];return new Mn(C,S)}(e.endAt)),vc(t,s,u,a,c,"F",f,g)}function Jo(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=le(e.unaryFilter.field);return Y.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=le(e.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=le(e.unaryFilter.field);return Y.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=le(e.unaryFilter.field);return Y.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(r):r.fieldFilter!==void 0?function(e){return Y.create(le(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Lt.create(e.compositeFilter.filters.map(i=>Jo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(r):x()}function le(r){return rt.fromServerFormat(r.fieldPath)}function Jc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zc(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t){this.ct=t}}function eh(r){const t=Yc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Or(t,t.limit,"L"):t}/**
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
 */class nh{constructor(){this._n=new rh}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ft.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ft.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class rh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ft(H.comparator),a=!s.has(i);return this.index[e]=s.add(i),a}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ft(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pe(0)}static Ln(){return new pe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class sh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&$e(i.mutation,s,wt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ht()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ht()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(a=>{let u=An();return a.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Ht();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ht()))}populateOverlays(t,e,i){const s=[];return i.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let a=Fn();const u=qe(),c=function(){return qe()}();return e.forEach((f,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof re)?a=a.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),$e(I.mutation,g,I.mutation.getFieldMask(),J.now())):u.set(g.key,wt.empty())}),this.recalculateAndSaveOverlays(t,a).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var A;return c.set(g,new sh(I,(A=u.get(g))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const i=qe();let s=new _t((u,c)=>u-c),a=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=i.get(f)||wt.empty();I=c.applyToLocalView(g,I),i.set(f,I);const A=(s.get(c.batchId)||ht()).add(f);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,A=Bo();I.forEach(S=>{if(!a.has(S)){const C=Qo(e.get(S),i.get(S));C!==null&&A.set(S,C),a=a.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,A))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ec(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-a.size):R.resolve(Ht());let c=-1,f=a;return u.next(g=>R.forEach(g,(I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),a.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,f,g,ht())).next(I=>({batchId:c,changes:jo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=An();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const a=e.collectionGroup;let u=An();return this.indexManager.getCollectionParents(t,a).next(c=>R.forEach(c,f=>{const g=function(A,S){return new Gn(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((A,S)=>{u=u.insert(A,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,a,s))).next(u=>{a.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,Et.newInvalidDocument(I)))});let c=An();return u.forEach((f,g)=>{const I=a.get(f);I!==void 0&&$e(I.mutation,g,wt.empty(),J.now()),Xr(e,g)&&(c=c.insert(f,g))}),c})}}/**
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
 */class ah{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:eh(s.bundledQuery),readTime:ue(s.readTime)}}(e)),R.resolve()}}/**
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
 */class lh{constructor(){this.overlays=new _t(O.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Ht();return R.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,a)=>{this.ht(t,e,a)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Ht(),a=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let a=new _t((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=a.get(g.largestBatchId);I===null&&(I=Ht(),a=a.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Ht(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Uc(e,i));let a=this.hr.get(e);a===void 0&&(a=ht(),this.hr.set(e,a)),this.hr.set(e,a.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.Pr=new ft(X.Ir),this.Tr=new ft(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new X(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new X(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new O(new H([])),i=new X(e,t),s=new X(e,t+1),a=[];return this.Tr.forEachInRange([i,s],u=>{this.Ar(u),a.push(u.key)}),a}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new H([])),i=new X(e,t),s=new X(e,t+1);let a=ht();return this.Tr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new X(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class X{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||j(t.pr,e.pr)}static Er(t,e){return j(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ft(X.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const a=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Lc(a,e,i,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new X(c.key,a)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),a=s<0?0:s;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new X(e,0),s=new X(e,Number.POSITIVE_INFINITY),a=[];return this.wr.forEachInRange([i,s],u=>{const c=this.Sr(u.pr);a.push(c)}),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ft(j);return e.forEach(s=>{const a=new X(s,0),u=new X(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([a,u],c=>{i=i.add(c.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let a=i;O.isDocumentKey(a)||(a=a.child(""));const u=new X(new O(a),0);let c=new ft(j);return this.wr.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(f.pr)),!0)},u),R.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const a=new X(s.key,e.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new X(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.vr=t,this.docs=function(){return new _t(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),a=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let i=Fn();return e.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():Et.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let a=Fn();const u=e.path,c=new O(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||tc(Zu(I),i)<=0||(s.has(I.key)||Xr(e,I))&&(a=a.insert(I.key,I.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,i,s){x()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new hh(this)}getSize(t){return R.resolve(this.size)}}class hh extends ih{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.persistence=t,this.Mr=new me(e=>Qr(e),Wr),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Jr,this.targetCount=0,this.Lr=pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const a=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Mr.delete(u),a.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(a).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){this.Br={},this.overlays={},this.kr=new So(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new fh(this),this.indexManager=new nh,this.remoteDocumentCache=function(s){return new ch(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new th(e),this.$r=new ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new uh(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){b("MemoryPersistence","Starting transaction:",t);const s=new ph(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(a=>this.referenceDelegate.Wr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class ph extends nc{constructor(t){super(),this.currentSequenceNumber=t}}class Zr{constructor(t){this.persistence=t,this.zr=new Jr,this.jr=null}static Hr(t){return new Zr(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.Jr.add(a.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=O.fromPath(i);return this.Yr(t,s).next(a=>{a||e.removeEntry(s,G.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ht(),s=ht();for(const a of e.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new ti(t,e.fromCache,i,s)}}/**
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
 */class gh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class mh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return yl()?8:rc(vl())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const a={result:null};return this.ji(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Hi(t,e,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new gh;return this.Ji(t,e,u).next(c=>{if(a.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>a.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(xe()<=Mt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(xe()<=Mt.DEBUG&&b("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(xe()<=Mt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Wt(e))):R.resolve())}ji(t,e){if(Rs(e))return R.resolve(null);let i=Wt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Or(e,null,"F"),i=Wt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const u=ht(...a);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.Zi(e,c);return this.Xi(e,g,u,f.readTime)?this.ji(t,Or(e,null,"F")):this.es(t,g,e,f)}))})))}Hi(t,e,i,s){return Rs(e)||s.isEqual(G.min())?R.resolve(null):this.zi.getDocuments(t,i).next(a=>{const u=this.Zi(e,a);return this.Xi(e,u,i,s)?R.resolve(null):(xe()<=Mt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.es(t,u,e,Ju(s,-1)).next(c=>c))})}Zi(t,e){let i=new ft(wc(t));return e.forEach((s,a)=>{Xr(t,a)&&(i=i.add(a))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ji(t,e,i){return xe()<=Mt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.zi.getDocumentsMatchingQuery(t,e,Ft.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class _h{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new _t(j),this.rs=new me(a=>Qr(a),Wr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new oh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function yh(r,t,e,i){return new _h(r,t,e,i)}async function Zo(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],c=[];let f=ht();for(const g of s){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of a){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(g=>({us:g,removedBatchIds:u,addedBatchIds:c}))})})}function vh(r,t){const e=q(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=e.os.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const A=g.batch,S=A.keys();let C=R.resolve();return S.forEach(k=>{C=C.next(()=>I.getEntry(f,k)).next(M=>{const D=g.docVersions.get(k);Z(D!==null),M.version.compareTo(D)<0&&(A.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),I.addEntry(M)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,i,t,a).next(()=>a.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ht();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Th(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Eh(r,t){const e=q(r);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class ks{constructor(){this.activeTargetIds=Cc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ih{constructor(){this.no=new ks,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ks,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class wh{io(t){}shutdown(){}}/**
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
 */class Ds{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rn=null;function Pr(){return Rn===null?Rn=function(){return 268435456+Math.round(2147483648*Math.random())}():Rn++,"0x"+Rn.toString(16)}/**
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
 */const Ah={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class Ph extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${a}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Do(){return!1}Co(e,i,s,a,u){const c=Pr(),f=this.vo(e,i.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const g={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(g,a,u),this.Mo(e,f,g,s).then(I=>(b("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw kn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}xo(e,i,s,a,u,c){return this.Co(e,i,s,a,u)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>e[u]=a),s&&s.headers.forEach((a,u)=>e[u]=a)}vo(e,i){const s=Ah[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const a=Pr();return new Promise((u,c)=>{const f=new yo;f.setWithCredentials(!0),f.listenOnce(To.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pn.NO_ERROR:const I=f.getResponseJson();b(ut,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),u(I);break;case Pn.TIMEOUT:b(ut,`RPC '${t}' ${a} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Pn.HTTP_ERROR:const A=f.getStatus();if(b(ut,`RPC '${t}' ${a} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function(D){const z=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN}(C.status);c(new N(k,C.message))}else c(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{b(ut,`RPC '${t}' ${a} completed.`)}});const g=JSON.stringify(s);b(ut,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",g,i,15)})}Oo(t,e,i){const s=Pr(),a=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=wo(),c=Io(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new vo({})),this.Fo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=a.join("");b(ut,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=u.createWebChannel(I,f);let S=!1,C=!1;const k=new Rh({lo:D=>{C?b(ut,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(S||(b(ut,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),b(ut,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},ho:()=>A.close()}),M=(D,z,$)=>{D.listen(z,Q=>{try{$(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return M(A,Le.EventType.OPEN,()=>{C||(b(ut,`RPC '${t}' stream ${s} transport opened.`),k.mo())}),M(A,Le.EventType.CLOSE,()=>{C||(C=!0,b(ut,`RPC '${t}' stream ${s} transport closed`),k.po())}),M(A,Le.EventType.ERROR,D=>{C||(C=!0,kn(ut,`RPC '${t}' stream ${s} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),M(A,Le.EventType.MESSAGE,D=>{var z;if(!C){const $=D.data[0];Z(!!$);const Q=$,it=Q.error||((z=Q[0])===null||z===void 0?void 0:z.error);if(it){b(ut,`RPC '${t}' stream ${s} received error:`,it);const jt=it.status;let gt=function(m){const _=W[m];if(_!==void 0)return Bc(_)}(jt),T=it.message;gt===void 0&&(gt=P.INTERNAL,T="Unknown error status: "+jt+" with message "+it.message),C=!0,k.po(new N(gt,T)),A.close()}else b(ut,`RPC '${t}' stream ${s} received:`,$),k.yo($)}}),M(c,Eo.STAT_EVENT,D=>{D.stat===br.PROXY?b(ut,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===br.NOPROXY&&b(ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Sr(){return typeof document<"u"?document:null}/**
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
 */function Hn(r){return new qc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e,i=1e3,s=1.5,a=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=a,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,i,s,a,u,c,f){this.oi=t,this.Go=i,this.zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ta(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vh extends Sh{constructor(t,e,i,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=a,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Xc(t.writeResults,t.commitTime),i=ue(t.commitTime);return this.listener.A_(i,e)}return Z(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Hc(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Wc(this.serializer,i))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,xr(e,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}xo(t,e,i,s,a){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,xr(e,i),s,u,c,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class bh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ee(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e,i,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=a,this.O_.io(u=>{i.enqueueAndForget(async()=>{nn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=q(f);g.M_.add(4),await en(g),g.N_.set("Unknown"),g.M_.delete(4),await Qn(g)}(this))})}),this.N_=new bh(i,s)}}async function Qn(r){if(nn(r))for(const t of r.x_)await t(!0)}async function en(r){for(const t of r.x_)await t(!1)}function nn(r){return q(r).M_.size===0}async function ea(r,t,e){if(!$n(t))throw t;r.M_.add(1),await en(r),r.N_.set("Offline"),e||(e=()=>Th(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await Qn(r)})}function na(r,t){return t().catch(e=>ea(r,e,t))}async function Wn(r){const t=q(r),e=Ut(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Dh(t);)try{const s=await Eh(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,Nh(t,s)}catch(s){await ea(t,s)}ra(t)&&ia(t)}function Dh(r){return nn(r)&&r.v_.length<10}function Nh(r,t){r.v_.push(t);const e=Ut(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function ra(r){return nn(r)&&!Ut(r).Zo()&&r.v_.length>0}function ia(r){Ut(r).start()}async function Oh(r){Ut(r).V_()}async function Mh(r){const t=Ut(r);for(const e of r.v_)t.d_(e.mutations)}async function xh(r,t,e){const i=r.v_.shift(),s=Yr.from(i,t,e);await na(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Wn(r)}async function Fh(r,t){t&&Ut(r).E_&&await async function(i,s){if(function(u){return jc(u)&&u!==P.ABORTED}(s.code)){const a=i.v_.shift();Ut(i).t_(),await na(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Wn(i)}}(r,t),ra(r)&&ia(r)}async function Ns(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const i=nn(e);e.M_.add(3),await en(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Qn(e)}async function Lh(r,t){const e=q(r);t?(e.M_.delete(2),await Qn(e)):t||(e.M_.add(2),await en(e),e.N_.set("Unknown"))}function Ut(r){return r.k_||(r.k_=function(e,i,s){const a=q(e);return a.f_(),new Vh(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:Oh.bind(null,r),Ao:Fh.bind(null,r),R_:Mh.bind(null,r),A_:xh.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await Wn(r)):(await r.k_.stop(),r.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,i,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,a){const u=Date.now()+i,c=new ei(t,e,u,s,a);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(r,t){if(ee("AsyncQueue",`${t}: ${r}`),$n(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}class Uh{constructor(){this.queries=new me(t=>Lo(t),Fo),this.onlineState="Unknown",this.z_=new Set}}function jh(r){r.z_.forEach(t=>{t.next()})}var Os,Ms;(Ms=Os||(Os={})).J_="default",Ms.Cache="cache";class Bh{constructor(t,e,i,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new me(c=>Lo(c),Fo),this.Da=new Map,this.Ca=new Set,this.va=new _t(O.comparator),this.Fa=new Map,this.Ma=new Jr,this.xa={},this.Oa=new Map,this.Na=pe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qh(r,t,e){const i=Kh(r);try{const s=await function(u,c){const f=q(u),g=J.now(),I=c.reduce((C,k)=>C.add(k.key),ht());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Fn(),M=ht();return f.os.getEntries(C,I).next(D=>{k=D,k.forEach((z,$)=>{$.isValidDocument()||(M=M.add(z))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,k)).next(D=>{A=D;const z=[];for(const $ of c){const Q=xc($,A.get($.key).overlayedDocument);Q!=null&&z.push(new re($.key,Q,bo(Q.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,g,z,c)}).next(D=>{S=D;const z=D.applyToLocalDocumentSet(A,M);return f.documentOverlayCache.saveOverlays(C,D.batchId,z)})}).then(()=>({batchId:S.batchId,changes:jo(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let g=u.xa[u.currentUser.toKey()];g||(g=new _t(j)),g=g.insert(c,f),u.xa[u.currentUser.toKey()]=g}(i,s.batchId,e),await Xn(i,s.changes),await Wn(i.remoteStore)}catch(s){const a=sa(s,"Failed to persist write");e.reject(a)}}function xs(r,t,e){const i=q(r);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((a,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=q(u);f.onlineState=c;let g=!1;f.queries.forEach((I,A)=>{for(const S of A.U_)S.j_(c)&&(g=!0)}),g&&jh(f)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function $h(r,t){const e=q(r),i=t.batch.batchId;try{const s=await vh(e.localStore,t);aa(e,i,null),oa(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Xn(e,s)}catch(s){await Po(s)}}async function Gh(r,t,e){const i=q(r);try{const s=await function(u,c){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(A=>(Z(A!==null),I=A.keys(),f.mutationQueue.removeMutationBatch(g,A))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(i.localStore,t);aa(i,t,e),oa(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Xn(i,s)}catch(s){await Po(s)}}function oa(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function aa(r,t,e){const i=q(r);let s=i.xa[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function Xn(r,t,e){const i=q(r),s=[],a=[],u=[];i.ba.isEmpty()||(i.ba.forEach((c,f)=>{u.push(i.Ba(f,t,e).then(g=>{if((g||e)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(f.targetId,g!=null&&g.fromCache?"not-current":"current"),g){s.push(g);const I=ti.Ki(f.targetId,g);a.push(I)}}))}),await Promise.all(u),i.Sa.h_(s),await async function(f,g){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(g,S=>R.forEach(S.qi,C=>I.persistence.referenceDelegate.addReference(A,S.targetId,C)).next(()=>R.forEach(S.Qi,C=>I.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))}catch(A){if(!$n(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of g){const S=A.targetId;if(!A.fromCache){const C=I.ns.get(S),k=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(k);I.ns=I.ns.insert(S,M)}}}(i.localStore,a))}async function zh(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const i=await Zo(e.localStore,t);e.currentUser=t,function(a,u){a.Oa.forEach(c=>{c.forEach(f=>{f.reject(new N(P.CANCELLED,u))})}),a.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Xn(e,i.us)}}function Kh(r){const t=q(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$h.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gh.bind(null,t),t}class Fs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return yh(this.persistence,new mh,t.initialUser,this.serializer)}createPersistence(t){return new dh(Zr.Hr,this.serializer)}createSharedClientState(t){return new Ih}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>xs(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=zh.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uh}()}createDatastore(t){const e=Hn(t.databaseInfo.databaseId),i=function(a){return new Ph(a)}(t.databaseInfo);return function(a,u,c,f){return new Ch(a,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,a,u,c){return new kh(i,s,a,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>xs(this.syncEngine,e,0),function(){return Ds.D()?new Ds:new wh}())}createSyncEngine(t,e){return function(s,a,u,c,f,g,I){const A=new Bh(s,a,u,c,f,g);return I&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=q(i);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await en(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Ro.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async a=>{b("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(b("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=sa(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Vr(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let i=e.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Zo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Ls(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Xh(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(i=>Ns(t.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>Ns(t.remoteStore,s)),r._onlineComponents=t}function Wh(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Xh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Wh(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Vr(r,new Fs)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Vr(r,new Fs);return r._offlineComponents}async function Yh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Ls(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Ls(r,new Hh))),r._onlineComponents}function Jh(r){return Yh(r).then(t=>t.syncEngine)}/**
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
 */function la(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Us=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Zh(r,t,e,i){if(t===!0&&i===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function js(r){if(!O.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Bs(r){if(O.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ni(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":x()}function ca(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ni(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class qs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=la((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new $u;switch(i.type){case"firstParty":return new Hu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Us.get(e);i&&(b("ComponentProvider","Removing Datastore"),Us.delete(e),i.terminate())}(this),Promise.resolve()}}function tf(r,t,e,i={}){var s;const a=(r=ca(r,Yn))._getSettings(),u=`${t}:${e}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ct.MOCK_USER;else{c=ml(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(g)}r._authCredentials=new Gu(new Ao(c,f))}}/**
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
 */class ri{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ri(this.firestore,t,this._query)}}class Ct{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class xt extends ri{constructor(t,e,i){super(t,e,Tc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new O(t))}withConverter(t){return new xt(this.firestore,t,this._path)}}function Df(r,t,...e){if(r=Yt(r),ua("collection","path",t),r instanceof Yn){const i=H.fromString(t,...e);return Bs(i),new xt(r,null,i)}{if(!(r instanceof Ct||r instanceof xt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(H.fromString(t,...e));return Bs(i),new xt(r.firestore,null,i)}}function ef(r,t,...e){if(r=Yt(r),arguments.length===1&&(t=Ro.newId()),ua("doc","path",t),r instanceof Yn){const i=H.fromString(t,...e);return js(i),new Ct(r,null,new O(i))}{if(!(r instanceof Ct||r instanceof xt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(H.fromString(t,...e));return js(i),new Ct(r.firestore,r instanceof xt?r.converter:null,new O(i))}}/**
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
 */class nf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ta(this,"async_queue_retry"),this.hu=()=>{const e=Sr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Sr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Sr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Qt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!$n(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw ee("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=ei.createAndSchedule(this,t,e,i,a=>this.Eu(a));return this._u.push(s),s}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class ha extends Yn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new nf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fa(this),this._firestoreClient.terminate()}}function rf(r,t){const e=typeof r=="object"?r:zs(),i=typeof r=="string"?r:t||"(default)",s=Je(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=gl("firestore");a&&tf(s,...a)}return s}function sf(r){return r._firestoreClient||fa(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function fa(r){var t,e,i;const s=r._freezeSettings(),a=function(c,f,g,I){return new ac(c,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,la(I.experimentalLongPollingOptions),I.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new Qh(r._authCredentials,r._appCheckCredentials,r._queue,a),((e=s.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((i=s.localCache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(bt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class da{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class pa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=/^__.*__$/;class af{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}}function ma(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ii{constructor(t,e,i,s,a,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.mu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return jn(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ma(this.fu)&&of.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class lf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Hn(t)}Fu(t,e,i,s=!1){return new ii({fu:t,methodName:e,vu:i,path:rt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(r){const t=r._freezeSettings(),e=Hn(r._databaseId);return new lf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function cf(r,t,e,i,s,a={}){const u=r.Fu(a.merge||a.mergeFields?2:0,t,e,s);Ta("Data must be an object, but it was:",u,i);const c=ya(i,u);let f,g;if(a.merge)f=new wt(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const I=[];for(const A of a.mergeFields){const S=hf(t,A,e);if(!u.contains(S))throw new N(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);pf(I,S)||I.push(S)}f=new wt(I),g=u.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,g=u.fieldTransforms;return new af(new It(c),f,g)}function _a(r,t){if(va(r=Yt(r)))return Ta("Unsupported field value:",t,r),ya(r,t);if(r instanceof pa)return function(i,s){if(!ma(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const c of i){let f=_a(c,s.bu(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(r,t)}return function(i,s){if((i=Yt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return bc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=J.fromDate(i);return{timestampValue:Mr(s.serializer,a)}}if(i instanceof J){const a=new J(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Mr(s.serializer,a)}}if(i instanceof ga)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ye)return{bytesValue:$c(s.serializer,i._byteString)};if(i instanceof Ct){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Yo(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${ni(i)}`)}(r,t)}function ya(r,t){const e={};return Vo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(r,(i,s)=>{const a=_a(s,t.pu(i));a!=null&&(e[i]=a)}),{mapValue:{fields:e}}}function va(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof J||r instanceof ga||r instanceof Ye||r instanceof Ct||r instanceof pa)}function Ta(r,t,e){if(!va(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=ni(e);throw i==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+i)}}function hf(r,t,e){if((t=Yt(t))instanceof da)return t._internalPath;if(typeof t=="string")return df(r,t);throw jn("Field path arguments must be of type string or ",r,!1,void 0,e)}const ff=new RegExp("[~\\*/\\[\\]]");function df(r,t,e){if(t.search(ff)>=0)throw jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new da(...t.split("."))._internalPath}catch{throw jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function jn(r,t,e,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new N(P.INVALID_ARGUMENT,c+r+f)}function pf(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */function gf(r,t,e){let i;return i=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,i}function Nf(r,t){const e=ca(r.firestore,ha),i=ef(r),s=gf(r.converter,t);return mf(e,[cf(uf(r.firestore),"addDoc",i._key,s,r.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function mf(r,t){return function(i,s){const a=new Qt;return i.asyncQueue.enqueueAndForget(async()=>qh(await Jh(i),s,a)),a.promise}(sf(r),t)}(function(t,e=!0){(function(s){ge=s})(_l),Ge(new ze("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),c=new ha(new zu(i.getProvider("auth-internal")),new Wu(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new On(g.options.projectId,I)}(u,s),u);return a=Object.assign({useFetchStreams:e},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Xt(ys,"4.6.2",t),Xt(ys,"4.6.2","esm2017")})();const $s={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},_f={light:os($s,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:os($s,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}})};function yf({children:r}){const[t]=il();return zt(El,{theme:sl(_f[t]),children:r})}const vf={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:"flickmatch-6e505.firebaseapp.com",projectId:"flickmatch-6e505",storageBucket:"flickmatch-6e505.appspot.com",messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID},Tf=document.getElementById("root"),Ef=Hs(Tf),Ea=Tl(vf);Fu(Ea);const If=rf(Ea);function wf(r){Ef.render(zt(nl,{clientId:"967689051729-u5kn73uscp0gp6s2itk6t4cs5fgkenkn.apps.googleusercontent.com",children:zt(ol.exports.StrictMode,{children:zt(al,{children:zt(ll,{children:zt(yf,{children:zt(r,{})})})})})}))}const Of=Object.freeze(Object.defineProperty({__proto__:null,db:If,default:wf},Symbol.toStringTag,{value:"Module"}));export{Of as R,Nf as a,Df as c,If as d};

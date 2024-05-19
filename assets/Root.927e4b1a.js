import{G as ve}from"./index.esm.c1835d46.js";import{r as Ae,d as j,u as Se,j as m,c as Ee,a as ke,R as Re}from"./index.a525f6e3.js";import{q as _e}from"./index.module.325f48be.js";import{r as b,_ as v,C as A,E as J,a as k,F as X,o as Ce,g as Q,b as Pe,d as De,L as Oe,i as Fe,c as L,e as Me,v as $e,f as Ne,h as xe}from"./index.esm2017.e2780138.js";import{T as je}from"./ThemeProvider.98270306.js";var Z,q=Ae.exports;Z=q.createRoot,q.hydrateRoot;const ee="@firebase/installations",F="0.6.7";/**
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
 */const te=1e4,ne=`w:${F}`,ae="FIS_v2",Le="https://firebaseinstallations.googleapis.com/v1",qe=60*60*1e3,Be="installations",Ve="Installations";/**
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
 */const Ge={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},I=new J(Be,Ve,Ge);function ie(e){return e instanceof X&&e.code.includes("request-failed")}/**
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
 */function re({projectId:e}){return`${Le}/projects/${e}/installations`}function se(e){return{token:e.token,requestStatus:2,expiresIn:ze(e.expiresIn),creationTime:Date.now()}}async function oe(e,t){const a=(await t.json()).error;return I.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ce({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ue(e,{refreshToken:t}){const n=ce(e);return n.append("Authorization",Ke(t)),n}async function le(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ze(e){return Number(e.replace("s","000"))}function Ke(e){return`${ae} ${e}`}/**
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
 */async function He({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=re(e),i=ce(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:ae,appId:e.appId,sdkVersion:ne},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await le(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:se(l.authToken)}}else throw await oe("Create Installation",c)}/**
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
 */function ue(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function We(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ye=/^[cdef][\w-]{21}$/,O="";function Je(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Xe(e);return Ye.test(n)?n:O}catch{return O}}function Xe(e){return We(e).substr(0,22)}/**
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
 */function R(e){return`${e.appName}!${e.appId}`}/**
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
 */const de=new Map;function fe(e,t){const n=R(e);pe(n,t),Qe(n,t)}function pe(e,t){const n=de.get(e);if(!!n)for(const a of n)a(t)}function Qe(e,t){const n=Ze();n&&n.postMessage({key:e,fid:t}),et()}let h=null;function Ze(){return!h&&"BroadcastChannel"in self&&(h=new BroadcastChannel("[Firebase] FID Change"),h.onmessage=e=>{pe(e.data.key,e.data.fid)}),h}function et(){de.size===0&&h&&(h.close(),h=null)}/**
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
 */const tt="firebase-installations-database",nt=1,w="firebase-installations-store";let C=null;function M(){return C||(C=Ce(tt,nt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),C}async function S(e,t){const n=R(e),i=(await M()).transaction(w,"readwrite"),r=i.objectStore(w),s=await r.get(n);return await r.put(t,n),await i.done,(!s||s.fid!==t.fid)&&fe(e,t.fid),t}async function ge(e){const t=R(e),a=(await M()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function _(e,t){const n=R(e),i=(await M()).transaction(w,"readwrite"),r=i.objectStore(w),s=await r.get(n),o=t(s);return o===void 0?await r.delete(n):await r.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&fe(e,o.fid),o}/**
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
 */async function $(e){let t;const n=await _(e.appConfig,a=>{const i=at(a),r=it(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===O?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function at(e){const t=e||{fid:Je(),registrationStatus:0};return me(t)}function it(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(I.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=rt(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:st(e)}:{installationEntry:t}}async function rt(e,t){try{const n=await He(e,t);return S(e.appConfig,n)}catch(n){throw ie(n)&&n.customData.serverCode===409?await ge(e.appConfig):await S(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function st(e){let t=await B(e.appConfig);for(;t.registrationStatus===1;)await ue(100),t=await B(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await $(e);return a||n}return t}function B(e){return _(e,t=>{if(!t)throw I.create("installation-not-found");return me(t)})}function me(e){return ot(e)?{fid:e.fid,registrationStatus:0}:e}function ot(e){return e.registrationStatus===1&&e.registrationTime+te<Date.now()}/**
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
 */async function ct({appConfig:e,heartbeatServiceProvider:t},n){const a=lt(e,n),i=Ue(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:ne,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await le(()=>fetch(a,o));if(c.ok){const l=await c.json();return se(l)}else throw await oe("Generate Auth Token",c)}function lt(e,{fid:t}){return`${re(e)}/${t}/authTokens:generate`}/**
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
 */async function N(e,t=!1){let n;const a=await _(e.appConfig,r=>{if(!he(r))throw I.create("not-registered");const s=r.authToken;if(!t&&ft(s))return r;if(s.requestStatus===1)return n=ut(e,t),r;{if(!navigator.onLine)throw I.create("app-offline");const o=gt(r);return n=dt(e,o),o}});return n?await n:a.authToken}async function ut(e,t){let n=await V(e.appConfig);for(;n.authToken.requestStatus===1;)await ue(100),n=await V(e.appConfig);const a=n.authToken;return a.requestStatus===0?N(e,t):a}function V(e){return _(e,t=>{if(!he(t))throw I.create("not-registered");const n=t.authToken;return mt(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function dt(e,t){try{const n=await ct(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await S(e.appConfig,a),n}catch(n){if(ie(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ge(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await S(e.appConfig,a)}throw n}}function he(e){return e!==void 0&&e.registrationStatus===2}function ft(e){return e.requestStatus===2&&!pt(e)}function pt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+qe}function gt(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mt(e){return e.requestStatus===1&&e.requestTime+te<Date.now()}/**
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
 */async function ht(e){const t=e,{installationEntry:n,registrationPromise:a}=await $(t);return a?a.catch(console.error):N(t).catch(console.error),n.fid}/**
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
 */async function It(e,t=!1){const n=e;return await wt(n),(await N(n,t)).token}async function wt(e){const{registrationPromise:t}=await $(e);t&&await t}/**
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
 */function yt(e){if(!e||!e.options)throw P("App Configuration");if(!e.name)throw P("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw P(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function P(e){return I.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ie="installations",bt="installations-internal",Tt=e=>{const t=e.getProvider("app").getImmediate(),n=yt(t),a=k(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},vt=e=>{const t=e.getProvider("app").getImmediate(),n=k(t,Ie).getImmediate();return{getId:()=>ht(n),getToken:i=>It(n,i)}};function At(){v(new A(Ie,Tt,"PUBLIC")),v(new A(bt,vt,"PRIVATE"))}At();b(ee,F);b(ee,F,"esm2017");/**
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
 */const E="analytics",St="firebase_id",Et="origin",kt=60*1e3,Rt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",x="https://www.googletagmanager.com/gtag/js";/**
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
 */const u=new Oe("@firebase/analytics");/**
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
 */const _t={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new J("analytics","Analytics",_t);/**
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
 */function Ct(e){if(!e.startsWith(x)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function we(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Pt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Dt(e,t){const n=Pt("firebase-js-sdk-policy",{createScriptURL:Ct}),a=document.createElement("script"),i=`${x}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function Ot(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ft(e,t,n,a,i,r){const s=a[i];try{if(s)await t[s];else{const c=(await we(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){u.error(o)}e("config",i,r)}async function Mt(e,t,n,a,i){try{let r=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await we(n);for(const c of s){const l=o.find(g=>g.measurementId===c),f=l&&t[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",a,i||{})}catch(r){u.error(r)}}function $t(e,t,n,a){async function i(r,...s){try{if(r==="event"){const[o,c]=s;await Mt(e,t,n,o,c)}else if(r==="config"){const[o,c]=s;await Ft(e,t,n,a,o,c)}else if(r==="consent"){const[o]=s;e("consent","update",o)}else if(r==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(r==="set"){const[o]=s;e("set",o)}else e(r,...s)}catch(o){u.error(o)}}return i}function Nt(e,t,n,a,i){let r=function(...s){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=$t(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function xt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(x)&&n.src.includes(e))return n;return null}/**
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
 */const jt=30,Lt=1e3;class qt{constructor(t={},n=Lt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ye=new qt;function Bt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Vt(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:Bt(a)},r=Rt.replace("{app-id}",n),s=await fetch(r,i);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Gt(e,t=ye,n){const{appId:a,apiKey:i,measurementId:r}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:a};throw d.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Kt;return setTimeout(async()=>{o.abort()},n!==void 0?n:kt),be({appId:a,apiKey:i,measurementId:r},s,o,t)}async function be(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=ye){var r;const{appId:s,measurementId:o}=e;try{await Ut(a,t)}catch(c){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Vt(e);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!zt(l)){if(i.deleteThrottleMetadata(s),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw c}const f=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?L(n,i.intervalMillis,jt):L(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,g),u.debug(`Calling attemptFetch again in ${f} millis`),be(e,g,a,i)}}function Ut(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zt(e){if(!(e instanceof X)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Kt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ht(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const r=await t,s=Object.assign(Object.assign({},a),{send_to:r});e("event",n,s)}}/**
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
 */async function Wt(){if(Me())try{await $e()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yt(e,t,n,a,i,r,s){var o;const c=Gt(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>u.error(p)),t.push(c);const l=Wt().then(p=>{if(p)return a.getId()}),[f,g]=await Promise.all([c,l]);xt(r)||Dt(r,f.measurementId),i("js",new Date);const T=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return T[Et]="firebase",T.update=!0,g!=null&&(T[St]=g),i("config",f.measurementId,T),f.measurementId}/**
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
 */class Jt{constructor(t){this.app=t}_delete(){return delete y[this.app.options.appId],Promise.resolve()}}let y={},G=[];const U={};let D="dataLayer",Xt="gtag",z,Te,K=!1;function Qt(){const e=[];if(Fe()&&e.push("This is a browser extension environment."),Ne()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Zt(e,t,n){Qt();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(y[a]!=null)throw d.create("already-exists",{id:a});if(!K){Ot(D);const{wrappedGtag:r,gtagCore:s}=Nt(y,G,U,D,Xt);Te=r,z=s,K=!0}return y[a]=Yt(e,G,U,t,z,D,n),new Jt(e)}function en(e=Pe()){e=Q(e);const t=k(e,E);return t.isInitialized()?t.getImmediate():tn(e)}function tn(e,t={}){const n=k(e,E);if(n.isInitialized()){const i=n.getImmediate();if(De(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}function nn(e,t,n,a){e=Q(e),Ht(Te,y[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const H="@firebase/analytics",W="0.10.3";function an(){v(new A(E,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Zt(a,i,n)},"PUBLIC")),v(new A("analytics-internal",e,"PRIVATE")),b(H,W),b(H,W,"esm2017");function e(t){try{const n=t.getProvider(E).getImmediate();return{logEvent:(a,i,r)=>nn(n,a,i,r)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}an();var rn="firebase",sn="10.12.0";/**
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
 */b(rn,sn,"app");const Y={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},on={light:j(Y,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:j(Y,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}})};function cn({children:e}){const[t]=Se();return m(je,{theme:Ee(on[t]),children:e})}const ln={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:"flickmatch-6e505.firebaseapp.com",projectId:"flickmatch-6e505",storageBucket:"flickmatch-6e505.appspot.com",messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID},un=document.getElementById("root"),dn=Z(un),fn=xe(ln);en(fn);function wn(e){dn.render(m(ve,{clientId:"967689051729-u5kn73uscp0gp6s2itk6t4cs5fgkenkn.apps.googleusercontent.com",children:m(ke.exports.StrictMode,{children:m(Re,{children:m(_e,{children:m(cn,{children:m(e,{})})})})})}))}export{wn as default};

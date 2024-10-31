import{G as iu}from"./index.esm.7ca71ba7.js";import{r as su,g as ou,a as Ge,j as Vt,R as au,d as as,u as uu,c as lu,b as cu,l as hu,e as fu}from"./loginSlice.fb6ef6fe.js";import{q as du}from"./index.module.c8fc47a3.js";import{r as le,_ as ze,C as Ke,E as Ks,a as Ze,F as Ur,o as pu,g as Xt,b as Hs,d as gu,L as Qs,i as mu,c as us,e as _u,v as yu,f as vu,h as Eu,j as Mt,k as Tu,S as Iu,l as wu,m as Au,n as Ru}from"./index.esm.4a4e9a53.js";import{T as Pu}from"./ThemeProvider.36da335b.js";var Ws,ls=su.exports;Ws=ls.createRoot,ls.hydrateRoot;function Su(){const n=ou();let t=null,e=null;return{clear(){t=null,e=null},notify(){n(()=>{let i=t;for(;i;)i.callback(),i=i.next})},get(){let i=[],s=t;for(;s;)i.push(s),s=s.next;return i},subscribe(i){let s=!0,o=e={callback:i,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){!s||t===null||(s=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const cs={notify(){},get:()=>[]};function Vu(n,t){let e,i=cs,s=0,o=!1;function l(x){I();const k=i.subscribe(x);let B=!1;return()=>{B||(B=!0,k(),A())}}function c(){i.notify()}function f(){D.onStateChange&&D.onStateChange()}function p(){return o}function I(){s++,e||(e=t?t.addNestedSub(f):n.subscribe(f),i=Su())}function A(){s--,e&&s===0&&(e(),e=void 0,i.clear(),i=cs)}function S(){o||(o=!0,I())}function C(){o&&(o=!1,A())}const D={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:p,trySubscribe:S,tryUnsubscribe:C,getListeners:()=>i};return D}const Cu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bu=Cu?Ge.exports.useLayoutEffect:Ge.exports.useEffect;function Du({store:n,context:t,children:e,serverState:i,stabilityCheck:s="once",noopCheck:o="once"}){const l=Ge.exports.useMemo(()=>{const p=Vu(n);return{store:n,subscription:p,getServerState:i?()=>i:void 0,stabilityCheck:s,noopCheck:o}},[n,i,s,o]),c=Ge.exports.useMemo(()=>n.getState(),[n]);return bu(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==n.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,c]),Vt((t||au).Provider,{value:l,children:e})}const Xs="@firebase/installations",jr="0.6.7";/**
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
 */const Ys=1e4,Js=`w:${jr}`,Zs="FIS_v2",ku="https://firebaseinstallations.googleapis.com/v1",Nu=60*60*1e3,Ou="installations",xu="Installations";/**
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
 */const Mu={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Yt=new Ks(Ou,xu,Mu);function to(n){return n instanceof Ur&&n.code.includes("request-failed")}/**
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
 */function eo({projectId:n}){return`${ku}/projects/${n}/installations`}function no(n){return{token:n.token,requestStatus:2,expiresIn:Lu(n.expiresIn),creationTime:Date.now()}}async function ro(n,t){const i=(await t.json()).error;return Yt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function io({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Fu(n,{refreshToken:t}){const e=io(n);return e.append("Authorization",Uu(t)),e}async function so(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Lu(n){return Number(n.replace("s","000"))}function Uu(n){return`${Zs} ${n}`}/**
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
 */async function ju({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=eo(n),s=io(n),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={fid:e,authVersion:Zs,appId:n.appId,sdkVersion:Js},c={method:"POST",headers:s,body:JSON.stringify(l)},f=await so(()=>fetch(i,c));if(f.ok){const p=await f.json();return{fid:p.fid||e,registrationStatus:2,refreshToken:p.refreshToken,authToken:no(p.authToken)}}else throw await ro("Create Installation",f)}/**
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
 */function oo(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Bu(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qu=/^[cdef][\w-]{21}$/,br="";function $u(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Gu(n);return qu.test(e)?e:br}catch{return br}}function Gu(n){return Bu(n).substr(0,22)}/**
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
 */function qn(n){return`${n.appName}!${n.appId}`}/**
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
 */const ao=new Map;function uo(n,t){const e=qn(n);lo(e,t),zu(e,t)}function lo(n,t){const e=ao.get(n);if(!!e)for(const i of e)i(t)}function zu(n,t){const e=Ku();e&&e.postMessage({key:n,fid:t}),Hu()}let Kt=null;function Ku(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=n=>{lo(n.data.key,n.data.fid)}),Kt}function Hu(){ao.size===0&&Kt&&(Kt.close(),Kt=null)}/**
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
 */const Qu="firebase-installations-database",Wu=1,Jt="firebase-installations-store";let Ar=null;function Br(){return Ar||(Ar=pu(Qu,Wu,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Jt)}}})),Ar}async function bn(n,t){const e=qn(n),s=(await Br()).transaction(Jt,"readwrite"),o=s.objectStore(Jt),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&uo(n,t.fid),t}async function co(n){const t=qn(n),i=(await Br()).transaction(Jt,"readwrite");await i.objectStore(Jt).delete(t),await i.done}async function $n(n,t){const e=qn(n),s=(await Br()).transaction(Jt,"readwrite"),o=s.objectStore(Jt),l=await o.get(e),c=t(l);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!l||l.fid!==c.fid)&&uo(n,c.fid),c}/**
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
 */async function qr(n){let t;const e=await $n(n.appConfig,i=>{const s=Xu(i),o=Yu(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===br?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Xu(n){const t=n||{fid:$u(),registrationStatus:0};return ho(t)}function Yu(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Ju(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Zu(n)}:{installationEntry:t}}async function Ju(n,t){try{const e=await ju(n,t);return bn(n.appConfig,e)}catch(e){throw to(e)&&e.customData.serverCode===409?await co(n.appConfig):await bn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Zu(n){let t=await hs(n.appConfig);for(;t.registrationStatus===1;)await oo(100),t=await hs(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await qr(n);return i||e}return t}function hs(n){return $n(n,t=>{if(!t)throw Yt.create("installation-not-found");return ho(t)})}function ho(n){return tl(n)?{fid:n.fid,registrationStatus:0}:n}function tl(n){return n.registrationStatus===1&&n.registrationTime+Ys<Date.now()}/**
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
 */async function el({appConfig:n,heartbeatServiceProvider:t},e){const i=nl(n,e),s=Fu(n,e),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={installation:{sdkVersion:Js,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(l)},f=await so(()=>fetch(i,c));if(f.ok){const p=await f.json();return no(p)}else throw await ro("Generate Auth Token",f)}function nl(n,{fid:t}){return`${eo(n)}/${t}/authTokens:generate`}/**
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
 */async function $r(n,t=!1){let e;const i=await $n(n.appConfig,o=>{if(!fo(o))throw Yt.create("not-registered");const l=o.authToken;if(!t&&sl(l))return o;if(l.requestStatus===1)return e=rl(n,t),o;{if(!navigator.onLine)throw Yt.create("app-offline");const c=al(o);return e=il(n,c),c}});return e?await e:i.authToken}async function rl(n,t){let e=await fs(n.appConfig);for(;e.authToken.requestStatus===1;)await oo(100),e=await fs(n.appConfig);const i=e.authToken;return i.requestStatus===0?$r(n,t):i}function fs(n){return $n(n,t=>{if(!fo(t))throw Yt.create("not-registered");const e=t.authToken;return ul(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function il(n,t){try{const e=await el(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await bn(n.appConfig,i),e}catch(e){if(to(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await co(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await bn(n.appConfig,i)}throw e}}function fo(n){return n!==void 0&&n.registrationStatus===2}function sl(n){return n.requestStatus===2&&!ol(n)}function ol(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Nu}function al(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function ul(n){return n.requestStatus===1&&n.requestTime+Ys<Date.now()}/**
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
 */async function ll(n){const t=n,{installationEntry:e,registrationPromise:i}=await qr(t);return i?i.catch(console.error):$r(t).catch(console.error),e.fid}/**
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
 */async function cl(n,t=!1){const e=n;return await hl(e),(await $r(e,t)).token}async function hl(n){const{registrationPromise:t}=await qr(n);t&&await t}/**
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
 */function fl(n){if(!n||!n.options)throw Rr("App Configuration");if(!n.name)throw Rr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Rr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rr(n){return Yt.create("missing-app-config-values",{valueName:n})}/**
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
 */const po="installations",dl="installations-internal",pl=n=>{const t=n.getProvider("app").getImmediate(),e=fl(t),i=Ze(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},gl=n=>{const t=n.getProvider("app").getImmediate(),e=Ze(t,po).getImmediate();return{getId:()=>ll(e),getToken:s=>cl(e,s)}};function ml(){ze(new Ke(po,pl,"PUBLIC")),ze(new Ke(dl,gl,"PRIVATE"))}ml();le(Xs,jr);le(Xs,jr,"esm2017");/**
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
 */const Dn="analytics",_l="firebase_id",yl="origin",vl=60*1e3,El="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gr="https://www.googletagmanager.com/gtag/js";/**
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
 */const mt=new Qs("@firebase/analytics");/**
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
 */const Tl={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Ks("analytics","Analytics",Tl);/**
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
 */function Il(n){if(!n.startsWith(Gr)){const t=vt.create("invalid-gtag-resource",{gtagURL:n});return mt.warn(t.message),""}return n}function go(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function wl(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Al(n,t){const e=wl("firebase-js-sdk-policy",{createScriptURL:Il}),i=document.createElement("script"),s=`${Gr}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Rl(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Pl(n,t,e,i,s,o){const l=i[s];try{if(l)await t[l];else{const f=(await go(e)).find(p=>p.measurementId===s);f&&await t[f.appId]}}catch(c){mt.error(c)}n("config",s,o)}async function Sl(n,t,e,i,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const c=await go(e);for(const f of l){const p=c.find(A=>A.measurementId===f),I=p&&t[p.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",i,s||{})}catch(o){mt.error(o)}}function Vl(n,t,e,i){async function s(o,...l){try{if(o==="event"){const[c,f]=l;await Sl(n,t,e,c,f)}else if(o==="config"){const[c,f]=l;await Pl(n,t,e,i,c,f)}else if(o==="consent"){const[c]=l;n("consent","update",c)}else if(o==="get"){const[c,f,p]=l;n("get",c,f,p)}else if(o==="set"){const[c]=l;n("set",c)}else n(o,...l)}catch(c){mt.error(c)}}return s}function Cl(n,t,e,i,s){let o=function(...l){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Vl(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function bl(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Gr)&&e.src.includes(n))return e;return null}/**
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
 */const Dl=30,kl=1e3;class Nl{constructor(t={},e=kl){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const mo=new Nl;function Ol(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function xl(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Ol(i)},o=El.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let c="";try{const f=await l.json();!((t=f.error)===null||t===void 0)&&t.message&&(c=f.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:c})}return l.json()}async function Ml(n,t=mo,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw vt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw vt.create("no-api-key")}const l=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Ul;return setTimeout(async()=>{c.abort()},e!==void 0?e:vl),_o({appId:i,apiKey:s,measurementId:o},l,c,t)}async function _o(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=mo){var o;const{appId:l,measurementId:c}=n;try{await Fl(i,t)}catch(f){if(c)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await xl(n);return s.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!Ll(p)){if(s.deleteThrottleMetadata(l),c)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:c};throw f}const I=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?us(e,s.intervalMillis,Dl):us(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,A),mt.debug(`Calling attemptFetch again in ${I} millis`),_o(n,A,i,s)}}function Fl(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),i(vt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ll(n){if(!(n instanceof Ur)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ul{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function jl(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const o=await t,l=Object.assign(Object.assign({},i),{send_to:o});n("event",e,l)}}/**
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
 */async function Bl(){if(_u())try{await yu()}catch(n){return mt.warn(vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return mt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ql(n,t,e,i,s,o,l){var c;const f=Ml(n);f.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>mt.error(C)),t.push(f);const p=Bl().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([f,p]);bl(o)||Al(o,I.measurementId),s("js",new Date);const S=(c=l==null?void 0:l.config)!==null&&c!==void 0?c:{};return S[yl]="firebase",S.update=!0,A!=null&&(S[_l]=A),s("config",I.measurementId,S),I.measurementId}/**
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
 */class $l{constructor(t){this.app=t}_delete(){return delete Ue[this.app.options.appId],Promise.resolve()}}let Ue={},ds=[];const ps={};let Pr="dataLayer",Gl="gtag",gs,yo,ms=!1;function zl(){const n=[];if(mu()&&n.push("This is a browser extension environment."),vu()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=vt.create("invalid-analytics-context",{errorInfo:t});mt.warn(e.message)}}function Kl(n,t,e){zl();const i=n.options.appId;if(!i)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Ue[i]!=null)throw vt.create("already-exists",{id:i});if(!ms){Rl(Pr);const{wrappedGtag:o,gtagCore:l}=Cl(Ue,ds,ps,Pr,Gl);yo=o,gs=l,ms=!0}return Ue[i]=ql(n,ds,ps,t,gs,Pr,e),new $l(n)}function Hl(n=Hs()){n=Xt(n);const t=Ze(n,Dn);return t.isInitialized()?t.getImmediate():Ql(n)}function Ql(n,t={}){const e=Ze(n,Dn);if(e.isInitialized()){const s=e.getImmediate();if(gu(t,e.getOptions()))return s;throw vt.create("already-initialized")}return e.initialize({options:t})}function Wl(n,t,e,i){n=Xt(n),jl(yo,Ue[n.app.options.appId],t,e,i).catch(s=>mt.error(s))}const _s="@firebase/analytics",ys="0.10.3";function Xl(){ze(new Ke(Dn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Kl(i,s,e)},"PUBLIC")),ze(new Ke("analytics-internal",n,"PRIVATE")),le(_s,ys),le(_s,ys,"esm2017");function n(t){try{const e=t.getProvider(Dn).getImmediate();return{logEvent:(i,s,o)=>Wl(e,i,s,o)}}catch(e){throw vt.create("interop-component-reg-failed",{reason:e})}}}Xl();var vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,T){for(var g=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)g[Rt-2]=arguments[Rt];return d.prototype[y].apply(_,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var T=E.g[3],g=d+(T^m&(y^T))+_[0]+3614090360&4294967295;d=m+(g<<7&4294967295|g>>>25),g=T+(y^d&(m^y))+_[1]+3905402710&4294967295,T=d+(g<<12&4294967295|g>>>20),g=y+(m^T&(d^m))+_[2]+606105819&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(d^y&(T^d))+_[3]+3250441966&4294967295,m=y+(g<<22&4294967295|g>>>10),g=d+(T^m&(y^T))+_[4]+4118548399&4294967295,d=m+(g<<7&4294967295|g>>>25),g=T+(y^d&(m^y))+_[5]+1200080426&4294967295,T=d+(g<<12&4294967295|g>>>20),g=y+(m^T&(d^m))+_[6]+2821735955&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(d^y&(T^d))+_[7]+4249261313&4294967295,m=y+(g<<22&4294967295|g>>>10),g=d+(T^m&(y^T))+_[8]+1770035416&4294967295,d=m+(g<<7&4294967295|g>>>25),g=T+(y^d&(m^y))+_[9]+2336552879&4294967295,T=d+(g<<12&4294967295|g>>>20),g=y+(m^T&(d^m))+_[10]+4294925233&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(d^y&(T^d))+_[11]+2304563134&4294967295,m=y+(g<<22&4294967295|g>>>10),g=d+(T^m&(y^T))+_[12]+1804603682&4294967295,d=m+(g<<7&4294967295|g>>>25),g=T+(y^d&(m^y))+_[13]+4254626195&4294967295,T=d+(g<<12&4294967295|g>>>20),g=y+(m^T&(d^m))+_[14]+2792965006&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(d^y&(T^d))+_[15]+1236535329&4294967295,m=y+(g<<22&4294967295|g>>>10),g=d+(y^T&(m^y))+_[1]+4129170786&4294967295,d=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(d^m))+_[6]+3225465664&4294967295,T=d+(g<<9&4294967295|g>>>23),g=y+(d^m&(T^d))+_[11]+643717713&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^d&(y^T))+_[0]+3921069994&4294967295,m=y+(g<<20&4294967295|g>>>12),g=d+(y^T&(m^y))+_[5]+3593408605&4294967295,d=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(d^m))+_[10]+38016083&4294967295,T=d+(g<<9&4294967295|g>>>23),g=y+(d^m&(T^d))+_[15]+3634488961&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^d&(y^T))+_[4]+3889429448&4294967295,m=y+(g<<20&4294967295|g>>>12),g=d+(y^T&(m^y))+_[9]+568446438&4294967295,d=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(d^m))+_[14]+3275163606&4294967295,T=d+(g<<9&4294967295|g>>>23),g=y+(d^m&(T^d))+_[3]+4107603335&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^d&(y^T))+_[8]+1163531501&4294967295,m=y+(g<<20&4294967295|g>>>12),g=d+(y^T&(m^y))+_[13]+2850285829&4294967295,d=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(d^m))+_[2]+4243563512&4294967295,T=d+(g<<9&4294967295|g>>>23),g=y+(d^m&(T^d))+_[7]+1735328473&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^d&(y^T))+_[12]+2368359562&4294967295,m=y+(g<<20&4294967295|g>>>12),g=d+(m^y^T)+_[5]+4294588738&4294967295,d=m+(g<<4&4294967295|g>>>28),g=T+(d^m^y)+_[8]+2272392833&4294967295,T=d+(g<<11&4294967295|g>>>21),g=y+(T^d^m)+_[11]+1839030562&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^d)+_[14]+4259657740&4294967295,m=y+(g<<23&4294967295|g>>>9),g=d+(m^y^T)+_[1]+2763975236&4294967295,d=m+(g<<4&4294967295|g>>>28),g=T+(d^m^y)+_[4]+1272893353&4294967295,T=d+(g<<11&4294967295|g>>>21),g=y+(T^d^m)+_[7]+4139469664&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^d)+_[10]+3200236656&4294967295,m=y+(g<<23&4294967295|g>>>9),g=d+(m^y^T)+_[13]+681279174&4294967295,d=m+(g<<4&4294967295|g>>>28),g=T+(d^m^y)+_[0]+3936430074&4294967295,T=d+(g<<11&4294967295|g>>>21),g=y+(T^d^m)+_[3]+3572445317&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^d)+_[6]+76029189&4294967295,m=y+(g<<23&4294967295|g>>>9),g=d+(m^y^T)+_[9]+3654602809&4294967295,d=m+(g<<4&4294967295|g>>>28),g=T+(d^m^y)+_[12]+3873151461&4294967295,T=d+(g<<11&4294967295|g>>>21),g=y+(T^d^m)+_[15]+530742520&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^d)+_[2]+3299628645&4294967295,m=y+(g<<23&4294967295|g>>>9),g=d+(y^(m|~T))+_[0]+4096336452&4294967295,d=m+(g<<6&4294967295|g>>>26),g=T+(m^(d|~y))+_[7]+1126891415&4294967295,T=d+(g<<10&4294967295|g>>>22),g=y+(d^(T|~m))+_[14]+2878612391&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~d))+_[5]+4237533241&4294967295,m=y+(g<<21&4294967295|g>>>11),g=d+(y^(m|~T))+_[12]+1700485571&4294967295,d=m+(g<<6&4294967295|g>>>26),g=T+(m^(d|~y))+_[3]+2399980690&4294967295,T=d+(g<<10&4294967295|g>>>22),g=y+(d^(T|~m))+_[10]+4293915773&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~d))+_[1]+2240044497&4294967295,m=y+(g<<21&4294967295|g>>>11),g=d+(y^(m|~T))+_[8]+1873313359&4294967295,d=m+(g<<6&4294967295|g>>>26),g=T+(m^(d|~y))+_[15]+4264355552&4294967295,T=d+(g<<10&4294967295|g>>>22),g=y+(d^(T|~m))+_[6]+2734768916&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~d))+_[13]+1309151649&4294967295,m=y+(g<<21&4294967295|g>>>11),g=d+(y^(m|~T))+_[4]+4149444226&4294967295,d=m+(g<<6&4294967295|g>>>26),g=T+(m^(d|~y))+_[11]+3174756917&4294967295,T=d+(g<<10&4294967295|g>>>22),g=y+(d^(T|~m))+_[2]+718787259&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)E[m++]=this.g[d]>>>_&255;return E};function o(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function l(E,d){this.h=d;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(m[y]=T,_=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new l([d|0],0>d?-1:0)}):new l([E|0],0>E?-1:0)}function p(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return k(p(-E));for(var d=[],m=1,_=0;E>=m;_++)d[_]=E/m|0,m*=4294967296;return new l(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return k(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=p(Math.pow(d,8)),_=A,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),g=parseInt(E.substring(y,y+T),d);8>T?(T=p(Math.pow(d,T)),_=_.j(T).add(p(g))):(_=_.j(m),_=_.add(p(g)))}return _}var A=f(0),S=f(1),C=f(16777216);n=l.prototype,n.m=function(){if(x(this))return-k(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+k(this).toString(E);for(var d=p(Math.pow(E,6)),m=this,_="";;){var y=it(m,d).g;m=B(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,D(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=B(this,E),x(E)?-1:D(E)?0:1};function k(E){for(var d=E.g.length,m=[],_=0;_<d;_++)m[_]=~E.g[_];return new l(m,~E.h).add(S)}n.abs=function(){return x(this)?k(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),g=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=g>>>16,T&=65535,g&=65535,m[y]=g<<16|T}return new l(m,m[m.length-1]&-2147483648?-1:0)};function B(E,d){return E.add(k(d))}n.j=function(E){if(D(this)||D(E))return A;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(0>this.l(C)&&0>E.l(C))return p(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,g=this.i(_)&65535,Rt=E.i(y)>>>16,_e=E.i(y)&65535;m[2*_+2*y]+=g*_e,G(m,2*_+2*y),m[2*_+2*y+1]+=T*_e,G(m,2*_+2*y+1),m[2*_+2*y+1]+=g*Rt,G(m,2*_+2*y+1),m[2*_+2*y+2]+=T*Rt,G(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new l(m,0)};function G(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function Q(E,d){this.g=E,this.h=d}function it(E,d){if(D(d))throw Error("division by zero");if(D(E))return new Q(A,A);if(x(E))return d=it(k(E),d),new Q(k(d.g),k(d.h));if(x(d))return d=it(E,k(d)),new Q(k(d.g),d.h);if(30<E.g.length){if(x(E)||x(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=d;0>=_.l(E);)m=Bt(m),_=Bt(_);var y=gt(m,1),T=gt(_,1);for(_=gt(_,2),m=gt(m,2);!D(_);){var g=T.add(_);0>=g.l(E)&&(y=y.add(m),T=g),_=gt(_,1),m=gt(m,1)}return d=B(E,y.j(d)),new Q(y,d)}for(y=A;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=p(m),g=T.j(d);x(g)||0<g.l(E);)m-=_,T=p(m),g=T.j(d);D(T)&&(T=S),y=y.add(T),E=B(E,g)}return new Q(y,E)}n.A=function(E){return it(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&E.i(_);return new l(m,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|E.i(_);return new l(m,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^E.i(_);return new l(m,this.h^E.h)};function Bt(E){for(var d=E.g.length+1,m=[],_=0;_<d;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(m,E.h)}function gt(E,d){var m=d>>5;d%=32;for(var _=E.g.length-m,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+m)>>>d|E.i(T+m+1)<<32-d:E.i(T+m);return new l(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=I,vo=l}).apply(typeof vs<"u"?vs:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eo,To,Le,Io,Sn,Dr,wo,Ao,Ro;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,u){return r==Array.prototype||r==Object.prototype||(r[a]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var u=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in u))break t;u=u[v]}r=r[r.length-1],h=u[r],a=a(h),a!=h&&a!=null&&t(u,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var u=0,h=!1,v={next:function(){if(!h&&u<r.length){var w=u++;return{value:a(w,r[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function p(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,u){return r.call.apply(r.bind,arguments)}function A(r,a,u){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function S(r,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,S.apply(null,arguments)}function C(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function u(){}u.prototype=a.prototype,r.aa=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(h,v,w){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return a.prototype[v].apply(h,V)}}function x(r){const a=r.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=r[h];return u}return[]}function k(r,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const v=r.length||0,w=h.length||0;r.length=v+w;for(let V=0;V<w;V++)r[v+V]=h[V]}else r.push(h)}}class B{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function it(r){return it[" "](r),r}it[" "]=function(){};var Bt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function gt(r,a,u){for(const h in r)a.call(u,r[h],h,r)}function E(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function d(r){const a={};for(const u in r)a[u]=r[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let u,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(u in h)r[u]=h[u];for(let w=0;w<m.length;w++)u=m[w],Object.prototype.hasOwnProperty.call(h,u)&&(r[u]=h[u])}}function y(r){var a=1;r=r.split(":");const u=[];for(;0<a&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function T(r){c.setTimeout(()=>{throw r},0)}function g(){var r=Zn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Rt{constructor(){this.h=this.g=null}add(a,u){const h=_e.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var _e=new B(()=>new Aa,r=>r.reset());class Aa{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ve=!1,Zn=new Rt,oi=()=>{const r=c.Promise.resolve(void 0);ye=()=>{r.then(Ra)}};var Ra=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(u){T(u)}var a=_e;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ve=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Pa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return r}();function Ee(r,a){if(st.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Bt){t:{try{it(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Sa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ee.aa.h.call(this)}}D(Ee,st);var Sa={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Va=0;function Ca(r,a,u,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=v,this.key=++Va,this.da=this.fa=!1}function sn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,a,u,h,v){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var V=er(r,a,h,v);return-1<V?(a=r[V],u||(a.fa=!1)):(a=new Ca(a,this.src,w,!!h,v),a.fa=u,r.push(a)),a};function tr(r,a){var u=a.type;if(u in r.g){var h=r.g[u],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(sn(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function er(r,a,u,h){for(var v=0;v<r.length;++v){var w=r[v];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==h)return v}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function ai(r,a,u,h,v){if(h&&h.once)return li(r,a,u,h,v);if(Array.isArray(a)){for(var w=0;w<a.length;w++)ai(r,a[w],u,h,v);return null}return u=ar(u),r&&r[Te]?r.K(a,u,p(h)?!!h.capture:!!h,v):ui(r,a,u,!1,h,v)}function ui(r,a,u,h,v,w){if(!a)throw Error("Invalid event type");var V=p(v)?!!v.capture:!!v,U=sr(r);if(U||(r[nr]=U=new on(r)),u=U.add(a,u,h,V,w),u.proxy)return u;if(h=ba(),u.proxy=h,h.src=r,h.listener=u,r.addEventListener)Pa||(v=V),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(hi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ba(){function r(u){return a.call(r.src,r.listener,u)}const a=Da;return r}function li(r,a,u,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)li(r,a[w],u,h,v);return null}return u=ar(u),r&&r[Te]?r.L(a,u,p(h)?!!h.capture:!!h,v):ui(r,a,u,!0,h,v)}function ci(r,a,u,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)ci(r,a[w],u,h,v);else h=p(h)?!!h.capture:!!h,u=ar(u),r&&r[Te]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],u=er(w,u,h,v),-1<u&&(sn(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=sr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=er(a,u,h,v)),(u=-1<r?a[r]:null)&&ir(u))}function ir(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[Te])tr(a.i,r);else{var u=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(u,h,r.capture):a.detachEvent?a.detachEvent(hi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=sr(a))?(tr(u,r),u.h==0&&(u.src=null,a[nr]=null)):sn(r)}}}function hi(r){return r in rr?rr[r]:rr[r]="on"+r}function Da(r,a){if(r.da)r=!0;else{a=new Ee(a,this);var u=r.listener,h=r.ha||r.src;r.fa&&ir(r),r=u.call(h,a)}return r}function sr(r){return r=r[nr],r instanceof on?r:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(r){return typeof r=="function"?r:(r[or]||(r[or]=function(a){return r.handleEvent(a)}),r[or])}function ot(){kt.call(this),this.i=new on(this),this.M=this,this.F=null}D(ot,kt),ot.prototype[Te]=!0,ot.prototype.removeEventListener=function(r,a,u,h){ci(this,r,a,u,h)};function dt(r,a){var u,h=r.F;if(h)for(u=[];h;h=h.F)u.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new st(a,r);else if(a instanceof st)a.target=a.target||r;else{var v=a;a=new st(h,r),_(a,v)}if(v=!0,u)for(var w=u.length-1;0<=w;w--){var V=a.g=u[w];v=an(V,h,!0,a)&&v}if(V=a.g=r,v=an(V,h,!0,a)&&v,v=an(V,h,!1,a)&&v,u)for(w=0;w<u.length;w++)V=a.g=u[w],v=an(V,h,!1,a)&&v}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var u=r.g[a],h=0;h<u.length;h++)sn(u[h]);delete r.g[a],r.h--}}this.F=null},ot.prototype.K=function(r,a,u,h){return this.i.add(String(r),a,!1,u,h)},ot.prototype.L=function(r,a,u,h){return this.i.add(String(r),a,!0,u,h)};function an(r,a,u,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var V=a[w];if(V&&!V.da&&V.capture==u){var U=V.listener,tt=V.ha||V.src;V.fa&&tr(r.i,V),v=U.call(tt,h)!==!1&&v}}return v&&!h.defaultPrevented}function fi(r,a,u){if(typeof r=="function")u&&(r=S(r,u));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function di(r){r.g=fi(()=>{r.g=null,r.i&&(r.i=!1,di(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class ka extends kt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(r){kt.call(this),this.h=r,this.g={}}D(Ie,kt);var pi=[];function gi(r){gt(r.g,function(a,u){this.g.hasOwnProperty(u)&&ir(a)},r),r.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),gi(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ur=c.JSON.stringify,Na=c.JSON.parse,Oa=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function lr(){}lr.prototype.h=null;function mi(r){return r.h||(r.h=r.i())}function _i(){}var we={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){st.call(this,"d")}D(cr,st);function hr(){st.call(this,"c")}D(hr,st);var qt={},yi=null;function un(){return yi=yi||new ot}qt.La="serverreachability";function vi(r){st.call(this,qt.La,r)}D(vi,st);function Ae(r){const a=un();dt(a,new vi(a))}qt.STAT_EVENT="statevent";function Ei(r,a){st.call(this,qt.STAT_EVENT,r),this.stat=a}D(Ei,st);function pt(r){const a=un();dt(a,new Ei(a,r))}qt.Ma="timingevent";function Ti(r,a){st.call(this,qt.Ma,r),this.size=a}D(Ti,st);function Re(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function xa(r,a,u,h,v,w){r.info(function(){if(r.g)if(w)for(var V="",U=w.split("&"),tt=0;tt<U.length;tt++){var L=U[tt].split("=");if(1<L.length){var at=L[0];L=L[1];var ut=at.split("_");V=2<=ut.length&&ut[1]=="type"?V+(at+"="+L+"&"):V+(at+"=redacted&")}}else V=null;else V=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+u+`
`+V})}function Ma(r,a,u,h,v,w,V){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+u+`
`+w+" "+V})}function re(r,a,u,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+La(r,u)+(h?" "+h:"")})}function Fa(r,a){r.info(function(){return"TIMEOUT: "+a})}Pe.prototype.info=function(){};function La(r,a){if(!r.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var h=u[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return ur(u)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function cn(){}D(cn,lr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},fr=new cn;function Nt(r,a,u,h){this.j=r,this.i=a,this.l=u,this.R=h||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wi}function wi(){this.i=null,this.g="",this.h=!1}var Ai={},dr={};function pr(r,a,u){r.L=1,r.v=pn(Pt(a)),r.m=u,r.P=!0,Ri(r,null)}function Ri(r,a){r.F=Date.now(),hn(r),r.A=Pt(r.v);var u=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Ui(u.i,"t",h),r.C=0,u=r.j.J,r.h=new wi,r.g=rs(r.j,u?a:null,!r.m),0<r.O&&(r.M=new ka(S(r.Y,r,r.g),r.O)),a=r.U,u=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(pi[0]=v.toString()),v=pi);for(var w=0;w<v.length;w++){var V=ai(u,v[w],h||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ae(),xa(r.i,r.u,r.A,r.l,r.R,r.m)}Nt.prototype.ca=function(r){r=r.target;const a=this.M;a&&St(r)==3?a.j():this.Y(r)},Nt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=St(this.g);var a=this.g.Ba();const oe=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||ut!=4||a==7||(a==8||0>=oe?Ae(3):Ae(2)),gr(this);var u=this.g.Z();this.X=u;e:if(Pi(this)){var h=Ki(this.g);r="";var v=h.length,w=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Se(this);var V="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,Ma(this.i,this.u,this.A,this.l,this.R,ut,u),this.o){if(this.T&&!this.K){e:{if(this.g){var U,tt=this.g;if((U=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(U)){var L=U;break e}}L=null}if(u=L)re(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,u);else{this.o=!1,this.s=3,pt(12),$t(this),Se(this);break t}}if(this.P){u=!0;let Et;for(;!this.J&&this.C<V.length;)if(Et=Ua(this,V),Et==dr){ut==4&&(this.s=4,pt(14),u=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Ai){this.s=4,pt(15),re(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else re(this.i,this.l,Et,null),mr(this,Et);if(Pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||V.length!=0||this.h.h||(this.s=1,pt(16),u=!1),this.o=this.o&&u,!u)re(this.i,this.l,V,"[Invalid Chunked Response]"),$t(this),Se(this);else if(0<V.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ir(at),at.M=!0,pt(11))}}else re(this.i,this.l,V,null),mr(this,V);ut==4&&$t(this),this.o&&!this.J&&(ut==4?Zi(this.j,this):(this.o=!1,hn(this)))}else nu(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),$t(this),Se(this)}}}catch{}finally{}};function Pi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ua(r,a){var u=r.C,h=a.indexOf(`
`,u);return h==-1?dr:(u=Number(a.substring(u,h)),isNaN(u)?Ai:(h+=1,h+u>a.length?dr:(a=a.slice(h,h+u),r.C=h+u,a)))}Nt.prototype.cancel=function(){this.J=!0,$t(this)};function hn(r){r.S=Date.now()+r.I,Si(r,r.I)}function Si(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Re(S(r.ba,r),a)}function gr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Nt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Fa(this.i,this.A),this.L!=2&&(Ae(),pt(17)),$t(this),this.s=2,Se(this)):Si(this,this.S-r)};function Se(r){r.j.G==0||r.J||Zi(r.j,r)}function $t(r){gr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,gi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function mr(r,a){try{var u=r.j;if(u.G!=0&&(u.g==r||_r(u.h,r))){if(!r.K&&_r(u.h,r)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)vn(u),_n(u);else break t;Tr(u),pt(18)}}else u.za=v[1],0<u.za-u.T&&37500>v[2]&&u.F&&u.v==0&&!u.C&&(u.C=Re(S(u.Za,u),6e3));if(1>=bi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else zt(u,11)}else if((r.K||u.g==r)&&vn(u),!G(a))for(v=u.Da.g.parse(a),a=0;a<v.length;a++){let L=v[a];if(u.T=L[0],L=L[1],u.G==2)if(L[0]=="c"){u.K=L[1],u.ia=L[2];const at=L[3];at!=null&&(u.la=at,u.j.info("VER="+u.la));const ut=L[4];ut!=null&&(u.Aa=ut,u.j.info("SVER="+u.Aa));const oe=L[5];oe!=null&&typeof oe=="number"&&0<oe&&(h=1.5*oe,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Et=r.g;if(Et){const Tn=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tn){var w=h.h;w.g||Tn.indexOf("spdy")==-1&&Tn.indexOf("quic")==-1&&Tn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(yr(w,w.h),w.h=null))}if(h.D){const wr=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(h.ya=wr,q(h.I,h.D,wr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var V=r;if(h.qa=ns(h,h.J?h.ia:null,h.W),V.K){Di(h.h,V);var U=V,tt=h.L;tt&&(U.I=tt),U.B&&(gr(U),hn(U)),h.g=V}else Yi(h);0<u.i.length&&yn(u)}else L[0]!="stop"&&L[0]!="close"||zt(u,7);else u.G==3&&(L[0]=="stop"||L[0]=="close"?L[0]=="stop"?zt(u,7):Er(u):L[0]!="noop"&&u.l&&u.l.ta(L),u.v=0)}}Ae(4)}catch{}}var ja=class{constructor(r,a){this.g=r,this.map=a}};function Vi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ci(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function bi(r){return r.h?1:r.g?r.g.size:0}function _r(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function yr(r,a){r.g?r.g.add(a):r.h=a}function Di(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Vi.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ki(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.D);return a}return x(r.i)}function Ba(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],u=r.length,h=0;h<u;h++)a.push(r[h]);return a}a=[],u=0;for(h in r)a[u++]=r[h];return a}function qa(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var u=0;u<r;u++)a.push(u);return a}a=[],u=0;for(const h in r)a[u++]=h;return a}}}function Ni(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var u=qa(r),h=Ba(r),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],u&&u[w],r)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $a(r,a){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var h=r[u].indexOf("="),v=null;if(0<=h){var w=r[u].substring(0,h);v=r[u].substring(h+1)}else w=r[u];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Gt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Gt){this.h=r.h,fn(this,r.j),this.o=r.o,this.g=r.g,dn(this,r.s),this.l=r.l;var a=r.i,u=new be;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),xi(this,u),this.m=r.m}else r&&(a=String(r).match(Oi))?(this.h=!1,fn(this,a[1]||"",!0),this.o=Ve(a[2]||""),this.g=Ve(a[3]||"",!0),dn(this,a[4]),this.l=Ve(a[5]||"",!0),xi(this,a[6]||"",!0),this.m=Ve(a[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Gt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ce(a,Mi,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ce(a,Mi,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Ce(u,u.charAt(0)=="/"?Ka:za,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Ce(u,Qa)),r.join("")};function Pt(r){return new Gt(r)}function fn(r,a,u){r.j=u?Ve(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function dn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function xi(r,a,u){a instanceof be?(r.i=a,Wa(r.i,r.h)):(u||(a=Ce(a,Ha)),r.i=new be(a,r.h))}function q(r,a,u){r.i.set(a,u)}function pn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ve(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ce(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,Ga),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ga(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Mi=/[#\/\?@]/g,za=/[#\?:]/g,Ka=/[#\?]/g,Ha=/[#\?@]/g,Qa=/#/g;function be(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ot(r){r.g||(r.g=new Map,r.h=0,r.i&&$a(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=be.prototype,n.add=function(r,a){Ot(this),this.i=null,r=ie(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function Fi(r,a){Ot(r),a=ie(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Li(r,a){return Ot(r),a=ie(r,a),r.g.has(a)}n.forEach=function(r,a){Ot(this),this.g.forEach(function(u,h){u.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){Ot(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const v=r[h];for(let w=0;w<v.length;w++)u.push(a[h])}return u},n.V=function(r){Ot(this);let a=[];if(typeof r=="string")Li(this,r)&&(a=a.concat(this.g.get(ie(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)a=a.concat(r[u])}return a},n.set=function(r,a){return Ot(this),this.i=null,r=ie(this,r),Li(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Ui(r,a,u){Fi(r,a),0<u.length&&(r.i=null,r.g.set(ie(r,a),x(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const w=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var v=w;V[h]!==""&&(v+="="+encodeURIComponent(String(V[h]))),r.push(v)}}return this.i=r.join("&")};function ie(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Wa(r,a){a&&!r.j&&(Ot(r),r.i=null,r.g.forEach(function(u,h){var v=h.toLowerCase();h!=v&&(Fi(this,h),Ui(this,v,u))},r)),r.j=a}function Xa(r,a){const u=new Pe;if(c.Image){const h=new Image;h.onload=C(xt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(xt,u,"TestLoadImage: error",!1,a,h),h.onabort=C(xt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(xt,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Ya(r,a){const u=new Pe,h=new AbortController,v=setTimeout(()=>{h.abort(),xt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?xt(u,"TestPingServer: ok",!0,a):xt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),xt(u,"TestPingServer: error",!1,a)})}function xt(r,a,u,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(u)}catch{}}function Ja(){this.g=new Oa}function Za(r,a,u){const h=u||"";try{Ni(r,function(v,w){let V=v;p(v)&&(V=ur(v)),a.push(h+w+"="+encodeURIComponent(V))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function De(r){this.l=r.Ub||null,this.j=r.eb||!1}D(De,lr),De.prototype.g=function(){return new gn(this.l,this.j)},De.prototype.i=function(r){return function(){return r}}({});function gn(r,a){ot.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(gn,ot),n=gn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Ne(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ji(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ji(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?ke(this):Ne(this),this.readyState==3&&ji(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,ke(this))},n.Qa=function(r){this.g&&(this.response=r,ke(this))},n.ga=function(){this.g&&ke(this)};function ke(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ne(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function Ne(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Bi(r){let a="";return gt(r,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function vr(r,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=Bi(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):q(r,a,u))}function K(r){ot.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(K,ot);var tu=/^https?$/i,eu=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?mi(this.o):mi(fr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){qi(this,w);return}if(r=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)u.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())u.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(eu,a,void 0))||h||v||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of u)this.g.setRequestHeader(w,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zi(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){qi(this,w)}};function qi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,$i(r),mn(r)}function $i(r){r.A||(r.A=!0,dt(r,"complete"),dt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,dt(this,"complete"),dt(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},n.bb=function(){Gi(this)};function Gi(r){if(r.h&&typeof l<"u"&&(!r.v[1]||St(r)!=4||r.Z()!=2)){if(r.u&&St(r)==4)fi(r.Ea,0,r);else if(dt(r,"readystatechange"),St(r)==4){r.h=!1;try{const V=r.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=V===0){var v=String(r.D).match(Oi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!tu.test(v?v.toLowerCase():"")}u=h}if(u)dt(r,"complete"),dt(r,"success");else{r.m=6;try{var w=2<St(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",$i(r)}}finally{mn(r)}}}}function mn(r,a){if(r.g){zi(r);const u=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||dt(r,"ready");try{u.onreadystatechange=h}catch{}}}function zi(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function St(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Na(a)}};function Ki(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function nu(r){const a={};r=(r.g&&2<=St(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(G(r[h]))continue;var u=y(r[h]);const v=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[v]||[];a[v]=w,w.push(u)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function Hi(r){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oe("baseRetryDelayMs",5e3,r),this.cb=Oe("retryDelaySeedMs",1e4,r),this.Wa=Oe("forwardChannelMaxRetries",2,r),this.wa=Oe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(r&&r.concurrentRequestLimit),this.Da=new Ja,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hi.prototype,n.la=8,n.G=1,n.connect=function(r,a,u,h){pt(0),this.W=r,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=ns(this,null,this.W),yn(this)};function Er(r){if(Qi(r),r.G==3){var a=r.U++,u=Pt(r.I);if(q(u,"SID",r.K),q(u,"RID",a),q(u,"TYPE","terminate"),xe(r,u),a=new Nt(r,r.j,a),a.L=2,a.v=pn(Pt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=rs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hn(a)}es(r)}function _n(r){r.g&&(Ir(r),r.g.cancel(),r.g=null)}function Qi(r){_n(r),r.u&&(c.clearTimeout(r.u),r.u=null),vn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function yn(r){if(!Ci(r.h)&&!r.s){r.s=!0;var a=r.Ga;ye||oi(),ve||(ye(),ve=!0),Zn.add(a,r),r.B=0}}function ru(r,a){return bi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Re(S(r.Ga,r,a),ts(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Nt(this,this.j,r);let w=this.o;if(this.S&&(w?(w=d(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Xi(this,v,a),u=Pt(this.I),q(u,"RID",r),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),xe(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(Bi(w)))+"&"+a:this.m&&vr(u,this.m,w)),yr(this.h,v),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",a),q(u,"SID","null"),v.T=!0,pr(v,u,null)):pr(v,u,a),this.G=2}}else this.G==3&&(r?Wi(this,r):this.i.length==0||Ci(this.h)||Wi(this))};function Wi(r,a){var u;a?u=a.l:u=r.U++;const h=Pt(r.I);q(h,"SID",r.K),q(h,"RID",u),q(h,"AID",r.T),xe(r,h),r.m&&r.o&&vr(h,r.m,r.o),u=new Nt(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Xi(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),yr(r.h,u),pr(u,h,a)}function xe(r,a){r.H&&gt(r.H,function(u,h){q(a,h,u)}),r.l&&Ni({},function(u,h){q(a,h,u)})}function Xi(r,a,u){u=Math.min(r.i.length,u);var h=r.l?S(r.l.Na,r.l,r):null;t:{var v=r.i;let w=-1;for(;;){const V=["count="+u];w==-1?0<u?(w=v[0].g,V.push("ofs="+w)):w=0:V.push("ofs="+w);let U=!0;for(let tt=0;tt<u;tt++){let L=v[tt].g;const at=v[tt].map;if(L-=w,0>L)w=Math.max(0,v[tt].g-100),U=!1;else try{Za(at,V,"req"+L+"_")}catch{h&&h(at)}}if(U){h=V.join("&");break t}}}return r=r.i.splice(0,u),a.D=r,h}function Yi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;ye||oi(),ve||(ye(),ve=!0),Zn.add(a,r),r.v=0}}function Tr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Re(S(r.Fa,r),ts(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Ji(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Re(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),_n(this),Ji(this))};function Ir(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Ji(r){r.g=new Nt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Pt(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),xe(r,a),r.m&&r.o&&vr(a,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=pn(Pt(a)),u.m=null,u.P=!0,Ri(u,r)}n.Za=function(){this.C!=null&&(this.C=null,_n(this),Tr(this),pt(19))};function vn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Zi(r,a){var u=null;if(r.g==a){vn(r),Ir(r),r.g=null;var h=2}else if(_r(r.h,a))u=a.D,Di(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=un(),dt(h,new Ti(h,u)),yn(r)}else Yi(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&ru(r,a)||h==2&&Tr(r)))switch(u&&0<u.length&&(a=r.h,a.i=a.i.concat(u)),v){case 1:zt(r,5);break;case 4:zt(r,10);break;case 3:zt(r,6);break;default:zt(r,2)}}}function ts(r,a){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*a}function zt(r,a){if(r.j.info("Error code "+a),a==2){var u=S(r.fb,r),h=r.Xa;const v=!h;h=new Gt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fn(h,"https"),pn(h),v?Xa(h.toString(),u):Ya(h.toString(),u)}else pt(2);r.G=0,r.l&&r.l.sa(a),es(r),Qi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function es(r){if(r.G=0,r.ka=[],r.l){const a=ki(r.h);(a.length!=0||r.i.length!=0)&&(k(r.ka,a),k(r.ka,r.i),r.h.i.length=0,x(r.i),r.i.length=0),r.l.ra()}}function ns(r,a,u){var h=u instanceof Gt?Pt(u):new Gt(u);if(h.g!="")a&&(h.g=a+"."+h.g),dn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Gt(null);h&&fn(w,h),a&&(w.g=a),v&&dn(w,v),u&&(w.l=u),h=w}return u=r.D,a=r.ya,u&&a&&q(h,u,a),q(h,"VER",r.la),xe(r,h),h}function rs(r,a,u){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new De({eb:u})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function is(){}n=is.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function En(){}En.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){ot.call(this),this.g=new Hi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!G(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new se(this)}D(yt,ot),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Er(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=ur(r),r=u);a.i.push(new ja(a.Ya++,r)),a.G==3&&yn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,yt.aa.N.call(this)};function ss(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const u in a){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(ss,cr);function os(){hr.call(this),this.status=1}D(os,hr);function se(r){this.g=r}D(se,is),se.prototype.ua=function(){dt(this.g,"a")},se.prototype.ta=function(r){dt(this.g,new ss(r))},se.prototype.sa=function(r){dt(this.g,new os)},se.prototype.ra=function(){dt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Ro=function(){return new En},Ao=function(){return un()},wo=qt,Dr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Sn=ln,Ii.COMPLETE="complete",Io=Ii,_i.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Le=_i,To=De,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,Eo=K}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const Es="@firebase/firestore";/**
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
 */const Zt=new Qs("@firebase/firestore");function Me(){return Zt.logLevel}function b(n,...t){if(Zt.logLevel<=Mt.DEBUG){const e=t.map(zr);Zt.debug(`Firestore (${ge}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=Mt.ERROR){const e=t.map(zr);Zt.error(`Firestore (${ge}): ${n}`,...e)}}function kn(n,...t){if(Zt.logLevel<=Mt.WARN){const e=t.map(zr);Zt.warn(`Firestore (${ge}): ${n}`,...e)}}function zr(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function Z(n,t){n||M()}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ur{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Po{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class Jl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zl{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Z(typeof i.accessToken=="string"),new Po(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new ct(t)}}class tc{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ec{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new tc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new nc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ic(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class So{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=ic(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function ce(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new J(0,0))}static max(){return new z(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class He{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends He{construct(t,e,i){return new H(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends He{construct(t,e,i){return new rt(t,e,i)}static isValidIdentifier(t){return sc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(o(),s++)}if(o(),l)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(H.fromString(t))}static fromName(t){return new O(H.fromString(t).popFirst(5))}static empty(){return new O(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new H(t.slice()))}}function oc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(i===1e9?new J(e+1,0):new J(e,i));return new Lt(s,O.empty(),t)}function ac(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Lt(z.min(),O.empty(),-1)}static max(){return new Lt(z.max(),O.empty(),-1)}}function uc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const lc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Vo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==lc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},f=>i(f))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{l[p]=I,++c,c===o&&i(l)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function hc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Co{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Co.oe=-1;function Kr(n){return n==null}function Nn(n){return n===0&&1/n==-1/0}function fc(n){return typeof n=="number"&&Number.isInteger(n)&&!Nn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ts(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function tn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function bo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class _t{constructor(t,e){this.comparator=t,this.root=e||et.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class et{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i!=null?i:et.RED,this.left=s!=null?s:et.EMPTY,this.right=o!=null?o:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new et(t!=null?t:this.key,e!=null?e:this.value,i!=null?i:this.color,s!=null?s:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Is(this.data.getIterator())}getIteratorFrom(t){return new Is(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Is{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new dc("Invalid base64 string: "+o):o}}(t);return new Dt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const pc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(Z(!!n),typeof n=="string"){let t=0;const e=pc.exec(n);if(Z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qe(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */function Hr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Do(n){const t=n.mapValue.fields.__previous_value__;return Hr(t)?Do(t):t}function On(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class gc{constructor(t,e,i,s,o,l,c,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const An={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hr(n)?4:mc(n)?9007199254740991:10:M()}function At(n,t){if(n===t)return!0;const e=he(n);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return On(n).isEqual(On(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ee(s.timestampValue),c=ee(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Qe(s.bytesValue).isEqual(Qe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return nt(s.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return nt(s.integerValue)===nt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=nt(s.doubleValue),c=nt(o.doubleValue);return l===c?Nn(l)===Nn(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return ce(n.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ts(l)!==Ts(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!At(l[f],c[f])))return!1;return!0}(n,t);default:return M()}}function We(n,t){return(n.values||[]).find(e=>At(e,t))!==void 0}function fe(n,t){if(n===t)return 0;const e=he(n),i=he(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=nt(o.integerValue||o.doubleValue),f=nt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return ws(n.timestampValue,t.timestampValue);case 4:return ws(On(n),On(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Qe(o),f=Qe(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let p=0;p<c.length&&p<f.length;p++){const I=j(c[p],f[p]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=j(nt(o.latitude),nt(l.latitude));return c!==0?c:j(nt(o.longitude),nt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const c=o.values||[],f=l.values||[];for(let p=0;p<c.length&&p<f.length;++p){const I=fe(c[p],f[p]);if(I)return I}return j(c.length,f.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===An.mapValue&&l===An.mapValue)return 0;if(o===An.mapValue)return 1;if(l===An.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=l.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=j(f[A],I[A]);if(S!==0)return S;const C=fe(c[f[A]],p[I[A]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function ws(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ee(n),i=ee(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function de(n){return kr(n)}function kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Qe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${kr(e.fields[l])}`;return s+"}"}(n.mapValue):M()}function Nr(n){return!!n&&"integerValue"in n}function Qr(n){return!!n&&"arrayValue"in n}function Vn(n){return!!n&&"mapValue"in n}function je(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return tn(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=je(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=je(n.arrayValue.values[e]);return t}return Object.assign({},n)}function mc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Vn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=je(e)}setAll(t){let e=rt.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=je(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Vn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Vn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){tn(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new It(je(this.value))}}function ko(n){const t=[];return tn(n.fields,(e,i)=>{const s=new rt([e]);if(Vn(i)){const o=ko(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new wt(t)}/**
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
 */class Tt{constructor(t,e,i,s,o,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,z.min(),z.min(),z.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Tt(t,1,e,z.min(),i,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,z.min(),z.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,z.min(),z.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mn{constructor(t,e){this.position=t,this.inclusive=e}}function As(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(l.referenceValue),e.key):i=fe(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!At(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Fn{constructor(t,e="asc"){this.field=t,this.dir=e}}function _c(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class No{}class Y extends No{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new vc(t,e,i):e==="array-contains"?new Ic(t,i):e==="in"?new wc(t,i):e==="not-in"?new Ac(t,i):e==="array-contains-any"?new Rc(t,i):new Y(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Ec(t,i):new Tc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fe(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends No{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ut(t,e)}matches(t){return Oo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oo(n){return n.op==="and"}function xo(n){return yc(n)&&Oo(n)}function yc(n){for(const t of n.filters)if(t instanceof Ut)return!1;return!0}function Or(n){if(n instanceof Y)return n.field.canonicalString()+n.op.toString()+de(n.value);if(xo(n))return n.filters.map(t=>Or(t)).join(",");{const t=n.filters.map(e=>Or(e)).join(",");return`${n.op}(${t})`}}function Mo(n,t){return n instanceof Y?function(i,s){return s instanceof Y&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(n,t):n instanceof Ut?function(i,s){return s instanceof Ut&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,c)=>o&&Mo(l,s.filters[c]),!0):!1}(n,t):void M()}function Fo(n){return n instanceof Y?function(e){return`${e.field.canonicalString()} ${e.op} ${de(e.value)}`}(n):n instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(Fo).join(" ,")+"}"}(n):"Filter"}class vc extends Y{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ec extends Y{constructor(t,e){super(t,"in",e),this.keys=Lo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tc extends Y{constructor(t,e){super(t,"not-in",e),this.keys=Lo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class Ic extends Y{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qr(e)&&We(e.arrayValue,this.value)}}class wc extends Y{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class Ac extends Y{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!We(this.value.arrayValue,e)}}class Rc extends Y{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
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
 */class Pc{constructor(t,e=null,i=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function Ps(n,t=null,e=[],i=[],s=null,o=null,l=null){return new Pc(n,t,e,i,s,o,l)}function Wr(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Or(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>de(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>de(i)).join(",")),t.ue=e}return t.ue}function Xr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!_c(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Mo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rs(n.startAt,t.startAt)&&Rs(n.endAt,t.endAt)}/**
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
 */class zn{constructor(t,e=null,i=[],s=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sc(n,t,e,i,s,o,l,c){return new zn(n,t,e,i,s,o,l,c)}function Vc(n){return new zn(n)}function Ss(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cc(n){return n.collectionGroup!==null}function Be(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new ft(rt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Fn(o,i))}),e.has(rt.keyField().canonicalString())||t.ce.push(new Fn(rt.keyField(),i))}return t.ce}function Wt(n){const t=$(n);return t.le||(t.le=bc(t,Be(n))),t.le}function bc(n,t){if(n.limitType==="F")return Ps(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Fn(s.field,o)});const e=n.endAt?new Mn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Mn(n.startAt.position,n.startAt.inclusive):null;return Ps(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function xr(n,t,e){return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Uo(n,t){return Xr(Wt(n),Wt(t))&&n.limitType===t.limitType}function jo(n){return`${Wr(Wt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Fo(s)).join(", ")}]`),Kr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>de(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>de(s)).join(",")),`Target(${i})`}(Wt(n))}; limitType=${n.limitType})`}function Yr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Be(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,c,f){const p=As(l,c,f);return l.inclusive?p<=0:p<0}(i.startAt,Be(i),s)||i.endAt&&!function(l,c,f){const p=As(l,c,f);return l.inclusive?p>=0:p>0}(i.endAt,Be(i),s))}(n,t)}function Dc(n){return(t,e)=>{let i=!1;for(const s of Be(n)){const o=kc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function kc(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),p=c.data.field(o);return f!==null&&p!==null?fe(f,p):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){tn(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return bo(this.inner)}size(){return this.innerSize}}/**
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
 */const Nc=new _t(O.comparator);function Ln(){return Nc}const Bo=new _t(O.comparator);function Rn(...n){let t=Bo;for(const e of n)t=t.insert(e.key,e);return t}function qo(n){let t=Bo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Ht(){return qe()}function $o(){return qe()}function qe(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const Oc=new _t(O.comparator),xc=new ft(O.comparator);function ht(...n){let t=xc;for(const e of n)t=t.add(e);return t}const Mc=new ft(j);function Fc(){return Mc}/**
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
 */function Go(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nn(t)?"-0":t}}function zo(n){return{integerValue:""+n}}function Lc(n,t){return fc(t)?zo(t):Go(n,t)}/**
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
 */class Kn{constructor(){this._=void 0}}function Uc(n,t,e){return n instanceof Un?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hr(o)&&(o=Do(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof Xe?Ho(n,t):n instanceof Ye?Qo(n,t):function(s,o){const l=Ko(s,o),c=Vs(l)+Vs(s.Pe);return Nr(l)&&Nr(s.Pe)?zo(c):Go(s.serializer,c)}(n,t)}function jc(n,t,e){return n instanceof Xe?Ho(n,t):n instanceof Ye?Qo(n,t):e}function Ko(n,t){return n instanceof jn?function(i){return Nr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Un extends Kn{}class Xe extends Kn{constructor(t){super(),this.elements=t}}function Ho(n,t){const e=Wo(t);for(const i of n.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ye extends Kn{constructor(t){super(),this.elements=t}}function Qo(n,t){let e=Wo(t);for(const i of n.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class jn extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Vs(n){return nt(n.integerValue||n.doubleValue)}function Wo(n){return Qr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Bc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Xe&&s instanceof Xe||i instanceof Ye&&s instanceof Ye?ce(i.elements,s.elements,At):i instanceof jn&&s instanceof jn?At(i.Pe,s.Pe):i instanceof Un&&s instanceof Un}(n.transform,t.transform)}class qc{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Hn{}function Xo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Jo(n.key,Ct.none()):new en(n.key,n.data,Ct.none());{const e=n.data,i=It.empty();let s=new ft(rt.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new ne(n.key,i,new wt(s.toArray()),Ct.none())}}function $c(n,t,e){n instanceof en?function(s,o,l){const c=s.value.clone(),f=bs(s.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,l){if(!Cn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=bs(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Yo(s)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function $e(n,t,e,i){return n instanceof en?function(o,l,c,f){if(!Cn(o.precondition,l))return c;const p=o.value.clone(),I=Ds(o.fieldTransforms,f,l);return p.setAll(I),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof ne?function(o,l,c,f){if(!Cn(o.precondition,l))return c;const p=Ds(o.fieldTransforms,f,l),I=l.data;return I.setAll(Yo(o)),I.setAll(p),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,l,c){return Cn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function Gc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Ko(i.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(i.field,o))}return e||null}function Cs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ce(i,s,(o,l)=>Bc(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class en extends Hn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Hn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Yo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function bs(n,t,e){const i=new Map;Z(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);i.set(o.field,jc(l,c,e[s]))}return i}function Ds(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,Uc(o,l,t))}return i}class Jo extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zc extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$c(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=$o();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const f=Xo(l,c);f!==null&&i.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(z.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(e,i)=>Cs(e,i))&&ce(this.baseMutations,t.baseMutations,(e,i)=>Cs(e,i))}}class Jr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Z(t.mutations.length===i.length);let s=function(){return Oc}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new Jr(t,e,i,s)}}/**
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
 */class Hc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var W,F;function Qc(n){switch(n){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Wc(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case W.OK:return P.OK;case W.CANCELLED:return P.CANCELLED;case W.UNKNOWN:return P.UNKNOWN;case W.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case W.INTERNAL:return P.INTERNAL;case W.UNAVAILABLE:return P.UNAVAILABLE;case W.UNAUTHENTICATED:return P.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case W.NOT_FOUND:return P.NOT_FOUND;case W.ALREADY_EXISTS:return P.ALREADY_EXISTS;case W.PERMISSION_DENIED:return P.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case W.ABORTED:return P.ABORTED;case W.OUT_OF_RANGE:return P.OUT_OF_RANGE;case W.UNIMPLEMENTED:return P.UNIMPLEMENTED;case W.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(F=W||(W={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new vo([4294967295,4294967295],0);class Xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Jc(n,t){return Mr(n,t.toTimestamp())}function ue(n){return Z(!!n),z.fromTimestamp(function(e){const i=ee(e);return new J(i.seconds,i.nanos)}(n))}function Zo(n,t){return Fr(n,t).canonicalString()}function Fr(n,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Zc(n){const t=H.fromString(n);return Z(ah(t)),t}function Lr(n,t){return Zo(n.databaseId,t.path)}function th(n){const t=Zc(n);return t.length===4?H.emptyPath():nh(t)}function eh(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nh(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ks(n,t,e){return{name:Lr(n,t),fields:e.value.mapValue.fields}}function rh(n,t){let e;if(t instanceof en)e={update:ks(n,t.key,t.value)};else if(t instanceof Jo)e={delete:Lr(n,t.key)};else if(t instanceof ne)e={update:ks(n,t.key,t.data),updateMask:oh(t.fieldMask)};else{if(!(t instanceof zc))return M();e={verify:Lr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const c=l.transform;if(c instanceof Un)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xe)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ye)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof jn)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Jc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function ih(n,t){return n&&n.length>0?(Z(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?ue(s.updateTime):ue(o);return l.isEqual(z.min())&&(l=ue(o)),new qc(l,s.transformResults||[])}(e,t))):[]}function sh(n){let t=th(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Z(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const S=ta(A);return S instanceof Ut&&xo(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(S=>function(D){return new Fn(ae(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(A){let S;return S=typeof A=="object"?A.value:A,Kr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,C=A.values||[];return new Mn(C,S)}(e.startAt));let p=null;return e.endAt&&(p=function(A){const S=!A.before,C=A.values||[];return new Mn(C,S)}(e.endAt)),Sc(t,s,l,o,c,"F",f,p)}function ta(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ae(e.unaryFilter.field);return Y.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ae(e.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ae(e.unaryFilter.field);return Y.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ae(e.unaryFilter.field);return Y.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return Y.create(ae(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(i=>ta(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function ae(n){return rt.fromServerFormat(n.fieldPath)}function oh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ah(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class uh{constructor(t){this.ct=t}}function lh(n){const t=sh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xr(t,t.limit,"L"):t}/**
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
 */class ch{constructor(){this._n=new hh}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Lt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class hh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ft(H.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ft(H.comparator)).toArray()}}/**
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
 */class fh{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class dh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ph{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&$e(i.mutation,s,wt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ht()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ht()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Rn();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=Ht();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ht()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let o=Ln();const l=qe(),c=function(){return qe()}();return e.forEach((f,p)=>{const I=i.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof ne)?o=o.insert(p.key,p):I!==void 0?(l.set(p.key,I.mutation.getFieldMask()),$e(I.mutation,p,I.mutation.getFieldMask(),J.now())):l.set(p.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>l.set(p,I)),e.forEach((p,I)=>{var A;return c.set(p,new dh(I,(A=l.get(p))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const i=qe();let s=new _t((l,c)=>l-c),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=i.get(f)||wt.empty();I=c.applyToLocalView(p,I),i.set(f,I);const A=(s.get(c.batchId)||ht()).add(f);s=s.insert(c.batchId,A)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,I=f.value,A=$o();I.forEach(S=>{if(!o.has(S)){const C=Xo(e.get(S),i.get(S));C!==null&&A.set(S,C),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,p,A))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Ht());let c=-1,f=o;return l.next(p=>R.forEach(p,(I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,ht())).next(I=>({batchId:c,changes:qo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Rn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Rn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const p=function(A,S){return new zn(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,i,s).next(I=>{I.forEach((A,S)=>{l=l.insert(A,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((f,p)=>{const I=p.getKey();l.get(I)===null&&(l=l.insert(I,Tt.newInvalidDocument(I)))});let c=Rn();return l.forEach((f,p)=>{const I=o.get(f);I!==void 0&&$e(I.mutation,p,wt.empty(),J.now()),Yr(e,p)&&(c=c.insert(f,p))}),c})}}/**
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
 */class gh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:lh(s.bundledQuery),readTime:ue(s.readTime)}}(e)),R.resolve()}}/**
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
 */class mh{constructor(){this.overlays=new _t(O.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Ht();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Ht(),o=e.length+1,l=new O(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((p,I)=>p-I);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let I=o.get(p.largestBatchId);I===null&&(I=Ht(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const c=Ht(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>c.set(p,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Hc(e,i));let o=this.hr.get(e);o===void 0&&(o=ht(),this.hr.set(e,o)),this.hr.set(e,o.add(i.key))}}/**
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
 */class Zr{constructor(){this.Pr=new ft(X.Ir),this.Tr=new ft(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new X(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new X(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new O(new H([])),i=new X(e,t),s=new X(e,t+1),o=[];return this.Tr.forEachInRange([i,s],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new H([])),i=new X(e,t),s=new X(e,t+1);let o=ht();return this.Tr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new X(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class X{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||j(t.pr,e.pr)}static Er(t,e){return j(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
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
 */class _h{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ft(X.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Kc(o,e,i,s);this.mutationQueue.push(l);for(const c of s)this.wr=this.wr.add(new X(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new X(e,0),s=new X(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([i,s],l=>{const c=this.Sr(l.pr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ft(j);return e.forEach(s=>{const o=new X(s,0),l=new X(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],c=>{i=i.add(c.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const l=new X(new O(o),0);let c=new ft(j);return this.wr.forEachWhile(f=>{const p=f.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.pr)),!0)},l),R.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const o=new X(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new X(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class yh{constructor(t){this.vr=t,this.docs=function(){return new _t(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let i=Ln();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Ln();const l=e.path,c=new O(l.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||uc(ac(I),i)<=0||(s.has(I.key)||Yr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new vh(this)}getSize(t){return R.resolve(this.size)}}class vh extends fh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Eh{constructor(t){this.persistence=t,this.Mr=new me(e=>Wr(e),Xr),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zr,this.targetCount=0,this.Lr=pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Mr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
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
 */class Th{constructor(t,e){this.Br={},this.overlays={},this.kr=new Co(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Eh(this),this.indexManager=new ch,this.remoteDocumentCache=function(s){return new yh(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new uh(e),this.$r=new gh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new _h(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){b("MemoryPersistence","Starting transaction:",t);const s=new Ih(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class Ih extends cc{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.zr=new Zr,this.jr=null}static Hr(t){return new ti(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=O.fromPath(i);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class ei{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ht(),s=ht();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ei(t,e.fromCache,i,s)}}/**
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
 */class wh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ah{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wu()?8:hc(Au())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new wh;return this.Ji(t,e,l).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,l,c.size)})}).next(()=>o.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(Me()<=Mt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Me()<=Mt.DEBUG&&b("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Me()<=Mt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Wt(e))):R.resolve())}ji(t,e){if(Ss(e))return R.resolve(null);let i=Wt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=xr(e,null,"F"),i=Wt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=ht(...o);return this.zi.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const p=this.Zi(e,c);return this.Xi(e,p,l,f.readTime)?this.ji(t,xr(e,null,"F")):this.es(t,p,e,f)}))})))}Hi(t,e,i,s){return Ss(e)||s.isEqual(z.min())?R.resolve(null):this.zi.getDocuments(t,i).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,i,s)?R.resolve(null):(Me()<=Mt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.es(t,l,e,oc(s,-1)).next(c=>c))})}Zi(t,e){let i=new ft(Dc(t));return e.forEach((s,o)=>{Yr(t,o)&&(i=i.add(o))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,i){return Me()<=Mt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.zi.getDocumentsMatchingQuery(t,e,Lt.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */class Rh{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new _t(j),this.rs=new me(o=>Wr(o),Xr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ph(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Ph(n,t,e,i){return new Rh(n,t,e,i)}async function ea(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],c=[];let f=ht();for(const p of s){l.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(p=>({us:p,removedBatchIds:l,addedBatchIds:c}))})})}function Sh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,f,p,I){const A=p.batch,S=A.keys();let C=R.resolve();return S.forEach(D=>{C=C.next(()=>I.getEntry(f,D)).next(x=>{const k=p.docVersions.get(D);Z(k!==null),x.version.compareTo(k)<0&&(A.applyToRemoteDocument(x,p),x.isValidDocument()&&(x.setReadTime(p.commitVersion),I.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ht();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Vh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Ch(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ns{constructor(){this.activeTargetIds=Fc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bh{constructor(){this.no=new Ns,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ns,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Dh{io(t){}shutdown(){}}/**
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
 */class Os{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pn=null;function Sr(){return Pn===null?Pn=function(){return 268435456+Math.round(2147483648*Math.random())}():Pn++,"0x"+Pn.toString(16)}/**
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
 */const kh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const lt="WebChannelConnection";class Oh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,i,s,o,l){const c=Sr(),f=this.vo(e,i.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const p={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(p,o,l),this.Mo(e,f,p,s).then(I=>(b("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw kn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}xo(e,i,s,o,l,c){return this.Co(e,i,s,o,l)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}vo(e,i){const s=kh[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const o=Sr();return new Promise((l,c)=>{const f=new Eo;f.setWithCredentials(!0),f.listenOnce(Io.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Sn.NO_ERROR:const I=f.getResponseJson();b(lt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Sn.TIMEOUT:b(lt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Sn.HTTP_ERROR:const A=f.getStatus();if(b(lt,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const D=function(k){const B=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(C.status);c(new N(D,C.message))}else c(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{b(lt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(s);b(lt,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",p,i,15)})}Oo(t,e,i){const s=Sr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Ro(),c=Ao(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.xmlHttpFactory=new To({})),this.Fo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");b(lt,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=l.createWebChannel(I,f);let S=!1,C=!1;const D=new Nh({lo:k=>{C?b(lt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(b(lt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),b(lt,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},ho:()=>A.close()}),x=(k,B,G)=>{k.listen(B,Q=>{try{G(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return x(A,Le.EventType.OPEN,()=>{C||(b(lt,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),x(A,Le.EventType.CLOSE,()=>{C||(C=!0,b(lt,`RPC '${t}' stream ${s} transport closed`),D.po())}),x(A,Le.EventType.ERROR,k=>{C||(C=!0,kn(lt,`RPC '${t}' stream ${s} transport errored:`,k),D.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),x(A,Le.EventType.MESSAGE,k=>{var B;if(!C){const G=k.data[0];Z(!!G);const Q=G,it=Q.error||((B=Q[0])===null||B===void 0?void 0:B.error);if(it){b(lt,`RPC '${t}' stream ${s} received error:`,it);const Bt=it.status;let gt=function(m){const _=W[m];if(_!==void 0)return Wc(_)}(Bt),E=it.message;gt===void 0&&(gt=P.INTERNAL,E="Unknown error status: "+Bt+" with message "+it.message),C=!0,D.po(new N(gt,E)),A.close()}else b(lt,`RPC '${t}' stream ${s} received:`,G),D.yo(G)}}),x(c,wo.STAT_EVENT,k=>{k.stat===Dr.PROXY?b(lt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Dr.NOPROXY&&b(lt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function Vr(){return typeof document<"u"?document:null}/**
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
 */function Qn(n){return new Xc(n,!0)}/**
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
 */class na{constructor(t,e,i=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class xh{constructor(t,e,i,s,o,l,c,f){this.oi=t,this.Go=i,this.zo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new na(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mh extends xh{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=ih(t.writeResults,t.commitTime),i=ue(t.commitTime);return this.listener.A_(i,e)}return Z(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=eh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>rh(this.serializer,i))};this.i_(e)}}/**
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
 */class Fh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,Fr(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,i,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.xo(t,Fr(e,i),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(P.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Lh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(te(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Uh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{i.enqueueAndForget(async()=>{rn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=$(f);p.M_.add(4),await nn(p),p.N_.set("Unknown"),p.M_.delete(4),await Wn(p)}(this))})}),this.N_=new Lh(i,s)}}async function Wn(n){if(rn(n))for(const t of n.x_)await t(!0)}async function nn(n){for(const t of n.x_)await t(!1)}function rn(n){return $(n).M_.size===0}async function ra(n,t,e){if(!Gn(t))throw t;n.M_.add(1),await nn(n),n.N_.set("Offline"),e||(e=()=>Vh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Wn(n)})}function ia(n,t){return t().catch(e=>ra(n,e,t))}async function Xn(n){const t=$(n),e=jt(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;jh(t);)try{const s=await Ch(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,Bh(t,s)}catch(s){await ra(t,s)}sa(t)&&oa(t)}function jh(n){return rn(n)&&n.v_.length<10}function Bh(n,t){n.v_.push(t);const e=jt(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function sa(n){return rn(n)&&!jt(n).Zo()&&n.v_.length>0}function oa(n){jt(n).start()}async function qh(n){jt(n).V_()}async function $h(n){const t=jt(n);for(const e of n.v_)t.d_(e.mutations)}async function Gh(n,t,e){const i=n.v_.shift(),s=Jr.from(i,t,e);await ia(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xn(n)}async function zh(n,t){t&&jt(n).E_&&await async function(i,s){if(function(l){return Qc(l)&&l!==P.ABORTED}(s.code)){const o=i.v_.shift();jt(i).t_(),await ia(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Xn(i)}}(n,t),sa(n)&&oa(n)}async function xs(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const i=rn(e);e.M_.add(3),await nn(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Wn(e)}async function Kh(n,t){const e=$(n);t?(e.M_.delete(2),await Wn(e)):t||(e.M_.add(2),await nn(e),e.N_.set("Unknown"))}function jt(n){return n.k_||(n.k_=function(e,i,s){const o=$(e);return o.f_(),new Mh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:qh.bind(null,n),Ao:zh.bind(null,n),R_:$h.bind(null,n),A_:Gh.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Xn(n)):(await n.k_.stop(),n.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class ni{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,c=new ni(t,e,l,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(n,t){if(te("AsyncQueue",`${t}: ${n}`),Gn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Hh{constructor(){this.queries=new me(t=>jo(t),Uo),this.onlineState="Unknown",this.z_=new Set}}function Qh(n){n.z_.forEach(t=>{t.next()})}var Ms,Fs;(Fs=Ms||(Ms={})).J_="default",Fs.Cache="cache";class Wh{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new me(c=>jo(c),Uo),this.Da=new Map,this.Ca=new Set,this.va=new _t(O.comparator),this.Fa=new Map,this.Ma=new Zr,this.xa={},this.Oa=new Map,this.Na=pe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Xh(n,t,e){const i=tf(n);try{const s=await function(l,c){const f=$(l),p=J.now(),I=c.reduce((C,D)=>C.add(D.key),ht());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Ln(),x=ht();return f.os.getEntries(C,I).next(k=>{D=k,D.forEach((B,G)=>{G.isValidDocument()||(x=x.add(B))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,D)).next(k=>{A=k;const B=[];for(const G of c){const Q=Gc(G,A.get(G.key).overlayedDocument);Q!=null&&B.push(new ne(G.key,Q,ko(Q.value.mapValue),Ct.exists(!0)))}return f.mutationQueue.addMutationBatch(C,p,B,c)}).next(k=>{S=k;const B=k.applyToLocalDocumentSet(A,x);return f.documentOverlayCache.saveOverlays(C,k.batchId,B)})}).then(()=>({batchId:S.batchId,changes:qo(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let p=l.xa[l.currentUser.toKey()];p||(p=new _t(j)),p=p.insert(c,f),l.xa[l.currentUser.toKey()]=p}(i,s.batchId,e),await Yn(i,s.changes),await Xn(i.remoteStore)}catch(s){const o=aa(s,"Failed to persist write");e.reject(o)}}function Ls(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((o,l)=>{const c=l.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=$(l);f.onlineState=c;let p=!1;f.queries.forEach((I,A)=>{for(const S of A.U_)S.j_(c)&&(p=!0)}),p&&Qh(f)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Yh(n,t){const e=$(n),i=t.batch.batchId;try{const s=await Sh(e.localStore,t);la(e,i,null),ua(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Yn(e,s)}catch(s){await Vo(s)}}async function Jh(n,t,e){const i=$(n);try{const s=await function(l,c){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,c).next(A=>(Z(A!==null),I=A.keys(),f.mutationQueue.removeMutationBatch(p,A))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(i.localStore,t);la(i,t,e),ua(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Yn(i,s)}catch(s){await Vo(s)}}function ua(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function la(n,t,e){const i=$(n);let s=i.xa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function Yn(n,t,e){const i=$(n),s=[],o=[],l=[];i.ba.isEmpty()||(i.ba.forEach((c,f)=>{l.push(i.Ba(f,t,e).then(p=>{if((p||e)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(f.targetId,p!=null&&p.fromCache?"not-current":"current"),p){s.push(p);const I=ei.Ki(f.targetId,p);o.push(I)}}))}),await Promise.all(l),i.Sa.h_(s),await async function(f,p){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(p,S=>R.forEach(S.qi,C=>I.persistence.referenceDelegate.addReference(A,S.targetId,C)).next(()=>R.forEach(S.Qi,C=>I.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))}catch(A){if(!Gn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of p){const S=A.targetId;if(!A.fromCache){const C=I.ns.get(S),D=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(D);I.ns=I.ns.insert(S,x)}}}(i.localStore,o))}async function Zh(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const i=await ea(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(c=>{c.forEach(f=>{f.reject(new N(P.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Yn(e,i.us)}}function tf(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jh.bind(null,t),t}class Us{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ph(this.persistence,new Ah,t.initialUser,this.serializer)}createPersistence(t){return new Th(ti.Hr,this.serializer)}createSharedClientState(t){return new bh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ef{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ls(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zh.bind(null,this.syncEngine),await Kh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hh}()}createDatastore(t){const e=Qn(t.databaseInfo.databaseId),i=function(o){return new Oh(o)}(t.databaseInfo);return function(o,l,c,f){return new Fh(o,l,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,c){return new Uh(i,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ls(this.syncEngine,e,0),function(){return Os.D()?new Os:new Dh}())}createSyncEngine(t,e){return function(s,o,l,c,f,p,I){const A=new Wh(s,o,l,c,f,p);return I&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=$(i);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await nn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class nf{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=aa(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Cr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await ea(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function js(n,t){n.asyncQueue.verifyOperationInProgress();const e=await sf(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>xs(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>xs(t.remoteStore,s)),n._onlineComponents=t}function rf(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function sf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!rf(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Cr(n,new Us)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Cr(n,new Us);return n._offlineComponents}async function of(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await js(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await js(n,new ef))),n._onlineComponents}function af(n){return of(n).then(t=>t.syncEngine)}/**
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
 */function ca(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Bs=new Map;/**
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
 */function ha(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function uf(n,t,e,i){if(t===!0&&i===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function qs(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $s(n){if(O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function fa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ri(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Gs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}uf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ca((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Yl;switch(i.type){case"firstParty":return new ec(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Bs.get(e);i&&(b("ComponentProvider","Removing Datastore"),Bs.delete(e),i.terminate())}(this),Promise.resolve()}}function lf(n,t,e,i={}){var s;const o=(n=fa(n,Jn))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ct.MOCK_USER;else{c=Tu(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(p)}n._authCredentials=new Jl(new Po(c,f))}}/**
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
 */class ii{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ii(this.firestore,t,this._query)}}class bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Ft extends ii{constructor(t,e,i){super(t,e,Vc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new O(t))}withConverter(t){return new Ft(this.firestore,t,this._path)}}function Bf(n,t,...e){if(n=Xt(n),ha("collection","path",t),n instanceof Jn){const i=H.fromString(t,...e);return $s(i),new Ft(n,null,i)}{if(!(n instanceof bt||n instanceof Ft))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(H.fromString(t,...e));return $s(i),new Ft(n.firestore,null,i)}}function cf(n,t,...e){if(n=Xt(n),arguments.length===1&&(t=So.newId()),ha("doc","path",t),n instanceof Jn){const i=H.fromString(t,...e);return qs(i),new bt(n,null,new O(i))}{if(!(n instanceof bt||n instanceof Ft))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(H.fromString(t,...e));return qs(i),new bt(n.firestore,n instanceof Ft?n.converter:null,new O(i))}}/**
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
 */class hf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new na(this,"async_queue_retry"),this.hu=()=>{const e=Vr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Vr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Qt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Gn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=ni.createAndSchedule(this,t,e,i,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class da extends Jn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new hf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pa(this),this._firestoreClient.terminate()}}function ff(n,t){const e=typeof n=="object"?n:Hs(),i=typeof n=="string"?n:t||"(default)",s=Ze(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Eu("firestore");o&&lf(s,...o)}return s}function df(n){return n._firestoreClient||pa(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function pa(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,p,I){return new gc(c,f,p,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ca(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new nf(n._authCredentials,n._appCheckCredentials,n._queue,o),((e=s.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((i=s.localCache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Je(Dt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Je(Dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ga{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ma{constructor(t){this._methodName=t}}/**
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
 */class _a{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */const pf=/^__.*__$/;class gf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new en(t,this.data,e,this.fieldTransforms)}}function ya(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class si{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new si(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Bn(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ya(this.fu)&&pf.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class mf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Qn(t)}Fu(t,e,i,s=!1){return new si({fu:t,methodName:e,vu:i,path:rt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _f(n){const t=n._freezeSettings(),e=Qn(n._databaseId);return new mf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function yf(n,t,e,i,s,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Ia("Data must be an object, but it was:",l,i);const c=Ea(i,l);let f,p;if(o.merge)f=new wt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=vf(t,A,e);if(!l.contains(S))throw new N(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);If(I,S)||I.push(S)}f=new wt(I),p=l.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,p=l.fieldTransforms;return new gf(new It(c),f,p)}function va(n,t){if(Ta(n=Xt(n)))return Ia("Unsupported field value:",t,n),Ea(n,t);if(n instanceof ma)return function(i,s){if(!ya(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const c of i){let f=va(c,s.bu(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Xt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Lc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=J.fromDate(i);return{timestampValue:Mr(s.serializer,o)}}if(i instanceof J){const o=new J(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Mr(s.serializer,o)}}if(i instanceof _a)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Je)return{bytesValue:Yc(s.serializer,i._byteString)};if(i instanceof bt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zo(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${ri(i)}`)}(n,t)}function Ea(n,t){const e={};return bo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tn(n,(i,s)=>{const o=va(s,t.pu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Ta(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof _a||n instanceof Je||n instanceof bt||n instanceof ma)}function Ia(n,t,e){if(!Ta(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=ri(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function vf(n,t,e){if((t=Xt(t))instanceof ga)return t._internalPath;if(typeof t=="string")return Tf(n,t);throw Bn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ef=new RegExp("[~\\*/\\[\\]]");function Tf(n,t,e){if(t.search(Ef)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ga(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${i}`),l&&(f+=` in document ${s}`),f+=")"),new N(P.INVALID_ARGUMENT,c+n+f)}function If(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function wf(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}function qf(n,t){const e=fa(n.firestore,da),i=cf(n),s=wf(n.converter,t);return Af(e,[yf(_f(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Ct.exists(!1))]).then(()=>i)}function Af(n,t){return function(i,s){const o=new Qt;return i.asyncQueue.enqueueAndForget(async()=>Xh(await af(i),s,o)),o.promise}(df(n),t)}(function(t,e=!0){(function(s){ge=s})(Iu),ze(new Ke("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new da(new Zl(i.getProvider("auth-internal")),new rc(i.getProvider("app-check-internal")),function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(p.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),le(Es,"4.6.2",t),le(Es,"4.6.2","esm2017")})();const zs={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},Rf={light:as(zs,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:as(zs,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}})};function Pf({children:n}){const[t]=uu();return Vt(Pu,{theme:lu(Rf[t]),children:n})}const Sf=cu({reducer:{login:hu}}),Vf={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_STORAGE_BUCKET,messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID},Cf=document.getElementById("root"),bf=Ws(Cf),wa=Ru(Vf);Hl(wa);const Df=ff(wa);function kf(n){bf.render(Vt(iu,{clientId:"967689051729-u5kn73uscp0gp6s2itk6t4cs5fgkenkn.apps.googleusercontent.com",children:Vt(Ge.exports.StrictMode,{children:Vt(fu,{children:Vt(du,{children:Vt(Pf,{children:Vt(Du,{store:Sf,children:Vt(n,{})})})})})})}))}const $f=Object.freeze(Object.defineProperty({__proto__:null,db:Df,default:kf},Symbol.toStringTag,{value:"Module"}));export{$f as R,qf as a,Bf as c,Df as d};

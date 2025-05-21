import{a0 as ol,a1 as al,r as le,R as ll,k as us,$ as ul,j as xt,F as cl,a2 as hl,a3 as fl,a4 as dl}from"./loginSlice-zK_AStpI.js";import{G as pl}from"./index.esm-BZVWSyh9.js";import{q as ml}from"./index.module-D0wURyH9.js";import{r as ce,_ as $e,C as Ge,a as Ye,E as Xs,o as gl,F as Br,L as Ys,g as Xt,i as _l,b as yl,v as vl,c as cs,d as Js,e as Tl,f as El,h as Il,j as wl,k as Mt,S as Al,l as Rl,m as Pl,n as Sl}from"./index.esm-BnTqRH7_.js";import{T as Vl}from"./ThemeProvider-SSwU2VUv.js";var In={},hs;function Cl(){if(hs)return In;hs=1;var n=ol();return In.createRoot=n.createRoot,In.hydrateRoot=n.hydrateRoot,In}var bl=Cl();function kl(){const n=al();let t=null,e=null;return{clear(){t=null,e=null},notify(){n(()=>{let i=t;for(;i;)i.callback(),i=i.next})},get(){let i=[],s=t;for(;s;)i.push(s),s=s.next;return i},subscribe(i){let s=!0,o=e={callback:i,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){!s||t===null||(s=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const fs={notify(){},get:()=>[]};function Dl(n,t){let e,i=fs,s=0,o=!1;function u(O){I();const D=i.subscribe(O);let q=!1;return()=>{q||(q=!0,D(),A())}}function c(){i.notify()}function f(){b.onStateChange&&b.onStateChange()}function p(){return o}function I(){s++,e||(e=n.subscribe(f),i=kl())}function A(){s--,e&&s===0&&(e(),e=void 0,i.clear(),i=fs)}function S(){o||(o=!0,I())}function C(){o&&(o=!1,A())}const b={addNestedSub:u,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:p,trySubscribe:S,tryUnsubscribe:C,getListeners:()=>i};return b}const Nl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ol=Nl?le.useLayoutEffect:le.useEffect;function xl({store:n,context:t,children:e,serverState:i,stabilityCheck:s="once",noopCheck:o="once"}){const u=le.useMemo(()=>{const p=Dl(n);return{store:n,subscription:p,getServerState:i?()=>i:void 0,stabilityCheck:s,noopCheck:o}},[n,i,s,o]),c=le.useMemo(()=>n.getState(),[n]);Ol(()=>{const{subscription:p}=u;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==n.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[u,c]);const f=t||ll;return le.createElement(f.Provider,{value:u},e)}const Zs="@firebase/installations",qr="0.6.9";/**
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
 */const to=1e4,eo=`w:${qr}`,no="FIS_v2",Ml="https://firebaseinstallations.googleapis.com/v1",Fl=60*60*1e3,Ll="installations",Ul="Installations";/**
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
 */const jl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yt=new Xs(Ll,Ul,jl);function ro(n){return n instanceof Br&&n.code.includes("request-failed")}/**
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
 */function io({projectId:n}){return`${Ml}/projects/${n}/installations`}function so(n){return{token:n.token,requestStatus:2,expiresIn:ql(n.expiresIn),creationTime:Date.now()}}async function oo(n,t){const i=(await t.json()).error;return Yt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ao({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Bl(n,{refreshToken:t}){const e=ao(n);return e.append("Authorization",$l(t)),e}async function lo(n){const t=await n();return t.status>=500&&t.status<600?n():t}function ql(n){return Number(n.replace("s","000"))}function $l(n){return`${no} ${n}`}/**
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
 */async function Gl({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=io(n),s=ao(n),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const u={fid:e,authVersion:no,appId:n.appId,sdkVersion:eo},c={method:"POST",headers:s,body:JSON.stringify(u)},f=await lo(()=>fetch(i,c));if(f.ok){const p=await f.json();return{fid:p.fid||e,registrationStatus:2,refreshToken:p.refreshToken,authToken:so(p.authToken)}}else throw await oo("Create Installation",f)}/**
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
 */function uo(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Kl(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zl=/^[cdef][\w-]{21}$/,kr="";function Hl(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Ql(n);return zl.test(e)?e:kr}catch{return kr}}function Ql(n){return Kl(n).substr(0,22)}/**
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
 */function Gn(n){return`${n.appName}!${n.appId}`}/**
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
 */const co=new Map;function ho(n,t){const e=Gn(n);fo(e,t),Wl(e,t)}function fo(n,t){const e=co.get(n);if(e)for(const i of e)i(t)}function Wl(n,t){const e=Xl();e&&e.postMessage({key:n,fid:t}),Yl()}let zt=null;function Xl(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=n=>{fo(n.data.key,n.data.fid)}),zt}function Yl(){co.size===0&&zt&&(zt.close(),zt=null)}/**
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
 */const Jl="firebase-installations-database",Zl=1,Jt="firebase-installations-store";let Rr=null;function $r(){return Rr||(Rr=gl(Jl,Zl,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Jt)}}})),Rr}async function kn(n,t){const e=Gn(n),s=(await $r()).transaction(Jt,"readwrite"),o=s.objectStore(Jt),u=await o.get(e);return await o.put(t,e),await s.done,(!u||u.fid!==t.fid)&&ho(n,t.fid),t}async function po(n){const t=Gn(n),i=(await $r()).transaction(Jt,"readwrite");await i.objectStore(Jt).delete(t),await i.done}async function Kn(n,t){const e=Gn(n),s=(await $r()).transaction(Jt,"readwrite"),o=s.objectStore(Jt),u=await o.get(e),c=t(u);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!u||u.fid!==c.fid)&&ho(n,c.fid),c}/**
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
 */async function Gr(n){let t;const e=await Kn(n.appConfig,i=>{const s=tu(i),o=eu(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===kr?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function tu(n){const t=n||{fid:Hl(),registrationStatus:0};return mo(t)}function eu(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=nu(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ru(n)}:{installationEntry:t}}async function nu(n,t){try{const e=await Gl(n,t);return kn(n.appConfig,e)}catch(e){throw ro(e)&&e.customData.serverCode===409?await po(n.appConfig):await kn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function ru(n){let t=await ds(n.appConfig);for(;t.registrationStatus===1;)await uo(100),t=await ds(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Gr(n);return i||e}return t}function ds(n){return Kn(n,t=>{if(!t)throw Yt.create("installation-not-found");return mo(t)})}function mo(n){return iu(n)?{fid:n.fid,registrationStatus:0}:n}function iu(n){return n.registrationStatus===1&&n.registrationTime+to<Date.now()}/**
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
 */async function su({appConfig:n,heartbeatServiceProvider:t},e){const i=ou(n,e),s=Bl(n,e),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const u={installation:{sdkVersion:eo,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(u)},f=await lo(()=>fetch(i,c));if(f.ok){const p=await f.json();return so(p)}else throw await oo("Generate Auth Token",f)}function ou(n,{fid:t}){return`${io(n)}/${t}/authTokens:generate`}/**
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
 */async function Kr(n,t=!1){let e;const i=await Kn(n.appConfig,o=>{if(!go(o))throw Yt.create("not-registered");const u=o.authToken;if(!t&&uu(u))return o;if(u.requestStatus===1)return e=au(n,t),o;{if(!navigator.onLine)throw Yt.create("app-offline");const c=hu(o);return e=lu(n,c),c}});return e?await e:i.authToken}async function au(n,t){let e=await ps(n.appConfig);for(;e.authToken.requestStatus===1;)await uo(100),e=await ps(n.appConfig);const i=e.authToken;return i.requestStatus===0?Kr(n,t):i}function ps(n){return Kn(n,t=>{if(!go(t))throw Yt.create("not-registered");const e=t.authToken;return fu(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lu(n,t){try{const e=await su(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await kn(n.appConfig,i),e}catch(e){if(ro(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await po(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kn(n.appConfig,i)}throw e}}function go(n){return n!==void 0&&n.registrationStatus===2}function uu(n){return n.requestStatus===2&&!cu(n)}function cu(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Fl}function hu(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function fu(n){return n.requestStatus===1&&n.requestTime+to<Date.now()}/**
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
 */async function du(n){const t=n,{installationEntry:e,registrationPromise:i}=await Gr(t);return i?i.catch(console.error):Kr(t).catch(console.error),e.fid}/**
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
 */async function pu(n,t=!1){const e=n;return await mu(e),(await Kr(e,t)).token}async function mu(n){const{registrationPromise:t}=await Gr(n);t&&await t}/**
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
 */function gu(n){if(!n||!n.options)throw Pr("App Configuration");if(!n.name)throw Pr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Pr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Pr(n){return Yt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="installations",_u="installations-internal",yu=n=>{const t=n.getProvider("app").getImmediate(),e=gu(t),i=Ye(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},vu=n=>{const t=n.getProvider("app").getImmediate(),e=Ye(t,_o).getImmediate();return{getId:()=>du(e),getToken:s=>pu(e,s)}};function Tu(){$e(new Ge(_o,yu,"PUBLIC")),$e(new Ge(_u,vu,"PRIVATE"))}Tu();ce(Zs,qr);ce(Zs,qr,"esm2017");/**
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
 */const Dn="analytics",Eu="firebase_id",Iu="origin",wu=60*1e3,Au="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zr="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new Ys("@firebase/analytics");/**
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
 */const Ru={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Xs("analytics","Analytics",Ru);/**
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
 */function Pu(n){if(!n.startsWith(zr)){const t=vt.create("invalid-gtag-resource",{gtagURL:n});return gt.warn(t.message),""}return n}function yo(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Su(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Vu(n,t){const e=Su("firebase-js-sdk-policy",{createScriptURL:Pu}),i=document.createElement("script"),s=`${zr}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Cu(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function bu(n,t,e,i,s,o){const u=i[s];try{if(u)await t[u];else{const f=(await yo(e)).find(p=>p.measurementId===s);f&&await t[f.appId]}}catch(c){gt.error(c)}n("config",s,o)}async function ku(n,t,e,i,s){try{let o=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const c=await yo(e);for(const f of u){const p=c.find(A=>A.measurementId===f),I=p&&t[p.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",i,s||{})}catch(o){gt.error(o)}}function Du(n,t,e,i){async function s(o,...u){try{if(o==="event"){const[c,f]=u;await ku(n,t,e,c,f)}else if(o==="config"){const[c,f]=u;await bu(n,t,e,i,c,f)}else if(o==="consent"){const[c,f]=u;n("consent",c,f)}else if(o==="get"){const[c,f,p]=u;n("get",c,f,p)}else if(o==="set"){const[c]=u;n("set",c)}else n(o,...u)}catch(c){gt.error(c)}}return s}function Nu(n,t,e,i,s){let o=function(...u){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Du(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Ou(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(zr)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=30,Mu=1e3;class Fu{constructor(t={},e=Mu){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const vo=new Fu;function Lu(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Uu(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Lu(i)},o=Au.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let c="";try{const f=await u.json();!((t=f.error)===null||t===void 0)&&t.message&&(c=f.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c})}return u.json()}async function ju(n,t=vo,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw vt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw vt.create("no-api-key")}const u=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new $u;return setTimeout(async()=>{c.abort()},wu),To({appId:i,apiKey:s,measurementId:o},u,c,t)}async function To(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=vo){var o;const{appId:u,measurementId:c}=n;try{await Bu(i,t)}catch(f){if(c)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:c};throw f}try{const f=await Uu(n);return s.deleteThrottleMetadata(u),f}catch(f){const p=f;if(!qu(p)){if(s.deleteThrottleMetadata(u),c)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:c};throw f}const I=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?cs(e,s.intervalMillis,xu):cs(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(u,A),gt.debug(`Calling attemptFetch again in ${I} millis`),To(n,A,i,s)}}function Bu(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),i(vt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function qu(n){if(!(n instanceof Br)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class $u{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Gu(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const o=await t,u=Object.assign(Object.assign({},i),{send_to:o});n("event",e,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(){if(yl())try{await vl()}catch(n){return gt.warn(vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return gt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zu(n,t,e,i,s,o,u){var c;const f=ju(n);f.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>gt.error(C)),t.push(f);const p=Ku().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([f,p]);Ou(o)||Vu(o,I.measurementId),s("js",new Date);const S=(c=u==null?void 0:u.config)!==null&&c!==void 0?c:{};return S[Iu]="firebase",S.update=!0,A!=null&&(S[Eu]=A),s("config",I.measurementId,S),I.measurementId}/**
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
 */class Hu{constructor(t){this.app=t}_delete(){return delete Le[this.app.options.appId],Promise.resolve()}}let Le={},ms=[];const gs={};let Sr="dataLayer",Qu="gtag",_s,Eo,ys=!1;function Wu(){const n=[];if(_l()&&n.push("This is a browser extension environment."),El()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=vt.create("invalid-analytics-context",{errorInfo:t});gt.warn(e.message)}}function Xu(n,t,e){Wu();const i=n.options.appId;if(!i)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Le[i]!=null)throw vt.create("already-exists",{id:i});if(!ys){Cu(Sr);const{wrappedGtag:o,gtagCore:u}=Nu(Le,ms,gs,Sr,Qu);Eo=o,_s=u,ys=!0}return Le[i]=zu(n,ms,gs,t,_s,Sr,e),new Hu(n)}function Yu(n=Js()){n=Xt(n);const t=Ye(n,Dn);return t.isInitialized()?t.getImmediate():Ju(n)}function Ju(n,t={}){const e=Ye(n,Dn);if(e.isInitialized()){const s=e.getImmediate();if(Tl(t,e.getOptions()))return s;throw vt.create("already-initialized")}return e.initialize({options:t})}function Zu(n,t,e,i){n=Xt(n),Gu(Eo,Le[n.app.options.appId],t,e,i).catch(s=>gt.error(s))}const vs="@firebase/analytics",Ts="0.10.8";function tc(){$e(new Ge(Dn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Xu(i,s,e)},"PUBLIC")),$e(new Ge("analytics-internal",n,"PRIVATE")),ce(vs,Ts),ce(vs,Ts,"esm2017");function n(t){try{const e=t.getProvider(Dn).getImmediate();return{logEvent:(i,s,o)=>Zu(e,i,s,o)}}catch(e){throw vt.create("interop-component-reg-failed",{reason:e})}}}tc();var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Io;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function g(){}g.prototype=d.prototype,v.D=d.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,y,E){for(var m=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)m[Pt-2]=arguments[Pt];return d.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=v.g[0],g=v.g[1],y=v.g[2];var E=v.g[3],m=d+(E^g&(y^E))+_[0]+3614090360&4294967295;d=g+(m<<7&4294967295|m>>>25),m=E+(y^d&(g^y))+_[1]+3905402710&4294967295,E=d+(m<<12&4294967295|m>>>20),m=y+(g^E&(d^g))+_[2]+606105819&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(d^y&(E^d))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(E^g&(y^E))+_[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=E+(y^d&(g^y))+_[5]+1200080426&4294967295,E=d+(m<<12&4294967295|m>>>20),m=y+(g^E&(d^g))+_[6]+2821735955&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(d^y&(E^d))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(E^g&(y^E))+_[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=E+(y^d&(g^y))+_[9]+2336552879&4294967295,E=d+(m<<12&4294967295|m>>>20),m=y+(g^E&(d^g))+_[10]+4294925233&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(d^y&(E^d))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(E^g&(y^E))+_[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=E+(y^d&(g^y))+_[13]+4254626195&4294967295,E=d+(m<<12&4294967295|m>>>20),m=y+(g^E&(d^g))+_[14]+2792965006&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(d^y&(E^d))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(y^E&(g^y))+_[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(d^g))+_[6]+3225465664&4294967295,E=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(E^d))+_[11]+643717713&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^d&(y^E))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^E&(g^y))+_[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(d^g))+_[10]+38016083&4294967295,E=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(E^d))+_[15]+3634488961&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^d&(y^E))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^E&(g^y))+_[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(d^g))+_[14]+3275163606&4294967295,E=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(E^d))+_[3]+4107603335&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^d&(y^E))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^E&(g^y))+_[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(d^g))+_[2]+4243563512&4294967295,E=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(E^d))+_[7]+1735328473&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^d&(y^E))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(g^y^E)+_[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=E+(d^g^y)+_[8]+2272392833&4294967295,E=d+(m<<11&4294967295|m>>>21),m=y+(E^d^g)+_[11]+1839030562&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^d)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^E)+_[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=E+(d^g^y)+_[4]+1272893353&4294967295,E=d+(m<<11&4294967295|m>>>21),m=y+(E^d^g)+_[7]+4139469664&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^d)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^E)+_[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=E+(d^g^y)+_[0]+3936430074&4294967295,E=d+(m<<11&4294967295|m>>>21),m=y+(E^d^g)+_[3]+3572445317&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^d)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^E)+_[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=E+(d^g^y)+_[12]+3873151461&4294967295,E=d+(m<<11&4294967295|m>>>21),m=y+(E^d^g)+_[15]+530742520&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^d)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(y^(g|~E))+_[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=E+(g^(d|~y))+_[7]+1126891415&4294967295,E=d+(m<<10&4294967295|m>>>22),m=y+(d^(E|~g))+_[14]+2878612391&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~d))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~E))+_[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=E+(g^(d|~y))+_[3]+2399980690&4294967295,E=d+(m<<10&4294967295|m>>>22),m=y+(d^(E|~g))+_[10]+4293915773&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~d))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~E))+_[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=E+(g^(d|~y))+_[15]+4264355552&4294967295,E=d+(m<<10&4294967295|m>>>22),m=y+(d^(E|~g))+_[6]+2734768916&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~d))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~E))+_[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=E+(g^(d|~y))+_[11]+3174756917&4294967295,E=d+(m<<10&4294967295|m>>>22),m=y+(d^(E|~g))+_[2]+718787259&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+E&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var g=d-this.blockSize,_=this.B,y=this.h,E=0;E<d;){if(y==0)for(;E<=g;)s(this,v,E),E+=this.blockSize;if(typeof v=="string"){for(;E<d;)if(_[y++]=v.charCodeAt(E++),y==this.blockSize){s(this,_),y=0;break}}else for(;E<d;)if(_[y++]=v[E++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var g=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=g&255,g/=256;for(this.u(v),v=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)v[g++]=this.g[d]>>>_&255;return v};function o(v,d){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=d(v)}function u(v,d){this.h=d;for(var g=[],_=!0,y=v.length-1;0<=y;y--){var E=v[y]|0;_&&E==d||(g[y]=E,_=!1)}this.g=g}var c={};function f(v){return-128<=v&&128>v?o(v,function(d){return new u([d|0],0>d?-1:0)}):new u([v|0],0>v?-1:0)}function p(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(p(-v));for(var d=[],g=1,_=0;v>=g;_++)d[_]=v/g|0,g*=4294967296;return new u(d,0)}function I(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return D(I(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(d,8)),_=A,y=0;y<v.length;y+=8){var E=Math.min(8,v.length-y),m=parseInt(v.substring(y,y+E),d);8>E?(E=p(Math.pow(d,E)),_=_.j(E).add(p(m))):(_=_.j(g),_=_.add(p(m)))}return _}var A=f(0),S=f(1),C=f(16777216);n=u.prototype,n.m=function(){if(O(this))return-D(this).m();for(var v=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var d=p(Math.pow(v,6)),g=this,_="";;){var y=it(g,d).g;g=q(g,y.j(d));var E=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,b(g))return E+_;for(;6>E.length;)E="0"+E;_=E+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=q(this,v),O(v)?-1:b(v)?0:1};function D(v){for(var d=v.g.length,g=[],_=0;_<d;_++)g[_]=~v.g[_];return new u(g,~v.h).add(S)}n.abs=function(){return O(this)?D(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0,y=0;y<=d;y++){var E=_+(this.i(y)&65535)+(v.i(y)&65535),m=(E>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=m>>>16,E&=65535,m&=65535,g[y]=m<<16|E}return new u(g,g[g.length-1]&-2147483648?-1:0)};function q(v,d){return v.add(D(d))}n.j=function(v){if(b(this)||b(v))return A;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return p(this.m()*v.m());for(var d=this.g.length+v.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var E=this.i(_)>>>16,m=this.i(_)&65535,Pt=v.i(y)>>>16,ye=v.i(y)&65535;g[2*_+2*y]+=m*ye,G(g,2*_+2*y),g[2*_+2*y+1]+=E*ye,G(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Pt,G(g,2*_+2*y+1),g[2*_+2*y+2]+=E*Pt,G(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function G(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function Q(v,d){this.g=v,this.h=d}function it(v,d){if(b(d))throw Error("division by zero");if(b(v))return new Q(A,A);if(O(v))return d=it(D(v),d),new Q(D(d.g),D(d.h));if(O(d))return d=it(v,D(d)),new Q(D(d.g),d.h);if(30<v.g.length){if(O(v)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=d;0>=_.l(v);)g=Bt(g),_=Bt(_);var y=mt(g,1),E=mt(_,1);for(_=mt(_,2),g=mt(g,2);!b(_);){var m=E.add(_);0>=m.l(v)&&(y=y.add(g),E=m),_=mt(_,1),g=mt(g,1)}return d=q(v,y.j(d)),new Q(y,d)}for(y=A;0<=v.l(d);){for(g=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),E=p(g),m=E.j(d);O(m)||0<m.l(v);)g-=_,E=p(g),m=E.j(d);b(E)&&(E=S),y=y.add(E),v=q(v,m)}return new Q(y,v)}n.A=function(v){return it(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&v.i(_);return new u(g,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|v.i(_);return new u(g,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^v.i(_);return new u(g,this.h^v.h)};function Bt(v){for(var d=v.g.length+1,g=[],_=0;_<d;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(g,v.h)}function mt(v,d){var g=d>>5;d%=32;for(var _=v.g.length-g,y=[],E=0;E<_;E++)y[E]=0<d?v.i(E+g)>>>d|v.i(E+g+1)<<32-d:v.i(E+g);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=I,Io=u}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});var wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wo,Fe,Ao,Vn,Dr,Ro,Po,So;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof wn=="object"&&wn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var T=r[h];if(!(T in l))break t;l=l[T]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,T={next:function(){if(!h&&l<r.length){var w=l++;return{value:a(w,r[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function p(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function A(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),r.apply(a,T)}}return function(){return r.apply(a,arguments)}}function S(r,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,S.apply(null,arguments)}function C(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function b(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,T,w){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return a.prototype[T].apply(h,V)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function D(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const T=r.length||0,w=h.length||0;r.length=T+w;for(let V=0;V<w;V++)r[T+V]=h[V]}else r.push(h)}}class q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function it(r){return it[" "](r),r}it[" "]=function(){};var Bt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function mt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function v(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)r[l]=h[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function E(r){c.setTimeout(()=>{throw r},0)}function m(){var r=er;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,l){const h=ye.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ye=new q(()=>new Ra,r=>r.reset());class Ra{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,Te=!1,er=new Pt,ui=()=>{const r=c.Promise.resolve(void 0);ve=()=>{r.then(Pa)}};var Pa=()=>{for(var r;r=m();){try{r.h.call(r.g)}catch(l){E(l)}var a=ye;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Te=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Sa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Ee(r,a){if(st.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Bt){t:{try{it(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Va[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ee.aa.h.call(this)}}b(Ee,st);var Va={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),Ca=0;function ba(r,a,l,h,T){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++Ca,this.da=this.fa=!1}function rn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function sn(r){this.src=r,this.g={},this.h=0}sn.prototype.add=function(r,a,l,h,T){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var V=rr(r,a,h,T);return-1<V?(a=r[V],l||(a.fa=!1)):(a=new ba(a,this.src,w,!!h,T),a.fa=l,r.push(a)),a};function nr(r,a){var l=a.type;if(l in r.g){var h=r.g[l],T=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(h,T,1),w&&(rn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function rr(r,a,l,h){for(var T=0;T<r.length;++T){var w=r[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return T}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),sr={};function ci(r,a,l,h,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ci(r,a[w],l,h,T);return null}return l=di(l),r&&r[nn]?r.K(a,l,p(h)?!!h.capture:!1,T):ka(r,a,l,!1,h,T)}function ka(r,a,l,h,T,w){if(!a)throw Error("Invalid event type");var V=p(T)?!!T.capture:!!T,U=ar(r);if(U||(r[ir]=U=new sn(r)),l=U.add(a,l,h,V,w),l.proxy)return l;if(h=Da(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)Sa||(T=V),T===void 0&&(T=!1),r.addEventListener(a.toString(),h,T);else if(r.attachEvent)r.attachEvent(fi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Da(){function r(l){return a.call(r.src,r.listener,l)}const a=Na;return r}function hi(r,a,l,h,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)hi(r,a[w],l,h,T);else h=p(h)?!!h.capture:!!h,l=di(l),r&&r[nn]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],l=rr(w,l,h,T),-1<l&&(rn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=ar(r))&&(a=r.g[a.toString()],r=-1,a&&(r=rr(a,l,h,T)),(l=-1<r?a[r]:null)&&or(l))}function or(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[nn])nr(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(fi(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=ar(a))?(nr(l,r),l.h==0&&(l.src=null,a[ir]=null)):rn(r)}}}function fi(r){return r in sr?sr[r]:sr[r]="on"+r}function Na(r,a){if(r.da)r=!0;else{a=new Ee(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&or(r),r=l.call(h,a)}return r}function ar(r){return r=r[ir],r instanceof sn?r:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function di(r){return typeof r=="function"?r:(r[lr]||(r[lr]=function(a){return r.handleEvent(a)}),r[lr])}function ot(){kt.call(this),this.i=new sn(this),this.M=this,this.F=null}b(ot,kt),ot.prototype[nn]=!0,ot.prototype.removeEventListener=function(r,a,l,h){hi(this,r,a,l,h)};function dt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new st(a,r);else if(a instanceof st)a.target=a.target||r;else{var T=a;a=new st(h,r),_(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var V=a.g=l[w];T=on(V,h,!0,a)&&T}if(V=a.g=r,T=on(V,h,!0,a)&&T,T=on(V,h,!1,a)&&T,l)for(w=0;w<l.length;w++)V=a.g=l[w],T=on(V,h,!1,a)&&T}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)rn(l[h]);delete r.g[a],r.h--}}this.F=null},ot.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},ot.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function on(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var V=a[w];if(V&&!V.da&&V.capture==l){var U=V.listener,tt=V.ha||V.src;V.fa&&nr(r.i,V),T=U.call(tt,h)!==!1&&T}}return T&&!h.defaultPrevented}function pi(r,a,l){if(typeof r=="function")l&&(r=S(r,l));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function mi(r){r.g=pi(()=>{r.g=null,r.i&&(r.i=!1,mi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Oa extends kt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(r){kt.call(this),this.h=r,this.g={}}b(Ie,kt);var gi=[];function _i(r){mt(r.g,function(a,l){this.g.hasOwnProperty(l)&&or(a)},r),r.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),_i(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ur=c.JSON.stringify,xa=c.JSON.parse,Ma=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function cr(){}cr.prototype.h=null;function yi(r){return r.h||(r.h=r.i())}function vi(){}var we={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hr(){st.call(this,"d")}b(hr,st);function fr(){st.call(this,"c")}b(fr,st);var qt={},Ti=null;function an(){return Ti=Ti||new ot}qt.La="serverreachability";function Ei(r){st.call(this,qt.La,r)}b(Ei,st);function Ae(r){const a=an();dt(a,new Ei(a))}qt.STAT_EVENT="statevent";function Ii(r,a){st.call(this,qt.STAT_EVENT,r),this.stat=a}b(Ii,st);function pt(r){const a=an();dt(a,new Ii(a,r))}qt.Ma="timingevent";function wi(r,a){st.call(this,qt.Ma,r),this.size=a}b(wi,st);function Re(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function Fa(r,a,l,h,T,w){r.info(function(){if(r.g)if(w)for(var V="",U=w.split("&"),tt=0;tt<U.length;tt++){var L=U[tt].split("=");if(1<L.length){var at=L[0];L=L[1];var lt=at.split("_");V=2<=lt.length&&lt[1]=="type"?V+(at+"="+L+"&"):V+(at+"=redacted&")}}else V=null;else V=w;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+V})}function La(r,a,l,h,T,w,V){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+V})}function re(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+ja(r,l)+(h?" "+h:"")})}function Ua(r,a){r.info(function(){return"TIMEOUT: "+a})}Pe.prototype.info=function(){};function ja(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return ur(l)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function un(){}b(un,cr),un.prototype.g=function(){return new XMLHttpRequest},un.prototype.i=function(){return{}},dr=new un;function Dt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var Pi={},pr={};function mr(r,a,l){r.L=1,r.v=dn(St(a)),r.m=l,r.P=!0,Si(r,null)}function Si(r,a){r.F=Date.now(),cn(r),r.A=St(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Bi(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Ri,r.g=ss(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Oa(S(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var T="readystatechange";Array.isArray(T)||(T&&(gi[0]=T.toString()),T=gi);for(var w=0;w<T.length;w++){var V=ci(l,T[w],h||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ae(),Fa(r.i,r.u,r.A,r.l,r.R,r.m)}Dt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Vt(r)==3?a.j():this.Y(r)},Dt.prototype.Y=function(r){try{if(r==this.g)t:{const lt=Vt(this.g);var a=this.g.Ba();const oe=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Qi(this.g)))){this.J||lt!=4||a==7||(a==8||0>=oe?Ae(3):Ae(2)),gr(this);var l=this.g.Z();this.X=l;e:if(Vi(this)){var h=Qi(this.g);r="";var T=h.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Se(this);var V="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(w&&a==T-1)});h.length=0,this.h.g+=r,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,La(this.i,this.u,this.A,this.l,this.R,lt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,tt=this.g;if((U=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(U)){var L=U;break e}}L=null}if(l=L)re(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_r(this,l);else{this.o=!1,this.s=3,pt(12),$t(this),Se(this);break t}}if(this.P){l=!0;let Tt;for(;!this.J&&this.C<V.length;)if(Tt=Ba(this,V),Tt==pr){lt==4&&(this.s=4,pt(14),l=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Pi){this.s=4,pt(15),re(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else re(this.i,this.l,Tt,null),_r(this,Tt);if(Vi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||V.length!=0||this.h.h||(this.s=1,pt(16),l=!1),this.o=this.o&&l,!l)re(this.i,this.l,V,"[Invalid Chunked Response]"),$t(this),Se(this);else if(0<V.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),wr(at),at.M=!0,pt(11))}}else re(this.i,this.l,V,null),_r(this,V);lt==4&&$t(this),this.o&&!this.J&&(lt==4?es(this.j,this):(this.o=!1,cn(this)))}else il(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),$t(this),Se(this)}}}catch{}finally{}};function Vi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ba(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?pr:(l=Number(a.substring(l,h)),isNaN(l)?Pi:(h+=1,h+l>a.length?pr:(a=a.slice(h,h+l),r.C=h+l,a)))}Dt.prototype.cancel=function(){this.J=!0,$t(this)};function cn(r){r.S=Date.now()+r.I,Ci(r,r.I)}function Ci(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Re(S(r.ba,r),a)}function gr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Dt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Ua(this.i,this.A),this.L!=2&&(Ae(),pt(17)),$t(this),this.s=2,Se(this)):Ci(this,this.S-r)};function Se(r){r.j.G==0||r.J||es(r.j,r)}function $t(r){gr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,_i(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function _r(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||yr(l.h,r))){if(!r.K&&yr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)vn(l),_n(l);else break t;Ir(l),pt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Re(S(l.Za,l),6e3));if(1>=Di(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Kt(l,11)}else if((r.K||l.g==r)&&vn(l),!G(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let L=T[a];if(l.T=L[0],L=L[1],l.G==2)if(L[0]=="c"){l.K=L[1],l.ia=L[2];const at=L[3];at!=null&&(l.la=at,l.j.info("VER="+l.la));const lt=L[4];lt!=null&&(l.Aa=lt,l.j.info("SVER="+l.Aa));const oe=L[5];oe!=null&&typeof oe=="number"&&0<oe&&(h=1.5*oe,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Tt=r.g;if(Tt){const En=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(En){var w=h.h;w.g||En.indexOf("spdy")==-1&&En.indexOf("quic")==-1&&En.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(vr(w,w.h),w.h=null))}if(h.D){const Ar=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ar&&(h.ya=Ar,$(h.I,h.D,Ar))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var V=r;if(h.qa=is(h,h.J?h.ia:null,h.W),V.K){Ni(h.h,V);var U=V,tt=h.L;tt&&(U.I=tt),U.B&&(gr(U),cn(U)),h.g=V}else Zi(h);0<l.i.length&&yn(l)}else L[0]!="stop"&&L[0]!="close"||Kt(l,7);else l.G==3&&(L[0]=="stop"||L[0]=="close"?L[0]=="stop"?Kt(l,7):Er(l):L[0]!="noop"&&l.l&&l.l.ta(L),l.v=0)}}Ae(4)}catch{}}var qa=class{constructor(r,a){this.g=r,this.map=a}};function bi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ki(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Di(r){return r.h?1:r.g?r.g.size:0}function yr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function vr(r,a){r.g?r.g.add(a):r.h=a}function Ni(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}bi.prototype.cancel=function(){if(this.i=Oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Oi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function $a(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function Ga(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function xi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Ga(r),h=$a(r),T=h.length,w=0;w<T;w++)a.call(void 0,h[w],l&&l[w],r)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ka(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),T=null;if(0<=h){var w=r[l].substring(0,h);T=r[l].substring(h+1)}else w=r[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Gt){this.h=r.h,hn(this,r.j),this.o=r.o,this.g=r.g,fn(this,r.s),this.l=r.l;var a=r.i,l=new be;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Fi(this,l),this.m=r.m}else r&&(a=String(r).match(Mi))?(this.h=!1,hn(this,a[1]||"",!0),this.o=Ve(a[2]||""),this.g=Ve(a[3]||"",!0),fn(this,a[4]),this.l=Ve(a[5]||"",!0),Fi(this,a[6]||"",!0),this.m=Ve(a[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Gt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ce(a,Li,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ce(a,Li,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Ce(l,l.charAt(0)=="/"?Qa:Ha,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Ce(l,Xa)),r.join("")};function St(r){return new Gt(r)}function hn(r,a,l){r.j=l?Ve(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function fn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Fi(r,a,l){a instanceof be?(r.i=a,Ya(r.i,r.h)):(l||(a=Ce(a,Wa)),r.i=new be(a,r.h))}function $(r,a,l){r.i.set(a,l)}function dn(r){return $(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ve(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ce(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,za),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function za(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Li=/[#\/\?@]/g,Ha=/[#\?:]/g,Qa=/[#\?]/g,Wa=/[#\?@]/g,Xa=/#/g;function be(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Nt(r){r.g||(r.g=new Map,r.h=0,r.i&&Ka(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=be.prototype,n.add=function(r,a){Nt(this),this.i=null,r=ie(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Ui(r,a){Nt(r),a=ie(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function ji(r,a){return Nt(r),a=ie(r,a),r.g.has(a)}n.forEach=function(r,a){Nt(this),this.g.forEach(function(l,h){l.forEach(function(T){r.call(a,T,h,this)},this)},this)},n.na=function(){Nt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=r[h];for(let w=0;w<T.length;w++)l.push(a[h])}return l},n.V=function(r){Nt(this);let a=[];if(typeof r=="string")ji(this,r)&&(a=a.concat(this.g.get(ie(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Nt(this),this.i=null,r=ie(this,r),ji(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Bi(r,a,l){Ui(r,a),0<l.length&&(r.i=null,r.g.set(ie(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var T=w;V[h]!==""&&(T+="="+encodeURIComponent(String(V[h]))),r.push(T)}}return this.i=r.join("&")};function ie(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Ya(r,a){a&&!r.j&&(Nt(r),r.i=null,r.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(Ui(this,h),Bi(this,T,l))},r)),r.j=a}function Ja(r,a){const l=new Pe;if(c.Image){const h=new Image;h.onload=C(Ot,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ot,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Ot,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ot,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Za(r,a){const l=new Pe,h=new AbortController,T=setTimeout(()=>{h.abort(),Ot(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(w=>{clearTimeout(T),w.ok?Ot(l,"TestPingServer: ok",!0,a):Ot(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ot(l,"TestPingServer: error",!1,a)})}function Ot(r,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function tl(){this.g=new Ma}function el(r,a,l){const h=l||"";try{xi(r,function(T,w){let V=T;p(T)&&(V=ur(T)),a.push(h+w+"="+encodeURIComponent(V))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function pn(r){this.l=r.Ub||null,this.j=r.eb||!1}b(pn,cr),pn.prototype.g=function(){return new mn(this.l,this.j)},pn.prototype.i=function(r){return function(){return r}}({});function mn(r,a){ot.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(mn,ot),n=mn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,De(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function qi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?ke(this):De(this),this.readyState==3&&qi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,ke(this))},n.Qa=function(r){this.g&&(this.response=r,ke(this))},n.ga=function(){this.g&&ke(this)};function ke(r){r.readyState=4,r.l=null,r.j=null,r.v=null,De(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function De(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function $i(r){let a="";return mt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Tr(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=$i(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):$(r,a,l))}function z(r){ot.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(z,ot);var nl=/^https?$/i,rl=["POST","PUT"];n=z.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?yi(this.o):yi(dr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){Gi(this,w);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rl,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of l)this.g.setRequestHeader(w,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){Gi(this,w)}};function Gi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Ki(r),gn(r)}function Ki(r){r.A||(r.A=!0,dt(r,"complete"),dt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,dt(this,"complete"),dt(this,"abort"),gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zi(this):this.bb())},n.bb=function(){zi(this)};function zi(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)pi(r.Ea,0,r);else if(dt(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const V=r.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=V===0){var T=String(r.D).match(Mi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!nl.test(T?T.toLowerCase():"")}l=h}if(l)dt(r,"complete"),dt(r,"success");else{r.m=6;try{var w=2<Vt(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",Ki(r)}}finally{gn(r)}}}}function gn(r,a){if(r.g){Hi(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||dt(r,"ready");try{l.onreadystatechange=h}catch{}}}function Hi(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),xa(a)}};function Qi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function il(r){const a={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(G(r[h]))continue;var l=y(r[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ne(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Wi(r){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ne("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ne("baseRetryDelayMs",5e3,r),this.cb=Ne("retryDelaySeedMs",1e4,r),this.Wa=Ne("forwardChannelMaxRetries",2,r),this.wa=Ne("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(r&&r.concurrentRequestLimit),this.Da=new tl,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wi.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){pt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=is(this,null,this.W),yn(this)};function Er(r){if(Xi(r),r.G==3){var a=r.U++,l=St(r.I);if($(l,"SID",r.K),$(l,"RID",a),$(l,"TYPE","terminate"),Oe(r,l),a=new Dt(r,r.j,a),a.L=2,a.v=dn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ss(a.j,null),a.g.ea(a.v)),a.F=Date.now(),cn(a)}rs(r)}function _n(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function Xi(r){_n(r),r.u&&(c.clearTimeout(r.u),r.u=null),vn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function yn(r){if(!ki(r.h)&&!r.s){r.s=!0;var a=r.Ga;ve||ui(),Te||(ve(),Te=!0),er.add(a,r),r.B=0}}function sl(r,a){return Di(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Re(S(r.Ga,r,a),ns(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const T=new Dt(this,this.j,r);let w=this.o;if(this.S&&(w?(w=d(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ji(this,T,a),l=St(this.I),$(l,"RID",r),$(l,"CVER",22),this.D&&$(l,"X-HTTP-Session-Id",this.D),Oe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String($i(w)))+"&"+a:this.m&&Tr(l,this.m,w)),vr(this.h,T),this.Ua&&$(l,"TYPE","init"),this.P?($(l,"$req",a),$(l,"SID","null"),T.T=!0,mr(T,l,null)):mr(T,l,a),this.G=2}}else this.G==3&&(r?Yi(this,r):this.i.length==0||ki(this.h)||Yi(this))};function Yi(r,a){var l;a?l=a.l:l=r.U++;const h=St(r.I);$(h,"SID",r.K),$(h,"RID",l),$(h,"AID",r.T),Oe(r,h),r.m&&r.o&&Tr(h,r.m,r.o),l=new Dt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Ji(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),vr(r.h,l),mr(l,h,a)}function Oe(r,a){r.H&&mt(r.H,function(l,h){$(a,h,l)}),r.l&&xi({},function(l,h){$(a,h,l)})}function Ji(r,a,l){l=Math.min(r.i.length,l);var h=r.l?S(r.l.Na,r.l,r):null;t:{var T=r.i;let w=-1;for(;;){const V=["count="+l];w==-1?0<l?(w=T[0].g,V.push("ofs="+w)):w=0:V.push("ofs="+w);let U=!0;for(let tt=0;tt<l;tt++){let L=T[tt].g;const at=T[tt].map;if(L-=w,0>L)w=Math.max(0,T[tt].g-100),U=!1;else try{el(at,V,"req"+L+"_")}catch{h&&h(at)}}if(U){h=V.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function Zi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;ve||ui(),Te||(ve(),Te=!0),er.add(a,r),r.v=0}}function Ir(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Re(S(r.Fa,r),ns(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ts(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Re(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),_n(this),ts(this))};function wr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ts(r){r.g=new Dt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=St(r.qa);$(a,"RID","rpc"),$(a,"SID",r.K),$(a,"AID",r.T),$(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&$(a,"TO",r.ja),$(a,"TYPE","xmlhttp"),Oe(r,a),r.m&&r.o&&Tr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=dn(St(a)),l.m=null,l.P=!0,Si(l,r)}n.Za=function(){this.C!=null&&(this.C=null,_n(this),Ir(this),pt(19))};function vn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function es(r,a){var l=null;if(r.g==a){vn(r),wr(r),r.g=null;var h=2}else if(yr(r.h,a))l=a.D,Ni(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=r.B;h=an(),dt(h,new wi(h,l)),yn(r)}else Zi(r);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&sl(r,a)||h==2&&Ir(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),T){case 1:Kt(r,5);break;case 4:Kt(r,10);break;case 3:Kt(r,6);break;default:Kt(r,2)}}}function ns(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Kt(r,a){if(r.j.info("Error code "+a),a==2){var l=S(r.fb,r),h=r.Xa;const T=!h;h=new Gt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hn(h,"https"),dn(h),T?Ja(h.toString(),l):Za(h.toString(),l)}else pt(2);r.G=0,r.l&&r.l.sa(a),rs(r),Xi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function rs(r){if(r.G=0,r.ka=[],r.l){const a=Oi(r.h);(a.length!=0||r.i.length!=0)&&(D(r.ka,a),D(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function is(r,a,l){var h=l instanceof Gt?St(l):new Gt(l);if(h.g!="")a&&(h.g=a+"."+h.g),fn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Gt(null);h&&hn(w,h),a&&(w.g=a),T&&fn(w,T),l&&(w.l=l),h=w}return l=r.D,a=r.ya,l&&a&&$(h,l,a),$(h,"VER",r.la),Oe(r,h),h}function ss(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new z(new pn({eb:l})):new z(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function os(){}n=os.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tn(){}Tn.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){ot.call(this),this.g=new Wi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!G(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new se(this)}b(yt,ot),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Er(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=ur(r),r=l);a.i.push(new qa(a.Ya++,r)),a.G==3&&yn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,yt.aa.N.call(this)};function as(r){hr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}b(as,hr);function ls(){fr.call(this),this.status=1}b(ls,fr);function se(r){this.g=r}b(se,os),se.prototype.ua=function(){dt(this.g,"a")},se.prototype.ta=function(r){dt(this.g,new as(r))},se.prototype.sa=function(r){dt(this.g,new ls)},se.prototype.ra=function(){dt(this.g,"b")},Tn.prototype.createWebChannel=Tn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,So=function(){return new Tn},Po=function(){return an()},Ro=qt,Dr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Vn=ln,Ai.COMPLETE="complete",Ao=Ai,vi.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Fe=vi,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha,wo=z}).apply(typeof wn<"u"?wn:typeof self<"u"?self:typeof window<"u"?window:{});const Is="@firebase/firestore";/**
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
 */let ge="10.14.0";/**
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
 */const Zt=new Ys("@firebase/firestore");function xe(){return Zt.logLevel}function k(n,...t){if(Zt.logLevel<=Mt.DEBUG){const e=t.map(Hr);Zt.debug(`Firestore (${ge}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=Mt.ERROR){const e=t.map(Hr);Zt.error(`Firestore (${ge}): ${n}`,...e)}}function Nn(n,...t){if(Zt.logLevel<=Mt.WARN){const e=t.map(Hr);Zt.warn(`Firestore (${ge}): ${n}`,...e)}}function Hr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function W(n,t){n||M()}function B(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Br{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ec{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class nc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rc{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string"),new Vo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new ct(t)}}class ic{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sc{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new ic(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ac{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){W(this.o===void 0);const i=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new oc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Co{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=lc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function he(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class Z{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Z(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new Z(0,0))}static max(){return new K(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ke{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends Ke{construct(t,e,i){return new H(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const uc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ke{construct(t,e,i){return new rt(t,e,i)}static isValidIdentifier(t){return uc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(H.fromString(t))}static fromName(t){return new x(H.fromString(t).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new H(t.slice()))}}function cc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new Z(e+1,0):new Z(e,i));return new Lt(s,x.empty(),t)}function hc(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Lt(K.min(),x.empty(),-1)}static max(){return new Lt(K.max(),x.empty(),-1)}}function fc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==dc)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{u[p]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function mc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ko{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ko.oe=-1;function Qr(n){return n==null}function On(n){return n===0&&1/n==-1/0}function gc(n){return typeof n=="number"&&Number.isInteger(n)&&!On(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ws(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Je(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Do(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class _t{constructor(t,e){this.comparator=t,this.root=e||et.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class et{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??et.RED,this.left=s??et.EMPTY,this.right=o??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new et(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new As(this.data.getIterator())}getIteratorFrom(t){return new As(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class As{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ft(rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return he(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class _c extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _c("Invalid base64 string: "+o):o}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const yc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(W(!!n),typeof n=="string"){let t=0;const e=yc.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ze(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function No(n){const t=n.mapValue.fields.__previous_value__;return Wr(t)?No(t):t}function xn(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class vc{constructor(t,e,i,s,o,u,c,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p}}class Mn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={mapValue:{}};function fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wr(n)?4:Ec(n)?9007199254740991:Tc(n)?10:11:M()}function Rt(n,t){if(n===t)return!0;const e=fe(n);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xn(n).isEqual(xn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ee(s.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ze(s.bytesValue).isEqual(ze(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return nt(s.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return nt(s.integerValue)===nt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=nt(s.doubleValue),c=nt(o.doubleValue);return u===c?On(u)===On(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return he(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ws(u)!==ws(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!Rt(u[f],c[f])))return!1;return!0}(n,t);default:return M()}}function He(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function de(n,t){if(n===t)return 0;const e=fe(n),i=fe(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=nt(o.integerValue||o.doubleValue),f=nt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Rs(n.timestampValue,t.timestampValue);case 4:return Rs(xn(n),xn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=ze(o),f=ze(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let p=0;p<c.length&&p<f.length;p++){const I=j(c[p],f[p]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(nt(o.latitude),nt(u.latitude));return c!==0?c:j(nt(o.longitude),nt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ps(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,p,I;const A=o.fields||{},S=u.fields||{},C=(c=A.value)===null||c===void 0?void 0:c.arrayValue,b=(f=S.value)===null||f===void 0?void 0:f.arrayValue,O=j(((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0,((I=b==null?void 0:b.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Ps(C,b)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Rn.mapValue&&u===Rn.mapValue)return 0;if(o===Rn.mapValue)return 1;if(u===Rn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=u.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=j(f[A],I[A]);if(S!==0)return S;const C=de(c[f[A]],p[I[A]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function Rs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ee(n),i=ee(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function Ps(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=de(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function pe(n){return Nr(n)}function Nr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ze(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Nr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${Nr(e.fields[u])}`;return s+"}"}(n.mapValue):M()}function Or(n){return!!n&&"integerValue"in n}function Xr(n){return!!n&&"arrayValue"in n}function Cn(n){return!!n&&"mapValue"in n}function Tc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ue(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Je(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Ue(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ue(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ec(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Cn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(e)}setAll(t){let e=rt.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Ue(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Cn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Cn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Je(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new It(Ue(this.value))}}function Oo(n){const t=[];return Je(n.fields,(e,i)=>{const s=new rt([e]);if(Cn(i)){const o=Oo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new wt(t)}/**
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
 */class Et{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,K.min(),K.min(),K.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Et(t,1,e,K.min(),i,s,0)}static newNoDocument(t,e){return new Et(t,2,e,K.min(),K.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,K.min(),K.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function Ss(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=x.comparator(x.fromName(u.referenceValue),e.key):i=de(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ic(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class xo{}class J extends xo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Ac(t,e,i):e==="array-contains"?new Sc(t,i):e==="in"?new Vc(t,i):e==="not-in"?new Cc(t,i):e==="array-contains-any"?new bc(t,i):new J(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Rc(t,i):new Pc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(de(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(de(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends xo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ut(t,e)}matches(t){return Mo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mo(n){return n.op==="and"}function Fo(n){return wc(n)&&Mo(n)}function wc(n){for(const t of n.filters)if(t instanceof Ut)return!1;return!0}function xr(n){if(n instanceof J)return n.field.canonicalString()+n.op.toString()+pe(n.value);if(Fo(n))return n.filters.map(t=>xr(t)).join(",");{const t=n.filters.map(e=>xr(e)).join(",");return`${n.op}(${t})`}}function Lo(n,t){return n instanceof J?function(i,s){return s instanceof J&&i.op===s.op&&i.field.isEqual(s.field)&&Rt(i.value,s.value)}(n,t):n instanceof Ut?function(i,s){return s instanceof Ut&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&Lo(u,s.filters[c]),!0):!1}(n,t):void M()}function Uo(n){return n instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${pe(e.value)}`}(n):n instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(Uo).join(" ,")+"}"}(n):"Filter"}class Ac extends J{constructor(t,e,i){super(t,e,i),this.key=x.fromName(i.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rc extends J{constructor(t,e){super(t,"in",e),this.keys=jo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pc extends J{constructor(t,e){super(t,"not-in",e),this.keys=jo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>x.fromName(i.referenceValue))}class Sc extends J{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xr(e)&&He(e.arrayValue,this.value)}}class Vc extends J{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&He(this.value.arrayValue,e)}}class Cc extends J{constructor(t,e){super(t,"not-in",e)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!He(this.value.arrayValue,e)}}class bc extends J{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>He(this.value.arrayValue,i))}}/**
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
 */class kc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Cs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new kc(n,t,e,i,s,o,u)}function Yr(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>xr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>pe(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>pe(i)).join(",")),t.ue=e}return t.ue}function Jr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ic(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Lo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Vs(n.startAt,t.startAt)&&Vs(n.endAt,t.endAt)}/**
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
 */class Hn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dc(n,t,e,i,s,o,u,c){return new Hn(n,t,e,i,s,o,u,c)}function Nc(n){return new Hn(n)}function bs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Oc(n){return n.collectionGroup!==null}function je(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ft(rt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Ln(o,i))}),e.has(rt.keyField().canonicalString())||t.ce.push(new Ln(rt.keyField(),i))}return t.ce}function Wt(n){const t=B(n);return t.le||(t.le=xc(t,je(n))),t.le}function xc(n,t){if(n.limitType==="F")return Cs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ln(s.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return Cs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Mr(n,t,e){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Bo(n,t){return Jr(Wt(n),Wt(t))&&n.limitType===t.limitType}function qo(n){return`${Yr(Wt(n))}|lt:${n.limitType}`}function Me(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Uo(s)).join(", ")}]`),Qr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>pe(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>pe(s)).join(",")),`Target(${i})`}(Wt(n))}; limitType=${n.limitType})`}function Zr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):x.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of je(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const p=Ss(u,c,f);return u.inclusive?p<=0:p<0}(i.startAt,je(i),s)||i.endAt&&!function(u,c,f){const p=Ss(u,c,f);return u.inclusive?p>=0:p>0}(i.endAt,je(i),s))}(n,t)}function Mc(n){return(t,e)=>{let i=!1;for(const s of je(n)){const o=Fc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Fc(n,t,e){const i=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),p=c.data.field(o);return f!==null&&p!==null?de(f,p):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Je(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return Do(this.inner)}size(){return this.innerSize}}/**
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
 */const Lc=new _t(x.comparator);function Un(){return Lc}const $o=new _t(x.comparator);function Pn(...n){let t=$o;for(const e of n)t=t.insert(e.key,e);return t}function Go(n){let t=$o;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Ht(){return Be()}function Ko(){return Be()}function Be(){return new _e(n=>n.toString(),(n,t)=>n.isEqual(t))}const Uc=new _t(x.comparator),jc=new ft(x.comparator);function ht(...n){let t=jc;for(const e of n)t=t.add(e);return t}const Bc=new ft(j);function qc(){return Bc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function zo(n){return{integerValue:""+n}}function $c(n,t){return gc(t)?zo(t):ti(n,t)}/**
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
 */class Qn{constructor(){this._=void 0}}function Gc(n,t,e){return n instanceof jn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wr(o)&&(o=No(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Qe?Qo(n,t):n instanceof We?Wo(n,t):function(s,o){const u=Ho(s,o),c=ks(u)+ks(s.Pe);return Or(u)&&Or(s.Pe)?zo(c):ti(s.serializer,c)}(n,t)}function Kc(n,t,e){return n instanceof Qe?Qo(n,t):n instanceof We?Wo(n,t):e}function Ho(n,t){return n instanceof Bn?function(i){return Or(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class jn extends Qn{}class Qe extends Qn{constructor(t){super(),this.elements=t}}function Qo(n,t){const e=Xo(t);for(const i of n.elements)e.some(s=>Rt(s,i))||e.push(i);return{arrayValue:{values:e}}}class We extends Qn{constructor(t){super(),this.elements=t}}function Wo(n,t){let e=Xo(t);for(const i of n.elements)e=e.filter(s=>!Rt(s,i));return{arrayValue:{values:e}}}class Bn extends Qn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ks(n){return nt(n.integerValue||n.doubleValue)}function Xo(n){return Xr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Qe&&s instanceof Qe||i instanceof We&&s instanceof We?he(i.elements,s.elements,Rt):i instanceof Bn&&s instanceof Bn?Rt(i.Pe,s.Pe):i instanceof jn&&s instanceof jn}(n.transform,t.transform)}class Hc{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Wn{}function Yo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Zo(n.key,Ct.none()):new Ze(n.key,n.data,Ct.none());{const e=n.data,i=It.empty();let s=new ft(rt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new ne(n.key,i,new wt(s.toArray()),Ct.none())}}function Qc(n,t,e){n instanceof Ze?function(s,o,u){const c=s.value.clone(),f=Ns(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,u){if(!bn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ns(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Jo(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function qe(n,t,e,i){return n instanceof Ze?function(o,u,c,f){if(!bn(o.precondition,u))return c;const p=o.value.clone(),I=Os(o.fieldTransforms,f,u);return p.setAll(I),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof ne?function(o,u,c,f){if(!bn(o.precondition,u))return c;const p=Os(o.fieldTransforms,f,u),I=u.data;return I.setAll(Jo(o)),I.setAll(p),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,u,c){return bn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Wc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Ho(i.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(i.field,o))}return e||null}function Ds(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&he(i,s,(o,u)=>zc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ze extends Wn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Wn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Jo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ns(n,t,e){const i=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,Kc(u,c,e[s]))}return i}function Os(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,Gc(o,u,t))}return i}class Zo extends Wn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xc extends Wn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Qc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Ko();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=Yo(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&he(this.mutations,t.mutations,(e,i)=>Ds(e,i))&&he(this.baseMutations,t.baseMutations,(e,i)=>Ds(e,i))}}class ei{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){W(t.mutations.length===i.length);let s=function(){return Uc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new ei(t,e,i,s)}}/**
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
 */class Jc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var X,F;function Zc(n){switch(n){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function th(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(F=X||(X={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Io([4294967295,4294967295],0);class eh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rh(n,t){return Fr(n,t.toTimestamp())}function ue(n){return W(!!n),K.fromTimestamp(function(e){const i=ee(e);return new Z(i.seconds,i.nanos)}(n))}function ta(n,t){return Lr(n,t).canonicalString()}function Lr(n,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ih(n){const t=H.fromString(n);return W(fh(t)),t}function Ur(n,t){return ta(n.databaseId,t.path)}function sh(n){const t=ih(n);return t.length===4?H.emptyPath():ah(t)}function oh(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ah(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xs(n,t,e){return{name:Ur(n,t),fields:e.value.mapValue.fields}}function lh(n,t){let e;if(t instanceof Ze)e={update:xs(n,t.key,t.value)};else if(t instanceof Zo)e={delete:Ur(n,t.key)};else if(t instanceof ne)e={update:xs(n,t.key,t.data),updateMask:hh(t.fieldMask)};else{if(!(t instanceof Xc))return M();e={verify:Ur(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof We)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Bn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:rh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function uh(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?ue(s.updateTime):ue(o);return u.isEqual(K.min())&&(u=ue(o)),new Hc(u,s.transformResults||[])}(e,t))):[]}function ch(n){let t=sh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){W(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const S=ea(A);return S instanceof Ut&&Fo(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(S=>function(b){return new Ln(ae(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(A){let S;return S=typeof A=="object"?A.value:A,Qr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,C=A.values||[];return new Fn(C,S)}(e.startAt));let p=null;return e.endAt&&(p=function(A){const S=!A.before,C=A.values||[];return new Fn(C,S)}(e.endAt)),Dc(t,s,u,o,c,"F",f,p)}function ea(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ae(e.unaryFilter.field);return J.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ae(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ae(e.unaryFilter.field);return J.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ae(e.unaryFilter.field);return J.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return J.create(ae(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(i=>ea(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function ae(n){return rt.fromServerFormat(n.fieldPath)}function hh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class dh{constructor(t){this.ct=t}}function ph(n){const t=ch({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mr(t,t.limit,"L"):t}/**
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
 */class mh{constructor(){this.un=new gh}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Lt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class gh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ft(H.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ft(H.comparator)).toArray()}}/**
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
 */class me{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new me(0)}static kn(){return new me(-1)}}/**
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
 */class _h{constructor(){this.changes=new _e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class yh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class vh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&qe(i.mutation,s,wt.empty(),Z.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ht()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ht()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Pn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Ht();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ht()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=Un();const u=Be(),c=function(){return Be()}();return e.forEach((f,p)=>{const I=i.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof ne)?o=o.insert(p.key,p):I!==void 0?(u.set(p.key,I.mutation.getFieldMask()),qe(I.mutation,p,I.mutation.getFieldMask(),Z.now())):u.set(p.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>u.set(p,I)),e.forEach((p,I)=>{var A;return c.set(p,new yh(I,(A=u.get(p))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const i=Be();let s=new _t((u,c)=>u-c),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=i.get(f)||wt.empty();I=c.applyToLocalView(p,I),i.set(f,I);const A=(s.get(c.batchId)||ht()).add(f);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,I=f.value,A=Ko();I.forEach(S=>{if(!o.has(S)){const C=Yo(e.get(S),i.get(S));C!==null&&A.set(S,C),o=o.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,p,A))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Oc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Ht());let c=-1,f=o;return u.next(p=>R.forEach(p,(I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,ht())).next(I=>({batchId:c,changes:Go(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Pn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const p=function(A,S){return new Hn(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,i,s).next(I=>{I.forEach((A,S)=>{u=u.insert(A,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,p)=>{const I=p.getKey();u.get(I)===null&&(u=u.insert(I,Et.newInvalidDocument(I)))});let c=Pn();return u.forEach((f,p)=>{const I=o.get(f);I!==void 0&&qe(I.mutation,p,wt.empty(),Z.now()),Zr(e,p)&&(c=c.insert(f,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:ph(s.bundledQuery),readTime:ue(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Eh{constructor(){this.overlays=new _t(x.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Ht();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Ht(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((p,I)=>p-I);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let I=o.get(p.largestBatchId);I===null&&(I=Ht(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const c=Ht(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>c.set(p,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Jc(e,i));let o=this.Ir.get(e);o===void 0&&(o=ht(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class ni{constructor(){this.Tr=new ft(Y.Er),this.dr=new ft(Y.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new Y(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new Y(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new x(new H([])),i=new Y(e,t),s=new Y(e,t+1),o=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new H([])),i=new Y(e,t),s=new Y(e,t+1);let o=ht();return this.dr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new Y(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Y{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
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
 */class wh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ft(Y.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Yc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new Y(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Y(e,0),s=new Y(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],u=>{const c=this.Dr(u.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ft(j);return e.forEach(s=>{const o=new Y(s,0),u=new Y(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;x.isDocumentKey(o)||(o=o.child(""));const u=new Y(new x(o),0);let c=new ft(j);return this.br.forEachWhile(f=>{const p=f.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.wr)),!0)},u),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new Y(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new Y(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ah{constructor(t){this.Mr=t,this.docs=function(){return new _t(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let i=Un();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Et.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Un();const u=e.path,c=new x(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||fc(hc(I),i)<=0||(s.has(I.key)||Zr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Rh(this)}getSize(t){return R.resolve(this.size)}}class Rh extends _h{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Ph{constructor(t){this.persistence=t,this.Nr=new _e(e=>Yr(e),Jr),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ni,this.targetCount=0,this.kr=me.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
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
 */class Sh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ko(0),this.Kr=!1,this.Kr=!0,this.$r=new Ih,this.referenceDelegate=t(this),this.Ur=new Ph(this),this.indexManager=new mh,this.remoteDocumentCache=function(s){return new Ah(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new dh(e),this.Gr=new Th(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Eh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new wh(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){k("MemoryPersistence","Starting transaction:",t);const s=new Vh(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class Vh extends pc{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Jr=new ni,this.Yr=null}static Zr(t){return new ri(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=x.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ii{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ht(),s=ht();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ii(t,e.fromCache,i,s)}}/**
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
 */class Ch{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rl()?8:mc(Pl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ch;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(xe()<=Mt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(xe()<=Mt.DEBUG&&k("QueryEngine","Query:",Me(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(xe()<=Mt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Wt(e))):R.resolve())}Yi(t,e){if(bs(e))return R.resolve(null);let i=Wt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Mr(e,null,"F"),i=Wt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=ht(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const p=this.ts(e,c);return this.ns(e,p,u,f.readTime)?this.Yi(t,Mr(e,null,"F")):this.rs(t,p,e,f)}))})))}Zi(t,e,i,s){return bs(e)||s.isEqual(K.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const u=this.ts(e,o);return this.ns(e,u,i,s)?R.resolve(null):(xe()<=Mt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Me(e)),this.rs(t,u,e,cc(s,-1)).next(c=>c))})}ts(t,e){let i=new ft(Mc(t));return e.forEach((s,o)=>{Zr(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return xe()<=Mt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Me(e)),this.Ji.getDocumentsMatchingQuery(t,e,Lt.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new _t(j),this._s=new _e(o=>Yr(o),Jr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Dh(n,t,e,i){return new kh(n,t,e,i)}async function na(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=ht();for(const p of s){u.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(p=>({hs:p,removedBatchIds:u,addedBatchIds:c}))})})}function Nh(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,p,I){const A=p.batch,S=A.keys();let C=R.resolve();return S.forEach(b=>{C=C.next(()=>I.getEntry(f,b)).next(O=>{const D=p.docVersions.get(b);W(D!==null),O.version.compareTo(D)<0&&(A.applyToRemoteDocument(O,p),O.isValidDocument()&&(O.setReadTime(p.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ht();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Oh(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function xh(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ms{constructor(){this.activeTargetIds=qc()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mh{constructor(){this.so=new Ms,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ms,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Fh{_o(t){}shutdown(){}}/**
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
 */class Fs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sn=null;function Vr(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Uh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const ut="WebChannelConnection";class jh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,u){const c=Vr(),f=this.xo(e,i.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,o,u),this.No(e,f,p,s).then(I=>(k("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Nn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,o,u,c){return this.Mo(e,i,s,o,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,i){const s=Lh[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Vr();return new Promise((u,c)=>{const f=new wo;f.setWithCredentials(!0),f.listenOnce(Ao.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Vn.NO_ERROR:const I=f.getResponseJson();k(ut,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Vn.TIMEOUT:k(ut,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Vn.HTTP_ERROR:const A=f.getStatus();if(k(ut,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const b=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(C.status);c(new N(b,C.message))}else c(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(ut,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(s);k(ut,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",p,i,15)})}Bo(t,e,i){const s=Vr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=So(),c=Po(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");k(ut,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=u.createWebChannel(I,f);let S=!1,C=!1;const b=new Uh({Io:D=>{C?k(ut,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(S||(k(ut,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),k(ut,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},To:()=>A.close()}),O=(D,q,G)=>{D.listen(q,Q=>{try{G(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return O(A,Fe.EventType.OPEN,()=>{C||(k(ut,`RPC '${t}' stream ${s} transport opened.`),b.yo())}),O(A,Fe.EventType.CLOSE,()=>{C||(C=!0,k(ut,`RPC '${t}' stream ${s} transport closed`),b.So())}),O(A,Fe.EventType.ERROR,D=>{C||(C=!0,Nn(ut,`RPC '${t}' stream ${s} transport errored:`,D),b.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),O(A,Fe.EventType.MESSAGE,D=>{var q;if(!C){const G=D.data[0];W(!!G);const Q=G,it=Q.error||((q=Q[0])===null||q===void 0?void 0:q.error);if(it){k(ut,`RPC '${t}' stream ${s} received error:`,it);const Bt=it.status;let mt=function(g){const _=X[g];if(_!==void 0)return th(_)}(Bt),v=it.message;mt===void 0&&(mt=P.INTERNAL,v="Unknown error status: "+Bt+" with message "+it.message),C=!0,b.So(new N(mt,v)),A.close()}else k(ut,`RPC '${t}' stream ${s} received:`,G),b.bo(G)}}),O(c,Ro.STAT_EVENT,D=>{D.stat===Dr.PROXY?k(ut,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Dr.NOPROXY&&k(ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Cr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){return new eh(n,!0)}/**
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
 */class ra{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bh{constructor(t,e,i,s,o,u,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ra(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qh extends Bh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=uh(t.writeResults,t.commitTime),i=ue(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=oh(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>lh(this.serializer,i))};this.a_(e)}}/**
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
 */class $h extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Lr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,Lr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Gh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(te(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Kh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{i.enqueueAndForget(async()=>{en(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=B(f);p.L_.add(4),await tn(p),p.q_.set("Unknown"),p.L_.delete(4),await Yn(p)}(this))})}),this.q_=new Gh(i,s)}}async function Yn(n){if(en(n))for(const t of n.B_)await t(!0)}async function tn(n){for(const t of n.B_)await t(!1)}function en(n){return B(n).L_.size===0}async function ia(n,t,e){if(!zn(t))throw t;n.L_.add(1),await tn(n),n.q_.set("Offline"),e||(e=()=>Oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Yn(n)})}function sa(n,t){return t().catch(e=>ia(n,e,t))}async function Jn(n){const t=B(n),e=jt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;zh(t);)try{const s=await xh(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,Hh(t,s)}catch(s){await ia(t,s)}oa(t)&&aa(t)}function zh(n){return en(n)&&n.O_.length<10}function Hh(n,t){n.O_.push(t);const e=jt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function oa(n){return en(n)&&!jt(n).n_()&&n.O_.length>0}function aa(n){jt(n).start()}async function Qh(n){jt(n).p_()}async function Wh(n){const t=jt(n);for(const e of n.O_)t.m_(e.mutations)}async function Xh(n,t,e){const i=n.O_.shift(),s=ei.from(i,t,e);await sa(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Jn(n)}async function Yh(n,t){t&&jt(n).V_&&await async function(i,s){if(function(u){return Zc(u)&&u!==P.ABORTED}(s.code)){const o=i.O_.shift();jt(i).s_(),await sa(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Jn(i)}}(n,t),oa(n)&&aa(n)}async function Ls(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const i=en(e);e.L_.add(3),await tn(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Yn(e)}async function Jh(n,t){const e=B(n);t?(e.L_.delete(2),await Yn(e)):t||(e.L_.add(2),await tn(e),e.q_.set("Unknown"))}function jt(n){return n.U_||(n.U_=function(e,i,s){const o=B(e);return o.w_(),new qh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qh.bind(null,n),mo:Yh.bind(null,n),f_:Wh.bind(null,n),g_:Xh.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Jn(n)):(await n.U_.stop(),n.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class si{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new si(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,t){if(te("AsyncQueue",`${t}: ${n}`),zn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Zh{constructor(){this.queries=Us(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=B(e),o=s.queries;s.queries=Us(),o.forEach((u,c)=>{for(const f of c.j_)f.onError(i)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Us(){return new _e(n=>qo(n),Bo)}function tf(n){n.Y_.forEach(t=>{t.next()})}var js,Bs;(Bs=js||(js={})).ea="default",Bs.Cache="cache";class ef{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new _e(c=>qo(c),Bo),this.Ma=new Map,this.xa=new Set,this.Oa=new _t(x.comparator),this.Na=new Map,this.La=new ni,this.Ba={},this.ka=new Map,this.qa=me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function nf(n,t,e){const i=af(n);try{const s=await function(u,c){const f=B(u),p=Z.now(),I=c.reduce((C,b)=>C.add(b.key),ht());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=Un(),O=ht();return f.cs.getEntries(C,I).next(D=>{b=D,b.forEach((q,G)=>{G.isValidDocument()||(O=O.add(q))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,b)).next(D=>{A=D;const q=[];for(const G of c){const Q=Wc(G,A.get(G.key).overlayedDocument);Q!=null&&q.push(new ne(G.key,Q,Oo(Q.value.mapValue),Ct.exists(!0)))}return f.mutationQueue.addMutationBatch(C,p,q,c)}).next(D=>{S=D;const q=D.applyToLocalDocumentSet(A,O);return f.documentOverlayCache.saveOverlays(C,D.batchId,q)})}).then(()=>({batchId:S.batchId,changes:Go(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let p=u.Ba[u.currentUser.toKey()];p||(p=new _t(j)),p=p.insert(c,f),u.Ba[u.currentUser.toKey()]=p}(i,s.batchId,e),await Zn(i,s.changes),await Jn(i.remoteStore)}catch(s){const o=la(s,"Failed to persist write");e.reject(o)}}function qs(n,t,e){const i=B(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=B(u);f.onlineState=c;let p=!1;f.queries.forEach((I,A)=>{for(const S of A.j_)S.Z_(c)&&(p=!0)}),p&&tf(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function rf(n,t){const e=B(n),i=t.batch.batchId;try{const s=await Nh(e.localStore,t);ca(e,i,null),ua(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Zn(e,s)}catch(s){await bo(s)}}async function sf(n,t,e){const i=B(n);try{const s=await function(u,c){const f=B(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,c).next(A=>(W(A!==null),I=A.keys(),f.mutationQueue.removeMutationBatch(p,A))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(i.localStore,t);ca(i,t,e),ua(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Zn(i,s)}catch(s){await bo(s)}}function ua(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ca(n,t,e){const i=B(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Zn(n,t,e){const i=B(n),s=[],o=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{u.push(i.Ka(f,t,e).then(p=>{var I;if((p||e)&&i.isPrimaryClient){const A=p?!p.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(p){s.push(p);const A=ii.Wi(f.targetId,p);o.push(A)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,p){const I=B(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(p,S=>R.forEach(S.$i,C=>I.persistence.referenceDelegate.addReference(A,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>I.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))}catch(A){if(!zn(A))throw A;k("LocalStore","Failed to update sequence numbers: "+A)}for(const A of p){const S=A.targetId;if(!A.fromCache){const C=I.os.get(S),b=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(b);I.os=I.os.insert(S,O)}}}(i.localStore,o))}async function of(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const i=await na(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(f=>{f.reject(new N(P.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Zn(e,i.hs)}}function af(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sf.bind(null,t),t}class qn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xn(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Dh(this.persistence,new bh,t.initialUser,this.serializer)}Ga(t){return new Sh(ri.Zr,this.serializer)}Wa(t){return new Mh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qn.provider={build:()=>new qn};class jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qs(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=of.bind(null,this.syncEngine),await Jh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zh}()}createDatastore(t){const e=Xn(t.databaseInfo.databaseId),i=function(o){return new jh(o)}(t.databaseInfo);return function(o,u,c,f){return new $h(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new Kh(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>qs(this.syncEngine,e,0),function(){return Fs.D()?new Fs:new Fh}())}createSyncEngine(t,e){return function(s,o,u,c,f,p,I){const A=new ef(s,o,u,c,f,p);return I&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await tn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}jr.provider={build:()=>new jr};/**
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
 */class lf{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Co.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{k("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(k("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=la(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function br(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await na(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function $s(n,t){n.asyncQueue.verifyOperationInProgress();const e=await uf(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ls(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ls(t.remoteStore,s)),n._onlineComponents=t}async function uf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await br(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Nn("Error using user provided cache. Falling back to memory cache: "+e),await br(n,new qn)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await br(n,new qn);return n._offlineComponents}async function cf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await $s(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await $s(n,new jr))),n._onlineComponents}function hf(n){return cf(n).then(t=>t.syncEngine)}/**
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
 */function ha(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Map;/**
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
 */function fa(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ff(n,t,e,i){if(t===!0&&i===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ks(n){if(!x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zs(n){if(x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function da(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=oi(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ff("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ha((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ec;switch(i.type){case"firstParty":return new sc(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Gs.get(e);i&&(k("ComponentProvider","Removing Datastore"),Gs.delete(e),i.terminate())}(this),Promise.resolve()}}function df(n,t,e,i={}){var s;const o=(n=da(n,tr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ct.MOCK_USER;else{c=wl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(p)}n._authCredentials=new nc(new Vo(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Ft extends ai{constructor(t,e,i){super(t,e,Nc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new x(t))}withConverter(t){return new Ft(this.firestore,t,this._path)}}function Kf(n,t,...e){if(n=Xt(n),fa("collection","path",t),n instanceof tr){const i=H.fromString(t,...e);return zs(i),new Ft(n,null,i)}{if(!(n instanceof bt||n instanceof Ft))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(H.fromString(t,...e));return zs(i),new Ft(n.firestore,null,i)}}function pf(n,t,...e){if(n=Xt(n),arguments.length===1&&(t=Co.newId()),fa("doc","path",t),n instanceof tr){const i=H.fromString(t,...e);return Ks(i),new bt(n,null,new x(i))}{if(!(n instanceof bt||n instanceof Ft))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(H.fromString(t,...e));return Ks(i),new bt(n.firestore,n instanceof Ft?n.converter:null,new x(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ra(this,"async_queue_retry"),this.Vu=()=>{const i=Cr();i&&k("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Cr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Cr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Qt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!zn(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=si.createAndSchedule(this,t,e,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class pa extends tr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new Qs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qs(t),this._firestoreClient=void 0,await t}}}function mf(n,t){const e=typeof n=="object"?n:Js(),i=typeof n=="string"?n:"(default)",s=Ye(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Il("firestore");o&&df(s,...o)}return s}function gf(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_f(n),n._firestoreClient}function _f(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,p,I){return new vc(c,f,p,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ha(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new lf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(At.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xe(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this._methodName=t}}/**
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
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const yf=/^__.*__$/;class vf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ze(t,this.data,e,this.fieldTransforms)}}function va(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class li{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.Ou(t),s}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return $n(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(va(this.Cu)&&yf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Tf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Xn(t)}Qu(t,e,i,s=!1){return new li({Cu:t,methodName:e,qu:i,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ef(n){const t=n._freezeSettings(),e=Xn(n._databaseId);return new Tf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function If(n,t,e,i,s,o={}){const u=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);wa("Data must be an object, but it was:",u,i);const c=Ea(i,u);let f,p;if(o.merge)f=new wt(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=wf(t,A,e);if(!u.contains(S))throw new N(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Pf(I,S)||I.push(S)}f=new wt(I),p=u.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,p=u.fieldTransforms;return new vf(new It(c),f,p)}function Ta(n,t){if(Ia(n=Xt(n)))return wa("Unsupported field value:",t,n),Ea(n,t);if(n instanceof ga)return function(i,s){if(!va(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=Ta(c,s.Lu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Xt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return $c(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=Z.fromDate(i);return{timestampValue:Fr(s.serializer,o)}}if(i instanceof Z){const o=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,o)}}if(i instanceof _a)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Xe)return{bytesValue:nh(s.serializer,i._byteString)};if(i instanceof bt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ta(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ya)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Bu("VectorValues must only contain numeric values.");return ti(c.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${oi(i)}`)}(n,t)}function Ea(n,t){const e={};return Do(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Je(n,(i,s)=>{const o=Ta(s,t.Mu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Ia(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof _a||n instanceof Xe||n instanceof bt||n instanceof ga||n instanceof ya)}function wa(n,t,e){if(!Ia(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=oi(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function wf(n,t,e){if((t=Xt(t))instanceof ma)return t._internalPath;if(typeof t=="string")return Rf(n,t);throw $n("Field path arguments must be of type string or ",n,!1,void 0,e)}const Af=new RegExp("[~\\*/\\[\\]]");function Rf(n,t,e){if(t.search(Af)>=0)throw $n(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ma(...t.split("."))._internalPath}catch{throw $n(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function $n(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new N(P.INVALID_ARGUMENT,c+n+f)}function Pf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function zf(n,t){const e=da(n.firestore,pa),i=pf(n),s=Sf(n.converter,t);return Vf(e,[If(Ef(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Ct.exists(!1))]).then(()=>i)}function Vf(n,t){return function(i,s){const o=new Qt;return i.asyncQueue.enqueueAndForget(async()=>nf(await hf(i),s,o)),o.promise}(gf(n),t)}(function(t,e=!0){(function(s){ge=s})(Al),$e(new Ge("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new pa(new rc(i.getProvider("auth-internal")),new ac(i.getProvider("app-check-internal")),function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(p.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ce(Is,"4.7.3",t),ce(Is,"4.7.3","esm2017")})();const Ws={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},Cf={light:us(Ws,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:us(Ws,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}})};function bf({children:n}){const[t]=ul();return xt.jsx(Vl,{theme:cl(Cf[t]),children:n})}const kf=hl({reducer:{login:fl}}),Df={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},Nf=document.getElementById("root"),Of=bl.createRoot(Nf),Aa=Sl(Df);Yu(Aa);const xf=mf(Aa);function Mf(n){Of.render(xt.jsx(pl,{clientId:"967689051729-u5kn73uscp0gp6s2itk6t4cs5fgkenkn.apps.googleusercontent.com",children:xt.jsx(le.StrictMode,{children:xt.jsx(dl,{children:xt.jsx(ml,{children:xt.jsx(bf,{children:xt.jsx(xl,{store:kf,children:xt.jsx(n,{})})})})})})}))}const Hf=Object.freeze(Object.defineProperty({__proto__:null,db:xf,default:Mf},Symbol.toStringTag,{value:"Module"}));export{Hf as R,zf as a,Kf as c,xf as d};

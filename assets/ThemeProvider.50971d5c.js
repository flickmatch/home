import{h as c,a as h,j as o,T as u,_ as i,i as l,k as d}from"./loginSlice.25a195ef.js";const a=typeof Symbol=="function"&&Symbol.for,f=a?Symbol.for("mui.nested"):"__THEME_NESTED__";function T(n,e){return typeof e=="function"?e(n):i({},n,e)}function p(n){const{children:e,theme:t}=n,r=c(),s=h.exports.useMemo(()=>{const m=r===null?t:T(r,t);return m!=null&&(m[f]=r!==null),m},[t,r]);return o(u.Provider,{value:s,children:e})}function v(n){const e=l();return o(d.Provider,{value:typeof e=="object"?e:{},children:n.children})}function _(n){const{children:e,theme:t}=n;return o(p,{theme:t,children:o(v,{children:e})})}export{_ as T};
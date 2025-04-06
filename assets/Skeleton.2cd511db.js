import{_ as d,a as $,k as R,j as _}from"./loginSlice.ea7b6bcd.js";import{m as S,n as M,ab as k,s as A,aO as U,ac as m,q as L,E as X,t as j}from"./App.2d03a279.js";function G(t){return String(parseFloat(t)).length===String(t).length}function x(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function o(t){return parseFloat(t)}function T(t){return(e,a)=>{const n=x(e);if(n===a)return e;let s=o(e);n!=="px"&&(n==="em"||n==="rem")&&(s=o(e)*o(t));let r=s;if(a!=="px")if(a==="em")r=s/o(t);else if(a==="rem")r=s/o(t);else return e;return parseFloat(r.toFixed(5))+a}}function V({size:t,grid:e}){const a=t-t%e,n=a+e;return t-a<n-t?a:n}function H({lineHeight:t,pixels:e,htmlFontSize:a}){return e/(t*a)}function I({cssProperty:t,min:e,max:a,unit:n="rem",breakpoints:s=[600,900,1200],transform:r=null}){const i={[t]:`${e}${n}`},u=(a-e)/s[s.length-1];return s.forEach(c=>{let l=e+u*c;r!==null&&(l=r(l)),i[`@media (min-width:${c}px)`]={[t]:`${Math.round(l*1e4)/1e4}${n}`}}),i}function B(t){return S("MuiSkeleton",t)}const N=M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),J=N,P=["animation","className","component","height","style","variant","width"];let h=t=>t,g,v,C,b;const E=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:r,height:i}=t;return j({root:["root",a,n,s&&"withChildren",s&&!r&&"fitContent",s&&!i&&"heightAuto"]},B,e)},F=k(g||(g=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=k(v||(v=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),O=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=x(t.shape.borderRadius)||"px",n=o(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(C||(C=h`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),F),({ownerState:t,theme:e})=>t.animation==="wave"&&m(b||(b=h`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(e.vars||e).palette.action.hover)),W=$.exports.forwardRef(function(e,a){const n=L({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:r,component:i="span",height:u,style:c,variant:l="text",width:w}=n,f=R(n,P),p=d({},n,{animation:s,component:i,variant:l,hasChildren:Boolean(f.children)}),y=E(p);return _(O,d({as:i,ref:a,className:X(y.root,r),ownerState:p},f,{style:d({width:w,height:u},c)}))}),Q=W;export{Q as S,V as a,B as b,T as c,H as f,x as g,G as i,I as r,J as s,o as t};

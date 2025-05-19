import{r as $,v as R,_ as d,j as _}from"./loginSlice-DtM_Jup9.js";import{w as M,q as S,x as A,y as U,z as j,p as L,aG as X,a0 as m,a1 as b}from"./App-uiZLJ1az.js";function q(t){return String(parseFloat(t)).length===String(t).length}function w(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function i(t){return parseFloat(t)}function D(t){return(e,a)=>{const n=w(e);if(n===a)return e;let r=i(e);n!=="px"&&(n==="em"||n==="rem")&&(r=i(e)*i(t));let s=r;if(a!=="px")if(a==="em")s=r/i(t);else if(a==="rem")s=r/i(t);else return e;return parseFloat(s.toFixed(5))+a}}function O({size:t,grid:e}){const a=t-t%e,n=a+e;return t-a<n-t?a:n}function T({lineHeight:t,pixels:e,htmlFontSize:a}){return e/(t*a)}function V({cssProperty:t,min:e,max:a,unit:n="rem",breakpoints:r=[600,900,1200],transform:s=null}){const o={[t]:`${e}${n}`},u=(a-e)/r[r.length-1];return r.forEach(c=>{let l=e+u*c;s!==null&&(l=s(l)),o[`@media (min-width:${c}px)`]={[t]:`${Math.round(l*1e4)/1e4}${n}`}}),o}function B(t){return S("MuiSkeleton",t)}const H=M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),E=["animation","className","component","height","style","variant","width"];let h=t=>t,g,v,x,C;const N=t=>{const{classes:e,variant:a,animation:n,hasChildren:r,width:s,height:o}=t;return L({root:["root",a,n,r&&"withChildren",r&&!s&&"fitContent",r&&!o&&"heightAuto"]},B,e)},P=b(g||(g=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),F=b(v||(v=h`
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
`)),G=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=w(t.shape.borderRadius)||"px",n=i(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:X(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(x||(x=h`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:t,theme:e})=>t.animation==="wave"&&m(C||(C=h`
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
    `),F,(e.vars||e).palette.action.hover)),I=$.forwardRef(function(e,a){const n=A({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:o="span",height:u,style:c,variant:l="text",width:y}=n,p=R(n,E),f=d({},n,{animation:r,component:o,variant:l,hasChildren:!!p.children}),k=N(f);return _.jsx(G,d({as:o,ref:a,className:j(k.root,s),ownerState:f},p,{style:d({width:y,height:u},c)}))});export{I as S,O as a,w as b,D as c,T as f,B as g,q as i,V as r,H as s,i as t};

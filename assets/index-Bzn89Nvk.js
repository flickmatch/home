import{H,K as U,X as Z,r as o,j as e}from"./loginSlice-zK_AStpI.js";import{A as K}from"./AccountBalance-BF3b6zS9.js";import{C as Q}from"./CrisisAlertOutlined-IP4dk-MH.js";import{a as X}from"./index-Cv3v1qwB.js";import{r as Y,j as ee,u as te,b as se,F as S,d as ie,B as n,T as m,R as oe,a as ne}from"./App-CpYVG6QM.js";import{S as ae,q as re}from"./sweetalert2.all-C3RQg-FW.js";import{M as ce}from"./Meta-DC8b8gQc.js";import{Z as le}from"./Zoom-t3cAsiFm.js";import{F as de,T as x}from"./TextField-uWAuiLeh.js";import{S as ue}from"./Select-BsLtwFdi.js";import{M as me}from"./MenuItem-spsf45dy.js";import{A as j,a as T}from"./AlertTitle-Dvy57hbR.js";import"./index.module-D0wURyH9.js";import"./Input-T7tdxv6v.js";var p={},C;function pe(){if(C)return p;C=1;var l=H();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var y=l(Y()),d=U();return p.default=(0,y.default)((0,d.jsx)("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"MyLocation"),p}var fe=pe();const he=X(fe),ye="_container_16cp1_1",ge="_portraitContainer_16cp1_2",xe="_adminModeTag_16cp1_23",je="_title_16cp1_30",Te="_divider_16cp1_38",Ne="_fieldTitle_16cp1_46",_e="_fieldTitleIcon_16cp1_52",ve="_sectionFirst_16cp1_59",Se="_sectionSecond_16cp1_60",Ce="_sectionThird_16cp1_61",Ie="_formSection_16cp1_65",Me="_selectInput_16cp1_71",Fe="_sectionFourth_16cp1_79",Le="_createButton_16cp1_86",s={container:ye,portraitContainer:ge,adminModeTag:xe,title:je,divider:Te,fieldTitle:Ne,fieldTitleIcon:_e,sectionFirst:ve,sectionSecond:Se,sectionThird:Ce,formSection:Ie,selectInput:Me,sectionFourth:Fe,createButton:Le},Ae=void 0,I=void 0;JSON.stringify({query:`query {
        city(cityId) {
          cityId
          cityName
          sportsVenues {
            sportsVenueId
            displayName
            googleMapsLink
            availableSportsIds
          }      
        }
      }`});function ze(){const[,l]=ee(),y=te(),d=se(),f=Z(t=>t),[u,M]=o.useState(""),[a,N]=o.useState(""),[h,_]=o.useState(""),[v,F]=o.useState(""),[L,A]=o.useState([]),[q,w]=o.useState([]);o.useEffect(()=>{f.login.isAdmin||ae.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{d("/match-queues")})},[f.login.isAdmin,d]),o.useEffect(()=>{const t=new AbortController,i=t.signal;return(async()=>{try{const G=await(await fetch(I,{method:"POST",signal:i,headers:{"Content-Type":"application/json"},body:re})).json();A(G.data.cities)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})(),()=>{t.abort()}},[]);function b(){l.push({options:{content:e.jsx(j,{severity:"success",children:e.jsx(T,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function P(){l.push({options:{content:e.jsx(j,{severity:"info",children:e.jsxs(T,{className:s.alertTitle,children:[u===""?"City Name":a===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function g(t){l.push({options:{content:e.jsx(j,{severity:"error",children:e.jsx(T,{className:s.alertTitle,children:t})})}})}const k=t=>{(async()=>{try{const c=await(await fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
              city(cityId: "${t}") {
                cityId
                cityName
                sportsVenues {
                  sportsVenueId
                  displayName
                  googleMapsLink
                  availableSportsIds
                }      
              }
            }`})})).json();w(c.data.city.sportsVenues)}catch(r){r instanceof Error&&r.name==="TypeError"&&console.log(r.message)}})()},E=t=>{M(t.target.value),k(t.target.value)},O=t=>{N(t.target.value)},D=t=>{_(t.target.value)},V=t=>{const i=t.target.value;/^\d+$/.test(i)||i===""?F(i):g("Pin code should only contain numbers!")},B={input:{cityId:u,displayName:a,googleMapsLink:h,stripePaymentLinks:[]}},R=()=>{if(u===""||h===""||a==="")P();else{if(q.some(t=>Object.values(t).includes(a)))return g("Turf already exists!");fetch(Ae,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${u}"
                        displayName: "${a}"
                        googleMapsLink: "${h}"
                        stripePaymentLinks: []
                        pinCode: "${v}"
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:B.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);b(),N(""),_(""),d("/match-queues")}).catch(t=>{g(t.message),console.log(t)})}},W=()=>e.jsxs(n,{className:s.sectionFirst,children:[e.jsx(m,{className:s.fieldTitle,children:"City Name"}),e.jsx(K,{className:s.fieldTitleIcon}),e.jsx(de,{className:s.selectInput,children:e.jsx(ue,{id:"demo-simple-select-autowidth",value:u,onChange:E,style:{width:"100%"},children:L.map((t,i)=>e.jsx(me,{value:t.cityId,style:{width:"100%"},children:t.cityName},i))})})]}),$=()=>e.jsxs(n,{className:s.sectionSecond,children:[e.jsx(m,{className:s.fieldTitle,children:"Turf Name"}),e.jsx(oe,{className:s.fieldTitleIcon}),e.jsx(x,{fullWidth:!0,value:a,onChange:O,placeholder:"Turf Name",id:"fullWidth"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{className:s.sectionThird,children:[e.jsx(m,{className:s.fieldTitle,children:"Google Map Link"}),e.jsx(Q,{className:s.fieldTitleIcon}),e.jsx(x,{fullWidth:!0,value:h,onChange:D,placeholder:"G-Map Link",id:"fullWidth"})]}),e.jsxs(n,{className:s.sectionThird,children:[e.jsx(m,{className:s.fieldTitle,children:"Pin Code"}),e.jsx(he,{className:s.fieldTitleIcon}),e.jsx(x,{fullWidth:!0,value:v,onChange:V,placeholder:"Pin Code",id:"fullWidth"})]})]}),z=()=>e.jsx(n,{className:s.sectionFourth,children:e.jsx(ne,{variant:"contained",color:"success",className:s.createButton,onClick:R,children:"Create"})});return e.jsxs(e.Fragment,{children:[e.jsx(ce,{title:"Add Turf"}),f.login.isAdmin&&f.login.isLoggedIn?e.jsx(e.Fragment,{children:e.jsx(le,{in:!0,style:{transitionDelay:"300ms"},children:e.jsxs(S,{className:y?s.portraitContainer:s.container,children:[e.jsx(ie,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),e.jsxs(n,{children:[e.jsx(m,{variant:"h3",className:s.title,children:"Add Turf"}),e.jsx(n,{className:s.divider})]}),e.jsxs(S,{className:s.formSection,children:[W(),$(),J(),z()]})]})})}):e.jsx(e.Fragment,{})]})}export{ze as default};

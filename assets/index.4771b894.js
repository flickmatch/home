import{W as H,a6 as Z,a,A as o,F as f,j as t}from"./loginSlice.ea7b6bcd.js";import{d as Q}from"./AccountBalance.ed7946d0.js";import{d as K}from"./CrisisAlertOutlined.de957a58.js";import{r as X,a as ee,bP as te,u as se,e as oe,F as M,Y as ie,B as n,T as u,bY as ae,b as ne}from"./App.4c9a8b29.js";import{S as re,q as ce}from"./sweetalert2.esm.all.61eeb4e4.js";import{M as le}from"./Meta.dfce2c15.js";import{Z as de}from"./Zoom.f8096151.js";import{F as ue,T}from"./TextField.1a55f872.js";import{S as pe}from"./Select.043dd1a8.js";import{M as me}from"./MenuItem.8029429c.js";import{A as g,a as N}from"./AlertTitle.77f9acc4.js";import"./index.a3ffe1ef.js";import"./index.module.86d27b7e.js";import"./Input.bcc5b01f.js";var v={},fe=H.exports;Object.defineProperty(v,"__esModule",{value:!0});var A=v.default=void 0,he=fe(X()),ye=ee;A=v.default=(0,he.default)((0,ye.jsx)("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"MyLocation");const _e="_container_16cp1_1",Te="_portraitContainer_16cp1_2",ge="_adminModeTag_16cp1_23",Ne="_title_16cp1_30",ve="_divider_16cp1_38",Se="_fieldTitle_16cp1_46",Ie="_fieldTitleIcon_16cp1_52",Ce="_sectionFirst_16cp1_59",Me="_sectionSecond_16cp1_60",xe="_sectionThird_16cp1_61",Ae="_formSection_16cp1_65",Fe="_selectInput_16cp1_71",be="_sectionFourth_16cp1_79",Le="_createButton_16cp1_86",s={container:_e,portraitContainer:Te,adminModeTag:ge,title:Ne,divider:ve,fieldTitle:Se,fieldTitleIcon:Ie,sectionFirst:Ce,sectionSecond:Me,sectionThird:xe,formSection:Ae,selectInput:Fe,sectionFourth:be,createButton:Le},Pe={}.VITE_API_URL,x={}.VITE_API_URL;JSON.stringify({query:`query {
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
      }`});function Ge(){const[,h]=te(),F=se(),y=oe(),p=Z(e=>e),[d,b]=a.exports.useState(""),[r,S]=a.exports.useState(""),[m,I]=a.exports.useState(""),[C,L]=a.exports.useState(""),[P,w]=a.exports.useState([]),[j,q]=a.exports.useState([]);a.exports.useEffect(()=>{p.login.isAdmin||re.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{y("/match-queues")})},[p.login.isAdmin,y]),a.exports.useEffect(()=>{const e=new AbortController,i=e.signal;return(async()=>{try{const Y=await(await fetch(x,{method:"POST",signal:i,headers:{"Content-Type":"application/json"},body:ce})).json();w(Y.data.cities)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})(),()=>{e.abort()}},[]);function k(){h.push({options:{content:t(g,{severity:"success",children:t(N,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function V(){h.push({options:{content:t(g,{severity:"info",children:o(N,{className:s.alertTitle,children:[d===""?"City Name":r===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function _(e){h.push({options:{content:t(g,{severity:"error",children:t(N,{className:s.alertTitle,children:e})})}})}const $=e=>{(async()=>{try{const l=await(await fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
              city(cityId: "${e}") {
                cityId
                cityName
                sportsVenues {
                  sportsVenueId
                  displayName
                  googleMapsLink
                  availableSportsIds
                }      
              }
            }`})})).json();q(l.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},E=e=>{b(e.target.value),$(e.target.value)},D=e=>{S(e.target.value)},O=e=>{I(e.target.value)},B=e=>{const i=e.target.value;/^\d+$/.test(i)||i===""?L(i):_("Pin code should only contain numbers!")},W={input:{cityId:d,displayName:r,googleMapsLink:m,stripePaymentLinks:[]}},R=()=>{if(d===""||m===""||r==="")V();else{if(j.some(e=>Object.values(e).includes(r)))return _("Turf already exists!");fetch(Pe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${d}"
                        displayName: "${r}"
                        googleMapsLink: "${m}"
                        stripePaymentLinks: []
                        pinCode: "${C}"
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:W.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);k(),S(""),I(""),y("/match-queues")}).catch(e=>{_(e.message),console.log(e)})}},U=()=>o(n,{className:s.sectionFirst,children:[t(u,{className:s.fieldTitle,children:"City Name"}),t(Q,{className:s.fieldTitleIcon}),t(ue,{className:s.selectInput,children:t(pe,{id:"demo-simple-select-autowidth",value:d,onChange:E,style:{width:"100%"},children:P.map((e,i)=>t(me,{value:e.cityId,style:{width:"100%"},children:e.cityName},i))})})]}),z=()=>o(n,{className:s.sectionSecond,children:[t(u,{className:s.fieldTitle,children:"Turf Name"}),t(ae,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:r,onChange:D,placeholder:"Turf Name",id:"fullWidth"})]}),G=()=>o(f,{children:[o(n,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Google Map Link"}),t(K,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:m,onChange:O,placeholder:"G-Map Link",id:"fullWidth"})]}),o(n,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Pin Code"}),t(A,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:C,onChange:B,placeholder:"Pin Code",id:"fullWidth"})]})]}),J=()=>t(n,{className:s.sectionFourth,children:t(ne,{variant:"contained",color:"success",className:s.createButton,onClick:R,children:"Create"})});return o(f,{children:[t(le,{title:"Add Turf"}),p.login.isAdmin&&p.login.isLoggedIn?t(f,{children:t(de,{in:!0,style:{transitionDelay:"300ms"},children:o(M,{className:F?s.portraitContainer:s.container,children:[t(ie,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),o(n,{children:[t(u,{variant:"h3",className:s.title,children:"Add Turf"}),t(n,{className:s.divider})]}),o(M,{className:s.formSection,children:[U(),z(),G(),J()]})]})})}):t(f,{})]})}export{Ge as default};

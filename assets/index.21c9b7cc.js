import{W as Y,a6 as Z,a,A as i,F as f,j as t}from"./loginSlice.5d27ec86.js";import{d as Q}from"./AccountBalance.fdc9c7db.js";import{d as K}from"./CrisisAlertOutlined.650f892b.js";import{r as X,a as ee,bM as te,u as se,e as ie,F as M,Y as oe,B as n,T as u,bU as ae,b as ne}from"./App.3d2d2d6e.js";import{S as re,q as ce}from"./sweetalert2.esm.all.1c2887d1.js";import{M as le}from"./Meta.3cce7c91.js";import{Z as de}from"./Zoom.3632e179.js";import{F as ue,T}from"./TextField.1d280fd5.js";import{S as pe}from"./Select.1349ddd7.js";import{M as me}from"./MenuItem.1e09a44d.js";import{A as N,a as _}from"./AlertTitle.6d9f3d01.js";import"./index.d0ad95d1.js";import"./index.module.4cdec6c2.js";import"./Input.0226b2b9.js";var v={},fe=Y.exports;Object.defineProperty(v,"__esModule",{value:!0});var A=v.default=void 0,he=fe(X()),ye=ee;A=v.default=(0,he.default)((0,ye.jsx)("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"MyLocation");const ge="_container_16cp1_1",Te="_portraitContainer_16cp1_2",Ne="_adminModeTag_16cp1_23",_e="_title_16cp1_30",ve="_divider_16cp1_38",Se="_fieldTitle_16cp1_46",Ce="_fieldTitleIcon_16cp1_52",Ie="_sectionFirst_16cp1_59",Me="_sectionSecond_16cp1_60",xe="_sectionThird_16cp1_61",Ae="_formSection_16cp1_65",Fe="_selectInput_16cp1_71",be="_sectionFourth_16cp1_79",qe="_createButton_16cp1_86",s={container:ge,portraitContainer:Te,adminModeTag:Ne,title:_e,divider:ve,fieldTitle:Se,fieldTitleIcon:Ce,sectionFirst:Ie,sectionSecond:Me,sectionThird:xe,formSection:Ae,selectInput:Fe,sectionFourth:be,createButton:qe},we="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",x="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Ge(){const[,h]=te(),F=se(),y=ie(),p=Z(e=>e),[d,b]=a.exports.useState(""),[r,S]=a.exports.useState(""),[m,C]=a.exports.useState(""),[I,q]=a.exports.useState(""),[w,P]=a.exports.useState([]),[k,L]=a.exports.useState([]);a.exports.useEffect(()=>{p.login.isAdmin||re.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{y("/match-queues")})},[p.login.isAdmin,y]),a.exports.useEffect(()=>{const e=new AbortController,o=e.signal;return(async()=>{try{const R=await(await fetch(x,{method:"POST",signal:o,headers:{"Content-Type":"application/json"},body:ce})).json();P(R.data.cities)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})(),()=>{e.abort()}},[]);function j(){h.push({options:{content:t(N,{severity:"success",children:t(_,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function O(){h.push({options:{content:t(N,{severity:"info",children:i(_,{className:s.alertTitle,children:[d===""?"City Name":r===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function g(e){h.push({options:{content:t(N,{severity:"error",children:t(_,{className:s.alertTitle,children:e})})}})}const $=e=>{(async()=>{try{const l=await(await fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();L(l.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},V=e=>{b(e.target.value),$(e.target.value)},D=e=>{S(e.target.value)},B=e=>{C(e.target.value)},E=e=>{const o=e.target.value;/^\d+$/.test(o)||o===""?q(o):g("Pin code should only contain numbers!")},W={input:{cityId:d,displayName:r,googleMapsLink:m,stripePaymentLinks:[]}},H=()=>{if(d===""||m===""||r==="")O();else{if(k.some(e=>Object.values(e).includes(r)))return g("Turf already exists!");fetch(we,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${d}"
                        displayName: "${r}"
                        googleMapsLink: "${m}"
                        stripePaymentLinks: []
                        pinCode: "${I}"
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:W.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);j(),S(""),C(""),y("/match-queues")}).catch(e=>{g(e.message),console.log(e)})}},U=()=>i(n,{className:s.sectionFirst,children:[t(u,{className:s.fieldTitle,children:"City Name"}),t(Q,{className:s.fieldTitleIcon}),t(ue,{className:s.selectInput,children:t(pe,{id:"demo-simple-select-autowidth",value:d,onChange:V,style:{width:"100%"},children:w.map((e,o)=>t(me,{value:e.cityId,style:{width:"100%"},children:e.cityName},o))})})]}),z=()=>i(n,{className:s.sectionSecond,children:[t(u,{className:s.fieldTitle,children:"Turf Name"}),t(ae,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:r,onChange:D,placeholder:"Turf Name",id:"fullWidth"})]}),G=()=>i(f,{children:[i(n,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Google Map Link"}),t(K,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:m,onChange:B,placeholder:"G-Map Link",id:"fullWidth"})]}),i(n,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Pin Code"}),t(A,{className:s.fieldTitleIcon}),t(T,{fullWidth:!0,value:I,onChange:E,placeholder:"Pin Code",id:"fullWidth"})]})]}),J=()=>t(n,{className:s.sectionFourth,children:t(ne,{variant:"contained",color:"success",className:s.createButton,onClick:H,children:"Create"})});return i(f,{children:[t(le,{title:"Add Turf"}),p.login.isAdmin&&p.login.isLoggedIn?t(f,{children:t(de,{in:!0,style:{transitionDelay:"300ms"},children:i(M,{className:F?s.portraitContainer:s.container,children:[t(oe,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),i(n,{children:[t(u,{variant:"h3",className:s.title,children:"Add Turf"}),t(n,{className:s.divider})]}),i(M,{className:s.formSection,children:[U(),z(),G(),J()]})]})})}):t(f,{})]})}export{Ge as default};

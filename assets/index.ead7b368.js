import{a as i,E as a,G as p,j as e}from"./index.93d5be9a.js";import"./index.fc726bb4.js";import{S as Z,d as Q}from"./sweetalert2.all.bd01fb92.js";import{d as Y}from"./CrisisAlertOutlined.0f7dad83.js";import{bc as K,bd as R,F as v,D as X,B as l,T as m,bi as ee,b as te}from"./App.2aaf7373.js";import{u as se,M as ae,H as ie,F as oe}from"./Header.5cc1b04d.js";import{a as ne}from"./loginSlice.30540691.js";import{q as re}from"./constants.70367cb1.js";import{Z as ce,M as le,A as h,a as y}from"./Zoom.37bbf17a.js";import{a as de,S as ue,T as q}from"./TextField.c38043b0.js";import{u as me}from"./useDispatch.14c05b88.js";import"./index.e02583a5.js";import"./Input.9c46f404.js";const fe="_container_qfnb2_1",pe="_portraitContainer_qfnb2_2",he="_adminModeTag_qfnb2_22",ye="_title_qfnb2_29",Te="_divider_qfnb2_37",Ne="_fieldTitle_qfnb2_45",_e="_fieldTitleIcon_qfnb2_51",ge="_sectionFirst_qfnb2_58",Se="_sectionSecond_qfnb2_59",be="_sectionThird_qfnb2_60",Ie="_formSection_qfnb2_64",ve="_selectInput_qfnb2_70",qe="_sectionFourth_qfnb2_78",Ce="_createButton_qfnb2_85",s={container:fe,portraitContainer:pe,adminModeTag:he,title:ye,divider:Te,fieldTitle:Ne,fieldTitleIcon:_e,sectionFirst:ge,sectionSecond:Se,sectionThird:be,formSection:Ie,selectInput:ve,sectionFourth:qe,createButton:Ce},Me="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",C="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});const xe={}.VITE_GOOGLE_SHEET_API;function Ge(){const T=me(),[,f]=K(),M=se(),N=R(),[x,_]=i.exports.useState(!1),[d,F]=i.exports.useState(""),[r,g]=i.exports.useState(""),[u,S]=i.exports.useState(""),[k,w]=i.exports.useState([]),[A,E]=i.exports.useState([]);i.exports.useEffect(()=>{const t=localStorage.getItem("userData");if(t){const o=JSON.parse(t);o.email==="admin@flickmatch.in"?_(!0):(async()=>{const I=(await(await fetch(`${xe}`)).json()).data.map(z=>z.EmailId).includes(o.email);_(I),I||Z.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{N("/match-queues")})})(),T(ne())}},[T]),i.exports.useEffect(()=>{const t=new AbortController,o=t.signal;return(async()=>{try{const b=await(await fetch(C,{method:"POST",signal:o,headers:{"Content-Type":"application/json"},body:re})).json();w(b.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{t.abort()}},[]);function O(){f.push({options:{content:e(h,{severity:"success",children:e(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){f.push({options:{content:e(h,{severity:"error",children:a(y,{className:s.alertTitle,children:[d===""?"City Name":r===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function L(){f.push({options:{content:e(h,{severity:"error",children:e(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const j=t=>{(async()=>{try{const n=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();E(n.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},P=t=>{F(t.target.value),j(t.target.value)},V=t=>{g(t.target.value)},B=t=>{S(t.target.value)},$={input:{cityId:d,displayName:r,googleMapsLink:u,stripePaymentLinks:[]}},G=()=>{if(d===""||u===""||r==="")D();else{if(A.some(t=>Object.values(t).includes(r)))return L();fetch(Me,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${d}"
                        displayName: "${r}"
                        googleMapsLink: "${u}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:$.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);O(),g(""),S(""),N("/match-queues")}).catch(t=>{console.log(t)})}},H=()=>a(l,{className:s.sectionFirst,children:[e(m,{className:s.fieldTitle,children:"City Name"}),e(Q,{className:s.fieldTitleIcon}),e(de,{className:s.selectInput,children:e(ue,{id:"demo-simple-select-autowidth",value:d,onChange:P,style:{width:"100%"},children:k.map((t,o)=>e(le,{value:t.cityId,style:{width:"100%"},children:t.cityName},o))})})]}),J=()=>a(l,{className:s.sectionSecond,children:[e(m,{className:s.fieldTitle,children:"Turf Name"}),e(ee,{className:s.fieldTitleIcon}),e(q,{fullWidth:!0,value:r,onChange:V,placeholder:"Turf Name",id:"fullWidth"})]}),W=()=>a(l,{className:s.sectionThird,children:[e(m,{className:s.fieldTitle,children:"Google Map Link"}),e(Y,{className:s.fieldTitleIcon}),e(q,{fullWidth:!0,value:u,onChange:B,placeholder:"G-Map Link",id:"fullWidth"})]}),U=()=>e(l,{className:s.sectionFourth,children:e(te,{variant:"contained",color:"success",className:s.createButton,onClick:G,children:"Create"})});return a(p,{children:[e(ae,{title:"Add Turf"}),e("div",{children:e(ie,{})}),x?a(p,{children:[e(ce,{in:!0,style:{transitionDelay:"300ms"},children:a(v,{className:M?s.portraitContainer:s.container,children:[e(X,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),a(l,{children:[e(m,{variant:"h3",className:s.title,children:"Add Turf"}),e(l,{className:s.divider})]}),a(v,{className:s.formSection,children:[H(),J(),W(),U()]})]})}),e(oe,{})]}):e(p,{})]})}export{Ge as default};

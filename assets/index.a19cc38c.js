import{a as o,E as a,G as p,j as e}from"./index.93d5be9a.js";import"./index.fc726bb4.js";import{S as Z,d as Q}from"./sweetalert2.all.ce3e32f1.js";import{d as Y}from"./CrisisAlertOutlined.90aeec9c.js";import{bc as K,bd as R,F as v,D as X,B as l,T as h,bi as ee,b as te}from"./App.06864be4.js";import{u as se,M as ae,H as oe,F as ie}from"./Header.de2b6520.js";import{a as ne}from"./loginSlice.30540691.js";import{q as re}from"./constants.70367cb1.js";import{Z as ce,M as le,A as f,a as y}from"./Zoom.456c21bf.js";import{a as de,S as ue,T as C}from"./TextField.06532ef3.js";import{u as he}from"./useDispatch.14c05b88.js";import"./index.5abad63c.js";import"./Input.97e34c6d.js";const me="_container_1bzoh_1",pe="_portraitContainer_1bzoh_2",fe="_adminModeTag_1bzoh_18",ye="_title_1bzoh_25",Te="_divider_1bzoh_32",Ne="_fieldTitle_1bzoh_40",_e="_fieldTitleIcon_1bzoh_46",ge="_sectionFirst_1bzoh_53",Se="_sectionSecond_1bzoh_54",be="_sectionThird_1bzoh_55",Ie="_formSection_1bzoh_59",ve="_selectInput_1bzoh_65",Ce="_sectionFourth_1bzoh_73",Me="_createButton_1bzoh_80",s={container:me,portraitContainer:pe,adminModeTag:fe,title:ye,divider:Te,fieldTitle:Ne,fieldTitleIcon:_e,sectionFirst:ge,sectionSecond:Se,sectionThird:be,formSection:Ie,selectInput:ve,sectionFourth:Ce,createButton:Me},xe="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",M="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});const Fe={}.VITE_GOOGLE_SHEET_API;function $e(){const T=he(),[,m]=K(),x=se(),N=R(),[F,_]=o.exports.useState(!1),[d,k]=o.exports.useState(""),[r,g]=o.exports.useState(""),[u,S]=o.exports.useState(""),[w,z]=o.exports.useState([]),[A,E]=o.exports.useState([]);o.exports.useEffect(()=>{const t=localStorage.getItem("userData");if(t){const i=JSON.parse(t);i.email==="admin@flickmatch.in"?_(!0):(async()=>{const I=(await(await fetch(`${Fe}`)).json()).data.map(U=>U.EmailId).includes(i.email);_(I),I||Z.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{N("/match-queues")})})(),T(ne())}},[T]),o.exports.useEffect(()=>{const t=new AbortController,i=t.signal;return(async()=>{try{const b=await(await fetch(M,{method:"POST",signal:i,headers:{"Content-Type":"application/json"},body:re})).json();z(b.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{t.abort()}},[]);function O(){m.push({options:{content:e(f,{severity:"success",children:e(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){m.push({options:{content:e(f,{severity:"error",children:a(y,{className:s.alertTitle,children:[d===""?"City Name":r===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function L(){m.push({options:{content:e(f,{severity:"error",children:e(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const j=t=>{(async()=>{try{const n=await(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();E(n.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},q=t=>{k(t.target.value),j(t.target.value)},P=t=>{g(t.target.value)},V=t=>{S(t.target.value)},B={input:{cityId:d,displayName:r,googleMapsLink:u,stripePaymentLinks:[]}},$=()=>{if(d===""||u===""||r==="")D();else{if(A.some(t=>Object.values(t).includes(r)))return L();fetch(xe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:B.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);O(),g(""),S(""),N("/match-queues")}).catch(t=>{console.log(t)})}},G=()=>a(l,{className:s.sectionFirst,children:[e(h,{className:s.fieldTitle,children:"City Name"}),e(Q,{className:s.fieldTitleIcon}),e(de,{className:s.selectInput,children:e(ue,{id:"demo-simple-select-autowidth",value:d,onChange:q,style:{width:"100%"},children:w.map((t,i)=>e(le,{value:t.cityId,style:{width:"100%"},children:t.cityName},i))})})]}),H=()=>a(l,{className:s.sectionSecond,children:[e(h,{className:s.fieldTitle,children:"Turf Name"}),e(ee,{className:s.fieldTitleIcon}),e(C,{fullWidth:!0,value:r,onChange:P,placeholder:"Turf Name",id:"fullWidth"})]}),J=()=>a(l,{className:s.sectionThird,children:[e(h,{className:s.fieldTitle,children:"Google Map Link"}),e(Y,{className:s.fieldTitleIcon}),e(C,{fullWidth:!0,value:u,onChange:V,placeholder:"G-Map Link",id:"fullWidth"})]}),W=()=>e(l,{className:s.sectionFourth,children:e(te,{variant:"contained",color:"success",className:s.createButton,onClick:$,children:"Create"})});return a(p,{children:[e(ae,{title:"Add Turf"}),e("div",{children:e(oe,{})}),F?a(p,{children:[e(ce,{in:!0,style:{transitionDelay:"300ms"},children:a(v,{className:x?s.portraitContainer:s.container,children:[e(X,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),a(l,{children:[e(h,{variant:"h3",className:s.title,children:"Add Turf"}),e(l,{className:s.divider})]}),a(v,{className:s.formSection,children:[G(),H(),J(),W()]})]})}),e(ie,{})]}):e(p,{})]})}export{$e as default};

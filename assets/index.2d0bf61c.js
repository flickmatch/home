import{a as o,E as a,G as p,j as e}from"./index.a525f6e3.js";import{S as Q,d as Y}from"./sweetalert2.all.3a895286.js";import{d as K}from"./CrisisAlertOutlined.d775f4b3.js";import{bc as R,bf as X,F as b,D as ee,B as l,T as h,bh as te,b as se}from"./App.baf85628.js";import{u as oe,M as ae,H as ie,F as ne}from"./Header.364b5cee.js";import{q as re}from"./constants.70367cb1.js";import{Z as ce,M as le}from"./Zoom.608a24d2.js";import{h as de,S as ue,T as v,d as f,e as y}from"./TextField.9aa64ca8.js";import"./index.9bd34429.js";import"./index.module.325f48be.js";const he="_container_1bzoh_1",me="_portraitContainer_1bzoh_2",pe="_adminModeTag_1bzoh_18",fe="_title_1bzoh_25",ye="_divider_1bzoh_32",Te="_fieldTitle_1bzoh_40",ge="_fieldTitleIcon_1bzoh_46",Ne="_sectionFirst_1bzoh_53",_e="_sectionSecond_1bzoh_54",Se="_sectionThird_1bzoh_55",Ie="_formSection_1bzoh_59",be="_selectInput_1bzoh_65",ve="_sectionFourth_1bzoh_73",Ce="_createButton_1bzoh_80",s={container:he,portraitContainer:me,adminModeTag:pe,title:fe,divider:ye,fieldTitle:Te,fieldTitleIcon:ge,sectionFirst:Ne,sectionSecond:_e,sectionThird:Se,formSection:Ie,selectInput:be,sectionFourth:ve,createButton:Ce},Me="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",C="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});const xe={}.VITE_GOOGLE_SHEET_API;function De(){const[,m]=R(),M=oe(),T=X(),[x,F]=o.exports.useState(!1),[k,g]=o.exports.useState(!1),[d,w]=o.exports.useState(""),[r,N]=o.exports.useState(""),[u,_]=o.exports.useState(""),[z,A]=o.exports.useState([]),[E,L]=o.exports.useState([]);o.exports.useEffect(()=>{const t=localStorage.getItem("userData");if(t){const i=JSON.parse(t);i.email==="admin@flickmatch.in"?g(!0):(async()=>{const I=(await(await fetch(`${xe}`)).json()).data.map(Z=>Z.EmailId).includes(i.email);g(I),I||Q.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{T("/match-queues")})})(),F(!0)}},[]),o.exports.useEffect(()=>{const t=new AbortController,i=t.signal;return(async()=>{try{const S=await(await fetch(C,{method:"POST",signal:i,headers:{"Content-Type":"application/json"},body:re})).json();A(S.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{t.abort()}},[]);function O(){m.push({options:{content:e(f,{severity:"success",children:e(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function j(){m.push({options:{content:e(f,{severity:"error",children:a(y,{className:s.alertTitle,children:[d===""?"City Name":r===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function q(){m.push({options:{content:e(f,{severity:"error",children:e(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const D=t=>{(async()=>{try{const n=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();L(n.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},P=t=>{w(t.target.value),D(t.target.value)},V=t=>{N(t.target.value)},B=t=>{_(t.target.value)},$={input:{cityId:d,displayName:r,googleMapsLink:u,stripePaymentLinks:[]}},G=()=>{if(d===""||u===""||r==="")j();else{if(E.some(t=>Object.values(t).includes(r)))return q();fetch(Me,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:$.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);O(),N(""),_(""),T("/match-queues")}).catch(t=>{console.log(t)})}},H=()=>a(l,{className:s.sectionFirst,children:[e(h,{className:s.fieldTitle,children:"City Name"}),e(Y,{className:s.fieldTitleIcon}),e(de,{className:s.selectInput,children:e(ue,{id:"demo-simple-select-autowidth",value:d,onChange:P,style:{width:"100%"},children:z.map((t,i)=>e(le,{value:t.cityId,style:{width:"100%"},children:t.cityName},i))})})]}),J=()=>a(l,{className:s.sectionSecond,children:[e(h,{className:s.fieldTitle,children:"Turf Name"}),e(te,{className:s.fieldTitleIcon}),e(v,{fullWidth:!0,value:r,onChange:V,placeholder:"Turf Name",id:"fullWidth"})]}),W=()=>a(l,{className:s.sectionThird,children:[e(h,{className:s.fieldTitle,children:"Google Map Link"}),e(K,{className:s.fieldTitleIcon}),e(v,{fullWidth:!0,value:u,onChange:B,placeholder:"G-Map Link",id:"fullWidth"})]}),U=()=>e(l,{className:s.sectionFourth,children:e(se,{variant:"contained",color:"success",className:s.createButton,onClick:G,children:"Create"})});return a(p,{children:[e(ae,{title:"Add Turf"}),e("div",{children:e(ie,{loggedIn:x})}),k?a(p,{children:[e(ce,{in:!0,style:{transitionDelay:"300ms"},children:a(b,{className:M?s.portraitContainer:s.container,children:[e(ee,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),a(l,{children:[e(h,{variant:"h3",className:s.title,children:"Add Turf"}),e(l,{className:s.divider})]}),a(b,{className:s.formSection,children:[H(),J(),W(),U()]})]})}),e(ne,{})]}):e(p,{})]})}export{De as default};

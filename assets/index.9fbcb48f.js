import{a as o,E as a,G as p,j as e}from"./index.a525f6e3.js";import{S as Y,d as K}from"./sweetalert2.all.e6f3728e.js";import{d as R}from"./CrisisAlertOutlined.8c58c7e2.js";import{bc as X,bd as ee,F as I,D as te,B as l,T as h,bh as se,b as oe}from"./App.4a9ba0d8.js";import{u as ae,M as ie,H as ne,F as re}from"./Header.dd81c3f0.js";import{q as ce}from"./constants.70367cb1.js";import{Z as le,M as de,A as f,a as y}from"./Zoom.9e8ee626.js";import{d as ue,S as he,T as b}from"./TextField.366601f3.js";import"./index.24291b48.js";import"./index.module.325f48be.js";const me="_container_1bzoh_1",pe="_portraitContainer_1bzoh_2",fe="_adminModeTag_1bzoh_18",ye="_title_1bzoh_25",Te="_divider_1bzoh_32",ge="_fieldTitle_1bzoh_40",Ne="_fieldTitleIcon_1bzoh_46",_e="_sectionFirst_1bzoh_53",Se="_sectionSecond_1bzoh_54",Ie="_sectionThird_1bzoh_55",be="_formSection_1bzoh_59",ve="_selectInput_1bzoh_65",Me="_sectionFourth_1bzoh_73",Ce="_createButton_1bzoh_80",s={container:me,portraitContainer:pe,adminModeTag:fe,title:ye,divider:Te,fieldTitle:ge,fieldTitleIcon:Ne,sectionFirst:_e,sectionSecond:Se,sectionThird:Ie,formSection:be,selectInput:ve,sectionFourth:Me,createButton:Ce},xe="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",v="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Oe(){const[,m]=X(),M=ae(),T=ee(),[C,x]=o.exports.useState(!1),[F,w]=o.exports.useState(!1),[d,z]=o.exports.useState(""),[n,g]=o.exports.useState(""),[u,N]=o.exports.useState(""),[A,k]=o.exports.useState([]),[E,L]=o.exports.useState([]),j={}.VITE_MAIL_SHEET;o.exports.useEffect(()=>{const t=localStorage.getItem("userData");if(t){const r=JSON.parse(t);x(!0),(async()=>{const S=(await(await fetch(`${j}`)).json()).map(Q=>Q.EmailId).includes(r.email);w(S),S||Y.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{T("/match-queues")})})()}},[]),o.exports.useEffect(()=>{const t=new AbortController,r=t.signal;return(async()=>{try{const _=await(await fetch(v,{method:"POST",signal:r,headers:{"Content-Type":"application/json"},body:ce})).json();k(_.data.cities)}catch(i){i instanceof Error&&i.name==="TypeError"&&console.log(i.message)}})(),()=>{t.abort()}},[]);function q(){m.push({options:{content:e(f,{severity:"success",children:e(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){m.push({options:{content:e(f,{severity:"error",children:a(y,{className:s.alertTitle,children:[d===""?"City Name":n===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function O(){m.push({options:{content:e(f,{severity:"error",children:e(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const P=t=>{(async()=>{try{const i=await(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();L(i.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},V=t=>{z(t.target.value),P(t.target.value)},B=t=>{g(t.target.value)},$=t=>{N(t.target.value)},H={input:{cityId:d,displayName:n,googleMapsLink:u,stripePaymentLinks:[]}},G=()=>{if(d===""||u===""||n==="")D();else{if(E.some(t=>Object.values(t).includes(n)))return O();fetch(xe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${d}"
                        displayName: "${n}"
                        googleMapsLink: "${u}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:H.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);q(),g(""),N(""),T("/match-queues")}).catch(t=>{console.log(t)})}},J=()=>a(l,{className:s.sectionFirst,children:[e(h,{className:s.fieldTitle,children:"City Name"}),e(K,{className:s.fieldTitleIcon}),e(ue,{className:s.selectInput,children:e(he,{id:"demo-simple-select-autowidth",value:d,onChange:V,style:{width:"100%"},children:A.map((t,r)=>e(de,{value:t.cityId,style:{width:"100%"},children:t.cityName},r))})})]}),W=()=>a(l,{className:s.sectionSecond,children:[e(h,{className:s.fieldTitle,children:"Turf Name"}),e(se,{className:s.fieldTitleIcon}),e(b,{fullWidth:!0,value:n,onChange:B,placeholder:"Turf Name",id:"fullWidth"})]}),U=()=>a(l,{className:s.sectionThird,children:[e(h,{className:s.fieldTitle,children:"Google Map Link"}),e(R,{className:s.fieldTitleIcon}),e(b,{fullWidth:!0,value:u,onChange:$,placeholder:"G-Map Link",id:"fullWidth"})]}),Z=()=>e(l,{className:s.sectionFourth,children:e(oe,{variant:"contained",color:"success",className:s.createButton,onClick:G,children:"Create"})});return a(p,{children:[e(ie,{title:"Add Turf"}),e("div",{children:e(ne,{loggedIn:C})}),F?a(p,{children:[e(le,{in:!0,style:{transitionDelay:"300ms"},children:a(I,{className:M?s.portraitContainer:s.container,children:[e(te,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),a(l,{children:[e(h,{variant:"h3",className:s.title,children:"Add Turf"}),e(l,{className:s.divider})]}),a(I,{className:s.formSection,children:[J(),W(),U(),Z()]})]})}),e(re,{})]}):e(p,{})]})}export{Oe as default};

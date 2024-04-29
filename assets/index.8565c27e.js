import{a as o,E as a,G as p,j as e}from"./index.a525f6e3.js";import{d as U}from"./AccountBalance.d89652ec.js";import{d as Z}from"./CrisisAlertOutlined.c8d66298.js";import{bc as Q,bd as K,F as N,D as R,B as r,T as h,bh as X,b as Y}from"./App.8eefa033.js";import{u as ee,M as te,H as se,F as oe}from"./Header.4fb079ca.js";import{q as ae}from"./constants.70367cb1.js";import{Z as ie,M as ne,A as f,a as y}from"./Zoom.1da668d6.js";import{d as re,S as ce,T as _}from"./TextField.683b535b.js";import"./index.a1233077.js";import"./index.module.325f48be.js";const le="_container_1bzoh_1",de="_portraitContainer_1bzoh_2",ue="_adminModeTag_1bzoh_18",he="_title_1bzoh_25",me="_divider_1bzoh_32",pe="_fieldTitle_1bzoh_40",fe="_fieldTitleIcon_1bzoh_46",ye="_sectionFirst_1bzoh_53",Te="_sectionSecond_1bzoh_54",ge="_sectionThird_1bzoh_55",Ne="_formSection_1bzoh_59",_e="_selectInput_1bzoh_65",Se="_sectionFourth_1bzoh_73",be="_createButton_1bzoh_80",s={container:le,portraitContainer:de,adminModeTag:ue,title:he,divider:me,fieldTitle:pe,fieldTitleIcon:fe,sectionFirst:ye,sectionSecond:Te,sectionThird:ge,formSection:Ne,selectInput:_e,sectionFourth:Se,createButton:be},Ie="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",S="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function De(){const[,m]=Q(),b=ee(),I=K(),[v,C]=o.exports.useState(!1),[x,M]=o.exports.useState(!1),[c,F]=o.exports.useState(""),[i,T]=o.exports.useState(""),[u,g]=o.exports.useState(""),[k,z]=o.exports.useState([]),[A,L]=o.exports.useState([]);o.exports.useEffect(()=>{const t=localStorage.getItem("userData");t&&(JSON.parse(t).email==="admin@flickmatch.in"&&M(!0),C(!0))},[]),o.exports.useEffect(()=>{const t=new AbortController,l=t.signal;return(async()=>{try{const W=await(await fetch(S,{method:"POST",signal:l,headers:{"Content-Type":"application/json"},body:ae})).json();z(W.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{t.abort()}},[]);function w(){m.push({options:{content:e(f,{severity:"success",children:e(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){m.push({options:{content:e(f,{severity:"error",children:a(y,{className:s.alertTitle,children:[c===""?"City Name":i===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function O(){m.push({options:{content:e(f,{severity:"error",children:e(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const j=t=>{(async()=>{try{const n=await(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();L(n.data.city.sportsVenues)}catch(d){d instanceof Error&&d.name==="TypeError"&&console.log(d.message)}})()},q=t=>{F(t.target.value),j(t.target.value)},E=t=>{T(t.target.value)},P=t=>{g(t.target.value)},B={input:{cityId:c,displayName:i,googleMapsLink:u,stripePaymentLinks:[]}},V=()=>{if(c===""||u===""||i==="")D();else{if(A.some(t=>Object.values(t).includes(i)))return O();fetch(Ie,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${c}"
                        displayName: "${i}"
                        googleMapsLink: "${u}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:B.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);w(),T(""),g(""),I("/match-queues")}).catch(t=>{console.log(t)})}},$=()=>a(r,{className:s.sectionFirst,children:[e(h,{className:s.fieldTitle,children:"City Name"}),e(U,{className:s.fieldTitleIcon}),e(re,{className:s.selectInput,children:e(ce,{id:"demo-simple-select-autowidth",value:c,onChange:q,style:{width:"100%"},children:k.map((t,l)=>e(ne,{value:t.cityId,style:{width:"100%"},children:t.cityName},l))})})]}),H=()=>a(r,{className:s.sectionSecond,children:[e(h,{className:s.fieldTitle,children:"Turf Name"}),e(X,{className:s.fieldTitleIcon}),e(_,{fullWidth:!0,value:i,onChange:E,placeholder:"Turf Name",id:"fullWidth"})]}),G=()=>a(r,{className:s.sectionThird,children:[e(h,{className:s.fieldTitle,children:"Google Map Link"}),e(Z,{className:s.fieldTitleIcon}),e(_,{fullWidth:!0,value:u,onChange:P,placeholder:"G-Map Link",id:"fullWidth"})]}),J=()=>e(r,{className:s.sectionFourth,children:e(Y,{variant:"contained",color:"success",className:s.createButton,onClick:V,children:"Create"})});return a(p,{children:[e(te,{title:"Add Turf"}),e("div",{children:e(se,{loggedIn:v})}),x?a(p,{children:[e(ie,{in:!0,style:{transitionDelay:"300ms"},children:a(N,{className:b?s.portraitContainer:s.container,children:[e(R,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),a(r,{children:[e(h,{variant:"h3",className:s.title,children:"Add Turf"}),e(r,{className:s.divider})]}),a(N,{className:s.formSection,children:[$(),H(),G(),J()]})]})}),e(oe,{})]}):e(p,{})]})}export{De as default};

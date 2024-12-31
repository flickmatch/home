import{a6 as G,a as o,A as i,F as y,j as t}from"./loginSlice.5d27ec86.js";import{d as J}from"./AccountBalance.959b95a4.js";import{d as z}from"./CrisisAlertOutlined.f8f5f368.js";import{bM as H,u as Y,e as Z,F as v,Y as Q,B as r,T as m,bU as K,b as R}from"./App.fadaceff.js";import{S as X,q as ee}from"./sweetalert2.esm.all.417845c3.js";import{M as te}from"./Meta.58f9cdf1.js";import{Z as se}from"./Zoom.d8f10aa5.js";import{F as ie,T as I}from"./TextField.87a4bc90.js";import{S as oe}from"./Select.783b8c5d.js";import{M as ae}from"./MenuItem.3c6774c3.js";import{A as T,a as g}from"./AlertTitle.a35f51ff.js";import"./index.b9073c0f.js";import"./index.module.4cdec6c2.js";import"./Input.8ad0f036.js";const ne="_container_16cp1_1",re="_portraitContainer_16cp1_2",ce="_adminModeTag_16cp1_23",le="_title_16cp1_30",de="_divider_16cp1_38",pe="_fieldTitle_16cp1_46",ue="_fieldTitleIcon_16cp1_52",me="_sectionFirst_16cp1_59",fe="_sectionSecond_16cp1_60",he="_sectionThird_16cp1_61",ye="_formSection_16cp1_65",Te="_selectInput_16cp1_71",ge="_sectionFourth_16cp1_79",Ne="_createButton_16cp1_86",s={container:ne,portraitContainer:re,adminModeTag:ce,title:le,divider:de,fieldTitle:pe,fieldTitleIcon:ue,sectionFirst:me,sectionSecond:fe,sectionThird:he,formSection:ye,selectInput:Te,sectionFourth:ge,createButton:Ne},_e="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",C="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Oe(){const[,f]=H(),M=Y(),h=Z(),d=G(e=>e),[c,A]=o.exports.useState(""),[a,N]=o.exports.useState(""),[p,_]=o.exports.useState(""),[F,x]=o.exports.useState([]),[w,b]=o.exports.useState([]);o.exports.useEffect(()=>{d.login.isAdmin||X.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{h("/match-queues")})},[d.login.isAdmin,h]),o.exports.useEffect(()=>{const e=new AbortController,u=e.signal;return(async()=>{try{const W=await(await fetch(C,{method:"POST",signal:u,headers:{"Content-Type":"application/json"},body:ee})).json();x(W.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{e.abort()}},[]);function k(){f.push({options:{content:t(T,{severity:"success",children:t(g,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function L(){f.push({options:{content:t(T,{severity:"info",children:i(g,{className:s.alertTitle,children:[c===""?"City Name":a===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function S(e){f.push({options:{content:t(T,{severity:"error",children:t(g,{className:s.alertTitle,children:e})})}})}const q=e=>{(async()=>{try{const n=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();b(n.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},j=e=>{A(e.target.value),q(e.target.value)},O=e=>{N(e.target.value)},P=e=>{_(e.target.value)},B={input:{cityId:c,displayName:a,googleMapsLink:p,stripePaymentLinks:[]}},E=()=>{if(c===""||p===""||a==="")L();else{if(w.some(e=>Object.values(e).includes(a)))return S("Turf already exists!");fetch(_e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${c}"
                        displayName: "${a}"
                        googleMapsLink: "${p}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:B.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);k(),N(""),_(""),h("/match-queues")}).catch(e=>{S(e.message),console.log(e)})}},V=()=>i(r,{className:s.sectionFirst,children:[t(m,{className:s.fieldTitle,children:"City Name"}),t(J,{className:s.fieldTitleIcon}),t(ie,{className:s.selectInput,children:t(oe,{id:"demo-simple-select-autowidth",value:c,onChange:j,style:{width:"100%"},children:F.map((e,u)=>t(ae,{value:e.cityId,style:{width:"100%"},children:e.cityName},u))})})]}),D=()=>i(r,{className:s.sectionSecond,children:[t(m,{className:s.fieldTitle,children:"Turf Name"}),t(K,{className:s.fieldTitleIcon}),t(I,{fullWidth:!0,value:a,onChange:O,placeholder:"Turf Name",id:"fullWidth"})]}),$=()=>i(r,{className:s.sectionThird,children:[t(m,{className:s.fieldTitle,children:"Google Map Link"}),t(z,{className:s.fieldTitleIcon}),t(I,{fullWidth:!0,value:p,onChange:P,placeholder:"G-Map Link",id:"fullWidth"})]}),U=()=>t(r,{className:s.sectionFourth,children:t(R,{variant:"contained",color:"success",className:s.createButton,onClick:E,children:"Create"})});return i(y,{children:[t(te,{title:"Add Turf"}),d.login.isAdmin&&d.login.isLoggedIn?t(y,{children:t(se,{in:!0,style:{transitionDelay:"300ms"},children:i(v,{className:M?s.portraitContainer:s.container,children:[t(Q,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),i(r,{children:[t(m,{variant:"h3",className:s.title,children:"Add Turf"}),t(r,{className:s.divider})]}),i(v,{className:s.formSection,children:[V(),D(),$(),U()]})]})})}):t(y,{})]})}export{Oe as default};

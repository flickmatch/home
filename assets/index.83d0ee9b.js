import{W as H,a as o,K as i,M as y,j as t}from"./loginSlice.25a195ef.js";import{S as J,d as U}from"./sweetalert2.all.868d18d8.js";import{d as z}from"./CrisisAlertOutlined.2d385039.js";import{bt as Z,u as K,bv as Q,F as v,H as Y,B as r,T as m,bC as R,b as X}from"./App.1c185d5b.js";import{M as ee}from"./Meta.2a371f74.js";import{q as te}from"./constants.bd73d15a.js";import{Z as se}from"./Zoom.0b1444a8.js";import{a as ie,S as oe,T as I}from"./TextField.e3748c9f.js";import{M as ae,A as T,a as g}from"./MenuItem.5489db50.js";import"./index.4db97f65.js";import"./index.module.51bb9f99.js";import"./Input.caebea58.js";const ne="_container_16cp1_1",re="_portraitContainer_16cp1_2",ce="_adminModeTag_16cp1_23",le="_title_16cp1_30",de="_divider_16cp1_38",pe="_fieldTitle_16cp1_46",ue="_fieldTitleIcon_16cp1_52",me="_sectionFirst_16cp1_59",fe="_sectionSecond_16cp1_60",he="_sectionThird_16cp1_61",ye="_formSection_16cp1_65",Te="_selectInput_16cp1_71",ge="_sectionFourth_16cp1_79",Ne="_createButton_16cp1_86",s={container:ne,portraitContainer:re,adminModeTag:ce,title:le,divider:de,fieldTitle:pe,fieldTitleIcon:ue,sectionFirst:me,sectionSecond:fe,sectionThird:he,formSection:ye,selectInput:Te,sectionFourth:ge,createButton:Ne},_e="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",C="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function qe(){const[,f]=Z(),M=K(),h=Q(),d=H(e=>e),[c,x]=o.exports.useState(""),[a,N]=o.exports.useState(""),[p,_]=o.exports.useState(""),[A,b]=o.exports.useState([]),[w,F]=o.exports.useState([]);o.exports.useEffect(()=>{d.login.isAdmin||J.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{h("/match-queues")})},[d.login.isAdmin,h]),o.exports.useEffect(()=>{const e=new AbortController,u=e.signal;return(async()=>{try{const G=await(await fetch(C,{method:"POST",signal:u,headers:{"Content-Type":"application/json"},body:te})).json();b(G.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{e.abort()}},[]);function k(){f.push({options:{content:t(T,{severity:"success",children:t(g,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function L(){f.push({options:{content:t(T,{severity:"info",children:i(g,{className:s.alertTitle,children:[c===""?"City Name":a===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function S(e){f.push({options:{content:t(T,{severity:"error",children:t(g,{className:s.alertTitle,children:e})})}})}const q=e=>{(async()=>{try{const n=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();F(n.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},j=e=>{x(e.target.value),q(e.target.value)},O=e=>{N(e.target.value)},P=e=>{_(e.target.value)},B={input:{cityId:c,displayName:a,googleMapsLink:p,stripePaymentLinks:[]}},E=()=>{if(c===""||p===""||a==="")L();else{if(w.some(e=>Object.values(e).includes(a)))return S("Turf already exists!");fetch(_e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:B.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);k(),N(""),_(""),h("/match-queues")}).catch(e=>{S(e.message),console.log(e)})}},V=()=>i(r,{className:s.sectionFirst,children:[t(m,{className:s.fieldTitle,children:"City Name"}),t(U,{className:s.fieldTitleIcon}),t(ie,{className:s.selectInput,children:t(oe,{id:"demo-simple-select-autowidth",value:c,onChange:j,style:{width:"100%"},children:A.map((e,u)=>t(ae,{value:e.cityId,style:{width:"100%"},children:e.cityName},u))})})]}),D=()=>i(r,{className:s.sectionSecond,children:[t(m,{className:s.fieldTitle,children:"Turf Name"}),t(R,{className:s.fieldTitleIcon}),t(I,{fullWidth:!0,value:a,onChange:O,placeholder:"Turf Name",id:"fullWidth"})]}),$=()=>i(r,{className:s.sectionThird,children:[t(m,{className:s.fieldTitle,children:"Google Map Link"}),t(z,{className:s.fieldTitleIcon}),t(I,{fullWidth:!0,value:p,onChange:P,placeholder:"G-Map Link",id:"fullWidth"})]}),W=()=>t(r,{className:s.sectionFourth,children:t(X,{variant:"contained",color:"success",className:s.createButton,onClick:E,children:"Create"})});return i(y,{children:[t(ee,{title:"Add Turf"}),d.login.isAdmin&&d.login.isLoggedIn?t(y,{children:t(se,{in:!0,style:{transitionDelay:"300ms"},children:i(v,{className:M?s.portraitContainer:s.container,children:[t(Y,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),i(r,{children:[t(m,{variant:"h3",className:s.title,children:"Add Turf"}),t(r,{className:s.divider})]}),i(v,{className:s.formSection,children:[V(),D(),$(),W()]})]})})}):t(y,{})]})}export{qe as default};

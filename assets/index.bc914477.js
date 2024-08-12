import{W as H,a as o,K as i,M as y,j as t}from"./loginSlice.25a195ef.js";import{S as J,d as U}from"./sweetalert2.all.e60855ec.js";import{d as z}from"./CrisisAlertOutlined.d13b2802.js";import{bt as Z,u as K,bu as Q,F as S,H as Y,B as r,T as m,bC as R,b as X}from"./App.d15f168f.js";import{M as ee}from"./Meta.d40c5564.js";import{q as te}from"./constants.70367cb1.js";import{Z as se,M as ie,A as T,a as g}from"./Zoom.bcc0e631.js";import{a as oe,S as ae,T as v}from"./TextField.ece6ad70.js";import"./index.32479335.js";import"./index.module.51bb9f99.js";import"./Input.dd295e01.js";const ne="_container_16cp1_1",re="_portraitContainer_16cp1_2",ce="_adminModeTag_16cp1_23",le="_title_16cp1_30",de="_divider_16cp1_38",pe="_fieldTitle_16cp1_46",ue="_fieldTitleIcon_16cp1_52",me="_sectionFirst_16cp1_59",he="_sectionSecond_16cp1_60",fe="_sectionThird_16cp1_61",ye="_formSection_16cp1_65",Te="_selectInput_16cp1_71",ge="_sectionFourth_16cp1_79",Ne="_createButton_16cp1_86",s={container:ne,portraitContainer:re,adminModeTag:ce,title:le,divider:de,fieldTitle:pe,fieldTitleIcon:ue,sectionFirst:me,sectionSecond:he,sectionThird:fe,formSection:ye,selectInput:Te,sectionFourth:ge,createButton:Ne},_e="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",I="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Le(){const[,h]=Z(),C=K(),f=Q(),d=H(e=>e),[c,M]=o.exports.useState(""),[a,N]=o.exports.useState(""),[p,_]=o.exports.useState(""),[x,A]=o.exports.useState([]),[b,F]=o.exports.useState([]);o.exports.useEffect(()=>{d.login.isAdmin||J.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{f("/match-queues")})},[d.login.isAdmin,f]),o.exports.useEffect(()=>{const e=new AbortController,u=e.signal;return(async()=>{try{const G=await(await fetch(I,{method:"POST",signal:u,headers:{"Content-Type":"application/json"},body:te})).json();A(G.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{e.abort()}},[]);function k(){h.push({options:{content:t(T,{severity:"success",children:t(g,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function w(){h.push({options:{content:t(T,{severity:"error",children:i(g,{className:s.alertTitle,children:[c===""?"City Name":a===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function L(){h.push({options:{content:t(T,{severity:"error",children:t(g,{className:s.alertTitle,children:"Turf already exists!"})})}})}const q=e=>{(async()=>{try{const n=await(await fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();F(n.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},j=e=>{M(e.target.value),q(e.target.value)},O=e=>{N(e.target.value)},E=e=>{_(e.target.value)},P={input:{cityId:c,displayName:a,googleMapsLink:p,stripePaymentLinks:[]}},B=()=>{if(c===""||p===""||a==="")w();else{if(b.some(e=>Object.values(e).includes(a)))return L();fetch(_e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:P.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);k(),N(""),_(""),f("/match-queues")}).catch(e=>{console.log(e)})}},V=()=>i(r,{className:s.sectionFirst,children:[t(m,{className:s.fieldTitle,children:"City Name"}),t(U,{className:s.fieldTitleIcon}),t(oe,{className:s.selectInput,children:t(ae,{id:"demo-simple-select-autowidth",value:c,onChange:j,style:{width:"100%"},children:x.map((e,u)=>t(ie,{value:e.cityId,style:{width:"100%"},children:e.cityName},u))})})]}),D=()=>i(r,{className:s.sectionSecond,children:[t(m,{className:s.fieldTitle,children:"Turf Name"}),t(R,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:a,onChange:O,placeholder:"Turf Name",id:"fullWidth"})]}),$=()=>i(r,{className:s.sectionThird,children:[t(m,{className:s.fieldTitle,children:"Google Map Link"}),t(z,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:p,onChange:E,placeholder:"G-Map Link",id:"fullWidth"})]}),W=()=>t(r,{className:s.sectionFourth,children:t(X,{variant:"contained",color:"success",className:s.createButton,onClick:B,children:"Create"})});return i(y,{children:[t(ee,{title:"Add Turf"}),d.login.isAdmin&&d.login.isLoggedIn?t(y,{children:t(se,{in:!0,style:{transitionDelay:"300ms"},children:i(S,{className:C?s.portraitContainer:s.container,children:[t(Y,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),i(r,{children:[t(m,{variant:"h3",className:s.title,children:"Add Turf"}),t(r,{className:s.divider})]}),i(S,{className:s.formSection,children:[V(),D(),$(),W()]})]})})}):t(y,{})]})}export{Le as default};

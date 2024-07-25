import{W as H,a as n,K as i,M as y,j as t}from"./loginSlice.25a195ef.js";import{S as J,d as U}from"./sweetalert2.all.a31dbee2.js";import{d as z}from"./CrisisAlertOutlined.2bfd248e.js";import{bt as Z,u as K,bu as Q,F as S,H as Y,B as r,T as f,bC as R,b as X}from"./App.1fa3e4fa.js";import{M as ee}from"./Meta.7464b333.js";import{q as te}from"./constants.70367cb1.js";import{Z as se,M as ie,A as T,a as g}from"./Zoom.fa93b438.js";import{a as ne,S as oe,T as b}from"./TextField.3c2f9151.js";import"./index.32bc8b25.js";import"./index.module.51bb9f99.js";import"./Input.4a17da1d.js";const ae="_container_qfnb2_1",re="_portraitContainer_qfnb2_2",ce="_adminModeTag_qfnb2_22",le="_title_qfnb2_29",de="_divider_qfnb2_37",ue="_fieldTitle_qfnb2_45",me="_fieldTitleIcon_qfnb2_51",fe="_sectionFirst_qfnb2_58",pe="_sectionSecond_qfnb2_59",he="_sectionThird_qfnb2_60",ye="_formSection_qfnb2_64",Te="_selectInput_qfnb2_70",ge="_sectionFourth_qfnb2_78",Ne="_createButton_qfnb2_85",s={container:ae,portraitContainer:re,adminModeTag:ce,title:le,divider:de,fieldTitle:ue,fieldTitleIcon:me,sectionFirst:fe,sectionSecond:pe,sectionThird:he,formSection:ye,selectInput:Te,sectionFourth:ge,createButton:Ne},_e="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",v="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function we(){const[,p]=Z(),q=K(),h=Q(),d=H(e=>e),[c,I]=n.exports.useState(""),[o,N]=n.exports.useState(""),[u,_]=n.exports.useState(""),[C,M]=n.exports.useState([]),[x,A]=n.exports.useState([]);n.exports.useEffect(()=>{d.login.isAdmin||J.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{h("/match-queues")})},[d.login.isAdmin,h]),n.exports.useEffect(()=>{const e=new AbortController,m=e.signal;return(async()=>{try{const G=await(await fetch(v,{method:"POST",signal:m,headers:{"Content-Type":"application/json"},body:te})).json();M(G.data.cities)}catch(a){a instanceof Error&&a.name==="TypeError"&&console.log(a.message)}})(),()=>{e.abort()}},[]);function F(){p.push({options:{content:t(T,{severity:"success",children:t(g,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function k(){p.push({options:{content:t(T,{severity:"error",children:i(g,{className:s.alertTitle,children:[c===""?"City Name":o===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function w(){p.push({options:{content:t(T,{severity:"error",children:t(g,{className:s.alertTitle,children:"Turf already exists!"})})}})}const L=e=>{(async()=>{try{const a=await(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();A(a.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},j=e=>{I(e.target.value),L(e.target.value)},O=e=>{N(e.target.value)},E=e=>{_(e.target.value)},P={input:{cityId:c,displayName:o,googleMapsLink:u,stripePaymentLinks:[]}},B=()=>{if(c===""||u===""||o==="")k();else{if(x.some(e=>Object.values(e).includes(o)))return w();fetch(_e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${c}"
                        displayName: "${o}"
                        googleMapsLink: "${u}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:P.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);F(),N(""),_(""),h("/match-queues")}).catch(e=>{console.log(e)})}},V=()=>i(r,{className:s.sectionFirst,children:[t(f,{className:s.fieldTitle,children:"City Name"}),t(U,{className:s.fieldTitleIcon}),t(ne,{className:s.selectInput,children:t(oe,{id:"demo-simple-select-autowidth",value:c,onChange:j,style:{width:"100%"},children:C.map((e,m)=>t(ie,{value:e.cityId,style:{width:"100%"},children:e.cityName},m))})})]}),D=()=>i(r,{className:s.sectionSecond,children:[t(f,{className:s.fieldTitle,children:"Turf Name"}),t(R,{className:s.fieldTitleIcon}),t(b,{fullWidth:!0,value:o,onChange:O,placeholder:"Turf Name",id:"fullWidth"})]}),$=()=>i(r,{className:s.sectionThird,children:[t(f,{className:s.fieldTitle,children:"Google Map Link"}),t(z,{className:s.fieldTitleIcon}),t(b,{fullWidth:!0,value:u,onChange:E,placeholder:"G-Map Link",id:"fullWidth"})]}),W=()=>t(r,{className:s.sectionFourth,children:t(X,{variant:"contained",color:"success",className:s.createButton,onClick:B,children:"Create"})});return i(y,{children:[t(ee,{title:"Add Turf"}),d.login.isAdmin&&d.login.isLoggedIn?t(y,{children:t(se,{in:!0,style:{transitionDelay:"300ms"},children:i(S,{className:q?s.portraitContainer:s.container,children:[t(Y,{label:"admin mode",color:"primary",variant:"outlined",className:s.adminModeTag}),i(r,{children:[t(f,{variant:"h3",className:s.title,children:"Add Turf"}),t(r,{className:s.divider})]}),i(S,{className:s.formSection,children:[V(),D(),$(),W()]})]})})}):t(y,{})]})}export{we as default};

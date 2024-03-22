import{a,E as i,G as J,j as t}from"./index.a525f6e3.js";import{r as R,i as U,a as Q,b9 as K,ba as X,F as T,B as r,T as p,b as Y}from"./App.b02efd4e.js";import{d as Z,a as ee}from"./RoundedCornerOutlined.728c3039.js";import{u as te,M as se,H as ae,F as ie}from"./Header.8ff37b4b.js";import{q as oe}from"./constants.521cb428.js";import{j as ne,S as re,T as N,d as f,e as m}from"./TextField.2881a17f.js";import{M as ce}from"./MenuItem.0ce07c07.js";import"./index.4676830d.js";import"./index.module.325f48be.js";var y={},le=U.exports;Object.defineProperty(y,"__esModule",{value:!0});var S=y.default=void 0,de=le(R()),ue=Q,pe=(0,de.default)((0,ue.jsx)("path",{d:"M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"}),"AccountBalance");S=y.default=pe;const he="_container_hdpic_1",fe="_portraitContainere_hdpic_2",me="_title_hdpic_16",ye="_divider_hdpic_22",ge="_fieldTitle_hdpic_30",_e="_fieldTitleIcon_hdpic_36",Te="_sectionFirst_hdpic_43",Ne="_sectionSecond_hdpic_44",ve="_sectionThird_hdpic_45",Se="_formSection_hdpic_49",Ie="_selectInput_hdpic_55",xe="_sectionFourth_hdpic_63",Ce="_createButton_hdpic_70",s={container:he,portraitContainere:fe,title:me,divider:ye,fieldTitle:ge,fieldTitleIcon:_e,sectionFirst:Te,sectionSecond:Ne,sectionThird:ve,formSection:Se,selectInput:Ie,sectionFourth:xe,createButton:Ce},Fe="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",v="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Oe(){const[,h]=K(),I=te(),x=X(),[C,F]=a.exports.useState(!1),[c,M]=a.exports.useState(""),[o,g]=a.exports.useState(""),[d,_]=a.exports.useState(""),[b,j]=a.exports.useState([]),[k,q]=a.exports.useState([]);a.exports.useEffect(()=>{localStorage.getItem("userData")&&F(!0)},[]),a.exports.useEffect(()=>{const e=new AbortController,u=e.signal;return(async()=>{try{const W=await(await fetch(v,{method:"POST",signal:u,headers:{"Content-Type":"application/json"},body:oe})).json();j(W.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{e.abort()}},[]);function L(){h.push({options:{content:t(f,{severity:"success",children:t(m,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function A(){h.push({options:{content:t(f,{severity:"error",children:i(m,{className:s.alertTitle,children:[c===""?"City Name":o===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function w(){h.push({options:{content:t(f,{severity:"error",children:t(m,{className:s.alertTitle,children:"Turf already exists!"})})}})}const D=e=>{(async()=>{try{const n=await(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();q(n.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},O=e=>{M(e.target.value),D(e.target.value)},B=e=>{g(e.target.value)},E=e=>{_(e.target.value)},P={input:{cityId:c,displayName:o,googleMapsLink:d,stripePaymentLinks:[]}},V=()=>{if(c===""||d===""||o==="")A();else{if(k.some(e=>Object.values(e).includes(o)))return w();fetch(Fe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${c}"
                        displayName: "${o}"
                        googleMapsLink: "${d}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:P.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);L(),g(""),_(""),x("/match-queues")}).catch(e=>{console.log(e)})}},$=()=>i(r,{className:s.sectionFirst,children:[t(p,{className:s.fieldTitle,children:"City Name"}),t(S,{className:s.fieldTitleIcon}),t(ne,{className:s.selectInput,children:t(re,{id:"demo-simple-select-autowidth",value:c,onChange:O,style:{width:"100%"},children:b.map((e,u)=>t(ce,{value:e.cityId,style:{width:"100%"},children:e.cityName},u))})})]}),H=()=>i(r,{className:s.sectionSecond,children:[t(p,{className:s.fieldTitle,children:"Turf Name"}),t(Z,{className:s.fieldTitleIcon}),t(N,{fullWidth:!0,value:o,onChange:B,placeholder:"Turf Name",id:"fullWidth"})]}),z=()=>i(r,{className:s.sectionThird,children:[t(p,{className:s.fieldTitle,children:"Google Map Link"}),t(ee,{className:s.fieldTitleIcon}),t(N,{fullWidth:!0,value:d,onChange:E,placeholder:"G-Map Link",id:"fullWidth"})]}),G=()=>t(r,{className:s.sectionFourth,children:t(Y,{variant:"contained",color:"success",className:s.createButton,onClick:V,children:"Create"})});return i(J,{children:[t(se,{title:"Add Turf"}),t("div",{children:t(ae,{loggedIn:C})}),i(T,{className:I?s.portraitContainere:s.container,children:[i(r,{children:[t(p,{variant:"h3",className:s.title,children:"Add Turf"}),t(r,{className:s.divider})]}),i(T,{className:s.formSection,children:[$(),H(),z(),G()]})]}),t(ie,{})]})}export{Oe as default};

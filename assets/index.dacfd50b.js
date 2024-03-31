import{a as i,E as o,G as W,j as e}from"./index.a525f6e3.js";import{d as J}from"./AccountBalance.a3657b0c.js";import{d as U,a as Z}from"./RoundedCornerOutlined.688823eb.js";import{u as Q,M as z,H as K,F as R}from"./Header.43c826d6.js";import{b9 as X,ba as Y,F as g,B as r,T as u,b as ee}from"./App.79c5c49e.js";import{q as te}from"./constants.521cb428.js";import{Z as se,h as ie,S as oe,T as N,d as m,e as f}from"./TextField.b907b772.js";import{M as ae}from"./MenuItem.38520d54.js";import"./index.module.325f48be.js";import"./index.26acb73d.js";const ne="_container_hdpic_1",re="_portraitContainere_hdpic_2",ce="_title_hdpic_16",le="_divider_hdpic_22",de="_fieldTitle_hdpic_30",pe="_fieldTitleIcon_hdpic_36",ue="_sectionFirst_hdpic_43",he="_sectionSecond_hdpic_44",me="_sectionThird_hdpic_45",fe="_formSection_hdpic_49",ye="_selectInput_hdpic_55",Te="_sectionFourth_hdpic_63",ge="_createButton_hdpic_70",s={container:ne,portraitContainere:re,title:ce,divider:le,fieldTitle:de,fieldTitleIcon:pe,sectionFirst:ue,sectionSecond:he,sectionThird:me,formSection:fe,selectInput:ye,sectionFourth:Te,createButton:ge},Ne="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",_="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Le(){const[,h]=X(),S=Q(),I=Y(),[v,C]=i.exports.useState(!1),[c,x]=i.exports.useState(""),[a,y]=i.exports.useState(""),[d,T]=i.exports.useState(""),[F,k]=i.exports.useState([]),[M,b]=i.exports.useState([]);i.exports.useEffect(()=>{localStorage.getItem("userData")&&C(!0)},[]),i.exports.useEffect(()=>{const t=new AbortController,p=t.signal;return(async()=>{try{const H=await(await fetch(_,{method:"POST",signal:p,headers:{"Content-Type":"application/json"},body:te})).json();k(H.data.cities)}catch(n){n instanceof Error&&n.name==="TypeError"&&console.log(n.message)}})(),()=>{t.abort()}},[]);function L(){h.push({options:{content:e(m,{severity:"success",children:e(f,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function w(){h.push({options:{content:e(m,{severity:"error",children:o(f,{className:s.alertTitle,children:[c===""?"City Name":a===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function A(){h.push({options:{content:e(m,{severity:"error",children:e(f,{className:s.alertTitle,children:"Turf already exists!"})})}})}const j=t=>{(async()=>{try{const n=await(await fetch(_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();b(n.data.city.sportsVenues)}catch(l){l instanceof Error&&l.name==="TypeError"&&console.log(l.message)}})()},q=t=>{x(t.target.value),j(t.target.value)},D=t=>{y(t.target.value)},E=t=>{T(t.target.value)},O={input:{cityId:c,displayName:a,googleMapsLink:d,stripePaymentLinks:[]}},P=()=>{if(c===""||d===""||a==="")w();else{if(M.some(t=>Object.values(t).includes(a)))return A();fetch(Ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${c}"
                        displayName: "${a}"
                        googleMapsLink: "${d}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:O.input})}).then(t=>t.json()).then(t=>{if(t.errors)throw new Error(t.errors[0].message);L(),y(""),T(""),I("/match-queues")}).catch(t=>{console.log(t)})}},B=()=>o(r,{className:s.sectionFirst,children:[e(u,{className:s.fieldTitle,children:"City Name"}),e(J,{className:s.fieldTitleIcon}),e(ie,{className:s.selectInput,children:e(oe,{id:"demo-simple-select-autowidth",value:c,onChange:q,style:{width:"100%"},children:F.map((t,p)=>e(ae,{value:t.cityId,style:{width:"100%"},children:t.cityName},p))})})]}),V=()=>o(r,{className:s.sectionSecond,children:[e(u,{className:s.fieldTitle,children:"Turf Name"}),e(U,{className:s.fieldTitleIcon}),e(N,{fullWidth:!0,value:a,onChange:D,placeholder:"Turf Name",id:"fullWidth"})]}),$=()=>o(r,{className:s.sectionThird,children:[e(u,{className:s.fieldTitle,children:"Google Map Link"}),e(Z,{className:s.fieldTitleIcon}),e(N,{fullWidth:!0,value:d,onChange:E,placeholder:"G-Map Link",id:"fullWidth"})]}),G=()=>e(r,{className:s.sectionFourth,children:e(ee,{variant:"contained",color:"success",className:s.createButton,onClick:P,children:"Create"})});return o(W,{children:[e(z,{title:"Add Turf"}),e("div",{children:e(K,{loggedIn:v})}),e(se,{in:!0,style:{transitionDelay:"300ms"},children:o(g,{className:S?s.portraitContainere:s.container,children:[o(r,{children:[e(u,{variant:"h3",className:s.title,children:"Add Turf"}),e(r,{className:s.divider})]}),o(g,{className:s.formSection,children:[B(),V(),$(),G()]})]})}),e(R,{})]})}export{Le as default};

import{a,E as i,G as f,j as t}from"./index.a525f6e3.js";import{S as Q,d as Y}from"./sweetalert2.all.65186bf0.js";import{d as K}from"./CrisisAlertOutlined.21b94417.js";import{b9 as R,ba as X,F as I,B as l,T as u,be as ee,b as te}from"./App.95a1eaf3.js";import{u as se,M as ae,H as ie,F as oe}from"./Header.332671a2.js";import{q as ne}from"./constants.521cb428.js";import{Z as ce,h as re,S as le,M as de,T as v,d as m,e as y}from"./TextField.0fd7262d.js";import"./index.49340ff2.js";import"./index.module.325f48be.js";const pe="_container_hdpic_1",ue="_portraitContainere_hdpic_2",he="_title_hdpic_16",fe="_divider_hdpic_22",me="_fieldTitle_hdpic_30",ye="_fieldTitleIcon_hdpic_36",ge="_sectionFirst_hdpic_43",Ne="_sectionSecond_hdpic_44",Te="_sectionThird_hdpic_45",_e="_formSection_hdpic_49",Se="_selectInput_hdpic_55",Ie="_sectionFourth_hdpic_63",ve="_createButton_hdpic_70",s={container:pe,portraitContainere:ue,title:he,divider:fe,fieldTitle:me,fieldTitleIcon:ye,sectionFirst:ge,sectionSecond:Ne,sectionThird:Te,formSection:_e,selectInput:Se,sectionFourth:Ie,createButton:ve},xe="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",x="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function qe(){const[,h]=R(),C=se(),g=X(),[b,F]=a.exports.useState(!1),[w,M]=a.exports.useState(!1),[d,k]=a.exports.useState(""),[n,N]=a.exports.useState(""),[p,T]=a.exports.useState(""),[A,L]=a.exports.useState([]),[j,q]=a.exports.useState([]);a.exports.useEffect(()=>{const e=localStorage.getItem("userData");if(e){const c=JSON.parse(e);F(!0),(async()=>{const S=(await(await fetch("https://sheet.best/api/sheets/ba455ca6-e174-4ce1-870b-b2f0ed772878")).json()).map(Z=>Z.EmailId).includes(c.email);M(S),S||Q.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{g("/match-queues")})})()}},[]),a.exports.useEffect(()=>{const e=new AbortController,c=e.signal;return(async()=>{try{const _=await(await fetch(x,{method:"POST",signal:c,headers:{"Content-Type":"application/json"},body:ne})).json();L(_.data.cities)}catch(o){o instanceof Error&&o.name==="TypeError"&&console.log(o.message)}})(),()=>{e.abort()}},[]);function E(){h.push({options:{content:t(m,{severity:"success",children:t(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function O(){h.push({options:{content:t(m,{severity:"error",children:i(y,{className:s.alertTitle,children:[d===""?"City Name":n===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function D(){h.push({options:{content:t(m,{severity:"error",children:t(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const P=e=>{(async()=>{try{const o=await(await fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();q(o.data.city.sportsVenues)}catch(r){r instanceof Error&&r.name==="TypeError"&&console.log(r.message)}})()},B=e=>{k(e.target.value),P(e.target.value)},V=e=>{N(e.target.value)},$=e=>{T(e.target.value)},H={input:{cityId:d,displayName:n,googleMapsLink:p,stripePaymentLinks:[]}},G=()=>{if(d===""||p===""||n==="")O();else{if(j.some(e=>Object.values(e).includes(n)))return D();fetch(xe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
              createSportsVenue(
                    input: {
                        cityId: "${d}"
                        displayName: "${n}"
                        googleMapsLink: "${p}"
                        stripePaymentLinks: []
                    }
                ) {
                  isSuccessful
                  errorMessage
                }
            }`,variables:H.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);E(),N(""),T(""),g("/match-queues")}).catch(e=>{console.log(e)})}},J=()=>i(l,{className:s.sectionFirst,children:[t(u,{className:s.fieldTitle,children:"City Name"}),t(Y,{className:s.fieldTitleIcon}),t(re,{className:s.selectInput,children:t(le,{id:"demo-simple-select-autowidth",value:d,onChange:B,style:{width:"100%"},children:A.map((e,c)=>t(de,{value:e.cityId,style:{width:"100%"},children:e.cityName},c))})})]}),W=()=>i(l,{className:s.sectionSecond,children:[t(u,{className:s.fieldTitle,children:"Turf Name"}),t(ee,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:n,onChange:V,placeholder:"Turf Name",id:"fullWidth"})]}),U=()=>i(l,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Google Map Link"}),t(K,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:p,onChange:$,placeholder:"G-Map Link",id:"fullWidth"})]}),z=()=>t(l,{className:s.sectionFourth,children:t(te,{variant:"contained",color:"success",className:s.createButton,onClick:G,children:"Create"})});return i(f,{children:[t(ae,{title:"Add Turf"}),t("div",{children:t(ie,{loggedIn:b})}),w?i(f,{children:[t(ce,{in:!0,style:{transitionDelay:"300ms"},children:i(I,{className:C?s.portraitContainere:s.container,children:[i(l,{children:[t(u,{variant:"h3",className:s.title,children:"Add Turf"}),t(l,{className:s.divider})]}),i(I,{className:s.formSection,children:[J(),W(),U(),z()]})]})}),t(oe,{})]}):t(f,{})]})}export{qe as default};

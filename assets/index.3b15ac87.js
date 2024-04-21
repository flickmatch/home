import{a,E as o,G as m,j as t}from"./index.a525f6e3.js";import{S as Y,d as K}from"./sweetalert2.all.e4c51aad.js";import{d as R}from"./CrisisAlertOutlined.66e819c5.js";import{b9 as X,ba as ee,F as I,B as l,T as h,be as te,b as se}from"./App.eb55e098.js";import{u as ae,M as oe,H as ie,F as ne}from"./Header.fc255b98.js";import{q as re}from"./constants.70367cb1.js";import{Z as ce,h as le,S as de,M as ue,T as v,d as f,e as g}from"./TextField.1a960bea.js";import"./index.16d744c7.js";import"./index.module.325f48be.js";const he="_container_14hag_1",pe="_portraitContainere_14hag_2",me="_adminModeTag_14hag_18",fe="_title_14hag_25",ge="_divider_14hag_32",ye="_fieldTitle_14hag_40",Te="_fieldTitleIcon_14hag_46",Ne="_sectionFirst_14hag_53",_e="_sectionSecond_14hag_54",Se="_sectionThird_14hag_55",Ie="_formSection_14hag_59",ve="_selectInput_14hag_65",Me="_sectionFourth_14hag_73",xe="_createButton_14hag_80",s={container:he,portraitContainere:pe,adminModeTag:me,title:fe,divider:ge,fieldTitle:ye,fieldTitleIcon:Te,sectionFirst:Ne,sectionSecond:_e,sectionThird:Se,formSection:Ie,selectInput:ve,sectionFourth:Me,createButton:xe},Ce="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",M="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function Oe(){const[,p]=X(),x=ae(),y=ee(),[C,F]=a.exports.useState(!1),[w,k]=a.exports.useState(!1),[d,A]=a.exports.useState(""),[n,T]=a.exports.useState(""),[u,N]=a.exports.useState(""),[b,E]=a.exports.useState([]),[L,j]=a.exports.useState([]),q={}.VITE_MAIL_SHEET;a.exports.useEffect(()=>{const e=localStorage.getItem("userData");if(e){const r=JSON.parse(e);F(!0),(async()=>{const S=(await(await fetch(`${q}`)).json()).map(Q=>Q.EmailId).includes(r.email);k(S),S||Y.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{y("/match-queues")})})()}},[]),a.exports.useEffect(()=>{const e=new AbortController,r=e.signal;return(async()=>{try{const _=await(await fetch(M,{method:"POST",signal:r,headers:{"Content-Type":"application/json"},body:re})).json();E(_.data.cities)}catch(i){i instanceof Error&&i.name==="TypeError"&&console.log(i.message)}})(),()=>{e.abort()}},[]);function O(){p.push({options:{content:t(f,{severity:"success",children:t(g,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){p.push({options:{content:t(f,{severity:"error",children:o(g,{className:s.alertTitle,children:[d===""?"City Name":n===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function P(){p.push({options:{content:t(f,{severity:"error",children:t(g,{className:s.alertTitle,children:"Turf already exists!"})})}})}const V=e=>{(async()=>{try{const i=await(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();j(i.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},B=e=>{A(e.target.value),V(e.target.value)},$=e=>{T(e.target.value)},H=e=>{N(e.target.value)},G={input:{cityId:d,displayName:n,googleMapsLink:u,stripePaymentLinks:[]}},J=()=>{if(d===""||u===""||n==="")D();else{if(L.some(e=>Object.values(e).includes(n)))return P();fetch(Ce,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:G.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);O(),T(""),N(""),y("/match-queues")}).catch(e=>{console.log(e)})}},W=()=>o(l,{className:s.sectionFirst,children:[t(h,{className:s.fieldTitle,children:"City Name"}),t(K,{className:s.fieldTitleIcon}),t(le,{className:s.selectInput,children:t(de,{id:"demo-simple-select-autowidth",value:d,onChange:B,style:{width:"100%"},children:b.map((e,r)=>t(ue,{value:e.cityId,style:{width:"100%"},children:e.cityName},r))})})]}),U=()=>o(l,{className:s.sectionSecond,children:[t(h,{className:s.fieldTitle,children:"Turf Name"}),t(te,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:n,onChange:$,placeholder:"Turf Name",id:"fullWidth"})]}),z=()=>o(l,{className:s.sectionThird,children:[t(h,{className:s.fieldTitle,children:"Google Map Link"}),t(R,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:u,onChange:H,placeholder:"G-Map Link",id:"fullWidth"})]}),Z=()=>t(l,{className:s.sectionFourth,children:t(se,{variant:"contained",color:"success",className:s.createButton,onClick:J,children:"Create"})});return o(m,{children:[t(oe,{title:"Add Turf"}),t("div",{children:t(ie,{loggedIn:C})}),w?o(m,{children:[t(ce,{in:!0,style:{transitionDelay:"300ms"},children:o(I,{className:x?s.portraitContainere:s.container,children:[o(l,{children:[t(h,{variant:"h3",className:s.title,children:"Add Turf"}),t(l,{className:s.divider})]}),o(I,{className:s.formSection,children:[W(),U(),z(),Z()]})]})}),t(ne,{})]}):t(m,{})]})}export{Oe as default};

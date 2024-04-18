import{a as i,E as a,G as m,j as t}from"./index.a525f6e3.js";import{S as Y,d as K}from"./sweetalert2.all.3be27ef2.js";import{d as R}from"./CrisisAlertOutlined.efe674ed.js";import{b9 as X,ba as ee,F as I,B as l,T as u,be as te,b as se}from"./App.ad45130d.js";import{u as ie,M as ae,H as oe,F as ne}from"./Header.a97f0082.js";import{q as ce}from"./constants.70367cb1.js";import{Z as re,h as le,S as de,M as pe,T as v,d as f,e as y}from"./TextField.2eede6f4.js";import"./index.fce22d4a.js";import"./index.module.325f48be.js";const ue="_container_hdpic_1",he="_portraitContainere_hdpic_2",me="_title_hdpic_16",fe="_divider_hdpic_22",ye="_fieldTitle_hdpic_30",Te="_fieldTitleIcon_hdpic_36",ge="_sectionFirst_hdpic_43",Ne="_sectionSecond_hdpic_44",_e="_sectionThird_hdpic_45",Se="_formSection_hdpic_49",Ie="_selectInput_hdpic_55",ve="_sectionFourth_hdpic_63",xe="_createButton_hdpic_70",s={container:ue,portraitContainere:he,title:me,divider:fe,fieldTitle:ye,fieldTitleIcon:Te,sectionFirst:ge,sectionSecond:Ne,sectionThird:_e,formSection:Se,selectInput:Ie,sectionFourth:ve,createButton:xe},Ce="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",x="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";JSON.stringify({query:`query {
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
      }`});function qe(){const[,h]=X(),C=ie(),T=ee(),[F,M]=i.exports.useState(!1),[w,k]=i.exports.useState(!1),[d,A]=i.exports.useState(""),[n,g]=i.exports.useState(""),[p,N]=i.exports.useState(""),[b,E]=i.exports.useState([]),[L,j]=i.exports.useState([]),q={}.VITE_MAIL_SHEET;i.exports.useEffect(()=>{const e=localStorage.getItem("userData");if(e){const c=JSON.parse(e);M(!0),(async()=>{const S=(await(await fetch(`${q}`)).json()).map(Q=>Q.EmailId).includes(c.email);k(S),S||Y.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{T("/match-queues")})})()}},[]),i.exports.useEffect(()=>{const e=new AbortController,c=e.signal;return(async()=>{try{const _=await(await fetch(x,{method:"POST",signal:c,headers:{"Content-Type":"application/json"},body:ce})).json();E(_.data.cities)}catch(o){o instanceof Error&&o.name==="TypeError"&&console.log(o.message)}})(),()=>{e.abort()}},[]);function O(){h.push({options:{content:t(f,{severity:"success",children:t(y,{className:s.alertTitle,children:"Turf Added Successfully"})})}})}function D(){h.push({options:{content:t(f,{severity:"error",children:a(y,{className:s.alertTitle,children:[d===""?"City Name":n===""?"Turf Name":"Google Map field"," ","cannot be empty!"]})})}})}function P(){h.push({options:{content:t(f,{severity:"error",children:t(y,{className:s.alertTitle,children:"Turf already exists!"})})}})}const V=e=>{(async()=>{try{const o=await(await fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
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
            }`})})).json();j(o.data.city.sportsVenues)}catch(r){r instanceof Error&&r.name==="TypeError"&&console.log(r.message)}})()},B=e=>{A(e.target.value),V(e.target.value)},$=e=>{g(e.target.value)},H=e=>{N(e.target.value)},G={input:{cityId:d,displayName:n,googleMapsLink:p,stripePaymentLinks:[]}},J=()=>{if(d===""||p===""||n==="")D();else{if(L.some(e=>Object.values(e).includes(n)))return P();fetch(Ce,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
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
            }`,variables:G.input})}).then(e=>e.json()).then(e=>{if(e.errors)throw new Error(e.errors[0].message);O(),g(""),N(""),T("/match-queues")}).catch(e=>{console.log(e)})}},W=()=>a(l,{className:s.sectionFirst,children:[t(u,{className:s.fieldTitle,children:"City Name"}),t(K,{className:s.fieldTitleIcon}),t(le,{className:s.selectInput,children:t(de,{id:"demo-simple-select-autowidth",value:d,onChange:B,style:{width:"100%"},children:b.map((e,c)=>t(pe,{value:e.cityId,style:{width:"100%"},children:e.cityName},c))})})]}),U=()=>a(l,{className:s.sectionSecond,children:[t(u,{className:s.fieldTitle,children:"Turf Name"}),t(te,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:n,onChange:$,placeholder:"Turf Name",id:"fullWidth"})]}),z=()=>a(l,{className:s.sectionThird,children:[t(u,{className:s.fieldTitle,children:"Google Map Link"}),t(R,{className:s.fieldTitleIcon}),t(v,{fullWidth:!0,value:p,onChange:H,placeholder:"G-Map Link",id:"fullWidth"})]}),Z=()=>t(l,{className:s.sectionFourth,children:t(se,{variant:"contained",color:"success",className:s.createButton,onClick:J,children:"Create"})});return a(m,{children:[t(ae,{title:"Add Turf"}),t("div",{children:t(oe,{loggedIn:F})}),w?a(m,{children:[t(re,{in:!0,style:{transitionDelay:"300ms"},children:a(I,{className:C?s.portraitContainere:s.container,children:[a(l,{children:[t(u,{variant:"h3",className:s.title,children:"Add Turf"}),t(l,{className:s.divider})]}),a(I,{className:s.formSection,children:[W(),U(),z(),Z()]})]})}),t(ne,{})]}):t(m,{})]})}export{qe as default};

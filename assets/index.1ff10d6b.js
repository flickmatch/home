import{a as r,W as he,K as a,M as C,j as e}from"./loginSlice.25a195ef.js";import{r as pe,i as fe,a as ye,u as Te,e as _e,bu as Ne,F as o,f as ge,B as i,T as n,bB as Se,bw as ve,b as Ce}from"./App.f3debd5d.js";import{d as Ie}from"./AccountBalance.9960e6e4.js";import{d as Pe}from"./CrisisAlertOutlined.13ef8260.js";import{l as u}from"./lodash.730ce810.js";import{S as ke,q as xe}from"./sweetalert2.all.8d5dcaba.js";import{M as we}from"./Meta.a92bddaa.js";import{Z as be}from"./Zoom.6f831be1.js";import{T as _,a as E,S as $}from"./TextField.41c06ddb.js";import{a as Me,I as Ae}from"./Switch.4683bbab.js";import{M as j,A as I,a as P}from"./MenuItem.94d6dd7d.js";import{C as De}from"./CurrencyRupeeSharp.93602fce.js";import"./index.e7b920e9.js";import"./index.module.51bb9f99.js";import"./Input.fdb8a26d.js";var x={},Ee=fe.exports;Object.defineProperty(x,"__esModule",{value:!0});var k=x.default=void 0,$e=Ee(pe()),q=ye,je=(0,$e.default)([(0,q.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,q.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");k=x.default=je;const qe="_container_1s8oy_1",Be="_portraitContainer_1s8oy_2",Fe="_adminModeTag_1s8oy_23",Ge="_title_1s8oy_30",Oe="_divider_1s8oy_39",Le="_fieldTitle_1s8oy_47",We="_fieldTitleIcon_1s8oy_53",Ve="_sectionFirst_1s8oy_60",ze="_sectionSecond_1s8oy_61",Re="_sectionThird_1s8oy_62",Ue="_portraitSectionThird_1s8oy_70",He="_formSection_1s8oy_76",Je="_selectInput_1s8oy_82",Ze="_sectionFourth_1s8oy_86",Ke="_createButton_1s8oy_93",Qe="_dateTimePicker_1s8oy_112",Ye="_portaitDateTimePicker_1s8oy_116",Xe="_startTimePicker_1s8oy_121",et="_startEndPicker_1s8oy_122",tt="_selectStartTimeInput_1s8oy_127",st="_switchBtn_1s8oy_134",t={container:qe,portraitContainer:Be,adminModeTag:Fe,title:Ge,divider:Oe,fieldTitle:Le,fieldTitleIcon:We,sectionFirst:Ve,sectionSecond:ze,sectionThird:Re,portraitSectionThird:Ue,formSection:He,selectInput:Je,sectionFourth:Ze,createButton:Ke,dateTimePicker:Qe,portaitDateTimePicker:Ye,startTimePicker:Xe,startEndPicker:et,selectStartTimeInput:tt,switchBtn:st},B="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",F="https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";function _t(){const y=Te(),N=_e(),[,g]=Ne(),[h,G]=r.exports.useState(""),[p,O]=r.exports.useState(""),[L,S]=r.exports.useState(""),[f,W]=r.exports.useState(""),[w,V]=r.exports.useState(""),[d,z]=r.exports.useState(""),[R,U]=r.exports.useState([]),[H,J]=r.exports.useState([]),[b,Z]=r.exports.useState(""),[M,K]=r.exports.useState(""),[A,Q]=r.exports.useState(""),[v,Y]=r.exports.useState(!1),T=he(s=>s);r.exports.useEffect(()=>{localStorage.getItem("userData")&&(T.login.isAdmin||ke.fire({title:"Unauthorized Access",text:"You are not authorized to view this page.",icon:"error"}).then(()=>{N("/match-queues")}))},[T.login.isAdmin,N]),r.exports.useEffect(()=>{const s=new AbortController,l=s.signal;return(async()=>{try{const ue=await(await fetch(F,{method:"POST",signal:l,headers:{"Content-Type":"application/json"},body:xe})).json();U(ue.data.cities)}catch(m){m instanceof Error&&m.name==="TypeError"&&console.log(m.message)}})(),()=>{s.abort()}},[]);const X=s=>{(async()=>{try{const m=await(await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query {
              city(cityId: "${s}") {
                cityId
                cityName
                sportsVenues {
                  sportsVenueId
                  displayName
                  googleMapsLink
                  availableSportsIds
                }      
              }
            }`})})).json();J(m.data.city.sportsVenues)}catch(c){c instanceof Error&&c.name==="TypeError"&&console.log(c.message)}})()},ee=async s=>{G(s.target.value),S("");const c=await(await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`query City {
        city(cityId: ${s.target.value}) {
        cityId
        cityName
        localTimeZone
        countryCode
        iconUrl
    }
}`})})).json();c.data.city.cityId===s.target.value&&V(c.data.city.countryCode),X(s.target.value)},te=s=>{O(s.target.value)};function se(){g.push({options:{content:e(I,{severity:"info",children:a(P,{className:t.alertTitle,children:[h===""?"City name":p===""?"Turf name":f===""?"Charges":"Total Players"," ","cannot be empty!"]})})}})}function ae(){g.push({options:{content:e(I,{severity:"success",children:e(P,{className:t.alertTitle,children:"Game Added Successfully"})})}})}function D(s){g.push({options:{content:e(I,{severity:"error",children:e(P,{className:t.alertTitle,children:s})})}})}const ie={input:{cityId:h,charges:u.exports.parseInt(f),sportsVenueId:p,startTime:b,endTime:M,reservedPlayersCount:u.exports.parseInt(d),waitListPlayersCount:u.exports.parseInt(d)/2}},re=()=>{h===""||p===""||f===""||d===""?se():fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation {
            createEvent(
                  input: {
                      cityId: "${h}"
                      charges: ${u.exports.parseInt(f)},
                      sportsVenueId: "${p}",
                      startTime: "${b+"+0530"}",
                      endTime: "${M+"+0530"}",
                      reservedPlayersCount: ${u.exports.parseInt(d)},
                      waitListPlayersCount: ${u.exports.parseInt(d)/2},
                      credits: ${Number(A)}
                      testGame: ${v}
                  }
              ) {
                isSuccessful
                errorMessage
              }
          }`,variables:ie.input})}).then(s=>s.json()).then(s=>{s.data.createEvent.isSuccessful===!1?D(s.data.createEvent.errorMessage):(ae(),N("/match-queues"))}).catch(s=>{D(s.message),console.log(s)})},oe=()=>a(i,{className:t.sectionFirst,children:[e(n,{className:t.fieldTitle,children:"City Name"}),e(Ie,{className:t.fieldTitleIcon}),e(E,{className:t.selectInput,children:e($,{id:"demo-simple-select-autowidth",value:h,onChange:ee,style:{width:"100%"},children:R.map((s,l)=>e(j,{value:s.cityId,style:{width:"100%"},children:s.cityName},l))})})]}),ne=()=>a(i,{className:t.sectionSecond,children:[e(n,{className:t.fieldTitle,children:"Turf Name"}),e(Se,{className:t.fieldTitleIcon}),e(E,{className:t.selectInput,children:e($,{id:"demo-simple-select-autowidth",value:p,onChange:te,style:{width:"100%"},children:H.map((s,l)=>e(j,{value:s.sportsVenueId,style:{width:"100%"},onClick:()=>S(s.googleMapsLink),children:s.displayName},l))})})]}),ce=()=>a(i,{className:t.sectionThird,children:[e(n,{className:t.fieldTitle,children:"Google Map Link"}),e(Pe,{className:t.fieldTitleIcon}),e(_,{fullWidth:!0,value:L,onChange:s=>S(s.target.value),placeholder:"G-Map Link",id:"fullWidth"})]}),le=()=>a(o,{className:y?t.portraitSectionThird:t.sectionThird,children:[e(i,{className:y?t.portaitDateTimePicker:t.dateTimePicker,children:a(o,{className:t.startTimePicker,children:[a(i,{children:[e(n,{className:t.fieldTitle,children:"Start Time"}),e(k,{className:t.fieldTitleIcon})]}),e("input",{type:"datetime-local",id:"birthdaytime",name:"birthdaytime",className:t.selectStartTimeInput,onChange:s=>Z(s.target.value)})]})}),e(i,{className:y?t.portaitDateTimePicker:t.dateTimePicker,children:a(o,{className:t.startEndPicker,children:[a(i,{children:[e(n,{className:t.fieldTitle,children:"End Time"}),e(k,{className:t.fieldTitleIcon})]}),e("input",{type:"datetime-local",id:"birthdaytime",name:"birthdaytime",className:t.selectStartTimeInput,onChange:s=>K(s.target.value)})]})})]}),de=()=>a(o,{className:t.sectionThird,children:[e(i,{className:t.dateTimePicker,children:a(o,{className:t.startTimePicker,children:[e(i,{children:e(n,{className:t.fieldTitle,children:"Event Charges"})}),e(_,{InputProps:{startAdornment:e(Ae,{position:"start",children:w==="INR"?e(De,{}):w==="USD"?e(ve,{}):null})},fullWidth:!0,value:f,onChange:s=>W(s.target.value),placeholder:"Amount",id:"fullWidth",type:"number"})]})}),e(i,{className:t.dateTimePicker,children:a(o,{className:t.startEndPicker,children:[e(i,{children:e(n,{className:t.fieldTitle,children:"Total Players"})}),e(_,{fullWidth:!0,value:d,onChange:s=>z(s.target.value),placeholder:"Count",id:"fullWidth",type:"number"})]})})]}),me=()=>e(i,{className:t.sectionFourth,children:e(Ce,{variant:"contained",color:"success",className:t.createButton,onClick:re,children:"Add Game"})});return a(C,{children:[e(we,{title:"Add Game"}),T.login.isAdmin&&T.login.isLoggedIn?e(C,{children:e(be,{in:!0,style:{transitionDelay:"300ms"},children:a(o,{className:y?t.portraitContainer:t.container,children:[e(ge,{label:"admin mode",color:"primary",variant:"outlined",className:t.adminModeTag}),a(i,{children:[e(n,{variant:"h3",className:t.title,children:"Add Game"}),e(i,{className:t.divider})]}),a(o,{className:t.formSection,children:[oe(),ne(),ce(),le(),de(),a(o,{className:t.sectionThird,children:[e(i,{className:t.dateTimePicker,children:a(o,{className:t.startTimePicker,children:[e(i,{children:e(n,{className:t.fieldTitle,children:"Game Credits"})}),e(_,{fullWidth:!0,value:A,onChange:s=>Q(s.target.value),placeholder:"Credits",id:"fullWidth",type:"number"})]})}),e(i,{className:t.dateTimePicker,children:a(o,{className:t.startEndPicker,children:[e(i,{children:e(n,{className:t.fieldTitle,children:"Test Game"})}),e(Me,{className:t.switchBtn,checked:v,onChange:()=>Y(!v),color:"default",sx:{"& .MuiSwitch-switchBase.Mui-checked":{color:"#4ce95a"},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:"#4ce95a"}}})]})})]}),e("br",{}),me()]})]})})}):e(C,{})]})}export{_t as default};
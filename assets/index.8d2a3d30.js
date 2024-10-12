import{a as p,W as R,K as i,M as S,j as a}from"./loginSlice.25a195ef.js";import{r as x,i as O,a as T,u as E,B as f,T as d,d as I,b as $}from"./App.1046928a.js";import{M as H}from"./Meta.d3d133c3.js";import{m as U}from"./map.839e9770.js";import{Z as A}from"./Zoom.e98b7b14.js";import"./index.dde1919c.js";import"./index.module.51bb9f99.js";var z={},B=O.exports;Object.defineProperty(z,"__esModule",{value:!0});var w=z.default=void 0,F=B(x()),G=T,M=(0,F.default)((0,G.jsx)("path",{d:"M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z"}),"CurrencyRupee");w=z.default=M;const J="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314",L="_logo_rzs7q_19",K="_heading_rzs7q_24",V="_pageContainer_rzs7q_29",W="_container_rzs7q_34",X="_passCard_rzs7q_44",Z="_portraitPassCard_rzs7q_45",Q="_ribbon_rzs7q_63",Y="_title_rzs7q_112",ee="_subtitle_rzs7q_121",te="_price_rzs7q_126",ae="_currency_rzs7q_134",se="_status_rzs7q_140",oe="_pulse_rzs7q_1",re="_portraitDetails_rzs7q_156",ie="_details_rzs7q_165",ne="_sportsIcon_rzs7q_192",ce="_buyNow_rzs7q_207",le="_footballIcon_rzs7q_232",pe="_cityNameContainer_rzs7q_238",me="_citiesName_rzs7q_244",de="_citiesImg_rzs7q_254",t={logo:L,heading:K,pageContainer:V,container:W,passCard:X,portraitPassCard:Z,ribbon:Q,title:Y,subtitle:ee,price:te,currency:ae,status:se,pulse:oe,portraitDetails:re,details:ie,sportsIcon:ne,buyNow:ce,footballIcon:le,cityNameContainer:pe,citiesName:me,citiesImg:de},ue=(s,n,u,l,y)=>fetch("https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation InitiatePassPayment {
            initiatePassPayment(
                input: {
                    passId: "${s}"
                    email: "${n}",
                    currency: "${y}",
                    location: "${l}"
                }
            ) {
                orderId
                isInitiated
                amount
            }
        }`})}).then(o=>o.json()).then(o=>{if(o.errors)throw new Error(o.errors[0].message);return u(o.data.initiatePassPayment.amount),o.data.initiatePassPayment.orderId}).catch(o=>{console.log(o)});function ye(){return new Promise(s=>{const n=document.createElement("script");n.src="https://checkout.razorpay.com/v1/checkout.js",n.onload=()=>{s(!0)},n.onerror=()=>{s(!1)},document.body.appendChild(n)})}function he(){const s=document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');s&&document.body.removeChild(s)}const _e=(s,n,u,l,y,o,g)=>{async function b(){await ye()||alert("Razorpay SDK failed to load.Please try again later.");const _={key:"rzp_live_ba3UQjRIBXdeXt",amount:s,currency:"INR",name:"Flickmatch",description:"Flickmatch transaction for football match.",image:"https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314",order_id:n,callback_url:"https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/processPassPayment",redirect:!0,prefill:{name:l,email:u,contact:y},notes:{address:"Tower 8 - Flat 1501, Nirvana Country Rd, The Close South, Sector 50, Gurugram, Haryana 122018"},modal:{ondismiss:function(){g(!1),o(""),he(),delete h.Razorpay}},theme:{color:"#4ce95a"}},h=window;new h.Razorpay(_).open()}b()},fe=JSON.stringify({query:`query Passes {
  passes {
  passId
        cityId
        passType
        totalGames
        totalDays
        price
        title
        status
  }
    }`}),D="https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql";function Ce(){const s=E(),[n,u]=p.exports.useState([]),[l,y]=p.exports.useState({name:"",email:"",phoneNumber:""}),[o,g]=p.exports.useState(!0),[b,q]=p.exports.useState(0),[_,h]=p.exports.useState(""),N=R(e=>e);p.exports.useEffect(()=>{const e=localStorage.getItem("userData");if(e){const r=JSON.parse(e);y({name:r.name,email:r.email,phoneNumber:""})}},[]),p.exports.useEffect(()=>{(async()=>{try{const m=(await(await fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},body:fe})).json()).data.passes,c=[];m.forEach(C=>{U.forEach(P=>{if(P.cityId===Number(C.cityId)){const j={cityDetails:P,pass:C};c.push(j)}})}),u(c),console.log(c)}catch(r){r instanceof Error&&r.name==="TypeError"&&console.log(r)}})()},[]);const k=(e,r,v)=>{o?ue(e,l.email,q,r,v).then(m=>{h(m)}).catch(m=>{console.error(m)}):fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`mutation InitiatePassPayment {
            initiatePassPayment(
                input: {
                    passId: "${e}"
                    email: "${l.email}",
                    currency: "INR",
                    location: "${r}"
                }
            ) {
                orderId
                isInitiated
                amount
            }
        }`})}).then(c=>c.json()).then(c=>{if(c.errors)throw new Error(c.errors[0].message)}).catch(c=>{console.log(c)})};return _&&_e(b,_,l.email,l.name,l.phoneNumber,h,g),i(S,{children:[a(H,{title:"Game Passes"}),N.login.isAdmin&&N.login.isLoggedIn?a(A,{in:!0,style:{transitionDelay:"300ms"},children:i(f,{className:t.pageContainer,children:[a(d,{variant:"h3",className:t.heading,children:"Flickmatch Pass"}),a(f,{className:t.container,children:n.length>0?n.map((e,r)=>i(S,{children:[i("div",{className:t.cityNameContainer,children:[a(d,{className:t.citiesName,children:e.cityDetails.city},e.cityDetails.cityId),a("img",{className:t.citiesImg,src:e.cityDetails.iconUrl,alt:e.cityDetails.city,height:"40px"})]}),i(f,{className:s?t.portraitPassCard:t.passCard,children:[a("img",{src:J,alt:"logo",className:t.logo}),a(d,{variant:"h3",className:t.title,children:e.pass.title}),i(d,{className:t.subtitle,children:["Pay for ",e.pass.totalGames-2," games, Play"," ",e.pass.totalGames," games"]}),i(d,{className:t.price,children:[a(w,{className:t.currency}),e.pass.price]}),a(d,{className:t.status,children:e.pass.status}),i("ul",{className:s?t.portraitDetails:t.details,children:[i("li",{children:[a(I,{className:t.footballIcon}),"Access to all fields"]}),i("li",{children:[a(I,{className:t.footballIcon}),"Join game in single click"]}),i("li",{children:[a(I,{className:t.footballIcon}),"Exclusive member events"]})]}),a(f,{className:t.ribbon,children:e.pass.title==="Unlimited game pass"?a("span",{style:{fontWeight:600},children:"Best Deal"}):i("span",{children:["For ",e.pass.totalDays," Days"]})}),a($,{className:t.buyNow,onClick:()=>k(e.pass.passId,e.cityDetails.city,e.cityDetails.currency),children:"Buy Now"})]},r)]})):null})]})}):null]})}export{Ce as default};

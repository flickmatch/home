import{a as c,K as r,M as m,j as a}from"./loginSlice.25a195ef.js";import{c as u,d,a as _}from"./Root.44428c92.js";import{M as g}from"./Meta.1fb0c37c.js";import{u as h,F as y,T as o,B as f,b as C}from"./App.cac24a1e.js";import{I as T}from"./Input.1337d357.js";import"./index.esm.e197a5e8.js";import"./index.module.51bb9f99.js";import"./index.esm.4a4e9a53.js";import"./ThemeProvider.50971d5c.js";import"./index.9848b02f.js";const I="_parent_pt0ul_11",b="_pageTitle_pt0ul_18",w="_Container_pt0ul_24",B="_primaryHeading_pt0ul_39",H="_secondaryHeading_pt0ul_45",N="_pageTitleVertical_pt0ul_51",v="_portraitContainer_pt0ul_56",x="_emailInput_pt0ul_61",P="_emailInputPotrait_pt0ul_65",E="_submitBtn_pt0ul_69",S="_pointer_pt0ul_1",t={parent:I,pageTitle:b,Container:w,primaryHeading:B,secondaryHeading:H,pageTitleVertical:N,portraitContainer:v,emailInput:x,emailInputPotrait:P,submitBtn:E,pointer:S};function Z(){const n=h(),[i,s]=c.exports.useState(""),l=u(d,"emails");function p(){if(!i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){alert("Please enter a valid email.");return}try{(async()=>{await _(l,{email:i})})(),alert("Thank you for submitting your email. We will notify you soon."),s("")}catch(e){alert("Something went wrong. Please try again later."),console.error("Error:",e)}}return r(m,{children:[a(g,{title:"Coming Soon"}),a("div",{className:t.parent,children:r(y,{className:`${t.Container} ${n?t.portraitContainer:""}`,children:[a(o,{variant:"h3",className:n?t.pageTitleVertical:t.pageTitle,children:"Get Free Games"}),a(o,{variant:"h5",className:t.primaryHeading,children:"Monthly passes and flickmatch rewards coming soon..."}),a(o,{variant:"h6",className:t.secondaryHeading,children:"Sign up to know more."}),r(f,{className:t.innerCard,children:[a(T,{placeholder:"Enter you email to get notified",value:i,onChange:e=>s(e.target.value),className:`${t.emailInput} ${n?t.emailInputPotrait:""}`}),a(C,{className:t.submitBtn,onClick:p,children:"Join the waitlist"})]})]})})]})}export{Z as default};
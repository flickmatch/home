import{a as m,K as o,M as p,j as t}from"./loginSlice.25a195ef.js";import{c as d,d as _,a as u}from"./Root.44428c92.js";import{M as g}from"./Meta.416be8ea.js";import{u as f,F as h,T as r,B as y,b as C}from"./App.60fa5d8e.js";import{I as T}from"./Input.8c30ebd9.js";import"./index.esm.e197a5e8.js";import"./index.module.51bb9f99.js";import"./index.esm.4a4e9a53.js";import"./ThemeProvider.50971d5c.js";import"./index.dc6ce1e3.js";const I="_parent_cafmo_10",b="_pageTitle_cafmo_17",w="_Container_cafmo_23",B="_primaryHeading_cafmo_38",H="_secondaryHeading_cafmo_44",N="_pageTitleVertical_cafmo_50",v="_portraitContainer_cafmo_55",x="_emailInput_cafmo_60",P="_emailInputPotrait_cafmo_64",E="_submitBtn_cafmo_68",S="_pointer_cafmo_1",a={parent:I,pageTitle:b,Container:w,primaryHeading:B,secondaryHeading:H,pageTitleVertical:N,portraitContainer:v,emailInput:x,emailInputPotrait:P,submitBtn:E,pointer:S};function Z(){const n=f(),[i,s]=m.exports.useState(""),l=d(_,"emails");function c(){if(!i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){alert("Please enter a valid email.");return}try{(async()=>{await u(l,{email:i})})(),alert("Thank you for submitting your email. We will notify you soon."),s("")}catch(e){alert("Something went wrong. Please try again later."),console.error("Error:",e)}}return o(p,{children:[t(g,{title:"Coming Soon"}),t("div",{className:a.parent,children:o(h,{className:`${a.Container} ${n?a.portraitContainer:""}`,children:[t(r,{variant:"h3",className:n?a.pageTitleVertical:a.pageTitle,children:"Get Free Games"}),t(r,{variant:"h5",className:a.primaryHeading,children:"Monthly passes and flickmatch rewards coming soon..."}),t(r,{variant:"h6",className:a.secondaryHeading,children:"Sign up to know more."}),o(y,{className:a.innerCard,children:[t(T,{placeholder:"Enter you email to get notified",value:i,onChange:e=>s(e.target.value),className:`${a.emailInput} ${n?a.emailInputPotrait:""}`}),t(C,{className:a.submitBtn,onClick:c,children:"Join the waitlist"})]})]})})]})}export{Z as default};
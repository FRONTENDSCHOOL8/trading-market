import"./tailwind-FG0q2sUH.js";import{C as g}from"./delay-L14dHocY.js";import{g as n,a as h}from"./getNode-pa7syr6m.js";const i=new g("https://suppose-weather.pockethost.io/"),m=n("#prev"),a=h("#tradeMethod > button"),l=n("#fileInput"),v=n("#finish"),y=n("#productTitle"),E=n("#Information"),N=n("#contentName");let s="";async function w({target:t}){a.forEach(e=>{e.style.backgroundColor="",e.style.color=""}),t.style.color="white",t.style.backgroundColor="#373F67",s=t.dataset.trade}let c="";const r=()=>{const t=[...l.files],e=document.getElementById("previewImg");t.length===0?e.style.display="none":(e.style.display="block",c=t[0],t.forEach(f=>{const o=new FileReader;o.readAsDataURL(f),o.onload=function(){e.src=o.result}}))};window.onload=r;let d="",u="",p="";async function k(){const t={title:d,description:u,tradingType:String(s),price:p,isPriceOffer:!0,productImages:c,user:i.authStore.model.id};await i.collection("selling").create(t)}l.addEventListener("change",r);m.addEventListener("click",()=>history.back());a.forEach(t=>{t.addEventListener("click",w)});v.addEventListener("click",k);y.addEventListener("input",t=>{const e=t.target.value;e!==""&&isNaN(e)&&e.length<=24&&(d=e)});E.addEventListener("input",t=>{const e=t.target.value;e!==""&&isNaN(e)&&e.length<=24&&(u=e)});N.addEventListener("input",t=>{const e=t.target.value;e!==""&&isNaN(e)===!1&&e.length<=12&&(p=e)});
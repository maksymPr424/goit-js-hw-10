import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form"),c=document.querySelector('[name="delay"]'),o=document.querySelectorAll('[name="state"]');i.settings({progressBar:!1,timeout:4e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const a=({value:e,delay:t,shouldResolve:r})=>new Promise((n,s)=>{setTimeout(()=>{r?n(`✅ ${e} promise in ${t}ms`):s(`❌ ${e} promise in ${t}ms`)},t)}),u=e=>e.charAt(0).toUpperCase()+e.slice(1),l=e=>{e.preventDefault();const t=o[0].checked?o[0].value:o[1].value,r={value:u(t),delay:Number(c.value),shouldResolve:o[0].checked};m.reset(),a(r).then(s=>{i.success({message:s})}).catch(s=>{i.warning({message:s})})};m.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
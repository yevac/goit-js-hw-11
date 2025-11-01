import{a as f,S as m,i as a}from"./assets/vendor-Bt_EzQve.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="53042587-5c2e345549771b4d4f5e75931",g="https://pixabay.com/api/";async function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes ${t}</p>
          <p>Views ${s}</p>
          <p>Comments ${p}</p>
          <p>Downloads ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async i=>{i.preventDefault();const r=v.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}w(),S();try{const o=await h(r);o.hits.length===0?a.info({title:"Sorry",message:", there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map

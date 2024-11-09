import{a as g,S as p,i as n}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const y="46831416-189b424aaa4e35cb9d06aecea",v="https://pixabay.com/api/";async function f(i="",e=1){const{data:r}=await g(`${v}`,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e}});return r}function u(i){return i.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
        <div class="info-item">
        <h3>Likes</h3>
        <p> ${e.likes}</p>
        </div>
        <div class="info-item">
        <h3>Views</h3>
        <p>  ${e.views}</p>
        </div>
        <div class="info-item">
        <h3>Comments</h3>
        <p> ${e.comments}</p>
        </div>
        <div class="info-item">
        <h3>Downloads</h3>
        <p> ${e.downloads}</p>
        </div>   
        </div>
        
      </li>
    `).join("")}const h=document.querySelector(".form-send-js"),d=document.querySelector(".list-js"),o=document.querySelector(".btn-load"),m=new p(".gallery-item a");h.addEventListener("submit",L);o.addEventListener("click",b);let c=1;async function L(i){i.preventDefault();const e=i.target.elements.search.value.trim();if(!e){n.error({title:"Error",message:"Please enter a search query."});return}c=1,d.innerHTML="";try{const r=await f(e,c);r.hits.length===0?n.info({title:"No results",position:"topRight",backgroundColor:"#ff4d4f",message:"Sorry, there are no images matching your search query. Please, try again!"}):(d.innerHTML=u(r.hits),m.refresh(),r.hits.length<r.totalHits?o.classList.remove("hidden"):o.classList.add("hidden"))}catch{n.error({title:"Error",message:"Failed to fetch images. Try again."})}}async function b(){c+=1,o.disabled=!0;try{const i=h.elements.search.value.trim(),e=await f(i,c);d.insertAdjacentHTML("beforeend",u(e.hits)),m.refresh(),e.hits.length>=e.totalHits&&o.classList.add("hidden");const r=document.querySelector(".gallery-item");if(r){const a=r.getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}}catch{n.error({title:"Error",message:"Failed to load more images. Try again."})}finally{o.disabled=!1}}
//# sourceMappingURL=index.js.map

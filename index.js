import{a as v,S as b,i}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const w="46831416-189b424aaa4e35cb9d06aecea",S="https://pixabay.com/api/";async function f(s="",e=1){const{data:r}=await v(`${S}`,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return r}function h(s){return s.map(e=>`
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
    `).join("")}const m=document.querySelector(".form-send-js"),d=document.querySelector(".list-js"),a=document.querySelector(".btn-load"),y=document.querySelector(".loader"),g=new b(".gallery-item a");m.addEventListener("submit",E);a.addEventListener("click",q);let n=1,u=0;async function E(s){s.preventDefault();const e=s.target.elements.search.value.trim();if(!e){i.error({title:"Error",message:"Please enter a search query."});return}n=1,d.innerHTML="",a.classList.add("hidden"),p();try{const r=await f(e,n);u=Math.ceil(r.totalHits/15),r.hits.length===0?i.info({title:"No results",position:"topRight",backgroundColor:"#ff4d4f",message:"Sorry, there are no images matching your search query. Please, try again!"}):(d.innerHTML=h(r.hits),g.refresh(),n<u?a.classList.remove("hidden"):i.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({title:"Error",message:"Failed to fetch images. Try again."})}finally{L()}}async function q(){n+=1,a.disabled=!0,p();try{const s=m.elements.search.value.trim(),e=await f(s,n);d.insertAdjacentHTML("beforeend",h(e.hits)),g.refresh(),n>=u&&(a.classList.add("hidden"),i.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}));const r=document.querySelector(".gallery-item");if(r){const l=r.getBoundingClientRect().height;window.scrollBy({left:0,top:l*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"Failed to load more images. Try again."})}finally{a.disabled=!1,L()}}function p(){console.log("Показ лоадера"),y.classList.remove("hidden")}function L(){y.classList.add("hidden")}
//# sourceMappingURL=index.js.map

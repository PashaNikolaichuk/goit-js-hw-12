import{a as v,S as b,i}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const w="46831416-189b424aaa4e35cb9d06aecea",S="https://pixabay.com/api/";async function f(o=""){const{data:e}=await v(`${S}`,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}});return e}function h(o){return o.map(e=>`
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
    `).join("")}const m=document.querySelector(".form-send-js"),d=document.querySelector(".list-js"),a=document.querySelector(".btn-load"),y=document.querySelector(".loader"),g=new b(".gallery-item a");m.addEventListener("submit",E);a.addEventListener("click",q);let n=1,u=0;async function E(o){o.preventDefault();const e=o.target.elements.search.value.trim();if(!e){i.error({title:"Error",message:"Please enter a search query."});return}n=1,d.innerHTML="",a.classList.add("hidden"),p();try{const s=await f(e,n);u=Math.ceil(s.totalHits/15),s.hits.length===0?i.info({title:"No results",position:"topRight",backgroundColor:"#ff4d4f",message:"Sorry, there are no images matching your search query. Please, try again!"}):(d.innerHTML=h(s.hits),g.refresh(),n<u?a.classList.remove("hidden"):i.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({title:"Error",message:"Failed to fetch images. Try again."})}finally{L()}}async function q(){n+=1,a.disabled=!0,p();try{const o=m.elements.search.value.trim(),e=await f(o,n);d.insertAdjacentHTML("beforeend",h(e.hits)),g.refresh(),n>=u&&(a.classList.add("hidden"),i.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item");if(s){const l=s.getBoundingClientRect().height;window.scrollBy({left:0,top:l*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"Failed to load more images. Try again."})}finally{a.disabled=!1,L()}}function p(){console.log("Показ лоадера"),y.classList.remove("hidden")}function L(){y.classList.add("hidden")}
//# sourceMappingURL=index.js.map

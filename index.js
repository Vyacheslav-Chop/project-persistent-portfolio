import{A as B,a as y,i as k,S as P}from"./assets/vendor-D1KfZiof.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const u={body:document.body,themeToggleButton:document.querySelector(".toggle-theme-btn"),openModalMenuBtn:document.querySelector(".burger-menu-btn"),modalMenu:document.querySelector(".menu")},S={theme:"theme",themeText:"themeText"},{theme:A,themeText:O}=S;function g(e,t){localStorage.setItem(e,t)}function F(){const e=localStorage.getItem(A);return e||"theme-light"}function I(){const e=localStorage.getItem(O);return e||""}const{modalMenu:n,body:L}=u;function H(){n.classList.remove("is-close"),n.classList.add("is-open"),L.style.overflow="hidden",n.addEventListener("click",q),window.addEventListener("keydown",M)}function m(){n.classList.remove("is-open"),n.classList.add("is-close"),L.style.overflow="",n.removeEventListener("click",q),window.removeEventListener("keydown",M)}function N(){document.querySelectorAll("a, button").forEach(t=>t.blur())}function h(){document.querySelectorAll("a, button").forEach(t=>t.addEventListener("click",N))}function R(e){e.preventDefault();const t=document.querySelector(e.currentTarget.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth"}),e.currentTarget.blur()}function E(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",R)})}const{body:a,openModalMenuBtn:V}=u,{theme:f,themeText:v}=S;function T(){a.classList.contains("theme-light")?(a.classList.replace("theme-light","theme-dark"),g(f,"theme-dark")):(a.classList.replace("theme-dark","theme-light"),g(f,"theme-light"))}function M(e){e.key==="Escape"&&m()}function q(e){const t=e.target.closest(".menu-close-btn"),o=e.target.closest(".menu-nav-link"),c=e.target.closest(".menu-order-link"),r=e.target.closest(".toggle-theme-btn");if(e.target!==e.currentTarget){if(t){m();return}else if(c){m();return}else if(o){m();return}else r&&T();h(),E()}}function D(){V&&(H(),h())}function J(e){const t=e.target.closest("button[data-theme]");if(!t)return;a.classList.remove("text-theme-blue","text-theme-purple","text-theme-red");const o=t.dataset.theme;o==="default"?g(v,""):(a.classList.add(`text-theme-${o}`),g(v,`text-theme-${o}`)),h()}const{themeToggleButton:W,body:d}=u;W.addEventListener("click",T);function G(){const e=F();e?(d.classList.remove("theme-light","theme-dark"),d.classList.add(e)):d.classList.add("theme-light")}function z(){const e=I();e&&d.classList.add(e)}const{openModalMenuBtn:K}=u;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".theme-switcher").forEach(t=>{t.addEventListener("click",J)})});G();z();K.addEventListener("click",D);E();h();document.addEventListener("DOMContentLoaded",()=>{const e=[{title:"Wallet Webservice",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},tablet:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},desktop:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"}},link:"#"},{title:"Green Harvest Online Store",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},tablet:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},desktop:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"}},link:"#"},{title:"English Excellence Website",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},tablet:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},desktop:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"}},link:"#"},{title:"Fruitbox Online Store",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},tablet:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},desktop:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"}},link:"#"},{title:"Vyshyvanka Vibes Landing Page",stack:"React, Tailwind CSS",img:{mobile:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},tablet:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},desktop:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"}},link:"#"},{title:"Energy Flow Webservice",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},tablet:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},desktop:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"}},link:"#"},{title:"Chego Jewelry Website",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},tablet:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},desktop:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"}},link:"#"},{title:"Mimino Website",stack:"HTML, CSS",img:{mobile:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},tablet:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},desktop:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"}},link:"#"},{title:"Power Pulse",stack:"JS, Node.js",img:{mobile:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},tablet:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},desktop:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"}},link:"#"},{title:"Starlight Studio Landing Page",stack:"JS, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},tablet:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},desktop:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"}},link:"#"}];let t=3;function o(){const c=document.querySelector(".projects-list");c.innerHTML="",e.slice(0,t).forEach(i=>{const l=document.createElement("li");l.classList.add("projects-item"),l.innerHTML=`
    <picture>
    <source 
        media="(min-width: 1280px)" 
        srcset="${i.img.desktop["1x"]} 1x, ${i.img.desktop["2x"]} 2x"
    />
    <source 
        media="(min-width: 768px)" 
        srcset="${i.img.tablet["1x"]} 1x, ${i.img.tablet["2x"]} 2x"
    />
    <source 
        media="(max-width: 767px)" 
        srcset="${i.img.mobile["1x"]} 1x, ${i.img.mobile["2x"]} 2x"
    />
    <img 
        class="projects-image"
        src="${i.img.mobile["1x"]}" 
        alt="${i.title}" 
        width="320" 
        height="180"
    />
    </picture>

    <p class="projects-stack">${i.stack}</p>
    <h3 class="projects-name">${i.title.toUpperCase()}</h3>
    <div class="projects-link-wrapper">
    <a
        class="projects-link"
        href="${i.link}"
        target="_blank"
        rel="noopener noreferrer"
    >
        VISIT
        <img
        class="projects-icon"
        src="/img/sprite-svg/icon-projects.svg"
        alt="Arrow icon"
        width="18"
        height="18"
        />
    </a>
</div>
`,c.appendChild(l)});const s=document.querySelector("[data-load-more]");t>=e.length?s.style.display="none":s.style.display="block"}document.querySelector("[data-load-more]").addEventListener("click",()=>{t+=3,o()}),o()});const $=document.querySelector(".faq-list"),_=new B($,{duration:300,showMultiple:!1,openOnInit:[0]});document.addEventListener("click",e=>{$.contains(e.target)||_.closeAll()});async function Z(){try{return(await y.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return k.error({title:"Error",message:"Failed to load reviews from server."}),null}}function U(e){const t=document.getElementById("reviews-list");if(t.innerHTML="",!e||e.length===0){t.innerHTML='<li class="swiper-slide">Not found</li>';return}e.map(({author:o,avatar_url:c,review:r})=>{const s=document.createElement("li");s.className="swiper-slide",s.innerHTML=`
      <div class="review-card">
        <p class="text">"${r}"</p>
        <div class="review-author">
          <img src="${c}" alt="${o}'s avatar" class="avatar">
          <h4 class="author">${o}</h4>
        </div>
      </div>
    `,t.appendChild(s)})}function Y(){new P(".reviews-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function Q(){const e=await Z();U(e),Y()}Q();const C=document.querySelector(".work-together-form"),p=document.querySelector("#user-email"),X=document.querySelector("#user-message"),w=document.querySelector(".email-error");C.addEventListener("submit",ee);function ee(e){e.preventDefault();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,o=p.value.trim(),c=X.value.trim();if(t.test(o))w.classList.add("hidden");else{w.classList.remove("hidden"),w.style.marginBottom="16px",p.classList.add("error"),p.style.color="red",p.style.marginBottom="5px";return}te({email:o,comment:c})}function te(e){y.post("https://portfolio-js.b.goit.study/api/requests",e).then(t=>{oe(t.data.title,t.data.message),C.reset()}).catch(t=>{k.error({title:"Error",timeout:1e4,message:"Something went wrong. Please check your data and try again.",position:"topRight"})})}function oe(e,t){const o=document.createElement("div");o.className="work-together-backdrop",o.innerHTML=`
    <div class="work-together-modal">
      <button class="work-modal-close-btn" type="button">
        <svg class="work-modal-btn-close-icon" width="24" height="24">
          <use href="/img/sprite-svg/icons.svg#x"></use>
        </svg>
      </button>
      <h3 class="work-modal-title text-accent"></h3>
      <p class="work-modal-text"></p>
    </div>
  `,document.body.appendChild(o),document.body.style.overflow="hidden";const c=o.querySelector(".work-modal-title"),r=o.querySelector(".work-modal-text");c.textContent=e,r.textContent=t;const s=o.querySelector(".work-modal-close-btn");function i(){x(o)}function l(b){b.target===o&&x(o)}function j(b){b.key==="Escape"&&(x(o),document.removeEventListener("keydown",j))}s.addEventListener("click",i),o.addEventListener("click",l),document.addEventListener("keydown",j)}function x(e){e.remove(),document.body.style.overflow=""}
//# sourceMappingURL=index.js.map

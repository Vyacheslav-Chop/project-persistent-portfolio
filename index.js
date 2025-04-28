import{A as P,a as L,i as S,S as A}from"./assets/vendor-D1KfZiof.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const h={body:document.body,themeToggleButton:document.querySelector(".toggle-theme-btn"),openModalMenuBtn:document.querySelector(".burger-menu-btn"),modalMenu:document.querySelector(".menu")},E={theme:"theme",themeText:"themeText"},{theme:F,themeText:H}=E;function u(e,t){localStorage.setItem(e,t)}function I(){const e=localStorage.getItem(F);return e||"theme-light"}function N(){const e=localStorage.getItem(H);return e||""}const{modalMenu:n,body:T}=h;function R(){n.classList.remove("is-close"),n.classList.add("is-open"),T.style.overflow="hidden",n.addEventListener("click",C),window.addEventListener("keydown",$)}function d(){n.classList.remove("is-open"),n.classList.add("is-close"),T.style.overflow="",n.removeEventListener("click",C),window.removeEventListener("keydown",$)}function V(){document.querySelectorAll("a, button").forEach(t=>t.blur())}function l(){document.querySelectorAll("a, button").forEach(t=>t.addEventListener("click",V))}function D(e){e.preventDefault();const t=document.querySelector(e.currentTarget.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth"}),e.currentTarget.blur()}function M(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",D)})}const{body:p,openModalMenuBtn:J}=h,{theme:y,themeText:k}=E;function q(){p.classList.contains("theme-light")?(p.classList.replace("theme-light","theme-dark"),u(y,"theme-dark")):(p.classList.replace("theme-dark","theme-light"),u(y,"theme-light"))}function $(e){e.key==="Escape"&&d()}function C(e){const t=e.target.closest(".menu-close-btn"),o=e.target.closest(".menu-nav-link"),c=e.target.closest(".menu-order-link"),r=e.target.closest(".toggle-theme-btn");if(e.target!==e.currentTarget){if(t){d();return}else if(c){d();return}else if(o){d();return}else r&&q();l(),M()}}function W(){J&&(R(),l())}function G(e){const t=e.target.closest("button[data-theme]");if(!t)return;p.classList.remove("text-theme-blue","text-theme-purple","text-theme-red");const o=t.dataset.theme;o==="default"?u(k,""):(p.classList.add(`text-theme-${o}`),u(k,`text-theme-${o}`)),l()}const{themeToggleButton:z,body:g}=h;z.addEventListener("click",q);function K(){const e=I();e?(g.classList.remove("theme-light","theme-dark"),g.classList.add(e)):g.classList.add("theme-light")}function Y(){const e=N();e&&g.classList.add(e)}const{openModalMenuBtn:_}=h;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".theme-switcher").forEach(t=>{t.addEventListener("click",G)})});K();Y();_.addEventListener("click",W);M();l();document.addEventListener("DOMContentLoaded",()=>{const e=[{title:"Wallet Webservice",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},tablet:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},desktop:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"}},link:"#"},{title:"Green Harvest Online Store",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},tablet:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},desktop:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"}},link:"#"},{title:"English Excellence Website",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},tablet:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},desktop:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"}},link:"#"},{title:"Fruitbox Online Store",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},tablet:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},desktop:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"}},link:"#"},{title:"Vyshyvanka Vibes Landing Page",stack:"React, Tailwind CSS",img:{mobile:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},tablet:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},desktop:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"}},link:"#"},{title:"Energy Flow Webservice",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},tablet:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},desktop:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"}},link:"#"},{title:"Chego Jewelry Website",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},tablet:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},desktop:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"}},link:"#"},{title:"Mimino Website",stack:"HTML, CSS",img:{mobile:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},tablet:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},desktop:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"}},link:"#"},{title:"Power Pulse",stack:"JS, Node.js",img:{mobile:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},tablet:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},desktop:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"}},link:"#"},{title:"Starlight Studio Landing Page",stack:"JS, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},tablet:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},desktop:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"}},link:"#"}];let t=3;function o(){const c=document.querySelector(".projects-list");c.innerHTML="",e.slice(0,t).forEach(i=>{const a=document.createElement("li");a.classList.add("projects-item"),a.innerHTML=`
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
`,c.appendChild(a)});const s=document.querySelector("[data-load-more]");t>=e.length?s.style.display="none":s.style.display="block"}document.querySelector("[data-load-more]").addEventListener("click",()=>{t+=3,o()}),o()});const f=document.querySelector(".faq-list"),Z=new P(f,{duration:300,showMultiple:!1,openOnInit:[0]});document.addEventListener("click",e=>{f.contains(e.target)||(Z.closeAll(),l())});f.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const o=t.closest(".ac");o&&o.classList.contains("is-active")&&l()});async function U(){try{return(await L.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return S.error({title:"Error",message:"Failed to load reviews from server."}),null}}function Q(e){const t=document.getElementById("reviews-list");if(t.innerHTML="",!e||e.length===0){t.innerHTML='<li class="swiper-slide">Not found</li>';return}e.map(({author:o,avatar_url:c,review:r})=>{const s=document.createElement("li");s.className="swiper-slide",s.innerHTML=`
      <div class="review-card">
        <p class="text">"${r}"</p>
        <div class="review-author">
          <img src="${c}" alt="${o}'s avatar" class="avatar">
          <h4 class="author">${o}</h4>
        </div>
      </div>
    `,t.appendChild(s)})}function X(){new A(".reviews-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function ee(){const e=await U();Q(e),X()}ee();const B=document.querySelector(".work-together-form"),m=document.querySelector("#user-email"),te=document.querySelector("#user-message"),b=document.querySelector(".email-error");B.addEventListener("submit",oe);function oe(e){e.preventDefault();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,o=m.value.trim(),c=te.value.trim();if(t.test(o))b.classList.add("hidden");else{b.classList.remove("hidden"),b.style.marginBottom="16px",m.classList.add("error"),m.style.color="red",m.style.marginBottom="5px";return}re({email:o,comment:c})}function re(e){L.post("https://portfolio-js.b.goit.study/api/requests",e).then(t=>{se(t.data.title,t.data.message),B.reset()}).catch(t=>{S.error({title:"Error",timeout:1e4,message:"Something went wrong. Please check your data and try again.",position:"topRight"})})}function se(e,t){const o=document.createElement("div");o.className="work-together-backdrop",o.innerHTML=`
    <div class="work-together-modal">
      <button class="work-modal-close-btn" type="button">
        <svg class="work-modal-btn-close-icon" width="24" height="24">
          <use href="/img/sprite-svg/icons.svg#x"></use>
        </svg>
      </button>
      <h3 class="work-modal-title text-accent"></h3>
      <p class="work-modal-text"></p>
    </div>
  `,document.body.appendChild(o),document.body.style.overflow="hidden";const c=o.querySelector(".work-modal-title"),r=o.querySelector(".work-modal-text");c.textContent=e,r.textContent=t;const s=o.querySelector(".work-modal-close-btn");function i(){x(o)}function a(w){w.target===o&&x(o)}function v(w){w.key==="Escape"&&(x(o),document.removeEventListener("keydown",v))}s.addEventListener("click",i),o.addEventListener("click",a),document.addEventListener("keydown",v)}function x(e){e.remove(),document.body.style.overflow=""}const j=document.querySelector(".go-top");j.addEventListener("click",O);window.addEventListener("scroll",ie);function ie(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?j.classList.add("go-top--show"):j.classList.remove("go-top--show")}function O(){window.pageYOffset>0&&(window.scrollBy(0,-15),setTimeout(O,0))}
//# sourceMappingURL=index.js.map

import{i as $,a as q,A as F,S as H}from"./assets/vendor-BBq2h7cd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const p={body:document.body,themeToggleButton:document.querySelector(".toggle-theme-btn"),openModalMenuBtn:document.querySelector(".burger-menu-btn"),modalMenu:document.querySelector(".menu"),form:document.querySelector(".work-together-form"),modalAnswer:document.querySelector(".work-together-modal"),backDropModalAnswer:document.querySelector(".work-together-backdrop")},k={theme:"theme",themeText:"themeText",formData:"formData"};let l={email:"",comment:""};const{theme:N,themeText:R}=k;function h(e,t){localStorage.setItem(e,t)}function J(){const e=localStorage.getItem(N);return e||"theme-light"}function V(){const e=localStorage.getItem(R);return e||""}const{modalMenu:a,body:b,backDropModalAnswer:m}=p;function W(){a.classList.remove("is-close"),a.classList.add("is-open"),b.style.overflow="hidden",a.addEventListener("click",D),window.addEventListener("keydown",x)}function u(){a.classList.remove("is-open"),a.classList.add("is-close"),b.style.overflow="",a.removeEventListener("click",D),window.removeEventListener("keydown",x)}function G(){m.classList.remove("is-close"),m.classList.add("is-open"),b.style.overflow="hidden",m.addEventListener("click",I),window.addEventListener("keydown",x)}function v(){m.classList.remove("is-open"),m.classList.add("is-close"),b.style.overflow="",m.removeEventListener("click",I),window.removeEventListener("keydown",x)}function K(){document.querySelectorAll("a, button").forEach(t=>t.blur())}function c(){document.querySelectorAll("a, button").forEach(t=>t.addEventListener("click",K))}function Y(e){e.preventDefault();const t=document.querySelector(e.currentTarget.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth"}),e.currentTarget.blur()}function C(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",Y)})}function A(e){$.error({message:e,position:"bottomRight",backgroundColor:"#ef4040",messageColor:"#ffffff",maxWidth:"400"})}function _(e){e.innerHTML=""}async function z(e){const{data:t}=await q.post("https://portfolio-js.b.goit.study/api/requests",e);return t}const{modalAnswer:S}=p;function U(e,t){return`
  <button class="work-modal-close-btn" type="button">
      <svg class="work-modal-btn-close-icon" width="24" height="24">
        <use href="/img/sprite-svg/icons.svg#x"></use>
      </svg>
    </button>
<h3 class="work-modal-title text-accent">
      ${e}
    </h3>
    <p class="work-modal-text">
      ${t}
    </p>
`}async function Q(e){if(_(S),!!e)try{const{title:t,message:o}=await z(e);S.innerHTML=U(t,o)}catch{A("Something went wrong!")}}const{body:d,openModalMenuBtn:X,form:g}=p,{theme:E,themeText:T,formData:O}=k;function B(){d.classList.contains("theme-light")?(d.classList.replace("theme-light","theme-dark"),h(E,"theme-dark")):(d.classList.replace("theme-dark","theme-light"),h(E,"theme-light"))}function x(e){e.key==="Escape"&&(u(),v())}function D(e){const t=e.target.closest(".menu-close-btn"),o=e.target.closest(".menu-nav-link"),n=e.target.closest(".menu-order-link"),r=e.target.closest(".toggle-theme-btn");if(e.target!==e.currentTarget){if(t){u();return}else if(n){u();return}else if(o){u();return}else r&&B();c(),C()}}function Z(){X&&(W(),c())}function ee(e){const t=e.target.closest("button[data-theme]");if(!t)return;d.classList.remove("text-theme-blue","text-theme-purple","text-theme-red");const o=t.dataset.theme;o==="default"?h(T,""):(d.classList.add(`text-theme-${o}`),h(T,`text-theme-${o}`)),c()}function te(e){e.target.name==="user-email"?l.email=g.elements["user-email"].value.trim():e.target.name==="user-message"&&(l.comment=g.elements["user-message"].value.trim()),localStorage.setItem(O,JSON.stringify(l))}function oe(e){e.preventDefault();const t=g.elements["user-email"].value.trim(),o=g.elements["user-message"].value.trim();if(l.email=t,l.comment=o,t===""||o===""){A("Something went wrong. Please check your data and try again.");return}localStorage.removeItem(O),Q(l),G(),c(),g.reset()}function I(e){const t=e.target.closest(".work-modal-close-btn");if(e.target===e.currentTarget){v();return}else t&&v();c()}const{themeToggleButton:re,body:w}=p;re.addEventListener("click",B);function se(){const e=J();e?(w.classList.remove("theme-light","theme-dark"),w.classList.add(e)):w.classList.add("theme-light")}function ie(){const e=V();e&&w.classList.add(e)}const{openModalMenuBtn:ne}=p;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".theme-switcher").forEach(t=>{t.addEventListener("click",ee)})});se();ie();ne.addEventListener("click",Z);C();c();document.addEventListener("DOMContentLoaded",()=>{const e=[{title:"Wallet Webservice",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},tablet:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"},desktop:{"1x":"/img/projects/project-wallet.webp","2x":"/img/projects/project-wallet@2x.webp"}},link:"#"},{title:"Green Harvest Online Store",stack:"React, JavaScript, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},tablet:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"},desktop:{"1x":"/img/projects/project-greenharvest.webp","2x":"/img/projects/project-greenharvest@2x.webp"}},link:"#"},{title:"English Excellence Website",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},tablet:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"},desktop:{"1x":"/img/projects/project-english.webp","2x":"/img/projects/project-english@2x.webp"}},link:"#"},{title:"Fruitbox Online Store",stack:"HTML, CSS, JS",img:{mobile:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},tablet:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"},desktop:{"1x":"/img/projects/project-fruitbox.webp","2x":"/img/projects/project-fruitbox@2x.webp"}},link:"#"},{title:"Vyshyvanka Vibes Landing Page",stack:"React, Tailwind CSS",img:{mobile:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},tablet:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"},desktop:{"1x":"/img/projects/project-vyshyvanka.webp","2x":"/img/projects/project-vyshyvanka@2x.webp"}},link:"#"},{title:"Energy Flow Webservice",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},tablet:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"},desktop:{"1x":"/img/projects/project-energyflow.webp","2x":"/img/projects/project-energyflow@2x.webp"}},link:"#"},{title:"Chego Jewelry Website",stack:"React, SCSS",img:{mobile:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},tablet:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"},desktop:{"1x":"/img/projects/project-chego.webp","2x":"/img/projects/project-chego@2x.webp"}},link:"#"},{title:"Mimino Website",stack:"HTML, CSS",img:{mobile:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},tablet:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"},desktop:{"1x":"/img/projects/project-mimino.webp","2x":"/img/projects/project-mimino@2x.webp"}},link:"#"},{title:"Power Pulse",stack:"JS, Node.js",img:{mobile:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},tablet:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"},desktop:{"1x":"/img/projects/project-powerpulse.webp","2x":"/img/projects/project-powerpulse@2x.webp"}},link:"#"},{title:"Starlight Studio Landing Page",stack:"JS, Node.js, Git",img:{mobile:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},tablet:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"},desktop:{"1x":"/img/projects/project-starlight.webp","2x":"/img/projects/project-starlight@2x.webp"}},link:"#"}];let t=3;function o(){const n=document.querySelector(".projects-list");n.innerHTML="",e.slice(0,t).forEach(i=>{const j=document.createElement("li");j.classList.add("projects-item"),j.innerHTML=`
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
    <div class="projects-inner">
        <h3 class="projects-name">${i.title.toUpperCase()}</h3>
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

`,n.appendChild(j)});const s=document.querySelector("[data-load-more]");t>=e.length?s.style.display="none":s.style.display="block"}document.querySelector("[data-load-more]").addEventListener("click",()=>{t+=3,o()}),o()});const L=document.querySelector(".faq-list"),ce=new F(L,{duration:300,showMultiple:!1,openOnInit:[0]});document.addEventListener("click",e=>{L.contains(e.target)||(ce.closeAll(),c())});L.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const o=t.closest(".ac");o&&o.classList.contains("is-active")&&c()});async function le(){try{return(await q.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return $.error({title:"Error",message:"Failed to load reviews from server."}),null}}function ae(e){const t=document.getElementById("reviews-list");if(t.innerHTML="",!e||e.length===0){t.innerHTML='<li class="swiper-slide">Not found</li>';return}e.map(({author:o,avatar_url:n,review:r})=>{const s=document.createElement("li");s.className="swiper-slide",s.innerHTML=`
      <div class="review-card">
        <p class="text">"${r}"</p>
        <div class="review-author">
          <img src="${n}" alt="${o}'s avatar" class="avatar">
          <p class="author">${o}</p>
        </div>
      </div>
    `,t.appendChild(s)})}function me(){new H(".reviews-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function pe(){const e=await le();ae(e),me()}pe();const{form:f}=p,{formData:M}=k;if(localStorage.getItem(M)){const e=JSON.parse(localStorage.getItem(M));e.email&&(f.elements["user-email"].value=e.email),e.comment&&(f.elements["user-message"].value=e.comment)}f.addEventListener("input",te);f.addEventListener("submit",oe);c();const y=document.querySelector(".go-top");y.addEventListener("click",P);window.addEventListener("scroll",de);function de(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?y.classList.add("go-top--show"):y.classList.remove("go-top--show")}function P(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(P,0))}
//# sourceMappingURL=index.js.map

import{u as F,r as s}from"./vendor-react-CdZYeNEq.js";import{j as e}from"./index-C07uKazo.js";import{X as S,e as z,r as R,s as D,l as Y}from"./vendor-icons-K0xaSwY_.js";function H({title:c,description:d,canonicalUrl:g,ogType:l="website"}){const p=F();return s.useEffect(()=>{if(c&&(document.title=c),d){let r=document.querySelector('meta[name="description"]');r||(r=document.createElement("meta"),r.setAttribute("name","description"),document.head.appendChild(r)),r.setAttribute("content",d);let i=document.querySelector('meta[property="og:description"]');i||(i=document.createElement("meta"),i.setAttribute("property","og:description"),document.head.appendChild(i)),i.setAttribute("content",d)}if(c){let r=document.querySelector('meta[property="og:title"]');r||(r=document.createElement("meta"),r.setAttribute("property","og:title"),document.head.appendChild(r)),r.setAttribute("content",c)}let o=document.querySelector('meta[property="og:type"]');o||(o=document.createElement("meta"),o.setAttribute("property","og:type"),document.head.appendChild(o)),o.setAttribute("content",l);const h="https://aadhithyamohanproperties.com";let n=g;if(n?n.startsWith("http")||(n=`${h}${n.startsWith("/")?"":"/"}${n}`):n=`${h}${p.pathname==="/"?"":p.pathname}`,n){let r=document.querySelector('link[rel="canonical"]');r||(r=document.createElement("link"),r.setAttribute("rel","canonical"),document.head.appendChild(r)),r.setAttribute("href",n);let i=document.querySelector('meta[property="og:url"]');i||(i=document.createElement("meta"),i.setAttribute("property","og:url"),document.head.appendChild(i)),i.setAttribute("content",n)}},[c,d,g,l,p.pathname]),null}function I({isOpen:c,onClose:d,posterImage:g,projectTitle:l}){return s.useEffect(()=>{if(!c)return;const p=o=>{o.key==="Escape"&&d()};return document.addEventListener("keydown",p),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",p),document.body.style.overflow=""}},[c,d]),!c||!g?null:e.jsxs("div",{className:"teaser-modal-backdrop",onClick:d,children:[e.jsxs("div",{className:"teaser-modal-dialog",onClick:p=>p.stopPropagation(),children:[e.jsx("button",{className:"teaser-modal-close-btn",onClick:d,"aria-label":"Close poster",children:e.jsx(S,{size:22,strokeWidth:1.8})}),e.jsx("div",{className:"teaser-poster-wrapper",children:e.jsx("img",{src:g,alt:l?`${l} Teaser`:"Upcoming Project Teaser",className:"teaser-poster-img"})})]}),e.jsx("style",{children:`
        .teaser-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: teaserFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .teaser-modal-dialog {
          position: relative;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: teaserScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .teaser-modal-close-btn {
          position: absolute;
          top: -46px;
          right: 0;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10;
        }

        .teaser-modal-close-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: rotate(90deg) scale(1.05);
        }

        .teaser-poster-wrapper {
          width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);
          background: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .teaser-poster-img {
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          display: block;
        }

        @keyframes teaserFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes teaserScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 768px) {
          .teaser-modal-backdrop {
            padding: 16px;
          }
          .teaser-modal-close-btn {
            top: -42px;
            right: 0;
            width: 34px;
            height: 34px;
          }
        }
      `})]})}const b=[{id:"villas",name:"Villas",img:"/images/project/CML/Gallery/Look_1.png",projects:[{id:"crystal-moonlight",name:"Crystal Moonlight",location:"Medavakkam, Chennai",img:"/images/project/CML/Gallery/Look_1.png",url:"/projects/villas/crystal-moonlight-villa-in-medavakkam"},{id:"bay-vista",name:"Bay Vista",location:"ECR, Chennai • Upcoming",img:"/images/project/Bayvista/Luxury Infinity Pool at Sunset.png",teaserPoster:"/images/project/Bayvista/Luxury Infinity Pool at Sunset.png",url:"#bay-vista"},{id:"lakeshore",name:"Lakeshore",location:"ECR, Chennai • Upcoming",img:"/images/project/lakeshore/Lakeside Pavilion Under the Stars.png",teaserPoster:"/images/project/lakeshore/Lakeside Pavilion Under the Stars.png",url:"#lakeshore"}]},{id:"apartments",name:"Apartments",img:"/images/project/pasha-pinnacle/extirior/4 Resized PP 16x9.jpg",projects:[{id:"pasha-pinnacle",name:"Pasha Pinnacle",location:"Royapettah, Chennai",img:"/images/project/pasha-pinnacle/extirior/4 Resized PP 16x9.jpg",url:"/projects/apartments/pasha-pinnacle-luxury-apartment-in-royapettah"}]},{id:"plotted",name:"Plots",img:"/images/project/CMR/4.png",projects:[{id:"cmr-global",name:"CMR Global City",location:"Maduranthakam, Chennai",img:"/images/project/CMR/4.png",url:"/projects/plots/cmr-global-city-villa-plots-in-maduranthakam"},{id:"ashok-nagar",name:"Ashok Nagar",location:"Maduranthakam, Chennai",img:"/images/project/ashok-nagar/cards.webp",url:"/projects/plots/ashok-nagar-premium-plots-in-maduranthakam"}]}];function V({darkText:c=!1}){const[d,g]=s.useState(!1),[l,p]=s.useState(!1),[o,h]=s.useState(null),[n,r]=s.useState(null),[i,y]=s.useState(null),[u,j]=s.useState(!1),[x,E]=s.useState(""),T=b.flatMap(t=>t.projects),P=x.trim()===""?[]:T.filter(t=>t.name.toLowerCase().includes(x.toLowerCase())||t.location&&t.location.toLowerCase().includes(x.toLowerCase()));s.useEffect(()=>{l||(h(null),r(null))},[l]),s.useEffect(()=>{const t=a=>{a.key==="Escape"&&j(!1)};return u?(document.addEventListener("keydown",t),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",t),document.body.style.overflow="",setTimeout(()=>E(""),300)),()=>{document.removeEventListener("keydown",t),document.body.style.overflow=""}},[u]);const[w,f]=s.useState(!1),[M,O]=s.useState(null),[k,U]=s.useState(null);s.useEffect(()=>{let t=window.innerHeight-60;const a=()=>{const m=document.querySelector(".project-hero-section")||document.querySelector(".hero-section")||document.querySelector(".hero")||document.querySelector(".hero-container")||document.querySelector("section:first-of-type");m&&(t=m.offsetHeight)};a();const v=setTimeout(a,400);let N=!1,A=!1;const C=()=>{N||(requestAnimationFrame(()=>{const m=window.scrollY>=t-80;m!==A&&(A=m,g(m)),N=!1}),N=!0)},L=m=>{!m.target.closest(".mega-trigger")&&!m.target.closest(".mega-menu")&&p(!1)};return window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),document.addEventListener("click",L),C(),()=>{clearTimeout(v),window.removeEventListener("scroll",C),window.removeEventListener("resize",a),document.removeEventListener("click",L)}},[]);const $=t=>{O(a=>a===t?null:t)};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`sobha-navbar ${d?"is-scrolled":""} ${l?"mega-open":""} ${w?"mobile-open":""} ${c?"dark-text":""}`,children:e.jsxs("div",{className:"navbar-container",children:[e.jsxs("nav",{className:"nav-left desktop-only",children:[e.jsx("a",{href:"/about-us",className:"nav-link",children:"ABOUT US"}),e.jsxs("div",{className:"nav-link mega-trigger",onClick:t=>{t.stopPropagation(),p(!l)},children:["PROJECTS",e.jsx(z,{size:14,style:{marginLeft:"6px",marginTop:"1px",transition:"transform 0.3s ease",transform:l?"rotate(180deg)":"rotate(0deg)"}})]})]}),e.jsx("a",{href:"/",className:"nav-logo-container",style:{textDecoration:"none"},children:e.jsx("img",{src:u||c&&!d&&!l?"/images/black-logo.png":"/images/white-logo.png",alt:"Aadhithya Mohan Properties",className:"nav-logo-img",style:{height:"44px",width:"auto",objectFit:"contain",transition:"all 0.3s ease"}})}),e.jsxs("nav",{className:"nav-right desktop-only",children:[e.jsx("a",{href:"/career",className:"nav-link",children:"CAREERS"}),e.jsx("a",{href:"/contact-us",className:"nav-link",children:"CONTACT US"}),e.jsx("button",{className:"icon-button",onClick:()=>j(!0),"aria-label":"Open Search",children:e.jsx(R,{size:18,strokeWidth:2})})]}),e.jsx("div",{className:"mobile-menu-trigger-container",children:e.jsx("button",{className:"icon-button mobile-menu-btn",onClick:()=>f(!w),"aria-label":"Toggle navigation menu",children:w?e.jsx(S,{size:24}):e.jsx(D,{size:24})})})]})}),e.jsx("div",{className:`mega-menu ${l?"visible":""}`,onClick:t=>t.stopPropagation(),children:e.jsxs("div",{className:"mega-menu-content",children:[e.jsxs("div",{className:"mega-categories",style:{borderRight:o?"1px solid rgba(0,0,0,0.2)":"none"},children:[e.jsx("div",{className:"mega-column-title",children:"CATEGORIES"}),b.map(t=>e.jsx("div",{className:`mega-category-item ${o&&o.id===t.id?"active":""}`,onMouseEnter:()=>{h(t),r(t.projects[0])},onClick:a=>a.stopPropagation(),children:e.jsx("a",{href:"/projects",children:t.name})},t.id)),e.jsx("div",{className:`mega-category-item ${o&&o.id==="all"?"active":""}`,onMouseEnter:()=>{h({id:"all",name:"All Projects",img:"/images/project/CML/extirior/Views_Scene_1_4k_4.png",projects:b.flatMap(t=>t.projects)}),r(b[0].projects[0])},onClick:t=>t.stopPropagation(),children:e.jsx("a",{href:"/projects",children:"All Projects"})})]}),e.jsx("div",{className:"mega-projects",style:{opacity:o?1:0,visibility:o?"visible":"hidden",transform:o?"translateX(0)":"translateX(-10px)",transition:"opacity 0.45s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s"},children:o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mega-column-title",children:o.name}),o.projects.map(t=>e.jsx("div",{className:`mega-project-item ${(n==null?void 0:n.id)===t.id?"active":""}`,onMouseEnter:()=>r(t),children:e.jsxs("a",{href:t.url||"/projects",onClick:a=>{t.teaserPoster&&(a.preventDefault(),y({image:t.teaserPoster,title:t.name}),p(!1))},children:[e.jsx("div",{className:"mega-project-name",children:t.name}),t.location&&e.jsx("div",{className:"mega-project-location",children:t.location})]})},t.id))]})}),e.jsx("div",{className:"mega-image-container",children:e.jsx("img",{src:n?n.img:o?o.img:b[0].img,alt:"Category Preview",className:"mega-image fade-in-image"},n?n.id:o?o.id:"default")})]})}),e.jsx("div",{className:`mobile-nav-drawer ${w?"is-open":""}`,children:e.jsxs("nav",{className:"mobile-nav-menu",children:[e.jsx("div",{className:"mobile-nav-item-wrapper",children:e.jsx("a",{href:"/about-us",onClick:()=>f(!1),className:"mobile-nav-main-link simple-link",children:"ABOUT US"})}),e.jsxs("div",{className:"mobile-nav-item-wrapper",children:[e.jsxs("div",{className:"mobile-nav-header-row",onClick:()=>$("projects"),children:[e.jsx("span",{className:"mobile-nav-main-link",children:"PROJECTS"}),e.jsx(z,{size:18,className:`mobile-chevron ${M==="projects"?"is-rotated":""}`})]}),e.jsxs("div",{className:`mobile-sub-menu ${M==="projects"?"is-expanded":""}`,children:[b.map(t=>e.jsxs("div",{className:"mobile-category-group",children:[e.jsxs("div",{className:"mobile-category-header",onClick:()=>U(a=>a===t.id?null:t.id),children:[e.jsx("span",{className:`mobile-category-title ${k===t.id?"active":""}`,children:t.name}),e.jsx(z,{size:14,className:`mobile-category-arrow ${k===t.id?"is-rotated":""}`})]}),e.jsx("div",{className:`mobile-project-list ${k===t.id?"is-expanded":""}`,children:t.projects.map(a=>e.jsxs("a",{href:a.url||"/projects",onClick:v=>{a.teaserPoster&&(v.preventDefault(),y({image:a.teaserPoster,title:a.name})),f(!1)},className:"mobile-project-link",children:[e.jsx("div",{className:"mobile-project-name",children:a.name}),a.location&&e.jsx("div",{className:"mobile-project-location",children:a.location})]},a.id))})]},t.id)),e.jsx("a",{href:"/projects",onClick:()=>f(!1),className:"mobile-sub-link mobile-all-projects-link",children:"All Projects"})]})]}),e.jsx("div",{className:"mobile-nav-item-wrapper",children:e.jsx("a",{href:"/career",onClick:()=>f(!1),className:"mobile-nav-main-link simple-link",children:"CAREERS"})}),e.jsx("div",{className:"mobile-nav-item-wrapper",children:e.jsx("a",{href:"/contact-us",onClick:()=>f(!1),className:"mobile-nav-main-link simple-link",children:"CONTACT US"})}),e.jsxs("div",{className:"mobile-social-links",children:[e.jsx("a",{href:"https://www.instagram.com/aadhithyamohanproperties/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"mobile-social-link",children:"Instagram"}),e.jsx("a",{href:"https://in.linkedin.com/in/aadhithya-mohan-properties-0aa242391",target:"_blank",rel:"noopener noreferrer",className:"mobile-social-link",children:"LinkedIn"}),e.jsx("a",{href:"https://www.youtube.com/channel/UC_On0n-j-NRU_Nplc28ELZg",target:"_blank",rel:"noopener noreferrer",className:"mobile-social-link",children:"YouTube"})]})]})}),e.jsxs("div",{className:`search-overlay ${u?"visible":""}`,children:[e.jsx("button",{className:"search-overlay-close",onClick:()=>j(!1),"aria-label":"Close Search",children:e.jsx(S,{size:36,strokeWidth:1.5})}),e.jsxs("div",{className:"search-container",children:[e.jsxs("div",{className:"search-input-wrapper",children:[e.jsx(R,{size:32,className:"search-input-icon"}),e.jsx("input",{type:"text",className:"search-input",placeholder:"Search projects, locations...",value:x,onChange:t=>E(t.target.value),autoFocus:u})]}),e.jsxs("div",{className:"search-results",children:[x.trim()!==""&&P.length===0&&e.jsxs("div",{className:"search-no-results",children:['No projects found for "',x,'"']}),P.map((t,a)=>e.jsxs("a",{href:t.url||"/projects",className:"search-result-item",onClick:v=>{t.teaserPoster&&(v.preventDefault(),y({image:t.teaserPoster,title:t.name})),j(!1)},style:{animationDelay:`${a*.05}s`},children:[e.jsx("div",{className:"search-result-img",children:e.jsx("img",{src:t.img,alt:t.name})}),e.jsxs("div",{className:"search-result-info",children:[e.jsx("h4",{className:"search-result-title",children:t.name}),t.location&&e.jsx("p",{className:"search-result-loc",children:t.location})]}),e.jsx("div",{className:"search-result-action",children:e.jsx(Y,{size:22,className:"search-result-arrow"})})]},t.id))]})]})]}),e.jsx(I,{isOpen:!!i,onClose:()=>y(null),posterImage:i==null?void 0:i.image,projectTitle:i==null?void 0:i.title}),e.jsx("style",{children:`
        .sobha-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          z-index: 99999;
          background: transparent;
          transition: all 0.4s ease;
        }

        .sobha-navbar.mobile-open {
          background: 
            linear-gradient(180deg, rgb(39 39 39 / 92%) 0%, rgb(0 0 0 / 70%) 38%, rgb(0 0 0 / 80%) 50%, rgb(0 0 0 / 95%) 100%), linear-gradient(115deg, rgb(11 11 11) 0%, rgb(14 14 14 / 80%) 35%, rgb(0 0 0 / 92%) 50%, rgb(8 8 8 / 80%) 65%, rgb(33 34 35 / 73%) 100%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.5), 0 12px 35px rgba(0, 0, 0, 0.35) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sobha-navbar.mobile-open .text-logo-wrapper,
        .sobha-navbar.mobile-open .icon-button {
          color: #ffffff !important;
        }

        .sobha-navbar.is-scrolled, .sobha-navbar.mega-open {
          background: 
            linear-gradient(180deg, rgb(39 39 39 / 86%) 0%, rgb(0 0 0 / 41%) 38%, rgb(0 0 0 / 49%) 50%, rgb(0 0 0 / 82%) 100%), linear-gradient(115deg, rgb(11 11 11) 0%, rgb(14 14 14 / 80%) 35%, rgb(0 0 0 / 92%) 50%, rgb(8 8 8 / 80%) 65%, rgb(33 34 35 / 73%) 100%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          // box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.5), 0 12px 35px rgba(0, 0, 0, 0.35) !important;
        }

        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .nav-link,
        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .text-logo-wrapper,
        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .icon-button {
          color: #000000 !important;
        }

        .navbar-container {
          max-width: calc(var(--container-width) + 32px);
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .nav-logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-logo {
          height: 40px;
          transition: all 0.4s ease;
        }

        .nav-left {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center;
        }

        .nav-right {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center; 
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: #ffffffff;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
          position: relative;
          cursor: pointer;
          height: 60px; /* Match header height for perfect y-axis centering */
          display: flex;
          align-items: center;
          letter-spacing: 0.1em;
        }

        .text-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #ffffffff;
          transition: color 0.3s ease;
        }

        .text-logo-monogram-img {
          width: 38px;
          height: 38px;
          background-color: currentColor;
          -webkit-mask-image: url('/images/logo-curser-v2.png');
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-image: url('/images/logo-curser-v2.png');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }

        .text-logo-divider {
          width: 1px;
          height: 34px;
          background-color: currentColor;
          opacity: 0.3;
        }

        .text-logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: var(--font-sans);
          text-transform: uppercase;
        }

        .text-logo-primary {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.25em;
          line-height: 1.2;
        }

        .text-logo-secondary {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.35em;
          opacity: 0.7;
          line-height: 1.2;
          margin-top: 2px;
        }

        .is-scrolled .text-logo-wrapper, .sobha-navbar.mega-open .text-logo-wrapper {
          color: #ffffffff;
        }

        .nav-link:hover {
          color: #b48564 !important;
        }

        .is-scrolled .nav-link, .sobha-navbar.mega-open .nav-link {
          color: #ffffffff;
        }
          

        .icon-button {
          background: none;
          border: none;
          color: #ffffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          height: 60px;
          transition: color 0.3s ease;
        }

        .is-scrolled .icon-button, .sobha-navbar.mega-open .icon-button{
          color: #ffffffff;
        }

        .mobile-menu-trigger-container {
          display: none;
          justify-content: flex-end;
          align-items: center;
        }

        .mobile-menu-btn {
          height: 40px;
          width: 40px;
        }

        .mega-menu {
          position: fixed;
          top: 60px;
          left: 50%;
          width: calc(100% - 80px);
          max-width: 1320px;
          background: url("/images/nav-villa.png") left center / cover no-repeat;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -24px);
          clip-path: inset(0 0 100% 0);
          transition: 
            transform 2.25s cubic-bezier(0.16, 1, 0.3, 1), 
            clip-path 2.75s cubic-bezier(0.16, 1, 0.3, 1), 
            opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1), 
            visibility 1.25s;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-top: none;
          cursor: default;
          z-index: 9999;
          overflow: hidden;
          will-change: transform, clip-path, opacity;
        }

        .mega-menu::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          z-index: 1;
        }

        .mega-menu.visible {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
          clip-path: inset(0 0 0% 0);
        }

        .mega-menu-content {
          width: 100%;
          padding: 0;
          display: grid;
          grid-template-columns: 260px 320px 1fr; /* Categories, Projects, Image */
          gap: 0;
          height: 440px;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
          transform: translateY(12px);
          opacity: 0;
          transition: 
            transform 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, 
            opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
        }

        .mega-menu.visible .mega-menu-content {
          transform: translateY(0);
          opacity: 1;
        }

        .mega-categories {
          display: flex;
          flex-direction: column;
          padding: 28px 24px 28px 40px;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
        }

        .mega-projects {
          display: flex;
          flex-direction: column;
          padding: 28px 30px 28px 30px;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }

        .mega-column-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 500;
          color: #000000ff;
          text-transform: uppercase;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          letter-spacing: 0.08em;
        }

        .mega-projects .mega-column-title {
          padding-left: 0;
        }

        .mega-category-item a {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 500;
          color: #000000ff;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          padding: 6px 0px;
          border-radius: 8px;
          letter-spacing: 0.08em;
        }

        .mega-category-item.active a, .mega-category-item:hover a {
          color: #b48564;
          transform: none;
        }

        .mega-project-item a {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 400;
          color: var(--color-text-dark);
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 6px 0;
          letter-spacing: 0.08em;
        }

        .mega-project-name {
          font-size: 15px;
          font-weight: 400;
          color: inherit;
          text-transform: uppercase;
        }

        .mega-project-location {
        font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 300;
          color: #232323ff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .mega-project-item.active a, .mega-project-item:hover a {
          color: #b48564;
        }

        .mega-project-item.active .mega-project-location, .mega-project-item:hover .mega-project-location {
          /* color: #b48564; */
          opacity: 0.85;
        }

        .mega-image-container {
          width: 100%;
          height: 100%;
          min-height: 100%;
          overflow: hidden;
          background: #f5f5f5;
          margin: 0;
          padding: 0;
        }

        .mega-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .fade-in-image {
          animation: megaImgFade 0.6s ease forwards;
        }

        @keyframes megaImgFade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ── Mobile Drawer Panel (Slides Top-to-Bottom below Sticky Header) ── */
        .mobile-nav-drawer {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          height: calc(100vh - 60px);
          height: calc(100dvh - 60px);
          z-index: 99998;
          background: url("/images/nav-villa.png") center / cover no-repeat;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, visibility 0.4s;
          overflow: hidden;
        }

        .mobile-nav-drawer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          z-index: 1;
        }

        .mobile-nav-drawer.is-open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-menu {
          position: relative;
          z-index: 2;
          flex: 1;
          overflow-y: auto;
          padding: 28px 24px 60px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-nav-item-wrapper {
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          padding-bottom: 16px;
        }

        .mobile-nav-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .mobile-nav-main-link {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.08em;
          display: block;
        }

        .mobile-nav-main-link.simple-link {
          padding-bottom: 0;
        }

        .mobile-chevron {
          color: #000000;
          transition: transform 0.3s ease;
        }

        .mobile-chevron.is-rotated {
          transform: rotate(180deg);
        }

        .mobile-sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-sub-menu.is-expanded {
          max-height: 350px;
          margin-top: 16px;
        }

        .mobile-sub-link {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 500;
          color: #222222;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.08em;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .mobile-sub-link:hover {
          color: #b48564;
        }

        /* ── Nested Mobile Menu Category List styles ── */
        .mobile-category-group {
          margin-bottom: 8px;
        }

        .mobile-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-category-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.08em;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .mobile-category-title.active {
          color: #b48564;
        }

        .mobile-category-arrow {
          transition: transform 0.3s ease;
          color: #444444;
        }

        .mobile-category-arrow.is-rotated {
          transform: rotate(180deg);
        }

        .mobile-project-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 16px;
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.3s ease;
        }

        .mobile-project-list.is-expanded {
          max-height: 300px;
          margin-top: 8px;
        }

        .mobile-project-link {
          font-family: var(--font-heading);
          font-size: 13px;
          color: #333333;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 0;
          display: flex;
          flex-direction: column;
          transition: color 0.3s ease;
        }

        .mobile-project-name {
          font-size: 16px;
          font-weight: 500;
          color: inherit;
        }

        .mobile-project-location {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 300;
          color: #232323;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
        }

        .mobile-project-link:hover {
          color: #b48564;
        }

        .mobile-all-projects-link {
          font-weight: 500;
          margin-top: 12px;
          display: block;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 12px;
          color: #000000;
        }

        /* ── Mobile Social Links ── */
        .mobile-social-links {
          margin-top: auto;
          display: flex;
          gap: 0;
          padding-top: 40px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-social-link {
          font-size: 11px;
          font-weight: 500;
          color: #000000;
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--font-heading);
          letter-spacing: 0.12em;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
          padding: 0 16px;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .mobile-social-link:first-child {
          padding-left: 0;
        }

        .mobile-social-link:last-child {
          border-right: none;
          padding-right: 0;
        }

        .mobile-social-link:hover {
          color: var(--color-gold, #b48564);
        }

        /* â”€â”€ Responsive Queries â”€â”€ */
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-menu-trigger-container {
            display: flex;
          }

          .navbar-container {
            grid-template-columns: auto 1fr;
            padding: 0 24px;
          }

          .nav-logo-container {
            justify-content: flex-start;
          }
          
          .sobha-navbar {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        }

        /* ── Search Overlay ── */
        .search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.98);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(-100%);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, visibility 0.45s;
          overflow-y: auto;
        }

        .search-overlay.visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .search-overlay-close {
          position: absolute;
          top: 40px;
          right: 60px;
          background: transparent;
          border: none;
          color: #111111;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .search-overlay-close:hover {
          transform: rotate(90deg);
        }

        .search-container {
          width: 100%;
          max-width: 900px;
          margin: 120px auto 60px;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          border-bottom: 2px solid #111111;
          padding-bottom: 16px;
          margin-bottom: 60px;
        }

        .search-input-icon {
          color: #b48564;
          margin-right: 24px;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-heading);
          font-size: clamp(32px, 5vw, 48px);
          color: #111111;
        }

        .search-input::placeholder {
          color: rgba(0, 0, 0, 0.15);
        }

        .search-results {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .search-no-results {
          font-family: var(--font-sans);
          font-size: 18px;
          color: #888888;
          text-align: center;
          padding: 40px 0;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .search-overlay.visible .search-result-item {
          animation: fadeUpSearch 0.5s ease forwards;
        }

        .search-result-item:hover {
          border-color: rgba(180, 133, 100, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px) !important;
        }

        .search-result-img {
          width: 100px;
          height: 70px;
          border-radius: 4px;
          overflow: hidden;
          margin-right: 24px;
          flex-shrink: 0;
        }

        .search-result-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .search-result-info {
          flex: 1;
        }

        .search-result-title {
          font-family: var(--font-heading);
          font-size: 24px;
          color: #111111;
          margin: 0 0 4px 0;
          transition: color 0.3s ease;
        }

        .search-result-item:hover .search-result-title {
          color: #b48564;
        }

        .search-result-loc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #888888;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .search-result-action {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111111;
          transition: all 0.3s ease;
        }

        .search-result-item:hover .search-result-action {
          background: #111111;
          color: #ffffff;
          border-color: #111111;
        }

        @keyframes fadeUpSearch {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .search-overlay-close {
            top: 20px;
            right: 20px;
          }
          .search-container {
            margin-top: 80px;
            padding: 0 20px;
          }
          .search-input-icon {
            margin-right: 16px;
          }
          .search-result-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .search-result-img {
            width: 100%;
            height: 160px;
            margin-right: 0;
            margin-bottom: 16px;
          }
          .search-result-action {
            display: none;
          }
        }
      `})]})}function G(){return e.jsxs("footer",{className:"footer-section",id:"contact",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"footer-upper",children:[e.jsxs("div",{className:"footer-col-brand",children:[e.jsx("div",{className:"footer-logo-wrap",children:e.jsx("img",{src:"/images/black-logo.png",alt:"Aadhithya Mohan Properties",className:"footer-logo",style:{height:"54px",width:"auto",objectFit:"contain"}})}),e.jsxs("h3",{className:"footer-tagline",children:["Building spaces.",e.jsx("br",{}),"Enriching lives."]}),e.jsx("p",{className:"footer-desc",children:"Thoughtfully designed spaces in prime locations, enriching lives and creating long term value for generations."})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title",children:"PROJECTS"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx("a",{href:"/projects",children:"Villas"})}),e.jsx("li",{children:e.jsx("a",{href:"/projects",children:"Apartments"})}),e.jsx("li",{children:e.jsx("a",{href:"/projects",children:"Plots"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title",children:"COMPANY"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx("a",{href:"/about-us",children:"About Us"})}),e.jsx("li",{children:e.jsx("a",{href:"/projects",children:"Our Projects"})}),e.jsx("li",{children:e.jsx("a",{href:"/career",children:"Careers"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact-us",children:"Contact Us"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title",children:"SUPPORT"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact-us",children:"Customer Support"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact-us",children:"Enquiries"})})]})]}),e.jsxs("div",{className:"footer-col-subscribe",children:[e.jsx("h4",{className:"footer-col-title",children:"STAY UPDATED"}),e.jsx("p",{className:"subscribe-desc",children:"Subscribe to our newsletter and be the first to know about our latest projects and updates."}),e.jsx("div",{className:"subscribe-form",children:e.jsx("input",{type:"email",placeholder:"Enter your email address",className:"subscribe-input","aria-label":"Email address for newsletter"})}),e.jsxs("div",{className:"footer-socials",children:[e.jsx("a",{href:"https://www.instagram.com/aadhithyamohanproperties/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"Instagram",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("a",{href:"https://www.facebook.com/AADHITHYAMOHANPROPERTIES/",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"Facebook",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.886C10.18 0 9 1.434 9 4.355V8z"})})}),e.jsx("a",{href:"https://in.linkedin.com/in/aadhithya-mohan-properties-0aa242391",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"LinkedIn",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})}),e.jsx("a",{href:"https://youtube.com/@aadhithyamohanpropertiesllp?si=AsuEvq17-lxOs2Hr",target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"YouTube",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]}),e.jsx("div",{className:"follow-us-label",children:"FOLLOW US"})]})]}),e.jsxs("div",{className:"footer-lower",children:[e.jsx("div",{className:"footer-blueprint-container",children:e.jsx("img",{src:"/images/footer-tran.png",alt:"",className:"footer-blueprint","aria-hidden":"true"})}),e.jsx("div",{className:"footer-contact-info",children:e.jsxs("div",{className:"contact-col-touch",children:[e.jsx("h4",{className:"footer-col-title",children:"GET IN TOUCH"}),e.jsxs("a",{href:"tel:+919585044440",className:"contact-value",style:{textDecoration:"none"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon",children:e.jsx("path",{d:"M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"})}),e.jsx("span",{children:"+91 9585044440"})]}),e.jsxs("a",{href:"mailto:info@aadhithyamohanproperties.com",className:"contact-value font-email",style:{textDecoration:"none"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon",children:e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})}),e.jsx("span",{children:"info@aadhithyamohanproperties.com"})]}),e.jsxs("div",{className:"address-value-wrap",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon address-icon",children:e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"})}),e.jsx("p",{className:"address-value",children:"2nd Floor, No: 48/52, Jawaharlal Nehru Salai, opposite to CMBT Flyover, Jai Nagar, Koyambedu, Chennai, Tamil Nadu 600107"})]}),e.jsx("a",{href:"https://www.google.com/maps/place/Aadhithya+Mohan+Properties+LLP/@13.0701342,80.205387,17z/data=!4m6!3m5!1s0x3cd4533a14d0a15:0x4c02f9b06a7bc8e1!8m2!3d13.0701342!4d80.205387!16s%2Fg%2F11wpzvr8tj",target:"_blank",rel:"noopener noreferrer",className:"footer-google-review","aria-label":"Google Reviews",children:e.jsx("img",{src:"/images/google-review.png",alt:"Google Reviews",className:"google-review-img"})})]})})]}),e.jsxs("div",{className:"footer-copyright-row",children:[e.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Aadhithya Mohan Properties. All Rights Reserved."]}),e.jsxs("p",{className:"copyright-design",children:["Designed & Developed by ",e.jsx("a",{href:"https://markvtechdigital.com",target:"_blank",rel:"noopener noreferrer",className:"credits-link",children:"Markvtech"})]})]})]}),e.jsx("style",{children:`
        .footer-section {
          background-color: var(--color-bg-light);
          padding: var(--space-8) 0 0px;

          color: var(--color-text-muted);
          overflow: hidden;
          border-top: 1.5px solid var(--color-gold-accent);
        }

        .footer-upper {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr 2fr;
          gap: var(--space-6);
        }

        .footer-col-brand {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer-logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-name {

          font-size: 13px;
          font-weight: 400;

          color: var(--color-text-dark);
          margin-top: 4px;
        }

        .footer-tagline {

          font-size: 28px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);

        }



        .footer-desc {
          font-size: 15px;
          font-weight: 350px;
          line-height: 1.6;
          color: var(--color-text-dark);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .footer-col-title {
          font-size: 18px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          width: fit-content;
          display: inline-block;
          letter-spacing: 0.04em;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 15px;
          font-weight: 350;
          color: var(--color-text-muted);
          transition: color 0.25s ease, padding-left 0.25s ease;
          letter-spacing: 0;
        }

        .footer-links a:hover {
          color: var(--color-gold-accent);
          padding-left: 4px;
        }

        .footer-col-subscribe {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .subscribe-desc {
          font-size: 15px;
          font-weight: 350px;
          line-height: 1.5;
          color: var(--color-text-muted);
        }

        .subscribe-form {
          width: 100%;
        }

        .subscribe-input {
          width: 100%;
          padding: 12px 16px;
          background: var(--color-bg-light);
          border: 0.8px solid var(--color-border-light);
          border-radius: 6px;
          font-family: inherit;
          font-size: 13px;
          color: var(--color-text-dark);
          outline: none;
          box-shadow: 0 2px 8px rgba(29, 53, 87, 0.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .subscribe-input:focus {
          border-color: var(--color-gold-accent);
          box-shadow: 0 2px 12px rgba(29, 53, 87, 0.12);
        }

        .subscribe-input::placeholder {
          color: var(--color-text-muted-light);
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          margin-top: var(--space-2, 8px);
          align-items: center;
        }

        .social-icon-btn {
          width: auto;
          height: auto;
          border: none;
          background: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          padding: 2px;
          border-radius: 0;
          box-shadow: none;
          transition: color 0.25s ease, transform 0.25s ease;
          text-decoration: none;
        }

        

        .follow-us-label {

          font-size: 10px;
          font-weight: 400;

          color: var(--color-text-dark);
          margin-top: 4px;
        }

        /* â”€â”€ Lower Footer Row â”€â”€ */
        .footer-lower {
          position: relative;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: flex-end;
          margin-top: 48px;
        }

        .footer-blueprint-container {
          position: relative;
          margin-left: -24px;
          margin-bottom: -4px;
          align-self: flex-end;
        }

        .footer-blueprint {
          display: block;
          width: 100%;
          max-width: 540px;
          height: auto;
        }

        .footer-contact-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
          padding-bottom: 60px;
        }

        .contact-col-touch {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-value {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 15px;
          font-weight: 350;
          color: var(--color-text-muted);
          line-height: 1.4;
          transition: color 0.25s ease;
        }

        .contact-value:hover {
          color: var(--color-gold-accent);
        }

        .contact-icon {
          flex-shrink: 0;
          color: var(--color-text-dark, #111111);
          opacity: 0.85;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .contact-value:hover .contact-icon {
          color: var(--color-gold-accent, #b48564);
          opacity: 1;
        }

        .address-value-wrap {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 2px;
        }

        .address-icon {
          margin-top: 4px;
        }

        .address-value {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 0;
        }

        .footer-google-review {
          display: inline-flex;
          align-items: center;
          margin-top: 8px;
          text-decoration: none;
          width: fit-content;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }


        .google-review-img {
          height: 84px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* â”€â”€ Responsive â”€â”€ */
        @media (max-width: 1024px) {
          .footer-upper {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-5);
          }
          .footer-col-brand {
            grid-column: span 2;
          }
          .footer-col-subscribe {
            grid-column: span 2;
            max-width: 450px;
          }
          .footer-lower {
            grid-template-columns: 1fr;
            gap: var(--space-5);
            align-items: flex-start;
          }
          .footer-blueprint-container {
            margin-left: 0;
            order: 2;
          }
          .footer-contact-info {
            order: 1;
            padding-bottom: 0;
          }
        }

        @media (max-width: 640px) {
          .footer-section {
            padding: var(--space-6) 0 0px;
          }
          .footer-upper {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          .footer-col-brand, .footer-col-subscribe {
            grid-column: span 1;
          }
          .footer-tagline {
            font-size: 32px;
          }
          .footer-contact-info {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }
          .contact-col-address {
            align-items: flex-start;
          }
        }

        .footer-copyright-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          padding: 20px 0;
          margin-top: 28px;
        }
        .copyright-text, .copyright-design {
          font-size: 12.5px;
          color: var(--color-text-muted-light);
        }
        .credits-link {
          color: var(--color-text-muted-light);
          text-decoration: underline;
          transition: color 0.25s ease;
        }
        .credits-link:hover {
          color: var(--color-gold-accent);
        }
        @media (max-width: 640px) {
          .footer-copyright-row {
            flex-direction: column;
            gap: 12px;
            text-align: center;
            padding: 20px 0;
            margin-top: var(--space-3);
          }
        }
      `})]})}export{G as F,V as N,H as S,I as T};

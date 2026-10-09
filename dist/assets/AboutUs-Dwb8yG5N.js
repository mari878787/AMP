import{j as e,S as w}from"./index-B_gt9TzF.js";import{r as n,d as E}from"./vendor-react-CdZYeNEq.js";import{S as A,N as z,F as I}from"./Footer-BfGRLyOI.js";import{u as j,g as b}from"./vendor-gsap-jyD3UH3M.js";import{S as d}from"./ScrollReveal-DW8tc3GR.js";import{B as k}from"./Button-C69MvWqX.js";import{A as y,X as N}from"./vendor-icons-K0xaSwY_.js";b.registerPlugin(w,j);function S({legacyYears:i="10+",legacyTitle:a="years of",legacySubtitle:t="INCREDIBLE LEGACY",heading:o="Where Trust Creates Lasting Value",paragraphs:l=["Founded in 2016, Aadhithya Mohan Properties has spent the past decade guided by a simple belief—that the true measure of real estate lies not merely in what is built, but in the trust it earns and the value it creates over time.","What began with residential apartments and thoughtfully planned land communities has evolved into a portfolio of luxury residences, premium land developments, and distinctive residential communities. While the scale and character of our projects have grown, the principles behind them have remained constant: meticulous planning, uncompromising standards, integrity, and a deep respect for craftsmanship.","As we enter our next decade, our ambition remains deliberately focused: to create developments that inspire confidence today and become a source of pride and enduring value for generations to come."],description:c,image:m="/images/about/about-hero.png"}){const p=n.useRef(null),r=n.useRef(null),s=n.useRef(null),h=n.useRef(null),f=n.useRef(null);return j(()=>{if(typeof window<"u"&&window.innerWidth<768||!p.current||!s.current)return;const x=b.timeline({scrollTrigger:{trigger:p.current,start:"top top",end:"+=100%",scrub:.5,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}});x.fromTo(s.current,{width:"100vw",height:"100vh",left:"50%",borderRadius:"0px"},{width:"25vw",height:"72vh",left:"40%",borderRadius:"8px",ease:"none"},0),x.fromTo([h.current,f.current],{opacity:0,scale:.92,filter:"blur(4px)"},{opacity:1,scale:1,filter:"blur(0px)",ease:"none"},0);const v=setTimeout(()=>{w.refresh()},100);return()=>clearTimeout(v)},{scope:p,dependencies:[]}),e.jsxs("section",{ref:p,className:"about-legacy-expand-section",children:[e.jsxs("svg",{className:"legacy-bg-pattern",width:"100%",height:"100%",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"legacyLogoPattern",width:"70",height:"70",patternUnits:"userSpaceOnUse",children:e.jsx("image",{href:"/images/logo-curser-v3.png",x:"21",y:"21",width:"28",height:"28"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#legacyLogoPattern)"})]}),e.jsxs("div",{ref:r,className:"about-legacy-wrapper",children:[e.jsx("div",{ref:h,className:"about-legacy-left",children:e.jsxs("div",{className:"legacy-emblem",children:[e.jsx("span",{className:"legacy-years",children:i}),e.jsxs("div",{className:"legacy-text-block",children:[e.jsx("span",{className:"legacy-label",children:a}),e.jsx("h2",{className:"legacy-subtitle",children:t})]})]})}),e.jsxs("div",{ref:s,className:"about-legacy-img-wrap",children:[e.jsx("img",{src:m,alt:"About Legacy Showcase",className:"about-legacy-img"}),e.jsx("div",{className:"legacy-overlay"})]}),e.jsxs("div",{ref:f,className:"about-legacy-right",children:[o&&e.jsx("h3",{className:"legacy-heading",children:o}),l&&Array.isArray(l)?l.map((x,v)=>e.jsx("p",{className:"body-text",children:x},v)):e.jsx("p",{className:"body-text",children:c})]})]}),e.jsx("style",{children:`
        .about-legacy-expand-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #000000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legacy-bg-pattern {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.035;
          filter: brightness(0);
          pointer-events: none;
          z-index: 1;
        }

        .about-legacy-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
        }

        /* ── LEFT EMBLEM ── */
        .about-legacy-left {
          position: absolute;
          left: 4.5%;
          z-index: 10;
          max-width: clamp(200px, 20vw, 270px);
          pointer-events: none;
          transform-origin: center left;
          will-change: opacity, transform, filter;
          opacity: 0;
        }

        .legacy-emblem {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .legacy-years {
          font-family: var(--font-sans);
          font-size: clamp(70px, 7.5vw, 115px);
          font-weight: 300;
          line-height: 0.9;
          color: #000000;
          letter-spacing: -0.04em;
        }

        .legacy-text-block {
          margin-top: 8px;
        }

        .legacy-label {
          font-family: var(--font-heading, serif);
          font-size: clamp(16px, 1.4vw, 20px);
          font-style: italic;
          color: #666666;
          display: block;
        }

        .legacy-subtitle {
          font-family: var(--font-heading, serif);
          font-size: clamp(18px, 1.8vw, 28px);
          font-weight: 400;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 4px 0 0 0;
          line-height: 1.1;
        }

        /* ── CENTER SCALING IMAGE WRAPPER ── */
        .about-legacy-img-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vh;
          border-radius: 0px;
          overflow: hidden;
          z-index: 5;
          will-change: width, height, border-radius, left;
        }

        .about-legacy-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 0px !important;
        }

        .legacy-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgb(0 0 0 / 27%) 0%, rgba(0, 0, 0, 0.0) 25%, rgb(0 0 0 / 0%) 70%, rgb(255 255 255 / 0%) 100%);
          pointer-events: none;
          z-index: 6;
        }

        /* ── RIGHT EDITORIAL ── */
        .about-legacy-right {
          position: absolute;
          left: 56.5%;
          right: 3.5%;
          z-index: 10;
          max-width: clamp(400px, 39vw, 560px);
          pointer-events: none;
          transform-origin: center right;
          will-change: opacity, transform, filter;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .legacy-heading {
          font-family: var(--font-heading, serif);
          font-size: clamp(25px, 2.2vw, 35px);
          font-weight: 500;
          color: #111111;
          margin: 0 0 16px 0;
          line-height: 1.25;
          letter-spacing: 0.02em;
        }

        .about-legacy-right .body-text {
          font-family: var(--font-sans);
          font-size: clamp(16px, 0.95vw, 16px);
          line-height: 1.66;
          color: #2b2b2b;
          margin: 0 0 18px 0;
          text-align: justify;
          letter-spacing: 0.01em;
        }

        .about-legacy-right .body-text:last-child {
          margin-bottom: 0;
        }

        /* ── RESPONSIVE MOBILE OVERRIDES ── */
        @media (max-width: 768px) {
          .about-legacy-expand-section {
            min-height: auto;
            padding: 30px 0 50px 0;
            overflow: visible;
          }
          .about-legacy-wrapper {
            height: auto;
            flex-direction: column;
            gap: 24px;
            position: relative;
          }
          .about-legacy-img-wrap {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            height: clamp(280px, 45vh, 400px) !important;
            border-radius: 8px !important;
            order: 1;
          }
          .about-legacy-left {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            max-width: 100% !important;
            pointer-events: auto !important;
            text-align: center;
            align-items: center;
            padding: 30px 0 0;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            order: 2;
          }
          .legacy-emblem {
            align-items: center;
          }
          .legacy-years {
            font-size: clamp(64px, 16vw, 84px);
            line-height: 1;
          }
          .legacy-label {
            font-size: 17px;
          }
          .legacy-subtitle {
            font-size: 22px;
          }
          .about-legacy-right {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            max-width: 540px !important;
            margin: 0 auto;
            pointer-events: auto !important;
            text-align: center;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            order: 3;
            padding: 0 16px;
          }
          .legacy-heading {
            font-size: 22px;
            text-align: center;
            margin-bottom: 14px;
          }
          .about-legacy-right .body-text {
            font-size: 15px;
            line-height: 1.65;
            text-align: center;
            margin-bottom: 12px;
          }
        }
      `})]})}const R={vision:{tag:"OUR VISION",quote:"Among the Very Few",subDesc:"Our vision is to earn our place among Chennai's most respected real estate developers, recognised not by the number of projects we undertake, but by the confidence our name inspires. We do not aspire to be the largest. We aspire to be among the very few whose name on a development is reason enough to look no further.",buttonText:"EXPLORE PROJECTS",buttonLink:"/projects"},mission:{tag:"OUR MISSION",quote:"To Make Every Investment a Source of Lasting Pride.",subDesc:"Our mission is to create places people are proud to own, families are proud to call home, and future generations are proud to inherit. Every decision we make reflects our commitment to integrity, thoughtful planning, exceptional quality, and responsible execution—creating developments that stand the test of time and become enduring assets for the people who invest in them.",buttonText:"EXPLORE PROJECTS",buttonLink:"/projects"}};function T(){const[i,a]=n.useState("vision"),t=R[i];return e.jsxs("section",{className:"about-quote-statement-section",children:[e.jsxs("div",{className:"container quote-statement-container",children:[e.jsx(d,{animation:"fadeUp",className:"quote-header-row",children:e.jsxs("div",{className:"quote-pipe-switcher",children:[e.jsx("button",{className:`quote-pipe-btn ${i==="vision"?"is-active":""}`,onClick:()=>a("vision"),children:"OUR VISION"}),e.jsx("span",{className:"quote-pipe-divider",children:"|"}),e.jsx("button",{className:`quote-pipe-btn ${i==="mission"?"is-active":""}`,onClick:()=>a("mission"),children:"OUR MISSION"})]})}),e.jsxs("div",{className:"quote-split-grid",children:[e.jsx(d,{animation:"fadeUp",delay:.1,className:"quote-left-col",children:e.jsx("h2",{className:"quote-headline",children:t.quote},i)}),e.jsx(d,{animation:"fadeUp",delay:.2,className:"quote-right-col",children:e.jsxs("div",{className:"quote-right-content",children:[e.jsx("p",{className:"body-text",style:{margin:"0 0 28px 0"},children:t.subDesc}),e.jsx(k,{href:t.buttonLink,theme:"dark",children:t.buttonText})]},`desc-${i}`)})]})]}),e.jsx("style",{children:`
        .about-quote-statement-section {
          background-color: var(--color-white);
          padding: 0px 0 30px;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .quote-statement-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }

        .quote-header-row {
          margin-bottom: 36px;
        }

        /* ── MINIMAL PIPE-DIVIDED TAB SWITCHER ── */
        .quote-pipe-switcher {
          display: inline-flex;
          align-items: center;
          gap: 18px;
        }

        .quote-pipe-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #999999;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          background: transparent;
          border: none;
          padding: 4px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quote-pipe-btn:hover {
          color: #111111;
        }

        .quote-pipe-btn.is-active {
          color: #B58767;
        }

        .quote-pipe-divider {
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
          font-weight: 300;
          user-select: none;
        }

        /* ── 2-COLUMN SPLIT GRID ── */
        .quote-split-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
          width: 100%;
        }

        .quote-left-col {
          display: flex;
          flex-direction: column;
        }

        .quote-headline {
          font-family: var(--font-heading, serif);
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          color: #111111;
          line-height: 1.25;
          letter-spacing: -0.015em;
          margin: 0;
          animation: fadeInTitle 0.45s ease forwards;
        }

        @keyframes fadeInTitle {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── RIGHT COLUMN ── */
        .quote-right-col {
          display: flex;
        }

        .quote-right-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          animation: fadeInDesc 0.45s ease forwards;
        }

        @keyframes fadeInDesc {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }



        .quote-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          background: #111111;
          border: 1px solid #111111;
          padding: 14px 32px;
          border-radius: 40px !important;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          transition: all 0.35s ease;
        }

        .quote-cta-btn:hover {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(180, 133, 100, 0.25);
        }

        .btn-arrow {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .quote-cta-btn:hover .btn-arrow {
          transform: translate(2px, -2px);
        }

        @media (max-width: 960px) {
          .about-quote-statement-section {
            padding: 70px 0;
          }
          .quote-statement-container {
            padding: 0 24px;
          }
          .quote-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: flex-start;
          }
          .quote-right-col {
            justify-content: flex-start;
          }
        }
      `})]})}function C({target:i,prefix:a="",suffix:t=""}){const[o,l]=n.useState(0),[c,m]=n.useState(!1),p=n.useRef(null);return n.useEffect(()=>{const r=new IntersectionObserver(s=>{const[h]=s;h.isIntersecting&&!c&&m(!0)},{threshold:.15});return p.current&&r.observe(p.current),()=>r.disconnect()},[c]),n.useEffect(()=>{if(!c)return;let r=0;const s=parseInt(i,10);if(isNaN(s))return;const h=1800,f=Math.max(Math.floor(h/s),8),x=Math.ceil(s/(h/f)),v=setInterval(()=>{r+=x,r>=s?(clearInterval(v),l(s)):l(r)},f);return()=>clearInterval(v)},[c,i]),e.jsxs("span",{ref:p,children:[a,c?o.toLocaleString():"0",t]})}const M=[{id:1,icon:e.jsx("img",{src:"/images/about/stat_land_icon.png",alt:"Years of Experience",className:"stat-image-icon"}),targetValue:"10",prefix:"",suffix:"+",label:"Years of Excellence"},{id:2,icon:e.jsx("img",{src:"/images/about/stat_completed_icon.png",alt:"Projects Delivered",className:"stat-image-icon"}),targetValue:"60",prefix:"",suffix:"+",label:"Landmark Projects Delivered"},{id:3,icon:e.jsx("img",{src:"/images/about/stat_family_icon.png",alt:"Happy Families",className:"stat-image-icon"}),targetValue:"1600",prefix:"",suffix:"+",label:"Happy Families & Homeowners"}];function O({stats:i=M}){return e.jsxs("section",{className:"about-stats-bar-section",children:[e.jsx("div",{className:"container stats-bar-container",children:i.map((a,t)=>e.jsx(d,{animation:"fadeUp",delay:t*.1,className:"stat-col",children:e.jsxs("div",{className:"stat-item-inner",children:[e.jsx("div",{className:"stat-icon-wrap",children:a.icon}),e.jsx("div",{className:"stat-inner-line"}),e.jsxs("div",{className:"stat-text-wrap",children:[e.jsx("h3",{className:"stat-value",children:e.jsx(C,{target:a.targetValue,prefix:a.prefix,suffix:a.suffix})}),e.jsx("p",{className:"stat-label",children:a.label})]})]})},a.id||t))}),e.jsx("style",{children:`
        .about-stats-bar-section {
          width: 100%;
          background-color: var(--color-white);
          padding: 60px 0;
          box-sizing: border-box;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .stats-bar-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .stat-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
          border-right: 1px solid #E2DDD5;
        }

        .stat-col:first-child {
          padding-left: 0;
        }

        .stat-col:last-child {
          padding-right: 0;
          border-right: none;
        }

        .stat-item-inner {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 64px;
          height: 48px;
        }

        .stat-image-icon {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: invert(61%) sepia(18%) saturate(1064%) hue-rotate(338deg) brightness(88%) contrast(85%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-col:hover .stat-image-icon {
          transform: scale(1.12) translateY(-2px);
        }

        .stat-inner-line {
          width: 1px;
          height: 48px;
          background-color: #E2DDD5;
          flex-shrink: 0;
        }

        .stat-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: var(--font-heading, serif);
          font-size: clamp(34px, 3.8vw, 48px);
          font-weight: 400;
          color: #111111;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #444444;
          margin: 0;
          line-height: 1.35;
        }

        @media (max-width: 960px) {
          .stats-bar-container {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 0 24px;
          }
          .stat-col {
            padding: 0 0 36px 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #E2DDD5;
            justify-content: flex-start;
          }
          .stat-col:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
        }
      `})]})}const L=[{id:"purposeful-design",title:"Purposeful Design",paragraphs:["Design goes beyond architecture and aesthetics. It begins with understanding the potential of a location, the character of the land, and the people who will ultimately experience the spaces we create.","From master planning and spatial relationships to functionality, privacy, natural light, and landscape, every element is considered as part of a larger vision. The most enduring spaces are those where thoughtful decisions are experienced effortlessly in everyday life.","Nothing exists without reason. Every detail has a purpose, contributing to developments that are considered, relevant, and distinctive in character."],image:"/images/about/thoughtful_design.jpg",offset:!1},{id:"uncompromising-standards",title:"Uncompromising Standards",paragraphs:["Quality extends far beyond what is immediately visible. It is reflected in the materials we select, the methods we adopt, the expertise we bring together, and the attention given to every stage of development.","From planning and construction to finishes and final delivery, every detail is approached with precision, consistency, and accountability. It is a discipline that leaves no room for compromise where quality matters.","Because lasting quality is never the result of a single decision. It is the outcome of countless decisions, made with care and held to the same exacting standard from beginning to completion."],image:"/images/about/signature_quality.jpg",offset:!0},{id:"enduring-value",title:"Enduring Value",paragraphs:["The true measure of a development is revealed over time—not simply by how it is received at completion, but by how well it continues to serve, remain relevant, and hold its value in the years that follow.","That perspective shapes every decision, from identifying locations with long-term potential and planning responsibly to creating spaces that continue to meet the evolving needs of the people and communities they serve.","What we create should offer more than value for the present. It should become a source of pride, a meaningful asset, and something of lasting significance for generations to come."],image:"/images/about/craftsmanship.jpg",offset:!1}];function D({tag:i="OUR PURPOSE",title:a="We represent the values of real estate development in modern India and intend to build and serve our customers with the utmost integrity and transparency.",pillars:t=L}){return e.jsxs("section",{className:"about-purpose-section",id:"purpose",children:[e.jsxs("div",{className:"container purpose-container",children:[e.jsxs(d,{animation:"fadeUp",className:"purpose-header",children:[e.jsx("span",{className:"section-tag",style:{marginBottom:"16px"},children:i}),e.jsx("h2",{className:"section-title",style:{maxWidth:"980px",margin:"0 0 70px 0",fontWeight:"400",lineHeight:"1.3"},children:a})]}),e.jsx("div",{className:"purpose-editorial-grid",children:t.map((o,l)=>e.jsxs(d,{animation:"fadeUp",delay:.15*(l+1),className:`purpose-editorial-col ${o.offset?"is-offset":""}`,children:[e.jsx("div",{className:"purpose-img-box",children:e.jsx("img",{src:o.image,alt:o.title,className:"purpose-img"})}),e.jsxs("div",{className:"purpose-content-box",children:[e.jsx("h3",{className:"purpose-col-heading",children:o.title}),o.paragraphs?o.paragraphs.map((c,m)=>e.jsx("p",{className:"body-text",style:{marginBottom:"14px",lineHeight:"1.68",color:"#333"},children:c},m)):e.jsx("p",{className:"body-text",children:o.desc})]})]},o.id))})]}),e.jsx("style",{children:`
        .about-purpose-section {
          background-color: var(--color-bg-light);
          padding: 110px 0 130px;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .purpose-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .purpose-header {
          margin-bottom: 20px;
        }

        /* ── 3-COLUMN EDITORIAL GRID ── */
        .purpose-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          width: 100%;
          position: relative;
        }

        .purpose-editorial-col {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-right: 24px;
          border-right: 1px solid rgba(0, 0, 0, 0.08);
        }

        .purpose-editorial-col:last-child {
          padding-right: 0;
          border-right: none;
        }

        /* Middle Column Staggered Offset */
        .purpose-editorial-col.is-offset {
          padding-top: 100px;
        }

        /* ── BLACK & WHITE IMAGE WITH HOVER ZOOM ── */
        .purpose-img-box {
          width: 100%;
          aspect-ratio: 1 / 1.18;
          border-radius: 8px;
          overflow: hidden;
          background: #111111;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 32px;
          cursor: pointer;
        }

        .purpose-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(100%) contrast(108%);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          display: block;
        }

        .purpose-editorial-col:hover .purpose-img {
          transform: scale(1.06);
          filter: grayscale(100%) contrast(115%) brightness(1.05);
        }

        /* ── EDITORIAL CONTENT ── */
        .purpose-content-box {
          display: flex;
          flex-direction: column;
        }

        .purpose-col-heading {
          font-family: var(--font-heading, serif);
          font-size: clamp(24px, 2.2vw, 30px);
          font-weight: 500;
          color: #111111;
          margin: 0 0 20px 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .purpose-content-box .body-text {
          font-size: 15px;
          line-height: 1.72;
          color: #444444;
          font-weight: 300;
          margin-bottom: 14px;
        }

        .purpose-content-box .body-text:last-child {
          margin-bottom: 0;
        }

        .purpose-editorial-col:hover .purpose-col-heading {
          color: #b48564;
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 1024px) {
          .purpose-editorial-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .purpose-editorial-col {
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding-bottom: 50px;
          }
          .purpose-editorial-col:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .purpose-editorial-col.is-offset {
            padding-top: 0;
          }
          .purpose-img-box {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 600px) {
          .purpose-container {
            padding: 0 20px;
          }
          .about-purpose-section {
            padding: 70px 0 90px;
          }
        }
      `})]})}const P=[{id:"2016",year:"2016",title:"Where It Began",desc:"Aadhithya Mohan Properties began with a simple belief—that quality homeownership should be within reach. Starting with residential plotted developments, we laid the foundations of a business guided by trust, responsible development, and the creation of lasting value.",image:"/images/about/journey_2016.png"},{id:"2018",year:"2018",title:"Beyond Land. Into Living.",desc:"As our ambitions grew, so did the scope of our developments. We expanded into villas and apartments, marking our evolution from creating residential layouts to building communities designed around the aspirations of the families who call them home.",image:"/images/about/journey_2018.png"},{id:"2021",year:"2021",title:"A Milestone of Recognition",desc:"Our commitment to execution and value creation earned us the “Short Time Achiever” Award—an important milestone that recognised our progress and strengthened our pursuit of higher standards with every development.",image:"/images/about/journey_2021.png"},{id:"2024",year:"2024",title:"A Reputation Built on Trust",desc:"Years of consistent execution had established Aadhithya Mohan Properties as a growing presence in Chennai's real estate landscape. With a diverse portfolio of CMDA, DTCP and RERA-approved developments, this chapter reflected something more meaningful than growth—the confidence earned from customers, investors, and partners along the way.",image:"/images/about/journey_2024.png"},{id:"2026",year:"2026",title:"A New Standard of Ambition",desc:"With a strong foundation in place, Aadhithya Mohan Properties entered a defining new phase—expanding its vision towards more distinctive residences and thoughtfully conceived communities. It marked an evolution in our approach to real estate, with greater emphasis on design, craftsmanship, and considered execution at every stage, while remaining anchored to the principles that have guided us from the beginning.",image:"/images/about/journey_2026.png"}];function q(){const[i,a]=n.useState(0);return e.jsxs("section",{className:"about-journey-section",id:"journey",children:[e.jsx("div",{className:"journey-header-container",children:e.jsxs(d,{className:"section-header",animation:"fadeUp",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-tag",style:{marginBottom:"14px"},children:"OUR STORY"}),e.jsx("h2",{className:"section-title",style:{margin:"0 0 14px 0"},children:"Our Journey"}),e.jsx("p",{className:"body-text",children:"A decade of architectural ambition, transformative growth, and creating enduring homes across Chennai."})]})}),e.jsx("div",{className:"journey-accordion-strip",children:P.map((t,o)=>{const l=o===i;return e.jsxs("div",{className:`journey-slice-card ${l?"is-active":""}`,onClick:()=>a(o),onMouseEnter:()=>a(o),role:"button",tabIndex:0,"aria-label":`Milestone year ${t.year} - ${t.title}`,children:[e.jsx("img",{src:t.image,alt:`${t.year} - ${t.title}`,className:"journey-slice-img"}),e.jsx("div",{className:"journey-slice-overlay"}),e.jsxs("div",{className:"journey-active-content",children:[e.jsx("div",{className:"journey-year-pill",children:t.year}),e.jsx("h3",{className:"journey-active-title",children:t.title}),e.jsx("p",{className:"journey-active-desc",children:t.desc})]}),e.jsxs("div",{className:"journey-vertical-label",children:[e.jsx("span",{className:"journey-vertical-year",children:t.year}),e.jsx("span",{className:"journey-vertical-dot",children:"·"}),e.jsx("span",{className:"journey-vertical-title",children:t.title})]})]},t.id)})}),e.jsx("style",{children:`
        .about-journey-section {
          background-color: var(--color-white);
          padding: 60px 0 0px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .journey-header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── HORIZONTAL EXPANDING SLICE ACCORDION ── */
        .journey-accordion-strip {
          display: flex;
          align-items: stretch;
          width: 100%;
          height: 560px;
          gap: 4px;
          overflow: hidden;
        }

        .journey-slice-card {
          position: relative;
          height: 100%;
          flex: 1;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          background: #111111;
        }

        .journey-slice-card.is-active {
          flex: 4.2;
          cursor: default;
        }

        /* ── BACKGROUND IMAGE (COLOR VS BLACK & WHITE) ── */
        .journey-slice-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: grayscale(100%) brightness(0.65) contrast(105%);
          display: block;
        }

        .journey-slice-card.is-active .journey-slice-img {
          filter: grayscale(0%) brightness(0.95) contrast(100%);
          transform: scale(1.04);
        }

        .journey-slice-card:hover .journey-slice-img,
        .journey-slice-card.is-active:hover .journey-slice-img {
          transform: scale(1.2);
        }

        /* ── GRADIENT OVERLAY ── */
        .journey-slice-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.15) 100%);
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        /* ── ACTIVE CARD CONTENT ── */
        .journey-active-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 36px 36px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          z-index: 5;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
          pointer-events: none;
        }

        .journey-slice-card.is-active .journey-active-content {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .journey-year-pill {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(180, 133, 100, 0.85);
          padding: 4px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .journey-active-title {
          font-family: var(--font-heading);
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .journey-active-desc {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          max-width: 600px;
        }

        /* ── INACTIVE CARD VERTICAL TEXT ── */
        .journey-vertical-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          gap: 12px;
          z-index: 4;
          opacity: 1;
          transition: opacity 0.3s ease;
          color: #ffffff;
          padding: 24px 0;
          pointer-events: none;
        }

        .journey-slice-card.is-active .journey-vertical-label {
          opacity: 0;
        }

        .journey-vertical-year {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #ffffff;
        }

        .journey-vertical-dot {
          color: #b48564;
          font-size: 16px;
        }

        .journey-vertical-title {
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          white-space: nowrap;
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 900px) {
          .journey-accordion-strip {
            flex-direction: column;
            height: auto;
            gap: 16px;
          }
          .journey-slice-card {
            height: 140px;
            width: 100%;
            flex: none !important;
          }
          .journey-slice-card.is-active {
            height: 380px;
          }
          .journey-vertical-label {
            writing-mode: horizontal-tb;
            transform: none;
            flex-direction: row;
            justify-content: flex-start;
            padding: 24px;
            align-items: center;
          }
          .journey-slice-img {
            filter: grayscale(0%) brightness(0.85);
          }
          .journey-active-content {
            padding: 24px;
          }
        }

        @media (max-width: 600px) {
          .journey-header-container {
            padding: 0 20px;
          }
          .journey-slice-card.is-active {
            height: 420px;
          }
          .journey-active-title {
            font-size: 22px;
          }
          .journey-active-desc {
            font-size: 13.5px;
            line-height: 1.6;
          }
        }
      `})]})}b.registerPlugin(w);const g={id:1,name:"Mr. Sai Mohan",role:"Managing Director",signatureTitle:"Sai Mohan",signatureSub:"Managing Director",quote:"HIS JOURNEY IS NOT JUST ABOUT BUILDING PROPERTIES—IT IS ABOUT BUILDING PEOPLE, RELATIONSHIPS, AND OPPORTUNITIES.",image:"/images/team/sai-mohan-cutout.png",modalImage:"/images/about/team/Mohan_MD1.jpeg",bio:["Mr. Sai Mohan is a real estate entrepreneur with 15+ years of experience built through passion, persistence, and real-world experience. His journey is not just about building properties—it is about building people, relationships, and opportunities.","As a Builder, Promoter, Marketer, and Entrepreneur, he understands the industry from the ground level to the leadership level. What makes his journey special is his belief that success becomes meaningful when the people around you grow along with you.","He welcomes talented professionals, marketers, builders, entrepreneurs, and business minds who dream of creating something bigger. For him, joining a company is not simply accepting a job—it is becoming part of a vision and a journey.","He believes in giving people the freedom to think, the opportunity to perform, and the platform to build their own success. His vision is to create a strong real estate ecosystem where customers, employees, investors, and business partners all grow together.","With experience behind him and a bigger vision ahead, he continues to build not just projects, but a team and a legacy that people can proudly be part of. If you have the ambition to grow, the courage to dream, and the passion to build—Mr. Sai Mohan believes there is always a place for you in the journey."]},u={id:2,name:"Muralidharan",role:"Chief Executive Officer",signatureTitle:"Muralidharan",signatureSub:"Chief Executive Officer",quote:"TRUST AND LASTING VALUE ARE THE CORNERSTONES OF EVERY COMMUNITY WE BUILD",image:"/images/team/murali-cutout.png",modalImage:"/images/team/murali.png",bio:["Muralidharan brings over 11 years of professional experience, including more than six years in the real estate industry. His journey began in investor relations, where he worked closely with investors as an independent consultant, gaining valuable insight into market dynamics, customer expectations, and long-term value creation. His strategic vision and leadership ultimately led him to assume the role of Chief Executive Officer at Aadhithya Mohan Properties.","Prior to his leadership in real estate, he served as a Marketing Consultant for digital campaigns at Condé Nast India Pvt. Ltd., where he worked on performance-driven marketing initiatives for leading brands. This experience cultivated a strategic approach to brand building, customer engagement, and business growth, which continues to influence his leadership today.","As Chief Executive Officer of Aadhithya Mohan Properties, Muralidharan leads the company's overall operations, strategic planning, business growth, and expansion. His perspective on real estate is founded on two enduring principles: trust and lasting value. He believes every development should inspire confidence through uncompromising integrity while creating enduring value for homeowners and investors alike. Guided by this philosophy, he is committed to delivering thoughtfully planned communities that reflect exceptional quality, timeless design, and a legacy that extends well beyond the homes themselves."]},H=[{id:3,name:"M. A. Afroz",role:"Sales & Strategic Development",bio:["With over two decades of experience shaping the residential real estate landscape, M. A. Afroz brings a proven track record in leading sales and marketing functions across landmark projects. His expertise lies in elevating asset positioning to consistently arrive at price points and commercial terms that serve both client priorities and asset value.","M. A. Afroz possesses a deep, end-to-end understanding of the residential real estate lifecycle, from development and market strategy to sales and operational management, guided by a nuanced appreciation of Chennai’s real estate market dynamics. His expertise spans property sales, asset positioning, customer engagement and commercial negotiations, with a strong ability to identify market opportunities, build lasting client relationships and drive value through effective sales strategies.","With his extensive experience across key geographies in Chennai, he has honed his ability to navigate evolving residential real estate trends and economic cycles with agility.","At AADHITHYA MOHAN, M. A. Afroz brings strategic foresight to sales, marketing and real estate development, integrating market intelligence, relationship capital and a strong understanding of customer and market needs to strengthen the organisation’s residential real estate portfolio and reinforce its commitment to building lasting value."],image:"/images/about/team/afroz.jpeg"},{id:4,name:"RS Balamurugan",role:"Head of Operations",bio:["RS Balamurugan brings over a decade of professional experience across operations, sales, business development, and team leadership. As Head of Operations at Aadhithya Mohan Properties, He heads pre-sales, channel partners division, also plays a pivotal role in sales and marketing. with a strong focus on business growth and operational excellence.","With a strategic and data-driven approach, he oversees the complete sales journey from lead generation and customer engagement to site visits, negotiations, and successful closures. His expertise in performance management, process optimization, CRM systems, and team development enables him to build high-performing teams and create efficient, customer-focused operations.","Known for his leadership, analytical thinking, and proactive approach, Balamurugan plays a key role in strengthening sales performance, developing channel partnerships, and driving sustainable growth for Aadhithya Mohan Properties."],image:"/images/about/team/bala.jpeg"}];function U({showExecutives:i=!0}){const[a,t]=n.useState(null),[o,l]=n.useState(null),c=n.useRef(null),m=n.useRef(null),p=n.useRef(null);return n.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),n.useEffect(()=>{if(!i)return;const r=c.current,s=m.current,h=p.current;if(!r||!s||!h)return;const f=b.context(()=>{b.set(s,{opacity:1,y:0,pointerEvents:"auto",zIndex:5,autoAlpha:1}),b.set(h,{opacity:0,y:35,pointerEvents:"none",zIndex:1,autoAlpha:0}),b.timeline({scrollTrigger:{trigger:r,start:"top top",end:"+=120%",pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}}).to({},{duration:.2}).to(s,{opacity:0,y:-35,pointerEvents:"none",zIndex:1,autoAlpha:0,duration:.4,ease:"power1.inOut"}).to(h,{opacity:1,y:0,pointerEvents:"auto",zIndex:5,autoAlpha:1,duration:.4,ease:"power1.inOut"},"<+=0.08").to({},{duration:.2})},c);return()=>f.revert()},[]),e.jsxs("div",{className:"sobha-leadership-wrapper",id:"team",children:[i&&e.jsxs("div",{className:"sobha-gsap-pin-container",ref:c,children:[e.jsx("div",{className:"sobha-hero-bg",style:{backgroundImage:"url('/images/about/leadership_hero_bg.jpg')"}}),e.jsx("div",{className:"sobha-hero-light-wash"}),e.jsxs("div",{className:"sobha-hero-inner",children:[e.jsxs("div",{className:"sobha-section-top-header",children:[e.jsx("span",{className:"sobha-header-eyebrow",children:"OUR LEADERS"}),e.jsx("h2",{className:"sobha-header-title",children:"The People Behind Our Vision"})]}),e.jsxs("div",{className:"sobha-slides-stage",children:[e.jsx("div",{className:"sobha-exec-slide md-slide",ref:m,children:e.jsxs("div",{className:"sobha-stage-grid",children:[e.jsxs("div",{className:"sobha-stage-left",children:[e.jsx("span",{className:"sobha-big-quote-mark",children:"“"}),e.jsx("h3",{className:"sobha-stage-quote",children:g.quote}),e.jsx("span",{className:"sobha-big-quote-mark sobha-quote-close",children:"”"}),e.jsxs("button",{type:"button",className:"sobha-name-arrow-row",onClick:()=>t(g),"aria-label":`View full biography for ${g.name}`,title:"Click to view full biography",children:[e.jsxs("div",{className:"sobha-name-details",children:[e.jsx("h4",{className:"sobha-sig-name",children:g.signatureTitle}),e.jsx("p",{className:"sobha-sig-role",children:g.signatureSub})]}),e.jsx("div",{className:"sobha-name-arrow-btn",children:e.jsx(y,{size:18,strokeWidth:1.6})})]})]}),e.jsx("div",{className:"sobha-stage-right",children:e.jsx("div",{className:"sobha-cutout-container",onClick:()=>t(g),title:"Click to view full biography",children:e.jsx("img",{src:g.image,alt:g.name,className:"sobha-cutout-img"})})})]})}),e.jsx("div",{className:"sobha-exec-slide ceo-slide",ref:p,children:e.jsxs("div",{className:"sobha-stage-grid",children:[e.jsxs("div",{className:"sobha-stage-left",children:[e.jsx("span",{className:"sobha-big-quote-mark",children:"“"}),e.jsx("h3",{className:"sobha-stage-quote",children:u.quote}),e.jsx("span",{className:"sobha-big-quote-mark sobha-quote-close",children:"”"}),e.jsxs("button",{type:"button",className:"sobha-name-arrow-row",onClick:()=>t(u),"aria-label":`View full biography for ${u.name}`,title:"Click to view full biography",children:[e.jsxs("div",{className:"sobha-name-details",children:[e.jsx("h4",{className:"sobha-sig-name",children:u.signatureTitle}),e.jsx("p",{className:"sobha-sig-role",children:u.signatureSub})]}),e.jsx("div",{className:"sobha-name-arrow-btn",children:e.jsx(y,{size:18,strokeWidth:1.6})})]})]}),e.jsx("div",{className:"sobha-stage-right",children:e.jsx("div",{className:"sobha-cutout-container",onClick:()=>t(u),title:"Click to view full biography",children:e.jsx("img",{src:u.image,alt:u.name,className:"sobha-cutout-img"})})})]})})]})]})]}),e.jsx("section",{className:"sobha-team-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sobha-team-header",children:[e.jsx(d,{animation:"fadeUp",children:e.jsx("span",{className:"sobha-team-eyebrow",children:"OUR TEAM"})}),e.jsx(d,{animation:"fadeUp",delay:.08,children:e.jsx("h2",{className:"section-title",children:"The People Who Bring Our Vision In to Life"})}),e.jsx(d,{animation:"fadeUp",delay:.15,children:e.jsx("p",{className:"text-body",style:{maxWidth:"680px",margin:"0 auto",textAlign:"center"},children:"A multidisciplinary team of domain specialists driving engineering rigor, customer satisfaction, and strategic excellence."})})]}),e.jsx("div",{className:"sobha-team-cards-grid",children:H.map((r,s)=>e.jsx("div",{className:"sobha-team-card-col",onMouseEnter:()=>l(r.id),onMouseLeave:()=>l(null),children:e.jsx(d,{animation:"fadeUp",delay:.1+s*.08,style:{height:"100%",width:"100%"},children:e.jsxs("div",{className:`sobha-team-member-card ${o!==null&&o!==r.id?"is-dimmed":""}`,onClick:()=>t(r),role:"button",tabIndex:0,"aria-label":`View bio for ${r.name}`,children:[e.jsxs("div",{className:"sobha-card-portrait-wrap",children:[e.jsx("img",{src:r.image,alt:r.name,className:"sobha-card-photo"}),e.jsx("div",{className:"sobha-card-dark-gradient"})]}),e.jsxs("div",{className:"sobha-card-meta-bottom",children:[e.jsxs("div",{className:"sobha-card-meta-text",children:[e.jsx("h3",{className:"sobha-card-name",children:r.name}),e.jsx("p",{className:"sobha-card-role",children:r.role})]}),e.jsx("div",{className:"sobha-card-arrow-badge",children:e.jsx(y,{size:18,strokeWidth:1.5})})]})]})})},r.id))})]})}),a&&e.jsx("div",{className:"sobha-bio-modal-backdrop","data-lenis-prevent":!0,onClick:()=>t(null),children:e.jsxs("div",{className:"sobha-bio-modal-box",onClick:r=>r.stopPropagation(),children:[e.jsx("button",{className:"sobha-bio-modal-close",onClick:()=>t(null),"aria-label":"Close modal",children:e.jsx(N,{size:22,strokeWidth:1.5})}),e.jsxs("div",{className:"sobha-bio-modal-grid",children:[e.jsx("div",{className:"sobha-bio-modal-img-col",children:e.jsx("img",{src:a.modalImage||a.image,alt:a.name})}),e.jsx("div",{className:"sobha-bio-modal-info-col","data-lenis-prevent":!0,children:e.jsxs("div",{className:"sobha-bio-modal-inner",children:[e.jsx("span",{className:"sobha-bio-modal-tag",children:"Leadership"}),e.jsx("h3",{className:"sobha-bio-modal-title",children:a.name}),e.jsx("p",{className:"sobha-bio-modal-sub",children:a.role}),e.jsx("div",{className:"sobha-bio-modal-divider"}),e.jsx("div",{className:"sobha-bio-modal-paragraphs",children:Array.isArray(a.bio)?a.bio.map((r,s)=>e.jsx("p",{className:"sobha-bio-p",children:r},s)):e.jsx("p",{className:"sobha-bio-p",children:a.bio})})]})})]})]})}),e.jsx("style",{children:`
        .sobha-leadership-wrapper {
          width: 100%;
          background-color: #ffffff;
          box-sizing: border-box;
          position: relative;
        }

        /* ── 1. PINNED GSAP CONTAINER (SEAMLESS EDGE-TO-EDGE FIT) ── */
        .sobha-gsap-pin-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          display: flex;
          align-items: stretch;
          background: #eae8e1;
          overflow: hidden;
          padding-top: 105px;
          padding-bottom: 0 !important;
          box-sizing: border-box;
        }

        .sobha-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center right;
          opacity: 0.45;
          filter: grayscale(25%) contrast(105%);
          z-index: 0;
        }

        .sobha-hero-light-wash {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(234, 232, 225, 0.98) 0%,
            rgba(234, 232, 225, 0.92) 48%,
            rgba(234, 232, 225, 0.4) 80%,
            transparent 100%
          );
          z-index: 1;
        }

        .sobha-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* Centered Top Header (Matching OUR TEAM style) */
        .sobha-section-top-header {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .sobha-header-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 6px;
        }

        .sobha-header-title {
          font-family: var(--font-heading);
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 400;
          color: #111111;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.18;
        }

        /* Slides Stage Container */
        .sobha-slides-stage {
          position: relative;
          flex: 1;
          min-height: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }

        /* Individual Absolute Executive Slide */
        .sobha-exec-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }

        .sobha-exec-slide.md-slide {
          z-index: 5;
        }

        .sobha-exec-slide.ceo-slide {
          z-index: 1;
        }

        /* Stage Grid (Equal 1fr 1fr Columns, Centered) */
        .sobha-stage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 40px;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          height: 100%;
          box-sizing: border-box;
        }

        /* Left Side Quote - Vertically Centered with Balanced Width */
        .sobha-stage-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0;
          margin: auto 0;
          max-width: 520px;
          height: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
        }

        .sobha-big-quote-mark {
          font-family: var(--font-heading);
          font-size: 38px;
          color: #b48564;
          line-height: 0.8;
          display: block;
          margin-bottom: 8px;
        }

        .sobha-quote-close {
          margin-top: 8px;
          margin-bottom: 16px;
        }

        .sobha-stage-quote {
          font-family: var(--font-heading);
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 400;
          color: #b48564;
          line-height: 1.25;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 0;
        }

        /* Name & Arrow Button Row */
        .sobha-name-arrow-row {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          margin-top: 10px;
          padding: 6px 12px 6px 0;
          background: transparent;
          border: none;
          outline: none;
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          z-index: 20;
          pointer-events: auto !important;
        }

        .sobha-name-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sobha-sig-name {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 500;
          color: #111111;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0;
          transition: color 0.3s ease;
        }

        .sobha-name-arrow-row:hover .sobha-sig-name {
          color: #b48564;
        }

        .sobha-sig-role {
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 400;
          color: #666666;
          text-transform: capitalize;
          margin: 0;
        }

        .sobha-name-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #111111;
          background: transparent;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .sobha-name-arrow-row:hover .sobha-name-arrow-btn {
          background: #111111;
          color: #ffffff;
          transform: translate(2px, -2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Right Side Cutout Portrait */
        .sobha-stage-right {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 100%;
          min-height: 0;
          position: relative;
          z-index: 5;
        }

        .sobha-cutout-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          cursor: pointer;
        }

        .sobha-cutout-img {
          width: auto;
          max-width: 100%;
          height: 100%;
          max-height: calc(100vh - 165px);
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.14));
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-cutout-container:hover .sobha-cutout-img {
          transform: scale(1.02);
        }

        /* ── 2. OUR TEAM SECTION ── */
        .sobha-team-section {
          position: relative;
          z-index: 10;
          padding: 80px 0 120px;
          background: #ffffff;
        }

        .sobha-team-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .sobha-team-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 12px;
        }

        .sobha-team-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 380px));
          justify-content: center;
          gap: 32px;
          max-width: 820px;
          margin: 0 auto;
        }

        .sobha-team-card-col {
          height: 480px;
        }

        .sobha-team-member-card {
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          background-color: #111111;
        }

        .sobha-team-member-card:hover {
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);
        }


        .sobha-card-portrait-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .sobha-card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-team-member-card:hover .sobha-card-photo {
          transform: scale(1.05);
        }

        .sobha-card-dark-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.95) 0%,
            rgba(10, 8, 6, 0.55) 35%,
            rgba(10, 8, 6, 0.1) 60%,
            transparent 80%
          );
          transition: background 0.4s ease;
        }

        .sobha-team-member-card:hover .sobha-card-dark-gradient {
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.98) 0%,
            rgba(10, 8, 6, 0.7) 40%,
            rgba(10, 8, 6, 0.15) 65%,
            transparent 80%
          );
        }

        .sobha-card-meta-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 20px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 3;
        }

        .sobha-card-meta-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sobha-card-name {
          font-family: var(--font-heading);
          font-size: 21px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .sobha-card-role {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.3;
        }

        .sobha-team-member-card:hover .sobha-card-role {
          color: rgba(255, 255, 255, 0.9);
        }

        .sobha-card-arrow-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          flex-shrink: 0;
          transition: all 0.3s ease;
          opacity: 1;
          transform: translateY(0);
        }

        .sobha-team-member-card:hover .sobha-card-arrow-badge {
          border-color: #b48564;
          color: #ffffff;
          background: #b48564;
          transform: translate(2px, -2px);
          box-shadow: 0 4px 14px rgba(180, 133, 100, 0.4);
        }

        /* ── 3. CINEMATIC BIO MODAL ── */
        .sobha-bio-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px;
          animation: modalFadeIn 0.3s ease forwards;
        }

        .sobha-bio-modal-box {
          background: #ffffff;
          border-radius: 8px;
          max-width: 1060px;
          width: 100%;
          max-height: 88vh;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
          animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .sobha-bio-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #333333;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sobha-bio-modal-close:hover {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .sobha-bio-modal-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          height: 100%;
          max-height: 88vh;
        }

        .sobha-bio-modal-img-col {
          height: 100%;
          min-height: 520px;
          max-height: 88vh;
          background: #0a0806;
          position: relative;
          overflow: hidden;
        }

        .sobha-bio-modal-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .sobha-bio-modal-info-col {
          overflow-y: auto;
          max-height: 88vh;
          scrollbar-width: thin;
          scrollbar-color: rgba(180, 133, 100, 0.3) transparent;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar {
          width: 4px;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar-track {
          background: transparent;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar-thumb {
          background: rgba(180, 133, 100, 0.3);
          border-radius: 4px;
        }

        .sobha-bio-modal-inner {
          padding: 56px 48px 48px;
        }

        .sobha-bio-modal-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 14px;
          padding: 5px 14px;
          background: rgba(180, 133, 100, 0.08);
          border-radius: 4px;
        }

        .sobha-bio-modal-title {
          font-family: var(--font-heading);
          font-size: 34px;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .sobha-bio-modal-sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #888888;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .sobha-bio-modal-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #b48564, #d4a574);
          margin-bottom: 28px;
          border-radius: 2px;
        }

        .sobha-bio-modal-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sobha-bio-p {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: #444444;
          margin: 0;
        }

        .sobha-bio-p:first-child::first-letter {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: #b48564;
          float: left;
          line-height: 1;
          margin-right: 6px;
          margin-top: 4px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
        @media (max-width: 1024px) {
          .sobha-gsap-pin-container {
            height: 100dvh !important;
            height: 100vh !important;
            min-height: 540px !important;
            padding-top: 75px !important;
            padding-bottom: 0 !important;
            overflow: hidden !important;
          }
          .sobha-hero-inner {
            height: 100% !important;
            padding: 0 20px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .sobha-section-top-header {
            margin-bottom: 6px !important;
            flex-shrink: 0 !important;
          }
          .sobha-header-eyebrow {
            font-size: 10.5px !important;
            margin-bottom: 3px !important;
          }
          .sobha-header-title {
            font-size: clamp(20px, 4.5vw, 26px) !important;
            line-height: 1.2 !important;
          }
          .sobha-slides-stage {
            flex: 1 !important;
            min-height: 0 !important;
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
          }
          .sobha-exec-slide {
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .sobha-stage-grid {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
            height: 100% !important;
            gap: 4px !important;
          }
          .sobha-stage-left {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            flex-shrink: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .sobha-big-quote-mark {
            font-size: 24px !important;
            line-height: 0.6 !important;
            margin-bottom: 4px !important;
          }
          .sobha-quote-close {
            margin-top: 4px !important;
            margin-bottom: 6px !important;
          }
          .sobha-stage-quote {
            font-size: clamp(14px, 3.8vw, 17px) !important;
            line-height: 1.25 !important;
            letter-spacing: 0.02em !important;
          }
          .sobha-name-arrow-row {
            margin-top: 4px !important;
            gap: 10px !important;
            padding: 2px 0 !important;
          }
          .sobha-sig-name {
            font-size: 16px !important;
          }
          .sobha-sig-role {
            font-size: 11px !important;
          }
          .sobha-name-arrow-btn {
            width: 30px !important;
            height: 30px !important;
          }
          .sobha-stage-right {
            width: 100% !important;
            flex: 1 1 0% !important;
            min-height: 220px !important;
            height: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            overflow: visible !important;
            position: relative !important;
          }
          .sobha-cutout-container {
            height: 100% !important;
            width: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            position: relative !important;
          }
          .sobha-cutout-img {
            height: 100% !important;
            max-height: 46vh !important;
            width: auto !important;
            max-width: 100% !important;
            object-fit: contain !important;
            object-position: bottom center !important;
            display: block !important;
            filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15)) !important;
          }
          .sobha-team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sobha-team-card-col {
            height: 420px;
          }
        }

        @media (max-width: 768px) {
          .sobha-team-section {
            padding: 70px 0 80px;
          }
          .sobha-team-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .sobha-team-card-col {
            height: 400px;
          }
          .sobha-bio-modal-backdrop {
            padding: 16px;
          }
          .sobha-bio-modal-grid {
            grid-template-columns: 1fr;
          }
          .sobha-bio-modal-img-col {
            height: 260px;
            min-height: auto;
            max-height: 260px;
          }
          .sobha-bio-modal-info-col {
            max-height: calc(92vh - 260px);
          }
          .sobha-bio-modal-inner {
            padding: 28px 20px;
          }
        }
      `})]})}const B=[{id:1,name:"Mr. Sai Mohan",role:"MANAGING DIRECTOR",signatureTitle:"Sai Mohan",quote:"His journey is not just about building properties—it is about building people, relationships, and opportunities.",desc:"Mr. Sai Mohan is a real estate entrepreneur with 15+ years of experience built through passion, persistence, and real-world experience. As a Builder, Promoter, Marketer, and Entrepreneur, he understands the industry from the ground level to the leadership level.",bio:["Mr. Sai Mohan is a real estate entrepreneur with 15+ years of experience built through passion, persistence, and real-world experience. His journey is not just about building properties—it is about building people, relationships, and opportunities.","As a Builder, Promoter, Marketer, and Entrepreneur, he understands the industry from the ground level to the leadership level. What makes his journey special is his belief that success becomes meaningful when the people around you grow along with you.","He welcomes talented professionals, marketers, builders, entrepreneurs, and business minds who dream of creating something bigger. For him, joining a company is not simply accepting a job—it is becoming part of a vision and a journey.","He believes in giving people the freedom to think, the opportunity to perform, and the platform to build their own success. His vision is to create a strong real estate ecosystem where customers, employees, investors, and business partners all grow together.","With experience behind him and a bigger vision ahead, he continues to build not just projects, but a team and a legacy that people can proudly be part of. If you have the ambition to grow, the courage to dream, and the passion to build—Mr. Sai Mohan believes there is always a place for you in the journey."],image:"/images/about/team/Mohan_MD1.jpeg"},{id:2,name:"Muralidharan",role:"CHIEF EXECUTIVE OFFICER",signatureTitle:"Muralidharan",quote:"The function of leadership is to produce more leaders, not more followers.",desc:"At Aadhithya Mohan Properties, our mission is clear: bridge the gap between aspirational living and enduring real estate value. We're dedicated to maximizing long-term appreciation by providing tailored guidance, exceptional craftsmanship, and in-depth market insights.",bio:["Muralidharan brings over 11 years of professional experience, including more than six years in the real estate industry. His journey began in investor relations, where he worked closely with investors as an independent consultant, gaining valuable insight into market dynamics, customer expectations, and long-term value creation. His strategic vision and leadership ultimately led him to assume the role of Chief Executive Officer at Aadhithya Mohan Properties.","Prior to his leadership in real estate, he served as a Marketing Consultant for digital campaigns at Condé Nast India Pvt. Ltd., where he worked on performance-driven marketing initiatives for leading brands. This experience cultivated a strategic approach to brand building, customer engagement, and business growth, which continues to influence his leadership today.","As Chief Executive Officer of Aadhithya Mohan Properties, Muralidharan leads the company's overall operations, strategic planning, business growth, and expansion. His perspective on real estate is founded on two enduring principles: trust and lasting value. He believes every development should inspire confidence through uncompromising integrity while creating enduring value for homeowners and investors alike."],image:"/images/about/team/murali.png"}];function W(){const[i,a]=n.useState(null);return n.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]),e.jsxs("div",{className:"dark-leadership-stack",id:"executive-leadership",children:[e.jsxs("div",{className:"dark-leader-section-header",children:[e.jsx(d,{animation:"fadeUp",children:e.jsx("span",{className:"dark-leader-eyebrow",children:"OUR LEADERS"})}),e.jsx(d,{animation:"fadeUp",delay:.08,children:e.jsx("h2",{className:"section-title dark-leader-title",children:"The People Behind Our Vision"})})]}),B.map((t,o)=>{const l=t.id===1;return e.jsxs(E.Fragment,{children:[o>0&&e.jsx("div",{className:"dark-leader-divider-wrap",children:e.jsx("div",{className:"dark-leader-divider-line"})}),e.jsx("section",{className:`dark-leader-variant-section ${l?"dark-leader-md-reversed":""}`,children:e.jsxs("div",{className:"dark-leader-container",children:[e.jsx("div",{className:"dark-leader-image-col",children:e.jsx(d,{animation:l?"fadeLeft":"fadeRight",delay:.1,children:e.jsxs("div",{className:"dark-leader-img-wrapper",onClick:()=>a(t),title:`Click to read full bio of ${t.name}`,style:{cursor:"pointer"},children:[e.jsx("img",{src:t.image,alt:t.name,className:"dark-leader-img"}),e.jsx("div",{className:`dark-leader-blend-overlay ${l?"blend-left":""}`})]})})}),e.jsx("div",{className:"dark-leader-content-col",children:e.jsx(d,{animation:l?"fadeRight":"fadeLeft",delay:.2,children:e.jsxs("div",{className:"dark-leader-content-inner",children:[e.jsx("div",{className:"dark-leader-quote-icon",children:e.jsx("svg",{width:"44",height:"34",viewBox:"0 0 48 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0 38V22.8C0 15.2 2.02667 9.24667 6.08 4.94C10.24 0.633333 16.2133 -0.633333 24 0.000001V8.36C19.7333 8.36 16.5333 9.42667 14.4 11.56C12.3733 13.6933 11.36 16.6667 11.36 20.48H24V38H0ZM24 38V22.8C24 15.2 26.0267 9.24667 30.08 4.94C34.24 0.633333 40.2133 -0.633333 48 0.000001V8.36C43.7333 8.36 40.5333 9.42667 38.4 11.56C36.3733 13.6933 35.36 16.6667 35.36 20.48H48V38H24Z",fill:"#b48564"})})}),e.jsx("h2",{className:"dark-leader-quote-headline",children:t.quote}),e.jsx("p",{className:"dark-leader-paragraph",children:t.desc}),e.jsxs("button",{type:"button",className:"dark-leader-interactive-row",onClick:()=>a(t),"aria-label":`Read full details for ${t.name}`,title:"Click to view full biography",children:[e.jsxs("div",{className:"dark-leader-signature-block",children:[e.jsx("div",{className:"dark-leader-sig-script",children:t.signatureTitle}),e.jsx("div",{className:"dark-leader-role-tag",children:t.role})]}),e.jsxs("div",{className:"dark-leader-arrow-badge",children:[e.jsx("span",{children:"READ BIO"}),e.jsx(y,{size:18,strokeWidth:1.6})]})]})]})})})]})})]},t.id)}),i&&e.jsx("div",{className:"sobha-bio-modal-backdrop","data-lenis-prevent":!0,onClick:()=>a(null),children:e.jsxs("div",{className:"sobha-bio-modal-box",onClick:t=>t.stopPropagation(),children:[e.jsx("button",{className:"sobha-bio-modal-close",onClick:()=>a(null),"aria-label":"Close modal",children:e.jsx(N,{size:20,strokeWidth:1.6})}),e.jsxs("div",{className:"sobha-bio-modal-grid",children:[e.jsx("div",{className:"sobha-bio-modal-img-col",children:e.jsx("img",{src:i.image,alt:i.name})}),e.jsx("div",{className:"sobha-bio-modal-info-col","data-lenis-prevent":!0,children:e.jsxs("div",{className:"sobha-bio-modal-inner",children:[e.jsx("span",{className:"sobha-bio-modal-tag",children:"LEADERSHIP"}),e.jsx("h3",{className:"sobha-bio-modal-title",children:i.name}),e.jsx("p",{className:"sobha-bio-modal-sub",children:i.role}),e.jsx("div",{className:"sobha-bio-modal-divider"}),e.jsx("div",{className:"sobha-bio-modal-paragraphs",children:i.bio.map((t,o)=>e.jsx("p",{className:"sobha-bio-p",children:t},o))})]})})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .dark-leadership-stack {
          width: 100%;
          background-color: #050505;
        }

        .dark-leader-section-header {
          text-align: center;
          padding: 100px 20px 20px;
          position: relative;
          z-index: 5;
        }

        .dark-leader-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 8px;
        }

        .dark-leader-title {
          font-family: var(--font-heading);
          color: #ffffff !important;
          margin: 0;
        }

        .dark-leader-divider-wrap {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
          position: relative;
          z-index: 5;
        }

        .dark-leader-divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(180, 133, 100, 0.45) 15%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(180, 133, 100, 0.45) 85%,
            transparent 100%
          );
        }

        .dark-leader-variant-section {
          background-color: #050505;
          color: #ffffff;
          width: 100%;
          min-height: 85vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 60px 0;
          box-sizing: border-box;
        }

        .dark-leader-container {
          display: grid;
          grid-template-columns: 5.5fr 6.5fr;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Managing Director Swap: Content Left, Image Right */
        .dark-leader-md-reversed .dark-leader-container {
          grid-template-columns: 6.5fr 5.5fr;
        }

        .dark-leader-md-reversed .dark-leader-content-col {
          order: 1;
          padding: 40px 40px 40px 80px;
        }

        .dark-leader-md-reversed .dark-leader-image-col {
          order: 2;
        }

        /* Left Column: Image with Smooth Blend Overlay */
        .dark-leader-image-col {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-leader-img-wrapper {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 620px;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .dark-leader-img-wrapper:hover .dark-leader-img {
          transform: scale(1.03);
        }

        .dark-leader-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: brightness(0.94) contrast(1.04);
          transition: transform 0.8s ease;
        }

        /* Seamless Blend Overlay */
        .dark-leader-blend-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to right, transparent 50%, #050505 98%),
            linear-gradient(to left, transparent 80%, #050505 100%),
            linear-gradient(to bottom, transparent 65%, #050505 100%),
            linear-gradient(to top, transparent 85%, #050505 100%);
          pointer-events: none;
        }

        .dark-leader-blend-overlay.blend-left {
          background: 
            linear-gradient(to left, transparent 50%, #050505 98%),
            linear-gradient(to right, transparent 80%, #050505 100%),
            linear-gradient(to bottom, transparent 65%, #050505 100%),
            linear-gradient(to top, transparent 85%, #050505 100%);
        }

        /* Right Column: Content */
        .dark-leader-content-col {
          padding: 40px 80px 40px 40px;
          box-sizing: border-box;
        }

        .dark-leader-content-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
        }

        .dark-leader-quote-icon {
          margin-bottom: 2px;
          opacity: 0.9;
        }

        .dark-leader-quote-headline {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          line-height: 1.28;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .dark-leader-paragraph {
          font-family: var(--font-sans);
          font-size: clamp(14px, 1.05vw, 15.5px);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          max-width: 580px;
        }

        /* Interactive Arrow Button Row */
        .dark-leader-interactive-row {
          background: transparent;
          border: none;
          padding: 0;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          max-width: 580px;
          cursor: pointer;
          text-align: left;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 18px;
          transition: all 0.3s ease;
        }

        .dark-leader-interactive-row:hover .dark-leader-arrow-badge {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
          transform: translateY(-2px);
        }

        .dark-leader-interactive-row:hover .dark-leader-sig-script {
          color: #ffffff;
        }

        .dark-leader-signature-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dark-leader-sig-script {
          font-family: var(--font-heading);
          font-style: normal;
          font-size: 28px;
          font-weight: 400;
          color: #b48564;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .dark-leader-role-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.55);
        }

        .dark-leader-arrow-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(180, 133, 100, 0.4);
          color: #b48564;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dark-leader-arrow-badge span {
          text-transform: uppercase;
        }

        /* Light Architectural Modal */
        .sobha-bio-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-bio-modal-box {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 85vh;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-bio-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          background: #f0f0f0;
          border: none;
          color: #333333;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .sobha-bio-modal-close:hover {
          background: #b48564;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .sobha-bio-modal-grid {
          display: grid;
          grid-template-columns: 4.5fr 7.5fr;
          height: 100%;
          max-height: 85vh;
        }

        .sobha-bio-modal-img-col {
          height: 100%;
          min-height: 450px;
          background: #f8f8f8;
        }

        .sobha-bio-modal-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .sobha-bio-modal-info-col {
          padding: 50px 44px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: #ffffff;
        }

        .sobha-bio-modal-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 14px;
          padding: 5px 14px;
          background: rgba(180, 133, 100, 0.08);
          border-radius: 4px;
          align-self: flex-start;
        }

        .sobha-bio-modal-title {
          font-family: var(--font-heading);
          font-size: 34px;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .sobha-bio-modal-sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #888888;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .sobha-bio-modal-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #b48564, #d4a574);
          margin-bottom: 28px;
          border-radius: 2px;
        }

        .sobha-bio-modal-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sobha-bio-p {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: #444444;
          margin: 0;
        }

        .sobha-bio-p:first-child::first-letter {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: #b48564;
          float: left;
          line-height: 1;
          margin-right: 6px;
          margin-top: 4px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .dark-leader-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .dark-leader-md-reversed .dark-leader-container {
            grid-template-columns: 1fr;
          }
          .dark-leader-md-reversed .dark-leader-content-col {
            order: initial;
            padding: 0 30px 40px;
          }
          .dark-leader-md-reversed .dark-leader-image-col {
            order: initial;
          }
          .dark-leader-content-col {
            padding: 0 30px 40px;
          }
          .dark-leader-img-wrapper {
            height: 480px;
          }
          .sobha-bio-modal-grid {
            grid-template-columns: 1fr;
          }
          .sobha-bio-modal-img-col {
            height: 260px;
            min-height: auto;
            max-height: 260px;
          }
          .sobha-bio-modal-info-col {
            padding: 30px 24px;
          }
        }

        @media (max-width: 600px) {
          .dark-leader-variant-section {
            padding: 50px 0;
          }
          .dark-leader-img-wrapper {
            height: 380px;
          }
          .dark-leader-content-col {
            padding: 0 20px 20px;
          }
          .dark-leader-md-reversed .dark-leader-content-col {
            padding: 0 20px 20px;
          }
        }
      `}})]})}function V({title:i="Build your career in real estate excellence.",description:a="Work on developments that redefine quality and design in modern India. At Aadhithya Mohan Properties, you'll refine your skills, take on meaningful challenges and grow with a team committed to raising industry standards.",btnText:t="JOIN THE TEAM",btnLink:o="/careers"}){return e.jsxs("section",{className:"about-careers-cta-section",children:[e.jsx("div",{className:"container careers-cta-container",children:e.jsxs(d,{animation:"fadeUp",children:[e.jsx("h2",{className:"section-title",children:i}),e.jsx("p",{className:"body-text",style:{margin:"0 auto 32px auto",maxWidth:"720px",textAlign:"center"},children:a}),e.jsx("div",{className:"careers-btn-wrapper",children:e.jsx(k,{href:o,theme:"dark",children:t})})]})}),e.jsx("style",{children:`
        .about-careers-cta-section {
          background-color: var(--color-bg-light, #FAF8F5);
          padding: 110px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid #EBE7DF;
        }

        .careers-cta-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }



        .careers-btn-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 640px) {
          .about-careers-cta-section {
            padding: 70px 20px;
          }
        }
      `})]})}const X=()=>(n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{className:"about-us-page",children:[e.jsx(A,{title:"Contact us for Apartments, Plots, Villas in Chennai",description:"Contact Aadhithya Mohan Properties for premium apartments, residential plots, and villas in Chennai. Explore trusted properties and find your ideal investment today.",canonicalUrl:"https://aadhithyamohanproperties.com/about-us"}),e.jsx(z,{}),e.jsx(S,{legacyYears:"10+",legacyTitle:"years of",legacySubtitle:"INCREDIBLE LEGACY",heading:"Where Trust Creates Lasting Value",paragraphs:["Founded in 2016, Aadhithya Mohan Properties has spent the past decade guided by a simple belief—that the true measure of real estate lies not merely in what is built, but in the trust it earns and the value it creates over time.","What began with residential apartments and thoughtfully planned land communities has evolved into a portfolio of luxury residences, premium land developments, and distinctive residential communities. While the scale and character of our projects have grown, the principles behind them have remained constant: meticulous planning, uncompromising standards, integrity, and a deep respect for craftsmanship.","As we enter our next decade, our ambition remains deliberately focused: to create developments that inspire confidence today and become a source of pride and enduring value for generations to come."],image:"/images/about/about-hero.png"}),e.jsx(T,{}),e.jsx(O,{}),e.jsx(D,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(U,{showExecutives:!1}),e.jsx(V,{}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Ultra-Luxury Theme-Aligned Styles */
        .about-us-page {
          background-color: var(--color-white);
        }

        /* 1. Hero Section (Reusing Global Crystal Moonlight Styles) */
        .project-hero-section {
          position: relative;
          height: 70vh; /* Taller for luxury feel */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .project-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(29, 53, 87, 0.4);
          z-index: 1;
        }

        .project-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-tag-reveal {

          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          color: var(--color-gold);

          margin-bottom: 24px;
        }

        .project-hero-title {
          color: var(--color-white);
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .project-hero-subtitle {

          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);

          text-transform: uppercase;
        }

        /* 2. Magazine-Style Overlap Section */
        .luxury-overlap-section {
          position: relative;
          width: 100%;
          padding-top: 100px;
          padding-bottom: 150px;
        }

        .overlap-image-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 75%;
          height: 100%;
          z-index: 0;
        }

        .overlap-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
        }

        .relative-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: 700px;
        }

        .overlap-content-box {
          background-color: var(--color-white);
          padding: 80px 100px;
          width: 55%;
          box-shadow: 0 30px 60px rgba(29, 53, 87, 0.08);
          margin-top: 100px;
        }

        .overlap-divider {
          width: 60px;
          height: 1px;
          background-color: var(--color-gold);
          margin: 40px 0;
        }

        .luxury-body-text {

          font-size: 16px;
          line-height: 2;
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }

        .lead-text {
          font-size: 20px;
          color: var(--color-text);
          font-weight: 400;
          line-height: 1.8;
        }

        /* 3. Massive Scale Typography (Stats) */
        .massive-stats-section {
          padding: 120px 0;
          background-color: var(--color-bg-light);
        }

        .raw-stats-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--container-width);
          margin: 0 auto;
        }

        .raw-stat-item {
          text-align: center;
          flex: 1;
        }

        .raw-stat-number {

          font-size: clamp(80px, 10vw, 140px);
          font-weight: 300;
          color: var(--color-primary);
          line-height: 0.9;
          margin-bottom: 24px;

        }

        .raw-stat-plus {
          color: var(--color-gold);
          font-size: 0.6em;
          vertical-align: top;
          margin-left: 8px;
        }

        .raw-stat-k {
          font-size: 0.7em;
          font-weight: 300;
        }

        .raw-stat-label {

          font-size: 12px;
          font-weight: 400;

          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .raw-stat-divider {
          width: 1px;
          height: 120px;
          background-color: rgba(29, 53, 87, 0.08);
        }

        /* 4. Elegant Timeline */
        .elegant-timeline-section {
          padding: 150px 0 200px;
        }

        .timeline-raw-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-raw-item {
          display: flex;
          align-items: flex-start;
          gap: 80px;
          padding: 60px 0;
          border-bottom: 1px solid rgba(29, 53, 87, 0.08);
        }

        .timeline-raw-year {
          flex: 0 0 150px;

          font-size: 48px;
          color: var(--color-gold);
          line-height: 1;
        }

        .timeline-raw-content {
          flex: 1;
        }

        .timeline-raw-title {

          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .timeline-raw-desc {

          font-size: 17px;
          line-height: 1.9;
          color: var(--color-text-muted);
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .overlap-content-box {
            width: 70%;
            padding: 60px;
          }
        }

        @media (max-width: 768px) {
          .luxury-overlap-section {
            padding-top: 0;
          }
          .overlap-image-wrapper {
            position: relative;
            width: 100%;
            height: 50vh;
          }
          .relative-container {
            min-height: auto;
          }
          .overlap-content-box {
            width: 90%;
            margin: -100px auto 0;
            padding: 40px 30px;
          }
          
          .raw-stats-flex {
            flex-direction: column;
            gap: 60px;
          }
          .raw-stat-divider {
            width: 100px;
            height: 1px;
          }

          .timeline-raw-item {
            flex-direction: column;
            gap: 20px;
            padding: 40px 0;
          }
        }
      `}}),e.jsx(I,{})]}));export{X as default};

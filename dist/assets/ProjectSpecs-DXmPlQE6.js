import{j as e}from"./index-Bk12-aA-.js";import{r as a,d as P}from"./vendor-react-CdZYeNEq.js";import{S as v}from"./ScrollReveal-Dk-cSp4Z.js";import{b as A,c as O}from"./vendor-icons-K0xaSwY_.js";function $({specs:i=[],title:w="PROJECT",highlightTitle:j="SPECIFICATIONS",subtitle:D="PROJECT DETAILS"}){const[s,y]=a.useState(0),[l,m]=a.useState(!1),[c,N]=a.useState(0),[L,F]=a.useState({x:0,y:0}),[h,u]=a.useState(!1),[S,I]=a.useState(!1),k=a.useRef(null),b=a.useRef(null),x=a.useRef(null),p=a.useRef(0),d=a.useRef(0);a.useEffect(()=>{if(x.current){const t=x.current.querySelector(".sp2-tag.active");t&&typeof t.scrollIntoView=="function"&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},[s]),a.useEffect(()=>{if(c===s)return;const t=setTimeout(()=>N(s),50);return()=>clearTimeout(t)},[s,c]),a.useEffect(()=>{const t=b.current;if(!t)return;const n=new IntersectionObserver(([f])=>{f.isIntersecting&&I(!0)},{threshold:.15});return n.observe(t),()=>n.disconnect()},[]);const r=a.useCallback(t=>{t===s||l||(m(!0),setTimeout(()=>{y(t),m(!1)},280))},[s,l]);a.useEffect(()=>{if(h||i.length===0)return;const t=setInterval(()=>{l||r((s+1)%i.length)},1e4);return()=>clearInterval(t)},[s,l,h,i.length,r]);const E=a.useCallback(t=>{p.current=t.targetTouches[0].clientX},[]),T=a.useCallback(t=>{d.current=t.targetTouches[0].clientX},[]),z=a.useCallback(()=>{if(!p.current||!d.current)return;const t=p.current-d.current,n=45;t>n?r((s+1)%i.length):t<-n&&r((s-1+i.length)%i.length),p.current=0,d.current=0},[s,r,i.length]);if(!i||i.length===0)return null;const o=i[s];return e.jsxs("section",{className:`sp2-section ${S?"revealed":""}`,id:"specifications",style:{background:"#ffffff"},ref:b,children:[e.jsxs("div",{className:"sp2-layout",children:[e.jsxs(v,{className:"sp2-left",animation:"fadeUp",delay:.1,children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[w," ",e.jsx("br",{}),e.jsx("span",{style:{color:"#b48564"},children:j})]})}),e.jsx("div",{className:"sp2-tags",ref:x,children:e.jsx("div",{className:"sp2-tag-flow",children:i.map((t,n)=>e.jsxs(P.Fragment,{children:[n>0&&e.jsx("span",{className:"sp2-tag-separator",children:"|"}),e.jsxs("button",{className:`sp2-tag ${n===s?"active":""}`,onClick:()=>r(n),type:"button",children:[e.jsx("span",{className:"sp2-tag-text",children:t.label}),n===s&&e.jsx("span",{className:"sp2-tag-gold-underline"})]})]},t.id||n))})})]}),e.jsx(v,{className:"sp2-right",animation:"fadeUp",delay:.25,as:"div",children:e.jsx("div",{className:"sp2-card",ref:k,onTouchStart:E,onTouchMove:T,onTouchEnd:z,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:e.jsxs("div",{className:`sp2-card-inner ${l?"hide":"show"}`,children:[e.jsxs("div",{className:"sp2-card-info",children:[e.jsxs("div",{className:"sp2-card-num-wrapper",children:[e.jsx("span",{className:"sp2-card-num",children:String(c+1).padStart(2,"0")},c),e.jsx("div",{className:"sp2-card-num-gold-line"})]}),e.jsx("h3",{className:"sp2-card-title",children:o.title}),e.jsx("div",{className:"sp2-card-sep"}),e.jsx("div",{className:"sp2-card-details",children:o.details&&o.details.map((t,n)=>{let f=t;if(typeof t=="string"){const g=t.indexOf(":");if(g>0&&g<=40){const R=t.slice(0,g+1),C=t.slice(g+1);f=e.jsxs(e.Fragment,{children:[e.jsx("strong",{style:{fontWeight:600,color:"#111111"},children:R}),C]})}}return e.jsx("p",{className:"sp2-card-detail-text",children:f},n)})}),e.jsxs("div",{className:"sp2-card-bottom-nav",children:[e.jsx("button",{className:"sp2-nav-arrow-btn prev",onClick:()=>r((s-1+i.length)%i.length),"aria-label":"Previous specification",type:"button",children:e.jsx(A,{size:16})}),e.jsx("span",{className:"sp2-bottom-nav-num",children:String(s+1).padStart(2,"0")}),e.jsx("div",{className:"sp2-bottom-nav-dashes",children:i.map((t,n)=>e.jsx("div",{className:`sp2-bottom-dash ${n===s?"active":""}`,onClick:()=>r(n)},n))}),e.jsx("span",{className:"sp2-bottom-nav-total",children:String(i.length).padStart(2,"0")}),e.jsx("button",{className:"sp2-nav-arrow-btn next",onClick:()=>r((s+1)%i.length),"aria-label":"Next specification",type:"button",children:e.jsx(O,{size:16})})]})]}),e.jsx("div",{className:"sp2-card-visual",children:o.image&&e.jsx("img",{src:o.image,alt:o.title,className:"sp2-card-img"})})]})})})]}),e.jsx("style",{children:`
        .sp2-section {
          position: relative;
          z-index: 10;
          padding: 60px 0 90px;
          min-height: calc(100vh - 55px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── MAIN UNIFIED LAYOUT ── */
        .sp2-layout {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 56px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          align-items: flex-start;
        }

        /* ── LEFT SIDE: SPECIFICATION TABS ── */
        .sp2-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .sp2-left .section-header {
          margin-bottom: 24px;
          text-align: left;
        }

        .sp2-tags {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 8px;
        }

        .sp2-tag-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
          padding: 0;
          background-image: linear-gradient(to bottom, transparent 55px, rgba(0, 0, 0, 0.08) 55px, rgba(0, 0, 0, 0.08) 56px);
          background-size: 100% 56px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .sp2-tag-separator {
          color: rgba(0, 0, 0, 0.22);
          margin: 0 14px;
          font-size: 13px;
          font-weight: 400;
          pointer-events: none;
          user-select: none;
        }

        .sp2-tag {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
          position: relative;
          font-family: var(--font-sans);
          font-size: 17px;
          color: #666666;
          transition: all 0.25s ease;
          outline: none;
          box-shadow: none !important;
          height: 56px;
          display: inline-flex;
          align-items: center;
          font-weight: 400;
        }

        .sp2-tag:hover, .sp2-tag.active {
          color: #000000;
          font-weight: 600 !important;
        }

        .sp2-tag-gold-underline {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: #b48564;
          z-index: 2;
          border-radius: 1.5px;
          animation: sp2-line-reveal 0.25s ease forwards;
        }

        @keyframes sp2-line-reveal {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* ── RIGHT SIDE: SPEC DETAILS PANEL ── */
        .sp2-right {
          display: flex;
          align-items: stretch;
          width: 100%;
        }

        .sp2-card {
          width: 100%;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(180, 133, 100, 0.15);
          overflow: hidden;
          padding: 0;
          height: 550px;
          min-height: 550px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .sp2-card-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 0;
          width: 100%;
          align-items: stretch;
          height: 100%;
          position: relative;
        }

        .sp2-card-inner.hide {
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.2s ease;
        }
        .sp2-card-inner.show {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp2-card-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 40px 24px 32px 40px;
          min-width: 0;
          box-sizing: border-box;
          z-index: 2;
          position: relative;
        }

        .sp2-card-num-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .sp2-card-num {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 500;
          color: #b48564;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .sp2-card-num-gold-line {
          width: 24px;
          height: 2px;
          background: #b48564;
          margin-top: 6px;
        }

        .sp2-card-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 14px 0;
        }

        .sp2-card-sep {
          width: 36px;
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .sp2-card-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .sp2-card-detail-text {
          font-family: var(--font-sans);
          font-size: 16px;
          color: #4f4f4f;
          line-height: 1.55;
          margin: 0;
        }

        .sp2-card-bottom-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .sp2-nav-arrow-btn {
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.1);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b48564;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }
        .sp2-nav-arrow-btn:hover {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
        }

        .sp2-bottom-nav-num, .sp2-bottom-nav-total {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #888888;
          font-weight: 500;
        }

        .sp2-bottom-nav-dashes {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          max-width: 220px;
        }

        .sp2-bottom-dash {
          width: 14px;
          height: 2px;
          background: #e0e0e0;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .sp2-bottom-dash.active {
          background: #b48564;
        }

        .sp2-card-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: transparent;
          min-width: 0;
        }

        .sp2-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right center;
          pointer-events: none;
        }

        

        /* ── RESPONSIVE MOBILE ADAPTATION ── */
        @media (max-width: 960px) {
          .sp2-section {
            padding: 36px 0;
          }

          .sp2-layout {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 0 20px;
          }

          .sp2-left .section-header {
            margin-bottom: 16px;
            text-align: center;
          }

          .sp2-tag-flow {
            justify-content: center;
            background-size: 100% 46px;
            background-image: linear-gradient(to bottom, transparent 45px, rgba(0, 0, 0, 0.08) 45px, rgba(0, 0, 0, 0.08) 46px);
          }

          .sp2-tag-separator {
            margin: 0 10px;
            font-size: 12px;
          }

          .sp2-tag {
            font-size: 18px;
            height: 46px;
          }

          .sp2-card {
            padding: 24px 20px;
            min-height: 380px;
            height: auto;
          }

          .sp2-card-inner {
            grid-template-columns: 1fr;
            gap: 16px;
            height: 100%;
          }

          .sp2-card-info {
            min-height: 330px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .sp2-card-visual {
            display: none;
          }

          .sp2-card-title {
            font-size: 19px;
            margin-bottom: 10px;
          }

          .sp2-card-sep {
            margin-bottom: 14px;
          }

          .sp2-card-details {
            gap: 10px;
            margin-bottom: 20px;
          }

          .sp2-card-detail-text {
            font-size: 14.5px;
          }

          .sp2-bottom-nav-dashes {
            max-width: 160px;
          }

          .sp2-bottom-dash {
            width: 10px;
          }
        }
      `})]})}export{$ as P};

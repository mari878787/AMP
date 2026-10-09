import{j as e}from"./index-C07uKazo.js";import{f,r as u,L as g}from"./vendor-react-CdZYeNEq.js";import{S as y,N as j,F as v}from"./Footer-qZEqU4BP.js";import{S as i}from"./ScrollReveal-3JBf7TXz.js";import{B as N}from"./Button-DjmqGr6k.js";import{B as m}from"./blogsData-F9z9f-TS.js";import"./vendor-icons-K0xaSwY_.js";import"./vendor-gsap-jyD3UH3M.js";function S(){var n,s,d,c;const{slug:r}=f();u.useEffect(()=>{window.scrollTo(0,0)},[r]);const a=m.find(o=>o.slug===r||o.id===r)||m[0],x=r&&a?`${a.title} | Aadhithya Mohan Properties`:"Real Estate Blog & Property Insights | Aadhithya Mohan Properties",h=r&&a&&a.subtitle?a.subtitle:"Explore real estate insights, property investment tips, market trends, project updates, and expert guidance from Aadhithya Mohan Properties.";return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:x,description:h,canonicalUrl:r?`https://aadhithyamohanproperties.com/blog/${r}`:"https://aadhithyamohanproperties.com/blog",ogType:r?"article":"website"}),e.jsx(j,{darkText:!1}),e.jsxs("main",{className:"blog-details-page",children:[e.jsxs("section",{className:"blog-hero-section",children:[e.jsx("div",{className:"blog-hero-bg",style:{backgroundImage:`url(${a.image})`}}),e.jsx("div",{className:"blog-hero-overlay"}),e.jsxs("div",{className:"container blog-hero-container",children:[e.jsx(i,{animation:"fadeUp",delay:.1,children:e.jsx("div",{className:"blog-category-badge",children:a.category})}),e.jsx(i,{animation:"fadeUp",delay:.2,children:e.jsx("h1",{className:"blog-hero-title",children:a.title})}),a.subtitle&&e.jsx(i,{animation:"fadeUp",delay:.3,children:e.jsx("p",{className:"blog-hero-subtitle",children:a.subtitle})}),e.jsx(i,{animation:"fadeUp",delay:.4,children:e.jsxs("div",{className:"blog-meta-bar",children:[e.jsxs("span",{className:"blog-meta-item",children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",a.date]}),e.jsx("span",{className:"blog-meta-dot",children:"•"}),e.jsxs("span",{className:"blog-meta-item",children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",a.readTime]}),e.jsx("span",{className:"blog-meta-dot",children:"•"}),e.jsx("span",{className:"blog-meta-item",children:"By Aadhithya Mohan Properties"})]})})]})]}),e.jsxs("div",{className:"container blog-content-wrapper",children:[e.jsxs("nav",{className:"blog-breadcrumb",children:[e.jsx(g,{to:"/home",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(g,{to:"/home#blog",children:"Blogs"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:a.title})]}),e.jsxs("article",{className:"blog-article-body",children:[((n=a.content)==null?void 0:n.intro)&&e.jsx(i,{animation:"fadeUp",delay:.1,children:e.jsx("p",{className:"blog-lead-text",children:a.content.intro})}),(d=(s=a.content)==null?void 0:s.sections)==null?void 0:d.map((o,b)=>{var p;return e.jsxs("div",{className:"blog-section-block",children:[e.jsx(i,{animation:"fadeUp",delay:.1,children:e.jsx("h2",{className:"blog-heading",children:o.heading})}),(p=o.body)==null?void 0:p.map((t,l)=>e.jsx(i,{animation:"fadeUp",delay:.15,children:e.jsx("p",{className:"blog-paragraph",children:t})},l)),o.values&&e.jsx("div",{className:"blog-values-grid",children:o.values.map((t,l)=>e.jsxs(i,{animation:"fadeUp",delay:.1*l,className:"value-card",children:[e.jsxs("div",{className:"value-card-num",children:["0",l+1]}),e.jsx("h4",{className:"value-card-title",children:t.title}),e.jsx("p",{className:"value-card-desc",children:t.desc})]},l))}),o.timeline&&e.jsx("div",{className:"blog-timeline-container",children:o.timeline.map((t,l)=>e.jsxs(i,{animation:"fadeUp",delay:.15*l,className:"timeline-node",children:[e.jsx("div",{className:"timeline-year-badge",children:t.year}),e.jsxs("div",{className:"timeline-content-card",children:[e.jsx("h4",{className:"timeline-node-title",children:t.title}),e.jsx("p",{className:"timeline-node-desc",children:t.desc})]})]},l))}),o.bullets&&e.jsx(i,{animation:"fadeUp",delay:.2,className:"blog-bullets-box",children:e.jsx("ul",{className:"blog-bullets-list",children:o.bullets.map((t,l)=>e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-check"}),e.jsx("span",{children:t})]},l))})}),o.note&&e.jsx(i,{animation:"fadeUp",delay:.25,children:e.jsx("blockquote",{className:"blog-quote-box",children:e.jsxs("p",{children:['"',o.note,'"']})})})]},b)}),((c=a.content)==null?void 0:c.summary)&&e.jsxs(i,{animation:"fadeUp",delay:.2,className:"blog-summary-card",children:[e.jsx("div",{className:"summary-badge",children:"MILESTONE DEDICATION"}),e.jsx("h3",{className:"summary-title",children:a.content.summary[0]}),e.jsx("h4",{className:"summary-subtitle",children:a.content.summary[1]}),e.jsx("p",{className:"summary-desc",children:a.content.summary[2]}),e.jsx("div",{className:"summary-tagline",children:a.content.summary[3]})]}),e.jsxs(i,{animation:"fadeUp",delay:.25,className:"blog-cta-box",children:[e.jsx("h3",{children:"Explore Our Projects"}),e.jsx("p",{children:"Discover our residential projects, villas, apartments and plotted developments and find a property that fits your vision for the future."}),e.jsx("div",{className:"cta-btn-wrap",children:e.jsx(N,{href:"/projects",theme:"dark",children:"PLAN YOUR NEXT STEP"})})]})]})]})]}),e.jsx(v,{}),e.jsx("style",{children:`
        .blog-details-page {
          background-color: var(--color-bg-light);
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .blog-hero-section {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          padding: 160px 0 60px;
          overflow: hidden;
          background-color: var(--color-bg-navy);
        }

        .blog-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          transform: scale(1.05);
        }

        .blog-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(13, 20, 33, 0.4) 0%, rgba(13, 20, 33, 0.95) 100%);
        }

        .blog-hero-container {
          position: relative;
          z-index: 2;
          color: #ffffff;
          max-width: 960px;
        }

        .blog-category-badge {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: #fcedd3;
          background: rgba(252, 237, 211, 0.15);
          border: 1px solid rgba(252, 237, 211, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .blog-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .blog-hero-subtitle {
          font-size: clamp(16px, 2vw, 22px);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 300;
          margin-bottom: 24px;
        }

        .blog-meta-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          flex-wrap: wrap;
        }

        .blog-meta-item i {
          margin-right: 6px;
          color: var(--color-highlight);
        }

        .blog-meta-dot {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Content Container */
        .blog-content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .blog-breadcrumb {
          font-size: 13px;
          color: #777777;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .blog-breadcrumb a {
          color: #444444;
          text-decoration: none;
          transition: color 0.2s;
        }

        .blog-breadcrumb a:hover {
          color: var(--color-highlight);
        }

        .blog-breadcrumb .sep {
          color: #cccccc;
        }

        .blog-breadcrumb .current {
          color: var(--color-highlight);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 350px;
        }

        /* Article Styling */
        .blog-article-body {
          color: #222222;
        }

        .blog-lead-text {
          font-size: 20px;
          line-height: 1.7;
          color: #1a202c;
          font-weight: 400;
          margin-bottom: 48px;
          border-left: 3px solid var(--color-highlight);
          padding-left: 20px;
        }

        .blog-section-block {
          margin-bottom: 54px;
        }

        .blog-heading {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 400;
          color: #0d1421;
          margin-top: 40px;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .blog-paragraph {
          font-size: 16px;
          line-height: 1.85;
          color: #444444;
          margin-bottom: 20px;
        }

        /* Core Values Grid */
        .blog-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin: 32px 0;
        }

        .value-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .value-card-num {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-highlight);
          margin-bottom: 8px;
          letter-spacing: 0.1em;
        }

        .value-card-title {
          font-family: var(--font-heading);
          font-size: 20px;
          color: #111111;
          margin-bottom: 8px;
        }

        .value-card-desc {
          font-size: 14px;
          color: #666666;
          line-height: 1.6;
          margin: 0;
        }

        /* Timeline Container */
        .blog-timeline-container {
          position: relative;
          margin: 40px 0;
          padding-left: 28px;
          border-left: 2px solid rgba(197, 155, 96, 0.3);
        }

        .timeline-node {
          position: relative;
          margin-bottom: 32px;
        }

        .timeline-node:last-child {
          margin-bottom: 0;
        }

        .timeline-year-badge {
          position: absolute;
          left: -48px;
          top: 0;
          background: var(--color-highlight);
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 0.05em;
        }

        .timeline-content-card {
          background: #ffffff;
          padding: 20px 24px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        }

        .timeline-node-title {
          font-family: var(--font-heading);
          font-size: 18px;
          color: #111111;
          margin-bottom: 6px;
        }

        .timeline-node-desc {
          font-size: 14px;
          color: #555555;
          line-height: 1.6;
          margin: 0;
        }

        /* Bullets List */
        .blog-bullets-box {
          background: #ffffff;
          padding: 28px 32px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          margin: 28px 0;
        }

        .blog-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .blog-bullets-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #333333;
          font-weight: 500;
        }

        .blog-bullets-list li i {
          color: var(--color-highlight);
          background: rgba(197, 155, 96, 0.12);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Quote Box */
        .blog-quote-box {
          margin: 36px 0;
          padding: 28px 32px;
          background: #fdf8f0;
          border-left: 4px solid var(--color-highlight);
          border-radius: 0 8px 8px 0;
        }

        .blog-quote-box p {
          font-family: var(--font-heading);
          font-size: 20px;
          font-style: italic;
          color: #2c251d;
          line-height: 1.6;
          margin: 0;
        }

        /* Summary Card */
        .blog-summary-card {
          background: linear-gradient(135deg, #0d1421 0%, #1a2538 100%);
          color: #ffffff;
          padding: 44px 36px;
          border-radius: 12px;
          text-align: center;
          margin: 60px 0;
          box-shadow: 0 12px 40px rgba(13, 20, 33, 0.2);
        }

        .summary-badge {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--color-highlight);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .summary-title {
          font-family: var(--font-heading);
          font-size: 28px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .summary-subtitle {
          font-size: 18px;
          color: #fcedd3;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .summary-desc {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 650px;
          margin: 0 auto 24px;
          line-height: 1.7;
        }

        .summary-tagline {
          font-family: var(--font-heading);
          font-size: 16px;
          letter-spacing: 0.1em;
          color: var(--color-highlight);
        }

        /* CTA Box */
        .blog-cta-box {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }

        .blog-cta-box h3 {
          font-family: var(--font-heading);
          font-size: 26px;
          color: #111111;
          margin-bottom: 12px;
        }

        .blog-cta-box p {
          font-size: 15px;
          color: #666666;
          max-width: 550px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        .cta-btn-wrap {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .blog-timeline-container {
            padding-left: 0;
            border-left: none;
          }

          .timeline-year-badge {
            position: relative;
            left: 0;
            top: 0;
            display: inline-block;
            margin-bottom: 10px;
          }

          .blog-summary-card {
            padding: 30px 20px;
          }
        }
      `})]})}export{S as default};

import{j as e}from"./index-C07uKazo.js";import{r as s,u as N}from"./vendor-react-CdZYeNEq.js";import{S,N as R,T as A,F as L}from"./Footer-qZEqU4BP.js";import{S as w}from"./ScrollReveal-3JBf7TXz.js";import{B}from"./Button-DjmqGr6k.js";import{b as E,c as U,k as M,l as O}from"./vendor-icons-K0xaSwY_.js";import"./vendor-gsap-jyD3UH3M.js";function I({project:a,onSelectTeaser:d}){const o=a.images&&a.images.length>0?a.images:[a.image||a.image],[g,p]=s.useState(0),[b,u]=s.useState(!1),[f,k]=s.useState(!1),l=s.useRef(null),x=s.useRef(null),h=5e3;s.useEffect(()=>{const t=l.current;if(!t)return;const i=new IntersectionObserver(([v])=>{k(v.isIntersecting)},{threshold:.25});return i.observe(t),()=>{t&&i.unobserve(t)}},[]),s.useEffect(()=>{if(!(!f||o.length<=1))return x.current=setInterval(()=>{p(t=>(t+1)%o.length)},h),()=>{x.current&&clearInterval(x.current)}},[f,g,o.length]);const r=t=>{t&&(t.preventDefault(),t.stopPropagation()),p(i=>(i+1)%o.length)},c=t=>{t&&(t.preventDefault(),t.stopPropagation()),p(i=>(i-1+o.length)%o.length)},m=(t,i)=>{t&&(t.preventDefault(),t.stopPropagation()),p(i)},n=t=>{a.teaserPoster&&d&&(t.preventDefault(),d({image:a.teaserPoster,title:a.title}))},y=a.status?a.status.toUpperCase():"ONGOING";return e.jsxs("div",{ref:l,className:"maia-story-card",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[e.jsx("a",{href:a.link||"#",className:"maia-story-card-link",onClick:n,children:e.jsxs("div",{className:"maia-story-img-wrapper",children:[o.map((t,i)=>e.jsxs("picture",{className:`maia-story-picture ${i===g?"active":""}`,children:[i===0&&a.mobileImage&&e.jsx("source",{media:"(max-width: 768px)",srcSet:encodeURI(a.mobileImage)}),e.jsx("img",{src:t,alt:`${a.title} - Slide ${i+1}`,className:"maia-story-img"})]},i)),e.jsx("div",{className:"maia-story-top-overlay"}),e.jsx("div",{className:"maia-story-bottom-overlay"}),e.jsx("div",{className:"maia-story-progress-bar-container",children:o.map((t,i)=>{const v=i===g,P=i<g,j=v&&f;return e.jsx("div",{className:"maia-story-progress-segment",onClick:z=>m(z,i),children:e.jsx("div",{className:`maia-story-progress-fill ${j?"animating":P?"filled":""}`,style:{animationDuration:j?`${h}ms`:"0ms"}})},i)})}),o.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"maia-story-tap-zone left",onClick:c,title:"Previous Photo",children:e.jsx("button",{type:"button",className:"maia-story-nav-arrow","aria-label":"Previous image",onClick:c,children:e.jsx(E,{size:20})})}),e.jsx("div",{className:"maia-story-tap-zone right",onClick:r,title:"Next Photo",children:e.jsx("button",{type:"button",className:"maia-story-nav-arrow","aria-label":"Next image",onClick:r,children:e.jsx(U,{size:20})})})]}),e.jsx("div",{className:"maia-story-content-box",children:e.jsxs("div",{className:"maia-story-bottom-layout",children:[e.jsxs("div",{className:"maia-story-info-col",children:[e.jsx("div",{className:"maia-story-status-badge",children:y}),e.jsx("h3",{className:"maia-story-title",children:a.title}),e.jsxs("div",{className:"maia-story-location-row",children:[e.jsx(M,{size:16,className:"maia-story-pin-icon"}),e.jsx("span",{children:a.location})]}),a.description&&e.jsx("p",{className:"maia-story-description",children:a.description})]}),e.jsx("div",{className:"maia-story-action-col",children:e.jsxs("div",{className:"maia-story-explore-btn",children:[e.jsx("span",{children:"EXPLORE"}),e.jsx(O,{size:14,className:"maia-story-arrow"})]})})]})})]})}),e.jsx("style",{children:`
        .maia-story-card {
          position: relative;
          width: 100%;
          border-radius: 0px;
          overflow: hidden;
          background-color: #0b0b0b;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .maia-story-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
          width: 100%;
          height: 100%;
        }

        .maia-story-img-wrapper {
          position: relative;
          width: 100%;
          height: clamp(550px, 85vh, 780px);
          overflow: hidden;
          background-color: #0b0b0b;
        }

        @media (max-width: 768px) {
          .maia-story-img-wrapper {
            height: clamp(480px, 75vh, 600px);
          }
        }

        .maia-story-picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          scale: 1.04;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), scale 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          display: block;
        }

        .maia-story-picture.active {
          opacity: 1;
          scale: 1;
          z-index: 2;
        }

        .maia-story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Gradient Overlays */
        .maia-story-top-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 110px;
          // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
          z-index: 3;
          pointer-events: none;
        }

        .maia-story-bottom-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 340px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 55%, rgba(0, 0, 0, 0) 100%);
          z-index: 3;
          pointer-events: none;
        }

        /* ── TOP SEGMENTED PROGRESS BARS ── */
        .maia-story-progress-bar-container {
          position: absolute;
          top: 24px;
          left: clamp(20px, 4vw, 50px);
          right: clamp(20px, 4vw, 50px);
          z-index: 10;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .maia-story-progress-segment {
          flex: 1;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: height 0.2s ease, background 0.2s ease;
        }

        .maia-story-progress-segment:hover {
          height: 5px;
          background: rgba(255, 255, 255, 0.55);
        }

        .maia-story-progress-fill {
          height: 100%;
          width: 0%;
          background: #ffffff;
          border-radius: 4px;
        }

        .maia-story-progress-fill.filled {
          width: 100%;
        }

        .maia-story-progress-fill.animating {
          animation: maiaSegmentFill linear forwards;
        }

        @keyframes maiaSegmentFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        /* Navigation Click Zones */
        .maia-story-tap-zone {
          position: absolute;
          top: 50px;
          bottom: 220px;
          width: 25%;
          z-index: 8;
          display: flex;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .maia-story-tap-zone.left {
          left: 0;
          padding-left: 20px;
          justify-content: flex-start;
        }

        .maia-story-tap-zone.right {
          right: 0;
          padding-right: 20px;
          justify-content: flex-end;
        }

        .maia-story-card:hover .maia-story-tap-zone {
          opacity: 1;
        }

        .maia-story-nav-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .maia-story-nav-arrow:hover {
          background: rgba(180, 133, 100, 0.85);
          transform: scale(1.1);
        }

        /* ── BOTTOM OVERLAY CONTENT ── */
        .maia-story-content-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 5;
          padding: 30px clamp(20px, 4vw, 50px) 36px clamp(20px, 4vw, 50px);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Status Pill Badge (Glassmorphic Blur Effect) */
        .maia-story-status-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
          margin-bottom: 12px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 16px rgba(0, 0, 0, 0.25);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* Project Title (Matching Reference Screenshot) */
        .maia-story-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
        }

        /* Location Row */
        .maia-story-location-row {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.92);
          font-family: var(--font-sans);
          font-size: 14.5px;
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }

        .maia-story-pin-icon {
          color: #ffffff;
          flex-shrink: 0;
        }

        /* Description Paragraph (Matching Reference Screenshot) */
        .maia-story-description {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          max-width: 680px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── BOTTOM OVERLAY LAYOUT (2-COLUMN RESPONSIVE) ── */
        .maia-story-bottom-layout {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .maia-story-info-col {
          flex: 1;
          max-width: 760px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .maia-story-action-col {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          padding-bottom: 2px;
        }

        @media (max-width: 768px) {
          .maia-story-bottom-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .maia-story-action-col {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 4px;
          }
        }

        /* ── ULTRA-CLEAR OPTICAL GLASS BUTTON ── */
        .maia-story-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #ffffff;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.30) 0%, 
            rgba(255, 255, 255, 0.08) 45%,
            rgba(255, 255, 255, 0.22) 100%
          );
          backdrop-filter: blur(24px) saturate(210%) brightness(115%);
          -webkit-backdrop-filter: blur(24px) saturate(210%) brightness(115%);
          padding: 12px 28px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 
            inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.85),
            inset 0 -1.5px 1.5px 0 rgba(255, 255, 255, 0.25),
            inset 0 0 12px 0 rgba(255, 255, 255, 0.15),
            0 12px 32px rgba(0, 0, 0, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          user-select: none;
        }

        .maia-story-explore-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.7) 50%, 
            transparent 100%
          );
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .maia-story-explore-btn:hover {
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.45) 0%, 
            rgba(255, 255, 255, 0.16) 50%,
            rgba(255, 255, 255, 0.35) 100%
          );
          border-color: rgba(255, 255, 255, 0.9);
          box-shadow: 
            inset 0 2px 2px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.4),
            inset 0 0 20px 0 rgba(255, 255, 255, 0.25),
            0 14px 40px rgba(0, 0, 0, 0.45);
          transform: translateY(-2px);
        }

        .maia-story-card:hover .maia-story-explore-btn::before {
          left: 120%;
        }

        .maia-story-arrow {
          transition: transform 0.3s ease;
        }

        .maia-story-card:hover .maia-story-arrow {
          transform: translateX(4px);
        }
      `})]})}const C=[{id:1,title:"Crystal Moonlight",location:"Medavakkam, Chennai",category:"Villas",status:"Ongoing",siteExtent:"2.25 Acres",totalUnits:"47 Villas",bhkConfig:"3 & 4 BHK",structure:"G + 1 & G + 2",unitSize:"2,200 - 3,300 Sq.Ft.",reraNo:"TN/29/Building/001/2024",price:"₹1 Cr - ₹3 Cr",priceRange:"₹1 Cr - ₹3 Cr",bedrooms:["3 BHK","4 BHK"],image:"/images/project/CML/Cover/Look_1.png",mobileImage:"/images/project/CML/Cover/Look_1.png",images:["/images/project/CML/Cover/Look_1.png","/images/project/CML/Cover/Look_2.png","/images/project/CML/Cover/Look_3.png","/images/project/CML/Cover/Look_4.png"],description:"A sanctuary of refined luxury in Medavakkam. 47 bespoke 3 & 4 BHK villas across 2.25 acres, crafted with timeless architecture, private gardens, and world-class amenities.",link:"/projects/villas/crystal-moonlight-villa-in-medavakkam"},{id:2,title:"Pasha Pinnacle",location:"Royapettah, Chennai",category:"Apartments",status:"Ongoing",siteExtent:"2.5 Acres",totalUnits:"12 Units",bhkConfig:"3 BHK",structure:"Stilt + 3 Floors",unitSize:"1,335 - 1,358 Sq.Ft.",reraNo:"",price:"Under ₹1 Cr",priceRange:"Under ₹1 Cr",bedrooms:["3 BHK"],image:"/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg",mobileImage:"/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg",images:["/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg","/images/project/pasha-pinnacle/extirior/3 Resized PP 16x9.jpg","/images/project/pasha-pinnacle/extirior/4 Resized PP 16x9.jpg","/images/project/pasha-pinnacle/extirior/5 Resized PP 16x9.jpg"],description:"Exclusive 3 BHK luxury residences in the heart of Royapettah. Combining classic elegance with modern comforts across 12 private units on a 2.5-acre site.",link:"/projects/apartments/pasha-pinnacle-luxury-apartment-in-royapettah"},{id:3,title:"CMR Global City",location:"Maduranthakam, Chennai",category:"Plots",status:"Ongoing",siteExtent:"3.6 Acres",totalUnits:"122 Plots",bhkConfig:"Plots",structure:"Ready-to-Build Residential Plots",unitSize:"610 - 2,694 Sq.Ft.",reraNo:"TN/35/Layout/1568/2024",price:"₹1 Cr - ₹3 Cr",priceRange:"₹1 Cr - ₹3 Cr",image:"/images/project/CMR/4.png",mobileImage:"/images/project/CMR/mobile-hero.png",images:["/images/project/CMR/4.png","/images/project/CMR/hero.webp","/images/project/CMR/Upscaled/5.webp","/images/project/CMR/Upscaled/3.webp"],description:"A premium 3.6-acre gated township of 122 ready-to-build residential plots in Maduranthakam with wide paved roads and lush green parks.",link:"/projects/plots/cmr-global-city-villa-plots-in-maduranthakam"},{id:4,title:"Ashok Nagar",location:"Maduranthakam, Chennai",category:"Plots",status:"Ongoing",siteExtent:"2.30 Acres",totalUnits:"48 Plots",bhkConfig:"Villa Plots",structure:"Ready-to-Build Residential Plots",unitSize:"657 - 1,947 Sq.Ft.",reraNo:"DTCP: 144/2026",price:"Under ₹1 Cr",priceRange:"Under ₹1 Cr",image:"/images/project/ashok-nagar/cards.webp",mobileImage:"/images/project/ashok-nagar/mobile-hero.png",images:["/images/project/ashok-nagar/hero-image.webp","/images/project/ashok-nagar/image/G2.webp","/images/project/ashok-nagar/image/G1.webp","/images/project/ashok-nagar/image/G7.webp"],description:"Serene 2.30-acre villa plot community in Maduranthakam with DTCP approval, offering 48 ready-to-build plots surrounded by greenery.",link:"/projects/plots/ashok-nagar-premium-plots-in-maduranthakam"},{id:5,title:"Bay Vista",location:"ECR, Chennai",category:"Villas",status:"Upcoming",siteExtent:"5 Acres",totalUnits:"8 Units",bhkConfig:"Bespoke",structure:"G + 1 & G + 2",unitSize:"3,000 - 4,500 Sq.Ft.",reraNo:"TN/01/Building/042/2023",price:"Above ₹3 Cr",priceRange:"Above ₹3 Cr",bedrooms:["Bespoke"],image:"/images/project/Bayvista/Luxury Infinity Pool at Sunset.png",mobileImage:"/images/project/Bayvista/Bay Vista Teaser - mobile.png",images:["/images/project/Bayvista/Luxury Infinity Pool at Sunset.png"],description:"Bespoke luxury beachfront villas along East Coast Road (ECR). 8 exclusive estate villas across 5 acres, designed for panoramic ocean vistas and coastal serenity.",teaserPoster:"/images/project/Bayvista/Luxury Infinity Pool at Sunset.png",link:"#bay-vista"},{id:6,title:"Lakeshore",location:"ECR, Chennai",category:"Villas",status:"Upcoming",siteExtent:"10 Acres",totalUnits:"65 Units",bhkConfig:"Bespoke Villas",structure:"Bespoke Villas",unitSize:"2,800 - 4,200 Sq.Ft.",reraNo:"Upcoming",price:"Above ₹3 Cr",priceRange:"Above ₹3 Cr",bedrooms:["Bespoke"],image:"/images/project/lakeshore/Lakeside Pavilion Under the Stars.png",mobileImage:"/images/project/lakeshore/Lakeside Pavilion Under the Stars.png",images:["/images/project/lakeshore/Lakeside Pavilion Under the Stars.png"],description:"An expansive 10-acre waterfront sanctuary on ECR featuring 65 exclusive bespoke luxury villas overlooking tranquil waters.",teaserPoster:"/images/project/lakeshore/Lakeside Pavilion Under the Stars.png",link:"#lakeshore"}];function q(){const a=N(),[d,o]=s.useState("All"),[g,p]=s.useState("All"),[b,u]=s.useState("All"),[f,k]=s.useState("All"),[l,x]=s.useState(null);[...Array.from(new Set(C.map(r=>r.location)))],s.useEffect(()=>{window.scrollTo(0,0);const r=new URLSearchParams(a.search),c=r.get("category");if(c){const n=c.toLowerCase();n==="villas"?o("Villas"):n==="apartments"?o("Apartments"):(n==="plotted"||n==="plots")&&o("Plots")}const m=r.get("status");if(m){const n=m.toLowerCase();n==="ongoing"?p("Ongoing"):n==="upcoming"?p("Upcoming"):n==="completed"&&p("Completed")}},[a]);const h=C.filter(r=>{const c=d==="All"||r.category===d,m=g==="All"||r.status===g,n=b==="All"||r.location===b,y=d==="Plots"||f==="All"||r.bedrooms&&r.bedrooms.includes(f);return c&&m&&n&&y});return e.jsxs("div",{className:"all-projects-page",style:{backgroundColor:"var(--color-white)",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx(S,{title:"Explore Premium Plots, Villas & Apartments in Chennai",description:"Find your ideal property with Aadhithya Mohan Properties. Explore premium plots, villas, and residential projects across sought-after locations in Chennai.",canonicalUrl:"https://aadhithyamohanproperties.com/projects"}),e.jsx(R,{theme:"dark"}),e.jsxs("main",{style:{flexGrow:1,paddingBottom:"100px"},children:[e.jsxs("div",{className:"all-projects-hero",children:[e.jsx("div",{className:"all-projects-hero-overlay"}),e.jsx("div",{className:"container",style:{position:"relative",zIndex:2,width:"100%"},children:e.jsxs(w,{animation:"fadeUp",children:[e.jsx("h1",{className:"hero-page-title display-title",children:"Our Projects"}),e.jsx("p",{className:"hero-page-sub",children:"Explore our curated collection of bespoke luxury villas, residences, and plotted developments across Chennai."})]})})]}),e.jsx("div",{className:"container",children:e.jsx("div",{style:{marginBottom:"50px",marginTop:"20px",textAlign:"center"},children:e.jsx(w,{animation:"fadeUp",children:e.jsx("h2",{className:"section-title",children:"A Legacy of Landmarks"})})})}),h.length>0?e.jsx("div",{className:"all-projects-fullwidth-list",children:h.map((r,c)=>e.jsx(w,{animation:"fadeUp",delay:c*.08,children:e.jsx(I,{project:r,onSelectTeaser:m=>x(m)})},r.id))}):e.jsx("div",{className:"container",children:e.jsxs("div",{className:"no-projects-box",children:[e.jsx("h3",{children:"No projects found"}),e.jsxs("p",{children:["We don't have any ",g.toLowerCase()," ",d!=="All"?d.toLowerCase():""," projects matching your current filters."]}),e.jsx(B,{theme:"outline",onClick:()=>{o("All"),p("All")},style:{marginTop:"20px"},children:"Reset All Filters"})]})})]}),e.jsx(A,{isOpen:!!l,onClose:()=>x(null),posterImage:l==null?void 0:l.image,projectTitle:l==null?void 0:l.title}),e.jsx(L,{}),e.jsx("style",{children:`
        /* ── 100% Full-Width Edge-to-Edge Cards List ── */
        .all-projects-fullwidth-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 60px;
        }

        /* ── Hero Banner ── */
        .all-projects-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 0 0 50px 0;
          margin-bottom: 60px;
          background: url("/images/about/CML ABOUT US.png") center/cover no-repeat;
        }

        .all-projects-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.23) 100%);
        }

        .hero-tag-light {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 8px;
        }

        .hero-page-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          color: #31302fd2;
          margin: 0 0 12px 0;
          line-height: 1.15;
        }

        .hero-page-sub {
          font-family: var(--font-sans);
          font-size: clamp(15px, 2vw, 17px);
          color: rgba(112, 91, 91, 0.77);
          max-width: 620px;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Dropdown Filter Bar ── */
        .projects-filter-wrapper {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 0 36px 0;
          width: 100%;
          position: relative;
          z-index: 50;
        }

        .filter-dropdowns-bar {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          width: 100%;
        }

        /* Individual dropdown */
        .filter-dropdown {
          position: relative;
          min-width: 180px;
          flex: 1;
        }

        .filter-dropdown-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border: none;
          border-bottom: 1.5px solid #d0d0d0;
          background: transparent;
          cursor: pointer;
          width: 100%;
          transition: border-color 0.3s ease;
        }

        .filter-dropdown-trigger:hover,
        .filter-dropdown.is-open .filter-dropdown-trigger {
          border-bottom-color: #b48564;
        }

        .filter-dropdown-label {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999999;
          line-height: 1;
        }

        .filter-dropdown-value {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          color: #111111;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .filter-dropdown-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 12px;
        }

        .filter-dropdown-chevron {
          color: #888888;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          flex-shrink: 0;
          margin-top: 20px;
        }

        .filter-dropdown.is-open .filter-dropdown-chevron {
          transform: rotate(180deg);
          color: #b48564;
        }

        /* Dropdown options panel */
        .filter-dropdown-options {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
          z-index: 100;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-dropdown.is-open .filter-dropdown-options {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .filter-dropdown-option {
          display: block;
          width: 100%;
          padding: 11px 18px;
          border: none;
          background: transparent;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: #555555;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          letter-spacing: 0.03em;
        }

        .filter-dropdown-option:hover {
          background: #faf8f6;
          color: #111111;
        }

        .filter-dropdown-option.is-active {
          color: #b48564;
          font-weight: 600;
          background: rgba(180, 133, 100, 0.06);
        }

        /* ── Count & Reset Bar ── */
        .projects-count-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          padding: 0 4px;
          font-size: 14px;
          color: #666666;
        }

        .clear-filter-text-btn {
          background: none;
          border: none;
          color: #b48564;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }

        /* ── Projects Grid & Structured Cards ── */
        .all-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 540px), 1fr));
          gap: 36px;
        }

        .ap-card-link {
          display: block;
          text-decoration: none;
          height: 100%;
          color: inherit;
        }

        .ap-card {
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }


        .ap-img-wrapper {
          position: relative;
          height: 520px;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ap-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ap-card:hover .ap-img {
          transform: scale(1.2);
        }

        /* Top Badges */
        .ap-top-badges {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
        }

        .ap-badge-category {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #111111;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .ap-badge-status {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        .ap-badge-status.completed .status-dot {
          background: #60a5fa;
        }

        /* Bottom Glass Box Overlay */
        .ap-overlay-box {
          position: relative;
          z-index: 3;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 65%, transparent 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 20px 30px 30px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ap-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .ap-title-location-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ap-project-title {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .ap-location-subtext {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          font-weight: 400;
          font-family: var(--font-sans);
          letter-spacing: 0.01em;
        }

        .ap-price-rera-group {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          text-align: right;
          flex-shrink: 0;
          gap: 3px;
        }

        .ap-price-value {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .ap-price-rera {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          letter-spacing: 0.03em;
        }

        .ap-pin-icon {
          color: #b48564;
          flex-shrink: 0;
        }

        /* Specs Icon Grid */
        .ap-icon-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 16px;
          margin-top: 4px;
        }

        .ap-icon-spec {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .spec-icon-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          filter: brightness(0) invert(1) opacity(0.85);
          flex-shrink: 0;
          border-radius: 0px !important;
        }

        .spec-icon {
          color: rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
          stroke-width: 1.2;
        }

        .spec-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-label {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
        }

        .spec-value {
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }

        .spec-price {
          color: #d8b28f;
          font-weight: 600;
        }

        .ap-spec-divider {
          width: 0.5px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          margin: 0 auto;
        }

        /* Outline Explore Project Button (in 2nd row) */
        .ap-explore-outline-cell {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .ap-explore-outline-btn {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.47);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 10px 20px;
          border-radius: 100px;
          text-decoration: none;
          backdrop-filter: blur(38px);
          -webkit-backdrop-filter: blur(38px);
          transition: all 0.4s ease;
          white-space: nowrap;
        }

        .ap-card:hover .ap-explore-outline-btn {
          background: rgba(180, 133, 100, 0.18);
          border-color: #b48564;
          color: #d8b28f;
          gap: 12px;
        }

        .ap-arrow {
          transition: transform 0.3s ease;
        }

        .ap-card:hover .ap-arrow {
          transform: translateX(3px);
        }

        .ap-arrow {
          transition: transform 0.3s ease;
        }

        .ap-card:hover .ap-arrow {
          transform: translateX(3px);
        }

        /* No Projects Message */
        .no-projects-box {
          text-align: center;
          padding: 80px 20px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 40px auto;
        }

        .no-projects-box h3 {
          font-family: var(--font-heading);
          font-size: 24px;
          color: #111111;
          margin: 0 0 10px 0;
        }

        .no-projects-box p {
          color: #666666;
          font-size: 15px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .all-projects-hero {
            min-height: 45vh;
            padding-bottom: 40px;
          }
          .filter-group-container {
            flex-direction: column;
            border-radius: 16px;
            padding: 16px;
            gap: 16px;
          }
          .filter-separator-vertical {
            display: none;
          }
          .filter-tabs-custom {
            flex-wrap: wrap;
            justify-content: center;
          }
          .all-projects-grid {
            grid-template-columns: 1fr;
          }
          .ap-img-wrapper {
            height: 460px;
          }
          .ap-info-specs-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .ap-spec-divider {
            display: none;
          }
        }
      `})]})}export{q as default};

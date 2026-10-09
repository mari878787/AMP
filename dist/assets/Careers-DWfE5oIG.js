import{j as e}from"./index-Bj2JLI6h.js";import{r as s}from"./vendor-react-CdZYeNEq.js";import{S as y,N as w,F as N}from"./Footer-YeKqJmGs.js";import{S as l}from"./ScrollReveal-BSOiJiIb.js";import{s as k}from"./api-DWJhK2e0.js";import{B as z,o as C,m as F,a as S,k as A,n as E,F as P,X as R,p as U,q as M}from"./vendor-icons-K0xaSwY_.js";import"./vendor-gsap-jyD3UH3M.js";function $(){s.useEffect(()=>{window.scrollTo(0,0)},[]);const[a,p]=s.useState({name:"",email:"",phone:"",position:"",experience:"1-3 Years",portfolioUrl:"",message:""}),[i,c]=s.useState(null),[m,h]=s.useState(!1),[u,x]=s.useState(!1),[f,n]=s.useState(""),r=t=>{const{name:o,value:d}=t.target;p(g=>({...g,[o]:d}))},b=t=>{const o=t.target.files&&t.target.files[0];if(o){if(o.size>10*1024*1024){n("File size exceeds 10MB limit. Please select a smaller file.");return}n(""),c(o)}},v=()=>{c(null)},j=async t=>{t.preventDefault(),h(!0),n("");try{const o=i?`${i.name} (${(i.size/1048576).toFixed(2)} MB)`:"Not provided",d={category:"Job Application",name:a.name,email:a.email,phone:a.phone,project:a.position||"General Career Application",unitType:`Experience: ${a.experience}`,message:`Position Applied: ${a.position}
Experience: ${a.experience}
Attached Resume File: ${o}
Portfolio/LinkedIn: ${a.portfolioUrl||"N/A"}

Cover Note:
${a.message}`};(await k(d)).success?(x(!0),p({name:"",email:"",phone:"",position:"",experience:"1-3 Years",portfolioUrl:"",message:""}),c(null)):n("Failed to send application. Please try again.")}catch{n("An unexpected error occurred. Please try again.")}finally{h(!1)}};return e.jsxs("div",{className:"contact-page careers-page-wrapper",children:[e.jsx(y,{title:"Shape Your Future With Aadhithya Mohan Properties",description:"Discover trusted real estate opportunities with Aadhithya Mohan Properties. Explore premium plots, villas, and apartments in prime locations across Chennai.",canonicalUrl:"https://aadhithyamohanproperties.com/career"}),e.jsx(w,{}),e.jsxs("section",{className:"contact-hero careers-hero",children:[e.jsxs("div",{className:"contact-hero-background",children:[e.jsx("img",{src:"/images/careers.png",alt:"Careers at Aadhithya Mohan Properties",className:"contact-hero-bg-image"}),e.jsx("div",{className:"contact-hero-overlay"})]}),e.jsxs("div",{className:"contact-hero-content",children:[e.jsx(l,{animation:"fadeUp",delay:.1,children:e.jsx("span",{className:"contact-hero-tag",children:"CAREERS"})}),e.jsx(l,{animation:"fadeUp",delay:.25,children:e.jsx("h1",{className:"contact-hero-title",children:"Build With Us"})}),e.jsx(l,{animation:"fadeUp",delay:.4,children:e.jsx("p",{className:"contact-hero-desc",children:"Explore career opportunities and join a passionate team crafting luxury villas, residences, and plotted developments across Chennai."})})]})]}),e.jsx("section",{className:"careers-body-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"careers-grid",children:[e.jsx(l,{animation:"fadeRight",delay:.1,children:e.jsxs("div",{className:"careers-content-col",children:[e.jsx("span",{className:"sub-title",children:"WORK WITH US"}),e.jsx("h2",{className:"section-title",children:"Shape Your Career With Industry Leaders"}),e.jsx("p",{className:"careers-desc-lead",children:"At Aadhithya Mohan Properties, we build more than landmark structures—we build rewarding careers, empower bold ideas, and champion professional growth."}),e.jsx("p",{className:"careers-desc-body",children:"Whether you are a seasoned real estate professional, a meticulous civil engineer, a creative architect, or a growth-minded sales specialist, we provide an inspiring environment where your expertise creates tangible value for families and communities."}),e.jsxs("div",{className:"careers-highlights-list",children:[e.jsxs("div",{className:"highlight-item",children:[e.jsx("div",{className:"highlight-icon",children:e.jsx(z,{size:20})}),e.jsxs("div",{children:[e.jsx("h4",{children:"Inspiring Work Environment"}),e.jsx("p",{children:"Collaborate with visionary leaders on high-end villa and plot developments."})]})]}),e.jsxs("div",{className:"highlight-item",children:[e.jsx("div",{className:"highlight-icon",children:e.jsx(C,{size:20})}),e.jsxs("div",{children:[e.jsx("h4",{children:"Growth & Leadership Opportunities"}),e.jsx("p",{children:"Meritocratic career advancement, skill building, and direct ownership."})]})]})]}),e.jsxs("div",{className:"careers-direct-contact-card",children:[e.jsx("h4",{children:"Direct HR Contacts"}),e.jsxs("div",{className:"contact-line",children:[e.jsx(F,{size:16}),e.jsx("a",{href:"mailto:hr@aadhithyamohanproperties.com",children:"hr@aadhithyamohanproperties.com"})]}),e.jsxs("div",{className:"contact-line",children:[e.jsx(S,{size:16}),e.jsx("a",{href:"tel:+919585291746",children:"+91 95852 91746"})]}),e.jsxs("div",{className:"contact-line",children:[e.jsx(A,{size:16}),e.jsx("span",{children:"Nungambakkam, Chennai, Tamil Nadu"})]})]})]})}),e.jsx(l,{animation:"fadeLeft",delay:.2,children:e.jsxs("div",{className:"careers-form-card",children:[e.jsxs("div",{className:"form-card-header",children:[e.jsx("h3",{className:"form-card-title",children:"Apply For a Position"}),e.jsx("p",{className:"form-card-subtitle",children:"Fill out the details below and attach your CV to apply."})]}),u?e.jsxs("div",{className:"form-success-box",children:[e.jsx("div",{className:"success-icon",children:e.jsx(E,{size:32})}),e.jsx("h3",{children:"Application Submitted!"}),e.jsx("p",{children:"Thank you for reaching out. We have received your application and resume details. Our HR team will get in touch with you shortly."}),e.jsx("button",{onClick:()=>x(!1),className:"cta-submit-btn",children:e.jsx("span",{children:"Submit Another Application"})})]}):e.jsxs("form",{onSubmit:j,className:"simple-career-form",children:[f&&e.jsx("div",{className:"form-error-msg",children:f}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",children:"Full Name *"}),e.jsx("input",{id:"name",type:"text",name:"name",required:!0,placeholder:"Enter your full name",value:a.name,onChange:r})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email Address *"}),e.jsx("input",{id:"email",type:"email",name:"email",required:!0,placeholder:"name@example.com",value:a.email,onChange:r})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"phone",children:"Phone Number *"}),e.jsx("input",{id:"phone",type:"tel",name:"phone",required:!0,placeholder:"+91 98765 43210",value:a.phone,onChange:r})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"position",children:"Position / Role Interested In *"}),e.jsx("input",{id:"position",type:"text",name:"position",required:!0,placeholder:"e.g. Sales Manager, Site Engineer",value:a.position,onChange:r})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"experience",children:"Experience Level *"}),e.jsxs("select",{id:"experience",name:"experience",value:a.experience,onChange:r,children:[e.jsx("option",{value:"Fresher / Entry Level",children:"Fresher / Entry Level"}),e.jsx("option",{value:"1-3 Years",children:"1 - 3 Years"}),e.jsx("option",{value:"3-5 Years",children:"3 - 5 Years"}),e.jsx("option",{value:"5-8 Years",children:"5 - 8 Years"}),e.jsx("option",{value:"8+ Years",children:"8+ Years"})]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"cv-upload",children:"Upload CV / Resume (Optional)"}),e.jsx("div",{className:"custom-file-upload-box",children:i?e.jsxs("div",{className:"selected-file-badge",children:[e.jsx(P,{size:20,className:"file-icon"}),e.jsxs("div",{className:"file-info",children:[e.jsx("span",{className:"file-name",children:i.name}),e.jsxs("span",{className:"file-size",children:["(",(i.size/(1024*1024)).toFixed(2)," MB)"]})]}),e.jsx("button",{type:"button",onClick:v,className:"remove-file-btn",title:"Remove file","aria-label":"Remove file",children:e.jsx(R,{size:16})})]}):e.jsxs("label",{htmlFor:"cv-upload",className:"file-drop-label",children:[e.jsx(U,{size:24,className:"upload-icon"}),e.jsxs("div",{className:"upload-text",children:[e.jsx("span",{className:"upload-title",children:"Click to upload CV / Resume"}),e.jsx("span",{className:"upload-subtitle",children:"PDF, DOC, or DOCX (Max 10MB)"})]}),e.jsx("input",{id:"cv-upload",type:"file",accept:".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:b,className:"hidden-file-input"})]})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"portfolioUrl",children:"Portfolio / LinkedIn Link (Optional)"}),e.jsx("input",{id:"portfolioUrl",type:"url",name:"portfolioUrl",placeholder:"https://linkedin.com/in/yourprofile",value:a.portfolioUrl,onChange:r})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"message",children:"Message / Cover Note"}),e.jsx("textarea",{id:"message",name:"message",rows:"3",placeholder:"Brief summary of your skills, current role, or background...",value:a.message,onChange:r})]}),e.jsx("button",{type:"submit",className:"cta-submit-btn",disabled:m,children:m?e.jsx("span",{children:"Submitting..."}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Submit Application"}),e.jsx(M,{size:16})]})})]})]})})]})})}),e.jsx(N,{}),e.jsx("style",{children:`
        .careers-page-wrapper {
          background-color: var(--color-bg-light);
          min-height: 100vh;
        }

        /* Hero Section - Aligned Bottom Left with Dark Overlay */
        .careers-hero {
          position: relative;
          height: 50vh;
          min-height: 420px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          overflow: hidden;
          padding-bottom: 80px;
          padding-left: 8vw;
          box-sizing: border-box;
        }

        .contact-hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .contact-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          animation: contactZoom 20s infinite alternate ease-in-out;
        }

        @keyframes contactZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        /* Ensure navbar in careers page has white text when not scrolled */
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .nav-link,
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .text-logo-wrapper,
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .icon-button {
          color: #ffffff !important;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.1) 25%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.65) 100%
          );
          z-index: 1;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          text-align: left;
          padding-right: 24px;
        }

        .contact-hero-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #ffffff;
          display: inline-block;
          margin-bottom: 12px;
          opacity: 0.92;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .contact-hero-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(38px, 5.5vw, 48px);
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
          line-height: 1.08;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
        }

        .contact-hero-desc {
          font-family: var(--font-sans);
          font-size: clamp(15px, 1.2vw, 17px);
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.65;
          margin: 0;
          max-width: 680px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        /* Body Section */
        .careers-body-section {
          padding: 90px 0;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .sub-title {
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 600;
          color: var(--color-gold-accent);
          display: block;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 34px;
          font-weight: 400;
          color: var(--color-text-dark);
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .careers-desc-lead {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-text-dark);
          font-weight: 500;
          margin-bottom: 16px;
        }

        .careers-desc-body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }

        .careers-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .highlight-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .highlight-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(180, 133, 100, 0.1);
          color: var(--color-gold-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-item h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .highlight-item p {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .careers-direct-contact-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .careers-direct-contact-card h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-bottom: 14px;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--color-text-muted);
          margin-bottom: 10px;
        }

        .contact-line:last-child {
          margin-bottom: 0;
        }

        .contact-line svg {
          color: var(--color-gold-accent);
        }

        .contact-line a {
          color: var(--color-text-dark);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-line a:hover {
          color: var(--color-gold-accent);
        }

        /* Form Card */
        .careers-form-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 36px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .form-card-title {
          font-size: 24px;
          font-weight: 500;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }

        .form-card-subtitle {
          font-size: 13.5px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .simple-career-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 6px;
          font-family: inherit;
          font-size: 13.5px;
          color: var(--color-text-dark);
          background: #fafafa;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-gold-accent);
          background: #ffffff;
        }

        /* Custom File Upload Box */
        .custom-file-upload-box {
          position: relative;
          width: 100%;
        }

        .file-drop-label {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border: 1.5px dashed rgba(180, 133, 100, 0.4);
          background: #fafafa;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .file-drop-label:hover {
          border-color: var(--color-gold-accent);
          background: rgba(180, 133, 100, 0.05);
        }

        .upload-icon {
          color: var(--color-gold-accent);
          flex-shrink: 0;
        }

        .upload-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .upload-title {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--color-text-dark);
        }

        .upload-subtitle {
          font-size: 11.5px;
          color: var(--color-text-muted);
        }

        .hidden-file-input {
          display: none;
        }

        .selected-file-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(180, 133, 100, 0.08);
          border: 1px solid rgba(180, 133, 100, 0.3);
          border-radius: 8px;
        }

        .file-icon {
          color: var(--color-gold-accent);
          flex-shrink: 0;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }

        .file-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-size {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .remove-file-btn {
          background: transparent;
          border: none;
          color: #dc3545;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .remove-file-btn:hover {
          background: rgba(220, 53, 69, 0.1);
        }

        .cta-submit-btn {
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: var(--color-gold-accent);
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(180, 133, 100, 0.25);
        }

        .cta-submit-btn:hover {
          background: #9d7153;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(180, 133, 100, 0.35);
        }

        .form-success-box {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.12);
          color: var(--color-gold-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .form-success-box h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: var(--color-text-dark);
        }

        .form-success-box p {
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .form-error-msg {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          padding: 10px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 10px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .careers-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-hero {
            padding-left: 24px;
            padding-bottom: 50px;
            height: 42vh;
            min-height: 360px;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .careers-form-card {
            padding: 24px;
          }
        }
      `})]})}export{$ as default};

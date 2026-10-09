import{j as e}from"./index-Bk12-aA-.js";import{r as d}from"./vendor-react-CdZYeNEq.js";import{b as v,l as j,a as k,M as w,T as N,d as z,L as u}from"./leaflet-B2bfQ_rT.js";import{S as P,N as C,F as T}from"./Footer-Ss3vzHOI.js";import{S as s}from"./ScrollReveal-Dk-cSp4Z.js";import{s as S}from"./api-DWJhK2e0.js";import{a as M,m as L,l as O,n as E}from"./vendor-icons-K0xaSwY_.js";import"./vendor-gsap-jyD3UH3M.js";const I=v(function(i,r){const a=new j.Popup(i,r.overlayContainer);return k(a,r)},function(i,r,{position:a},l){d.useEffect(function(){const{instance:n}=i;function o(c){c.popup===n&&(n.update(),l(!0))}function x(c){c.popup===n&&l(!1)}return r.map.on({popupopen:o,popupclose:x}),r.overlayContainer==null?(a!=null&&n.setLatLng(a),n.openOn(r.map)):r.overlayContainer.bindPopup(n),function(){var t;r.map.off({popupopen:o,popupclose:x}),(t=r.overlayContainer)==null||t.unbindPopup(),r.map.removeLayer(n)}},[i,r,l,a])});delete u.Icon.Default.prototype._getIconUrl;u.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});const A=()=>u.divIcon({className:"custom-map-marker office-marker",html:`
      <div class="marker-pin-wrapper">
        <div class="marker-pin-pulse"></div>
        <div class="marker-pin-core">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
    `,iconSize:[46,46],iconAnchor:[23,23],popupAnchor:[0,-23]}),$=()=>{d.useEffect(()=>{window.scrollTo(0,0)},[]);const m=[13.0701342,80.205387],[i,r]=d.useState("buy"),[a,l]=d.useState({name:"",email:"",phone:"",contactMode:"callback",visitTimeline:"this-week",propertyType:"",companyName:"",message:"",agreedPrivacy:!1,agreedOffers:!1}),[f,n]=d.useState({submitting:!1,success:!1,error:null}),o=t=>{const{name:p,value:h,type:g,checked:b}=t.target;l(y=>({...y,[p]:g==="checkbox"?b:h}))},x=async t=>{if(t.preventDefault(),!a.agreedPrivacy){alert("Please agree to the privacy policy before submitting.");return}n({submitting:!0,success:!1,error:null});const p=(a.name||"").trim(),h=i==="partner"?"Business & Channel Partners":"Residential & Property Inquiries",g=a.contactMode==="video"||a.contactMode==="videocall"?"Video Call":"Phone Call";await S({name:p,email:a.email,phone:a.phone,category:h,contactMode:g,visitTimeline:a.visitTimeline==="this-month"?"This Month":"This Week",propertyType:a.propertyType,companyName:a.companyName,message:a.message}),n({submitting:!1,success:!0,error:null}),l({name:"",email:"",phone:"",contactMode:"callback",propertyType:"",companyName:"",message:"",agreedPrivacy:!1,agreedOffers:!1})},c=[{title:"Sales & Customer Enquiry",phone:"+91 95850 44440",email:"balamurugan.rs@aadhithyamohanproperties.com"},{title:"Job & Careers Enquiry",phone:"+91 95852 91746",email:"hr@aadhithyamohanproperties.com",link:"/careers",linkText:"Visit our Careers page"},{title:"Channel Partner Enquiry",phone:"+91 95851 31117",email:"balamurugan.rs@aadhithyamohanproperties.com",link:"#register",linkText:"Register as Channel Partner"}];return e.jsxs("div",{className:"contact-page",children:[e.jsx(P,{title:"Connect With Us. Let’s Build Tomorrow",description:"Have questions about our projects or looking for the right property investment? Get in touch with Aadhithya Mohan Properties. Our team is here to understand your requirements, provide the right guidance, and help you take the next step towards your real estate goals",canonicalUrl:"https://aadhithyamohanproperties.com/contact-us"}),e.jsx(C,{}),e.jsxs("section",{className:"contact-hero",children:[e.jsxs("div",{className:"contact-hero-background",children:[e.jsx("img",{src:"/images/Minimalist Lakeside Architecture at Sunset-Pipng.png",alt:"Aadhithya Mohan Properties Architecture",className:"contact-hero-bg-image"}),e.jsx("div",{className:"contact-hero-overlay"})]}),e.jsxs("div",{className:"contact-hero-content",children:[e.jsx(s,{animation:"fadeUp",delay:.1,children:e.jsx("span",{className:"contact-hero-tag",children:"Reach Out"})}),e.jsx(s,{animation:"fadeUp",delay:.25,children:e.jsx("h1",{className:"contact-hero-title",children:"Connect With Us"})}),e.jsx(s,{animation:"fadeUp",delay:.4,children:e.jsx("p",{className:"contact-hero-desc",children:"Explore our curated collection of bespoke luxury villas, residences, and plotted developments across Chennai. Get in touch with our team today."})})]})]}),e.jsx("section",{className:"dept-enquiry-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"dept-cards-grid",children:c.map((t,p)=>e.jsxs(s,{animation:"fadeUp",delay:.05*p,className:"dept-card",children:[e.jsx("h3",{className:"dept-card-title",children:t.title}),e.jsxs("div",{className:"dept-card-details",children:[t.phone&&e.jsxs("div",{className:"dept-detail-item",children:[e.jsx(M,{size:16,className:"gold-icon"}),e.jsx("a",{href:`tel:${t.phone.replace(/\s+/g,"")}`,children:t.phone})]}),t.email&&e.jsxs("div",{className:"dept-detail-item",children:[e.jsx(L,{size:16,className:"gold-icon"}),e.jsx("a",{href:`mailto:${t.email}`,children:t.email})]}),t.link&&e.jsx("div",{className:"dept-detail-link-wrap",children:e.jsxs("a",{href:t.link,className:"dept-cta-link",children:[e.jsx("span",{children:t.linkText}),e.jsx(O,{size:14})]})})]})]},p))})})}),e.jsx("section",{className:"form-tab-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"form-split-grid",children:[e.jsx(s,{animation:"fadeRight",delay:.1,children:e.jsxs("div",{className:"form-intro-block",children:[e.jsx("span",{className:"form-intro-subtitle",children:"WE'D LOVE TO"}),e.jsx("h2",{className:"form-intro-title",children:"Hear From You"})]})}),e.jsx(s,{animation:"fadeLeft",delay:.2,children:e.jsxs("div",{className:"form-tabs-container",children:[e.jsxs("div",{className:"form-tabs-headers",children:[e.jsx("button",{className:`form-tab-header-btn ${i==="buy"?"active":""}`,onClick:()=>{r("buy"),n(t=>({...t,success:!1}))},children:"BUY PROPERTY"}),e.jsx("button",{className:`form-tab-header-btn ${i==="partner"?"active":""}`,onClick:()=>{r("partner"),n(t=>({...t,success:!1}))},children:"CHANNEL PARTNER"})]}),e.jsx("div",{className:"form-tabs-window",children:f.success?e.jsxs("div",{className:"form-success-box",children:[e.jsx("div",{className:"success-icon-badge",children:e.jsx(E,{size:28})}),e.jsx("h3",{children:"Request Staged Successfully"}),e.jsx("p",{children:"Thank you for reaching out. One of our representatives will contact you shortly."})]}):e.jsxs("form",{onSubmit:x,className:"tabbed-contact-form",children:[i==="buy"&&e.jsxs("div",{className:"form-contact-mode-group",children:[e.jsx("label",{className:"mode-selection-label",children:"Preferred Mode of Contact *"}),e.jsxs("div",{className:"mode-options-grid",children:[e.jsxs("label",{className:`mode-option-card ${a.contactMode==="callback"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"contactMode",value:"callback",checked:a.contactMode==="callback",onChange:o}),e.jsxs("div",{className:"mode-option-content",children:[e.jsx("span",{className:"mode-bullet"}),e.jsx("span",{className:"mode-text",children:"Request a call back"})]})]}),e.jsxs("label",{className:`mode-option-card ${a.contactMode==="video"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"contactMode",value:"video",checked:a.contactMode==="video",onChange:o}),e.jsxs("div",{className:"mode-option-content",children:[e.jsx("span",{className:"mode-bullet"}),e.jsx("span",{className:"mode-text",children:"Schedule a video call"})]})]})]})]}),i==="buy"&&e.jsxs("div",{className:"form-contact-mode-group",children:[e.jsx("label",{className:"mode-selection-label",children:"When are you coming to visit the site? *"}),e.jsxs("div",{className:"mode-options-grid",children:[e.jsxs("label",{className:`mode-option-card ${a.visitTimeline!=="this-month"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"visitTimeline",value:"this-week",checked:a.visitTimeline!=="this-month",onChange:o}),e.jsxs("div",{className:"mode-option-content",children:[e.jsx("span",{className:"mode-bullet"}),e.jsx("span",{className:"mode-text",children:"This Week"})]})]}),e.jsxs("label",{className:`mode-option-card ${a.visitTimeline==="this-month"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"visitTimeline",value:"this-month",checked:a.visitTimeline==="this-month",onChange:o}),e.jsxs("div",{className:"mode-option-content",children:[e.jsx("span",{className:"mode-bullet"}),e.jsx("span",{className:"mode-text",children:"This Month"})]})]})]})]}),e.jsx("div",{className:"form-group-item",children:e.jsx("input",{type:"text",name:"name",value:a.name,onChange:o,required:!0,placeholder:"Name *"})}),e.jsxs("div",{className:"form-row-two",children:[e.jsxs("div",{className:"form-group-item phone-input-wrapper",children:[e.jsxs("div",{className:"phone-prefix-badge",children:[e.jsx("span",{className:"prefix-flag",children:"🇮🇳"}),e.jsx("span",{className:"prefix-code",children:"+91"})]}),e.jsx("input",{type:"tel",name:"phone",value:a.phone,onChange:o,required:!0,placeholder:"Mobile Number *",className:"phone-prefixed-input"})]}),e.jsx("div",{className:"form-group-item",children:e.jsx("input",{type:"email",name:"email",value:a.email,onChange:o,required:!0,placeholder:"Email *"})})]}),i==="buy"&&e.jsx("div",{className:"form-group-item select-wrapper",children:e.jsxs("select",{name:"propertyType",value:a.propertyType,onChange:o,required:!0,children:[e.jsx("option",{value:"",children:"Property Type *"}),e.jsx("option",{value:"Villa",children:"Luxury Villa"}),e.jsx("option",{value:"Plot",children:"Villa Plot"}),e.jsx("option",{value:"Apartment",children:"Luxury Apartment"})]})}),i==="partner"&&e.jsxs("div",{className:"form-row-two",children:[e.jsx("div",{className:"form-group-item",children:e.jsx("input",{type:"text",name:"companyName",value:a.companyName,onChange:o,required:!0,placeholder:"Agency / Company Name *"})}),e.jsx("div",{className:"form-group-item",children:e.jsx("input",{type:"text",name:"message",value:a.message,onChange:o,placeholder:"RERA Registration Number (Optional)"})})]}),e.jsxs("div",{className:"form-agreements",children:[e.jsxs("label",{className:"checkbox-agreement-label",children:[e.jsx("input",{type:"checkbox",name:"agreedPrivacy",checked:a.agreedPrivacy,onChange:o,required:!0}),e.jsx("span",{className:"checkbox-box"}),e.jsxs("span",{className:"agreement-text",children:["I've read and agree to the ",e.jsx("a",{href:"/privacy-policy",target:"_blank",children:"privacy policy"}),". *"]})]}),e.jsxs("label",{className:"checkbox-agreement-label",children:[e.jsx("input",{type:"checkbox",name:"agreedOffers",checked:a.agreedOffers,onChange:o}),e.jsx("span",{className:"checkbox-box"}),e.jsx("span",{className:"agreement-text",children:"I'd like to hear about news and offers."})]})]}),e.jsx("button",{type:"submit",className:"form-submit-outline-btn",disabled:f.submitting,children:f.submitting?"SUBMITTING...":"SUBMIT"})]})})]})})]})})}),e.jsxs("section",{className:"contact-map-section",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"section-title-wrap",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("span",{className:"map-section-tag",children:"Find Us"}),e.jsx("h2",{className:"section-title",style:{margin:0},children:"Office Location"})]}),e.jsx("a",{href:"https://www.google.com/maps/place/Aadhithya+Mohan+Properties+LLP/@13.0701342,80.205387,17z/data=!4m6!3m5!1s0x3cd4533a14d0a15:0x4c02f9b06a7bc8e1!8m2!3d13.0701342!4d80.205387!16s%2Fg%2F11wpzvr8tj",target:"_blank",rel:"noopener noreferrer",className:"map-directions-btn",style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.12em",textTransform:"uppercase",color:"#111111",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 20px",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px",background:"#ffffff",transition:"all 0.3s ease"},children:"Get Directions →"})]})}),e.jsx(s,{animation:"fadeUp",delay:.1,children:e.jsx("div",{className:"contact-map-container",children:e.jsxs(w,{center:m,zoom:16,scrollWheelZoom:!1,style:{width:"100%",height:"100%"},children:[e.jsx(N,{attribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWFkaGl0aHlhbW9oYW5wcm9wZXJ0aWVzMjAyNiIsImEiOiJjbXNyaGQ3YWIwMDk3MnlyNWZ2dnBycXViIn0.M6FmIiIlvIbPk3wl6MgvVw",maxZoom:19,tileSize:256}),e.jsx(z,{position:m,icon:A(),children:e.jsx(I,{children:e.jsxs("div",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",textAlign:"center",padding:"4px"},children:[e.jsx("strong",{style:{display:"block",marginBottom:"4px",fontSize:"13px",color:"#111111"},children:"Aadhithya Mohan Properties LLP"}),e.jsx("p",{style:{margin:"0 0 8px",color:"#666666",fontSize:"11px"},children:"Head Office, Chennai"}),e.jsx("a",{href:"https://www.google.com/maps/place/Aadhithya+Mohan+Properties+LLP/@13.0701342,80.205387,17z/data=!4m6!3m5!1s0x3cd4533a14d0a15:0x4c02f9b06a7bc8e1!8m2!3d13.0701342!4d80.205387!16s%2Fg%2F11wpzvr8tj",target:"_blank",rel:"noopener noreferrer",style:{color:"#b48564",fontWeight:"600",textDecoration:"none",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Open in Google Maps →"})]})})})]})})})]}),e.jsx(T,{}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hero Section - Aligned Bottom Left with Dark Overlay */
        .contact-hero {
          position: relative;
          height: 50vh;
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

        .contact-hero-swiper {
          width: 100%;
          height: 100%;
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

        /* Ensure navbar in contact page has white text when not scrolled */
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
          font-size: clamp(38px, 5.5vw, 44px);
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
          max-width: 620px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
        }

        /* Section 1: Department Cards (Screenshot 1 Styles) */
        .dept-enquiry-section {
          padding: 100px 0 60px;
        }

        .dept-cards-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .dept-card {
          grid-column: span 4;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px; /* 8px border-radius! */
          padding: 40px 20px;
          box-shadow: none;
          transition: all 0.3s ease;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
        }

        .dept-card:nth-child(4),
        .dept-card:nth-child(5) {
          grid-column: span 6;
        }

        .dept-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
          border-color: rgba(180, 133, 100, 0.25);
        }

        .dept-card-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 26px;
          font-weight: 400;
          color: #000000;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }

        .dept-card-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dept-detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dept-detail-item a {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          color: #555555;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .dept-detail-item a:hover {
          color: #b48564;
        }

        .gold-icon {
          color: #b48564;
        }

        .dept-detail-link-wrap {
          margin-top: 16px;
        }

        .dept-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          color: #b48564;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .dept-cta-link:hover {
          gap: 12px;
        }

        /* Section 2: Tabbed Form (Screenshot 2 Styles) */
        .form-tab-section {
          padding: 80px 0 100px;
          background-color: #ffffff;
        }

        .form-split-grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 80px;
          align-items: start;
        }

        .form-intro-block {
          position: sticky;
          top: 100px;
        }

        .form-intro-subtitle {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--color-text-dark);
          opacity: 0.9;
          display: block;
          margin-bottom: 8px;
        }

        .form-intro-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(36px, 5vw, 48px);
          font-weight: 400;
          color: var(--color-text-dark);
          line-height: 1.1;
          margin: 0;
        }

        /* Tabs Sizing & Transitions */
        .form-tabs-container {
          background: transparent;
        }

        .form-tabs-headers {
          display: flex;
          gap: 30px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          margin-bottom: 40px;
        }

        .form-tab-header-btn {
          background: transparent;
          border: none;
          padding: 12px 0;
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 400;
          color: #666;
          opacity: 0.8;
          cursor: pointer;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: all 0.3s ease;
        }

        .form-tab-header-btn:hover {
          opacity: 1;
          color: #000;
        }

        .form-tab-header-btn.active {
          color: #000;
          opacity: 1;
          font-weight: 600;
        }

        .form-tab-header-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #b48564;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .form-tab-header-btn.active::after {
          transform: scaleX(1);
        }

        /* Forms Layout & Details */
        .tabbed-contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Radio Options */
        .form-contact-mode-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mode-selection-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);
        }

        .mode-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .mode-option-card {
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px; /* 8px border-radius! */
          background: #ffffff;
          padding: 20px 24px;
          display: block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mode-option-card input {
          display: none;
        }

        .mode-option-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mode-bullet {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.2);
          display: inline-block;
          position: relative;
        }

        .mode-option-card.selected {
          border-color: #b48564;
          background: rgba(180, 133, 100, 0.02);
          box-shadow: 0 4px 15px rgba(180, 133, 100, 0.04);
        }

        .mode-option-card.selected .mode-bullet {
          border-color: #b48564;
        }

        .mode-option-card.selected .mode-bullet::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #b48564;
        }

        .mode-text {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);
        }

        /* Basic form row & inputs */
        .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group-item {
          position: relative;
          width: 100%;
        }

        .form-group-item input,
        .form-group-item select {
          width: 100%;
          box-sizing: border-box;
          padding: 18px 20px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-text-dark);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px; /* 8px border-radius! */
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group-item input:focus,
        .form-group-item select:focus {
          border-color: #b48564;
          box-shadow: 0 6px 20px rgba(180, 133, 100, 0.06);
        }

        /* Custom dropdown arrows */
        .select-wrapper::after {
          content: '▼';
          font-size: 9px;
          color: #999;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .form-group-item select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 40px;
        }

        /* Phone Input flag details */
        .phone-input-wrapper {
          display: flex;
          align-items: stretch;
        }

        .phone-prefix-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-right: none;
          border-radius: 8px 0 0 8px;
          color: var(--color-text-dark);
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          pointer-events: none;
          box-sizing: border-box;
        }

        .phone-prefixed-input {
          border-radius: 0 8px 8px 0 !important;
          flex: 1;
        }

        /* Checkboxes agreements */
        .form-agreements {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }

        .checkbox-agreement-label {
          display: flex;
          align-items: start;
          gap: 12px;
          cursor: pointer;
        }

        .checkbox-agreement-label input {
          display: none;
        }

        .checkbox-box {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(0,0,0,0.18);
          border-radius: 4px;
          display: inline-block;
          flex-shrink: 0;
          position: relative;
          background: #ffffff;
          transition: all 0.2s ease;
        }

        .checkbox-agreement-label input:checked + .checkbox-box {
          background: #b48564;
          border-color: #b48564;
        }

        .checkbox-agreement-label input:checked + .checkbox-box::after {
          content: '✓';
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          line-height: 1;
        }

        .agreement-text {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }

        .agreement-text a {
          color: var(--color-text-dark);
          text-decoration: underline;
        }

        /* Outline Submit Button */
        .form-submit-outline-btn {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000000;
          background: transparent;
          border: 1px solid #000000;
          border-radius: 100px;
          padding: 18px 45px;
          cursor: pointer;
          align-self: flex-start;
          transition: all 0.3s ease;
        }

        .form-submit-outline-btn:hover {
          color: #ffffff;
          background: #000000;
        }

        .form-submit-outline-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-success-box {
          text-align: center;
          padding: 40px 24px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 8px; /* 8px border-radius! */
          box-shadow: 0 15px 40px rgba(0,0,0,0.02);
        }

        .success-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.1);
          color: #b48564;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .form-success-box h3 {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 24px;
          color: var(--color-text-dark);
          margin: 0 0 10px;
        }

        .form-success-box p {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Map Section Details - Full Width Edge-to-Edge */
        .contact-map-section {
          padding: 60px 0 0;
          width: 100%;
          overflow: hidden;
        }

        .section-title-wrap {
          margin-bottom: 35px;
        }

        .map-section-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #000;
          display: block;
          margin-bottom: 8px;
        }

        .map-section-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin: 0;
        }

        .contact-map-container {
          height: 520px;
          width: 100%;
          border-radius: 0;
          overflow: hidden;
          box-shadow: none;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Leaflet custom styling */
        .custom-map-marker {
          position: relative;
        }
        .marker-pin-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-pin-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.25);
          animation: pinPulse 2s infinite ease-in-out;
        }
        .marker-pin-core {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #b48564;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          border: 2px solid #ffffff;
          position: relative;
          z-index: 2;
        }
        @keyframes pinPulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .form-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .form-intro-block {
            position: relative;
            top: 0;
          }
          .dept-card {
            grid-column: span 6 !important;
          }
          .dept-card:nth-child(5) {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 900px) {
          .contact-hero {
            padding-bottom: 60px;
            padding-left: 5vw;
          }
          .contact-hero-content {
            padding-right: 12px;
          }
          .dept-enquiry-section {
            padding: 60px 0 40px;
          }
          .form-tab-section {
            padding: 40px 0 60px;
          }
          .contact-map-section {
            padding: 30px 0 0;
          }
          .contact-map-container {
            height: 420px;
            border-radius: 0;
          }
        }

        @media (max-width: 600px) {
          .form-row-two,
          .mode-options-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .form-tabs-headers {
            gap: 15px;
            flex-wrap: wrap;
          }
          .form-tab-header-btn {
            font-size: 11px;
            padding: 8px 0;
          }
          .dept-card {
            grid-column: span 12 !important;
            padding: 28px 24px;
          }
        }
      `}})]})};export{$ as default};

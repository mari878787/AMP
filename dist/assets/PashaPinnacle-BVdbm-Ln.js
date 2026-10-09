import{j as e}from"./index-B_gt9TzF.js";import{u as Re,r}from"./vendor-react-CdZYeNEq.js";import{S as Te,N as Ae,F as Fe}from"./Footer-BfGRLyOI.js";import{S as c}from"./ScrollReveal-DW8tc3GR.js";import{P as Le}from"./ProjectSpecs-Sgyj3iq0.js";import{P as Be,N as Oe,A as He,a as Ue}from"./AmenitiesHeroSlider-B7ASOR_i.js";import{L as ne,P as De,b as $,c as V,R as We,X as H,g as le}from"./vendor-icons-K0xaSwY_.js";import"./vendor-gsap-jyD3UH3M.js";import"./leaflet-B2bfQ_rT.js";import"./api-DWJhK2e0.js";const U=[{title:"Pasha Pinnacle Walkthrough",thumbnail:"/images/project/pasha-pinnacle/hero.png",buttonLabel:"WALKTHROUGH",url:"/images/project/pasha-pinnacle/pasha-pinnacle walkthrough.mp4"}],Me=[{id:"structure",label:"Structure",index:"01",title:"STRUCTURE",details:["Seismic Zone III Compliant Reinforced Cement Concrete (RCC) framed Structure of columns, beams, and slabs, designed to carry building loads and transfer them to the foundation safely. It provides strength, durability, stability, and flexibility in architectural planning."],image:"/images/project/specs/stracture.jpeg"},{id:"wall-tiles",label:"Wall Tiles",index:"02",title:"WALL TILES",details:["Toilets: Premium tiles up to false ceiling height.","Kitchen: Designer tile DADO for 2 feet height over counter."],image:"/images/project/specs/spec_wall_tiles.jpg"},{id:"floor-finish",label:"Floor Finish",index:"03",title:"FLOOR FINISH",details:["Foyer, Living, Dining & Kitchen: Vitrified tiles.","Toilets: Anti-Skid tiles.","Common Area & Staircase: Indian Granite.","Utility & Balcony: Tiles as per architecture design intent."],image:"/images/project/specs/spec_flooring.jpg"},{id:"kitchen-dining",label:"Kitchen & Dining",index:"04",title:"KITCHEN & DINING",details:["20mm thick jet black granite countertop with a durable stainless steel sink, offering a sleek, hygienic, easy-to-maintain, and elegant finish for the kitchen and dining space."],image:"/images/project/specs/Kitchen.jpeg"},{id:"joinery-windows",label:"Joinery & Windows",index:"07",title:"JOINERY & WINDOWS",details:["High-quality UPVC windows providing excellent durability, weather resistance, thermal insulation, and low maintenance, with a clean and modern appearance."],image:"/images/project/specs/WINDOWS.png"},{id:"plumbing-sanitary",label:"Plumbing & Sanitary Fittings",index:"05",title:"PLUMBING & SANITARY FITTINGS",details:["CPVC Concealed water line.","Premium Jaguar or equivalent sanitary fittings, selected for durability, reliable performance, water efficiency, and a modern, elegant finish, ensuring comfort and functionality in every bathroom."],image:"/images/project/specs/PLUMBING .png"},{id:"doors",label:"Doors",index:"06",title:"DOORS",details:["Main Door: First quality Teak wood of 8 feet height and solid teak wood door of 45mm thick frame and 25mm thick plank with melamine polish finish fitted with necessary Godrej lock & brass fittings.","Other Doors: Frames teak wood with 32mm Flush door shutters in water proof using mortise lock with stainless steel Hinges."],image:"/images/project/specs/Doors.jpeg"},{id:"internal-staircase",label:"Internal Staircases",index:"08",title:"INTERNAL STAIRCASES ( VILLAS DUPLEX UNITS)",details:["Elegant stainless steel handrails providing a sleek, modern appearance with excellent strength, durability, corrosion resistance, and low maintenance, ensuring safety and comfort along the staircase."],image:"/images/project/specs/Living Area.jpeg"},{id:"electrical-points",label:"Electrical Points",index:"09",title:"ELECTRICAL POINTS",details:["Electrical wiring using Finolex brand wires with Anchor switches, ensuring reliable electrical performance, safety, durability, and a quality finishing."],image:"/images/project/specs/Electrical.jpeg"},{id:"common-features",label:"Common Features",index:"10",title:"COMMON FEATURES",details:["Provision of a Fujitech lift, solar power for common areas, and a well-equipped gym, offering enhanced convenience, energy efficiency, comfort, and modern lifestyle amenities for residents."],image:"/images/project/specs/common.png"}];function xt({project:Ye="pasha"}){Re();const se=!0,[p,pe]=r.useState("overview"),[qe,Ge]=r.useState("highlights"),[$e,Ve]=r.useState(!1),[Ke,_e]=r.useState(!1),[D,Xe]=r.useState("exteriors"),[I,K]=r.useState("typicalFloorPlan"),[_,ce]=r.useState("typical"),[X,de]=r.useState("blockA"),[Q,k]=r.useState("blockA");r.useEffect(()=>{K("typicalFloorPlan")},[se]);const v={masterPlan:{image:"/images/project/pasha-pinnacle/floorplan/PPP Floor Plan - 1200x800.jpg.jpeg"},typicalFloorPlan:{image:"/images/project/pasha-pinnacle/floorplan/PP Floor Plan - 1200x800.jpg.jpeg"},floorPlan:{blockA:[{id:"blockA-front",name:"Block A - Road Side",type:"3 BHK",saleableArea:"1,335 Sq.Ft.",reraCarpetArea:"925 Sq.Ft.",uds:"421 Sq.Ft.",facing:"Road Side",image:"/images/project/pasha-pinnacle/floorplan/PP Individual Plan with Highlight_Block A - Front.jpg.jpeg"},{id:"blockA-rear",name:"Block A - Rear Side",type:"3 BHK",saleableArea:"1,342 Sq.Ft.",reraCarpetArea:"935 Sq.Ft.",uds:"408 Sq.Ft.",facing:"Rear Side",image:"/images/project/pasha-pinnacle/floorplan/PP Individual Plan with Highlight_Block A - Rear.jpg.jpeg"}],blockB:[{id:"blockB-front",name:"Block B - Road Side",type:"3 BHK",saleableArea:"1,335 Sq.Ft.",reraCarpetArea:"925 Sq.Ft.",uds:"421 Sq.Ft.",facing:"Road Side",image:"/images/project/pasha-pinnacle/floorplan/PP Individual Plan with Highlight_Block B - Front.jpg.jpeg"},{id:"blockB-rear",name:"Block B - Rear Side",type:"3 BHK",saleableArea:"1,358 Sq.Ft.",reraCarpetArea:"945 Sq.Ft.",uds:"408 Sq.Ft.",facing:"Rear Side",image:"/images/project/pasha-pinnacle/floorplan/PP Individual Plan with Highlight_Block B - Rear.jpg.jpeg"}]}},s=v.floorPlan[X]||[],y=s.find(t=>t.id===Q)||s[0],ge=()=>{if(s.length<=1)return;const i=(Math.max(0,s.findIndex(o=>o.id===(y==null?void 0:y.id)))-1+s.length)%s.length;k(s[i].id)},me=()=>{if(s.length<=1)return;const i=(Math.max(0,s.findIndex(o=>o.id===(y==null?void 0:y.id)))+1)%s.length;k(s[i].id)},[E,W]=r.useState(null),[g,u]=r.useState(null),[J,Z]=r.useState(0),[F,R]=r.useState(!1),[xe,he]=r.useState(0),fe=[{index:"01",title:"Salient Features",points:["False ceiling thoughtfully designed throughout every residence.","11-ft. ceiling height for a more expansive sense of space","8-ft. premium doors with false ceiling throughout","Vastu-compliant homes with spacious, well-planned interiors","Rooftop gym designed for everyday wellness"]},{index:"02",title:"Boutique by Design",desc:"With only a limited collection of residences, Pasha Pinnacle offers a quieter and more intimate living experience. Thoughtfully planned spaces and a close-knit residential environment create the warmth, privacy, and comfort that define boutique living."},{index:"03",title:"Designed for Better Living",desc:"Every residence has been carefully planned to maximise space, natural light, and cross ventilation while ensuring effortless functionality. Contemporary layouts and refined interiors create homes that are elegant, inviting, and perfectly suited to modern city living."},{index:"04",title:"An Address That Endures",desc:"Exceptional homes derive their value from both their location and the life they offer. Combining a distinguished central address with enduring quality and thoughtful planning, Pasha Pinnacle is a home that continues to reward its owners for years to come."}],[Qe,Je]=r.useState(0),[T,ee]=r.useState("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"),[L,N]=r.useState(!1),[B,z]=r.useState(!1),[be,ue]=r.useState(!1);r.useEffect(()=>{const t=a=>{var n;(n=a==null?void 0:a.preventDefault)==null||n.call(a),N(!0)},i=a=>{var n;(n=a==null?void 0:a.preventDefault)==null||n.call(a),z(!0)},o=a=>{var n;(n=a==null?void 0:a.preventDefault)==null||n.call(a),U&&U.length>0&&ee(U[0].url),R(!0)};return window.addEventListener("open-inquiry-modal",t),window.addEventListener("open-brochure-modal",i),window.addEventListener("open-walkthrough-video",o),()=>{window.removeEventListener("open-inquiry-modal",t),window.removeEventListener("open-brochure-modal",i),window.removeEventListener("open-walkthrough-video",o)}},[]),r.useEffect(()=>{var i,o;if(!!(B||L||E||g||F)){(i=window.lenis)==null||i.stop();const a=d=>{d.target.closest(".fs-popup-form-half, .fs-form-inner, [data-allow-scroll]")||d.preventDefault()};window.addEventListener("wheel",a,{passive:!1}),window.addEventListener("touchmove",a,{passive:!1});const n=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",n>0&&(document.body.style.paddingRight=`${n}px`),()=>{var d;window.removeEventListener("wheel",a),window.removeEventListener("touchmove",a),(d=window.lenis)==null||d.start(),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.paddingRight=""}}else(o=window.lenis)==null||o.start(),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.paddingRight="";return()=>{var a;(a=window.lenis)==null||a.start(),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.paddingRight=""}},[B,L,E,g,F]),r.useEffect(()=>{const t=i=>{if(i.key==="Escape"){g?u(null):E?W(null):F?R(!1):L?N(!1):B&&z(!1);return}if(i.key!=="ArrowLeft"&&i.key!=="ArrowRight")return;const o=i.key==="ArrowRight"?1:-1;if(g){if(s.length<=1)return;i.preventDefault();const a=s.findIndex(d=>d.id===g.id),n=s[(a+o+s.length)%s.length];k(n.id),u(n)}else if(E){const a=w[D]||[];if(a.length<=1||!a.some(n=>n.src===E.src))return;i.preventDefault(),o>0?Ce():Pe()}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}),r.useEffect(()=>{let t=window.innerHeight-60;const i=()=>{const m=document.querySelector(".project-hero-section");m&&(t=m.offsetHeight-60)};i();const o=setTimeout(i,400);let a=!1,n=!1;const d=()=>{a||(requestAnimationFrame(()=>{const m=window.scrollY>=t;m!==n&&(n=m,ue(m)),a=!1}),a=!0)};return window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",i,{passive:!0}),d(),()=>{clearTimeout(o),window.removeEventListener("scroll",d),window.removeEventListener("resize",i)}},[]);const[l,b]=r.useState({contactMode:"callback",visitTimeline:"this-week",name:"",firstName:"",lastName:"",phoneCode:"+91",phone:"",email:"",config:"3 BHK",privacy:!1,updates:!1}),[ve,te]=r.useState(!1),[x,P]=r.useState({name:"",firstName:"",lastName:"",phoneCode:"+91",phone:"",email:"",config:"3 BHK",privacy:!1}),[ye,ie]=r.useState(!1),[Ze,et]=r.useState(0),[O,C]=r.useState({exteriors:1,interiors:1,videos:1}),[h,we]=r.useState("exteriors"),[j,je]=r.useState(()=>typeof window<"u"?window.innerWidth<=768:!1),ae=r.useRef(null);r.useEffect(()=>{const t=ae.current;if(t){t.defaultMuted=!0,t.muted=!0;const i=t.play();i!==void 0&&i.catch(()=>{})}},[j]);const M=r.useRef(null);r.useRef(null);const[tt,oe]=r.useState({left:0,width:0,opacity:0}),[it,ke]=r.useState(0),Y=[{title:"Stilt Car Parking",desc:"Reserved, sheltered parking spaces located at the stilt level for effortless vehicle access and security.",image:"/images/project/aminities/villa & apartment/Dedicated Stilt Floor Car Parking.png",icon:"/images/project/aminities/icon/car-parking.png"},{title:"Passenger Lift",desc:"Modern, high-efficiency automatic passenger elevator ensuring seamless vertical connectivity across all floors.",image:"/images/project/aminities/villa & apartment/Automatic Passenger Lift.png",icon:"/images/project/aminities/icon/noun_lift_8277947_@700.png"},{title:"Power Backup",desc:"Uninterrupted power backup infrastructure for common areas, elevators, and essential residential utilities.",image:"/images/project/aminities/villa & apartment/Power Backup  DG Generator .png",icon:"/images/project/aminities/icon/power-backup.png"},{title:"Sump & Bore Well",desc:"Robust dual-source water supply system with dedicated underground storage sump and bore well facilities.",image:"/images/project/aminities/villa & apartment/Underground Sump & Dedicated Bore Well.png",icon:"/images/project/aminities/icon/Rainwater Harvesting.png"},{title:"Private Balconies",desc:"Generously sized private balconies attached to every residence, offering open street views and natural ventilation.",image:"/images/project/pasha-pinnacle/extirior/3 Resized PP 16x9.jpg",icon:"/images/project/aminities/icon/Balconies.png"},{title:"Landscaped Entrance",desc:"Elegantly detailed arrival foyer and common spaces featuring curated landscaping and greenery.",image:"/images/project/aminities/villa & apartment/Landscaped Common Entrance & Green Touches.png",icon:"/images/project/aminities/icon/Entrance.png"},{title:"Kitchen Utility Yard",desc:"Separate, private utility and wash yard attached to every kitchen for seamless everyday domestic convenience.",image:"/images/project/aminities/villa & apartment/Dedicated ServiceUtility Yard in Every Kitchen.png",icon:"/images/project/aminities/icon/Utility-Yard.png"},{title:"Cross Ventilated Layouts",desc:"Architecturally engineered dual-orientation layouts maximizing fresh airflow, natural daylight, and thermal comfort.",image:"/images/project/aminities/villa & apartment/East–West Cross Ventilated Layouts.png",icon:"/images/project/aminities/icon/Ventilate.png"}],[re,at]=r.useState(!0);r.useEffect(()=>{if(!re)return;const t=setInterval(()=>{ke(i=>(i+1)%Y.length)},4500);return()=>clearInterval(t)},[Y.length,re]),r.useEffect(()=>{const t=()=>{je(window.innerWidth<768)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),r.useEffect(()=>{const t=()=>{const a=M.current;if(!a)return;const n=a.querySelector(".sub-nav-link.active");if(!n){oe(A=>({...A,opacity:0}));return}const d=a.getBoundingClientRect(),m=n.getBoundingClientRect();oe({left:m.left-d.left+a.scrollLeft,width:m.width,opacity:1}),window.innerWidth<900&&n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},i=setTimeout(t,50);window.addEventListener("resize",t);const o=M.current;return o&&o.addEventListener("scroll",t),()=>{clearTimeout(i),window.removeEventListener("resize",t),o&&o.removeEventListener("scroll",t)}},[p]);const w={videos:U.map(t=>({src:t.thumbnail,title:t.title,url:t.url})),interiors:[],exteriors:[{src:"/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg",title:"Pasha Pinnacle Architectural Façade"},{src:"/images/project/pasha-pinnacle/extirior/2 Resized PP 16x9.jpg",title:"Grand Arrival & Modern Elevation"},{src:"/images/project/pasha-pinnacle/extirior/3 Resized PP 16x9.jpg",title:"Contemporary Balcony & Clean Lines"},{src:"/images/project/pasha-pinnacle/extirior/4 Resized PP 16x9.jpg",title:"Building Perspective & Streetscape"},{src:"/images/project/pasha-pinnacle/extirior/5 Resized PP 16x9.jpg",title:"Exclusive Boutique Residence View"}]},[q,S]=r.useState({exteriors:!0,interiors:!0,videos:!0}),G=r.useRef({exteriors:null,interiors:null,videos:null});r.useEffect(()=>{["exteriors","interiors","videos"].forEach(t=>{if(!w[t])return;const i=w[t].length;if(i<=1)return;const o=O[t];clearTimeout(G.current[t]),o===i+1?G.current[t]=setTimeout(()=>{S(a=>({...a,[t]:!1})),C(a=>({...a,[t]:1}))},500):o===0&&(G.current[t]=setTimeout(()=>{S(a=>({...a,[t]:!1})),C(a=>({...a,[t]:i}))},500))})},[O]),r.useEffect(()=>{["exteriors","interiors","videos"].forEach(t=>{if(!q[t]){const i=requestAnimationFrame(()=>{S(o=>({...o,[t]:!0}))});return()=>cancelAnimationFrame(i)}})},[q]);const Ne=t=>{w[t].length<=1||(S(i=>({...i,[t]:!0})),C(i=>({...i,[t]:i[t]-1})))},Se=t=>{w[t].length<=1||(S(i=>({...i,[t]:!0})),C(i=>({...i,[t]:i[t]+1})))};r.useEffect(()=>{window.scrollTo(0,0)},[]);const f=t=>{pe(t),setTimeout(()=>{const i=document.querySelector(".project-sections-container"),o=document.querySelector(".project-sub-nav");if(i&&o){const a=o.getBoundingClientRect().height||55,n=i.getBoundingClientRect().top+window.pageYOffset-a;window.lenis?window.lenis.scrollTo(n,{duration:.8}):window.scrollTo({top:n,behavior:"smooth"})}},20)},ze=[{id:"junctions",label:"Connectivity",image:"/images/project/CML/loction/junctions.png",locations:[{name:"Royapettah High Road",dist:"2 Mins",lat:13.0515,lng:80.2612},{name:"Anna Salai",dist:"3 Mins",lat:13.0585,lng:80.2575},{name:"Thousand Lights Metro",dist:"5 Mins",lat:13.0578,lng:80.2528},{name:"Chennai Central Station",dist:"15 Mins",lat:13.0827,lng:80.2757},{name:"Chennai International Airport",dist:"35 Mins",lat:12.985,lng:80.165}]},{id:"education",label:"Educational Institutions",image:"/images/project/CML/loction/educational .png",locations:[{name:"Stella Maris College",dist:"4 Mins",lat:13.0475,lng:80.253},{name:"National Public School",dist:"6 Mins",lat:13.0545,lng:80.258},{name:"DAV Group of Schools",dist:"8 Mins",lat:13.055,lng:80.2625},{name:"Vidya Mandir",dist:"10 Mins",lat:13.0375,lng:80.266}]},{id:"hospitals",label:"Healthcare",image:"/images/project/CML/loction/hospitals.png",locations:[{name:"Government Royapettah Hospital",dist:"3 Mins",lat:13.054,lng:80.2628},{name:"Apollo Hospitals",dist:"7 Mins",lat:13.061,lng:80.252},{name:"Kauvery Hospital",dist:"10 Mins",lat:13.036,lng:80.256}]},{id:"shopping",label:"Lifestyle & Leisure",image:"/images/project/CML/loction/entertainment.png",locations:[{name:"Express Avenue Mall",dist:"5 Mins",lat:13.0588,lng:80.2642},{name:"Spencer Plaza",dist:"6 Mins",lat:13.0615,lng:80.261},{name:"Sathyam Cinemas",dist:"5 Mins",lat:13.0532,lng:80.2575},{name:"Marina Beach",dist:"8 Mins",lat:13.05,lng:80.282}]}];r.useEffect(()=>{const t=setInterval(()=>{S(i=>({...i,[h]:!0})),C(i=>({...i,[h]:i[h]+1}))},5e3);return()=>clearInterval(t)},[h,w]);const Pe=()=>{const t=w[D],i=(J-1+t.length)%t.length;Z(i),W(t[i])},Ce=()=>{const t=w[D],i=(J+1)%t.length;Z(i),W(t[i])},Ie=t=>{t.preventDefault();const i=(l.name||`${l.firstName||""} ${l.lastName||""}`).trim(),o=`${l.phoneCode||"+91"} ${l.phone||l.phoneNumber||""}`.trim(),a=l.contactMode==="videocall"?"Schedule a Video Call":"Request a Callback",n=l.visitTimeline==="this-month"?"This Month":"This Week",d=encodeURIComponent(`Schedule Visit / Inquiry - Pasha Pinnacle (${i||"Lead"})`),m=encodeURIComponent(`Project: Pasha Pinnacle
Name: ${i}
Phone: ${o}
Email: ${l.email||"N/A"}
Preferred Configuration: ${l.config||"3 BHK"}
Preferred Contact Mode: ${a}
Planning to Visit Site: ${n}
`);window.location.href=`mailto:info@aadhithyamohanproperties.com?subject=${d}&body=${m}`,te(!0),setTimeout(()=>{te(!1),N(!1),b({contactMode:"callback",visitTimeline:"this-week",name:"",firstName:"",lastName:"",phoneCode:"+91",phoneNumber:"",phone:"",email:"",config:"3 BHK Luxury Residence",privacy:!1,updates:!1})},2500)},Ee=t=>{t.preventDefault();const i=(x.name||`${x.firstName||""} ${x.lastName||""}`).trim(),o=`${x.phoneCode||"+91"} ${x.phone||""}`.trim(),a=encodeURIComponent(`Brochure Download Request - Pasha Pinnacle (${i||"Lead"})`),n=encodeURIComponent(`Project: Pasha Pinnacle
Name: ${i}
Phone: ${o}
Email: ${x.email||"N/A"}
Configuration: 3 BHK Luxury Residence
Request: Download Official Project E-Brochure
`);window.location.href=`mailto:info@aadhithyamohanproperties.com?subject=${a}&body=${n}`,ie(!0),setTimeout(()=>{ie(!1),z(!1),P({name:"",firstName:"",lastName:"",phoneCode:"+91",phone:"",email:"",config:"3 BHK Luxury Residence",privacy:!1})},2500)};return e.jsxs("div",{className:`project-detail-page ${be?"hide-main-header":""}`,children:[e.jsx(Te,{title:"Pasha Pinnacle - Luxury 3 BHK Apartments in Royapettah, Chennai | Aadhithya Mohan Properties",description:"Discover Pasha Pinnacle by Aadhithya Mohan Properties — exclusive 3 BHK luxury residences in Royapettah, Chennai featuring boutique living, 11-ft ceilings, and premium amenities.",canonicalUrl:"https://aadhithyamohanproperties.com/projects/apartments/pasha-pinnacle-luxury-apartment-in-royapettah"}),e.jsx(Ae,{projectTitle:"Pasha Pinnacle"}),e.jsxs("main",{children:[e.jsxs("section",{className:"project-hero-section",children:[e.jsxs("div",{className:"project-hero-background",children:[e.jsx("div",{className:"hero-video-wrapper",children:e.jsx("video",{ref:ae,className:"hero-bg-video",src:j?"/images/project/pasha-pinnacle/PP Hero Banner 3 Verticle.mp4":"/images/project/pasha-pinnacle/PP Hero Banner 3.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",onCanPlay:t=>{t.target.defaultMuted=!0,t.target.muted=!0,t.target.play().catch(()=>{})}},j?"mobile":"desktop")}),e.jsx("div",{className:"project-hero-overlay"})]}),e.jsxs("div",{className:"container project-hero-content",children:[e.jsx(c,{animation:"fadeUp",delay:.1,children:e.jsxs("div",{className:"project-hero-text-block",children:[e.jsx("h1",{className:"display-title project-hero-title",children:"Pasha Pinnacle"}),e.jsx("p",{className:"project-hero-subtitle",children:"Where Contemporary Design Meets Urban Elegance"})]})}),e.jsx(c,{animation:"fadeUp",delay:.25,children:e.jsx("div",{className:"project-hero-cta-block",children:e.jsx("button",{type:"button",onClick:()=>z(!0),className:"btn-discover",children:"DOWNLOAD BROCHURE"})})})]})]}),e.jsx("nav",{className:"project-sub-nav",children:e.jsxs("div",{className:"container sub-nav-container",children:[e.jsxs("div",{className:"sub-nav-scroll-wrapper",ref:M,children:[e.jsx("button",{onClick:()=>f("overview"),className:`sub-nav-link ${p==="overview"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Overview"})}),e.jsx("button",{onClick:()=>f("why-project"),className:`sub-nav-link ${p==="why-project"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Why PP"})}),e.jsx("button",{onClick:()=>f("gallery"),className:`sub-nav-link ${p==="gallery"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Gallery"})}),e.jsx("button",{onClick:()=>f("floorplans"),className:`sub-nav-link ${p==="floorplans"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Floor Plans"})}),e.jsx("button",{onClick:()=>f("specifications"),className:`sub-nav-link ${p==="specifications"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Specifications"})}),e.jsx("button",{onClick:()=>f("amenities"),className:`sub-nav-link ${p==="amenities"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Amenities"})}),e.jsx("button",{onClick:()=>f("pricing"),className:`sub-nav-link ${p==="pricing"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Price"})}),e.jsx("button",{onClick:()=>f("status"),className:`sub-nav-link ${p==="status"?"active":""}`,children:e.jsx("span",{className:"sub-nav-text",children:"Status"})})]}),e.jsxs("div",{className:"sub-nav-dropdown-wrapper sub-nav-mobile-trigger-wrapper show-only-on-mobile",children:[e.jsx("button",{className:"sub-nav-link mobile-grid-trigger-btn","aria-label":"Section directory",style:{padding:"20px 18px 18px"},children:e.jsx(ne,{size:15,style:{margin:0,transition:"transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"more-trigger-icon"})}),e.jsxs("div",{className:"sub-nav-dropdown-menu mobile-directory-menu",style:{right:0,left:"auto",transform:"translateX(-15%) translateY(6px)"},children:[e.jsx("div",{className:"mobile-directory-header",children:"SECTION DIRECTORY"}),e.jsx("button",{className:`dropdown-item ${p==="overview"?"active":""}`,onClick:()=>f("overview"),children:"Overview"}),e.jsx("button",{className:`dropdown-item ${p==="why-project"?"active":""}`,onClick:()=>f("why-project"),children:"Why Project"}),e.jsx("button",{className:`dropdown-item ${p==="gallery"?"active":""}`,onClick:()=>f("gallery"),children:"Gallery"}),e.jsx("button",{className:`dropdown-item ${p==="floorplans"?"active":""}`,onClick:()=>f("floorplans"),children:"Floor Plans"}),e.jsx("button",{className:`dropdown-item ${p==="specifications"?"active":""}`,onClick:()=>f("specifications"),children:"Specifications"}),e.jsx("button",{className:`dropdown-item ${p==="amenities"?"active":""}`,onClick:()=>f("amenities"),children:"Amenities"}),e.jsx("button",{className:`dropdown-item ${p==="pricing"?"active":""}`,onClick:()=>f("pricing"),children:"Price"}),e.jsx("button",{className:`dropdown-item ${p==="status"?"active":""}`,onClick:()=>f("status"),children:"Status"})]})]})]})}),e.jsxs("div",{className:"project-sections-container",children:[p==="overview"&&e.jsxs("section",{id:"overview",className:"project-section-wrapper scroll-section",style:{position:"relative",overflow:"hidden",padding:"80px 0",minHeight:"calc(100vh - 55px)",display:"flex",alignItems:"center",boxSizing:"border-box"},children:[e.jsx("div",{className:"overview-logo-badge",title:"Pasha Pinnacle",children:e.jsx("img",{src:"/images/project/project-logos/Project Logos_Pasha Pinnacle.png",alt:"Pasha Pinnacle Logo",className:"overview-logo-img"})}),e.jsx("div",{className:"container",style:{position:"relative",zIndex:2,width:"100%"},children:e.jsxs("div",{className:"overview-editorial-grid",children:[e.jsx(c,{animation:"fadeRight",delay:.2,children:e.jsx("div",{className:"overview-img-container",style:{position:"relative",width:"100%",overflow:"hidden",borderRadius:"4px"},children:e.jsx("img",{src:"/images/project/pasha-pinnacle/overview.png",alt:"Pasha Pinnacle Overview",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"4px"}})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",paddingBottom:"20px"},children:[e.jsx(c,{animation:"fadeUp",delay:.2,children:e.jsx("h2",{className:"overview-main-title",children:"Where Contemporary Design Meets Urban Elegance"})}),e.jsx(c,{animation:"fadeUp",delay:.25,children:e.jsx("p",{style:{color:"var(--color-text-dark)",margin:"10px 0 0",fontSize:"20px",textAlign:"justify"},children:"Every city has a few neighbourhoods that remain timeless, valued not for passing trends, but for the life they offer. Royapettah is one of them."})}),e.jsx(c,{animation:"fadeUp",delay:.3,children:e.jsx("p",{style:{color:"var(--color-text-dark)",margin:0,fontSize:"20px",textAlign:"justify"},children:"Set within this enduring address, Pasha Pinnacle is a boutique collection of residences created for those who appreciate thoughtful design, generous living spaces, and the convenience of living at the centre of it all. Contemporary architecture, light-filled interiors, and naturally ventilated spaces come together to create homes that feel refined, welcoming, and effortlessly liveable."})}),e.jsx(c,{animation:"fadeUp",delay:.35,children:e.jsx("p",{style:{color:"var(--color-text-dark)",margin:0,fontSize:"20px",textAlign:"justify"},children:"From everyday essentials to Chennai's leading business districts, educational institutions, healthcare centres, and lifestyle destinations, everything lies within easy reach. Pasha Pinnacle is more than a place to live—it is an address that reflects the quiet confidence of a home chosen well."})})]})]})})]}),p==="overview"&&e.jsx("section",{id:"project-details",className:"project-section-wrapper scroll-section",style:{position:"relative",padding:"0"},children:e.jsx(Be,{stat1Tag:"STRUCTURE",stat1Val:"G + 3",stat1Desc:"FLOORS",stat1Count:0,stat2Tag:"TOTAL UNITS",stat2Val:"12",stat2Desc:"UNITS",stat2Count:12,projectTag:"PROJECT",projectName:"PASHA PINNACLE",location:"ROYAPETTAH, CHENNAI",reraNo:"",stat3Tag:"CONFIGURATION",stat3Val:"3",stat3Desc:"BHK",stat4Tag:"SIZE RANGE",stat4Val:"1,335 - 1,358",stat4Desc:"SQ.FT."})}),p==="why-project"&&e.jsxs("section",{id:"why-project",className:"project-section-wrapper scroll-section",style:{position:"relative",overflow:"hidden",padding:"60px 0 0",minHeight:"calc(100vh - 55px)",background:"#fff",boxSizing:"border-box"},children:[e.jsxs("div",{className:"container",style:{padding:"0 0 60px"},children:[e.jsx(c,{className:"section-header",animation:"fadeUp",delay:.1,style:{marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx("h2",{className:"section-title",children:"Pasha Pinnacle"})}),e.jsxs("div",{className:"overview-main-grid-redesign",children:[e.jsx("div",{className:"overview-left-visual",children:e.jsx(c,{animation:"fadeRight",delay:.1,children:e.jsx("div",{className:"overview-image-wrapper",children:e.jsx("img",{src:"/images/project/pasha-pinnacle/why-project.png",alt:"Pasha Pinnacle"})})})}),e.jsx("div",{className:"overview-right-text",children:e.jsx(c,{animation:"fadeLeft",delay:.1,children:e.jsx("div",{className:"pillars-container",children:e.jsx("div",{className:"pillars-accordion",children:fe.map((t,i)=>{const o=i===xe;return e.jsxs("div",{className:`pillar-item ${o?"active":""}`,onClick:()=>he(i),children:[e.jsxs("div",{className:"pillar-header",children:[e.jsx("span",{className:"pillar-number",children:t.index}),e.jsx("h4",{className:"pillar-title",children:t.title}),e.jsxs("span",{className:"pillar-toggle-icon",style:{position:"relative",width:"18px",height:"18px",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{position:"absolute",transition:"opacity 0.35s ease, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",opacity:o?0:1,transform:o?"rotate(90deg) scale(0.7)":"rotate(0deg) scale(1)"},children:"+"}),e.jsx("span",{style:{position:"absolute",transition:"opacity 0.35s ease, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",opacity:o?1:0,transform:o?"rotate(0deg) scale(1)":"rotate(-90deg) scale(0.7)"},children:"−"})]})]}),e.jsx("div",{className:"pillar-body",style:{display:"grid",gridTemplateRows:o?"1fr":"0fr",transition:"grid-template-rows 0.45s cubic-bezier(0.25, 1, 0.5, 1)",overflow:"hidden"},children:e.jsx("div",{style:{minHeight:0,overflow:"hidden"},children:e.jsx("div",{style:{padding:"10px 15px 18px",opacity:o?1:0,transform:o?"translateY(0)":"translateY(-6px)",transition:"opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1), transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)"},children:t.points?e.jsx("ul",{className:"pillar-desc",style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"8px"},children:t.points.map((a,n)=>e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"18px",lineHeight:"1.5",margin:0,padding:0},children:[e.jsx("div",{style:{width:"5px",height:"5px",borderRadius:"50%",background:"#000000ff",marginTop:"10px"}}),e.jsx("span",{className:"pillar-desc",style:{margin:0,padding:0,letterSpacing:0},children:a})]},n))}):e.jsx("p",{className:"pillar-desc",style:{margin:0,padding:0,lineHeight:"1.68"},children:t.desc})})})})]},t.index)})})})})})]})]})," ",e.jsx(Oe,{onEnquire:()=>N(!0),projectCoords:[13.0524,80.26],projectName:"Pasha Pinnacle",projectImage:"/images/project/pasha-pinnacle/extirior/1.png",categories:ze})]}),p==="gallery"&&e.jsx(e.Fragment,{children:e.jsxs("section",{id:"gallery",className:"project-gallery-section scroll-section",style:{position:"relative",overflow:"hidden",backgroundColor:"var(--color-white)",paddingTop:"20px",paddingBottom:"20px",minHeight:"calc(100vh - 55px)",display:"flex",flexDirection:"column",justifyContent:"center",gap:"12px",background:"#fff",boxSizing:"border-box"},children:[e.jsxs("div",{className:"container",children:[e.jsx(c,{className:"section-header",animation:"fadeUp",delay:.1,style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginBottom:"4px"},children:e.jsxs("h2",{className:"section-title",children:["Visual ",e.jsx("span",{children:"Spotlight"})]})}),e.jsx(c,{animation:"fadeUp",delay:.25,className:"nested-tabs-container",style:{marginBottom:"4px",display:"flex",justifyContent:"center"},children:e.jsx("div",{className:"filter-tabs",children:["exteriors","interiors","videos"].map(t=>e.jsx("button",{className:`filter-tab-btn ${h===t?"active":""}`,onClick:()=>we(t),children:t.charAt(0).toUpperCase()+t.slice(1)},t))})})]})," ",e.jsx(c,{animation:"fadeUp",delay:.35,className:"gallery-spotlight-viewport",children:h==="interiors"?e.jsx("div",{style:{width:"100%",minHeight:"420px",display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 20px",boxSizing:"border-box"},children:e.jsxs("div",{style:{maxWidth:"560px",width:"100%",textAlign:"center",padding:"60px 40px",border:"1px solid rgba(180, 133, 100, 0.25)",borderRadius:"8px",background:"linear-gradient(180deg, #FAF8F5 0%, #FFFFFF 100%)",boxShadow:"0 20px 50px rgba(0,0,0,0.04)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.22em",color:"#b48564",textTransform:"uppercase",display:"block",marginBottom:"14px"},children:"COMING SOON"}),e.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(26px, 2.8vw, 34px)",color:"#103328",margin:"0 0 14px 0",fontWeight:"400",lineHeight:"1.2"},children:"Interior Visualizations"}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"15px",color:"#666666",lineHeight:"1.75",margin:0},children:"Curated high-resolution interior perspectives for Pasha Pinnacle are currently in production and will be unveiled soon."})]})}):(()=>{const t=w[h]||[],i=t.length;if(i===0)return null;const o=i===1,a=o?t:[t[i-1],...t,t[0]];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"gallery-spotlight-track",style:o?{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",transform:"none"}:{display:"flex",alignItems:"center",gap:"0px",width:"max-content",transition:q[h]?"transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)":"none",transform:`translateX(-${O[h]*100}vw)`},children:a.map((n,d)=>{const m=o?!0:d===O[h];return e.jsxs("div",{className:`gallery-spotlight-card ${m?"active":""}`,style:{flexShrink:0,flexBasis:"100vw",width:"100vw",borderRadius:"0px",transition:"opacity 0.6s ease",cursor:h==="videos"?"pointer":"default",overflow:"hidden",position:"relative",height:"calc(100vh - 180px)",minHeight:"620px",maxHeight:"none",boxShadow:"none"},onClick:()=>{m?h==="videos"&&(ee(n.url),R(!0)):(S(A=>({...A,[h]:!0})),C(A=>({...A,[h]:d})))},children:[e.jsx("img",{src:n.src,alt:n.title,className:"gallery-spotlight-img"}),h==="videos"&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:3},children:e.jsx("div",{className:"play-button-pulsing",children:e.jsx(De,{size:30,fill:"currentColor",style:{marginLeft:"4px"}})})})]},d)})}),i>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"gallery-spotlight-arrow prev",onClick:()=>Ne(h),"aria-label":"Previous image",children:e.jsx($,{size:48,strokeWidth:1})}),e.jsx("button",{className:"gallery-spotlight-arrow next",onClick:()=>Se(h),"aria-label":"Next image",children:e.jsx(V,{size:48,strokeWidth:1})})]})]})})()})]})}),p==="specifications"&&e.jsx(Le,{specs:Me,title:"PROJECT",highlightTitle:"SPECIFICATIONS",subtitle:"PROJECT DETAILS"}),p==="floorplans"&&e.jsx("section",{id:"floorplans",className:"project-floorplans-section scroll-section",style:{minHeight:"calc(100vh - 55px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 0 80px",background:"#fff",boxSizing:"border-box"},children:e.jsxs("div",{className:"container",style:{width:"100%"},children:[e.jsx(c,{className:"section-header",animation:"fadeUp",delay:.1,style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs("h2",{className:"section-title",children:["Architectural ",e.jsx("span",{children:"Layouts"})]})}),e.jsx(c,{animation:"fadeUp",delay:.2,style:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:e.jsx("div",{className:"filter-tabs",children:[{id:"typicalFloorPlan",label:"Typical Floor plan"},{id:"floorPlan",label:"Unit Plan"},{id:"walkthrough360",label:"360° Walkthrough"}].map(t=>e.jsx("button",{className:`filter-tab-btn ${I===t.id?"active":""}`,onClick:()=>K(t.id),children:t.label},t.id))})}),I==="masterPlan"&&e.jsx(c,{animation:"fadeUp",delay:.3,className:"layout-image-container",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:v.masterPlan.image,alt:"Master Plan",onClick:()=>u({image:v.masterPlan.image,name:"Master Plan"}),style:{maxWidth:"100%",maxHeight:"700px",objectFit:"contain",borderRadius:"16px",boxShadow:"0 20px 60px rgba(0,0,0,0.05)",cursor:"pointer"}})}),I==="typicalFloorPlan"&&e.jsxs(c,{animation:"fadeUp",delay:.3,style:{width:"100%"},children:[e.jsx("div",{style:{display:"flex",marginBottom:"35px",borderBottom:".1px solid rgba(0,0,0,0.08)",width:"100%",justifyContent:"flex-start"},children:e.jsx("div",{className:"filter-tabs",style:{display:"flex",gap:"0"},children:[{id:"typical",label:"Typical Floor Plan",image:v.typicalFloorPlan.image},{id:"stilt",label:"Stilt + Ground Floor",image:"/images/project/pasha-pinnacle/floorplan/stilt-ground-floor.jpeg"}].map((t,i,o)=>{const a=_===t.id;return e.jsx("button",{onClick:()=>ce(t.id),className:`filter-tab-btn ${a?"active":""}`,style:{padding:"0 24px",paddingLeft:i===0?"0":"24px",background:"transparent",border:"none",borderRight:i!==o.length-1?".1px solid rgba(0, 0, 0, 0.15)":"none",cursor:"pointer",outline:"none",boxShadow:"none"},children:e.jsx("span",{style:{position:"relative",display:"inline-block",paddingBottom:"12px",borderBottom:a?".1px solid var(--color-text-dark)":".1px solid transparent",marginBottom:"-1px",fontWeight:"400",color:a?"#000000":"var(--color-text-muted-light)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"var(--font-sans)",fontSize:j?"13px":"14px",transition:"all 0.3s ease"},children:t.label})},t.id)})})}),e.jsx("div",{className:"layout-image-container",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:_==="typical"?e.jsx("img",{src:v.typicalFloorPlan.image,alt:"Typical Floor Plan",onClick:()=>u({image:v.typicalFloorPlan.image,name:"Typical Floor Plan"}),style:{maxWidth:"100%",maxHeight:"700px",objectFit:"contain",borderRadius:"8px",boxShadow:"0 20px 60px rgba(0,0,0,0.05)",cursor:"pointer"}}):e.jsx("img",{src:"/images/project/pasha-pinnacle/floorplan/PP Floor Plan_ Stilt + Car Park.jpg.jpeg",alt:"Stilt + Ground Floor",onClick:()=>u({image:"/images/project/pasha-pinnacle/floorplan/stilt-ground-floor.jpeg",name:"Stilt + Ground Floor"}),style:{maxWidth:"100%",maxHeight:"700px",objectFit:"contain",borderRadius:"8px",boxShadow:"0 20px 60px rgba(0,0,0,0.05)",cursor:"pointer"}})})]}),I==="walkthrough360"&&e.jsx(c,{animation:"fadeUp",delay:.3,className:"layout-walkthrough-container",style:{width:"100%",maxWidth:"800px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs("div",{style:{textAlign:"center",padding:"70px 30px",background:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:"16px",width:"100%",border:"1px solid rgba(0, 0, 0, 0.08)",boxShadow:"0 20px 50px rgba(0, 0, 0, 0.04)",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"rgba(180, 133, 100, 0.12)",color:"#b48564",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(We,{size:26})}),e.jsx("span",{style:{fontSize:"11px",fontWeight:"600",letterSpacing:"0.16em",textTransform:"uppercase",color:"#b48564"},children:"360° Immersive Experience"}),e.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"28px",fontWeight:"400",color:"var(--color-primary, #111111)",margin:0},children:"360° Virtual Walkthrough"}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"15px",color:"var(--color-text-muted, #666666)",maxWidth:"460px",margin:0,lineHeight:"1.6"},children:"The interactive 360° virtual walkthrough is currently in curation and will be available soon."}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx("span",{style:{display:"inline-block",padding:"8px 22px",borderRadius:"100px",background:"#f3efe8",color:"#8f6b4e",fontSize:"12px",fontWeight:"600",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Coming Soon"})})]})}),I==="floorPlan"&&e.jsxs(c,{animation:"fadeUp",delay:.3,className:"floorplan-slide-viewport",style:{position:"relative",width:"100%"},children:[s.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"floorplan-slide-arrow prev",onClick:ge,"aria-label":"Previous floor plan",children:e.jsx($,{size:28})}),e.jsx("button",{className:"floorplan-slide-arrow next",onClick:me,"aria-label":"Next floor plan",children:e.jsx(V,{size:28})})]}),e.jsx("div",{style:{display:"flex",marginBottom:"40px",borderBottom:".1px solid rgba(0,0,0,0.08)",width:"100%"},children:e.jsx("div",{className:"filter-tabs",style:{display:"flex",gap:"0",flexWrap:"wrap"},children:Object.keys(v.floorPlan).map((t,i,o)=>{const n={blockA:"Block A",blockB:"Block B","3bhk":"3 BHK","4bhk":"4 BHK"}[t]||t,d=X===t;return e.jsx("button",{onClick:()=>{var m;de(t),(m=v.floorPlan[t])!=null&&m[0]&&k(v.floorPlan[t][0].id)},className:`filter-tab-btn ${d?"active":""}`,style:{padding:"0 24px",paddingLeft:i===0?"0":"24px",background:"transparent",border:"none",borderRight:i!==o.length-1?".1px solid rgba(0, 0, 0, 0.15)":"none",cursor:"pointer",outline:"none",boxShadow:"none"},children:e.jsx("span",{style:{position:"relative",display:"inline-block",paddingBottom:"12px",borderBottom:d?".1px solid var(--color-text-dark)":".1px solid transparent",marginBottom:"-1px",fontWeight:"400",color:d?"#000000":"var(--color-text-muted-light)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"var(--font-sans)",fontSize:j?"13px":"14px",transition:"all 0.3s ease"},children:n})},t)})})}),s.length>1&&e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px",marginTop:"-20px"},children:s.map(t=>{const i=Q===t.id;return e.jsx("button",{onClick:()=>k(t.id),style:{padding:"8px 18px",borderRadius:"24px",fontSize:"13px",fontWeight:i?"500":"400",border:i?"1px solid var(--color-highlight)":"1px solid rgba(0,0,0,0.1)",background:i?"rgba(180, 133, 100, 0.12)":"#f9f9f9",color:i?"var(--color-highlight)":"#333",cursor:"pointer",transition:"all 0.2s ease",outline:"none"},children:t.name},t.id)})}),e.jsx("div",{className:"floorplan-slide-track-viewport",style:{overflow:"hidden",width:"100%"},children:e.jsx("div",{className:"floorplan-slide-track",style:{display:"flex",transition:"transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",transform:`translateX(-${Math.max(0,s.findIndex(t=>t.id===(y==null?void 0:y.id)))*100}%)`},children:s.map(t=>e.jsx("div",{style:{flex:"0 0 100%",minWidth:0,boxSizing:"border-box"},children:e.jsxs("div",{className:"floorplan-slide-content-grid",style:{display:"grid",gridTemplateColumns:j?"1fr":"3fr 7fr",gap:"30px",alignItems:"center"},children:[e.jsxs("div",{className:"floorplan-slide-details-col",style:{textAlign:"left",order:j?2:1},children:[e.jsx("h3",{className:"floorplan-slide-title",style:{fontFamily:"var(--font-heading)",fontSize:"32px",fontWeight:"400",color:"var(--color-highlight)",marginBottom:"32px"},children:t.name}),e.jsxs("div",{className:"floorplan-slide-specs-list",style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"40px"},children:[e.jsxs("div",{className:"floorplan-slide-spec-item",style:{borderBottom:"1px solid rgba(0,0,0,0.05)",paddingBottom:"12px"},children:[e.jsx("span",{className:"spec-label",style:{display:"block",fontSize:"11px",fontWeight:"400",color:"var(--color-text-muted)",textTransform:"uppercase",marginBottom:"4px",letterSpacing:"0.08em"},children:"Saleable Area"}),e.jsx("span",{className:"spec-val",style:{fontSize:"18px",color:"var(--color-primary)"},children:t.saleableArea||t.builtUp})]}),e.jsxs("div",{className:"floorplan-slide-spec-item",style:{borderBottom:"1px solid rgba(0,0,0,0.05)",paddingBottom:"12px"},children:[e.jsx("span",{className:"spec-label",style:{display:"block",fontSize:"11px",fontWeight:"400",color:"var(--color-text-muted)",textTransform:"uppercase",marginBottom:"4px",letterSpacing:"0.08em"},children:"Rera Carpet Area"}),e.jsx("span",{className:"spec-val",style:{fontSize:"18px",color:"var(--color-primary)"},children:t.reraCarpetArea||t.builtUp})]}),e.jsxs("div",{className:"floorplan-slide-spec-item",style:{borderBottom:"1px solid rgba(0,0,0,0.05)",paddingBottom:"12px"},children:[e.jsx("span",{className:"spec-label",style:{display:"block",fontSize:"11px",fontWeight:"400",color:"var(--color-text-muted)",textTransform:"uppercase",marginBottom:"4px",letterSpacing:"0.08em"},children:"UDS"}),e.jsx("span",{className:"spec-val",style:{fontSize:"18px",color:"var(--color-primary)"},children:t.uds||t.plot})]}),e.jsxs("div",{className:"floorplan-slide-spec-item",style:{borderBottom:"1px solid rgba(0,0,0,0.05)",paddingBottom:"12px"},children:[e.jsx("span",{className:"spec-label",style:{display:"block",fontSize:"11px",fontWeight:"400",color:"var(--color-text-muted)",textTransform:"uppercase",marginBottom:"4px",letterSpacing:"0.08em"},children:"Facing"}),e.jsx("span",{className:"spec-val",style:{fontSize:"18px",color:"var(--color-primary)"},children:t.facing})]})]})]}),e.jsx("div",{className:"floorplan-slide-visual-col",style:{display:"flex",justifyContent:"center",alignItems:"center",order:j?1:2},children:t.image?e.jsx("div",{className:"floorplan-slide-img-wrap",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:t.image,alt:t.name,onClick:()=>u(t),style:{maxWidth:"100%",maxHeight:"550px",objectFit:"contain",cursor:"pointer",transition:"transform 0.3s ease"},className:"floorplan-image-zoomable"})}):e.jsxs("div",{className:"blueprint-canvas",style:{width:"100%",minHeight:"400px",backgroundColor:"var(--color-bg-navy)",borderRadius:"16px"},children:[e.jsx("div",{className:"blueprint-grid-mesh"}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",color:"var(--color-text-muted-light)"},children:[e.jsx(ne,{size:48,style:{marginBottom:"24px",opacity:.8}}),e.jsx("span",{style:{color:"var(--color-bg-light)"},children:t.name}),e.jsx("span",{style:{textTransform:"uppercase",marginTop:"16px",color:"var(--color-gold)"},children:"Interactive Blueprint Layout"})]})]})})]})},t.id))})})]})]})}),p==="amenities"&&e.jsx("section",{id:"amenities",className:"project-amenities-section scroll-section",style:{position:"relative",overflow:"hidden",padding:0,minHeight:"calc(100vh - 55px)",backgroundColor:"#081226",boxSizing:"border-box"},children:e.jsx(He,{amenities:Y,title:"Boutique Residence Amenities",subtitle:"Designed with meticulous attention to detail, offering exceptional features and everyday conveniences that elevate your boutique living experience."})}),p==="pricing"&&e.jsx(Ue,{projectName:"Pasha Pinnacle",unitTypes:["3 BHK"]}),p==="status"&&e.jsx("section",{id:"status",className:"project-status-section scroll-section",style:{minHeight:"calc(100vh - 55px)",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",padding:"60px 0 90px",boxSizing:"border-box"},children:e.jsxs("div",{className:"container",style:{width:"100%"},children:[e.jsx(c,{className:"section-header",animation:"fadeUp",delay:.1,style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"30px"},children:e.jsxs("h2",{className:"section-title",children:["Project ",e.jsx("span",{children:"Status"})]})}),e.jsx(c,{animation:"fadeUp",delay:.25,style:{display:"flex",justifyContent:"center",width:"100%"},children:e.jsxs("div",{style:{maxWidth:"600px",width:"100%",textAlign:"center",padding:"60px 40px",border:"1px solid rgba(180, 133, 100, 0.25)",borderRadius:"8px",background:"linear-gradient(180deg, #FAF8F5 0%, #FFFFFF 100%)",boxShadow:"0 20px 50px rgba(0,0,0,0.04)",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.22em",color:"#b48564",textTransform:"uppercase",display:"block"},children:"COMING SOON"}),e.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(26px, 2.8vw, 34px)",color:"#103328",margin:0,fontWeight:"400",lineHeight:"1.2"},children:"Construction Milestone Updates"}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"15px",color:"#666666",lineHeight:"1.75",margin:0},children:"Periodic photographic site progress reports and construction status milestones for Pasha Pinnacle are currently in production and will be updated soon."})]})})]})})]}),e.jsxs("section",{className:"project-cta-banner-section",children:[e.jsxs("div",{className:"project-cta-fixed-bg",children:[e.jsxs("picture",{className:"project-cta-picture",children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:"/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg"}),e.jsx("img",{src:"/images/project/pasha-pinnacle/extirior/1 Resized PP 16x9.jpg",alt:"Pasha Pinnacle - Experience True Luxury in Royapettah",className:"project-cta-bg-img"})]}),e.jsx("div",{className:"project-cta-dark-overlay"})]}),e.jsxs("div",{className:"container project-cta-content-wrap",children:[e.jsx(c,{animation:"fadeUp",delay:.1,children:e.jsx("div",{className:"project-cta-eyebrow",children:e.jsx("span",{children:"MOVE IN SOON • ROYAPETTAH, CHENNAI"})})}),e.jsx(c,{animation:"fadeUp",delay:.2,children:e.jsx("h2",{className:"project-cta-title",children:"Experience True Luxury."})}),e.jsx(c,{animation:"fadeUp",delay:.3,children:e.jsx("p",{className:"project-cta-subtitle",children:"Experience the pinnacle of luxury living in the heart of Royapettah. Secure your legacy today."})}),e.jsx(c,{animation:"fadeUp",delay:.4,children:e.jsx("div",{className:"project-cta-btn-wrap",children:e.jsx("button",{type:"button",onClick:()=>N(!0),className:"btn-cta-enquire",children:"ENQUIRE NOW"})})})]})]})]}),g&&e.jsxs("div",{className:"lightbox-overlay","data-lenis-prevent":!0,onClick:()=>u(null),style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"24px 32px 20px",boxSizing:"border-box",overflow:"hidden"},children:[e.jsx("button",{className:"lightbox-close-btn",onClick:()=>u(null),children:e.jsx(H,{size:24})}),s.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"lightbox-arrow-btn prev",onClick:t=>{t.stopPropagation();const o=(s.findIndex(n=>n.id===g.id)-1+s.length)%s.length,a=s[o];k(a.id),u(a)},children:e.jsx($,{size:24})}),e.jsx("button",{className:"lightbox-arrow-btn next",onClick:t=>{t.stopPropagation();const o=(s.findIndex(n=>n.id===g.id)+1)%s.length,a=s[o];k(a.id),u(a)},children:e.jsx(V,{size:24})})]}),e.jsx("div",{onClick:t=>t.stopPropagation(),style:{flex:"1 1 0",minHeight:0,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:e.jsx("img",{src:g.image,alt:g.name||"",style:{maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",objectFit:"contain",borderRadius:"8px"}})}),(g.saleableArea||g.builtUp||g.reraCarpetArea)&&e.jsxs("div",{onClick:t=>t.stopPropagation(),style:{width:"100%",maxWidth:"900px",flexShrink:0,marginTop:"12px",marginBottom:"0",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:"16px",padding:"12px 20px",border:"1px solid rgba(255, 255, 255, 0.15)",boxShadow:"0 20px 50px rgba(0,0,0,0.3)",color:"#ffffff",boxSizing:"border-box"},children:[e.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"20px",fontWeight:"400",color:"#b48564",textTransform:"uppercase",letterSpacing:"0.05em",margin:"0 0 10px 0"},children:g.name}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{display:"block",fontSize:"10px",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"},children:"Saleable Area"}),e.jsx("span",{style:{fontSize:"15px",fontWeight:"500"},children:g.saleableArea||g.builtUp})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"block",fontSize:"10px",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"},children:"Rera Carpet Area"}),e.jsx("span",{style:{fontSize:"15px",fontWeight:"500"},children:g.reraCarpetArea||g.builtUp})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"block",fontSize:"10px",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"},children:"UDS"}),e.jsx("span",{style:{fontSize:"15px",fontWeight:"500"},children:g.uds||g.plot})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"block",fontSize:"10px",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"},children:"Facing"}),e.jsx("span",{style:{fontSize:"15px",fontWeight:"500"},children:g.facing})]})]})]})]}),F&&e.jsxs("div",{className:"lightbox-overlay","data-lenis-prevent":!0,onClick:()=>R(!1),children:[e.jsx("button",{className:"lightbox-close-btn",onClick:()=>R(!1),children:e.jsx(H,{size:24})}),e.jsx("div",{className:"video-modal-content",onClick:t=>t.stopPropagation(),children:T&&(T.endsWith(".mp4")||T.includes(".mp4"))?e.jsx("video",{className:"video-iframe",src:encodeURI(T),controls:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"contain",background:"#000"}}):e.jsx("iframe",{className:"video-iframe",src:T,title:"Villa Walkthrough Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),B&&e.jsxs("div",{className:"fs-popup-overlay","data-lenis-prevent":!0,onClick:()=>z(!1),children:[e.jsxs("div",{className:"fs-popup-topbar",children:[e.jsx("img",{src:"/images/white-logo.png",alt:"Aadhithya Mohan Properties",className:"fs-popup-logo"}),e.jsx("button",{className:"fs-popup-close-btn",onClick:()=>z(!1),"aria-label":"Close modal",children:e.jsx(H,{size:20,strokeWidth:2.2})})]}),e.jsxs("div",{className:"fs-popup-split",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"fs-popup-image-half",children:[e.jsx("img",{src:"/images/project/pasha-pinnacle/hero.webp",alt:"Pasha Pinnacle",className:"fs-popup-bg-img"}),e.jsxs("div",{className:"fs-popup-img-overlay",children:[e.jsx("span",{className:"fs-popup-kicker",children:"OFFICIAL E-BROCHURE"}),e.jsx("h2",{className:"fs-popup-project-title",children:"Pasha Pinnacle"}),e.jsx("p",{className:"fs-popup-project-sub",children:"Ultra-Luxury Residences • Royapettah, Chennai"}),e.jsxs("div",{className:"fs-popup-chips",children:[e.jsx("span",{className:"fs-popup-chip",children:"3 BHK Residences"}),e.jsx("span",{className:"fs-popup-chip",children:"G + 3 Floors"}),e.jsx("span",{className:"fs-popup-chip",children:"12 Exclusive Units"}),e.jsx("span",{className:"fs-popup-chip",children:"1,335 – 1,358 Sq.Ft."})]})]})]}),e.jsx("div",{className:"fs-popup-form-half",children:e.jsxs("div",{className:"fs-form-inner",children:[e.jsx("span",{className:"fs-form-badge",children:"INSTANT ACCESS"}),e.jsx("h3",{className:"fs-form-title",children:"DOWNLOAD E-BROCHURE"}),e.jsx("p",{className:"fs-form-subtitle",children:"Enter your contact details to receive the official e-brochure immediately."}),ye?e.jsxs("div",{className:"fw-success-box",children:[e.jsx(le,{size:54,className:"fw-success-gold"}),e.jsx("h4",{children:"Brochure Dispatched!"}),e.jsx("p",{children:"The comprehensive e-brochure and floor plans have been dispatched to your email and WhatsApp."})]}):e.jsxs("form",{onSubmit:Ee,className:"fs-form-fields",children:[e.jsx("input",{type:"text",placeholder:"Your Name *",required:!0,className:"fs-input-box",value:x.name||x.firstName||"",onChange:t=>P({...x,name:t.target.value,firstName:t.target.value})}),e.jsxs("div",{className:"fs-phone-group",children:[e.jsxs("select",{value:x.phoneCode,onChange:t=>P({...x,phoneCode:t.target.value}),className:"fs-phone-code",children:[e.jsx("option",{value:"+91",children:"IN +91"}),e.jsx("option",{value:"+1",children:"US +1"}),e.jsx("option",{value:"+44",children:"UK +44"}),e.jsx("option",{value:"+971",children:"AE +971"}),e.jsx("option",{value:"+65",children:"SG +65"})]}),e.jsx("input",{type:"tel",placeholder:"Phone Number *",required:!0,className:"fs-input-box fs-phone-input",value:x.phone,onChange:t=>P({...x,phone:t.target.value})})]}),e.jsx("input",{type:"email",placeholder:"Email Address *",required:!0,className:"fs-input-box",value:x.email,onChange:t=>P({...x,email:t.target.value})}),e.jsxs("label",{className:"fs-checkbox-row",children:[e.jsx("input",{type:"checkbox",required:!0,checked:x.privacy,onChange:t=>P({...x,privacy:t.target.checked})}),e.jsxs("span",{children:["I agree to the ",e.jsx("a",{href:"#privacy",style:{color:"#d8b28a",textDecoration:"underline"},children:"privacy policy"})," & authorize developer communication. *"]})]}),e.jsx("button",{type:"submit",className:"fs-gold-button",children:"DOWNLOAD E-BROCHURE"})]})]})})]})]}),L&&e.jsxs("div",{className:"fs-popup-overlay","data-lenis-prevent":!0,onClick:()=>N(!1),children:[e.jsxs("div",{className:"fs-popup-topbar",children:[e.jsx("img",{src:"/images/white-logo.png",alt:"Aadhithya Mohan Properties",className:"fs-popup-logo"}),e.jsx("button",{className:"fs-popup-close-btn",onClick:()=>N(!1),"aria-label":"Close modal",children:e.jsx(H,{size:20,strokeWidth:2.2})})]}),e.jsxs("div",{className:"fs-popup-split",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"fs-popup-image-half",children:[e.jsx("img",{src:"/images/project/pasha-pinnacle/hero.png",alt:"Pasha Pinnacle Overview",className:"fs-popup-bg-img"}),e.jsxs("div",{className:"fs-popup-img-overlay",children:[e.jsx("span",{className:"fs-popup-kicker",children:"SCHEDULE A PRIVATE VISIT"}),e.jsx("h2",{className:"fs-popup-project-title",children:"Pasha Pinnacle"}),e.jsx("p",{className:"fs-popup-project-sub",children:"Ultra-Luxury Residences • Royapettah, Chennai"}),e.jsxs("div",{className:"fs-popup-chips",children:[e.jsx("span",{className:"fs-popup-chip",children:"3 BHK Residences"}),e.jsx("span",{className:"fs-popup-chip",children:"G + 3 Floors"}),e.jsx("span",{className:"fs-popup-chip",children:"12 Exclusive Units"}),e.jsx("span",{className:"fs-popup-chip",children:"1,335 – 1,358 Sq.Ft."})]})]})]}),e.jsx("div",{className:"fs-popup-form-half",children:e.jsxs("div",{className:"fs-form-inner",children:[e.jsx("span",{className:"fs-form-badge",children:"PRIVATE APPOINTMENT"}),e.jsx("h3",{className:"fs-form-title",children:"SCHEDULE A VISIT"}),e.jsx("p",{className:"fs-form-subtitle",children:"Choose your consultation preference and contact mode."}),ve?e.jsxs("div",{className:"fw-success-box",children:[e.jsx(le,{size:54,className:"fw-success-gold"}),e.jsx("h4",{children:"Inquiry Received!"}),e.jsx("p",{children:"One of our senior client advisors will reach out shortly to confirm your scheduled appointment."})]}):e.jsxs("form",{onSubmit:Ie,className:"fs-form-fields",children:[e.jsxs("div",{className:"fs-radio-row",children:[e.jsxs("label",{className:"fs-radio-label",children:[e.jsx("input",{type:"radio",name:"contactMode",value:"callback",checked:l.contactMode==="callback",onChange:t=>b({...l,contactMode:t.target.value})}),"Request a call back"]}),e.jsxs("label",{className:"fs-radio-label",children:[e.jsx("input",{type:"radio",name:"contactMode",value:"videocall",checked:l.contactMode==="videocall",onChange:t=>b({...l,contactMode:t.target.value})}),"Schedule a video call"]})]}),e.jsxs("div",{className:"fs-field-group",children:[e.jsx("label",{className:"fs-field-label",children:"When are you coming to visit the site? *"}),e.jsxs("div",{className:"fs-config-pill-grid",children:[e.jsx("button",{type:"button",className:`fs-config-pill ${l.visitTimeline!=="this-month"?"active":""}`,onClick:()=>b({...l,visitTimeline:"this-week"}),children:e.jsx("span",{className:"fs-config-pill-main",children:"This Week"})}),e.jsx("button",{type:"button",className:`fs-config-pill ${l.visitTimeline==="this-month"?"active":""}`,onClick:()=>b({...l,visitTimeline:"this-month"}),children:e.jsx("span",{className:"fs-config-pill-main",children:"This Month"})})]})]}),e.jsxs("div",{className:"fs-field-group",children:[e.jsx("label",{className:"fs-field-label",children:"Configuration *"}),e.jsx("div",{className:"fs-config-pill-grid single-pill",children:e.jsx("button",{type:"button",className:"fs-config-pill active",onClick:()=>b({...l,config:"3 BHK"}),children:e.jsx("span",{className:"fs-config-pill-main",children:"3 BHK"})})})]}),e.jsx("input",{type:"text",placeholder:"Your Name *",required:!0,className:"fs-input-box",value:l.name||l.firstName||"",onChange:t=>b({...l,name:t.target.value,firstName:t.target.value})}),e.jsxs("div",{className:"fs-phone-group",children:[e.jsxs("select",{value:l.phoneCode,onChange:t=>b({...l,phoneCode:t.target.value}),className:"fs-phone-code",children:[e.jsx("option",{value:"+91",children:"IN +91"}),e.jsx("option",{value:"+1",children:"US +1"}),e.jsx("option",{value:"+44",children:"UK +44"}),e.jsx("option",{value:"+971",children:"AE +971"}),e.jsx("option",{value:"+65",children:"SG +65"})]}),e.jsx("input",{type:"tel",placeholder:"Phone Number *",required:!0,className:"fs-input-box fs-phone-input",value:l.phone||l.phoneNumber||"",onChange:t=>b({...l,phone:t.target.value,phoneNumber:t.target.value})})]}),e.jsx("input",{type:"email",placeholder:"Email Address *",required:!0,className:"fs-input-box",value:l.email,onChange:t=>b({...l,email:t.target.value})}),e.jsxs("label",{className:"fs-checkbox-row",children:[e.jsx("input",{type:"checkbox",required:!0,checked:l.privacy,onChange:t=>b({...l,privacy:t.target.checked})}),e.jsxs("span",{children:["I've read and agree to the ",e.jsx("a",{href:"#privacy",style:{color:"#d8b28a",textDecoration:"underline"},children:"privacy policy. *"})]})]}),e.jsx("button",{type:"submit",className:"fs-gold-button",children:"CONFIRM VISIT REQUEST"})]})]})})]})]}),e.jsx(Fe,{}),e.jsx("style",{children:`
        .project-detail-page {
          background-color: var(--color-white);
          min-height: 100vh;
        }
        .project-detail-page .sobha-navbar:not(.mega-open):not(.mobile-open) {
          background: linear-gradient(180deg, rgba(10, 10, 10, 0.45) 0%, transparent 100%) !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
        }
        .project-detail-page.hide-main-header .sobha-navbar {
          transform: translateY(-100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        section[id], div[id] {
          scroll-margin-top: 55px; /* offset for sticky subnav */
        }
        .project-sub-nav {
          background: 
            linear-gradient(180deg, rgb(39 39 39 / 86%) 0%, rgb(35 35 35) 38%, rgb(0 0 0 / 55%) 50%, rgb(0 0 0 / 80%) 100%), linear-gradient(115deg, rgba(26, 28, 34, 0.85) 0%, rgb(14 14 14 / 80%) 35%, rgb(47 47 47 / 80%) 50%, rgb(53 53 53 / 80%) 65%, rgb(33 34 35 / 73%) 100%) !important;
          backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          position: sticky;
          top: 0 !important;
          z-index: 9990;
          padding: 0;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.16) !important;
        }
        .overview-logo-badge {
          position: absolute;
          top: 0;
          left: 24px;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 0 0 6px 6px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-top: none;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12), 0 3px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9980;
          width: 140px;
          overflow: hidden;
          box-sizing: border-box;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .overview-logo-badge:hover {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16), 0 4px 10px rgba(0, 0, 0, 0.06);
          transform: translateY(2px);
        }
        .overview-logo-img {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
          transform: scale(1.6);
          transform-origin: center;
          display: block !important;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .overview-logo-badge {
            left: 14px;
            width: 105px;
            padding: 4px 8px;
            border-radius: 0 0 5px 5px;
          }
        }
        .sub-nav-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }
        .sub-nav-scroll-wrapper {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 0;
          flex: 1;
          position: relative;
        }
        /* â”€â”€ REFINED CONCEPT 3 STYLES â”€â”€ */
        .concept-3-cinematic {
          position: relative;
          width: 100%;
          min-height: 700px;
          background: var(--color-bg-navy);
          overflow: hidden;
          display: flex;
          align-items: stretch;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .c3-massive-text {
          position: absolute;
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9vw;
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
          pointer-events: none;
          z-index: 3;
          width: 100%;
          text-align: center;
          line-height: 1;
        }
        .c3-split-layout {
          display: flex;
          flex: 1;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .c3-image-pane {
          width: 60%;
          position: relative;
          display: flex;
        }
        .c3-image-pane img {
          width: 100%;
          flex: 1;
          object-fit: cover;
          filter: grayscale(10%) contrast(110%);
        }
        .c3-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(29,53,87,0), var(--color-bg-navy));
        }
        .c3-solid-pane {
          width: 40%;
          background: var(--color-bg-navy);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 5%;
          position: relative;
        }
        .c3-action-area {
          max-width: 550px;
          position: relative;
          z-index: 4;
        }
        .c3-tag {
          font-size: 12px;
          color: var(--color-bg-cream);
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
          font-weight: 400;
        }
        .c3-action-area h3 {
          color: var(--color-white);
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .c3-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .show-only-on-mobile {
          display: none !important;
        }
        /* â”€â”€ INFO GRID STYLES â”€â”€ */
        .info-grid-tag {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--color-text-muted-light);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .info-grid-val {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 200;
          color: var(--color-text-dark);
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 6px;
          display: block;
          letter-spacing: 0.02em;
        }
        .info-grid-val-large {
          font-family: var(--font-heading);
          font-size: 30px;
          font-weight: 200;
          color: #b48564;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 6px;
          display: block;
          letter-spacing: 0.04em;
        }
        .info-grid-desc {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--color-text-dark);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
          font-weight: 400;
        }
        /* ── SLIDING GOLD INDICATOR ── */
        .sub-nav-indicator {
          position: absolute;
          bottom: -1px;
          height: 3.5px;
          background: linear-gradient(90deg, #f3c892 0%, #ffe6c2 50%, #f3c892 100%);
          border-radius: 4px 4px 0 0;
          transition: left 0.45s cubic-bezier(0.16, 1, 0.3, 1), width 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          box-shadow: 
            0 0 14px rgba(243, 200, 146, 0.8), 
            0 0 28px rgba(243, 200, 146, 0.4);
          pointer-events: none;
          z-index: 2;
        }
        .sub-nav-link {
          font-family: var(--font-sans) !important;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85) !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 18px 24px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent !important;
          border: none;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          white-space: nowrap;
        }
        .sub-nav-link:hover {
          color: #B48564 !important;
          background: transparent !important;
        }
        .sub-nav-link.active {
          color: #B48564 !important;
          font-weight: 700 !important;
          background: transparent !important;
          text-shadow: 0 0 12px rgba(243, 200, 146, 0.5);
        }
        /* ── SUBNAV DROPDOWNS ── */
        .sub-nav-dropdown-wrapper {
          position: relative;
          display: inline-flex;
        }
        .sub-nav-chevron {
          margin-left: 2px;
          display: inline-block;
          vertical-align: middle;
          opacity: 0.4;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }
        .sub-nav-dropdown-wrapper:hover .sub-nav-chevron {
          transform: rotate(180deg);
          opacity: 0.8;
        }
        .sub-nav-dropdown-wrapper:hover .more-trigger-icon {
          transform: rotate(90deg) scale(1.1);
          color: #ffffff !important;
        }
        .sub-nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: rgba(30, 30, 30, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          min-width: 185px;
          padding: 6px;
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 99;
        }
        .sub-nav-dropdown-wrapper:hover .sub-nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item {
          font-family: var(--font-sans) !important;
          display: block;
          padding: 10px 16px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          cursor: pointer;
          background: transparent;
          border: none;
          border-radius: 8px;
          width: 100%;
        }
        .dropdown-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          padding-left: 20px;
        }
        .dropdown-item.active {
          color: #b48564;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
        }
        /* â”€â”€ Nested Tabs (Overview Switcher) â”€â”€ */
        .nested-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px; /* Reduced to eliminate negative space */
        }
        .nested-tabs-wrapper {
          display: flex;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 6px;
          border-radius: 100px;
          gap: 6px;
        }
        .nested-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 24px;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-text-muted);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nested-tab-btn:hover {
          color: var(--color-primary);
          background: rgba(0, 0, 0, 0.04);
        }
        .nested-tab-btn.active {
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 400;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        /* â”€â”€ Tab Pane Animations â”€â”€ */
        .fade-in-panel {
          animation: paneFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes paneFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .project-hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: -webkit-fill-available;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          overflow: hidden;
          padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 20px);
          background-color: var(--color-bg-navy);
          will-change: transform, opacity;
        }

        .project-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-bg-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .desktop-only-video {
          display: block;
        }

        .mobile-only-video {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only-video {
            display: none !important;
          }
          .mobile-only-video {
            display: block !important;
          }
        }

        .project-hero-picture {
          display: block;
          width: 100%;
          height: 100%;
        }

        .project-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transform: scale(1);
          transition: filter 0.8s ease-in-out;
        }

        .project-hero-bg-image.animate-zoom {
          animation: slowZoom 15s ease-in-out infinite alternate;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0.75) 0%, 
            rgba(0, 0, 0, 0.0) 25%, 
            rgba(0, 0, 0, 0) 60%, 
            rgba(0, 0, 0, 0.85) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .project-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center; 
          width: 100%;
          padding: 0 40px;
          margin-bottom: clamp(60px, 10vh, 110px);
        }

        .project-hero-text-block {
          text-align: center; 
          margin-bottom: 18px;
        }

        .project-hero-title {
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 12px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .project-hero-subtitle {
          font-size: 20px;
          font-weight: 400;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.8;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          margin-bottom: 8px;
        }

        .project-hero-cta-block .btn-discover {
          display: inline-block;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.47);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 10px 20px;
          border-radius: 100px;
          text-decoration: none;
          backdrop-filter: blur(38px);
          -webkit-backdrop-filter: blur(38px);
          transition: all 0.4s ease;
          cursor: pointer;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .project-hero-cta-block .btn-discover:hover {
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }
        @keyframes fadeUpProject {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* â”€â”€ SECTION WRAPPER & SUBSECTIONS â”€â”€ */
        .project-section-wrapper {
          background-color: var(--color-bg-light);
          animation: sectionTabFadeIn 0.35s cubic-bezier(0.25, 1, 0.5, 1) both;
        }
        @keyframes sectionTabFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-header {
          margin-bottom: 0px;
          text-align: left;
        }
        .section-subtitle {
          color: var(--color-text-dark);
          line-height: 1.6;
          max-width: 680px;
          margin-bottom: 0;
          text-align: left;
        }
        #overview.project-section-wrapper {
          background-color: var(--color-white);
          padding: 80px 0;
        }
        .overview-outer-container {
          max-width: var(--container-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        /* â”€â”€ Centered Header Styles â”€â”€ */
        .overview-centered-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .overview-main-title {
          color: var(--color-text-dark);
          text-transform: uppercase;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 0px;
        }
        .overview-sub-title {
          font-size: 15px;
          color: var(--color-text-muted);
          margin: 0;
        }
        /* â”€â”€ Pill Tabs Styles â”€â”€ */
        .overview-nav-container {
          display: flex;
          justify-content: center;
          margin-bottom: 56px;
        }
        .overview-nav-pills {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 100px;
          padding: 6px;
          gap: 6px;
        }
        .overview-pill-btn {
          border: none;
          background: transparent;
          font-size: 14px;
          font-weight: 400;
          color: var(--color-text-muted);
          padding: 10px 28px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .overview-pill-btn:hover:not(.active) {
          color: var(--color-primary);
          background: rgba(0, 0, 0, 0.04);
        }
        .overview-pill-btn.active {
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 400;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        /* â”€â”€ Grid Layout Styles â”€â”€ */
        .overview-main-grid-redesign {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: center;
          min-height: 420px;
        }
        .overview-left-visual {
          width: 100%;
        }
        .overview-image-wrapper {
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          min-height: 420px;
          max-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fdfdfd;
        }
        .overview-image-wrapper img {
          height: 100%;
          max-height: 520px;
          display: block;
        }
        .overview-right-text {
          width: 100%;
        }
        .overview-text-title {
          color: var(--color-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .overview-text-desc {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: 32px;
        }
        /* Curated slide panels */
        .overview-slide-panel {
          animation: ov-panel-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes ov-panel-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Curated Amenities View */
        .overview-amenities-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .ov-sub-heading {
          font-size: 21px;
          color: var(--color-primary);
          margin: 0 0 20px 0;
          font-weight: 400;
        }
        .ov-amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 20px;
        }
        .ov-amenity-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 12px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .ov-amenity-icon {
          color: var(--color-primary);
          font-size: 18px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .ov-amenity-title {
          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-primary);
          margin: 0 0 4px 0;
        }
        .ov-amenity-desc {
          font-size: 11.5px;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.45;
        }
        /* Curated Location View */
        .overview-location-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .ov-location-layout {
          display: grid;
          grid-template-columns: 1.2fr 1.05fr;
          gap: 24px;
          align-items: start;
        }
        .ov-map-visual {
          position: relative;
          width: 100%;
          height: 220px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }
        .ov-landmarks-list {
          display: flex;
          flex-direction: column;
        }
        .ov-landmarks-title {
          font-size: 10px;
          color: var(--color-primary);
          margin-bottom: 14px;
          font-weight: 400;
        }
        .ov-landmarks-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ov-landmark-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 6px;
        }
        .ov-landmark-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ov-landmark-name {
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);
          display: block;
        }
        .ov-landmark-time {
          font-size: 11px;
          color: var(--color-text-muted);
        }
        @media (max-width: 960px) {
          .overview-main-grid-redesign {
            grid-template-columns: 1fr;
            gap: 36px;
            margin: 0 10px;
          }
          .overview-text-title {
            margin-bottom: 14px;
          }
          .overview-text-desc {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 24px;
          }
          .overview-nav-pills {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 24px;
            padding: 8px;
          }
          .overview-pill-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
          .ov-location-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .sub-section-title {
          font-size: 24px;
          font-weight: 400;
          color: var(--color-text-dark);
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }
        .sub-section-title::after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: var(--color-primary);
          margin: 12px auto 0;
        }
        /* Amenities Grid Styling */
        .overview-amenities-block {
          padding: 16px 0 0 0; /* Reduced to eliminate negative space */
          background-color: transparent !important;
          border: none !important;
        }
        /* â”€â”€ Corner Branch Bird Decorators â”€â”€ */
        .corner-bird {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          opacity: 1;
          width: 340px;
          height: auto;
          transition: opacity 0.3s ease;
        }
        .corner-top-right {
          top: -10px;
          right: -10px;
          animation: gentleFloat 8s ease-in-out infinite;
        }
        .corner-top-left {
          top: -10px;
          left: -10px;
          transform: rotate(180)
          animation: gentleFloat 9s ease-in-out infinite 1s;
        }
        .corner-bottom-right {
          bottom: 10px;
          right: -10px;
          animation: gentleFloat 7s ease-in-out infinite 0.5s;
        }
        @keyframes gentleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 1200px) {
          .corner-bird {
            width: 180px;
            opacity: 0.25;
          }
        }
        @media (max-width: 768px) {
          .corner-bird {
            display: none;
          }
        }
        /* ── Amenities Interactive Split Layout ── */
        .amenities-split-layout {
          display: flex;
          flex-direction: row;
          gap: 40px;
          width: 100%;
          align-items: stretch;
        }
        .amenities-directory {
          width: 46%;
          display: flex;
          flex-direction: column;
        }
        .amenities-grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          width: 100%;
        }
        .amenities-visualizer {
          display: block;
          width: 54%;
          min-height: 520px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background-color: #111;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
        }
        .amenity-mobile-inline-card {
          display: none;
        }

        @keyframes amenityFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .amenities-grid-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .amenity-card {
          background: var(--color-white);
          padding: 30px 24px;
          border-radius: 12px;
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015);
          transition: all 0.35s var(--ease-luxury);
          text-align: center;
        }
        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .amenity-icon-gold {
          color: var(--color-primary);
          margin-bottom: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .amenity-card:hover .amenity-icon-gold {
          background: var(--color-primary);
          color: var(--color-white);
        }
        .amenity-title {
          font-size: 17px;
          font-weight: 400;
          color: var(--color-bg-navy);
          margin-bottom: 8px;
        }
        .amenity-desc {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        /* Location Layout Styling */
        .overview-location-block {
          padding: 16px 0 0 0; /* Reduced to eliminate negative space */
          background: transparent !important;
          border: none !important;
        }
        .location-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .location-map-visual {
          height: 350px;
          background-color: var(--color-bg-navy);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .map-grid-layer {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: 
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 25px 25px;
        }
        .map-radar-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.15);
          animation: mapRadar 2.5s infinite ease-out;
        }
        @keyframes mapRadar {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        .map-core-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }
        .map-core-compass {
          color: var(--color-primary);
          animation: spinCompass 25s infinite linear;
        }
        @keyframes spinCompass {
          to { transform: rotate(360deg); }
        }
        .map-core-label {
          font-size: 9px;
          font-weight: 400;
          color: var(--color-primary);
          background: rgba(6, 11, 29, 0.85);
          border: 1px solid var(--color-primary);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .map-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 5;
        }
        .node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-bg-navy);
          box-shadow: 0 0 10px var(--color-bg-navy);
        }
        .node-text {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.75);
        }
        .map-vector-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .location-info-list {
          display: flex;
          flex-direction: column;
        }
        .location-heading {
          font-size: 18px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }
        .landmarks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .landmark-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .landmark-icon {
          color: var(--color-primary);
          margin-top: 2px;
          flex-shrink: 0;
        }
        .landmark-name {
          font-weight: 400;
        }
        
        /* â”€â”€ VIDEOS SECTION STYLING â”€â”€ */
        .project-videos-section {
          background-color: var(--color-bg-cream);
          padding: 80px 0;
          color: var(--color-primary);
          border-top: 1px solid rgba(180, 133, 100, 0.12);
        }
        .video-slides-viewport {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 0;
          overflow: hidden;
          border: 4px solid #ffffff;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }
        .video-slides-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .video-slide-card {
          position: relative;
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .video-slide-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .video-slide-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0;
          box-sizing: border-box;
          z-index: 5;
        }
        .video-slide-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }
        .video-slide-tag {
          font-size: 10px;
          font-weight: 400;
          text-transform: uppercase;
          color: #aaaaaa;
        }
        .video-slide-title {
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
        }
        .video-slide-bottom-bar {
          display: block;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0;
          z-index: 20;
        }
        .video-slide-counter {
          font-size: 14px;
          font-weight: 400;
          color: var(--color-primary);
          position: absolute;
          left: 0;
          top: 12px;
        }
        /* Navigation Arrows on the sides */
        .video-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 24px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          user-select: none;
        }
        .video-slide-arrow:hover {
          background-color: #ffffff;
          color: var(--color-primary);
          border-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .video-slide-arrow--left {
          left: 16px;
        }
        .video-slide-arrow--right {
          right: 16px;
        }
        @media (max-width: 768px) {
          .video-slides-viewport {
            height: 320px;
          }
          .video-slide-overlay {
            padding: 24px;
          }
          .video-slide-title {
            font-size: 18px;
          }
          .video-slide-arrow {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
          .project-video-cta-group {
            transform: translateX(-50%) scale(0.85);
          }
        }
        /* â”€â”€ GALLERY SECTION STYLING â”€â”€ */
        .project-gallery-section {
          background-color: var(--color-bg-light);
          padding: 60px 0;
        }
        .project-gallery-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }
        /* â”€â”€ INNOVATIVE BENTO GRID â”€â”€ */
        .innovative-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 16px;
          padding: 0 16px;
        }
        .bento-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: var(--color-bg-navy);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s var(--ease-luxury), box-shadow 0.4s var(--ease-luxury);
        }
        .bento-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-item:hover .bento-img {
          transform: scale(1.05);
        }
        .bento-overlay {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 24px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s var(--ease-luxury);
        }
        .bento-item:hover .bento-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .bento-title {
          font-size: 20px;
          color: var(--color-white);
          font-weight: 400;
          margin: 0;
        }
        /* Bento Asymmetrical Pattern (Repeats every 7 items) */
        .bento-item-0 { grid-column: span 2; grid-row: span 2; }
        .bento-item-1 { grid-column: span 1; grid-row: span 1; }
        .bento-item-2 { grid-column: span 1; grid-row: span 1; }
        .bento-item-3 { grid-column: span 2; grid-row: span 1; }
        .bento-item-4 { grid-column: span 1; grid-row: span 2; }
        .bento-item-5 { grid-column: span 2; grid-row: span 1; }
        .bento-item-6 { grid-column: span 1; grid-row: span 1; }
        @media (max-width: 992px) {
          .innovative-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 240px;
          }
          /* Reset pattern for tablets for better fit */
          .bento-item-0 { grid-column: span 2; grid-row: span 2; }
          .bento-item-1 { grid-column: span 1; grid-row: span 1; }
          .bento-item-2 { grid-column: span 1; grid-row: span 1; }
          .bento-item-3 { grid-column: span 2; grid-row: span 1; }
          .bento-item-4 { grid-column: span 1; grid-row: span 1; }
          .bento-item-5 { grid-column: span 1; grid-row: span 1; }
          .bento-item-6 { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 576px) {
          .innovative-bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 250px;
          }
          /* Everything spans 1 col on small phones */
          .bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        /* â”€â”€ FLOORPLANS SECTION STYLING â”€â”€ */
        .project-floorplans-section {
          background: radial-gradient(circle at top left, var(--color-bg-light) 0%, var(--color-bg-cream) 100%);
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }
        .project-floorplans-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }
        .floorplan-layout-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 50px;
          align-items: flex-start;
        }
        .floorplan-tabs-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .floorplan-tab-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 400;
          color: var(--color-text-muted);
          text-align: left;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .floorplan-tab-btn:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: rgba(255, 255, 255, 0.6);
        }
        .floorplan-tab-btn.active {
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.65);
          color: var(--color-primary);
          font-weight: 400;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .btn-tab-num {
          font-size: 10px;
          font-weight: 400;
          color: var(--color-text-muted);
          border: 1px solid rgba(0, 0, 0, 0.3);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .floorplan-tab-btn.active .btn-tab-num {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
        }
        .floorplan-specs-box {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
          padding: 14px 20px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .floorplan-spec-line {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          padding-bottom: 8px;
        }
        .floorplan-spec-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .spec-label {
          color: var(--color-text-muted);
        }
        .spec-val {
          color: var(--color-text-dark);
          font-weight: 400;
        }
        .floorplan-visual-col {
          display: flex;
          justify-content: center;
        }
        .blueprint-canvas {
          width: 100%;
          max-width: 580px;
          aspect-ratio: 4/3;
          background-color: var(--color-bg-navy);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5), 0 20px 40px rgba(0, 0, 0, 0.12);
          position: relative;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blueprint-grid-mesh {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: 
            linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .blueprint-svg {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 5;
        }
        .blueprint-stamp {
          position: absolute;
          bottom: 15px;
          right: 15px;
          font-size: 8px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 3px 8px;
          border-radius: 2px;
        }
        /* â”€â”€ PRICING SECTION STYLING â”€â”€ */
        .project-pricing-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
        }
        .project-pricing-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 48px;
        }
        .pricing-cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pricing-item-card {
          background: var(--color-white);
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          padding: 36px 28px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.01);
          transition: all 0.35s var(--ease-luxury);
        }
        /* Overview Editorial Layout */
        .overview-editorial-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .overview-editorial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          
        }
        .amenity-luxury-card .amenity-bg-img {
          transform: scale(1);
        }
        .amenity-luxury-card:hover .amenity-bg-img {
          transform: scale(1.08);
        }
        .amenity-luxury-card .amenity-icon-wrapper {
          background: rgba(255,255,255,0.1) !important;
          color: var(--color-white) !important;
        }
        .amenity-luxury-card:hover .amenity-icon-wrapper {
          background: var(--color-white) !important;
          color: var(--color-bg-navy) !important;
        }
        .amenity-luxury-card .amenity-desc-text {
          color: rgba(255,255,255,0.7) !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .amenity-luxury-card:hover .amenity-desc-text {
          color: rgba(255,255,255,1) !important;
        }
        .pricing-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          border-color: var(--color-primary);
        }
        .pricing-item-card.featured {
          border-color: var(--color-primary);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04);
          background: var(--color-bg-light);
        }
        .pricing-item-card.featured:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 28px;
          background: var(--color-primary);
          color: var(--color-bg-light);
          font-size: 10px;
          font-weight: 400;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid var(--color-primary);
        }
        .pricing-badge.featured-badge {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
        }
        .pricing-title {
          font-size: 20px;
          font-weight: 400;
          color: var(--color-primary);
          margin-bottom: 20px;
          margin-top: 5px;
        }
        .pricing-divider {
          width: 100%;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
        }
        .pricing-specs {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 30px;
        }
        .pricing-amount {
          margin-top: auto;
          margin-bottom: 28px;
        }
        .pricing-label {
          display: block;
          font-size: 11px;
          font-weight: 400;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .pricing-val {
          font-size: 26px;
          font-weight: 400;
          color: var(--color-primary);
        }
        .pricing-asterisk {
          font-size: 15px;
          vertical-align: super;
          color: var(--color-text-muted);
        }
        .pricing-fineprint {
          text-align: center;
          font-size: 11px;
          color: var(--color-text-muted-light);
          margin-top: 32px;
        }
        /* â”€â”€ PROJECT STATUS SECTION STYLING â”€â”€ */
        .project-status-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .project-status-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 54px;
        }
        .status-timeline-container {
          display: grid;
          gap: 60px;
          max-width: 1050px;
          margin: 0 auto;
          align-items: center;
        }
        .status-img-sm {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
        }
        .status-img-sm img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .status-img-sm:hover img {
          transform: scale(1.05);
        }
        .status-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .status-img-sm:hover .status-img-overlay {
          opacity: 1;
        }
        /* â”€â”€ LIGHTBOX / MODAL MEDIA OVERLAYS â”€â”€ */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(3, 7, 16, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99999 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          overscroll-behavior: contain;
          touch-action: none;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 24px;
          right: 28px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1010;
        }
        .lightbox-close-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: rotate(90deg) scale(1.08);
        }
        .lightbox-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-white);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1010;
        }
        .lightbox-arrow-btn:hover {
          background: #b48564;
          border-color: #b48564;
        }
        .lightbox-arrow-btn.prev { left: 32px; }
        .lightbox-arrow-btn.next { right: 32px; }
        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 88vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
        }
        /* Video Iframe container inside overlay */
        .video-modal-content {
          width: 85%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #02050b;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
        }
        .video-iframe {
          width: 100%;
          height: 100%;
        }

        /* ── FULL SCREEN LUXURY POPUP TAKEOVER ── */
        .fs-popup-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999 !important;
          background: #050a14;
          display: flex;
          overflow: hidden;
          animation: fsFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fsFadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }

        .fs-popup-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          z-index: 30;
          pointer-events: none;
        }
        .fs-popup-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          pointer-events: auto;
        }
        .fs-popup-close-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(10, 16, 28, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          transition: all 0.3s ease;
        }
        .fs-popup-close-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: rotate(90deg) scale(1.05);
        }

        .fs-popup-split {
          display: flex;
          width: 100%;
          height: 100%;
        }

        /* Left Half: Full-Bleed 100vh Image */
        .fs-popup-image-half {
          flex: 1 1 52%;
          position: relative;
          height: 100%;
          overflow: hidden;
          background: #030712;
        }
        .fs-popup-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fs-popup-image-half:hover .fs-popup-bg-img {
          transform: scale(1.03);
        }
        .fs-popup-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(5, 10, 20, 0.75) 0%, 
            rgba(5, 10, 20, 0.1) 40%, 
            rgba(5, 10, 20, 0.85) 80%, 
            rgba(5, 10, 20, 0.98) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 60px clamp(30px, 5vw, 60px);
          z-index: 2;
          box-sizing: border-box;
        }
        .fs-popup-kicker {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #d8b28a;
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(180, 133, 100, 0.2);
          border: 1px solid rgba(180, 133, 100, 0.4);
          padding: 5px 14px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          margin-bottom: 16px;
          align-self: flex-start;
        }
        .fs-popup-project-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 3.2vw, 48px);
          color: #ffffff;
          margin: 0 0 8px 0;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.1;
        }
        .fs-popup-project-sub {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 16px 0;
          letter-spacing: 0.02em;
        }
        .fs-popup-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .fs-popup-chip {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          padding: 4px 12px;
          border-radius: 6px;
        }

        /* Right Half: Full-Bleed 100vh Form Panel */
        .fs-popup-form-half {
          flex: 1 1 48%;
          position: relative;
          height: 100%;
          background: radial-gradient(circle at 100% 0%, rgba(180, 133, 100, 0.12) 0%, transparent 60%), #070d18;
          border-left: 1px solid rgba(180, 133, 100, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px clamp(30px, 6vw, 70px) 40px;
          box-sizing: border-box;
          overflow-y: auto;
        }
        .fs-form-inner {
          width: 100%;
          max-width: 480px;
        }
        .fs-form-badge {
          display: inline-block;
          padding: 4px 11px;
          background: rgba(180, 133, 100, 0.18);
          border: 1px solid rgba(180, 133, 100, 0.35);
          border-radius: 4px;
          font-size: 10.5px;
          letter-spacing: 0.16em;
          color: #d8b28a;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .fs-form-title {
          font-family: var(--font-heading);
          font-size: clamp(26px, 2.2vw, 34px);
          color: #ffffff;
          font-weight: 400;
          margin: 0 0 8px 0;
          letter-spacing: 0.02em;
        }
        .fs-form-subtitle {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 24px 0;
          line-height: 1.45;
        }
        .fs-form-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fs-field-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .fs-field-label {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }
        .fs-config-pill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .fs-config-pill-grid.single-pill {
          grid-template-columns: 1fr;
        }
        .fs-config-pill {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fs-config-pill:hover {
          border-color: rgba(216, 178, 138, 0.5);
          background: rgba(255, 255, 255, 0.07);
        }
        .fs-config-pill.active {
          border-color: #b48564;
          background: linear-gradient(135deg, rgba(180, 133, 100, 0.2) 0%, rgba(216, 178, 138, 0.08) 100%);
          box-shadow: 0 0 16px rgba(180, 133, 100, 0.25);
        }
        .fs-config-pill-main {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.02em;
        }
        .fs-config-pill.active .fs-config-pill-main {
          color: #d8b28a;
        }
        .fs-config-pill-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
        }
        .fs-config-pill.active .fs-config-pill-sub {
          color: rgba(255, 255, 255, 0.85);
        }
        .fs-input-box {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: #ffffff;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        .fs-input-box:focus {
          border-color: #b48564;
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 0 16px rgba(180, 133, 100, 0.3);
        }
        .fs-phone-group {
          display: flex;
          gap: 12px;
        }
        .fs-phone-code {
          flex: 0 0 100px;
          padding: 14px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: #ffffff;
          outline: none;
          cursor: pointer;
          color-scheme: dark;
          box-sizing: border-box;
        }
        .fs-phone-code option {
          background: #080f1d;
          color: #ffffff;
        }
        .fs-phone-input {
          flex: 1;
        }
        .fs-radio-row {
          display: flex;
          gap: 24px;
          margin-bottom: 2px;
        }
        .fs-radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
        }
        .fs-radio-label input {
          accent-color: #b48564;
          cursor: pointer;
        }
        .fs-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          line-height: 1.45;
          margin-top: 4px;
        }
        .fs-checkbox-row input {
          accent-color: #b48564;
          margin-top: 2px;
          cursor: pointer;
        }
        .fs-gold-button {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #d8b28a 0%, #b48564 60%, #956645 100%);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 10px 28px rgba(180, 133, 100, 0.4);
          transition: all 0.3s ease;
          margin-top: 6px;
        }
        .fs-gold-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(180, 133, 100, 0.55);
          filter: brightness(1.08);
        }
        .fw-success-box {
          text-align: center;
          padding: 30px 10px;
          animation: fsFadeIn 0.4s ease;
        }
        .fw-success-gold {
          color: #d8b28a;
          margin-bottom: 14px;
        }
        .fw-success-box h4 {
          font-family: var(--font-heading);
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 10px 0;
        }
        .fw-success-box p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* Mobile responsive full-screen takeover */
        @media (max-width: 900px) {
          .fs-popup-split {
            flex-direction: column;
            overflow-y: auto;
          }
          .fs-popup-image-half {
            flex: 0 0 240px;
            height: 240px;
          }
          .fs-popup-img-overlay {
            padding: 24px;
          }
          .fs-popup-project-title {
            font-size: 26px;
          }
          .fs-popup-form-half {
            flex: 1;
            height: auto;
            padding: 30px 20px 40px;
            border-left: none;
            border-top: 1px solid rgba(180, 133, 100, 0.2);
          }
          .fs-popup-topbar {
            height: 60px;
            padding: 0 20px;
          }
          .fs-popup-logo {
            height: 30px;
          }
          .fs-popup-close-btn {
            width: 38px;
            height: 38px;
          }
        }
        /* â”€â”€ Pillars Accordion Styling â”€â”€ */
        .pillars-container {
          width: 100%;
          text-align: left;
        }
        .pillars-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        .pillar-item {
          border-bottom: 1px solid rgba(29, 53, 87, 0.08);
          cursor: pointer;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .pillar-item:hover .pillar-title {
          color: var(--color-primary);
        }
        .pillar-header {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          gap: 16px;
          user-select: none;
          background-color: var(--color-bg-light);
          transition: background-color 0.3s ease;
        }
        .pillar-item:hover .pillar-header {
          background-color: rgba(0, 0, 0, 0.03);
        }
        .pillar-number {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-primary);
          opacity: 0.5;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .pillar-item.active .pillar-number {
          opacity: 1;
          color: var(--color-highlight);
        }
        .pillar-title {
          font-family: var(--font-heading);
          color: var(--color-text-dark);
          font-weight: 500;
          font-size: 18px;
          margin: 0;
          flex-grow: 1;
          transition: color 0.3s ease;
          letter-spacing: 0.1em;
        }
        .pillar-item.active .pillar-title {
          color: var(--color-highlight);
        }
        .pillar-toggle-icon {
          font-size: 18px;
          color: var(--color-primary);
          opacity: 0.7;
          transition: color 0.3s ease, opacity 0.3s ease;
        }
        .pillar-item.active .pillar-toggle-icon {
          color: var(--color-highlight);
          opacity: 1;
        }
        .pillar-body {
          display: grid;
          gap: 0;
          overflow: hidden;
        }
        .pillar-tagline {
          font-family: var(--font-sans);
          font-size: 9.5px;
          font-weight: 400;
          color: var(--color-primary);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
        }
        .pillar-desc {
          color: var(--color-text-muted);
          font-size: 18px;
          padding: 15px;
          margin: 0;
          letter-spacing: 0;
          font-weight: 350;
        }
        .vision-dynamic-img-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.03);
        }
        /* â”€â”€ Floorplan Slide Layout Styles â”€â”€ */
        .floorplan-slide-viewport {
          position: relative;
          width: 100%;
          padding: 20px 40px;
        }
        .floorplan-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-white);
          border: 1px solid rgba(0,0,0,0.06);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .floorplan-slide-arrow:hover {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }
        .floorplan-slide-arrow.prev {
          left: -24px;
        }
        .floorplan-slide-arrow.next {
          right: -24px;
        }
        @media (max-width: 768px) {
          .floorplan-slide-arrow {
            width: 40px;
            height: 40px;
          }
          .floorplan-slide-arrow.prev {
            left: -12px;
          }
          .floorplan-slide-arrow.next {
            right: -12px;
          }
        }
        /* ── Gallery Spotlight Styles ── */
        .gallery-spotlight-viewport {
          position: relative;
          width: 100vw;
          height: calc(100vh - 100px);
          overflow: hidden;
          padding: 0;
          margin: 0;
          left: 0;
        }
        .gallery-spotlight-track {
          display: flex;
          height: 100%;
          width: max-content;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-spotlight-card {
          flex-shrink: 0;
          flex-basis: 100vw;
          width: 100vw;
          height: calc(100vh - 55px) !important;
          max-height: none !important;
          min-height: 100% !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          position: relative;
          overflow: hidden;
        }
        .gallery-spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-spotlight-card:hover .gallery-spotlight-img {
          transform: none;
        }
        .gallery-spotlight-arrow {
          position: absolute;
          top: 50%;
          background: transparent;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          box-shadow: none;
          padding: 0;
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7));
          transition: all 0.3s ease;
        }
        .gallery-spotlight-arrow:hover {
          background: transparent;
          box-shadow: none;
          filter: drop-shadow(0 3px 14px rgba(0, 0, 0, 0.9));
        }
        .gallery-spotlight-arrow.prev {
          left: clamp(16px, 3vw, 40px);
          transform: translateY(-50%);
        }
        .gallery-spotlight-arrow.prev:hover {
          transform: translateY(-50%) scale(1.12);
        }
        .gallery-spotlight-arrow.next {
          right: clamp(16px, 3vw, 40px);
          transform: translateY(-50%);
        }
        .gallery-spotlight-arrow.next:hover {
          transform: translateY(-50%) scale(1.12);
        }
        
        /* Modal Split Layout Styles */
        @media (max-width: 768px) {
          .modal-content-card.split-modal {
            flex-direction: column;
            max-width: 480px;
            width: 95%;
            margin: 16px;
            max-height: 92vh;
            overflow-y: auto;
          }
          .modal-image-panel {
            height: 180px;
            flex: none;
            padding: 24px;
          }
          .modal-form-panel {
            flex: none;
            padding: 24px 20px;
          }
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 1024px) {
          .gallery-spotlight-viewport {
            height: calc(100vh - 180px);
            min-height: 520px;
            padding: 0;
          }
          .gallery-spotlight-card {
            height: calc(100vh - 180px) !important;
            min-height: 520px !important;
            max-height: none !important;
            width: 100vw !important;
            flex-basis: 100vw !important;
          }
          .amenities-grid-box {
            grid-template-columns: repeat(2, 1fr);
          }
          .floorplan-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .pricing-cards-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .status-timeline-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 900px) {
          .project-hero-title {
          }
          .sub-nav-container {
            justify-content: space-between;
            padding: 0;
            overflow: visible;
          }
          .sub-nav-scroll-wrapper {
            justify-content: flex-start;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .sub-nav-scroll-wrapper::-webkit-scrollbar {
            display: none;
          }
          .sub-nav-scroll-wrapper > .sub-nav-link,
          .sub-nav-scroll-wrapper > .sub-nav-dropdown-wrapper {
            flex: 0 0 auto !important;
            min-width: auto !important;
            max-width: none !important;
            display: inline-flex;
          }
          .sub-nav-scroll-wrapper .sub-nav-link {
            width: auto;
            padding: 16px 16px 14px !important;
          }
          .sub-nav-mobile-trigger-wrapper {
            display: flex !important;
            align-items: center;
            background: transparent;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 10;
            flex-shrink: 0;
          }
          .mobile-grid-trigger-btn {
            padding: 16px 16px 14px !important;
            color: #ffffff !important;
          }
          .show-only-on-mobile {
            display: inline-flex !important;
          }
          .mobile-directory-menu {
            min-width: 220px;
            padding: 8px;
            background: rgba(30, 30, 30, 0.95) !important;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.12) !important;
            border-radius: 8px !important;
            box-shadow: 
              0 12px 40px rgba(0, 0, 0, 0.5),
              0 2px 8px rgba(0, 0, 0, 0.2) !important;
          }
          .mobile-directory-header {
            font-size: 8.5px;
            font-weight: 500;
            color: #ffffff;
            opacity: 0.4;
            padding: 8px 12px 4px;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 6px;
          }
          .mobile-directory-menu .dropdown-item {
            padding: 10px 14px;
            font-size: 12.5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
          }
          .mobile-directory-menu .dropdown-item.active {
            color: #b48564;
            background: rgba(255, 255, 255, 0.04);
            font-weight: 600;
          }
          .mobile-directory-menu .dropdown-item.active::after {
            content: '•';
            color: #b48564;
            font-size: 16px;
            line-height: 1;
          }
          .nested-tabs-container {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
          }
          .nested-tabs-wrapper {
            width: 100%;
            justify-content: space-between;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            white-space: nowrap;
          }
          .nested-tabs-wrapper::-webkit-scrollbar {
            display: none;
          }
          .nested-tab-btn {
            flex: 1;
            text-align: center;
            padding: 8px 12px !important;
            font-size: 11.5px !important;
            white-space: nowrap;
          }
          .location-grid-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .project-gallery-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
            justify-content: flex-start !important;
            gap: 26px !important;
          }
          .project-gallery-section .nested-tabs-container {
            margin-bottom: 2px !important;
          }
          .filter-tab-btn {
            padding: 0 12px !important;
            font-size: 16px !important;
          }

          .project-sections-container .filter-tab-btn {
            font-size: 14px !important;
          }
          .gallery-spotlight-viewport {
            height: clamp(450px, 60vh, 600px);
            min-height: 450px;
            padding: 0 !important;
            margin: 0 !important;
          }
          .gallery-spotlight-card {
            height: clamp(450px, 60vh, 600px) !important;
            min-height: 450px !important;
            max-height: none !important;
            width: 100vw !important;
            flex-basis: 100vw !important;
          }
          .project-floorplans-section {
            padding: 24px 0 !important;
          }
          .floorplan-slide-viewport {
            padding: 10px 0 !important;
          }
          .pricing-cards-container {
            grid-template-columns: 1fr;
          }
          .amenities-split-layout {
            flex-direction: column !important;
            gap: 0px !important;
          }
          .amenities-directory {
            width: 100% !important;
          }
          .amenities-grid-container {
            grid-template-columns: 1fr !important;
          }
          .amenities-visualizer {
            display: none !important;
          }
          .amenity-mobile-inline-card {
            display: block !important;
            width: 100%;
            height: 220px;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            margin: 6px 0 14px 0;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            animation: amenityFadeIn 0.3s ease;
          }
          .amenity-mobile-card-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .amenity-mobile-card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
            padding: 16px 18px;
            z-index: 2;
          }
          .amenity-mobile-card-title {
            color: #ffffff;
            margin: 0 0 4px 0;
            font-weight: 500;
            font-size: 18px;
            font-family: var(--font-heading);
          }
          .amenity-mobile-card-desc {
            color: rgba(255, 255, 255, 0.85);
            margin: 0;
            font-size: 13px;
            font-weight: 300;
            line-height: 1.4;
          }
          .amenities-grid-box {
            grid-template-columns: 1fr;
          }
          .landmarks-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .lightbox-arrow-btn.prev { left: 15px; }
          .lightbox-arrow-btn.next { right: 15px; }
          .lightbox-content { max-width: 90%; }
          /* Generic layout fixes for screenshotted issues */
          
          /* Hero Section */
          .project-hero-content {
            padding: 0 20px !important;
            margin-bottom: clamp(75px, 14vh, 100px) !important;
            align-items: center !important;
            text-align: center !important;
            flex-direction: column !important;
            justify-content: flex-end !important;
          }
          .project-hero-text-block {
            margin-bottom: 22px !important;
            text-align: center !important;
          }
          .project-hero-title {
            text-align: center !important;
            line-height: 1.25 !important;
          }
          .project-hero-subtitle {
            text-align: center !important;
          }
          .project-hero-cta-block .btn-discover {
            padding: 10px 22px !important;
            font-size: 14px !important;
          }
          
          /* Video Tours Section */
          .project-video-cta-group {
            flex-direction: column !important;
            width: 90% !important;
            left: 50% !important;
            bottom: -60px !important;
            gap: 12px !important;
          }
          .project-video-cta-group > button {
            width: 100% !important;
            justify-content: center !important;
          }
          .video-slides-container {
            margin-bottom: 80px !important;
          }
          /* "Experience True Luxury" */
          .c3-action-area h3 {
            line-height: 1.1 !important;
          }
          .c3-split-layout {
            flex-direction: column !important;
          }
          .c3-image-pane, .c3-solid-pane {
            width: 100% !important;
          }
          /* Quick Info / Stats Grid (usually has 4 columns) */
          .project-stats-grid, div[style*="grid-template-columns: repeat(4"], div[style*="gridTemplateColumns: 'repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          /* Status Month Grid */
          .status-month-grid, div[style*="grid-template-columns: repeat(3"], div[style*="gridTemplateColumns: 'repeat(3"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .status-month-container {
            flex-direction: column !important;
            gap: 24px !important;
          }
          /* Nested tabs (Specifications, etc.) */
          .nested-tabs-wrapper {
            flex-wrap: wrap !important;
            justify-content: center !important;
            overflow: visible !important;
          }
          
          /* Location Timeline */
          .timeline-item-content {
            padding-right: 0 !important;
          }
          
          /* Titles */
          .section-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          h3[style*="font-size: 32px"], h3[style*="fontSize: '32px'"] {
            font-size: 24px !important;
          }
        }
        /* â”€â”€ 3D GALLERY SLIDER â”€â”€ */
        .gallery-deck-viewport {
          position: relative;
          height: 400px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .gallery-deck-stack {
          position: relative;
          width: 580px;
          height: 380px;
        }
        .gallery-deck-card {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(29, 53, 87, 0.08);
          transition: all 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          background-color: var(--color-bg-navy);
        }
        .gallery-deck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-card:hover .gallery-deck-img {
          transform: scale(1.05);
        }
        .gallery-deck-hover-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.35s ease;
          z-index: 2;
        }
        .gallery-deck-card.active:hover .gallery-deck-hover-overlay {
          opacity: 1;
        }
        .hover-overlay-zoom-icon {
          color: var(--color-primary);
          margin-bottom: 6px;
          transform: translateY(10px);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-card.active:hover .hover-overlay-zoom-icon {
          transform: translateY(0);
        }
        .hover-overlay-title {
          font-size: 15px;
          color: var(--color-white);
          font-weight: 400;
        }
        .gallery-deck-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-white);
          border: 1px solid rgba(29, 53, 87, 0.15);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          box-shadow: 0 4px 15px rgba(29, 53, 87, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-arrow:hover {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 20px rgba(29, 53, 87, 0.2);
        }
        .gallery-deck-arrow.prev { left: 24px; }
        .gallery-deck-arrow.next { right: 24px; }
        @media (max-width: 768px) {
          .gallery-deck-viewport {
            height: 300px;
          }
          .gallery-deck-stack {
            width: 85vw;
            height: 280px;
          }
          .gallery-deck-arrow {
            width: 40px;
            height: 40px;
          }
          .gallery-deck-arrow.prev { left: 10px; }
          .gallery-deck-arrow.next { right: 10px; }
        }
        .play-button-pulsing {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.45);
          animation: playPulse 2s infinite;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-card:hover .play-button-pulsing {
          transform: scale(1.1);
          background: var(--color-primary);
          color: var(--color-white);
        }
        @keyframes playPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        /* ── LUXURY CTA BANNER SECTION (100vh Full Screen Fit + Fixed Background Reveal) ── */
        .project-cta-banner-section {
          position: relative;
          width: 100%;
          height: calc(100vh - 100px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
          -webkit-clip-path: inset(0 0 0 0);
          background-color: #030712;
          padding: 40px 24px;
          box-sizing: border-box;
        }
        .project-cta-fixed-bg {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }
        .project-cta-picture {
          display: block;
          width: 100%;
          height: 100%;
        }
        .project-cta-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
        }
        .project-cta-dark-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgb(0 0 0 / 50%) 0%, rgb(16 16 16 / 85%) 100%), linear-gradient(180deg, rgb(0 0 0 / 40%) 0%, rgb(0 0 0 / 75%) 100%);
          backdrop-filter: blur(1px);
          -webkit-backdrop-filter: blur(1px);
        }
        .project-cta-content-wrap {
          position: relative;
          z-index: 5;
          max-width: 860px;
          margin: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .project-cta-eyebrow {
          display: inline-block;
          margin-bottom: 22px;
        }
        .project-cta-eyebrow span {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: #d8b28a;
          text-transform: uppercase;
          background: rgba(180, 133, 100, 0.15);
          border: 1px solid rgba(180, 133, 100, 0.35);
          padding: 6px 18px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .project-cta-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4.5vw, 40px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.98);
          line-height: 1.15;
          margin: 0 0 18px 0;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
          text-align: center;
        }
        .project-cta-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(15px, 1.35vw, 19px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          max-width: 650px;
          margin: 0 0 36px 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
          text-align: center;
        }
        .project-cta-btn-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .btn-cta-enquire {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          backdrop-filter: blur(38px);
          -webkit-backdrop-filter: blur(38px);
          transition: all 0.4s ease;
          cursor: pointer;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .btn-cta-enquire:hover {
          background: rgba(255, 255, 255, 0.6);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.85);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
        }
        .btn-cta-enquire:active {
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .project-cta-banner-section {
            height: 100vh;
            height: 100dvh;
            padding: 40px 20px;
          }
          .project-cta-subtitle {
            margin-bottom: 28px;
          }
          .btn-cta-enquire {
            padding: 11px 24px;
            font-size: 11px;
          }
        }
      `})]})}export{xt as default};

import{j as e,S as G}from"./index-Bk12-aA-.js";import{r as f}from"./vendor-react-CdZYeNEq.js";import{u as X,c as Y,l as W,a as K,e as q,b as Z,M as _,T as Q,d as F,L as O}from"./leaflet-B2bfQ_rT.js";import{S as L}from"./ScrollReveal-Dk-cSp4Z.js";import{b as D,c as B,d as V,e as ee,S as ae,h as te,i as ie,B as ne,H as se,G as re,j as oe}from"./vendor-icons-K0xaSwY_.js";import{g as R}from"./vendor-gsap-jyD3UH3M.js";import{s as le}from"./api-DWJhK2e0.js";const ce=[{id:"junctions",label:"Main Junctions",image:"/images/project/CML/loction/junctions.png",locations:[{name:"Medavakkam Junction",dist:"2 Mins",x:45,y:35,lat:12.9188,lng:80.1888},{name:"OMR Junction",dist:"10 Mins",x:75,y:25,lat:12.9015,lng:80.2272},{name:"Velachery Junction",dist:"15 Mins",x:30,y:20,lat:12.9785,lng:80.2223},{name:"Airport",dist:"30 Mins",x:20,y:50,lat:12.985,lng:80.165}]},{id:"education",label:"Education",image:"/images/project/CML/loction/educational .png",locations:[{name:"Sri Chaitanya Future Pathways",dist:"500 Meter",x:52,y:42,lat:12.9145,lng:80.1895},{name:"Orchids The International School",dist:"1 Km",x:40,y:55,lat:12.9231,lng:80.1872},{name:"DAV School",dist:"2.5 Km",x:62,y:60,lat:12.9055,lng:80.178},{name:"Prince Engineering College",dist:"3 Km",x:70,y:48,lat:12.8988,lng:80.1741},{name:"Jerusalem Engineering College",dist:"5 Km",x:35,y:65,lat:12.9367,lng:80.2132}]},{id:"hospitals",label:"Hospitals",image:"/images/project/CML/loction/hospitals.png",locations:[{name:"Kamakshi Hospital",dist:"3 Km",x:40,y:30,lat:12.938,lng:80.2078},{name:"Global Hospital",dist:"4 Km",x:65,y:38,lat:12.8997,lng:80.2185},{name:"Kauvery Hospital",dist:"5 Km",x:58,y:62,lat:12.9121,lng:80.2052}]},{id:"shopping",label:"Entertainment",image:"/images/project/CML/loction/entertainment.png",locations:[{name:"Fantastic Jeyachandran",dist:"2 Kms",x:45,y:58,lat:12.9234,lng:80.1891},{name:"Sekaran Mall / Miraj Cinemas",dist:"4 Kms",x:62,y:30,lat:12.9341,lng:80.2023},{name:"PVR Grand Mall",dist:"5 Kms",x:32,y:45,lat:12.9691,lng:80.2195},{name:"Phoenix Mall",dist:"8 Kms",x:28,y:28,lat:12.9912,lng:80.2173},{name:"ECR Iskon Temple",dist:"9 Kms",x:80,y:70,lat:12.9032,lng:80.2512}]}];function de(t,i,o){i.center!==o.center&&t.setLatLng(i.center),i.radius!=null&&i.radius!==o.radius&&t.setRadius(i.radius)}function J(){return X().map}const pe=Y(function({center:i,children:o,...n},l){const c=new W.Circle(i,n);return K(c,q(l,{overlayContainer:c}))},de),H=Y(function({positions:i,...o},n){const l=new W.Polyline(i,o);return K(l,q(n,{overlayContainer:l}))},function(i,o,n){o.positions!==n.positions&&i.setLatLngs(o.positions)}),me=Z(function(i,o){const n=new W.Tooltip(i,o.overlayContainer);return K(n,o)},function(i,o,{position:n},l){f.useEffect(function(){const d=o.overlayContainer;if(d==null)return;const{instance:m}=i,s=g=>{g.tooltip===m&&(n!=null&&m.setLatLng(n),m.update(),l(!0))},x=g=>{g.tooltip===m&&l(!1)};return d.on({tooltipopen:s,tooltipclose:x}),d.bindTooltip(m),function(){d.off({tooltipopen:s,tooltipclose:x}),d._map!=null&&d.unbindTooltip()}},[i,o,l,n])});delete O.Icon.Default.prototype._getIconUrl;O.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});const xe=(t,i)=>{const n=i||"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",l=t||"The Woods";return O.divIcon({className:"custom-map-card-marker",html:`
      <div class="map-card-pin">
        <div class="map-card-body">
          <div class="map-card-image-wrap">
            <img src="${n}" alt="${l}" class="map-card-image" />
          </div>
          <div class="map-card-title">${l}</div>
        </div>
        <div class="map-card-pointer"></div>
        <div class="map-card-anchor-pulse"></div>
      </div>
    `,iconSize:[130,118],iconAnchor:[65,114],popupAnchor:[0,-114]})},fe=t=>O.divIcon({className:`custom-map-marker poi-marker ${t?"active-highlight":""}`,html:`
      <div class="custom-map-pin-svg">
        ${t?'<div class="poi-pin-light-pulse"></div>':""}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" class="poi-svg-marker">
          <path d="M12 1C6.48 1 2 5.48 2 11c0 7.5 10 18 10 18s10-10.5 10-18c0-5.52-4.48-10-10-10z" class="pin-path" />
          <circle cx="12" cy="11" r="3.5" class="pin-dot" />
        </svg>
      </div>
    `,iconSize:[30,38],iconAnchor:[15,36.7],popupAnchor:[0,-36]});function ge(t,i,o,n){if(!t||!i||!o||!n)return 0;const l=6371,c=(o-t)*Math.PI/180,d=(n-i)*Math.PI/180,m=Math.sin(c/2)*Math.sin(c/2)+Math.cos(t*Math.PI/180)*Math.cos(o*Math.PI/180)*Math.sin(d/2)*Math.sin(d/2),s=2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m));return l*s}function he(t){return t<=1?15.6:t<=2.2?14.8:t<=4.5?14:t<=8?13:12}function ue({center:t,activeLocations:i,categoryId:o,isMapInteracted:n}){const l=J();return f.useEffect(()=>{if(!l)return;const c=()=>{if(!l||n)return;if(l.invalidateSize(),!i||i.length===0){l.flyTo(t,15,{duration:.8});return}const s=[t];let x=0;i.forEach(b=>{if(b.lat&&b.lng){s.push([b.lat,b.lng]);const w=ge(t[0],t[1],b.lat,b.lng);w>x&&(x=w)}});const g=he(x),u=typeof window<"u"&&window.innerWidth>992,N=O.latLngBounds(s);l.fitBounds(N,{paddingTopLeft:u?[340,50]:[30,30],paddingBottomRight:[50,50],maxZoom:g,animate:!0,duration:.8})};c();const d=setTimeout(c,60),m=setTimeout(c,250);return()=>{clearTimeout(d),clearTimeout(m)}},[o,i,t,l,n]),null}function be({onInteraction:t}){const i=J();return f.useEffect(()=>{if(!i||!t)return;const o=()=>{t()};i.on("dragstart",o);const n=i.getContainer();return n&&(n.addEventListener("wheel",o,{passive:!0}),n.addEventListener("touchstart",o,{passive:!0})),()=>{i.off("dragstart",o),n&&(n.removeEventListener("wheel",o),n.removeEventListener("touchstart",o))}},[i,t]),null}function ve({activeCategory:t,projectCoords:i,projectName:o,projectImage:n,activeLocationName:l,onHoverLocation:c,onPinHoverChange:d,onInteraction:m,isMapInteracted:s,mapStyle:x="streets-v12"}){const g=i||[12.9298995,80.1954121],u=t?t.locations:[],N="pk.eyJ1IjoiYWFkaGl0aHlhbW9oYW5wcm9wZXJ0aWVzMjAyNiIsImEiOiJjbXNyaGQ3YWIwMDk3MnlyNWZ2dnBycXViIn0.M6FmIiIlvIbPk3wl6MgvVw",[b,w]=f.useState(null),r=f.useRef({}),v=async a=>{if(!a||!a.lat||!a.lng)return null;const p=g[1],y=g[0],I=a.lng,j=a.lat,C=`${y},${p}->${j},${I}`;if(r.current[C])return r.current[C];const k=`https://api.mapbox.com/directions/v5/mapbox/driving/${p},${y};${I},${j}?geometries=geojson&overview=full&access_token=${N}`;try{if(N){const h=await(await fetch(k)).json();if(h&&h.routes&&h.routes[0]&&h.routes[0].geometry){const M=h.routes[0].geometry.coordinates.map(S=>[S[1],S[0]]);return r.current[C]=M,M}}}catch(z){console.warn("Routing fallback:",z)}const E=[[y,p],[j,I]];return r.current[C]=E,E};return f.useEffect(()=>{!u||u.length===0||u.forEach(a=>{v(a)})},[u,g]),f.useEffect(()=>{if(!l){w(null);return}const a=u.find(k=>k.name===l);if(!a){w(null);return}const p=g[1],y=g[0],I=a.lng,j=a.lat,C=`${y},${p}->${j},${I}`;r.current[C]?w(r.current[C]):v(a).then(k=>{k&&w(k)})},[l,u,g]),e.jsx("div",{className:"project-map-canvas-container",children:e.jsxs(_,{center:g,zoom:13.6,minZoom:11,scrollWheelZoom:!1,className:"leaflet-hero-map",children:[e.jsx(Q,{attribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:`https://api.mapbox.com/styles/v1/mapbox/${x}/tiles/256/{z}/{x}/{y}?access_token=${N}`,tileSize:256,zoomOffset:0,maxZoom:19}),e.jsx(pe,{center:g,radius:3e3,pathOptions:{color:"#b48564",fillColor:"#b48564",fillOpacity:.04,weight:1.5,dashArray:"4, 8"}}),b&&e.jsxs(e.Fragment,{children:[e.jsx(H,{positions:b,pathOptions:{color:"#b48564",weight:5,opacity:.85,lineCap:"round",lineJoin:"round",className:"animated-route-glow"}}),e.jsx(H,{positions:b,pathOptions:{color:"#ffffff",weight:2.5,dashArray:"7, 14",opacity:.95,lineCap:"round",lineJoin:"round",className:"animated-route-dash"}})]}),e.jsx(F,{position:g,icon:xe(o,n),eventHandlers:{mouseover:()=>d&&d(!0),mouseout:()=>d&&d(!1)}}),u.map((a,p)=>{if(!a.lat||!a.lng)return null;const y=l===a.name;return e.jsx(F,{position:[a.lat,a.lng],icon:fe(y),eventHandlers:{mouseover:()=>{c&&c(a.name),d&&d(!0)},mouseout:()=>{d&&d(!1)},click:()=>c&&c(a.name)},children:y&&e.jsx(me,{permanent:!0,direction:"top",offset:[0,-36],children:e.jsxs("div",{className:"poi-marker-tooltip",children:[e.jsx("strong",{children:a.name}),e.jsx("span",{className:"poi-dist-badge",children:a.dist})]})})},`${a.name}-${y}`)}),e.jsx(ue,{center:g,activeLocations:u,categoryId:t?t.id:"",isMapInteracted:s}),e.jsx(be,{onInteraction:m})]})})}const ye=(t,i=15)=>{switch(t){case"transport":case"junctions":return e.jsx(oe,{size:i});case"education":case"schools":case"colleges":return e.jsx(re,{size:i});case"hospitals":case"healthcare":return e.jsx(se,{size:i});case"employment":case"industry":return e.jsx(ne,{size:i});case"temples":case"heritage":return e.jsx(ie,{size:i});case"entertainment":case"leisure":return e.jsx(te,{size:i});case"shopping":default:return e.jsx(ae,{size:i})}};function Te({onEnquire:t,projectCoords:i,projectName:o,projectImage:n,categories:l}){const c=l||ce,[d,m]=f.useState(0),[s,x]=f.useState(null),[g,u]=f.useState(!1),[N,b]=f.useState(!1),[w,r]=f.useState(!1),[v,a]=f.useState(!1),[p,y]=f.useState(0),I=i||[12.9298995,80.1954121],j=c[d]||c[0],C=g||N||w;f.useEffect(()=>{j&&j.locations&&j.locations.length>0&&x(j.locations[0].name)},[d,j]),f.useEffect(()=>{if(C)return;const h=100,S=h/1e4*100,U=setInterval(()=>{y($=>$>=100?(m(P=>(P+1)%c.length),0):$+S)},h);return()=>clearInterval(U)},[C,c.length]);const k=h=>{h.stopPropagation(),y(0),r(!1),m(M=>(M-1+c.length)%c.length)},E=h=>{h.stopPropagation(),y(0),r(!1),m(M=>(M+1)%c.length)},z=h=>{h&&x(h)};return e.jsxs("section",{className:"loc-advantage-hero-section",children:[e.jsx("div",{className:"loc-advantage-header-container",children:e.jsx(L,{animation:"fadeUp",delay:.15,className:"loc-advantage-header-block",children:e.jsxs("h2",{className:"section-title loc-advantage-main-title",children:["Connectivity Meets ",e.jsx("span",{children:"Exclusivity"})]})})}),e.jsx("div",{className:"loc-advantage-fullwidth-map-shell",children:e.jsxs("div",{className:"loc-advantage-map-viewport",children:[e.jsx(ve,{activeCategory:j,projectCoords:I,projectName:o,projectImage:n,activeLocationName:s,onHoverLocation:z,onPinHoverChange:b,onInteraction:()=>r(!0),isMapInteracted:w,mapStyle:"streets-v12"}),e.jsxs("div",{className:`map-floating-drawer-card ${v?"is-mobile-expanded":"is-mobile-collapsed"}`,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[e.jsx("div",{className:"drawer-progress-track",children:e.jsx("div",{className:"drawer-progress-bar",style:{width:`${p}%`}})}),e.jsxs("div",{className:"floating-drawer-header",onClick:()=>a(h=>!h),children:[e.jsxs("div",{className:"drawer-header-left",children:[e.jsx("div",{className:"drawer-cat-icon-badge",children:ye(j.id,16)}),e.jsx("div",{className:"drawer-header-text",children:e.jsx("h3",{className:"drawer-title",children:j.label})})]}),e.jsxs("div",{className:"drawer-header-right",children:[e.jsxs("div",{className:"drawer-arrows-group",children:[e.jsx("button",{className:"drawer-arrow-btn",onClick:k,"aria-label":"Previous Category",title:"Previous Category",children:e.jsx(D,{size:16})}),e.jsx("button",{className:"drawer-arrow-btn",onClick:E,"aria-label":"Next Category",title:"Next Category",children:e.jsx(B,{size:16})})]}),e.jsxs("span",{className:"drawer-poi-count-badge",children:[j.locations.length," Places"]}),e.jsx("button",{className:"drawer-mobile-toggle-btn","aria-label":v?"Collapse List":"Expand List",children:v?e.jsx(V,{size:16}):e.jsx(ee,{size:16})})]})]}),e.jsx("div",{className:"floating-drawer-body",children:e.jsx("div",{className:"drawer-landmarks-list-scroll",children:e.jsxs("div",{className:"drawer-timeline-container",children:[e.jsx("div",{className:"drawer-timeline-line"}),j.locations.map((h,M)=>{const S=h.name===s;return e.jsxs("div",{className:`drawer-landmark-item ${S?"active-highlight":""}`,onMouseEnter:()=>z(h.name),onClick:()=>z(h.name),children:[e.jsxs("div",{className:"landmark-node-box",children:[e.jsx("span",{className:"landmark-distance-tag",children:h.dist}),e.jsx("div",{className:"landmark-dot-pulse",children:e.jsx("div",{className:"landmark-dot-center"})})]}),e.jsx("div",{className:"landmark-info-box",children:e.jsx("span",{className:"landmark-name",children:h.name})})]},M)})]})})})]})]})})]})}R.registerPlugin(G);function ze({stat1Tag:t="SITE EXTENT",stat1Val:i="15",stat1Desc:o="ACRES",stat1Count:n=15,stat2Tag:l="TOTAL UNITS",stat2Val:c="47",stat2Desc:d="VILLAS",stat2Count:m=47,projectTag:s="PROJECT",projectName:x="CRYSTAL MOONLIGHT",location:g="MEDAVAKKAM, CHENNAI",reraNo:u="(TN/29/Building/001/2024)",stat3Tag:N="CONFIGURATION",stat3Val:b="3 & 4",stat3Desc:w="BHK",stat4Tag:r="SIZE RANGE",stat4Val:v="2,233 - 2,287",stat4Desc:a="SQ.FT."}){const p=f.useRef(null),[y,I]=f.useState(0),[j,C]=f.useState(0);return f.useLayoutEffect(()=>{var U,$;const k=p.current;if(!k)return;const E=R.utils.toArray(".stat-block",k),z=R.utils.toArray(".divider-line",k),h=k.querySelector(".info-grid-val-large"),M=R.utils.toArray(".center-text-reveal",k),S=R.timeline({scrollTrigger:{trigger:k,start:"top 85%",toggleActions:"play none none reverse"}});if(S.fromTo(".grid-top-border",{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.2,ease:"power2.inOut"}),z.length>0&&S.fromTo(z,{scaleY:0,transformOrigin:"top center"},{scaleY:1,duration:1,ease:"power2.inOut",stagger:.15},"-=0.8"),E.length>0&&S.fromTo(E,{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",stagger:.1},"-=0.6"),h){const P=h.innerText;h.innerHTML=P.split("").map(T=>`<span class="char-span" style="display:inline-block; transform: translate3d(0, 100%, 0); opacity: 0; will-change: transform, opacity;">${T===" "?"&nbsp;":T}</span>`).join("");const A=h.querySelectorAll(".char-span");S.to(A,{y:0,opacity:1,duration:.8,ease:"back.out(1.7)",stagger:.03},"-=0.5")}if(M.length>0&&S.fromTo(M,{y:15,opacity:0},{y:0,opacity:1,duration:.6,ease:"power2.out",stagger:.1},"-=0.4"),typeof n=="number"&&n>0){const A=!Number.isInteger(n)||typeof i=="string"&&i.includes(".")?((U=String(i||n).split(".")[1])==null?void 0:U.length)||2:0,T={val:0};S.to(T,{val:n,duration:1.5,ease:"power2.out",onUpdate:()=>{I(A>0?T.val.toFixed(A):Math.floor(T.val))}},"-=1")}if(typeof m=="number"&&m>0){const A=!Number.isInteger(m)||typeof c=="string"&&c.includes(".")?(($=String(c||m).split(".")[1])==null?void 0:$.length)||2:0,T={val:0};S.to(T,{val:m,duration:1.5,ease:"power2.out",onUpdate:()=>{C(A>0?T.val.toFixed(A):Math.floor(T.val))}},"<")}return()=>{G.getAll().forEach(P=>P.kill())}},[n,m,i,c]),e.jsxs("div",{ref:p,className:"project-details-grid-root",style:{width:"100%"},children:[e.jsxs("div",{className:"container",style:{position:"relative",zIndex:2},children:[e.jsx("div",{className:"grid-top-border",style:{height:"1px",background:"rgba(0, 0, 0, 0.08)",width:"100%",willChange:"transform"}}),e.jsx("div",{className:"project-details-grid-content",children:e.jsxs("div",{className:"project-details-grid-wrapper",children:[e.jsxs("div",{className:"stat-group stat-group-left",children:[e.jsxs("div",{className:"stat-block",children:[e.jsx("span",{className:"info-grid-tag",children:t}),e.jsx("span",{className:"info-grid-val",style:String(i).length>6?{fontSize:"24px",whiteSpace:"nowrap"}:{},children:typeof n=="number"&&n>0?y:i}),e.jsx("span",{className:"info-grid-desc",children:o})]}),e.jsxs("div",{className:"stat-block",children:[e.jsx("span",{className:"info-grid-tag",children:l}),e.jsx("span",{className:"info-grid-val",style:String(c).length>6?{fontSize:"24px",whiteSpace:"nowrap"}:{},children:typeof m=="number"&&m>0?j:c}),e.jsx("span",{className:"info-grid-desc",children:d})]})]}),e.jsx("div",{className:"divider-line stat-divider-line"}),e.jsxs("div",{className:"stat-group stat-group-center",children:[e.jsxs("div",{className:"stat-project-title-wrap",children:[e.jsx("span",{className:"info-grid-tag center-text-reveal",style:{marginBottom:"8px"},children:s}),e.jsx("span",{className:"info-grid-val-large",style:{display:"block",overflow:"hidden",whiteSpace:"nowrap"},children:x})]}),e.jsx("span",{className:"info-grid-desc center-text-reveal",style:{marginBottom:"6px"},children:g}),u&&u.trim()&&e.jsx("span",{className:"info-grid-rera center-text-reveal",style:{fontSize:"13px",letterSpacing:"0.06em",color:"#777777",textTransform:"uppercase",fontFamily:"var(--font-sans)",fontWeight:"400"},children:u})]}),e.jsx("div",{className:"divider-line stat-divider-line"}),e.jsxs("div",{className:"stat-group stat-group-right",children:[e.jsxs("div",{className:"stat-block",children:[e.jsx("span",{className:"info-grid-tag",children:N}),e.jsx("span",{className:"info-grid-val",style:String(b).length>6?{fontSize:"24px",whiteSpace:"nowrap"}:{},children:b}),e.jsx("span",{className:"info-grid-desc",children:w})]}),e.jsxs("div",{className:"stat-block",children:[e.jsx("span",{className:"info-grid-tag",children:r}),e.jsx("span",{className:"info-grid-val",style:String(v).length>6?{fontSize:"24px",whiteSpace:"nowrap"}:{},children:v}),e.jsx("span",{className:"info-grid-desc",children:a})]})]})]})})]}),e.jsx("style",{children:`
        .grid-top-border {
          margin-bottom: 80px;
        }

        .project-details-grid-content {
          width: 100%;
          padding-bottom: 80px;
        }

        .project-details-grid-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .stat-group-left,
        .stat-group-right {
          display: flex;
          gap: 30px;
          flex: 1;
          justify-content: center;
          min-width: 200px;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
        }

        .stat-divider-line {
          width: 1px;
          height: 120px;
          background: rgba(0, 0, 0, 0.08);
          align-self: center;
          will-change: transform;
        }

        .stat-group-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 0 0 auto;
          padding: 0 30px;
          min-width: 280px;
        }

        .stat-project-title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 16px;
        }

        @media (max-width: 900px) {
          .grid-top-border {
            margin-bottom: 48px;
          }

          .project-details-grid-content {
            padding-bottom: 50px;
          }

          .project-details-grid-wrapper {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 36px;
            width: 100%;
            margin: 0 auto;
          }

          .stat-group-left,
          .stat-group-right {
            width: 100%;
            max-width: 460px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            min-width: 0;
            flex: none;
          }

          .stat-group-center {
            width: 100%;
            max-width: 460px;
            padding: 0;
            min-width: 0;
            margin: 0 auto;
            flex: none;
          }

          .stat-divider-line {
            display: none !important;
          }
        }
      `})]})}const je=[{code:"+91",flag:"🇮🇳",label:"India"},{code:"+971",flag:"🇦🇪",label:"UAE"},{code:"+1",flag:"🇺🇸",label:"USA"},{code:"+44",flag:"🇬🇧",label:"UK"},{code:"+966",flag:"🇸🇦",label:"Saudi Arabia"},{code:"+65",flag:"🇸🇬",label:"Singapore"}];function Ee({projectName:t="Crystal Moonlight",tag:i="CONNECT WITH US",showPricing:o=!1,startingPrice:n="",prices:l=[],unitTypes:c=["3 BHK Villa","4 BHK Villa"]}){const[d,m]=f.useState("callback"),[s,x]=f.useState({firstName:"",lastName:"",phoneCode:"+91",phoneNumber:"",email:"",unitType:c[0]||"Unit Type",agreeTerms:!1,agreeOffers:!1}),[g,u]=f.useState(!1),[N,b]=f.useState(!1),w=async r=>{if(r.preventDefault(),!s.agreeTerms){alert("Please agree to the privacy policy.");return}const v=`${s.firstName||""} ${s.lastName||""}`.trim(),a=`${s.phoneCode||"+91"} ${s.phoneNumber||""}`.trim(),p="Customer Price Inquiry";u(!0),await le({name:v,firstName:s.firstName,lastName:s.lastName,phoneCode:s.phoneCode,phoneNumber:s.phoneNumber,phone:a,email:s.email,project:t,unitType:s.unitType,category:p,contactMode:d==="videocall"?"Video Call":"Phone Call"}),u(!1),b(!0)};return e.jsxs("section",{className:"pricing-section-container",id:"pricing",style:{minHeight:"calc(100vh - 55px)"},children:[e.jsxs("div",{className:"pricing-wrapper",children:[e.jsxs(L,{className:"pricing-info-col",animation:"fadeUp",delay:.15,children:[e.jsx("span",{className:"starting-prices-tag",children:i}),e.jsxs("h2",{className:"section-title",children:["We'd Love To ",e.jsx("br",{}),e.jsx("span",{children:"Hear From You"})]}),o&&l&&l.length>0?e.jsx("div",{className:"pricing-display-group",children:e.jsx("div",{className:"prices-grid",children:l.map((r,v)=>e.jsxs("div",{className:"price-item",children:[e.jsx("span",{className:"price-label",children:r.label}),e.jsx("span",{className:"price-dot",children:"·"}),e.jsx("span",{className:"price-starting-tag",children:"Starting from"}),e.jsx("span",{className:"price-val",children:r.val})]},v))})}):e.jsxs("div",{className:"contact-info-details-box",style:{marginTop:"24px"},children:[e.jsx("p",{style:{fontSize:"16px",lineHeight:"1.7",color:"#555555",margin:"0 0 24px 0"},children:"Connect with our dedicated relationship managers to schedule a private site visit, explore available floor plans, and receive complete project brochures."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",color:"#111111",fontSize:"15px"},children:[e.jsx("span",{style:{color:"#b48564",fontSize:"16px"},children:"✦"}),e.jsx("span",{children:"Exclusive Site Walkthroughs & Layout Tours"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",color:"#111111",fontSize:"15px"},children:[e.jsx("span",{style:{color:"#b48564",fontSize:"16px"},children:"✦"}),e.jsx("span",{children:"Personalized Payment Schedules & Bank Loan Assistance"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",color:"#111111",fontSize:"15px"},children:[e.jsx("span",{style:{color:"#b48564",fontSize:"16px"},children:"✦"}),e.jsx("span",{children:"Direct Consultation with Project Advisors"})]})]})]}),o&&e.jsx("p",{className:"pricing-disclaimer",children:"*Prices mentioned are indicative starting prices, subject to applicable taxes, government charges, and inventory availability."})]}),e.jsx(L,{className:"pricing-form-col",animation:"fadeLeft",delay:.35,children:N?e.jsxs("div",{className:"success-card",children:[e.jsx("div",{className:"success-icon",children:"✓"}),e.jsx("h3",{className:"success-title",children:"Thank You!"}),e.jsx("p",{className:"success-text",children:activeFormType==="partner"?"Your Channel Partner application has been received. Our partner onboarding team will contact you shortly.":"Your inquiry has been successfully submitted. Our luxury property advisor will get in touch with you shortly."}),e.jsx("button",{className:"reset-btn",onClick:()=>{b(!1),x({firstName:"",lastName:"",phoneCode:"+91",phoneNumber:"",email:"",unitType:c[0]||"Unit Type",agreeTerms:!1,agreeOffers:!1})},children:"Submit Another Request"})]}):e.jsxs("form",{onSubmit:w,className:"pricing-form",children:[e.jsxs("div",{className:"contact-mode-group",children:[e.jsx("span",{className:"input-field-label",children:"Preferred Mode of Contact *"}),e.jsxs("div",{className:"radio-options",children:[e.jsxs("label",{className:"radio-label",children:[e.jsx("input",{type:"radio",name:"contactMode",value:"callback",checked:d==="callback",onChange:()=>m("callback")}),e.jsx("span",{className:"custom-radio"}),"Request a call back"]}),e.jsxs("label",{className:"radio-label",children:[e.jsx("input",{type:"radio",name:"contactMode",value:"videocall",checked:d==="videocall",onChange:()=>m("videocall")}),e.jsx("span",{className:"custom-radio"}),"Schedule a video call"]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"text",required:!0,placeholder:"First Name *",className:"form-input",value:s.firstName,onChange:r=>x({...s,firstName:r.target.value})})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"text",required:!0,placeholder:"Last Name *",className:"form-input",value:s.lastName,onChange:r=>x({...s,lastName:r.target.value})})})]}),e.jsxs("div",{className:"form-row-phone",children:[e.jsx("div",{className:"phone-code-select-wrapper",children:e.jsx("select",{className:"phone-code-select",value:s.phoneCode,onChange:r=>x({...s,phoneCode:r.target.value}),children:je.map(r=>e.jsxs("option",{value:r.code,children:[r.flag," ",r.code]},r.code))})}),e.jsx("input",{type:"tel",required:!0,placeholder:"Phone Number *",className:"form-input phone-input",value:s.phoneNumber,onChange:r=>x({...s,phoneNumber:r.target.value})})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"email",required:!0,placeholder:"Email Address *",className:"form-input",value:s.email,onChange:r=>x({...s,email:r.target.value})})}),e.jsx("div",{className:"form-group",children:e.jsx("select",{className:"form-select",value:s.unitType,onChange:r=>x({...s,unitType:r.target.value}),children:c.map(r=>e.jsx("option",{value:r,children:r},r))})})]}),e.jsxs("div",{className:"checkboxes-group",children:[e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:s.agreeTerms,onChange:r=>x({...s,agreeTerms:r.target.checked})}),e.jsx("span",{className:"custom-checkbox"}),"I've read and agree to the ",e.jsx("a",{href:"/privacy",className:"form-link",children:"privacy policy. *"})]}),e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:s.agreeOffers,onChange:r=>x({...s,agreeOffers:r.target.checked})}),e.jsx("span",{className:"custom-checkbox"}),"I'd like to receive priority project updates and offers."]})]}),e.jsx("div",{className:"form-submit-container",children:e.jsx("button",{type:"submit",className:"form-submit-btn",disabled:g,children:g?"SUBMITTING...":"REQUEST PRICING DETAILS"})})]})})]}),e.jsx("style",{children:`
        .pricing-section-container {
          padding: 60px 5% 90px;
          min-height: calc(100vh - 55px);
          box-sizing: border-box;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .pricing-wrapper {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }

        .pricing-info-col {
          flex: 1 1 420px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .starting-prices-tag {
          font-size: 11px;
          font-weight: 500;
          color: #888888;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        /* ── Starting From Hero Banner ── */
        .pricing-display-group {
          width: 100%;
          margin: 24px 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .starting-from-hero-card {
          background: var(--color-bg-light, #f8f6f2);
          border-left: 3px solid #b48564;
          padding: 18px 24px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .starting-from-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #777777;
          text-transform: uppercase;
        }

        .starting-from-amount {
          font-family: var(--font-heading, serif);
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 400;
          color: #111111;
          line-height: 1.1;
        }

        .starting-from-subtext {
          font-size: 12px;
          color: #666666;
          letter-spacing: 0.04em;
        }

        .prices-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .price-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          font-size: 15px;
        }

        .price-label {
          color: #555555;
          font-weight: 400;
        }

        .price-dot {
          color: #b48564;
        }

        .price-starting-tag {
          font-size: 11px;
          color: #777777;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 400;
        }

        .price-val {
          color: #111111;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        /* ── Channel Partner Box ── */
        .partner-details-box {
          background: var(--color-bg-light, #f8f6f2);
          border: 1px solid rgba(180, 133, 100, 0.25);
          border-radius: 6px;
          padding: 24px;
          margin: 20px 0 24px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .partner-box-title {
          font-size: 13px;
          font-weight: 600;
          color: #b48564;
          letter-spacing: 0.12em;
          margin: 0 0 10px 0;
        }

        .partner-box-desc {
          font-size: 14px;
          color: #444444;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .partner-perks-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .partner-perks-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #333333;
          line-height: 1.4;
        }

        .perk-bullet {
          color: #b48564;
          font-size: 11px;
          margin-top: 2px;
        }

        .partner-contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .partner-contact-label {
          font-size: 11px;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .partner-contact-email {
          font-size: 14px;
          font-weight: 600;
          color: #111111;
        }

        .pricing-disclaimer {
          font-size: 11px;
          color: #888888;
          line-height: 1.5;
          margin-top: auto;
        }

        /* ── Right Column Form ── */
        .pricing-form-col {
          flex: 1 1 480px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 36px 32px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
        }

        .pricing-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-type-tabs {
          display: flex;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }

        .form-type-btn {
          flex: 1;
          padding: 12px 16px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #888888;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: -1px;
        }

        .form-type-btn.active {
          color: #111111;
          border-bottom-color: #b48564;
        }

        .contact-mode-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .input-field-label {
          font-size: 12px;
          font-weight: 500;
          color: #555555;
          letter-spacing: 0.04em;
        }

        .radio-options {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #333333;
          cursor: pointer;
        }

        .radio-label input {
          display: none;
        }

        .custom-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #b48564;
          display: inline-block;
          position: relative;
        }

        .radio-label input:checked + .custom-radio::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #b48564;
          border-radius: 50%;
          top: 3px;
          left: 3px;
        }

        .form-row-2 {
          display: flex;
          gap: 16px;
        }

        .form-group {
          flex: 1;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 13px 16px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          font-size: 14px;
          color: #111111;
          font-family: var(--font-sans);
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
          transition: border-color 0.25s ease;
        }

        .form-input:focus, .form-select:focus {
          border-color: #b48564;
        }

        .form-input.disabled {
          background: #f5f5f5;
          color: #777777;
        }

        .form-row-phone {
          display: flex;
          gap: 12px;
        }

        .phone-code-select-wrapper {
          width: 100px;
          flex-shrink: 0;
        }

        .phone-code-select {
          width: 100%;
          padding: 13px 8px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          font-size: 14px;
          background: #ffffff;
          box-sizing: border-box;
          outline: none;
        }

        .phone-input {
          flex: 1;
        }

        .checkboxes-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: #555555;
          line-height: 1.4;
          cursor: pointer;
        }

        .checkbox-label input {
          display: none;
        }

        .custom-checkbox {
          width: 15px;
          height: 15px;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 1px;
          position: relative;
        }

        .checkbox-label input:checked + .custom-checkbox {
          background: #b48564;
          border-color: #b48564;
        }

        .checkbox-label input:checked + .custom-checkbox::after {
          content: '✓';
          color: #ffffff;
          position: absolute;
          font-size: 11px;
          top: -1px;
          left: 2px;
        }

        .form-link {
          color: #b48564;
          text-decoration: underline;
        }

        .form-submit-container {
          margin-top: 8px;
        }

        .form-submit-btn {
          width: 100%;
          padding: 15px;
          background: #111111;
          color: #ffffff;
          border: 1px solid #111111;
          border-radius: 40px !important;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .form-submit-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: translateY(-1px);
        }

        /* Success Card */
        .success-card {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .success-icon {
          width: 54px;
          height: 54px;
          background: #b48564;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .success-title {
          font-family: var(--font-heading);
          font-size: 26px;
          color: #111111;
          margin: 0;
        }

        .success-text {
          font-size: 14px;
          color: #555555;
          line-height: 1.6;
          max-width: 380px;
          margin: 0;
        }

        .reset-btn {
          margin-top: 10px;
          padding: 10px 24px;
          background: transparent;
          border: 1px solid #b48564;
          color: #b48564;
          border-radius: 30px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .pricing-wrapper {
            flex-direction: column;
            gap: 40px;
          }
          .form-row-2 {
            flex-direction: column;
          }
          .pricing-form-col {
            padding: 28px 20px;
          }
        }
      `})]})}function Pe({amenities:t=[],title:i="World Class Amenities",subtitle:o="Step into a world of grace where peacefulness and elegance unite, offering exceptional features that enrich each moment and bring endless joy to everyday living."}){const[n,l]=f.useState(0),[c,d]=f.useState(!0),m=f.useRef(0),s=f.useRef(0),x=t.length;f.useEffect(()=>{if(!c||x<=1)return;const a=setInterval(()=>{l(p=>(p+1)%x)},5500);return()=>clearInterval(a)},[x,c]);const g=()=>{d(!1),l(a=>(a-1+x)%x)},u=()=>{d(!1),l(a=>(a+1)%x)},N=a=>{d(!1),l(a)},b=a=>{m.current=a.targetTouches[0].clientX},w=a=>{s.current=a.targetTouches[0].clientX},r=()=>{const a=m.current-s.current;Math.abs(a)>40&&(a>0?u():g())};if(!t||t.length===0)return null;const v=t[n]||t[0];return e.jsxs("div",{className:"amp-amenities-slider",onMouseEnter:()=>d(!1),onMouseLeave:()=>d(!0),children:[e.jsxs("div",{className:"amp-amenities-desktop",children:[e.jsxs("div",{className:"amp-amenities-bg-track",children:[t.map((a,p)=>{const y=n===p;return e.jsx("div",{className:`amp-amenities-bg-slide ${y?"active":""}`,style:{backgroundImage:`url('${encodeURI(a.image)}')`}},p)}),e.jsx("div",{className:"amp-amenities-overlay-top"}),e.jsx("div",{className:"amp-amenities-overlay-bottom"})]}),e.jsxs("div",{className:"amp-amenities-header",children:[e.jsx("h2",{className:"amp-amenities-title amp-amenities-fade",children:v.title},`t-${n}`),e.jsx("p",{className:"amp-amenities-subtitle amp-amenities-fade",children:v.desc},`d-${n}`)]}),e.jsx("div",{className:"amp-amenities-carousel-track-wrapper",children:e.jsx(L,{animation:"fadeUp",delay:.35,once:!1,style:{width:"max-content"},children:e.jsx("div",{className:"amp-amenities-carousel-track",style:{transform:`translateX(-${n*360}px)`},children:t.map((a,p)=>{const y=n===p,I=p<n;return e.jsx("div",{onClick:()=>N(p),className:`amp-amenity-card ${y?"card-active":I?"card-past":"card-inactive"}`,children:e.jsxs("div",{className:"amp-amenity-card-inner",children:[a.icon&&e.jsx("div",{className:"amp-card-icon-wrap",children:e.jsx("img",{src:encodeURI(a.icon),alt:"",className:"amp-card-icon"})}),e.jsx("h3",{className:"amp-card-title",children:a.shortTitle||a.title})]})},p)})})})}),e.jsx("div",{className:"amp-amenities-controls",children:e.jsx(L,{animation:"fadeUp",delay:.45,once:!1,children:e.jsxs("div",{className:"amp-amenities-controls-inner",children:[e.jsxs("div",{className:"amp-amenities-nav-btns",children:[e.jsx("button",{onClick:g,className:"amp-nav-btn btn-prev","aria-label":"Previous Amenity",children:e.jsx(D,{size:22,strokeWidth:2})}),e.jsx("button",{onClick:u,className:"amp-nav-btn btn-next","aria-label":"Next Amenity",children:e.jsx(B,{size:22,strokeWidth:2})})]}),e.jsx("div",{className:"amp-amenities-dots",children:t.map((a,p)=>e.jsx("button",{onClick:()=>N(p),className:`amp-dot ${n===p?"active":""}`,"aria-label":`Go to amenity ${p+1}`},p))})]})})})]}),e.jsxs("div",{className:"amp-amenities-mobile",onTouchStart:b,onTouchMove:w,onTouchEnd:r,children:[e.jsxs("div",{className:"amp-mobile-photo-container",children:[t.map((a,p)=>e.jsx("img",{src:encodeURI(a.image),alt:a.title,className:`amp-mobile-photo ${n===p?"active":""}`},p)),e.jsxs("div",{className:"amp-mobile-corner-btns",children:[e.jsx("button",{onClick:g,className:"amp-mobile-btn btn-prev","aria-label":"Previous Amenity",children:e.jsx(D,{size:20,strokeWidth:2.2})}),e.jsx("button",{onClick:u,className:"amp-mobile-btn btn-next","aria-label":"Next Amenity",children:e.jsx(B,{size:20,strokeWidth:2.2})})]})]}),e.jsxs("div",{className:"amp-mobile-info-card",children:[e.jsx(L,{animation:"fadeUp",delay:.1,once:!1,children:e.jsxs("div",{className:"amp-mobile-card-header",children:[v.icon&&e.jsx("div",{className:"amp-mobile-icon-wrap",children:e.jsx("img",{src:encodeURI(v.icon),alt:"",className:"amp-mobile-icon"})}),e.jsx("h3",{className:"amp-mobile-card-title",children:v.title})]})}),e.jsx(L,{animation:"fadeUp",delay:.2,once:!1,children:e.jsx("p",{className:"amp-mobile-card-desc",children:v.desc})}),e.jsx("div",{className:"amp-mobile-dots",children:t.map((a,p)=>e.jsx("span",{onClick:()=>N(p),className:`amp-mobile-dot ${n===p?"active":""}`},p))})]})]}),e.jsx("style",{children:`
        /* ── AMP AMENITIES SLIDER ── */
        .amp-amenities-slider {
          position: relative;
          width: 100%;
          background: var(--color-bg-light, #f7f7f7);
          overflow: hidden;
          user-select: none;
        }

        /* ── DESKTOP VIEW ── */
        .amp-amenities-desktop {
          display: block;
          position: relative;
          width: 100%;
          height: calc(100vh - 55px);
          min-height: 650px;
          overflow: hidden;
        }

        .amp-amenities-bg-track {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .amp-amenities-bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 0.75s cubic-bezier(0.25, 1, 0.5, 1), transform 0.95s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .amp-amenities-bg-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .amp-amenities-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
          pointer-events: none;
        }

        .amp-amenities-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.12) 50%, transparent 100%);
          pointer-events: none;
        }

        .amp-amenities-fade {
          animation: ampAmenitiesFade 0.6s cubic-bezier(0.25, 1, 0.5, 1) both;
        }

        @keyframes ampAmenitiesFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Editorial Header */
        .amp-amenities-header {
          position: absolute;
          top: clamp(36px, 6vh, 64px);
          left: clamp(28px, 5.5vw, 80px);
          z-index: 10;
          max-width: 660px;
          text-align: left;
        }

        .amp-amenities-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          color: var(--color-white, #ffffff);
          letter-spacing: 0.02em;
          margin: 0 0 14px 0;
          line-height: 1.15;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
        }

        .amp-amenities-subtitle {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: clamp(14px, 1.15vw, 15.5px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.68;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
        }

        /* Bottom Floating Cards Row — Centered Active Card (Left Cards Hidden) */
        .amp-amenities-carousel-track-wrapper {
          position: absolute;
          bottom: 126px;
          left: calc(50% - 170px);
          right: 0;
          z-index: 10;
          overflow: visible;
          clip-path: inset(-60px 0px -60px 0px);
        }

        .amp-amenities-carousel-track {
          display: flex;
          gap: 20px;
          transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
          width: max-content;
        }

        .amp-amenity-card {
          width: 340px;
          padding: 12px 22px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .amp-amenity-card-inner {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
        }

        .amp-card-icon-wrap {
          width: 32px;
          height: 32px;
          min-width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .amp-card-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0);
          opacity: 0.85;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* Active Card: Clean Luxury White with Gold Accent */
        .amp-amenity-card.card-active {
          background: #ffffff;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
          cursor: default;
          transform: scale(1);
        }

        .amp-amenity-card.card-active .amp-card-icon {
          opacity: 1;
        }

        .amp-amenity-card.card-active .amp-card-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          color: var(--color-text-dark, #000000);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 0.02em;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .amp-amenity-card.card-active .amp-card-desc {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          color: #333333;
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 400;
        }

        /* Inactive Cards: Light Luxury Frosted Glass */
        .amp-amenity-card.card-inactive {
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .amp-amenity-card.card-inactive:hover {
          background: #ffffff;
          border-color: var(--color-highlight, #b48564);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .amp-amenity-card.card-inactive:hover .amp-card-icon {
          opacity: 1;
          transform: scale(1.08);
        }

        .amp-amenity-card.card-inactive .amp-card-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          color: var(--color-text-dark, #000000);
          font-size: 22px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 0.02em;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .amp-amenity-card.card-inactive .amp-card-desc {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          color: #555555;
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 300;
        }

        /* Past Cards (to the left of active card) — Hidden */
        .amp-amenity-card.card-past {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(0.92);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Bottom Controls Bar — Centered below active card */
        .amp-amenities-controls {
          position: absolute;
          bottom: 58px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .amp-amenities-controls-inner {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        /* Signature Website Arrow Style: Circular & Light */
        .amp-amenities-nav-btns {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .amp-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: var(--color-primary, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .amp-nav-btn:hover {
          background: #ffffff;
          color: var(--color-highlight, #b48564);
          border-color: var(--color-highlight, #b48564);
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
        }

        /* Dots Container */
        .amp-amenities-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amp-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        .amp-dot:hover:not(.active) {
          background: #ffffff;
          transform: scale(1.15);
        }

        .amp-dot.active {
          width: 12px;
          height: 12px;
          background: var(--color-highlight, #b48564);
          border-color: var(--color-highlight, #b48564);
          box-shadow: 0 0 0 3px rgba(180, 133, 100, 0.35);
        }

        /* ── MOBILE VIEW ── */
        .amp-amenities-mobile {
          display: none;
          width: 100%;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .amp-amenities-desktop {
            display: none !important;
          }

          .amp-amenities-mobile {
            display: flex !important;
          }

          .amp-mobile-photo-container {
            position: relative;
            width: 100%;
            height: clamp(280px, 46vh, 360px);
            overflow: hidden;
            background: #f7f7f7;
          }

          .amp-mobile-photo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .amp-mobile-photo.active {
            opacity: 1;
          }

          .amp-mobile-corner-btns {
            position: absolute;
            bottom: 14px;
            right: 14px;
            z-index: 10;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .amp-mobile-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(0, 0, 0, 0.08);
            color: var(--color-primary, #000000);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            outline: none;
            transition: all 0.25s ease;
          }

          .amp-mobile-btn:active {
            transform: scale(0.94);
            color: var(--color-highlight, #b48564);
          }

          /* Light Luxury Info Card for Mobile */
          .amp-mobile-info-card {
            background: #ffffff;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.04);
            padding: 24px 20px 28px;
            color: var(--color-text-dark, #000000);
            text-align: left;
          }

          .amp-mobile-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
          }

          .amp-mobile-icon-wrap {
            width: 26px;
            height: 26px;
            min-width: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .amp-mobile-icon {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: brightness(0);
          }

          .amp-mobile-card-title {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 23px;
            font-weight: 500;
            color: var(--color-text-dark, #000000);
            margin: 0;
            letter-spacing: 0.02em;
          }

          .amp-mobile-card-desc {
            font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
            font-size: 14px;
            line-height: 1.6;
            color: #444444;
            margin: 0;
            font-weight: 400;
          }

          .amp-mobile-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-top: 20px;
          }

          .amp-mobile-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .amp-mobile-dot.active {
            width: 10px;
            height: 10px;
            background: var(--color-highlight, #b48564);
            box-shadow: 0 0 0 2px rgba(180, 133, 100, 0.25);
          }
        }
      `})]})}export{Pe as A,Te as N,ze as P,Ee as a};

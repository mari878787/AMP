const p="info@aadhithyamohanproperties.com";async function m(e){try{const o=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,sourceUrl:window.location.href,submittedAt:new Date().toISOString()})});if(o.ok)try{return{success:!0,data:await o.json()}}catch{return{success:!0}}}catch(o){console.warn("Backend API unreachable or failed, fallback to mailto dispatch:",o)}return e.skipMailtoFallback!==!0&&e.category!=="Brochure Download"&&u(e),{success:!0,fallback:!0}}function u(e){const o=e.name||`${e.firstName||""} ${e.lastName||""}`.trim()||"Lead",t=e.phone||`${e.phoneCode||""} ${e.phoneNumber||""}`.trim()||"N/A",r=e.project||e.propertyType||"General Inquiry",c=e.category||e.department||e.formType||"Inquiry",s=encodeURIComponent(`New Lead: ${o} - ${r} (${c})`);let n=`New Website Lead Details:

Name: ${o}
Phone: ${t}
Email: ${e.email||"N/A"}
Project: ${r}
Category: ${c}
`;e.unitType&&e.unitType!=="N/A"&&(n+=`Unit: ${e.unitType}
`),e.contactMode&&(n+=`Contact Mode: ${e.contactMode}
`),e.message&&(n+=`Message: ${e.message}
`);const i=encodeURIComponent(n);window.location.href=`mailto:${p}?subject=${s}&body=${i}`}export{m as s};

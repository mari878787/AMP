const p="info@aadhithyamohanproperties.com";async function u(e){try{const n=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,sourceUrl:window.location.href,submittedAt:new Date().toISOString()})});if(n.ok)return{success:!0,data:await n.json()}}catch(n){console.warn("Backend API unreachable or failed, fallback to mailto dispatch:",n)}return m(e),{success:!0,fallback:!0}}function m(e){const n=e.name||`${e.firstName||""} ${e.lastName||""}`.trim()||"Lead",t=e.phone||`${e.phoneCode||""} ${e.phoneNumber||""}`.trim()||"N/A",c=e.project||e.propertyType||"General Inquiry",r=e.category||e.department||e.formType||"Inquiry",s=encodeURIComponent(`New Lead: ${n} - ${c} (${r})`);let o=`New Website Lead Details:

Name: ${n}
Phone: ${t}
Email: ${e.email||"N/A"}
Project: ${c}
Category: ${r}
`;e.unitType&&e.unitType!=="N/A"&&(o+=`Unit: ${e.unitType}
`),e.contactMode&&(o+=`Contact Mode: ${e.contactMode}
`),e.message&&(o+=`Message: ${e.message}
`);const i=encodeURIComponent(o);window.location.href=`mailto:${p}?subject=${s}&body=${i}`}export{u as s};

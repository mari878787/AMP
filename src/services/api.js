/**
 * AMP Leads API Client Service
 * Sends lead data to the backend server with automatic fallback.
 */

const RECEIVER_EMAIL = 'info@aadhithyamohanproperties.com';

export async function submitLead(leadData) {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...leadData,
        sourceUrl: window.location.href,
        submittedAt: new Date().toISOString()
      })
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    }
  } catch (err) {
    console.warn('Backend API unreachable or failed, fallback to mailto dispatch:', err);
  }

  // Graceful fallback to mailto if backend server is not running
  triggerMailtoFallback(leadData);
  return { success: true, fallback: true };
}

function triggerMailtoFallback(leadData) {
  const fullName = leadData.name || `${leadData.firstName || ''} ${leadData.lastName || ''}`.trim() || 'Lead';
  const phone = leadData.phone || `${leadData.phoneCode || ''} ${leadData.phoneNumber || ''}`.trim() || 'N/A';
  const project = leadData.project || leadData.propertyType || 'General Inquiry';
  const category = leadData.category || leadData.department || leadData.formType || 'Inquiry';

  const subject = encodeURIComponent(`New Lead: ${fullName} - ${project} (${category})`);
  let bodyText = `New Website Lead Details:\n\n` +
    `Name: ${fullName}\n` +
    `Phone: ${phone}\n` +
    `Email: ${leadData.email || 'N/A'}\n` +
    `Project: ${project}\n` +
    `Category: ${category}\n`;

  if (leadData.unitType && leadData.unitType !== 'N/A') bodyText += `Unit: ${leadData.unitType}\n`;
  if (leadData.contactMode) bodyText += `Contact Mode: ${leadData.contactMode}\n`;
  if (leadData.message) bodyText += `Message: ${leadData.message}\n`;

  const body = encodeURIComponent(bodyText);
  window.location.href = `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;
}

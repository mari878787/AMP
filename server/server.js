import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const RECEIVER_EMAIL = process.env.LEADS_RECEIVER_EMAIL || 'info@aadhithyamohanproperties.com';

// Ensure data directory exists for persistent local backup
const DATA_DIR = path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Middleware
app.use(cors());
app.use(express.json());

// Path to compiled frontend dist directory
const DIST_DIR = path.resolve(__dirname, '../dist');

// Serve static assets from dist with explicit MIME types and caching
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
        res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
      } else if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=UTF-8');
      } else if (filePath.endsWith('.webp')) {
        res.setHeader('Content-Type', 'image/webp');
      }
    }
  }));
}

// Transporter configuration
let transporter = null;

const createTransporter = async () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  // Fallback to test account (Ethereal) if no production SMTP is provided
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('ℹ️  Created Ethereal Test SMTP Account for previewing emails:');
    console.log(`   User: ${testAccount.user}`);
    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  } catch (err) {
    console.warn('⚠️ Could not create test SMTP account, logging leads locally instead.');
    return null;
  }
};

(async () => {
  transporter = await createTransporter();
})();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// View all saved leads (admin/testing)
app.get('/api/leads', (req, res) => {
  try {
    const fileContent = fs.readFileSync(LEADS_FILE, 'utf-8');
    const leads = JSON.parse(fileContent || '[]');
    res.json({ success: true, count: leads.length, leads });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Could not read leads file' });
  }
});

// Submit a new lead endpoint
app.post('/api/leads', async (req, res) => {
  try {
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      phoneNumber,
      phoneCode,
      project,
      unitType,
      propertyType,
      category,
      department,
      contactMode,
      message,
      position,
      companyName,
      formType,
      sourceUrl
    } = req.body;

    const leadFullName = name || `${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous Visitor';
    const leadPhone = phone || `${phoneCode || ''} ${phoneNumber || ''}`.trim() || 'Not provided';
    const leadEmail = email || 'Not provided';
    const leadProject = project || propertyType || 'General Inquiry';
    const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const newLead = {
      id: `LEAD-${Date.now()}`,
      name: leadFullName,
      email: leadEmail,
      phone: leadPhone,
      project: leadProject,
      unitType: unitType || 'N/A',
      category: category || department || formType || 'Website Inquiry',
      contactMode: contactMode || 'Callback',
      message: message || '',
      position: position || '',
      companyName: companyName || '',
      sourceUrl: sourceUrl || '',
      timestamp: new Date().toISOString(),
      submittedAtIST: submissionTime
    };

    // 1. Persistent Local File Backup
    try {
      const fileContent = fs.readFileSync(LEADS_FILE, 'utf-8');
      const leads = JSON.parse(fileContent || '[]');
      leads.unshift(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (saveErr) {
      console.error('⚠️ Failed to save lead to local file:', saveErr);
    }

    console.log(`\n📬 [NEW LEAD RECEIVED - ${submissionTime}]`);
    console.log(`👤 Name: ${leadFullName}`);
    console.log(`📞 Phone: ${leadPhone}`);
    console.log(`✉️  Email: ${leadEmail}`);
    console.log(`🏢 Project: ${leadProject}`);
    console.log(`🏷️  Category: ${newLead.category}`);
    if (message) console.log(`💬 Message: ${message}`);

    // 2. Email Formatting and Dispatch
    let previewUrl = null;

    if (!transporter) {
      transporter = await createTransporter();
    }

    if (transporter) {
      const htmlBody = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0d8cf; border-radius: 8px; overflow: hidden;">
          <div style="background: #111111; padding: 28px 24px; text-align: center; border-bottom: 2px solid #b48564;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;">Aadhithya Mohan Properties</h1>
            <p style="color: #b48564; margin: 6px 0 0; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">New Website Lead Notification</p>
          </div>
          
          <div style="padding: 30px 24px;">
            <div style="background: #FAF8F5; border-left: 4px solid #b48564; padding: 14px 16px; margin-bottom: 24px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #8f6b4e; font-weight: 600;">INQUIRY TYPE</span>
              <h2 style="margin: 4px 0 0; font-size: 18px; color: #111111; font-weight: 600;">${newLead.category} &bull; ${leadProject}</h2>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; width: 38%; font-size: 14px;">Customer Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-weight: 600; font-size: 15px;">${leadFullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Phone Number</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-weight: 600; font-size: 15px;"><a href="tel:${leadPhone}" style="color: #b48564; text-decoration: none;">${leadPhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Email Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px;"><a href="mailto:${leadEmail}" style="color: #b48564; text-decoration: none;">${leadEmail}</a></td>
              </tr>
              ${newLead.unitType !== 'N/A' ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Interested Unit</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px;">${newLead.unitType}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Contact Preference</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px;">${newLead.contactMode}</td>
              </tr>
              ${newLead.companyName ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px;">${newLead.companyName}</td>
              </tr>` : ''}
              ${newLead.position ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Designation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px;">${newLead.position}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #777777; font-size: 14px;">Submission Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555555; font-size: 13px;">${submissionTime}</td>
              </tr>
            </table>

            ${message ? `
              <div style="background: #ffffff; border: 1px solid #eeeeee; padding: 16px; border-radius: 6px; margin-top: 10px;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; display: block; margin-bottom: 6px;">Customer Message:</span>
                <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            ` : ''}
          </div>

          <div style="background: #f8f8f8; padding: 16px 24px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #999999;">
            This email was automatically generated from the Aadhithya Mohan Properties website lead system.
          </div>
        </div>
      `;

      const mailOptions = {
        from: `"AMP Website Leads" <${process.env.SMTP_USER || 'leads@aadhithyamohanproperties.com'}>`,
        to: RECEIVER_EMAIL,
        replyTo: leadEmail !== 'Not provided' ? leadEmail : undefined,
        subject: `New Lead: ${leadFullName} - ${leadProject} (${newLead.category})`,
        text: `New Lead Details:\nName: ${leadFullName}\nPhone: ${leadPhone}\nEmail: ${leadEmail}\nProject: ${leadProject}\nCategory: ${newLead.category}\nMessage: ${message || 'N/A'}\nTime: ${submissionTime}`,
        html: htmlBody
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Email dispatched to: ${RECEIVER_EMAIL} (Message ID: ${info.messageId})`);
      
      previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log(`🔗 Ethereal Email Preview URL: ${previewUrl}`);
      }
    }

    return res.json({
      success: true,
      message: 'Thank you! Your inquiry has been received and forwarded to our team.',
      leadId: newLead.id,
      previewUrl: previewUrl || null
    });
  } catch (error) {
    console.error('❌ Error handling lead submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request.'
    });
  }
});

// SPA Routing Fallback: Send index.html for all frontend routes (e.g. /home, /about, /contact)
if (fs.existsSync(DIST_DIR)) {
  app.get('*', (req, res, next) => {
    // Exclude API routes
    if (req.path.startsWith('/api/')) {
      return next();
    }
    // If request has a file extension (like missing .js or .css), return 404 instead of index.html
    if (path.extname(req.path)) {
      return res.status(404).type('text/plain').send('Asset not found');
    }
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 AMP Backend Lead Server running on http://localhost:${PORT}`);
  console.log(`📬 Configured to send leads to: ${RECEIVER_EMAIL}`);
});

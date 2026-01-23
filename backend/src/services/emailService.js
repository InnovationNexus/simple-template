/**
 * Email Service
 * Handles sending emails via Nodemailer
 * Falls back to console logging when SMTP is not configured
 */

const nodemailer = require('nodemailer');
const config = require('../config');

/**
 * Create Nodemailer transporter
 * Returns null if SMTP credentials are not configured
 */
function createTransporter() {
  const { host, port, user, password } = config.mail;

  if (!host || !user || !password) {
    console.warn('📧 Email service running in console-only mode (SMTP not configured)');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass: password,
    },
  });
}

const transporter = createTransporter();

/**
 * Send contact form email
 * @param {object} data - Contact form data
 * @param {string} data.name - Sender name
 * @param {string} data.email - Sender email
 * @param {string} data.subject - Message subject
 * @param {string} data.message - Message content
 * @returns {Promise<{delivered: boolean}>}
 */
async function sendContactEmail({ name, email, subject, message }) {
  const subjectLine = `[Bonsai Club Contact] ${subject} from ${name}`;
  
  const textContent = `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from bonsaiclubofsc.com contact form
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #166534; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #166534; }
    .message { background: white; padding: 15px; border-left: 3px solid #166534; margin-top: 15px; }
    .footer { font-size: 12px; color: #666; margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🌳 New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">From:</span> ${name} (${email})
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${subject}
      </div>
      <div class="message">
        <span class="label">Message:</span>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
      <div class="footer">
        Sent from bonsaiclubofsc.com contact form
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  const mailOptions = {
    from: config.mail.from,
    to: config.mail.to,
    replyTo: email,
    subject: subjectLine,
    text: textContent,
    html: htmlContent,
  };

  if (transporter) {
    try {
      await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent: ${subjectLine}`);
      return { delivered: true };
    } catch (error) {
      console.error('📧 Email delivery failed:', error.message);
      throw error;
    }
  }

  // Fallback: log to console when SMTP isn't configured
  console.log('📧 [Console Mode] Email would be sent:');
  console.log('   To:', mailOptions.to);
  console.log('   Subject:', mailOptions.subject);
  console.log('   From:', `${name} <${email}>`);
  console.log('   Message:', message.substring(0, 100) + (message.length > 100 ? '...' : ''));
  
  return { delivered: false };
}

/**
 * Legacy function for backward compatibility
 */
async function sendInquiry({ name, email, message }) {
  return sendContactEmail({
    name,
    email,
    subject: 'General Inquiry',
    message,
  });
}

module.exports = {
  sendContactEmail,
  sendInquiry,
};

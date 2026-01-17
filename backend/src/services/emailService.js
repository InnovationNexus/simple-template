const nodemailer = require('nodemailer');
const config = require('../config');

function createTransporter() {
  const { host, port, user, password } = config.mail;

  if (!host || !user || !password) {
    // eslint-disable-next-line no-console
    console.warn('Nodemailer transporter created in console-only mode because SMTP credentials are missing.');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });
}

const transporter = createTransporter();

async function sendInquiry({ name, email, message }) {
  const mailOptions = {
    from: config.mail.from,
    to: config.mail.to,
    subject: `Bonsai Club inquiry from ${name || 'interested person'}`,
    text: `A new club inquiry has been submitted.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  if (transporter) {
    await transporter.sendMail(mailOptions);
    return { delivered: true };
  }

  // Fallback to console logging when SMTP isn't configured
  // eslint-disable-next-line no-console
  console.log('Email not sent (missing SMTP config). Message:', mailOptions);
  return { delivered: false };
}

module.exports = {
  sendInquiry,
};

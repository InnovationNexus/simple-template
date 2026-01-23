/**
 * Contact Form Route
 * Handles contact form submissions and inquiry emails
 */

const express = require('express');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();

/**
 * POST /api/contact
 * Submit a contact form message
 */
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  // Validation
  if (!email || !message) {
    return res.status(400).json({
      error: 'Email and message are required.',
    });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Please provide a valid email address.',
    });
  }

  // Message length validation
  if (message.length > 5000) {
    return res.status(400).json({
      error: 'Message is too long. Please limit to 5000 characters.',
    });
  }

  try {
    const result = await sendContactEmail({
      name: name || 'Anonymous',
      email,
      subject: subject || 'General Inquiry',
      message,
    });

    return res.status(200).json({
      status: 'received',
      delivered: result.delivered,
      message: 'Thank you for your message. We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error.message);
    return res.status(500).json({
      error: 'Unable to process your message. Please try again later.',
    });
  }
});

module.exports = router;

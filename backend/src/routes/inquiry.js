const express = require('express');
const { sendInquiry } = require('../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  try {
    const result = await sendInquiry({ name: name || '', email, message });
    return res.status(200).json({ status: 'received', delivered: result.delivered });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send inquiry.' });
  }
});

module.exports = router;

const dotenv = require('dotenv');

dotenv.config();

const requiredEnv = ['MAIL_FROM', 'MAIL_TO'];

function getNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function validateEnvironment() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: missing environment variables: ${missing.join(', ')}`);
  }
}

validateEnvironment();

const config = {
  port: getNumber(process.env.PORT, 5000),
  allowedOrigins: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
    : ['http://localhost:5173'],
  rateLimit: {
    windowMs: getNumber(process.env.RATE_LIMIT_WINDOW_MS, 60 * 1000),
    max: getNumber(process.env.RATE_LIMIT_MAX, 60),
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: getNumber(process.env.MAIL_PORT, 587),
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
  },
};

module.exports = config;

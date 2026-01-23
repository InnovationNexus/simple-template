/**
 * Application Configuration
 * Loads environment variables with sensible defaults
 */

const dotenv = require('dotenv');

dotenv.config();

/**
 * Parse number from environment variable with fallback
 */
function getNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * Parse comma-separated list from environment variable
 */
function getList(value, fallback = []) {
  if (!value) return fallback;
  return value.split(',').map((item) => item.trim()).filter(Boolean);
}

/**
 * Validate required environment variables (warn if missing)
 */
function validateEnvironment() {
  const recommended = ['MAIL_FROM', 'MAIL_TO'];
  const missing = recommended.filter((key) => !process.env[key]);
  
  if (missing.length) {
    console.warn(`⚠️  Missing recommended environment variables: ${missing.join(', ')}`);
    console.warn('   Email functionality will be limited to console logging.');
  }
}

validateEnvironment();

const config = {
  // Server
  port: getNumber(process.env.PORT, 5000),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // CORS
  allowedOrigins: getList(process.env.ALLOWED_ORIGINS, [
    'http://localhost:5173',
    'http://localhost:3000',
  ]),
  
  // Rate limiting
  rateLimit: {
    windowMs: getNumber(process.env.RATE_LIMIT_WINDOW_MS, 60 * 1000), // 1 minute
    max: getNumber(process.env.RATE_LIMIT_MAX, 60), // 60 requests per minute
  },
  
  // Email (Nodemailer)
  mail: {
    host: process.env.MAIL_HOST,
    port: getNumber(process.env.MAIL_PORT, 587),
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM || 'noreply@bonsaiclubofsc.com',
    to: process.env.MAIL_TO || 'info@bonsaiclubofsc.com',
  },
};

module.exports = config;

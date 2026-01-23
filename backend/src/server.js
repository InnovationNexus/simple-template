/**
 * Express Server Entry Point
 * Bonsai Club of South Carolina API
 * 
 * Features:
 * - CORS with configurable origins
 * - Helmet for security headers
 * - Rate limiting
 * - Graceful shutdown
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('./config');

// Route imports
const healthRouter = require('./routes/health');
const contactRouter = require('./routes/contact');
const eventsRouter = require('./routes/events');
const resourcesRouter = require('./routes/resources');

const app = express();

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Limit body size

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || config.allowedOrigins.includes(origin)) {
        callback(null, origin || true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Rate limiting
app.use(
  rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try again later.' },
  })
);

// API Routes
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/events', eventsRouter);
app.use('/api/resources', resourcesRouter);

// Legacy route support (for backward compatibility)
app.use('/api/inquiry', contactRouter);
app.use('/health', healthRouter);

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  // CORS error
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Origin not allowed' });
  }

  // Log error in development
  if (config.nodeEnv === 'development') {
    console.error('Error:', err.message);
  }

  // Generic error response
  return res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(config.port, () => {
  console.log(`🌳 Bonsai Club API listening on port ${config.port}`);
  console.log(`   Environment: ${config.nodeEnv}`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });

  // Force close after 10 seconds
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

module.exports = app;

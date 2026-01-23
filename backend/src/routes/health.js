/**
 * Health Check Route
 * Used for monitoring and load balancer health checks
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'bonsaiclubofsc-api',
    version: process.env.npm_package_version || '1.0.0',
  });
});

module.exports = router;

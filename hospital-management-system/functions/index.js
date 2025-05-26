const functions = require('firebase-functions');
const health = require('./api/health');

exports.api = functions.https.onRequest((req, res) => {
  if (req.path === '/health') {
    return health(req, res);
  }
  res.status(404).json({ error: 'Not found' });
});

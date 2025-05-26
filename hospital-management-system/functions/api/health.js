const admin = require('../config/firebase');

module.exports = async (req, res) => {
  try {
    await admin.firestore().collection('status').doc('health').set({
      status: 'ok',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({ message: 'Health check passed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

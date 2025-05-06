const express = require('express');
const router = express.Router();
const { getUserDetailsController } = require('./controller');

router.get('/get-user-profile/:userId', getUserDetailsController);

module.exports = router;

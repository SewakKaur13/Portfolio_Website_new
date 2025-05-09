const express = require('express');
const router = express.Router();
const { getUserDetailsController, postMessageController } = require('./controller');

router.get('/get-user-profile/:userId', getUserDetailsController);
router.post('/post-message',postMessageController);

module.exports = router;

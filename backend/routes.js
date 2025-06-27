const express = require('express');
const { getFeedbacks,getFeedback, postFeedback, updateFeedback, deleteFeedback } = require('./controlers/dataControler');   
const router = express.Router();


router.get('/', (getFeedbacks));

router.get('/:id', (getFeedback));

router.post('/', (postFeedback));

router.put('/:id', (updateFeedback));

router.delete('/:id', (deleteFeedback));     



module.exports = router;
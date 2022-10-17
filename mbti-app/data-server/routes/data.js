const express = require('express');

const router = express.Router();

const db = require('../controllers/dataControllers');

router.get('/counts', (req, res) => {
  db.getCounts((data) => {
    res.send(data);
  });
});

router.post('/inccount', (req, res) => {
  db.incCounts((msg) => {
    res.send(msg);
  });
});

router.get('/survey', (req, res) => {
  db.getSurvey((data) => {
    console.log(data);
    res.send(data);
  });
});
router.get('/explanation', (req, res) => {
  db.getExplantion((data) => {
    console.log('설명 데이터', data);
    res.send(data);
  });
});

module.exports = router;

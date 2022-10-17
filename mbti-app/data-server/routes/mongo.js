const express = require('express');

const router = express.Router();

const mongoDB = require('../controllers/mongoController');

//데이터를 받아오는 부분이기에 async 사용해야함
router.post('/setdata', async (req, res) => {
  const msg = await mongoDB.setData();
  //자바스크립트 형태이기에 json으로 변경후 보내줌
  res.send(JSON.stringify(msg));
});

router.get('/counts', async (req, res) => {
  const counts = await mongoDB.getCounts();
  res.send(counts);
});

//방문자 수 증가시키는 메서드
router.post('/inccount', async (req, res) => {
  const msg = await mongoDB.incCounts();
  res.send(JSON.stringify(msg));
});

router.get('/getdata', async (req, res) => {
  const data = await mongoDB.getData();
  res.send(data);
});

module.exports = router;

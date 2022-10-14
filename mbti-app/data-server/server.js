const cors = require('cors');
const express = require('express');

const PORT = 3001;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const dataRouter = require('./routes/data');
server.use('/data', dataRouter);

server.listen(PORT, () => {
  console.log(`서버${PORT}를 가동중입니다.`);
});

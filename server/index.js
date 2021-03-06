const express = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routes/index.js');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./db/index.js');

dotenv.config();

const app = express();

app.use(helmet());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan('short'));

app.use(
  cors({
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
  }),
);

app.use(router);

// app.use(express.static(path.join(__dirname + '../dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
})

sequelize.sync().then(() => {
  console.log('DB SYNCED');
})
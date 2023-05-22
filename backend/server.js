const express = require('express');
require('dotenv').config()
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.listen(PORT)
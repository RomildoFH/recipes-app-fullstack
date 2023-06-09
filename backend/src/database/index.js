const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_URI || 'mongodb://localhost:8081/recypesapp';

mongoose.connect(MONGO_DB_URL);

mongoose.Promise = global.Promise;

module.exports = mongoose;
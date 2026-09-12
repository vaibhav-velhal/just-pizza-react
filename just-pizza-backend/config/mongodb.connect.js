const mongoose = require("mongoose");

const url = process.env.MONGO_DB_URL;
const username = process.env.MONGO_DB_US;
const password = process.env.MONGO_DB_PW;
const db = process.env.MONGO_DB_DB;

const dbUrl = `mongodb+srv://${username}:${password}@${url}/${db}`

module.exports = mongoose.connect(dbUrl);
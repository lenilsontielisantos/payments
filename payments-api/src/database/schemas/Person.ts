const mongoose = require('../mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  amount: Number,
  since: Date,
});
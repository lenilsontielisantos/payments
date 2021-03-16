const mongoose = require('../mongoose');

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  amount: Number,
  since: Date,
});

const schema = mongoose.model('Person', personSchema);

export { schema }
const mongoose = require('mongoose');

const usecasesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  experiments: {
    type: Array,
    required: true,
  },
  lastedit: {
    type: Date,
    required: true,
  },
  createdon: {
    type: Date,
    required: true,
  }
});



module.exports = mongoose.model('usecases', usecasesSchema);

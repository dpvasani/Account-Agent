const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  currencyName: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  currencySymbol: {
    type: String,
    required: true,
  },
  currencyPosition: {
    type: String,
    enum: ['before', 'after'],
    default: 'before',
  },
  decimalSeparator: {
    type: String,
    default: '.',
  },
  thousandSeparator: {
    type: String,
    default: ',',
  },
  centPrecision: {
    type: Number,
    default: 2,
  },
  zeroFormat: {
    type: String,
  },
  color: {
    type: String,
  },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Currency', schema);

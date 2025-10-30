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
  branch: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
    autopopulate: true,
  },
  type: {
    type: String,
    enum: ['People', 'Company'],
    default: 'People',
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'Qualified', 'In Negociation', 'Won', 'Lost'],
    default: 'New',
  },
  source: {
    type: String,
    enum: [
      'Website',
      'Linkedin',
      'Social Media',
      'Advertising',
      'Professionals Network',
      'Customer Referral',
      'Sales',
    ],
    default: 'Website',
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  project: {
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

module.exports = mongoose.model('Lead', schema);

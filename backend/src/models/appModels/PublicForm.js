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
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  table: {
    type: String,
    required: true,
  },
  autoReply: {
    type: Boolean,
    default: false,
  },
  autoReplyTitle: {
    type: String,
  },
  autoReplyEmail: {
    type: String,
  },
  autoReplyMessage: {
    type: String,
  },
  branch: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
    autopopulate: true,
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

module.exports = mongoose.model('PublicForm', schema);

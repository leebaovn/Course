const mongoose = require('mongoose');
const { string } = require('joi');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    videoId: { type: String },
    level: { type: String, default: 'Beginner' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', CourseSchema);

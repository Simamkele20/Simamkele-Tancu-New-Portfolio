const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/100x100?text=Profile',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Testimonial', testimonialSchema);

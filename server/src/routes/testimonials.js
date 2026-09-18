const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
  }
});

// GET single testimonial by ID
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    res.status(500).json({ message: 'Error fetching testimonial', error: error.message });
  }
});

// POST new testimonial (public - for seeding data)
router.post('/', async (req, res) => {
  try {
    const { name, title, company, message, image, rating } = req.body;

    if (!name || !title || !message) {
      return res.status(400).json({ message: 'Name, title, and message are required' });
    }

    const testimonial = new Testimonial({
      name,
      title,
      company: company || '',
      message,
      image,
      rating: rating || 5,
    });

    const savedTestimonial = await testimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({ message: 'Error creating testimonial', error: error.message });
  }
});

module.exports = router;

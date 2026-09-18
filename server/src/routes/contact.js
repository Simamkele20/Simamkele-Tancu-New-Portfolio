const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/ContactSubmission');
const { sendContactEmail } = require('../utils/emailer');

// POST new contact submission
router.post('/', async (req, res) => {
  try {
    console.log('Contact form received:', { name: req.body.name, email: req.body.email });
    
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Create contact submission in database
    const contactSubmission = new ContactSubmission({
      name,
      email,
      subject: subject || 'No Subject',
      message,
    });

    const savedSubmission = await contactSubmission.save();
    console.log('Contact saved to DB:', savedSubmission._id);

    // Send email notification asynchronously (don't wait for it)
    sendContactEmail({
      name,
      email,
      subject: subject || 'No Subject',
      message,
    }).catch((emailError) => {
      console.error('Email sending failed:', emailError);
    });

    // Return success immediately after saving to DB
    res.status(201).json({
      message: 'Thank you! Your message has been received. We will get back to you soon.',
      submission: savedSubmission,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      message: 'Error processing contact form', 
      error: error.message 
    });
  }
});

// GET all contact submissions (public - for admin panel later)
router.get('/', async (req, res) => {
  try {
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ message: 'Error fetching submissions', error: error.message });
  }
});

module.exports = router;

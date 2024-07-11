const express = require('express');
const router = express.Router();

// Contact form route
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name ||!email ||!message) {
    return res.status(400).send('Name, email, and message are required.');
  }

  // Save the contact form data to a database or send an email
  //...

  res.status(200).send('Message sent successfully!');
});

// Portfolio item routes
router.get('/portfolio', (req, res) => {
  // Retrieve portfolio items from a database
  //...

  res.json(portfolioItems);
});

router.post('/portfolio', (req, res) => {
  const { title, description, image } = req.body;

  if (!title ||!description ||!image) {
    return res.status(400).send('Title, description, and image are required.');
  }

  // Create a new portfolio item in the database
  //...

  res.status(201).send('Portfolio item created successfully!');
});

router.put('/portfolio/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  if (!title ||!description ||!image) {
    return res.status(400).send('Title, description, and image are required.');
  }

  // Update an existing portfolio item in the database
  //...

  res.status(200).send('Portfolio item updated successfully!');
});

router.delete('/portfolio/:id', (req, res) => {
  const { id } = req.params;

  // Delete a portfolio item from the database
  //...

  res.status(204).send('Portfolio item deleted successfully!');
});

module.exports = router;
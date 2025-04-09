// app.js

// Selectors
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

// Form submission handler
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name ||!email ||!message) {
    alert('Name, email, and message are required.');
    return;
  }

  // Send the form data to the backend server
  //...

  // Reset the form fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Disable the submit button
  submitButton.disabled = true;

  // Show a success message
  alert('Message sent successfully!');
});
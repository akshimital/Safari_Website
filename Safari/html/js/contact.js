const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.querySelector('input[name="myname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Basic form validation
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill out all required fields.');
    return; // Exit the function if validation fails
  }

  // Create a message object to store form data
  const messageData = {
    name,
    email,
    phone,
    subject,
    message,
  };

  // Store message data in local storage
  try {
    localStorage.setItem('contactFormData', JSON.stringify(messageData));
    alert(`Thank you, ${name}! Your message has been submitted.`);
  } catch (error) {
    // Handle potential errors (e.g., storage quota reached)
    alert('An error occurred while saving your message. Please try again later.');
    console.error('Local storage error:', error);
  }

  // Clear the form after successful submission (optional)
  form.reset();
});

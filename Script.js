// Contact Form Submission (Client-side)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (name && email && message) {
    status.innerText = `Thanks, ${name}! Your message has been received.`;
    status.style.color = "green";
    this.reset();
  } else {
    status.innerText = "Please fill in all fields.";
    status.style.color = "red";
  }
});

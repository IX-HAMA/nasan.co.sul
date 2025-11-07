// Simple contact form handler
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('✅ Thank you! Your message has been sent.');
      form.reset();
    });
  }
});
<link rel="stylesheet" href="styles.css">
<script defer src="script.js"></script>

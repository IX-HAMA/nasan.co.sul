document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for contacting nasan.co.sul! We'll get back to you soon.");
  this.reset();
});

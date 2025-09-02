// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting DivineBharatYatra! We'll reach out shortly.");
  this.reset();
});

// Budget Calculator
document.getElementById('budgetForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const days = parseInt(document.getElementById('days').value);
  const tourType = document.getElementById('tourType').value;

  let ratePerDay = 0;

  switch(tourType) {
    case 'budget': ratePerDay = 1000; break;
    case 'classic': ratePerDay = 2000; break;
    case 'premium': ratePerDay = 3000; break;
  }

  const total = days * ratePerDay;
  document.getElementById('result').innerText = `Estimated Budget: ₹${total}`;
});
// Carousel Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 4 seconds


// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert('Thank you for contacting DivineBharatYatra! We will reach out to you shortly.');
//   this.reset();
// });

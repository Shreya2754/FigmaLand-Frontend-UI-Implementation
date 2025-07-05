function openModal() {
  document.getElementById("contact-modal").style.display = "block";
  document.body.classList.add("modal-open");
}


function closeModal() {
  document.getElementById("contact-modal").style.display = "none";
  document.body.classList.remove("modal-open");
}


// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   document.getElementById("success-message").classList.remove("hidden");
// });

// video section 
 
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('demoVideo');
  const wrapper = document.querySelector('.video-wrapper');
  const playIcon = document.getElementById('playIcon');

  const toggleVideo = () => {
    if (video.paused) {
      video.play().then(() => {
        wrapper.classList.remove('paused');
      }).catch((err) => {
        console.error('Video play error:', err);
      });
    } else {
      video.pause();
      wrapper.classList.add('paused');
    }
  };

  // Add click events to both
  wrapper.addEventListener('click', toggleVideo);
  playIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleVideo();
  });

  // Ensure paused state when page loads
  wrapper.classList.add('paused');
  video.pause();
});

// Testimonial section
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
    dots[i].classList.toggle("active-dot", i === index);
  });
  currentIndex = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showTestimonial(i);
    resetInterval();
  });
});

function autoSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 5000);
}

// Initial call
interval = setInterval(autoSlide, 5000);

// Contact us section 

const modal = document.getElementById("contact-modal");

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scroll when modal is open
});

// Optional: close modal when clicked outside
window.onclick = function (e) {
  if (e.target == modal) {
    closeModal();
  }
};

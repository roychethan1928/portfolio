// Welcome message
console.log("Welcome to Chethan Kumar K's portfolio website!");

// Smooth scroll to sections when links are clicked (if you add anchor links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation when "Download Resume" is clicked
const downloadBtn = document.querySelector('.btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    downloadBtn.classList.add('clicked');
    setTimeout(() => {
      downloadBtn.classList.remove('clicked');
    }, 300);
  });
}

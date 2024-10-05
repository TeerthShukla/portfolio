document.addEventListener("DOMContentLoaded", function() {
    // Resume Modal
    const resumeModal = document.getElementById('resume-modal');
    const resumeBtn = document.getElementById('resume-btn');
    const resumeClose = document.getElementById('resume-close');

    resumeBtn.addEventListener('click', function() {
        resumeModal.style.display = 'flex';
    });

    resumeClose.addEventListener('click', function() {
        resumeModal.style.display = 'none';
    });

    // Contact Modal
    const contactModal = document.getElementById('contact-modal');
    const contactBtn = document.getElementById('contact-btn');
    const contactClose = document.getElementById('contact-close');

    contactBtn.addEventListener('click', function() {
        contactModal.style.display = 'flex';
    });

    contactClose.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    // Smooth Scroll Functionality for Navigation Links
    const scrollLinks = document.querySelectorAll('.smooth-scroll');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Close Modal When Clicking Outside
    window.onclick = function(event) {
        if (event.target === resumeModal) {
            resumeModal.style.display = 'none';
        }
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    }
});

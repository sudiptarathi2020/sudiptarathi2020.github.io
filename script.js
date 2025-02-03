// Add any additional JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add smooth scroll to links
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(link.getAttribute('href').indexOf('#'));
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.open(link.getAttribute('href'), '_blank');
            }
        });
    });
});

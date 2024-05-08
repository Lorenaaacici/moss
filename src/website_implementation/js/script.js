document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to navigation links to update the active class
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(lnk => lnk.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');

            // Display an alert to simulate page navigation
            alert('Navigating to: ' + this.textContent);
        });
    });
});

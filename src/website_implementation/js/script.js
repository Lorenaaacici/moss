document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation link changes
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) 
        {
            // Reset all links to default color
            navLinks.forEach(lnk => {
                lnk.classList.remove('active');
                lnk.style.color = '#F0E4BF'; // Non-active link color
            });

            // Highlight the active link
            this.classList.add('active');
            this.style.color = '#FCE293'; // Active link color

        });
    });

    // Handle search bar submission
    const searchForm = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchForm.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const searchTerm = searchInput.value;
        console.log('Search for:', searchTerm); // Log the search term to the console
        // Implement search functionality or redirect as needed
        alert('Search functionality not implemented. You searched for: ' + searchTerm);
    });
});

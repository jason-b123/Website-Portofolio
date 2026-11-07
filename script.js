// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", function() {
    // Automatically close the navbar collapse when a link is clicked (for mobile view)
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (menuToggle.classList.contains('show')) {
                // Use Bootstrap's Collapse API
                let bsCollapse = new bootstrap.Collapse(menuToggle);
                bsCollapse.hide();
            }
        });
    });
});

// Function to include HTML content
function includeHTML(elementId, htmlContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = htmlContent;
        
        // Set active nav item based on current page
        if (elementId === 'navbar-container') {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = element.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }
}

// Navbar HTML content
const navbarHTML = `
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="images/mcs-logo.png" alt="MCS Logo" height="50">
            <span class="ms-2">MCS</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="services.html#retirement">Retirement Benefits</a></li>
                        <li><a class="dropdown-item" href="services.html#funeral">Funeral Cover</a></li>
                        <li><a class="dropdown-item" href="services.html#land">Land Acquisition</a></li>
                        <li><a class="dropdown-item" href="services.html#deposits">Fixed Deposits</a></li>
                        <li><a class="dropdown-item" href="services.html#housing">Affordable Housing</a></li>
                        <li><a class="dropdown-item" href="services.html#loans">Loans</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="projects.html">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="events.html">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="gallery.html">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

// Footer HTML content
const footerHTML = `
<!-- Footer -->
<footer class="bg-dark text-light py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5>Contact Us</h5>
                <p>
                    <i class="fas fa-phone me-2"></i> Phone: +256 783313043<br>
                    <i class="fas fa-envelope me-2"></i> Email: mushanapp@gmail.com<br>
                    <i class="fas fa-location-dot me-2"></i> Address: Kisaasi-Kyanja Road, Kampala, Uganda
                </p>
            </div>
            <div class="col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="about.html" class="text-light">About Us</a></li>
                    <li><a href="services.html" class="text-light">Services</a></li>
                    <li><a href="contact.html" class="text-light">Contact</a></li>
                    <li><a href="faq.html" class="text-light">FAQ</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>Follow Us</h5>
                <div class="social-links">
                    <a href="https://www.facebook.com/share/1Fb4nU4NWD/" class="text-light me-2"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="http://www.youtube.com/@mushanaapp2558" class="text-light me-2"><i class="fab fa-youtube fa-2x"></i></a>
                    <a href="https://vm.tiktok.com/ZMHbDW1JvuhTg-a7qVs/" class="text-light me-2"><i class="fab fa-tiktok fa-2x"></i></a>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
            <p class="mb-0">&copy; 2024 Mushana Multipurpose Cooperative Society. All rights reserved.</p>
        </div>
    </div>
</footer>`;

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load navbar
    includeHTML('navbar-container', navbarHTML);
    
    // Load footer
    includeHTML('footer-container', footerHTML);
}); 
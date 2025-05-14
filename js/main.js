// Initialize Swiper
const heroSwiper = new Swiper('.hero-slider', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'bg-white');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.remove('navbar-scrolled', 'bg-white');
        navbar.classList.add('bg-light');
    }
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check for elements in view
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            // Here you would typically send the form data to your server
            console.log('Form is valid, submitting...');
            // form.submit();
        }
    });
};

// Initialize form validation for all forms
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contactForm');
    validateForm('joinForm');
});

// Mobile menu toggle
const mobileMenuToggle = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }
};

// Initialize mobile menu
mobileMenuToggle();

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-loading')) return;
        
        this.classList.add('btn-loading');
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
        
        // Simulate loading (remove this in production)
        setTimeout(() => {
            this.classList.remove('btn-loading');
            this.innerHTML = originalText;
        }, 1000);
    });
}); 
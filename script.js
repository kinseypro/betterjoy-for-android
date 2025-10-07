// ==========================================
// BetterJoy Website - JavaScript
// Mobile Navigation, Smooth Scrolling, Animations
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Mobile Navigation Toggle
    // ==========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // ==========================================
    // Smooth Scrolling for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // Scroll to Top on Page Load
    // ==========================================
    window.scrollTo(0, 0);
    
    // ==========================================
    // Header Scroll Effect
    // ==========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 10) {
            header.style.boxShadow = '0 4px 16px rgba(29, 33, 37, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(29, 33, 37, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ==========================================
    // Fade-in Animation on Scroll
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateOnScroll = document.querySelectorAll('.feature-card, .value-card, .step-card, .info-card, .faq-item, .requirement-item, .alt-download-card');
    
    animateOnScroll.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
    
    // ==========================================
    // Active Navigation Link Highlighting
    // ==========================================
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage || (currentPage === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // ==========================================
    // Form Button Hover Effect Enhancement
    // ==========================================
    const formButton = document.querySelector('.btn-form');
    if (formButton) {
        formButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        formButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // ==========================================
    // Download Button Animation
    // ==========================================
    const downloadButtons = document.querySelectorAll('.btn-download-main, .btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ==========================================
    // Card Tilt Effect (Subtle 3D Effect)
    // ==========================================
    const cards = document.querySelectorAll('.feature-card, .value-card, .info-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ==========================================
    // Loading Animation Prevention
    // ==========================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ==========================================
    // Prevent Scroll Restoration on Page Load
    // ==========================================
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    // ==========================================
    // External Links - Open in New Tab
    // ==========================================
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([target="_blank"])');
    externalLinks.forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ==========================================
    // Console Welcome Message
    // ==========================================
    console.log('%c BetterJoy Website ', 'background: #558EFF; color: #FFFFFF; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
    console.log('%c Built with ❤️ | Modern, Responsive, Professional ', 'color: #1D2125; font-size: 12px;');
});

// ==========================================
// Utility Functions
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

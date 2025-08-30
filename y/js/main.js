// Navegación suave y efectos de scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Salir si no hay navbar
    
    const navbarHeight = navbar.offsetHeight;
    
    // Efecto de navbar al hacer scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Actualizar enlace activo en la navegación
        const scrollPosition = window.scrollY + navbarHeight + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Ejecutar al cargar la página
    handleScroll();
    
    // Escuchar evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Navegación suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + 
                                     window.pageYOffset - 
                                     (navbar.offsetHeight + 20);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Inicializar tooltips si Bootstrap está disponible
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Inicializar popovers
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.forEach(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }
    
    // Animaciones al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    }
    
    // Ejecutar animaciones al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Efecto de carga inicial
    document.body.classList.add('loaded');
    
    // Animación de contador
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        if (!counters.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target') || '0');
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Inicializar contadores
    initCounters();
});

/**
 * Contact Form Handling
 */
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    // Form elements
    const formElements = {
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        subject: document.querySelector('#subject'),
        message: document.querySelector('#message'),
        submitBtn: contactForm.querySelector('button[type="submit"]')
    };
    
    // Original button content for reset
    const originalBtnContent = formElements.submitBtn.innerHTML;
    
    // Form validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        phone: {
            required: false,
            pattern: /^[0-9\s+\-()]*$/,
            minLength: 8,
            maxLength: 20
        },
        subject: {
            required: true,
            minLength: 5,
            maxLength: 100
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000
        }
    };
    
    // Error messages
    const errorMessages = {
        required: 'Este campo es obligatorio',
        email: 'Por favor ingresa un correo electrónico válido',
        pattern: 'Formato inválido',
        minLength: 'Demasiado corto (mínimo {min} caracteres)',
        maxLength: 'Demasiado largo (máximo {max} caracteres)'
    };
    
    /**
     * Show error for a form field
     */
    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;
        
        // Remove existing error if any
        const existingError = formGroup.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error class
        field.classList.add('is-invalid');
        
        // Create and append error message
        const errorElement = document.createElement('div');
        errorElement.className = 'invalid-feedback';
        errorElement.textContent = message;
        
        // Add shake animation
        field.classList.add('shake-animation');
        setTimeout(() => {
            field.classList.remove('shake-animation');
        }, 500);
        
        formGroup.appendChild(errorElement);
    }
    
    /**
     * Remove error from a form field
     */
    function removeError(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;
        
        field.classList.remove('is-invalid');
        const errorElement = formGroup.querySelector('.invalid-feedback');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    /**
     * Validate a single field based on rules
     */
    function validateField(fieldName) {
        const field = formElements[fieldName];
        if (!field) return true; // Skip if field doesn't exist
        
        const value = field.value.trim();
        const rules = validationRules[fieldName];
        
        // Skip validation if field is not required and empty
        if (!rules.required && !value) {
            removeError(field);
            return true;
        }
        
        // Check required
        if (rules.required && !value) {
            showError(field, errorMessages.required);
            return false;
        }
        
        // Check min length
        if (rules.minLength && value.length < rules.minLength) {
            showError(field, errorMessages.minLength.replace('{min}', rules.minLength));
            return false;
        }
        
        // Check max length
        if (rules.maxLength && value.length > rules.maxLength) {
            showError(field, errorMessages.maxLength.replace('{max}', rules.maxLength));
            return false;
        }
        
        // Check pattern
        if (rules.pattern && !rules.pattern.test(value)) {
            showError(field, errorMessages[fieldName === 'email' ? 'email' : 'pattern']);
            return false;
        }
        
        // If all validations pass
        removeError(field);
        return true;
    }
    
    /**
     * Validate the entire form
     */
    function validateForm() {
        let isValid = true;
        
        // Validate each field
        Object.keys(validationRules).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    /**
     * Handle form submission
     */
    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = contactForm.querySelector('.is-invalid');
            if (firstError) {
                firstError.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Add shake animation to the first error field
                firstError.classList.add('shake-animation');
                setTimeout(() => {
                    firstError.classList.remove('shake-animation');
                }, 500);
            }
            return;
        }
        
        // Prepare form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        formElements.submitBtn.disabled = true;
        formElements.submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Enviando...
        `;
        
        try {
            // Simulate API call (replace with actual fetch/axios call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            showErrorMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            console.error('Form submission error:', error);
            
        } finally {
            // Reset button state
            formElements.submitBtn.disabled = false;
            formElements.submitBtn.innerHTML = originalBtnContent;
        }
    }
    
    /**
     * Show success message
     */
    function showSuccessMessage() {
        // Hide form
        contactForm.style.opacity = '0';
        contactForm.style.height = '0';
        contactForm.style.overflow = 'hidden';
        contactForm.style.margin = '0';
        contactForm.style.padding = '0';
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-4';
        successMessage.style.animation = 'fadeIn 0.5s ease-out';
        successMessage.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-check-circle fs-4 me-3"></i>
                <div>
                    <h5 class="alert-heading mb-1">¡Mensaje enviado con éxito!</h5>
                    <p class="mb-0">Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
            </div>
        `;
        
        // Insert after form
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        // Reset form after delay
        setTimeout(() => {
            // Fade out success message
            successMessage.style.opacity = '0';
            successMessage.style.transition = 'opacity 0.5s ease';
            
            // Show form again
            setTimeout(() => {
                successMessage.remove();
                contactForm.style.opacity = '1';
                contactForm.style.height = 'auto';
                contactForm.style.overflow = 'visible';
                contactForm.style.margin = '';
                contactForm.style.padding = '';
            }, 500);
            
        }, 5000);
    }
    
    /**
     * Show error message
     */
    function showErrorMessage(message) {
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger mt-4';
        errorMessage.style.animation = 'fadeIn 0.5s ease-out';
        errorMessage.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-exclamation-circle fs-4 me-3"></i>
                <div>
                    <h5 class="alert-heading mb-1">Error</h5>
                    <p class="mb-0">${message}</p>
                </div>
            </div>
        `;
        
        // Insert before form
        contactForm.parentNode.insertBefore(errorMessage, contactForm);
        
        // Auto-remove after delay
        setTimeout(() => {
            errorMessage.style.opacity = '0';
            errorMessage.style.transition = 'opacity 0.5s ease';
            setTimeout(() => errorMessage.remove(), 500);
        }, 5000);
    }
    
    // Event Listeners
    contactForm.addEventListener('submit', handleSubmit);
    
    // Real-time validation on blur
    Object.keys(validationRules).forEach(fieldName => {
        const field = formElements[fieldName];
        if (field) {
            // Validate on blur
            field.addEventListener('blur', () => validateField(fieldName));
            
            // Remove error on input
            field.addEventListener('input', () => {
                if (field.classList.contains('is-invalid')) {
                    removeError(field);
                }
            });
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add animation classes after a short delay to allow for page rendering
    setTimeout(() => {
        document.body.classList.add('loaded');
        animateOnScroll();
    }, 100);
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

/**
 * Testimonials Carousel Enhancement
 */
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsCarousel = document.querySelector('#testimonialsCarousel');
    if (!testimonialsCarousel) return;
    
    // Initialize Bootstrap carousel with custom options
    const carousel = new bootstrap.Carousel(testimonialsCarousel, {
        interval: 6000, // 6 seconds
        wrap: true,
        touch: true
    });
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    testimonialsCarousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    testimonialsCarousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50; // minimum distance for swipe
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                carousel.next();
            } else {
                // Swipe right - previous slide
                carousel.prev();
            }
        }
    }
    
    // Pause carousel on hover
    testimonialsCarousel.addEventListener('mouseenter', function() {
        carousel.pause();
    });
    
    testimonialsCarousel.addEventListener('mouseleave', function() {
        carousel.cycle();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (testimonialsCarousel.matches(':hover')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                carousel.prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                carousel.next();
            }
        }
    });
    
    // Animate stars on slide change
    testimonialsCarousel.addEventListener('slide.bs.carousel', function(e) {
        const activeSlide = e.relatedTarget;
        const stars = activeSlide.querySelectorAll('.stars i');
        
        // Reset and animate stars
        stars.forEach((star, index) => {
            star.style.transform = 'scale(0)';
            star.style.opacity = '0';
            
            setTimeout(() => {
                star.style.transition = 'all 0.3s ease';
                star.style.transform = 'scale(1)';
                star.style.opacity = '1';
            }, index * 100 + 300);
        });
    });
    
    // Add intersection observer for testimonials section
    const testimonialsSection = document.querySelector('#testimonios');
    if (testimonialsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class to testimonial cards when in view
                    const cards = entry.target.querySelectorAll('.testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(testimonialsSection);
        
        // Initially hide cards for animation
        const cards = testimonialsSection.querySelectorAll('.testimonial-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    }
    
    // Initialize additional testimonials carousel
    const additionalCarousel = document.querySelector('#additionalTestimonialsCarousel');
    if (additionalCarousel) {
        const additionalCarouselInstance = new bootstrap.Carousel(additionalCarousel, {
            interval: 7000,
            wrap: true,
            touch: true
        });
        
        // Add touch support for additional carousel
        let additionalStartX = 0;
        let additionalEndX = 0;
        
        additionalCarousel.addEventListener('touchstart', function(e) {
            additionalStartX = e.touches[0].clientX;
        });
        
        additionalCarousel.addEventListener('touchend', function(e) {
            additionalEndX = e.changedTouches[0].clientX;
            handleAdditionalSwipe();
        });
        
        function handleAdditionalSwipe() {
            const threshold = 50;
            const diff = additionalStartX - additionalEndX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    additionalCarouselInstance.next();
                } else {
                    additionalCarouselInstance.prev();
                }
            }
        }
        
        // Pause on hover
        additionalCarousel.addEventListener('mouseenter', function() {
            additionalCarouselInstance.pause();
        });
        
        additionalCarousel.addEventListener('mouseleave', function() {
            additionalCarouselInstance.cycle();
        });
        
        // Animate Facebook-style comments on slide change
        additionalCarousel.addEventListener('slide.bs.carousel', function(e) {
            const activeSlide = e.relatedTarget;
            const comments = activeSlide.querySelectorAll('.facebook-style-comment');
            
            comments.forEach((comment, index) => {
                comment.style.opacity = '0';
                comment.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    comment.style.transition = 'all 0.4s ease';
                    comment.style.opacity = '1';
                    comment.style.transform = 'translateY(0)';
                }, index * 150 + 200);
            });
        });
    }
});

/**
 * Enhanced Facebook Comments Plugin Handler
 */
document.addEventListener('DOMContentLoaded', function() {
    const fbLoading = document.getElementById('fb-loading');
    const fbFallback = document.getElementById('fb-fallback');
    const fbComments = document.querySelector('.fb-comments');
    
    // Detect localhost environment
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' || 
                       window.location.hostname === '' ||
                       window.location.protocol === 'file:';
    
    if (isLocalhost) {
        // For localhost, immediately show fallback system
        console.log('🚀 Modo desarrollo: Mostrando sistema de comentarios local');
        if (fbLoading) fbLoading.style.display = 'none';
        if (fbFallback) fbFallback.style.display = 'block';
        
        // Hide Facebook comments div in localhost
        if (fbComments) fbComments.style.display = 'none';
        
        // Show development mode indicator
        const devIndicator = document.getElementById('dev-indicator');
        if (devIndicator) devIndicator.style.display = 'block';
    } else {
        // Production environment - try to load Facebook
        if (fbLoading) {
            fbLoading.style.display = 'block';
        }
        
        // Check Facebook SDK loading
        let fbCheckAttempts = 0;
        const maxAttempts = 10;
        
        function checkFacebookLoaded() {
            fbCheckAttempts++;
            
            if (window.FB && document.querySelector('.fb-comments iframe')) {
                // Facebook loaded successfully
                if (fbLoading) fbLoading.style.display = 'none';
                console.log('Facebook Comments loaded successfully');
            } else if (fbCheckAttempts >= maxAttempts) {
                // Facebook failed to load, show fallback
                if (fbLoading) fbLoading.style.display = 'none';
                if (fbFallback) fbFallback.style.display = 'block';
                console.log('Facebook Comments failed to load, showing fallback');
            } else {
                // Keep checking
                setTimeout(checkFacebookLoaded, 1000);
            }
        }
        
        // Start checking after initial delay
        setTimeout(checkFacebookLoaded, 2000);
    }
    
    // Initialize star rating system
    initializeStarRating();
    
    // Initialize alternative comment form
    initializeCommentForm();
});

/**
 * Retry Facebook Comments Loading
 */
function retryFacebookComments() {
    const fbLoading = document.getElementById('fb-loading');
    const fbFallback = document.getElementById('fb-fallback');
    
    if (fbFallback) fbFallback.style.display = 'none';
    if (fbLoading) fbLoading.style.display = 'block';
    
    // Try to reload Facebook SDK
    if (window.FB) {
        window.FB.XFBML.parse();
    }
    
    // Check again after delay
    setTimeout(() => {
        if (!document.querySelector('.fb-comments iframe')) {
            if (fbLoading) fbLoading.style.display = 'none';
            if (fbFallback) fbFallback.style.display = 'block';
        } else {
            if (fbLoading) fbLoading.style.display = 'none';
        }
    }, 3000);
}

/**
 * Initialize Star Rating System
 */
function initializeStarRating() {
    const starRating = document.querySelector('.star-rating');
    if (!starRating) return;
    
    const stars = starRating.querySelectorAll('i');
    let selectedRating = 0;
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            highlightStars(index + 1);
        });
        
        star.addEventListener('mouseleave', () => {
            highlightStars(selectedRating);
        });
        
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            highlightStars(selectedRating);
            
            // Store rating value
            starRating.setAttribute('data-rating', selectedRating);
        });
    });
    
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('far');
                star.classList.add('fas', 'active');
            } else {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            }
        });
    }
}

/**
 * Initialize Alternative Comment Form
 */
function initializeCommentForm() {
    const commentForm = document.querySelector('.simple-comment-form');
    if (!commentForm) return;
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(commentForm);
        const name = commentForm.querySelector('input[type="text"]').value;
        const email = commentForm.querySelector('input[type="email"]').value;
        const comment = commentForm.querySelector('textarea').value;
        const rating = document.querySelector('.star-rating')?.getAttribute('data-rating') || 0;
        
        if (!name || !email || !comment || rating === 0) {
            showAlert('Por favor completa todos los campos y selecciona una calificación.', 'warning');
            return;
        }
        
        // Simulate form submission
        const submitBtn = commentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Enviando...';
        
        setTimeout(() => {
            // Add comment to local display
            addLocalComment(name, comment, rating);
            
            showAlert('¡Comentario agregado! En producción se enviará para moderación.', 'success');
            commentForm.reset();
            
            // Reset star rating
            const stars = document.querySelectorAll('.star-rating i');
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            document.querySelector('.star-rating')?.removeAttribute('data-rating');
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    });
}

/**
 * Add comment to local display
 */
function addLocalComment(name, comment, rating) {
    const localComments = document.getElementById('local-comments');
    if (!localComments) return;
    
    const starsHtml = Array.from({length: 5}, (_, i) => 
        `<i class="fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}"></i>`
    ).join('');
    
    const commentHtml = `
        <div class="local-comment-item mb-3">
            <div class="d-flex align-items-start">
                <div class="comment-avatar me-3">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-1">
                        <h6 class="mb-0">${name}</h6>
                        <small class="text-muted">ahora</small>
                    </div>
                    <div class="comment-stars mb-2">
                        ${starsHtml}
                    </div>
                    <p class="mb-0 text-muted">${comment}</p>
                </div>
            </div>
        </div>
    `;
    
    // Insert at the beginning (after the title)
    const title = localComments.querySelector('h6');
    title.insertAdjacentHTML('afterend', commentHtml);
}

/**
 * Show Alert Message
 */
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.querySelector('.simple-comment-form');
    if (form) {
        form.parentNode.insertBefore(alertDiv, form.nextSibling);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

/**
 * Facebook Comments Plugin Management
 */
class FacebookCommentsManager {
    constructor() {
        this.isLoaded = false;
        this.retryCount = 0;
        this.maxRetries = 3;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkFacebookStatus();
        this.setupStarRating();
    }

    setupEventListeners() {
        // Listen for Facebook SDK events
        if (typeof FB !== 'undefined') {
            FB.Event.subscribe('xfbml.render', () => {
                this.onFacebookLoaded();
            });
            
            FB.Event.subscribe('xfbml.error', () => {
                this.onFacebookError();
            });
        }

        // Setup retry button
        const retryBtn = document.querySelector('[onclick="retryFacebookComments()"]');
        if (retryBtn) {
            retryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.retryLoad();
            });
        }
    }

    checkFacebookStatus() {
        // Check if Facebook SDK is loaded
        if (typeof FB !== 'undefined') {
            this.isLoaded = true;
            this.hideLoading();
        } else {
            // Wait a bit more for SDK to load
            setTimeout(() => {
                if (typeof FB === 'undefined') {
                    this.showFallback();
                }
            }, 5000);
        }
    }

    onFacebookLoaded() {
        console.log('✅ Facebook Comments cargados exitosamente');
        this.isLoaded = true;
        this.hideLoading();
        this.hideFallback();
        this.showSuccessMessage();
    }

    onFacebookError() {
        console.error('❌ Error al cargar Facebook Comments');
        this.showFallback();
        this.showErrorMessage();
    }

    hideLoading() {
        const loading = document.getElementById('fb-loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    hideFallback() {
        const fallback = document.getElementById('fb-fallback');
        if (fallback) {
            fallback.style.display = 'none';
        }
    }

    showFallback() {
        this.hideLoading();
        const fallback = document.getElementById('fb-fallback');
        if (fallback) {
            fallback.style.display = 'block';
        }
    }

    retryLoad() {
        if (this.retryCount >= this.maxRetries) {
            this.showMaxRetriesMessage();
            return;
        }

        this.retryCount++;
        console.log(`🔄 Reintentando carga de Facebook Comments (${this.retryCount}/${this.maxRetries})`);

        const loading = document.getElementById('fb-loading');
        const fallback = document.getElementById('fb-fallback');
        
        if (loading) loading.style.display = 'block';
        if (fallback) fallback.style.display = 'none';

        // Force Facebook to re-render
        if (typeof FB !== 'undefined' && FB.XFBML) {
            FB.XFBML.parse();
        }

        // Show retry message
        this.showRetryMessage();
    }

    setupStarRating() {
        const starRating = document.querySelector('.star-rating');
        if (!starRating) return;

        const stars = starRating.querySelectorAll('i');
        let currentRating = 0;

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                currentRating = index + 1;
                this.updateStarDisplay(stars, currentRating);
                starRating.setAttribute('data-rating', currentRating);
            });

            star.addEventListener('mouseenter', () => {
                this.updateStarDisplay(stars, index + 1);
            });

            star.addEventListener('mouseleave', () => {
                this.updateStarDisplay(stars, currentRating);
            });
        });
    }

    updateStarDisplay(stars, rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('far');
                star.classList.add('fas', 'filled');
            } else {
                star.classList.remove('fas', 'filled');
                star.classList.add('far');
            }
        });
    }

    showSuccessMessage() {
        this.showMessage('¡Plugin de Facebook cargado exitosamente!', 'success');
    }

    showErrorMessage() {
        this.showMessage('Error al cargar el plugin de Facebook. Usando sistema alternativo.', 'error');
    }

    showRetryMessage() {
        this.showMessage(`Reintentando carga... (${this.retryCount}/${this.maxRetries})`, 'info');
    }

    showMaxRetriesMessage() {
        this.showMessage('Se alcanzó el máximo de reintentos. Usando sistema alternativo.', 'warning');
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `facebook-${type} mt-3`;
        messageDiv.innerHTML = `
            <i class="fas fa-${this.getIconForType(type)}"></i>
            <p class="mb-0">${message}</p>
        `;

        const container = document.querySelector('.facebook-comments-container');
        if (container) {
            container.insertBefore(messageDiv, container.firstChild);
            
            // Auto-remove after 5 seconds
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }

    getIconForType(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

/**
 * Initialize Facebook Comments Manager when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Facebook Comments Manager
    window.facebookCommentsManager = new FacebookCommentsManager();
    
    // Setup form submission for local comments
    setupLocalCommentForm();
});

/**
 * Setup local comment form functionality
 */
function setupLocalCommentForm() {
    const form = document.querySelector('.simple-comment-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const comment = form.querySelector('textarea').value;
        const rating = form.querySelector('.star-rating')?.getAttribute('data-rating') || 0;
        
        if (!name || !email || !comment || rating === 0) {
            showAlert('Por favor completa todos los campos y selecciona una calificación.', 'warning');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Enviando...';
        
        setTimeout(() => {
            // Add comment to local display
            addLocalComment(name, comment, rating);
            
            showAlert('¡Comentario agregado exitosamente!', 'success');
            form.reset();
            
            // Reset star rating
            const stars = form.querySelectorAll('.star-rating i');
            stars.forEach(star => {
                star.classList.remove('fas', 'filled');
                star.classList.add('far');
            });
            form.querySelector('.star-rating')?.removeAttribute('data-rating');
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    });
}

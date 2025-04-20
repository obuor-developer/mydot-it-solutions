document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);
    }
    
    // Testimonial Slider
    const testimonialContainer = document.querySelector('.testimonial-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (testimonialContainer && prevBtn && nextBtn) {
        let testimonialIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        
        prevBtn.addEventListener('click', () => {
            testimonialIndex = Math.max(testimonialIndex - 1, 0);
            updateTestimonialPosition();
        });
        
        nextBtn.addEventListener('click', () => {
            testimonialIndex = Math.min(testimonialIndex + 1, testimonials.length - 1);
            updateTestimonialPosition();
        });
        
        function updateTestimonialPosition() {
            testimonialContainer.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        }
    }
});
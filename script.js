document.addEventListener('DOMContentLoaded', function() {
    // Image Carousel Functionality
    const images = document.querySelectorAll('.image-carousel img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;
    let intervalId;

    // Initialize the carousel
    function initCarousel() {
        updateSlide(0);
        startAutoRotate();
        
        // Add click event for navigation arrows
        leftArrow.addEventListener('click', handleLeftArrowClick);
        rightArrow.addEventListener('click', handleRightArrowClick);
        
        // Add click events for thumbnails
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => handleThumbnailClick(index));
        });
    }

    // Update the current slide
    function updateSlide(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Show the selected image
        images[index].classList.add('active');
        thumbnails[index].classList.add('active');
        
        currentIndex = index;
    }

    // Go to next slide
    function nextSlide() {
        const newIndex = (currentIndex + 1) % images.length;
        updateSlide(newIndex);
    }

    // Go to previous slide
    function prevSlide() {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide(newIndex);
    }

    // Auto-rotate slides every 5 seconds
    function startAutoRotate() {
        intervalId = setInterval(nextSlide, 5000);
    }

    // Stop auto-rotation
    function stopAutoRotate() {
        clearInterval(intervalId);
    }

    // Handle left arrow click
    function handleLeftArrowClick() {
        stopAutoRotate();
        prevSlide();
        setTimeout(startAutoRotate, 10000); // Restart after 10 seconds
    }

    // Handle right arrow click
    function handleRightArrowClick() {
       
        stopAutoRotate();
        nextSlide();
        setTimeout(startAutoRotate, 10000); // Restart after 10 seconds
    }

    // Handle thumbnail click
    function handleThumbnailClick(index) {
        stopAutoRotate();
        updateSlide(index);
        setTimeout(startAutoRotate, 10000); // Restart after 10 seconds
    }

    // Initialize button hover effects
    function initButtonEffects() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 12px rgba(230, 0, 18, 0.4)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 8px rgba(230, 0, 18, 0.3)';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(1px)';
                this.style.boxShadow = '0 2px 4px rgba(230, 0, 18, 0.3)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 12px rgba(230, 0, 18, 0.4)';
            });
        });
    }

    // Initialize heart icon toggle
    function initHeartIcon() {
        const heartIcon = document.querySelector('.heart-icon');
        if (heartIcon) {
            heartIcon.addEventListener('click', function() {
                this.classList.toggle('bxs-heart');
                this.classList.toggle('bx-heart');
                
                if (this.classList.contains('bxs-heart')) {
                    this.style.color = '#e60012';
                    // Here you could add to favorites functionality
                } else {
                    this.style.color = '#ccc';
                    // Here you could remove from favorites functionality
                }
            });
        }
    }

    // Initialize read more functionality
    function initReadMore() {
        const readMore = document.querySelector('.read-more');
        if (readMore) {
            readMore.addEventListener('click', function() {
                // This would expand the full description
                // You would need to add the full content and toggle it
                alert('Full description would be shown here');
            });
        }
    }

    // Initialize all functionality
    function initAll() {
        initCarousel();
        initButtonEffects();
        initHeartIcon();
        initReadMore();
    }

    // Start everything
    initAll();
});

//slider code

  const slider = document.getElementById('cardSlider');
  const leftBtn = document.querySelector('.slide-btn.left');
  const rightBtn = document.querySelector('.slide-btn.right');

  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -220, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 220, behavior: 'smooth' });
  });


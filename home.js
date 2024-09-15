document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector("#theme-switch");
    const body = document.body;

    const switchTheme = (theme) => {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            toggleSwitch.checked = true;
        } else {
            body.classList.remove("dark-mode");
            toggleSwitch.checked = false;
        }
    };

    // Apply the saved theme preference immediately on load
    const currentTheme = localStorage.getItem("theme") || "light";
    switchTheme(currentTheme);

    // Toggle theme on user action
    toggleSwitch.addEventListener("change", () => {
        const theme = toggleSwitch.checked ? "dark" : "light";
        switchTheme(theme);
        localStorage.setItem("theme", theme);
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});


//hero section//

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    const socialIcons = document.querySelectorAll('.social-icon');

    contactBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });

    contactBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    contactBtn.addEventListener('click', function() {
        alert('Contact form functionality to be implemented.');
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });

        icon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Social media link functionality to be implemented.');
        });
    });
});

//company logo//

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.logo-carousel');
    const slides = document.querySelectorAll('.logo-slide');

    // Pause animation on hover
    carousel.addEventListener('mouseenter', () => {
        slides.forEach(slide => {
            slide.style.animationPlayState = 'paused';
        });
    });

    carousel.addEventListener('mouseleave', () => {
        slides.forEach(slide => {
            slide.style.animationPlayState = 'running';
        });
    });

    // Function to check if the first slide is completely out of view
    function checkSlidePosition() {
        const firstSlide = slides[0];
        const slideWidth = firstSlide.offsetWidth;
        const currentPosition = parseInt(getComputedStyle(firstSlide).transform.split(',')[4]);

        if (Math.abs(currentPosition) >= slideWidth) {
            // Move the first slide to the end
            carousel.appendChild(firstSlide);
            // Reset the transform of the moved slide
            firstSlide.style.transform = 'translateX(0)';
        }

        requestAnimationFrame(checkSlidePosition);
    }

    // Start checking the slide position
    checkSlidePosition();
});

//portfolio gallery//

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
// Lightbox functionality
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});



    //footer//

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        
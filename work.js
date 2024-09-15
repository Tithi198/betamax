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

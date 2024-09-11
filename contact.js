//header//

        // Day/Night Mode Toggle
        const toggleSwitch = document.querySelector("#theme-switch");
        const body = document.body;

        toggleSwitch.addEventListener("change", () => {
            if (toggleSwitch.checked) {
                body.classList.add("dark-mode");
            } else {
                body.classList.remove("dark-mode");
            }
        });

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });



        //contact//

        // Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}





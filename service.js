//header//

        // Day/Night Mode Toggle//
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


        //pricing

        function showToast() {
            var toast = document.getElementById("toast");
            toast.className = "show";
            setTimeout(function () {
              toast.className = toast.className.replace("show", "");
            }, 2500);
          }

        
        //footer//

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        //testimonial//

        const carousel = document.getElementById('carousel');
        const radioInputs = document.querySelectorAll('input[name="position"]');
        let currentPosition = 1;
        const totalSlides = radioInputs.length;

        function moveCarousel() {
            currentPosition = (currentPosition % totalSlides) + 1;
            carousel.style.setProperty('--position', currentPosition);
            radioInputs[currentPosition - 1].checked = true;
        }

        // Set interval for automatic movement (5000ms = 5 seconds)
        setInterval(moveCarousel, 2000);

        // Optional: Add event listeners to radio inputs for manual control
        radioInputs.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                currentPosition = index + 1;
                carousel.style.setProperty('--position', currentPosition);
            });
        });

        // Toggle dark mode (if you want to keep this functionality)
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
        
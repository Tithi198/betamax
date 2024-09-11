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

        //personal details//
        
        // Text animation logic
        const words = ["Frontend developer", "Web Designer", "Graphics Designer", "Photographer"];
        let wordIndex = 0;
        const spanElement = document.getElementById("animatedText");

        function changeWord() {
            spanElement.innerHTML = words[wordIndex];
            wordIndex = (wordIndex + 1) % words.length;
        }

        setInterval(changeWord, 2000); // Change every 3 seconds
        
        //personal details//


        //skill bar//

        document.addEventListener('DOMContentLoaded', () => {
            const skills = document.querySelectorAll('.skill');
        
            function increasePercentage(skillElement) {
                const circle = skillElement.querySelector('.circles');
                const percentage = skillElement.getAttribute('data-percentage');
        
                // Animate the progress bars smoothly
                let startValue = 0;
                const duration = 1500;
                const stepTime = Math.abs(Math.floor(duration / percentage));
        
                let interval = setInterval(() => {
                    startValue += 1;
                    if (startValue <= percentage) {
                        circle.style.background = `conic-gradient(var(--circle-fill) ${startValue}%, var(--circle-bg) 0%)`;
                        circle.innerHTML = `${startValue}%`;
                    } else {
                        clearInterval(interval);
                    }
                }, stepTime);
            }
        
            // Trigger the progress animation on page load
            skills.forEach(skill => {
                increasePercentage(skill);
            });
        });
        

        //newsletter//
        
        function showToast() {
            var toast = document.getElementById("toast");
            toast.className = "toast show";
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        }
        
            //footer//

            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            

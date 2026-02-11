window.addEventListener('load', () => {
            const loader = document.getElementById('loader');

            setTimeout(() => {
                loader.style.opacity = '0';
                document.body.classList.add('content-ready'); // Ini akan memicu #main-content jadi opacity 1

                setTimeout(() => {
                    loader.style.display = 'none';
                }, 700);
            }, 1500);
        });

        // Script untuk Mobile Menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.dot');

        function updateDots(index) {
            dots.forEach(dot => dot.classList.replace('bg-white', 'bg-white/30'));

            // Logika pemetaan slide ke dot
            if (index < 2) dots[0].classList.replace('bg-white/30', 'bg-white');      // Slide 0,1 pakai Dot 1
            else if (index < 4) dots[1].classList.replace('bg-white/30', 'bg-white'); // Slide 2,3 pakai Dot 2
            else dots[2].classList.replace('bg-white/30', 'bg-white');               // Slide 4 pakai Dot 3
        }

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.add('hidden', 'opacity-0', 'scale-95');
                if (i === index) {
                    slide.classList.remove('hidden');
                    setTimeout(() => {
                        slide.classList.remove('opacity-0', 'scale-95');
                        slide.classList.add('opacity-100', 'scale-100');
                    }, 50);
                }
            });
            updateDots(index);
        }

        // Fungsi jika dot diklik langsung
        function goToSlideGroup(dotIndex) {
            const mapping = [0, 2, 4]; // Dot 0 ke slide 0, Dot 1 ke slide 2, Dot 2 ke slide 4
            currentSlide = mapping[dotIndex];
            showSlide(currentSlide);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 4000);
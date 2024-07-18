        function countdownTimer() {
            const countdownElement = document.getElementById('countdown');
            let countDownDate = localStorage.getItem('countDownDate');

            // If there's no countdown date in local storage, set a new one to 13 days from now
            if (!countDownDate) {
                countDownDate = new Date().getTime() + 13 * 24 * 60 * 60 * 1000;
                localStorage.setItem('countDownDate', countDownDate);
            } else {
                countDownDate = parseInt(countDownDate, 10);
            }

            const interval = setInterval(function() {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

                if (distance < 0) {
                    clearInterval(interval);
                    countdownElement.innerHTML = "EXPIRED";
                }
            }, 1000);
        }

        function onScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        /* Preloader script */
        document.addEventListener('DOMContentLoaded', function () {
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', function () {
                preloader.style.display = 'none';
            });
        });

        window.addEventListener('scroll', onScroll);
        countdownTimer();

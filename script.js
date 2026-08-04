(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const activateCurrentNavLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a[href]');

        navLinks.forEach((link) => {
            const linkPath = link.getAttribute('href')?.split('/').pop();
            const isActive = linkPath === currentPath || (!currentPath && linkPath === 'index.html');

            if (isActive) {
                link.classList.add('text-primary', 'font-semibold');
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    const revealSections = () => {
        const revealTargets = document.querySelectorAll('main > *');

        if (!revealTargets.length) {
            return;
        }

        revealTargets.forEach((element) => element.classList.add('reveal'));

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealTargets.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.18,
            rootMargin: '0px 0px -6% 0px',
        });

        revealTargets.forEach((element) => observer.observe(element));
    };

    const startTypewriter = () => {
        const textElement = document.getElementById('typewriter');

        if (!textElement) {
            return;
        }

        const phrases = [
            'automate workflows',
            'stabilize systems',
            'simplify complexity',
            'visualize data',
            'build reliability',
        ];

        if (prefersReducedMotion) {
            textElement.textContent = phrases[0];
            return;
        }

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        const tick = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                charIndex -= 1;
                textElement.textContent = currentPhrase.slice(0, charIndex);
            } else {
                charIndex += 1;
                textElement.textContent = currentPhrase.slice(0, charIndex);
            }

            let delay = isDeleting ? 54 : 92;

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                delay = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 350;
            }

            timeoutId = window.setTimeout(tick, delay);
        };

        tick();

        window.addEventListener('pagehide', () => window.clearTimeout(timeoutId), { once: true });
    };

    document.addEventListener('DOMContentLoaded', () => {
        activateCurrentNavLink();
        revealSections();
        startTypewriter();
    });
})();
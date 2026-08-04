(() => {
    const fallbackPhrases = ['automate workflows', 'stabilize systems', 'simplify complexity', 'visualize data', 'build reliability'];

    const getPhrases = () => Array.isArray(window.sitePhrases) && window.sitePhrases.length ? window.sitePhrases : fallbackPhrases;

    const startTypewriter = () => {
        const textElement = document.getElementById('typewriter');

        if (!textElement) {
            return;
        }

        let timeoutId = null;
        let cycleId = 0;

        const runCycle = () => {
            cycleId += 1;
            const activeCycle = cycleId;
            window.clearTimeout(timeoutId);

            const phrases = getPhrases();
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            textElement.textContent = '';

            const tick = () => {
                if (activeCycle !== cycleId) {
                    return;
                }

                const currentPhrase = phrases[phraseIndex];

                if (isDeleting) {
                    charIndex = Math.max(0, charIndex - 1);
                } else {
                    charIndex = Math.min(currentPhrase.length, charIndex + 1);
                }

                textElement.textContent = currentPhrase.slice(0, charIndex);

                let delay = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentPhrase.length) {
                    isDeleting = true;
                    delay = 1800;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    delay = 350;
                }

                timeoutId = window.setTimeout(tick, delay);
            };

            tick();
        };

        runCycle();
        document.addEventListener('languagechange', runCycle);
    };

    document.addEventListener('DOMContentLoaded', startTypewriter);
})();
// Modern Gaming Archive - Interaction Script
document.addEventListener('DOMContentLoaded', () => {

    const allianceBtn = document.getElementById('alliance-btn');
    const hordeBtn = document.getElementById('horde-btn');
    const neutralBtn = document.getElementById('neutral-btn');
    const body = document.body;

    // 1. Sleek Theme Switcher
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);

        // Update active button state
        document.querySelectorAll('.faction-pill').forEach(btn => {
            btn.classList.remove('active');
        });

        if (theme === 'alliance') allianceBtn.classList.add('active');
        if (theme === 'horde') hordeBtn.classList.add('active');
        if (theme === 'neutral') neutralBtn.classList.add('active');
    };

    allianceBtn.addEventListener('click', () => setTheme('alliance'));
    hordeBtn.addEventListener('click', () => setTheme('horde'));
    neutralBtn.addEventListener('click', () => setTheme('neutral'));

    // 2. Performance-Optimized Reveal
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('.reveal');

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.9) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

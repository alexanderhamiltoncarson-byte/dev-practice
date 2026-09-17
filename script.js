// Blizzard-Inspired Modern Archive Interaction Script
document.addEventListener('DOMContentLoaded', () => {

    const nav = document.getElementById('main-nav');
    const allianceBtn = document.getElementById('alliance-btn');
    const hordeBtn = document.getElementById('horde-btn');
    const neutralBtn = document.getElementById('neutral-btn');
    const body = document.body;

    // 1. Professional Navbar Scroll Effect
    // Makes the nav transparent at the top and solid when scrolling down
    const handleNavScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll);

    // 2. Sleek Theme Switcher
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

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for the fixed navbar
                const navHeight = nav.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set default active button
    setTheme('neutral');
});

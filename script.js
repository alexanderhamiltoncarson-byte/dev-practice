document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const mobileMenu = document.getElementById('mobile-menu');

    // 1. Sticky Navbar Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Live Activity Toast Notification
    const activityToast = document.getElementById('live-activity');
    const activityText = document.getElementById('activity-text');
    const activities = [
        "Someone in your area just booked a Deep Clean!",
        "A new customer just joined Pristine Pro!",
        "Another home just got sparkling clean in your city!",
        "Pristine Pro just completed a 5-star commercial clean!",
        "Limited slots available for this weekend!"
    ];

    let activityIndex = 0;
    const showActivity = () => {
        activityText.innerText = activities[activityIndex];
        activityToast.classList.add('show');

        setTimeout(() => {
            activityToast.classList.remove('show');
            activityIndex = (activityIndex + 1) % activities.length;
        }, 5000);
    };

    // Start activity loop
    setInterval(showActivity, 12000);
    setTimeout(showActivity, 3000);

    // 3. Price Calculator Logic
    const sqftSlider = document.getElementById('sqft-slider');
    const sqftValue = document.getElementById('sqft-value');
    const totalPriceElement = document.getElementById('total-price');
    const levelButtons = document.querySelectorAll('[data-level]');
    const freqButtons = document.querySelectorAll('[data-freq]');

    let currentLevel = 'standard';
    let currentFreq = 'once';

    const calculatePrice = () => {
        const sqft = parseInt(sqftSlider.value);
        sqftValue.innerText = sqft.toLocaleString();

        // Base pricing: $0.10 per sqft for standard, $0.15 for deep
        let rate = currentLevel === 'standard' ? 0.10 : 0.15;
        let total = sqft * rate;

        // Add base fee
        total += 50;

        // Apply Frequency Discounts
        if (currentFreq === 'weekly') total *= 0.85;
        if (currentFreq === 'biweekly') total *= 0.90;

        totalPriceElement.innerText = Math.round(total).toLocaleString();
    };

    sqftSlider.addEventListener('input', calculatePrice);

    levelButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            levelButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLevel = btn.dataset.level;
            calculatePrice();
        });
    });

    freqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            freqButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFreq = btn.dataset.freq;
            calculatePrice();
        });
    });

    // Initialize price
    calculatePrice();

    // 4. Appointment Form Submission
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = appointmentForm.querySelector('.btn-submit');
            const originalText = btn.innerText;

            btn.innerText = 'Booking Confirmed! ✓';
            btn.style.backgroundColor = '#2ecc71';

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                appointmentForm.reset();
            }, 3000);
        });
    }
});

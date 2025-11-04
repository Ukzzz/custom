// Smooth scroll and navbar effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

(function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== btn && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
})();

(function initReveal() {
    const selectors = [
        '.section-header',
        '.facility-item',
        '.capability-card',
        '.process-card',
        '.client-logo-card',
        '.achievements-banner',
        '.cta-container',
        '.contact-card',
        '.contact-actions',
        '.stat-card',
        '.hero-content'
    ];
    const nodes = selectors.flatMap(sel => Array.from(document.querySelectorAll(sel)));
    nodes.forEach(n => n.classList.add('reveal'));

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    nodes.forEach(n => io.observe(n));
})();
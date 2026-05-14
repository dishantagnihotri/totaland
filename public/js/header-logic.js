document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Logon Dropdown Toggle
    const logonBtn = document.querySelector('#logon-btn');
    const logonDropdown = document.querySelector('#logon-dropdown');

    if (logonBtn && logonDropdown) {
        logonBtn.addEventListener('click', (e) => {
            const href = logonBtn.getAttribute('href');
            if (href && href !== '#' && href !== '') {
                // If the button has a real link (like logon.html), allow navigation
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            logonDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (logonDropdown.classList.contains('active')) {
                if (!logonBtn.contains(e.target) && !logonDropdown.contains(e.target)) {
                    logonDropdown.classList.remove('active');
                }
            }
        });

        // Close dropdown on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                logonDropdown.classList.remove('active');
            }
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const headerActions = document.querySelector(".header-actions");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            const isExpanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", String(!isExpanded));
            this.classList.toggle("active");
            nav.classList.toggle("active");
            headerActions.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }
});

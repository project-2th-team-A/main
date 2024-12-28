document.addEventListener('DOMContentLoaded', function () {
    // Add active state to navigation items
    const navItems = document.querySelectorAll('.nav-item, .menu-item');

    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            navItems.forEach((nav) => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Optional: Add smooth scroll behavior for the sidebar
    const sidebarItems = document.querySelectorAll('.nav-item');
    sidebarItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

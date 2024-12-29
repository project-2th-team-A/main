// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Update time in header
    function updateTime() {
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        document.querySelector('.time').textContent = timeString;
    }

    // Update time every minute
    updateTime();
    setInterval(updateTime, 60000);

    // Add click event listeners to menu items
    document.querySelectorAll('.menu-section li').forEach(item => {
        item.addEventListener('click', function() {
            // Add ripple effect or highlighting
            this.style.backgroundColor = '#f0f0f0';
            setTimeout(() => {
                this.style.backgroundColor = 'transparent';
            }, 200);
        });
    });

    // Navigation item click handler
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
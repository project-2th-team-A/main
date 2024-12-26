document.addEventListener('DOMContentLoaded', function() {
    // Calendar Generation
    function generateCalendar() {
        const calendarGrid = document.querySelector('.calendar-grid');
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // Add day headers
        days.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-header-cell';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        // Add calendar days
        for (let i = 1; i <= 31; i++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            dayCell.textContent = i;
            calendarGrid.appendChild(dayCell);
        }
    }

    // Weight Chart
    function initializeWeightChart() {
        const ctx = document.createElement('canvas');
        document.querySelector('.chart-container').appendChild(ctx);
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const weights = [65, 66, 67, 66.5, 66, 65.5, 65, 64.5, 64, 63.5, 63, 62.5];

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: '체중 (kg)',
                    data: weights,
                    borderColor: '#8B5CF6',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Progress Circles
    function initializeProgressCircles() {
        document.querySelectorAll('.progress-circle').forEach(circle => {
            const progress = circle.getAttribute('data-progress');
            const radius = 25;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (progress / 100 * circumference);

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 60 60');
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M30 5
                a 25 25 0 0 1 0 50
                a 25 25 0 0 1 0 -50`);
            path.style.fill = 'none';
            path.style.stroke = '#8B5CF6';
            path.style.strokeWidth = '5';
            path.style.strokeDasharray = circumference;
            path.style.strokeDashoffset = offset;

            svg.appendChild(path);
            circle.appendChild(svg);
        });
    }

    // Initialize everything
    generateCalendar();
    initializeWeightChart();
    initializeProgressCircles();
});
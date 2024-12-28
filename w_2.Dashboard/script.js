document.addEventListener('DOMContentLoaded', function() {
    // Calendar Implementation
    function generateCalendar() {
        const daysContainer = document.getElementById('calendar-days');
        const totalDays = 35; // 5 weeks * 7 days

        for (let i = 1; i <= totalDays; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i <= 31 ? i : '';
            if (i % 7 === 1) dayElement.style.color = '#e03131'; // Sunday
            if (i % 7 === 0) dayElement.style.color = '#1c7ed6'; // Saturday
            daysContainer.appendChild(dayElement);
        }
    }

    // Statistics Chart
    function initializeChart() {
        const ctx = document.createElement('canvas');
        document.getElementById('statistics-chart').appendChild(ctx);

        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: '체중 (kg)',
                data: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25],
                borderColor: '#5f3dc4',
                backgroundColor: 'rgba(95, 61, 196, 0.1)',
                tension: 0.4,
                fill: true
            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    // Initialize
    generateCalendar();
    initializeChart();
});
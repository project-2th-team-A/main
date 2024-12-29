// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Calendar Generation
    function generateCalendar() {
        const daysInMonth = 31; // December 2024
        const firstDay = 0; // Sunday
        const calendar = document.querySelector('.calendar-grid');

        // Clear existing dates
        const existingDates = document.querySelectorAll('.calendar-day');
        existingDates.forEach((date) => date.remove());

        // Generate days
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = i;

            // Style for weekends
            const dayOfWeek = (firstDay + i - 1) % 7;
            if (dayOfWeek === 0) dayElement.style.color = '#FF0000';
            if (dayOfWeek === 6) dayElement.style.color = '#0000FF';

            // Style for current day (3rd in the image)
            if (i === 3) {
                dayElement.style.backgroundColor = '#5D5FEF';
                dayElement.style.color = 'white';
                dayElement.style.borderRadius = '50%';
                dayElement.style.width = '30px';
                dayElement.style.height = '30px';
                dayElement.style.display = 'flex';
                dayElement.style.alignItems = 'center';
                dayElement.style.justifyContent = 'center';
            }

            calendar.appendChild(dayElement);
        }
    }

    // Stats Graph
    function initializeGraph() {
        const ctx = document.getElementById('statsGraph').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
                datasets: [
                    {
                        data: [10, 12, 15, 18, 20, 22, 25, 23, 21, 19, 17],
                        backgroundColor: '#5EE6D0',
                        borderRadius: 8,
                        barThickness: 20,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });
    }

    // Initialize components
    generateCalendar();
    initializeGraph();
});

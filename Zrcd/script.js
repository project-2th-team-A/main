// Current Date Display
function updateCurrentDate() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    "ko-KR",
    options
  );
}

// Calendar Generation
function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDay = firstDay.getDay();
  const monthLength = lastDay.getDate();

  const calendarDays = document.getElementById("calendar-days");
  calendarDays.innerHTML = "";

  // Update month-year display
  document.getElementById("month-year").textContent = `${year}년 ${
    month + 1
  }월`;

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.className = "day";
    calendarDays.appendChild(emptyDay);
  }

  // Add days of the month
  const today = new Date();
  for (let i = 1; i <= monthLength; i++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";

    // Add weekend class for Sundays
    const dayOfWeek = new Date(year, month, i).getDay();
    if (dayOfWeek === 0) {
      dayElement.classList.add("weekend");
    }

    // Highlight current day
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      i === today.getDate()
    ) {
      dayElement.classList.add("today");
    }

    dayElement.textContent = i;
    calendarDays.appendChild(dayElement);
  }
}

// Initialize calendar
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

generateCalendar(currentYear, currentMonth);
updateCurrentDate();

// Event Listeners for month navigation
document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
});

// Schedule checkbox functionality
document
  .querySelectorAll('.schedule-item input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const scheduleItem = this.closest(".schedule-item");
      if (this.checked) {
        scheduleItem.style.opacity = "0.5";
      } else {
        scheduleItem.style.opacity = "1";
      }
    });
  });

// Add schedule button click handler
document.querySelector(".add-schedule").addEventListener("click", () => {
  alert("새로운 일정 추가 기능은 준비 중입니다.");
});

const todayTitle = document.querySelector('.todayTitle');
const calendarTable = document.querySelector('table');
const monthYear = document.querySelector('.monthYear p');
const prevMonthBtn = document.querySelector('#prevMonth');
const nextMonthBtn = document.querySelector('#nextMonth');
const ptModeIcon = document.querySelector('.ptMode i');

// 달력 만들기
let currentDate = new Date();
let selectedDate = null; // 현재 선택된 날짜를 저장

function makingCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const todayDate = date.getDate();

    // 오늘 날짜 제목 업데이트
    updateTodayTitle(year, month, todayDate);

    // 달력 초기화
    calendarTable.innerHTML = '';

    // 월 년 표시
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    monthYear.innerText = `${monthNames[month]} ${year}`;
    monthYear.classList.add('textColor', 'font24', 'fontBold');

    // 현재 월과 이전/다음 월 정보
    const firstDay = new Date(year, month, 1).getDay(); // 이번 달 첫째 날의 요일
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 이번 달의 마지막 날짜
    const daysInPrevMonth = new Date(year, month, 0).getDate(); // 이전 달의 마지막 날짜

    // 날짜 생성
    let day = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.classList.add('oneWeek');

        for (let j = 0; j < 7; j++) {
            let cell;

            if (i === 0 && j < firstDay) {
                // 이전 달 날짜
                const cellDate = daysInPrevMonth - firstDay + 1 + j;
                cell = createCell(cellDate, 'textColorDisableMedium', () => {
                    if (month === 0) {
                        updateTodayTitle(year - 1, 11, cellDate);
                    } else {
                        updateTodayTitle(year, month, cellDate);
                    }
                });
            } else if (day > daysInMonth) {
                // 다음 달 날짜
                const nextMonthDate = day - daysInMonth;
                cell = createCell(
                    nextMonthDate,
                    'textColorDisableMedium',
                    () => {
                        if (month === 11) {
                            updateTodayTitle(year + 1, 0, nextMonthDate);
                        } else {
                            updateTodayTitle(year, month + 1, nextMonthDate);
                        }
                    }
                );
                day++;
            } else {
                // 이번 달 날짜
                const currentDay = day;
                const textColor =
                    j === 0
                        ? 'textColorRed'
                        : j === 6
                          ? 'textColorBlue'
                          : 'textColor';

                cell = createCell(currentDay, textColor, () => {
                    updateTodayTitle(year, month, currentDay);
                });

                // 오늘 날짜 강조
                const today = new Date();
                if (
                    currentDay === todayDate &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.classList.add('today');
                }
                day++;
            }

            cell.classList.add('cell', 'font20');
            row.appendChild(cell);
        }
        calendarTable.appendChild(row);
    }
}

function updateTodayTitle(year, month, day) {
    todayTitle.innerText = `${year}년 ${month + 1}월 ${day}일`;
    todayTitle.classList.add('font24', 'fontMedium', 'textColorSecondaryDark');
}

function createCell(content, textColor, clickHandler) {
    const cell = document.createElement('div');
    cell.innerHTML = `<p>${content}</p>`;
    cell.querySelector('p').classList.add(textColor);

    if (clickHandler) {
        cell.addEventListener('click', clickHandler);
    }

    return cell;
}

// Event listeners
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    makingCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    makingCalendar(currentDate);
});

// 캘린더 만들기 실행
makingCalendar(currentDate);

// 캘린더에 일정 넣기
const cellArray = document.querySelectorAll('table .cell');
for (let cell of cellArray) {
    const dayText = cell.querySelector('p').innerText;
    if (dayText === '12' || dayText === '17' || dayText === '31') {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.classList.add('regularSchedule');
        divElement.classList.add('regularSchedule');
        pElement.textContent = '수영';
        cell.appendChild(divElement);
        divElement.appendChild(pElement);
    } else if (dayText === '25' || dayText === '11' || dayText === '18') {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.classList.add('PTmodeSchedule');
        divElement.classList.add('PTmodeSchedule');
        pElement.textContent = 'PT';
        cell.appendChild(divElement);
        divElement.appendChild(pElement);
    }
}

// PTmode on off
ptModeIcon.addEventListener('click', () => {
    ptModeIcon.classList.toggle('bi-toggle-off');
    ptModeIcon.classList.toggle('bi-toggle-on');

    // PT 모드에 따라 스케줄 보이기/숨기기
    const isPTMode = ptModeIcon.classList.contains('bi-toggle-on'); // PT 모드 상태 확인
    toggleScheduleVisibility(isPTMode);
});

function toggleScheduleVisibility(isPTMode) {
    const regularSchedules = document.querySelectorAll('div.regularSchedule');
    const ptSchedules = document.querySelectorAll('div.PTmodeSchedule');

    if (isPTMode) {
        // PT 모드: PT 스케줄만 표시
        regularSchedules.forEach(
            (schedule) => (schedule.style.display = 'none')
        );
        ptSchedules.forEach((schedule) => (schedule.style.display = 'block'));
    } else {
        // 일반 모드: 모든 스케줄 표시
        regularSchedules.forEach(
            (schedule) => (schedule.style.display = 'block')
        );
        ptSchedules.forEach((schedule) => (schedule.style.display = 'block'));
    }
}

// 캘린더 누르면 캘린더 페이지로 이동
calendarTable.addEventListener('click', () => {
    window.location.href = './2.calendar/calendar.html';
});

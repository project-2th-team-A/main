const calendarTable = document.querySelector('.calendar table');
const monthYear = document.querySelector('.monthYear p');
const prevMonthBtn = document.querySelector('#prevMonth');
const nextMonthBtn = document.querySelector('#nextMonth');
const aside = document.querySelector('aside');

let currentDate = new Date();

function makingCalender(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const todayDate = date.getDate();

    updateTodayTitle(year, month, todayDate);

    // calendar 초기화
    calendarTable.innerHTML = '';

    // 월 년 설정
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

    // 이번달의 첫번째 날이 무슨 요일인지 가져오기
    const firstDay = new Date(year, month, 1).getDay();
    // 이번달에 며칠 있는지 가져오기
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 0 = month + 1 의 첫째 날의 전날 (이전 월의 마지막 날)
    // 저번달에는 며칠 있는지 가져오기
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // 날짜 table 만들기
    let day = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.classList.add('oneWeek');

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('div');

            if (i === 0 && j < firstDay) {
                const cellDate = daysInPrevMonth - firstDay + 1 + j;

                cell = createCell(cellDate, 'textColorDisableMedium', () => {
                    clearPreviousSelection();
                    cell.classList.add('selected');
                    aside.style.display = 'block';
                    toggleAsideDisplay();
                    if (month === 0) {
                        updateTodayTitle(year - 1, 12, cellDate);
                    } else {
                        updateTodayTitle(year, month, cellDate);
                    }
                });
            } else if (day > daysInMonth) {
                const nextMonthDate = new Date(
                    year,
                    month + 1,
                    day - daysInMonth
                ).getDate();

                cell = createCell(
                    nextMonthDate,
                    'textColorDisableMedium',
                    () => {
                        clearPreviousSelection();
                        if (month === 11) {
                            updateTodayTitle(year + 1, 1, nextMonthDate);
                            todayTitle.innerText = `${year + 1}년 1월 ${nextMonthDate}일`;
                        } else {
                            updateTodayTitle(year, month + 2, nextMonthDate);
                        }
                        cell.classList.add('selected');
                        toggleAsideDisplay();
                    }
                );

                day++;
            } else {
                if (j === 0) {
                    textcolor = 'textColorRed';
                } else if (j === 6) {
                    textcolor = 'textColorBlue';
                } else {
                    textcolor = 'textColor';
                }

                // 오늘에 css 스타일 적용
                const today = new Date();
                if (
                    day === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.classList.add('today');
                }

                // 원하는 날짜 클릭 시 이벤트 추가
                const currentDay = day;
                cell = createCell(currentDay, textcolor, () => {
                    clearPreviousSelection();
                    updateTodayTitle(year, month + 1, currentDay);
                    cell.classList.add('selected');
                    toggleAsideDisplay();
                });
                day++;
            }
            cell.classList.add('cell', 'font20', 'fontRegular');
            row.appendChild(cell);
        }

        calendarTable.appendChild(row);
    }
}

function updateTodayTitle(year, month, day) {
    const todayTitle = document.querySelector('.todayTitle');
    todayTitle.innerText = `${year}년 ${month + 1}월 ${day}일`;
    todayTitle.classList.add('font24', 'fontMedium', 'textColorSecondaryDark');
}

function createCell(content, textcolors, clickHandler) {
    const cell = document.createElement('div');
    cell.innerHTML = `<p>${content}</p>`;
    cell.classList.add(textcolors);

    if (clickHandler) {
        cell.addEventListener('click', clickHandler);
    }

    return cell;
}

function clearPreviousSelection() {
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
}

function toggleAsideDisplay() {
    if (aside.style.display === 'block') {
        aside.style.display = 'none';
    } else {
        aside.style.display = 'block';
    }
}

// Event listeners
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    makingCalender(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    makingCalender(currentDate);
});

// Initial render
makingCalender(currentDate);

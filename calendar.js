const calendarTable = document.querySelector('.calendar table');
const monthYear = document.querySelector('.monthYear p');
const prevMonthBtn = document.querySelector('#prevMonth');
const nextMonthBtn = document.querySelector('#nextMonth');
const aside = document.querySelector('aside');

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
                        handleDateClick(year - 1, 11, cellDate, cell);
                    } else {
                        handleDateClick(year, month, cellDate, cell);
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
                            handleDateClick(year + 1, 0, nextMonthDate, cell);
                        } else {
                            handleDateClick(
                                year,
                                month + 1,
                                nextMonthDate,
                                cell
                            );
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
                    handleDateClick(year, month, currentDay, cell);
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

function createCell(content, textColor, clickHandler) {
    const cell = document.createElement('div');
    cell.innerHTML = `<p>${content}</p>`;
    cell.classList.add(textColor);

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

function handleDateClick(year, month, day, cell) {
    // 같은 날짜를 다시 클릭했을 경우
    if (
        selectedDate &&
        selectedDate.year === year &&
        selectedDate.month === month &&
        selectedDate.day === day
    ) {
        clearPreviousSelection();
        aside.style.display = 'none';
        selectedDate = null; // 선택된 날짜 해제
        return;
    }

    // 다른 날짜를 클릭했을 경우
    clearPreviousSelection();
    cell.classList.add('selected');
    aside.style.display = 'block';
    updateTodayTitle(year, month, day);

    // 현재 선택된 날짜 저장
    selectedDate = { year, month, day };
}

// Event listeners
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    aside.style.display = 'none';
    makingCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    aside.style.display = 'none';
    makingCalendar(currentDate);
});

// Initial render
makingCalendar(currentDate);

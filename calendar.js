// const calendar = document.getElementsByClassName('calendar');
const calendarTable = document.querySelector('.calendar table');
const monthYear = document.querySelector('.monthYear p');
const prevMonthBtn = document.querySelector('#prevMonth');
const nextMonthBtn = document.querySelector('#nextMonth');

let currentDate = new Date();

function makingCalender(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const todayDate = date.getDate();

    const todayTitle = document.querySelector('.todayTitle');
    todayTitle.innerText = `${year}년 ${month + 1}월 ${todayDate}일`;
    todayTitle.classList.add('font24', 'fontMedium', 'textColorSecondaryDark');

    // calendar 초기화화
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
            const cell = document.createElement('div');

            if (i === 0 && j < firstDay) {
                cell.innerHTML = `<p>${daysInPrevMonth - firstDay + 1 + j}</p>`;
                cell.classList.add('textColorDisableMedium');

                // 원하는 날짜 클릭 시 이벤트 추가
                cell.addEventListener('click', () => {
                    const previouslySelected =
                        document.querySelector('.selected');
                    if (previouslySelected) {
                        previouslySelected.classList.remove('selected');
                    }
                    cell.classList.add('selected');

                    // 제목 업데이트
                    if (month === 0) {
                        todayTitle.innerText = `${year - 1}년 12월 ${daysInPrevMonth - firstDay + 1 + j}일`;
                    } else {
                        todayTitle.innerText = `${year}년 ${month}월 ${daysInPrevMonth - firstDay + 1 + j}일`;
                    }
                });
            } else if (day > daysInMonth) {
                const nextMonthDate = new Date(
                    year,
                    month + 1,
                    day - daysInMonth
                ).getDate();
                cell.innerHTML = `<p>${nextMonthDate}</p>`;
                cell.classList.add('textColorDisableMedium');

                // 원하는 날짜 클릭 시 이벤트 추가
                cell.addEventListener('click', () => {
                    const previouslySelected =
                        document.querySelector('.selected');
                    if (previouslySelected) {
                        previouslySelected.classList.remove('selected');
                    }
                    cell.classList.add('selected');

                    // 제목 업데이트
                    if (month === 11) {
                        todayTitle.innerText = `${year + 1}년 1월 ${nextMonthDate}일`;
                    } else {
                        todayTitle.innerText = `${year}년 ${month + 2}월 ${nextMonthDate}일`;
                    }
                });

                day++;
            } else {
                cell.innerHTML = `<p>${day}</p>`;
                if (j === 0) {
                    cell.classList.add('textColorRed');
                } else if (j === 6) {
                    cell.classList.add('textColorBlue');
                } else {
                    cell.classList.add('textColor');
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
                cell.addEventListener('click', () => {
                    const previouslySelected =
                        document.querySelector('.selected');
                    if (previouslySelected) {
                        previouslySelected.classList.remove('selected');
                    }
                    cell.classList.add('selected');
                    todayTitle.innerText = `${year}년 ${month + 1}월 ${currentDay}일`; // 제목 업데이트
                });

                day++;
            }
            cell.classList.add('cell', 'font20', 'fontRegular');
            row.appendChild(cell);
        }

        calendarTable.appendChild(row);
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

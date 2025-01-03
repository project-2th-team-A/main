const todayTitle = document.querySelector('.todayTitle');
const calendarTable = document.querySelector('.calendar table');
const monthYear = document.querySelector('.monthYear p');
const prevMonthBtn = document.querySelector('#prevMonth');
const nextMonthBtn = document.querySelector('#nextMonth');
const aside = document.querySelector('aside');
const ptModeIcon = document.querySelector('.ptMode i');
const todaysContent = document.querySelector('.todaysContent');
const todaysContent_PTmode = document.querySelector('.todaysContent_PTmode');
const btnMakingReservation = document.getElementById('btnMakingReservation');
const makingReservation = document.querySelector('.makingReservation');
const btnSelectTimeArray = document.querySelectorAll(
    '.btnSelectTimeContainer button'
);
const confrimReservation = document.querySelector('.confrimReservation');
const confrimReservationText = document.querySelector(
    '.confrimReservation p.confrimReservationText'
);
const todaysContentTitleIcon = document.querySelector(
    '.makingReservation .todaysContentComponent i'
);
const btnConfrimReservation = confrimReservation.querySelector('button');
const addLog = document.querySelector('.addLog');
const addLogToday = document.querySelector('.addLog p.addLogToday');
const addLogTypeButtonArray = document.querySelectorAll(
    '.addLogComponent button'
);
const uploadSettingIconsArray = document.querySelectorAll(
    '.uploadSetting i.uploadSettingIcon'
);

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
    // monthYear.style.fontSize = '24px';
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

            cell.classList.add('cell', 'font20');
            row.appendChild(cell);
        }
        calendarTable.appendChild(row);
    }
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

function handleDateClick(year, month, day, cell) {
    // 같은 날짜를 다시 클릭했을 경우
    if (
        selectedDate &&
        selectedDate.year === year &&
        selectedDate.month === month &&
        selectedDate.day === day
    ) {
        clearPreviousSelection();
        hideAside();
        selectedDate = null; // 선택된 날짜 해제
        return;
    }

    // 다른 날짜를 클릭했을 경우
    clearPreviousSelection();
    cell.classList.add('selected');
    showAside();
    updateTodayTitle(year, month, day);
    addChangeAddLogToday();

    // 현재 선택된 날짜 저장
    selectedDate = { year, month, day };
}

function clearPreviousSelection() {
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
}

function hideAside() {
    todaysContent.style.display = 'none';
    todaysContent_PTmode.style.display = 'none';
    makingReservation.style.display = 'none';
    addLog.style.display = 'none';
}
function showAside() {
    if (ptModeIcon.classList.contains('bi-toggle-on')) {
        todaysContent.style.display = 'none';
        todaysContent_PTmode.style.display = 'block';
    } else if (ptModeIcon.classList.contains('bi-toggle-off')) {
        todaysContent.style.display = 'block';
        todaysContent_PTmode.style.display = 'none';
    }
}

function updateTodayTitle(year, month, day) {
    todayTitle.innerText = `${year}년 ${month + 1}월 ${day}일`;
    todayTitle.classList.add('font24', 'fontMedium', 'textColorSecondaryDark');
}

// Event listeners
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    hideAside();
    makingCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = null; // 월 변경 시 선택 상태 초기화
    hideAside();
    makingCalendar(currentDate);
});

// 캘린더 만들기 실행
makingCalendar(currentDate);

// 캘린더에 일정 넣기
const cellArray = document.querySelectorAll('table .cell');
for (let cell of cellArray) {
    const dayText = cell.querySelector('p').innerText;
    if (dayText === '12' || dayText === '17' || dayText === '31') {
        const pElement = document.createElement('p');
        pElement.classList.add('regularSchedule');
        pElement.textContent = '수영';
        cell.appendChild(pElement);
    } else if (dayText === '25' || dayText === '11' || dayText === '18') {
        const pElement = document.createElement('p');
        pElement.classList.add('PTmodeSchedule');
        pElement.textContent = 'PT';
        cell.appendChild(pElement);
    }
}

// PTmode on off
ptModeIcon.addEventListener('click', () => {
    ptModeIcon.classList.toggle('bi-toggle-off');
    ptModeIcon.classList.toggle('bi-toggle-on');

    // PT 모드에 따라 스케줄 보이기/숨기기
    const isPTMode = ptModeIcon.classList.contains('bi-toggle-on'); // PT 모드 상태 확인
    toggleScheduleVisibility(isPTMode);

    if (
        todaysContent.style.display === 'block' ||
        todaysContent_PTmode.style.display === 'block'
    ) {
        showAside();
    }
});

// PT 모드에 따라 스케줄 표시/숨기기 함수
function toggleScheduleVisibility(isPTMode) {
    const regularSchedules = document.querySelectorAll('.regularSchedule');
    const ptSchedules = document.querySelectorAll('.PTmodeSchedule');

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

// PT 수업 예약하기
btnMakingReservation.addEventListener('click', () => {
    hideAside();
    showMakingReservation();
});
btnConfrimReservation.addEventListener('click', () => {
    hideMakingReservation();
    showAside();
});
todaysContentTitleIcon.addEventListener('click', () => {
    hideMakingReservation();
    showAside();
});

function showMakingReservation() {
    makingReservation.style.display = 'flex';
}

function hideMakingReservation() {
    makingReservation.style.display = 'none';
}
// btnChangeReservation 버튼일때

// 예약할 떄 버튼 바꾸기
for (let btnSelectTime of btnSelectTimeArray) {
    btnSelectTime.addEventListener('click', () => {
        // 이미 선택된 버튼이 있는지 확인
        const previouslySelected = document.querySelector(
            '.btnSelectTime_selceted'
        );

        if (previouslySelected === btnSelectTime) {
            // 같은 버튼을 누른 경우, selected 상태를 해제
            btnSelectTime.classList.remove('btnSelectTime_selceted');
            btnSelectTime.classList.add('btnSelectTime');
            confrimReservation.style.display = 'none'; // 예약 확인 숨김
        } else {
            // 이전 선택된 버튼이 있으면 상태 초기화
            if (previouslySelected) {
                previouslySelected.classList.remove('btnSelectTime_selceted');
                previouslySelected.classList.add('btnSelectTime');
            }

            // 현재 클릭한 버튼에 selected 상태 추가
            btnSelectTime.classList.remove('btnSelectTime');
            btnSelectTime.classList.add('btnSelectTime_selceted');
            confrimReservation.style.display = 'flex'; // 예약 확인 표시
            confrimDayTime(btnSelectTime);
        }
    });
}

function confrimDayTime(time) {
    confrimReservationText.innerHTML = '';
    if (time.classList.contains('am')) {
        confrimReservationText.innerHTML = `<span>${todayTitle.innerText} 오전 ${time.innerText}</span>`;
    } else if (time.classList.contains('pm')) {
        confrimReservationText.innerHTML = `<span>${todayTitle.innerText} 오후 ${time.innerText}</span>`;
    }
}

// 기록하기 창
// 기록하기 창 닫기
const addLogExitIcon = document.querySelector('.addLogContainer i.bi-x');
addLogExitIcon.addEventListener('click', () => {
    addLog.style.display = 'none';
});

// 운동 식단 일상 선택
const addLogTabArray = document.querySelectorAll('.addLogTab p');
for (let addLogTab of addLogTabArray) {
    addLogTab.addEventListener('click', () => {
        // 모든 탭의 선택 상태 초기화
        addLogTabArray.forEach((tab) => {
            tab.classList.remove('addLogTabText_selected');
            tab.classList.add('addLogTabText');
        });

        // 클릭된 탭만 선택 상태로 설정
        addLogTab.classList.add('addLogTabText_selected');
        addLogTab.classList.remove('addLogTabText');
    });
}

// // 기본 제목의 날짜
addLogToday.innerHTML = `${todayTitle.innerText}`;
// 제목의 날짜 달력을 누른 날로 바꿈
function addChangeAddLogToday() {
    addLogToday.innerHTML = '';
    addLogToday.innerHTML = `${todayTitle.innerText}`;
}

// 운동 종류 버튼 선택
for (let addLogTypeButton of addLogTypeButtonArray) {
    addLogTypeButton.addEventListener('click', () => {
        addLogTypeButton.classList.toggle('btnSelectedMedium');
        addLogTypeButton.classList.toggle('btnDisableMedium');
    });
}

// 업로드 설정 토글버튼
for (let uploadSettingIcon of uploadSettingIconsArray) {
    uploadSettingIcon.addEventListener('click', () => {
        uploadSettingIcon.classList.toggle('bi-toggle-off');
        uploadSettingIcon.classList.toggle('bi-toggle-on');
    });
}

// 모달창
const modal = document.querySelector('.modal');
const btnCalendarPlus = document.querySelector('.bi-calendar-plus');
const modalTitleIcon = document.querySelector('.modalTitleIcon');

// 버튼 클릭 시 모달창 열기기
btnCalendarPlus.addEventListener('click', openModal);
// 모달창 아이콘 x 클릭 시 모달창 닫기
modalTitleIcon.addEventListener('click', closeModal);
// 모달 외부 클릭시 모달창 닫기
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function openModal() {
    modal.style.display = 'block'; // 모달창 열기
}
function closeModal() {
    modal.style.display = 'none'; // 모달창 닫기
}

// 모달창 오전오후 버튼
const btnAmPm = document.querySelector('.setTime button');
btnAmPm.style.cursor = 'pointer';
btnAmPm.addEventListener('click', () => {
    if (btnAmPm.innerText === '오전') {
        btnAmPm.innerText = '오후';
    } else if (btnAmPm.innerText === '오후') {
        btnAmPm.innerText = '오전';
    }
});

// 모달창 시간분 버튼
const btnInputSchedule = document.querySelector('.btnInputSchedule');
const timeInput = document.getElementById('timeInput');
const minuteInput = document.getElementById('minuteInput');
const inputText = document.querySelector('.inputText input');
inputText.style.height = getComputedStyle(btnInputSchedule).height;

// // 모바일 버전
// // 미디어쿼리 시 캘린더 클릭할 때
// // 미디어 쿼리 객체 생성
// const mediaQuery = window.matchMedia('(max-width: 600px)');

// // 이벤트 핸들러 함수 정의
// function handleButtonClick() {
//     alert('You clicked the button in mobile view!');
// }

// // 미디어 쿼리에 따른 이벤트 핸들러 설정
// function handleMediaChange(e) {
//     for (let cell of cellArray) {
//         if (e.matches) {
//             // 600px 이하일 때 이벤트 핸들러 추가
//             cell.addEventListener('click', handleButtonClick);
//         } else {
//             // 600px 초과일 때 이벤트 핸들러 제거
//             cell.removeEventListener('click', handleButtonClick);
//         }
//     }
// }

// // 초기 미디어 쿼리 상태 체크 및 핸들러 설정
// handleMediaChange(mediaQuery);

// // 미디어 쿼리 변경 시 이벤트 감지
// mediaQuery.addEventListener('change', handleMediaChange);

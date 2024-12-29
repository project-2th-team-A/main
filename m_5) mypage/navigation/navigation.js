// 플로팅버튼 모달
const floatingBtn = document.querySelector('#floatingBtn');
const floatingBtnIcon = document.querySelector('#floatingBtn i');
const floatingBtnWithModal = document.querySelector(
    '.floatingBtnModal #floatingBtnWithModal'
);
const floatingBtnModal = document.querySelector('.floatingBtnModal');
const floatingBtnModalTitle = document.querySelector(
    '.floatingBtnModalTitle p'
);
const floatingBtnModalTitleIconPrev = document.querySelector(
    '.floatingBtnModalTitle i.iconPrev'
);
const floatingBtnModalTitleIconNext = document.querySelector(
    '.floatingBtnModalTitle i.iconNext'
);

// 모달 제목에 오늘 날짜
const year = new Date().getFullYear(); // 연도
const month = new Date().getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
const date = new Date().getDate(); // 일
floatingBtnModalTitle.innerHTML = `${year}년 ${month}월 ${date}일 `;

// const firstDay = new Date(year, month, 1).getDay(); // 이번 달 첫째 날의 요일
const daysInMonth = new Date(year, month + 1, 0).getDate(); // 이번 달의 마지막 날짜
// const daysInPrevMonth = new Date(year, month, 0).getDate(); // 이전 달의 마지막 날짜

// 버튼 클릭 시 모달 열기/닫기 토글
floatingBtn.addEventListener('click', toggleFloatingBtnModal);

// 내부 버튼 클릭 시 닫기
floatingBtnWithModal.addEventListener('click', () => {
    closefloatingBtnModal();
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target === floatingBtnModal) {
        closefloatingBtnModal();
    }
});

// 모달 열기/닫기 토글 함수
function toggleFloatingBtnModal() {
    if (floatingBtnModal.style.display === 'block') {
        closefloatingBtnModal();
    } else {
        openfloatingBtnModal();
    }
}

// 모달 열기함수 & 닫기 함수
function openfloatingBtnModal() {
    floatingBtnModal.style.display = 'block'; // 모달창 열기
    floatingBtn.style.display = 'none';
}
function closefloatingBtnModal() {
    floatingBtnModal.style.display = 'none'; // 모달창 닫기
    floatingBtn.style.display = 'block';
}
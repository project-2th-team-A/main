// 플로팅버튼 모달
const floatingBtn = document.querySelector('#floatingBtn');
const floatingBtnIcon = document.querySelector('#floatingBtn i');
const floatingBtnWithModal = document.querySelector(
    '.floatingBtnModal #floatingBtnWithModal'
);
const floatingBtnModal = document.querySelector('.floatingBtnModal');

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

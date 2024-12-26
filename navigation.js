const navbar = document.querySelector('.navbar');
const topList = document.querySelector('.topList');
const menuItems = document.querySelectorAll('.navbar a'); // 각 메뉴 아이템
const menuTexts = document.querySelectorAll('.navbar p');

// navbar의 높이 설정
const navbarHeight = getComputedStyle(navbar).height;
if (parseInt(navbarHeight) < window.innerHeight) {
    navbar.style.height = '100vh';
}

// 미디어쿼리 객체 생성
const mediaQuerySmall = window.matchMedia('(max-width: 600px)');

// 작은 화면 작업
function applySmallViewport(event) {
    if (event.matches) {
        document.querySelector('.navbar .logo').style.display = 'none'; // 로고 안보이게게
        document.querySelector('.navbar .bottomList').style.display = 'none'; // 네비게이션_하단 안보이게
        menuItems[4].style.display = 'none';

        // 아이콘과 텍스트를 세로로 배치
        for (let menuItem of menuItems) {
            menuItem.style.flexDirection = 'column';
            menuItem.style.justifyContent = 'space-between';
            menuItem.style.width = '54px';
            menuItem.style.fontSize = '10px';
            const menuText = menuItem.querySelector('p');

            menuText.style.display = 'block'; // 숨겨진 텍스트 다시 보이게
            menuText.style.margin = '0';
        }

        // 메뉴 가로 정렬
        topList.style.flexDirection = 'row'; // 가로 정렬
        topList.style.height = 'auto';

        // 네비게이션 스타일 변경
        navbar.style.height = 'auto';
        navbar.style.position = 'fixed'; // 고정 위치 설정
        navbar.style.bottom = '0'; // 화면 아래에 붙이기
        navbar.style.left = '0'; // 왼쪽 정렬
        navbar.style.width = '100%'; // 가로를 화면에 맞춤
        navbar.style.borderRight = 'none'; // 기존 border-right 제거
        navbar.style.borderTop = '1px solid #B1B1B1'; // 상단 경계선 추가
        navbar.style.padding = '19px 33px'; // 여백 조정 (선택 사항)
    }
}

// 화면 크기 변화 감지
mediaQuerySmall.addEventListener('change', applySmallViewport);

// 화면 크기 변화 감지 및 초기 적용
function applyViewportChanges() {
    if (mediaQuerySmall.matches) {
        applySmallViewport(mediaQuerySmall);
    }
}

// 초기 실행
applyViewportChanges();
document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 아이템 호버 효과
    const menuItems = document.querySelectorAll('.side-nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#000';
        });
        item.addEventListener('mouseleave', function() {
            this.style.color = '#666';
        });
    });

    // 콘텐츠 박스 호버 효과
    const contentBoxes = document.querySelectorAll('.content-box ul li');
    contentBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
            this.style.cursor = 'pointer';
        });
        box.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});

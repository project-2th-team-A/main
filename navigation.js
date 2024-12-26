// 플로팅버튼 팝오버
const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
);
console.log(popoverTriggerList);

const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus',
});

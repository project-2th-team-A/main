// * w_1_9_create
// 문제6) 클릭하면 border color 바뀌어야함 -> 안됨
// const select1 = document.querySelector(".select.one");
// const select2 = document.querySelector(".select.two");
// const select3 = document.querySelector(".select.three");
// const select4 = document.querySelector(".select.four");
// const select5 = document.querySelector(".select.five");

// select1.addEventListener("click", function () {
//   select1.style.borderColor = "#c66efe";
// });
// select2.addEventListener("click", function () {
//   select2.style.borderColor = "#c66efe";
// });
// select3.addEventListener("click", function () {
//   select3.style.borderColor = "#c66efe";
// });
// select4.addEventListener("click", function () {
//   select4.style.borderColor = "#c66efe";
// });
// select5.addEventListener("click", function () {
//   select5.style.borderColor = "#c66efe";
// });

// w_1_9_create -> w_1_10_create 이동 -> 작동안함
const questionButtonsOne = document.querySelector(".questionButtons.one");
questionButtonsOne.addEventListener("click", function () {
  console.log(questionButtonsOne);

  window.location.href = "./w_1_10_create.html";
});

// * w_1_10_create
// const times1 = document.querySelector(".times.one");
// const times2 = document.querySelector(".times.two");
// const times3 = document.querySelector(".times.three");
// const times4 = document.querySelector(".times.four");
// const times5 = document.querySelector(".times.five");
// const times6 = document.querySelector(".times.six");

// times1.addEventListener("click", function () {
//   times1.style.borderColor = "#c66efe";
// });
// times2.addEventListener("click", function () {
//   times2.style.borderColor = "#c66efe";
// });
// times3.addEventListener("click", function () {
//   times3.style.borderColor = "#c66efe";
// });
// times4.addEventListener("click", function () {
//   times4.style.borderColor = "#c66efe";
// });
// times5.addEventListener("click", function () {
//   times5.style.borderColor = "#c66efe";
// });
// times6.addEventListener("click", function () {
//   times6.style.borderColor = "#c66efe";
// });

// 문제) -> 작동안함.
const questionButtonsTwo = document.querySelector(".questionButton.two");
questionButtonsTwo.addEventListener("click", function () {
  console.log(this);

  window.location.href = "./w_1_11_create.html";
});

// 문제) -> 작동안함.
// const purpose1 = document.querySelector(".purpose.one");
// const purpose2 = document.querySelector(".purpose.two");
// const purpose3 = document.querySelector(".purpose.three");

// purpose1.addEventListener("click", function () {
//   purpose1.style.borderColor = "#c66efe";
// });
// purpose2.addEventListener("click", function () {
//   purpose2.style.borderColor = "#c66efe";
// });
// purpose3.addEventListener("click", function () {
//   purpose3.style.borderColor = "#c66efe";
// });

// 문제) -> 작동안함.
// const questionButtonsThree = document.querySelector(".questionButton.three");
// questionButtonsThree.addEventListener("click", function () {
//   window.location.href = "./w_1_12_create.html";
// });

// 문제) -> 작동안함, 메인페이지 넣어야함.
// const questionButtonsFour = document.querySelector(".questionButton.four");
// questionButtonsThree.addEventListener("click", function () {
//   window.location.href = "";
// });

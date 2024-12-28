// * w_0_0_logo
// setTimeout("location.href='./w_1_1_choose.html'", 1500);

// * w_1_1_choose
// 문제1) 클릭하는 순간 체크 색상(클래스 바뀌게 하는거) 아래 모두 작동 안됨
// 첫 번째 방법
// function checkClicked() {
//   const check = document.querySelector(".bi bi-check-circle primary300");
//   check.classList.remove(".bi bi-check-circle primary300");
//   check.classList.add("bi bi-check-circle-fill primary300");
// }

// 두 번째 방법
// let unchecked = document.getElementsByClassName(
//   "bi bi-check-circle primary300"
// );
// let checked = document.getElementsByClassName(
//   "bi bi-check-circle-fill primary300"
// );
// unchecked.onclick = function () {
//   unchecked = checked;
// };

// 문제2) 클릭시 사진 바꾸려 했는데 안됨   Cannot set properties of null 오류
// function toggleTrainee() {
//   document.getElementById("#both").src = "./img/trainee.png";
// }

// function toggleTrainer() {
//   document.getElementById("#both").src = "./img/trainer.png";
// }

// 페이지 이동은 됨
// const trainee = document.querySelector("#trainee");
// trainee.addEventListener("click", function () {
//   window.location.href = "./w_1_8_create.html";
// });

// const trainer = document.querySelector("#trainer");
// trainer.addEventListener("click", function () {
//   window.location.href = "./w_1_8_create.html";
// });

// * w_1_4_login
// 문제3) 각 페이지로 이동 안됨. 잠깐 이동했다가 회원가입 페이지 가야함.
// const kakao = document.querySelector(".kakao");
// kakao.addEventListener("click", function () {
//   window.location.href = "./w_1_5_logIn_kakao.html";
//   setTimeout("location.href='.w_1_8_create.html", 1500);
// });

// const naver = document.querySelector(".naver");
// kakao.addEventListener("click", function () {
//   window.location.href = "./w_1_6_logIn_naver.html";
//   setTimeout("location.href='.w_1_8_create.html", 1500);
// });

// const google = document.querySelector(".google");
// kakao.addEventListener("click", function () {
//   window.location.href = "./w_1_7_logIn_google.html";
//   setTimeout("location.href='.w_1_8_create.html", 1500);
// });

// * w_1_8_create
// 사진 바꾸기 작동 안됨 (시간 남으면)
// let profilePic = document.getElementById("profilePic");
// let inputFile = document.getElementById("input-file");
// inputFile.onchange = function () {
//   profilePic.src = URL / createObjectURL(inputFile.files[0]);
// };

// border, text 색상 바꾸기
const changeColor = document.querySelectorAll(".borderColor");
// 방법1)
// changeColor.forEach((color) => {
//   color.addEventListener("click", function () {
//     changeColor.forEach((input) => {
//       input.style.borderColor = "black";
//     });

//     this.style.borderColor = "red";
//   });
// });

// 방법2)
// changeColor.forEach((color) => {
//   color.addEventListener("click", function () {
//     changeColor.forEach((input) => {
//       input.classList.remove("borderColor_click");
//       console.log(input);
//     });

//     this.classList.add("borderColor_click");
//     console.log(this);
//   });
// });
// for (let i = 0; i < changeColor.length; i++) {
//   changeColor[i].addEventListener("click", function () {
//     changeColor[i].style.border = "1px solid #c66efe";
//     changeColor[i].style.color = "#c66efe";
//     changeColor[i].style.fontWeight = 500;
//   });
// }

// // 문제4) 클릭하면 다른거 선택 안되게 해야함
// for (let i = 0; i < changeColor.length; i++) {
//   changeColor[i].addEventListener("click", function () {
//     if (changeColor[i] == this) {
//       changeColor[i].style.border = "1px solid #c66efe";
//       changeColor[i].style.color = "#c66efe";
//       changeColor[i].style.fontWeight = 500;
//     }
//   });
// }

// for (let i = 0; i < changeColor.length; i++) {
//   changeColor[i].addEventListener("click", function () {
//     if (changeColor[i] == this) {
//       Change(i);
//     } else {
//       nonChange(i);
//     }
//   });
// }

// function Change(i) {
//   changeColor[i].style.border = "1px solid #c66efe";
//   changeColor[i].style.color = "#c66efe";
//   changeColor[i].style.fontWeight = 500;
// }

// function nonChange(i) {
//   changeColor[i].style.border = "1px solid #f5f5f5";
//   changeColor[i].style.color = "black";
//   changeColor[i].style.fontWeight = normal;
// }

// function changeOne() {
//   if (chan == true) {
//     btn2.disabled = true;
//     btn3.disabled = true;
//   } else if (btn2.clicked == true) {
//     btn1.disabled = true;
//     btn3.disabled = true;
//   }
// }

// function changeOne() {
//   if (btn1.clicked == true) {
//     btn2.disabled = true;
//     btn3.disabled = true;
//   } else if (btn2.clicked == true) {
//     btn1.disabled = true;
//     btn3.disabled = true;
//   }
// }

// w_1_8_create -> w_1_9_create 로 이동
const createButton = document.querySelector(".createButton");
console.log(createButton);

createButton.addEventListener("click", function () {
  window.location.href = "./w_1_9_create.html";
});

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

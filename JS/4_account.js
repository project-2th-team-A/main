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

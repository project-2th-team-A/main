// 4_account

// 사진 바꾸기 (시간남으면 작업하기)
// 빈칸 선택시 border 색상 변경하기 (OK)
// 4_account -> 5_question1 로 이동 (OK)

// 1) 사진 바꾸기
// let profilePic = document.getElementById("profilePic");
// let inputFile = document.getElementById("input-file");
// inputFile.onchange = function () {
//   profilePic.src = URL / createObjectURL(inputFile.files[0]);
// };

// 2) border 색상 바꾸기, 하나 선택하면 나머지 들은 선택 안되게 => css 에서 input::focus 이용하면 쉽게 구현 가능.

// 3) 4_account -> 5_question1 로 이동 (OK)
const accountButton = document.querySelector(".accountButton");
console.log(accountButton);

accountButton.addEventListener("click", function () {
  window.location.href = "./5_question1.html";
});

/*
// border 색상 바꾸기 (extra 방법)
const changeColor = document.querySelectorAll(".borderColor");

console.log(changeColor);

// 방법1)
changeColor.forEach((color) => {
  color.addEventListener("click", function () {
    changeColor.forEach((input) => {
      input.style.borderColor = "black";
    });

    this.style.borderColor = "red";
  });
});

// 방법2)
changeColor.forEach((color) => {
  color.addEventListener("click", function () {
    changeColor.forEach((input) => {
      input.classList.remove("borderColor_click");
      console.log(input);
    });

    this.classList.add("borderColor_click");
    console.log(this);
  });
});

// extra 방법 사용시 CSS 에 이거 추가하기 
.borderColor_click {
  border-color: #c66efe;
  color: #c66efe;
  font-weight: 500;
} 
*/

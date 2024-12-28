// * 2_choose

// 회원 OR 트레이너 버튼 클릭시 =>
// 이미지 사진 바꾸기 (OK)
// 체크 바꿔치기 (OK)
// border 색상 바꾸기 (OK)
// text 색상 바꾸기 (OK)
// 회원가입 페이지로 이동하기 (OK)
// 버튼 둘 중 하나만 클릭되도록 하기 (작업해야함)

const trainee = document.querySelector("#trainee");
const trainer = document.querySelector("#trainer");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const pic = document.querySelector(".pic_choose");
const checkTrainee = document.querySelector(".check.trainee img");
const checkTrainer = document.querySelector(".check.trainer img");

if (trainee) {
  trainee.addEventListener("click", () => {
    pic.src = "../img/trainee.png";
    checkTrainee.src = "../img/filled.png";
    trainee.style.borderColor = "#c66efe";
    text1.style.color = "#8A26C9";
    setTimeout("location.href='./w_1_8_create.html'", 800);
  });
}

if (trainer) {
  trainer.addEventListener("click", () => {
    pic.src = "../img/trainer.png";
    checkTrainer.src = "../img/filled.png";
    trainer.style.borderColor = "#c66efe";
    text2.style.color = "#8A26C9";
    setTimeout("location.href='./w_1_8_create.html'", 800);
  });
}

// 버튼 둘 중 하나만 클릭되도록 하기

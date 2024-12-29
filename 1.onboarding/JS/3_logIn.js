// 3_logIn

// 카카오, 네이버, 구글로 시작하기 => 회원가입 페이지로 이동 (OK)
const nextPage = document.querySelectorAll(".loginWith");

nextPage.forEach(function (e) {
  e.addEventListener("click", function () {
    window.location.href = "./4_account.html";
  });
});

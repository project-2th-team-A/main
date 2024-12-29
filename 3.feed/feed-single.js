// 1. API 이미지 적용
async function fetchPhotosByKeyword(keyword, className) {
  const accessKey = "CnQXEEIJxs7vakHJPHpu6zT_3OjeGDjDXwxYYjJbBcU";
  const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.results, className); // 해당 keyword에 맞는 class에 이미지를 표시
  } catch (error) {
    console.error("사진 불러오기 오류:", error);
  }
}

function displayPhotos(photos, className) {
  // `className`을 가진 모든 div를 선택
  const targetDivs = document.querySelectorAll(`.${className}`);

  // 이미지가 충분한지 확인
  photos.forEach((photo, index) => {
    if (index < targetDivs.length) {
      // 해당 class를 가진 div 수만큼 이미지 할당
      const img = document.createElement("img");
      img.src = photo.urls.regular; // 큰 이미지 사용

      // 각 class에 해당하는 div에 이미지를 추가
      targetDivs[index].appendChild(img);
    }
  });
}

// 페이지가 로드되면 각 클래스를 처리하는 함수 호출
document.addEventListener("DOMContentLoaded", () => {
  // 각기 다른 키워드와 클래스를 처리
  fetchPhotosByKeyword("exercise person", "exercise");
  fetchPhotosByKeyword("homemade meal", "diet");
  fetchPhotosByKeyword("crossfit training", "crossfit");
  fetchPhotosByKeyword("yoga together", "yoga");
  fetchPhotosByKeyword("profile", "photo-circle-s");
});

// 2-1. 피드 수에 랜덤 숫자를 적용
function setRandomFeedNum() {
  // 모든 .feed-num 요소를 찾음
  const feedElements = document.querySelectorAll(".feed-num");

  feedElements.forEach((feedElement) => {
    // 7부터 149 사이의 랜덤 정수를 생성
    const randomNum = Math.floor(Math.random() * (149 - 7 + 1)) + 7;

    // 해당 .feed-num 내 첫 번째 <span>에 랜덤 숫자 적용
    const firstSpan = feedElement.querySelector("span:first-child");
    if (firstSpan) {
      firstSpan.textContent = randomNum;
    }
  });
}

// 2-2. 팔로워 수에 랜덤 숫자를 적용
function setRandomFlwNum() {
  // 모든 .flw-num 요소를 찾음
  const flwElements = document.querySelectorAll(".flw-num");

  flwElements.forEach((flwElement) => {
    // 50부터 490 사이의 랜덤 정수를 생성
    const randomNum = Math.floor(Math.random() * (490 - 50 + 1)) + 50;

    // 해당 .flw-num 내 첫 번째 <span>에 랜덤 숫자 적용
    const firstSpan = flwElement.querySelector("span:first-child");
    if (firstSpan) {
      firstSpan.textContent = randomNum;
    }
  });
}

// 페이지 로드 후 바로 호출하거나 필요할 때 호출
setRandomFeedNum();
setRandomFlwNum();

// 3. 랜덤 닉네임을 적용하는 함수
function setRandomNicknames() {
  // 미리 정의된 닉네임 목록
  const nicknames = [
    "yogaforyou",
    "danielife",
    "daily_daisy",
    "runraphel",
    "matheus_99",
    "14.jiyun",
    "chaerry555",
    "thisisjun",
    "jessilee",
    "steph.ready",
  ];

  // .user-name 클래스를 가진 모든 요소 선택
  const userNameElements = document.querySelectorAll(".user-name");

  // 각 .user-name 요소에 랜덤 닉네임을 개별적으로 적용
  userNameElements.forEach((userNameElement) => {
    // 랜덤 닉네임 선택
    const randomNickname =
      nicknames[Math.floor(Math.random() * nicknames.length)];

    // 랜덤 닉네임을 해당 요소에 적용
    userNameElement.textContent = randomNickname;
  });
}

// 페이지 로드 후 바로 호출
setRandomNicknames();

// 4. 아이콘 클릭 시 변경
// 모든 heart 클래스를 가진 <i> 요소 선택
const heartIcons = document.querySelectorAll(".bi-heart");

// 각 heart 아이콘에 클릭 이벤트 리스너 추가
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", function () {
    if (heartIcon.classList.contains("bi-heart")) {
      heartIcon.classList.remove("bi-heart");
      heartIcon.classList.add("bi-heart-fill");
    } else {
      heartIcon.classList.remove("bi-heart-fill");
      heartIcon.classList.add("bi-heart");
    }
  });
});

// 모든 bookmarks 클래스를 가진 <i> 요소 선택
const bookmarksIcons = document.querySelectorAll(".bi-bookmarks");

// 각 heart 아이콘에 클릭 이벤트 리스너 추가
bookmarksIcons.forEach((bookmarksIcon) => {
  bookmarksIcon.addEventListener("click", function () {
    if (bookmarksIcon.classList.contains("bi-bookmarks")) {
      bookmarksIcon.classList.remove("bi-bookmarks");
      bookmarksIcon.classList.add("bi-bookmarks-fill");
    } else {
      bookmarksIcon.classList.remove("bi-bookmarks-fill");
      bookmarksIcon.classList.add("bi-bookmarks");
    }
  });
});

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
  fetchPhotosByKeyword("indoor climbing", "influencer1");
  fetchPhotosByKeyword("fitness man", "influencer2");
  fetchPhotosByKeyword("healthy recipe", "influencer3");
  fetchPhotosByKeyword("fitness model", "influencer4");
  fetchPhotosByKeyword("hard workout", "feed1");
  fetchPhotosByKeyword("street basketball", "feed2");
  fetchPhotosByKeyword("bodybuilding meal", "feed3");
  fetchPhotosByKeyword("running", "feed4");
});

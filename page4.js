async function fetchExercisePhotos() {
  const word = "exercise closeup";
  const accessKey = "CnQXEEIJxs7vakHJPHpu6zT_3OjeGDjDXwxYYjJbBcU";
  const url = `https://api.unsplash.com/search/photos?query=${word}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.results); // 검색된 사진을 표시하는 함수 호출
  } catch (error) {
    console.error("사진 불러오기 오류:", error);
  }
}

function displayPhotos(photos) {
  // `exercise` 클래스를 가진 모든 div를 선택
  const exerciseDivs = document.querySelectorAll(".exercise");

  // 이미지가 충분한지 확인
  photos.forEach((photo, index) => {
    if (index < exerciseDivs.length) {
      // exercise 클래스를 가진 div 수만큼 이미지 할당
      const img = document.createElement("img");
      img.src = photo.urls.regular; // 큰 이미지 사용

      // 각 exercise div에 이미지를 추가
      exerciseDivs[index].appendChild(img);
    }
  });
}

// 페이지가 로드되면 사진을 불러옴
fetchExercisePhotos();

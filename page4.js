// async function fetchPhotos() {
//   const word = "indoor exercise";
//   const accessKey = "CnQXEEIJxs7vakHJPHpu6zT_3OjeGDjDXwxYYjJbBcU";
//   const url = `https://api.unsplash.com/search/photos?query=${word}&client_id=${accessKey}&per_page=12`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("사진을 불러오는 데 실패했습니다.");
//     }

//     const data = await response.json();
//     displayPhotos(data.results); // 검색된 사진을 표시하는 함수 호출
//   } catch (error) {
//     console.error("사진 불러오기 오류:", error);
//     alert("사진을 불러오는 데 문제가 발생했습니다.");
//   }
// }

// function displayPhotos(photos) {
//   const photosContainer = document.getElementById("photos");
//   photosContainer.innerHTML = ""; // 기존의 사진을 초기화

//   photos.forEach((photo) => {
//     const photoDiv = document.createElement("div");
//     photoDiv.classList.add("photo-container");

//     const img = document.createElement("img");
//     img.src = photo.urls.small; // 작은 사이즈의 이미지 URL을 사용
//     img.alt = photo.alt_description || "사진 없음";

//     photoDiv.appendChild(img);
//     photosContainer.appendChild(photoDiv);
//   });
// }

// // 페이지가 로드되면 사진을 불러옴
// fetchPhotos();

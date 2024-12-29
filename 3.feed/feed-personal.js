const taps = document.querySelectorAll(".feed-taps div");

for (let tap of taps) {
  tap.addEventListener("click", () => {
    // 모든 탭의 선택 상태 초기화
    taps.forEach((eachtap) => {
      eachtap.classList.remove("tap-selected");
      eachtap.classList.add("tap");
    });
    // 클릭된 탭만 선택 상태로 설정
    tap.classList.add("tap-selected");
    tap.classList.remove("tap");

    // 클릭된 탭에 따라 이미지 소스 변경
    if (tap.id === "exercise") {
      setImageSource("gym");
    } else if (tap.id === "meal") {
      setImageSource("meal");
    } else if (tap.id === "all") {
      setImageSource("all");
    }
  });
}

// 이미지 소스를 설정하는 함수
function setImageSource(type) {
  const photosContainer = document.querySelector(".feed-photos"); // 이미지가 들어갈 부모 div

  // 모든 기존 .photo-s 요소 제거 (새롭게 추가하기 위해)
  const existingPhotos = document.querySelectorAll(".photo-s");
  existingPhotos.forEach((photo) => photo.remove());

  // 'all' 탭을 선택한 경우 18개의 div를 만들도록 설정
  const totalImages = type === "all" ? 16 : 8; // 'all'일 경우 18개, 아니면 9개

  // 이미지 개수만큼 .photo-s div 추가하고, 그 안에 img 태그 삽입
  for (let i = 0; i < totalImages; i++) {
    const newPhotoDiv = document.createElement("div");
    newPhotoDiv.classList.add("photo-s"); // 새로운 .photo-s div 추가
    photosContainer.appendChild(newPhotoDiv);

    const img = document.createElement("img"); // 새로운 img 태그 생성

    // 이미지 소스 설정
    const imgSrc = `./image/${type}${i + 1}.jpg`;
    img.setAttribute("src", imgSrc);
    newPhotoDiv.appendChild(img); // photo-s div에 img 태그 추가
  }
}

// 초기 상태에서 gym 이미지가 기본으로 표시되도록 설정
setImageSource("all");

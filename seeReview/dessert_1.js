



  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.579220, 126.986157), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.579220, 126.986157); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    

function onPopUp(){
    window.open("dessert_1pics.html", "new",'width=600,height=600 left=400, top=80')
}



document.getElementById("image").addEventListener("change", function(event){
  const imageFiles = event.target.files;
  const previewDiv = document.getElementById("preview");

  for(let i = 0; i < imageFiles.length; i++){
     const reader = new FileReader();

     reader.onload = function(event){
        const imageSrc = event.target.result;
        const imageElement = document.createElement("img");
        imageElement.style.width = "22vh";
        imageElement.style.height = "22vh";
        imageElement.src = imageSrc;
        imageElement.classList.add("preview-image");

        previewDiv.appendChild(imageElement);
     };

     reader.readAsDataURL(imageFiles[i]);
  }
});

document.getElementById("submit").addEventListener("click", function(){
   const previewDiv = document.getElementById("preview");
   const resultUl = document.getElementById("upload");

   const previewImages = previewDiv.querySelectorAll(".preview-image");
   for(let i = 0; i < previewImages.length; i++){
      const imageElement = previewImages[i];
      imageElement.style.width = "22vh";
      imageElement.style.height = "22vh";

      const listItem = document.createElement("li");
      listItem.style.float = "left"; // 이미지를 왼쪽에 정렬하기 위해 float 속성 설정
      listItem.appendChild(imageElement);
      resultUl.insertBefore(listItem, resultUl.firstChild); // 첫 번째 자식으로 삽입
   }

   // 미리보기 영역 비우기
   previewDiv.innerHTML = "";

  
});
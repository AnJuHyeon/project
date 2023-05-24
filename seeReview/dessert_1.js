
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


document.getElementById("image").addEventListener("change", function(event){  //change 는 변동이 있을 때 발생
const imageFiles = event.target.files; //이벤트가 발생한 대상 객체
const previewBox = document.getElementById("preview");

for(let i = 0; i < imageFiles.length; i++){
 const reader = new FileReader(); 

 reader.onload = function(event){
  const imageSrc = event.target.result; //이벤트가 발생한 대상 객체를 가리킴 정확히 잘 모르겠음
    const imageElement = document.createElement("img"); //요소 추가
    imageElement.style.width = "22vh"; //이미지 크기 조절
    imageElement.style.height = "22vh";//이미지 크기 조절
    imageElement.src = imageSrc; //이미지 소스의 URL 명시
    imageElement.classList.add("preview-image");//class값 추가

    previewBox.appendChild(imageElement);//특정 부모 노드의 자식노드 리스트 중 마지막 자식으로 붙임.
 };

 reader.readAsDataURL(imageFiles[i]);
}
});

document.getElementById("submit").addEventListener("click", function() {
    const previewBox = document.getElementById("preview");
    const resultUl = document.getElementById("upload");
  
    const previewImages = previewBox.querySelectorAll(".preview-image");
    const maxVisibleImages = 5; //사진 갯수 5개로 제한
  
    const existingImagesCount = resultUl.getElementsByTagName("li").length;
  
    
    if (existingImagesCount + previewImages.length > maxVisibleImages) {
      const imagesToRemoveCount = existingImagesCount + previewImages.length - maxVisibleImages;
      const imagesToRemove = resultUl.querySelectorAll("li:not(.hidden-images)");
  
      for (let i = 0; i < imagesToRemoveCount; i++) {
        resultUl.removeChild(imagesToRemove[i]);
      }
    }//5개 넘으면 삭제
  
    //사진 5개 조절 원래 있던 사진들 앞으로 사진 넣기
    for (let i = previewImages.length - 1; i >= Math.max(previewImages.length - maxVisibleImages, 0); i--) {
      const imageElement = previewImages[i];
      imageElement.style.width = "22vh";
      imageElement.style.height = "22vh";
  
      const listItem = document.createElement("li");
      listItem.appendChild(imageElement);
      resultUl.insertBefore(listItem, resultUl.firstChild);
    }
  
    previewBox.innerHTML = "";
  });


const open = function(){   //open button 눌렀을 때 함수
document.querySelector(".modal").classList.remove("hidden");
}
const close = function(){  //close button 눌렀을 때 함수
document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);//눌렀을 때 이벤트
document.querySelector(".closeBtn").addEventListener("click", close);//눌렀을 때 이벤트
document.querySelector(".bg").addEventListener("click", close);//눌렀을 때 이벤트

const bigPic = document.getElementById("mainPic");
const smallPic = document.querySelectorAll(".small");

for(const i=0; i<smallPic.length;i++){
  smallPic[i].onclick = showBig;
}

function showBig(){
  const newPic = this.src;
  bigPic.set
}
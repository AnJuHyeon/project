let review=document.getElementById("review");
let area=document.getElementById("area");
let food=document.getElementById("food");



area.onmouseout= function() {
    if(area.value===""){
        alert("지역을 선택해주세요");
    }
}

food.onmouseout = function(){
    if(food.value===""){
        alert("음식을 선택해주세요.");
    }
}


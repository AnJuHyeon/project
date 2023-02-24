//필요한 것들 생각 : 리뷰가 너무 짧을 때(10글자 내) 경고 표시. 추가로 지역과 종류를 선택하지 않으면 
//경고 표시까지 



function check_area(){
    var value= document.getElementById("area")
    alert(value.options[value.selectedIndex].value
        
        +"지역을 선택하셨습니다.")
}

function check_food(){
    var value= document.getElementById("food")
    alert(value.options[value.selectedIndex].value
        +"을(를) 선택하셨습니다.")
   
}
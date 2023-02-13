
var inputName=document.querySelector("#name")
var inputId=document.querySelector("#id")
var inputPw=document.querySelector("#pw")
var pwCheck=document.querySelector("#pwCheck")
var nickname=document.querySelector("#nickname")
var join=document.querySelector("#join")

var idFail=document.querySelector(".id_fail")
var pwCheckFail=document.querySelector(".pwCheck_fail")
var nicknameFail=document.querySelector(".nickname_fail")

join.disabled=true;

inputId.onkeyup = function(){
  if(moreThanSix(inputId.value)) {
    idFail.classList.add('hide')

  }
  else{
    idFail.classList.remove('hide')
  }
}

function moreThanSix(value){
  return value.length>=6
}

pwCheck.onkeyup=function(){
  if(pwSame(inputPw.value, pwCheck.value )){
    pwCheckFail.classList.add('hide')
  }
  else{
    pwCheckFail.classList.remove('hide')
  }
}
function pwSame(password1,password2){
  if(password1===password2){
    return true;
  }
  else{
    return false;
  }
}
nickname.onkeyup=function(){
  if(moreThanOne(nickname.value)){
    nicknameFail.classList.add('hide')
  }
  else{
    nicknameFail.classList.remove('hide')
  }
}

function moreThanOne(value){
  return value.length>=1
}

inputName.addEventListener('keyup', button)
inputId.addEventListener('keyup', button)
inputPw.addEventListener('keyup', button)
pwCheck.addEventListener('keyup', button)
nickname.addEventListener('keyup', button)

function button(){
  switch(!(inputName.value && inputId.value && inputPw.value && pwCheck.value && nickname.value)){
  case true : join.disabled = true; break;
  case false : join.disabled = false; break;
}
}
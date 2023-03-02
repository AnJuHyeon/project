
let inputName=document.getElementById("name")
let inputId=document.getElementById("id")
let inputPw=document.getElementById("pw")
let pwCheck=document.getElementById("pwCheck")
let nickname=document.getElementById("nickname")
let join=document.getElementById("join")

let idFail=document.querySelector(".id_fail")
let pwCheckFail=document.querySelector(".pwCheck_fail")
let nicknameFail=document.querySelector(".nickname_fail")

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
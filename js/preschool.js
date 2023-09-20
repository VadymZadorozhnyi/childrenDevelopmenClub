window.onload = function() {
    window.setTimeout(function() {
        document.body.classList.add("loaded")
    }, 3000)
}
 

document.getElementById("btnTest").addEventListener("click", function() {
    btnTest.style.display = "none"
    test.style.display = "block"
    let question = test.children
    let i = 0
    let point = 0

    question[i].style.display = "block"
    
    document.addEventListener("click", function() {
      let targetImg = event.target
      if(targetImg.localName == "img") {
        targetImg.style.border = "2px solid red"
        question[i].style.display = "none"
        i++
        if( i < 10) {
            question[i].style.display = "block" 
        } else if(i == 10){
            result.style.display = "block"
            document.getElementById("result").addEventListener("click", function() { 
            result.style.display = "none"
            resultTest.innerHTML = "Ваш результат: " + point + " балів із 10"
            })
        }
      }
}) 
document.addEventListener("mouseup", function(event) {
        let target = event.target;
        if(target.className == "imgCorrect") {
            point++
        }
    })

})


let preschoolForm = document.getElementById("preschoolForm")
let nameInput = document.getElementById("userName")
let sernameInput = document.getElementById("userSername")
let emailInput = document.getElementById("userEmail")
let phoneInput = document.getElementById("userPhone")
let nameChildInput = document.getElementById("nameChild")
let sernameChildInput = document.getElementById("sernameChild")

const savedData = localStorage.getItem('formData');

if (savedData) {
    const parsedData = JSON.parse(savedData);
    nameInput.value = parsedData.name;
    sernameInput.value = parsedData.sername;
    emailInput.value = parsedData.email;
    phoneInput.value = parsedData.phone;
    nameChildInput.value = parsedData.nameChild;
    sernameChildInput.value = parsedData.sernameChild;
}

preschoolForm.addEventListener('submit', function (e) {
    const formData = {
        name: nameInput.value,
        sername: sernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        nameChild: nameChildInput.value,
        sernameChild: sernameChildInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});

function checkForm(){
  let userName = document.getElementById("userName").value
  errorName.style.display = "none"
  nullName.style.display = "none"

  if (userName == "") {
      nullName.style.display = "block"
      return false 
  }

  let templateName = /^[а-яА-Я-a-zA-Z]/i
  if(!templateName.test(userName)) {
      errorName.style.display = "block"
      return false 
  } 
  

  let userSername = document.getElementById("userSername").value
  errorSername.style.display = "none"
  nullSername.style.display = "none"

  if (userSername == "") {
      nullSername.style.display = "block"
      return false 
  }

  let templateSername = /^[а-яА-Я-a-zA-Z]/i
  if(!templateSername.test(userSername)) {
      errorSername.style.display = "block"
      return false 
  }
 

  let userEmail = document.getElementById("userEmail").value
  errorEmail.style.display = "none"
  nullEmail.style.display = "none"

  if (userEmail == "") {
      nullEmail.style.display = "block"
      return false 
  }

  let templateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!templateEmail.test(userEmail)) {
      errorEmail.style.display = "block"
      return false 
  }
  

  let userPhone =  document.getElementById("userPhone").value
  errorPhone.style.display = "none"
  nullPhone.style.display = "none"

  if (userPhone == "" ) {
      nullPhone.style.display = "block"
      return false 
  }

  let templatePhone = /^\d/;
  if(!templatePhone.test(userPhone) || userPhone.length < 10) {
      errorPhone.style.display = "block"
      return false 
  }
  

  let nameChild = document.getElementById("nameChild").value
  errorNameChild.style.display = "none"
  nullNameChild.style.display = "none"

  if (nameChild == "") {
      nullNameChild.style.display = "block"
      return false 
  }

  let templateNameChild = /^[а-яА-Я-a-zA-Z]/i
  if(!templateNameChild.test(nameChild)) {
      errorNameChild.style.display = "block"
      return false 
  }

  let sernameChild = document.getElementById("sernameChild").value
  errorSernameChild.style.display = "none"
  nullSernameChild.style.display = "none"

  if (sernameChild == "") {
      nullSernameChild.style.display = "block"
      return false 
  }

  let templateSernameChild = /^[а-яА-Я-a-zA-Z]/i
  if(!templateSernameChild.test(sernameChild)) {
      errorSernameChild.style.display = "block"
      return false 
  }

 
  return true
}



var popupContainer = document.getElementById('popup-container');
var closePopupButton = document.getElementById('close-popup');


setTimeout(function () {
    popupContainer.style.opacity = '1';
    popupContainer.style.pointerEvents = 'auto';
}, 60000); 


closePopupButton.addEventListener('click', function () {
    popupContainer.style.opacity = '0';
    popupContainer.style.pointerEvents = 'none';
});

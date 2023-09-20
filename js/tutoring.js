window.onload = function() {
    window.setTimeout(function() {
        document.body.classList.add("loaded")
    }, 3000)
}


let tutoringForm = document.getElementById("tutoringForm")
let nameInput = document.getElementById("first_name")
let sernameInput = document.getElementById("last_name")
let emailInput = document.getElementById("email")
let phoneInput = document.getElementById("phone")


const tutoringData = localStorage.getItem('formTutoringData');

if (tutoringData) {
    const parsedData = JSON.parse(tutoringData);
    nameInput.value = parsedData.name;
    sernameInput.value = parsedData.sername;
    emailInput.value = parsedData.email;
    phoneInput.value = parsedData.phone;

}

tutoringForm.addEventListener('submit', function (e) {
    const formTutoringData = {
        name: nameInput.value,
        sername: sernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };
    localStorage.setItem('formTutoringData', JSON.stringify(formTutoringData));
});





function checkTutoringForm () {
    let first_name = document.getElementById("first_name").value
    tutoringInputNull.style.display = "none"
    tutoringInputError.style.display = "none"
    if (first_name == "") {
        tutoringInputNull.style.display = "block"
        return false
    }
    let templateName = /^[а-яА-Я-a-zA-Z]/i
    if(!templateName.test(first_name)) {
        tutoringInputError.style.display = "block"
        return false 
    } 


    let last_name = document.getElementById("last_name").value
    tutoringSernameNull.style.display = "none"
    tutoringSernameError.style.display = "none"
    if (last_name == "") {
        tutoringSernameNull.style.display = "block"
        return false
    }
    let templateSername = /^[а-яА-Я-a-zA-Z]/i
    if(!templateSername.test(last_name)) {
        tutoringSernameError.style.display = "block"
        return false 
    } 


    let email = document.getElementById("email").value
    tutoringEmailNull.style.display = "none"
    tutoringEmailError.style.display = "none"
    if (email == "") {
        tutoringEmailNull.style.display = "block"
        return false
    }
    let templateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!templateEmail.test(email)) {
        tutoringEmailError.style.display = "block"
        return false 
    } 


    let phone = document.getElementById("phone").value
    tutoringPhoneNull.style.display = "none"
    tutoringPhoneError.style.display = "none"
    if (phone == "") {
        tutoringPhoneNull.style.display = "block"
        return false
    }
    let templatePhone = /^\d/;
    if(!templatePhone.test(phone) || phone.length < 10) {
        tutoringPhoneError.style.display = "block"
        return false 
    } 

    let date = document.getElementById("date").value
    tutoringDateNull.style.display = "none"
    if (date == "") {
        tutoringDateNull.style.display = "block"
        return false
    }
    if (date < new Date()) {
        tutoringDateError.style.display = "block"
        return false
    }
    
    let classRadio = document.getElementsByName("group1")
    
    if(!(classRadio[0].checked || classRadio[1].checked || classRadio[2].checked || classRadio[3].checked)) {
        tutoringBoxNull.style.display = "block"
        return false
    }
    tutoringBoxNull.style.display = "none"

    let lessonRadio = document.getElementsByName("lesson")
    if(!(lessonRadio[0].checked || lessonRadio[1].checked || lessonRadio[2].checked)) {
        tutoringLessonNull.style.display = "block" 
        return false
    }
    tutoringLessonNull.style.display = "none"
}





let enter_btn = document.querySelector(".btnApi");
let card = document.querySelector(".card");
enter_btn.addEventListener("click", getFacts);

function getFacts() {
    
    let inputApi = document.querySelector(".inputApi").value;
    let card_title = document.querySelector(".card-title");
    let card_text = document.querySelector(".card-text");
    let val
    if(inputApi !== "") {
        card.classList.remove("d-none");
        fetch("http://numbersapi.com/" + inputApi )
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            card_title.innerText = inputApi;
            var sourceText = data;
            var sourceLang = 'en';
            var targetLang = 'uk';
            var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
            $.getJSON(url, function(data) {
                card_text.innerHTML = (data[0][0][0]);
            });
              
        });
    }
}



var cells = document.querySelectorAll('#schedule td');

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});


function populateInput(){
    var cells = document.querySelectorAll('#schedule td');
    var selectedCellData = [];
    cells.forEach(function (cell) {
        if (cell.classList.contains('selected')) {
            var hour = cell.dataset.hour;
            var day = cell.dataset.day;
            selectedCellData.push({day: day, hour: hour });
        }
    });   
    console.log(selectedCellData);
    let input = document.getElementById('date');

    var valuesToSet = selectedCellData.map(function (item) {
        return item.day + ' ' + item.hour;
    });
    
    input.value = valuesToSet.join(', ');
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

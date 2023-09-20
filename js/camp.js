window.onload = function() {
    window.setTimeout(function() {
        document.body.classList.add("loaded")
    }, 3000)
}

document.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('.animated-text');
    var words = title.textContent.split(' ');
    title.textContent = '';
    words.forEach(function (word, index) {
        var span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = index * 0.5 + 's'; 
        title.appendChild(span);
        if (index < words.length - 1) {
            title.appendChild(document.createTextNode(' '));
        }
    });
});


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
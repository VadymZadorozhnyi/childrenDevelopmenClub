window.onload = function() {
        window.setTimeout(function() {
            document.body.classList.add("loaded")
        }, 3000)
    }


function mainMore() {
    mainMoreBlock.style.display = "block"
    mainMoreClose.style.display = "block"
    let MoreClose = document.getElementById("mainMoreClose")
    MoreClose.addEventListener("click", function () {
    mainMoreBlock.style.display = "none"
    mainMoreClose.style.display = "none"
})
}

function addPopup() {
    var popup = document.getElementById("aboutText");
    popup.classList.toggle("show");
}
function addPopupActivity() {
    var popup = document.getElementById("aboutActivityText");
    popup.classList.toggle("show");
}
function addPopupSociability() {
    var popup = document.getElementById("aboutSociabilityText");
    popup.classList.toggle("show");
}
function addPopupArt() {
    var popup = document.getElementById("aboutArtText");
    popup.classList.toggle("show");
}
function addPopupIndividuality() {
    var popup = document.getElementById("aboutIndividualityText");
    popup.classList.toggle("show");
}





var blocks = document.querySelectorAll('.services_block');

blocks.forEach(function (block) {
    block.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)'; 
    });
    block.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});








function changeImage(imageSrc) {
var images = document.querySelectorAll('.thumbnails img');
var currentImage = document.getElementById('currentImage');
var isImageZoomed = false;

images.forEach(function (image) {
    image.addEventListener('click', function () {
        currentImage.src = image.src;
        if (isImageZoomed) {
            currentImage.style.transform = 'scale(1)';
            currentImage.style.transition = 'transform 0.5s';
            isImageZoomed = false;
        }
    });
});

currentImage.addEventListener('click', function () {
    if (isImageZoomed) {
        currentImage.style.transform = 'scale(1)';
        currentImage.style.transition = 'transform 0.5s';
        isImageZoomed = false;
    } else {
        currentImage.style.transform = 'scale(2)';
        currentImage.style.transition = 'transform 0.5s';
        isImageZoomed = true;
    }
});

currentImage.addEventListener('dblclick', function () {
    currentImage.style.transform = 'scale(1)';
    currentImage.style.transition = 'transform 0.5s';
    isImageZoomed = false;
});
  
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







document.addEventListener('DOMContentLoaded', function () {
    
    var title = document.querySelector('.animated-error');

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
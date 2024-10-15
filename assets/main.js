var images = document.querySelectorAll('main img')
images.forEach(function (image) {
    image.addEventListener('click', function (event) {
        event.target.classList.toggle('full-screen')
        if (event.target.classList.contains('full-screen')) {
            event.target.style.transform = 'translate(-50%, -50%) scale(' + (window.innerHeight / event.target.naturalHeight) + ')'
        } else {
            event.target.style.transform = 'none'
        }
    })
})
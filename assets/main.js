const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')

galleryImageModal.showModal()
galleryImageModal.addEventListener('click', () => {
    galleryImageModal.close()
})


const img = document.querySelectorAll('img')
let html = ''
img.forEach((img) => {
    img.addEventListener('click', () => {
        galleryImageModal.showModal()
        html = `<img src="${img.src}" alt="${img.alt}" style="width: 20vw; height: auto;">`
        galleryImageModal.innerHTML = html
    })
})
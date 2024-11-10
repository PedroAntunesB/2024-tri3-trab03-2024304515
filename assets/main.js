const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')

galleryImageModal.showModal()
galleryImageModal.addEventListener('click', () => {
    galleryImageModal.close()
})


const img = document.querySelectorAll('img')
const content = document.querySelector('.content')
let antes = document.querySelector('.antes')
img.forEach((img) => {
    img.addEventListener('click', () => {
        content.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="width: 20vw; height: auto;">`
        galleryImageModal.showModal()
    })
})

const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.fotos img')
const galleryBtNext = galleryImageModal.querySelector('.depois')
let nextImg = null //vai pegar a proxima imagem

galleryBtNext.addEventListener('click', () => {
    galleryImageModal.close()
    nextImg.click()
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    nextImg = img.parentNode.nextElementSibling.querySelector('img') // DICASSSS
    galleryContent.innerHTML = `<img src="${nextImg.src}" alt="${nextimg.alt}">`
    galleryImageModal.showModal()
  })
})  
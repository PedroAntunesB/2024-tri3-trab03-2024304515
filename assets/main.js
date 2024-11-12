const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')

galleryImageModal.showModal()
galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close()
})

const img = document.querySelectorAll('img')
const content = document.querySelector('.content')
const btprev = document.querySelector('.antes')
const btnext = galleryImageModal.querySelector('.depois')
const imgs = document.querySelectorAll('.fotos img')
const arrayelements = Array.from(imgs)
let i = 0

img.forEach((imgElement, index) => {
  imgElement.addEventListener('click', () => {
    content.innerHTML = `<img src="${imgElement.src}" alt="${imgElement.alt}" style="width: 40vw; height: 50vh;">`
    galleryImageModal.showModal()

    i = arrayelements.indexOf(imgElement)
  })
})
btnext.addEventListener('click', () => {
  if (i >= 0 && i < arrayelements.length - 1) {
    i++
    content.innerHTML = `<img src="${arrayelements[i].src}" alt="${arrayelements[i].alt}" style="width: 40vw; height: 50vh;">`
  }
})

btprev.addEventListener('click', () => {
  if (i >= 0 && i < arrayelements.length - 1) {
    i--
    content.innerHTML = `<img src="${arrayelements[i].src}" alt="${arrayelements[i].alt}" style="width: 40vw; height: 50vh;">`
    console.log(i)
    console.log(arrayelements[i].src)
    console.log('imagem mudada')
  } else {
    console.log('nao tem mais imagens')
  }
})
const images = document.querySelectorAll('.wrapper .image img')
const gallery = document.querySelector(' .gallery')
const galleryImage = document.querySelector(' .gallery-inner img')
const close = document.querySelector('.gallery .close')
const next = document.querySelector('.control.next')
const prev = document.querySelector('.control.prev')

let current_index = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        current_index = index
        showGallery()
    })
})

function showGallery() {
    current_index = images.length - 1
            ? next.classList.add('hide')
            : next.classList.remove('hide')
    
    current_index == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src

}

close.addEventListener('click', () => {
    gallery.classList.remove('show')
})

next.addEventListener('click', () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined
    showGallery()
})

prev.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined
    showGallery()
})

// esc click
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) gallery.classList.remove('show')
})



const images = document.querySelectorAll('.image');
const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('img');

// Event untuk membuka popup
images.forEach(image => {
    image.addEventListener('click', () => {
        const fullImage = image.getAttribute('data-image');
        popupImage.src = fullImage;
        popup.style.display = 'flex';
    });
});

// Event untuk keluar dari popup
popup.addEventListener('click', (e) => {
    if (e.target !== popupImage) {
        popup.style.display = 'none';
    }
});
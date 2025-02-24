const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.carousel-buttons button');
const descriptions = document.querySelectorAll('.description');

let currentIndex = 0;

function showSlide(index) {
  images.forEach((image, i) => {
    image.classList.remove('active');
    descriptions[i].style.display = 'none';
  });
  images[index].classList.add('active');
  descriptions[index].style.display = 'block';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('prev')) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      currentIndex = (currentIndex + 1) % images.length;
    }
    showSlide(currentIndex);
  });
});

// Mostrar la primera imagen al cargar la página
showSlide(0);
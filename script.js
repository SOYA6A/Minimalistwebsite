let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.getElementById('contact');
    contactSection.style.opacity = '1';
    contactSection.style.transform = 'translateY(0)'
    });

  

     
    document.getElementById('ShopNow').addEventListener('click', function() {
        window.location.href = 'shop.html'; // Redirige vers la page shop  
    });

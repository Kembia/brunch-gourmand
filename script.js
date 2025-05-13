// Images pour le slider
const sliderImages = [
    '/images/breakfast.jpg',
    'images/slider2.jpg',
    'images/slider3.jpg',
    'images/slider4.jpg'
];

// Configuration du slider
let currentSlide = 0;
const slider = document.querySelector('.slider');

// Création des éléments image pour le slider
sliderImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = index === 0 ? 'active' : '';
    slider.appendChild(img);
});

// Fonction pour changer de slide
function nextSlide() {
    const images = slider.querySelectorAll('img');
    images[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % images.length;
    images[currentSlide].classList.add('active');
}

// Changement automatique des slides
setInterval(nextSlide, 5000);

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Ici, vous pouvez ajouter le code pour envoyer les données à votre backend
        console.log('Formulaire soumis :', { name, email, message });
        
        // Réinitialisation du formulaire
        contactForm.reset();
        
        // Message de confirmation
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    });
}

// Animation du menu au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scroll vers le bas
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}); 
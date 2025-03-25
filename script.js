// Attendre le chargement complet de la page
document.addEventListener('DOMContentLoaded', () => {
    // Masquer le loader
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // Variables
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const skillLevels = document.querySelectorAll('.skill-level');
    const fadeElements = document.querySelectorAll('.fade-in');
    const currentPage = document.querySelector('section.active').id;

    // Fonction pour animer les niveaux de compétence (page compétences)
    function animateSkillLevels() {
        skillLevels.forEach((level) => {
            const levelValue = level.getAttribute('data-level');
            setTimeout(() => {
                level.style.width = `${levelValue}%`;
            }, 300);
        });
    }

    // Si on est sur la page compétences, animer les barres
    if (currentPage === 'competences') {
        animateSkillLevels();
    }

    // Fonction pour activer l'animation des éléments au défilement
    function checkFadeElements() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('appear');
            }
        });
    }

    // Initialiser les animations
    checkFadeElements();
    
    // Navigation - Effet de scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
        
        checkFadeElements();
    });

    // Menu mobile
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('.send-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Simuler la réponse du serveur
                alert('Votre message a été envoyé avec succès !');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Animation hover sur les projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Animation hover sur les compétences
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
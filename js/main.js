document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Change l'icône du menu (barres ou croix)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optionnel : Fermer le menu si on clique en dehors (pour les mobiles)
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
    console.log("Page Profil Étudiant chargée !");
    });

    document.addEventListener('DOMContentLoaded', function() {
    console.log("Espace Recruteurs chargé !");
    });

    document.addEventListener('DOMContentLoaded', function() {
    console.log("Page À Propos chargée !");
    });

    document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
        });
    }

    console.log("Page Contact chargée !");
});

    console.log("SystemXëy.sn est prêt !");
});
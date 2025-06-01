// ==========================================================================
// GESTION DE LA NAVIGATION
// ==========================================================================

/**
 * Affiche une section spécifique et masque les autres
 * @param {string} sectionId - L'ID de la section à afficher
 */
function showSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Ajouter l'animation de fade-in
        targetSection.classList.add('fade-in');

        // Scroll vers le haut de la page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Masquer le menu mobile après clic
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

/**
 * Toggle du menu mobile
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ==========================================================================
// GESTION DES PROJETS
// ==========================================================================

/**
 * Affiche les détails d'un projet spécifique
 * @param {string} projectId - L'ID du projet
 */
function showProjectDetails(projectId) {
    // Masquer tous les détails de projets
    const allDetails = document.querySelectorAll('.project-details');
    allDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    // Afficher les détails du projet sélectionné
    const projectDetails = document.getElementById(projectId + '-details');
    if (projectDetails) {
        projectDetails.classList.add('active');

        // Scroll fluide vers les détails du projet
        setTimeout(() => {
            projectDetails.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
}

/**
 * Masque les détails des projets si on clique ailleurs
 */
function hideProjectDetailsOnClickOutside() {
    document.addEventListener('click', function(event) {
        // Vérifier si le clic n'est pas sur une carte de projet ou ses détails
        if (!event.target.closest('.project-card') &&
            !event.target.closest('.project-details')) {

            const allDetails = document.querySelectorAll('.project-details');
            allDetails.forEach(detail => {
                detail.classList.remove('active');
            });
        }
    });
}

// ==========================================================================
// GESTION DU FORMULAIRE DE CONTACT
// ==========================================================================

/**
 * Envoie un email via le client de messagerie par défaut
 * @param {Event} event - L'événement de soumission du formulaire
 */
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construire l'URL mailto
    const mailtoUrl = `mailto:tim.broussard@etu.umontpellier.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n ${name}\n ${email}`)}`;

    // Ouvrir le client email
    window.location.href = mailtoUrl;

    // Réinitialiser le formulaire
    event.target.reset();

    alert('Votre client email va s\'ouvrir pour envoyer le message !');
}

// Télécharger le CV
function downloadCV() {
    // Dans un vrai projet, vous ajouteriez ici le lien vers votre fichier CV
    window.open('ressources/cv/CV-tim-broussard.pdf', '_blank');
}

// Fermer les détails de projet si on clique ailleurs
document.addEventListener('click', function(event) {
    if (!event.target.closest('.project-card') && !event.target.closest('.project-details')) {
        const allDetails = document.querySelectorAll('.project-details');
        allDetails.forEach(detail => detail.classList.remove('active'));
    }
});

// Animation au scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Affiche le bouton quand on scrolle vers le bas
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Scroll fluide vers le haut
document.getElementById('scrollTopBtn').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

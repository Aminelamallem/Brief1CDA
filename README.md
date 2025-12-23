White Wrestling Website

Bienvenue sur le site White Wrestling, une plateforme interactive pour les passionnés de wrestling avec gestion de comptes utilisateurs et retours d’expérience des membres.

Fonctionnalités
1. Authentification

Inscription :

Les utilisateurs peuvent créer un compte avec un email valide et un mot de passe d’au moins 6 caractères.

Le mot de passe est haché avec SHA-256 avant d’être stocké dans localStorage.

Connexion :

Les utilisateurs peuvent se connecter avec leur email et mot de passe.

Vérification du mot de passe haché pour plus de sécurité.

Redirection vers la page de profil après connexion réussie.

Gestion des erreurs avec retour visuel si email ou mot de passe incorrect.

Déconnexion :

Les utilisateurs peuvent se déconnecter via la navbar.

L’état de connexion est stocké dans localStorage.

2. Slider de Témoignages

Affiche les avis des membres avec photo, texte et note en étoiles.

Le slider change automatiquement toutes les 5 secondes.

Les étoiles sont affichées dynamiquement selon la note.

3. Navbar / Menu

Menu responsive qui peut être ouvert ou fermé via un bouton.

Affiche des liens différents selon l’état de connexion de l’utilisateur :

Non connecté : Login et Register.

Connecté : Profil et Logout.

La couleur de la navbar change lorsque l’utilisateur est connecté.

4. Stockage et sécurité

Utilisation de localStorage pour :

Sauvegarder les informations d’inscription (registerEmail et mot de passe haché).

Suivre l’état de connexion (isLoggedIn).

Garder l’email de l’utilisateur connecté (loginEmail).

Mot de passe haché avec SHA-256 pour éviter le stockage en clair.

Technologies utilisées

HTML : Structure des pages.

CSS : Styles et mise en page, gestion du responsive.

JavaScript :

Gestion de l’authentification.

Gestion du slider.

Contrôle du menu et de la navbar.

Hachage sécurisé des mots de passe (SHA-256).

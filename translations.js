// Translations data
const translations = {
    fr: {
        // Header
        name: "Lucas HUBLART",
        title: "Ingénieur Informatique",

        // Navigation
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_projects: "Projets",
        nav_contact: "Contact",

        // About Section
        about_title: "À propos de moi",
        about_text: "Étudiant en dernière année d'école d'ingénieure en informatique à l'UTBM, actuellement en échange à l'UQAC (Canada).\nJe me spécialise en génie logiciel avec des compétences en développement logiciel, programmation objet avancée et architectures parallèles et communication organisationnelle.\n\nCurieux, dynamique et adaptable, j'ai acquis de l'expérience à travers des projets académiques collaboratifs ainsi que des stages en développement logiciel.\n\n🔍 À la recherche d'un stage de fin d'études (23 à 26 semaines) à partir de janvier 2026 dans le domaine du développement logiciel / ingénierie informatique.",

        // Skills Section
        skills_title: "Compétences",
        skills_languages: "Langages de programmation",
        skills_frameworks: "Frameworks & Technologies",
        skills_other: "Outils & Méthodologies",
    skills_ms: "Outils Microsoft",
        // Experience Section
    experience_title: "Expérience professionnelle",
    exp1_title: "Stagiaire analyste programmeur",
    exp1_date: "Sept. 2024 - Fév. 2025 · 6 mois",
    exp1_company: "APRR · Stage · Saint-Apollinaire (FR) · Sur site",
    exp1_b1: "Réalisation de la maintenance applicative",
    exp1_b2: "Développement et amélioration d’interfaces graphiques",
        exp1_b3: "Contribution à un projet utilisant la Clean Architecture et Kafka pour une gestion efficace des messages",

        exp2_title: "Jobs Étudiants",
        exp2_date: "2022 - 2024",
        exp2_company: "Diverses entreprises · Intérimaire",
        exp2_description: "Opérateur de production, Employé de restauration, Manutentionnaire, Agent de Tri et Ripeur",

        exp3_title: "Stage ouvrier",
        exp3_date: "Janv. 2022 - Fév. 2022 · 2 mois",
        exp3_company: "VERNET BEHRINGER · Stage · Dijon (FR) · Sur site",
        exp3_description: "Intégration du service électrique et mécanique dans une entreprise industrielle",

        exp4_title: "Employé rayon",
        exp4_date: "Juil. 2021 - Août 2021 · 2 mois",
        exp4_company: "Super U / U Express - Groupe Bourassin · CDD · Arc-sur-Tille (FR) · Sur site",
        exp4_b1: "Mise en rayon des produits au secteur liquide (boissons, eaux, alcools, etc.)",
        exp4_b2: "Vérification des dates de péremption et rotation des stocks",
        exp4_b3: "Conseil et orientation des clients",
        exp4_b4: "Participation à la tenue du rayon et aux opérations promotionnelles",        // Education Section
        education_title: "Formation",
        edu1_title: "Diplôme d'Ingénieur en Informatique",
    edu1_date: "2021 - 2026",
        edu1_school: "UTBM - Université de Technologie de Belfort-Montbéliard",
        edu1_description: "Spécialisation en génie informatique et systèmes intelligents.",
    edu2_title: "Semestre d'échange - FERIT",
    edu2_date: "Février 2023 - Juillet 2023",
    edu2_school: "FERIT, Osijek - Croatie",
    edu2_description: "Cours en informatique et systèmes, ouverture internationale et projets en équipe.",
    edu3_title: "Semestre d'échange - UQAC",
    edu3_date: "Août 2025 - Décembre 2025",
    edu3_school: "Université du Québec à Chicoutimi (UQAC) - Canada",
    edu3_description: "Approfondissement en développement logiciel et technologies modernes.",

        // Projects Section
        projects_title: "Projets",
        project1_title: "Running App Android",
        project1_description: "Application mobile de tracking de course développée en Kotlin pour Android. Suivi GPS, statistiques de performance et historique des courses.",
        project2_title: "PLStek - Angular",
        project2_description: "Application web développée avec Angular et TypeScript. Interface moderne et responsive pour la gestion de projets.",
        project3_title: "Munchkin Game",
        project3_description: "Implémentation du jeu de cartes Munchkin en Java avec interface graphique et gestion multi-joueurs.",
        project4_title: "Projet E-commerce Web",
        project4_description: "Site e-commerce complet développé en PHP avec gestion de panier, paiement et administration.",

        // Project links
        github_link: "Voir sur GitHub",

        // Contact Section
        contact_title: "Me contacter",
        contact_text: "N'hésitez pas à me contacter pour toute opportunité ou collaboration.",

        // Footer
        footer_rights: "Tous droits réservés."
    },
    en: {
        // Header
        name: "Lucas HUBLART",
        title: "Computer Engineer",

        // Navigation
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_contact: "Contact",

    // About Section
    about_title: "About Me",
    about_text: "Final-year computer engineering student at UTBM, currently on exchange at UQAC (Canada).\nI specialize in software engineering with skills in software development, advanced object-oriented programming, parallel architectures, and organizational communication.\n\nCurious, dynamic, and adaptable, I have gained experience through collaborative academic projects as well as software development internships.\n\n🔍 Seeking a final-year internship (23 to 26 weeks) starting January 2026 in software development / software engineering.",

        // Skills Section
        skills_title: "Skills",
        skills_languages: "Programming Languages",
        skills_frameworks: "Frameworks & Technologies",
        skills_other: "Tools & Methodologies",
    skills_ms: "Microsoft license",

        // Experience Section
    experience_title: "Professional Experience",
    exp1_title: "Software developer intern",
    exp1_date: "Sep 2024 - Feb 2025 · 6 months",
    exp1_company: "APRR · Internship · Saint-Apollinaire (FR) · On-site",
    exp1_b1: "Performed application maintenance",
    exp1_b2: "Developed and improved user interfaces",
        exp1_b3: "Contributed to a project using Clean Architecture and Kafka for efficient message handling",

        exp2_title: "Student Jobs",
        exp2_date: "2022 - 2024",
        exp2_company: "Various companies · Temporary",
        exp2_description: "Production operator, Restaurant employee, Warehouse worker, Sorting agent and Waste collector",

        exp3_title: "Worker internship",
        exp3_date: "Jan 2022 - Feb 2022 · 2 months",
        exp3_company: "VERNET BEHRINGER · Internship · Dijon (FR) · On-site",
        exp3_description: "Integration in the electrical and mechanical department within an industrial company",

        exp4_title: "Shelf stocker",
        exp4_date: "Jul 2021 - Aug 2021 · 2 months",
        exp4_company: "Super U / U Express - Groupe Bourassin · Fixed-term · Arc-sur-Tille (FR) · On-site",
        exp4_b1: "Stocked products in the beverages aisle",
        exp4_b2: "Checked expiry dates and rotated stock",
        exp4_b3: "Advised and guided customers",
        exp4_b4: "Helped maintain the department and ran promotional operations",        // Education Section
        education_title: "Education",
        edu1_title: "Computer Engineering Degree",
    edu1_date: "2021 - 2026",
        edu1_school: "UTBM - University of Technology of Belfort-Montbéliard",
        edu1_description: "Specialization in computer engineering and intelligent systems.",
    edu2_title: "Exchange Semester - FERIT",
    edu2_date: "February 2023 - July 2023",
    edu2_school: "FERIT, Osijek - Croatia",
    edu2_description: "Computer and systems courses, international exposure and team projects.",
    edu3_title: "Exchange Semester - UQAC",
    edu3_date: "August 2025 - December 2025",
    edu3_school: "University of Quebec at Chicoutimi (UQAC) - Canada",
    edu3_description: "Advanced coursework in software development and modern technologies.",

        // Projects Section
        projects_title: "Projects",
        project1_title: "Running App Android",
        project1_description: "Mobile running tracking application developed in Kotlin for Android. GPS tracking, performance statistics and running history.",
        project2_title: "PLStek - Angular",
        project2_description: "Web application developed with Angular and TypeScript. Modern and responsive interface for project management.",
        project3_title: "Munchkin Game",
        project3_description: "Implementation of the Munchkin card game in Java with graphical interface and multiplayer management.",
        project4_title: "E-commerce Web Project",
        project4_description: "Complete e-commerce website developed in PHP with cart management, payment and administration.",

        // Project links
        github_link: "View on GitHub",

        // Contact Section
        contact_title: "Contact Me",
        contact_text: "Feel free to contact me for any opportunity or collaboration.",

        // Footer
        footer_rights: "All rights reserved."
    }
};

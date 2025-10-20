# Portfolio Lucas HUBLART

Portfolio personnel bilingue (FR/EN) présentant mon parcours, mes compétences et mes projets.

## 🚀 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Changement de langue FR/EN en temps réel
- ✅ Animations fluides au scroll
- ✅ Navigation smooth scroll
- ✅ Sections : À propos, Compétences, Expérience, Formation, Projets, Contact
- ✅ Optimisé pour mobile, tablette et desktop

## 📁 Structure du projet

```
Portfollio/
│
├── index.html          # Page principale HTML
├── styles.css          # Feuille de styles CSS
├── script.js           # JavaScript pour les interactions
├── translations.js     # Fichier de traductions FR/EN
└── README.md          # Ce fichier
```

## 🛠️ Personnalisation

### Modifier vos informations

1. **Informations personnelles** : Éditez le fichier `translations.js` pour mettre à jour :
   - Nom et titre
   - Description personnelle
   - Compétences
   - Expériences professionnelles
   - Formation
   - Projets

2. **Liens sociaux** : Dans `index.html`, modifiez les liens dans la section `.social-links` :
   ```html
   <a href="mailto:votre.email@example.com">
   <a href="https://linkedin.com/in/votreprofil">
   <a href="https://github.com/votreprofil">
   ```

3. **Couleurs** : Dans `styles.css`, modifiez les variables CSS en haut du fichier :
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #1e40af;
       /* ... */
   }
   ```

### Ajouter des sections

Pour ajouter une nouvelle section :

1. Ajoutez le HTML dans `index.html` :
   ```html
   <section id="ma-section" class="section">
       <div class="container">
           <h2 class="section-title" data-i18n="ma_section_titre">Titre</h2>
           <!-- Contenu -->
       </div>
   </section>
   ```

2. Ajoutez les traductions dans `translations.js` :
   ```javascript
   fr: {
       ma_section_titre: "Mon titre en français"
   },
   en: {
       ma_section_titre: "My title in English"
   }
   ```

3. Ajoutez le lien dans la navigation (`index.html`) :
   ```html
   <li><a href="#ma-section" data-i18n="nav_ma_section">Ma Section</a></li>
   ```

## 🌐 Déploiement

### Option 1 : Ouvrir localement
Ouvrez simplement `index.html` dans votre navigateur.

### Option 2 : GitHub Pages
1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Allez dans Settings > Pages
4. Sélectionnez la branche main et le dossier root
5. Votre site sera disponible à `https://votrenom.github.io/repository`

### Option 3 : Netlify
1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Glissez-déposez votre dossier dans Netlify Drop
3. Votre site sera en ligne instantanément

### Option 4 : Vercel
1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre projet
3. Déployez en un clic

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ Mobile (iOS & Android)
- ✅ Tablettes
- ✅ Desktop

## 📝 License

Ce projet est libre d'utilisation. N'hésitez pas à le personnaliser selon vos besoins.

## 🤝 Contact

Pour toute question ou suggestion :
- Email : votre.email@example.com
- LinkedIn : [Votre profil](https://linkedin.com/in/votreprofil)
- GitHub : [Votre profil](https://github.com/votreprofil)

---

**Astuce** : Pour un rendu optimal, utilisez des images de qualité et personnalisez les couleurs selon votre identité visuelle !

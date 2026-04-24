# 🚀 Guide complet — Mettre ton site en ligne
## Dorchelle Atonzong-Guedia · Homepage

---

## 📁 ÉTAPE 1 — Comprendre la structure de ton dossier

Ton dossier `dorchelle-website` contient :

```
dorchelle-website/
├── index.html       ← La page principale de ton site
├── style.css        ← Les couleurs, polices, mise en page
├── script.js        ← Les animations et interactions
└── assets/
    ├── photo.jpg         ← Ta photo LinkedIn
    ├── banniere.png      ← Ta bannière
    └── CV_Dorchelle.pdf  ← Ton CV (téléchargeable)
```

**Ne renomme pas ces fichiers et ne les déplace pas.**

---

## 👀 ÉTAPE 2 — Voir ton site en local (sur ton ordinateur)

1. Ouvre **Visual Studio Code**
2. Clique sur `Fichier` → `Ouvrir le dossier...`
3. Sélectionne le dossier `dorchelle-website`
4. Dans le panneau de gauche, clique droit sur `index.html`
5. Choisis **"Open with Live Server"**

> ⚠️ Si tu n'as pas Live Server :
> - Clique sur l'icône Extensions (carré avec 4 cases) dans VS Code
> - Recherche **"Live Server"** (par Ritwick Dey)
> - Clique **Installer**
> - Recommence l'étape 5

Ton site s'ouvrira automatiquement dans ton navigateur à l'adresse `http://127.0.0.1:5500`

---

## 🌐 ÉTAPE 3 — Mettre ton site en ligne GRATUITEMENT avec GitHub Pages

### 3A · Créer un compte GitHub
1. Va sur **https://github.com**
2. Clique "Sign up" et crée ton compte
3. Confirme ton email

### 3B · Installer GitHub Desktop (plus simple que la ligne de commande)
1. Va sur **https://desktop.github.com**
2. Télécharge et installe **GitHub Desktop**
3. Connecte-toi avec ton compte GitHub

### 3C · Créer un dépôt (repository)
1. Ouvre **GitHub Desktop**
2. Clique sur `File` → `New Repository`
3. Dans **Name**, écris exactement : `dorchelle-website`
4. Dans **Local Path**, choisis le dossier qui CONTIENT ton dossier `dorchelle-website`
5. Clique **Create Repository**

### 3D · Ajouter tes fichiers
1. Dans GitHub Desktop, tu verras tous tes fichiers listés à gauche
2. En bas à gauche, dans la case **Summary**, écris : `Premier commit - site personnel`
3. Clique **Commit to main**
4. Clique **Publish repository** (bouton bleu en haut)
5. Décoche "Keep this code private" si tu veux un site public gratuit
6. Clique **Publish Repository**

### 3E · Activer GitHub Pages
1. Va sur **https://github.com/TON-USERNAME/dorchelle-website**
2. Clique sur **Settings** (onglet en haut)
3. Dans le menu gauche, clique **Pages**
4. Sous "Source", sélectionne **Deploy from a branch**
5. Sous "Branch", sélectionne **main** puis **/ (root)**
6. Clique **Save**

### 3F · Attendre et voir ton site ✨
- Attends **2 à 5 minutes**
- Rafraîchis la page Settings → Pages
- Tu verras un lien vert : **"Your site is published at..."**
- Ton site sera accessible à : `https://TON-USERNAME.github.io/dorchelle-website/`

---

## ✏️ ÉTAPE 4 — Modifier le contenu du site

Pour modifier du texte :
1. Ouvre `index.html` dans VS Code
2. Utilise `Ctrl+F` (ou `Cmd+F` sur Mac) pour rechercher le texte à changer
3. Modifie directement le texte entre les balises HTML
4. Sauvegarde avec `Ctrl+S`

### Exemple — changer l'email :
Cherche `dguedia@gmail.com` et remplace par ton nouvel email.

### Exemple — changer la description :
Cherche `Je transforme des données complexes` et modifie la phrase.

---

## 🔄 ÉTAPE 5 — Mettre à jour ton site après des modifications

1. Après avoir modifié des fichiers dans VS Code
2. Ouvre **GitHub Desktop**
3. Tu verras les fichiers modifiés à gauche
4. Écris un message dans **Summary** (ex: "Mise à jour email")
5. Clique **Commit to main**
6. Clique **Push origin**
7. Attends 1-2 minutes → ton site en ligne est mis à jour automatiquement !

---

## 🎁 BONUS — Personnaliser davantage

### Changer la couleur principale
Dans `style.css`, cherche `--blue-deep: #1a3a5c;` et change le code couleur.
Tu peux trouver des codes couleur sur : **https://coolors.co**

### Ajouter un lien LinkedIn
Dans `index.html`, dans la section Contact, tu peux ajouter :
```html
<a href="https://linkedin.com/in/TON-PROFIL" class="contact-card">
  <div class="contact-icon">💼</div>
  <h4>LinkedIn</h4>
  <p>Voir mon profil</p>
</a>
```

### Avoir un nom de domaine personnalisé (optionnel, ~10-15$/an)
- Achète un domaine sur **Namecheap** ou **Google Domains** (ex: `dorchelle.com`)
- Dans Settings → Pages sur GitHub, entre ton domaine custom

---

## 🆘 En cas de problème

| Problème | Solution |
|---|---|
| Le site ne s'affiche pas localement | Installe l'extension Live Server dans VS Code |
| Les images n'apparaissent pas | Vérifie que le dossier `assets` est bien dans le dossier du site |
| GitHub Pages ne se met pas à jour | Attends 5 min et vide le cache du navigateur (Ctrl+Shift+R) |
| Je veux remettre l'ancienne version | GitHub garde tout l'historique — tu ne peux pas tout perdre ! |

---

## 📞 Ressources utiles

- **VS Code** : https://code.visualstudio.com
- **GitHub Desktop** : https://desktop.github.com
- **GitHub Pages doc** : https://docs.github.com/en/pages
- **Choisir des couleurs** : https://coolors.co
- **Icônes gratuites** : https://lucide.dev

---

*Bonne chance Dorchelle ! Ton site est prêt à impressionner 🎓✨*

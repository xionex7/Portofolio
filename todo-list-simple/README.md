# TodoListSimple

# 📝 To-Do List App - Angular

Une application simple de gestion de tâches développée avec Angular et TypeScript.

## 📌 Objectif

Créer une application frontend permettant d'ajouter, visualiser, compléter et supprimer des tâches, avec une sauvegarde locale (localStorage).

---

## ⚙️ Fonctionnalités

- ✅ Ajouter une nouvelle tâche  
- ❌ Supprimer une tâche  
- 📦 Sauvegarde des tâches dans le `localStorage`  
- ☑️ Marquer une tâche comme complétée avec une case à cocher  
- 🚫 Désactivation des boutons selon l'état des entrées (ex : bouton "Ajouter" désactivé si le champ est vide)

---

## 🧱 Technologies utilisées

- [Angular](https://angular.io/)
- TypeScript
- HTML / CSS
- LocalStorage pour la persistance des données

---

## 📄 Explication du fonctionnement

### 🧠 Comportement Angular

- `[(ngModel)]` : Liaison bidirectionnelle pour les champs de formulaire  
- `(click)` / `(change)` : Déclenche des actions via des méthodes TypeScript  
- `[disabled]` : Permet d’activer/désactiver dynamiquement des boutons  
- `<router-outlet>` : Sert de placeholder pour le routage Angular (si utilisé)

### 📦 Gestion des tâches

```ts
export interface Tasks {
  id: number;
  name: string;
}
```
---

## 🎨 UI & Styles
Dégradés dynamiques (linear-gradient) et couleurs personnalisées avec --electric-violet, --vivid-pink, --orange-red
Design responsive et fluide grâce à Flexbox
Animation visuelle au focus des inputs et au survol des boutons

---

## ✅ Lancer l'application
```bash
npm install
ng serve
```
Ouvrir le navigateur sur http://localhost:4200

---

## 📌 A améliorer / idées futures
Édition des tâches
Filtrage par tâches complètes/incomplètes
Authentification utilisateur
Synchronisation avec une base de données distante

---

## 🧑‍💻 Auteur
Léon DESIR

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# 🚀 MentorConnect (Frontend)

> **Current Status:** Phase 1 (Standalone Firebase Mode)  
> We are currently building the UI using **Firebase** for data/auth. Later, we will migrate data persistence to a Spring Boot Backend.

MentorConnect is an open-source platform designed to connect aspiring developers with mentors for structured, project-based learning.

## 🛠 Tech Stack

  * **Framework:** Angular (v20+)
  * **Styling:** SCSS + [Angular Material / Tailwind - *choose one*]
  * **Auth/Data:** Firebase (Firestore & Authentication)
  * **State Management:** RxJS (Services + BehaviorSubjects)

-----

## ⚙️ Prerequisites

Before you start, make sure you have:

1.  **Node.js** (v18.13.0 or higher) - [Download](https://nodejs.org/)
2.  **Angular CLI** (Globally installed):
    ```bash
    npm install -g @angular/cli
    ```
3.  **Firebase CLI** (Optional but recommended):
    ```bash
    npm install -g firebase-tools
    ```

-----

## 🏄 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/miltonthefirst/MentorConnect.git
cd MentorConnect
npm install
```

### 2. Environment Setup (Critical!) 🔑

We do not commit API keys to GitHub. You need to create your own environment file.

1.  Copy the example file: `src/environments/environment.example.ts` -> `src/environments/environment.ts`
2.  Ask the **Team Lead** for the Firebase Configuration keys.
3.  Paste them into `environment.ts`.

### 3. Run the App

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

-----

## 📂 Project Structure

We use a **Feature-Based** architecture. Please do not dump everything into a generic `components` folder.

```text
src/app
├── core/               # Singletons (AuthService, Guards, Interceptors)
├── shared/             # Reusable UI (Buttons, Loaders, Pipes)
├── features/           # The actual pages
│   ├── dashboard/      # Logic for the dashboard view
│   ├── profile/        # Logic for user profiles
│   └── auth/           # Login/Register screens
└── app.routes.ts       # Main routing config
```

### 🧠 The "Adapter" Pattern

**Important:** We are designing this to swap the backend later.

  * **UI Components** should NEVER import `firebase` directly.
  * **UI Components** should only call `Services` (e.g., `MentorService`).
  * **Services** handle the data fetching (currently Firestore).

-----

## 🤝 Contributing

We love contributions! Please read our [CONTRIBUTING.md](https://www.google.com/search?q=./CONTRIBUTING.md) to learn about:

  * Our branching strategy (`feat/`, `fix/`)
  * Commit message conventions
  * Code style rules

**Quick Rule:** Never push to `main` directly. Always open a Pull Request (PR).

-----

## 🧪 Running Tests

**Unit Tests** (Karma):

```bash
ng test
```

**End-to-End Tests**:

```bash
ng e2e
```

-----

## 📚 Resources for the Team

  * [Angular Documentation](https://angular.io/docs)
  * [Firebase Documentation](https://firebase.google.com/docs/web/setup)
  * [Our Design System / Figma Link] (Add link here)

-----

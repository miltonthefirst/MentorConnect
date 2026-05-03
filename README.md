# 🚀 MentorConnect (Frontend)

> **Current Status:** Phase 1 (Standalone Firebase Mode)  
> We are currently building the UI using **Firebase** for data/auth. Later, we will migrate data persistence to a Spring Boot Backend.

MentorConnect is an open-source platform designed to connect aspiring developers with mentors for structured, project-based learning.

## 🛠 Tech Stack

- **Framework:** Angular (v21+)
- **Styling:** CSS + Tailwind CSS v4
- **Auth/Data:** Firebase (Firestore & Authentication)
- **State Management:** Angular Signals

---

## ⚙️ Prerequisites

Before you start, make sure you have:

1. **Node.js** (v18.13.0 or higher) — [Download](https://nodejs.org/)
2. **Angular CLI** (Globally installed):
   ```bash
   npm install -g @angular/cli
   ```
3. **Firebase CLI** (Optional but recommended):
   ```bash
   npm install -g firebase-tools
   ```

---

## 🏄 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/miltonthefirst/MentorConnect.git
cd MentorConnect
npm install
```

### 2. Environment Setup (Critical!) 🔑

We do not commit real Firebase keys to GitHub. The default `environments/environment.ts` already points to **local Firebase Emulators** — no keys needed to get started.

If you need to work against a real Firebase project (dev / test / prod), you must create the matching file:

1. Copy the example file:
   ```
   environments/environment.example.ts  →  environments/environment.dev.ts
                                            environments/environment.test.ts
                                            environments/environment.prod.ts
   ```
2. Ask the **Team Lead** for the Firebase configuration keys for that environment.
3. Paste them into the new file. These files are in `.gitignore` — **never commit them**.

### 3. Start the Firebase Emulators

Before serving any app locally, start the emulators. They import the last saved seed data on start and export on exit:

```bash
npm run emulators
```

The Emulator UI is available at `http://localhost:4000/`.

### 4. Run the App

Each portal runs on a dedicated fixed port:

```bash
# Individual portals (run after starting emulators)
npm run start:website    # http://localhost:4200  (SSR)
npm run start:mentee     # http://localhost:4201
npm run start:mentor     # http://localhost:4202
npm run start:admin      # http://localhost:4203

# All portals at once
npm run start:all
```

All apps use `environments/environment.ts` by default, which points to the local emulators.

---

## 📂 Project Structure

This is a **native Angular multi-project workspace**. No Nx required.

```text
mentor-connect/
├── projects/
│   ├── website/          # Public-facing website (with SSR)
│   ├── mentee-portal/    # Mentee dashboard application
│   ├── mentor-portal/    # Mentor dashboard application
│   ├── admin-portal/     # Admin portal application
│   │
│   ├── auth/             # Library: Guards & authentication logic
│   ├── data-access/      # Library: Firestore services & data models
│   ├── ui/               # Library: Shared UI components
│   ├── utils/            # Library: Pipes & helper functions
│   └── discovery/        # Library: Mentor browsing & search
│
├── angular.json          # Workspace configuration
├── tsconfig.json         # Path aliases (@mentor-connect/ui, etc.)
└── package.json
```

Library imports are mapped via `tsconfig.json` path aliases (e.g. `@mentor-connect/ui`, `@mentor-connect/auth`). Each app lazy-loads its own routes; shared libraries are tree-shaken per build.

### 🌍 Environment Files

| File                                  | Committed | Purpose                                       |
| ------------------------------------- | --------- | --------------------------------------------- |
| `environments/environment.ts`         | ✅ Yes    | Default — points to local Firebase Emulators  |
| `environments/environment.example.ts` | ✅ Yes    | Template — copy this to create real env files |
| `environments/environment.dev.ts`     | ❌ No     | Firebase Development project                  |
| `environments/environment.test.ts`    | ❌ No     | Firebase Test / Staging project               |
| `environments/environment.prod.ts`    | ❌ No     | Firebase Production project                   |

Angular's `fileReplacements` in `angular.json` swaps `environment.ts` with the correct file at build time:

- `ng build <app>` → uses `environment.prod.ts` (production configuration)
- `ng build <app> --configuration dev-env` → uses `environment.dev.ts`
- `ng build <app> --configuration test-env` → uses `environment.test.ts`

### 🧠 The "Adapter" Pattern

**Important:** We are designing this to swap the backend later.

- **UI Components** should **NEVER** import `firebase` directly.
- **UI Components** should only call **Services** (e.g., `MentorService` from `@mentor-connect/data-access`).
- **Services** handle data fetching (currently Firestore). When we migrate to Spring Boot, only the services change.

---

## 🤝 Contributing

We love contributions! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) to learn about:

- Our branching strategy (`feat/`, `fix/`)
- Commit message conventions
- Code style rules

**Quick Rule:** Never push to `main` directly. Always open a Pull Request (PR).

---

## 🧪 Running Tests

**All projects:**

```bash
npm test
```

**Individual project:**

```bash
# Apps
npm run test:website
npm run test:mentee
npm run test:mentor
npm run test:admin

# Libraries
npm run test:auth
npm run test:ui
npm run test:data-access
npm run test:utils
npm run test:discovery
```

Test runner: **Vitest** (configured in `angular.json` per project).

**End-to-End Tests:**

```bash
ng e2e
```

---

## 🛠 Other Useful Scripts

```bash
npm run format        # Auto-format all files with Prettier
npm run format:check  # Check formatting without writing
```

---

## 📚 Resources for the Team

- [Angular Documentation](https://angular.dev/docs)
- [Firebase Documentation](https://firebase.google.com/docs/web/setup)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

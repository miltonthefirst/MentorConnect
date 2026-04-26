# Contributing to MentorConnect

Welcome to the team! 🎉

MentorConnect is an open-source learning initiative. Our goal is to build a professional-grade mentorship platform while mastering real-world software engineering practices.

We want this to be a place where you can learn, fail safely, and grow. To keep our codebase clean and our collaboration smooth, please follow the guidelines below.

---

## 🚀 The Golden Rules

1. **Be Kind:** We are all learning. Constructive feedback is a gift; take it gracefully and give it respectfully.
2. **Code is Read More Than Written:** Write clean, self-documenting code. If you need a comment to explain _what_ the code does, the code is probably too complex.
3. **Leave It Better Than You Found It:** If you see a typo or messy formatting in a file you are touching, fix it.

---

## 🛠 Workflow & Branching

We follow a strict **Feature Branch Workflow**. We never push directly to `main` or `develop`.

### 1. Branching Strategy

- **`main`**: Production-ready code. Do not touch.
- **`develop`**: The integration branch. All Pull Requests (PRs) should target this branch.
- **Your Branch**: Create a new branch for every task.

**Branch Naming Convention:**  
`type/short-description`

- `feat/user-profile-page`
- `fix/login-button-alignment`
- `docs/update-readme`
- `refactor/cleanup-auth-service`

### 2. Commits

We follow **Conventional Commits**. This helps us generate changelogs and keeps history readable.

Format: `type(scope): description`

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Formatting, missing semi-colons, etc. (no code change)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **chore**: Updating build tasks, package manager configs, etc.

**Examples:**  
✅ `feat(auth): add google sign-in button`  
✅ `fix(dashboard): resolve layout overflow on mobile`  
❌ `fixed bug`  
❌ `wip`

---

## 📝 Pull Requests (PRs)

The PR is where learning happens.

1. **Self-Review First:** Before opening a PR, review your own code. Remove `console.log`s, commented-out code, and fix linting errors.
2. **Descriptive Title:** Use the commit format for your PR title.
3. **Screenshots:** If your change affects the UI, **you must include a screenshot or GIF** in the PR description.
4. **The Rule of Two:** A PR requires **1 Peer Approval** and **1 Lead Approval** to be merged.

---

## 🎨 Coding Standards (Frontend)

We use automated tools to enforce style, so we don't argue about spaces vs. tabs.

### Tools

- **Prettier:** Formatting is automatic. Run `npm run format` before committing. CI will fail if formatting is wrong (`npm run format:check`).
- **ESLint:** _(Future goal — see note below.)_

### Angular Best Practices

This project uses **Angular v21+** with modern APIs. Follow these conventions:

- **Strict Typing:** Avoid `any` at all costs. Define interfaces/types for your data in `@mentor-connect/data-access`.
- **Standalone Components:** All components are standalone by default. Do not add `standalone: true` to decorators.
- **Signals for State:** Use `signal()` for local state and `computed()` for derived state. Do not use `BehaviorSubject` for component-level state.
- **`input()` / `output()` Functions:** Use the signal-based `input()` and `output()` functions instead of `@Input()` / `@Output()` decorators.
- **Smart vs. Presentational Components:**
  - _Smart Components (Pages/Containers):_ Call services from `@mentor-connect/data-access`. Manage state with signals.
  - _Presentational Components (UI):_ Accept data via `input()` and emit events via `output()`. They must not inject services directly.
- **OnPush Change Detection:** Always set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component`.
- **Styling:** Use utility classes from **Tailwind CSS v4**. Avoid global styles unless absolutely necessary.
- **The Adapter Rule:** UI components must never import `firebase` directly — only call services from `@mentor-connect/data-access`.

> **🔮 Future Goal — ESLint:**  
> We plan to add ESLint with `@angular-eslint` rules. Advantages: catches common Angular anti-patterns, enforces naming conventions, integrates with IDEs for real-time feedback.  
> Possible challenges: configuration overhead in a multi-project workspace, potential rule conflicts with Prettier, and requiring everyone to fix existing violations when first introduced.  
> Once agreed on in a team Proposal issue, it will be added and enforced in CI.

### Local Development Workflow

Always start the Firebase Emulators before serving an app:

```bash
# Terminal 1 — emulators (imports seed data, exports on exit)
npm run emulators

# Terminal 2 — your app
npm run start:mentee    # port 4201
npm run start:mentor    # port 4202
npm run start:admin     # port 4203
npm run start:website   # port 4200
npm run start:all       # all portals concurrently
```

### Project Structure Reminder

```text
projects/
├── website/          # Public website (SSR)
├── mentee-portal/    # Mentee app
├── mentor-portal/    # Mentor app
├── admin-portal/     # Admin app
├── auth/             # @mentor-connect/auth   — Guards & auth logic
├── data-access/      # @mentor-connect/data-access — Firestore & models
├── ui/               # @mentor-connect/ui     — Shared UI components
├── utils/            # @mentor-connect/utils  — Pipes & helpers
└── discovery/        # @mentor-connect/discovery — Mentor browsing
```

Import shared code using path aliases, not relative paths:

```ts
// ✅ Correct
import { AuthService } from '@mentor-connect/auth';

// ❌ Wrong
import { AuthService } from '../../projects/auth/src/lib/auth';
```

### Running Tests

```bash
# Run tests for a specific project
npm run test:mentee
npm run test:mentor
npm run test:admin
npm run test:website
npm run test:auth
npm run test:ui
npm run test:data-access
npm run test:utils
npm run test:discovery

# Run all tests
npm test
```

---

## 🧠 Architecture & Decision Making

We want **you** to help design the system. We don't just hand out tasks; we solve problems together.

### The "Proposal" Process

If you are building a complex feature (e.g., "How should we handle global state?" or "How do we structure the Dashboard?"), do not just start coding.

1. **Open an Issue** with the tag `discussion`.
2. **Write a Proposal:** Briefly explain your approach.
   - _Example:_ "I propose we use a `signal()` in a singleton service for user state and expose it as `readonly` to consumers."
3. **Discuss:** The team will weigh in.
4. **Execute:** Once we agree, you build it.

This ensures we build _one_ cohesive system, not five different ones glued together.

---

## 🐞 Reporting Bugs

Found a bug? Open an issue! Please include:

- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Screenshots (if visual).

---

**Happy Coding!** 🚀

# Contributing to MentorConnect

Welcome to the team! 🎉

MentorConnect is an open-source learning initiative. Our goal is to build a professional-grade mentorship platform while mastering real-world software engineering practices.

We want this to be a place where you can learn, fail safely, and grow. To keep our codebase clean and our collaboration smooth, please follow the guidelines below.

---

## 🚀 The Golden Rules

1.  **Be Kind:** We are all learning. Constructive feedback is a gift; take it gracefully and give it respectfully.
2.  **Code is Read More Than Written:** Write clean, self-documenting code. If you need a comment to explain *what* the code does, the code is probably too complex.
3.  **Leave It Better Than You Found It:** If you see a typo or messy formatting in a file you are touching, fix it.

---

## 🛠 Workflow & Branching

We follow a strict **Feature Branch Workflow**. We never push directly to `main` or `develop`.

### 1. Branching Strategy
* **`main`**: Production-ready code. Do not touch.
* **`develop`**: The integration branch. All Pull Requests (PRs) should target this branch.
* **Your Branch**: Create a new branch for every task.

**Branch Naming Convention:**
`type/short-description`

* `feat/user-profile-page`
* `fix/login-button-alignment`
* `docs/update-readme`
* `refactor/cleanup-auth-service`

### 2. Commits
We follow **Conventional Commits**. This helps us generate changelogs and keeps history readable.

Format: `type(scope): description`

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Formatting, missing semi-colons, etc. (no code change)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **chore**: Updating build tasks, package manager configs, etc.

**Examples:**
✅ `feat(auth): add google sign-in button`
✅ `fix(dashboard): resolve layout overflow on mobile`
❌ `fixed bug`
❌ `wip`

---

## 📝 Pull Requests (PRs)

The PR is where learning happens.

1.  **Self-Review First:** Before opening a PR, review your own code. Remove `console.log`s, commented-out code, and fix linting errors.
2.  **Descriptive Title:** Use the commit format for your PR title.
3.  **Screenshots:** If your change affects the UI, **you must include a screenshot or GIF** in the PR description.
4.  **The Rule of Two:** A PR requires **1 Peer Approval** and **1 Lead Approval** to be merged.

---

## 🎨 Coding Standards (Frontend)

We use automated tools to enforce style, so we don't argue about spaces vs. tabs.

### Tools
* **Prettier:** Formatting is automatic. Run `npm run format` before committing.
* **ESLint:** Linting is mandatory. Do not disable linting rules without a very good reason.

### Angular Best Practices
* **Strict Typing:** Avoid `any` at all costs. Define interfaces/types for your data.
* **Smart vs. Dumb Components:**
    * *Smart Components (Pages/Containers):* Talk to Services/APIs. Manage state.
    * *Dumb Components (UI):* Take data via `@Input()` and emit events via `@Output()`. They should not know about Services.
* **SCSS:** Use the BEM naming convention or strictly scoped styles. Do not use global styles unless necessary.

---

## 🧠 Architecture & Decision Making

We want **you** to help design the system. We don't just hand out tasks; we solve problems together.

### The "Proposal" Process
If you are building a complex feature (e.g., "How should we handle global State?" or "How do we structure the Dashboard?"), do not just start coding.

1.  **Open an Issue** with the tag `discussion`.
2.  **Write a Proposal:** Briefly explain your approach.
    * *Example:* "I propose we use a BehaviorSubject in a Singleton Service for user state because NgRx is too heavy for this specific requirement."
3.  **Discuss:** The team will weigh in.
4.  **Execute:** Once we agree, you build it.

This ensures we build *one* cohesive system, not five different ones glued together.

---

## 🐞 Reporting Bugs

Found a bug? Open an issue!
Please include:
* Steps to reproduce.
* Expected behavior.
* Actual behavior.
* Screenshots (if visual).

---

**Happy Coding!** 🚀

# Royal Heritage Explorer — Contribution & Collaboration Guidelines

Welcome to the **Royal Heritage Explorer** project! This document outlines our shared collaboration standards, branching models, quality gates, and GitHub workflows for our team.

---

## 1. Core Team & Collaboration Philosophy

Our development model is built on **equal responsibility, shared code ownership, and peer review**:

- **Equal Responsibility:** The three main developers (**Thrisha**, **Suchithra**, and **Rashmi**) share equal development responsibility across the entire project codebase.
- **Supporting Contributor:** **Sahana** contributes supporting work (testing, documentation, UI improvements, bug fixes).
- **No Silos:** There is **no permanent ownership** of a single heritage site (Ellora, Hampi, Konark, Taj Mahal) and **no exclusive ownership** of a specific subsystem (AR vs. 360° Virtual Tour vs. Audio vs. UI).
- **Genuine Contributions:** Every team member contributes through their own commits and Pull Requests (PRs). No fabricated or ghost contributions are permitted.
- **Coordination:** All tasks, bugs, and feature discussions are coordinated transparently via GitHub Issues, Project Boards, and Pull Request reviews.

---

## 2. Branching Architecture

We maintain a strict and clean branch model:

| Branch Name | Role & Access |
|---|---|
| `main` | **Production / Stable Integrated Baseline.** Directly protected. Never commit or push directly to `main`. Merges occur strictly via tested Pull Requests. |
| `feature/thrisha` | Active feature workspace for **Thrisha**. |
| `feature/suchithra` | Active feature workspace for **Suchithra**. |
| `feature/rashmi` | Active feature workspace for **Rashmi**. |
| `feature/sahana` | Workspace for **Sahana** when contributing agreed supporting tasks. |

> [!IMPORTANT]
> **Never force-push (`git push --force`)** to any branch.
> Always pull the latest changes from `main` before starting work or creating a Pull Request.

---

## 3. Step-by-Step Developer Workflow

Every developer must follow these steps for every task or feature:

### Step 1: Clone the Repository
Open your terminal (PowerShell, Bash, or Command Prompt):
```bash
# Clone the repository to your local machine
git clone https://github.com/<YOUR_ORGANIZATION_OR_USERNAME>/royal-heritage-explorer.git

# Move into the project directory
cd royal-heritage-explorer/HeritageWebsite_New/royal-heritage-platform
```

### Step 2: Install Dependencies & Setup Environment
```bash
# Install required Node.js dependencies
npm install

# Setup your local environment file (never commit secrets!)
cp .env.example .env
# Edit .env and enter your GEMINI_API_KEY
```

### Step 3: Switch to or Create Your Designated Feature Branch
Check out your team branch:

* **Thrisha:**
  ```bash
  git checkout -b feature/thrisha
  # or if the branch already exists locally or remotely:
  git checkout feature/thrisha
  ```

* **Suchithra:**
  ```bash
  git checkout -b feature/suchithra
  # or if the branch already exists:
  git checkout feature/suchithra
  ```

* **Rashmi:**
  ```bash
  git checkout -b feature/rashmi
  # or if the branch already exists:
  git checkout feature/rashmi
  ```

* **Sahana:**
  ```bash
  git checkout -b feature/sahana
  # or if the branch already exists:
  git checkout feature/sahana
  ```

### Step 4: Synchronize with Latest `main` Before Starting Work
Always ensure your feature branch has the newest merged changes before writing new code:
```bash
# Fetch latest status from GitHub
git fetch origin

# Merge latest main changes into your active branch
git merge origin/main
```

### Step 5: Develop and Test Locally
Run the platform locally and verify your changes:
```bash
# Run full platform (Frontend on 5173 + Backend on 3001)
npm start

# Run TypeScript compile validation
npm run build
```

### Step 6: Commit Your Changes
Make focused, meaningful commits under your own Git user profile:
```bash
# Stage the files you intentionally modified
git add src/path/to/changed-file.tsx

# Commit with a clear, descriptive message
git commit -m "feat(viewer): optimize audio transition timing across scene changes"
```

> **Commit Message Convention:**
> - `feat(...)`: New feature or user-facing addition
> - `fix(...)`: Bug fix or hotspot/AR correction
> - `refactor(...)`: Code cleanup without behavior change
> - `docs(...)`: Documentation or guide updates
> - `test(...)`: Unit/integration testing additions

### Step 7: Push Your Branch to GitHub
```bash
# Push your branch (first time):
git push -u origin feature/<your-name>

# Subsequent pushes:
git push
```

### Step 8: Open a Pull Request (PR) on GitHub
1. Navigate to the GitHub repository in your browser.
2. Click **"Compare & pull request"**.
3. Set **Base:** `main` $\leftarrow$ **Compare:** `feature/<your-name>`.
4. Fill out the PR template:
   - What changed and why.
   - Verification steps performed (tested in desktop, tested in mobile, etc.).
   - Linked GitHub Issue (e.g., `Closes #12`).
5. Request review from at least one other main developer.
6. Once approved and checks pass, merge into `main` (using **Squash and Merge** or **Create a Merge Commit** as agreed).

---

## 4. How to Avoid & Resolve Merge Conflicts

Because all three main developers have equal responsibility across the platform, multiple developers may touch shared modules (e.g., `src/data/monuments.ts`, navigation, or viewers). Follow these rules:

### Prevention Strategies
1. **Communicate on GitHub Issues / Chat:** Before editing shared files, notify the team (e.g., *"Thrisha is updating Hampi hotspots today in monuments.ts"*).
2. **Keep PRs Small and Frequent:** Do not keep a branch open for weeks. Merge small, tested increments into `main` promptly.
3. **Daily Sync:** Run `git pull origin main` into your feature branch daily.

### Resolving Conflicts When They Occur
If GitHub indicates your branch has merge conflicts with `main`:

```bash
# 1. Ensure your local main is up to date
git checkout main
git pull origin main

# 2. Switch back to your feature branch
git checkout feature/<your-name>

# 3. Merge main into your feature branch
git merge main
```

4. Git will mark conflict sections in files with `<<<<<<<`, `=======`, and `>>>>>>>`.
5. Open the files in VS Code / your IDE.
6. Review both changes, retain the intended code, and remove conflict markers.
7. Test the application locally to make sure it compiles and runs without regression:
   ```bash
   npm run build
   ```
8. Stage the resolved files and finish the merge:
   ```bash
   git add <resolved-files>
   git commit -m "chore: resolve merge conflicts with main"
   git push origin feature/<your-name>
   ```

---

## 5. Project Protection & Safeguards

This is an established, museum-grade application. The following rules are **strictly enforced**:

1. **Asset Integrity:** Never delete, rename, recompress, or replace panorama images, audio files, or 3D AR `.glb` models without explicit written team approval.
2. **Coordinates & Calibration:** Do not alter working 360° hotspot pitch/yaw coordinates or AR model rotation/scaling vectors unless performing verified historical re-calibration.
3. **No Breaking Redesigns:** Do not overhaul working UI components, themes, or layouts. Work must build upon existing designs incrementally.
4. **Environment Security:** Never commit `.env` or `.env.local` containing live API keys. Always keep them in `.gitignore`.
5. **No Force-Pushing:** `git push --force` is disabled on all shared branches to prevent history loss.

---

## 6. Pre-Merge Verification Checklist

Before approving or merging any PR into `main`, verify:

- [ ] `npm run build` passes with 0 TypeScript/Vite errors.
- [ ] 360° Virtual Tour loads all 4 heritage sites properly.
- [ ] AR model viewer renders without WebGL/canvas crashes.
- [ ] Trilingual switcher (English, Kannada, Hindi) functions across the updated view.
- [ ] No extraneous files or debug logs committed.

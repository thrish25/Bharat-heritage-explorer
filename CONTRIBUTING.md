# Royal Heritage Explorer — Contribution & Collaboration Guidelines

Welcome to the **Royal Heritage Explorer** project! This document outlines our shared collaboration standards, branching models, quality gates, and GitHub workflows for our 3-developer team.

---

## 1. Team Responsibilities & Ownership Boundaries

Our development model organizes the project into dedicated modules per developer while maintaining a common integrated core on `main`:

| Member | Branch | Area of Responsibility | Modules Directory |
|---|---|---|---|
| **Thrisha** | `feature/thrisha` | **Virtual Exploration Lead**<br>• Ellora Caves Virtual Tour<br>• Hampi Virtual Tour<br>• Taj Mahal Virtual Tour | `src/modules/virtual-exploration/ellora/`<br>`src/modules/virtual-exploration/hampi/`<br>`src/modules/virtual-exploration/taj-mahal/` |
| **Suchithra BR** | `feature/suchithra` | **Augmented Reality (AR) Lead**<br>• Ellora Caves AR Module<br>• Hampi AR Module<br>• Taj Mahal AR Module | `src/modules/ar/ellora/`<br>`src/modules/ar/hampi/`<br>`src/modules/ar/taj-mahal/` |
| **Rashmi** | `feature/rashmi` | **Konark Subsystem Lead**<br>• Konark Virtual Tour<br>• Konark AR Module | `src/modules/virtual-exploration/konark/`<br>`src/modules/ar/konark/` |
| **Common Baseline** | `main` | **Master Platform Integration**<br>• Common Homepage & Layout<br>• Shared 360° & AR Engines<br>• Styling, Context & Master Registries | `src/pages/`, `src/components/`,<br>`src/engines/`, `src/services/`,<br>`src/data/monuments.ts`, `src/data/ar/` |

---

## 2. Branching Architecture

We maintain a clean and conflict-free branch structure:

```
main (Production & Integration Baseline — Protected)
 │
 ├── feature/thrisha    (Thrisha: Ellora, Hampi, Taj Mahal Virtual Exploration)
 ├── feature/suchithra  (Suchithra: Ellora, Hampi, Taj Mahal AR Modules)
 └── feature/rashmi     (Rashmi: Konark Virtual Exploration & AR)
```

> [!IMPORTANT]
> **Never commit or push directly to `main`.**
> **Never force-push (`git push --force`)** to any branch.
> Always pull the latest changes from `main` before starting work or opening a Pull Request.

---

## 3. Step-by-Step Developer Workflow

Every developer must follow these steps for every task or feature:

### Step 1: Clone the Repository
```bash
git clone https://github.com/<YOUR_GITHUB_REPO_URL>.git
cd HeritageWebsite_New/royal-heritage-platform
```

### Step 2: Install Dependencies & Setup Environment
```bash
npm install
cp .env.example .env
# Edit .env and enter your GEMINI_API_KEY
```

### Step 3: Switch to Your Designated Feature Branch
* **Thrisha:**
  ```bash
  git checkout feature/thrisha
  ```
* **Suchithra:**
  ```bash
  git checkout feature/suchithra
  ```
* **Rashmi:**
  ```bash
  git checkout feature/rashmi
  ```

### Step 4: Synchronize with Latest `main`
```bash
git fetch origin
git merge origin/main
```

### Step 5: Develop and Test Locally
Work within your assigned module directory:
```bash
# Run full platform (Frontend on 5173 + Backend on 3001)
npm start

# Run TypeScript compile validation
npm run build
```

### Step 6: Commit Your Changes
```bash
git add src/modules/...
git commit -m "feat(module): descriptive commit message"
```

### Step 7: Push Your Branch to GitHub
```bash
git push origin feature/<your-name>
```

### Step 8: Open a Pull Request (PR) on GitHub
1. Set **Base:** `main` $\leftarrow$ **Compare:** `feature/<your-name>`.
2. Fill out what changed and verify that `npm run build` passed.
3. Request review from a peer.
4. Merge after approval.

---

## 4. How to Avoid & Resolve Merge Conflicts

Because the codebase is now cleanly partitioned into `src/modules/virtual-exploration/` and `src/modules/ar/`:
- **Thrisha** works in `modules/virtual-exploration/{ellora,hampi,taj-mahal}/`.
- **Suchithra** works in `modules/ar/{ellora,hampi,taj-mahal}/`.
- **Rashmi** works in `modules/{virtual-exploration,ar}/konark/`.
Since each developer owns distinct files, Git merges into `main` will automatically succeed with zero file conflicts!

If a conflict occurs on a shared integration file:
```bash
git checkout feature/<your-name>
git merge main
# Resolve conflict markers in VS Code / IDE
npm run build
git commit -m "chore: resolve merge conflicts with main"
git push origin feature/<your-name>
```

---

## 5. Project Protection & Safeguards

- **Asset Locations:** 360° panoramas, audio narration, and 3D `.glb` models remain in `public/assets/`. Do not move, rename, or recompress them.
- **Coordinates & Hotspots:** Do not alter working hotspot pitch/yaw coordinates without verification.
- **Environment Security:** Never commit `.env` or `.env.local` containing live API keys. Always use `.env.example`.

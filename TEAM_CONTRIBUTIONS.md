# Team Structure & Contribution Register
## Royal Heritage Explorer

---

## 1. Team Structure & Members

The **Royal Heritage Explorer** project is maintained by a collaborative four-member team composed of three equal main developers and one supporting contributor:

```
                          ┌─────────────────────────────┐
                          │   ROYAL HERITAGE EXPLORER   │
                          │      Integrated Platform    │
                          └──────────────┬──────────────┘
                                         │
                 ┌───────────────────────┼───────────────────────┐
                 │                       │                       │
      ┌──────────▼──────────┐ ┌──────────▼──────────┐ ┌──────────▼──────────┐
      │   MAIN DEVELOPER 1  │ │   MAIN DEVELOPER 2  │ │   MAIN DEVELOPER 3  │
      │       Thrisha       │ │      Suchithra      │ │        Rashmi       │
      │  (Equal Dev Lead)   │ │  (Equal Dev Lead)   │ │  (Equal Dev Lead)   │
      │   feature/thrisha   │ │  feature/suchithra  │ │   feature/rashmi    │
      └─────────────────────┘ └─────────────────────┘ └─────────────────────┘
                 │                       │                       │
                 └───────────────────────┼───────────────────────┘
                                         │
                              ┌──────────▼──────────┐
                              │     CONTRIBUTOR     │
                              │       Sahana        │
                              │  (Supporting Role)  │
                              │   feature/sahana    │
                              └─────────────────────┘
```

| Member | Project Role | Dedicated Feature Branch | Responsibility Scope |
|---|---|---|---|
| **Thrisha** | Main Developer (1/3) | `feature/thrisha` | Full project scope (Equal development) |
| **Suchithra** | Main Developer (2/3) | `feature/suchithra` | Full project scope (Equal development) |
| **Rashmi** | Main Developer (3/3) | `feature/rashmi` | Full project scope (Equal development) |
| **Sahana** | Additional Contributor | `feature/sahana` | Supporting role (Testing, docs, UI, fixes) |

---

## 2. Core Responsibilities

### Main Developers (Thrisha, Suchithra, Rashmi)
All three main developers share **equal, end-to-end development responsibility** for the complete platform, including:

1. **Virtual Exploration & 360° Panorama Viewer:**
   - Enhancing spherical canvas rendering, field-of-view (FOV) transitions, and camera movement.
   - Managing interactive navigational and informational hotspots across monument scenes.
2. **Augmented Reality (AR) & 3D Visualizations:**
   - AR model view integration, canvas interaction, lighting, and WebXR DOM overlays.
   - 3D asset inspection and spatial rendering controls.
3. **Heritage Site Modules & Architectural Integration:**
   - Supporting all four historic complexes: **Ellora Caves**, **Hampi**, **Konark Sun Temple**, and **Taj Mahal**.
   - Coordinating trilingual documentation and architectural data catalogs.
4. **Audio Narration & Multilingual Systems:**
   - Synchronizing audio playback, narration triggers, and volume/subtitles controls.
   - Preserving accurate English, Kannada (`kn`), and Hindi (`hi`) localization.
5. **UI/UX Engineering & Responsive Layouts:**
   - Museum-grade editorial design standards (warm ivory, sandstone, antique gold, deep charcoal).
   - Desktop, tablet, and mobile responsiveness.
6. **Testing, Bug Fixing & Code Quality:**
   - Cross-browser testing, performance optimization, and rigorous regression prevention.

### Additional Contributor (Sahana)
Sahana provides focused **supporting contributions**:
1. **Quality Assurance & Verification:** Cross-device testing (screen sizes, mobile browser compatibility, audio playback verification).
2. **Documentation & User Guides:** Maintaining documentation, guides, setup instructions, and issue reports.
3. **Targeted UI Enhancements:** Minor styling refinements, accessibility improvements, and readability adjustments.
4. **Bug Fixing & Issue Triage:** Assisting with validated bug fixes and verification of resolved issues.

---

## 3. Principles of Equal Collaboration

To ensure a cohesive and balanced academic/engineering team:

- **No Monument Silos:** No single developer is assigned permanent "ownership" of Ellora, Hampi, Konark, or Taj Mahal. All three main developers contribute across all four sites.
- **No Technology Silos:** No single developer exclusively owns AR or exclusively owns the 360° viewer. All three main developers participate in both virtual exploration and AR subsystems.
- **Shared Architecture Decisions:** Structural changes to data models (`monuments.ts`), API endpoints, or routing are discussed and agreed upon prior to implementation.
- **Mutual Code Reviews:** Pull Requests are reviewed and verified by peers before being merged into `main`.

---

## 4. How Individual Contributions Are Recorded & Tracked

Transparency and academic integrity are foundational to this project. **Contributions must be genuine, verifiable, and tied directly to the author who implemented them.**

### 1. Git Author Identity
Each member must configure their Git client with their genuine name and GitHub email before committing:
```bash
git config user.name "Thrisha"
git config user.email "thrisha@example.com"
```
```bash
git config user.name "Suchithra"
git config user.email "suchithra@example.com"
```
```bash
git config user.name "Rashmi"
git config user.email "rashmi@example.com"
```
```bash
git config user.name "Sahana"
git config user.email "sahana@example.com"
```

### 2. Individual Feature Branches
Every member works strictly within their own branch (`feature/<name>`) and pushes their changes to GitHub under their branch.

### 3. Pull Request History & Reviews
Every merged change must have an associated GitHub Pull Request clearly showing:
- The author who created the PR.
- The exact files and lines modified.
- The peer reviewer(s) who tested and approved the PR.
- The verification steps passed prior to merging into `main`.

### 4. GitHub Insights & Commit Log
GitHub's built-in **Insights $\rightarrow$ Contributors** tab and the Git commit history (`git log --pretty=format:"%h - %an: %s"`) serve as the objective, tamper-proof record of every team member's genuine code, documentation, and testing contributions.

> [!CAUTION]
> **No Fabricated Contributions Policy:**
> Under no circumstances should fabricated, artificial, or ghost commits be generated. Every recorded commit, PR, and review must represent real engineering or documentation work.

---

## 5. Branch Naming Conventions

All branches follow standard naming conventions:

- `main` — Production release branch. Stable, reviewed, and fully functional.
- `feature/thrisha` — Active feature/improvement branch for Thrisha.
- `feature/suchithra` — Active feature/improvement branch for Suchithra.
- `feature/rashmi` — Active feature/improvement branch for Rashmi.
- `feature/sahana` — Active supporting contribution branch for Sahana.
- Optional temporary task branches: `feature/<name>-<task-description>` (e.g., `feature/thrisha-hampi-audio-fix`).

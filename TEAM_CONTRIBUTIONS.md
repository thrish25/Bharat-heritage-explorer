# Team Structure & Module Ownership Register
## Royal Heritage Explorer — 3-Member Collaboration Architecture

---

## 1. Team Structure & Branch Assignments

The **Royal Heritage Explorer** project is organized into dedicated feature modules mapped to three developers and a unified integration baseline:

```
                          ┌─────────────────────────────┐
                          │   ROYAL HERITAGE EXPLORER   │
                          │   main (Common Application) │
                          └──────────────┬──────────────┘
                                         │
                 ┌───────────────────────┼───────────────────────┐
                 │                       │                       │
      ┌──────────▼──────────┐ ┌──────────▼──────────┐ ┌──────────▼──────────┐
      │       Thrisha       │ │     Suchithra BR    │ │        Rashmi       │
      │ Virtual Exploration │ │     AR Modules      │ │    Konark Modules   │
      │   feature/thrisha   │ │  feature/suchithra  │ │   feature/rashmi    │
      └─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

| Member | Branch | Area of Responsibility | Assigned Module Directories |
|---|---|---|---|
| **Thrisha** | `feature/thrisha` | **Virtual Exploration Lead**<br>• Ellora Caves Virtual Tour<br>• Hampi Virtual Tour<br>• Taj Mahal Virtual Tour | `src/modules/thrisha/ellora-virtual/`<br>`src/modules/thrisha/hampi-virtual/`<br>`src/modules/thrisha/taj-mahal-virtual/` |
| **Suchithra BR** | `feature/suchithra` | **Augmented Reality (AR) Lead**<br>• Ellora Caves AR Module<br>• Hampi AR Module<br>• Taj Mahal AR Module | `src/modules/suchithra/ellora-ar/`<br>`src/modules/suchithra/hampi-ar/`<br>`src/modules/suchithra/taj-mahal-ar/` |
| **Rashmi** | `feature/rashmi` | **Konark Subsystem Lead**<br>• Konark Virtual Tour<br>• Konark AR Module | `src/modules/rashmi/konark-virtual/`<br>`src/modules/rashmi/konark-ar/` |
| **Common Baseline** | `main` | **Master Platform Integration**<br>• Homepage & Layout<br>• Shared 360 & AR Viewer Engines<br>• Common Styling, Context & Routing | `src/common/`, `src/pages/`,<br>`src/components/`, `src/engines/`,<br>`src/data/monuments.ts`, `src/data/ar/` |

---

## 2. Detailed Ownership Breakdown

### 1. Thrisha — Virtual Exploration (Ellora, Hampi, Taj Mahal)
- **Code Ownership:**
  - `src/modules/thrisha/ellora-virtual/` (Scenes, viewpoints, 28 hotspots, Cave 10 & 16)
  - `src/modules/thrisha/hampi-virtual/` (Scenes, viewpoints, 20 hotspots, Stone Chariot)
  - `src/modules/thrisha/taj-mahal-virtual/` (Scenes, viewpoints, 28 hotspots, Charbagh & Iwan)
- **Asset Responsibilities:**
  - Panoramas and audio narration in `public/assets/monuments/{ellora,hampi,taj-mahal}/`

### 2. Suchithra BR — AR Modules (Ellora, Hampi, Taj Mahal)
- **Code Ownership:**
  - `src/modules/suchithra/ellora-ar/` (3D camera orbits, FOV, lighting, suggested questions)
  - `src/modules/suchithra/hampi-ar/` (3D camera orbits, FOV, lighting, suggested questions)
  - `src/modules/suchithra/taj-mahal-ar/` (3D camera orbits, FOV, lighting, suggested questions)
- **Asset Responsibilities:**
  - 3D models (`/assets/models/{ellora-caves,hampi-stone-chariot,taj-mahal}.glb`)
  - AR audio narration (`/assets/audio/ar/{ellora,hampi,taj}_*`)

### 3. Rashmi — Konark Modules (Virtual Exploration & AR)
- **Code Ownership:**
  - `src/modules/rashmi/konark-virtual/` (Scenes, viewpoints, 18 hotspots, Simhadwara & Jagamohana)
  - `src/modules/rashmi/konark-ar/` (3D camera orbits, sundial model configuration, questions)
- **Asset Responsibilities:**
  - Konark panoramas & 360 audio in `public/assets/monuments/konark/`
  - Konark 3D model (`/assets/models/konark-sun-temple.glb`)
  - Konark AR narration audio (`/assets/audio/ar/konark_*`)

### 4. Main Branch — Common Application Core
- **Application Entry & Routing:** `index.html`, `src/main.tsx`, `src/App.tsx`, `src/pages/Home.tsx`
- **Shared Components:** `Header.tsx`, `Hero.tsx`, `HeritageGrid.tsx`, `HeritageCard.tsx`, `AboutSection.tsx`, `Footer.tsx`, `GalleryModal.tsx`, `Ornaments.tsx`
- **Shared 360 Viewer Framework:** `src/pages/ViewerModal.tsx`, `src/components/Viewer/*`, `src/engines/*`, `src/services/*`
- **Shared AR Viewer Framework:** `src/components/AR/*` (`ARViewerModal`, `ARModelViewer`, `ARAudioNarrationBar`, `ARAssistantDrawer`)
- **Shared Styling & Tokens:** `src/styles/*` (`design-tokens.css`, `global.css`, `viewer-theme.css`)
- **Master Registries:** `src/data/monuments.ts` and `src/data/ar/arMonumentsConfig.ts` (aggregating each member's modules)

---

## 3. Contribution Verification & Tracking

- Each developer commits only within their dedicated branch (`feature/thrisha`, `feature/suchithra`, `feature/rashmi`).
- All code additions must be reviewed through Pull Requests before merging into `main`.
- Contributions are transparently tracked via Git author logs and GitHub Insights:
  ```bash
  git log --author="Thrisha" --oneline
  git log --author="Suchithra" --oneline
  git log --author="Rashmi" --oneline
  ```

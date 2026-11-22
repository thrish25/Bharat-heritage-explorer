# Royal Heritage Platform
## National Cultural Heritage Digital Preservation & 360° Virtual Exploration Platform

A museum-grade digital preservation platform uniting four of India's world-renowned cultural monuments:
1. **Ellora Caves** (Cave 10 Vishwakarma & Cave 16 Kailasa Temple, Maharashtra)
2. **Hampi** (Vijayanagara Empire Capital, Karnataka)
3. **Konark Sun Temple** (13th Century Solar Chariot, Odisha)
4. **Taj Mahal** (17th Century Classical Mughal Masterpiece, Uttar Pradesh)

---

## 🏛️ Design Identity & Visual Direction

The platform implements a **Dual Design System Architecture**:

### 1. Main Website Theme (Royal Heritage Museum)
* **Warm Ivory**: `#FAF7F2` (Canvas background)
* **Sandstone**: `#D4B28C` (Borders & accents)
* **Deep Brown**: `#241711` (Primary text & contrast panels)
* **Antique Gold**: `#C5A059` (Emblems, icons & focal highlights)
* **Heading Typography**: *Cinzel* and *Playfair Display*
* **Body Typography**: *Plus Jakarta Sans*
* **Aesthetic**: Premium European museum editorial design fused with Indian royal heritage elegance.

### 2. Dark Immersive Exploration Theme (360° Virtual Viewer)
* **Viewer Canvas**: `#17130F`
* **Translucent Surfaces**: `#241711` with backdrop blur
* **Antique Gold Highlights**: `#C5A059`
* **Primary Text**: `#FAF7F2`
* **Secondary Text**: `#D4B28C`
* **Aesthetic**: Cinematic, glare-free, distraction-minimized dark observatory designed for optimal photographic contrast.

---

## 🚀 Quickstart & Startup Instructions

### Prerequisites
* **Node.js** (v18.0 or higher recommended)
* **npm** (v9.0 or higher)

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd royal-heritage-platform
   ```

2. Install dependencies (only required once):
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://127.0.0.1:5173/
   ```

### Production Build & Preview
To create an optimized production bundle:
```bash
npm run build
npm run preview
```

---

## 👥 Team Responsibilities & GitHub Branches

| Developer | Branch | Responsibility Scope | Dedicated Modules |
|---|---|---|---|
| **Thrisha** | `feature/thrisha` | **Virtual Exploration Lead** | `src/modules/virtual-exploration/{ellora, hampi, taj-mahal}/` |
| **Suchithra BR** | `feature/suchithra` | **Augmented Reality (AR) Lead** | `src/modules/ar/{ellora, hampi, taj-mahal}/` |
| **Rashmi** | `feature/rashmi` | **Konark Subsystem Lead** | `src/modules/{virtual-exploration, ar}/konark/` |
| **Integrated Core** | `main` | **Master Common Platform** | `src/pages/`, `src/components/`, `src/data/`, `src/styles/` |

---

## 📁 Source Architecture

```
Royal-Heritage-Explorer/
│
├── src/
│   ├── common/                            # Shared application foundation
│   │   ├── components/                    # Header, Hero, HeritageGrid, AboutSection, Footer, Viewers
│   │   ├── pages/                         # Home.tsx, ViewerModal.tsx
│   │   ├── engines/                       # ThreeJSAdapter, PannellumAdapter
│   │   ├── services/                      # AudioManager, AmbientSoundManager, LanguageService
│   │   ├── context/                       # LanguageContext.tsx (Trilingual state)
│   │   ├── styles/                        # design-tokens.css, global.css, viewer-theme.css
│   │   ├── types/                         # Shared interfaces
│   │   └── data/                          # Master integration registries (monuments.ts, arMonumentsConfig.ts)
│   │
│   ├── modules/
│   │   ├── thrisha/                       # Thrisha: Virtual Exploration
│   │   │   ├── ellora-virtual/            # Ellora 360° scenes, viewpoints & hotspots
│   │   │   ├── hampi-virtual/             # Hampi 360° scenes, viewpoints & hotspots
│   │   │   └── taj-mahal-virtual/         # Taj Mahal 360° scenes, viewpoints & hotspots
│   │   │
│   │   ├── suchithra/                     # Suchithra BR: Augmented Reality (AR)
│   │   │   ├── ellora-ar/                 # Ellora 3D GLB config, lighting & prompts
│   │   │   ├── hampi-ar/                  # Hampi 3D GLB config, lighting & prompts
│   │   │   └── taj-mahal-ar/              # Taj Mahal 3D GLB config, lighting & prompts
│   │   │
│   │   └── rashmi/                        # Rashmi: Konark Subsystems
│   │       ├── konark-virtual/            # Konark 360° scenes, viewpoints & hotspots
│   │       └── konark-ar/                 # Konark 3D GLB config, lighting & prompts
│   │
│   ├── App.tsx                            # Application root
│   └── main.tsx                           # React 19 bootstrap entry
│
├── public/                                # Static assets (panoramas, 3D GLB models, audio, images)
├── package.json                           # Unified dependency manifest
├── README.md                              # Project documentation
└── .gitignore                             # Excludes node_modules, dist, and secrets
```

---

## 🌟 Interactive Features in Phase 1

1. **Trilingual Language Switching**: Seamlessly toggle between **English**, **ಕನ್ನಡ (Kannada)**, and **हिन्दी (Hindi)** in real-time across both the homepage and the 360° exploration interface.
2. **Interactive 360° Viewer Demonstration**:
   - Click **"Explore 360°"** on any destination card to launch the dark immersive interface.
   - **Smooth Panning & Dragging**: Click and drag to inspect equirectangular panoramas.
   - **Auto-Rotation**: Press `Space` or click the auto-rotate button to trigger a continuous museum tour pan.
   - **Calibrated Hotspots**: Click gold pulsing markers to reveal comprehensive archaeological monographs.
   - **Audio Player Simulation**: Real-time scrubbable progress bar, timer, track title, and mute controls.
   - **Optical Zoom & Reset**: Zoom in/out with `+` / `-`, or press `R` to reset orientation.
   - **Monument Switcher**: Toggle seamlessly between Ellora, Hampi, Konark, and the Taj Mahal from within the viewer header.


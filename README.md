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

## 📁 Source Architecture

```
royal-heritage-platform/
├── package.json               # Dependencies (React 19, Tailwind v4, Lucide React, Vite)
├── tsconfig.json              # Strict TypeScript configuration
├── vite.config.ts             # Vite configuration with Tailwind CSS v4 plugin
├── index.html                 # Master HTML document with Google Heritage Fonts
├── public/
│   └── images/                # High-resolution authentic monument and panorama imagery
└── src/
    ├── styles/
    │   ├── design-tokens.css  # Centralized CSS variables for both light and dark palettes
    │   ├── global.css         # Museum typography, scrollbars, and Tailwind layers
    │   └── viewer-theme.css   # Dark 360° viewer styles, animations, and glassmorphism
    ├── types/
    │   └── index.ts           # TypeScript interfaces for monuments, scenes, and hotspots
    ├── context/
    │   └── LanguageContext.tsx# Global trilingual state manager (English, Kannada, Hindi)
    ├── data/
    │   └── monuments.ts       # Curated trilingual catalog of all four heritage sites
    ├── components/
    │   ├── Header.tsx         # Sticky museum navigation bar with language switcher
    │   ├── Hero.tsx           # Cinematic architectural hero with statistics
    │   ├── HeritageCard.tsx   # Monument destination cards with interactive hover effects
    │   ├── HeritageGrid.tsx   # Responsive grid of four sovereign sanctuaries
    │   ├── AboutSection.tsx   # Three pillars: Archiving, Telemetry, and Trilingual Education
    │   ├── Footer.tsx         # Academic attribution and quick navigation links
    │   └── Viewer/            # Reusable 360° Exploration Components:
    │       ├── ViewerHeader.tsx     # Top glassmorphic bar with monument breadcrumbs
    │       ├── SceneSelector.tsx    # Bottom viewpoint carousel drawer
    │       ├── HotspotMarker.tsx    # Pulsating gold architectural markers
    │       ├── HotspotPanel.tsx     # Translucent monograph popup with tabs & audio
    │       ├── AudioPlayer.tsx      # Docked player with scrubbable progress bar
    │       ├── ViewerControls.tsx   # Floating HUD (Zoom, Reset, Auto-rotate, Fullscreen)
    │       ├── LanguageSelector.tsx # Segmented EN / KN / HI control
    │       └── LoadingIndicator.tsx # Circular compass calibration screen
    ├── pages/
    │   ├── Home.tsx           # Master landing page coordinator
    │   └── ViewerModal.tsx    # Interactive 360° Exploration Design System Preview
    ├── App.tsx                # Context provider and application root
    └── main.tsx               # React 19 bootstrap entrypoint
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


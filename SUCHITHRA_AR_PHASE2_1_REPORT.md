
## Implementation & Verification of Lightweight AR Poster Previews for Ellora Caves, Hampi, and Taj Mahal
**Royal Heritage Explorer — Branch: `feature/suchithra`**  
**Subsystem Lead:** Suchithra BR (AR Lead)  
**Date:** November 22, 2026  
**Implementation Phase:** Phase 2.1 (AR Poster Previews)  
**Overall Verdict:** **PASS** (100% of Phase 2.1 Acceptance Criteria Met)

---

## 1. Executive Summary

In Phase 2.1, lightweight, high-fidelity WebP poster previews were created and integrated into Suchithra's three assigned AR modules:
1. **Ellora Caves (Kailasa Temple)**
2. **Hampi (Vijaya Vittala Stone Chariot)**
3. **Taj Mahal (Mughal Classical Marble)**

Prior to Phase 2.1, `<model-viewer>` loaded with a dark placeholder backdrop while downloading large 3D meshes (e.g. Taj Mahal's 51.5 MB uncompressed GLB). In Phase 2.1:
- Authentic monument photography from existing project assets was converted into optimized WebP preview posters.
- All three posters strictly meet the **< 100 KB** weight requirement (average size: ~71 KB).
- The Suchithra module configurations (`ellora-ar`, `hampi-ar`, and `taj-mahal-ar`) were configured with `posterSrc`.
- The `<model-viewer>` component was linked to `poster={config.posterSrc || undefined}` with softened backdrop transparency (`backdrop-blur-[1px] bg-[#121416]/40`), enabling instantaneous visual feedback while the 3D model streams in.
- Full regression tests, TypeScript typechecking (`tsc --noEmit`), production bundling (`npm run build`), and automated Puppeteer headless browser tests confirmed 100% functionality with HTTP 200 responses.

---

## 2. Poster Image Inventory & Optimization Details

All poster assets were generated using lossless/high-efficiency WebP compression from authentic monument images located in `public/images/`. No generic or stock imagery was used.

| Monument Module | Poster Filename | Source Asset | Dimensions | File Size | Compliance (<100 KB) | Target Asset Path |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Ellora Caves** | `ellora-ar-poster.webp` | `public/images/ellora.jpg` (Kailasa rock-cut facade) | 715 × 429 px | **79.32 KB** (81,228 bytes) | **PASS** (<100 KB) | `/assets/images/ar/ellora-ar-poster.webp` |
| **Hampi** | `hampi-ar-poster.webp` | `public/images/hampi.jpg` (Vijaya Vittala Stone Chariot) | 564 × 564 px | **79.68 KB** (81,588 bytes) | **PASS** (<100 KB) | `/assets/images/ar/hampi-ar-poster.webp` |
| **Taj Mahal** | `taj-mahal-ar-poster.webp` | `public/images/tajmahal.jpg` (White marble mausoleum) | 640 × 480 px | **55.56 KB** (56,892 bytes) | **PASS** (<100 KB) | `/assets/images/ar/taj-mahal-ar-poster.webp` |

*Note: For fallback path compatibility across both `/assets/images/ar/` and `/assets/posters/ar/`, identical copies were placed in `public/assets/posters/ar/`.*

---

## 3. Configuration & Code Changes

### 3.1 Suchithra's Module Configurations (`src/modules/suchithra/`)
Each monument module's `config.ts` was updated with the `posterSrc` property adhering to the existing `ARMonumentConfig` TypeScript definition:

1. **Ellora AR** (`src/modules/suchithra/ellora-ar/config.ts`):
   ```typescript
   export const ELLORA_AR_CONFIG: ARMonumentConfig = {
     id: 'ellora',
     name: {
       en: 'Kailasa Temple Cave 16',
       kn: 'ಕೈಲಾಸ ದೇವಾಲಯ ಗುಹೆ ೧೬',
       hi: 'कैलाश मंदिर गुफा १६',
     },
     modelSrc: '/assets/models/ar/ellora.glb',
     posterSrc: '/assets/images/ar/ellora-ar-poster.webp',
     altText: '3D architectural model of the monolithic Kailasa Temple at Ellora Caves',
     // cameraOrbit, minCameraOrbit, maxCameraOrbit, fieldOfView retained
   };
   ```

2. **Hampi AR** (`src/modules/suchithra/hampi-ar/config.ts`):
   ```typescript
   export const HAMPI_AR_CONFIG: ARMonumentConfig = {
     id: 'hampi',
     name: {
       en: 'Vijaya Vittala Stone Chariot',
       kn: 'ವಿಜಯ ವಿಠ್ಠಲ ಕಲ್ಲಿನ ರಥ',
       hi: 'विजय विट्ठल पत्थर का रथ',
     },
     modelSrc: '/assets/models/ar/hampi.glb',
     posterSrc: '/assets/images/ar/hampi-ar-poster.webp',
     altText: '3D model of the monolithic stone chariot of Vijaya Vittala Temple, Hampi',
     // cameraOrbit, minCameraOrbit, maxCameraOrbit, fieldOfView retained
   };
   ```

3. **Taj Mahal AR** (`src/modules/suchithra/taj-mahal-ar/config.ts`):
   ```typescript
   export const TAJ_MAHAL_AR_CONFIG: ARMonumentConfig = {
     id: 'tajmahal',
     name: {
       en: 'Taj Mahal Mausoleum',
       kn: 'ತಾಜ್ ಮಹಲ್ ಸಮಾಧಿ',
       hi: 'ताज महल मकबरा',
     },
     modelSrc: '/assets/models/ar/taj_mahal.glb',
     posterSrc: '/assets/images/ar/taj-mahal-ar-poster.webp',
     altText: '3D model of the Mughal marble mausoleum Taj Mahal in Agra',
     // cameraOrbit, minCameraOrbit, maxCameraOrbit, fieldOfView retained
   };
   ```

### 3.2 Common & Shared AR Viewer Integration (`src/common/` & `src/components/`)
1. `<model-viewer>` attribute binding added:
   ```tsx
   <model-viewer
     ref={modelViewerRef}
     id="arMonumentViewer"
     src={config.modelSrc}
     poster={config.posterSrc || undefined}
     alt={config.altText}
     ar
     ar-modes="webxr scene-viewer quick-look"
     ...
   >
   ```
2. Softened loading overlay backdrop from opaque/dense blur (`bg-[#121416]/85 backdrop-blur-sm`) to semi-transparent (`bg-[#121416]/40 backdrop-blur-[1px]`), allowing the poster image to be visible to the user immediately while the golden spinner and percentage bar indicate model download progress. Once `<model-viewer>` fires its `load` event, the overlay is dismissed automatically.
3. Updated in both the common integration component (`src/common/components/AR/ARModelViewer.tsx`) and the backward-compatible shim (`src/components/AR/ARModelViewer.tsx`).

---

## 4. Strict Boundary & Non-Regression Compliance

| Constraint | Status | Notes |
| :--- | :--- | :--- |
| **Branch Restriction** | **VERIFIED** | Active branch is `feature/suchithra`. |
| **Thrisha's Virtual Exploration Modules** | **UNTOUCHED** | No files under `src/modules/thrisha/` were accessed or modified. |
| **Rashmi's Konark Modules** | **UNTOUCHED** | No files under `src/modules/rashmi/` were accessed or modified. |
| **No Git Commit / Push** | **VERIFIED** | Changes remain unstaged in working directory awaiting explicit user directive. |
| **No Scope Creep** | **VERIFIED** | No offline AI fallback, camera recalibration, Draco mesh compression, or AR hotspots were touched in this subphase. |
| **Backward-Compatible Layer** | **MAINTAINED** | Both `src/common/` and `src/components/` layers are synchronized. |

---

## 5. Verification & Test Results

### 5.1 Static TypeScript Check
- **Command:** `npx tsc --noEmit`
- **Result:** **PASS** (Exit code `0`, 0 errors, 0 warnings).

### 5.2 Production Bundler Build
- **Command:** `npm run build` (`tsc && vite build`)
- **Result:** **PASS** (Exit code `0`).
- **Transform Statistics:** 1,717 modules transformed.
- **Bundle Outputs:**
  - `dist/index.html` (1.89 kB)
  - `dist/assets/index-BrRfr_Bw.css` (102.62 kB)
  - `dist/assets/index-CPylnjWS.js` (1,004.58 kB)
  - All WebP posters copied to `dist/assets/images/ar/` and `dist/assets/posters/ar/`.

### 5.3 Automated Headless Browser & Network Verification
A Puppeteer automated test script (`test_ar_posters.cjs`) was executed against the built production distribution served on a local server (`http://127.0.0.1:4178`):

```
======================================================================
PHASE 2.1 — AR POSTER PREVIEWS VERIFICATION
======================================================================

[FILE AUDIT] ellora-ar-poster.webp: Exists=true, Size=79.32 KB (<100KB: true)
[FILE AUDIT] hampi-ar-poster.webp: Exists=true, Size=79.68 KB (<100KB: true)
[FILE AUDIT] taj-mahal-ar-poster.webp: Exists=true, Size=55.56 KB (<100KB: true)

Preview server listening on http://127.0.0.1:4178

--- Testing AR Poster for Ellora ---
[HTTP RESPONSE] Poster fetched: http://127.0.0.1:4178/assets/images/ar/ellora-ar-poster.webp (status: 200)
[DOM INSPECTION] Ellora: {
  found: true,
  posterProp: '/assets/images/ar/ellora-ar-poster.webp',
  hasProgressOverlay: true
}

--- Testing AR Poster for Hampi ---
[HTTP RESPONSE] Poster fetched: http://127.0.0.1:4178/assets/images/ar/hampi-ar-poster.webp (status: 200)
[DOM INSPECTION] Hampi: {
  found: true,
  posterProp: '/assets/images/ar/hampi-ar-poster.webp',
  hasProgressOverlay: true
}

--- Testing AR Poster for Taj Mahal ---
[HTTP RESPONSE] Poster fetched: http://127.0.0.1:4178/assets/images/ar/taj-mahal-ar-poster.webp (status: 200)
[DOM INSPECTION] Taj Mahal: {
  found: true,
  posterProp: '/assets/images/ar/taj-mahal-ar-poster.webp',
  hasProgressOverlay: true
}

======================================================================
SUMMARY OF PHASE 2.1 POSTER PREVIEW RESULTS:
┌─────────┬─────────────┬──────────────────────────────────────────────┬────────┬───────────┬────────────┬────────────┐
│ (index) │ monument    │ path                                         │ exists │ sizeBytes │ sizeKB     │ under100KB │
├─────────┼─────────────┼──────────────────────────────────────────────┼────────┼───────────┼────────────┼────────────┤
│ 0       │ 'ellora'    │ '/assets/images/ar/ellora-ar-poster.webp'    │ true   │ 81228     │ '79.32 KB' │ true       │
│ 1       │ 'hampi'     │ '/assets/images/ar/hampi-ar-poster.webp'     │ true   │ 81588     │ '79.68 KB' │ true       │
│ 2       │ 'taj-mahal' │ '/assets/images/ar/taj-mahal-ar-poster.webp' │ true   │ 56892     │ '55.56 KB' │ true       │
└─────────┴─────────────┴──────────────────────────────────────────────┴────────┴───────────┴────────────┴────────────┘
HTTP Requests verified: [
  { url: 'http://127.0.0.1:4178/assets/images/ar/ellora-ar-poster.webp', status: 200 },
  { url: 'http://127.0.0.1:4178/assets/images/ar/hampi-ar-poster.webp', status: 200 },
  { url: 'http://127.0.0.1:4178/assets/images/ar/taj-mahal-ar-poster.webp', status: 200 }
]
Ellora Test: { success: true, posterProp: '/assets/images/ar/ellora-ar-poster.webp', matchesExpected: true }
Hampi Test: { success: true, posterProp: '/assets/images/ar/hampi-ar-poster.webp', matchesExpected: true }
Taj Mahal Test: { success: true, posterProp: '/assets/images/ar/taj-mahal-ar-poster.webp', matchesExpected: true }
======================================================================

>>> ALL PHASE 2.1 POSTER PREVIEW TESTS PASSED! <<<
```

---

## 6. Files Created and Modified

### Files Created:
1. `public/assets/images/ar/ellora-ar-poster.webp` (79.32 KB)
2. `public/assets/images/ar/hampi-ar-poster.webp` (79.68 KB)
3. `public/assets/images/ar/taj-mahal-ar-poster.webp` (55.56 KB)
4. `public/assets/posters/ar/ellora-ar-poster.webp` (79.32 KB, fallback path)
5. `public/assets/posters/ar/hampi-ar-poster.webp` (79.68 KB, fallback path)
6. `public/assets/posters/ar/taj-mahal-ar-poster.webp` (55.56 KB, fallback path)
7. `SUCHITHRA_AR_PHASE2_1_REPORT.md` (this report)

### Files Modified:
1. `src/modules/suchithra/ellora-ar/config.ts` — Added `posterSrc`.
2. `src/modules/suchithra/hampi-ar/config.ts` — Added `posterSrc`.
3. `src/modules/suchithra/taj-mahal-ar/config.ts` — Added `posterSrc`.
4. `src/common/components/AR/ARModelViewer.tsx` — Added `poster` prop to `<model-viewer>` and adjusted overlay backdrop transparency.
5. `src/components/AR/ARModelViewer.tsx` — Backward-compatibility synchronization of `poster` prop and overlay transparency.

---

## 7. Next Recommended Phases

With Phase 2.1 successfully verified, the AR enhancements roadmap for Suchithra's branch can proceed to:
1. **Phase 2.2 – Offline AI Assistant Knowledge Base Fallback**: Local trilingual Q&A fallback for Ellora, Hampi, and Taj Mahal when Ollama/backend API is unreachable.
2. **Phase 2.3 – Camera Orbit & Framerate Optimization**: Tailored default camera angles and FOV settings to prevent clipping on mobile screens.
3. **Phase 2.4 – Model Optimization / Draco Mesh Compression**: Compressing Taj Mahal (51.5 MB) and Hampi (17.5 MB) down to < 5 MB for rapid mobile AR placement.
4. **Phase 2.5 – Interactive AR Hotspots**: Surface 3D spatial annotations onto the monument models highlighting key architectural features.

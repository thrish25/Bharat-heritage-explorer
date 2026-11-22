export type Language = 'en' | 'kn' | 'hi';

export interface TranslationDictionary {
  // Navigation & Header
  navHome: string;
  navExplore: string;
  navMap: string;
  navAbout: string;
  navGallery: string;
  siteTitle: string;
  siteSubtitle: string;
  selectLanguage: string;
  exploreHeritageCTA: string;
  unescoSite: string;
  mapSectionTitle: string;
  mapSectionSubtitle: string;

  // Hero Section
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroDescription: string;
  heroExploreBtn: string;
  heroSlides: {
    hampi: { alt: string; caption: string };
    tajmahal: { alt: string; caption: string };
    konark: { alt: string; caption: string };
  };

  // Destinations Grid
  destinationsHeading: string;
  destinationsSubtitle: string;
  exploreBtn: string;

  // About Section
  aboutTitle: string;
  aboutDescription: string;
  aboutLearnMore: string;
  aboutFeature1Title: string;
  aboutFeature1Sub: string;
  aboutFeature2Title: string;
  aboutFeature2Sub: string;
  aboutFeature3Title: string;
  aboutFeature3Sub: string;
  aboutFeature4Title: string;
  aboutFeature4Sub: string;

  // Gallery Modal
  galleryTitle: string;
  galleryBadge: string;
  galleryClose: string;
  galleryPrev: string;
  galleryNext: string;

  // Viewer HUD & Controls
  viewerReturnToMuseum: string;
  viewerCalibrating: string;
  viewerSanctuariesCount: string;
  viewerViewpointsTitle: string;
  viewerAudioGuide: string;
  viewerAudioTitleFallback: string;
  viewerMonographBadge: string;
  viewerPlayAudio: string;
  viewerAudioPlaying: string;
  viewerClosePanel: string;
  viewerControlsZoomIn: string;
  viewerControlsZoomOut: string;
  viewerControlsReset: string;
  viewerControlsAutoRotate: string;
  viewerControlsHotspots: string;
  viewerControlsFullscreen: string;
  viewerControlsHelp: string;

  // Controls Help Dialog
  helpTitle: string;
  helpSubtitle: string;
  helpClose: string;
  helpShortcutSpace: string;
  helpShortcutSpaceDesc: string;
  helpShortcutH: string;
  helpShortcutHDesc: string;
  helpShortcutR: string;
  helpShortcutRDesc: string;
  helpShortcutPlus: string;
  helpShortcutPlusDesc: string;
  helpShortcutF: string;
  helpShortcutFDesc: string;
  helpShortcutEsc: string;
  helpShortcutEscDesc: string;
  helpDragToRotate: string;
  helpDragToRotateDesc: string;

  // Footer
  footerMotto: string;
  footerRights: string;
  footerBackToTop: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    navHome: 'Home',
    navExplore: 'Destinations',
    navMap: 'Interactive Map',
    navAbout: 'About Archive',
    navGallery: 'Gallery',
    siteTitle: 'BHARAT ROYALE',
    siteSubtitle: 'ANCIENT CIVILIZATION • TIMELESS STORIES • DIGITAL EXPLORATION',
    selectLanguage: 'Language',
    exploreHeritageCTA: 'Explore 360°',
    unescoSite: 'UNESCO World Heritage Site',
    mapSectionTitle: 'GEOGRAPHIC HERITAGE DISCOVERY',
    mapSectionSubtitle: 'Interactive exploration of India\'s architectural marvels across their verified geographical coordinates',

    heroHeadingLine1: 'EXPLORE THE TIMELESS',
    heroHeadingLine2: 'LEGACY OF INDIA',
    heroDescription:
      'Step into a world of magnificent temples, royal architecture and enduring heritage through immersive 360° virtual exploration.',
    heroExploreBtn: 'Explore Heritage',
    heroSlides: {
      hampi: {
        alt: 'Hampi Vijaya Vittala Temple and Stone Chariot in Golden Hour Sunset',
        caption: 'Vijaya Vittala Temple Complex & Stone Chariot, Hampi',
      },
      tajmahal: {
        alt: 'Taj Mahal Symmetrical Reflection across Charbagh Pool',
        caption: 'Symmetrical Charbagh Pool, Taj Mahal',
      },
      konark: {
        alt: 'Konark Sun Temple Celestial Chariot Sundial Wheel',
        caption: 'Solar Chronometer Chariot, Konark',
      },
    },

    destinationsHeading: '❖ OUR HERITAGE DESTINATIONS ❖',
    destinationsSubtitle:
      'Immerse yourself in authentic high-resolution virtual sanctuaries across India',
    exploreBtn: 'Explore',

    aboutTitle: 'ABOUT THE ARCHIVE',
    aboutDescription:
      "A scholarly digital preservation platform dedicated to India's monumental heritage through photorealistic 360° exploration, evidence-based historical views, natural museum audio guides, and Heritage AI intelligence.",
    aboutLearnMore: 'Learn More',
    aboutFeature1Title: '360°',
    aboutFeature1Sub: 'Exploration',
    aboutFeature2Title: 'Historical',
    aboutFeature2Sub: 'Insights',
    aboutFeature3Title: 'Audio',
    aboutFeature3Sub: 'Guides',
    aboutFeature4Title: 'Multiple',
    aboutFeature4Sub: 'Languages',

    galleryTitle: 'Indian Heritage Gallery',
    galleryBadge: 'Archival Photography',
    galleryClose: 'Close gallery',
    galleryPrev: 'Previous image',
    galleryNext: 'Next image',

    viewerReturnToMuseum: 'Return to Museum',
    viewerCalibrating: 'CALIBRATING OPTICS & SANCTUARY...',
    viewerSanctuariesCount: 'Panoramic Sanctuaries',
    viewerViewpointsTitle: 'Calibrated 360° Viewpoints',
    viewerAudioGuide: 'NARRATION GUIDE',
    viewerAudioTitleFallback: 'Architectural Narration Guide',
    viewerMonographBadge: 'Archaeological Monograph',
    viewerPlayAudio: 'Play Audio Monograph',
    viewerAudioPlaying: 'Audio Playing...',
    viewerClosePanel: 'Close Details Panel',
    viewerControlsZoomIn: 'Zoom In (+)',
    viewerControlsZoomOut: 'Zoom Out (-)',
    viewerControlsReset: 'Reset Camera Orientation (R)',
    viewerControlsAutoRotate: 'Toggle Auto-Rotation (Space)',
    viewerControlsHotspots: 'Toggle Hotspots (H)',
    viewerControlsFullscreen: 'Toggle Fullscreen (F)',
    viewerControlsHelp: 'Controls & Keyboard Guide (?)',

    helpTitle: 'Navigation & Controls Guide',
    helpSubtitle: 'Interactive 360° Observatory Instructions',
    helpClose: 'Close Help',
    helpShortcutSpace: 'Spacebar',
    helpShortcutSpaceDesc: 'Toggle smooth continuous 360° auto-rotation',
    helpShortcutH: 'H Key',
    helpShortcutHDesc: 'Show or hide architectural hotspot markers',
    helpShortcutR: 'R Key',
    helpShortcutRDesc: 'Reset camera tilt, pitch, and zoom to initial orientation',
    helpShortcutPlus: '+ / - Keys',
    helpShortcutPlusDesc: 'Zoom in or zoom out of fine architectural details',
    helpShortcutF: 'F Key',
    helpShortcutFDesc: 'Enter or exit immersive fullscreen mode',
    helpShortcutEsc: 'Escape Key',
    helpShortcutEscDesc: 'Close active hotspot panel or exit the 360° observatory',
    helpDragToRotate: 'Click & Drag',
    helpDragToRotateDesc: 'Look in any direction across the 360° sanctuary',

    footerMotto: 'PRESERVE • EXPLORE • EXPERIENCE',
    footerRights: 'All Rights Reserved. Digital Preservation Project.',
    footerBackToTop: 'Back to Top',
  },

  kn: {
    navHome: 'ಮುಖಪುಟ',
    navExplore: 'ತಾಣಗಳು',
    navMap: 'ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ',
    navAbout: 'ವೇದಿಕೆಯ ಬಗ್ಗೆ',
    navGallery: 'ಚಿತ್ರಶಾಲೆ',
    siteTitle: 'BHARAT ROYALE',
    siteSubtitle: 'ಪ್ರಾಚೀನ ನಾಗರಿಕತೆ • ಅಮರ ಕಥೆಗಳು • ಡಿಜಿಟಲ್ ಪರಿಶೋಧನೆ',
    selectLanguage: 'ಭಾಷೆ',
    exploreHeritageCTA: '360° ಅನ್ವೇಷಿಸಿ',
    unescoSite: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ತಾಣ',
    mapSectionTitle: 'ಭೌಗೋಳಿಕ ಪರಂಪರೆಯ ಅನ್ವೇಷಣೆ',
    mapSectionSubtitle: 'ನಿಖರ ಭೌಗೋಳಿಕ ನಿರ್ದೇಶಾಂಕಗಳಲ್ಲಿ ಭಾರತದ ಐತಿಹಾಸಿಕ ವಾಸ್ತುಶಿಲ್ಪದ ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ',

    heroHeadingLine1: 'ಭಾರತದ ಅನನ್ಯ',
    heroHeadingLine2: 'ಪರಂಪರೆಯನ್ನು ಅನ್ವೇಷಿಸಿ',
    heroDescription:
      'ಭವ್ಯ ದೇವಾಲಯಗಳು, ರಾಜಪ್ರಾಸಾದಗಳು ಮತ್ತು ಅಮರ ಪರಂಪರೆಯ ಲೋಕಕ್ಕೆ 360° ವಾಸ್ತವಿಕ ಅನುಭವದ ಮೂಲಕ ಕಾಲಿಡಿ.',
    heroExploreBtn: 'ಪರಂಪರೆ ಅನ್ವೇಷಿಸಿ',
    heroSlides: {
      hampi: {
        alt: 'ಹಂಪಿ ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಮತ್ತು ಸೂರ್ಯಾಸ್ತದ ಕಲ್ಲಿನ ರಥ',
        caption: 'ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಮತ್ತು ಕಲ್ಲಿನ ರಥ, ಹಂಪಿ',
      },
      tajmahal: {
        alt: 'ಚಾರ್‌ಬಾಗ್ ಕೊಳದಲ್ಲಿ ತಾಜ್ ಮಹಲಿನ ಭವ್ಯ ಪ್ರತಿಬಿಂಬ',
        caption: 'ಚಾರ್‌ಬಾಗ್ ಕೊಳ, ತಾಜ್ ಮಹಲ್',
      },
      konark: {
        alt: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯದ ಸೌರ ಗಡಿಯಾರ ಚಕ್ರ',
        caption: 'ಸೌರ ಗಡಿಯಾರ ರಥ, ಕೊನಾರ್ಕ್',
      },
    },

    destinationsHeading: '❖ ನಮ್ಮ ಹೆಮ್ಮೆಯ ಪಾರಂಪರಿಕ ತಾಣಗಳು ❖',
    destinationsSubtitle:
      'ಭಾರತದ ಐತಿಹಾಸಿಕ ತಾಣಗಳನ್ನು ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟದ 360° ದೃಶ್ಯಾವಳಿಯಲ್ಲಿ ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ',
    exploreBtn: 'ಅನ್ವೇಷಿಸಿ',

    aboutTitle: 'ಪಾರಂಪರಿಕ ದಾಖಲಾತಿಯ ಬಗ್ಗೆ',
    aboutDescription:
      'ಅತ್ಯುನ್ನತ 360° ದೃಶ್ಯಾವಳಿ, ಪ್ರಾಚೀನ ಇತಿಹಾಸದ ವೀಕ್ಷಣೆ (Explore the Past), ನೈಸರ್ಗಿಕ ಶ್ರವಣ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಹೆರಿಟೇಜ್ ಎಐ ಮೂಲಕ ಭಾರತದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸುವ ಜ್ಞಾನ ವೇದಿಕೆ.',
    aboutLearnMore: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ',
    aboutFeature1Title: '360°',
    aboutFeature1Sub: 'ಅನ್ವೇಷಣೆ',
    aboutFeature2Title: 'ಐತಿಹಾಸಿಕ',
    aboutFeature2Sub: 'ವಿವರಣೆಗಳು',
    aboutFeature3Title: 'ಶ್ರವಣ',
    aboutFeature3Sub: 'ಮಾರ್ಗದರ್ಶಿ',
    aboutFeature4Title: 'ಬಹು',
    aboutFeature4Sub: 'ಭಾಷೆಗಳು',

    galleryTitle: 'ಭಾರತೀಯ ಪಾರಂಪರಿಕ ಚಿತ್ರಶಾಲೆ',
    galleryBadge: 'ಆರ್ಕೈವಲ್ ಛಾಯಾಚಿತ್ರಗಳು',
    galleryClose: 'ಚಿತ್ರಶಾಲೆ ಮುಚ್ಚಿ',
    galleryPrev: 'ಹಿಂದಿನ ಚಿತ್ರ',
    galleryNext: 'ಮುಂದಿನ ಚಿತ್ರ',

    viewerReturnToMuseum: 'ವಸ್ತುಸಂಗ್ರಹಾಲಯಕ್ಕೆ ಹಿಂತಿರುಗಿ',
    viewerCalibrating: '360° ದೃಶ್ಯವನ್ನು ಸಜ್ಜುಗೊಳಿಸಲಾಗುತ್ತಿದೆ...',
    viewerSanctuariesCount: 'ಪನೋರಮಿಕ್ ತಾಣಗಳು',
    viewerViewpointsTitle: '360° ವೀಕ್ಷಣಾ ತಾಣಗಳು',
    viewerAudioGuide: 'ಶ್ರವಣ ಮಾರ್ಗದರ್ಶಿ',
    viewerAudioTitleFallback: 'ವಾಸ್ತುಶಿಲ್ಪ ಶ್ರವಣ ವಿವರಣೆ',
    viewerMonographBadge: 'ಪುರಾತತ್ತ್ವ ವಿವರಣೆ',
    viewerPlayAudio: 'ಶ್ರವಣ ವಿವರಣೆ ಆಲಿಸಿ',
    viewerAudioPlaying: 'ಆಡಿಯೋ ಪ್ಲೇ ಆಗುತ್ತಿದೆ...',
    viewerClosePanel: 'ವಿವರಣಾ ಫಲಕ ಮುಚ್ಚಿ',
    viewerControlsZoomIn: 'ಹಿಗ್ಗಿಸಿ (+)',
    viewerControlsZoomOut: 'ಕುಗ್ಗಿಸಿ (-)',
    viewerControlsReset: 'ಕ್ಯಾಮೆರಾ ಮರುಹೊಂದಿಸಿ (R)',
    viewerControlsAutoRotate: 'ಸ್ವಯಂ ತಿರುಗುವಿಕೆ (Space)',
    viewerControlsHotspots: 'ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳನ್ನು ತೋರಿಸಿ/ಮರೆಮಾಡಿ (H)',
    viewerControlsFullscreen: 'ಪೂರ್ಣ ಪರದೆ (F)',
    viewerControlsHelp: 'ಕೀಬೋರ್ಡ್ ಮಾರ್ಗದರ್ಶಿ (?)',

    helpTitle: 'ನ್ಯಾವಿಗೇಷನ್ ಮತ್ತು ಕೀಬೋರ್ಡ್ ಮಾರ್ಗದರ್ಶಿ',
    helpSubtitle: 'ಸಂವಾದಾತ್ಮಕ 360° ವೀಕ್ಷಣಾ ಸೂಚನೆಗಳು',
    helpClose: 'ಮಾರ್ಗದರ್ಶಿ ಮುಚ್ಚಿ',
    helpShortcutSpace: 'ಸ್ಪೇಸ್‌ಬಾರ್',
    helpShortcutSpaceDesc: 'ಸುಲಭ ಸ್ವಯಂ 360° ತಿರುಗುವಿಕೆಯನ್ನು ಆನ್/ಆಫ್ ಮಾಡಿ',
    helpShortcutH: 'H ಕೀಲಿ',
    helpShortcutHDesc: 'ವಾಸ್ತುಶಿಲ್ಪದ ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳನ್ನು ತೋರಿಸಿ ಅಥವಾ ಮರೆಮಾಡಿ',
    helpShortcutR: 'R ಕೀಲಿ',
    helpShortcutRDesc: 'ಕ್ಯಾಮೆರಾವನ್ನು ಪ್ರಾರಂಭಿಕ ಕೋನಕ್ಕೆ ಮರುಹೊಂದಿಸಿ',
    helpShortcutPlus: '+ / - ಕೀಲಿಗಳು',
    helpShortcutPlusDesc: 'ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳನ್ನು ಜೂಮ್ ಇನ್ ಅಥವಾ ಜೂಮ್ ಔಟ್ ಮಾಡಿ',
    helpShortcutF: 'F ಕೀಲಿ',
    helpShortcutFDesc: 'ಪೂರ್ಣ ಪರದೆಯ ವೀಕ್ಷಣೆಗೆ ಪ್ರವೇಶಿಸಿ ಅಥವಾ ನಿರ್ಗಮಿಸಿ',
    helpShortcutEsc: 'ಎಸ್ಕೇಪ್ (Esc) ಕೀಲಿ',
    helpShortcutEscDesc: 'ವಿವರಣೆ ಫಲಕವನ್ನು ಮುಚ್ಚಿ ಅಥವಾ ವೀಕ್ಷಕದಿಂದ ನಿರ್ಗಮಿಸಿ',
    helpDragToRotate: 'ಕ್ಲಿಕ್ ಮಾಡಿ ಎಳೆಯಿರಿ',
    helpDragToRotateDesc: '360° ಪರಿಸರದಲ್ಲಿ ಯಾವುದೇ ದಿಕ್ಕಿಗೆ ವೀಕ್ಷಿಸಿ',

    footerMotto: 'ಸಂರಕ್ಷಿಸಿ • ಅನ್ವೇಷಿಸಿ • ಅನುಭವಿಸಿ',
    footerRights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಡಿಜಿಟಲ್ ಸಂರಕ್ಷಣಾ ಯೋಜನೆ.',
    footerBackToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
  },

  hi: {
    navHome: 'होम',
    navExplore: 'धरोहर स्थल',
    navMap: 'इंटरैक्टिव मानचित्र',
    navAbout: 'मंच के बारे में',
    navGallery: 'चित्र दीर्घा',
    siteTitle: 'BHARAT ROYALE',
    siteSubtitle: 'प्राचीन सभ्यता • अमर गाथाएँ • डिजिटल अन्वेषण',
    selectLanguage: 'भाषा',
    exploreHeritageCTA: '360° अन्वेषण करें',
    unescoSite: 'यूनेस्को विश्व धरोहर स्थल',
    mapSectionTitle: 'भौगोलिक धरोहर अन्वेषण',
    mapSectionSubtitle: 'सत्यापित भौगोलिक निर्देशांकों पर भारत के ऐतिहासिक स्थापत्य का इंटरैक्टिव मानचित्र',

    heroHeadingLine1: 'भारत की शाश्वत',
    heroHeadingLine2: 'धरोहर का अन्वेषण करें',
    heroDescription:
      'भव्य मंदिरों, शाही वास्तुकला और अमर सांस्कृतिक विरासत की दुनिया में 360° आभासी अन्वेषण के माध्यम से प्रवेश करें।',
    heroExploreBtn: 'धरोहर देखें',
    heroSlides: {
      hampi: {
        alt: 'हम्पी विजय विट्ठल मंदिर और सूर्यास्त का प्रस्तर रथ',
        caption: 'विजय विट्ठल मंदिर परिसर एवं प्रस्तर रथ, हम्पी',
      },
      tajmahal: {
        alt: 'चारबाग सरोवर में ताज महल का सममित प्रतिबिंब',
        caption: 'चारबाग सरोवर, ताज महल',
      },
      konark: {
        alt: 'कोणार्क सूर्य मंदिर का सौर धूपघड़ी चक्र',
        caption: 'सौर कालमापक रथ, कोणार्क',
      },
    },

    destinationsHeading: '❖ हमारे प्रमुख ऐतिहासिक स्थल ❖',
    destinationsSubtitle:
      'भारत के कालजयी स्मारकों को सजीव एवं उच्च-परिभाषा 360° विस्तार में देखें',
    exploreBtn: 'अन्वेषण करें',

    aboutTitle: 'धरोहर अभिलेख के बारे में',
    aboutDescription:
      'उच्च-परिभाषा 360° विस्तार, ऐतिहासिक वास्तुकला दर्शन (Explore the Past), सहज संग्रहालय ऑडियो गाइड और हेरिटेज एआई के माध्यम से भारत की सांस्कृतिक धरोहर का वैज्ञानिक अभिलेखीय संरक्षण।',
    aboutLearnMore: 'और जानें',
    aboutFeature1Title: '360°',
    aboutFeature1Sub: 'अन्वेषण',
    aboutFeature2Title: 'ऐतिहासिक',
    aboutFeature2Sub: 'विवरण',
    aboutFeature3Title: 'श्रव्य',
    aboutFeature3Sub: 'गाइड',
    aboutFeature4Title: 'विविध',
    aboutFeature4Sub: 'भाषाएँ',

    galleryTitle: 'भारतीय धरोहर चित्र दीर्घा',
    galleryBadge: 'अभिलेखीय छायाचित्र',
    galleryClose: 'दीर्घा बंद करें',
    galleryPrev: 'पिछला चित्र',
    galleryNext: 'अगला चित्र',

    viewerReturnToMuseum: 'संग्रहालय लौटें',
    viewerCalibrating: '360° दृश्य तैयार किया जा रहा है...',
    viewerSanctuariesCount: 'पैनोरमिक दृश्य',
    viewerViewpointsTitle: '360° अवलोकन स्थल',
    viewerAudioGuide: 'श्रव्य गाइड',
    viewerAudioTitleFallback: 'वास्तुकला श्रव्य विवरण',
    viewerMonographBadge: 'पुरातत्व आलेख',
    viewerPlayAudio: 'ऑडियो गाइड सुनें',
    viewerAudioPlaying: 'ऑडियो चल रहा है...',
    viewerClosePanel: 'विवरण पटल बंद करें',
    viewerControlsZoomIn: 'ज़ूम इन (+)',
    viewerControlsZoomOut: 'ज़ूम आउट (-)',
    viewerControlsReset: 'कैमरा रीसेट करें (R)',
    viewerControlsAutoRotate: 'ऑटो-रोटेशन चालू/बंद (Space)',
    viewerControlsHotspots: 'हॉटस्पॉट दिखाएं/छिपाएं (H)',
    viewerControlsFullscreen: 'पूर्ण स्क्रीन (F)',
    viewerControlsHelp: 'कीबोर्ड गाइड (?)',

    helpTitle: 'नेविगेशन और कीबोर्ड गाइड',
    helpSubtitle: 'इंटरएक्टिव 360° दर्शक निर्देश',
    helpClose: 'गाइड बंद करें',
    helpShortcutSpace: 'स्पेसबार',
    helpShortcutSpaceDesc: 'सहज 360° ऑटो-रोटेशन चालू या बंद करें',
    helpShortcutH: 'H कुंजी',
    helpShortcutHDesc: 'वास्तुकला के हॉटस्पॉट मार्कर दिखाएं या छिपाएं',
    helpShortcutR: 'R कुंजी',
    helpShortcutRDesc: 'कैमरा को प्रारंभिक स्थिति पर रीसेट करें',
    helpShortcutPlus: '+ / - कुंजी',
    helpShortcutPlusDesc: 'बारीक नक्काशी को ज़ूम इन या ज़ूम आउट करें',
    helpShortcutF: 'F कुंजी',
    helpShortcutFDesc: 'पूर्ण स्क्रीन मोड चालू या बंद करें',
    helpShortcutEsc: 'एस्केप (Esc) कुंजी',
    helpShortcutEscDesc: 'विवरण पटल बंद करें या 360° दर्शक से बाहर निकलें',
    helpDragToRotate: 'क्लिक करके खींचें',
    helpDragToRotateDesc: '360° वातावरण में किसी भी दिशा में देखें',

    footerMotto: 'संरक्षण • अन्वेषण • अनुभव',
    footerRights: 'सर्वाधिकार सुरक्षित। डिजिटल संरक्षण परियोजना।',
    footerBackToTop: 'शीर्ष पर जाएँ',
  },
};


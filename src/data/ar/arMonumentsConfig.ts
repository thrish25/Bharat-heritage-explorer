/**
 * Explicit Monument-to-3D-Model & AR Configuration
 * Strictly maps every monument identifier to its verified GLB model, narration audio, and subtitles.
 */

export interface ARMonumentConfig {
  id: string;
  normalizedId: 'hampi' | 'taj-mahal' | 'konark' | 'ellora';
  audioPrefix: 'hampi' | 'taj' | 'konark' | 'ellora';
  subtitleKey: 'hampi' | 'taj' | 'konark' | 'ellora';
  modelSrc: string;
  posterSrc?: string;
  name: {
    en: string;
    kn: string;
    hi: string;
  };
  subtitle: {
    en: string;
    kn: string;
    hi: string;
  };
  location: {
    en: string;
    kn: string;
    hi: string;
  };
  era: {
    en: string;
    kn: string;
    hi: string;
  };
  cameraOrbit: string;
  minCameraOrbit: string;
  maxCameraOrbit: string;
  fieldOfView: string;
  altText: string;
  dimensionsNote?: string;
  exposure?: string;
  toneMapping?: string;
  environmentImage?: string;
  shadowIntensity?: string;
  shadowSoftness?: string;
  arScale?: 'auto' | 'fixed';
  suggestedQuestions: {
    en: string;
    kn: string;
    hi: string;
  }[];
}

export const AR_MONUMENTS_CONFIG: Record<string, ARMonumentConfig> = {
  hampi: {
    id: 'hampi',
    normalizedId: 'hampi',
    audioPrefix: 'hampi',
    subtitleKey: 'hampi',
    modelSrc: '/assets/models/hampi-stone-chariot.glb',
    name: {
      en: 'Hampi Stone Chariot',
      kn: 'ಹಂಪಿ ಕಲ್ಲಿನ ರಥ',
      hi: 'हम्पी पत्थर का रथ',
    },
    subtitle: {
      en: 'Garuda Shrine • Vijayanagara Empire',
      kn: 'ಗರುಡ ಸನ್ನಿಧಿ • ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ',
      hi: 'गरुड़ मंदिर • विजयनगर साम्राज्य',
    },
    location: {
      en: 'Vijaya Vittala Temple, Hampi, Karnataka',
      kn: 'ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ, ಹಂಪಿ, ಕರ್ನಾಟಕ',
      hi: 'विजय विट्ठल मंदिर, हम्पी, कर्नाटक',
    },
    era: {
      en: '16th Century CE • Emperor Krishnadevaraya',
      kn: '೧೬ನೇ ಶತಮಾನ • ಶ್ರೀ ಕೃಷ್ಣದೇವರಾಯ',
      hi: '16वीं शताब्दी • सम्राट कृष्णदेवराय',
    },
    cameraOrbit: '0deg 75deg 105%',
    minCameraOrbit: 'auto auto 40%',
    maxCameraOrbit: 'auto auto 250%',
    fieldOfView: '35deg',
    altText: 'Hampi Stone Chariot 3D Architectural Model',
    dimensionsNote: 'Monolithic Granite Carving',
    exposure: '0.92',
    toneMapping: 'neutral',
    environmentImage: 'neutral',
    shadowIntensity: '1.1',
    shadowSoftness: '0.5',
    arScale: 'auto',
    suggestedQuestions: [
      {
        en: 'Who built the Stone Chariot at Hampi?',
        kn: 'ಹಂಪಿಯ ಕಲ್ಲಿನ ರಥವನ್ನು ಯಾರು ನಿರ್ಮಿಸಿದರು?',
        hi: 'हम्पी के पत्थर के रथ का निर्माण किसने करवाया था?',
      },
      {
        en: 'Tell me about the 56 musical pillars.',
        kn: '೫೬ ಸಂಗೀತ ಕಂಬಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ.',
        hi: '56 संगीतमय स्तंभों के बारे में बताइए।',
      },
      {
        en: 'Did the stone wheels originally rotate?',
        kn: 'ಕಲ್ಲಿನ ಚಕ್ರಗಳು ಮೂಲತಃ ಸುತ್ತುತ್ತಿದ್ದವೇ?',
        hi: 'क्या पत्थर के पहिए मूल रूप से घूमते थे?',
      },
    ],
  },
  konark: {
    id: 'konark',
    normalizedId: 'konark',
    audioPrefix: 'konark',
    subtitleKey: 'konark',
    modelSrc: '/assets/models/konark-sun-temple.glb',
    name: {
      en: 'Konark Sun Temple',
      kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
      hi: 'कोणार्क सूर्य मंदिर',
    },
    subtitle: {
      en: 'Kalinga Solar Chariot & Chronometer',
      kn: 'ಕಳಿಂಗ ಸೂರ್ಯ ರಥ ಮತ್ತು ಕಾಲಗಣಕ',
      hi: 'कलिंग सौर रथ एवं कालमापक',
    },
    location: {
      en: 'Puri District, Odisha',
      kn: 'ಪುರಿ ಜಿಲ್ಲೆ, ಒಡಿಶಾ',
      hi: 'पुरी जिला, ओडिशा',
    },
    era: {
      en: '13th Century CE • King Narasimhadeva I',
      kn: '೧೩ನೇ ಶತಮಾನ • ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವ',
      hi: '13वीं शताब्दी • राजा नरसिंहदेव प्रथम',
    },
    cameraOrbit: '25deg 75deg 110%',
    minCameraOrbit: 'auto auto 40%',
    maxCameraOrbit: 'auto auto 250%',
    fieldOfView: '35deg',
    altText: 'Konark Sun Temple 3D Architectural Model',
    dimensionsNote: 'Chlorite Stone Carvings',
    exposure: '0.92',
    toneMapping: 'neutral',
    environmentImage: 'neutral',
    shadowIntensity: '1.1',
    shadowSoftness: '0.5',
    arScale: 'auto',
    suggestedQuestions: [
      {
        en: 'How do the 24 sundial wheels calculate time?',
        kn: '೨೪ ಸೂರ್ಯ ಗಡಿಯಾರ ಚಕ್ರಗಳು ಸಮಯವನ್ನು ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕುತ್ತವೆ?',
        hi: '24 सूर्य घड़ी के पहिए समय की गणना कैसे करते हैं?',
      },
      {
        en: 'Why was Konark called the Black Pagoda?',
        kn: 'ಕೊನಾರ್ಕ್ ಅನ್ನು ಕಪ್ಪು ಪಗೋಡಾ ಎಂದು ಏಕೆ ಕರೆಯಲಾಯಿತು?',
        hi: 'कोणार्क को ब्लैक पैगोडा क्यों कहा गया?',
      },
      {
        en: 'Who commissioned the Konark Sun Temple?',
        kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯವನ್ನು ಯಾರು ನಿಯೋಜಿಸಿದರು?',
        hi: 'कोणार्क सूर्य मंदिर का निर्माण किसने करवाया था?',
      },
    ],
  },
  tajmahal: {
    id: 'tajmahal',
    normalizedId: 'taj-mahal',
    audioPrefix: 'taj',
    subtitleKey: 'taj',
    modelSrc: '/assets/models/taj-mahal.glb',
    name: {
      en: 'Taj Mahal',
      kn: 'ತಾಜ್ ಮಹಲ್',
      hi: 'ताज महल',
    },
    subtitle: {
      en: 'Mughal Imperial Classical Mausoleum',
      kn: 'ಮೊಘಲ್ ವಾಸ್ತುಶಿಲ್ಪದ ಅತ್ಯುನ್ನತ ಮಕುಟ',
      hi: 'मुगल वास्तुकला का अनुपम शिखर',
    },
    location: {
      en: 'Agra, Uttar Pradesh',
      kn: 'ಆಗ್ರಾ, ಉತ್ತರ ಪ್ರದೇಶ',
      hi: 'आगरा, उत्तर प्रदेश',
    },
    era: {
      en: '1631–1648 CE • Emperor Shah Jahan',
      kn: '೧೬೩೧–೧೬೪೮ • ಷಹಜಹಾನ್ ಚಕ್ರವರ್ತಿ',
      hi: '1631–1648 ईस्वी • सम्राट शाहजहाँ',
    },
    cameraOrbit: '0deg 80deg 115%',
    minCameraOrbit: 'auto auto 40%',
    maxCameraOrbit: 'auto auto 250%',
    fieldOfView: '35deg',
    altText: 'Taj Mahal 3D Architectural Model',
    dimensionsNote: 'Makrana Translucent White Marble',
    exposure: '0.80',
    toneMapping: 'neutral',
    environmentImage: 'neutral',
    shadowIntensity: '1.1',
    shadowSoftness: '0.5',
    arScale: 'auto',
    suggestedQuestions: [
      {
        en: 'Why did Shah Jahan build the Taj Mahal?',
        kn: 'ಷಹಜಹಾನ್ ತಾಜ್ ಮಹಲ್ ಅನ್ನು ಏಕೆ ನಿರ್ಮಿಸಿದನು?',
        hi: 'शाहजहाँ ने ताजमहल का निर्माण क्यों करवाया था?',
      },
      {
        en: 'What marble was used to build the Taj Mahal?',
        kn: 'ತಾಜ್ ಮಹಲ್ ನಿರ್ಮಿಸಲು ಯಾವ ಅಮೃತಶಿಲೆ ಬಳಸಲಾಯಿತು?',
        hi: 'ताजमहल के निर्माण में किस संगमरमर का उपयोग किया गया था?',
      },
      {
        en: 'Who was the chief architect of the Taj Mahal?',
        kn: 'ತಾಜ್ ಮಹಲಿನ ಮುಖ್ಯ ವಾಸ್ತುಶಿಲ್ಪಿ ಯಾರು?',
        hi: 'ताजमहल के मुख्य वास्तुकार कौन थे?',
      },
    ],
  },
  'taj-mahal': {
    id: 'taj-mahal',
    normalizedId: 'taj-mahal',
    audioPrefix: 'taj',
    subtitleKey: 'taj',
    modelSrc: '/assets/models/taj-mahal.glb',
    name: {
      en: 'Taj Mahal',
      kn: 'ತಾಜ್ ಮಹಲ್',
      hi: 'ताज महल',
    },
    subtitle: {
      en: 'Mughal Imperial Classical Mausoleum',
      kn: 'ಮೊಘಲ್ ವಾಸ್ತುಶಿಲ್ಪದ ಅತ್ಯುನ್ನತ ಮಕುಟ',
      hi: 'मुगल वास्तुकला का अनुपम शिखर',
    },
    location: {
      en: 'Agra, Uttar Pradesh',
      kn: 'ಆಗ್ರಾ, ಉತ್ತರ ಪ್ರದೇಶ',
      hi: 'आगरा, उत्तर प्रदेश',
    },
    era: {
      en: '1631–1648 CE • Emperor Shah Jahan',
      kn: '೧೬೩೧–೧೬೪೮ • ಷಹಜಹಾನ್ ಚಕ್ರವರ್ತಿ',
      hi: '1631–1648 ईस्वी • सम्राट शाहजहाँ',
    },
    cameraOrbit: '0deg 80deg 115%',
    minCameraOrbit: 'auto auto 40%',
    maxCameraOrbit: 'auto auto 250%',
    fieldOfView: '35deg',
    altText: 'Taj Mahal 3D Architectural Model',
    dimensionsNote: 'Makrana Translucent White Marble',
    exposure: '0.80',
    toneMapping: 'neutral',
    environmentImage: 'neutral',
    shadowIntensity: '1.1',
    shadowSoftness: '0.5',
    arScale: 'auto',
    suggestedQuestions: [
      {
        en: 'Why did Shah Jahan build the Taj Mahal?',
        kn: 'ಷಹಜಹಾನ್ ತಾಜ್ ಮಹಲ್ ಅನ್ನು ಏಕೆ ನಿರ್ಮಿಸಿದನು?',
        hi: 'शाहजहाँ ने ताजमहल का निर्माण क्यों करवाया था?',
      },
      {
        en: 'What marble was used to build the Taj Mahal?',
        kn: 'ತಾಜ್ ಮಹಲ್ ನಿರ್ಮಿಸಲು ಯಾವ ಅಮೃತಶಿಲೆ ಬಳಸಲಾಯಿತು?',
        hi: 'ताजमहल के निर्माण में किस संगमरमर का उपयोग किया गया था?',
      },
      {
        en: 'Who was the chief architect of the Taj Mahal?',
        kn: 'ತಾಜ್ ಮಹಲಿನ ಮುಖ್ಯ ವಾಸ್ತುಶಿಲ್ಪಿ ಯಾರು?',
        hi: 'ताजमहल के मुख्य वास्तुकार कौन थे?',
      },
    ],
  },
  ellora: {
    id: 'ellora',
    normalizedId: 'ellora',
    audioPrefix: 'ellora',
    subtitleKey: 'ellora',
    modelSrc: '/assets/models/ellora-caves.glb',
    name: {
      en: 'Ellora Caves (Kailasa Temple)',
      kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು (ಕೈಲಾಸ ದೇವಾಲಯ)',
      hi: 'एलोरा गुफाएँ (कैलास मंदिर)',
    },
    subtitle: {
      en: 'Cave 16 • Monolithic Rock-Cut Excavation',
      kn: 'ಗುಹೆ ೧೬ • ಏಕಶಿಲಾ ಬಂಡೆ ಕೆತ್ತನೆ',
      hi: 'गुफा 16 • एकाश्म शैलकृत उत्खनन',
    },
    location: {
      en: 'Aurangabad District, Maharashtra',
      kn: 'ಔರಂಗಾಬಾದ್ ಜಿಲ್ಲೆ, ಮಹಾರಾಷ್ಟ್ರ',
      hi: 'औरंगाबाद जिला, महाराष्ट्र',
    },
    era: {
      en: '8th Century CE • Rashtrakuta Dynasty',
      kn: '೮ನೇ ಶತಮಾನ • ರಾಷ್ಟ್ರಕೂಟ ರಾಜವಂಶ',
      hi: '8वीं शताब्दी • राष्ट्रकूट राजवंश',
    },
    cameraOrbit: '0deg 65deg 115%',
    minCameraOrbit: 'auto auto 40%',
    maxCameraOrbit: 'auto auto 250%',
    fieldOfView: '35deg',
    altText: 'Ellora Caves 3D Architectural Model',
    dimensionsNote: 'Single Basalt Cliff Monolith',
    exposure: '0.95',
    toneMapping: 'neutral',
    environmentImage: 'neutral',
    shadowIntensity: '1.2',
    shadowSoftness: '0.4',
    arScale: 'auto',
    suggestedQuestions: [
      {
        en: 'How was the Kailasa Temple carved from top to bottom?',
        kn: 'ಕೈಲಾಸ ದೇವಾಲಯವನ್ನು ಮೇಲಿನಿಂದ ಕೆಳಕ್ಕೆ ಹೇಗೆ ಕೆತ್ತಲಾಯಿತು?',
        hi: 'कैलास मंदिर को ऊपर से नीचे की ओर कैसे तराशा गया था?',
      },
      {
        en: 'Which Rashtrakuta king commissioned Cave 16?',
        kn: 'ಗುಹೆ ೧೬ ನ್ನು ಯಾವ ರಾಷ್ಟ್ರಕೂಟ ರಾಜನು ನಿರ್ಮಿಸಿದನು?',
        hi: 'गुफा 16 का निर्माण किस राष्ट्रकूट राजा ने करवाया था?',
      },
      {
        en: 'What is the significance of Cave 10 Chaitya Hall?',
        kn: 'ಗುಹೆ ೧೦ ಚೈತ್ಯ ಸಭಾಂಗಣದ ಪ್ರಾಮುಖ್ಯತೆ ಏನು?',
        hi: 'गुफा 10 चैत्य हॉल का क्या महत्व है?',
      },
    ],
  },
};

/**
 * Safely resolves the AR monument configuration for any monument ID
 */
export function getARMonumentConfig(monumentId: string): ARMonumentConfig {
  const clean = (monumentId || '').toLowerCase().trim().replace(/_/g, '-');
  if (clean === 'tajmahal' || clean === 'taj-mahal' || clean === 'taj') {
    return AR_MONUMENTS_CONFIG['tajmahal'];
  }
  if (clean === 'hampi' || clean === 'vijayanagara') {
    return AR_MONUMENTS_CONFIG['hampi'];
  }
  if (clean === 'konark' || clean === 'konark-sun-temple') {
    return AR_MONUMENTS_CONFIG['konark'];
  }
  if (clean === 'ellora' || clean === 'ellora-caves' || clean === 'kailasa') {
    return AR_MONUMENTS_CONFIG['ellora'];
  }
  const found = AR_MONUMENTS_CONFIG[clean];
  if (!found) {
    console.warn(`[ARMonumentsConfig] Monument ID '${monumentId}' not mapped directly, falling back to Hampi.`);
    return AR_MONUMENTS_CONFIG['hampi'];
  }
  return found;
}

export const getARConfigForMonument = getARMonumentConfig;

export function getARAudioSrc(config: ARMonumentConfig, lang: 'en' | 'kn' | 'hi'): string {
  return `/assets/audio/ar/${config.audioPrefix}_narration_${lang}.mp3`;
}

export function getARSubtitleKey(config: ARMonumentConfig): 'hampi' | 'taj' | 'konark' | 'ellora' {
  return config.subtitleKey;
}

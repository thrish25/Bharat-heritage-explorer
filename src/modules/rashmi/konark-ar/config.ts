import { ARMonumentConfig } from '../../../types/ar';

export const KONARK_AR_CONFIG: ARMonumentConfig = {
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
};

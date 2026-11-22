import { ARMonumentConfig } from '../types';

export const HAMPI_AR_CONFIG: ARMonumentConfig = {
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
};

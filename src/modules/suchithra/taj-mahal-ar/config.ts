import { ARMonumentConfig } from '../../../types/ar';

export const TAJ_MAHAL_AR_CONFIG: ARMonumentConfig = {
  id: 'tajmahal',
  normalizedId: 'taj-mahal',
  audioPrefix: 'taj',
  subtitleKey: 'taj',
  modelSrc: '/assets/models/taj-mahal.glb',
  posterSrc: '/assets/images/ar/taj-mahal-ar-poster.webp',
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
};

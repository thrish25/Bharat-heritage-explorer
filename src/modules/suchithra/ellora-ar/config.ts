import { ARMonumentConfig } from '../../../types/ar';

export const ELLORA_AR_CONFIG: ARMonumentConfig = {
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
};

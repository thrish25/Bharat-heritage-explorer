/**
 * Taj Mahal Virtual Exploration Module
 * Maintained by Thrisha
 */

import { Monument, ViewerEngineType } from '../../../types';
import { TAJ_MAHAL_SCENES, DEFAULT_TAJ_MAHAL_SCENE_ID } from './scenes';

export const TAJ_MAHAL_CONFIG = {
  id: 'tajmahal',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Taj Mahal',
    kn: 'ತಾಜ್ ಮಹಲ್',
    hi: 'ताज महल',
  },
  viewpointCount: 6,
  hotspotCount: 22,
  originalSourceDirectory: 'taj-mahal-explorer/',
  originalPanoramaPath: 'taj-mahal-explorer/assets/panoramas/',
  originalAudioPath: 'taj-mahal-explorer/assets/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'ready_for_asset_linking',
};

export const TAJ_MAHAL_MONUMENT: Monument = {
  id: 'tajmahal',
  name: {
    en: 'Taj Mahal',
    kn: 'ತಾಜ್ ಮಹಲ್',
    hi: 'ताज महल',
  },
  subTitle: {
    en: 'The Crown of the Palaces & Pinnacle of Mughal Architecture',
    kn: 'ಮೊಘಲ್ ವಾಸ್ತುಶಿಲ್ಪದ ಅತ್ಯುನ್ನತ ಮಕುಟ',
    hi: 'महलों का मुकुट एवं मुगल वास्तुकला का शिखर',
  },
  location: {
    en: 'Agra, Uttar Pradesh',
    kn: 'ಆಗ್ರಾ, ಉತ್ತರ ಪ್ರದೇಶ',
    hi: 'आगरा, उत्तर प्रदेश',
  },
  century: '17th Century CE (1631 – 1648 CE)',
  unescoStatus: 'UNESCO World Heritage Site (1983, Ref: 252)',
  shortDescription: {
    en: 'The world-celebrated white marble mausoleum on the banks of the Yamuna River, featuring consummate bilateral symmetry, Pietra Dura inlay, and a quadripartite Charbagh paradise garden.',
    kn: 'ಯಮುನಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಅಮೃತಶಿಲೆಯ ಸಮಾಧಿ ಸೌಧ. ಪರಿಪೂರ್ಣ ಸಮರೂಪತೆ, ಪಿಯೆಟ್ರಾ ಡ್ಯೂರಾ ರತ್ನಖಚಿತ ಕೆತ್ತನೆ ಮತ್ತು ಚಾರ್‌ಬಾಗ್ ಉದ್ಯಾನವನ.',
    hi: 'यमुना नदी के तट पर स्थित धवल संगमरमर का विश्वप्रसिद्ध मकबरा, जो पूर्ण द्विपक्षीय सममिति, पच्चीकारी (पिएट्रा ड्यूरा) और चारबाग उद्यान के लिए जाना जाता है।',
  },
  fullDescription: {
    en: 'Commissioned in 1631 by Mughal Emperor Shah Jahan for his empress Mumtaz Mahal, the Taj Mahal is the culmination of Indo-Islamic architectural evolution. Built using translucent Makrana white marble resting upon a massive sandstone terrace, its central bulbous dome reaches 73 meters.',
    kn: 'ಮೊಘಲ್ ಚಕ್ರವರ್ತಿ ಷಹಜಹಾನ್ ತನ್ನ ನೆಚ್ಚಿನ ರಾಣಿ ಮುಮ್ತಾಜ್ ಮಹಲ್ ನೆನಪಿನಲ್ಲಿ ನಿರ್ಮಿಸಿದ ಅದ್ಭುತ ಪ್ರೇಮ ಸೌಧ. ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಸೌಧವು ಭಾರತೀಯ ಹಾಗೂ ಪರ್ಷಿಯನ್ ವಾಸ್ತುಶಿಲ್ಪದ ಅತ್ಯುನ್ನತ ರೂಪವಾಗಿದೆ.',
    hi: 'मुगल सम्राट शाहजहाँ द्वारा 1631 में अपनी बेगम मुमताज़ महल की स्मृति में निर्मित, यह इंडो-इस्लामिक स्थापत्य की सर्वोत्तम कृति है। मकराना के श्वेत संगमरमर से निर्मित इसका केंद्रीय गुंबद 73 मीटर ऊँचा है।',
  },
  architecturalHighlights: [
    {
      en: 'Flawless bilateral symmetry reflected across the central watercourses',
      kn: 'ಕೇಂದ್ರ ಜಲಮಾರ್ಗಗಳಲ್ಲಿ ಪ್ರತಿಫಲಿಸುವ ಪರಿಪೂರ್ಣ ಸಮರೂಪತೆ',
      hi: 'केंद्रीय जलमार्गों में प्रतिबिंबित होने वाली पूर्ण द्विपक्षीय सममिति',
    },
    {
      en: 'Exquisite Pietra Dura (Parchin Kari) gemstone inlays in white Makrana marble',
      kn: 'ಅಮೃತಶಿಲೆಯಲ್ಲಿ ರತ್ನಗಳನ್ನು ಹುದುಗಿಸಿ ಕೆತ್ತಿದ ಪಿಯೆಟ್ರಾ ಡ್ಯೂರಾ ಕಲೆ',
      hi: 'संगमरमर पर बहुमूल्य रत्नों की अत्यंत बारीक पच्चीकारी (पिएट्रा ड्यूरा)',
    },
    {
      en: 'Four outward-canted freestanding 40-meter minarets engineered for seismic safety',
      kn: 'ಭೂಕಂಪನ ಸುರಕ್ಷತೆಗಾಗಿ ಹೊರಮುಖವಾಗಿ ವಾಲಿದ ನಾಲ್ಕು ೪೦ ಮೀಟರ್ ಎತ್ತರದ ಮಿನಾರುಗಳು',
      hi: 'भूकंपीय सुरक्षा के लिए बाहर की ओर थोड़े झुके 40 मीटर ऊँचे चार मीनार',
    },
  ],
  image: '/images/tajmahal.jpg',
  engine: 'pannellum',
  defaultSceneId: DEFAULT_TAJ_MAHAL_SCENE_ID,
  scenes: TAJ_MAHAL_SCENES,
  viewpointCount: 6,
  hotspotCount: 28,
  demoScenes: [
    {
      id: 'scene_3_charbagh_garden',
      title: {
        en: 'Central Charbagh & Pool (Diana Bench)',
        kn: 'ಕೇಂದ್ರ ಚಾರ್‌ಬಾಗ್ ಮತ್ತು ಕಾರಂಜಿ (ಡಯಾನಾ ಬೆಂಚ್)',
        hi: 'केंद्रीय चारबाग एवं हौज (डायना बेंच)',
      },
      subtitle: {
        en: 'Al Hawd al-Kawthar Raised Marble Platform',
        kn: 'ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ ಅಮೃತಶಿಲೆಯ ವೇದಿಕೆ',
        hi: 'अल-हौज़ अल-कौसर संगमरमर का चबूतरा',
      },
      image: '/images/demo-pano-tajmahal.jpg',
      audioTitle: {
        en: 'Reflections of Paradise and Symmetrical Elegance',
        kn: 'ಸ್ವರ್ಗದ ಪ್ರತಿಬಿಂಬ ಮತ್ತು ದಿವ್ಯ ಸಮರೂಪತೆ',
        hi: 'स्वर्ग का प्रतिबिंब और सममितीय सौंदर्य',
      },
      audioDuration: '2:35',
      hotspots: [
        {
          id: 'hs_facade',
          title: {
            en: 'Southern Iwan Archway',
            kn: 'ದಕ್ಷಿಣ ಇವಾನ್ ಮಹಾದ್ವಾರ',
            hi: 'दक्षिणी इवान मेहराबदार द्वार',
          },
          category: 'Architecture',
          position: { top: '44%', left: '50%' },
          description: {
            en: 'The soaring central pishtaq portal framed by Quranic inscriptions carved in jasper that expand upward to maintain optical proportion.',
            kn: 'ದೂರದಿಂದ ನೋಡಿದಾಗಲೂ ಒಂದೇ ಅಳತೆಯಲ್ಲಿ ಕಾಣುವಂತೆ ಕೆತ್ತಲಾದ ಕುರಾನ್ ಶ್ಲೋಕಗಳನ್ನೊಳಗೊಂಡ ಭವ್ಯ ಕಮಾನು.',
            hi: 'जैस्पर प्रस्तर से उत्कीर्ण कुरान की आयतों से सुसज्जित विशाल मेहराबी प्रवेश द्वार।',
          },
          historicalSignificance: {
            en: 'Designed by master calligrapher Amanat Khan, who was uniquely allowed to sign his work in the marble.',
            kn: 'ಪ್ರಸಿದ್ಧ ಕ್ಯಾಲಿಗ್ರಾಫರ್ ಅಮಾನತ್ ಖಾನ್ ಈ ಅಕ್ಷರ ಕೆತ್ತನೆಯನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದನು.',
            hi: 'प्रधान सुलेखक अमानत खान द्वारा रूपायित, जिन्हें संगमरमर पर अपने हस्ताक्षर करने की विशेष अनुमति थी।',
          },
          architecturalDetails: {
            en: 'Surmounted by 11 small chhatri domes on the parapet indicating the 22-year span of total construction.',
            kn: '೨೨ ವರ್ಷಗಳ ನಿರ್ಮಾಣ ಅವಧಿಯನ್ನು ಸೂಚಿಸುವ ೧೧ ಸಣ್ಣ ಛತ್ರಿಗಳು ಮೇಲ್ಭಾಗದಲ್ಲಿವೆ.',
            hi: 'प्रवेश द्वार के ऊपर स्थित 11 छोटी छतरियाँ निर्माण के 22 वर्षों की अवधि को दर्शाती हैं।',
          },
        },
      ],
    },
  ],
};

export { TAJ_MAHAL_SCENES, DEFAULT_TAJ_MAHAL_SCENE_ID };

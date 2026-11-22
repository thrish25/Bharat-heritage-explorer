/**
 * Konark Sun Temple Virtual Exploration Module
 * Maintained by Rashmi
 */

import { Monument } from '../../../types';
import { KONARK_SCENES, DEFAULT_KONARK_SCENE_ID } from './scenes';

export const KONARK_CONFIG = {
  id: 'konark',
  engine: 'pannellum' as const,
  name: {
    en: 'Konark Sun Temple',
    kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
    hi: 'कोणार्क सूर्य मंदिर',
  },
  viewpointCount: 5,
  hotspotCount: 18,
  originalSourceDirectory: 'konark-sun-temple---360°-virtual-exploration (1)/',
  originalPanoramaPath: 'public/assets/monuments/konark/panoramas/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'integrated',
};

export const KONARK_MONUMENT: Monument = {
  id: 'konark',
  name: {
    en: 'Konark Sun Temple',
    kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
    hi: 'कोणार्क सूर्य मंदिर',
  },
  subTitle: {
    en: 'The Celestial Solar Chariot of Surya',
    kn: 'ಸೂರ್ಯ ದೇವರ ದಿವ್ಯ ರಥ',
    hi: 'भगवान सूर्य का दिव्य सौर रथ',
  },
  location: {
    en: 'Puri District, Odisha',
    kn: 'ಪುರಿ ಜಿಲ್ಲೆ, ಒಡಿಶಾ',
    hi: 'पुरी ज़िला, ओडिशा',
  },
  century: '13th Century CE (c. 1250 CE)',
  unescoStatus: 'UNESCO World Heritage Site (1984, Ref: 242)',
  shortDescription: {
    en: 'Conceived as a colossal celestial chariot with 24 intricately sculpted wheels drawn by seven galloping horses, oriented precisely to capture the dawn rays of the rising sun.',
    kn: '೨೪ ಭವ್ಯ ಶಿಲಾ ಚಕ್ರಗಳು ಹಾಗೂ ಏಳು ಕುದುರೆಗಳಿಂದ ಎಳೆಯಲ್ಪಡುವ ಭವ್ಯ ಸೂರ್ಯ ರಥ. ಸೂರ್ಯನ ಪ್ರಥಮ ಕಿರಣಗಳನ್ನು ಸ್ವಾಗತಿಸುವ ಖಗೋಳ ವಿಸ್ಮಯ.',
    hi: '24 अलंकृत चक्रों और सात अश्वों द्वारा खींचे जाते विशाल सौर रथ की परिकल्पना, जो सूर्य की प्रथम रश्मियों को ग्रहण करने के लिए निर्मित है।',
  },
  fullDescription: {
    en: 'Erected by King Narasimhadeva I of the Eastern Ganga Dynasty, Konark is the grandest achievement of Kalinga architecture. Built from oxidized khondalite stone, the entire complex was designed as a gigantic solar chronometer, with its monumental wheels functioning as precise astronomical sundials.',
    kn: 'ಪೂರ್ವ ಗಂಗ ರಾಜವಂಶದ ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವರಿಂದ ನಿರ್ಮಿತವಾದ ಕೊನಾರ್ಕ್ ದೇವಾಲಯವು ಕಳಿಂಗ ವಾಸ್ತುಶಿಲ್ಪದ ಕಿರೀಟಪ್ರಾಯ. ಇದರ ಚಕ್ರಗಳು ನೆರಳಿನ ಆಧಾರದ ಮೇಲೆ ಸಮಯವನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯುವ ಸೂರ್ಯ ಗಡಿಯಾರಗಳಾಗಿವೆ.',
    hi: 'पूर्वी गंग वंश के राजा नरसिंहदेव प्रथम द्वारा निर्मित कोणार्क मंदिर कलिंग शैली का शिरोमणि है। खोंडालाइट पाषाण से निर्मित इस मंदिर के चक्र अत्यंत सूक्ष्म खगोलीय धूपघड़ी का कार्य करते हैं।',
  },
  architecturalHighlights: [
    {
      en: '24 colossal sundial wheels recording sub-minute temporal divisions',
      kn: 'ನಿಮಿಷಗಳ ನಿಖರತೆಯನ್ನು ಅಳೆಯುವ ೨೪ ಬೃಹತ್ ಸೂರ್ಯ ಗಡಿಯಾರ ಚಕ್ರಗಳು',
      hi: 'सटीक समय की गणना करने वाले 24 विशाल सौर चक्र (धूपघड़ी)',
    },
    {
      en: 'Monumental Gajasimha guardian monoliths at the Eastern Simhadwara',
      kn: 'ಪೂರ್ವ ಸಿಂಹದ್ವಾರದಲ್ಲಿರುವ ಬೃಹತ್ ಗಜಸಿಂಹ ರಕ್ಷಕ ಶಿಲ್ಪಗಳು',
      hi: 'पूर्वी सिंहद्वार पर स्थापित विशाल एकाश्मी गजसिंह रक्षक प्रतिमाएँ',
    },
    {
      en: 'Stepped pyramidal roof (Pidha Deula) of the surviving Jagamohana hall',
      kn: 'ಜಗಮೋಹನ ಸಭಾಂಗಣದ ಹಂತ ಹಂತದ ಪಿರಮಿಡ್ ಆಕಾರದ ಛಾವಣಿ',
      hi: 'जगमोहन मंडप की सोपानाकार पिरामिडीय प्रस्तर छत',
    },
  ],
  image: '/images/konark.jpg',
  engine: 'pannellum',
  defaultSceneId: DEFAULT_KONARK_SCENE_ID,
  scenes: KONARK_SCENES,
  viewpointCount: 5,
  hotspotCount: 18,
  demoScenes: [
    {
      id: 'simhadwara-portal',
      title: {
        en: 'Simhadwara: The Eastern Guardian Lions',
        kn: 'ಸಿಂಹದ್ವಾರ: ಪೂರ್ವ ಮಹಾದ್ವಾರ ಮತ್ತು ಗಜಸಿಂಹ ರಕ್ಷಕರು',
        hi: 'सिंहद्वार: पूर्वी महाद्वार एवं गजसिंह रक्षक',
      },
      subtitle: {
        en: 'Solar Ceremonial Entrance Facing the Bay of Bengal',
        kn: 'ಬಂಗಾಳ ಕೊಲ್ಲಿಯ ಸೂರ್ಯೋದಯವನ್ನು ಎದುರಿಸುವ ಮಹಾದ್ವಾರ',
        hi: 'बंगाल की खाड़ी से उदित होते सूर्य के सम्मुख मुख्य प्रवेश',
      },
      image: '/images/demo-pano-konark.jpg',
      audioTitle: {
        en: 'The Royal Sentinel Monoliths of Kalinga',
        kn: 'ಕಳಿಂಗದ ರಾಜವೈಭವದ ಗಜಸಿಂಹ ರಕ್ಷಕರು',
        hi: 'कलिंग का राजसी प्रहरी गजसिंह एकाश्म',
      },
      audioDuration: '2:20',
      hotspots: [
        {
          id: 'hs_gajasimha',
          title: {
            en: 'Southern Gajasimha Monolith',
            kn: 'ದಕ್ಷಿಣ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ಶಿಲ್ಪ',
            hi: 'दक्षिणी गजसिंह एकाश्म प्रतिमा',
          },
          category: 'Sculpture',
          position: { top: '52%', left: '42%' },
          description: {
            en: 'A colossal lion rearing triumphantly over a vanquished elephant, symbolizing the victory of spiritual illumination over worldly illusion.',
            kn: 'ಆನೆಯನ್ನು ಮೆಟ್ಟಿ ನಿಂತಿರುವ ಭವ್ಯ ಸಿಂಹ, ಅಹಂಕಾರದ ಮೇಲೆ ದೈವಿಕ ಜ್ಞಾನದ ವಿಜಯವನ್ನು ಸಾರುತ್ತದೆ.',
            hi: 'हाथी को दबाकर खड़ी राजसी सिंह की प्रतिमा, जो माया पर आध्यात्मिक ज्ञान की विजय का प्रतीक है।',
          },
          historicalSignificance: {
            en: 'Commissioned circa 1250 CE by King Narasimhadeva I as the primary dawn sentinel.',
            kn: 'ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ಪವಿತ್ರ ರಕ್ಷಕನಾಗಿ ರಾಜ ನರಸಿಂಹದೇವರಿಂದ ಸ್ಥಾಪಿತವಾಯಿತು.',
            hi: 'लगभग 1250 ईस्वी में मंदिर के मुख्य पूर्वी प्रहरी के रूप में स्थापित।',
          },
          architecturalDetails: {
            en: 'Carved with extraordinary dynamism from a single massive block of dark khondalite.',
            kn: 'ಏಕೈಕ ಕಪ್ಪು ಖೊಂಡಾಲೈಟ್ ಶಿಲಾಖಂಡದಲ್ಲಿ ಅದ್ಭುತ ಚೈತನ್ಯದೊಂದಿಗೆ ಕಡೆಯಲಾಗಿದೆ.',
            hi: 'एक ही विशाल खोंडालाइट पाषाण खंड से सजीव मुद्रा में उत्कीर्ण।',
          },
        },
      ],
    },
  ],
};

export { KONARK_SCENES, DEFAULT_KONARK_SCENE_ID };

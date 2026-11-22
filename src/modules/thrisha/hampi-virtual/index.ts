/**
 * Hampi Virtual Exploration Module
 * Maintained by Thrisha
 */

import { Monument, ViewerEngineType } from '../../../types';
import { HAMPI_SCENES, DEFAULT_HAMPI_SCENE_ID } from './scenes';

export const HAMPI_CONFIG = {
  id: 'hampi',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Hampi',
    kn: 'ಹಂಪಿ',
    hi: 'हम्पी',
  },
  viewpointCount: 5,
  hotspotCount: 20,
  originalSourceDirectory: 'hampi-heritage-explorer-export/',
  originalPanoramaPath: 'public/assets/monuments/hampi/panoramas/',
  originalAudioPath: 'public/assets/monuments/hampi/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'fully_integrated',
};

export const HAMPI_MONUMENT: Monument = {
  id: 'hampi',
  name: {
    en: 'Hampi',
    kn: 'ಹಂಪಿ',
    hi: 'हम्पी',
  },
  subTitle: {
    en: 'Capital of the Vijayanagara Empire',
    kn: 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿ',
    hi: 'विजयनगर साम्राज्य की राजधानी',
  },
  location: {
    en: 'Vijayanagara District, Karnataka',
    kn: 'ವಿಜಯನಗರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ',
    hi: 'विजयनगर ज़िला, कर्नाटक',
  },
  century: '14th – 16th Century CE',
  unescoStatus: 'UNESCO World Heritage Site (1986, Ref: 356)',
  shortDescription: {
    en: 'The monumental capital of the Vijayanagara Empire along the Tungabhadra River, renowned for the Vijaya Vittala Stone Chariot, musical colonnades, and royal palaces.',
    kn: 'ತುಂಗಭದ್ರಾ ನದಿಯ ತೀರದಲ್ಲಿ ವೈಭವದಿಂದ ಮೆರೆದ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿ. ಕಲ್ಲಿನ ರಥ, ಸಪ್ತಸ್ವರ ಸಂಗೀತ ಕಂಬಗಳು ಹಾಗೂ ಅರಮನೆಗಳ ತಾಣ.',
    hi: 'तुंगभद्रा नदी के तट पर स्थित विजयनगर साम्राज्य की वैभवशाली राजधानी, जो प्रस्तर रथ, संगीतमय स्तंभों और राजप्रासादों के लिए विख्यात है।',
  },
  fullDescription: {
    en: 'Spread across more than 4,100 hectares among rugged granite boulder hills, Hampi flourished from 1336 to 1565 CE as one of the richest and largest metropolises in the medieval world. The ruins demonstrate monumental Dravidian temple architecture fused with Indo-Islamic royal civic engineering.',
    kn: '೪,೧೦೦ ಹೆಕ್ಟೇರ್‌ಗೂ ಅಧಿಕ ಪ್ರದೇಶದಲ್ಲಿ ಬೆಟ್ಟಗುಡ್ಡಗಳ ನಡುವೆ ಹರಡಿರುವ ಹಂಪಿಯು ಕ್ರಿ.ಶ. ೧೪ ರಿಂದ ೧೬ನೇ ಶತಮಾನದಲ್ಲಿ ವಿಶ್ವದ ಅತಿ ಶ್ರೀಮಂತ ರಾಜಧಾನಿಗಳಲ್ಲಿ ಒಂದಾಗಿತ್ತು. ಅದ್ಭುತ ದ್ರಾವಿಡ ಶೈಲಿಯ ದೇವಾಲಯಗಳು ಇಲ್ಲಿವೆ.',
    hi: 'ग्रेनाइट चट्टानों के बीच 4,100 हेक्टेयर में विस्तृत हम्पी 14वीं से 16वीं सदी में संसार के सबसे समृद्ध महानगरों में से एक थी। यह द्रविड़ मंदिर वास्तुकला और इंडो-इस्लामिक स्थापत्य का अनुपम संगम है।',
  },
  architecturalHighlights: [
    {
      en: 'Monolithic Stone Chariot (Garuda Shrine) with rotating stone axles',
      kn: 'ತಿರುಗುವ ಕಲ್ಲಿನ ಚಕ್ರಗಳನ್ನು ಹೊಂದಿದ್ದ ಗರುಡ ಮಂದಿರದ ಏಕಶಿಲಾ ರಥ',
      hi: 'घूर्णनशील पहियों वाला गरुड़ को समर्पित एकाश्म प्रस्तर रथ',
    },
    {
      en: '56 musical pillars in Ranga Mantapa resonating Sa-Re-Ga-Ma frequencies',
      kn: 'ರಂಗಮಂಟಪದಲ್ಲಿರುವ ೫೬ ಸಪ್ತಸ್ವರ ಸಂಗೀತ ಕಂಬಗಳು',
      hi: 'रंग मंडप के 56 स्तंभ जो सातों सुरों की ध्वनि उत्पन्न करते हैं',
    },
    {
      en: 'Indo-Islamic multi-domed stepped pavilion of Lotus Mahal',
      kn: 'ಕಮಲ ಮಹಲಿನ ಕಮಾನುಗಳು ಮತ್ತು ಗೋಪುರಗಳ ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ಶೈಲಿ',
      hi: 'कमल महल के मेहराबदार और बहु-गुंबदी इंडो-इस्लामिक मंडप',
    },
  ],
  image: '/images/hampi.jpg',
  engine: 'pannellum',
  defaultSceneId: DEFAULT_HAMPI_SCENE_ID,
  scenes: HAMPI_SCENES,
  viewpointCount: 5,
  hotspotCount: 20,
  demoScenes: [
    {
      id: 'stone_chariot',
      title: {
        en: 'Vijaya Vittala — The Stone Chariot',
        kn: 'ವಿಜಯ ವಿಠ್ಠಲ — ಕಲ್ಲಿನ ರಥ',
        hi: 'विजय विट्ठल — प्रस्तर रथ',
      },
      subtitle: {
        en: 'Sacred Centre Quadrangle & Courtyard Shrines',
        kn: 'ಪವಿತ್ರ ಪ್ರಾಕಾರ ಹಾಗೂ ಗರುಡ ರಥ ಮಂದಿರ',
        hi: 'पवित्र प्रांगण एवं गरुड़ रथ देवालय',
      },
      image: '/images/demo-pano-hampi.jpg',
      audioTitle: {
        en: 'The Chariot Shrine of Garuda and Dravidian Mastery',
        kn: 'ಗರುಡ ರಥದ ವಾಸ್ತುಶಿಲ್ಪ ಹಾಗೂ ವಿಜಯನಗರ ವೈಭವ',
        hi: 'गरुड़ का रथ देवालय एवं द्रविड़ शिल्प कौशल',
      },
      audioDuration: '2:45',
      hotspots: [
        {
          id: 'hs_chariot_wheels',
          title: {
            en: 'Carved Granite Wheels & Hubs',
            kn: 'ಕೆತ್ತನೆಯ ಗ್ರಾನೈಟ್ ಚಕ್ರಗಳು ಮತ್ತು ಅಚ್ಚುಗಳು',
            hi: 'उत्कीर्ण ग्रेनाइट के पहिये व धुरी',
          },
          category: 'Architecture',
          position: { top: '56%', left: '46%' },
          description: {
            en: 'Carved with concentric floral bands and spokes, these stone wheels were originally designed to rotate freely on stone axles.',
            kn: 'ಹೂವಿನ ಸುರುಳಿಗಳಿಂದ ಕೆತ್ತಲಾದ ಈ ಕಲ್ಲಿನ ಚಕ್ರಗಳು ಪ್ರಾಚೀನ ಕಾಲದಲ್ಲಿ ತಿರುಗುತ್ತಿದ್ದವು.',
            hi: 'पुष्पीय नक्काशी से सज्जित ये पाषाण चक्र मूलतः पत्थर की धुरी पर घूमते थे।',
          },
          historicalSignificance: {
            en: 'Commissioned under King Krishnadevaraya around 1513 CE following his military campaigns in eastern Odisha.',
            kn: 'ಕ್ರಿ.ಶ. ೧೫೧೩ರಲ್ಲಿ ರಾಜ ಕೃಷ್ಣದೇವರಾಯನ ಒಡಿಶಾ ವಿಜಯದ ಸ್ಮರಣಾರ್ಥವಾಗಿ ನಿರ್ಮಿತವಾಯಿತು.',
            hi: 'राजा कृष्णदेवराय द्वारा 1513 ईस्वी में कलिंग विजय के उपलक्ष्य में निर्मित।',
          },
          architecturalDetails: {
            en: 'Constructed from interlocking slabs of hard chlorite and granite joined with hidden stone tenons.',
            kn: 'ಕಠಿಣ ಗ್ರಾನೈಟ್ ಶಿಲೆಗಳನ್ನು ಪರಸ್ಪರ ಬೆಸೆಯುವ ಗೂಡು-ಬೀಗದ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
            hi: 'कठोर ग्रेनाइट पाषाण खंडों को बिना चूने के गुप्त जोड़ों द्वारा जोड़कर बनाया गया।',
          },
        },
      ],
    },
  ],
};

export { HAMPI_SCENES, DEFAULT_HAMPI_SCENE_ID };

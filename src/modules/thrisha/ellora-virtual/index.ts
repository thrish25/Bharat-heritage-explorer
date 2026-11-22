/**
 * Ellora Caves Virtual Exploration Module
 * Maintained by Thrisha
 */

import { Monument, ViewerEngineType } from '../../../types';
import { ELLORA_SCENES, DEFAULT_ELLORA_SCENE_ID } from './scenes';

export const ELLORA_CONFIG = {
  id: 'ellora',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Ellora Caves',
    kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು',
    hi: 'एलोरा की गुफाएँ',
  },
  viewpointCount: 11,
  hotspotCount: 22,
  originalSourceDirectory: 'ellora/',
  originalPanoramaPath: 'public/assets/monuments/ellora/panoramas/',
  originalAudioPath: 'public/assets/monuments/ellora/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'fully_integrated',
};

export const ELLORA_MONUMENT: Monument = {
  id: 'ellora',
  name: {
    en: 'Ellora Caves',
    kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು',
    hi: 'एलोरा की गुफाएँ',
  },
  subTitle: {
    en: 'Cave 10 (Vishwakarma) & Cave 16 (Kailasa Temple)',
    kn: 'ಗುಹೆ ೧೦ (ವಿಶ್ವಕರ್ಮ) ಮತ್ತು ಗುಹೆ ೧೬ (ಕೈಲಾಸ ದೇವಾಲಯ)',
    hi: 'गुफा 10 (विश्वकर्मा) एवं गुफा 16 (कैलास मंदिर)',
  },
  location: {
    en: 'Chhatrapati Sambhaji Nagar, Maharashtra',
    kn: 'ಛತ್ರಪತಿ ಸಂಭಾಜಿನಗರ, ಮಹಾರಾಷ್ಟ್ರ',
    hi: 'छत्रपति संभाजीनगर, महाराष्ट्र',
  },
  century: '6th – 10th Century CE',
  unescoStatus: 'UNESCO World Heritage Site (1983, Ref: 243)',
  shortDescription: {
    en: 'A monolithic marvel excavated top-down from living basalt, uniting the timber-ribbed Buddhist Chaitya of Cave 10 with the colossal multi-storey Kailasa Temple of Cave 16.',
    kn: 'ಏಕಶಿಲಾ ಬೆಟ್ಟವನ್ನು ಮೇಲಿಂದ ಕೆಳಕ್ಕೆ ಕಡಿದು ನಿರ್ಮಿಸಲಾದ ಅಪ್ರತಿಮ ವಾಸ್ತುಶಿಲ್ಪ. ಬೌದ್ಧ ಚೈತ್ಯಾಲಯ ಮತ್ತು ಜಗತ್ಪ್ರಸಿದ್ಧ ಕೈಲಾಸ ದೇವಾಲಯದ ಅನನ್ಯ ಸಂಗಮ.',
    hi: 'अखंड बेसाल्ट चट्टान को ऊपर से नीचे तराश कर निर्मित अद्वितीय स्थापत्य, जिसमें गुफा 10 का चैत्य और गुफा 16 का विशाल कैलास मंदिर सम्मिलित हैं।',
  },
  fullDescription: {
    en: 'The Ellora Caves stand as the pinnacle of Indian rock-cut architecture. Spread across a 2-kilometer basalt escarpment, the site features 34 major monasteries and temples. Cave 16 (Kailasa) represents the largest monolithic rock excavation in human history, sculpted vertically from the cliff face under the Rashtrakuta Dynasty without masonry joints.',
    kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು ಭಾರತೀಯ ಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪದ ಪರಮೋಚ್ಛ ಶಿಖರ. ರಾಷ್ಟ್ರಕೂಟ ಸಾಮ್ರಾಜ್ಯದ ಕಾಲದಲ್ಲಿ ಬೃಹತ್ ಕಡಿದಾದ ಕಲ್ಲಿನ ಬಂಡೆಯನ್ನು ಮೇಲಿನಿಂದ ಕೆಳಮುಖವಾಗಿ ಕೊರೆದು ನಿರ್ಮಿಸಲಾದ ಕೈಲಾಸ ದೇವಾಲಯವು ಮಾನವ ಇತಿಹಾಸದ ಅತ್ಯದ್ಭುತ ವಿಸ್ಮಯವಾಗಿದೆ.',
    hi: 'एलोरा गुफाएँ भारतीय शैलकर्तित वास्तुकला की पराकाष्ठा हैं। 2 किलोमीटर में फैली यह गुफाएं राष्ट्रकूट वंश के संरक्षण में निर्मित हुई थीं। गुफा 16 कैलास मंदिर संसार का सबसे बड़ा एकाश्म पाषाण उत्खनन है जिसे शीर्ष से नीचे की ओर तराशा गया।',
  },
  architecturalHighlights: [
    {
      en: 'Top-down monolithic basalt trench quarrying',
      kn: 'ಮೇಲಿನಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದ ಏಕಶಿಲಾ ಬಂಡೆಯ ವಾಸ್ತು',
      hi: 'शीर्ष से नीचे की ओर की गई एकाश्म नक्काशी',
    },
    {
      en: 'Ribbed stone rafters imitating vaulted wooden carpentry in Cave 10',
      kn: 'ಗುಹೆ ೧೦ರಲ್ಲಿ ಮರದ ರಚನೆಯನ್ನು ಹೋಲುವ ಕಲ್ಲಿನ ಕಮಾನಿನ ಛಾವಣಿ',
      hi: 'गुफा 10 में काष्ठ शिल्प की नकल करती पत्थर की मेहराबदार छत',
    },
    {
      en: 'Colossal 16.5-meter monolithic Dhvajastambha victory pillars',
      kn: '೧೬.೫ ಮೀಟರ್ ಎತ್ತರದ ಬೃಹತ್ ಏಕಶಿಲಾ ಧ್ವಜಸ್ತಂಭಗಳು',
      hi: '16.5 मीटर ऊँचे विशाल एकाश्मी विजय ध्वजस्तंभ',
    },
  ],
  image: '/images/ellora.jpg',
  engine: 'pannellum',
  defaultSceneId: DEFAULT_ELLORA_SCENE_ID,
  scenes: ELLORA_SCENES,
  viewpointCount: 11,
  hotspotCount: 22,
  demoScenes: [
    {
      id: 'cave10_interior',
      title: {
        en: "Cave 10 — Vishwakarma ('The Carpenter's Cave')",
        kn: 'ಗುಹೆ ೧೦ — ವಿಶ್ವಕರ್ಮ ಚೈತ್ಯ ಗೃಹ',
        hi: 'गुफा 10 — विश्वकर्मा चैत्य गृह',
      },
      subtitle: {
        en: 'Central Nave, Stupa & Colossal Teaching Buddha',
        kn: 'ಕೇಂದ್ರ ಮಂಟಪ, ಸ್ತೂಪ ಹಾಗೂ ಬೋಧಿ ವೃಕ್ಷಸ್ಥ ಬುದ್ಧ',
        hi: 'केंद्रीय वीथिका, स्तूप एवं भगवान बुद्ध की विशाल प्रतिमा',
      },
      image: '/images/demo-pano-ellora.jpg',
      audioTitle: {
        en: 'The Great Chaitya Hall & Sacred Acoustics',
        kn: 'ಮಹಾ ಚೈತ್ಯಾಲಯ ಮತ್ತು ಪವಿತ್ರ ನಾದ ತರಂಗ',
        hi: 'महा चैत्य गृह एवं पवित्र ध्वनि प्रभाव',
      },
      audioDuration: '2:14',
      hotspots: [
        {
          id: 'hs_buddha',
          title: {
            en: 'Colossal Preaching Buddha',
            kn: 'ಬೃಹತ್ ಧರ್ಮಚಕ್ರ ಪ್ರವರ್ತನ ಬುದ್ಧ',
            hi: 'विशाल धर्मचक्र प्रवर्तन बुद्ध',
          },
          category: 'Sculpture',
          position: { top: '48%', left: '50%' },
          description: {
            en: 'A 15-foot high monolithic sculpture of Lord Buddha seated in Vyakhyana Mudra (teaching posture), flanked by flying celestial gandharvas.',
            kn: 'ವ್ಯಾಖ್ಯಾನ ಮುದ್ರೆಯಲ್ಲಿ ವಿರಾಜಮಾನವಾಗಿರುವ ೧೫ ಅಡಿ ಎತ್ತರದ ಭವ್ಯ ಏಕಶಿಲಾ ಬುದ್ಧನ ಮೂರ್ತಿ.',
            hi: 'व्याख्यान मुद्रा में पद्मासनस्थ भगवान बुद्ध की 15 फीट ऊँची एकाश्मी प्रतिमा।',
          },
          historicalSignificance: {
            en: 'Carved circa 650 CE, marking the late transition from Hinayana stupa reverence to Mahayana anthropomorphic iconography.',
            kn: 'ಕ್ರಿ.ಶ. ೬೫೦ ರ ಸುಮಾರಿಗೆ ಮಹಾಯಾನ ಬೌದ್ಧ ಪರಂಪರೆಯ ಅತ್ಯುನ್ನತ ಅವಧಿಯಲ್ಲಿ ಕೆತ್ತಲಾಯಿತು.',
            hi: 'लगभग 650 ईस्वी में निर्मित, जो हीनयान से महायान परंपरा में संक्रमण का ऐतिहासिक प्रतीक है।',
          },
          architecturalDetails: {
            en: 'Integrated seamlessly into the front face of the hemispherical relic stupa beneath a stone Bodhi foliage awning.',
            kn: 'ಸ್ತೂಪದ ಮುಂಭಾಗದಲ್ಲೇ ಅಖಂಡವಾಗಿ ಕೆತ್ತಲಾದ ಬೋಧಿ ವೃಕ್ಷಾಲಂಕೃತ ಶಿಲ್ಪ.',
            hi: 'प्रस्तर बोधि वृक्ष की छत्रछाया में अर्धगोलाकार स्तूप के अग्रभाग पर उत्कीर्ण।',
          },
        },
        {
          id: 'hs_ribbed_vault',
          title: {
            en: 'Basalt Vaulted Ribs',
            kn: 'ಕಲ್ಲಿನ ಕಮಾನಿನ ಪಕ್ಕೆಲುಬುಗಳು',
            hi: 'बेसाल्ट की मेहराबदार पसलियाँ',
          },
          category: 'Architecture',
          position: { top: '24%', left: '38%' },
          description: {
            en: 'Curved stone ribs meticulously chiseled into the living ceiling to simulate bent teak timber rafters of early Vedic construction.',
            kn: 'ಪ್ರಾಚೀನ ಕಾಲದ ಮರದ ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ನಿಖರವಾಗಿ ಕಲ್ಲಿನಲ್ಲಿ ಮರುಸೃಷ್ಟಿಸಿದ ಕಮಾನಿನ ಛಾವಣಿ.',
            hi: 'प्राचीन काष्ठ निर्माण की अनुकृति करती जीवित चट्टान पर तराशी गई वक्राकार पत्थर की पसलियाँ।',
          },
          historicalSignificance: {
            en: 'Gave rise to the moniker "The Carpenter\'s Cave" among local craftsmen who revered the illusion of woodwork.',
            kn: 'ಮರದ ಕೆತ್ತನೆಯಂತೆಯೇ ಕಂಗೊಳಿಸುವ ಕಾರಣ ಇದಕ್ಕೆ "ವಿಶ್ವಕರ್ಮ ಗುಹೆ" ಎಂದು ಹೆಸರು ಬಂದಿತು.',
            hi: 'काष्ठकारी जैसा भ्रम उत्पन्न करने के कारण इसे बढ़ई की गुफा (कारपेंटर्स केव) कहा गया।',
          },
          architecturalDetails: {
            en: 'The barrel-vault spans 25 meters deep and serves as a natural acoustic amplifier for Buddhist chanting.',
            kn: '೨೫ ಮೀಟರ್ ಉದ್ದದ ಈ ಕಮಾನಿನ ಛಾವಣಿಯು ನಾದ ತರಂಗಗಳನ್ನು ಪ್ರತಿಧ್ವನಿಸುವ ಶಕ್ತಿ ಹೊಂದಿದೆ.',
            hi: '25 मीटर गहरी यह गुंबदाकार छत बौद्ध मंत्रोच्चार के लिए प्राकृतिक ध्वनि विस्तारक का कार्य करती है।',
          },
        },
      ],
    },
  ],
};

export { ELLORA_SCENES, DEFAULT_ELLORA_SCENE_ID };

import { Monument } from '../types';
import { TAJ_MAHAL_SCENES, DEFAULT_TAJ_MAHAL_SCENE_ID } from '../monuments/taj-mahal/scenes';
import { HAMPI_SCENES, DEFAULT_HAMPI_SCENE_ID } from '../monuments/hampi';
import { ELLORA_SCENES, DEFAULT_ELLORA_SCENE_ID } from '../monuments/ellora';
import { KONARK_SCENES, DEFAULT_KONARK_SCENE_ID } from '../monuments/konark';

export const MONUMENTS: Monument[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

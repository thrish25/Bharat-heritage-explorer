/**
 * Konark Sun Temple — Authentic 360° Scenes & Hotspot Definitions
 * 5 Canonical Locations matching the Unified Royal Indian Heritage Architecture
 *
 * Inscribed UNESCO World Heritage Site 1984 | Kalinga Sandstone & Khondalite Architecture
 * Total Scenes: 5 (Entrance Gateway, Central Assembly Court, Southern Chariot Plinth, Southern Grounds, Southeast Kitchen)
 */

import { Scene } from '../../../types/monument';

export const DEFAULT_KONARK_SCENE_ID = 'konark_simhadwara';

export const KONARK_SCENES: Scene[] = [
  {
    "id": "konark_simhadwara",
    "sceneNumber": 1,
    "title": {
      "en": "Entrance Gateway / Natya Mandapa",
      "kn": "ಸಿಂಹದ್ವಾರ: ಪೂರ್ವ ಮಹಾದ್ವಾರ ಮತ್ತು ಗಜಸಿಂಹ ರಕ್ಷಕರು",
      "hi": "सिंहद्वार: पूर्वी महाद्वार एवं गजसिंह रक्षक"
    },
    "subtitle": {
      "en": "The Grand Solar Ceremonial Entrance Facing the Bay of Bengal",
      "kn": "ಬಂಗಾಳ ಕೊಲ್ಲಿಯ ಸೂರ್ಯೋದಯವನ್ನು ಸ್ವಾಗತಿಸುವ ಪವಿತ್ರ ಮಹಾದ್ವಾರ",
      "hi": "बंगाल की खाड़ी से उदित होते सूर्य के सम्मुख मुख्य प्रवेश द्वार"
    },
    "thumbnailUrl": "/assets/monuments/konark/thumbnails/konark_01_simhadwara.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/konark/panoramas/konark_01_simhadwara.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 50,
        "hfov": 90
      },
      "limits": {
        "minPitch": -18,
        "maxPitch": 18,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "konark_simhadwara_intro",
      "title": {
        "en": "Simhadwara & Eastern Guardian Lions",
        "kn": "ಸಿಂಹದ್ವಾರ ಮತ್ತು ಪೂರ್ವ ಗಜಸಿಂಹ ರಕ್ಷಕರು",
        "hi": "सिंहद्वार एवं पूर्वी गजसिंह रक्षक"
      },
      "durationSeconds": 45,
      "durationFormatted": "0:45",
      "audioSources": {
        "en": "/assets/monuments/konark/audio/en/konark_simhadwara_intro.mp3",
        "kn": "/assets/monuments/konark/audio/kn/konark_simhadwara_intro.mp3",
        "hi": "/assets/monuments/konark/audio/hi/konark_simhadwara_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to the Simhadwara, the monumental Eastern Gate of the Konark Sun Temple. Conceived and erected around 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty, this grand ceremonial axis was aligned astronomically to receive the first rays of the dawn sun rising over the Bay of Bengal, celebrating spiritual illumination and royal authority over worldly illusion. Ahead of you stand the iconic monolithic Gajasimha sculptures—colossal royal lions rearing triumphantly over vanquished elephants—beside the broad axial khondalite steps and the ancient gateway portal. In this 360-degree scene, you will explore the southern and northern guardian lions, inspect the sacred pilgrimage staircase, and examine the ruins of the outer ceremonial gateway.",
        "kn": "ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯದ ಭವ್ಯ ಪೂರ್ವ ಪ್ರವೇಶದ್ವಾರವಾದ ಸಿಂಹದ್ವಾರಕ್ಕೆ ಸ್ವಾಗತ. ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ಪೂರ್ವ ಗಂಗ ರಾಜವಂಶದ ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವರಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಮಹಾದ್ವಾರವು, ಬಂಗಾಳ ಕೊಲ್ಲಿಯಿಂದ ಮೂಡುವ ಮುಂಜಾನೆಯ ಪ್ರಥಮ ಸೂರ್ಯಕಿರಣಗಳನ್ನು ನೇರವಾಗಿ ಸ್ವಾಗತಿಸಲು ಮತ್ತು ಅಹಂಕಾರದ ಮೇಲೆ ದೈವಿಕ ಜ್ಞಾನದ ವಿಜಯವನ್ನು ಸಾರಲು ಖಗೋಳಶಾಸ್ತ್ರದ ನಿಖರತೆಯೊಂದಿಗೆ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ. ನಿಮ್ಮ ಎದುರಿಗೆ ಆನೆಯನ್ನು ಮೆಟ್ಟಿ ನಿಂತಿರುವ ಪ್ರಸಿದ್ಧ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ಶಿಲ್ಪಗಳು, ವಿಶಾಲವಾದ ಖೊಂಡಾಲೈಟ್ ಕಲ್ಲಿನ ಪವಿತ್ರ ಮೆಟ್ಟಿಲುಗಳು ಮತ್ತು ಪ್ರಾಚೀನ ಮಹಾದ್ವಾರದ ಅವಶೇಷಗಳು ಕಂಗೊಳಿಸುತ್ತವೆ.",
        "hi": "कोणार्क सूर्य मंदिर के भव्य पूर्वी महाद्वार सिंहद्वार में आपका स्वागत है। 13वीं शताब्दी में लगभग 1250 ईस्वी में पूर्वी गंग वंश के प्रतापी राजा नरसिंहदेव प्रथम द्वारा निर्मित यह महाद्वार, बंगाल की खाड़ी से उदित होते सूर्य की प्रथम रश्मियों का स्वागत करने और अहंकार पर आध्यात्मिक ज्ञान के विजय का प्रतीक है। आपके सम्मुख हाथियों पर सवार विजयी मुद्रा में खड़े विशाल एकाश्म गजसिंह, तराशे गए खोंडालाइट पत्थरों से निर्मित मुख्य सोपान मार्ग और प्राचीन प्रवेश द्वार के भग्नावशेष विद्यमान हैं।"
      }
    },
    "hotspots": [
      {
        "id": "gajasimha-south",
        "title": {
          "en": "Gajasimha — Southern Guardian Monolith",
          "kn": "ಕಳಿಂಗ ಶೈಲಿಯ ದಕ್ಷಿಣ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ಶಿಲ್ಪ",
          "hi": "कलिंग शैली की दक्षिणी गजसिंह एकाश्म प्रतिमा"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -4.5,
            "yaw": 37,
            "hfov": 80
          }
        },
        "description": {
          "en": "Colossal monolithic guardian sculpture depicting a triumphant royal lion rearing powerfully over a vanquished elephant.",
          "kn": "ಆನೆಯ ಮೇಲೆ ಪರಾಕ್ರಮದಿಂದ ವಿರಾಜಮಾನವಾಗಿರುವ ಬೃಹತ್ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ರಕ್ಷಕ ಶಿಲ್ಪ.",
          "hi": "हाथी पर विजयी मुद्रा में आरूढ़ विशाल राजसी गजसिंह एकाश्म मूर्ति।"
        },
        "historicalSignificance": {
          "en": "Commissioned by King Narasimhadeva I around 1250 CE as the primary eastern threshold guardian of the Sun Temple complex.",
          "kn": "ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವರಿಂದ ಸೂರ್ಯ ದೇವಾಲಯದ ಮುಖ್ಯ ಪೂರ್ವ ರಕ್ಷಕನಾಗಿ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿತು.",
          "hi": "लगभग 1250 ईस्वी में राजा नरसिंहदेव प्रथम द्वारा सूर्य मंदिर परिसर के मुख्य पूर्वी रक्षक के रूप में प्रतिष्ठित।"
        },
        "architecturalDetails": {
          "en": "Carved with extraordinary vigor from a single block of khondalite stone, featuring a stylized curly mane, bulging eyes, ornamental bridle, and dynamic front paws pinning the elephant.",
          "kn": "ಖೊಂಡಾಲೈಟ್ ಶಿಲೆಯಲ್ಲಿ ಕಡೆಯಲಾದ ಈ ಮೂರ್ತಿಯು ಸುರುಳಿಯಾಕಾರದ ಕೇಸರ, ಉಬ್ಬಿದ ಕಣ್ಣುಗಳು ಮತ್ತು ಆನೆಯನ್ನು ಮೆಟ್ಟಿನಿಂತ ಭಂಗಿಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "एक ही खोंडालाइट पाषाण खंड से निर्मित, जिसमें घुंघराली अयाल, उभरे नेत्र एवं हाथी को दबाते बलिष्ठ पंजों का सजीव अंकन है।"
        },
        "audioNarrationTrackId": "hs_gajasimha_south",
        "transcripts": {
          "en": "You are observing the Southern Gajasimha, the iconic lion-crushing-elephant guardian sculpture greeting dawn pilgrims at the eastern staircase.",
          "kn": "ನೀವು ಪೂರ್ವ ಮೆಟ್ಟಿಲುಗಳ ದಕ್ಷಿಣ ಭಾಗದಲ್ಲಿರುವ ಭವ್ಯ ಗಜಸಿಂಹ ಶಿಲ್ಪವನ್ನು ವೀಕ್ಷಿಸುತ್ತಿದ್ದೀರಿ.",
          "hi": "आप दक्षिणी गजसिंह प्रतिमा का अवलोकन कर रहे हैं, जो पूर्वी सोपान पर तीर्थयात्रियों का स्वागत करती है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_gajasimha_south.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_gajasimha_south.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_gajasimha_south.mp3"
        }
      },
      {
        "id": "natamandira-eastern-steps",
        "title": {
          "en": "Grand Flight of Steps to Natamandira",
          "kn": "ನಾಟ್ಯಮಂದಿರಕ್ಕೆ ತೆರಳುವ ಪ್ರಮುಖ ಪವಿತ್ರ ಮೆಟ್ಟಿಲುಗಳು",
          "hi": "नाट्यमंडप का मुख्य अक्षीय सोपान मार्ग"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2.7,
            "yaw": 50.5,
            "hfov": 80
          }
        },
        "description": {
          "en": "Wide ceremonial staircase ascending directly toward the elevated Natamandira dance platform.",
          "kn": "ನಾಟ್ಯಮಂದಿರದ ಎತ್ತರದ ವೇದಿಕೆಗೆ ನೇರವಾಗಿ ಕೊಂಡೊಯ್ಯುವ ಭವ್ಯ ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳು.",
          "hi": "ऊंचे नाट्यमंडप चबूतरे की ओर सीधे जाने वाला भव्य प्रस्तर सोपान मार्ग।"
        },
        "historicalSignificance": {
          "en": "Served as the ceremonial procession path for royal dignitaries, Chodaganga sovereigns, and chief priests during solar equinox festivities.",
          "kn": "ವಿಷುವತ್ ಹಬ್ಬಗಳ ಸಂದರ್ಭದಲ್ಲಿ ರಾಜರು ಮತ್ತು ಪ್ರಧಾನ ಅರ್ಚಕರು ಸಾಗುತ್ತಿದ್ದ ಪವಿತ್ರ ಮೆರವಣಿಗೆಯ ಹಾದಿ.",
          "hi": "विषुव पर्व पर राजपरिवार एवं प्रधान पुजारियों के अनुष्ठानिक प्रवेश का प्रमुख मार्ग।"
        },
        "architecturalDetails": {
          "en": "Constructed from dressed khondalite slabs engineered with gentle riser heights and broad treads, flanked by ornamental parapets.",
          "kn": "ವಿಶಾಲವಾದ ಮತ್ತು ಕಡಿಮೆ ಎತ್ತರದ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹೊಂದಿದ್ದು, ಕಳಿಂಗ ಶಿಲ್ಪಶಾಸ್ತ್ರದ ನಿಖರ ಗಣಿತದ ನಿಯಮಗಳಿಗೆ ಅನುಗುಣವಾಗಿದೆ.",
          "hi": "तराशे गए खोंडालाइट शिलाखंडों से निर्मित, जिसमें सुगम आरोहण हेतु चौड़े पायदान बनाए गए हैं।"
        },
        "audioNarrationTrackId": "hs_natamandira_steps",
        "transcripts": {
          "en": "This grand stairway leads pilgrims up to the Natamandira, aligned with the spring and autumn equinox sunrises.",
          "kn": "ಈ ಭವ್ಯ ಮೆಟ್ಟಿಲುಗಳು ನಾಟ್ಯಮಂದಿರಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತವೆ, ಇದು ಸೂರ್ಯೋದಯದ ಪವಿತ್ರ ಕಿರಣಗಳಿಗೆ ನೇರವಾಗಿ ಮುಖಮಾಡಿದೆ.",
          "hi": "यह सीढ़ियां नाट्यमंडप की ओर जाती हैं, जो विषुव के सूर्योदय से सीधे संरेखित हैं।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_natamandira_steps.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_natamandira_steps.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_natamandira_steps.mp3"
        }
      },
      {
        "id": "gajasimha-north",
        "title": {
          "en": "Gajasimha — Northern Guardian Monolith",
          "kn": "ಕಳಿಂಗ ಶೈಲಿಯ ಉತ್ತರ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ಶಿಲ್ಪ",
          "hi": "कलिंग शैली की उत्तरी गजसिंह एकाश्म प्रतिमा"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -4.5,
            "yaw": 65,
            "hfov": 80
          }
        },
        "description": {
          "en": "Northern counterpart of the monolithic Gajasimha guardian statues guarding the Natamandira access.",
          "kn": "ನಾಟ್ಯಮಂದಿರದ ಮೆಟ್ಟಿಲುಗಳ ಉತ್ತರ ಭಾಗವನ್ನು ಕಾಯುವ ಮತ್ತೊಂದು ಭವ್ಯ ಗಜಸಿಂಹ ಏಕಶಿಲಾ ಮೂರ್ತಿ.",
          "hi": "नाट्यमंडप सोपान के उत्तरी भाग की रक्षा करती विशाल गजसिंह प्रतिमा।"
        },
        "historicalSignificance": {
          "en": "Erected under Eastern Ganga royal patronage to defend the sanctum against ritual pollution and spiritual desecration.",
          "kn": "ಪೂರ್ವ ಗಂಗ ಸಾಮ್ರಾಜ್ಯದ ರಕ್ಷಣಾತ್ಮಕ ದೈವಿಕ ಸಂಕೇತವಾಗಿ ಗರ್ಭಗುಡಿಯ ಪಾವಿತ್ರ್ಯತೆಯನ್ನು ಕಾಪಾಡಲು ನಿರ್ಮಿಸಲಾಯಿತು.",
          "hi": "गर्भगृह की आध्यात्मिक शुचिता और सुरक्षा हेतु पूर्वी गंग राजाओं द्वारा स्थापित।"
        },
        "architecturalDetails": {
          "en": "Mirrors the southern guardian in scale, depicting a muscular predator with ornamental chest ornaments standing over a submissive elephant with raised trunk.",
          "kn": "ದಕ್ಷಿಣದ ಶಿಲ್ಪಕ್ಕೆ ಸರಿಸಮನಾದ ಪ್ರಮಾಣದಲ್ಲಿದ್ದು, ಆಭರಣಗಳಿಂದ ಅಲಂಕೃತಗೊಂಡಿರುವ ಸಿಂಹವು ಆನೆಯ ಮೇಲೆ ವಿಜೃಂಭಿಸುತ್ತದೆ.",
          "hi": "दक्षिणी मूर्ति की भांति ही विशाल, जिसमें अलंकृत वक्षमाला और नीचे दबे गजराज का प्रभावशाली अंकन है।"
        },
        "audioNarrationTrackId": "hs_gajasimha_north",
        "transcripts": {
          "en": "The Northern Gajasimha completes the monumental pair of lion-guardians framing the entrance stairway.",
          "kn": "ಉತ್ತರ ಗಜಸಿಂಹವು ಪ್ರವೇಶ ಮೆಟ್ಟಿಲುಗಳ ದ್ವಿಮುಖ ರಕ್ಷಕ ಶಿಲ್ಪಜೋಡಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.",
          "hi": "उत्तरी गजसिंह प्रवेश सोपान के रक्षक युग्म को पूर्ण करता है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_gajasimha_north.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_gajasimha_north.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_gajasimha_north.mp3"
        }
      },
      {
        "id": "simhadwara-outer-gateway",
        "title": {
          "en": "Simhadwara Ceremonial Gateway",
          "kn": "ದೇವಾಲಯ ಸಂಕೀರ್ಣದ ಬಾಹ್ಯ ರಕ್ಷಣಾ ಪ್ರವೇಶದ್ವಾರ",
          "hi": "पवित्र देवालय का बाह्य सुरक्षा महाद्वार"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -5.4,
            "yaw": -120.7,
            "hfov": 80
          }
        },
        "description": {
          "en": "The ancient stone entrance wall and boundary gate through which pilgrims arrived from the Chandrabhaga river basin.",
          "kn": "ಚಂದ್ರಭಾಗಾ ನದಿಯ ತೀರದಿಂದ ಆಗಮಿಸುತ್ತಿದ್ದ ಭಕ್ತರು ಪ್ರವೇಶಿಸುತ್ತಿದ್ದ ಪ್ರಾಚೀನ ಶಿಲಾ ದ್ವಾರ.",
          "hi": "चंद्रभागा नदी घाटी से आने वाले श्रद्धालुओं का मुख्य प्रवेश द्वार।"
        },
        "historicalSignificance": {
          "en": "Marked the ceremonial boundary of the 26-acre sacred Sun precinct, controlling royal and public access.",
          "kn": "೨೬ ಎಕರೆ ವಿಸ್ತೀರ್ಣದ ಸೂರ್ಯ ಕ್ಷೇತ್ರವನ್ನು ರಕ್ಷಿಸುತ್ತಿದ್ದ ಐತಿಹಾಸಿಕ ಮಹಾದ್ವಾರ.",
          "hi": "26 एकड़ में फैले सूर्य मंदिर परिसर की बाह्य सुरक्षा दीवार और प्रवेश द्वार।"
        },
        "architecturalDetails": {
          "en": "Dry-stone ashlar masonry using large dressed laterite and khondalite blocks joined by iron dowels.",
          "kn": "ಕಬ್ಬಿಣದ ಕೀಲುಗಳಿಂದ ಜೋಡಿಸಲಾದ ಲ್ಯಾಟರೈಟ್ ಮತ್ತು ಖೊಂಡಾಲೈಟ್ ಕಲ್ಲಿನ ಬಲಿಷ್ಠ ಗೋಡೆಗಳು.",
          "hi": "बिना गारे के लोहे की कीलों से जोड़े गए विशाल खोंडालाइट एवं लेटराइट पाषाण खंड।"
        },
        "audioNarrationTrackId": "hs_simhadwara_gateway",
        "transcripts": {
          "en": "The Simhadwara entrance portal once stood as the formal boundary welcoming pilgrims from across ancient India.",
          "kn": "ಸಿಂಹದ್ವಾರವು ಪ್ರಾಚೀನ ಭಾರತದ ವಿವಿಧ ಭಾಗಗಳಿಂದ ಬರುತ್ತಿದ್ದ ಭಕ್ತರನ್ನು ಸ್ವಾಗತಿಸುತ್ತಿದ್ದ ಪವಿತ್ರ ಗಡಿಯಾಗಿತ್ತು.",
          "hi": "सिंहद्वार प्राचीन काल में भारत भर से आने वाले श्रद्धालुओं का औपचारिक प्रवेश द्वार था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_simhadwara_gateway.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_simhadwara_gateway.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_simhadwara_gateway.mp3"
        }
      }
    ]
  },
  {
    "id": "konark_natamandira",
    "sceneNumber": 2,
    "title": {
      "en": "Central Assembly Court / Jagamohana",
      "kn": "ನಾಟ್ಯಮಂದಿರ: ದೇವದಾಸಿ ನೃತ್ಯ ಮಂಟಪದ ಅಧಿಷ್ಠಾನ",
      "hi": "नाट्यमंदिर: दिव्य नर्तकियों का नृत्य मंडप"
    },
    "subtitle": {
      "en": "The Pillared Hall of Sacred Devadasi Offerings & Kalinga Music",
      "kn": "ದೇವದಾಸಿ ನೃತ್ಯ ಮತ್ತು ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತ ಸಮರ್ಪಣೆಯ ಕಂಬಗಳ ಮಂಟಪ",
      "hi": "देवदासी नृत्य एवं शास्त्रीय संगीत उपासना का अलंकृत स्तंभ मंडप"
    },
    "thumbnailUrl": "/assets/monuments/konark/thumbnails/konark_02_natamandira.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/konark/panoramas/konark_02_natamandira.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 0,
        "hfov": 90
      },
      "limits": {
        "minPitch": -18,
        "maxPitch": 18,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "konark_natamandira_intro",
      "title": {
        "en": "Natamandira Dance Pavilion",
        "kn": "ನಾಟ್ಯಮಂದಿರ ನೃತ್ಯ ಮಂಟಪ",
        "hi": "नाट्यमंदिर नृत्य मंडप"
      },
      "durationSeconds": 45,
      "durationFormatted": "0:45",
      "audioSources": {
        "en": "/assets/monuments/konark/audio/en/konark_natamandira_intro.mp3",
        "kn": "/assets/monuments/konark/audio/kn/konark_natamandira_intro.mp3",
        "hi": "/assets/monuments/konark/audio/hi/konark_natamandira_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to the Natamandira, the sacred Dance Pavilion of the Sun Temple. Constructed in the 13th century in the mature Kalinga architectural tradition, this hypostyle hall stood upon a towering plinth, intentionally separate from the main sanctuary. Historically, this consecrated pavilion served as the performance stage where temple devadasis offered daily classical Odissi dance and sacred music to Surya, accompanied by mridangam drums, cymbals, and flutes. The pavilion features a profusely carved multi-tiered pābhāga plinth, structural hypostyle pillars adorned with dancing Alasa-kanyas, and an intact horizontal stone lintel beam.",
        "kn": "ಸೂರ್ಯ ದೇವಾಲಯದ ಪವಿತ್ರ ನೃತ್ಯ ಸಭಾಂಗಣವಾದ ನಾಟ್ಯಮಂದಿರಕ್ಕೆ ಸ್ವಾಗತ. ೧೩ನೇ ಶತಮಾನದಲ್ಲಿ ಪ್ರಬುದ್ಧ ಕಳಿಂಗ ವಾಸ್ತುಶಿಲ್ಪ ಶೈಲಿಯಲ್ಲಿ ನಿರ್ಮಿಸಲಾದ ಈ ಸುಂದರ ಕಂಬಗಳ ಮಂಟಪವು ಮುಖ್ಯ ಗರ್ಭಗುಡಿಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಎತ್ತರದ ವೇದಿಕೆಯ ಮೇಲೆ ನಿಂತಿದೆ. ಐತಿಹಾಸಿಕವಾಗಿ, ಈ ಪವಿತ್ರ ಮಂಟಪದಲ್ಲಿ ದೇವದಾಸಿಯರು ಮೃದಂಗ, ತಾಳ, ಕೊಳಲುಗಳ ನಾದದೊಂದಿಗೆ ಸೂರ್ಯ ದೇವರಿಗೆ ಶಾಸ್ತ್ರೀಯ ಒಡಿಸ್ಸಿ ನೃತ್ಯ ಸೇವೆಯನ್ನು ಸಮರ್ಪಿಸುತ್ತಿದ್ದರು.",
        "hi": "सूर्य मंदिर के पावन नृत्य मंडप नाट्यमंदिर में आपका स्वागत है। 13वीं शताब्दी में परिपक्व कलिंग वास्तुशैली में निर्मित यह स्तंभयुक्त मंडप मुख्य गर्भगृह से पृथक एक ऊंचे चबूतरे पर स्थापित है। ऐतिहासिक रूप से, यह वह पवित्र रंगमंच था जहाँ देवदासियां प्रतिदिन भगवान सूर्य की उपासना में मृदंग, मंजीरे और वेणु के स्वरों पर शास्त्रीय ओडिसी नृत्य प्रस्तुत करती थीं।"
      }
    },
    "hotspots": [
      {
        "id": "natamandira-sculpted-plinth",
        "title": {
          "en": "Terraced Natamandira Plinth",
          "kn": "ನಾಟ್ಯಮಂಟಪದ ಕೆತ್ತನೆಗಳಿಂದ ಕೂಡಿದ ಭವ್ಯ ಅಧಿಷ್ಠಾನ",
          "hi": "नाट्यमंडप का अलंकृत सोपानयुक्त अधिष्ठान"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -4.9,
            "yaw": -11.2,
            "hfov": 80
          }
        },
        "description": {
          "en": "Multi-tiered stone podium elevating the performance stage above the courtyard grounds.",
          "kn": "ಪ್ರಾಂಗಣದ ನೆಲಕ್ಕಿಂತ ಎತ್ತರದಲ್ಲಿ ನೃತ್ಯ ವೇದಿಕೆಯನ್ನು ಎತ್ತಿಹಿಡಿಯುವ ಸುಂದರ ಕಲ್ಲಿನ ವೇದಿಕೆ.",
          "hi": "प्रांगण से ऊंचा उठाया गया बहुस्तरीय नक्काशीदार प्रस्तर चबूतरा।"
        },
        "historicalSignificance": {
          "en": "Created as an independent festival hall where royal patrons watched the Natya-seva dedication rituals.",
          "kn": "ರಾಜರು ಮತ್ತು ಭಕ್ತರು ದೇವದಾಸಿಯರ ನೃತ್ಯ ಸೇವೆಯನ್ನು ವೀಕ್ಷಿಸಲು ಪ್ರತ್ಯೇಕವಾಗಿ ನಿರ್ಮಿಸಿದ ಉತ್ಸವ ಮಂಟಪ.",
          "hi": "राजा एवं श्रद्धालुओं द्वारा नाट्य-सेवा अनुष्ठान देखने हेतु निर्मित स्वतंत्र मंडप।"
        },
        "architecturalDetails": {
          "en": "Articulated with intricate horizontal mouldings (pābhāga, jangha, and baranda) framing dynamic stone musician panels.",
          "kn": "ಪಾಭಾಗ, ಜಂಘಾ ಮತ್ತು ಬಾರಂಡಾ ಎಂಬ ಕಳಿಂಗ ವಾಸ್ತುಶಿಲ್ಪದ ಸಾಲುಗಳಿಂದ ಅಲಂಕೃತಗೊಂಡಿದೆ.",
          "hi": "कलिंग वास्तुशास्त्र के पाभाग, जंघा और बारंडा जैसे क्षैतिज शिल्पों से सुसज्जित।"
        },
        "audioNarrationTrackId": "hs_natamandira_plinth",
        "transcripts": {
          "en": "This terraced plinth elevated the ritual dancers into direct line of sight with the solar deity.",
          "kn": "ಈ ಸುಂದರ ಅಧಿಷ್ಠಾನವು ನರ್ತಕಿಯರನ್ನು ಸೂರ್ಯ ದೇವರ ನೇರ ದೃಷ್ಟಿಗೆ ತಲುಪಿಸುತ್ತಿತ್ತು.",
          "hi": "यह ऊंचा चबूतरा नर्तकियों को सूर्य देव की प्रत्यक्ष दृष्टि रेखा में स्थापित करता था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_natamandira_plinth.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_natamandira_plinth.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_natamandira_plinth.mp3"
        }
      },
      {
        "id": "alasakanya-dancers",
        "title": {
          "en": "Alasa Kanyas & Devadasi Reliefs",
          "kn": "ಶಿಲೆಯಲ್ಲಿ ಅರಳಿದ ದೇವದಾಸಿ ನೃತ್ಯ ಭಂಗಿಗಳು ಮತ್ತು ವಾದ್ಯಗಳು",
          "hi": "पाषाण में उत्कीर्ण शास्त्रीय नृत्य मुद्राएं एवं वाद्य"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -3.2,
            "yaw": 16.9,
            "hfov": 80
          }
        },
        "description": {
          "en": "Hundreds of high-relief female figures frozen in dynamic tribhanga dance postures playing ancient musical instruments.",
          "kn": "ಮೃದಂಗ, ತಾಳ, ಕೊಳಲು ನುಡಿಸುವ ನೂರಾರು ನರ್ತಕಿಯರ ಜೀವಂತ ತ್ರಿಭಂಗ ನೃತ್ಯ ಶಿಲ್ಪಗಳು.",
          "hi": "त्रिभंग मुद्राओं में मृदंग, मंजीरा और वीणा बजाती अप्सराओं की सैकड़ों सजीव मूर्तियां।"
        },
        "historicalSignificance": {
          "en": "Serves as an authentic 13th-century visual document of medieval Odishan performing arts and musicology.",
          "kn": "೧೩ನೇ ಶತಮಾನದ ಮಧ್ಯಕಾಲೀನ ಒಡಿಶಾ ಸಂಗೀತ ಮತ್ತು ನೃತ್ಯ ಕಲೆಯ ಐತಿಹಾಸಿಕ ಜೀವಂತ ದಾಖಲೆ.",
          "hi": "13वीं शताब्दी की भारतीय संगीत एवं नृत्य विधाओं का पाषाण-अंकित प्रामाणिक दस्तावेज।"
        },
        "architecturalDetails": {
          "en": "Sculpted with remarkable anatomical lyricism, capturing transparent drapery, elaborate beaded coiffures, and flexed ankle bells.",
          "kn": "ಸೂಕ್ಷ್ಮ ವಸ್ತ್ರವಿನ್ಯಾಸ, ಕೇಶಾಲಂಕಾರ ಮತ್ತು ಕಾಲಿನ ಗೆಜ್ಜೆಗಳ ನಾದವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳು.",
          "hi": "पारदर्शी वस्त्र, अलंकृत केश विन्यास और नूपुरों की सूक्ष्म नक्काशी से युक्त सजीव शिल्प।"
        },
        "audioNarrationTrackId": "hs_alasakanya_dancers",
        "transcripts": {
          "en": "Notice the expressive posture of the female musicians, capturing the living rhythm of 13th-century Odissi dance traditions.",
          "kn": "ಈ ಶಿಲ್ಪಗಳಲ್ಲಿರುವ ನರ್ತಕಿಯರ ಜೀವಂತ ಭಂಗಿಗಳನ್ನು ಗಮನಿಸಿ, ಇವು ೧೩ನೇ ಶತಮಾನದ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ ಸಂಸ್ಕೃತಿಯನ್ನು ಜೀವಂತವಾಗಿರಿಸಿವೆ.",
          "hi": "नर्तकियों की इन भावपूर्ण मुद्राओं को देखें, जो 13वीं शताब्दी की ओडिसी नृत्य परंपरा का साक्षात् प्रमाण हैं।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_alasakanya_dancers.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_alasakanya_dancers.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_alasakanya_dancers.mp3"
        }
      },
      {
        "id": "natamandira-portal-lintel",
        "title": {
          "en": "Hypostyle Dance Pavilion Portal",
          "kn": "ಕ್ಲೋರೈಟ್ ಶಿಲೆಯ ಮೇಲ್ಭಾಗದ ಭವ್ಯ ಪ್ರವೇಶದ್ವಾರ",
          "hi": "क्लोराइट पाषाण का ऊपरी भव्य प्रवेश द्वार"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 7.4,
            "yaw": -15.2,
            "hfov": 80
          }
        },
        "description": {
          "en": "Central entrance threshold accessing the hypostyle hall supported by monumental carved pillars.",
          "kn": "ಬೃಹತ್ ಕೆತ್ತನೆಯ ಕಂಬಗಳಿಂದ ಆಧಾರಿಸಲ್ಪಟ್ಟ ನಾಟ್ಯಮಂದಿರದ ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರ.",
          "hi": "भव्य स्तंभों पर टिके नृत्य मंडप का केंद्रीय प्रवेश द्वार।"
        },
        "historicalSignificance": {
          "en": "Threshold through which sacred offerings and devadasi troupes passed during morning and evening solar pujas.",
          "kn": "ಮುಂಜಾನೆ ಮತ್ತು ಸಂಜೆಯ ಸೂರ್ಯ ಪೂಜೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಪವಿತ್ರ ನೈವೇದ್ಯ ಮತ್ತು ನರ್ತಕಿಯರು ಪ್ರವೇಶಿಸುತ್ತಿದ್ದ ದ್ವಾರ.",
          "hi": "प्रातः एवं सांध्यकालीन सूर्य पूजा में देवदासियों के प्रवेश का पावन द्वार।"
        },
        "architecturalDetails": {
          "en": "Surmounted by fine-grained dark green chlorite doorframes carved with foliage scrolls (patralata) and celestial guardians.",
          "kn": "ಗಾಢ ಹಸಿರು ಬಣ್ಣದ ಕ್ಲೋರೈಟ್ ಕಲ್ಲಿನಲ್ಲಿ ಲತಾ-ಪುಷ್ಪಗಳ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳನ್ನು ಹೊಂದಿರುವ ದ್ವಾರಬಂಧ.",
          "hi": "गहरे हरे क्लोराइट पत्थर पर पत्रलता और द्वारपालों की बारीक नक्काशी से युक्त द्वार चौखट।"
        },
        "audioNarrationTrackId": "hs_natamandira_lintel",
        "transcripts": {
          "en": "The upper chlorite doorway opened into the columned hall where sacred devotional music resonated.",
          "kn": "ಕ್ಲೋರೈಟ್ ದ್ವಾರವು ಭಕ್ತಿ ಸಂಗೀತ ಮೊಳಗುತ್ತಿದ್ದ ಕಂಬಗಳ ಭವ್ಯ ಸಭಾಂಗಣಕ್ಕೆ ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.",
          "hi": "यह क्लोराइट द्वार उस स्तंभयुक्त मंडप की ओर खुलता था जहाँ भक्ति संगीत गूंजता था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_natamandira_lintel.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_natamandira_lintel.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_natamandira_lintel.mp3"
        }
      }
    ]
  },
  {
    "id": "konark_chariot_wheel",
    "sceneNumber": 3,
    "title": {
      "en": "Southern Chariot Plinth",
      "kn": "ಚಕ್ರಶಿಲಾ: ಸೂರ್ಯ ರಥದ ಅದ್ಭುತ ಕಾಲಚಕ್ರ",
      "hi": "चक्रशिला: सूर्य रथ का ऐतिहासिक कालचक्र एवं सूर्यघड़ी"
    },
    "subtitle": {
      "en": "Astronomical Masterpiece: 24 Wheels Calculating Solar Time with Shadow Precision",
      "kn": "ನೆರಳಿನಿಂದ ನಿಮಿಷಗಳ ನಿಖರತೆಯನ್ನು ಲೆಕ್ಕಹಾಕುವ ೨೪ ಬೃಹತ್ ಖಗೋಳ ಚಕ್ರಗಳು",
      "hi": "छाया की सूक्ष्मता से समय बताने वाले 24 विशाल खगोलीय रथ चक्र"
    },
    "thumbnailUrl": "/assets/monuments/konark/thumbnails/konark_03_chariot_wheel.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/konark/panoramas/konark_03_chariot_wheel.jpg",
      "initialOrientation": {
        "pitch": -10,
        "yaw": -13,
        "hfov": 90
      },
      "limits": {
        "minPitch": -18,
        "maxPitch": 18,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "konark_chariot_wheel_intro",
      "title": {
        "en": "The Great Sun Chariot Wheel",
        "kn": "ಸೂರ್ಯ ರಥದ ಮಹಾ ಕಾಲಚಕ್ರ",
        "hi": "सूर्य रथ का महान कालचक्र"
      },
      "durationSeconds": 45,
      "durationFormatted": "0:45",
      "audioSources": {
        "en": "/assets/monuments/konark/audio/en/konark_chariot_wheel_intro.mp3",
        "kn": "/assets/monuments/konark/audio/kn/konark_chariot_wheel_intro.mp3",
        "hi": "/assets/monuments/konark/audio/hi/konark_chariot_wheel_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to Kalachakra, the world-famous Sun Chariot Wheel of Konark. Masterminded in 1250 CE under the visionary direction of chief architect Bisu Maharana, this masterpiece conceptualizes the entire temple as the cosmic chariot of Surya pulled across the heavens by seven spirited horses. The twenty-four wheels symbolize the twenty-four fortnights of the Hindu solar year, functioning as an astronomical chronometer calculating solar time down to minutes based on cast shadows. Architecturally, the wheel features a nearly ten-foot diameter with beaded rim minute markers, eight major spokes carved with narrative medallions depicting daily life and deities, eight minor spokes, a central protruding axle pin gnomon, and the continuous basal Gajapitha elephant frieze.",
        "kn": "ಕೊನಾರ್ಕ್‌ನ ವಿಶ್ವವಿಖ್ಯಾತ ಸೂರ್ಯ ರಥದ ಚಕ್ರವಾದ ಕಾಲಚಕ್ರಕ್ಕೆ ಸ್ವಾಗತ. ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ಪ್ರಧಾನ ಶಿಲ್ಪಿ ಬಿಶು ಮಹಾರಾಣಾರ ನೇತೃತ್ವದಲ್ಲಿ ನಿರ್ಮಿತವಾದ ಈ ಮಹಾಕೃತಿಯು, ಇಡೀ ದೇವಾಲಯವನ್ನು ಸಪ್ತಾಶ್ವಗಳಿಂದ ಎಳೆಯಲ್ಪಡುವ ಸೂರ್ಯನ ದೈವಿಕ ರಥವನ್ನಾಗಿ ಪರಿಭಾವಿಸಿದೆ. ಇಲ್ಲಿನ ೨೪ ಚಕ್ರಗಳು ಸೌರ ವರ್ಷದ ೨೪ ಪಕ್ಷಗಳನ್ನು ಸಂಕೇತಿಸುತ್ತವೆ ಮತ್ತು ಸೂರ್ಯನ ನೆರಳಿನಿಂದ ನಿಮಿಷಗಳ ನಿಖರತೆಯೊಂದಿಗೆ ಸಮಯವನ್ನು ಲೆಕ್ಕಹಾಕುವ ಪ್ರಾಚೀನ ಸೂರ್ಯಘಡಿಯಾರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.",
        "hi": "कोणार्क के विश्वप्रसिद्ध सूर्य रथ चक्र कालचक्र में आपका स्वागत है। 1250 ईस्वी में प्रधान वास्तुकार बिशु महाराणा के मार्गदर्शन में निर्मित यह स्थापत्य चमत्कार संपूर्ण मंदिर को सात घोड़ों द्वारा खींचे जाने वाले सूर्य के दिव्य रथ के रूप में प्रस्तुत करता है। मंदिर के 24 चक्र वर्ष के 24 पक्षों का प्रतिनिधित्व करते हैं और सूर्य की छाया द्वारा मिनटों की सूक्ष्मता से समय बताने वाली सटीक धूपघड़ी के रूप में कार्य करते हैं।"
      }
    },
    "hotspots": [
      {
        "id": "sundial-axle-gnomon",
        "title": {
          "en": "Central Axle Hub & Solar Gnomon",
          "kn": "ಸೂರ್ಯನ ನೆರಳಿನಿಂದ ಸಮಯ ಅಳೆಯುವ ಕೇಂದ್ರ ಅಕ್ಷ",
          "hi": "समय मापक धूपघड़ी का केंद्रीय धुरा"
        },
        "category": "Astronomy",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -17.9,
            "yaw": -13.2,
            "hfov": 80
          }
        },
        "description": {
          "en": "The protruding center hub of the wheel, designed as the primary gnomon of the sundial.",
          "kn": "ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ನೆರಳು ಮೂಡಿಸುವ ಚಕ್ರದ ಕೇಂದ್ರ ಬಿಂದು.",
          "hi": "धूपघड़ी के मुख्य छाया सूचक के रूप में निर्मित चक्र का केंद्रीय अक्ष।"
        },
        "historicalSignificance": {
          "en": "Engineered in 1250 CE by royal astronomers combining Hindu Jyotisha mathematics with precision stonecraft.",
          "kn": "ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರ ಮತ್ತು ಶಿಲ್ಪಕಲೆಯನ್ನು ಸಂಯೋಜಿಸಿ ನಿರ್ಮಿಸಿದ ಖಗೋಳ ವಿಸ್ಮಯ.",
          "hi": "1250 ईस्वी में प्राचीन हिंदू ज्योतिषीय गणित एवं स्थापत्य के समन्वय से निर्मित।"
        },
        "architecturalDetails": {
          "en": "Carved with a central round boss and an axle pin relief, protruding outward so its shadow falls cleanly across adjacent spokes.",
          "kn": "ಮುಂದಕ್ಕೆ ಚಾಚಿಕೊಂಡಿರುವ ಈ ಕೇಂದ್ರ ಅಕ್ಷವು ಕಡ್ಡಿಗಳ ಮೇಲೆ ಸ್ಪಷ್ಟ ನೆರಳನ್ನು ಬೀಳಿಸಲು ಅನುಕೂಲಕರವಾಗಿದೆ.",
          "hi": "बाहर की ओर उभरा हुआ गोलाकार केंद्र, जिसकी छाया तीलियों पर स्पष्ट रूप से पड़ती है।"
        },
        "audioNarrationTrackId": "hs_axle_gnomon",
        "transcripts": {
          "en": "The central axle hub acts as a precise solar gnomon, casting shadows across the spokes to measure the passage of day and season.",
          "kn": "ಈ ಕೇಂದ್ರ ಅಕ್ಷವು ಸೂರ್ಯನ ನೆರಳಿನ ಮೂಲಕ ದಿನದ ಪ್ರತಿ ಗಳಿಗೆಯನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯುವ ಪ್ರಾಚೀನ ವಿಜ್ಞಾನದ ಪವಾಡವಾಗಿದೆ.",
          "hi": "यह केंद्रीय धुरा सटीक धूपघड़ी के रूप में कार्य करता है, जिसकी छाया से दिन और ऋतुओं का सटीक ज्ञान होता था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_axle_gnomon.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_axle_gnomon.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_axle_gnomon.mp3"
        }
      },
      {
        "id": "wheel-spokes-medallions",
        "title": {
          "en": "Major Spoke with Narrative Medallions",
          "kn": "ಕಡ್ಡಿಗಳಲ್ಲಿನ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳು ಮತ್ತು ಮಣಿಚಿತ್ರಗಳು",
          "hi": "तीलियों पर उत्कीर्ण सूक्ष्म जीवन वृत्त एवं आकृतियां"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -8.9,
            "yaw": -13.2,
            "hfov": 80
          }
        },
        "description": {
          "en": "Intricately sculpted major spoke radiating from the hub, detailed with circular narrative medallions.",
          "kn": "ಕೇಂದ್ರದಿಂದ ಹರಡುವ ಪ್ರಮುಖ ಕಡ್ಡಿ, ಇದರಲ್ಲಿ ವೃತ್ತಾಕಾರದ ಕಲಾತ್ಮಕ ಪದಕಗಳಿವೆ.",
          "hi": "धुरे से निकलती मुख्य तीली, जिस पर गोलाकार पदकों में कथाएं उकेरी गई हैं।"
        },
        "historicalSignificance": {
          "en": "The eight major spokes represent the eight divisions of the day, recording 13th-century daily courtly and domestic life.",
          "kn": "ಎಂಟು ಮುಖ್ಯ ಕಡ್ಡಿಗಳು ದಿನದ ಎಂಟು ಪ್ರಹರಗಳನ್ನು ಮತ್ತು ಅಂದಿನ ಸಾಮಾಜಿಕ ಜೀವನವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.",
          "hi": "आठ मुख्य तीलियां दिन के आठ प्रहरों और तत्कालीन सामाजिक-धार्मिक जीवन को दर्शाती हैं।"
        },
        "architecturalDetails": {
          "en": "Embellished with deep filigree carvings showing damsels, hunters, dancers, and ascetics intertwined with floral arabesques.",
          "kn": "ಬೇಟೆ, ನೃತ್ಯ, ಧ್ಯಾನ ಮುಂತಾದ ಮಾನವ ಜೀವನದ ವಿವಿಧ ಹಂತಗಳನ್ನು ಲತಾ-ಬಳ್ಳಿಗಳ ನಡುವೆ ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "शिकार, नृत्य, ध्यान और राजदरबार के दृश्यों को बारीक लता-पत्रावलियों के साथ तराशा गया है।"
        },
        "audioNarrationTrackId": "hs_wheel_spokes",
        "transcripts": {
          "en": "Each spoke medallion illustrates human activities corresponding to the morning, midday, and twilight hours of the day.",
          "kn": "ಪ್ರತಿ ಕಡ್ಡಿಯ ಮಣಿಚಿತ್ರವು ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆಯ ಮಾನವ ಚಟುವಟಿಕೆಗಳನ್ನು ಅದ್ಭುತವಾಗಿ ಚಿತ್ರಿಸುತ್ತದೆ.",
          "hi": "प्रत्येक तीली का पदक दिन के विभिन्न प्रहरों में होने वाली मानवीय व आध्यात्मिक गतिविधियों को सुंदरता से प्रदर्शित करता है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_wheel_spokes.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_wheel_spokes.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_wheel_spokes.mp3"
        }
      },
      {
        "id": "chariot-beaded-rim",
        "title": {
          "en": "Outer Wheel Rim & Minute Markers",
          "kn": "ನಿಮಿಷಗಳನ್ನು ಅಳೆಯಲು ಚಕ್ರದ ಅಂಚಿನಲ್ಲಿರುವ ಮಣಿಗಳು",
          "hi": "सूक्ष्म समय गणना हेतु परिधि पर अंकित मणियां"
        },
        "category": "Astronomy",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -16.5,
            "yaw": -29,
            "hfov": 80
          }
        },
        "description": {
          "en": "The circular outer rim of the 9.8-foot chariot wheel, studded with continuous carved beads.",
          "kn": "೯.೮ ಅಡಿ ವ್ಯಾಸದ ಬೃಹತ್ ಚಕ್ರದ ಹೊರ ಅಂಚಿನಲ್ಲಿರುವ ಕಲ್ಲಿನ ಮಣಿಗಳ ಸಾಲು.",
          "hi": "9.8 फीट व्यास वाले विशाल पहिए की परिधि पर तराशी गई मणियों की माला।"
        },
        "historicalSignificance": {
          "en": "Subdivided the time intervals between spokes into smaller segments corresponding to modern minutes and seconds.",
          "kn": "ಕಡ್ಡಿಗಳ ನಡುವಿನ ಸಮಯವನ್ನು ಇನ್ನೂ ಸೂಕ್ಷ್ಮ ನಿಮಿಷಗಳಾಗಿ ವಿಭಾಗಿಸಲು ಈ ಮಣಿಗಳನ್ನು ಬಳಸಲಾಗುತ್ತಿತ್ತು.",
          "hi": "तीलियों के बीच के अंतराल को सूक्ष्म समय इकाइयों (मिनटों) में विभाजित करने वाली तकनीक।"
        },
        "architecturalDetails": {
          "en": "Carved with two concentric bands of thirty beads each, bordered by beaded pearls and stylized lotus leaf mouldings.",
          "kn": "ಮೂವತ್ತು ಮಣಿಗಳ ಎರಡು ಸಾಲುಗಳು ಮತ್ತು ಕಮಲದ ದಳಗಳ ಸುಂದರ ವಿನ್ಯಾಸದಿಂದ ಕೂಡಿದೆ.",
          "hi": "तीस-तीस मणियों की दो संकेंद्रित पट्टियां और कमल दलों की सुंदर नक्काशी।"
        },
        "audioNarrationTrackId": "hs_beaded_rim",
        "transcripts": {
          "en": "The beads along the outer rim permitted astronomers to measure time down to three-minute increments.",
          "kn": "ಹೊರ ಅಂಚಿನಲ್ಲಿರುವ ಮಣಿಗಳು ಪ್ರಾಚೀನರಿಗೆ ಮೂರು ನಿಮಿಷಗಳ ನಿಖರತೆಯೊಂದಿಗೆ ಸಮಯವನ್ನು ಅಳೆಯಲು ಅನುಮತಿಸಿದವು.",
          "hi": "बाहरी परिधि पर बनी मणियों की सहायता से तीन मिनट की सूक्ष्मता तक समय मापा जा सकता था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_beaded_rim.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_beaded_rim.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_beaded_rim.mp3"
        }
      },
      {
        "id": "gajapitha-base-frieze",
        "title": {
          "en": "Gajapitha — Continuous Elephant Plinth",
          "kn": "೧೪೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಜೀವಂತ ಗಜ ಶಿಲ್ಪಗಳ ಪೀಠ",
          "hi": "1400 से अधिक हाथियों की अखंड पाषाण पट्टिका"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -36,
            "yaw": -55,
            "hfov": 80
          }
        },
        "description": {
          "en": "Continuous basement relief band running beneath the chariot wheels depicting spirited elephants.",
          "kn": "ಚಕ್ರಗಳ ಕೆಳಭಾಗದಲ್ಲಿ ಸಾಗುವ ಜೀವಂತ ಆನೆಗಳ ಸಾಲು.",
          "hi": "पहियों के नीचे मंदिर के आधार पर बनी हाथियों की विशाल अखंड पाषाण पट्टिका।"
        },
        "historicalSignificance": {
          "en": "Celebrated the military strength of the Eastern Ganga kings, famed across India as the imperial Gajapatis.",
          "kn": "ಗಂಗ ರಾಜವಂಶದ \"ಗಜಪತಿ\" ರಾಜರ ಅಪ್ರತಿಮ ಗಜಸೈನ್ಯದ ಶಕ್ತಿಯನ್ನು ಸಾರುವ ಸ್ಮಾರಕ.",
          "hi": "गंग साम्राज्य के गौरवशाली \"गजपति\" शासकों की गजसेना के शौर्य का प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Depicts wild elephants captured in Kalinga jungles, trained, and marching in war processions with royal mahouts.",
          "kn": "ಕಾಡಿನಿಂದ ಆನೆಗಳನ್ನು ಸೆರೆಹಿಡಿಯುವುದು, ಪಳಗಿಸುವುದು ಮತ್ತು ಯುದ್ಧಕ್ಕೆ ಸಾಗುವ ದೃಶ್ಯಗಳನ್ನು ಕಲಾತ್ಮಕವಾಗಿ ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "जंगली हाथियों को पकड़ने, प्रशिक्षित करने और युद्ध में प्रयाण करने के विविध दृश्य।"
        },
        "audioNarrationTrackId": "hs_gajapitha_frieze",
        "transcripts": {
          "en": "Over one thousand four hundred dynamic elephants march along the base, supporting the cosmic weight of the Sun Temple.",
          "kn": "೧,೪೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಆನೆಗಳು ದೇವಾಲಯದ ಬ್ರಹ್ಮಾಂಡದ ತೂಕವನ್ನು ಹೊತ್ತು ಸಾಗುವಂತೆ ಕೆತ್ತಲ್ಪಟ್ಟಿವೆ.",
          "hi": "1400 से अधिक हाथी मंदिर के आधार को सुशोभित करते हुए ब्रह्मांडीय भार को संभाले हुए हैं।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_gajapitha_frieze.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_gajapitha_frieze.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_gajapitha_frieze.mp3"
        }
      }
    ]
  },
  {
    "id": "konark_warhorses",
    "sceneNumber": 4,
    "title": {
      "en": "Southern Grounds / War Horses",
      "kn": "ಅಶ್ವಶಿಲಾ: ಕಳಿಂಗ ಯುದ್ಧದ ಮಹಾ ಅಶ್ವಗಳು",
      "hi": "अश्वशिला: पराक्रमी कलिंग युद्ध अश्व"
    },
    "subtitle": {
      "en": "Monolithic Sculptures of Unbridled Martial Vigor & Dynastic Pride",
      "kn": "ಕಳಿಂಗ ಸಾಮ್ರಾಜ್ಯದ ಪರಾಕ್ರಮ ಮತ್ತು ರಾಜಶಕ್ತಿಯನ್ನು ಸಾರುವ ಬೃಹತ್ ಏಕಶಿಲಾ ಅಶ್ವಗಳು",
      "hi": "कलिंग साम्राज्य के अदम्य पराक्रम एवं सैन्य शक्ति के प्रतीक एकाश्म युद्ध अश्व"
    },
    "thumbnailUrl": "/assets/monuments/konark/thumbnails/konark_04_warhorses.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/konark/panoramas/konark_04_warhorses.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 20,
        "hfov": 90
      },
      "limits": {
        "minPitch": -18,
        "maxPitch": 18,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "konark_warhorses_intro",
      "title": {
        "en": "Ashwashila War Stallions",
        "kn": "ಅಶ್ವಶಿಲಾ ಯುದ್ಧದ ಅಶ್ವಗಳು",
        "hi": "अश्वशिला युद्ध अश्व"
      },
      "durationSeconds": 45,
      "durationFormatted": "0:45",
      "audioSources": {
        "en": "/assets/monuments/konark/audio/en/konark_warhorses_intro.mp3",
        "kn": "/assets/monuments/konark/audio/kn/konark_warhorses_intro.mp3",
        "hi": "/assets/monuments/konark/audio/hi/konark_warhorses_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to Ashwashila, the monumental Kalinga War Stallions of Konark. Sculpted around 1250 CE from massive blocks of khondalite stone, these statues were placed to guard the royal temple perimeter following King Narasimhadeva I's triumphant military campaigns that repelled northern invasions. Historically, these battle horses embody the unyielding martial spirit, sovereign pride, and imperial valor of the Eastern Ganga Empire, and have been officially adopted as the State Emblem of the Government of Odisha. The sculpture features two colossal war stallions depicted in ferocious motion, with flared nostrils, muscular anatomy, studded armor trappings, and decorative bells, trampling defeated foes upon elevated stone platforms against the backdrop of the Jagamohana.",
        "kn": "ಕೊನಾರ್ಕ್‌ನ ಪ್ರಸಿದ್ಧ ಯುದ್ಧದ ಅಶ್ವಗಳಾದ ಅಶ್ವಶಿಲಾಕ್ಕೆ ಸ್ವಾಗತ. ಕ್ರಿ.ಶ. ೧೨೫೦ರಲ್ಲಿ ಬೃಹತ್ ಖೊಂಡಾಲೈಟ್ ಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಈ ಕುದುರೆಗಳನ್ನು, ಉತ್ತರ ಭಾರತದ ಆಕ್ರಮಣಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಹಿಮ್ಮೆಟ್ಟಿಸಿದ ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವರ ಸೈನ್ಯ ವಿಜಯದ ಸ್ಮರಣಾರ್ಥ ದೇವಾಲಯದ ದಕ್ಷಿಣ ರಕ್ಷಕರನ್ನಾಗಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಈ ಅಶ್ವಗಳು ಪೂರ್ವ ಗಂಗ ಸಾಮ್ರಾಜ್ಯದ ಅಪ್ರತಿಮ ಶೌರ್ಯ, ರಾಜಗೌರವ ಮತ್ತು ಸೈನ್ಯ ಶಕ್ತಿಯ ಸಂಕೇತವಾಗಿದ್ದು, ಇವುಗಳನ್ನು ಒಡಿಶಾ ಸರ್ಕಾರವು ತನ್ನ ಅಧಿಕೃತ ರಾಜ್ಯ ಲಾಂಛನವನ್ನಾಗಿ ಅಳವಡಿಸಿಕೊಂಡಿದೆ.",
        "hi": "कोणार्क के प्रसिद्ध युद्ध अश्व अश्वशिला में आपका स्वागत है। लगभग 1250 ईस्वी में विशाल खोंडालाइट पाषाण खंडों से तराशे गए ये अश्व, विदेशी आक्रमणों को परास्त करने वाले राजा नरसिंहदेव प्रथम के ऐतिहासिक सैन्य विजय के उपलक्ष्य में मंदिर के दक्षिण में स्थापित किए गए थे। यह युद्ध अश्व पूर्वी गंग साम्राज्य के अदम्य शौर्य, सैन्य शक्ति और संप्रभुता के प्रतीक हैं, जिन्हें ओडिशा सरकार ने अपना आधिकारिक राज्य प्रतीक बनाया है।"
      }
    },
    "hotspots": [
      {
        "id": "western-war-horse",
        "title": {
          "en": "Ashwashila — The Kalinga War Stallion",
          "kn": "ಕಳಿಂಗ ಸಾಮ್ರಾಜ್ಯದ ಯುದ್ಧ ವಿಜಯವನ್ನು ಸಾರುವ ಏಕಶಿಲಾ ಅಶ್ವ",
          "hi": "साम्राज्यिक विजय का प्रतीक एकाश्म युद्ध अश्व"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 11.3,
            "yaw": -4,
            "hfov": 80
          }
        },
        "description": {
          "en": "Colossal stone battle horse captured in high tension, trampling a fallen enemy warrior.",
          "kn": "ಶತ್ರು ಸೈನಿಕನನ್ನು ಮೆಟ್ಟಿ ನಿಂತಿರುವ ಬೃಹತ್ ಮತ್ತು ಪ್ರಚಂಡ ಏಕಶಿಲಾ ಯುದ್ಧದ ಕುದುರೆ.",
          "hi": "शत्रु योद्धा को पैरों तले रौंदता हुआ प्रचंड गति और शक्ति से युक्त एकाश्म युद्ध अश्व।"
        },
        "historicalSignificance": {
          "en": "Celebrates King Narasimhadeva I’s triumphant military campaigns that repelled northern invasions around 1245 CE.",
          "kn": "ಕ್ರಿ.ಶ. ೧೨೪೫ರಲ್ಲಿ ಬಂಗಾಳದ ಆಕ್ರಮಣಗಳನ್ನು ಹಿಮ್ಮೆಟ್ಟಿಸಿದ ರಾಜ ನರಸಿಂಹದೇವರ ವಿಜಯದ ಸ್ಮರಣಾರ್ಥ ನಿರ್ಮಿಸಲಾಯಿತು.",
          "hi": "1245 ईस्वी के लगभग विदेशी आक्रमणों को परास्त करने वाले राजा नरसिंहदेव प्रथम के शौर्य का स्मारक।"
        },
        "architecturalDetails": {
          "en": "Carved with flared nostrils, bulging veins, studded saddle trappings, ornamental armor chains, and warrior attendant.",
          "kn": "ಉಬ್ಬಿದ ರಕ್ತನಾಳಗಳು, ಯುದ್ಧ ಕವಚ, ಅಲಂಕೃತ ಸರಪಳಿಗಳು ಮತ್ತು ಸೈನಿಕ ಸಹಾಯಕನೊಂದಿಗೆ ಅತ್ಯಂತ ನೈಜವಾಗಿ ಕಡೆಯಲಾಗಿದೆ.",
          "hi": "फुदकती नसें, चौड़े नथुने, भारी जिरहबख्तर की जंजीरें और साथ में खड़े योद्धा का सजीव पाषाण अंकन।"
        },
        "audioNarrationTrackId": "hs_western_horse",
        "transcripts": {
          "en": "The War Horse of Konark is one of the greatest masterpieces of Indian martial sculpture, chosen as the official emblem of the State of Odisha.",
          "kn": "ಕೊನಾರ್ಕ್‌ನ ಈ ಯುದ್ಧದ ಅಶ್ವವು ಭಾರತೀಯ ಶಿಲ್ಪಕಲೆಯ ಮಹೋನ್ನತ ಮೇರುಕೃತಿಯಾಗಿದ್ದು, ಒಡಿಶಾ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಲಾಂಛನವಾಗಿದೆ.",
          "hi": "कोणार्क का यह युद्ध अश्व भारतीय मूर्तिकला का अप्रतिम उदाहरण है और आज ओडिशा सरकार का आधिकारिक प्रतीक चिह्न है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_western_horse.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_western_horse.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_western_horse.mp3"
        }
      },
      {
        "id": "eastern-companion-horse",
        "title": {
          "en": "Companion Battle Stallion",
          "kn": "ಯುದ್ಧ ಶೌರ್ಯವನ್ನು ಸಾರುವ ಎರಡನೆಯ ಬೃಹತ್ ಅಶ್ವ ಶಿಲ್ಪ",
          "hi": "अदम्य शौर्य का प्रतीक दूसरा विशाल युद्ध अश्व"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 10.5,
            "yaw": 47,
            "hfov": 80
          }
        },
        "description": {
          "en": "Matching colossal monolithic war horse facing across the stone terrace.",
          "kn": "ವೇದಿಕೆಯ ಇನ್ನೊಂದು ಬದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಸರಿಸಮನಾದ ಬೃಹತ್ ಏಕಶಿಲಾ ಕುದುರೆ.",
          "hi": "चबूतरे के दूसरी ओर स्थित समान रूप से विशाल दूसरा एकाश्म युद्ध अश्व।"
        },
        "historicalSignificance": {
          "en": "Formed part of the grand monumental perimeter defenses surrounding the celestial Sun chariot.",
          "kn": "ಸೂರ್ಯ ರಥದ ಸುತ್ತಲೂ ರಕ್ಷಣೆಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ಭವ್ಯ ಸ್ಮಾರಕ ಜೋಡಿಯ ಭಾಗವಾಗಿದೆ.",
          "hi": "सूर्य रथ के प्रांगण की सुरक्षा हेतु स्थापित भव्य रक्षक अश्व युग्म का दूसरा भाग।"
        },
        "architecturalDetails": {
          "en": "Exhibits dynamic forward momentum, ornate martingale, girth straps, and tasseled bridle carvings.",
          "kn": "ಮುನ್ನುಗ್ಗುವ ರಭಸ, ಕುತ್ತಿಗೆಯ ಅಲಂಕೃತ ಪಟ್ಟಿಗಳು ಮತ್ತು ಲಗಾಮಿನ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "आगे झपटती गति, छाती के सुंदर पट्टे और अलंकृत लगाम की बारीक कारीगरी।"
        },
        "audioNarrationTrackId": "hs_eastern_horse",
        "transcripts": {
          "en": "This companion battle stallion mirrors the first in scale, embodying the invincible military prestige of 13th-century Kalinga.",
          "kn": "ಈ ಅಶ್ವವು ಮೊದಲನೆಯ ಕುದುರೆಗೆ ಸರಿಸಮನಾಗಿದ್ದು, ೧೩ನೇ ಶತಮಾನದ ಕಳಿಂಗ ಸಾಮ್ರಾಜ್ಯದ ಅಜೇಯ ಸೈನ್ಯ ಬಲವನ್ನು ಸಾರುತ್ತದೆ.",
          "hi": "यह दूसरा अश्व भी समान रूप से विशाल है, जो 13वीं सदी के कलिंग साम्राज्य के अजेय सैन्य गौरव को दर्शाता है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_eastern_horse.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_eastern_horse.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_eastern_horse.mp3"
        }
      },
      {
        "id": "horse-terrace-plinth",
        "title": {
          "en": "Stepped Equestrian Platform",
          "kn": "ಅಶ್ವಗಳನ್ನು ಎತ್ತಿಹಿಡಿಯುವ ಭವ್ಯ ಕಲ್ಲಿನ ವೇದಿಕೆ",
          "hi": "अश्व प्रतिमाओं को थामने वाला विशाल प्रस्तर चबूतरा"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -10,
            "yaw": 20,
            "hfov": 80
          }
        },
        "description": {
          "en": "Battered stone terrace platform elevating the two war horses high above the lawn perimeter.",
          "kn": "ಕುದುರೆಗಳನ್ನು ಎಲ್ಲರಿಗೂ ಗೋಚರಿಸುವಂತೆ ಎತ್ತರದಲ್ಲಿ ನಿಲ್ಲಿಸಿರುವ ಕಲ್ಲಿನ ಭದ್ರ ವೇದಿಕೆ.",
          "hi": "अश्व मूर्तियों को प्रांगण से ऊपर उठाकर भव्यता प्रदान करने वाला विशाल पाषाण चबूतरा।"
        },
        "historicalSignificance": {
          "en": "Stabilized and rebuilt by archaeological conservators to protect the heavy monolithic statues from sinking into coastal sands.",
          "kn": "ಬೃಹತ್ ಶಿಲ್ಪಗಳು ಮರಳಿನಲ್ಲಿ ಕುಸಿಯದಂತೆ ಪುರಾತತ್ವ ಇಲಾಖೆಯಿಂದ ಬಲಪಡಿಸಲಾದ ಐತಿಹಾಸಿಕ ವೇದಿಕೆ.",
          "hi": "विशाल मूर्तियों को रेतीली भूमि में धंसने से बचाने हेतु पुरातत्वविदों द्वारा सुदृढ़ किया गया चबूतरा।"
        },
        "architecturalDetails": {
          "en": "Built with stepped ashlar sandstone blocks forming a monumental podium with wide central stairway.",
          "kn": "ಮೆಟ್ಟಿಲುಗಳೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾದ ಮರಳುಗಲ್ಲಿನ ಬಲಿಷ್ಠ ವೇದಿಕೆ.",
          "hi": "तराशे गए बलुआ पत्थर के विशाल शिलाखंडों और चौड़ी सीढ़ियों से निर्मित।"
        },
        "audioNarrationTrackId": "hs_horse_terrace",
        "transcripts": {
          "en": "The stepped platform elevates the stallions, emphasizing their monumental scale against the temple backdrop.",
          "kn": "ಈ ಮೆಟ್ಟಿಲುಗಳ ವೇದಿಕೆಯು ಕುದುರೆಗಳ ಭವ್ಯತೆಯನ್ನು ದೇವಾಲಯದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಇನ್ನಷ್ಟು ಎತ್ತಿಹಿಡಿಯುತ್ತದೆ.",
          "hi": "यह ऊंचा चबूतरा मंदिर की पृष्ठभूमि में अश्वों के विशालकाय स्वरूप को और अधिक प्रभावशाली बनाता है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_horse_terrace.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_horse_terrace.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_horse_terrace.mp3"
        }
      },
      {
        "id": "distant-sanctuary-profile",
        "title": {
          "en": "Western Sanctuary Perspective",
          "kn": "ತೆಂಗಿನ ಮರಗಳ ನಡುವೆ ಕಂಗೊಳಿಸುವ ಜಗಮೋಹನದ ಪಶ್ಚಿಮ ನೋಟ",
          "hi": "तटीय वृक्षों के मध्य जगमोहन का पश्चिमी विहंगम दृश्य"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 16.6,
            "yaw": -162.5,
            "hfov": 80
          }
        },
        "description": {
          "en": "Distant profile of the Jagamohana pyramid rising above the lush green lawns and coconut groves.",
          "kn": "ಹಸಿರು ಹುಲ್ಲುಹಾಸು ಮತ್ತು ತೆಂಗಿನ ಮರಗಳ ನಡುವೆ ಗಂಭೀರವಾಗಿ ಎದ್ದು ನಿಲ್ಲುವ ಜಗಮೋಹನದ ಶಿಖರ.",
          "hi": "हरे-भरे प्रांगण और नारियल के वृक्षों के बीच से दिखाई देता जगमोहन का भव्य शिखर।"
        },
        "historicalSignificance": {
          "en": "Illustrates the vast spatial relationship between the outer sentinel statues and the core sanctuary.",
          "kn": "ಬಾಹ್ಯ ರಕ್ಷಕ ಶಿಲ್ಪಗಳು ಮತ್ತು ಮುಖ್ಯ ಗರ್ಭಗುಡಿಯ ನಡುವಿನ ಬೃಹತ್ ಅಂತರ ಮತ್ತು ಸಂಬಂಧವನ್ನು ತೋರಿಸುತ್ತದೆ.",
          "hi": "बाहरी रक्षक प्रतिमाओं और मुख्य देवालय के बीच के विशाल वास्तुशिल्पीय संयोजन का प्रमाण।"
        },
        "architecturalDetails": {
          "en": "The stepped pyramidal roof (Pidha Deula) is clearly visible in silhouette against the coastal sky.",
          "kn": "ಕರಾವಳಿ ಆಕಾಶದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಜಗಮೋಹನದ ಪಿರಮಿಡ್ ಆಕಾರದ ಮೇಲ್ಛಾವಣಿಯು ಭವ್ಯವಾಗಿ ಗೋಚರಿಸುತ್ತದೆ.",
          "hi": "आकाश की पृष्ठभूमि में जगमोहन की पिरामिडनुमा छत का सुंदर क्षितिज दृश्य।"
        },
        "audioNarrationTrackId": "hs_distant_sanctuary",
        "transcripts": {
          "en": "From here, the entire monument takes the silhouette of Surya’s cosmic chariot galloping towards eternity.",
          "kn": "ಇಲ್ಲಿಂದ ಇಡೀ ದೇವಾಲಯವು ಕಾಲದ ಅನಂತತೆಯತ್ತ ಸಾಗುವ ಸೂರ್ಯ ದೇವರ ರಥದಂತೆ ಗೋಚರಿಸುತ್ತದೆ.",
          "hi": "यहाँ से संपूर्ण मंदिर सूर्य के उस दिव्य रथ जैसा दिखाई देता है जो अनंत काल की ओर अग्रसर है।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_distant_sanctuary.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_distant_sanctuary.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_distant_sanctuary.mp3"
        }
      }
    ]
  },
  {
    "id": "konark_bhogamandapa",
    "sceneNumber": 5,
    "title": {
      "en": "Southeast Kitchen / Sacred Well",
      "kn": "ಭೋಗಮಂಟಪ ಮತ್ತು ಗರ್ಭಗುಡಿ ವಿಸ್ತಾರ ನೋಟ",
      "hi": "भोगमंडप एवं महामंदिर विहंगम दृश्य"
    },
    "subtitle": {
      "en": "Panoramic Vista of the Triple-Tiered Jagamohana Pyramid & Offering Pavilion",
      "kn": "ಮೂರು ಹಂತಗಳ ಜಗಮೋಹನ ಪಿರಮಿಡ್ ಹಾಗೂ ಪವಿತ್ರ ಭೋಗಮಂಟಪದ ವಿಸ್ತಾರ ನೋಟ",
      "hi": "तीन स्तरीय जगमोहन पिरामिड एवं पवित्र भोगमंडप का विहंगम परिप्रेक्ष्य"
    },
    "thumbnailUrl": "/assets/monuments/konark/thumbnails/konark_05_bhogamandapa.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/konark/panoramas/konark_05_bhogamandapa.jpg",
      "initialOrientation": {
        "pitch": 4,
        "yaw": -25,
        "hfov": 90
      },
      "limits": {
        "minPitch": -18,
        "maxPitch": 18,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "konark_bhogamandapa_intro",
      "title": {
        "en": "Bhogamandapa & Grand Sanctuary Vista",
        "kn": "ಭೋಗಮಂಟಪ ಹಾಗೂ ಗರ್ಭಗುಡಿ ವಿಸ್ತಾರ ನೋಟ",
        "hi": "भोगमंडप एवं देवालय विहंगम दृश्य"
      },
      "durationSeconds": 45,
      "durationFormatted": "0:45",
      "audioSources": {
        "en": "/assets/monuments/konark/audio/en/konark_bhogamandapa_intro.mp3",
        "kn": "/assets/monuments/konark/audio/kn/konark_bhogamandapa_intro.mp3",
        "hi": "/assets/monuments/konark/audio/hi/konark_bhogamandapa_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to the Bhogamandapa Vista, offering a panoramic perspective of the surviving heart of Konark. Commissioned in the mid-13th century during King Narasimhadeva I's golden reign, this vista encompasses the consecrated refectory hall alongside the colossal Jagamohana assembly hall. Historically, the Bhogamandapa served as the sacred hall where royal food offerings, or Mahaprasad, were consecrated before the Sun God, while the Jagamohana stands as the only surviving intact major superstructure of the entire sanctuary complex. Prominent architectural landmarks visible here include the 128-foot stepped pyramidal roof—the Pidha Deula—articulated into three horizontal tiers decorated with life-sized chlorite statues of celestial female musicians, the ongoing Archaeological Survey of India structural conservation scaffolding, and the pillared plinth ruins of the Bhogamandapa.",
        "kn": "ಭೋಗಮಂಟಪ ಮತ್ತು ಕೊನಾರ್ಕ್ ದೇವಾಲಯದ ಭವ್ಯ ವಿಸ್ತಾರ ನೋಟಕ್ಕೆ ಸ್ವಾಗತ. ೧೩ನೇ ಶತಮಾನದಲ್ಲಿ ರಾಜ ಒಂದನೇ ನರಸಿಂಹದೇವರ ಆಳ್ವಿಕೆಯಲ್ಲಿ ನಿರ್ಮಿತವಾದ ಈ ನೋಟವು, ಸೂರ್ಯ ದೇವರಿಗೆ ನೈವೇದ್ಯ ಅರ್ಪಿಸುವ ಭೋಗಮಂಟಪ ಮತ್ತು ಬೃಹತ್ ಜಗಮೋಹನ ಸಭಾಂಗಣವನ್ನು ಒಟ್ಟಿಗೆ ಪ್ರದರ್ಶಿಸುತ್ತದೆ. ಭೋಗಮಂಟಪವು ಮಹಾಪ್ರಸಾದವನ್ನು ಸಮರ್ಪಿಸುವ ಪವಿತ್ರ ಸ್ಥಳವಾಗಿದ್ದರೆ, ಜಗಮೋಹನವು ಕೊನಾರ್ಕ್ ಸಂಕೀರ್ಣದಲ್ಲಿ ಇಂದಿಗೂ ಸುಭದ್ರವಾಗಿ ಉಳಿದಿರುವ ಏಕೈಕ ಬೃಹತ್ ಗೋಪುರವಾಗಿದೆ.",
        "hi": "भोगमंडप विहंगम दृश्य में आपका स्वागत है, जहाँ से कोणार्क के मुख्य देवालय का भव्य स्वरूप दिखाई देता है। 13वीं शताब्दी में राजा नरसिंहदेव प्रथम द्वारा निर्मित यह परिसर प्रसाद अर्पण के भोगमंडप और विशाल जगमोहन सभा मंडप को समाहित करता है। ऐतिहासिक रूप से भोगमंडप वह पावन स्थल था जहाँ भगवान सूर्य को महाप्रसाद समर्पित किया जाता था, जबकि जगमोहन आज कोणार्क का एकमात्र सुरक्षित बचा हुआ विशालकाय मुख्य ढांचा है।"
      }
    },
    "hotspots": [
      {
        "id": "pidha-deula-pyramid",
        "title": {
          "en": "Stepped Pyramidal Roof (Pidha Deula)",
          "kn": "ಮೂರು ಹಂತಗಳ ಪಿರಮಿಡ್ ಮೇಲ್ಛಾವಣಿ ಮತ್ತು ಸಂಗೀತಗಾರ ಸ್ತ್ರೀಯರು",
          "hi": "तीन स्तरीय पिरामिडनुमा छत एवं संगीत वादिकाएं"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 18.8,
            "yaw": -53.4,
            "hfov": 80
          }
        },
        "description": {
          "en": "Monumental stepped pyramidal roof of the Jagamohana rising in three distinct tiers (potalas).",
          "kn": "ಮೂರು ಹಂತಗಳಲ್ಲಿ ಆಕಾಶದೆತ್ತರಕ್ಕೆ ಏರುವ ಜಗಮೋಹನದ ಭವ್ಯ ಪಿರಮಿಡ್ ಮೇಲ್ಛಾವಣಿ.",
          "hi": "तीन चरणों में ऊपर उठती जगमोहन की विशालकाय पिरामिडनुमा छत।"
        },
        "historicalSignificance": {
          "en": "Constructed under chief architect Bishu Maharana, engineered with horizontal corbelled courses spanning vast interior space.",
          "kn": "ಪ್ರಧಾನ ವಾಸ್ತುಶಿಲ್ಪಿ ಬಿಶು ಮಹಾರಾಣಾರ ನೇತೃತ್ವದಲ್ಲಿ ಕಲ್ಲುಗಳನ್ನು ಒಂದರ ಮೇಲೊಂದು ಜೋಡಿಸಿ ನಿರ್ಮಿಸಿದ ಶಿಲ್ಪ ವೈಭವ.",
          "hi": "प्रधान वास्तुकार बिशु महाराणा के निर्देशन में निर्मित पाषाण-संतुलन का उत्कृष्ट उदाहरण।"
        },
        "architecturalDetails": {
          "en": "Adorned with sixteen life-sized chlorite statues of celestial female musicians (alasakanyas) playing cymbals, mridangam drums, and conch shells.",
          "kn": "ತಾಳ, ಮೃದಂಗ, ಶಂಖ ನುಡಿಸುವ ಹದಿನಾರು ಆಕರ್ಷಕ ಸ್ತ್ರೀ ಸಂಗೀತಗಾರರ ಶಿಲ್ಪಗಳಿಂದ ಅಲಂಕೃತಗೊಂಡಿದೆ.",
          "hi": "मंजीरा, ढोल और शंख बजाती 16 आदमकद संगीत वादिकाओं की मूर्तियों से सुशोभित।"
        },
        "audioNarrationTrackId": "hs_pidha_pyramid",
        "transcripts": {
          "en": "Look upward at the tiered pyramidal roof crowned by the sacred Kalasha and Amalaka, decorated with monumental sculptures of female musicians.",
          "kn": "ಮೇಲ್ಛಾವಣಿಯ ಮೂರು ಹಂತಗಳನ್ನು ಗಮನಿಸಿ, ಅಲ್ಲಿ ಸಂಗೀತಗಾರ ಸ್ತ್ರೀಯರ ಶಿಲ್ಪಗಳು ಆಕಾಶದತ್ತ ಕಂಗೊಳಿಸುತ್ತವೆ.",
          "hi": "पिरामिडनुमा इस छत के विभिन्न स्तरों पर संगीत वादिकाओं की अद्वितीय मूर्तियां सूर्य देव के सम्मान में स्थापित हैं।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_pidha_pyramid.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_pidha_pyramid.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_pidha_pyramid.mp3"
        }
      },
      {
        "id": "asi-conservation-scaffold",
        "title": {
          "en": "Structural Conservation & Sand-Filling Zone",
          "kn": "ಭಾರತೀಯ ಪುರಾತತ್ವ ಇಲಾಖೆಯ ಸಂರಕ್ಷಣಾ ಕಾರ್ಯ",
          "hi": "भारतीय पुरातत्व सर्वेक्षण (ASI) का संरक्षण कार्य"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 9.1,
            "yaw": -66.2,
            "hfov": 80
          }
        },
        "description": {
          "en": "The conservation area protecting the interior corbelled vaults and massive wrought-iron beams.",
          "kn": "ಜಗಮೋಹನದ ಒಳಗಿನ ಕಲ್ಲುಗಳನ್ನು ಮತ್ತು ಪ್ರಾಚೀನ ಕಬ್ಬಿಣದ ತೊಲೆಗಳನ್ನು ರಕ್ಷಿಸುವ ಸಂರಕ್ಷಣಾ ವಲಯ.",
          "hi": "जगमोहन के आंतरिक मेहराबों और विशाल लौह धरनों को सुरक्षित रखने वाला संरक्षण क्षेत्र।"
        },
        "historicalSignificance": {
          "en": "In 1903, British engineer T. Bloch and the Archaeological Survey of India packed the interior with sand to halt ceiling collapse.",
          "kn": "೧೯೦೩ರಲ್ಲಿ ಕುಸಿಯುವ ಅಪಾಯದಲ್ಲಿದ್ದ ಜಗಮೋಹನದ ಒಳಭಾಗಕ್ಕೆ ಮರಳನ್ನು ತುಂಬಿಸಿ ಶಾಶ್ವತವಾಗಿ ಸಂರಕ್ಷಿಸಲಾಯಿತು.",
          "hi": "1903 में छत को ढहने से बचाने के लिए आंतरिक भाग को बालू से भरकर सील किया गया था।"
        },
        "architecturalDetails": {
          "en": "Original ceiling supported by forged wrought-iron beams weighing several tons each, demonstrating 13th-century metallurgical mastery.",
          "kn": "ಹಲವು ಟನ್ ತೂಕದ ಶುದ್ಧ ಕಬ್ಬಿಣದ ತೊಲೆಗಳನ್ನು ಬಳಸಿ ನಿರ್ಮಿಸಲಾಗಿದ್ದ ಛಾವಣಿಯು ಪ್ರಾಚೀನ ಲೋಹಶಾಸ್ತ್ರದ ಅದ್ಭುತವಾಗಿದೆ.",
          "hi": "कई टन भारी शुद्ध लौह धरनों का प्रयोग, जो 13वीं सदी के धातु विज्ञान के उच्च स्तर को दर्शाता है।"
        },
        "audioNarrationTrackId": "hs_asi_scaffold",
        "transcripts": {
          "en": "This massive conservation effort saved the 700-year-old assembly hall for future generations.",
          "kn": "ಈ ಬೃಹತ್ ಸಂರಕ್ಷಣಾ ಕಾರ್ಯವು ೭೦೦ ವರ್ಷಗಳ ಪ್ರಾಚೀನ ಸಭಾಂಗಣವನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಉಳಿಸಿದೆ.",
          "hi": "इस ऐतिहासिक संरक्षण प्रयास ने 700 वर्ष पुराने इस वास्तु चमत्कार को भावी पीढ़ियों के लिए सुरक्षित रखा।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_asi_scaffold.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_asi_scaffold.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_asi_scaffold.mp3"
        }
      },
      {
        "id": "bhogamandapa-plinth",
        "title": {
          "en": "Bhogamandapa Plinth & Offering Steps",
          "kn": "ನೈವೇದ್ಯ ಸಮರ್ಪಣೆಯ ಭೋಗಮಂಟಪದ ಅಧಿಷ್ಠಾನ",
          "hi": "पवित्र भोग अर्पण का भोगमंडप चबूतरा"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2.3,
            "yaw": 154,
            "hfov": 80
          }
        },
        "description": {
          "en": "Elevated stone plinth of the Bhogamandapa where consecrated food was offered before worship.",
          "kn": "ಸೂರ್ಯ ದೇವರಿಗೆ ಮಹಾಪ್ರಸಾದವನ್ನು ಸಮರ್ಪಿಸುತ್ತಿದ್ದ ಭೋಗಮಂಟಪದ ಎತ್ತರದ ಕಲ್ಲಿನ ವೇದಿಕೆ.",
          "hi": "सूर्य देव को महाप्रसाद अर्पित करने हेतु निर्मित भोगमंडप का ऊंचा पाषाण मंच।"
        },
        "historicalSignificance": {
          "en": "Constructed as the fourth major architectural component of the grand Kalinga temple axis.",
          "kn": "ಕಳಿಂಗ ದೇವಾಲಯದ ನಾಲ್ಕು ಪ್ರಮುಖ ಅಂಗಗಳಲ್ಲಿ ನಾಲ್ಕನೆಯದಾದ ಪವಿತ್ರ ನೈವೇದ್ಯ ಸಭಾಂಗಣ.",
          "hi": "कलिंग देवालय अक्ष के चार प्रमुख घटकों में से चौथा महत्वपूर्ण प्रसाद मंडप।"
        },
        "architecturalDetails": {
          "en": "Carved with dancing figures, royal processionals, and decorative scrollwork matching the Natamandira plinth.",
          "kn": "ನಾಟ್ಯಮಂದಿರದಂತೆಯೇ ಸುಂದರ ನರ್ತಕಿಯರು ಮತ್ತು ರಾಜ ಮಹಾರಾಜರ ಮೆರವಣಿಗೆಯ ಶಿಲ್ಪಗಳಿಂದ ಕೂಡಿದೆ.",
          "hi": "नाट्यमंडप के सदृश ही सुंदर नर्तकियों और राजसी यात्राओं के शिल्पांकन से युक्त।"
        },
        "audioNarrationTrackId": "hs_bhogamandapa_plinth",
        "transcripts": {
          "en": "The Bhogamandapa in the distance was the hall of consecrated offerings where Mahaprasad was blessed.",
          "kn": "ದೂರದಲ್ಲಿರುವ ಭೋಗಮಂಟಪವು ಸೂರ್ಯ ದೇವರಿಗೆ ನೈವೇದ್ಯ ಅರ್ಪಿಸುತ್ತಿದ್ದ ಪವಿತ್ರ ಮಂಟಪವಾಗಿತ್ತು.",
          "hi": "दूर स्थित भोगमंडप वह पावन स्थल था जहाँ सूर्य देव को नैवेद्य अर्पित किया जाता था।"
        },
        "audioSources": {
          "en": "/assets/monuments/konark/audio/en/hs_bhogamandapa_plinth.mp3",
          "kn": "/assets/monuments/konark/audio/kn/hs_bhogamandapa_plinth.mp3",
          "hi": "/assets/monuments/konark/audio/hi/hs_bhogamandapa_plinth.mp3"
        }
      }
    ]
  }
];

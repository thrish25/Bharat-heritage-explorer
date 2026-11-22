/**
 * Hampi — Authentic 360° Scenes & Hotspot Definitions
 * Fully integrated from verified Vijayanagara architectural survey & audio guides
 * UNESCO Inscribed 1986 | Vijayanagara Dravidian Architecture
 */

import { Scene } from '../../../types/monument';

export const DEFAULT_HAMPI_SCENE_ID = 'vittala_temple';

export const HAMPI_SCENES: Scene[] = [
  {
    "id": "vittala_temple",
    "sceneNumber": 1,
    "title": {
      "en": "Vijaya Vittala Temple Courtyard",
      "kn": "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಪ್ರಾಂಗಣ",
      "hi": "विजय विट्ठल मंदिर प्रांगण"
    },
    "subtitle": {
      "en": "Sacred Centre — UNESCO Inscribed Sanctuary Complex",
      "kn": "ಪವಿತ್ರ ಪ್ರಾಕಾರ — ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಧಾಮ",
      "hi": "पवित्र संकुल — यूनेस्को विश्व धरोहर देवालय"
    },
    "thumbnailUrl": "/assets/monuments/hampi/thumbnails/vittala_temple.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/hampi/panoramas/vittala_temple.jpg",
      "initialOrientation": {
        "pitch": -2,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -45,
        "maxPitch": 45,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "vittala_temple",
      "title": {
        "en": "Vijaya Vittala Temple Courtyard",
        "kn": "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಪ್ರಾಂಗಣ",
        "hi": "विजय विट्ठल मंदिर प्रांगण"
      },
      "audioSources": {
        "en": "/assets/monuments/hampi/audio/en/vittala_temple.mp3",
        "kn": "/assets/monuments/hampi/audio/kn/vittala_temple.mp3",
        "hi": "/assets/monuments/hampi/audio/hi/vittala_temple.mp3"
      },
      "transcripts": {
        "en": "Welcome to the Vijaya Vittala Temple, the grandest crowning achievement of Vijayanagara Dravidian architecture. Located along the southern banks of the sacred Tungabhadra River, this sanctified complex was founded in the fifteenth century during the reign of King Deva Raya the Second, and later expanded to imperial magnificence in the sixteenth century under Emperor Krishnadevaraya. As you gaze across this expansive courtyard, observe the cloistered granite perimeter that once sheltered thousands of pilgrims, royal dignitaries, and traveling merchants from across Asia and Europe. Directly ahead lies the world-renowned Garuda shrine, celebrated as the Stone Chariot, and beyond it stands the monumental Mahamandapa. Designated a UNESCO World Heritage monument in 1986, the temple stands today under the dedicated conservation of the Archaeological Survey of India.",
        "kn": "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಸಂಕೀರ್ಣಕ್ಕೆ ನಿಮಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ. ಪವಿತ್ರ ತುಂಗಭದ್ರಾ ನದಿಯ ದಕ್ಷಿಣ ದಂಡೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಈ ಮಹೋನ್ನತ ದೇವಾಲಯವು ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ದ್ರಾವಿಡ ವಾಸ್ತುಶಿಲ್ಪದ ಪರಮ ಶ್ರೇಷ್ಠ ಕಲಾ ಶಿಖರವಾಗಿದೆ. ಹದಿನೈದನೇ ಶತಮಾನದಲ್ಲಿ ಸಂಗಮ ರಾಜವಂಶದ ಇಮ್ಮಡಿ ದೇವರಾಯರ ಕಾಲದಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಈ ಪವಿತ್ರ ಧಾಮವು, ಹದಿನಾರನೇ ಶತಮಾನದಲ್ಲಿ ಚಕ್ರವರ್ತಿ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರ ಆಳ್ವಿಕೆಯಲ್ಲಿ ವೈಭವೋಪೇತವಾಗಿ ವಿಸ್ತಾರಗೊಂಡಿತು. ನಿಮ್ಮ ಕಣ್ಮುಂದೆ ಜಗತ್ಪ್ರಸಿದ್ಧ ಕಲ್ಲಿನ ರಥವು ಕಂಗೊಳಿಸುತ್ತಿದೆ ಮತ್ತು ಅದರ ಹಿಂದೆ ಸಂಗೀತ ಸ್ತಂಭಗಳಿಂದ ಕೂಡಿದ ಭವ್ಯ ರಂಗಮಂಟಪವಿದೆ. 1986ರಲ್ಲಿ ಯುನೆಸ್ಕೋ ಸಂಸ್ಥೆಯು ಇದನ್ನು ವಿಶ್ವ ಪಾರಂಪರಿಕ ತಾಣವೆಂದು ಘೋಷಿಸಿತು.",
        "hi": "विजयनगर स्थापत्य कला के मुकुटमणि, भव्य विजय विट्ठल मंदिर में आपका हार्दिक स्वागत है। पवित्र तुंगभद्रा नदी के दक्षिणी तट पर स्थित यह ऐतिहासिक मंदिर परिसर विजयनगर साम्राज्य की उत्कृष्ट द्रविड़ वास्तुकला का अनुपम प्रतीक है। पंद्रहवीं शताब्दी में राजा देवराय द्वितीय के काल में आरंभ हुए इस मंदिर का विस्तार सोलहवीं सदी में सम्राट कृष्णदेवराय के स्वर्णिम काल में किया गया। आपके सामने विश्वविख्यात गरुड़ मंदिर यानी प्रस्तर रथ अपनी आभा बिखेर रहा है, और उसके ठीक पीछे संगीतमय स्तंभों से सुसज्जित महामंडप विराजमान है।"
      }
    },
    "hotspots": [
      {
        "id": "v-mandapa",
        "title": {
          "en": "Maha-Mandapa & Sculpted Columns",
          "kn": "ಮಹಾಮಂಟಪ ಮತ್ತು ಕೆತ್ತನೆಯ ಕಂಬಗಳು",
          "hi": "महामंडप और नक्काशीदार स्तंभ"
        },
        "category": "Mandapa Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -7.5,
            "yaw": -130.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The grand hypostyle ceremonial hall of the Vittala complex, standing on an ornate granite plinth with continuous horse and elephant friezes, massive monolithic columns, and pushpapotika brackets.",
          "kn": "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯದ ಮಹಾಮಂಟಪವು ಈ ಪವಿತ್ರ ಸಂಕೀರ್ಣದ ಧಾರ್ಮಿಕ ಕೇಂದ್ರಬಿಂದುವಾಗಿದೆ. ರಾಜಮನೆತನದ ಕುದುರೆಗಳು ಮತ್ತು ಗಜಪಡೆಗಳ ಸಾಲಿನ ಸುಂದರ ಗ್ರಾನೈಟ್ ಜಗುಲಿಯ ಮೇಲೆ ಇದು ನಿಂತಿದೆ.",
          "hi": "विजय विट्ठल मंदिर का महामंडप इस पावन परिसर का आध्यात्मिक हृदय है, जो नक्काशीदार ग्रेनाइट चबूतरे पर स्थापित है।"
        },
        "historicalSignificance": {
          "en": "Assembled during the zenith of Emperor Krishnadevaraya's reign for grand religious rituals, royal assemblies, and state festivities.",
          "kn": "ಚಕ್ರವರ್ತಿ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರ ಆಳ್ವಿಕೆಯಲ್ಲಿ ಪವಿತ್ರ ಧಾರ್ಮಿಕ ವಿಧಿಗಳು ಮತ್ತು ರಾಜ ಸಭೆಗಳಿಗಾಗಿ ಈ ಮಹಾಮಂಟಪವನ್ನು ನಿರ್ಮಿಸಲಾಯಿತು.",
          "hi": "सम्राट कृष्णदेवराय के काल में भव्य धार्मिक उत्सवों एवं राजकीय सभाओं के आयोजन हेतु इसका निर्माण हुआ था।"
        },
        "architecturalDetails": {
          "en": "Represents the zenith of Vijayanagara religious pavilion engineering with intricate trabeate stone joinery and load-bearing monolithic columns.",
          "kn": "ಏಕಶಿಲಾ ಕಂಬಗಳು ಮತ್ತು ಕಲ್ಲಿನ ತೊಲೆಗಳ ಅದ್ಭುತ ಜೋಡಣೆಯನ್ನು ಹೊಂದಿರುವ ವಿಜಯನಗರ ವಾಸ್ತುಶಿಲ್ಪದ ಪರಮೋಚ್ಚ ಶಿಖರ.",
          "hi": "विजयनगर धार्मिक स्थापत्य का शिखर, जिसमें एकाश्म पाषाण स्तंभों और बीमों का बेजोड़ समन्वय दिखता है।"
        },
        "audioNarrationTrackId": "v-mandapa",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/v-mandapa.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/v-mandapa.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/v-mandapa.mp3"
        },
        "transcripts": {
          "en": "The Maha-Mandapa of the Vijaya Vittala Temple stands as the ceremonial core of the sacred complex. Resting on a richly carved granite plinth adorned with continuous friezes of royal horses, battle elephants, and mythical makaras, this open hypostyle pavilion features massive monolithic pillars sculpted with dramatic pushpapotika brackets and celestial deities.",
          "kn": "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯದ ಮಹಾಮಂಟಪವು ಈ ಪವಿತ್ರ ಸಂಕೀರ್ಣದ ಧಾರ್ಮಿಕ ಕೇಂದ್ರಬಿಂದುವಾಗಿದೆ. ರಾಜಮನೆತನದ ಕುದುರೆಗಳು, ಗಜಪಡೆಗಳು ಮತ್ತು ಮಕರ ಶಿಲ್ಪಗಳ ಸಾಲುಗಳಿಂದ ಕಂಗೊಳಿಸುವ ಸುಂದರ ಗ್ರಾನೈಟ್ ಜಗುಲಿಯ ಮೇಲೆ ಈ ಮುಕ್ತ ಮಂಟಪವು ನಿಂತಿದೆ. ಬೃಹತ್ ಏಕಶಿಲಾ ಕಂಬಗಳು, ಪುಷ್ಪಪೋಟಿಕ ಬೋದಿಗೆಗಳು ಮತ್ತು ದೈವಿಕ ಕೆತ್ತನೆಗಳು ವಿಜಯನಗರ ವಾಸ್ತುಶಿಲ್ಪದ ವೈಭವವನ್ನು ಸಾರುತ್ತವೆ.",
          "hi": "विजय विट्ठल मंदिर का महामंडप इस पवित्र मंदिर परिसर का आध्यात्मिक हृदय है। राजसी घोड़ों, हाथियों और पौराणिक मकरों की नक्काशीदार पंक्तियों से सुसज्जित ग्रेनाइट चबूतरे पर खड़ा यह खुला मंडप विजयनगर शिल्प का अनुपम उदाहरण है।"
        }
      },
      {
        "id": "v-chariot",
        "title": {
          "en": "Stone Chariot Garuda Shrine",
          "kn": "ಕಲ್ಲಿನ ರಥ ಗರುಡ ಮಂದಿರ",
          "hi": "प्रस्तर रथ गरुड़ मंदिर"
        },
        "category": "Sacred Shrine",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -19.5,
            "yaw": 28.5,
            "hfov": 80
          }
        },
        "description": {
          "en": "The freestanding monolithic granite shrine dedicated to Garuda, axially aligned with Lord Vittala’s sanctum, mounted upon four rotating stone wheels.",
          "kn": "ಪ್ರಾಂಗಣದ ನಡುವೆ ಕಂಗೊಳಿಸುತ್ತಿರುವ ಕಲ್ಲಿನ ರಥವು ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ವಾಹನವಾದ ಗರುಡ ದೇವರಿಗೆ ಸಮರ್ಪಿತವಾದ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಮಂದಿರವಾಗಿದೆ.",
          "hi": "प्रांगण में स्थित विश्वविख्यात प्रस्तर रथ भगवान विष्णु के वाहन गरुड़ को समर्पित एक स्वतंत्र मंदिर है।"
        },
        "historicalSignificance": {
          "en": "Inspired by King Krishnadevaraya's visit to the Konark Sun Temple during his Kalinga campaign, recreating the celestial processional car in Hampi.",
          "kn": "ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯದಿಂದ ಪ್ರೇರಿತರಾದ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರು ಹಂಪಿಯಲ್ಲಿ ಈ ಅದ್ಭುತ ರಥ ಮಂದಿರವನ್ನು ನಿರ್ಮಿಸಿದರು.",
          "hi": "कोणार्क के सूर्य मंदिर से प्रेरित होकर सम्राट कृष्णदेवराय ने हम्पी में इस पावन प्रस्तर रथ का निर्माण करवाया था।"
        },
        "architecturalDetails": {
          "en": "Ingenious modular stone masonry simulating a monolithic processional temple car with concealed interlocking mortise joints.",
          "kn": "ಏಕಶಿಲೆಯಂತೆ ಭಾಸವಾಗುವ ಕರಾರುವಾಕ್ ಕಲ್ಲಿನ ಕೀಲುಗಳ ಜೋಡಣೆ ಮತ್ತು ರಥಾಕಾರದ ಅನನ್ಯ ಮಂದಿರ ವಿನ್ಯಾಸ.",
          "hi": "एक ही चट्टान जैसा दिखने वाला गुप्त मोर्टिस जोड़ों से तैयार रथ रूपी अद्वितीय विमान मंदिर।"
        },
        "audioNarrationTrackId": "v-chariot",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/v-chariot.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/v-chariot.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/v-chariot.mp3"
        },
        "transcripts": {
          "en": "Visible across the courtyard is Hampi's world-famous Stone Chariot, a freestanding monolithic shrine dedicated to Garuda, the divine mount of Lord Vishnu. Axially aligned with the sanctum sanctorum of Lord Vittala, the chariot is assembled with concealed interlocking granite joints and mounted on four carved stone wheels.",
          "kn": "ಪ್ರಾಂಗಣದ ನಡುವೆ ಕಂಗೊಳಿಸುತ್ತಿರುವ ಕಲ್ಲಿನ ರಥವು ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ವಾಹನವಾದ ಗರುಡ ದೇವರಿಗೆ ಸಮರ್ಪಿತವಾದ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಮಂದಿರವಾಗಿದೆ. ವಿಠ್ಠಲನ ಗರ್ಭಗುಡಿಗೆ ನೇರವಾದ ಅಕ್ಷೀಯ ಸಾಲಿನಲ್ಲಿರುವ ಈ ರಥವು ಕಣ್ಣಿಗೆ ಕಾಣದ ಅದ್ಭುತ ಶಿಲಾ ಕೀಲುಗಳ ಜೋಡಣೆಯಿಂದ ನಿರ್ಮಿತವಾಗಿದೆ.",
          "hi": "प्रांगण में स्थित विश्वविख्यात प्रस्तर रथ भगवान विष्णु के वाहन गरुड़ को समर्पित एक स्वतंत्र मंदिर है। मुख्य गर्भगृह के ठीक सीध में स्थित यह रथ गुप्त पाषाण जोड़ों से तराशा गया है।"
        }
      },
      {
        "id": "v-gopuram",
        "title": {
          "en": "Eastern Raja Gopuram Gateway",
          "kn": "ಪೂರ್ವದ ರಾಜಗೋಪುರ ಪ್ರವೇಶದ್ವಾರ",
          "hi": "पूर्वी राजगोपुरम प्रवेश द्वार"
        },
        "category": "Raja Gopuram",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 15.0,
            "yaw": 8.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The ceremonial entrance portal constructed from massive dressed granite ashlar blocks, featuring towering doorjambs, guardian dwarapalakas, and floral bas-reliefs.",
          "kn": "ವಿಠ್ಠಲ ಸಂಕೀರ್ಣದ ಭವ್ಯ ಪ್ರವೇಶ ದ್ವಾರವಾಗಿದ್ದು, ಬೃಹತ್ ಕಪ್ಪು ಗ್ರಾನೈಟ್ ತಳಪಾಯ ಮತ್ತು ದ್ವಾರಪಾಲಕರ ಶಿಲ್ಪಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "मंदिर परिसर का मुख्य द्वार, जिसका विशाल ग्रेनाइट आधार, द्वारपालक और कमल नक्काशी प्राचीन भव्यता दर्शाते हैं।"
        },
        "historicalSignificance": {
          "en": "Served as the grand ceremonial entrance through which royal processions, foreign ambassadors, and pilgrim caravans entered the sacred precinct.",
          "kn": "ರಾಜ ಮೆರವಣಿಗೆಗಳು, ವಿದೇಶಿ ರಾಯಭಾರಿಗಳು ಮತ್ತು ಯಾತ್ರಿಕರು ದೇವಾಲಯವನ್ನು ಪ್ರವೇಶಿಸುತ್ತಿದ್ದ ಪ್ರಮುಖ ರಾಜದ್ವಾರ.",
          "hi": "राजसी जुलूसों और विदेशी दूतों के मंदिर परिसर में प्रवेश हेतु निर्मित मुख्य ऐतिहासिक तोरण द्वार।"
        },
        "architecturalDetails": {
          "en": "Dravidian entrance tower foundation engineered with monumental granite doorframes designed to withstand the immense load of a multi-tiered superstructure.",
          "kn": "ದೈತ್ಯಾಕಾರದ ಗ್ರಾನೈಟ್ ಬಾಗಿಲವಾಡಗಳು ಮತ್ತು ಭಾರ ಹೊರುವ ಬಲಿಷ್ಠ ತಳಪಾಯವನ್ನು ಹೊಂದಿದ ದ್ರಾವಿಡ ಪ್ರವೇಶ ದ್ವಾರ.",
          "hi": "द्रविड़ गोपुरम आधार जिसे ऊपरी भारी ईंट-गारे के शिखर का भार वहन करने हेतु विशेष रूप से गढ़ा गया था।"
        },
        "audioNarrationTrackId": "v-gopuram",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/v-gopuram.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/v-gopuram.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/v-gopuram.mp3"
        },
        "transcripts": {
          "en": "The Eastern Raja Gopuram represents the ceremonial entrance gateway to the Vittala complex. While its upper multi-tiered brick and stucco superstructure has succumbed to time, its monumental dressed granite base survives with towering stone doorjambs, guardian dwarapalakas, and sacred lotus bas-reliefs.",
          "kn": "ಪೂರ್ವದ ರಾಜಗೋಪುರವು ವಿಠ್ಠಲ ಸಂಕೀರ್ಣದ ಭವ್ಯ ಪ್ರವೇಶ ದ್ವಾರವಾಗಿದೆ. ಮೇಲ್ಭಾಗದ ಇಟ್ಟಿಗೆ ಮತ್ತು ಗಾರೆಯ ಬಹು-ಂತಸ್ತಿನ ಗೋಪುರವು ಕಾಲಕ್ರಮೇಣ ನಾಶವಾಗಿದ್ದರೂ, ಬೃಹತ್ ಕಪ್ಪು ಗ್ರಾನೈಟ್ ತಳಪಾಯ, ದ್ವಾರಪಾಲಕರ ಶಿಲ್ಪಗಳು ಮತ್ತು ಪವಿತ್ರ ಕಮಲದ ಕೆತ್ತನೆಗಳು ಇಂದಿಗೂ ಭದ್ರವಾಗಿ ಉಳಿದುಕೊಂಡಿವೆ.",
          "hi": "पूर्वी राजगोपुरम मंदिर परिसर का मुख्य प्रवेश द्वार है। यद्यपि इसका ऊपरी ईंट-गारे का शिखर समय के साथ नष्ट हो गया, किंतु इसका विशाल ग्रेनाइट आधार, द्वारपालक और पवित्र कमल की नक्काशी आज भी प्राचीन भव्यता की गवाही देती है।"
        }
      },
      {
        "id": "v-prakara",
        "title": {
          "en": "Cloistered Prakara Perimeter Colonnade",
          "kn": "ಶಿಲಾ ಪ್ರಾಕಾರದ ಆವರಣ ಮತ್ತು ಕಂಬಗಳ ಸಾಲು",
          "hi": "प्राकार प्राचीर एवं स्तम्भावली"
        },
        "category": "Prakara Colonnade",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -7.0,
            "yaw": 108.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Double-row stone colonnade enclosing the temple courtyard, providing shaded passage and shelter for assemblies of visiting pilgrims and scholars.",
          "kn": "ಎರಡು ಸಾಲಿನ ದೃಢವಾದ ಗ್ರಾನೈಟ್ ಕಂಬಗಳು ಮತ್ತು ಕಲ್ಲಿನ ತೊಲೆಗಳಿಂದ ನಿರ್ಮಿತವಾದ ಪ್ರಾಕಾರದ ಆವೃತ ಮಾರ್ಗ.",
          "hi": "दोहरी पंक्तियों वाले भारी ग्रेनाइट खंभों से निर्मित ढका हुआ गलियारा जो प्रांगण को सुरक्षित रखता है।"
        },
        "historicalSignificance": {
          "en": "Sheltered visiting scholars, ascetics, and festival pilgrims from the Deccan monsoon rains and intense tropical sunlight.",
          "kn": "ದೂರದ ಊರುಗಳಿಂದ ಬಂದ ವಿದ್ವಾಂಸರು ಮತ್ತು ಭಕ್ತರಿಗೆ ಮಳೆ ಬಿಸಿಲಿನಿಂದ ಆಶ್ರಯ ನೀಡುತ್ತಿದ್ದ ಶಿಲಾ ಪ್ರಾಕಾರ.",
          "hi": "तीर्थयात्रियों और संतों को धूप व वर्षा से आश्रय प्रदान करने वाली ऐतिहासिक सुरक्षा प्राचीर।"
        },
        "architecturalDetails": {
          "en": "Continuous boundary cloister unifying the sacred precinct, with rhythmic trabeated stone beam bays supporting granite flat-roof slabs.",
          "kn": "ದೇವಾಲಯದ ಪವಿತ್ರ ಆವರಣವನ್ನು ಒಗ್ಗೂಡಿಸುವ ಕಂಬಗಳ ಸಾಲು ಮತ್ತು ಸಮತಟ್ಟಾದ ಕಲ್ಲಿನ ಛಾವಣಿ.",
          "hi": "समतल पाषाण छतों को साधने वाली खंभों की दोहरी पंक्तियां जो संपूर्ण प्रांगण को एक सूत्र में बांधती हैं।"
        },
        "audioNarrationTrackId": "v-prakara",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/v-prakara.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/v-prakara.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/v-prakara.mp3"
        },
        "transcripts": {
          "en": "The cloistered prakara enclosure forms a protective perimeter colonnade surrounding the Vittala courtyard. Engineered with double rows of massive granite pillars and stone beam trabeation, this covered walkway sheltered traveling scholars, pilgrims, and festival assemblies from the monsoon rains and afternoon sun.",
          "kn": "ಶಿಲಾ ಪ್ರಾಕಾರದ ಸಾಲು ಕಂಬಗಳ ಆವರಣವು ವಿಠ್ಠಲ ದೇವಾಲಯದ ಪ್ರಾಂಗಣವನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ಎರಡು ಸಾಲಿನ ದೃಢವಾದ ಗ್ರಾನೈಟ್ ಕಂಬಗಳು ಮತ್ತು ಕಲ್ಲಿನ ತೊಲೆಗಳಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಆವೃತ ಮಾರ್ಗವು ದೂರದ ಯಾತ್ರಿಕರು ಮತ್ತು ವಿದ್ವಾಂಸರಿಗೆ ಮಳೆ ಹಾಗೂ ಬಿಸಿಲಿನಿಂದ ಆಶ್ರಯ ನೀಡುತ್ತಿತ್ತು.",
          "hi": "प्राकार प्राचीर मंदिर प्रांगण को चारों ओर से घेरने वाली एक मजबूत स्तम्भावली है। दोहरी पंक्तियों वाले भारी ग्रेनाइट खंभों से निर्मित यह ढका हुआ गलियारा तीर्थयात्रियों को धूप और वर्षा से आश्रय प्रदान करता था।"
        }
      }
    ]
  },
  {
    "id": "stone_chariot",
    "sceneNumber": 2,
    "title": {
      "en": "The Stone Chariot (Garuda Shrine)",
      "kn": "ಕಲ್ಲಿನ ರಥ (ಗರುಡ ಮಂದಿರ)",
      "hi": "प्रस्तर रथ (गरुड़ मंदिर)"
    },
    "subtitle": {
      "en": "Monolithic Processional Shrine — National Heritage Symbol",
      "kn": "ಏಕಶಿಲಾ ರಥ ದೇವಾಲಯ — ಭಾರತೀಯ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತೀಕ",
      "hi": "एकाश्म प्रस्तर रथ — भारतीय सांस्कृतिक धरोहर"
    },
    "thumbnailUrl": "/assets/monuments/hampi/thumbnails/stone_chariot.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/hampi/panoramas/stone_chariot.jpg",
      "initialOrientation": {
        "pitch": -3,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -45,
        "maxPitch": 45,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "stone_chariot",
      "title": {
        "en": "The Stone Chariot (Garuda Shrine)",
        "kn": "ಕಲ್ಲಿನ ರಥ (ಗರುಡ ಮಂದಿರ)",
        "hi": "प्रस्तर रथ (गरुड़ मंदिर)"
      },
      "audioSources": {
        "en": "/assets/monuments/hampi/audio/en/stone_chariot.mp3",
        "kn": "/assets/monuments/hampi/audio/kn/stone_chariot.mp3",
        "hi": "/assets/monuments/hampi/audio/hi/stone_chariot.mp3"
      },
      "transcripts": {
        "en": "Standing before you is the iconic Stone Chariot of Hampi, universally celebrated as the defining emblem of Karnataka's rich cultural heritage. Constructed in the early sixteenth century under the direct royal patronage of Emperor Krishnadevaraya, this marvel is not a mobile carriage, but rather a monumental shrine, or Vimana, dedicated to Garuda, the celestial eagle and divine mount of Lord Vishnu. While it appears sculpted from a single colossal monolith, the chariot is ingeniously assembled from precision-cut granite blocks, fitted together using masterfully concealed mortise-and-tenon interlocking joints. Observe the four magnificent stone wheels, delicately carved with radial lotus petals and circular floral hubs, mounted on stone axles that once freely rotated.",
        "kn": "ನಿಮ್ಮ ಮುಂದೆ ವಿರಾಜಮಾನವಾಗಿರುವ ಕಲ್ಲಿನ ರಥವು ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಇತಿಹಾಸ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕಲಾ ಪ್ರೌಢಿಮೆಯ ಜಾಗತಿಕ ಸಂಕೇತವಾಗಿದೆ. ಹದಿನಾರನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಮಹಾನ್ ಚಕ್ರವರ್ತಿ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರ ಆಶ್ರಯದಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ಈ ಕಲ್ಲಿನ ರಥವು ಕೇವಲ ಆಲಂಕಾರಿಕ ರಥವಲ್ಲ, ಬದಲಾಗಿ ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ವಾಹನವಾದ ಗರುಡ ದೇವರಿಗೆ ಸಮರ್ಪಿತವಾದ ಪವಿತ್ರ ಗರುಡ ಮಂದಿರವಾಗಿದೆ. ಹೊರನೋಟಕ್ಕೆ ಇದು ಒಂದೇ ದೊಡ್ಡ ಬಂಡೆಯಲ್ಲಿ ಕೆತ್ತಿದ ಏಕಶಿಲೆಯಂತೆ ಕಂಡರೂ, ಕಠಿಣ ಗ್ರಾನೈಟ್ ಶಿಲಾಖಂಡಗಳನ್ನು ಅದೃಶ್ಯ ಕೀಲುಗಳ ಮೂಲಕ ಪರಸ್ಪರ ಜೋಡಿಸಿ ಅತ್ಯಂತ ಕೌಶಲ್ಯದಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ. ನಾಲ್ಕು ಚಕ್ರಗಳು ಕಮಲದ ದಳಗಳ ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿವೆ.",
        "hi": "आपके सम्मुख खड़ा यह विस्मयकारी प्रस्तर रथ कर्नाटक की ऐतिहासिक धरोहर और भारतीय शिल्प का अद्वितीय गौरव है। सोलहवीं शताब्दी के आरंभ में सम्राट कृष्णदेवराय के काल में निर्मित यह संरचना भगवान विष्णु के दिव्य वाहन गरुड़ को समर्पित एक पवित्र मंदिर यानी विमान है। इसे ग्रेनाइट की तराशी गई विशाल शिलाओं को गुप्त जोड़ों द्वारा जोड़कर तैयार किया गया है। रथ के चारों विशाल पहिये कमल की पंखुड़ियों से सजे हैं।"
      }
    },
    "hotspots": [
      {
        "id": "sc-wheels",
        "title": {
          "en": "Concentric Carved Stone Wheels",
          "kn": "ಕಮಲದ ದಳಗಳ ಕಲ್ಲಿನ ಚಕ್ರಗಳು",
          "hi": "अलंकृत पाषाण पहिये"
        },
        "category": "Lapidary Engineering",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -31.0,
            "yaw": 21.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Four monolithic stone wheels carved with concentric rings of radiating lotus petals and ornamental central hubs mounted on functional stone axles.",
          "kn": "ಕಮಲದ ದಳಗಳ ಸಾಲುಗಳು ಮತ್ತು ಸುಂದರ ತಿರುಗುಗುಬುಟಗಳಿಂದ ಕೆತ್ತಲಾದ ಪ್ರತಿಯೊಂದು ಚಕ್ರವು ಕಲ್ಲಿನ ಅಚ್ಚಿನ ಮೇಲೆ ನಿಂತಿದೆ.",
          "hi": "कमल की पंखुड़ियों के संकेंद्रित चक्रों से सजे ये पहिये पत्थर की धुरी पर स्थापित हैं जो पूर्व काल में घूम सकते थे।"
        },
        "historicalSignificance": {
          "en": "Functioned as active rotational stone wheels during annual Brahmotsava temple festivals before being cemented by ASI for structural preservation.",
          "kn": "ಹಿಂದಿನ ಕಾಲದಲ್ಲಿ ವಾರ್ಷಿಕ ರಥೋತ್ಸವದ ಸಮಯದಲ್ಲಿ ಈ ಬೃಹತ್ ಕಲ್ಲಿನ ಚಕ್ರಗಳು ನೈಜವಾಗಿ ತಿರುಗುತ್ತಿದ್ದವು.",
          "hi": "प्राचीन धार्मिक उत्सवों के दौरान यह पाषाण पहिये वास्तव में घूर्णन करने में सक्षम थे।"
        },
        "architecturalDetails": {
          "en": "Stone lapidary engineering demonstrating functional wheel hubcaps and stone axle sleeves allowing rotational movement.",
          "kn": "ತಿರುಗುವ ಕಲ್ಲಿನ ಅಚ್ಚುಗಳು ಮತ್ತು ಕಮಲದ ದಳಗಳ ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿರುವ ಭಾರತೀಯ ಶಿಲ್ಪಕಲೆಯ ಅದ್ಭುತ.",
          "hi": "घूर्णन में सक्षम पाषाण धुरियों और कमल दल नक्काशी से सुसज्जित प्राचीन इंजीनियरिंग का चमत्कार।"
        },
        "audioNarrationTrackId": "sc-wheels",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/sc-wheels.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/sc-wheels.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/sc-wheels.mp3"
        },
        "transcripts": {
          "en": "The four monolithic stone wheels of the chariot are masterpieces of Vijayanagara lapidary art. Carved with concentric rings of blooming lotus petals and central ornamental hubcaps, each wheel is mounted upon a stone axle. In earlier centuries, these axles allowed the massive stone discs to rotate freely during ceremonial festivities.",
          "kn": "ರಥದ ನಾಲ್ಕು ಏಕಶಿಲಾ ಚಕ್ರಗಳು ವಿಜಯನಗರದ ಶಿಲ್ಪಕಲೆಯ ಅದ್ಭುತ ಕೃತಿಗಳಾಗಿವೆ. ಕಮಲದ ದಳಗಳ ಸಾಲುಗಳು ಮತ್ತು ಸುಂದರ ತಿರುಗುಗುಬುಟಗಳಿಂದ ಕೆತ್ತಲಾದ ಪ್ರತಿಯೊಂದು ಚಕ್ರವು ಕಲ್ಲಿನ ಅಚ್ಚಿನ ಮೇಲೆ ನಿಂತಿದೆ. ಹಿಂದಿನ ಕಾಲದಲ್ಲಿ ಧಾರ್ಮಿಕ ಉತ್ಸವಗಳ ಸಮಯದಲ್ಲಿ ಈ ಬೃಹತ್ ಕಲ್ಲಿನ ಚಕ್ರಗಳು ಸರಾಗವಾಗಿ ತಿರುಗುತ್ತಿದ್ದವು.",
          "hi": "रथ के चारों पाषाण पहिये विजयनगर की मूर्तिकला के अप्रतिम उदाहरण हैं। कमल की पंखुड़ियों के संकेंद्रित चक्रों से सजे ये पहिये पत्थर की धुरी पर स्थापित हैं। प्राचीन काल में ये पहिये धार्मिक उत्सवों के दौरान वास्तव में घूम सकते थे।"
        }
      },
      {
        "id": "sc-elephants",
        "title": {
          "en": "Guardian Monolithic Elephants",
          "kn": "ಪ್ರವೇಶ ದ್ವಾರದ ರಕ್ಷಕ ಶಿಲಾ ಆನೆಗಳು",
          "hi": "पहरेदार पाषाण हाथी"
        },
        "category": "Dravidian Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -34.0,
            "yaw": -18.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Two finely carved stone elephants flanking the entrance balustrade, positioned during later conservation to replace the chariot’s original horses.",
          "kn": "ರಥದ ಪ್ರವೇಶ ಮೆಟ್ಟಿಲುಗಳ ಎರಡೂ ಬದಿಯಲ್ಲಿ ಸುಂದರ ಸೊಂಡಿಲು ಮತ್ತು ಅಲಂಕಾರಿಕ ಪಟ್ಟಿಯೊಂದಿಗೆ ಕೆತ್ತಲಾದ ಎರಡು ಶಿಲಾ ಆನೆಗಳಿವೆ.",
          "hi": "प्रवेश सीढ़ियों के दोनों ओर दो नक्काशीदार हाथी स्थापित हैं, जिन्होंने मूल रूप से घोड़ों का स्थान लिया।"
        },
        "historicalSignificance": {
          "en": "Original carved stone draft horses were damaged during the 1565 conflict; these guardian elephants were repositioned to preserve the approach balustrade.",
          "kn": "ಮೂಲತಃ ರಥವನ್ನು ಎಳೆಯುವ ಕಲ್ಲಿನ ಕುದುರೆಗಳಿದ್ದ ಜಾಗದಲ್ಲಿ ನಂತರದ ದಿನಗಳಲ್ಲಿ ಸಂರಕ್ಷಣೆಗಾಗಿ ಈ ಆನೆಗಳನ್ನು ಅಳವಡಿಸಲಾಯಿತು.",
          "hi": "1565 के युद्ध के बाद मूल अश्वों के स्थान पर सुरक्षा व संरक्षण हेतु इन पहरेदार हाथियों को स्थापित किया गया।"
        },
        "architecturalDetails": {
          "en": "Guardian animal balustrade sculpting characteristic of late Vijayanagara ceremonial entrance stairs.",
          "kn": "ವಿಜಯನಗರ ಕಾಲದ ಪ್ರವೇಶ ಮೆಟ್ಟಿಲುಗಳ ಶೈಲಿಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಸುಂದರ ಗಜ ಶಿಲ್ಪಗಳು.",
          "hi": "विजयनगर कालीन प्रवेश सोपानों की पारंपरिक रक्षक गज शिल्प परंपरा का उदाहरण।"
        },
        "audioNarrationTrackId": "sc-elephants",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/sc-elephants.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/sc-elephants.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/sc-elephants.mp3"
        },
        "transcripts": {
          "en": "Flanking the entrance balustrade are two sculpted monolithic guardian elephants. Positioned with curved trunks and ornamental caparisons, these pachyderms were placed here during later conservation work to replace the chariot's original carved stone draft horses, portions of which are preserved in museum archives.",
          "kn": "ರಥದ ಪ್ರವೇಶ ಮೆಟ್ಟಿಲುಗಳ ಎರಡೂ ಬದಿಯಲ್ಲಿ ಎರಡು ಶಿಲಾ ಆನೆಗಳನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಲಾಗಿದೆ. ಸುಂದರ ಸೊಂಡಿಲು ಮತ್ತು ಅಲಂಕಾರಿಕ ಪಟ್ಟಿಯೊಂದಿಗೆ ಕೆತ್ತಲಾದ ಈ ಆನೆಗಳನ್ನು ನಂತರದ ದಿನಗಳಲ್ಲಿ ಸಂರಕ್ಷಣೆಗಾಗಿ ಇಲ್ಲಿ ಅಳವಡಿಸಲಾಯಿತು. ಮೂಲತಃ ರಥವನ್ನು ಎಳೆಯುವ ಕಲ್ಲಿನ ಕುದುರೆಗಳು ಇಲ್ಲಿ ನೆಲೆಸಿದ್ದವು.",
          "hi": "प्रवेश सीढ़ियों के दोनों ओर दो नक्काशीदार हाथी स्थापित हैं। अलंकृत सूंड वाले ये हाथी बाद के काल में संरक्षण कार्य के दौरान स्थापित किए गए थे, जिन्होंने मूल रूप से रथ खींचने वाले घोड़ों का स्थान लिया।"
        }
      },
      {
        "id": "sc-sanctum",
        "title": {
          "en": "Garuda Shrine Sanctum Sanctorum",
          "kn": "ಗರುಡ ಮಂದಿರದ ಗರ್ಭಗುಡಿ",
          "hi": "गरुड़ गर्भगृह कक्ष"
        },
        "category": "Sacred Shrine",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 0.0,
            "yaw": -5.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The raised central chamber enclosed by slender pilasters that historically consecrated the stone idol of Garuda facing Lord Vittala.",
          "kn": "ನಾಲ್ಕು ಮೂಲೆಗಳಲ್ಲಿರುವ ಸೂಕ್ಷ್ಮ ಗ್ರಾನೈಟ್ ಕಂಬಗಳಿಂದ ಆವೃತವಾದ ಎತ್ತರದ ಗರ್ಭಗುಡಿ, ಇಲ್ಲಿ ಹಿಂದೆ ಗರುಡ ದೇವರ ಮೂರ್ತಿಯಿತ್ತು.",
          "hi": "चार कोनों के सुंदर खंभों से घिरा यह भीतरी कक्ष पूर्व काल में भगवान गरुड़ की पवित्र प्रतिमा को धारण करता था।"
        },
        "historicalSignificance": {
          "en": "Directly consecrated to face the sanctum of the Maha-Mandapa in an unbroken visual and spiritual axis.",
          "kn": "ವಿಠ್ಠಲನ ಮುಖ್ಯ ಗರ್ಭಗುಡಿಗೆ ನೇರವಾಗಿ ಸರಿಹೊಂದುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಪವಿತ್ರ ಗರುಡ ಸನ್ನಿಧಾನ.",
          "hi": "मुख्य मंदिर के गर्भगृह के साथ सटीक अक्षीय संरेखण में निर्मित पावन गरुड़ आसन।"
        },
        "architecturalDetails": {
          "en": "Sacred axial sanctum alignment linking the vehicle shrine directly to the presiding deity of the main temple.",
          "kn": "ವಿಠ್ಠಲನ ಮುಖ್ಯ ಗರ್ಭಗುಡಿಗೆ ನೇರವಾಗಿ ಸರಿಹೊಂದುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಪವಿತ್ರ ಗರುಡ ಸನ್ನಿಧಾನ.",
          "hi": "मुख्य मंदिर के गर्भगृह के साथ सटीक अक्षीय संरेखण में निर्मित पावन गरुड़ आसन।"
        },
        "audioNarrationTrackId": "sc-sanctum",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/sc-sanctum.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/sc-sanctum.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/sc-sanctum.mp3"
        },
        "transcripts": {
          "en": "The central shrine chamber, or garbhagriha, sits elevated upon the chariot chassis. Enclosed by four slender granite corner pilasters and recessed panels, this inner sanctum historically housed a consecrated stone idol of Garuda kneeling in eternal prayer toward the sanctuary of Lord Vittala.",
          "kn": "ರಥದ ಮಧ್ಯಭಾಗದಲ್ಲಿರುವ ಗರ್ಭಗುಡಿಯು ಎತ್ತರದ ಜಗುಲಿಯ ಮೇಲೆ ಸ್ಥಾಪಿತವಾಗಿದೆ. ನಾಲ್ಕು ಮೂಲೆಗಳಲ್ಲಿರುವ ಸೂಕ್ಷ್ಮ ಗ್ರಾನೈಟ್ ಕಂಬಗಳಿಂದ ಆವೃತವಾದ ಈ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ಹಿಂದೆ ಭಗವಾನ್ ಗರುಡನ ಪವಿತ್ರ ಶಿಲಾ ಮೂರ್ತಿಯನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಲಾಗಿದ್ದು, ಅದು ಸದಾ ವಿಠ್ಠಲನ ಸನ್ನಿಧಿಯನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತಿತ್ತು.",
          "hi": "रथ के मध्य में स्थित गर्भगृह एक ऊंचे मंच पर बना है। चार कोनों के सुंदर खंभों से घिरा यह भीतरी कक्ष पूर्व काल में भगवान गरुड़ की उस प्रतिमा को धारण करता था जो निरंतर भगवान विट्ठल के ध्यान में लीन थी।"
        }
      },
      {
        "id": "sc-shikhara",
        "title": {
          "en": "Dravidian Vimana Superstructure Base",
          "kn": "ದ್ರಾವಿಡ ಶಿಖರದ ತಳಪಾಯ",
          "hi": "द्रविड़ शिखर आधार"
        },
        "category": "Vimana Superstructure",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 19.5,
            "yaw": 10.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The upper platform indicating where the original multi-tiered brick and stucco Dravidian vimana tower stood until dismantled in the late 19th century.",
          "kn": "ರಥದ ಮೇಲಿನ ಸಮತಟ್ಟಾದ ಛಾವಣಿಯು ಅದರ ಮೂಲ ದ್ರಾವಿಡ ಶಿಖರದ ತಳಪಾಯವಾಗಿದ್ದು, ಹಿಂದೆ ಇಲ್ಲಿ ಸುಂದರ ಗೋಪುರವಿತ್ತು.",
          "hi": "रथ की सपाट ऊपरी छत इसके मूल द्रविड़ शिखर का आधार है, जहां पूर्व काल में अलंकृत शिखर मौजूद था।"
        },
        "historicalSignificance": {
          "en": "Documented in historic 1856 photographs by Alexander Greenlaw showing the tiered brick-and-stucco tower crowning the stone chariot.",
          "kn": "1856ರಲ್ಲಿ ಅಲೆಕ್ಸಾಂಡರ್ ಗ್ರೀನ್‌ಲಾ ತೆಗೆದ ಐತಿಹಾಸಿಕ ಛಾಯಾಚಿತ್ರಗಳು ಇಲ್ಲಿ ಇಟ್ಟಿಗೆ ಮತ್ತು ಗಾರೆಯ ಸುಂದರ ಗೋಪುರವಿದ್ದದ್ದನ್ನು ದೃಢೀಕರಿಸುತ್ತವೆ.",
          "hi": "1856 के ऐतिहासिक छायाचित्रों से प्रमाणित होता है कि इस पर ईंट-गारे का एक अलंकृत द्रविड़ शिखर सुशोभित था।"
        },
        "architecturalDetails": {
          "en": "Evidence of composite construction blending heavy granite lower bases with lightweight brick-and-stucco Dravidian superstructures.",
          "kn": "ಭಾರವಾದ ಕಲ್ಲಿನ ತಳಪಾಯದ ಮೇಲೆ ಲಘು ಇಟ್ಟಿಗೆ-ಗಾರೆಯ ಶಿಖರವನ್ನು ನಿರ್ಮಿಸುವ ಸಂಯೋಜಿತ ದ್ರಾವಿಡ ವಾಸ್ತುಶೈಲಿ.",
          "hi": "भारी ग्रेनाइट आधार पर हल्के ईंट-गारे के शिखर के निर्माण की मिश्रित द्रविड़ तकनीक का ऐतिहासिक साक्ष्य।"
        },
        "audioNarrationTrackId": "sc-shikhara",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/sc-shikhara.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/sc-shikhara.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/sc-shikhara.mp3"
        },
        "transcripts": {
          "en": "The flat upper terrace of the chariot marks the foundation of its original Dravidian superstructure. Historical photographs taken in 1856 by Alexander Greenlaw document that a multi-tiered brick-and-stucco vimana tower with ornate finials once crowned the chariot, before being dismantled by British engineers to alleviate weight on the stone base.",
          "kn": "ರಥದ ಮೇಲಿನ ಸಮತಟ್ಟಾದ ಛಾವಣಿಯು ಅದರ ಮೂಲ ದ್ರಾವಿಡ ಶಿಖರದ ತಳಪಾಯವಾಗಿದೆ. 1856ರಲ್ಲಿ ಅಲೆಕ್ಸಾಂಡರ್ ಗ್ರೀನ್‌ಲಾ ತೆಗೆದ ಐತಿಹಾಸಿಕ ಛಾಯಾಚಿತ್ರಗಳು ಇಲ್ಲಿ ಇಟ್ಟಿಗೆ ಮತ್ತು ಗಾರೆಯ ಸುಂದರ ಗೋಪುರವಿದ್ದದ್ದನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತವೆ. ಕಲ್ಲಿನ ತಳಪಾಯದ ಮೇಲಿನ ಭಾರವನ್ನು ತಗ್ಗಿಸಲು ನಂತರ ಅದನ್ನು ತೆರವುಗೊಳಿಸಲಾಯಿತು.",
          "hi": "रथ की सपाट ऊपरी छत इसके मूल द्रविड़ शिखर का आधार है। वर्ष 1856 में अलेक्जेंडर ग्रीनला द्वारा खींचे गए ऐतिहासिक चित्रों से सिद्ध होता है कि इस पर ईंट-गारे का एक अलंकृत शिखर मौजूद था, जिसे सुरक्षा की दृष्टि से बाद में हटाया गया।"
        }
      }
    ]
  },
  {
    "id": "ranga_mantapa",
    "sceneNumber": 3,
    "title": {
      "en": "Ranga Mantapa — SaReGaMa Musical Pillars",
      "kn": "ರಂಗಮಂಟಪ — ಸರೆಗಮಪ ಸಂಗೀತ ಸ್ತಂಭಗಳು",
      "hi": "रंगमंडप — सारेगामापा संगीतमय स्तंभ"
    },
    "subtitle": {
      "en": "Vijaya Vittala Central Hall — Acoustic Lithophone Marvel",
      "kn": "ವಿಜಯ ವಿಠ್ಠಲ ನಾದಮಯ ಸಭಾಂಗಣ — ವಿಶ್ವಪ್ರಸಿದ್ಧ ನಾದಶಿಲೆಗಳು",
      "hi": "विजय विट्ठल केंद्रीय मंडप — विश्वविख्यात पाषाण ध्वनि-विज्ञान"
    },
    "thumbnailUrl": "/assets/monuments/hampi/thumbnails/ranga_mantapa.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/hampi/panoramas/ranga_mantapa.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -45,
        "maxPitch": 45,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "ranga_mantapa",
      "title": {
        "en": "Ranga Mantapa — SaReGaMa Musical Pillars",
        "kn": "ರಂಗಮಂಟಪ — ಸರೆಗಮಪ ಸಂಗೀತ ಸ್ತಂಭಗಳು",
        "hi": "रंगमंडप — सारेगामापा संगीतमय स्तंभ"
      },
      "audioSources": {
        "en": "/assets/monuments/hampi/audio/en/ranga_mantapa.mp3",
        "kn": "/assets/monuments/hampi/audio/kn/ranga_mantapa.mp3",
        "hi": "/assets/monuments/hampi/audio/hi/ranga_mantapa.mp3"
      },
      "transcripts": {
        "en": "You are now stepping inside the Ranga Mantapa, the grand open performance hall of the Vijaya Vittala temple, world-renowned for its architectural and acoustic wizardry. Built around 1516 CE during the golden era of Emperor Krishnadevaraya in honour of his beloved mother Nagaladevi, this mandapa hosted celestial dance recitals, classical musical compositions, and sacred coronation rituals. The hall features fifty-six monolithic granite pillars, affectionately celebrated as the sa-re-ga-ma pillars. Each massive central pillar is surrounded by a cluster of seven to eight slender, fluted sub-pillars carved entirely from the same single block of hard Deccan granite. When struck gently, these monolithic stone shafts produce resonant musical notes spanning classical Indian scales, mimicking the resonance of bells, stringed veenas, and traditional percussion drums like the mridangam.",
        "kn": "ನೀವೀಗ ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯದ ಅತ್ಯಂತ ವಿಸ್ಮಯಕಾರಿ ಭಾಗವಾದ ರಂಗಮಂಟಪದಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ. ಈ ಮಂಟಪವು ತನ್ನ ವಾಸ್ತುಶಿಲ್ಪ ಹಾಗೂ ನಾದ ಮಾಧುರ್ಯದ ಸಂಗೀತ ಸ್ತಂಭಗಳಿಂದ ಇಡೀ ಜಗತ್ತಿನಲ್ಲಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದಿದೆ. 1516ರ ಸುಮಾರಿನಲ್ಲಿ ಚಕ್ರವರ್ತಿ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರು ತಮ್ಮ ತಾಯಿ ನಾಗಲಾದೇವಿಯವರ ಸ್ಮರಣಾರ್ಥ ನಿರ್ಮಿಸಿದ ಈ ರಂಗಮಂಟಪದಲ್ಲಿ, ಅಂದಿನ ಕಾಲದ ವಿದ್ವಾಂಸರು, ನೃತ್ಯಗಾರ್ತಿಯರು ಮತ್ತು ಸಂಗೀತಗಾರರು ದೈವಿಕ ಕಲಾ ಪ್ರದರ್ಶನಗಳನ್ನು ನೀಡುತ್ತಿದ್ದರು. ಈ ಮಂಟಪದಲ್ಲಿ ಐವತ್ತಾರು ಬೃಹತ್ ಗ್ರಾನೈಟ್ ಕಂಬಗಳಿವೆ, ಇವುಗಳನ್ನು 'ಸರೆಗಮಪ ಸ್ತಂಭಗಳು' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
        "hi": "अब आप विजय विट्ठल मंदिर के भव्य रंगमंडप में प्रवेश कर रहे हैं, जो अपनी अद्वितीय वास्तुकला और विश्वप्रसिद्ध संगीतमय स्तंभों के लिए संपूर्ण विश्व में विख्यात है। वर्ष 1516 के आसपास सम्राट कृष्णदेवराय ने अपनी पूज्य माता नागलादेवी के सम्मान में इस मंडप का निर्माण कराया था। इस खुले मंडप में कुल छप्पन नक्काशीदार ग्रेनाइट स्तंभ हैं, जिन्हें सारेगामापा स्तंभ भी कहा जाता है। प्रत्येक मुख्य स्तंभ के चारों ओर सात से आठ पतले उप-स्तंभ उकेरे गए हैं जो सात सुरों की मधुर ध्वनि उत्पन्न करते हैं।"
      }
    },
    "hotspots": [
      {
        "id": "rm-pillars",
        "title": {
          "en": "SaReGaMa Resonant Granite Pillars",
          "kn": "ಸರೆಗಮಪ ನಾದಮಯ ಸಂಗೀತ ಸ್ತಂಭಗಳು",
          "hi": "सारेगामापा संगीतमय पाषाण स्तंभ"
        },
        "category": "Acoustic Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -5.0,
            "yaw": 25.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Clusters of seven slender sub-pillars carved from a single block of resonant granite that produce melodic notes corresponding to classical musical instruments.",
          "kn": "ಕಲ್ಲಿನ ಸಾಂದ್ರತೆ ಮತ್ತು ವ್ಯಾಸದ ವೈಶಿಷ್ಟ್ಯದಿಂದಾಗಿ ಸಪ್ತಸ್ವರಗಳು, ಗಂಟಾನಾದ ಮತ್ತು ಮೃದಂಗದ ನಾದವನ್ನು ಹೊರಹೊಮ್ಮಿಸುವ ಕಂಬಗಳು.",
          "hi": "एक ही ठोस ग्रेनाइट शिलाखंड से तराशे गए सात उप-स्तंभ जो संगीत के सात सुर और वाद्ययंत्रों की गूंज उत्पन्न करते हैं।"
        },
        "historicalSignificance": {
          "en": "Used as live acoustic accompaniment during temple recitals and royal Bharatanatyam dance performances.",
          "kn": "ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ದೇವಪೂಜೆಯ ಸಮಯದಲ್ಲಿ ನೈಜ ಸಂಗೀತ ವಾದ್ಯಗಳಂತೆ ಇವು ಮೊಳಗುತ್ತಿದ್ದವು.",
          "hi": "शास्त्रीय नृत्य व संगीत गोष्ठियों के दौरान प्रत्यक्ष वाद्य यंत्रों की भांति उपयोग किए जाने वाले पावन स्तंभ।"
        },
        "architecturalDetails": {
          "en": "Acoustic lithophone engineering utilizing stone crystallization, varying column thickness, and isolated sound waveguides.",
          "kn": "ಕಲ್ಲಿನ ಸಾಂದ್ರತೆ ಮತ್ತು ಗಾತ್ರದ ವೈವಿಧ್ಯತೆಯನ್ನು ಬಳಸಿ ನಿರ್ಮಿಸಲಾದ ಅಸಾಧಾರಣ ನಾದಶಾಸ್ತ್ರೀಯ ಎಂಜಿನಿಯರಿಂಗ್.",
          "hi": "पाषाण घनत्व और मोटाई के सूक्ष्म अंतर से सुर उत्पन्न करने वाली प्राचीन ध्वनि-विज्ञान की बेजोड़ कला।"
        },
        "audioNarrationTrackId": "rm-pillars",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/rm-pillars.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/rm-pillars.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/rm-pillars.mp3"
        },
        "transcripts": {
          "en": "Before you are the legendary SaReGaMa musical pillars of Hampi. Each colossal central column is carved from a single block of dense, resonant bell-stone granite and encircled by seven slender fluted colonnettes. When struck gently, these shafts produce distinct melodic frequencies mimicking bells, drums, and stringed veenas due to subtle differences in stone diameter, density, and internal tension.",
          "kn": "ನಿಮ್ಮ ಕಣ್ಮುಂದಿರುವುದು ಹಂಪಿಯ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಸರೆಗಮಪ ಸಂಗೀತ ಸ್ತಂಭಗಳು. ಪ್ರತಿಯೊಂದು ಬೃಹತ್ ಮುಖ್ಯ ಕಂಬವನ್ನು ದೃಢವಾದ ನಾದ ಶಿಲೆಯಿಂದ ಕೆತ್ತಲಾಗಿದ್ದು, ಸುತ್ತಲೂ ಏಳು ಸಣ್ಣ ಉಪ-ಸ್ತಂಭಗಳಿವೆ. ಕಲ್ಲಿನ ಸಾಂದ್ರತೆ, ವ್ಯಾಸ ಮತ್ತು ಆಂತರಿಕ ಒತ್ತಡದ ವೈಶಿಷ್ಟ್ಯದಿಂದಾಗಿ ಇವುಗಳನ್ನು ಮುಟ್ಟಿದಾಗ ಗಂಟಾನಾದ, ಮೃದಂಗ ಮತ್ತು ವೀಣೆಯಂತಹ ಸಪ್ತಸ್ವರಗಳು ನಾದಲೋಕವನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ.",
          "hi": "आपके सम्मुख खड़े ये स्तंभ विश्वप्रसिद्ध सारेगामापा संगीतमय स्तंभ हैं। प्रत्येक मुख्य स्तंभ एक ही ठोस गुंजायमान ग्रेनाइट शिलाखंड से तराशा गया है और उसके चारों ओर सात पतले उप-स्तंभ उकेरे गए हैं। पत्थर के विभिन्न घनत्व और मोटाई के कारण इन पर आघात करने से संगीत के सात सुर उत्पन्न होते थे।"
        }
      },
      {
        "id": "rm-ceiling",
        "title": {
          "en": "Coffered Inverted Lotus Ceiling",
          "kn": "ತಲೆಕೆಳಗಾದ ಕಮಲದ ಶಿಲಾ ಛಾವಣಿ",
          "hi": "उल्टा प्रस्तर कमल मंडप छत"
        },
        "category": "Corbelled Ceiling",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 56.0,
            "yaw": 11.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Hand-chiseled corbelled stone ceiling dominated by concentric corbels and an exquisite inverted central blooming lotus medallion.",
          "kn": "ಛಾವಣಿಯ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಕೆತ್ತಲಾದ ಭವ್ಯ ತಲೆಕೆಳಗಾದ ಕಮಲದ ಹೂವು ಮತ್ತು ಕಲ್ಲಿನ ಸುಂದರ ಅಲಂಕಾರಿಕ ತೋರಣಗಳು.",
          "hi": "छत के केंद्र में आपस में जुड़ी शिलाओं से तराशा गया उल्टे खिले हुए पाषाण कमल का अलौकिक मंडप।"
        },
        "historicalSignificance": {
          "en": "Symbolizes cosmic transcendence and the blooming of spiritual consciousness in Hindu temple geometry.",
          "kn": "ಅಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿ ಮತ್ತು ದೈವಿಕ ಸೌಂದರ್ಯದ ಪ್ರತೀಕವಾಗಿ ಈ ಕಮಲದ ಛಾವಣಿಯನ್ನು ರೂಪಿಸಲಾಗಿದೆ.",
          "hi": "आध्यात्मिक चेतना और ब्रह्मांडीय ऊर्जा के प्रसार के प्रतीक स्वरूप इस कमल मंडप की रचना की गई थी।"
        },
        "architecturalDetails": {
          "en": "Corbelled trabeate masonry ceiling transferring weight smoothly across peripheral stone beams without mortar.",
          "kn": "ಗಾರೆಯಿಲ್ಲದೆ ಕಲ್ಲಿನ ತೊಲೆಗಳನ್ನು ಪರಸ್ಪರ ಜೋಡಿಸಿ ಭಾರವನ್ನು ಸಮನಾಗಿ ಹಂಚುವ ಪ್ರಾಚೀನ ಮೆಟ್ಟಿಲು ಛಾವಣಿ ತಂತ್ರಜ್ಞಾನ.",
          "hi": "बिना गारे के केवल शिलाओं के संतुलन पर आधारित छत जो भार को कोष्ठकों पर वितरित करती है।"
        },
        "audioNarrationTrackId": "rm-ceiling",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/rm-ceiling.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/rm-ceiling.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/rm-ceiling.mp3"
        },
        "transcripts": {
          "en": "Look upward at the coffered granite ceiling, dominated by a magnificent inverted lotus medallion. Hand-chiseled from interlocking stone beams, the concentric corbelled tiers represent the blossoming of spiritual consciousness, culminating in a central hanging lotus bud pendant.",
          "kn": "ಛಾವಣಿಯ ಕಡೆಗೆ ವೀಕ್ಷಿಸಿದಾಗ ಕೆತ್ತಲಾದ ಭವ್ಯ ತಲೆಕೆಳಗಾದ ಕಮಲದ ಹೂವು ಕಣ್ಮನ ಸೆಳೆಯುತ್ತದೆ. ಪರಸ್ಪರ ಜೋಡಿಸಲಾದ ಕಲ್ಲಿನ ತೊಲೆಗಳಲ್ಲಿ ಮೂಡಿರುವ ಸಂಕೇಂದ್ರಿತ ವೃತ್ತಗಳು ಅಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಯ ಸಂಕೇತವಾಗಿದ್ದು, ಮಧ್ಯಭಾಗದಲ್ಲಿ ನೇತಾಡುವ ಕಮಲದ ಮೊಗ್ಗು ಭಾರತೀಯ ಶಿಲ್ಪಕಲೆಯ ಪರಮೋಚ್ಚ ಶಿಖರವಾಗಿದೆ.",
          "hi": "छत की ओर देखिए, जहां उल्टे खिले हुए भव्य पाषाण कमल का मंडप तराशा गया है। आपस में जुड़ी शिलाओं से निर्मित यह कलाकृति आध्यात्मिक चेतना का प्रतीक है, जिसके केंद्र में पत्थर की एक सुंदर कमल-कली लटकी हुई है।"
        }
      },
      {
        "id": "rm-yali",
        "title": {
          "en": "Rearing Mythical Yali Bracket Capitals",
          "kn": "ಗರ್ಜಿಸುವ ಪೌರಾಣಿಕ ಯಾಳಿ ಬೋದಿಗೆಗಳು",
          "hi": "पराक्रमी यली पाषाण कोष्ठक"
        },
        "category": "Dravidian Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4.0,
            "yaw": -38.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Dynamic monolithic capitals portraying mythical leonine beasts with riders, featuring free-floating stone balls sculpted inside their jaws.",
          "kn": "ಸಿಂಹದ ದೇಹ ಮತ್ತು ಆನೆಯ ಸೊಂಡಿಲನ್ನು ಹೊಂದಿರುವ ಪೌರಾಣಿಕ ಯಾಳಿ ಶಿಲ್ಪಗಳು; ಇವುಗಳ ಬಾಯಿಯೊಳಗೆ ತಿರುಗುವ ಕಲ್ಲಿನ ಚೆಂಡುಗಳಿವೆ.",
          "hi": "स्तंभों पर उकेरी गई शक्तिशाली यली प्रतिमाएं जिनके खुले मुख के भीतर पत्थर की घूमने वाली गेंदें तराशी गई हैं।"
        },
        "historicalSignificance": {
          "en": "Emblem of Vijayanagara martial prowess and divine protection warding off negative forces from the sacred assembly.",
          "kn": "ವಿಜಯನಗರದ ಅಪ್ರತಿಮ ಸೇನಾ ಶಕ್ತಿ ಮತ್ತು ದೈವಿಕ ರಕ್ಷಣೆಯ ಸಂಕೇತವಾಗಿ ಈ ಯಾಳಿ ಶಿಲ್ಪಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "विजयनगर साम्राज्य के अदम्य पराक्रम और दैवीय सुरक्षा के प्रतीक रूप में यली प्रतिमाओं की स्थापना की गई।"
        },
        "architecturalDetails": {
          "en": "Intricate lapidary virtuosity producing captive rotatable stone spheres within monolithic animal jaws.",
          "kn": "ಏಕಶಿಲೆಯಲ್ಲೇ ಪ್ರಾಣಿಯ ಬಾಯಿಯೊಳಗೆ ತಿರುಗುವ ಕಲ್ಲಿನ ಚೆಂಡುಗಳನ್ನು ಕೊರೆಯುವ ಶಿಲ್ಪ ವೈಭವ.",
          "hi": "एक ही पत्थर में मुख के भीतर घूमने वाली पाषाण गेंदों को तराशने की असाधारण मूर्तिकला।"
        },
        "audioNarrationTrackId": "rm-yali",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/rm-yali.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/rm-yali.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/rm-yali.mp3"
        },
        "transcripts": {
          "en": "The perimeter capitals feature dynamic Yali bracket sculptures—mythical composite beasts possessing the body of a lion, the trunk of an elephant, and the horns of a ram. Carved rearing forward with armed riders, master sculptors chiseled free-floating stone balls inside their open jaws that can rotate but cannot be removed.",
          "kn": "ಕಂಬಗಳ ಮೇಲಿನ ಬೋದಿಗೆಗಳಲ್ಲಿ ಗರ್ಜಿಸುವ ಯಾಳಿ ಶಿಲ್ಪಗಳಿವೆ—ಸಿಂಹದ ದೇಹ, ಆನೆಯ ಸೊಂಡಿಲು ಮತ್ತು ಟಗರಿನ ಕೊಂಬುಗಳನ್ನು ಹೊಂದಿರುವ ಪೌರಾಣಿಕ ಪ್ರಾಣಿಗಳಿವು. ಇವುಗಳ ಮೇಲೆ ಯೋಧರು ಕುಳಿತಿದ್ದು, ಇವುಗಳ ಬಾಯಿಯೊಳಗೆ ಕಲ್ಲಿನ ಉಂಡೆಗಳನ್ನು ಒಂದೇ ಶಿಲೆಯಲ್ಲಿ ಕೊರೆದು ಬಿಡಿಸಲಾಗಿದೆ. ಈ ಉಂಡೆಗಳು ಬಾಯಿಯೊಳಗೆ ತಿರುಗುತ್ತವೆ ಆದರೆ ಹೊರಬರುವುದಿಲ್ಲ.",
          "hi": "स्तंभों के ऊपरी भाग पर शक्तिशाली यली प्रतिमाएं उकेरी गई हैं—जिनमें सिंह का शरीर और हाथी की सूंड होती है। इन पर योद्धा सवार हैं और इनके खुले मुख के भीतर पत्थर की ऐसी गेंदें तराशी गई हैं जो अंदर ही घूमती हैं पर बाहर नहीं निकाली जा सकतीं।"
        }
      },
      {
        "id": "rm-plinth",
        "title": {
          "en": "Elevated Natya Performance Stage",
          "kn": "ರಾಜದರ್ಬಾರಿನ ಪವಿತ್ರ ನಾಟ್ಯ ರಂಗಸ್ಥಳ",
          "hi": "शाही नृत्य रंगमंच चबूतरा"
        },
        "category": "Natya Platform",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -36.0,
            "yaw": 0.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The raised granite dance platform embellished with stepped plinth moldings and aquatic makara drainage gargoyles for courtly recitals.",
          "kn": "ಮಧ್ಯದಲ್ಲಿರುವ ಎತ್ತರದ ಗ್ರಾನೈಟ್ ಜಗುಲಿಯು ರಾಜದರ್ಬಾರಿನ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ ಮತ್ತು ಕಲಾ ಪ್ರದರ್ಶನಗಳ ರಂಗಮಂಟಪವಾಗಿತ್ತು.",
          "hi": "मध्य का ऊंचा ग्रेनाइट मंच जिस पर सम्राट कृष्णदेवराय की उपस्थिति में शास्त्रीय भरतनाट्यम का मंचन होता था।"
        },
        "historicalSignificance": {
          "en": "Accommodated court dancers, royal musicians, and imperial coronations in the immediate presence of Emperor Krishnadevaraya.",
          "kn": "ಪ್ರಖ್ಯಾತ ನರ್ತಕಿಯರು ಮತ್ತು ವಿದ್ವಾಂಸರು ಚಕ್ರವರ್ತಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಕಲಾ ಪ್ರದರ್ಶನಗಳನ್ನು ನೀಡುತ್ತಿದ್ದ ಪವಿತ್ರ ವೇದಿಕೆ.",
          "hi": "सम्राट और उच्च पुरोहितों के समक्ष संगीत एवं नाट्य प्रस्तुतियों के लिए समर्पित पावन कला केंद्र।"
        },
        "architecturalDetails": {
          "en": "Acoustically isolated raised performance platform positioned to reflect acoustic pillar resonance into the audience auditorium.",
          "kn": "ಸಂಗೀತ ಸ್ತಂಭಗಳ ನಾದವನ್ನು ಇಡೀ ಸಭಾಂಗಣಕ್ಕೆ ಸೂಸುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಎತ್ತರದ ರಂಗಮಂಚ.",
          "hi": "स्तंभों के मधुर संगीत को पूरे हॉल में प्रसारित करने हेतु विशेष रूप से निर्मित ऊंचा पाषाण मंच।"
        },
        "audioNarrationTrackId": "rm-plinth",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/rm-plinth.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/rm-plinth.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/rm-plinth.mp3"
        },
        "transcripts": {
          "en": "The central elevated granite plinth served as the consecrated natya stage of the Vijayanagara court. Dressed with stepped moldings and aquatic makara spouts, this stone platform accommodated celestial Bharatanatyam recitals, royal theatrical performances, and musical assemblies attended by Emperor Krishnadevaraya and his royal court.",
          "kn": "ಮಧ್ಯದಲ್ಲಿರುವ ಎತ್ತರದ ಗ್ರಾನೈಟ್ ಜಗುಲಿಯು ವಿಜಯನಗರದ ರಾಜದರ್ಬಾರಿನ ಪವಿತ್ರ ನಾಟ್ಯ ರಂಗಸ್ಥಳವಾಗಿತ್ತು. ಸುಂದರ ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳು ಮತ್ತು ಮಕರ ತೋರಣಗಳಿಂದ ಕೂಡಿದ ಈ ವೇದಿಕೆಯಲ್ಲಿ ಅಂದಿನ ಪ್ರಖ್ಯಾತ ನರ್ತಕಿಯರು ಮತ್ತು ವಿದ್ವಾಂಸರು ಚಕ್ರವರ್ತಿ ಶ್ರೀಕೃಷ್ಣದೇವರಾಯರ ಸಮ್ಮುಖದಲ್ಲಿ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ ಪ್ರದರ್ಶಿಸುತ್ತಿದ್ದರು.",
          "hi": "मध्य का ऊंचा ग्रेनाइट मंच विजयनगर दरबार का पावन नृत्य रंगमंच था। सुंदर नक्काशीदार सीढ़ियों से युक्त इस पाषाण मंच पर सम्राट कृष्णदेवराय की उपस्थिति में शास्त्रीय भरतनाट्यम और संगीत गोष्ठियों का आयोजन होता था।"
        }
      }
    ]
  },
  {
    "id": "lotus_mahal",
    "sceneNumber": 4,
    "title": {
      "en": "Lotus Mahal (Kamal Mahal)",
      "kn": "ಕಮಲ ಮಹಲ್ (ಲೋಟಸ್ ಮಹಲ್)",
      "hi": "कमल महल (लोटस महल)"
    },
    "subtitle": {
      "en": "Zenana Enclosure — Two-Storeyed Indo-Islamic Summer Palace",
      "kn": "ಜನಾನಾ ಆವರಣ — ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ಬೇಸಿಗೆ ಅರಮನೆ",
      "hi": "जनाना एन्क्लोजर — इंडो-इस्लामिक ग्रीष्मकालीन राजमहल"
    },
    "thumbnailUrl": "/assets/monuments/hampi/thumbnails/lotus_mahal.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/hampi/panoramas/lotus_mahal.jpg",
      "initialOrientation": {
        "pitch": 2,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -45,
        "maxPitch": 45,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "lotus_mahal",
      "title": {
        "en": "Lotus Mahal (Kamal Mahal)",
        "kn": "ಕಮಲ ಮಹಲ್ (ಲೋಟಸ್ ಮಹಲ್)",
        "hi": "कमल महल (लोटस महल)"
      },
      "audioSources": {
        "en": "/assets/monuments/hampi/audio/en/lotus_mahal.mp3",
        "kn": "/assets/monuments/hampi/audio/kn/lotus_mahal.mp3",
        "hi": "/assets/monuments/hampi/audio/hi/lotus_mahal.mp3"
      },
      "transcripts": {
        "en": "Before you stands the elegant Lotus Mahal, nestled within the secluded sanctuary of Hampi's royal Zenana Enclosure. Also historically referred to as the Kamal Mahal or Chitrangi Mahal, this exquisite two-storied pavilion was designed in the sixteenth century as an exclusive summer retreat and private council hall for the imperial queens and the Emperor. Remarkably, the Lotus Mahal survived the destruction of 1565 CE relatively intact, offering us an irreplaceable window into Vijayanagara's secular courtly architecture. The pavilion represents a harmonious synthesis of Hindu and Islamic architectural traditions, often termed the Indo-Islamic courtly style. Its structure rests upon a symmetrically stepped cruciform plinth. Twenty-four gracefully proportioned square pillars support multi-foliated, lobed arches designed in the likeness of blossoming lotus petals unfolding toward the sky.",
        "kn": "ನಿಮ್ಮ ಕಣ್ಮುಂದೆ ಕಂಗೊಳಿಸುತ್ತಿರುವ ಲಲಿತವಾದ ಕಟ್ಟಡವೇ ಕಮಲ ಮಹಲ್ ಅಥವಾ ಲೋಟಸ್ ಮಹಲ್, ಇದು ಹಂಪಿಯ ರಾಜಮನೆತನದ ಜನಾನಾ ಆವರಣದಲ್ಲಿ ನೆಲೆಸಿದೆ. ಹದಿನಾರನೇ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ಈ ಎರಡು ಅಂತಸ್ತಿನ ಸುಂದರ ಅರಮನೆಯನ್ನು ಕಮಲ ಮಹಲ್ ಅಥವಾ ಚಿತ್ರಾಂಗಿ ಮಹಲ್ ಎಂದು ಕರೆಯಲಾಗುತ್ತಿತ್ತು. ಇದು ರಾಣಿಯರ ಬೇಸಿಗೆಯ ವಿಶ್ರಾಂತಿ ತಾಣವಾಗಿ ಮತ್ತು ರಾಜರ ರಹಸ್ಯ ಸಮಾಲೋಚನಾ ಸಭಾಂಗಣವಾಗಿ ಬಳಕೆಯಾಗುತ್ತಿತ್ತು. 1565ರ ತಾಳಿಕೋಟೆಯ ಯುದ್ಧದ ನಂತರವೂ ಹೆಚ್ಚಿನ ಹಾನಿಯಾಗದೆ ಉಳಿದುಕೊಂಡ ಕೆಲವೇ ಕೆಲವು ಅದ್ಭುತ ರಾಜಭವನಗಳಲ್ಲಿ ಇದೂ ಒಂದಾಗಿದೆ. ಈ ಮಹಲ್ ಹಿಂದೂ ಮತ್ತು ಇಸ್ಲಾಮಿಕ್ ವಾಸ್ತುಶಿಲ್ಪ ಶೈಲಿಗಳ ಸುಂದರ ಸಂಗಮವಾದ 'ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್' ಶೈಲಿಗೆ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಉದಾಹರಣೆಯಾಗಿದೆ.",
        "hi": "आपके समक्ष प्रस्तुत है हम्पी के जनाना एन्क्लोजर में स्थित नयनाभिराम कमल महल, जिसे लोटस महल के नाम से भी जाना जाता है। सोलहवीं शताब्दी में निर्मित इस द्वि-मंजिला महल को इतिहास में 'चित्रांगी महल' भी कहा गया है। यह महारानियों के ग्रीष्मकालीन विश्राम और सम्राट के गुप्त विचार-विमर्श का एकांत स्थल था। वर्ष 1565 के विनाश के उपरांत भी यह भवन सुरक्षित बच गया, जो विजयनगर साम्राज्य की धर्मनिरपेक्ष दरबारी वास्तुकला का सबसे उत्कृष्ट प्रमाण है।"
      }
    },
    "hotspots": [
      {
        "id": "lm-arches",
        "title": {
          "en": "Multi-Foliated Cusped Arches",
          "kn": "ಕಮಲದ ದಳಗಳಂತಹ ಬಹುಮುಖಿ ಕಮಾನುಗಳು",
          "hi": "बहु-स्तरीय कमल पंखुड़ी मेहराब"
        },
        "category": "Indo-Islamic Arches",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -9.0,
            "yaw": 5.5,
            "hfov": 80
          }
        },
        "description": {
          "en": "Twenty-four lobed cusped arches framing the ground floor, synthesizing Hindu corbelled brackets with Indo-Islamic pointed arcades.",
          "kn": "ಕಮಲದ ದಳಗಳಂತಹ ಇಪ್ಪತ್ತನಾಲ್ಕು ಕಮಾನುಗಳಿದ್ದು, ಹಿಂದೂ ಕಲ್ಲಿನ ಬೋದಿಗೆಗಳು ಮತ್ತು ಇಸ್ಲಾಮಿಕ್ ಕಮಾನುಗಳ ಸುಂದರ ಸಂಗಮವಾಗಿದೆ.",
          "hi": "चौबीस बहु-स्तरीय मेहराब जो खिलते कमल की पंखुड़ियों जैसे प्रतीत होते हैं और शीतल वायु का संचार करते हैं।"
        },
        "historicalSignificance": {
          "en": "Groundbreaking architectural hybridity demonstrating amicable cultural exchange between Vijayanagara and Deccan Sultanates.",
          "kn": "ವಿಜಯನಗರ ಮತ್ತು ಡೆಕ್ಕನ್ ಸುಲ್ತಾನರ ನಡುವಿನ ಸಾಂಸ್ಕೃತಿಕ ಸಮ್ಮಿಲನವನ್ನು ಸಾರುವ ಅಪೂರ್ವ ಕಮಾನುಗಳು.",
          "hi": "विजयनगर और दक्कन सल्तनत के सौहार्दपूर्ण सांस्कृतिक आदान-प्रदान से जन्मी ऐतिहासिक मेहराब शैली।"
        },
        "architecturalDetails": {
          "en": "Pioneering Indo-Islamic architectural synthesis uniting Bahmani cusped arches with Vijayanagara stone plinths.",
          "kn": "ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ವಾಸ್ತುಶಿಲ್ಪದ ಅದ್ಭುತ ಸಮ್ಮಿಲನವಾಗಿದ್ದು, ಬಹಮನಿ ಕಮಾನುಗಳು ಮತ್ತು ಹಿಂದೂ ಕಲ್ಲಿನ ಜಗುಲಿಗಳನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ.",
          "hi": "बहमनी मेहराबों और हिंदू पाषाण चबूतरों के मेल से जन्मी इंडो-इस्लामिक स्थापत्य कला का श्रेष्ठ प्रमाण।"
        },
        "audioNarrationTrackId": "lm-arches",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/lm-arches.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/lm-arches.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/lm-arches.mp3"
        },
        "transcripts": {
          "en": "The ground floor of the Lotus Mahal features twenty-four multi-foliated cusped arches, demonstrating a breathtaking synthesis of Hindu stepped brackets and Indo-Islamic pointed arcades. The delicate lobed outlines resemble the petals of an unfolding lotus flower, creating an airy pavilion that welcomed refreshing courtyard breezes.",
          "kn": "ಲೋಟಸ್ ಮಹಲ್‌ನ ಕೆಳ ಅಂತಸ್ತಿನಲ್ಲಿ ಇಪ್ಪತ್ತನಾಲ್ಕು ಕಮಲದ ದಳಗಳಂತಹ ಕಮಾನುಗಳಿವೆ. ಹಿಂದೂ ಕಲ್ಲಿನ ಬೋದಿಗೆಗಳು ಮತ್ತು ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ಕಮಾನುಗಳ ಸುಂದರ ಸಮ್ಮಿಲನವಿದು. ಅರಳುವ ಕಮಲದ ಹೂವಿನ ದಳಗಳನ್ನು ನೆನಪಿಸುವ ಈ ಕಮಾನುಗಳು ಅರಮನೆಯ ಒಳಗೆ ತಂಪಾದ ತಂಗಾಳಿಯನ್ನು ತರುತ್ತಿದ್ದವು.",
          "hi": "लोटस महल के भूतल पर चौबीस बहु-स्तरीय मेहराब बने हैं, जो हिंदू और इंडो-इस्लामिक स्थापत्य का अद्भुत संगम हैं। खिलते हुए कमल की पंखुड़ियों जैसे दिखने वाले ये मेहराब महल के भीतर शीतल वायु के प्रवाह को बनाए रखते थे।"
        }
      },
      {
        "id": "lm-domes",
        "title": {
          "en": "Stepped Pyramidal Spires & Domes",
          "kn": "ಮೆಟ್ಟಿಲುಗಳಂತಿರುವ ಪಿರಮಿಡ್ ಗೋಪುರಗಳು ಮತ್ತು ಗುಮ್ಮಟ",
          "hi": "पिरामिडनुमा शिखर एवं केंद्रीय गुंबद"
        },
        "category": "Pyramidal Vaults",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 21.0,
            "yaw": 7.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Nine stepped pyramidal towers culminating in a central lotus dome that create the palace’s iconic geometric skyline.",
          "kn": "ಛಾವಣಿಯ ಮೇಲೆ ಒಂಬತ್ತು ಮೆಟ್ಟಿಲುಗಳಂತಿರುವ ಗೋಪುರಗಳಿದ್ದು, ಮಧ್ಯದಲ್ಲಿ ಎತ್ತರವಾದ ಕಮಲದ ಗುಮ್ಮಟವಿದೆ.",
          "hi": "छत पर नौ पिरामिडनुमा गुंबद स्थित हैं, जिनके केंद्र में एक विशाल कमल गुंबद सुशोभित है।"
        },
        "historicalSignificance": {
          "en": "Translates the sacred temple vimana profile into civic royal palace architecture, signifying sovereign imperial power.",
          "kn": "ದೇವಾಲಯದ ಪವಿತ್ರ ಶಿಖರ ಶೈಲಿಯನ್ನು ರಾಜಮಹಲಿನ ವಾಸ್ತುಶಿಲ್ಪಕ್ಕೆ ಅನ್ವಯಿಸಿದ ಅಪೂರ್ವ ಕಲಾ ಸೃಷ್ಟಿ.",
          "hi": "मंदिरों के द्रविड़ शिखर प्रारूप को राजमहलों की धर्मनिरपेक्ष वास्तुकला में ढालने की अनूठी शैली।"
        },
        "architecturalDetails": {
          "en": "Dravidian stepped vimana profile translated into secular palace architecture alongside ribbed dome vaults.",
          "kn": "ದ್ರಾವಿಡ ಶಿಖರ ವಿನ್ಯಾಸವನ್ನು ರಾಜಮಹಲ್‌ನ ಲೌಕಿಕ ವಾಸ್ತುಶಿಲ್ಪಕ್ಕೆ ಅಳವಡಿಸಿದ ಅಪೂರ್ವ ನಿರ್ಮಾಣ.",
          "hi": "मंदिरों के द्रविड़ शिखर प्रारूप को राजमहलों की धर्मनिरपेक्ष वास्तुकला में ढालने की अनूठी शैली।"
        },
        "audioNarrationTrackId": "lm-domes",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/lm-domes.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/lm-domes.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/lm-domes.mp3"
        },
        "transcripts": {
          "en": "Crowning the roofline are nine stepped pyramidal towers, arranged in a symmetric cruciform hierarchy culminating in a grand central lotus dome. Blending Dravidian stepped vimana profiles with Sultanate ribbed domes, this roofline gives the palace its unmistakable royal silhouette.",
          "kn": "ಛಾವಣಿಯ ಮೇಲೆ ಒಂಬತ್ತು ಮೆಟ್ಟಿಲುಗಳಂತಿರುವ ಪಿರಮಿಡ್ ಆಕಾರದ ಗೋಪುರಗಳಿವೆ. ಮಧ್ಯದಲ್ಲಿ ಎತ್ತರವಾದ ಕಮಲದ ಗುಮ್ಮಟವಿದೆ. ದ್ರಾವಿಡ ಶಿಖರ ಶೈಲಿ ಮತ್ತು ಇಸ್ಲಾಮಿಕ್ ಗುಮ್ಮಟ ಶೈಲಿಗಳ ಈ ಸಮ್ಮಿಶ್ರಣವು ಅರಮನೆಗೆ ರಾಜಗಾಂಭೀರ್ಯದ ನೋಟವನ್ನು ನೀಡಿದೆ.",
          "hi": "छत पर नौ पिरामिडनुमा गुंबद स्थित हैं, जिनके केंद्र में एक विशाल कमल गुंबद सुशोभित है। द्रविड़ शिखर और सल्तनत शैली के गुंबदों का यह मेल इस भवन को एक अलौकिक राजसी पहचान देता है।"
        }
      },
      {
        "id": "lm-balconies",
        "title": {
          "en": "Projecting Jharokha Balconies",
          "kn": "ಮೇಲ್ಮಹಡಿಯ ಸುಂದರ ಝರೋಖಾ ಬಾಲ್ಕನಿಗಳು",
          "hi": "कलात्मक झरोखा बालकनी"
        },
        "category": "Jharokha Balcony",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6.5,
            "yaw": -9.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Upper-level projecting oriel balconies resting on sculpted stone brackets, enabling cooling breezes and discreet viewing of Zenana festivities.",
          "kn": "ಮಕರ ಮುಖದ ಕಲ್ಲಿನ ಬೋದಿಗೆಗಳ ಮೇಲೆ ನಿಂತಿರುವ ಮೇಲ್ಮಹಡಿಯ ಸುಂದರ ಝರೋಖಾ ಕಿಟಕಿಗಳು.",
          "hi": "पत्थर के कलात्मक कोष्ठकों पर टिके ऊपरी मंजिल के झरोखे जो रानियों को एकांत व सुरक्षा प्रदान करते थे।"
        },
        "historicalSignificance": {
          "en": "Provided royal ladies with a privileged, shaded vantage point to observe courtyard pageants without compromising seclusion.",
          "kn": "ರಾಣಿಯರು ಸಾರ್ವಜನಿಕವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳದೆ ಆವರಣದ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವಗಳನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಲು ಈ ಕಿಟಕಿಗಳು ನೆರವಾಗುತ್ತಿದ್ದವು.",
          "hi": "शाही रानियों के एकांत की रक्षा करते हुए उन्हें उत्सवों का अवलोकन कराने हेतु विशेष रूप से निर्मित झरोखे।"
        },
        "architecturalDetails": {
          "en": "Traditional Rajasthani-Deccani jharokha windows providing shaded ventilation and royal privacy.",
          "kn": "ನೆರಳು, ತಂಪಾದ ಗಾಳಿ ಮತ್ತು ರಾಜಮನೆತನದ ಖಾಸಗಿತನವನ್ನು ಒದಗಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಝರೋಖಾ ಕಿಟಕಿಗಳು.",
          "hi": "शीतल वायु और रानियों के एकांत हेतु तैयार किए गए पारंपरिक राजस्थानी-दक्कनी झरोखे।"
        },
        "audioNarrationTrackId": "lm-balconies",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/lm-balconies.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/lm-balconies.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/lm-balconies.mp3"
        },
        "transcripts": {
          "en": "The upper level showcases exquisite projecting jharokha balconies. Built with deep eaves and corbelled stone brackets sculpted in the form of makaras, these shaded alcoves allowed the imperial queens to observe Zenana courtyard festivities while secluded in regal privacy.",
          "kn": "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಸುಂದರವಾದ ಝರೋಖಾ ಬಾಲ್ಕನಿಗಳಿವೆ. ಮಕರ ಮುಖದ ಕಲ್ಲಿನ ಬೋದಿಗೆಗಳ ಮೇಲೆ ನಿಂತಿರುವ ಈ ನೆರಳಿನ ಕಿಟಕಿಗಳು ರಾಣಿಯರು ಆವರಣದ ಉತ್ಸವಗಳು ಮತ್ತು ಕಲಾ ಗೋಷ್ಠಿಗಳನ್ನು ಖಾಸಗಿಯಾಗಿ ವೀಕ್ಷಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತಿದ್ದವು.",
          "hi": "ऊपरी मंजिल पर सुंदर झरोखे बने हैं। पत्थर के कलात्मक कोष्ठकों पर टिके ये झरोखे रानियों को एकांत और सुरक्षा में रहकर प्रांगण के उत्सवों को देखने की सुविधा प्रदान करते थे।"
        }
      },
      {
        "id": "lm-stucco",
        "title": {
          "en": "Ornamental Lime-Mortar Stucco Reliefs",
          "kn": "ಗಾರೆ ಮತ್ತು ಸುಣ್ಣದಿಂದ ಕೆತ್ತಲಾದ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳು",
          "hi": "बारीक चूने-गारे की रिलीफ नक्काशी"
        },
        "category": "Stucco Plaster Relief",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2.0,
            "yaw": 11.5,
            "hfov": 80
          }
        },
        "description": {
          "en": "Delicate stucco decorations adorning the spandrels and vaults, showcasing hamsa waterbirds, lotus flowers, and creeping vines.",
          "kn": "ಕಮಾನುಗಳ ಗೋಡೆಗಳಲ್ಲಿ ಗಾರೆ ಮತ್ತು ಸುಣ್ಣದಿಂದ ಕೆತ್ತಲಾದ ಸೂಕ್ಷ್ಮ ಹಂಸ ಪಕ್ಷಿಗಳು ಮತ್ತು ಹೂವಿನ ಬಳ್ಳಿಗಳ ಚಿತ್ತಾರಗಳು.",
          "hi": "मेहराबों के कोनों पर चूने-गारे से हंस, पुष्प-लताएं और कमल की बारीक व सजीव आकृतियां सुशोभित हैं।"
        },
        "historicalSignificance": {
          "en": "Created by royal guild plasterers using an organic hydraulic lime formula that has withstood five centuries of tropical exposure.",
          "kn": "ಅಮೃತಶಿಲೆಯ ಪುಡಿ ಮತ್ತು ಸುಣ್ಣವನ್ನು ಬಳಸಿ ಐದು ಶತಮಾನಗಳ ಕಾಲ ಬಿಸಿಲು ಮಳೆಯನ್ನು ತಡೆದುಕೊಳ್ಳುವಂತೆ ರೂಪಿಸಲಾದ ಗಾರೆ ಕಲೆ.",
          "hi": "पांच शताब्दियों से धूप और वर्षा को सहने वाला भारतीय कारीगरों का उत्कृष्ट हाइड्रोलिक चूना-गारा शिल्प।"
        },
        "architecturalDetails": {
          "en": "High-durability hydraulic lime mortar stucco resisting Deccan heat and weathering for five centuries.",
          "kn": "ಐದು ನೂರು ವರ್ಷಗಳಿಂದ ಬಿಸಿಲು ಮಳೆಯನ್ನು ತಡೆದುಕೊಂಡು ಉಳಿದಿರುವ ಸುಣ್ಣ-ಗಾರೆಯ ಉನ್ನತ ದರ್ಜೆಯ ಗಾರೆ ಕಲೆ.",
          "hi": "पांच शताब्दियों से धूप और वर्षा को सहने वाला उत्कृष्ट हाइड्रोलिक चूना-गारा प्लास्टर शिल्प।"
        },
        "audioNarrationTrackId": "lm-stucco",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/lm-stucco.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/lm-stucco.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/lm-stucco.mp3"
        },
        "transcripts": {
          "en": "The arch spandrels are embellished with elaborate lime-mortar stucco carvings. Master artisans crafted delicate bas-reliefs of hamsa birds, aquatic creatures, and blossoming lotus buds using an indigenous hydraulic plaster formulated with crushed limestone, marble dust, and organic binding extracts.",
          "kn": "ಕಮಾನುಗಳ ಗೋಡೆಗಳಲ್ಲಿ ಗಾರೆ ಮತ್ತು ಸುಣ್ಣದಿಂದ ಕೆತ್ತಲಾದ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳಿವೆ. ಹಂಸ ಪಕ್ಷಿಗಳು, ಜಲಚರಗಳು ಮತ್ತು ಕಮಲದ ಮೊಗ್ಗುಗಳ ಚಿತ್ತಾರಗಳನ್ನು ಅಮೃತಶಿಲೆಯ ಪುಡಿ, ಸುಣ್ಣ ಮತ್ತು ನೈಸರ್ಗಿಕ ಜೇಡಿಮಣ್ಣಿನಿಂದ ರೂಪಿಸಲಾಗಿದೆ.",
          "hi": "मेहराबों के कोनों पर चूने और गारे से की गई बारीक नक्काशी सुशोभित है। भारतीय कारीगरों ने संगमरमर के चूरे और विशेष गारे का उपयोग करके हंस, जलीय जीवों और कमल के फूलों की सजीव आकृतियां बनाई हैं।"
        }
      }
    ]
  },
  {
    "id": "elephant_stables",
    "sceneNumber": 5,
    "title": {
      "en": "Elephant Stables (Gaja Shala)",
      "kn": "ಗಜಶಾಲೆ (ಆನೆ ಲಾಯ)",
      "hi": "गजशाला (हाथी अस्तबल)"
    },
    "subtitle": {
      "en": "Royal Enclosure Outer Precincts — Monumental 11-Chambered Grand Pavilion",
      "kn": "ರಾಜ ಆವರಣ — ಹನ್ನೊಂದು ಭವ್ಯ ಕೋಣೆಗಳ ರಾಜ ಗಜಶಾಲೆ",
      "hi": "शाही परिसर — ग्यारह विशाल कक्षों वाली ऐतिहासिक गजशाला"
    },
    "thumbnailUrl": "/assets/monuments/hampi/thumbnails/elephant_stables.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/hampi/panoramas/elephant_stables.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -45,
        "maxPitch": 45,
        "minFov": 50,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "elephant_stables",
      "title": {
        "en": "Elephant Stables (Gaja Shala)",
        "kn": "ಗಜಶಾಲೆ (ಆನೆ ಲಾಯ)",
        "hi": "गजशाला (हाथी अस्तबल)"
      },
      "audioSources": {
        "en": "/assets/monuments/hampi/audio/en/elephant_stables.mp3",
        "kn": "/assets/monuments/hampi/audio/kn/elephant_stables.mp3",
        "hi": "/assets/monuments/hampi/audio/hi/elephant_stables.mp3"
      },
      "transcripts": {
        "en": "Extending majestically before you are the monumental Elephant Stables of Hampi, known historically as the Gajashala. Constructed during the late fifteenth and early sixteenth centuries, this palatial edifice accommodated the royal war elephants and ceremonial tuskers belonging to the Vijayanagara monarchs and imperial military commanders. Stretching over eighty-five meters in length, the Gajashala stands as an awe-inspiring testament to the military power, wealth, and civic engineering prowess of the empire. The complex consists of eleven interconnected, cavernous rectangular chambers, each entered through a lofty, pointed archway capable of accommodating a fully caparisoned elephant. The most extraordinary architectural feature is the diverse collection of eleven domes crowning the roofline.",
        "kn": "ನಿಮ್ಮ ಮುಂದೆ ಭವ್ಯವಾಗಿ ವಿಸ್ತರಿಸಿರುವ ಈ ಸ್ಮಾರಕವೇ ಹಂಪಿಯ ಗಜಶಾಲೆ, ಅಂದರೆ ಆನೆ ಲಾಯ ಅಥವಾ ಎಲಿಫೆಂಟ್ ಸ್ಟೇಬಲ್ಸ್. ಹದಿನೈದನೇ ಮತ್ತು ಹದಿನಾರನೇ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ಈ ರಾಜಭವನವು ವಿಜಯನಗರದ ಸಾರ್ವಭೌಮರು ಮತ್ತು ಸೇನಾ ನಾಯಕರ ಪಟ್ಟದ ಆನೆಗಳು ಹಾಗೂ ಯುದ್ಧದ ಗಜಪಡೆಗಳಿಗೆ ಆಶ್ರಯ ತಾಣವಾಗಿತ್ತು. ಸುಮಾರು ಎಂಬತ್ತೈದು ಮೀಟರ್ ಉದ್ದವಿರುವ ಈ ಗಜಶಾಲೆಯು ಅಂದಿನ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಸೇನಾ ಬಲ, ಸಿರಿವಂತಿಕೆ ಮತ್ತು ಮಹೋನ್ನತ ಇಂಜಿನಿಯರಿಂಗ್ ಕೌಶಲ್ಯವನ್ನು ಜಗತ್ತಿಗೆ ಸಾರುತ್ತದೆ. ಈ ಭವ್ಯ ಕಟ್ಟಡವು ಹನ್ನೊಂದು ವಿಶಾಲವಾದ ಕೋಣೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
        "hi": "आपके सम्मुख विस्तृत यह विशाल और भव्य इमारत हम्पी की ऐतिहासिक 'गजशाला' यानी हाथी अस्तबल है। पंद्रहवीं और सोलहवीं शताब्दी में निर्मित यह विशाल संरचना विजयनगर साम्राज्य के शाही हाथियों और युद्ध के पराक्रमी गजों के आवास हेतु बनाई गई थी। पचासी मीटर से भी अधिक लंबाई में फैली यह गजशाला विजयनगर की सैन्य शक्ति, अतुल्य समृद्धि और उत्कृष्ट इंजीनियरिंग का प्रत्यक्ष प्रमाण है।"
      }
    },
    "hotspots": [
      {
        "id": "es-arches",
        "title": {
          "en": "Eleven Monumental Pointed Arch Portals",
          "kn": "ಹನ್ನೊಂದು ಬೃಹತ್ ಮೊನಚಾದ ಕಮಾನು ದ್ವಾರಗಳು",
          "hi": "ग्यारह विशाल नुकीले मेहराबदार द्वार"
        },
        "category": "Indo-Islamic Arches",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -13.0,
            "yaw": 12.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Eleven soaring pointed arch gateways built from dressed granite voussoirs, proportioned to allow fully armored war elephants and riders to enter with ease.",
          "kn": "ಗ್ರಾನೈಟ್ ಕಲ್ಲುಗಳಿಂದ ನಿರ್ಮಿತವಾದ ಹನ್ನೊಂದು ಬೃಹತ್ ಕಮಾನುಗಳಿದ್ದು, ಯುದ್ಧದ ಪಟ್ಟದ ಆನೆಗಳು ಸುಲಭವಾಗಿ ಒಳಹೋಗಲು ಅನುಕೂಲಕರವಾಗಿವೆ.",
          "hi": "विशाल पाषाण शिलाओं से निर्मित ग्यारह ऊंचे मेहराबदार द्वार जिनसे सुसज्जित युद्ध-हाथी आसानी से प्रवेश कर सकें।"
        },
        "historicalSignificance": {
          "en": "Accommodated imperial war elephants during state military inspections and the annual Mahanavami royal review.",
          "kn": "ಮಹಾನವಮಿ ಉತ್ಸವ ಹಾಗೂ ಸೈನ್ಯ ತಪಾಸಣೆಯ ಸಮಯದಲ್ಲಿ ಅಲಂಕೃತ ಆನೆಗಳು ಇಲ್ಲಿಂದ ರಾಜಮೈದಾನಕ್ಕೆ ಹೊರಡುತ್ತಿದ್ದವು.",
          "hi": "सैन्य निरीक्षण और महानवमी के शाही उत्सवों में हाथियों के आवागमन हेतु विशेष द्वार।"
        },
        "architecturalDetails": {
          "en": "Grand true masonry pointed arch engineering executing monumental portals on a civic scale.",
          "kn": "ಬೃಹತ್ ಕಲ್ಲಿನ ಕಮಾನು ಬಾಗಿಲುಗಳನ್ನು ಅತ್ಯಂತ ನಿಖರವಾಗಿ ಜೋಡಿಸಿದ ಗಜಶಾಲೆ ಎಂಜಿನಿಯರಿಂಗ್ ಕೌಶಲ್ಯ.",
          "hi": "विशाल हाथियों के सुगम आवागमन हेतु विशेष रूप से गढ़े गए ऊंचे मेहराबदार पाषाण द्वार।"
        },
        "audioNarrationTrackId": "es-arches",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/es-arches.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/es-arches.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/es-arches.mp3"
        },
        "transcripts": {
          "en": "The facade of the Gajashala presents eleven monumental pointed arch portals built from massive dressed granite blocks. Engineered with true masonry voussoirs, these soaring arched gateways were sized to permit fully caparisoned royal war elephants and their riders to enter with ease.",
          "kn": "ಗಜಶಾಲೆಯ ಮುಂಭಾಗದಲ್ಲಿ ಹನ್ನೊಂದು ಬೃಹತ್ ಮೊನಚಾದ ಕಮಾನು ಬಾಗಿಲುಗಳಿವೆ. ದೃಢವಾದ ಗ್ರಾನೈಟ್ ಕಲ್ಲುಗಳಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಎತ್ತರದ ಕಮಾನುಗಳು ಅಲಂಕೃತ ಪಟ್ಟದ ಆನೆಗಳು ಮತ್ತು ಅವುಗಳ ಮಾವುತರು ಸುಲಭವಾಗಿ ಒಳಪ್ರವೇಶಿಸಲು ಅನುಕೂಲಕರವಾಗಿದ್ದವು.",
          "hi": "गजशाला के सामने ग्यारह विशाल नुकीले मेहराबदार द्वार बने हैं। विशाल पाषाण शिलाओं से निर्मित ये ऊंचे प्रवेश द्वार इस प्रकार बनाए गए थे कि सुसज्जित युद्ध-हाथी महावत सहित सरलता से प्रवेश कर सकें।"
        }
      },
      {
        "id": "es-pavilion",
        "title": {
          "en": "Central Two-Tiered Drum Pavilion",
          "kn": "ಕೇಂದ್ರಭಾಗದ ಎರಡು ಅಂತಸ್ತಿನ ನಗಾರಿ ಮಂಟಪ",
          "hi": "केंद्रीय दो-मंजिला नगाड़ा मंडप"
        },
        "category": "Drum Pavilion",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 16.5,
            "yaw": 23.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "The central raised stone pavilion and balcony where royal trumpeters and drummers signaled military deployments and ceremonial processions.",
          "kn": "ಕಟ್ಟಡದ ಮಧ್ಯಭಾಗದಲ್ಲಿರುವ ಎರಡು ಅಂತಸ್ತಿನ ಸುಂದರ ಮಂಟಪವಾಗಿದ್ದು, ಇಲ್ಲಿಂದ ಕಹಳೆ ಮತ್ತು ನಗಾರಿಗಳನ್ನು ಮೊಳಗಿಸಲಾಗುತ್ತಿತ್ತು.",
          "hi": "भवन के मध्य में स्थित दो-मंजिला मंडप जहां बैठकर शाही वाद्यकार तुरही व नगाड़ा बजाकर अभियानों की घोषणा करते थे।"
        },
        "historicalSignificance": {
          "en": "Served as the strategic command post where imperial army commanders reviewed the royal elephant cavalry.",
          "kn": "ಸೇನಾ ನಾಯಕರು ಗಜಪಡೆಯ ಪಥಸಂಚಲನವನ್ನು ವೀಕ್ಷಿಸುತ್ತಿದ್ದ ಪ್ರಮುಖ ಕಾವಲು ವೇದಿಕೆ.",
          "hi": "सेनानायकों द्वारा शाही हाथी सेना के निरीक्षण हेतु प्रयुक्त ऐतिहासिक कमान मंच।"
        },
        "architecturalDetails": {
          "en": "Symmetrical focal pavilion breaking the long horizontal facade while serving as a strategic command balcony.",
          "kn": "ಉದ್ದನೆಯ ಕಟ್ಟಡದ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಗಾಂಭೀರ್ಯವನ್ನು ಹೆಚ್ಚಿಸುವ ಕೇಂದ್ರ ನಗಾರಿ ಮಂಟಪ ಮತ್ತು ಕಾವಲು ವೇದಿಕೆ.",
          "hi": "लंबी इमारत के केंद्र को भव्यता प्रदान करने वाला शाही नगाड़ा मंडप और सेनानायक मंच।"
        },
        "audioNarrationTrackId": "es-pavilion",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/es-pavilion.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/es-pavilion.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/es-pavilion.mp3"
        },
        "transcripts": {
          "en": "Rising at the center of the stables is the two-tiered ceremonial drum pavilion. Accessed by internal stone stairs, this upper gallery served as the bandstand where royal trumpeters playing long bronze kombu horns and kettledrums signaled the departure of imperial armies and festive parades.",
          "kn": "ಕಟ್ಟಡದ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಎರಡು ಅಂತಸ್ತಿನ ಸುಂದರ ನಗಾರಿ ಮಂಟಪವಿದೆ. ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳ ಮೂಲಕ ತಲುಪಬಹುದಾದ ಈ ಮೇಲಿನ ವೇದಿಕೆಯಲ್ಲಿ ವಾದ್ಯಗಾರರು ಕೊಂಬು, ಕಹಳೆ ಮತ್ತು ನಗಾರಿಗಳನ್ನು ಬಾರಿಸಿ ಯುದ್ಧ ಯಾತ್ರೆಗಳು ಹಾಗೂ ಉತ್ಸವಗಳ ಆರಂಭವನ್ನು ಘೋಷಿಸುತ್ತಿದ್ದರು.",
          "hi": "इमारत के केंद्र में दो-मंजिला नगाड़ा मंडप स्थित है। पत्थर की सीढ़ियों से युक्त इस ऊपरी कक्ष में बैठकर शाही वाद्यकार लंबी तुरहियां और नगाड़े बजाकर सैन्य अभियानों और राजसी उत्सवों की घोषणा करते थे।"
        }
      },
      {
        "id": "es-domes",
        "title": {
          "en": "Alternating Geometric Roof Domes",
          "kn": "ಛಾವಣಿಯ ಹನ್ನೊಂದು ವಿಭಿನ್ನ ಜ್ಯಾಮಿತೀಯ ಗುಮ್ಮಟಗಳು",
          "hi": "छत पर बने विविध ज्यामितीय गुंबद"
        },
        "category": "Pyramidal Vaults",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 8.5,
            "yaw": -75.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "A parade of eleven distinct domes alternating between circular ribbed, octagonal, and fluted designs across the extensive roofline.",
          "kn": "ವೃತ್ತಾಕಾರ, ಅಷ್ಟಕೋನ ಮತ್ತು ತೋಡುಗಳ ವಿಭಿನ್ನ ವಿನ್ಯಾಸಗಳನ್ನು ಹೊಂದಿರುವ ಹನ್ನೊಂದು ಸುಂದರ ಗುಮ್ಮಟಗಳು.",
          "hi": "गोलाकार, अष्टकोणीय और खांचेदार डिजाइनों में ढाले गए ग्यारह विस्मयकारी ज्यामितीय गुंबद।"
        },
        "historicalSignificance": {
          "en": "Demonstrates the architectural virtuosity of Vijayanagara royal architects incorporating varied Deccani roof vault topologies.",
          "kn": "ವಿಜಯನಗರ ವಾಸ್ತುಶಿಲ್ಪಿಗಳ ಸಾಟಿಯಿಲ್ಲದ ಜ್ಯಾಮಿತೀಯ ನೈಪುಣ್ಯಕ್ಕೆ ಸಾಕ್ಷಿಯಾದ ವಿಭಿನ್ನ ಗುಮ್ಮಟಗಳು.",
          "hi": "विजयनगर साम्राज्य की बहुसांस्कृतिक और बहुआयामी निर्माण दक्षता का उत्कृष्ट प्रमाण।"
        },
        "architecturalDetails": {
          "en": "Exceptional dome morphology demonstrating mastery over diverse squinch and pendentive roof vault systems.",
          "kn": "ವೃತ್ತಾಕಾರ, ಅಷ್ಟಕೋನ ಮತ್ತು ತೋಡುಗಳ ಗುಮ್ಮಟಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ಮಿಸಿದ ಜ್ಯಾಮಿತೀಯ ನೈಪುಣ್ಯ.",
          "hi": "विविध आकारों के गुंबदों के निर्माण में विजयनगर वास्तुकारों की ज्यामितीय दक्षता का प्रतीक।"
        },
        "audioNarrationTrackId": "es-domes",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/es-domes.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/es-domes.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/es-domes.mp3"
        },
        "transcripts": {
          "en": "The roofline features eleven alternating geometric domes, representing a brilliant triumph of Vijayanagara architectural eclecticism. Rather than repeating a single profile, the builders alternated between circular ribbed domes, octagonal drums, and fluted shallow cupolas across the long terrace.",
          "kn": "ಛಾವಣಿಯ ಮೇಲೆ ಹನ್ನೊಂದು ವಿಭಿನ್ನ ಜ್ಯಾಮಿತೀಯ ಗುಮ್ಮಟಗಳಿವೆ. ಎಲ್ಲಾ ಗುಮ್ಮಟಗಳನ್ನು ಒಂದೇ ರೀತಿ ಮಾಡದೆ, ವೃತ್ತಾಕಾರದ ಗುಮ್ಮಟಗಳು, ಎಂಟು ಮುಖಗಳ ಗುಮ್ಮಟಗಳು ಮತ್ತು ವಿಭಿನ್ನ ವಿನ್ಯಾಸಗಳನ್ನು ಬಳಸಿ ಅಪೂರ್ವ ಸೌಂದರ್ಯವನ್ನು ಸೃಷ್ಟಿಸಲಾಗಿದೆ.",
          "hi": "छत पर ग्यारह विभिन्न आकृतियों वाले गुंबद बने हैं। वास्तुकारों ने एक ही डिजाइन न दोहराते हुए गोलाकार, अष्टकोणीय और खांचेदार गुंबदों का ऐसा सुंदर क्रम बनाया है जो देखते ही बनता है।"
        }
      },
      {
        "id": "es-chambers",
        "title": {
          "en": "Interior Vaults & Heavy Iron Tethering Rings",
          "kn": "ಕೋಣೆಗಳ ಒಳಗಿನ ಛಾವಣಿ ಮತ್ತು ಆನೆ ಕಟ್ಟುವ ಕಬ್ಬಿಣದ ಕೊಂಡಿಗಳು",
          "hi": "भीतरी मेहराबदार छत एवं लोहे के छल्ले"
        },
        "category": "Elephant Tethering Vaults",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -13.0,
            "yaw": -8.0,
            "hfov": 80
          }
        },
        "description": {
          "en": "Massive high-ceilinged interior chambers with thick masonry walls and heavy forged-iron tethering rings embedded into stone vaults.",
          "kn": "ಕೋಣೆಗಳ ಒಳಭಾಗದ ಎತ್ತರದ ಕಲ್ಲಿನ ಛಾವಣಿಗಳಲ್ಲಿ ಆನೆಗಳನ್ನು ಸರಪಳಿಗಳಿಂದ ಕಟ್ಟಲು ಅಳವಡಿಸಲಾದ ಬೃಹತ್ ಕಬ್ಬಿಣದ ಕೊಂಡಿಗಳು.",
          "hi": "कक्षों के भीतर मेहराबदार छत में जड़े हुए लोहे के भारी कुलों यानी छल्ले जिनसे हाथियों को जंजीरों द्वारा बांधा जाता था।"
        },
        "historicalSignificance": {
          "en": "Historic iron anchor points securely tethered royal war tuskers during resting intervals between military training exercises.",
          "kn": "ಯುದ್ಧ ತಾಲೀಮಿನ ನಂತರ ಬಲಿಷ್ಠ ಆನೆಗಳನ್ನು ಭಾರವಾದ ಸರಪಳಿಗಳಿಂದ ಕಟ್ಟಲು ಮಾವುತರು ಈ ಕೊಂಡಿಗಳನ್ನು ಬಳಸುತ್ತಿದ್ದರು.",
          "hi": "विशालकाय युद्ध हाथियों को सैन्य अभ्यासों के बाद सुरक्षित विश्राम देने हेतु प्रयुक्त ऐतिहासिक छल्ले।"
        },
        "architecturalDetails": {
          "en": "Structural vaulting engineered to safely tether multi-ton royal elephants with anchored iron masonry loops.",
          "kn": "ಬಲಿಷ್ಠ ಆನೆಗಳನ್ನು ಕಟ್ಟಿಹಾಕಲು ಕಲ್ಲಿನೊಳಗೆ ಭದ್ರವಾಗಿ ಹುದುಗಿಸಲಾದ ಕಬ್ಬಿಣದ ಕೊಂಡಿಗಳು ಮತ್ತು ಎತ್ತರದ ಕಮಾನು ಛಾವಣಿ.",
          "hi": "विशाल हाथियों को बांधने हेतु छत की चिनाई में गहरे जड़े गए ऐतिहासिक लोहे के छल्ले।"
        },
        "audioNarrationTrackId": "es-chambers",
        "audioSources": {
          "en": "/assets/monuments/hampi/audio/en/es-chambers.mp3",
          "kn": "/assets/monuments/hampi/audio/kn/es-chambers.mp3",
          "hi": "/assets/monuments/hampi/audio/hi/es-chambers.mp3"
        },
        "transcripts": {
          "en": "Inside each cavernous chamber, look toward the vaulted ceilings to observe massive forged-iron rings anchored deep into the granite masonry. These historic anchor points were used by royal mahouts to secure the imperial tuskers with heavy iron chains during their rest periods.",
          "kn": "ಕೋಣೆಗಳ ಒಳಭಾಗದಲ್ಲಿರುವ ಎತ್ತರದ ಕಲ್ಲಿನ ಛಾವಣಿಗಳಲ್ಲಿ ಭದ್ರವಾಗಿ ಅಳವಡಿಸಲಾದ ಬೃಹತ್ ಕಬ್ಬಿಣದ ಕೊಂಡಿಗಳಿವೆ. ರಾಜಮನೆತನದ ಮಾವುತರು ಬಲಿಷ್ಠ ಆನೆಗಳನ್ನು ಭಾರವಾದ ಸರಪಳಿಗಳಿಂದ ಕಟ್ಟಲು ಈ ಐತಿಹಾಸಿಕ ಕೊಂಡಿಗಳನ್ನು ಬಳಸುತ್ತಿದ್ದರು.",
          "hi": "प्रत्येक कक्ष के भीतर मेहराबदार छत में जड़े हुए लोहे के भारी कुलों यानी छल्लों को देखिए। इन ऐतिहासिक छल्लों से शाही महावत विशालकाय हाथियों को मजबूत जंजीरों द्वारा बांधते थे।"
        }
      }
    ]
  }
];

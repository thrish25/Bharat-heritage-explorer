/**
 * Ellora Caves — Authentic 360° Scenes & Hotspot Definitions
 * Integrating ONLY Cave 10 (Vishwakarma) and Cave 16 (Kailasa Temple)
 *
 * Inscribed UNESCO World Heritage Site 1983 | Rashtrakuta & Kalachuri Basalt Architecture
 * Total Scenes: 11 (Cave 10: 4 viewpoints, Cave 16: 7 viewpoints)
 */

import { Scene } from '../../../types/monument';

export const DEFAULT_ELLORA_SCENE_ID = 'cave10_interior';

export const ELLORA_SCENES: Scene[] = [
  {
    "id": "cave10_interior",
    "sceneNumber": 1,
    "caveId": "cave_10",
    "title": {
      "en": "Cave 10 — The Great Chaitya Hall & Central Nave",
      "kn": "ಗುಹೆ ೧೦ — ಮಹಾ ಚೈತ್ಯ ಸಭಾಂಗಣ ಮತ್ತು ಕೇಂದ್ರ ಮಂಟಪ",
      "hi": "गुफा 10 — विशाल चैत्य गृह एवं केंद्रीय वीथिका"
    },
    "subtitle": {
      "en": "Colossal Preaching Buddha, Great Stupa & Vaulted Ribs",
      "kn": "ಬೃಹತ್ ಪ್ರವಚನ ಮುದ್ರೆಯ ಬುದ್ಧ, ಮಹಾ ಸ್ತೂಪ ಹಾಗೂ ಕಮಾನಿನ ಛಾವಣಿ",
      "hi": "विशाल धर्मचक्र प्रवर्तन बुद्ध, महा स्तूप एवं मेहराबी छत"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/cave10_interior.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/cave10_interior.jpg",
      "initialOrientation": {
        "pitch": -2,
        "yaw": 0,
        "hfov": 100
      },
      "limits": {
        "minPitch": -80,
        "maxPitch": 85,
        "minFov": 50,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c10_interior_intro",
      "title": {
        "en": "The Great Chaitya Hall & Stupa Buddha",
        "kn": "ಮಹಾ ಚೈತ್ಯ ಸಭಾಂಗಣ ಮತ್ತು ಸ್ತೂಪ ಬುದ್ಧ",
        "hi": "विशाल चैत्य गृह एवं स्तूप बुद्ध"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c10_interior_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c10_interior_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c10_interior_intro.mp3"
      },
      "transcripts": {
        "en": "You are standing inside the Great Chaitya Hall of Cave 10, known as Vishwakarma or the Carpenter's Cave. Carved around 650 CE, this is the sole Buddhist prayer sanctuary at Ellora. Notice the cathedral-like nave lined with 28 octagonal pillars, culminating in the rock-cut stupa with a fifteen-foot seated Buddha.",
        "kn": "ನೀವು ಈಗ ಎಲ್ಲೋರಾದ ಗುಹೆ 10 ರ ಮಹಾ ಚೈತ್ಯ ಸಭಾಂಗಣದಲ್ಲಿದ್ದೀರಿ. ಇದನ್ನು ವಿಶ್ವಕರ್ಮ ಅಥವಾ ಬಡಗಿಯ ಗುಹೆ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಕ್ರಿ.ಶ. 650 ರ ಸುಮಾರಿಗೆ ಕೆತ್ತಲಾದ ಇದು ಎಲ್ಲೋರಾದ ಏಕೈಕ ಬೌದ್ಧ ಪ್ರಾರ್ಥನಾ ಮಂದಿರವಾಗಿದೆ. 28 ಅಷ್ಟಕೋನ ಕಂಬಗಳು ಮತ್ತು ಬೌದ್ಧ ಸ್ತೂಪದ ಮುಂಭಾಗದಲ್ಲಿ ಪ್ರಲಂಬಪಾದಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ ಬುದ್ಧನ ಭವ್ಯ ಮೂರ್ತಿಯನ್ನು ಗಮನಿಸಿ.",
        "hi": "आप एलोरा की गुफा संख्या 10 के विशाल चैत्य गृह में खड़े हैं, जिसे विश्वकर्मा या बढ़ई की गुफा कहा जाता है। लगभग 650 ईस्वी में निर्मित, यह एलोरा का एकमात्र बौद्ध प्रार्थना स्थल है। 28 अष्टकोणीय स्तंभों और पाषाण स्तूप के सम्मुख प्रलम्बपादासन में विराजित भगवान बुद्ध की भव्य प्रतिमा को देखिए।"
      }
    },
    "hotspots": [
      {
        "id": "c10_buddha_stupa",
        "title": {
          "en": "Colossal Seated Teaching Buddha & Chaitya Stupa",
          "kn": "ಭವ್ಯ ಧರ್ಮಚಕ್ರ ಪ್ರವರ್ತನ ಮುದ್ರೆಯ ಬುದ್ಧ ಮತ್ತು ಚೈತ್ಯ ಸ್ತೂಪ",
          "hi": "विशाल धर्मचक्र प्रवर्तन बुद्ध एवं चैत्य स्तूप"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2.5,
            "yaw": 0,
            "hfov": 90
          }
        },
        "description": {
          "en": "Here at the sanctuary focus is the colossal seated Buddha in Dharmachakra Pravartana Mudra, the posture of turning the wheel of law. He sits on a lion throne with legs pendant, flanked by Bodhisattvas Avalokiteshvara and Vajrapani beneath the celestial Bodhi tree.",
          "kn": "ಇಲ್ಲಿ ಧರ್ಮಚಕ್ರ ಪ್ರವರ್ತನ ಮುದ್ರೆಯಲ್ಲಿ ಕುಳಿತಿರುವ ಭವ್ಯ ಬುದ್ಧನ ವಿಗ್ರಹವಿದೆ. ಸಿಂಹಾಸನದ ಮೇಲೆ ಪ್ರಲಂಬಪಾದಾಸನದಲ್ಲಿ ಆಸೀನನಾಗಿರುವ ಬುದ್ಧನ ಇಕ್ಕೆಲಗಳಲ್ಲಿ ಅವಲೋಕಿತೇಶ್ವರ ಮತ್ತು ವಜ್ರಪಾಣಿ ಬೋಧಿ ವೃಕ್ಷದ ಕೆಳಗೆ ಉಪಸ್ಥಿತರಿದ್ದಾರೆ.",
          "hi": "गर्भगृह के केंद्र में धर्मचक्र प्रवर्तन मुद्रा में भगवान बुद्ध की भव्य प्रतिमा विराजमान है। वे सिंहासन पर प्रलम्बपादासन में विराजमान हैं, जिनके दोनों ओर बोधिवृक्ष की छत्रछाया में अवलोकितेश्वर और वज्रपाणि उपस्थित हैं।"
        },
        "historicalSignificance": {
          "en": "Carved directly from the front face of the monolithic stone stupa, this figure represents Buddha Shakyamuni preaching his first sermon in the Deer Park at Sarnath. He is seated in pralambapadasana (European style with legs pendant on a lotus footstool), sheltered by the celestial Bodhi tree and flanked by attendant Bodhisattvas Avalokiteshvara and Vajrapani hovering on lotus petals.",
          "kn": "ಬೌದ್ಧ ಸ್ತೂಪದ ಮುಂಭಾಗದಲ್ಲೇ ಕೆತ್ತಲಾದ ಈ ಮೂರ್ತಿಯು ಸಾರನಾಥದ ಜಿಂಕೆ ವನದಲ್ಲಿ ಬುದ್ಧನು ನೀಡಿದ ಮೊದಲ ಧರ್ಮೋಪದೇಶವನ್ನು ಚಿತ್ರಿಸುತ್ತದೆ. ಬೋಧಿ ವೃಕ್ಷದ ಕೆಳಗೆ ಪ್ರಲಂಬಪಾದಾಸನದಲ್ಲಿ (ಸಿಂಹಾಸನದ ಮೇಲೆ ಕಾಲುಗಳನ್ನು ಕೆಳಬಿಟ್ಟು ಪಾದಪೀಠದ ಮೇಲೆ ಊರಿ) ಕುಳಿತಿರುವ ಬುದ್ಧನ ಇಕ್ಕೆಲಗಳಲ್ಲಿ ಅವಲೋಕಿತೇಶ್ವರ ಮತ್ತು ವಜ್ರಪಾಣಿ ಬೋಧಿಸತ್ವರು ಕಂಗೊಳಿಸುತ್ತಿದ್ದಾರೆ.",
          "hi": "पाषाण स्तूप के सम्मुख तराशी गई यह मूर्ति सारनाथ के मृगदाव में तथागत बुद्ध द्वारा दिए गए प्रथम धर्मोपदेश को दर्शाती है। भगवान बुद्ध प्रलम्बपादासन (पैरों को नीचे पादपीठ पर रखकर) में सिंहासनारूढ़ हैं। उनके पीछे पवित्र बोधिवृक्ष की शाखाएं हैं तथा दोनों ओर कमलदल पर खड़े अवलोकितेश्वर और वज्रपाणि चामर और वज्र लिए उपस्थित हैं।"
        },
        "architecturalDetails": {
          "en": "Marks the evolutionary transformation of Buddhist stupa worship from aniconic architectural devotion to personified iconographic veneration.",
          "kn": "ಬೌದ್ಧ ಧರ್ಮದಲ್ಲಿ ನಿರಾಕಾರ ಸ್ತೂಪ ಪೂಜೆಯಿಂದ ಮಹಾಯಾನದ ಸಾಕಾರ ಮೂರ್ತಿ ಪೂಜೆಗೆ ಆದ ಮಹತ್ತರ ಪರಿವರ್ತನೆಯನ್ನು ಈ ಶಿಲ್ಪ ಸಾರುತ್ತದೆ.",
          "hi": "यह बौद्ध धर्म में प्रतीकात्मक स्तूप पूजा से सगुण महायान मूर्ति पूजा के ऐतिहासिक संक्रमण का प्रमुख प्रमाण है।"
        },
        "audioNarrationTrackId": "c10_buddha_stupa",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_buddha_stupa.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_buddha_stupa.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_buddha_stupa.mp3"
        }
      },
      {
        "id": "c10_ribbed_vault",
        "title": {
          "en": "Rock-Cut Basalt Ribbed Vault (Kadi-Bandha)",
          "kn": "ಮರದ ತೊಲೆಗಳನ್ನು ಹೋಲುವ ಕಲ್ಲಿನ ಪಕ್ಕೆಲುಬುಗಳು (ಕಡಿ-ಬಂಧ)",
          "hi": "काष्ठ-सदृश पाषाण मेहराब पसलियां (कड़ी-बंध)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 58,
            "yaw": 2,
            "hfov": 90
          }
        },
        "description": {
          "en": "Look up at the ceiling vault. These curved ribs look exactly like bent timber rafters, complete with stone pegs. The rock carvers replicated ancient wooden carpenter construction so faithfully that the cave was named after Vishwakarma, the divine architect.",
          "kn": "ಮೇಲ್ಛಾವಣಿಯ ಕಮಾನುಗಳನ್ನು ನೋಡಿ. ಈ ಕಲ್ಲಿನ ಪಕ್ಕೆಲುಬುಗಳು ಮರದ ತೊಲೆಗಳಂತೆ ಮತ್ತು ಗೂಟಗಳಂತೆ ಕಾಣುತ್ತವೆ. ಶಿಲ್ಪಿಗಳು ಮರದ ಕೆಲಸವನ್ನು ಕಲ್ಲಿನಲ್ಲಿ ಅತ್ಯಂತ ನಿಖರವಾಗಿ ಮರುಸೃಷ್ಟಿಸಿದ್ದರಿಂದಲೇ ಈ ಗುಹೆಗೆ ದೈವಿಕ ಶಿಲ್ಪಿ ವಿಶ್ವಕರ್ಮನ ಹೆಸರು ಬಂದಿದೆ.",
          "hi": "छत के मेहराब को देखिए। ये घुमावदार पसलियां लकड़ी के शहतीरों और खूंटियों जैसी प्रतीत होती हैं। शिल्पकारों ने प्राचीन लकड़ी के काम को पत्थर पर इतनी बारीकी से उतारा कि इस गुफा का नाम देव-शिल्पी विश्वकर्मा के नाम पर पड़ा।"
        },
        "historicalSignificance": {
          "en": "Early Indian rock-cut architects began by excavating caves that precisely simulated the wooden assembly techniques of secular and religious timber halls. The stonecutters of Cave 10 carved imitation wooden timber rafters (kadi-bandha) arching across the barrel vault, complete with carved imitation wooden joinery pegs, ridges, and purlins in solid basalt rock.",
          "kn": "ಪ್ರಾಚೀನ ಭಾರತೀಯ ಶಿಲ್ಪಿಗಳು ಮರದ ಸಭಾಂಗಣಗಳ ವಾಸ್ತುಶಿಲ್ಪ ತಂತ್ರಜ್ಞಾನವನ್ನು ಕಲ್ಲಿನಲ್ಲಿ ಯಥಾವತ್ತಾಗಿ ಪುನರಾವರ್ತಿಸಿದರು. ಗುಹೆ 10 ರ ಮೇಲ್ಛಾವಣಿಯಲ್ಲಿ ಬಾಗಿದ ಮರದ ತೊಲೆಗಳು, ಕೀಲುಗಳು ಮತ್ತು ಮೊಳೆಗಳ ವಿನ್ಯಾಸವನ್ನು ಜೀವಂತ ಬಸಾಲ್ಟ್ ಕಲ್ಲಿನಲ್ಲೇ ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "प्राचीन भारतीय शैल-शिल्पकारों ने काष्ठ भवनों की निर्माण तकनीकों को पत्थर में हूबहू दोहराया। गुफा 10 की छत पर घुमावदार लकड़ी के शहतीरों (कड़ी-बंध), खूंटियों और जोड़ों को ठोस बेसाल्ट चट्टान में बड़ी कुशलता से तराशा गया है।"
        },
        "architecturalDetails": {
          "en": "Demonstrates the lithic translation of timber prototypes, immortalizing ancient Indian wooden carpentry techniques in everlasting basalt.",
          "kn": "ಮರದ ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಕಲೆಯು ಕಲ್ಲಿನ ಶಾಶ್ವತ ರೂಪಕ್ಕೆ ಬದಲಾದ ಪರಿವರ್ತನೆಯನ್ನು ಇದು ಕಣ್ಣಿಗೆ ಕಟ್ಟುವಂತೆ ನಿರೂಪಿಸುತ್ತದೆ.",
          "hi": "यह प्राचीन भारतीय काष्ठकला के पाषाण में अमर होने का अद्वितीय पुरातात्विक साक्ष्य है।"
        },
        "audioNarrationTrackId": "c10_ribbed_vault",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_ribbed_vault.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_ribbed_vault.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_ribbed_vault.mp3"
        }
      },
      {
        "id": "c10_stupa_reliquary",
        "title": {
          "en": "Monolithic Relic Stupa",
          "kn": "ಏಕಶಿಲಾ ಅವಶೇಷ ಸ್ತೂಪ",
          "hi": "अखंड पाषाण स्तूप"
        },
        "category": "Sanctum",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 18,
            "yaw": 0.5,
            "hfov": 90
          }
        },
        "description": {
          "en": "Rising 27 feet into the apse, this cylindrical rock-cut stupa embodies the cosmic mountain and the Parinirvana of the Buddha.",
          "kn": "೨೭ ಅಡಿ ಎತ್ತರದ ಈ ಏಕಶಿಲಾ ಸ್ತೂಪವು ಬೌದ್ಧರ ಪರಮ ಪವಿತ್ರ ಚಿಹ್ನೆಯಾಗಿದೆ.",
          "hi": "27 फीट ऊंचा यह अखंड पाषाण स्तूप तथागत बुद्ध के महापरिनिर्वाण का प्रतीक है।"
        },
        "historicalSignificance": {
          "en": "Carved circa 650 CE under Rashtrakuta patronage, serving as the sacred core of the sanctuary.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟ ಕಾಲದ ಅದ್ಭುತ ವಾಸ್ತುಶಿಲ್ಪ.",
          "hi": "लगभग 650 ईस्वी में निर्मित पावन गर्भगृह।"
        },
        "architecturalDetails": {
          "en": "Encircled by a rock-cut circumambulatory aisle (pradakshina-patha) for silent walking meditation.",
          "kn": "ಪ್ರದಕ್ಷಿಣೆಗಾಗಿ ಕಲ್ಲಿನಲ್ಲಿ ಕೊರೆಯಲಾದ ಪವಿತ್ರ ಪ್ರದಕ್ಷಿಣಾ ಪಥ.",
          "hi": "स्तूप के चारों ओर प्रदक्षिणा पथ निर्मित है।"
        },
        "audioNarrationTrackId": "c10_stupa_reliquary",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_stupa_reliquary.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_stupa_reliquary.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_stupa_reliquary.mp3"
        }
      },
      {
        "id": "c10_octagonal_pillars",
        "title": {
          "en": "28 Octagonal Basalt Colonnade",
          "kn": "೨೮ ಅಷ್ಟಕೋನ ಬಸಾಲ್ಟ್ ಕಂಬಗಳು",
          "hi": "28 अष्टकोणीय पाषाण स्तंभ"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2,
            "yaw": -28,
            "hfov": 90
          }
        },
        "description": {
          "en": "Twenty-eight monolithic columns divide the apsidal hall into a central nave and two side ambulatory aisles.",
          "kn": "ಸಭಾಂಗಣವನ್ನು ಮೂರು ಭಾಗಗಳನ್ನಾಗಿ ವಿಭಾಗಿಸುವ ೨೮ ಬೃಹತ್ ಕಂಬಗಳು.",
          "hi": "केंद्रीय वीथिका को विभाजित करते 28 अखंड स्तंभ।"
        },
        "historicalSignificance": {
          "en": "Carved top-down from living mountain basalt without joints or mortar.",
          "kn": "ಬಂಡೆಯನ್ನು ಮೇಲಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದು ನಿರ್ಮಿಸಲಾದ ಅಪ್ರತಿಮ ಕಂಬಗಳು.",
          "hi": "अखंड बेसाल्ट चट्टान से शीर्ष से नीचे तराशे गए स्तंभ।"
        },
        "architecturalDetails": {
          "en": "Chamfered smoothly from square plinths into eight clean faceted faces with bracket capitals.",
          "kn": "ಚೌಕಾಕಾರದ ಪೀಠದಿಂದ ಅಷ್ಟಕೋನಕ್ಕೆ ಪರಿವರ್ತನೆಯಾಗುವ ಸುಂದರ ವಿನ್ಯಾಸ.",
          "hi": "वर्गाकार आधार से अष्टकोणीय रूप में परिवर्तित होते कलात्मक स्तंभ।"
        },
        "audioNarrationTrackId": "c10_octagonal_pillars",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_octagonal_pillars.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_octagonal_pillars.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_octagonal_pillars.mp3"
        }
      }
    ]
  },
  {
    "id": "cave10_gallery",
    "sceneNumber": 2,
    "caveId": "cave_10",
    "title": {
      "en": "Cave 10 — Upper Music Gallery (Balcony)",
      "kn": "ಗುಹೆ ೧೦ — ಮೇಲಿನ ಸಂಗೀತ ಗ್ಯಾಲರಿ (ಬಾಲ್ಕನಿ)",
      "hi": "गुफा 10 — ऊपरी संगीत वीथिका (झरोखा)"
    },
    "subtitle": {
      "en": "Overlooking the Cathedral Nave & Stone Rafters",
      "kn": "ಕೇಂದ್ರ ಸಭಾಂಗಣ ಮತ್ತು ಶಿಲಾ ಕಮಾನುಗಳ ನೋಟ",
      "hi": "केंद्रीय कक्ष एवं प्रस्तर पसलियों का विहंगम दृश्य"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/cave10_gallery.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/cave10_gallery.jpg",
      "initialOrientation": {
        "pitch": -10,
        "yaw": 0,
        "hfov": 105
      },
      "limits": {
        "minPitch": -75,
        "maxPitch": 80,
        "minFov": 50,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c10_gallery_intro",
      "title": {
        "en": "Upper Music Balcony & Timber-Vault Close-Up",
        "kn": "ಮೇಲಿನ ಸಂಗೀತ ಬಾಲ್ಕನಿ ಮತ್ತು ಕಲ್ಲಿನ ತೊಲೆಗಳ ನಿಕಟ ನೋಟ",
        "hi": "ऊपरी संगीत बालकनी एवं पाषाण मेहराब का निकट दृश्य"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c10_gallery_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c10_gallery_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c10_gallery_intro.mp3"
      },
      "transcripts": {
        "en": "You have ascended to the Upper Music Balcony of Cave 10. Historically reserved for monastic musicians and chanting monks, this mezzanine level offers an extraordinary close-up view of the imitation wooden timber ribs arched across the stone ceiling.",
        "kn": "ನೀವು ಗುಹೆ 10 ರ ಮೇಲಿನ ಸಂಗೀತ ಬಾಲ್ಕನಿಯಲ್ಲಿದ್ದೀರಿ. ಪುರಾತನ ಕಾಲದಲ್ಲಿ ಬೌದ್ಧ ಸನ್ಯಾಸಿಗಳ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಸಂಗೀತಕ್ಕಾಗಿ ಇದನ್ನು ಬಳಸಲಾಗುತ್ತಿತ್ತು. ಇಲ್ಲಿಂದ ಮೇಲ್ಛಾವಣಿಯ ಮರದಂತಿರುವ ಕಲ್ಲಿನ ಪಕ್ಕೆಲುಬುಗಳನ್ನು ಹತ್ತಿರದಿಂದ ವೀಕ್ಷಿಸಬಹುದು.",
        "hi": "आप गुफा संख्या 10 की ऊपरी संगीत बालकनी में हैं। प्राचीन काल में भिक्षुओं के गायन और प्रार्थना के लिए आरक्षित, यह गैलरी छत पर तराशी गई लकड़ी जैसी पसलियों का मनमोहक दृश्य प्रस्तुत करती है।"
      }
    },
    "hotspots": [
      {
        "id": "c10_music_gallery",
        "title": {
          "en": "Monastic Chanting & Music Balcony (Mezzanine)",
          "kn": "ಮೇಲಿನ ಸಂಗೀತ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ಬಾಲ್ಕನಿ (ಮೆಜ್ಜನೈನ್)",
          "hi": "ऊपरी संगीत एवं जप वीथिका (बालकनी)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -25,
            "yaw": 0,
            "hfov": 90
          }
        },
        "description": {
          "en": "This vaulted balcony spans across the entrance nave. Acoustic tests demonstrate that the vaulted basalt ceiling acts as a natural parabolic resonator, enhancing deep low-frequency monastic chanting throughout the hall.",
          "kn": "ಪ್ರವೇಶದ್ವಾರದ ಮೇಲಿರುವ ಈ ಬಾಲ್ಕನಿಯು ಸಭಾಂಗಣಕ್ಕೆ ಮುಖಮಾಡಿದೆ. ಇಲ್ಲಿನ ಕಲ್ಲಿನ ಮೇಲ್ಛಾವಣಿಯು ನೈಸರ್ಗಿಕ ಧ್ವನಿವರ್ಧಕದಂತೆ ವರ್ತಿಸಿ, ಬೌದ್ಧ ಸನ್ಯಾಸಿಗಳ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಮಂತ್ರಘೋಷವನ್ನು ಇಡೀ ಗುಹೆಯಲ್ಲಿ ಗಂಭೀರವಾಗಿ ಅನುರಣಿಸುತ್ತದೆ.",
          "hi": "प्रवेश द्वार के ऊपर स्थित यह बालकनी प्रार्थना कक्ष के सामने खुलती है। यहाँ की मेहराबदार छत एक प्राकृतिक ध्वनि-प्रतिध्वनि यंत्र की तरह कार्य करती है, जिससे भिक्षुओं का गंभीर मंत्रोच्चार पूरे कक्ष में गूंजता था।"
        },
        "historicalSignificance": {
          "en": "Monks and visitors stood on this upper balcony during sacred liturgical services. The combination of the curved basalt ribs and the high barrel vault creates a natural stone resonator, amplifying deep low-frequency vocal chants. The carved parapet frieze depicts musicians with mridangams, cymbals, and flutes.",
          "kn": "ಪವಿತ್ರ ಧಾರ್ಮಿಕ ವಿಧಿಗಳ ಸಮಯದಲ್ಲಿ ಸನ್ಯಾಸಿಗಳು ಈ ಬಾಲ್ಕನಿಯಲ್ಲಿ ನಿಂತು ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಸ್ತೋತ್ರಗಳನ್ನು ಹಾಡುತ್ತಿದ್ದರು. ಇದರ ಕೈಪಿಡಿ ಗೋಡೆಯ ಮೇಲೆ ಮೃದಂಗ, ತಾಳ ಮತ್ತು ಕೊಳಲು ನುಡಿಸುವ ಸಂಗೀತಗಾರರ ಹಾಗೂ ನರ್ತಕರ ಸುಂದರ ಉಬ್ಬುಶಿಲ್ಪಗಳಿವೆ.",
          "hi": "धार्मिक अनुष्ठानों के समय भिक्षु इस ऊपरी वीथिका में एकत्र होकर जप और संगीत प्रस्तुत करते थे। इसकी मुंडेर पर मृदंग, मंजीरा और बांसुरी बजाते हुए गंधर्वों और नर्तकियों के अत्यंत सुंदर शिल्प उकेरे गए हैं।"
        },
        "architecturalDetails": {
          "en": "Provides tangible evidence of the integral role of music and choral chant in 7th-century Mahayana Buddhist rituals.",
          "kn": "ಏಳನೇ ಶತಮಾನದ ಬೌದ್ಧ ಆರಾಧನೆಯಲ್ಲಿ ಸಂಗೀತ ಮತ್ತು ಸಾಮೂಹಿಕ ಗಾಯನದ ಮಹತ್ವವನ್ನು ಈ ಬಾಲ್ಕನಿಯು ಸ್ಪಷ್ಟವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.",
          "hi": "यह सातवीं शताब्दी के महायान बौद्ध अनुष्ठानों में संगीत और समवेत स्वर के अभिन्न महत्व का प्रत्यक्ष प्रमाण है।"
        },
        "audioNarrationTrackId": "c10_music_gallery",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_music_gallery.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_music_gallery.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_music_gallery.mp3"
        }
      },
      {
        "id": "c10_rib_perspective",
        "title": {
          "en": "Acoustic Vaulting Perspective",
          "kn": "ಧ್ವನಿ ತರಂಗಗಳ ಕಮಾನು ನೋಟ",
          "hi": "ध्वनि विस्तारक मेहराबी दृष्टिकोण"
        },
        "category": "Acoustics",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 35,
            "yaw": 0,
            "hfov": 90
          }
        },
        "description": {
          "en": "Direct visual axis looking along the 25-meter barrel vault toward the stupa.",
          "kn": "ಸ್ತೂಪದ ಕಡೆಗೆ ಚಾಚಿರುವ ೨೫ ಮೀಟರ್ ಕಮಾನಿನ ಅದ್ಭುತ ನೋಟ.",
          "hi": "स्तूप की ओर जाती 25 मीटर लंबी गुंबदाकार छत का दृश्य।"
        },
        "historicalSignificance": {
          "en": "The parabolic curve reflects chant frequencies directly back down to the assembly.",
          "kn": "ಮಂತ್ರ ಪಠಣದ ನಾದವನ್ನು ಪ್ರತಿಧ್ವನಿಸುವ ಶಕ್ತಿಶಾಲಿ ಕಮಾನು.",
          "hi": "मंत्रोच्चार की ध्वनि को प्रतिध्वनित करती प्राकृतिक संरचना।"
        },
        "architecturalDetails": {
          "en": "Chiseled to replicate wooden rib rafters of ancient Vedic halls.",
          "kn": "ಪ್ರಾಚೀನ ಮರದ ವಾಸ್ತುಶಿಲ್ಪದ ನಿಖರ ಕಲ್ಲಿನ ಪ್ರತಿರೂಪ.",
          "hi": "काष्ठ शिल्प की नकल करती पत्थर की नक्काशी।"
        },
        "audioNarrationTrackId": "c10_rib_perspective",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_rib_perspective.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_rib_perspective.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_rib_perspective.mp3"
        }
      }
    ]
  },
  {
    "id": "cave10_courtyard",
    "sceneNumber": 3,
    "caveId": "cave_10",
    "title": {
      "en": "Cave 10 — Monolithic Courtyard & Chaitya Façade",
      "kn": "ಗುಹೆ ೧೦ — ಏಕಶಿಲಾ ಪ್ರಾಂಗಣ ಮತ್ತು ಚೈತ್ಯ ಮುಂಭಾಗ",
      "hi": "गुफा 10 — अखंड प्रांगण एवं चैत्य मुखौटा"
    },
    "subtitle": {
      "en": "Rock-Cut Approach, Portico & Side Chapels",
      "kn": "ಬಂಡೆ ಕೊರೆದ ಪ್ರವೇಶ ದ್ವಾರ, ಮಂಟಪ ಹಾಗೂ ಉಪ ದೇಗುಲಗಳು",
      "hi": "शैलकर्तित प्रवेश द्वार, बरामदा एवं पार्श्व देवालय"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/cave10_courtyard.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/cave10_courtyard.jpg",
      "initialOrientation": {
        "pitch": 5,
        "yaw": 0,
        "hfov": 105
      },
      "limits": {
        "minPitch": -60,
        "maxPitch": 75,
        "minFov": 55,
        "maxFov": 125
      }
    },
    "audioNarration": {
      "trackId": "c10_courtyard_intro",
      "title": {
        "en": "Monolithic Sunken Courtyard & Chaitya Façade",
        "kn": "ಏಕಶಿಲಾ ಪ್ರವೇಶ ಅಂಗಳ ಮತ್ತು ಮುಂಭಾಗ",
        "hi": "अखंड पाषाण प्रांगण एवं चैत्य अग्रभाग"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c10_courtyard_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c10_courtyard_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c10_courtyard_intro.mp3"
      },
      "transcripts": {
        "en": "This is the monolithic sunken courtyard of Cave 10. Cut directly into the basalt hillside, the courtyard features an ornate two-storey façade with entrance doorways leading into the prayer hall, flanked by guardian figures and celestial nagas.",
        "kn": "ಇದು ಗುಹೆ 10 ರ ಆಳವಾದ ಪ್ರವೇಶ ಅಂಗಳವಾಗಿದೆ. ಬೆಟ್ಟದ ಬಸಾಲ್ಟ್ ಬಂಡೆಯನ್ನು ಕಡಿದು ನಿರ್ಮಿಸಲಾದ ಈ ಅಂಗಳವು ಎರಡು ಹಂತಗಳ ಮುಂಭಾಗವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಪ್ರವೇಶದ್ವಾರಗಳು ಪ್ರಾರ್ಥನಾ ಮಂದಿರಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತವೆ.",
        "hi": "यह गुफा संख्या 10 का अखंड पाषाण प्रांगण है। पहाड़ी की बेसाल्ट चट्टान को काटकर बनाया गया यह प्रांगण दो मंजिला अग्रभाग और प्रार्थना कक्ष के अलंकृत द्वारों को दर्शाता है।"
      }
    },
    "hotspots": [
      {
        "id": "c10_courtyard_facade",
        "title": {
          "en": "Monolithic Chaitya Façade",
          "kn": "ಏಕಶಿಲಾ ಚೈತ್ಯ ಮುಂಭಾಗ",
          "hi": "शैलकर्तित चैत्य मुखौटा"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 12,
            "yaw": 0,
            "hfov": 90
          }
        },
        "description": {
          "en": "The sunken rock courtyard frames the grand Chaitya arch façade rising toward the sky.",
          "kn": "ಬೆಟ್ಟವನ್ನು ಕೊರೆದು ನಿರ್ಮಿಸಲಾದ ಭವ್ಯ ಚೈತ್ಯ ಮುಖಮಂಟಪ.",
          "hi": "आकाश की ओर उठता भव्य चैत्य मेहराबदार मुखौटा।"
        },
        "historicalSignificance": {
          "en": "Excavated into the Charanandri basalt ridge circa 650 CE.",
          "kn": "ಕ್ರಿ.ಶ. ೬೫೦ ರ ಸುಮಾರಿಗೆ ಬೆಟ್ಟವನ್ನು ಕೊರೆದು ನಿರ್ಮಿಸಲಾಯಿತು.",
          "hi": "लगभग 650 ईस्वी में शैलकर्तित किया गया।"
        },
        "architecturalDetails": {
          "en": "Integrates double-storey pillared galleries flanking the entry steps.",
          "kn": "ಪ್ರವೇಶ ಮೆಟ್ಟಿಲುಗಳ ಇಕ್ಕೆಲಗಳಲ್ಲಿ ಎರಡು ಮಹಡಿಯ ಕಂಬಗಳ ಸಾಲುಗಳಿವೆ.",
          "hi": "प्रवेश मार्ग के दोनों ओर दो मंजिला नक्काशीदार दीर्घाएं हैं।"
        },
        "audioNarrationTrackId": "c10_courtyard_facade",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_courtyard_facade.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_courtyard_facade.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_courtyard_facade.mp3"
        }
      },
      {
        "id": "c10_courtyard_portico",
        "title": {
          "en": "Southern Multi-Storey Portico",
          "kn": "ದಕ್ಷಿಣದ ಬಹುಮಹಡಿ ಮಂಟಪ",
          "hi": "दक्षिणी बहुमंजिला बरामदा"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2,
            "yaw": -52,
            "hfov": 90
          }
        },
        "description": {
          "en": "Monolithic pillared verandas carved directly into the southern cliff flank.",
          "kn": "ದಕ್ಷಿಣ ಬಂಡೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಏಕಶಿಲಾ ಮುಖಮಂಟಪ.",
          "hi": "पहाड़ी के दक्षिणी भाग में उत्कीर्ण बरामदा।"
        },
        "historicalSignificance": {
          "en": "Housed visiting Buddhist monks and scholars during seasonal retreats (vassa).",
          "kn": "ವರ್ಷಾಋತುವಿನಲ್ಲಿ ಬೌದ್ಧ ಭಿಕ್ಷುಗಳಿಗೆ ಆಶ್ರಯ ನೀಡುತ್ತಿದ್ದ ಮಂಟಪಗಳು.",
          "hi": "वर्षावास के दौरान बौद्ध भिक्षुओं का निवास स्थल।"
        },
        "architecturalDetails": {
          "en": "Square-shafted pillars with lotus medallions and carved brackets.",
          "kn": "ಕಮಲದ ಹೂವಿನ ಕೆತ್ತನೆಗಳಿರುವ ಕಲ್ಲಿನ ಕಂಬಗಳು.",
          "hi": "कमल पुष्पों से अलंकृत पाषाण स्तंभ।"
        },
        "audioNarrationTrackId": "c10_courtyard_portico",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_courtyard_portico.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_courtyard_portico.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_courtyard_portico.mp3"
        }
      }
    ]
  },
  {
    "id": "cave10_terrace",
    "sceneNumber": 4,
    "caveId": "cave_10",
    "title": {
      "en": "Cave 10 — Upper Chaitya Terrace & Sun Window",
      "kn": "ಗುಹೆ ೧೦ — ಮೇಲಿನ ಚೈತ್ಯ ತಾರಸಿ ಮತ್ತು ಸೂರ್ಯ ಕಿಂಡಿ",
      "hi": "गुफा 10 — ऊपरी चैत्य छत एवं सूर्य गवाक्ष"
    },
    "subtitle": {
      "en": "Horseshoe Arch, Gandharvas & Rock Balcony",
      "kn": "ಕುದುರೆ ಲಾಳದ ಕಮಾನು, ಗಂಧರ್ವರು ಹಾಗೂ ಶಿಲಾ ಬಾಲ್ಕನಿ",
      "hi": "अश्वनाल मेहराब, गंधर्व एवं प्रस्तर झरोखा"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/cave10_terrace.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/cave10_terrace.jpg",
      "initialOrientation": {
        "pitch": 2,
        "yaw": 85,
        "hfov": 100
      },
      "limits": {
        "minPitch": -70,
        "maxPitch": 80,
        "minFov": 50,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c10_terrace_intro",
      "title": {
        "en": "Upper Sun Window Terrace & Façade View",
        "kn": "ಮೇಲಿನ ಸೂರ್ಯ ಕಿಟಕಿ ತಾರಸಿ",
        "hi": "ऊपरी सूर्य खिड़की छत एवं अग्रभाग"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c10_terrace_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c10_terrace_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c10_terrace_intro.mp3"
      },
      "transcripts": {
        "en": "Standing on the high rock-cut terrace, you overlook the courtyard below and face the grand horseshoe-shaped Chaitya sun window. This architectural marvel was engineered to filter early morning sunlight straight onto the face of the Buddha within.",
        "kn": "ಈ ಎತ್ತರದ ಕಲ್ಲಿನ ತಾರಸಿಯ ಮೇಲೆ ನಿಂತು ನೋಡಿದಾಗ, ಕೆಳಗಿನ ಅಂಗಳ ಮತ್ತು ಭವ್ಯವಾದ ಅರ್ಧಚಂದ್ರಾಕಾರದ ಚೈತ್ಯ ಸೂರ್ಯ ಕಿಟಕಿಯನ್ನು ಕಾಣಬಹುದು. ಬೆಳಗಿನ ಸೂರ್ಯನ ಕಿರಣಗಳು ನೇರವಾಗಿ ಬುದ್ಧನ ಮುಖದ ಮೇಲೆ ಬೀಳುವಂತೆ ಇದನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
        "hi": "इस ऊंची पाषाण छत से आप नीचे के प्रांगण और विशाल चैत्य सूर्य-खिड़की को देख सकते हैं। सुबह की धूप सीधे बुद्ध प्रतिमा पर पड़ने के लिए इसे विशेष वास्तुशिल्प द्वारा बनाया गया था।"
      }
    },
    "hotspots": [
      {
        "id": "c10_sun_window",
        "title": {
          "en": "Horseshoe Chaitya Sun Window (Kudu Arch)",
          "kn": "ಅರ್ಧಚಂದ್ರಾಕಾರದ ಚೈತ್ಯ ಸೂರ್ಯ ಕಿಟಕಿ (ಕುಡು ಕಮಾನು)",
          "hi": "अश्वनालाकार चैत्य सूर्य-गवाक्ष (कूडु मेहराब)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 5,
            "yaw": 85,
            "hfov": 90
          }
        },
        "description": {
          "en": "The horseshoe-shaped sun window, or kudu arch, is one of the hallmarks of Indian rock-cut architecture. It functions as both a decorative exterior feature and an acoustic sound-funnel, as well as a sacred natural light skylight.",
          "kn": "ಕುದುರೆ ಲಾಳದ ಆಕಾರದ ಸೂರ್ಯ ಕಿಟಕಿ, ಅಥವಾ ಕುಡು ಕಮಾನು, ಭಾರತೀಯ ಕಲ್ಲಿನ ವಾಸ್ತುಶಿಲ್ಪದ ಪ್ರಮುಖ ಲಕ್ಷಣವಾಗಿದೆ. ಇದು ಮುಂಭಾಗದ ಸೌಂದರ್ಯವನ್ನು ಹೆಚ್ಚಿಸುವುದಲ್ಲದೆ, ಸಭಾಂಗಣಕ್ಕೆ ಬೆಳಕು ಮತ್ತು ಶಬ್ದ ತರಂಗಗಳನ್ನು ಹರಿಸುವ ನೈಸರ್ಗಿಕ ದ್ವಾರವಾಗಿದೆ.",
          "hi": "घोड़े की नाल के आकार की यह सूर्य-खिड़की, जिसे कूडु मेहराब कहा जाता है, भारतीय शैल-स्थापत्य की पहचान है। यह बाहरी सुंदरता के साथ-साथ गुफा के भीतर प्रकाश और ध्वनि पहुंचाने का प्राकृतिक माध्यम है।"
        },
        "historicalSignificance": {
          "en": "This monumental opening serves as the primary solar aperture of the sanctuary. During certain solar alignments, rays of sunlight pierce through this horseshoe window, traversing the dark pillared nave and dramatically illuminating the seated Buddha deep inside the rock.",
          "kn": "ಈ ಬೃಹತ್ ಕಿಟಕಿಯು ಪ್ರಾರ್ಥನಾ ಮಂದಿರದ ಪ್ರಮುಖ ಬೆಳಕಿನ ಕಿಂಡಿಯಾಗಿದೆ. ನಿರ್ದಿಷ್ಟ ಋತುಗಳಲ್ಲಿ ಮುಂಜಾನೆಯ ಸೂರ್ಯನ ಕಿರಣಗಳು ಈ ಕಿಟಕಿಯ ಮೂಲಕ ನೇರವಾಗಿ ನುಗ್ಗಿ, ಕತ್ತಲೆಯ ಸಭಾಂಗಣವನ್ನು ದಾಟಿ ಗರ್ಭಗುಡಿಯೊಳಗಿನ ಬುದ್ಧನ ಮುಖವನ್ನು ಪ್ರಕಾಶಮಾನವಾಗಿ ಬೆಳಗುತ್ತವೆ.",
          "hi": "यह विशाल गवाक्ष गुफा के प्राथमिक प्रकाश स्रोत का कार्य करता है। सूर्य के विशिष्ट संरेखण के समय प्रातःकाल की धूप इस खिड़की से छनकर अंधेरे कक्ष को पार करती हुई सीधे गर्भगृह में स्थापित बुद्ध प्रतिमा के मुख को आलोकित करती है।"
        },
        "architecturalDetails": {
          "en": "Represents the structural climax of the Indian chaitya window tradition, featuring ornate trefoil lobes, flanking nagas, and celestial Vidyadharas.",
          "kn": "ಭಾರತೀಯ ಚೈತ್ಯ ಕಿಟಕಿ ಪರಂಪರೆಯ ಅತ್ಯುನ್ನತ ಹಂತವನ್ನು ಇದು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಇದರ ಸುತ್ತಲೂ ವಿದ್ಯಾಧರರು ಮತ್ತು ಸ್ವರ್ಗೀಯ ದಂಪತಿಗಳ ಸುಂದರ ಕೆತ್ತನೆಗಳಿವೆ.",
          "hi": "यह भारतीय चैत्य खिड़की परंपरा का चरमोत्कर्ष है, जिसके किनारों पर विद्याधरों, नागों और आकाशीय गंधर्वों की उत्कृष्ट नक्काशी है।"
        },
        "audioNarrationTrackId": "c10_sun_window",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_sun_window.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_sun_window.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_sun_window.mp3"
        }
      },
      {
        "id": "c10_gandharva_frieze",
        "title": {
          "en": "Celestial Gandharva Spandrel Relief",
          "kn": "ಆಕಾಶ ಗಂಧರ್ವರ ಉಬ್ಬುಶಿಲ್ಪ",
          "hi": "दिव्य गंधर्व एवं अप्सरा शिल्प"
        },
        "category": "Relief",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 22,
            "yaw": 85,
            "hfov": 90
          }
        },
        "description": {
          "en": "Hovering celestial couples carrying garlands and celestial offerings frame the top of the sun window.",
          "kn": "ಸೂರ್ಯ ಕಿಂಡಿಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ಹೂಮಾಲೆ ಹಿಡಿದು ಹಾರುತ್ತಿರುವ ಗಂಧರ್ವ ದಂಪತಿಗಳು.",
          "hi": "सूर्य गवाक्ष के शीर्ष पर पुष्पमालाएं लिए उड़ते दिव्य युगल।"
        },
        "historicalSignificance": {
          "en": "Exemplifies masterly high-relief sculpting during the golden Kalachuri-Rashtrakuta transition.",
          "kn": "ಕಲಾಚುರಿ-ರಾಷ್ಟ್ರಕೂಟ ಕಾಲದ ಶಿಲ್ಪಕಲೆಯ ಅತ್ಯುನ್ನತ ಮಾದರಿ.",
          "hi": "उत्कृष्ट उत्तर-गुप्त शैल मूर्तिकला का अप्रतिम उदाहरण।"
        },
        "architecturalDetails": {
          "en": "The flowing drapery and animated gestures appear fluid despite being sculpted in basalt.",
          "kn": "ಗಟ್ಟಿಯಾದ ಬಸಾಲ್ಟ್ ಕಲ್ಲಿನಲ್ಲೂ ರೇಷ್ಮೆ ವಸ್ತ್ರಗಳಂತೆ ನುಣುಪಾಗಿ ಕೆತ್ತಲಾದ ಶಿಲ್ಪಗಳು.",
          "hi": "कठोर पाषाण पर भी अत्यंत सजीव एवं कोमल भाव-भंगिमाएं।"
        },
        "audioNarrationTrackId": "c10_gandharva_frieze",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c10_gandharva_frieze.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c10_gandharva_frieze.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c10_gandharva_frieze.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_outer_forecourt",
    "sceneNumber": 5,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Outer Forecourt & Entrance Screen",
      "kn": "ಗುಹೆ ೧೬ — ಹೊರ ಪ್ರಾಂಗಣ ಮತ್ತು ಪ್ರವೇಶ ಗೋಪುರ ಪರದೆ",
      "hi": "गुफा 16 — बाह्य प्रांगण एवं प्रवेश द्वार"
    },
    "subtitle": {
      "en": "Monolithic Gopuram Gateway & Western Screen",
      "kn": "ಏಕಶಿಲಾ ಗೋಪುರ ಮಹಾದ್ವಾರ ಮತ್ತು ಪಶ್ಚಿಮ ಗೋಡೆ",
      "hi": "अखंड गोपुरम महाद्वार एवं पश्चिमी प्राचीर"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_outer_forecourt.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_outer_forecourt.jpg",
      "initialOrientation": {
        "pitch": -2,
        "yaw": 15,
        "hfov": 95
      },
      "limits": {
        "minPitch": -60,
        "maxPitch": 65,
        "minFov": 45,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "c16_outer_forecourt_intro",
      "title": {
        "en": "Outer Entrance Forecourt & Monolithic Screen",
        "kn": "ಹೊರ ಪ್ರವೇಶ ಪ್ರಾಂಗಣ ಮತ್ತು ಏಕಶಿಲಾ ಗೋಡೆ",
        "hi": "बाह्य प्रवेश प्रांगण एवं अखंड पाषाण प्राकार"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_outer_forecourt_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_outer_forecourt_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_outer_forecourt_intro.mp3"
      },
      "transcripts": {
        "en": "Welcome to the entrance forecourt of Cave 16, the monumental Kailasa Temple. Commissioned by Rashtrakuta King Krishna the First in the eighth century, this entire complex was carved top-down from a single basalt hill. You are facing the monolithic two-storey entrance screen that guards the sacred precinct.",
        "kn": "ಎಲ್ಲೋರಾದ ವಿಶ್ವವಿಖ್ಯಾತ ಕೈಲಾಸ ದೇವಾಲಯದ ಹೊರ ಪ್ರಾಂಗಣಕ್ಕೆ ಸುಸ್ವಾಗತ. ಎಂಟನೇ ಶತಮಾನದಲ್ಲಿ ರಾಷ್ಟ್ರಕೂಟ ರಾಜ ಒಂದನೇ ಕೃಷ್ಣನ ಆಳ್ವಿಕೆಯಲ್ಲಿ ನಿರ್ಮಾಣವಾದ ಈ ಇಡೀ ದೇವಾಲಯವನ್ನು ಒಂದೇ ಒಂದು ಬಂಡೆಯಿಂದ ಮೇಲಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದು ನಿರ್ಮಿಸಲಾಗಿದೆ. ನಿಮ್ಮೆದುರು ಬೃಹತ್ ಏಕಶಿಲಾ ಪ್ರವೇಶ ಗೋಪುರವಿದೆ.",
        "hi": "गुफा संख्या 16, कैलाश मंदिर के प्रवेश प्रांगण में आपका स्वागत है। आठवीं शताब्दी में राष्ट्रकूट राजा कृष्ण प्रथम द्वारा निर्मित, यह संपूर्ण मंदिर ऊपर से नीचे की ओर केवल एक ही पर्वत को तराश कर बनाया गया है। आपके सामने इसका अखंड दो मंजिला प्रवेश गोपुरम है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_monolithic_screen",
        "title": {
          "en": "Basalt Rock-Cut Screen & Gopuram Façade",
          "kn": "ಏಕಶಿಲಾ ಪ್ರವೇಶ ಪ್ರಕಾರ ಗೋಡೆ ಮತ್ತು ಗೋಪುರ",
          "hi": "अखंड पाषाण प्राकार एवं गोपुरम अग्रभाग"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 10,
            "yaw": 11,
            "hfov": 90
          }
        },
        "description": {
          "en": "This rock-cut entrance screen is twelve meters thick. It separates the sacred subterranean sanctuary from the external world, creating a dramatic sense of discovery when visitors step through the central barrel-vaulted passage into the sunlit courtyard.",
          "kn": "ಹನ್ನೆರಡು ಮೀಟರ್ ದಪ್ಪವಿರುವ ಈ ಏಕಶಿಲಾ ಪ್ರವೇಶ ಗೋಡೆಯು ದೇವಾಲಯವನ್ನು ಹೊರಗಿನ ಪ್ರಪಂಚದಿಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ. ಇದರ ಕಲ್ಲಿನ ಕಮಾನು ಮಾರ್ಗದ ಮೂಲಕ ಒಳಗೆ ಕಾಲಿಟ್ಟಾಗ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಕೂಡಿದ ಭವ್ಯ ಅಂಗಳವು ವಿಸ್ಮಯಕಾರಿಯಾಗಿ ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.",
          "hi": "यह पाषाण प्रवेश प्राकार बारह मीटर मोटा है। यह मंदिर परिसर को बाहरी दुनिया से अलग करता है। जब दर्शक इसके मध्यवर्ती मार्ग से होकर सूर्य के प्रकाश से जगमगाते प्रांगण में प्रवेश करते हैं, तो एक अलौकिक दृश्य प्रकट होता है।"
        },
        "historicalSignificance": {
          "en": "A towering two-storey rock screen mimicking a traditional Dravidian Gopuram with a central barrel-vaulted passage piercing through the 12-meter thick living stone wall into the courtyard. The exterior is adorned with colossal guardian dvarapalas, and narrative panels depicting Shiva, Vishnu, and celestial dancers.",
          "kn": "ದ್ರಾವಿಡ ಗೋಪುರ ಶೈಲಿಯಲ್ಲಿ ಕಲ್ಲಿನಲ್ಲೇ ಕೊರೆಯಲಾದ ಎರಡು ಮಹಡಿಗಳ ಈ ಗೋಡೆಯು 12 ಮೀಟರ್ ದಪ್ಪವಾಗಿದೆ. ಇದರ ಹೊರಭಾಗದಲ್ಲಿ ಬೃಹತ್ ದ್ವಾರಪಾಲಕರು, ಶಿವ, ವಿಷ್ಣು ಮತ್ತು ಆಕಾಶ ಕನ್ಯೆಯರ ಸುಂದರ ಕೆತ್ತನೆಗಳಿವೆ.",
          "hi": "द्रविड़ गोपुरम शैली में दो मंजिला तराशा गया यह अखंड प्राकार 12 मीटर मोटा है। इसके बाहरी भित्तियों पर विशाल द्वारपालों, भगवान शिव, विष्णु और आकाशीय अप्सराओं के सजीव शिल्प उकेरे गए हैं।"
        },
        "architecturalDetails": {
          "en": "Acts as a sacred threshold, preserving the natural hillside profile while dividing profane space outside from the divine monument inside.",
          "kn": "ಬೆಟ್ಟದ ಮೂಲ ಎತ್ತರವನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಈ ಗೋಡೆಯು ಹೊರಗಿನ ಪ್ರಾಪಂಚಿಕ ಜಗತ್ತನ್ನು ಒಳಗಿನ ಪವಿತ್ರ ದೈವಿಕ ಲೋಕದಿಂದ ಪ್ರತ್ಯೇಕಿಸುವ ರಕ್ಷಾ ಕವಚವಾಗಿದೆ.",
          "hi": "यह प्राकार पहाड़ी के मूल स्वरूप को सुरक्षित रखते हुए सांसारिक परिवेश और भीतर के पावन मंदिर के बीच एक भव्य आध्यात्मिक सीमा का निर्माण करता है।"
        },
        "audioNarrationTrackId": "c16_monolithic_screen",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_monolithic_screen.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_monolithic_screen.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_monolithic_screen.mp3"
        }
      },
      {
        "id": "c16_gopuram_portal",
        "title": {
          "en": "Monumental Entrance Gateway Portal",
          "kn": "ಭವ್ಯ ಪ್ರವೇಶ ದ್ವಾರ ಮಂಟಪ",
          "hi": "भव्य प्रवेश द्वार मण्डप"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 1,
            "yaw": 11,
            "hfov": 85
          }
        },
        "description": {
          "en": "The barrel-vaulted central entrance passage cut through solid basalt, welcoming pilgrims into the sunken rock courtyard.",
          "kn": "ಘನ ಕಪ್ಪುಶಿಲೆಯಲ್ಲೇ ಕೊರೆಯಲಾದ ಕಮಾನು ಪ್ರವೇಶ ಮಾರ್ಗ, ಭಕ್ತರನ್ನು ತಗ್ಗಿನಲ್ಲಿರುವ ಸೂರ್ಯಕಿರಣದ ಅಂಗಳಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.",
          "hi": "ठोस बेसाल्ट चट्टान में तराशा गया यह केंद्रीय मेहराबी प्रवेश मार्ग आगंतुकों को भव्य पाषाण प्रांगण में प्रवेश कराता है।"
        },
        "historicalSignificance": {
          "en": "Carved by Rashtrakuta masons under King Krishna I (c. 756–774 CE) as the ceremonial entrance into Kailasa.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟ ದೊರೆ ಒಂದನೇ ಕೃಷ್ಣನ ಕಾಲದಲ್ಲಿ ನಿರ್ಮಿಸಲಾದ ಭವ್ಯ ಪ್ರವೇಶ ದ್ವಾರ.",
          "hi": "राष्ट्रकूट नरेश कृष्ण प्रथम (लगभग 756-774 ईस्वी) के काल में कैलाश मंदिर के औपचारिक प्रवेश के रूप में निर्मित।"
        },
        "architecturalDetails": {
          "en": "Flanked by massive jambs and pilasters supporting the upper rock-cut sky bridge level.",
          "kn": "ಮೇಲಿನ ಕಲ್ಲಿನ ಸೇತುವೆಯ ತೂಕವನ್ನು ಹೊರುವ ಭದ್ರ ಕಂಬಗಳು ಮತ್ತು ಚೌಕಟ್ಟುಗಳು.",
          "hi": "ऊपरी शैल सेतु का भार वहन करने वाले विशाल पाषाण द्वारशाखाएं एवं स्तंभ।"
        },
        "audioNarrationTrackId": "c16_gopuram_portal",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_gopuram_portal.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_gopuram_portal.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_gopuram_portal.mp3"
        }
      },
      {
        "id": "c16_outer_dvarapala_screen",
        "title": {
          "en": "Southern Dvarapala & River Goddess Niche",
          "kn": "ದಕ್ಷಿಣ ದ್ವಾರಪಾಲಕ ಮತ್ತು ನದೀ ದೇವತೆಗಳ ಗೂಡು",
          "hi": "दक्षिणी द्वारपाल एवं नदी देवी आलिंद शिल्प"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 5,
            "yaw": -14,
            "hfov": 80
          }
        },
        "description": {
          "en": "High-relief guardian figures and sacred river goddess panels carved into the southern wing of the rock screen facade.",
          "kn": "ಪ್ರವೇಶ ಗೋಡೆಯ ದಕ್ಷಿಣ ಭಾಗದಲ್ಲಿ ಕೆತ್ತಲಾದ ಬೃಹತ್ ದ್ವಾರಪಾಲಕ ಮತ್ತು ಪವಿತ್ರ ನದೀ ದೇವತೆಗಳ ಭವ್ಯ ಉಬ್ಬುಶಿಲ್ಪ.",
          "hi": "प्रवेश प्राकार के दक्षिणी भाग में उत्कीर्ण विशाल रक्षक द्वारपाल एवं पवित्र नदी देवियों की सजीव प्रतिमाएँ।"
        },
        "historicalSignificance": {
          "en": "Purifying symbols greeting worshippers before they cross the sacred threshold into the temple precinct.",
          "kn": "ದೇವಾಲಯದ ಪವಿತ್ರ ಕ್ಷೇತ್ರ ಪ್ರವೇಶಿಸುವ ಮುನ್ನ ಭಕ್ತರನ್ನು ಶುದ್ಧೀಕರಿಸುವ ಸಂಕೇತವಾಗಿ ಇವುಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "पवित्र मंदिर परिसर में प्रवेश से पूर्व भक्तों के आध्यात्मिक शुद्धिकरण के प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Deeply undercut basalt relief demonstrating the peak of 8th-century Rashtrakuta sculptural mastery.",
          "kn": "೮ನೇ ಶತಮಾನದ ರಾಷ್ಟ್ರಕೂಟ ಶಿಲ್ಪಕಲೆಯ ಅತ್ಯುನ್ನತ ಪ್ರೌಢಿಮೆಯನ್ನು ಮೆರೆಯುವ ಆಳವಾದ ಕೆತ್ತನೆ.",
          "hi": "8वीं शताब्दी की राष्ट्रकूट मूर्तिकला की पराकाष्ठा प्रदर्शित करने वाला गहन पाषाण शिल्प।"
        },
        "audioNarrationTrackId": "c16_outer_dvarapala_screen",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_outer_dvarapala_screen.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_outer_dvarapala_screen.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_outer_dvarapala_screen.mp3"
        }
      },
      {
        "id": "c16_quarry_scarp",
        "title": {
          "en": "Charanandri Cliff Quarry Boundary Scarp",
          "kn": "ಚರಣಾದ್ರಿ ಬೆಟ್ಟದ ಕಡಿದಾದ ಬಂಡೆ ಸಾಲು",
          "hi": "चरणाद्रि पहाड़ी की ऊर्ध्वाधर शैल प्राचीर"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 18,
            "yaw": -48,
            "hfov": 90
          }
        },
        "description": {
          "en": "The sheer vertical basalt scarp rising over 30 meters, marking the top-down excavation trench.",
          "kn": "೩೦ ಮೀಟರ್‌ಗೂ ಅಧಿಕ ಎತ್ತರದ ಬಂಡೆಯನ್ನು ಮೇಲಿನಿಂದ ಕೆಳಮುಖವಾಗಿ ಕೊರೆದ ಕಡಿದಾದ ಗಡಿ.",
          "hi": "30 मीटर से अधिक गहरी अखंड खाई जिसे ऊपर से नीचे काटा गया।"
        },
        "historicalSignificance": {
          "en": "Over 200,000 to 400,000 tonnes of basalt were quarried away to isolate the temple monolith.",
          "kn": "ದೇವಾಲಯದ ಬೃಹತ್ ಶಿಲೆಯನ್ನು ಪ್ರತ್ಯೇಕಿಸಲು ೨,೦೦,೦೦೦ ಕ್ಕೂ ಹೆಚ್ಚು ಟನ್ ಕಲ್ಲನ್ನು ತೆಗೆಯಲಾಯಿತು.",
          "hi": "मंदिर के विशाल एकाश्मक स्वरूप को गढ़ने के लिए 200,000 टन से अधिक पाषाण निकाला गया।"
        },
        "architecturalDetails": {
          "en": "Preserves chisel striations and wedge marks from 8th-century master quarrymen.",
          "kn": "೮ನೇ ಶತಮಾನದ ಶಿಲ್ಪಿಗಳ ಉಳಿ ಮತ್ತು ಸುತ್ತಿಗೆಯ ಗುರುತುಗಳು ಇಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಗೋಚರಿಸುತ್ತವೆ.",
          "hi": "8वीं शताब्दी के शिल्पकारों की छेनी और कीलों के ऐतिहासिक निशान यहाँ स्पष्ट दिखाई देते हैं।"
        },
        "audioNarrationTrackId": "c16_quarry_scarp",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_quarry_scarp.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_quarry_scarp.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_quarry_scarp.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_entry_court_dhvajastambha",
    "sceneNumber": 6,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Northern Courtyard & Victory Pillar",
      "kn": "ಗುಹೆ ೧೬ — ಉತ್ತರ ಪ್ರಾಂಗಣ ಮತ್ತು ವಿಜಯ ಧ್ವಜಸ್ತಂಭ",
      "hi": "गुफा 16 — उत्तरी प्रांगण एवं विजय ध्वजस्तंभ"
    },
    "subtitle": {
      "en": "16.5-Meter Monolithic Dhvajastambha & Elephant Sentinel",
      "kn": "೧೬.೫ ಮೀಟರ್ ಎತ್ತರದ ಏಕಶಿಲಾ ಧ್ವಜಸ್ತಂಭ ಮತ್ತು ಗಜ ಶಿಲ್ಪ",
      "hi": "16.5 मीटर ऊँचा अखंड ध्वजस्तंभ एवं गज प्रतिमा"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_entry_court_dhvajastambha.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_entry_court_dhvajastambha.jpg",
      "initialOrientation": {
        "pitch": 12,
        "yaw": -18,
        "hfov": 98
      },
      "limits": {
        "minPitch": -70,
        "maxPitch": 80,
        "minFov": 40,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c16_entry_court_intro",
      "title": {
        "en": "Northern Entry Court & Victory Pillar (Dhvajastambha)",
        "kn": "ಉತ್ತರ ಅಂಗಳ ಮತ್ತು ವಿಜಯ ಧ್ವಜಸ್ತಂಭ",
        "hi": "उत्तरी प्रवेश प्रांगण एवं विजय ध्वजस्तंभ"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_entry_court_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_entry_court_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_entry_court_intro.mp3"
      },
      "transcripts": {
        "en": "You have entered the northern courtyard of Kailash. Towering above you is the northern victory pillar, or Dhvajastambha, rising sixteen point five meters from the courtyard floor. Overhead, an astonishing monolithic rock bridge links the entrance gopuram directly to the Nandi pavilion.",
        "kn": "ನೀವು ಕೈಲಾಸ ದೇವಾಲಯದ ಉತ್ತರ ಅಂಗಳವನ್ನು ಪ್ರವೇಶಿಸಿದ್ದೀರಿ. ನಿಮ್ಮ ಎದುರು ಹದಿನಾರು ಮೀಟರ್ ಎತ್ತರದ ಏಕಶಿಲಾ ವಿಜಯ ಧ್ವಜಸ್ತಂಭವಿದೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಪ್ರವೇಶ ಗೋಪುರವನ್ನು ನಂದಿ ಮಂಟಪಕ್ಕೆ ಸಂಪರ್ಕಿಸುವ ಅಪೂರ್ವ ಕಲ್ಲಿನ ಸೇತುವೆಯನ್ನು ಕಾಣಬಹುದು.",
        "hi": "आप कैलाश मंदिर के उत्तरी प्रांगण में हैं। यहाँ 16.5 मीटर ऊंचा उत्तरी विजय ध्वजस्तंभ सीना ताने खड़ा है। ऊपर देखिए, एक अद्भुत पाषाण सेतु प्रवेश गोपुरम को सीधे नंदी मंडप से जोड़ता है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_dhvajastambha",
        "title": {
          "en": "Northern Monolithic Dhvajastambha (Victory Pillar)",
          "kn": "ಉತ್ತರ ಏಕಶಿಲಾ ಧ್ವಜಸ್ತಂಭ (ವಿಜಯ ಸ್ತಂಭ)",
          "hi": "उत्तरी अखंड ध्वजस्तंभ (विजय स्तंभ)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 22,
            "yaw": 58,
            "hfov": 85
          }
        },
        "description": {
          "en": "Standing sixteen point five meters tall, this northern Dhvajastambha is an engineering masterpiece sculpted directly out of the living courtyard floor.",
          "kn": "೧೬.೫ ಮೀಟರ್ ಎತ್ತರದ ಈ ಉತ್ತರ ಧ್ವಜಸ್ತಂಭವು ಅಂಗಳದ ಮೂಲ ಬಂಡೆಯಲ್ಲೇ ಕೆತ್ತಲಾದ ಅದ್ಭುತ ವಾಸ್ತುಶಿಲ್ಪವಾಗಿದೆ.",
          "hi": "16.5 मीटर ऊँचा यह उत्तरी ध्वजस्तंभ प्रांगण की मूल चट्टान से ही सीधे तराशा गया एक अद्भुत अभियांत्रिकी चमत्कार है।"
        },
        "historicalSignificance": {
          "en": "Dedicated by King Krishna I as an eternal triumph pillar (Kirti Stambha) celebrating Rashtrakuta imperial supremacy and Shaivite devotion.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟ ಸಾಮ್ರಾಜ್ಯದ ವಿಜಯ ಮತ್ತು ಶಿವಭಕ್ತಿಯ ಸಂಕೇತವಾಗಿ ಒಂದನೇ ಕೃಷ್ಣನಿಂದ ನಿರ್ಮಿತ.",
          "hi": "राष्ट्रकूट साम्राज्य के गौरव और शिवभक्ति के शाश्वत प्रतीक के रूप में राजा कृष्ण प्रथम द्वारा समर्पित।"
        },
        "architecturalDetails": {
          "en": "Features a molded square pedestal, sixteen-sided fluted shaft, pot-and-foliage capital, and was crowned with Shiva's trishula emblem.",
          "kn": "ಚೌಕಾಕಾರದ ಪೀಠ, ೧೬ ಮುಖಗಳ ಸುಂದರ ಸ್ತಂಭ ಮತ್ತು ತ್ರಿಶೂಲ ಧಾರಕ ಶಿರೋಭಾಗವನ್ನು ಹೊಂದಿದೆ.",
          "hi": "चौकोर पीठिका, सोलह-पहलूदार स्तंभ और कुंभ-पल्लव शीर्ष, जो कभी त्रिशूल से सुशोभित था।"
        },
        "audioNarrationTrackId": "c16_dhvajastambha",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_dhvajastambha.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_dhvajastambha.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_dhvajastambha.mp3"
        }
      },
      {
        "id": "c16_elephant_monolith",
        "title": {
          "en": "Freestanding Monolithic Royal Basalt Elephant",
          "kn": "ಏಕಶಿಲಾ ರಾಜ ಗಜ ಶಿಲ್ಪ",
          "hi": "एकाश्मक शाही पाषाण गज प्रतिमा"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4,
            "yaw": 100,
            "hfov": 85
          }
        },
        "description": {
          "en": "This life-sized elephant stands proudly in the courtyard, carved completely in the round with naturalistic contours from the living basalt floor.",
          "kn": "ಅಂಗಳದಲ್ಲಿ ಜೀವಂತ ಕಲ್ಲಿನಲ್ಲೇ ಕೆತ್ತಲಾದ ನೈಜ ಗಾತ್ರದ ಭವ್ಯ ಆನೆಯ ಮೂರ್ತಿ, ರಾಜ ಪರಂಪರೆಯ ಗಾಂಭೀರ್ಯವನ್ನು ಬಿಂಬಿಸುತ್ತದೆ.",
          "hi": "प्रांगण की धरातलीय चट्टान से तराशी गई यह आदमकद गज प्रतिमा अपने सजीव शारीरिक सौष्ठव के साथ खड़ी है।"
        },
        "historicalSignificance": {
          "en": "Guardian monolith symbolizing Ashtadiggajas (world elephants) supporting the sacred cosmic mountain.",
          "kn": "ವಿಶ್ವವನ್ನು ಹೊತ್ತು ನಿಂತ ಅಷ್ಟದಿಗ್ಗಜಗಳ ಸಂಕೇತವಾಗಿ ದೇವಾಲಯದ ರಕ್ಷಣೆಗಾಗಿ ನಿಂತ ಗಜ ಶಿಲ್ಪ.",
          "hi": "पवित्र पर्वत को थामने वाले अष्टदिग्गजों के प्रतीक के रूप में स्थापित रक्षक गज।"
        },
        "architecturalDetails": {
          "en": "Sculpted in-situ from bedrock; depicts elaborate ceremonial saddle trappings and bells around its neck.",
          "kn": "ಕತ್ತಿನಲ್ಲಿ ಅಲಂಕೃತ ಗಂಟೆಗಳು ಮತ್ತು ಜೀನುಪಟ್ಟಿಗಳ ನೈಜ ಕೆತ್ತನೆಗಳಿವೆ.",
          "hi": "गले में अलंकृत घंटियों और पीठ पर उत्कीर्ण शाही साज-सज्जा से युक्त।"
        },
        "audioNarrationTrackId": "c16_elephant_monolith",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_elephant_monolith.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_elephant_monolith.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_elephant_monolith.mp3"
        }
      },
      {
        "id": "c16_lankeshwar",
        "title": {
          "en": "Lankeshwara Shrine & Northern Cliff Gallery",
          "kn": "ಲಂಕೇಶ್ವರ ಗುಡಿ ಮತ್ತು ಉತ್ತರ ಕಡಿದಾದ ಗ್ಯಾಲರಿ",
          "hi": "लंकेश्वर मंदिर एवं उत्तरी शैल वीथिका"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 12,
            "yaw": 140,
            "hfov": 85
          }
        },
        "description": {
          "en": "Carved high into the northern vertical quarry cliff, the Lankeshwara gallery houses 27 massive carved pillars, shrines, and surviving fragments of ancient white plaster.",
          "kn": "ಉತ್ತರದ ಕಡಿದಾದ ಬಂಡೆಯಲ್ಲಿ ಕೊರೆಯಲಾದ ಲಂಕೇಶ್ವರ ಗುಡಿಯು ೨೭ ಭವ್ಯ ಕಂಬಗಳು ಮತ್ತು ಪುರಾತನ ಬಿಳಿ ಸುಣ್ಣದ ಲೇಪನದ ಕುರುಹುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
          "hi": "उत्तरी शैल भित्ति में उत्कीर्ण लंकेश्वर वीथिका में 27 विशाल स्तंभ, देवालय और प्राचीन श्वेत प्लास्टर के अवशेष सुरक्षित हैं।"
        },
        "historicalSignificance": {
          "en": "Excavated during the Rashtrakuta period to expand the sacred complex with upper-tier Shaivite halls.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟರ ಕಾಲದಲ್ಲಿ ದೇವಾಲಯ ಸಂಕೀರ್ಣದ ವಿಸ್ತರಣೆಯಾಗಿ ನಿರ್ಮಾಣವಾದ ಮೇಲ್ಮಹಡಿಯ ಸಭಾಂಗಣ.",
          "hi": "राष्ट्रकूट काल में मंदिर परिसर के विस्तार हेतु निर्मित भव्य ऊपरी शैलोत्कीर्ण सभा मंडप।"
        },
        "architecturalDetails": {
          "en": "Features massive cushion-capital pillars and dynamic relief carvings of Shiva Tandava.",
          "kn": "ಶಿವನ ತಾಂಡವ ನೃತ್ಯದ ರೋಮಾಂಚಕ ಶಿಲ್ಪಗಳು ಮತ್ತು ಬೃಹತ್ ಕಂಬಗಳ ಸಾಲು.",
          "hi": "शिव तांडव के सजीव शिल्प और विशाल अलंकृत कुशन-कैपिटल स्तंभ।"
        },
        "audioNarrationTrackId": "c16_lankeshwar",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_lankeshwar.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_lankeshwar.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_lankeshwar.mp3"
        }
      },
      {
        "id": "c16_inner_screen_facade",
        "title": {
          "en": "Gopuram Inner Facade & Courtyard Entrance",
          "kn": "ಪ್ರವೇಶ ಗೋಪುರದ ಒಳ ಮುಖಭಾಗ ಮತ್ತು ಅಂಗಳ",
          "hi": "गोपुरम आंतरिक अग्रभाग एवं प्रांगण प्रवेश"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 8,
            "yaw": -80,
            "hfov": 85
          }
        },
        "description": {
          "en": "The inner courtyard facade of the entrance gopuram screen, richly adorned with relief panels of deities and celestial musicians.",
          "kn": "ಪ್ರವೇಶ ಗೋಪುರದ ಒಳಭಾಗದ ಭಿತ್ತಿಶಿಲ್ಪ, ದೇವತೆಗಳು ಮತ್ತು ಗಂಧರ್ವರ ಸುಂದರ ಕೆತ್ತನೆಗಳಿಂದ ಶೋಭಿಸುತ್ತದೆ.",
          "hi": "प्रवेश गोपुरम का भीतरी प्रांगण अग्रभाग, जो देवी-देवताओं और गंधर्वों के शिल्पों से सज्जित है।"
        },
        "historicalSignificance": {
          "en": "Frame through which visitors transition from the entrance tunnel into the sunlit monolithic world.",
          "kn": "ಪ್ರವೇಶ ಸುರಂಗದಿಂದ ಸೂರ್ಯನ ಬೆಳಕಿನ ಮುಕ್ತ ಆವರಣಕ್ಕೆ ತೆರೆದುಕೊಳ್ಳುವ ದ್ವಾರ.",
          "hi": "प्रवेश मार्ग से खुले पाषाण प्रांगण में प्रवेश का मनोहारी द्वार।"
        },
        "architecturalDetails": {
          "en": "Two tiers of Dravidian niche architecture housing Vaishnava and Shaivite panels in harmonious synthesis.",
          "kn": "ಶೈವ ಮತ್ತು ವೈಷ್ಣವ ಧರ್ಮಗಳ ಸಾಮರಸ್ಯವನ್ನು ಸಾರುವ ಎರಡು ಹಂತಗಳ ಗೂಡು ಶಿಲ್ಪಗಳು.",
          "hi": "शैव और वैष्णव परंपराओं के समन्वय को दर्शाती दो मंजिला द्रविड़ कोष्ठक वास्तुकला।"
        },
        "audioNarrationTrackId": "c16_inner_screen_facade",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_inner_screen_facade.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_inner_screen_facade.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_inner_screen_facade.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_gajalakshmi_vestibule",
    "sceneNumber": 7,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Gaja-Lakshmi Vestibule & Entrance Portal",
      "kn": "ಗುಹೆ ೧೬ — ಗಜಲಕ್ಷ್ಮಿ ಮಂಟಪ ಮತ್ತು ಪ್ರವೇಶ ದ್ವಾರ",
      "hi": "गुफा 16 — गजलक्ष्मी मंडप एवं मुख्य प्रवेश द्वार"
    },
    "subtitle": {
      "en": "Sacred Lustration Relief & Nandi Sanctum Approach",
      "kn": "ಪವಿತ್ರ ಜಲಾಭಿಷೇಕ ಉಬ್ಬುಶಿಲ್ಪ ಮತ್ತು ನಂದಿ ಮಂಟಪ ಪ್ರವೇಶ",
      "hi": "पवित्र जलाभिषेक शिल्प एवं नंदी मंडप पहुंच"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_gajalakshmi_vestibule.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_gajalakshmi_vestibule.jpg",
      "initialOrientation": {
        "pitch": 4,
        "yaw": 0,
        "hfov": 95
      },
      "limits": {
        "minPitch": -65,
        "maxPitch": 75,
        "minFov": 45,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "c16_gajalakshmi_intro",
      "title": {
        "en": "Gaja-Lakshmi Vestibule & Entrance Chamber",
        "kn": "ಗಜಲಕ್ಷ್ಮಿ ಮಂಟಪ ಮತ್ತು ಪ್ರವೇಶ ಕೋಣೆ",
        "hi": "गजलक्ष्मी मंडप एवं प्रवेश कक्ष"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_gajalakshmi_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_gajalakshmi_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_gajalakshmi_intro.mp3"
      },
      "transcripts": {
        "en": "Standing inside the entrance vestibule, you face the majestic Gaja-Lakshmi relief panel. Goddess Lakshmi is seated upon a blooming lotus, lustrated by celestial elephants. This auspicious threshold sculpture welcomes devotees into the sacred world of Mount Kailash.",
        "kn": "ಪ್ರವೇಶ ಮಂಟಪದ ಒಳಗೆ ನಿಂತಾಗ, ಗಜಲಕ್ಷ್ಮಿ ದೇವಿಯ ಭವ್ಯ ಶಿಲ್ಪವು ಸ್ವಾಗತಿಸುತ್ತದೆ. ಕಮಲದ ಹೂವಿನ ಮೇಲೆ ಆಸೀನಳಾಗಿರುವ ಲಕ್ಷ್ಮಿಗೆ ಆನೆಗಳು ಕಲಶಗಳಿಂದ ಜಲಾಭಿಷೇಕ ಮಾಡುತ್ತಿರುವ ಈ ಶಿಲ್ಪವು ಸಮೃದ್ಧಿಯ ಸಂಕೇತವಾಗಿದೆ.",
        "hi": "प्रवेश मंडप के भीतर यह भव्य गजलक्ष्मी फलक श्रद्धालुओं का स्वागत करता है। कमल पर आसीन देवी लक्ष्मी का दिव्य हाथी पवित्र कलशों से अभिषेक कर रहे हैं, जो शुभता और समृद्धि का प्रतीक है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_gajalakshmi",
        "title": {
          "en": "Gaja-Lakshmi Lustration Relief Panel",
          "kn": "ಗಜಲಕ್ಷ್ಮಿ ಅಭಿಷೇಕ ಉಬ್ಬುಶಿಲ್ಪ",
          "hi": "गजलक्ष्मी अभिषेक पाषाण शिल्प"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4,
            "yaw": -23,
            "hfov": 80
          }
        },
        "description": {
          "en": "Goddess Lakshmi sits gracefully in padmasana upon an expansive blooming lotus. Above her, celestial elephants pour sacred ritual waters (abhisheka) from golden pots.",
          "kn": "ಕಮಲದಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ ಲಕ್ಷ್ಮಿ ದೇವಿಯ ಮೇಲೆ ಆನೆಗಳು ಮಂಗಳ ಕಲಶಗಳಿಂದ ಪವಿತ್ರ ಗಂಗಾಜಲವನ್ನು ಸುರಿಯುತ್ತಿರುವ ಗಜಲಕ್ಷ್ಮಿಯ ರಮಣೀಯ ಶಿಲ್ಪ.",
          "hi": "कमल पर पद्मासन में विराजित देवी लक्ष्मी का दिव्य रूप, जिन पर गजराज अपने सूंड में स्वर्ण कलश लिए अभिषेक कर रहे हैं।"
        },
        "historicalSignificance": {
          "en": "The auspicious welcoming icon of the Kailasa sanctuary, blessing pilgrims with sovereign prosperity and spiritual grace.",
          "kn": "ಕೈಲಾಸ ದೇವಾಲಯವನ್ನು ಪ್ರವೇಶಿಸುವ ಭಕ್ತರಿಗೆ ಸಕಲ ಸೌಭಾಗ್ಯ ಮತ್ತು ಶುಭವನ್ನು ಹಾರೈಸುವ ಮಂಗಳದಾಯಕ ಶಿಲ್ಪ.",
          "hi": "कैलाश परिसर में प्रवेश करने वाले भक्तों को सौभाग्य, समृद्धि और आध्यात्मिक पावनता प्रदान करने वाला मुख्य मांगलिक प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Carved in deep subterranean relief with dynamic ripples in the lotus pond beneath her feet.",
          "kn": "ದೇವಿಯ ಪಾದದ ಕೆಳಗಿರುವ ಕಮಲದ ಸರೋವರದ ಅಲೆಗಳ ನೈಜ ಕೆತ್ತನೆಯು ಜೀವಂತಿಕೆಯ ಭಾವವನ್ನು ತುಂಬುತ್ತದೆ.",
          "hi": "कमल ताल की लहरों और पद्म दल का अत्यंत सूक्ष्म व सजीव उत्कीर्णन।"
        },
        "audioNarrationTrackId": "c16_gajalakshmi",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_gajalakshmi.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_gajalakshmi.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_gajalakshmi.mp3"
        }
      },
      {
        "id": "c16_dvarapala_guardians",
        "title": {
          "en": "Southern Monolithic Dvarapala Sentinel",
          "kn": "ದಕ್ಷಿಣ ಏಕಶಿಲಾ ದ್ವಾರಪಾಲಕ ಮೂರ್ತಿ",
          "hi": "दक्षिणी एकाश्मक द्वारपाल संतरी"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6,
            "yaw": -48,
            "hfov": 80
          }
        },
        "description": {
          "en": "Towering rock-cut door guardian flanking the ceremonial threshold with mace and serene majesty.",
          "kn": "ಗಧೆಯನ್ನು ಹಿಡಿದು ದೈವಿಕ ಗಾಂಭೀರ್ಯದಿಂದ ಪ್ರವೇಶದ್ವಾರವನ್ನು ರಕ್ಷಿಸುತ್ತಿರುವ ಬೃಹತ್ ದ್ವಾರಪಾಲಕ ಶಿಲ್ಪ.",
          "hi": "गदा धारण किए हुए शांत एवं भव्य मुद्रा में प्रवेश द्वार की रक्षा करता विशाल द्वारपाल।"
        },
        "historicalSignificance": {
          "en": "Divine threshold guardians protecting the inner courtyard of Lord Shiva.",
          "kn": "ಶಿವನ ಪವಿತ್ರ ಪ್ರಾಂಗಣವನ್ನು ಕಾಯುವ ದೈವಿಕ ರಕ್ಷಕರು.",
          "hi": "भगवान शिव के पावन प्रांगण के दिव्य रक्षक।"
        },
        "architecturalDetails": {
          "en": "Carved directly on the integral entrance pilaster with intricate jewelry and crown.",
          "kn": "ಸುಂದರ ಆಭರಣಗಳು ಮತ್ತು ಕಿರೀಟದೊಂದಿಗೆ ಕಂಬದಲ್ಲೇ ಕೆತ್ತಲಾದ ಶಿಲ್ಪ.",
          "hi": "स्तंभ के साथ ही अभिन्न रूप से गढ़े गए आभूषण एवं किरीट।"
        },
        "audioNarrationTrackId": "c16_dvarapala_guardians",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_dvarapala_guardians.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_dvarapala_guardians.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_dvarapala_guardians.mp3"
        }
      },
      {
        "id": "c16_dvarapala_north",
        "title": {
          "en": "Northern Monolithic Dvarapala Sentinel",
          "kn": "ಉತ್ತರ ಏಕಶಿಲಾ ದ್ವಾರಪಾಲಕ ಮೂರ್ತಿ",
          "hi": "उत्तरी एकाश्मक द्वारपाल संतरी"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6,
            "yaw": 8,
            "hfov": 80
          }
        },
        "description": {
          "en": "The northern counterpart guardian figure flanking the eastern passage into the sunlit courtyard.",
          "kn": "ಅಂಗಳಕ್ಕೆ ಸಾಗುವ ಪೂರ್ವ ದ್ವಾರದ ಉತ್ತರ ಬದಿಯಲ್ಲಿರುವ ಮತ್ತೊಬ್ಬ ಗಂಭೀರ ದ್ವಾರಪಾಲಕ ಮೂರ್ತಿ.",
          "hi": "सूर्यप्रदीप्त प्रांगण की ओर जाने वाले पूर्वी मार्ग के उत्तर में स्थित दूसरा भव्य द्वारपाल।"
        },
        "historicalSignificance": {
          "en": "Completed in the 8th century under Rashtrakuta artisans to balance the ceremonial entry axis.",
          "kn": "ಪ್ರವೇಶದ್ವಾರದ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡುವ ೮ನೇ ಶತಮಾನದ ಅದ್ಭುತ ಶಿಲ್ಪ.",
          "hi": "8वीं शताब्दी में प्रवेश अक्ष के संतुलन हेतु राष्ट्रकूट शिल्पकारों द्वारा निर्मित।"
        },
        "architecturalDetails": {
          "en": "Demonstrates classical tripartite body flexion (tribhanga) in solid basalt rock.",
          "kn": "ಘನ ಶಿಲೆಯಲ್ಲೇ ತ್ರಿಭಂಗ ಮುದ್ರೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಶ್ರೇಷ್ಠ ಭಂಗಿ.",
          "hi": "कठोर बेसाल्ट में त्रिभंग मुद्रा का अत्यंत सुंदर पाषाण निरूपण।"
        },
        "audioNarrationTrackId": "c16_dvarapala_north",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_dvarapala_north.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_dvarapala_north.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_dvarapala_north.mp3"
        }
      },
      {
        "id": "c16_lotus_ceiling",
        "title": {
          "en": "Monolithic Sculpted Lotus Ceiling",
          "kn": "ಏಕಶಿಲಾ ಕೆತ್ತನೆಯ ಕಮಲದ ಛಾವಣಿ",
          "hi": "एकाश्मक उत्कीर्ण कमल वितान (छत)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 62,
            "yaw": 0,
            "hfov": 85
          }
        },
        "description": {
          "en": "Deeply undercut rock ceiling inside the vestibule, featuring concentric sculpted lotus medallions (padma-mandala) and beam moldings.",
          "kn": "ಪ್ರವೇಶ ಮಂಟಪದ ಮೇಲ್ಛಾವಣಿಯಲ್ಲಿ ಕೊರೆಯಲಾದ ಏಕಕೇಂದ್ರಿತ ಕಮಲದ ದಳಗಳ ಸುಂದರ ಪದ್ಮ ಮಂಡಲ ಕೆತ್ತನೆ.",
          "hi": "प्रवेश मंडप की छत पर गहराई से तराशा गया संकेंद्रित कमल पंखुड़ियों वाला भव्य पद्म-मंडल।"
        },
        "historicalSignificance": {
          "en": "Represents the cosmic lotus unfolding above worshippers entering the sacred subterranean domain.",
          "kn": "ಪವಿತ್ರ ಕ್ಷೇತ್ರಕ್ಕೆ ಪ್ರವೇಶಿಸುವ ಭಕ್ತರ ಶಿರಸ್ಸಿನ ಮೇಲೆ ತೆರೆದುಕೊಳ್ಳುವ ಬ್ರಹ್ಮಾಂಡ ಕಮಲದ ಪ್ರತೀಕ.",
          "hi": "पवित्र गुफा में प्रवेश करने वाले साधकों के ऊपर खिलते ब्रह्मांडीय कमल का दार्शनिक प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Imitates timber ceiling joinery faithfully in solid monolithic basalt rock.",
          "kn": "ಮರದ ಛಾವಣಿಯ ಕೀಲುಗಳನ್ನು ಕಪ್ಪು ಕಲ್ಲಿನಲ್ಲೇ ಯಥಾವತ್ತಾಗಿ ಪುನರಾವರ್ತಿಸಿರುವ ಕೌಶಲ.",
          "hi": "काष्ठ वितान की संरचना को कठोर पाषाण में अत्यंत कुशलता से रूपांतरित किया गया है।"
        },
        "audioNarrationTrackId": "c16_lotus_ceiling",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_lotus_ceiling.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_lotus_ceiling.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_lotus_ceiling.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_elephant_plinth_canyon",
    "sceneNumber": 8,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Southern Chasm & Elephant Plinth",
      "kn": "ಗುಹೆ ೧೬ — ದಕ್ಷಿಣ ಕಣಿವೆ ಮತ್ತು ಗಜ ಪೀಠ",
      "hi": "गुफा 16 — दक्षिणी खाई एवं गज पीठ"
    },
    "subtitle": {
      "en": "Colossal Caryatid Elephant Frieze & Vimana Shikhara",
      "kn": "ದೇವಾಲಯವನ್ನು ಹೊತ್ತ ಬೃಹತ್ ಆನೆಗಳ ಸಾಲು ಹಾಗೂ ವಿಮಾನ ಗೋಪುರ",
      "hi": "मंदिर को थामे विशाल हाथियों की पंक्ति एवं विमान शिखर"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_elephant_plinth_canyon.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_elephant_plinth_canyon.jpg",
      "initialOrientation": {
        "pitch": 8,
        "yaw": 32,
        "hfov": 100
      },
      "limits": {
        "minPitch": -70,
        "maxPitch": 80,
        "minFov": 40,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c16_canyon_intro",
      "title": {
        "en": "Deep Circumambulatory Canyon & Elephant Caryatid Plinth",
        "kn": "ಆಳವಾದ ಪ್ರದಕ್ಷಿಣಾ ಕಂದಕ ಮತ್ತು ಆನೆಗಳ ಪೀಠ",
        "hi": "गहरा प्रदक्षिणा खंदक एवं गज-पीठिका"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_canyon_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_canyon_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_canyon_intro.mp3"
      },
      "transcripts": {
        "en": "You are deep in the circumambulatory canyon surrounding the main temple. Looking upward, the thirty-two meter Dravidian Vimana tower rises into the sky. Below, a continuous plinth of life-sized elephants and lions carries the cosmic mountain on their backs.",
        "kn": "ನೀವು ದೇವಾಲಯದ ಪ್ರದಕ್ಷಿಣಾ ಪಥದ ಆಳವಾದ ಕಂದಕದಲ್ಲಿದ್ದೀರಿ. ಮೇಲೆ ನೋಡಿದರೆ ಮೂವತ್ತೆರಡು ಮೀಟರ್ ಎತ್ತರದ ಭವ್ಯ ದ್ರಾವಿಡ ವಿಮಾನ ಗೋಪುರ ಆಕಾಶಕ್ಕೆ ಮುಖಮಾಡಿದೆ. ಕೆಳಗೆ ಜೀವಂತ ಗಾತ್ರದ ಆನೆಗಳು ಮತ್ತು ಸಿಂಹಗಳು ಇಡೀ ದೇವಾಲಯವನ್ನು ತಮ್ಮ ಬೆನ್ನಿನ ಮೇಲೆ ಹೊತ್ತಿವೆ.",
        "hi": "आप मुख्य मंदिर के चारों ओर बने गहरे प्रदक्षिणा मार्ग में हैं। ऊपर 32.6 मीटर ऊंचा द्रविड़ विमान शिखर आकाश को छूता प्रतीत होता है, जबकि नीचे आदमकद हाथियों और सिंहों की पंक्ति इस विशाल मंदिर को अपनी पीठ पर संभाले हुए है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_elephant_plinth",
        "title": {
          "en": "Colossal Elephant & Lion Caryatid Plinth (Upapitha)",
          "kn": "ಬೃಹತ್ ಗಜ ಮತ್ತು ಸಿಂಹಗಳ ಅಧಿಷ್ಠಾನ (ಉಪಪೀಠ)",
          "hi": "विशाल गज एवं सिंह अधिष्ठान (उपपीठ)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2,
            "yaw": 85,
            "hfov": 90
          }
        },
        "description": {
          "en": "This massive eight-meter plinth features continuous high-relief sculptures of war elephants, rampant lions, and mythical vyalas supporting the temple structure.",
          "kn": "೮ ಮೀಟರ್ ಎತ್ತರದ ಈ ಬೃಹತ್ ಪೀಠದಲ್ಲಿ ಇಡೀ ದೇವಾಲಯವನ್ನು ತಮ್ಮ ಬೆನ್ನ ಮೇಲೆ ಹೊತ್ತು ನಿಂತಿರುವಂತೆ ಕಾಣುವ ನೈಜ ಗಾತ್ರದ ಆನೆಗಳು ಮತ್ತು ಸಿಂಹಗಳ ಸಾಲಿದೆ.",
          "hi": "यह आठ मीटर ऊँचा विशाल अधिष्ठान आदमकद हाथियों, सिंहों और व्यालों के सजीव शिल्पों से सुसज्जित है जो पूरे मंदिर को अपनी पीठ पर थामे हुए प्रतीत होते हैं।"
        },
        "historicalSignificance": {
          "en": "Symbolizes the cosmological foundation of the universe, where divine elephants sustain the sacred abode of Shiva.",
          "kn": "ಶಿವನ ಪವಿತ್ರ ನಿವಾಸವನ್ನು ಭೂಮಿಯ ಮೇಲೆ ಹೊತ್ತು ನಿಲ್ಲಿಸಿದ ಬ್ರಹ್ಮಾಂಡದ ಆಧಾರ ಸ್ತಂಭಗಳ ಸಂಕೇತ.",
          "hi": "ब्रह्मांडीय आधार का प्रतीक, जहाँ दिग्गज भगवान शिव के पावन धाम को अपने कंधों पर धारण किए हुए हैं।"
        },
        "architecturalDetails": {
          "en": "Masterful deep undercutting in basalt creates dramatic shadows and muscular tension in each animal.",
          "kn": "ಕಲ್ಲಿನ ಆಳವಾದ ಕೊರೆತವು ಪ್ರತಿಯೊಂದು ಪ್ರಾಣಿಯ ಸ್ನಾಯುಗಳ ಚಲನೆ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ಅದ್ಭುತವಾಗಿ ಬಿಂಬಿಸುತ್ತದೆ.",
          "hi": "गहन पाषाण उत्कीर्णन द्वारा पशुओं की मांसपेशियों के तनाव और गतिशीलता का सजीव चित्रण।"
        },
        "audioNarrationTrackId": "c16_elephant_plinth",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_elephant_plinth.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_elephant_plinth.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_elephant_plinth.mp3"
        }
      },
      {
        "id": "c16_vimana_tower",
        "title": {
          "en": "Dravidian Tritala Vimana & Octagonal Shikhara",
          "kn": "ದ್ರಾವಿಡ ಶೈಲಿಯ ತ್ರಿತಲ ವಿಮಾನ ಮತ್ತು ಅಷ್ಟಕೋನ ಶಿಖರ",
          "hi": "द्रविड़ त्रितल विमान एवं अष्टकोणीय शिखर"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 36,
            "yaw": 88,
            "hfov": 85
          }
        },
        "description": {
          "en": "Rising 32.6 meters from the courtyard floor, the great pyramidal vimana is crowned with an octagonal dome directly above the inner sanctum.",
          "kn": "ಅಂಗಳದಿಂದ ೩೨.೬ ಮೀಟರ್ ಎತ್ತರಕ್ಕೆ ಕಲ್ಲಿನಲ್ಲೇ ಕಡೆಯಲಾದ ತ್ರಿತಲ ಪಿರಮಿಡ್ ವಿಮಾನ ಗೋಪುರ, ಗರ್ಭಗುಡಿಯ ಮೇಲೆ ಅಷ್ಟಕೋನ ಶಿಖರವನ್ನು ಹೊಂದಿದೆ.",
          "hi": "प्रांगण तल से 32.6 मीटर ऊँचा यह भव्य त्रितल द्रविड़ विमान गर्भगृह के ठीक ऊपर अष्टकोणीय गुंबद और स्तूपिका से सज्जित है।"
        },
        "historicalSignificance": {
          "en": "The crowning architectural achievement of Cave 16, representing the pinnacle of Rashtrakuta rock architecture.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟ ವಾಸ್ತುಶಿಲ್ಪದ ಪರಮೋಚ್ಛ ಸಾಧನೆಯಾಗಿ ಕಂಗೊಳಿಸುವ ಮಹಾ ಶಿಖರ.",
          "hi": "गुफा संख्या 16 की सर्वोत्कृष्ट वास्तुकला उपलब्धि और राष्ट्रकूट शिल्प का सर्वोच्च शिखर।"
        },
        "architecturalDetails": {
          "en": "Adorned with diminishing tiers of kutas, shalas, and kudu dormer arches in pure southern Dravidian tradition.",
          "kn": "ಕೂಟಗಳು, ಶಾಲಾಗೃಹಗಳು ಮತ್ತು ಕಮಾನುಗಳಿಂದ ಅಲಂಕೃತವಾದ ಮೂರು ಹಂತಗಳ ದ್ರಾವಿಡ ಗೋಪುರ.",
          "hi": "शुद्ध दक्षिण भारतीय द्रविड़ परंपरा में कूट, शाला और कुडु मेहराबों की घटती परतों से सुसज्जित।"
        },
        "audioNarrationTrackId": "c16_vimana_tower",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_vimana_tower.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_vimana_tower.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_vimana_tower.mp3"
        }
      },
      {
        "id": "c16_ramayana_frieze",
        "title": {
          "en": "Southern Gallery Narrative Ramayana Reliefs",
          "kn": "ದಕ್ಷಿಣ ಗ್ಯಾಲರಿಯ ರಾಮಾಯಣ ಕಥಾನಕ ಉಬ್ಬುಶಿಲ್ಪ",
          "hi": "दक्षिणी वीथिका रामायण कथा पाषाण शिल्प"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -6,
            "yaw": -105,
            "hfov": 85
          }
        },
        "description": {
          "en": "The basement of the southern cloister is carved with eight horizontal tiers depicting continuous narrative episodes from the epic Ramayana.",
          "kn": "ದಕ್ಷಿಣದ ಕಮಾನು ಸಾಲಿನ ಕೆಳಭಾಗದಲ್ಲಿ ರಾಮಾಯಣದ ಕಥೆಯನ್ನು ಎಂಟು ಸಮತಲ ಸಾಲುಗಳಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "दक्षिणी वीथिका के आधार पर महाकाव्य रामायण की घटनाओं को आठ क्षैतिज पट्टियों में धारावाहिक रूप से उत्कीर्ण किया गया है।"
        },
        "historicalSignificance": {
          "en": "One of the earliest and most complete sequential rock-cut Ramayana friezes in Indian art history.",
          "kn": "ಭಾರತೀಯ ಕಲಾ ಇತಿಹಾಸದಲ್ಲೇ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಮತ್ತು ಸಮಗ್ರ ರಾಮಾಯಣ ಶಿಲ್ಪ ಸಾಲು.",
          "hi": "भारतीय कला इतिहास में पाषाण पर उत्कीर्ण सबसे प्राचीन और विस्तृत रामायण कथा अनुक्रमों में से एक।"
        },
        "architecturalDetails": {
          "en": "Depicts Rama's exile, the golden deer episode, Ravana's abduction of Sita, and the battle of Lanka.",
          "kn": "ರಾಮನ ವನವಾಸ, ಸೀತಾಪಹರಣ ಮತ್ತು ಲಂಕಾದ ಯುದ್ಧ ಸನ್ನಿವೇಶಗಳನ್ನು ಜೀವಂತವಾಗಿ ಕಡೆಯಲಾಗಿದೆ.",
          "hi": "राम का वनवास, स्वर्ण मृग प्रसंग, सीता हरण और लंका विजय का अत्यंत सजीव चित्रण।"
        },
        "audioNarrationTrackId": "c16_ramayana_frieze",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_ramayana_frieze.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_ramayana_frieze.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_ramayana_frieze.mp3"
        }
      },
      {
        "id": "c16_subsidiary_shrine",
        "title": {
          "en": "Subsidiary Monolithic Parivaralaya Shrine",
          "kn": "ಪರಿವಾರ ದೇವತೆಯ ಏಕಶಿಲಾ ಗುಡಿ",
          "hi": "परिवारालय सहायक एकाश्मक देवालय"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 16,
            "yaw": 30,
            "hfov": 80
          }
        },
        "description": {
          "en": "One of the five subsidiary shrines surrounding the circumambulatory path (pradakshina-patha) around the main sanctum.",
          "kn": "ಮುಖ್ಯ ಗರ್ಭಗುಡಿಯ ಪ್ರದಕ್ಷಿಣಾ ಪಥದ ಸುತ್ತಲೂ ಕಲ್ಲಿನಲ್ಲೇ ಕೆತ್ತಲಾದ ಐದು ಪರಿವಾರ ದೇವತೆಗಳ ಗುಡಿಗಳಲ್ಲಿ ಒಂದು.",
          "hi": "मुख्य गर्भगृह के प्रदक्षिणा पथ के चारों ओर निर्मित पाँच सहायक देवालयों (पंचायतन) में से एक।"
        },
        "historicalSignificance": {
          "en": "Forms the classical Panchayatana layout, housing Shaivite companion deities.",
          "kn": "ಪಂಚಾಯತನ ವಾಸ್ತು ಶೈಲಿಯಲ್ಲಿ ಪರಿವಾರ ದೇವತೆಗಳ ಆರಾಧನೆಗಾಗಿ ನಿರ್ಮಿತ.",
          "hi": "पंचायतन शैली के अनुसार शिव के सहायक देवगणों की उपासना हेतु समर्पित।"
        },
        "architecturalDetails": {
          "en": "Independent miniature Dravidian vimana complete with porch, pilasters, and finial.",
          "kn": "ಪ್ರತ್ಯೇಕ ಮಂಟಪ, ಕಂಬಗಳು ಮತ್ತು ಶಿಖರವನ್ನು ಹೊಂದಿರುವ ಕಿರು ದ್ರಾವಿಡ ದೇವಾಲಯ.",
          "hi": "स्वयं का लघु मंडप, भित्ति स्तंभ और शिखर युक्त स्वतंत्र द्रविड़ देवालय।"
        },
        "audioNarrationTrackId": "c16_subsidiary_shrine",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_subsidiary_shrine.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_subsidiary_shrine.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_subsidiary_shrine.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_southern_courtyard",
    "sceneNumber": 9,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Southern Courtyard & Rock-Cut Arcades",
      "kn": "ಗುಹೆ ೧೬ — ದಕ್ಷಿಣ ಪ್ರಾಂಗಣ ಮತ್ತು ಶಿಲಾ ಕಮಾನು ಸಾಲುಗಳು",
      "hi": "गुफा 16 — दक्षिणी प्रांगण एवं शैलकर्तित वीथिका"
    },
    "subtitle": {
      "en": "Ravana Shaking Kailash & Cliffside Galleries",
      "kn": "ಕೈಲಾಸ ಪರ್ವತವನ್ನು ಅಲ್ಲಾಡಿಸುತ್ತಿರುವ ರಾವಣ ಮತ್ತು ಶಿಲಾ ಗ್ಯಾಲರಿ",
      "hi": "कैलास हिलाते रावण का विश्वविख्यात शिल्प"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_southern_courtyard.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_southern_courtyard.jpg",
      "initialOrientation": {
        "pitch": 2,
        "yaw": 40,
        "hfov": 98
      },
      "limits": {
        "minPitch": -65,
        "maxPitch": 75,
        "minFov": 45,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "c16_southern_court_intro",
      "title": {
        "en": "Southern Courtyard & Freestanding Monolithic Elephant",
        "kn": "ದಕ್ಷಿಣ ಅಂಗಳ ಮತ್ತು ಜೀವಂತ ಗಾತ್ರದ ಏಕಶಿಲಾ ಆನೆ",
        "hi": "दक्षिणी प्रांगण एवं अखंड पाषाण गज"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_southern_court_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_southern_court_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_southern_court_intro.mp3"
      },
      "transcripts": {
        "en": "Here in the southern court stands a life-sized monolithic elephant carved from the quarry bedrock. Flanked by high vertical cliffs and the sacred Yajnashala cave gallery, this open courtyard reveals the unimaginable scale of basalt excavated to create Kailash.",
        "kn": "ಇಲ್ಲಿ ದಕ್ಷಿಣ ಅಂಗಳದಲ್ಲಿ ನೆಲದ ಬಂಡೆಯಿಂದಲೇ ಕೆತ್ತಲಾದ ಜೀವಂತ ಗಾತ್ರದ ಸುಂದರ ಆನೆಯನ್ನು ಕಾಣಬಹುದು. ಸುತ್ತಲೂ ಎತ್ತರದ ಕಡಿದಾದ ಬಂಡೆಯ ಗೋಡೆಗಳು ಮತ್ತು ಯಜ್ಞಶಾಲಾ ಗುಹೆಯಿದ್ದು, ಇಲ್ಲಿ ತೆಗೆಯಲಾದ ಬಂಡೆಯ ಅಗಾಧ ಪ್ರಮಾಣವನ್ನು ಊಹಿಸಬಹುದು.",
        "hi": "इस दक्षिणी प्रांगण में चट्टान से ही तराशा गया एक आदमकद अखंड हाथी स्थित है। ऊंची चट्टानी दीवारों और यज्ञशाला वीथिका से घिरा यह खुला प्रांगण इस मंदिर के निर्माण में हटाई गई लाखों टन चट्टान के पैमाने को दर्शाता है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_dhvajastambha_south",
        "title": {
          "en": "Southern Monolithic Dhvajastambha (Victory Pillar)",
          "kn": "ದಕ್ಷಿಣ ಏಕಶಿಲಾ ಧ್ವಜಸ್ತಂಭ (ವಿಜಯ ಸ್ತಂಭ)",
          "hi": "दक्षिणी अखंड ध्वजस्तंभ (विजय स्तंभ)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 24,
            "yaw": -40,
            "hfov": 85
          }
        },
        "description": {
          "en": "The towering southern victory column rising 16.5 meters directly from the courtyard bedrock.",
          "kn": "ಅಂಗಳದ ಬಂಡೆಯಲ್ಲೇ ಕೆತ್ತಲಾದ ೧೬.೫ ಮೀಟರ್ ಎತ್ತರದ ಭವ್ಯ ದಕ್ಷಿಣ ಧ್ವಜಸ್ತಂಭ.",
          "hi": "प्रांगण की धरातलीय चट्टान से 16.5 मीटर ऊँचा उठा दक्षिणी विजय स्तंभ।"
        },
        "historicalSignificance": {
          "en": "Counters the northern pillar to establish axial geometric symmetry across the temple forecourt.",
          "kn": "ಉತ್ತರದ ಸ್ತಂಭಕ್ಕೆ ಪೂರಕವಾಗಿ ಅಂಗಳದ ಜ್ಯಾಮಿತೀಯ ಸೌಂದರ್ಯ ಮತ್ತು ಸಮತೋಲನವನ್ನು ಕಾಪಾಡುತ್ತದೆ.",
          "hi": "उत्तरी स्तंभ के पूरक के रूप में प्रांगण की ज्यामितीय सममिति और भव्यता स्थापित करता है।"
        },
        "architecturalDetails": {
          "en": "Carved with sixteen-sided fluted shaft, pot-and-foliage capital, and garland reliefs.",
          "kn": "೧೬ ಮುಖಗಳ ಸ್ತಂಭ, ಕುಂಭ ಮತ್ತು ಹೂಮಾಲೆಗಳ ಕೆತ್ತನೆಯಿಂದ ಕಂಗೊಳಿಸುತ್ತದೆ.",
          "hi": "सोलह-पहलूदार दंड, कलश-पल्लव शीर्ष और पुष्पमालाओं के सूक्ष्म अलंकरण।"
        },
        "audioNarrationTrackId": "c16_dhvajastambha",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_dhvajastambha.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_dhvajastambha.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_dhvajastambha.mp3"
        }
      },
      {
        "id": "c16_elephant_monolith_south",
        "title": {
          "en": "Southern Monolithic Royal Elephant",
          "kn": "ದಕ್ಷಿಣ ಏಕಶಿಲಾ ರಾಜ ಗಜ ಶಿಲ್ಪ",
          "hi": "दक्षिणी एकाश्मक शाही गज प्रतिमा"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2,
            "yaw": 9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The southern courtyard elephant standing sentinel before the towering vertical rock cliff cloisters.",
          "kn": "ದಕ್ಷಿಣದ ಕಡಿದಾದ ಬಂಡೆ ಸಾಲಿನ ಮುಂದೆ ಗಂಭೀರವಾಗಿ ನಿಂತಿರುವ ನೈಜ ಗಾತ್ರದ ಕಲ್ಲಿನ ಆನೆ.",
          "hi": "दक्षिणी शैल वीथिकाओं के सम्मुख अडिग पहरेदार की भाँति खड़ी आदमकद गज प्रतिमा।"
        },
        "historicalSignificance": {
          "en": "One of the two life-sized guardian elephants carved top-down out of the living courtyard basalt.",
          "kn": "ಕೈಲಾಸದ ಪ್ರಾಂಗಣದಲ್ಲಿ ಜೀವಂತ ಬಂಡೆಯಿಂದಲೇ ಕೆತ್ತಲಾದ ಎರಡು ಭವ್ಯ ಆನೆಗಳಲ್ಲಿ ಒಂದು.",
          "hi": "प्रांगण की मूल चट्टान से ही तराशी गई दो मुख्य रक्षक गज प्रतिमाओं में से एक।"
        },
        "architecturalDetails": {
          "en": "Carved completely in the round with naturalistic hide folds, tusks, and ceremonial bell trappings.",
          "kn": "ದಂತಗಳು, ಕಿವಿಗಳು ಮತ್ತು ಗಂಟೆಗಳ ನೈಜ ಅಲಂಕಾರದೊಂದಿಗೆ ಪೂರ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ಕಡೆಯಲಾಗಿದೆ.",
          "hi": "दंत, कर्ण और घंटियों की आभूषणात्मक साज-सज्जा से युक्त पूर्ण गोलाकार मूर्ति।"
        },
        "audioNarrationTrackId": "c16_elephant_monolith",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_elephant_monolith.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_elephant_monolith.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_elephant_monolith.mp3"
        }
      },
      {
        "id": "c16_ravana_shaking",
        "title": {
          "en": "Ravana Shaking Mount Kailash (Ravananugraha Relief)",
          "kn": "ರಾವಣಾನುಗ್ರಹ ಮೂರ್ತಿ (ಕೈಲಾಸ ಕಂಪನ)",
          "hi": "रावणानुग्रह पाषाण शिल्प (कैलाशोत्तोलन)"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2,
            "yaw": -140,
            "hfov": 80
          }
        },
        "description": {
          "en": "The world-famous relief of Ravana Shaking Mount Kailash. Below, the ten-headed demon king strains with all twenty arms to lift the mountain, while Shiva calmly presses his toe down to anchor it.",
          "kn": "ವಿಶ್ವವಿಖ್ಯಾತ ರಾವಣಾನುಗ್ರಹ ಮೂರ್ತಿ. ರಾವಣನು ತನ್ನ ೨೦ ತೋಳುಗಳಿಂದ ಕೈಲಾಸವನ್ನು ಅಲುಗಾಡಿಸಲು ಯತ್ನಿಸುತ್ತಿದ್ದರೆ, ಪರಶಿವನು ಕೇವಲ ಕಾಲಿನ ಹೆಬ್ಬೆರಳಿನಿಂದ ಬೆಟ್ಟವನ್ನು ಶಾಂತವಾಗಿ ಅದುಮಿ ಹಿಡಿದಿರುವ ರೋಮಾಂಚಕ ಶಿಲ್ಪ.",
          "hi": "विश्वप्रसिद्ध रावणानुग्रह शिल्प। नीचे बीस भुजाओं वाला दशानन रावण पर्वत को हिलाने का भीषण प्रयास कर रहा है, जबकि भगवान शिव ने केवल अपने पैर के अंगूठे से पर्वत को शांत भाव से स्थिर कर रखा है।"
        },
        "historicalSignificance": {
          "en": "Celebrated globally as one of the greatest masterworks of Indian rock-cut sculptural art.",
          "kn": "ಭಾರತೀಯ ಶಿಲ್ಪಕಲೆಯ ಇತಿಹಾಸದಲ್ಲೇ ಅತ್ಯಂತ ಉನ್ನತ ದರ್ಜೆಯ ಅದ್ಭುತ ಶಿಲ್ಪವೆಂದು ವಿಶ್ವಮಾನ್ಯತೆ ಪಡೆದಿದೆ.",
          "hi": "भारतीय शैलोत्कीर्ण मूर्तिकला के इतिहास में वैश्विक स्तर पर सराही गई सर्वोत्कृष्ट कृतियों में से एक।"
        },
        "architecturalDetails": {
          "en": "Creates extraordinary compositional drama: Parvati clings to Shiva in fear while Shiva remains serene.",
          "kn": "ಭಯದಿಂದ ಶಿವನನ್ನು ತಬ್ಬಿಕೊಳ್ಳುತ್ತಿರುವ ಪಾರ್ವತಿ ಮತ್ತು ಶಾಂತಚಿತ್ತನಾದ ಶಿವನ ಭಾವಗಳು ಶಿಲೆಯಲ್ಲಿ ಜೀವಂತವಾಗಿವೆ.",
          "hi": "भयभीत होकर शिव से लिपटती पार्वती और शिव की अगाध शांति का अद्वितीय नाटकीय पाषाण चित्रण।"
        },
        "audioNarrationTrackId": "c16_ravana_shaking",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_ravana_shaking.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_ravana_shaking.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_ravana_shaking.mp3"
        }
      },
      {
        "id": "c16_southern_cliff_arcade",
        "title": {
          "en": "Southern Rock-Cut Cloister & Arcades",
          "kn": "ದಕ್ಷಿಣ ಕಲ್ಲಿನ ಕಮಾನು ಸಾಲು ಮತ್ತು ಗ್ಯಾಲರಿ",
          "hi": "दक्षिणी शैलोत्कीर्ण वीथिका एवं तोरण"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 12,
            "yaw": 90,
            "hfov": 85
          }
        },
        "description": {
          "en": "The two-storeyed southern cliff gallery cut deep into the basalt quarry wall, featuring massive square pillars and carved bracket capitals.",
          "kn": "ದಕ್ಷಿಣದ ಕಡಿದಾದ ಬಂಡೆಯಲ್ಲೇ ಕೊರೆಯಲಾದ ಎರಡು ಮಹಡಿಗಳ ಗ್ಯಾಲರಿ, ಬೃಹತ್ ಚೌಕಾಕಾರದ ಕಂಬಗಳು ಮತ್ತು ಸುಂದರ ಬ್ರಾಕೆಟ್‌ಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "दक्षिणी शैल भित्ति में गहराई से तराशी गई दो मंजिला वीथिका, जो विशाल चौकोर स्तंभों और अलंकृत शीर्षों से युक्त है।"
        },
        "historicalSignificance": {
          "en": "Served as meditative cloisters for visiting monks and ceremonial circumambulation.",
          "kn": "ಸಾಧಕರು ಮತ್ತು ಭಕ್ತರ ಧ್ಯಾನ ಹಾಗೂ ಪ್ರದಕ್ಷಿಣೆಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ಭವ್ಯ ಜಗುಲಿ.",
          "hi": "साधुओं के ध्यान एवं भक्तों की प्रदक्षिणा हेतु निर्मित पाषाण वीथिका।"
        },
        "architecturalDetails": {
          "en": "Heavy cushioned capitals and lion brackets supporting the sheer weight of the rock above.",
          "kn": "ಮೇಲಿನ ಬಂಡೆಯ ಅಪಾರ ತೂಕವನ್ನು ಹೊರುವ ಬಲಿಷ್ಠ ಕಂಬಗಳು.",
          "hi": "ऊपरी विशाल चट्टान का भार वहन करने वाले कुशन-कैपिटल एवं सिंह ब्रैकेट।"
        },
        "audioNarrationTrackId": "c16_southern_cliff_arcade",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_southern_cliff_arcade.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_southern_cliff_arcade.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_southern_cliff_arcade.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_nandi_mandapa_stairs",
    "sceneNumber": 10,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Nandi Mandapa & Processional Staircase",
      "kn": "ಗುಹೆ ೧೬ — ನಂದಿ ಮಂಟಪ ಮತ್ತು ಉತ್ಸವ ಮೆಟ್ಟಿಲುಗಳು",
      "hi": "गुफा 16 — नंदी मंडप एवं सोपान मार्ग"
    },
    "subtitle": {
      "en": "Two-Storey Pavilions & Mahamandapa Approach",
      "kn": "ಎರಡು ಮಹಡಿಯ ಮಂಟಪ ಮತ್ತು ಮಹಾಮಂಟಪದ ಪ್ರವೇಶ",
      "hi": "द्वितलीय मंडप एवं महामंडप प्रवेश"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_nandi_mandapa_stairs.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_nandi_mandapa_stairs.jpg",
      "initialOrientation": {
        "pitch": 6,
        "yaw": -10,
        "hfov": 95
      },
      "limits": {
        "minPitch": -65,
        "maxPitch": 75,
        "minFov": 45,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "c16_nandi_mandapa_intro",
      "title": {
        "en": "Nandi Mandapa Staircase & Lankeshwar Vista",
        "kn": "ನಂದಿ ಮಂಟಪದ ಮೆಟ್ಟಿಲುಗಳು ಮತ್ತು ಲಂಕೇಶ್ವರ ನೋಟ",
        "hi": "नंदी मंडप सोपान एवं लंकेश्वर दृश्य"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_nandi_mandapa_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_nandi_mandapa_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_nandi_mandapa_intro.mp3"
      },
      "transcripts": {
        "en": "At the foot of the monolithic stone staircase, you look up toward the Nandi Mandapa. This elevated pavilion houses the sacred bull facing Shiva's sanctum. High in the northern quarry wall, the pillared halls of the Lankeshwar cave sanctuary are visible.",
        "kn": "ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳ ಬುಡದಲ್ಲಿ ನಿಂತಾಗ ಎದುರಿಗೆ ನಂದಿ ಮಂಟಪ ಕಾಣಿಸುತ್ತದೆ. ಶಿವನ ಗರ್ಭಗುಡಿಯ ಕಡೆಗೆ ಮುಖಮಾಡಿರುವ ನಂದಿಯ ಮೂರ್ತಿ ಇಲ್ಲಿದೆ. ಉತ್ತರದ ಬಂಡೆಯ ಎತ್ತರದಲ್ಲಿ ಲಂಕೇಶ್ವರ ಗುಹಾಲಯದ ಕಂಬಗಳು ಗೋಚರಿಸುತ್ತವೆ.",
        "hi": "पाषाण सीढ़ियों के पास से नंदी मंडप का दृश्य दिखाई देता है। इस मंडप में भगवान शिव के गर्भगृह की ओर उन्मुख पवित्र नंदी बैल स्थापित है। उत्तरी चट्टान में ऊपर की ओर लंकेश्वर गुहा-मंदिर के स्तंभ दिखाई देते हैं।"
      }
    },
    "hotspots": [
      {
        "id": "c16_nandi_mandapa",
        "title": {
          "en": "Two-Storey Nandi Mandapa & Lattice Windows",
          "kn": "ಎರಡು ಮಹಡಿಯ ನಂದಿ ಮಂಟಪ ಮತ್ತು ಜಾಲಂಧ್ರಗಳು",
          "hi": "दो मंजिला नंदी मंडप एवं जाली वातायन"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 14,
            "yaw": -70,
            "hfov": 85
          }
        },
        "description": {
          "en": "The two-storey Nandi Mandapa features perforated stone lattice windows (jalis) on its walls. Inside rests Shiva's sacred vahana, the monolithic bull Nandi.",
          "kn": "ಎರಡು ಮಹಡಿಗಳ ನಂದಿ ಮಂಟಪದ ಗೋಡೆಗಳಲ್ಲಿ ಸುಂದರ ಕಲ್ಲಿನ ಜಾಲಂಧ್ರಗಳಿವೆ. ಒಳಗೆ ಶಿವನ ವಾಹನವಾದ ಏಕಶಿಲಾ ನಂದಿ ಮೂರ್ತಿಯಿದೆ.",
          "hi": "दो मंजिला नंदी मंडप की भित्तियों में नक्काशीदार जालीदार वातायन हैं। इसके भीतर भगवान शिव के वाहन नंदी की भव्य एकाश्मक प्रतिमा स्थापित है।"
        },
        "historicalSignificance": {
          "en": "The sacred vehicular pavilion standing on the central axis between the entrance gopuram and the main sanctum.",
          "kn": "ಪ್ರವೇಶ ಗೋಪುರ ಮತ್ತು ಗರ್ಭಗುಡಿಯ ನಡುವಿನ ಕೇಂದ್ರ ಅಕ್ಷದಲ್ಲಿ ನೆಲೆಸಿರುವ ಪವಿತ್ರ ನಂದಿ ಮಂಟಪ.",
          "hi": "प्रवेश गोपुरम और मुख्य गर्भगृह के बीच केंद्रीय अक्ष पर स्थित पावन वाहन मंडप।"
        },
        "architecturalDetails": {
          "en": "Supported on a molded basement with corner pilasters and traces of original 8th-century white plaster.",
          "kn": "ಮೂಲೆಯ ಕಂಬಗಳು ಮತ್ತು ಪ್ರಾಚೀನ ಬಿಳಿ ಸುಣ್ಣದ ಲೇಪನದ ಕುರುಹುಗಳನ್ನು ಇಂದಿಗೂ ಕಾಣಬಹುದು.",
          "hi": "अलंकृत पीठिका, भित्ति स्तंभ और 8वीं शताब्दी के मूल श्वेत प्लास्टर के अवशेष युक्त।"
        },
        "audioNarrationTrackId": "c16_nandi_mandapa",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_nandi_mandapa.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_nandi_mandapa.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_nandi_mandapa.mp3"
        }
      },
      {
        "id": "c16_nandi_stairs",
        "title": {
          "en": "Nandi Pavilion Processional Staircase",
          "kn": "ನಂದಿ ಮಂಟಪದ ಮೆಟ್ಟಿಲುಗಳ ಸಾಲು",
          "hi": "नंदी मंडप सोपान मार्ग (सीढ़ियाँ)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4,
            "yaw": 75,
            "hfov": 80
          }
        },
        "description": {
          "en": "Monolithic stone staircase carved directly from the bedrock, ascending to the upper level of the Nandi Mandapa.",
          "kn": "ಅಂಗಳದ ಕಲ್ಲಿನಲ್ಲೇ ಕೆತ್ತಲಾದ ಮೆಟ್ಟಿಲುಗಳ ಸಾಲು, ನಂದಿ ಮಂಟಪದ ಮೇಲ್ಮಹಡಿಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.",
          "hi": "मूल पाषाण से ही उत्कीर्ण सीढ़ियों का मार्ग, जो नंदी मंडप के ऊपरी तल तक जाता है।"
        },
        "historicalSignificance": {
          "en": "Used by Rashtrakuta royalty and priests during ceremonial rituals facing the Shiva Lingam.",
          "kn": "ರಾಷ್ಟ್ರಕೂಟ ರಾಜರು ಮತ್ತು ಅರ್ಚಕರು ಪೂಜಾ ಕೈಂಕರ್ಯಗಳಿಗಾಗಿ ಬಳಸುತ್ತಿದ್ದ ಮಾರ್ಗ.",
          "hi": "राष्ट्रकूट नरेशों एवं पुरोहितों द्वारा पूजा-अर्चना हेतु प्रयुक्त सोपान मार्ग।"
        },
        "architecturalDetails": {
          "en": "Features solid rock balustrades and guardian lion sculptures flanking the ascent.",
          "kn": "ಭದ್ರವಾದ ಕಲ್ಲಿನ ಕೈಪಿಡಿ ಮತ್ತು ಸಿಂಹ ಶಿಲ್ಪಗಳಿಂದ ಕೂಡಿದ ಮೆಟ್ಟಿಲುಗಳು.",
          "hi": "मजबूत पाषाण जंगले और सोपान के दोनों ओर रक्षक सिंह प्रतिमाएँ।"
        },
        "audioNarrationTrackId": "c16_nandi_stairs",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_nandi_stairs.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_nandi_stairs.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_nandi_stairs.mp3"
        }
      },
      {
        "id": "c16_mahamandapa_porch",
        "title": {
          "en": "Main Pillared Mandapa Western Porch (Sabha Mandapa)",
          "kn": "ಮಹಾ ಸಭಾ ಮಂಟಪದ ಪಶ್ಚಿಮ ಪ್ರವೇಶ ಮುಖಮಂಟಪ",
          "hi": "मुख्य स्तम्भीय मंडप पश्चिमी मुखमंडप (सभा मंडप)"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 12,
            "yaw": 45,
            "hfov": 85
          }
        },
        "description": {
          "en": "The elevated western porch leading into the sixteen-pillared Great Assembly Hall (Mahamandapa) where devotees gathered before the inner sanctum.",
          "kn": "೧೬ ಕಂಬಗಳ ಮಹಾ ಸಭಾ ಮಂಟಪದ ಪಶ್ಚಿಮ ಪ್ರವೇಶ ದ್ವಾರ, ಭಕ್ತರು ಗರ್ಭಗುಡಿಯ ದರ್ಶನಕ್ಕೆ ಮುನ್ನ ಸಮಾವೇಶಗೊಳ್ಳುವ ಸ್ಥಳ.",
          "hi": "सोलह स्तंभों वाले विशाल महामंडप का पश्चिमी प्रवेश मुखमंडप, जहाँ भक्त गर्भगृह दर्शन से पूर्व एकत्र होते थे।"
        },
        "historicalSignificance": {
          "en": "The primary gathering hall of the temple complex, designed for congregational prayer, sacred dance, and royal ceremonies.",
          "kn": "ಸಾಮೂಹಿಕ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ಮುಖ್ಯ ಸಭಾಂಗಣ.",
          "hi": "सामूहिक प्रार्थना, शास्त्रार्थ और अनुष्ठानों हेतु निर्मित मुख्य विशाल सभा मंडप।"
        },
        "architecturalDetails": {
          "en": "Supported on high molded plinths with monumental dvarapala sentinels and ornate eaves.",
          "kn": "ಉನ್ನತ ಪೀಠ, ದ್ವಾರಪಾಲಕರು ಮತ್ತು ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಯ ಸೂರುಗಳಿಂದ ಕಂಗೊಳಿಸುತ್ತದೆ.",
          "hi": "ऊँची अलंकृत पीठिका, विशाल द्वारपाल और सुंदर छज्जों से सुशोभित।"
        },
        "audioNarrationTrackId": "c16_mahamandapa_porch",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_mahamandapa_porch.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_mahamandapa_porch.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_mahamandapa_porch.mp3"
        }
      },
      {
        "id": "c16_monolithic_bridge_passage",
        "title": {
          "en": "Central Covered Axial Passage Under Rock Bridge",
          "kn": "ಕಲ್ಲಿನ ಸೇತುವೆಯ ಕೆಳಗಿನ ಕೇಂದ್ರ ಸುರಂಗ ಮಾರ್ಗ",
          "hi": "शैल सेतु के नीचे केंद्रीय आच्छादित मार्ग"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6,
            "yaw": 0,
            "hfov": 85
          }
        },
        "description": {
          "en": "The ceremonial ground passage beneath the overhead monolithic rock bridge connecting the Nandi Mandapa to the Sabha Mandapa.",
          "kn": "ಮೇಲಿನ ಕಲ್ಲಿನ ಸೇತುವೆಯ ಕೆಳಗೆ ಹಾದುಹೋಗುವ ಮುಖ್ಯ ಮಾರ್ಗ, ನಂದಿ ಮಂಟಪ ಮತ್ತು ಸಭಾ ಮಂಟಪವನ್ನು ಬೆಸೆಯುತ್ತದೆ.",
          "hi": "ऊपरी अखंड शैल सेतु के नीचे से गुजरने वाला औपचारिक मार्ग जो नंदी मंडप को सभा मंडप से जोड़ता है।"
        },
        "historicalSignificance": {
          "en": "Demonstrates the sophisticated multi-level circulation system engineered into the living rock.",
          "kn": "ಒಂದೇ ಬಂಡೆಯಲ್ಲಿ ಮೇಲ್ಮಟ್ಟ ಮತ್ತು ಕೆಳಮಟ್ಟದ ಸಂಚಾರ ಮಾರ್ಗಗಳನ್ನು ನಿರ್ಮಿಸಿದ ಇಂಜಿನಿಯರಿಂಗ್ ಕೌಶಲ.",
          "hi": "ठोस चट्टान में बहु-स्तरीय आवागमन व्यवस्था निर्मित करने की अद्भुत वास्तुकला।"
        },
        "architecturalDetails": {
          "en": "Flanked by massive rock piers bearing the weight of the suspended bridge overhead.",
          "kn": "ಮೇಲಿನ ಸೇತುವೆಯ ಅಪಾರ ಭಾರವನ್ನು ಹೊತ್ತಿರುವ ಬಲಿಷ್ಠ ಕಲ್ಲಿನ ಆಧಾರ ಸ್ತಂಭಗಳು.",
          "hi": "ऊपरी निलंबित सेतु का भार संभालने वाले विशाल पाषाण आधार।"
        },
        "audioNarrationTrackId": "c16_monolithic_bridge_passage",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_monolithic_bridge_passage.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_monolithic_bridge_passage.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_monolithic_bridge_passage.mp3"
        }
      }
    ]
  },
  {
    "id": "kailash_central_axis_bridge",
    "sceneNumber": 11,
    "caveId": "cave_16",
    "title": {
      "en": "Cave 16 — Central Suspended Bridge & Vimana",
      "kn": "ಗುಹೆ ೧೬ — ಕೇಂದ್ರ ತೂಗು ಸೇತುವೆ ಮತ್ತು ವಿಮಾನ",
      "hi": "गुफा 16 — केंद्रीय प्रस्तर सेतु एवं विमान"
    },
    "subtitle": {
      "en": "Monolithic Elevated Sky-Walk Connecting Gopuram to Sanctum",
      "kn": "ಗೋಪುರವನ್ನು ಗರ್ಭಗುಡಿಯೊಂದಿಗೆ ಬೆಸೆಯುವ ಏಕಶಿಲಾ ಸೇತುವೆ",
      "hi": "गोपुरम को गर्भगृह से जोड़ता अखंड पाषाण सेतु"
    },
    "thumbnailUrl": "/assets/monuments/ellora/thumbnails/kailash_central_axis_bridge.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/ellora/panoramas/kailash_central_axis_bridge.jpg",
      "initialOrientation": {
        "pitch": 10,
        "yaw": -5,
        "hfov": 98
      },
      "limits": {
        "minPitch": -70,
        "maxPitch": 80,
        "minFov": 40,
        "maxFov": 120
      }
    },
    "audioNarration": {
      "trackId": "c16_central_axis_intro",
      "title": {
        "en": "Central Courtyard Axis & Overhead Rock Bridges",
        "kn": "ಕೇಂದ್ರ ಅಕ್ಷ ಮತ್ತು ಮೇಲ್ಭಾಗದ ಕಲ್ಲಿನ ಸೇತುವೆಗಳು",
        "hi": "केंद्रीय प्रांगण अक्ष एवं ऊपरी पाषाण सेतु"
      },
      "audioSources": {
        "en": "/assets/monuments/ellora/audio/en/c16_central_axis_intro.mp3",
        "kn": "/assets/monuments/ellora/audio/kn/c16_central_axis_intro.mp3",
        "hi": "/assets/monuments/ellora/audio/hi/c16_central_axis_intro.mp3"
      },
      "transcripts": {
        "en": "You are standing on the central axis beneath the monumental rock bridges. Around you, the massive basalt structures of the Nandi Mandapa and main temple rise in breathtaking symmetry. Nearby on the southern plinth is the celebrated relief of Ravana shaking Mount Kailash.",
        "kn": "ನೀವು ಕೈಲಾಸ ದೇವಾಲಯದ ಕೇಂದ್ರ ಅಕ್ಷದಲ್ಲಿದ್ದೀರಿ. ತಲೆಯ ಮೇಲೆ ಬೃಹತ್ ಕಲ್ಲಿನ ಸೇತುವೆಗಳಿವೆ. ಸುತ್ತಲೂ ನಂದಿ ಮಂಟಪ ಮತ್ತು ಮುಖ್ಯ ದೇವಾಲಯದ ಭವ್ಯ ಸೌಂದರ್ಯವಿದೆ. ಸಮೀಪದ ದಕ್ಷಿಣ ಪೀಠದಲ್ಲಿ ವಿಶ್ವವಿಖ್ಯಾತ ರಾವಣಾನುಗ್ರಹ ಶಿಲ್ಪವಿದೆ.",
        "hi": "आप मंदिर के केंद्रीय अक्ष पर खड़े हैं, जहां सिर के ऊपर प्राचीन पाषाण सेतु है। चारों ओर नंदी मंडप और मुख्य मंदिर की विहंगम सममिति दिखाई देती है। समीप ही दक्षिणी भित्ति पर रावण द्वारा कैलाश पर्वत उठाने का अद्वितीय शिल्प है।"
      }
    },
    "hotspots": [
      {
        "id": "c16_rock_bridge",
        "title": {
          "en": "Suspended Monolithic Basalt Rock Bridge",
          "kn": "ತೂಗು ಏಕಶಿಲಾ ಕಲ್ಲಿನ ಸೇತುವೆ",
          "hi": "निलंबित एकाश्मक पाषाण शैल सेतु"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 24,
            "yaw": -10,
            "hfov": 85
          }
        },
        "description": {
          "en": "Suspended nine meters above the courtyard floor, this monolithic rock bridge links the upper level of the Nandi Mandapa directly to the western porch of the Sabha Mandapa.",
          "kn": "ಅಂಗಳದಿಂದ ಒಂಬತ್ತು ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿ ಗಾಳಿಯಲ್ಲೇ ತೇಲುವಂತೆ ಕಾಣುವ ಏಕಶಿಲಾ ಸೇತುವೆ, ನಂದಿ ಮಂಟಪದಿಂದ ನೇರವಾಗಿ ಸಭಾ ಮಂಟಪಕ್ಕೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುತ್ತದೆ.",
          "hi": "प्रांगण तल से नौ मीटर ऊपर निलंबित यह अखंड शैल सेतु नंदी मंडप के ऊपरी तल को सीधे सभा मंडप के पश्चिमी मुखमंडप से जोड़ता है।"
        },
        "historicalSignificance": {
          "en": "A world-renowned marvel of ancient Indian engineering, carved in-situ without joints or keystones from living stone.",
          "kn": "ಯಾವುದೇ ಕೀಲುಗಳು ಅಥವಾ ಗಾರೆಯಿಲ್ಲದೆ ಕೇವಲ ಬಂಡೆಯಲ್ಲೇ ಕೊರೆಯಲಾದ ಪ್ರಾಚೀನ ಭಾರತದ ಇಂಜಿನಿಯರಿಂಗ್ ವಿಸ್ಮಯ.",
          "hi": "बिना किसी जोड़ या गारे के केवल ठोस चट्टान से तराशा गया प्राचीन भारतीय अभियांत्रिकी का विश्वविख्यात चमत्कार।"
        },
        "architecturalDetails": {
          "en": "Engineered as an integral structural arch spanning across the courtyard void with parapet moldings.",
          "kn": "ಕಲ್ಲಿನ ಬೋನು ಅಥವಾ ಆಸರೆಯಿಲ್ಲದೆ ನಿಂತಿರುವ ಭದ್ರವಾದ ಕಮಾನು ಸೇತುವೆ.",
          "hi": "प्रांगण के खुले अंतराल पर विस्तृत अभिन्न पाषाण मेहराब और जंगले।"
        },
        "audioNarrationTrackId": "c16_rock_bridge",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_rock_bridge.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_rock_bridge.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_rock_bridge.mp3"
        }
      },
      {
        "id": "c16_nataraja_relief",
        "title": {
          "en": "Nataraja Dancing Shiva Western Relief",
          "kn": "ನಟರಾಜ ನೃತ್ಯ ಶಿವನ ಪಶ್ಚಿಮ ಭಿತ್ತಿಶಿಲ್ಪ",
          "hi": "नटराज नर्तक शिव पश्चिमी भित्ति शिल्प"
        },
        "category": "Sculpture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 12,
            "yaw": 28,
            "hfov": 80
          }
        },
        "description": {
          "en": "Dynamic bas-relief of dancing Shiva (Nataraja) sculpted in high relief on the western facade of the Mahamandapa porch, surrounded by celestial musicians.",
          "kn": "ಮಹಾ ಮಂಟಪದ ಪಶ್ಚಿಮ ಮುಖಭಾಗದಲ್ಲಿ ಕೆತ್ತಲಾದ ನಟರಾಜ ಶಿವನ ಅದ್ಭುತ ನೃತ್ಯ ಶಿಲ್ಪ, ಸುತ್ತಲೂ ಗಂಧರ್ವರು ಮತ್ತು ವಾದ್ಯಗಾರರಿದ್ದಾರೆ.",
          "hi": "महामंडप के पश्चिमी अग्रभाग पर उच्च-उभार में उत्कीर्ण नटराज शिव का दिव्य तांडव नृत्य, जिसके चारों ओर देवगण और वादक उपस्थित हैं।"
        },
        "historicalSignificance": {
          "en": "Celebrates Shiva's cosmic dance of creation and dissolution at the western threshold of the assembly hall.",
          "kn": "ಸೃಷ್ಟಿ ಮತ್ತು ಲಯದ ಆನಂದ ತಾಂಡವವನ್ನು ಸಾರುವ ಶ್ರೇಷ್ಠ ಶೈವ ಶಿಲ್ಪ.",
          "hi": "सृष्टि और प्रलय के ब्रह्मांडीय तांडव का प्रतिनिधित्व करने वाला उत्कृष्ट शैव शिल्प।"
        },
        "architecturalDetails": {
          "en": "Eight-armed dancing form exhibiting fluid bodily rhythm carved into hard basalt rock.",
          "kn": "ಅಷ್ಟಭುಜಗಳನ್ನು ಹೊಂದಿರುವ ನಟರಾಜನ ಲಾಸ್ಯ ಮತ್ತು ಭಂಗಿ ಕಪ್ಪು ಕಲ್ಲಿನಲ್ಲೂ ಅತ್ಯಂತ ನಮ್ಯವಾಗಿ ಮೂಡಿಬಂದಿದೆ.",
          "hi": "कठोर बेसाल्ट में अष्टभुजाधारी नटराज की देहयष्टि और लयबद्ध गति का बेजोड़ अंकन।"
        },
        "audioNarrationTrackId": "c16_nataraja_relief",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_nataraja_relief.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_nataraja_relief.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_nataraja_relief.mp3"
        }
      },
      {
        "id": "c16_sanctum_vimana",
        "title": {
          "en": "Sacred Vimana Superstructure over Garbhagriha",
          "kn": "ಗರ್ಭಗುಡಿಯ ಮೇಲಿನ ಪವಿತ್ರ ವಿಮಾನ ಗೋಪುರ",
          "hi": "गर्भगृह के ऊपर पवित्र विमान शिखर"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 34,
            "yaw": 14,
            "hfov": 85
          }
        },
        "description": {
          "en": "The stepped pyramidal Dravidian tower crowned with an octagonal shikhara dome, standing directly above the Shiva Lingam sanctum.",
          "kn": "ಶಿವಲಿಂಗವಿರುವ ಗರ್ಭಗುಡಿಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೇರವಾಗಿ ಎದ್ದು ನಿಂತಿರುವ ಅಷ್ಟಕೋನ ಶಿಖರ ಮತ್ತು ಪಿರಮಿಡ್ ವಿಮಾನ ಗೋಪುರ.",
          "hi": "गर्भगृह में स्थापित शिवलिंग के ठीक ऊपर अवस्थित सोपानाकार द्रविड़ शिखर एवं अष्टकोणीय गुंबद।"
        },
        "historicalSignificance": {
          "en": "Houses the central sanctum sanctorum (Garbhagriha), the sacred core of the entire Kailasa monument.",
          "kn": "ಇಡೀ ಕೈಲಾಸ ದೇವಾಲಯದ ಅತಿ ಪವಿತ್ರ ಕೇಂದ್ರವಾದ ಗರ್ಭಗುಡಿಯ ನೆಲೆ.",
          "hi": "समस्त कैलाश मंदिर का परम पावन आध्यात्मिक केंद्र - गर्भगृह।"
        },
        "architecturalDetails": {
          "en": "Aligns with the central astronomical east-west axis of the complex.",
          "kn": "ದೇವಾಲಯದ ಪೂರ್ವ-ಪಶ್ಚಿಮ ಖಗೋಳ ಅಕ್ಷಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.",
          "hi": "परिसर के केंद्रीय पूर्व-पश्चिम खगोलीय अक्ष के साथ पूर्णतः संरेखित।"
        },
        "audioNarrationTrackId": "c16_sanctum_vimana",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_sanctum_vimana.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_sanctum_vimana.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_sanctum_vimana.mp3"
        }
      },
      {
        "id": "c16_axial_vestibule",
        "title": {
          "en": "Antarala (Sanctum Vestibule) & Ground Axis",
          "kn": "ಅಂತರಾಳ (ಗರ್ಭಗುಡಿ ಪ್ರವೇಶ ಮುಖಮಂಟಪ) ಮತ್ತು ಕೇಂದ್ರ ಅಕ್ಷ",
          "hi": "अंतराल (गर्भगृह अंतःकक्ष) एवं केंद्रीय अक्ष"
        },
        "category": "Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4,
            "yaw": -2,
            "hfov": 85
          }
        },
        "description": {
          "en": "The processional ground axis passing through the central threshold toward the inner vestibule (Antarala) leading into the sacred Garbhagriha.",
          "kn": "ಗರ್ಭಗುಡಿಯ ಒಳಗೆ ಸಾಗುವ ಅಂತರಾಳ ಮತ್ತು ಪವಿತ್ರ ಪ್ರವೇಶ ಮಾರ್ಗದ ಕೇಂದ್ರ ಅಕ್ಷ.",
          "hi": "पवित्र गर्भगृह की ओर ले जाने वाला अंतराल कक्ष और मुख्य केंद्रीय धरातलीय अक्ष।"
        },
        "historicalSignificance": {
          "en": "The transitional passage connecting the manifest world of the mandapa with the unmanifest divine realm inside the sanctum.",
          "kn": "ಸಭಾ ಮಂಟಪದಿಂದ ಗರ್ಭಗುಡಿಯ ಗೂಢ ದೈವಿಕ ಲೋಕಕ್ಕೆ ಬೆಸೆಯುವ ಅಂತರಾಳ ಮಾರ್ಗ.",
          "hi": "सभा मंडप से गर्भगृह के दिव्य गर्भगृह में प्रवेश कराने वाला आध्यात्मिक पारगमन कक्ष।"
        },
        "architecturalDetails": {
          "en": "Thick rock-cut doorframe adorned with Ganga and Yamuna figures holding lotus stalks.",
          "kn": "ಕಮಲದ ದಂಟುಗಳನ್ನು ಹಿಡಿದ ಗಂಗಾ ಮತ್ತು ಯಮುನಾ ದೇವಿಯರ ಕೆತ್ತನೆಯಿಂದ ಕೂಡಿದ ದ್ವಾರಬಂಧ.",
          "hi": "कमल नाल धारण किए गंगा और यमुना की पावन आकृतियों से अलंकृत पाषाण द्वारशाखा।"
        },
        "audioNarrationTrackId": "c16_axial_vestibule",
        "audioSources": {
          "en": "/assets/monuments/ellora/audio/en/c16_axial_vestibule.mp3",
          "kn": "/assets/monuments/ellora/audio/kn/c16_axial_vestibule.mp3",
          "hi": "/assets/monuments/ellora/audio/hi/c16_axial_vestibule.mp3"
        }
      }
    ]
  }
];

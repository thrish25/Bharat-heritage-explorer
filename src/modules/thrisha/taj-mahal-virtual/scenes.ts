/**
 * Taj Mahal — Authentic 360° Scenes & Hotspot Definitions
 * Fully integrated from verified survey and audio guides
 * UNESCO Inscribed 1983 | Mughal Architecture
 */

import { Scene } from '../../../types/monument';

export const DEFAULT_TAJ_MAHAL_SCENE_ID = 'scene_3_charbagh_garden';

export const TAJ_MAHAL_SCENES: Scene[] = [
  {
    "id": "scene_3_charbagh_garden",
    "sceneNumber": 1,
    "title": {
      "en": "Central Charbagh & Pool (Diana Bench)",
      "kn": "ಕೇಂದ್ರ ಚಾರ್‌ಬಾಗ್ ಮತ್ತು ಕಾರಂಜಿ (ಡಯಾನಾ ಬೆಂಚ್)",
      "hi": "केंद्रीय चारबाग और ताल (डायना बेंच)"
    },
    "subtitle": {
      "en": "Exterior – Al Hawd al-Kawthar Raised Platform",
      "kn": "ಹೊರಭಾಗ – ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ ಅಮೃತಶಿಲೆಯ ವೇದಿಕೆ",
      "hi": "बाहरी भाग – अल हौज़ अल-कौसर संगमरमर चबूतरा"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_3_garden_pool_diana_bench.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_3_charbagh_garden.jpg",
      "initialOrientation": {
        "pitch": 2,
        "yaw": -55.5,
        "hfov": 98
      },
      "limits": {
        "minPitch": -36,
        "maxPitch": 38,
        "minFov": 50,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "scene_3_charbagh_garden",
      "title": {
        "en": "Central Charbagh & Pool (Diana Bench)",
        "kn": "ಕೇಂದ್ರ ಚಾರ್‌ಬಾಗ್ ಮತ್ತು ಕಾರಂಜಿ (ಡಯಾನಾ ಬೆಂಚ್)",
        "hi": "केंद्रीय चारबाग और ताल (डायना बेंच)"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_3_charbagh_garden.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_3_charbagh_garden.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_3_charbagh_garden.mp3"
      },
      "transcripts": {
        "en": "Welcome to the central Charbagh garden of the Taj Mahal. You are standing on the elevated marble platform of Al Hawd al-Kawthar, the Celestial Pool of Abundance. In Mughal cosmological design, this quadripartite fourfold garden symbolizes the gardens of paradise. Looking north, the white marble mausoleum rises gracefully above its sandstone plinth, creating the world-famous mirror reflection across the tranquil waters.",
        "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಕೇಂದ್ರ ಚಾರ್‌ಬಾಗ್ ಉದ್ಯಾನವನಕ್ಕೆ ಸುಸ್ವಾಗತ. ನೀವು ಈಗ ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ ಎಂಬ ಪವಿತ್ರ ಅಮೃತಶಿಲೆಯ ವೇದಿಕೆಯ ಮೇಲೆ ನಿಂತಿದ್ದೀರಿ. ಮೊಘಲ್ ವಾಸ್ತುಶಿಲ್ಪದಲ್ಲಿ ಈ ನಾಲ್ಕು ಭಾಗಗಳ ಚಾರ್‌ಬಾಗ್ ಉದ್ಯಾನವು ಸ್ವರ್ಗದ ಉದ್ಯಾನವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಉತ್ತರಕ್ಕೆ ನೋಡಿದಾಗ, ಭವ್ಯವಾದ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ತಾಜ್ ಮಹಲ್ ನೀರಿನಲ್ಲಿ ಸುಂದರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುವುದನ್ನು ನೀವು ಕಾಣಬಹುದು.",
        "hi": "ताज महल के केंद्रीय चारबाग में आपका स्वागत है। आप इस समय अल हौज़ अल-कौसर यानी प्रचुरता के ताल के संगमरमर चबूतरे पर खड़े हैं। मुग़ल वास्तुकला में यह चार भागों वाला बाग़ जन्नत के बाग़ों का प्रतीक है। उत्तर दिशा में देखने पर भव्य श्वेत संगमरमर का मक़बरा जल में अपना मनमोहक प्रतिबिंब बिखेरता दिखाई देता है।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s3_facade",
        "title": {
          "en": "Main Mausoleum Façade & Central Pishtaq",
          "kn": "ಮುಖ್ಯ ಸಮಾಧಿ ಮುಂಭಾಗ ಮತ್ತು ಕೇಂದ್ರ ಪಿಸ್ತಾಕ್",
          "hi": "मुख्य मक़बरा मुखौटा और केंद्रीय पिश्ताक़"
        },
        "category": "Architectural Monument",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 5.9,
            "yaw": -55.7,
            "hfov": 85
          }
        },
        "description": {
          "en": "The monumental recessed central iwan arch (pishtaq) defining the south elevation of the tomb chamber.",
          "kn": "ಸಮಾಧಿ ಮಂದಿರದ ದಕ್ಷಿಣ ಮುಂಭಾಗವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುವ ಭವ್ಯವಾದ ಕೇಂದ್ರ ಪಿಸ್ತಾಕ್ ಕಮಾನು.",
          "hi": "मक़बरे के दक्षिणी भाग को परिभाषित करने वाला विशाल केंद्रीय पिश्ताक़ मेहराब।"
        },
        "historicalSignificance": {
          "en": "Commissioned in 1631 by Mughal Emperor Shah Jahan as an earthly replica of the celestial palace (Rauza) promised in paradise.",
          "kn": "ಸ್ವರ್ಗದ ದೈವಿಕ ಅರಮನೆಯ ಪ್ರತೀಕವಾಗಿ ಮೊಘಲ್ ಚಕ್ರವರ್ತಿ ಶಾ ಜಹಾನ್ 1631 ರಲ್ಲಿ ಇದನ್ನು ನಿರ್ಮಿಸಲು ಆದೇಶಿಸಿದರು.",
          "hi": "मुग़ल सम्राट शाहजहाँ द्वारा 1631 में जन्नत के अलौकिक महल के प्रतीक स्वरूप इसे निर्मित करवाया गया था।"
        },
        "architecturalDetails": {
          "en": "Rises 33 meters high, built entirely of white Makrana marble from Rajasthan. Framed by Quranic calligraphy in inlaid black marble.",
          "kn": "ರಾಜಸ್ಥಾನದ ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಕಮಾನು 33 ಮೀಟರ್ ಎತ್ತರವಿದ್ದು, ಕಪ್ಪು ಅಮೃತಶಿಲೆಯ ಅರೇಬಿಕ್ ಶಾಸನಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "राजस्थान के मकराना संगमरमर से निर्मित यह 33 मीटर ऊँचा मेहराब काले संगमरमर की क़ुरानी आयतों से सुसज्जित है।"
        },
        "audioNarrationTrackId": "hotspot_s3_facade",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s3_facade.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s3_facade.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s3_facade.mp3"
        },
        "transcripts": {
          "en": "The monumental southern pishtaq rises thirty-three meters above the plinth. Made of pure white Makrana marble, it is framed with calligraphic Quranic inscriptions inlaid in black marble, proportionally scaled so each letter appears uniform from below.",
          "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಮುಖ್ಯ ದಕ್ಷಿಣ ಮುಂಭಾಗದ ಪಿಸ್ತಾಕ್ ಕಮಾನು ಮೂವತ್ತು ಮೂರು ಮೀಟರ್ ಎತ್ತರಕ್ಕೆ ಏರಿದೆ. ಶುದ್ಧ ಬಿಳಿ ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಪ್ರವೇಶದ್ವಾರದ ಸುತ್ತಲೂ ಕಪ್ಪು ಅಮೃತಶಿಲೆಯ ಕುರಾನ್ ಶಾಸನಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "मुख्य दक्षिणी पिश्ताक़ मेहराब चबूतरे से तैंतीस मीटर ऊँचा है। शुद्ध मकराना संगमरमर से निर्मित यह द्वार काले संगमरमर की क़ुरानी आयतों से सुसज्जित है, जिन्हें नीचे से देखने पर एक समान दिखने के लिए विशेष अनुपात में तराशा गया है।"
        }
      },
      {
        "id": "hotspot_s3_pool",
        "title": {
          "en": "Al Hawd al-Kawthar (Celestial Pool of Abundance)",
          "kn": "ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ (ಸ್ವರ್ಗೀಯ ಸಮೃದ್ಧಿಯ ಕೊಳ)",
          "hi": "अल हौज़ अल-कौसर (प्रचुरता का दिव्य ताल)"
        },
        "category": "Hydraulic Landscape",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -10.2,
            "yaw": -55.2,
            "hfov": 85
          }
        },
        "description": {
          "en": "The central square marble reflecting pool situated at the nexus of the four quadripartite garden channels.",
          "kn": "ನಾಲ್ಕು ಉದ್ಯಾನ ಕಾಲುವೆಗಳ ಸಂಗಮದಲ್ಲಿರುವ ಕೇಂದ್ರ ಚೌಕಾಕಾರದ ಅಮೃತಶಿಲೆಯ ಪ್ರತಿಬಿಂಬ ಕೊಳ.",
          "hi": "चारों जलमार्गों के मिलन स्थल पर बना वर्गाकार संगमरमर का केंद्रीय प्रतिबिंब ताल।"
        },
        "historicalSignificance": {
          "en": "Directly reflects the Quranic Al-Kawthar, the celestial fountain where believers quench their thirst upon entering Paradise.",
          "kn": "ಸ್ವರ್ಗವನ್ನು ಪ್ರವೇಶಿಸುವಾಗ ಭಕ್ತರ ದಾಹವನ್ನು ತಣಿಸುವ ಪವಿತ್ರ ಅಲ್-ಕೌಸರ್ ಕಾರಂಜಿಯನ್ನು ಇದು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.",
          "hi": "क़ुरान में वर्णित अल-कौसर का प्रतीक, जहाँ जन्नत में प्रवेश करने वाले अपनी प्यास बुझाते हैं।"
        },
        "architecturalDetails": {
          "en": "Constructed of elevated white marble with five copper fountains and scalloped cusped corners. Its still surface creates a perfect mirror reflection.",
          "kn": "Constructed of elevated white marble with five copper fountains and scalloped cusped corners. Its still surface creates a perfect mirror reflection.",
          "hi": "पाँच तांबे के फव्वारों से सुसज्जित यह संगमरमर का ताल अपने शांत जल में मक़बरे का अद्भुत दर्पण प्रतिबिंब बनाता है।"
        },
        "audioNarrationTrackId": "hotspot_s3_pool",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s3_pool.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s3_pool.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s3_pool.mp3"
        },
        "transcripts": {
          "en": "Al Hawd al-Kawthar, the Celestial Pool of Abundance, is positioned at the intersection of the four garden waterways. Its calm waters produce the iconic, perfect reflection of the Taj Mahal dome and minarets.",
          "kn": "ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ ಅಥವಾ ಸ್ವರ್ಗೀಯ ಸಮೃದ್ಧಿಯ ಕೊಳವು ನಾಲ್ಕು ಉದ್ಯಾನ ನಾಲಾಗಳ ಕೇಂದ್ರದಲ್ಲಿದೆ. ಇದರ ಶಾಂತ ನೀರು ತಾಜ್ ಮಹಲ್‌ನ ಸುಂದರವಾದ ಪ್ರತಿಬಿಂಬವನ್ನು ಮೂಡಿಸುತ್ತದೆ.",
          "hi": "अल हौज़ अल-कौसर चारबाग के चारों जलमार्गों के मिलन स्थल पर बना है। इसका शांत जल ताज महल के गुंबद और मीनारों का विख्यात दर्पण प्रतिबिंब उत्पन्न करता है।"
        }
      },
      {
        "id": "hotspot_s3_sw_minaret",
        "title": {
          "en": "South-West Freestanding Corner Minaret",
          "kn": "ನೈಋತ್ಯ ಮೂಲೆಯ ಸ್ವತಂತ್ರ ಮಿನಾರ್",
          "hi": "दक्षिण-पश्चिम की स्वतंत्र कोणीय मीनार"
        },
        "category": "Structural Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 10.6,
            "yaw": -71.3,
            "hfov": 85
          }
        },
        "description": {
          "en": "One of four monumental 40-meter tall three-story marble minarets anchoring the corners of the plinth.",
          "kn": "ವೇದಿಕೆಯ ಮೂಲೆಯನ್ನು ಭದ್ರಪಡಿಸುವ 40 ಮೀಟರ್ ಎತ್ತರದ ಮೂರು ಹಂತಗಳ ಅಮೃತಶಿಲೆಯ ಮಿನಾರ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
          "hi": "चबूतरे के कोनों पर स्थित चालीस मीटर ऊँची तीन मंजिला संगमरमर की मीनारों में से एक।"
        },
        "historicalSignificance": {
          "en": "Frames the sacred tomb as a royal monument while accentuating the three-dimensional depth and grandeur of the central composition.",
          "kn": "ಪವಿತ್ರ ಸಮಾಧಿಗೆ ರಾಜಮನೆತನದ ಭವ್ಯತೆಯನ್ನು ನೀಡುವುದರ ಜೊತೆಗೆ ಮೂರು ಆಯಾಮದ ಸೌಂದರ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
          "hi": "मक़बरे को शाही गरिमा प्रदान करते हुए केंद्रीय संरचना को भव्य गहराई देती है।"
        },
        "architecturalDetails": {
          "en": "Constructed in three tapering stages separated by railed balconies, engineered with a deliberate 2-degree outward lean.",
          "kn": "ಬಾಲ್ಕನಿಗಳಿಂದ ಪ್ರತ್ಯೇಕಿಸಲ್ಪಟ್ಟ ಮೂರು ಹಂತಗಳನ್ನು ಹೊಂದಿದ್ದು, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಎರಡು ಡಿಗ್ರಿಗಳಷ್ಟು ಹೊರಮುಖವಾಗಿ ಓರೆಯಾಗಿದೆ.",
          "hi": "तीन मंजिलों में निर्मित और बालकनियों से सुसज्जित यह मीनार दो डिग्री बाहर की ओर झुकी हुई है।"
        },
        "audioNarrationTrackId": "hotspot_s3_sw_minaret",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s3_sw_minaret.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s3_sw_minaret.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s3_sw_minaret.mp3"
        },
        "transcripts": {
          "en": "The southwest minaret stands forty meters tall in three diminishing tiers. It was engineered with a deliberate slight outward tilt of two degrees, ensuring it would collapse away from the central tomb during an earthquake.",
          "kn": "ನೈಋತ್ಯ ಮೂಲೆಯ ನಲವತ್ತು ಮೀಟರ್ ಎತ್ತರದ ಈ ಮಿನಾರ್ ಮೂರು ಹಂತಗಳನ್ನು ಹೊಂದಿದೆ. ಭೂಕಂಪದ ಸಂದರ್ಭದಲ್ಲಿ ಸಮಾಧಿಯ ಮೇಲೆ ಬೀಳದಂತೆ ಇದನ್ನು ಹೊರಮುಖವಾಗಿ ಸ್ವಲ್ಪ ಓರೆಯಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
          "hi": "दक्षिण-पश्चिम की यह मीनार चालीस मीटर ऊँची है और तीन मंजिलों में विभाजित है। भूकंप से मक़बरे की सुरक्षा के लिए इसे जानबूझकर बाहर की ओर दो डिग्री झुकाकर बनाया गया है।"
        }
      },
      {
        "id": "hotspot_s3_charbagh_grid",
        "title": {
          "en": "Quadripartite Charbagh Paradise Garden Grid",
          "kn": "ನಾಲ್ಕು ಭಾಗಗಳ ಚಾರ್‌ಬಾಗ್ ಸ್ವರ್ಗೀಯ ಉದ್ಯಾನ",
          "hi": "चार भागों वाला चारबाग जन्नती उद्यान"
        },
        "category": "Landscape Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2.6,
            "yaw": -99.6,
            "hfov": 85
          }
        },
        "description": {
          "en": "The classic Mughal Persian-style fourfold garden divided into sixteen sunken parterres.",
          "kn": "ಹದಿನಾರು ತಗ್ಗು ಮಡಿಗಳಾಗಿ ವಿಂಗಡಿಸಲಾದ ಶಾಸ್ತ್ರೀಯ ಮೊಘಲ್ ಪರ್ಷಿಯನ್ ಶೈಲಿಯ ಚಾರ್‌ಬಾಗ್ ಉದ್ಯಾನ.",
          "hi": "सोलह क्यारियों में विभाजित पारंपरिक मुग़ल फ़ारसी शैली का चारबाग उद्यान।"
        },
        "historicalSignificance": {
          "en": "Embodies the Quranic description of the Garden of Eden, divided by four rivers flowing with water, milk, honey, and wine.",
          "kn": "ನೀರು, ಹಾಲು, ಜೇನು ಮತ್ತು ಮದ್ಯದ ನಾಲ್ಕು ಸ್ವರ್ಗದ ನದಿಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಸ್ವರ್ಗೀಯ ಉದ್ಯಾನವನದ ಕಲ್ಪನೆ.",
          "hi": "जन्नत की चार पवित्र नदियों का प्रतीक, जहाँ जल, दूध, शहद और अमृत की धाराएँ बहती हैं।"
        },
        "architecturalDetails": {
          "en": "Measures 300 by 300 meters, structured symmetrically by raised paved walkways and central water canals lined with cypress trees.",
          "kn": "300x300 ಮೀಟರ್ ವಿಸ್ತೀರ್ಣ ಹೊಂದಿದ್ದು, ಎತ್ತರದ ಪಾದಚಾರಿ ಮಾರ್ಗಗಳು ಮತ್ತು ಸೈಪ್ರೆಸ್ ಮರಗಳಿಂದ ಕೂಡಿದೆ.",
          "hi": "300 गुणा 300 मीटर का यह क्षेत्र ऊँचे पक्के रास्तों और नहरों से सममित रूप से विभाजित है।"
        },
        "audioNarrationTrackId": "hotspot_s3_charbagh_grid",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s3_charbagh_grid.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s3_charbagh_grid.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s3_charbagh_grid.mp3"
        },
        "transcripts": {
          "en": "The Charbagh garden is divided by four water channels into sixteen sunken parterres, symbolizing the four rivers of paradise described in the Quran flowing with water, milk, honey, and wine.",
          "kn": "ಚಾರ್‌ಬಾಗ್ ಉದ್ಯಾನವನ್ನು ನಾಲ್ಕು ನಾಲಾಗಳಿಂದ ಹದಿನಾರು ತಗ್ಗು ಮಡಿಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ. ಇದು ಸ್ವರ್ಗದ ನಾಲ್ಕು ಪವಿತ್ರ ನದಿಗಳನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ.",
          "hi": "चारबाग को चार जल नहरों द्वारा सोलह क्यारियों में बाँटा गया है, जो जन्नत की चार पवित्र नदियों का प्रतीक हैं।"
        }
      },
      {
        "id": "hotspot_s3_diana_bench",
        "title": {
          "en": "Lady Diana Ceremonial Marble Bench",
          "kn": "ಲೇಡಿ ಡಯಾನಾ ಅಮೃತಶಿಲೆಯ ಬೆಂಚ್",
          "hi": "लेडी डायना संगमरमर बेंच"
        },
        "category": "Historical Monument",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -23.4,
            "yaw": -53.3,
            "hfov": 85
          }
        },
        "description": {
          "en": "The ceremonial white marble bench resting on the raised central platform.",
          "kn": "ಕೇಂದ್ರ ವೇದಿಕೆಯ ಮೇಲೆ ನೆಲೆಸಿರುವ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಆಸನ.",
          "hi": "केंद्रीय चबूतरे पर स्थित नक्काशीदार सफ़ेद संगमरमर की शाही बेंच।"
        },
        "historicalSignificance": {
          "en": "Positioned at the geometric center of the gardens to afford royalty the supreme vantage point of the mausoleum.",
          "kn": "ರಾಜಮನೆತನದವರು ತಾಜ್ ಮಹಲ್‌ನ ಅದ್ಭುತ ಸೌಂದರ್ಯವನ್ನು ಆಸ್ವಾದಿಸಲು ಉದ್ಯಾನದ ಜ್ಯಾಮಿತೀಯ ಕೇಂದ್ರದಲ್ಲಿ ಇದನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು.",
          "hi": "शाही परिवार के सदस्यों के लिए ताज महल का मनोरम दृश्य देखने हेतु इसे उद्यान के मध्य में बनाया गया था।"
        },
        "architecturalDetails": {
          "en": "Carved of white Makrana marble with perforated floral armrests and balustraded support pillars.",
          "kn": "ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಹೂವಿನ ಕೆತ್ತನೆಯ ಕೈಪಿಡಿಗಳು ಮತ್ತು ಸುಂದರ ಆಧಾರ ಸ್ತಂಭಗಳೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
          "hi": "मकराना संगमरमर से तराशी गई इस बेंच पर सुंदर पुष्प नक्काशी और आधार स्तंभ बने हुए हैं।"
        },
        "audioNarrationTrackId": "hotspot_s3_diana_bench",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s3_diana_bench.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s3_diana_bench.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s3_diana_bench.mp3"
        },
        "transcripts": {
          "en": "This ceremonial white marble bench, famously photographed during Princess Diana's visit in 1992, rests on the central platform providing visitors the classic symmetrical view of the Taj Mahal.",
          "kn": "1992ರಲ್ಲಿ ರಾಜಕುಮಾರಿ ಡಯಾನಾ ಅವರ ಭೇಟಿಯ ಸಮಯದಲ್ಲಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದ ಈ ಅಮೃತಶಿಲೆಯ ಬೆಂಚ್, ತಾಜ್ ಮಹಲ್‌ನ ಪೂರ್ಣ ಸಮ್ಮಿತಿಯ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ.",
          "hi": "1992 में राजकुमारी डायना के दौरे से प्रसिद्ध हुआ यह संगमरमर का चबूतरा आगंतुकों को ताज महल का संपूर्ण सममितीय दृश्य देखने का स्थान प्रदान करता है।"
        }
      }
    ],
    "linkedSceneIds": []
  },
  {
    "id": "scene_5_north_riverside",
    "sceneNumber": 2,
    "title": {
      "en": "North Riverside Terrace (Chameli Farsh)",
      "kn": "ಉತ್ತರ ನದಿಯ ತೀರದ ವೇದಿಕೆ (ಚಮೇಲಿ ಫರ್ಶ್)",
      "hi": "उत्तरी नदी तट चबूतरा (चमेली फर्श)"
    },
    "subtitle": {
      "en": "Exterior – Yamuna Riverfront Pavement",
      "kn": "ಹೊರಭಾಗ – ಯಮುನಾ ನದಿಯ ದಂಡೆಯ ಪಾದಚಾರಿ ಮಾರ್ಗ",
      "hi": "बाहरी भाग – यमुना नदी तट का विस्तृत फर्श"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_5_north_riverside.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_5_north_riverside.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": -90,
        "hfov": 95
      },
      "limits": {
        "minPitch": -36,
        "maxPitch": 38,
        "minFov": 50,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "scene_5_north_riverside",
      "title": {
        "en": "North Riverside Terrace (Chameli Farsh)",
        "kn": "ಉತ್ತರ ನದಿಯ ತೀರದ ವೇದಿಕೆ (ಚಮೇಲಿ ಫರ್ಶ್)",
        "hi": "उत्तरी नदी तट चबूतरा (चमेली फर्श)"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_5_north_riverside.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_5_north_riverside.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_5_north_riverside.mp3"
      },
      "transcripts": {
        "en": "Welcome to the North Riverside Terrace, historically called Chameli Farsh. Here, along the northern boundary of the monument, the Yamuna River curves peacefully below. This spacious terrace is paved in red sandstone with inlaid geometric marble patterns. Looking across the river to the north lies Mehtab Bagh, the Moonlight Garden, designed as an ideal vantage point for viewing the Taj Mahal illuminated by the full moon.",
        "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಉತ್ತರ ನದಿಯ ತೀರದ ವೇದಿಕೆಯಾದ ಚಮೇಲಿ ಫರ್ಶ್‌ಗೆ ಸುಸ್ವಾಗತ. ಪವಿತ್ರ ಯಮುನಾ ನದಿಯು ಈ ವೇದಿಕೆಯ ಕೆಳಗೆ ಶಾಂತವಾಗಿ ಹರಿಯುತ್ತದೆ. ಕೆಂಪು ಮರಳುಗಲ್ಲಿನಲ್ಲಿ ಜ್ಯಾಮಿತೀಯ ಕಲ್ಲಿನ ವಿನ್ಯಾಸಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ. ನದಿಯ ಆಚೆಗೆ ನೋಡಿದಾಗ, ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿಗಳಲ್ಲಿ ತಾಜ್ ಮಹಲ್‌ನ ಸೌಂದರ್ಯವನ್ನು ಆಸ್ವಾದಿಸಲು ನಿರ್ಮಿಸಲಾದ ಮೆಹ್ತಾಬ್ ಬಾಗ್ ಅಥವಾ ಚಂದ್ರನ ಬೆಳಕಿನ ಉದ್ಯಾನವನ ಗೋಚರಿಸುತ್ತದೆ.",
        "hi": "ताज महल के उत्तरी नदी तट चबूतरे यानी चमेली फर्श पर आपका स्वागत है। यहाँ नीचे पवित्र यमुना नदी शांति से बहती है। यह विस्तृत चबूतरा लाल बलुआ पत्थर और श्वेत संगमरमर की सुंदर ज्यामितीय पच्चीकारी से सुसज्जित है। नदी के उस पार मेहताब बाग़ स्थित है, जिसे पूर्णिमा की चांदनी में ताज महल का दीदार करने के लिए बनाया गया था।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s5_minaret",
        "title": {
          "en": "North-West Freestanding Corner Minaret",
          "kn": "ವಾಯುವ್ಯ ಮೂಲೆಯ ಸ್ವತಂತ್ರ ಮಿನಾರ್",
          "hi": "उत्तर-पश्चिम की स्वतंत्र कोणीय मीनार"
        },
        "category": "Structural Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 19.1,
            "yaw": -72.2,
            "hfov": 85
          }
        },
        "description": {
          "en": "The riverfront northwest minaret perched directly above the Yamuna embankment.",
          "kn": "ಯಮುನಾ ನದಿಯ ದಂಡೆಯ ಮೇಲಿರುವ ವಾಯುವ್ಯ ದಿಕ್ಕಿನ ಅಮೃತಶಿಲೆಯ ಮಿನಾರ್.",
          "hi": "यमुना नदी के तट पर स्थित उत्तर-पश्चिमी संगमरमर की मीनार।"
        },
        "historicalSignificance": {
          "en": "Demonstrates seventeenth-century hydraulic engineering, built over deep masonry well foundations reinforced with timber caissons.",
          "kn": "ಹದಿನೇಳನೇ ಶತಮಾನದ ಜಲ ಇಂಜಿನಿಯರಿಂಗ್‌ಗೆ ಸಾಕ್ಷಿಯಾಗಿದ್ದು, ಮರದ ಬಾವಿ ಅಡಿಪಾಯದ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
          "hi": "सत्रहवीं सदी के जल इंजीनियरिंग का उत्कृष्ट उदाहरण, जिसे गहरे लकड़ी के कुओं की नींव पर बनाया गया है।"
        },
        "architecturalDetails": {
          "en": "Rises 40 meters on the northern edge with an internal staircase and triple balconies.",
          "kn": "ಉತ್ತರ ಅಂಚಿನಲ್ಲಿ 40 ಮೀಟರ್ ಎತ್ತರಕ್ಕೆ ಏರಿದ್ದು, ಮೂರು ಬಾಲ್ಕನಿಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "उत्तरी छोर पर चालीस मीटर ऊँची इस मीनार में तीन मंजिलें और छतरी बनी है।"
        },
        "audioNarrationTrackId": "hotspot_s5_minaret",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s5_minaret.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s5_minaret.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s5_minaret.mp3"
        },
        "transcripts": {
          "en": "The northwest minaret anchors the corner above the Yamuna River, resting on deep wooden well foundations that remain preserved by the moisture of the river.",
          "kn": "ಯಮುನಾ ನದಿಯ ದಂಡೆಯ ಮೇಲಿರುವ ವಾಯುವ್ಯ ಮಿನಾರ್, ನದಿಯ ತೇವಾಂಶದಿಂದ ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟ ಮರದ ಬಾವಿ ಅಡಿಪಾಯದ ಮೇಲೆ ನಿಂತಿದೆ.",
          "hi": "उत्तर-पश्चिम की यह मीनार यमुना नदी के किनारे स्थित है, जिसकी नींव में लकड़ी के गहरे कुएँ हैं जो नदी की नमी से सुरक्षित रहते हैं।"
        }
      },
      {
        "id": "hotspot_s5_pavement",
        "title": {
          "en": "Chameli Farsh Geometric Mosaic Pavement",
          "kn": "ಚಮೇಲಿ ಫರ್ಶ್ ಜ್ಯಾಮಿತೀಯ ಕಲ್ಲಿನ ಪಾದಚಾರಿ ಮಾರ್ಗ",
          "hi": "चमेली फर्श ज्यामितीय मोज़ेक फ़र्श"
        },
        "category": "Pavement Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -28.2,
            "yaw": -85.5,
            "hfov": 85
          }
        },
        "description": {
          "en": "The expansive northern terrace pavement laid in contrasting sandstone and marble mosaics.",
          "kn": "ಕೆಂಪು ಮರಳುಗಲ್ಲು ಮತ್ತು ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಹೆಣೆಯಲಾದ ಉತ್ತರ ವೇದಿಕೆಯ ವಿಸ್ತಾರವಾದ ನೆಲಹಾಸು.",
          "hi": "लाल बलुआ पत्थर और संगमरमर से निर्मित उत्तरी चबूतरे का विस्तृत फ़र्श।"
        },
        "historicalSignificance": {
          "en": "Served as a ceremonial promenade where the Mughal court enjoyed the evening breeze along the river.",
          "kn": "ಮೊಘಲ್ ರಾಜಮನೆತನದವರು ಸಂಜೆಯ ತಂಪಾದ ತಂಗಾಳಿಯನ್ನು ಆಸ್ವಾದಿಸುತ್ತಿದ್ದ ವಾಯುವಿಹಾರ ಮಾರ್ಗ.",
          "hi": "यह स्थल मुग़ल दरबारियों के लिए नदी के किनारे शाम की शीतल हवा का आनंद लेने का मुख्य स्थल था।"
        },
        "architecturalDetails": {
          "en": "Features interlocking octagons, squares, and eight-pointed stars crafted from red sandstone and white marble.",
          "kn": "ಅಷ್ಟಭುಜಾಕೃತಿಗಳು ಮತ್ತು ಎಂಟು ಬಿಂದುಗಳ ನಕ್ಷತ್ರಗಳ ಜ್ಯಾಮಿತೀಯ ಕಲ್ಲಿನ ಜೋಡಣೆಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "लाल बलुआ पत्थर और श्वेत संगमरमर से बने अष्टकोणीय और आठ कोनों वाले तारों का ज्यामितीय संगम।"
        },
        "audioNarrationTrackId": "hotspot_s5_pavement",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s5_pavement.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s5_pavement.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s5_pavement.mp3"
        },
        "transcripts": {
          "en": "The Chameli Farsh pavement features alternating octagonal and star mosaic patterns inlaid in red sandstone and white marble, resembling a woven royal carpet.",
          "kn": "ಚಮೇಲಿ ಫರ್ಶ್ ಕೆಂಪು ಮರಳುಗಲ್ಲು ಮತ್ತು ಬಿಳಿ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಅಷ್ಟಭುಜಾಕೃತಿಯ ತಾರಾ ವಿನ್ಯಾಸಗಳ ರತ್ನಗಂಬಳಿಯಂತೆ ಗೋಚರಿಸುತ್ತದೆ.",
          "hi": "चमेली फर्श पर लाल बलुआ पत्थर और सफ़ेद संगमरमर से तारे और अष्टकोण के ज्यामितीय पैटर्न बुने हुए कालीन की तरह उकेरे गए हैं।"
        }
      },
      {
        "id": "hotspot_s5_yamuna",
        "title": {
          "en": "Yamuna River Meander & Mehtab Bagh Vista",
          "kn": "ಯಮುನಾ ನದಿಯ ತಿರುವು ಮತ್ತು ಮೆಹ್ತಾಬ್ ಬಾಗ್ ನೋಟ",
          "hi": "यमुना नदी का घुमाव और मेहताब बाग़ का दृश्य"
        },
        "category": "Natural Topography",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2,
            "yaw": 4.4,
            "hfov": 85
          }
        },
        "description": {
          "en": "The panoramic view across the broad bend of the sacred Yamuna River.",
          "kn": "ಪವಿತ್ರ ಯಮುನಾ ನದಿಯ ವಿಶಾಲ ತಿರುವಿನ ಸುಂದರ ದೃಶ್ಯಾವಳಿ.",
          "hi": "पवित्र यमुना नदी के विस्तृत घुमाव का मनोहारी विहंगम दृश्य।"
        },
        "historicalSignificance": {
          "en": "Directly facing the site of Mehtab Bagh (Moonlight Garden), designed by Shah Jahan as a moonlit viewing terrace.",
          "kn": "ಶಾ ಜಹಾನ್ ಚಂದ್ರನ ಬೆಳಕಿನಲ್ಲಿ ತಾಜ್ ಮಹಲ್ ವೀಕ್ಷಿಸಲು ನಿರ್ಮಿಸಿದ ಮೆಹ್ತಾಬ್ ಬಾಗ್ ಉದ್ಯಾನವನದ ಎದುರುಗಡೆ ಇದೆ.",
          "hi": "सामने मेहताब बाग़ स्थित है, जिसे शाहजहाँ ने चांदनी रात में ताज महल निहारने के लिए बनवाया था।"
        },
        "architecturalDetails": {
          "en": "The river provided a natural defensive moat protecting the rear perimeter from unauthorized boat access.",
          "kn": "ನದಿಯು ನೈಸರ್ಗಿಕ ಕಂದಕದಂತೆ ಕಾರ್ಯನಿರ್ವಹಿಸಿ ಹಿಂಭಾಗದಿಂದ ಅನಧಿಕೃತ ಪ್ರವೇಶವನ್ನು ತಡೆಯುತ್ತಿತ್ತು.",
          "hi": "यमुना नदी ने मक़बरे के पीछे एक प्राकृतिक सुरक्षात्मक खाई का कार्य किया।"
        },
        "audioNarrationTrackId": "hotspot_s5_yamuna",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s5_yamuna.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s5_yamuna.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s5_yamuna.mp3"
        },
        "transcripts": {
          "en": "The Yamuna River flows along the northern perimeter. Directly across lies Mehtab Bagh, where Shah Jahan created a moonlight pleasure garden to admire the Taj Mahal's nocturnal reflection.",
          "kn": "ಉತ್ತರದ ಗಡಿಯಲ್ಲಿ ಹರಿಯುವ ಯಮುನಾ ನದಿಯ ಆಚೆಗೆ ಮೆಹ್ತಾಬ್ ಬಾಗ್ ಇದೆ. ಇಲ್ಲಿಂದ ಹುಣ್ಣಿಮೆಯ ಬೆಳಕಿನಲ್ಲಿ ತಾಜ್ ಮಹಲ್‌ನ ಸುಂದರ ನೋಟವನ್ನು ಆಸ್ವಾದಿಸಲಾಗುತ್ತಿತ್ತು.",
          "hi": "उत्तरी सीमा पर यमुना नदी बहती है। नदी के पार मेहताब बाग़ स्थित है, जहाँ से पूर्णिमा की रात में ताज महल का प्रतिबिंब देखा जाता था।"
        }
      },
      {
        "id": "hotspot_s5_crypt_jalis",
        "title": {
          "en": "Subterranean Burial Crypt Ventilation Jalis",
          "kn": "ನೆಲಮಾಳಿಗೆಯ ಸಮಾಧಿ ಕೋಣೆಯ ಜಾಲಂದರ ಕಿಟಕಿಗಳು",
          "hi": "भूमिगत मक़बरा वायु संचार जालियाँ"
        },
        "category": "Subterranean Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -2.6,
            "yaw": -140.3,
            "hfov": 85
          }
        },
        "description": {
          "en": "The perforated marble lattice windows illuminating the lower burial crypt.",
          "kn": "ಕೆಳಗಿನ ಸಮಾಧಿ ಕೋಣೆಗೆ ಬೆಳಕು ಮತ್ತು ಗಾಳಿಯನ್ನು ಒದಗಿಸುವ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಕಿಟಕಿಗಳು.",
          "hi": "नीचे स्थित वास्तविक समाधि कक्ष में वायु और प्रकाश पहुँचाने वाली संगमरमर की जालियाँ।"
        },
        "historicalSignificance": {
          "en": "Connects the upper public terrace with the quiet subterranean level where the actual graves of Mumtaz Mahal and Shah Jahan lie.",
          "kn": "ಮುಮ್ತಾಜ್ ಮಹಲ್ ಮತ್ತು ಶಾ ಜಹಾನ್ ಅವರ ನಿಜವಾದ ಸಮಾಧಿಗಳಿರುವ ನೆಲಮಾಳಿಗೆಯನ್ನು ಮೇಲಿನ ವೇದಿಕೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
          "hi": "ऊपरी चबूतरे को नीचे के उस शांत कक्ष से जोड़ती हैं जहाँ शाहजहाँ और मुमताज़ की वास्तविक क़ब्रें हैं।"
        },
        "architecturalDetails": {
          "en": "Carved from solid marble slabs with geometric grilles preventing intrusion while admitting ambient light.",
          "kn": "ಬಲವಾದ ಅಮೃತಶಿಲೆಯ ಫಲಕಗಳಿಂದ ಜ್ಯಾಮಿತೀಯ ವಿನ್ಯಾಸದಲ್ಲಿ ಕೆತ್ತಲ್ಪಟ್ಟಿವೆ.",
          "hi": "ठोस संगमरमर की शिलाओं से तराशी गई ज्यामितीय जालियाँ जो सुरक्षा और प्रकाश दोनों प्रदान करती हैं।"
        },
        "audioNarrationTrackId": "hotspot_s5_crypt_jalis",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s5_crypt_jalis.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s5_crypt_jalis.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s5_crypt_jalis.mp3"
        },
        "transcripts": {
          "en": "These subterranean ventilation screens provide gentle airflow and diffuse natural light to the lower crypt where Shah Jahan and Mumtaz Mahal are buried.",
          "kn": "ನೆಲಮಾಳಿಗೆಯ ಈ ಜಾಲಂದರ ಕಿಟಕಿಗಳು ಶಾ ಜಹಾನ್ ಮತ್ತು ಮುಮ್ತಾಜ್ ಮಹಲ್ ಅವರ ನಿಜವಾದ ಸಮಾಧಿಗಳಿರುವ ಕೆಳಮಟ್ಟದ ಕೋಣೆಗೆ ಗಾಳಿ ಮತ್ತು ಬೆಳಕನ್ನು ಒದಗಿಸುತ್ತವೆ.",
          "hi": "यह भूमिगत जालियाँ नीचे के वास्तविक समाधि कक्ष में वायु और हल्का प्रकाश पहुँचाने के लिए बनाई गई हैं जहाँ शाहजहाँ और मुमताज़ दफ़्न हैं।"
        }
      },
      {
        "id": "hotspot_s5_north_elevation",
        "title": {
          "en": "Northern Marble Plinth & Mausoleum Elevation",
          "kn": "ಉತ್ತರ ಅಮೃತಶಿಲೆಯ ವೇದಿಕೆ ಮತ್ತು ಸಮಾಧಿಯ ಎತ್ತರ",
          "hi": "उत्तरी संगमरमर चबूतरा और मक़बरे की ऊँचाई"
        },
        "category": "Architectural Monument",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 25.7,
            "yaw": -146.9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The towering north rear façade of the white marble mausoleum.",
          "kn": "ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಸಮಾಧಿಯ ಭವ್ಯ ಉತ್ತರ ಹಿಂಭಾಗದ ಮುಖಪುಟ.",
          "hi": "श्वेत संगमरमर के मक़बरे का भव्य उत्तरी पिछला भाग।"
        },
        "historicalSignificance": {
          "en": "Highlights the 360-degree perfection of the tomb, designed to look equally monumental from the river as from the garden.",
          "kn": "ಉದ್ಯಾನವನದಷ್ಟೇ ನದಿಯ ಕಡೆಯಿಂದಲೂ ಸಮಾಧಿಯು ಸಮಾನ ಭವ್ಯತೆಯನ್ನು ಪ್ರದರ್ಶಿಸುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
          "hi": "यह सिद्ध करता है कि मक़बरे को नदी और बाग़ दोनों ओर से समान रूप से भव्य दिखने के लिए रचा गया था।"
        },
        "architecturalDetails": {
          "en": "Rises from a 7-meter high marble plinth, repeating the 33-meter pishtaq arch and calligraphy bands seen on the front.",
          "kn": "7 ಮೀಟರ್ ಎತ್ತರದ ಅಮೃತಶಿಲೆಯ ವೇದಿಕೆಯ ಮೇಲೆ ನಿಂತಿದ್ದು, 33 ಮೀಟರ್ ಎತ್ತರದ ಪಿಸ್ತಾಕ್ ಕಮಾನನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ.",
          "hi": "सात मीटर ऊँचे संगमरमर के चबूतरे पर स्थित 33 मीटर ऊँचा मेहराब सामने के द्वार की ही अनुकृति है।"
        },
        "audioNarrationTrackId": "hotspot_s5_north_elevation",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s5_north_elevation.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s5_north_elevation.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s5_north_elevation.mp3"
        },
        "transcripts": {
          "en": "The north elevation of the mausoleum displays identical proportions and calligraphy as the south facade, maintaining perfect four-sided symmetry.",
          "kn": "ಸಮಾಧಿಯ ಉತ್ತರ ಭಾಗವು ದಕ್ಷಿಣ ಮುಂಭಾಗದಂತೆಯೇ ನಿಖರವಾದ ಅನುಪಾತ ಮತ್ತು ಶಾಸನಗಳನ್ನು ಹೊಂದಿದ್ದು, ನಾಲ್ಕೂ ಕಡೆಗಳಲ್ಲಿ ಪರಿಪೂರ್ಣ ಸಮ್ಮಿತಿಯನ್ನು ಕಾಯ್ದುಕೊಂಡಿದೆ.",
          "hi": "मक़बरे का उत्तरी भाग दक्षिणी हिस्से के समान अनुपात और सुलेख से सुसज्जित है, जो चारों ओर से परिपूर्ण सममिति बनाए रखता है।"
        }
      }
    ],
    "linkedSceneIds": []
  },
  {
    "id": "scene_1_roof_terrace",
    "sceneNumber": 3,
    "title": {
      "en": "Upper Roof Terrace & Dome Base",
      "kn": "ಮೇಲಿನ ಮೇಲ್ಛಾವಣಿಯ ಟೆರೇಸ್ ಮತ್ತು ಗುಮ್ಮಟದ ತಳಭಾಗ",
      "hi": "ऊपरी छत की छत और गुंबद का आधार"
    },
    "subtitle": {
      "en": "Rooftop Level – High Marble Drum and Chhatris",
      "kn": "ಮೇಲ್ಛಾವಣಿ ಮಟ್ಟ – ಎತ್ತರದ ಅಮೃತಶಿಲೆಯ ಡ್ರಮ್ ಮತ್ತು ಛತ್ರಿಗಳು",
      "hi": "छत स्तर – ऊँचा संगमरमर ड्रम और छतरियाँ"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_1_roof_terrace.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_1_roof_terrace.jpg",
      "initialOrientation": {
        "pitch": -5,
        "yaw": 45,
        "hfov": 95
      },
      "limits": {
        "minPitch": -38,
        "maxPitch": 38,
        "minFov": 50,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "scene_1_roof_terrace",
      "title": {
        "en": "Upper Roof Terrace & Dome Base",
        "kn": "ಮೇಲಿನ ಮೇಲ್ಛಾವಣಿಯ ಟೆರೇಸ್ ಮತ್ತು ಗುಮ್ಮಟದ ತಳಭಾಗ",
        "hi": "ऊपरी छत की छत और गुंबद का आधार"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_1_roof_terrace.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_1_roof_terrace.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_1_roof_terrace.mp3"
      },
      "transcripts": {
        "en": "You are now on the upper roof terrace of the Taj Mahal, directly beneath the colossal white marble dome. Built as an ingenious double dome, the outer bulbous shell rises 35 meters high, providing magnificent external proportions, while the inner dome maintains acoustic balance inside the chamber below. Surrounding the drum are four octagonal chhatris that crown the corners with royal dignity.",
        "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಮೇಲ್ಛಾವಣಿಯ ಟೆರೇಸ್‌ಗೆ ಸುಸ್ವಾಗತ. ನೀವು ಈಗ ಭವ್ಯವಾದ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಗುಮ್ಮಟದ ಪಕ್ಕದಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ. ಇದು ಎರಡು ಪದರಗಳ ಅದ್ಭುತ ವಿನ್ಯಾಸವನ್ನು ಹೊಂದಿದೆ. ಹೊರಗಿನ 35 ಮೀಟರ್ ಎತ್ತರದ ಗುಮ್ಮಟವು ಸ್ಮಾರಕಕ್ಕೆ ಭವ್ಯತೆಯನ್ನು ನೀಡಿದರೆ, ಒಳಗಿನ ಗುಮ್ಮಟವು ಒಳಾಂಗಣದಲ್ಲಿ ಶಬ್ದ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡುತ್ತದೆ. ಗುಮ್ಮಟದ ಸುತ್ತ ನಾಲ್ಕು ಸುಂದರ ಅಷ್ಟಭುಜಾಕೃತಿಯ ಛತ್ರಿಗಳಿವೆ.",
        "hi": "ताज महल की ऊपरी छत पर आपका स्वागत है। आप इस समय विशाल श्वेत संगमरमर के गुंबद के आधार पर खड़े हैं। यह गुंबद दोहरी परत की वास्तुकला से निर्मित है। बाहरी गुंबद 35 मीटर ऊँचा है जो बाहर से भव्य स्वरूप प्रदान करता है, जबकि भीतरी गुंबद नीचे के मुख्य कक्ष में ध्वनि का संतुलन बनाए रखता है। इसके चारों ओर चार अष्टकोणीय छतरियाँ सुशोभित हैं।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s1_main_dome",
        "title": {
          "en": "Great Onion Dome (Amrud) Double-Shell Structure",
          "kn": "ಬೃಹತ್ ಈರುಳ್ಳಿ ಆಕಾರದ (ಅಮ್ರೂದ್) ಡಬಲ್-ಶೆಲ್ ಗುಮ್ಮಟ",
          "hi": "विशाल प्याज सदृश (अमरूद) दोहरी परत का गुंबद"
        },
        "category": "Structural Engineering",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 37.1,
            "yaw": 105.5,
            "hfov": 85
          }
        },
        "description": {
          "en": "The iconic bulbous marble dome rising 35 meters above the roof drum.",
          "kn": "ಛಾವಣಿಯ ಡ್ರಮ್‌ನಿಂದ 35 ಮೀಟರ್ ಎತ್ತರಕ್ಕೆ ಏರಿರುವ ಸಾಂಪ್ರದಾಯಿಕ ಅಮೃತಶಿಲೆಯ ಗುಮ್ಮಟ.",
          "hi": "छत के बेलनाकार ड्रम से 35 मीटर ऊँचा उठा विख्यात संगमरमर का गुंबद।"
        },
        "historicalSignificance": {
          "en": "Symbolizes the heavenly throne of God (Arsh) and represents the absolute zenith of Mughal engineering.",
          "kn": "ದೈವಿಕ ಸಿಂಹಾಸನವನ್ನು ಸಂಕೇತಿಸುವ ಇದು ಮೊಘಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನ ಪರಮೋಚ್ಚ ಸಾಧನೆಯಾಗಿದೆ.",
          "hi": "ईश्वर के दिव्य सिंहासन का प्रतीक और मुग़ल वास्तुकला की चरम उपलब्धि।"
        },
        "architecturalDetails": {
          "en": "Constructed as a double-shell masonry dome; the inner shell is 24 meters high, while the outer shell reaches 35 meters.",
          "kn": "ಎರಡು ಪದರಗಳ ಗುಮ್ಮಟವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ; ಒಳಗಿನ ಪದರ 24 ಮೀಟರ್ ಮತ್ತು ಹೊರಗಿನ ಪದರ 35 ಮೀಟರ್ ಎತ್ತರವಿದೆ.",
          "hi": "दोहरी परत के रूप में निर्मित; भीतरी गुंबद 24 मीटर और बाहरी गुंबद 35 मीटर ऊँचा है।"
        },
        "audioNarrationTrackId": "hotspot_s1_main_dome",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s1_main_dome.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s1_main_dome.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s1_main_dome.mp3"
        },
        "transcripts": {
          "en": "The main bulbous onion dome rises thirty-five meters above the roof. Engineered with a double shell, the outer marble dome achieves monumental grandeur while the inner ceiling maintains acoustic harmony below.",
          "kn": "ಮುಖ್ಯ ಈರುಳ್ಳಿ ಆಕಾರದ ಗುಮ್ಮಟವು ಮೇಲ್ಛಾವಣಿಯಿಂದ ಮೂವತ್ತೈದು ಮೀಟರ್ ಎತ್ತರವಿದೆ. ಇದರ ಎರಡು ಪದರಗಳ ವಿನ್ಯಾಸವು ಹೊರಗೆ ಭವ್ಯತೆಯನ್ನು ಮತ್ತು ಒಳಗೆ ಶ್ರವಣ ಸಾಮರ್ಥ್ಯವನ್ನು ನೀಡುತ್ತದೆ.",
          "hi": "मुख्य प्याज के आकार का गुंबद छत से पैंतीस मीटर ऊँचा है। इसकी दोहरी परत की तकनीक बाहर से भव्यता और भीतर से उत्कृष्ट ध्वनि संतुलन प्रदान करती है।"
        }
      },
      {
        "id": "hotspot_s1_drum_base",
        "title": {
          "en": "High Marble Drum & Lotus Leaf Moulding",
          "kn": "ಎತ್ತರದ ಅಮೃತಶಿಲೆಯ ಡ್ರಮ್ ಮತ್ತು ಕಮಲದ ದಳಗಳ ಕೆತ್ತನೆ",
          "hi": "ऊँचा संगमरमर ड्रम और कमल दल नक्काशी"
        },
        "category": "Architectural Transition",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4.9,
            "yaw": 105.5,
            "hfov": 85
          }
        },
        "description": {
          "en": "The cylindrical marble drum elevating the dome high above the roofline.",
          "kn": "ಗುಮ್ಮಟವನ್ನು ಮೇಲ್ಛಾವಣಿಯ ಮೇಲಕ್ಕೆ ಎತ್ತಿ ಹಿಡಿದಿರುವ ಸಿಲಿಂಡರಾಕಾರದ ಅಮೃತಶಿಲೆಯ ಡ್ರಮ್.",
          "hi": "गुंबद को छत से ऊँचाई प्रदान करने वाला बेलनाकार संगमरमर का ड्रम।"
        },
        "historicalSignificance": {
          "en": "Creates the optical illusion that the bulbous dome is floating weightlessly above the monument.",
          "kn": "ಗುಮ್ಮಟವು ತೂಕವಿಲ್ಲದೆ ಆಕಾಶದಲ್ಲಿ ತೇಲುತ್ತಿರುವಂತೆ ಭಾಸವಾಗುವ ಆಪ್ಟಿಕಲ್ ಭ್ರಮೆಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.",
          "hi": "यह भ्रम पैदा करता है कि विशाल गुंबद हवा में भारहीन होकर तैर रहा है।"
        },
        "architecturalDetails": {
          "en": "Rises 7 meters high, girded by a decorative band of carved lotus petals in bas-relief.",
          "kn": "7 ಮೀಟರ್ ಎತ್ತರವಿದ್ದು, ಕಮಲದ ದಳಗಳ ಸುಂದರ ಕೆತ್ತನೆಯ ಅಲಂಕಾರಿಕ ಪಟ್ಟಿಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "सात मीटर ऊँचा यह ड्रम उभरी हुई कमल की पंखुड़ियों की सुंदर पट्टी से घिरा हुआ है।"
        },
        "audioNarrationTrackId": "hotspot_s1_drum_base",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s1_drum_base.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s1_drum_base.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s1_drum_base.mp3"
        },
        "transcripts": {
          "en": "The cylindrical marble drum elevates the dome high above the roofline. Its base is encircled by a sculpted relief band of stylized lotus petals.",
          "kn": "ಸಿಲಿಂಡರಾಕಾರದ ಅಮೃತಶಿಲೆಯ ಡ್ರಮ್ ಗುಮ್ಮಟವನ್ನು ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದಿಟ್ಟುಕೊಂಡಿದೆ. ಇದರ ಕೆಳಭಾಗದಲ್ಲಿ ಕಮಲದ ದಳಗಳ ಕೆತ್ತನೆಯ ಸುಂದರ ಪಟ್ಟಿ ಇದೆ.",
          "hi": "बेलनाकार संगमरमर का ड्रम गुंबद को ऊँचाई देता है। इसके आधार पर नक्काशीदार कमल की पंखुड़ियों की सुंदर पट्टी उकेरी गई है।"
        }
      },
      {
        "id": "hotspot_s1_corner_chhatri",
        "title": {
          "en": "Octagonal Corner Chhatri (Kiosk Pavilion)",
          "kn": "ಅಷ್ಟಭುಜಾಕೃತಿಯ ಮೂಲೆ ಛತ್ರಿ (ಮಂಟಪ)",
          "hi": "अष्टकोणीय कोणीय छतरी (मंडप)"
        },
        "category": "Pavilion Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6.8,
            "yaw": 61.1,
            "hfov": 85
          }
        },
        "description": {
          "en": "One of four octagonal domed pavilions surrounding the central drum.",
          "kn": "ಕೇಂದ್ರ ಡ್ರಮ್ ಅನ್ನು ಸುತ್ತುವರೆದಿರುವ ನಾಲ್ಕು ಅಷ್ಟಭುಜಾಕೃತಿಯ ಗುಮ್ಮಟ ಮಂಟಪಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
          "hi": "मुख्य ड्रम के चारों ओर स्थित चार अष्टकोणीय छतरियों में से एक।"
        },
        "historicalSignificance": {
          "en": "Derived from Rajput architecture, adapted to provide a visual stepped hierarchy leading to the dome.",
          "kn": "ರಜಪೂತ ವಾಸ್ತುಶಿಲ್ಪದಿಂದ ಅಳವಡಿಸಿಕೊಳ್ಳಲಾಗಿದ್ದು, ಗುಮ್ಮಟಕ್ಕೆ ಹಂತ-ಹಂತದ ಭವ್ಯತೆಯನ್ನು ನೀಡುತ್ತದೆ.",
          "hi": "राजपूत वास्तुकला से प्रेरित होकर गुंबद को क्रमिक सौंदर्य प्रदान करने के लिए शामिल की गई।"
        },
        "architecturalDetails": {
          "en": "Supported by eight slender marble pillars supporting an open vaulted dome with copper kalash finials.",
          "kn": "ಎಂಟು ತೆಳುವಾದ ಅಮೃತಶಿಲೆಯ ಕಂಬಗಳು ಮತ್ತು ತಾಮ್ರದ ಕಲಶವನ್ನು ಹೊಂದಿರುವ ತೆರೆದ ಗುಮ್ಮಟ.",
          "hi": "आठ पतले संगमरमर स्तंभों पर टिकी यह खुली छतरी तांबे के कलश से सुशोभित है।"
        },
        "audioNarrationTrackId": "hotspot_s1_corner_chhatri",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s1_corner_chhatri.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s1_corner_chhatri.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s1_corner_chhatri.mp3"
        },
        "transcripts": {
          "en": "Four octagonal domed chhatris frame the main dome, an indigenous Indian architectural feature adapted seamlessly into Mughal imperial design.",
          "kn": "ಮುಖ್ಯ ಗುಮ್ಮಟದ ಸುತ್ತಲಿನ ನಾಲ್ಕು ಅಷ್ಟಭುಜಾಕೃತಿಯ ಛತ್ರಿಗಳು ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ವಾಸ್ತುಶಿಲ್ಪದ ಅಂಶವಾಗಿದ್ದು, ಮೊಘಲ್ ವಿನ್ಯಾಸಕ್ಕೆ ಅದ್ಭುತ ಸೊಬಗನ್ನು ನೀಡುತ್ತವೆ.",
          "hi": "मुख्य गुंबद के चारों ओर चार अष्टकोणीय छतरियाँ हैं, जो भारतीय पारंपरिक वास्तुकला का मुग़ल शैली में सुंदर समावेश दर्शाती हैं।"
        }
      },
      {
        "id": "hotspot_s1_parapet",
        "title": {
          "en": "Marble Rooftop Parapet & Kangura Battlements",
          "kn": "ಅಮೃತಶಿಲೆಯ ಮೇಲ್ಛಾವಣಿಯ ಕೈಪಿಡಿಗೋಡೆ ಮತ್ತು ಕಂಗುರಾ",
          "hi": "संगमरमर छत मुंडेर और कंगूरेदार प्राचीर"
        },
        "category": "Perimeter Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -9.3,
            "yaw": -165.8,
            "hfov": 85
          }
        },
        "description": {
          "en": "The continuous pierced marble balustrade surrounding the rooftop terrace.",
          "kn": "ಮೇಲ್ಛಾವಣಿಯ ಟೆರೇಸ್ ಅನ್ನು ಸುತ್ತುವರೆದಿರುವ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ರಕ್ಷಣಾ ಗೋಡೆ.",
          "hi": "छत को चारों ओर से घेरने वाली बारीक नक्काशीदार संगमरमर की मुंडेर।"
        },
        "historicalSignificance": {
          "en": "Adapted from medieval Islamic fortresses, converted here into refined lace-like ornamentation.",
          "kn": "ಮಧ್ಯಕಾಲೀನ ಕೋಟೆಗಳ ವಿನ್ಯಾಸದಿಂದ ಪ್ರೇರಿತವಾಗಿದ್ದು, ನವಿರಾದ ಕಲಾತ್ಮಕ ಅಲಂಕಾರವಾಗಿ ಮಾರ್ಪಟ್ಟಿದೆ.",
          "hi": "किलेबंदी की कंगूरेदार शैली को यहाँ परिष्कृत कलात्मक रूप में प्रस्तुत किया गया है।"
        },
        "architecturalDetails": {
          "en": "Features crenellated kangura crests and pierced floral motifs carved from white marble.",
          "kn": "ಕಂಗುರಾ ವಿನ್ಯಾಸದ ಅಂಚುಗಳು ಮತ್ತು ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಹೂವಿನ ಜಾಲಿಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "सफ़ेद संगमरमर से तराशे गए कंगूरे और पुष्प जालियों से सुसज्जित।"
        },
        "audioNarrationTrackId": "hotspot_s1_parapet",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s1_parapet.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s1_parapet.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s1_parapet.mp3"
        },
        "transcripts": {
          "en": "The roof edge is crowned with a continuous marble kangura parapet, combining defensive fortress motifs with refined ornamental carving.",
          "kn": "ಮೇಲ್ಛಾವಣಿಯ ಅಂಚಿನಲ್ಲಿ ಅಮೃತಶಿಲೆಯ ಕಂಗುರಾ ಕೈಪಿಡಿಗೋಡೆಯಿದೆ, ಇದು ರಕ್ಷಣಾ ಕೋಟೆಯ ವಿನ್ಯಾಸವನ್ನು ಸುಂದರ ಕೆತ್ತನೆಯೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.",
          "hi": "छत के किनारों पर संगमरमर की कंगूरेदार रेलिंग है, जो सुरक्षात्मक किलेबंदी के स्वरूप को कलात्मक सुंदरता देती है।"
        }
      }
    ],
    "linkedSceneIds": []
  },
  {
    "id": "scene_4_mosque_interior",
    "sceneNumber": 4,
    "title": {
      "en": "Taj Mahal Mosque (Kau Ban Masjid) Interior",
      "kn": "ತಾಜ್ ಮಹಲ್ ಮಸೀದಿಯ ಒಳಾಂಗಣ (ಕೌ ಬನ್ ಮಸೀದಿ)",
      "hi": "ताज महल मस्जिद का आंतरिक भाग (कौ बन मस्जिद)"
    },
    "subtitle": {
      "en": "Interior – West Congregation Hall and Mihrab",
      "kn": "ಒಳಾಂಗಣ – ಪಶ್ಚಿಮ ಪ್ರಾರ್ಥನಾ ಸಭಾಂಗಣ ಮತ್ತು ಮಿಹ್ರಾಬ್",
      "hi": "आंतरिक भाग – पश्चिमी प्रार्थना कक्ष और मेहराब"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_4_mosque_interior.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_4_mosque_interior.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 10,
        "hfov": 92
      },
      "limits": {
        "minPitch": -36,
        "maxPitch": 38,
        "minFov": 45,
        "maxFov": 115
      }
    },
    "audioNarration": {
      "trackId": "scene_4_mosque_interior",
      "title": {
        "en": "Taj Mahal Mosque (Kau Ban Masjid) Interior",
        "kn": "ತಾಜ್ ಮಹಲ್ ಮಸೀದಿಯ ಒಳಾಂಗಣ (ಕೌ ಬನ್ ಮಸೀದಿ)",
        "hi": "ताज महल मस्जिद का आंतरिक भाग (कौ बन मस्जिद)"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_4_mosque_interior.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_4_mosque_interior.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_4_mosque_interior.mp3"
      },
      "transcripts": {
        "en": "Welcome inside the western mosque of the Taj Mahal complex, crafted from rich red sandstone. This active sanctuary is oriented toward the holy Kaaba in Mecca. Notice the intricately carved white marble mihrab indicating the direction of prayer, and the marble-inlaid musalla floor mats designed for individual worshippers. Through the eastern arches, the white marble Taj Mahal glows brightly in the sunlight.",
        "kn": "ತಾಜ್ ಮಹಲ್ ಸಂಕೀರ್ಣದ ಪಶ್ಚಿಮ ಮಸೀದಿಯ ಒಳಾಂಗಣಕ್ಕೆ ಸುಸ್ವಾಗತ. ಕೆಂಪು ಮರಳುಗಲ್ಲಿನಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಪ್ರಾರ್ಥನಾ ಮಂದಿರವು ಮೆಕ್ಕಾದ ಪವಿತ್ರ ಕಾಬಾದ ಕಡೆಗೆ ಮುಖ ಮಾಡಿದೆ. ಇಲ್ಲಿರುವ ಸುಂದರ ಅಮೃತಶಿಲೆಯ ಮಿಹ್ರಾಬ್ ಪ್ರಾರ್ಥನೆಯ ದಿಕ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ. ನೆಲದ ಮೇಲೆ 569 ಅಮೃತಶಿಲೆಯ ಪ್ರಾರ್ಥನಾ ಚಾಪೆಗಳ ಕೆತ್ತನೆಯಿದೆ. ಪೂರ್ವದ ಕಮಾನುಗಳ ಮೂಲಕ ನೋಡಿದಾಗ ಬಿಳಿ ತಾಜ್ ಮಹಲ್ ಸುಂದರವಾಗಿ ಕಂಗೊಳಿಸುತ್ತದೆ.",
        "hi": "ताज महल मस्जिद के आंतरिक भाग में आपका स्वागत है। लाल बलुआ पत्थर से बना यह प्रार्थना स्थल मक्का की दिशा यानी क़िबला की ओर बना है। सामने सुंदर संगमरमर का मेहराब प्रार्थना की दिशा दर्शाता है, और फ़र्श पर नमाज़ियों के लिए संगमरमर की मुसल्ला पट्टियाँ उकेरी गई हैं। पूर्वी मेहराबदार दरवाज़ों से बाहर देखने पर श्वेत संगमरमर का ताज महल अद्भुत दिखाई देता है।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s4_mihrab",
        "title": {
          "en": "Central Marble-Framed Mihrab (Prayer Niche)",
          "kn": "ಕೇಂದ್ರ ಅಮೃತಶಿಲೆಯ ಮಿಹ್ರಾಬ್ (ಪ್ರಾರ್ಥನಾ ಗೂಡು)",
          "hi": "केंद्रीय संगमरमर मेहराब (प्रार्थना आला)"
        },
        "category": "Sacred Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 4.9,
            "yaw": -147.9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The semicircular prayer niche embedded in the western qibla wall.",
          "kn": "ಪಶ್ಚಿಮ ಗೋಡೆಯಲ್ಲಿ ಅಳವಡಿಸಲಾಗಿರುವ ಅರೆವೃತ್ತಾಕಾರದ ಪ್ರಾರ್ಥನಾ ಗೂಡು.",
          "hi": "पश्चिमी क़िबला दीवार में बना अर्धवृत्ताकार प्रार्थना आला।"
        },
        "historicalSignificance": {
          "en": "Indicates the precise geographic direction of the Holy Kaaba in Mecca for congregational prayers.",
          "kn": "ಸಾಮೂಹಿಕ ಪ್ರಾರ್ಥನೆಗಾಗಿ ಮೆಕ್ಕಾದ ಪವಿತ್ರ ಕಾಬಾದ ನಿಖರ ದಿಕ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
          "hi": "सामूहिक प्रार्थना के लिए मक्का की पवित्र काबा की दिशा दर्शाता है।"
        },
        "architecturalDetails": {
          "en": "Framed in white Makrana marble against red sandstone, inscribed with Surah Al-Ikhlas.",
          "kn": "ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಬಿಳಿ ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಿಂದ ಚೌಕಟ್ಟು ಹೊಂದಿದ್ದು, ಕುರಾನ್ ಶಾಸನಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "लाल पत्थर की दीवार पर सफ़ेद मकराना संगमरमर से तराशा गया और सूरह अल-इख़्लास से सुसज्जित।"
        },
        "audioNarrationTrackId": "hotspot_s4_mihrab",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s4_mihrab.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s4_mihrab.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s4_mihrab.mp3"
        },
        "transcripts": {
          "en": "The central mihrab is an arched prayer niche clad in white marble, sculpted with Quranic verses and pointing directly toward Mecca.",
          "kn": "ಕೇಂದ್ರ ಮಿಹ್ರಾಬ್ ಬಿಳಿ ಅಮೃತಶಿಲೆಯಿಂದ ಅಲಂಕರಿಸಲ್ಪಟ್ಟ ಪ್ರಾರ್ಥನಾ ಗೂಡಾಗಿದ್ದು, ಕುರಾನ್ ಶಾಸನಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಮೆಕ್ಕಾದ ದಿಕ್ಕನ್ನು ತೋರಿಸುತ್ತದೆ.",
          "hi": "केंद्रीय मेहराब सफ़ेद संगमरमर से सजा प्रार्थना आला है, जिस पर पवित्र आयतें उकेरी गई हैं और यह मक्का की दिशा दर्शाता है।"
        }
      },
      {
        "id": "hotspot_s4_minbar",
        "title": {
          "en": "Three-Step Marble Minbar (Preacher's Pulpit)",
          "kn": "ಮೂರು ಮೆಟ್ಟಿಲುಗಳ ಅಮೃತಶಿಲೆಯ ಮಿನ್ಬರ್ (ಪ್ರವಚನ ಪೀಠ)",
          "hi": "तीन सीढ़ियों वाला संगमरमर मिम्बर (प्रवचन मंच)"
        },
        "category": "Liturgical Furnishing",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -9.2,
            "yaw": -123.3,
            "hfov": 85
          }
        },
        "description": {
          "en": "The stepped marble pulpit adjacent to the central mihrab.",
          "kn": "ಮಿಹ್ರಾಬ್‌ನ ಪಕ್ಕದಲ್ಲಿರುವ ಮೆಟ್ಟಿಲುಗಳ ಅಮೃತಶಿಲೆಯ ಪ್ರವಚನ ಪೀಠ.",
          "hi": "केंद्रीय मेहराब के पास स्थित सीढ़ीदार संगमरमर का उपदेश मंच।"
        },
        "historicalSignificance": {
          "en": "The elevated platform from which the royal Imam delivered the Friday khutbah sermons.",
          "kn": "ಇಮಾಮರು ಶುಕ್ರವಾರದ ಧಾರ್ಮಿಕ ಪ್ರವಚನಗಳನ್ನು ನೀಡುತ್ತಿದ್ದ ಎತ್ತರದ ವೇದಿಕೆ.",
          "hi": "यहाँ से शाही इमाम जुमे के दिन नमाज़ियों को ख़ुत्बा सुनाते थे।"
        },
        "architecturalDetails": {
          "en": "Sculpted from a single block of white marble with three ascending steps and floral relief panels.",
          "kn": "ಮೂರು ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹೊಂದಿರುವ ಏಕಶಿಲೆಯ ಅಮೃತಶಿಲೆಯಿಂದ ಕೆತ್ತಲ್ಪಟ್ಟಿದೆ.",
          "hi": "सफ़ेद संगमरमर के एकल खंड से तराशा गया, जिसमें तीन सीढ़ियाँ और नक्काशीदार पैनल हैं।"
        },
        "audioNarrationTrackId": "hotspot_s4_minbar",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s4_minbar.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s4_minbar.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s4_minbar.mp3"
        },
        "transcripts": {
          "en": "The marble minbar features three steps from which the Imam delivered the Friday khutbah sermons, elevated slightly above the congregation.",
          "kn": "ಮೂರು ಮೆಟ್ಟಿಲುಗಳ ಅಮೃತಶಿಲೆಯ ಮಿನ್ಬರ್ ಪೀಠದಿಂದ ಇಮಾಮರು ಶುಕ್ರವಾರದ ಧಾರ್ಮಿಕ ಪ್ರವಚನಗಳನ್ನು ನೀಡುತ್ತಿದ್ದರು.",
          "hi": "तीन सीढ़ियों वाला संगमरमर का मिम्बर वह मंच है जहाँ से इमाम जुमे के दिन नमाज़ियों को ख़ुत्बा या उपदेश देते थे।"
        }
      },
      {
        "id": "hotspot_s4_vaulting",
        "title": {
          "en": "Cusped Red Sandstone Ribbed Arches & Domes",
          "kn": "ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಕಮಾನುಗಳು ಮತ್ತು ಗುಮ್ಮಟಗಳು",
          "hi": "लाल बलुआ पत्थर के नक्काशीदार मेहराब और गुंबद"
        },
        "category": "Vaulting Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 47.4,
            "yaw": 37.9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The monumental transverse arches dividing the prayer hall into three bays.",
          "kn": "ಪ್ರಾರ್ಥನಾ ಸಭಾಂಗಣವನ್ನು ಮೂರು ಭಾಗಗಳಾಗಿ ವಿಂಗಡಿಸುವ ಭವ್ಯ ಕಮಾನುಗಳು.",
          "hi": "प्रार्थना कक्ष को तीन हिस्सों में विभाजित करने वाले विशाल मेहराब।"
        },
        "historicalSignificance": {
          "en": "Exemplifies Mughal interior structural engineering, supporting three heavy domes without internal pillars.",
          "kn": "ಆಂತರಿಕ ಕಂಬಗಳಿಲ್ಲದೆ ಮೂರು ಭಾರವಾದ ಗುಮ್ಮಟಗಳನ್ನು ಬೆಂಬಲಿಸುವ ಮೊಘಲ್ ತಂತ್ರಜ್ಞಾನ.",
          "hi": "बिना किसी आंतरिक खंभे के तीन भारी गुंबदों को सँभालने की मुग़ल वास्तुकला का प्रमाण।"
        },
        "architecturalDetails": {
          "en": "Carved from red Sikri sandstone with multi-cusped profiles and white lime plaster net tracery.",
          "kn": "ಕೆಂಪು ಸಿಕ್ರಿ ಮರಳುಗಲ್ಲಿನಿಂದ ನಿರ್ಮಿತವಾಗಿದ್ದು, ಬಿಳಿ ಸುಣ್ಣದ ಗಾರೆಯ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "लाल सीकरी बलुआ पत्थर और सफ़ेद चूने के प्लास्टर के बारीक जाल से निर्मित।"
        },
        "audioNarrationTrackId": "hotspot_s4_vaulting",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s4_vaulting.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s4_vaulting.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s4_vaulting.mp3"
        },
        "transcripts": {
          "en": "The mosque ceiling is supported by deep transverse arches and rib-vaulted shallow domes executed in red sandstone with intricate lime plaster tracery.",
          "kn": "ಮಸೀದಿಯ ಮೇಲ್ಛಾವಣಿಯು ಆಳವಾದ ಕಮಾನುಗಳು ಮತ್ತು ಆಳವಿಲ್ಲದ ಗುಮ್ಮಟಗಳಿಂದ ಕೂಡಿದ್ದು, ಕೆಂಪು ಮರಳುಗಲ್ಲು ಮತ್ತು ಸುಣ್ಣದ ಗಾರೆಯ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "मस्जिद की छत लाल बलुआ पत्थर के गहरे मेहराबों और सुंदर चूने के प्लास्टर के जाल से सुसज्जित है।"
        }
      },
      {
        "id": "hotspot_s4_mats",
        "title": {
          "en": "569 Inlaid Marble Musalla Prayer Carpets",
          "kn": "569 ಅಮೃತಶಿಲೆಯ ಮುಸಲ್ಲಾ ಪ್ರಾರ್ಥನಾ ಹಾಸುಗಳು",
          "hi": "569 संगमरमर मुसल्ला नमाज़ पट्टियाँ"
        },
        "category": "Liturgical Pavement",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -37.6,
            "yaw": 37.9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The geometric floor delineating individual prayer spaces.",
          "kn": "ವೈಯಕ್ತಿಕ ಪ್ರಾರ್ಥನಾ ಸ್ಥಳಗಳನ್ನು ಗುರುತಿಸುವ ಜ್ಯಾಮಿತೀಯ ನೆಲಹಾಸು.",
          "hi": "व्यक्तिगत नमाज़ियों के लिए आरक्षित ज्यामितीय फ़र्श।"
        },
        "historicalSignificance": {
          "en": "Commissioned by Shah Jahan to ensure orderly congregational rows during imperial Friday prayers.",
          "kn": "ಶುಕ್ರವಾರದ ಪ್ರಾರ್ಥನೆಯ ಸಮಯದಲ್ಲಿ ಶಿಸ್ತುಬದ್ಧ ಸಾಲುಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಶಾ ಜಹಾನ್ ಇದನ್ನು ನಿರ್ಮಿಸಿದರು.",
          "hi": "जुमे की नमाज़ के दौरान पंक्तियों में अनुशासन बनाए रखने के लिए शाहजहाँ ने इसे बनवाया।"
        },
        "architecturalDetails": {
          "en": "Composed of black and white marble inlay forming 569 individual musalla borders.",
          "kn": "ಕಪ್ಪು ಮತ್ತು ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಜೋಡಣೆಯಿಂದ 569 ಪ್ರತ್ಯೇಕ ಪ್ರಾರ್ಥನಾ ಚಾಪೆಗಳ ಅಂಚನ್ನು ಹೊಂದಿದೆ.",
          "hi": "काले और सफ़ेद संगमरमर की पच्चीकारी से 569 मुसल्ला बॉर्डर उकेरे गए हैं।"
        },
        "audioNarrationTrackId": "hotspot_s4_mats",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s4_mats.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s4_mats.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s4_mats.mp3"
        },
        "transcripts": {
          "en": "The floor is inlaid with 569 black and white marble musalla outlines, defining individual prayer carpets oriented toward the mihrab.",
          "kn": "ನೆಲದ ಮೇಲೆ ಕಪ್ಪು ಮತ್ತು ಬಿಳಿ ಅಮೃತಶಿಲೆಯಲ್ಲಿ 569 ವೈಯಕ್ತಿಕ ಮುಸಲ್ಲಾ ಪ್ರಾರ್ಥನಾ ಚಾಪೆಗಳ ರೂಪರೇಖೆಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "फ़र्श पर काले और सफ़ेद संगमरमर से 569 नमाज़ियों के लिए अलग-अलग मुसल्ला यानी प्रार्थना कालीन की रूपरेखा उकेरी गई है।"
        }
      },
      {
        "id": "hotspot_s4_portals",
        "title": {
          "en": "Eastern Arched Portals Framing the White Taj Mahal",
          "kn": "ಬಿಳಿ ತಾಜ್ ಮಹಲ್ ಅನ್ನು ಫ್ರೇಮ್ ಮಾಡುವ ಪೂರ್ವದ ಕಮಾನು ಬಾಗಿಲುಗಳು",
          "hi": "श्वेत ताज महल को चित्रित करते पूर्वी मेहराबदार द्वार"
        },
        "category": "Architectural Framing",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 6.8,
            "yaw": 37.9,
            "hfov": 85
          }
        },
        "description": {
          "en": "The triple-arched openings connecting the mosque hall with the terrace.",
          "kn": "ಮಸೀದಿಯನ್ನು ಹೊರಗಿನ ವೇದಿಕೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ಮೂರು ಕಮಾನು ಬಾಗಿಲುಗಳು.",
          "hi": "मस्जिद को बाहर के चबूतरे से जोड़ने वाले तीन विशाल मेहराबदार द्वार।"
        },
        "historicalSignificance": {
          "en": "Designed to provide worshippers an awe-inspiring framed glimpse of the tomb upon completing prayers.",
          "kn": "ಪ್ರಾರ್ಥನೆ ಮುಗಿಸಿದ ನಂತರ ಭಕ್ತರಿಗೆ ಬಿಳಿ ತಾಜ್ ಮಹಲ್‌ನ ಅದ್ಭುತ ನೋಟವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
          "hi": "नमाज़ के उपरांत श्रद्धालुओं को सामने स्थित श्वेत ताज महल का विहंगम दृश्य दिखाने के लिए रचित।"
        },
        "architecturalDetails": {
          "en": "Recessed arches framed by molded stone colonnettes and floral spandrels.",
          "kn": "ಮರಳುಗಲ್ಲಿನ ಕಂಬಗಳು ಮತ್ತು ಹೂವಿನ ಕೆತ್ತನೆಯಿಂದ ಅಲಂಕರಿಸಲ್ಪಟ್ಟ ಕಮಾನುಗಳು.",
          "hi": "नक्काशीदार पत्थर के स्तंभों और फूलों के मेहराबों से सुसज्जित।"
        },
        "audioNarrationTrackId": "hotspot_s4_portals",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s4_portals.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s4_portals.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s4_portals.mp3"
        },
        "transcripts": {
          "en": "Three monumental arched portals open eastward, framing breathtaking views of the illuminated white marble Taj Mahal across the red sandstone terrace.",
          "kn": "ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿರುವ ಮೂರು ದೊಡ್ಡ ಕಮಾನು ಬಾಗಿಲುಗಳು ಕೆಂಪು ವೇದಿಕೆಯ ಆಚೆಗೆ ಬಿಳಿ ತಾಜ್ ಮಹಲ್‌ನ ಮೋಡಿಮಾಡುವ ನೋಟವನ್ನು ಕಣ್ಣೆದುರಿಗೆ ತರುತ್ತವೆ.",
          "hi": "पूरब की ओर खुलते तीन विशाल मेहराबदार द्वार सामने लाल चबूतरे के पार चमकते हुए श्वेत ताज महल का विहंगम दृश्य प्रस्तुत करते हैं।"
        }
      }
    ],
    "linkedSceneIds": []
  },
  {
    "id": "scene_2_outer_ambulatory",
    "sceneNumber": 5,
    "title": {
      "en": "Central Chamber – Outer Ambulatory Corridor",
      "kn": "ಕೇಂದ್ರ ಕೋಣೆ – ಹೊರಗಿನ ಪ್ರದಕ್ಷಿಣಾ ಪಥ",
      "hi": "केंद्रीय कक्ष – बाहरी प्रदक्षिणा गलियारा"
    },
    "subtitle": {
      "en": "Interior – Octagonal Circumambulatory Hallway",
      "kn": "ಒಳಾಂಗಣ – ಅಷ್ಟಭುಜಾಕೃತಿಯ ಪ್ರದಕ್ಷಿಣಾ ಕಾರಿಡಾರ್",
      "hi": "आंतरिक भाग – अष्टकोणीय परिक्रमा गलियारा"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_2_central_chamber_outer.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_2_outer_ambulatory.jpg",
      "initialOrientation": {
        "pitch": 0,
        "yaw": 0,
        "hfov": 92
      },
      "limits": {
        "minPitch": -48,
        "maxPitch": 48,
        "minFov": 45,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "scene_2_outer_ambulatory",
      "title": {
        "en": "Central Chamber – Outer Ambulatory Corridor",
        "kn": "ಕೇಂದ್ರ ಕೋಣೆ – ಹೊರಗಿನ ಪ್ರದಕ್ಷಿಣಾ ಪಥ",
        "hi": "केंद्रीय कक्ष – बाहरी प्रदक्षिणा गलियारा"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_2_outer_ambulatory.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_2_outer_ambulatory.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_2_outer_ambulatory.mp3"
      },
      "transcripts": {
        "en": "Welcome to the outer ambulatory corridor of the Taj Mahal. This monumental octagonal hallway wraps around the central funerary chamber. In Mughal tradition, visitors circumambulated around the inner sanctuary. The walls are embellished with verses from the Holy Quran calligraphed by master scribe Amanat Khan, while the lower dado panels feature naturalistic bas-relief flowers sculpted into the pure white Makrana marble.",
        "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಹೊರಗಿನ ಪ್ರದಕ್ಷಿಣಾ ಪಥಕ್ಕೆ ಸುಸ್ವಾಗತ. ಈ ಅಷ್ಟಭುಜಾಕೃತಿಯ ಭವ್ಯ ಕಾರಿಡಾರ್ ಕೇಂದ್ರ ಸಮಾಧಿ ಕೋಣೆಯನ್ನು ಸುತ್ತುವರೆದಿದೆ. ಸಂದರ್ಶಕರು ಪವಿತ್ರ ಸಮಾಧಿಯ ಸುತ್ತ ಗೌರವಪೂರ್ವಕವಾಗಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಲು ಇದನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಗೋಡೆಗಳ ಮೇಲೆ ಅಮಾನತ್ ಖಾನ್ ಅವರ ಕುರಾನ್ ಶಾಸನಗಳು ಮತ್ತು ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಜೀವಂತ ಹೂವಿನ ಉಬ್ಬುಶಿಲ್ಪಗಳು ನಿಮ್ಮನ್ನು ಮಂತ್ರಮುಗ್ಧರನ್ನಾಗಿಸುತ್ತವೆ.",
        "hi": "ताज महल के बाहरी प्रदक्षिणा गलियारे में आपका स्वागत है। यह अष्टकोणीय गलियारा मुख्य समाधि कक्ष के चारों ओर बना है। आगंतुक इसके माध्यम से आंतरिक मक़बरे की परिक्रमा करते थे। दीवारों पर सुलेखक अमानत ख़ान द्वारा उकेरी गई क़ुरान की पवित्र आयतें हैं, और निचले संगमरमर के पैनलों पर प्राकृतिक फूलों की नक्काशी मकराना संगमरमर में जीवंत प्रतीत होती है।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s2_calligraphy",
        "title": {
          "en": "Amanat Khan Quranic Calligraphy Borders",
          "kn": "ಅಮಾನತ್ ಖಾನ್ ಕುರಾನ್ ಶಾಸನಗಳ ಅಂಚು",
          "hi": "अमानत ख़ान की क़ुरानी सुलेख सीमाएँ"
        },
        "category": "Islamic Epigraphy",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 26.1,
            "yaw": -52.1,
            "hfov": 85
          }
        },
        "description": {
          "en": "Monumental Thuluth calligraphy inlaid in black marble around the central arch.",
          "kn": "ಕೇಂದ್ರ ಕಮಾನಿನ ಸುತ್ತಲೂ ಕಪ್ಪು ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಭವ್ಯ ತುಲುತ್ ಲಿಪಿಯ ಶಾಸನಗಳು.",
          "hi": "केंद्रीय मेहराब के चारों ओर काले संगमरमर की पच्चीकारी से उकेरी गई थुलुथ लिपि।"
        },
        "historicalSignificance": {
          "en": "Created by Abd al-Haqq (titled Amanat Khan Shirazi), signed personally at the base of the dome in 1639.",
          "kn": "ಅಬ್ದುಲ್ ಹಕ್ (ಅಮಾನತ್ ಖಾನ್ ಶೀರಾಜಿ) ಅವರಿಂದ ರಚಿಸಲ್ಪಟ್ಟಿದ್ದು, 1639 ರಲ್ಲಿ ತಮ್ಮ ಹೆಸರನ್ನು ಕೆತ್ತಿದ್ದಾರೆ.",
          "hi": "प्रसिद्ध सुलेखक अमानत ख़ान शीराज़ी द्वारा रचित, जिन्होंने 1639 में इस पर हस्ताक्षर किए थे।"
        },
        "architecturalDetails": {
          "en": "Inlaid with black marble into white Makrana slabs; letter height increases gradually toward the top to correct perspective.",
          "kn": "ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಮೇಲೆ ಕಪ್ಪು ಕಲ್ಲಿನಿಂದ ಕೆತ್ತಲ್ಪಟ್ಟಿದೆ; ಅಕ್ಷರಗಳು ಕೆಳಗಿನಿಂದ ಸಮಾನ ಗಾತ್ರದಲ್ಲಿ ಕಾಣುವಂತೆ ಮೇಲೆ ಹೋಗುತ್ತಿದ್ದಂತೆ ದೊಡ್ಡದಾಗುತ್ತವೆ.",
          "hi": "सफ़ेद संगमरमर पर काले संगमरमर की पच्चीकारी; अक्षरों का आकार ऊपर की ओर बढ़ता है ताकि वे नीचे से एक समान दिखें।"
        },
        "audioNarrationTrackId": "hotspot_s2_calligraphy",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s2_calligraphy.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s2_calligraphy.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s2_calligraphy.mp3"
        },
        "transcripts": {
          "en": "Monumental Quranic inscriptions in black marble inlay wrap around the portal. Scribe Amanat Khan adjusted the font scale gradually so the letters appear identical in size from the ground.",
          "kn": "ಕಪ್ಪು ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ಕುರಾನ್ ಶಾಸನಗಳು ಇಲ್ಲಿವೆ. ಕ್ಯಾಲಿಗ್ರಾಫರ್ ಅಮಾನತ್ ಖಾನ್ ಅಕ್ಷರಗಳನ್ನು ಕೆಳಗಿನಿಂದ ಸಮಾನವಾಗಿ ಕಾಣುವಂತೆ巧妙ವಾಗಿ ರಚಿಸಿದ್ದಾರೆ.",
          "hi": "काले संगमरमर की पच्चीकारी से उकेरी गई क़ुरानी आयतें द्वार को घेरती हैं। सुलेखक अमानत ख़ान ने अक्षरों का आकार इस प्रकार बढ़ाया कि वे नीचे से एक समान दिखाई दें।"
        }
      },
      {
        "id": "hotspot_s2_dado",
        "title": {
          "en": "Floral Bas-Relief Dado Marble Carvings",
          "kn": "ಹೂವಿನ ಉಬ್ಬುಶಿಲ್ಪದ ಅಮೃತಶಿಲೆಯ ಕೆತ್ತನೆಗಳು",
          "hi": "पुष्प उभरी नक्काशीदार संगमरमर पट्टिका"
        },
        "category": "Sculptural Relief",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -12.3,
            "yaw": -52.1,
            "hfov": 85
          }
        },
        "description": {
          "en": "Naturalistic botanical carvings sculpted into the lower wall panels.",
          "kn": "ಕೆಳಗಿನ ಗೋಡೆಯ ಫಲಕಗಳಲ್ಲಿ ಕೆತ್ತಲಾದ ಜೀವಂತ ಸಸ್ಯಶಾಸ್ತ್ರೀಯ ಕೆತ್ತನೆಗಳು.",
          "hi": "निचले दीवार पैनलों पर मकराना संगमरमर में उकेरी गई प्राकृतिक फूलों की नक्काशी।"
        },
        "historicalSignificance": {
          "en": "Reflects the Mughal fascination with flora, influenced by European herbal botanical books brought by Jesuit envoys.",
          "kn": "ಮೊಘಲರ ಪ್ರಕೃತಿ ಪ್ರೇಮ ಮತ್ತು ಯುರೋಪಿಯನ್ ಸಸ್ಯಶಾಸ್ತ್ರೀಯ ಕೃತಿಗಳ ಪ್ರಭಾವವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.",
          "hi": "मुग़ल प्रकृति प्रेम और यूरोपीय वनस्पति विज्ञान की पुस्तकों के प्रभाव को दर्शाती है।"
        },
        "architecturalDetails": {
          "en": "Carved from solid Makrana marble in low relief, framed by borders of inlaid jasper, jade, and carnelian.",
          "kn": "ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ನವಿರಾಗಿ ಕೆತ್ತಲ್ಪಟ್ಟಿದ್ದು, ಜೇಡ್ ಮತ್ತು ಕಾರ್ನೆಲಿಯನ್ ಹರಳುಗಳ ಅಂಚನ್ನು ಹೊಂದಿದೆ.",
          "hi": "ठोस संगमरमर पर महीन उभार, जिसके चारों ओर जैस्पर और जेड रत्नों की पच्चीकारी है।"
        },
        "audioNarrationTrackId": "hotspot_s2_dado",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s2_dado.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s2_dado.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s2_dado.mp3"
        },
        "transcripts": {
          "en": "The lower wall dados feature naturalistic flowers sculpted in low marble relief, surrounded by delicate borders of inlaid jasper and jade.",
          "kn": "ಕೆಳಗಿನ ಗೋಡೆಗಳ ಮೇಲೆ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ನೈಸರ್ಗಿಕ ಹೂವುಗಳ ಉಬ್ಬುಶಿಲ್ಪಗಳನ್ನು ಮತ್ತು ಹಸಿರು ಜೇಡ್ ಹರಳುಗಳ ಅಂಚನ್ನು ಕೆತ್ತಲಾಗಿದೆ.",
          "hi": "दीवारों के निचले हिस्सों पर संगमरमर में उभरे हुए प्राकृतिक फूल और जैस्पर तथा जेड रत्नों की महीन नक्काशी उकेरी गई है।"
        }
      },
      {
        "id": "hotspot_s2_outer_jali",
        "title": {
          "en": "Monolithic Pierced Octagonal Jali Screen Arch",
          "kn": "ಏಕಶಿಲೆಯ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಕಮಾನು",
          "hi": "एकल शिला जालीदार संगमरमर मेहराब"
        },
        "category": "Openwork Screen",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 2.8,
            "yaw": 68.8,
            "hfov": 85
          }
        },
        "description": {
          "en": "The monumental perforated marble lattice arch screening the central hall.",
          "kn": "ಕೇಂದ್ರ ಸಭಾಂಗಣವನ್ನು ಬೇರ್ಪಡಿಸುವ ಭವ್ಯ ರಂಧ್ರಯುಕ್ತ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಕಮಾನು.",
          "hi": "केंद्रीय कक्ष को अलग करने वाला बारीक जालीदार संगमरमर का मेहराब।"
        },
        "historicalSignificance": {
          "en": "Provides visual screening between the circumambulatory corridor and the inner sanctum.",
          "kn": "ಪ್ರದಕ್ಷಿಣಾ ಕಾರಿಡಾರ್ ಮತ್ತು ಪವಿತ್ರ ಒಳಗಿನ ಸಮಾಧಿ ಕೋಣೆಯ ನಡುವೆ ಪರದೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
          "hi": "परिक्रमा गलियारे और भीतरी समाधि कक्ष के बीच पवित्र पर्दा बनाए रखता है।"
        },
        "architecturalDetails": {
          "en": "Carved from single marble slabs using drills and hand files, forming delicate interlocking star and polygon perforations.",
          "kn": "ಕೈಗಳಿಂದ ಕೊರೆದು ತಯಾರಿಸಲಾದ ಜ್ಯಾಮಿತೀಯ ನಕ್ಷತ್ರಗಳ ಸೂಕ್ಷ್ಮ ರಂಧ್ರಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "एकल संगमरमर शिला से हाथों द्वारा तराशा गया, जिसमें तारों और बहुभुज की बारीक जालियाँ हैं।"
        },
        "audioNarrationTrackId": "hotspot_s2_outer_jali",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s2_outer_jali.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s2_outer_jali.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s2_outer_jali.mp3"
        },
        "transcripts": {
          "en": "Pierced marble screens fill the arched openings, filtering harsh tropical sunlight into a soft, reverent glow while maintaining a cool breeze.",
          "kn": "ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಪರದೆಗಳು ಕಮಾನುಗಳಲ್ಲಿ ಅಳವಡಿಸಲ್ಪಟ್ಟಿದ್ದು, ಪ್ರಖರ ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಮೃದುಗೊಳಿಸಿ ತಂಪಾದ ಗಾಳಿಯನ್ನು ಒದಗಿಸುತ್ತವೆ.",
          "hi": "संगमरमर की जालीदार स्क्रीनें तेज़ धूप को छानकर अंदर शांत रोशनी और शीतल हवा का प्रवाह बनाए रखती हैं।"
        }
      },
      {
        "id": "hotspot_s2_vaulting",
        "title": {
          "en": "Intersecting Vaulted Muqarnas Arches",
          "kn": "ಛೇದಿಸುವ ಮುಕರ್ನಾಸ್ ಕಮಾನುಗಳು ಮತ್ತು ಮೇಲ್ಛಾವಣಿ",
          "hi": "परस्पर जुड़े मुक़रनसों वाले मेहराब"
        },
        "category": "Ceiling Architecture",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 60.9,
            "yaw": 68.8,
            "hfov": 85
          }
        },
        "description": {
          "en": "The elaborate stalactite vaulting bridging the corner transition.",
          "kn": "ಮೂಲೆಗಳ ಪರಿವರ್ತನೆಯನ್ನು ಸಂಪರ್ಕಿಸುವ ಜೇನುಗೂಡಿನ ಮಾದರಿಯ ಮೇಲ್ಛಾವಣಿ.",
          "hi": "कोनों के मोड़ पर बनी मधुमक्खी के छत्ते जैसी जटिल स्टैलेक्टाइट छत।"
        },
        "historicalSignificance": {
          "en": "A crowning achievement of Timurid and Persian geometry integrated into classical Mughal interiors.",
          "kn": "ಮೊಘಲ್ ಒಳಾಂಗಣದಲ್ಲಿ ಪರ್ಷಿಯನ್ ಜ್ಯಾಮಿತಿಯ ಅತ್ಯುನ್ನತ ಕಲಾತ್ಮಕ ಸಾಧನೆ.",
          "hi": "मुग़ल वास्तुकला में तैमूरी और फ़ारसी ज्यामिति के श्रेष्ठतम संगम का प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Formed of multifaceted plaster corbels covered with lime stucco creating radiating geometric facets.",
          "kn": "ವಿಕಿರಣ ಜ್ಯಾಮಿತೀಯ ಮುಖಗಳನ್ನು ಸೃಷ್ಟಿಸುವ ಸುಣ್ಣದ ಗಾರೆಯ ಮುಕರ್ನಾಸ್ ವಿನ್ಯಾಸಗಳು.",
          "hi": "चूने के प्लास्टर से बने बहुआयामी ब्रैकेट जो ज्यामितीय पैटर्न बनाते हैं।"
        },
        "audioNarrationTrackId": "hotspot_s2_vaulting",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s2_vaulting.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s2_vaulting.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s2_vaulting.mp3"
        },
        "transcripts": {
          "en": "The corridor ceilings feature intersecting ribs and miniature honeycomb muqarnas, gracefully transferring the roof load onto octagonal piers.",
          "kn": "ಕಾರಿಡಾರ್‌ನ ಮೇಲ್ಛಾವಣಿಯು ಪರಸ್ಪರ ಛೇದಿಸುವ ಕಮಾನುಗಳು ಮತ್ತು ಜೇನುಗೂಡಿನ ಮಾದರಿಯ ಮುಕರ್ನಾಸ್ ವಿನ್ಯಾಸಗಳಿಂದ ಭದ್ರವಾಗಿದೆ.",
          "hi": "गलियारे की छत मधुमक्खी के छत्ते जैसी मुक़रनसों और मेहराबों से सुसज्जित है जो छत के भार को खूबसूरती से संभालती हैं।"
        }
      },
      {
        "id": "hotspot_s2_star_floor",
        "title": {
          "en": "Interlocking Khatam-Band Star Marble Mosaic",
          "kn": "ಖತಮ್-ಬಂದ್ ನಕ್ಷತ್ರಾಕಾರದ ಅಮೃತಶಿಲೆಯ ನೆಲಹಾಸು",
          "hi": "ख़ातम-बंद तारा संगमरमर पच्चीकारी फ़र्श"
        },
        "category": "Decorative Pavement",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -49.5,
            "yaw": 29.3,
            "hfov": 85
          }
        },
        "description": {
          "en": "The intricate mosaic floor paved with interlocking polychrome marbles.",
          "kn": "ಬಣ್ಣಬಣ್ಣದ ಅಮೃತಶಿಲೆಗಳಿಂದ ಜೋಡಿಸಲಾದ ಸಂಕೀರ್ಣ ಜ್ಯಾಮಿತೀಯ ನೆಲಹಾಸು.",
          "hi": "रंगीन संगमरमर के टुकड़ों से निर्मित परस्पर जुड़े तारों वाला फ़र्श।"
        },
        "historicalSignificance": {
          "en": "Symbolizes the celestial sphere and the eternal cosmos unfolding beneath the visitor's feet.",
          "kn": "ಸಂದರ್ಶಕರ ಪಾದಗಳ ಕೆಳಗೆ ಅನಂತ ವಿಶ್ವ ಮತ್ತು ಆಕಾಶ ಗೋಳವನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ.",
          "hi": "कदमों के नीचे अनंत ब्रह्मांड और आकाशीय नक्षत्रों का प्रतीक।"
        },
        "architecturalDetails": {
          "en": "Composed of black marble from Chitor, yellow marble from Jaisalmer, and white Makrana marble.",
          "kn": "ಚಿತ್ತೋರ್‌ನ ಕಪ್ಪು ಅಮೃತಶಿಲೆ, ಜೈಸಲ್ಮೇರ್‌ನ ಹಳದಿ ಅಮೃತಶಿಲೆ ಮತ್ತು ಬಿಳಿ ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯ ಮಿಶ್ರಣ.",
          "hi": "चित्तौड़ के काले, जैसलमेर के पीले और मकराना के श्वेत संगमरमर का संगम।"
        },
        "audioNarrationTrackId": "hotspot_s2_star_floor",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s2_star_floor.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s2_star_floor.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s2_star_floor.mp3"
        },
        "transcripts": {
          "en": "The floor is paved with interlocking geometric star and polygon patterns crafted from alternating black, yellow, and white marble.",
          "kn": "ನೆಲದಲ್ಲಿ ಕಪ್ಪು, ಹಳದಿ ಮತ್ತು ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ತುಂಡುಗಳಿಂದ ಜ್ಯಾಮಿತೀಯ ನಕ್ಷತ್ರಗಳ ಆಕರ್ಷಕ ವಿನ್ಯಾಸವನ್ನು ಹೆಣೆಯಲಾಗಿದೆ.",
          "hi": "फ़र्श पर काले, पीले और सफ़ेद संगमरमर के टुकड़ों से परस्पर जुड़े तारों और बहुभुज ज्यामितीय आकारों की पच्चीकारी की गई है।"
        }
      }
    ],
    "linkedSceneIds": []
  },
  {
    "id": "scene_6_inner_sanctuary",
    "sceneNumber": 6,
    "title": {
      "en": "Cenotaph Sanctuary – Royal Memorials",
      "kn": "ಸ್ಮಾರಕ ಸಮಾಧಿ ಗರ್ಭಗುಡಿ – ರಾಜ ಸ್ಮಾರಕಗಳು",
      "hi": "स्मारक समाधि गर्भगृह – शाही स्मारक"
    },
    "subtitle": {
      "en": "Interior – Octagonal Screen Chamber & Cenotaphs",
      "kn": "ಒಳಾಂಗಣ – ಅಷ್ಟಭುಜಾಕೃತಿಯ ಜಾಲಂದರ ಪರದೆಯ ಕೋಣೆ ಮತ್ತು ಸಮಾಧಿಗಳು",
      "hi": "आंतरिक भाग – अष्टकोणीय जालीदार स्क्रीन कक्ष और समाधियाँ"
    },
    "thumbnailUrl": "/assets/monuments/taj-mahal/thumbnails/scene_6_cenotaphs_inner_sanctuary.jpg",
    "panorama": {
      "engine": "pannellum",
      "equirectangularUrl": "/assets/monuments/taj-mahal/panoramas/scene_6_inner_sanctuary.jpg",
      "initialOrientation": {
        "pitch": -10,
        "yaw": 0,
        "hfov": 88
      },
      "limits": {
        "minPitch": -48,
        "maxPitch": 48,
        "minFov": 45,
        "maxFov": 110
      }
    },
    "audioNarration": {
      "trackId": "scene_6_inner_sanctuary",
      "title": {
        "en": "Cenotaph Sanctuary – Royal Memorials",
        "kn": "ಸ್ಮಾರಕ ಸಮಾಧಿ ಗರ್ಭಗುಡಿ – ರಾಜ ಸ್ಮಾರಕಗಳು",
        "hi": "स्मारक समाधि गर्भगृह – शाही स्मारक"
      },
      "audioSources": {
        "en": "/assets/monuments/taj-mahal/audio/en/scene_6_inner_sanctuary.mp3",
        "kn": "/assets/monuments/taj-mahal/audio/kn/scene_6_inner_sanctuary.mp3",
        "hi": "/assets/monuments/taj-mahal/audio/hi/scene_6_inner_sanctuary.mp3"
      },
      "transcripts": {
        "en": "You are standing inside the intimate inner sanctuary of the Taj Mahal. Enclosed within this masterfully carved octagonal jali screen rest the royal cenotaphs. In the center is the cenotaph of Empress Mumtaz Mahal, adorned with lapidary floral motifs and the Ninety-Nine Names of God. Beside her, placed asymmetrically by his son Aurangzeb, lies the larger cenotaph of Emperor Shah Jahan. The actual graves lie directly below in the underground crypt.",
        "kn": "ತಾಜ್ ಮಹಲ್‌ನ ಪರಮ ಪವಿತ್ರ ಗರ್ಭಗುಡಿಗೆ ಸುಸ್ವಾಗತ. ಈ ಅದ್ಭುತ ಅಷ್ಟಭುಜಾಕೃತಿಯ ಅಮೃತಶಿಲೆಯ ಜಾಲಿಯೊಳಗೆ ರಾಜ ಸ್ಮಾರಕ ಸಮಾಧಿಗಳಿವೆ. ಮಧ್ಯದಲ್ಲಿ ಸಾಮ್ರಾಜ್ಞಿ ಮುಮ್ತಾಜ್ ಮಹಲ್ ಅವರ ಸಮಾಧಿಯಿದ್ದು, ದೇವರ 99 ಪವಿತ್ರ ಹೆಸರುಗಳನ್ನು ಕೆತ್ತಲಾಗಿದೆ. ಪಕ್ಕದಲ್ಲಿ ಚಕ್ರವರ್ತಿ ಶಾ ಜಹಾನ್ ಅವರ ದೊಡ್ಡ ಸಮಾಧಿಯಿದೆ. ಅವರ ನಿಜವಾದ ಸಮಾಧಿಗಳು ನೇರವಾಗಿ ಕೆಳಗಿನ ನೆಲಮಾಳಿಗೆಯ ಕೋಣೆಯಲ್ಲಿವೆ.",
        "hi": "ताज महल के अंतरंग गर्भगृह में आपका स्वागत है। इस नक्काशीदार अष्टकोणीय जालीदार स्क्रीन के भीतर शाही समाधियाँ हैं। केंद्र में बेगम मुमताज़ महल की समाधि है, जिस पर ईश्वर के 99 पवित्र नाम अंकित हैं। उनके पास सम्राट शाहजहाँ की समाधि स्थित है। वास्तविक क़ब्रें ठीक नीचे स्थित भूमिगत तहख़ाने में शांत वातावरण में बनी हुई हैं।"
      }
    },
    "hotspots": [
      {
        "id": "hotspot_s6_mumtaz_cenotaph",
        "title": {
          "en": "Cenotaph of Empress Mumtaz Mahal",
          "kn": "ಸಾಮ್ರಾಜ್ಞಿ ಮುಮ್ತಾಜ್ ಮಹಲ್ ಸ್ಮಾರಕ ಸಮಾಧಿ",
          "hi": "मल्लिका मुमताज़ महल की मज़ार"
        },
        "category": "Sacred Memorial",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -24,
            "yaw": 17.7,
            "hfov": 85
          }
        },
        "description": {
          "en": "The central white marble sarcophagus commemorating Empress Arjumand Banu Begum (Mumtaz Mahal).",
          "kn": "ಸಾಮ್ರಾಜ್ಞಿ ಮುಮ್ತಾಜ್ ಮಹಲ್ ಅವರ ನೆನಪಿಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ಕೇಂದ್ರ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಸ್ಮಾರಕ ಸಮಾಧಿ.",
          "hi": "बेगम अर्जुमंद बानो (मुमताज़ महल) की स्मृति में बना केंद्रीय श्वेत संगमरमर का मक़बरा।"
        },
        "historicalSignificance": {
          "en": "The geometric heart of the entire monument, constructed to fulfill Shah Jahan's promise to build an incomparable tomb.",
          "kn": "ಅದ್ಭುತ ಸಮಾಧಿ ನಿರ್ಮಿಸುವುದಾಗಿ ಮುಮ್ತಾಜ್‌ಗೆ ನೀಡಿದ ಮಾತನ್ನು ಈಡೇರಿಸಲು ಶಾ ಜಹಾನ್ ನಿರ್ಮಿಸಿದ ಇಡೀ ಸಂಕೀರ್ಣದ ಕೇಂದ್ರ ಬಿಂದು.",
          "hi": "पूरे ताज महल का ज्यामितीय केंद्र, जो शाहजहाँ के असीम प्रेम और वादे का प्रतीक है।"
        },
        "architecturalDetails": {
          "en": "Inlaid with lapis lazuli, carnelian, jade, and chrysolite in floral patterns, inscribed with the 99 Names of Allah.",
          "kn": "ಲ್ಯಾಪಿಸ್ ಲಾಜುಲಿ, ಕಾರ್ನೆಲಿಯನ್ ಮತ್ತು ಜೇಡ್ ರತ್ನಗಳಿಂದ ಹೂವಿನ ಕೆತ್ತನೆ ಮತ್ತು ಅಲ್ಲಾಹನ 99 ಹೆಸರುಗಳನ್ನು ಹೊಂದಿದೆ.",
          "hi": "लापिस लाज़ुली, अक़ीक़ और जेड रत्नों के पुष्प अलंकरण और अल्लाह के 99 नामों से सुसज्जित।"
        },
        "audioNarrationTrackId": "hotspot_s6_mumtaz_cenotaph",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s6_mumtaz_cenotaph.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s6_mumtaz_cenotaph.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s6_mumtaz_cenotaph.mp3"
        },
        "transcripts": {
          "en": "The central cenotaph honors Empress Mumtaz Mahal. Carved from flawless white marble, it is inscribed with the Ninety-Nine Names of God and adorned with intricate lapidary flower motifs.",
          "kn": "ಮಧ್ಯದಲ್ಲಿರುವ ಸಾಮ್ರಾಜ್ಞಿ ಮುಮ್ತಾಜ್ ಮಹಲ್ ಅವರ ಸ್ಮಾರಕ ಸಮಾಧಿಯು ದೇವರ ತೊಂಬತ್ತೊಂಬತ್ತು ಪವಿತ್ರ ಹೆಸರುಗಳು ಮತ್ತು ರತ್ನಖಚಿತ ಹೂವಿನ ವಿನ್ಯಾಸಗಳಿಂದ ಕೂಡಿದೆ.",
          "hi": "केंद्र में बेगम मुमताज़ महल की समाधि है। शुद्ध सफ़ेद संगमरमर पर ईश्वर के निन्यानवे पवित्र नाम और अर्द्ध-बहुमूल्य रत्नों के फूल तराशे गए हैं।"
        }
      },
      {
        "id": "hotspot_s6_shajahan_cenotaph",
        "title": {
          "en": "Asymmetrical Cenotaph of Emperor Shah Jahan",
          "kn": "ಚಕ್ರವರ್ತಿ ಶಾ ಜಹಾನ್ ಅವರ ಸ್ಮಾರಕ ಸಮಾಧಿ",
          "hi": "सम्राट शाहजहाँ की असममित मज़ार"
        },
        "category": "Imperial Memorial",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -12.3,
            "yaw": -10.2,
            "hfov": 85
          }
        },
        "description": {
          "en": "The larger marble sarcophagus situated immediately to the west of Mumtaz Mahal's cenotaph.",
          "kn": "ಮುಮ್ತಾಜ್ ಮಹಲ್ ಸಮಾಧಿಯ ಪಶ್ಚಿಮಕ್ಕೆ ಸ್ಥಾಪಿಸಲಾದ ದೊಡ್ಡ ಅಮೃತಶಿಲೆಯ ಸಮಾಧಿ.",
          "hi": "मुमताज़ महल की मज़ार के ठीक पश्चिम में स्थित सम्राट शाहजहाँ की बड़ी मज़ार।"
        },
        "historicalSignificance": {
          "en": "Placed here in 1666 by his son Aurangzeb, breaking the strict symmetry of the chamber.",
          "kn": "1666 ರಲ್ಲಿ ಅವರ ಪುತ್ರ ಔರಂಗಜೇಬನಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿತು, ಇದು ಕೋಣೆಯ ಸಮ್ಮಿತಿಯನ್ನು ಮುರಿಯುತ್ತದೆ.",
          "hi": "1666 में उनके पुत्र औरंगज़ेब द्वारा यहाँ बनवाई गई, जो मक़बरे की सममिति का एकमात्र अपवाद है।"
        },
        "architecturalDetails": {
          "en": "Larger in elevation and footprint, bearing a raised pen-box (qalamdan) motif denoting an imperial ruler.",
          "kn": "ದೊಡ್ಡ ಆಕಾರ ಹೊಂದಿದ್ದು, ಚಕ್ರವರ್ತಿಯ ಸಂಕೇತವಾದ ಕಲಾಮ್ದಾನ್ (ಶಾಯಿಪಾತ್ರೆ) ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "आकार में बड़ी और शीर्ष पर क़लमदान का शाही प्रतीक लिए हुए, जो शासक की पहचान है।"
        },
        "audioNarrationTrackId": "hotspot_s6_shajahan_cenotaph",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s6_shajahan_cenotaph.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s6_shajahan_cenotaph.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s6_shajahan_cenotaph.mp3"
        },
        "transcripts": {
          "en": "The larger cenotaph of Emperor Shah Jahan was placed beside his wife by his son Aurangzeb. Bearing an inkpot motif symbolizing an emperor, it is the only asymmetrical element in the complex.",
          "kn": "ಚಕ್ರವರ್ತಿ ಶಾ ಜಹಾನ್ ಅವರ ದೊಡ್ಡ ಸಮಾಧಿಯನ್ನು ಅವರ ಮಗ ಔರಂಗಜೇಬ ಪಕ್ಕದಲ್ಲಿ ಸ್ಥಾಪಿಸಿದನು. ಚಕ್ರವರ್ತಿಯ ಸಂಕೇತವಾದ ಶಾಯಿಪಾತ್ರೆ ಹೊಂದಿರುವ ಇದು ಇಡೀ ಸಂಕೀರ್ಣದ ಏಕೈಕ ಅಸಮ್ಮಿತ ರಚನೆಯಾಗಿದೆ.",
          "hi": "सम्राट शाहजहाँ की समाधि को उनके पुत्र औरंगज़ेब ने बेगम की समाधि के पास स्थापित करवाया था। दावात का प्रतीक चिन्ह लिए यह पूरे ताज महल में एकमात्र असममित तत्व है।"
        }
      },
      {
        "id": "hotspot_s6_curzon_lamp",
        "title": {
          "en": "Lord Curzon Hanging Bronze Censer (1909)",
          "kn": "ಲಾರ್ಡ್ ಕರ್ಜನ್ ಕಂಚಿನ ತೂಗುದೀಪ (1909)",
          "hi": "लॉर्ड कर्ज़न का लटकता कांस्य दीप (1909)"
        },
        "category": "Historical Artifact",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": 28.4,
            "yaw": 25.8,
            "hfov": 85
          }
        },
        "description": {
          "en": "The suspended bronze chandelier hanging directly over the cenotaphs.",
          "kn": "ರಾಜ ಸಮಾಧಿಗಳ ಮೇಲೆ ನೇತಾಡುವ ಅದ್ಭುತ ಕಂಚಿನ ತೂಗುದೀಪ.",
          "hi": "शाही समाधियों के ठीक ऊपर लटकता हुआ भव्य कांस्य झूमर दीप।"
        },
        "historicalSignificance": {
          "en": "Commissioned in 1906 by British Viceroy Lord Curzon as a tribute after spearheading the restoration of the Taj Mahal.",
          "kn": "ತಾಜ್ ಮಹಲ್ ಜೀರ್ಣೋದ್ಧಾರದ ನಂತರ ಬ್ರಿಟಿಷ್ ವೈಸ್‌ರಾಯ್ ಲಾರ್ಡ್ ಕರ್ಜನ್ 1906 ರಲ್ಲಿ ಇದನ್ನು ಸಮರ್ಪಿಸಿದರು.",
          "hi": "ताज महल के संरक्षण के उपरांत ब्रिटिश वायसराय लॉर्ड कर्ज़न द्वारा 1906 में भेंट किया गया।"
        },
        "architecturalDetails": {
          "en": "Crafted in Cairo from solid bronze, inlaid with silver and gold arabesques copying the lamp of Sultan Baybars II.",
          "kn": "ಕೈರೋದಲ್ಲಿ ಘನ ಕಂಚಿನಿಂದ ತಯಾರಿಸಲ್ಪಟ್ಟಿದ್ದು, ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ಹೂವಿನ ಕೆತ್ತನೆಯನ್ನು ಹೊಂದಿದೆ.",
          "hi": "काहिरा के कारीगरों द्वारा शुद्ध कांस्य से निर्मित, जिस पर सोने-चाँदी की पच्चीकारी है।"
        },
        "audioNarrationTrackId": "hotspot_s6_curzon_lamp",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s6_curzon_lamp.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s6_curzon_lamp.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s6_curzon_lamp.mp3"
        },
        "transcripts": {
          "en": "Suspended directly above the royal cenotaphs is an elaborate bronze chandelier gifted in 1909 by British Viceroy Lord Curzon, crafted by master artisans in Cairo.",
          "kn": "ಸಮಾಧಿಗಳ ಮೇಲೆ ತೂಗುಹಾಕಲಾದ ಈ ಸುಂದರ ಕಂಚಿನ ದೀಪವನ್ನು 1909ರಲ್ಲಿ ಲಾರ್ಡ್ ಕರ್ಜನ್ ಕೊಡುಗೆಯಾಗಿ ನೀಡಿದರು. ಇದನ್ನು ಕೈರೋದ ನುರಿತ ಕುಶಲಕರ್ಮಿಗಳು ತಯಾರಿಸಿದ್ದಾರೆ.",
          "hi": "समाधियों के ऊपर झूलता यह विशाल कांस्य दीप 1909 में लॉर्ड कर्ज़न द्वारा भेंट किया गया था, जिसे काहिरा के कारीगरों ने विशेष रूप से बनाया था।"
        }
      },
      {
        "id": "hotspot_s6_inner_jali",
        "title": {
          "en": "Inner Façade of the Octagonal Pierced Jali Screen",
          "kn": "ಅಷ್ಟಭುಜಾಕೃತಿಯ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಪರದೆಯ ಒಳಮುಖ",
          "hi": "अष्टकोणीय जालीदार स्क्रीन का आंतरिक भाग"
        },
        "category": "Masterwork Lapidary",
        "coordinates": {
          "engine": "pannellum",
          "coords": {
            "pitch": -0.7,
            "yaw": 75.8,
            "hfov": 85
          }
        },
        "description": {
          "en": "The inner face of the octagonal openwork marble enclosure.",
          "kn": "ಅಷ್ಟಭುಜಾಕೃತಿಯ ರಂಧ್ರಯುಕ್ತ ಅಮೃತಶಿಲೆಯ ಪರದೆಯ ಒಳಗಿನ ಸುಂದರ ಮುಖ.",
          "hi": "शाही समाधियों को घेरने वाली अष्टकोणीय जाली का भीतरी मुख।"
        },
        "historicalSignificance": {
          "en": "Replaced the original solid gold enameled screen in 1642 to prevent theft and permit soft light.",
          "kn": "1642 ರಲ್ಲಿ ಮೂಲ ಚಿನ್ನದ ಪರದೆಯ ಬದಲಾಗಿ ಈ ಅಮೃತಶಿಲೆಯ ಜಾಲಿಯನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು.",
          "hi": "1642 में मूल सोने की स्क्रीन के स्थान पर सुरक्षा और सुंदरता हेतु इसे स्थापित किया गया।"
        },
        "architecturalDetails": {
          "en": "Composed of eight pierced panels joined by monolithic marble posts topped with kalash finials.",
          "kn": "ಕಲಶ ಶಿಖರಗಳನ್ನು ಹೊಂದಿರುವ ಏಕಶಿಲೆಯ ಕಂಬಗಳಿಂದ ಜೋಡಿಸಲಾದ ಎಂಟು ಜಾಲಂದರ ಫಲಕಗಳು.",
          "hi": "आठ जालीदार पैनल और शीर्ष पर कलश लिए ठोस संगमरमर के स्तंभों का संगम।"
        },
        "audioNarrationTrackId": "hotspot_s6_inner_jali",
        "audioSources": {
          "en": "/assets/monuments/taj-mahal/audio/en/hotspot_s6_inner_jali.mp3",
          "kn": "/assets/monuments/taj-mahal/audio/kn/hotspot_s6_inner_jali.mp3",
          "hi": "/assets/monuments/taj-mahal/audio/hi/hotspot_s6_inner_jali.mp3"
        },
        "transcripts": {
          "en": "The octagonal pierced marble jali screen is carved from single marble slabs with botanical openwork so fine it resembles lacework in stone.",
          "kn": "ಅಷ್ಟಭುಜಾಕೃತಿಯ ಅಮೃತಶಿಲೆಯ ಜಾಲಂದರ ಪರದೆಯನ್ನು ಏಕಶಿಲೆಗಳಲ್ಲಿ ಕೆತ್ತಲಾಗಿದ್ದು, ಕಲ್ಲಿನಲ್ಲಿ ಮಾಡಿದ ನವಿರಾದ ರೇಷ್ಮೆ ಬಲೆಯಂತೆ ಕಂಗೊಳಿಸುತ್ತದೆ.",
          "hi": "अष्टकोणीय संगमरमर की यह जालीदार स्क्रीन एकल शिलाओं को तराशकर बनाई गई है, जिसकी महीन नक्काशी पत्थर पर लेस जैसी प्रतीत होती है।"
        }
      }
    ],
    "linkedSceneIds": []
  }
];

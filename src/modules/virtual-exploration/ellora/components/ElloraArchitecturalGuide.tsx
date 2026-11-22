import React from 'react';
import { Landmark, Compass, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

export const ElloraArchitecturalGuide: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Ellora Caves Monolithic Excavation & Architecture',
      subtitle: 'Rashtrakuta & Kalachuri Rock-Cut Marvels (UNESCO Ref: 243)',
      caves: [
        {
          num: 'Cave 16',
          name: 'Kailasa Temple',
          dynasty: 'Rashtrakuta Empire (King Krishna I, c. 756–773 CE)',
          details:
            'The pinnacle of rock-cut architecture in the world. Carved top-down from living basalt cliff, removing 200,000 tonnes of volcanic rock without joints or scaffolding. Features a 32-meter high Dravidian vimana, monolithic Nandi mandapa, victory pillars (dhvajastambhas), and continuous elephant friezes.',
        },
        {
          num: 'Cave 10',
          name: 'Vishwakarma (The Carpenter\'s Cave)',
          dynasty: 'Later Kalachuri / Early Chalukya (c. 650 CE)',
          details:
            'The sole Buddhist Chaitya sanctuary at Ellora. Renowned for its curved barrel-vaulted ceiling with stone ribs mimicking teak timber carpentry, multi-pillared nave, cathedral acoustic resonance, and a colossal 15-foot seated teaching Buddha in Dharmachakra Pravartana mudra.',
        },
        {
          num: 'Cave 14',
          name: 'Ravan Ki Khai',
          dynasty: 'Early Kalachuri (c. 600–650 CE)',
          details:
            'An early Hindu subterranean sanctuary featuring large sculpted panels of Shaiva and Vaishnava iconography, depicting Durga Mahishasuramardini and Shiva Gangadhara.',
        },
        {
          num: 'Cave 29',
          name: 'Dhumar Lena (Sita Ki Nahani)',
          dynasty: 'Kalachuri Period (c. late 6th Century CE)',
          details:
            'One of the grandest cave temples at Ellora, planned on a monumental cruciform layout resembling the Elephanta Great Cave, perched above the seasonal Elaganga waterfall.',
        },
        {
          num: 'Cave 32',
          name: 'Indra Sabha',
          dynasty: 'Rashtrakuta Period (c. 9th Century CE)',
          details:
            'A double-storey Jain shrine featuring consummate miniature carvings, lotus ceiling mandalas, and images of Tirthankaras Parshvanatha and Mahavira with Ambika under a fruited mango tree.',
        },
      ],
    },
    kn: {
      title: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳ ಏಕಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪ ಕೈಪಿಡಿ',
      subtitle: 'ರಾಷ್ಟ್ರಕೂಟ ಹಾಗೂ ಕಲಚೂರಿ ಶಿಲಾ ವೈಭವ (ಯುನೆಸ್ಕೋ ಸಂಖ್ಯೆ: ೨೪೩)',
      caves: [
        {
          num: 'ಗುಹೆ ೧೬',
          name: 'ಕೈಲಾಸ ದೇವಾಲಯ',
          dynasty: 'ರಾಷ್ಟ್ರಕೂಟ ಸಾಮ್ರಾಜ್ಯ (ಮೊದಲನೇ ಕೃಷ್ಣ, ಕ್ರಿ.ಶ. ೭೫೬–೭೭೩)',
          details:
            'ಜಗತ್ತಿನ ಅದ್ಭುತ ಏಕಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪ. ಬೃಹತ್ ಬೆಟ್ಟವನ್ನು ಮೇಲಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದು ನಿರ್ಮಿಸಲಾದ ದೇವಾಲಯ. ೩೨ ಮೀಟರ್ ಎತ್ತರದ ದ್ರಾವಿಡ ಶಿಖರ, ನಂದಿ ಮಂಟಪ, ಧ್ವಜಸ್ತಂಭಗಳು ಮತ್ತು ಆನೆಗಳ ಸಾಲನ್ನು ಹೊಂದಿದೆ.',
        },
        {
          num: 'ಗುಹೆ ೧೦',
          name: 'ವಿಶ್ವಕರ್ಮ ಬೌದ್ಧ ಚೈತ್ಯಾಲಯ (ಬಡಗಿಯ ಗುಹೆ)',
          dynasty: 'ಕಲಚೂರಿ / ಚಾಲುಕ್ಯ ಕಾಲ (ಕ್ರಿ.ಶ. ೬೫೦)',
          details:
            'ಎಲ್ಲೋರಾದ ಏಕೈಕ ಬೌದ್ಧ ಚೈತ್ಯ ಗೃಹ. ಮರದ ಕಮಾನಿನಂತೆ ಕಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಲಾದ ಛಾವಣಿ ಹಾಗೂ ೧೫ ಅಡಿ ಎತ್ತರದ ಧರ್ಮಚಕ್ರ ಪ್ರವರ್ತನ ಮುದ್ರೆಯ ಬುದ್ಧನ ವಿಗ್ರಹ ಇಲ್ಲಿದೆ.',
        },
        {
          num: 'ಗುಹೆ ೧೪',
          name: 'ರಾವಣ್ ಕಿ ಖೈ',
          dynasty: 'ಕಲಚೂರಿ ಕಾಲ (ಕ್ರಿ.ಶ. ೬೦೦–೬೫೦)',
          details:
            'ಶೈವ ಮತ್ತು ವೈಷ್ಣವ ದೇವತೆಗಳ ಭವ್ಯ ಉಬ್ಬುಶಿಲ್ಪಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಆರಂಭಿಕ ಹಿಂದೂ ಗುಹಾಲಯ.',
        },
        {
          num: 'ಗುಹೆ ೨೯',
          name: 'ಧುಮಾರ್ ಲೇಣಾ',
          dynasty: 'ಕಲಚೂರಿ ಕಾಲ (೬ನೇ ಶತಮಾನ)',
          details:
            'ಎಲಿಫೆಂಟಾ ಗುಹೆಯ ವಿನ್ಯಾಸವನ್ನು ಹೋಲುವ, ಜಲಪಾತದ ಸಮೀಪವಿರುವ ಬೃಹತ್ ಶಿವಾಲಯ.',
        },
        {
          num: 'ಗುಹೆ ೩೨',
          name: 'ಇಂದ್ರ ಸಭಾ',
          dynasty: 'ರಾಷ್ಟ್ರಕೂಟ ಕಾಲ (೯ನೇ ಶತಮಾನ)',
          details:
            'ಎರಡು ಅಂತಸ್ತಿನ ಜೈನ ಮಂದಿರ. ಸೂಕ್ಷ್ಮ ಕಲಾ ಕೆತ್ತನೆಗಳು ಮತ್ತು ತೀರ್ಥಂಕರರ ಮೂರ್ತಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.',
        },
      ],
    },
    hi: {
      title: 'एलोरा गुफाओं का एकाश्म स्थापत्य विवरण',
      subtitle: 'राष्ट्रकूट एवं कलचुरी शैलकृत स्थापत्य (यूनेस्को सं: 243)',
      caves: [
        {
          num: 'गुफा 16',
          name: 'कैलास मंदिर',
          dynasty: 'राष्ट्रकूट साम्राज्य (राजा कृष्ण प्रथम, लगभग 756–773 ईस्वी)',
          details:
            'संसार का सर्वश्रेष्ठ शैलकर्तित मंदिर। जीवित बेसाल्ट चट्टान को ऊपर से नीचे तराश कर निर्मित, जिसमें 32 मीटर ऊँचा द्रविड़ विमान, नंदी मंडप और विजय स्तंभ विद्यमान हैं।',
        },
        {
          num: 'गुफा 10',
          name: 'विश्वकर्मा चैत्य गृह (बढ़ई की गुफा)',
          dynasty: 'कलचुरी / चालुक्य काल (लगभग 650 ईस्वी)',
          details:
            'एलोरा का एकमात्र बौद्ध चैत्य गृह। काष्ठकारी जैसी मेहराबी छत एवं 15 फीट ऊँची पद्मासनस्थ भगवान बुद्ध की प्रतिमा से सुशोभित।',
        },
        {
          num: 'गुफा 14',
          name: 'रावण की खाई',
          dynasty: 'कलचुरी काल (लगभग 600–650 ईस्वी)',
          details:
            'शैव और वैष्णव देवी-देवताओं की विशाल नक्काशीदार प्रतिमाओं वाला प्रारंभिक गुफा मंदिर।',
        },
        {
          num: 'गुफा 29',
          name: 'धूमर लेणा',
          dynasty: 'कलचुरी काल (6वीं शताब्दी)',
          details:
            'एलिफेंटा गुफा के समान विशाल क्रॉस विन्यास वाला भव्य शैव तीर्थ स्थल।',
        },
        {
          num: 'गुफा 32',
          name: 'इंद्र सभा',
          dynasty: 'राष्ट्रकूट काल (9वीं शताब्दी)',
          details:
            'द्वितलीय जैन मंदिर, जो अपनी बारीक नक्काशी और तीर्थंकरों की शांत प्रतिमाओं के लिए प्रसिद्ध है।',
        },
      ],
    },
  };

  const current = content[language] || content.en;

  return (
    <div className="p-6 bg-[#151719]/90 border border-[rgba(198,161,91,0.25)] rounded-xs text-[#F3EBDD] space-y-4">
      <div className="flex items-center gap-2 border-b border-[rgba(198,161,91,0.2)] pb-3">
        <Landmark className="w-5 h-5 text-[#C6A15B]" />
        <div>
          <h3 className="font-editorial text-lg font-bold text-[#F3EBDD]">{current.title}</h3>
          <p className="text-xs font-numeric text-[#B8B2A6]">{current.subtitle}</p>
        </div>
      </div>

      <div className="space-y-3">
        {current.caves.map((cave) => (
          <div key={cave.num} className="p-3 bg-[#1C1F21]/80 border border-[rgba(198,161,91,0.15)] rounded-xs">
            <div className="flex items-center justify-between text-xs font-cinzel font-bold text-[#E0C27B] mb-1">
              <span>{cave.num} — {cave.name}</span>
              <span className="text-[10px] text-[#858078] font-numeric">{cave.dynasty}</span>
            </div>
            <p className="text-xs text-[#B8B2A6] leading-relaxed">{cave.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

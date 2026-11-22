import React from 'react';
import { Landmark, Music, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

export const HampiArchitecturalGuide: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Hampi Monumental Architecture Guide',
      subtitle: 'Vijayanagara Empire Capital (UNESCO Ref: 356)',
      monuments: [
        {
          name: 'Vijaya Vittala Temple Complex',
          period: '15th–16th Century CE (King Deva Raya II & Emperor Krishnadevaraya)',
          details:
            'The pinnacle of Vijayanagara Dravidian architecture along the Tungabhadra River. Enclosed within high granite cloistered prakara walls, featuring the Mahamandapa with intricate friezes of horses, yalis, and royal delegations.',
        },
        {
          name: 'Stone Chariot (Garuda Shrine)',
          period: 'c. 1513 CE (Emperor Krishnadevaraya)',
          details:
            'A world-renowned monolithic shrine built on a sculpted granite plinth mimicking an imperial temple car. Features stone wheels that originally turned on axles, elephant guardians, and a brick shikhara superstructure.',
        },
        {
          name: 'Ranga Mantapa (Sa-Re-Ga-Ma Musical Columns)',
          period: 'Early 16th Century CE',
          details:
            '56 monolithic musical pillars clustered around central columns. When struck lightly, each pillar resonates with pure melodic frequencies corresponding to classical Indian saptaswara notes.',
        },
        {
          name: 'Lotus Mahal (Kamal Mahal)',
          period: '16th Century CE (Zenana Enclosure)',
          details:
            'A two-storey palace showcasing a synthesis of Vijayanagara and Islamic architectural elements. Characterized by multi-lobed cusped arches, vaulted ceilings, and decorative stucco ornamentation.',
        },
        {
          name: 'Elephant Stables (Gaja Shala)',
          period: '15th Century CE',
          details:
            'An imposing 11-chambered masonry building designed to house the imperial royal elephants. Features alternating circular, fluted, and ribbed domes resting on robust Islamic arches.',
        },
      ],
    },
    kn: {
      title: 'ಹಂಪಿ ವಾಸ್ತುಶಿಲ್ಪ ಕೈಪಿಡಿ',
      subtitle: 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿ (ಯುನೆಸ್ಕೋ ಸಂಖ್ಯೆ: ೩೫೬)',
      monuments: [
        {
          name: 'ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಸಂಕೀರ್ಣ',
          period: '೧೫–೧೬ನೇ ಶತಮಾನ (ಇಮ್ಮಡಿ ದೇವರಾಯ ಮತ್ತು ಕೃಷ್ಣದೇವರಾಯ)',
          details:
            'ತುಂಗಭದ್ರಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿರುವ ವಿಜಯನಗರ ಶೈಲಿಯ ಅತ್ಯುನ್ನತ ದೇವಾಲಯ. ಭವ್ಯ ಮಹಾಮಂಟಪ, ಕುದುರೆ ಸಾಲುಗಳು ಮತ್ತು ಕಲಾ ಕೆತ್ತನೆಗಳಿಂದ ಕೂಡಿದೆ.',
        },
        {
          name: 'ಕಲ್ಲಿನ ರಥ (ಗರುಡ ಮಂದಿರ)',
          period: 'ಕ್ರಿ.ಶ. ೧೫೧೩ (ಶ್ರೀಕೃಷ್ಣದೇವರಾಯ)',
          details:
            'ಹಂಪಿಯ ಹೆಗ್ಗುರುತಾದ ಏಕಶಿಲಾ ರಥ. ಹಿಂದೆ ತಿರುಗುತ್ತಿದ್ದ ಗ್ರಾನೈಟ್ ಚಕ್ರಗಳು ಮತ್ತು ಆನೆಗಳ ಶಿಲ್ಪವನ್ನು ಹೊಂದಿದೆ.',
        },
        {
          name: 'ರಂಗಮಂಟಪ (ಸಪ್ತಸ್ವರ ಸಂಗೀತ ಕಂಬಗಳು)',
          period: '೧೬ನೇ ಶತಮಾನ',
          details:
            '೫೬ ಸಂಗೀತ ಸ್ತಂಭಗಳು. ತಟ್ಟಿದಾಗ ಭಾರತೀಯ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತದ ಸ ರಿ ಗ ಮ ಪ ದ ನಿ ಸ್ವರಗಳನ್ನು ಹೊರಹೊಮ್ಮಿಸುತ್ತವೆ.',
        },
        {
          name: 'ಕಮಲ ಮಹಲ್ (ಜನಾನಾ ಪ್ರಾಂಗಣ)',
          period: '೧೬ನೇ ಶತಮಾನ',
          details:
            'ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ಶೈಲಿಯ ಎರಡು ಅಂತಸ್ತಿನ ಸುಂದರ ಅರಮನೆ. ಕಮಲದ ಹೂವಿನ ಆಕಾರದ ಸುಂದರ ಕಮಾನುಗಳನ್ನು ಹೊಂದಿದೆ.',
        },
        {
          name: 'ಆನೆ ಲಾಯ (ಗಜ ಶಾಲಾ)',
          period: '೧೫ನೇ ಶತಮಾನ',
          details:
            'ರಾಜಮನೆತನದ ಆನೆಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ೧೧ ಕೋಣೆಗಳುಳ್ಳ ಭವ್ಯ ಕಟ್ಟಡ. ವಿವಿಧ ವಿನ್ಯಾಸದ ಗೋಪುರಗಳನ್ನು ಹೊಂದಿದೆ.',
        },
      ],
    },
    hi: {
      title: 'हम्पी स्मारक स्थापत्य मार्गदर्शिका',
      subtitle: 'विजयनगर साम्राज्य की राजधानी (यूनेस्को सं: 356)',
      monuments: [
        {
          name: 'विजय विट्ठल मंदिर परिसर',
          period: '15वीं–16वीं सदी (राजा देवराय द्वितीय एवं सम्राट कृष्णदेवराय)',
          details:
            'तुंगभद्रा नदी के तट पर द्रविड़ स्थापत्य का सर्वोच्च उदाहरण। नक्काशीदार महामंडप और परकोटे से सुसज्जित।',
        },
        {
          name: 'प्रस्तर रथ (गरुड़ मंदिर)',
          period: 'लगभग 1513 ईस्वी (सम्राट कृष्णदेवराय)',
          details:
            'हम्पी का विश्वप्रसिद्ध एकाश्म रथ। पुष्पीय नक्काशीदार पहियों और गज संरक्षकों से युक्त अनुपम कृति।',
        },
        {
          name: 'रंग मंडप (सारेगामा संगीत स्तंभ)',
          period: '16वीं सदी का आरंभ',
          details:
            '56 संगीत स्तंभ जो मधुर स्वर उत्पन्न करते हैं। भारतीय शास्त्रीय सप्तस्वरों का पाषाण चमत्कार।',
        },
        {
          name: 'कमल महल (जनाना एन्क्लोज़र)',
          period: '16वीं सदी',
          details:
            'इंडो-इस्लामिक शैली का द्वितलीय राजमहल। बहु-मेहराबी बनावट और अलंकृत कंगूरों से सुसज्जित।',
        },
        {
          name: 'हाथी शाला (गज शाला)',
          period: '15वीं सदी',
          details:
            'शाही हाथियों के लिए निर्मित 11 गुंबदों वाला विशाल भवन, जो इंडो-इस्लामिक स्थापत्य की मिसाल है।',
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
        {current.monuments.map((m) => (
          <div key={m.name} className="p-3 bg-[#1C1F21]/80 border border-[rgba(198,161,91,0.15)] rounded-xs">
            <div className="flex items-center justify-between text-xs font-cinzel font-bold text-[#E0C27B] mb-1">
              <span>{m.name}</span>
              <span className="text-[10px] text-[#858078] font-numeric">{m.period}</span>
            </div>
            <p className="text-xs text-[#B8B2A6] leading-relaxed">{m.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Landmark, Compass, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

export const TajMahalArchitecturalGuide: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Taj Mahal Mughal Classical Architecture Guide',
      subtitle: 'UNESCO World Heritage Site (1983, Ref: 252)',
      sections: [
        {
          name: 'Charbagh Paradise Garden & Raised Pool',
          period: '1631–1648 CE (Mughal Emperor Shah Jahan)',
          details:
            'A quadripartite Persian-style paradise garden divided into 16 flowerbeds by intersecting water channels, culminating in the elevated Al Hawd al-Kawthar marble fountain providing the iconic mirror reflection.',
        },
        {
          name: 'White Makrana Marble Plinth & Chameli Farsh',
          period: 'Mughal Engineering Masterwork',
          details:
            'The monumental mausoleum stands upon a double plinth (red sandstone chameli farsh and square white marble base), protecting it from seasonal flooding of the Yamuna River.',
        },
        {
          name: 'The Great Bulbous Dome & Chhatris',
          period: 'Central Spire: 73 meters elevation',
          details:
            'A double-shell bulbous dome crowned by an authentic gilded brass finial combining crescent and trident motifs, flanked by four octagonal domed chhatris providing visual harmony.',
        },
        {
          name: 'Pietra Dura (Parchin Kari) Gemstone Inlays',
          period: 'Florentine & Mughal Lapidary Arts',
          details:
            'Intricate floral scrollwork inlaid with semi-precious stones (lapis lazuli, carnelian, jasper, jade, turquoise, and mother of pearl) flush-fitted into luminous translucent white Makrana marble.',
        },
        {
          name: 'Four Outward-Canted Minarets',
          period: 'Height: 40 meters each',
          details:
            'Engineered with an intentional 2-degree outward inclination so that in the event of a catastrophic earthquake, the towers would collapse away from the central tomb chamber.',
        },
      ],
    },
    kn: {
      title: 'ತಾಜ್ ಮಹಲ್ ಮೊಘಲ್ ವಾಸ್ತುಶಿಲ್ಪ ಮಾರ್ಗದರ್ಶಿ',
      subtitle: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಧಾಮ (೧೯೮೩, ಸಂಖ್ಯೆ: ೨೫೨)',
      sections: [
        {
          name: 'ಚಾರ್‌ಬಾಗ್ ಸ್ವರ್ಗೀಯ ಉದ್ಯಾನ ಹಾಗೂ ಕಾರಂಜಿ',
          period: 'ಕ್ರಿ.ಶ. ೧೬೩೧–೧೬೪೮ (ಮೊಘಲ್ ಚಕ್ರವರ್ತಿ ಷಹಜಹಾನ್)',
          details:
            'ಪರ್ಷಿಯನ್ ಶೈಲಿಯ ನಾಲ್ಕು ಭಾಗಗಳ ಸುಂದರ ಉದ್ಯಾನ. ನೀರಿನ ಕಾಲುವೆಗಳು ಮತ್ತು ಅಲ್ ಹೌದ್ ಅಲ್-ಕೌಸರ್ ಕಾರಂಜಿ ತಾಜ್ ಮಹಲ್‌ನ ಸುಂದರ ಪ್ರತಿಬಿಂಬವನ್ನು ನೀಡುತ್ತವೆ.',
        },
        {
          name: 'ಬಿಳಿ ಮಕ್ರಾನಾ ಅಮೃತಶಿಲೆಯ ಜಗುಲಿ',
          period: 'ಮೊಘಲ್ ವಾಸ್ತು ಎಂಜಿನಿಯರಿಂಗ್',
          details:
            'ಯಮುನಾ ನದಿಯ ಪ್ರವಾಹದಿಂದ ರಕ್ಷಿಸಲು ಕೆಂಪು ಮರಳುಗಲ್ಲು ಹಾಗೂ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಎರಡು ಹಂತಗಳ ಎತ್ತರದ ಜಗುಲಿಯ ಮೇಲೆ ಸಮಾಧಿ ಸೌಧವನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ.',
        },
        {
          name: 'ಭವ್ಯ ಗುಂಬಜ್ ಹಾಗೂ ಛತ್ರಿಗಳು',
          period: 'ಕೇಂದ್ರ ಶಿಖರ: ೭೩ ಮೀಟರ್ ಎತ್ತರ',
          details:
            'ಎರಡು ಪದರಗಳ ಭವ್ಯವಾದ ಗುಂಬಜ್ ಹಾಗೂ ಅದರ ಸುತ್ತಲೂ ಸಮರೂಪತೆಯನ್ನು ನೀಡುವ ನಾಲ್ಕು ಅಷ್ಟಕೋನ ಛತ್ರಿಗಳು.',
        },
        {
          name: 'ಪಿಯೆಟ್ರಾ ಡ್ಯೂರಾ ರತ್ನಖಚಿತ ಕೆತ್ತನೆ',
          period: 'ಅತ್ಯುನ್ನತ ಕೆತ್ತನೆ ಕಲೆ',
          details:
            'ಬಿಳಿ ಅಮೃತಶಿಲೆಯಲ್ಲಿ ಲ್ಯಾಪಿಸ್ ಲಾಜುಲಿ, ಹವಳ, ವೈಡೂರ್ಯ, ಜಾಸ್ಪರ್ ಮುಂತಾದ ಬೆಲೆಬಾಳುವ ರತ್ನಗಳನ್ನು ಬಳಸಿ ಮಾಡಲಾದ ಹೂವಿನ ಕೆತ್ತನೆಗಳು.',
        },
        {
          name: 'ಹೊರಮುಖವಾಗಿ ವಾಲಿದ ನಾಲ್ಕು ಮಿನಾರುಗಳು',
          period: 'ಎತ್ತರ: ತಲಾ ೪೦ ಮೀಟರ್',
          details:
            'ಭೂಕಂಪ ಸಂಭವಿಸಿದಲ್ಲಿ ಮುಖ್ಯ ಸಮಾಧಿಯ ಮೇಲೆ ಬೀಳದಂತೆ, ಸುರಕ್ಷತೆಗಾಗಿ ಹೊರಮುಖವಾಗಿ ಸ್ವಲ್ಪ ವಾಲಿಸಿ ನಿರ್ಮಿಸಲಾದ ಮಿನಾರುಗಳು.',
        },
      ],
    },
    hi: {
      title: 'ताज महल मुगल शास्त्रीय वास्तुकला विवरण',
      subtitle: 'यूनेस्को विश्व धरोहर स्थल (1983, सं: 252)',
      sections: [
        {
          name: 'चारबाग जन्नत उद्यान एवं फव्वारा',
          period: '1631–1648 ईस्वी (मुगल सम्राट शाहजहाँ)',
          details:
            'चार भागों वाला पारसी शैली का जन्नत रूपी बाग। जल नहरों और अल-हौज़ अल-कौसर के संगमरमर ताल से ताजमहल का अद्भुत प्रतिबिंब दिखता है।',
        },
        {
          name: 'श्वेत मकराना संगमरमर चबूतरा',
          period: 'मुगल स्थापत्य कौशल',
          details:
            'यमुना नदी की बाढ़ से सुरक्षित रखने हेतु निर्मित लाल बलुआ पत्थर और श्वेत संगमरमर का विशाल दो मंजिला चबूतरा।',
        },
        {
          name: 'भव्य केंद्रीय गुंबद एवं छतरियाँ',
          period: 'ऊँचाई: 73 मीटर',
          details:
            'दोहरे आवरण वाला विशाल गुंबद, जिसके शीर्ष पर कलश स्थापित है और चारों ओर अष्टकोणीय छतरियाँ सममिति बनाती हैं।',
        },
        {
          name: 'पिएट्रा ड्यूरा (पच्चीकारी) रत्न कला',
          period: 'बहुमूल्य रत्न जड़ित कला',
          details:
            'लाजवर्त, अकीक, मूंगा, और फीरोजा जैसे रत्नों की मकराना संगमरमर में अत्यंत महीन जड़ाई।',
        },
        {
          name: 'बाहर की ओर झुके चार मीनार',
          period: 'ऊँचाई: 40 मीटर प्रत्येक',
          details:
            'भूकंपीय सुरक्षा को ध्यान में रखते हुए मुख्य मक़बरे से बाहर की ओर झुकाकर बनाए गए चार स्वतंत्र मीनार।',
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
        {current.sections.map((s) => (
          <div key={s.name} className="p-3 bg-[#1C1F21]/80 border border-[rgba(198,161,91,0.15)] rounded-xs">
            <div className="flex items-center justify-between text-xs font-cinzel font-bold text-[#E0C27B] mb-1">
              <span>{s.name}</span>
              <span className="text-[10px] text-[#858078] font-numeric">{s.period}</span>
            </div>
            <p className="text-xs text-[#B8B2A6] leading-relaxed">{s.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

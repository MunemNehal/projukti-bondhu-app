// Language Switcher
document.getElementById('englishBtn').addEventListener('click', () => {
  setLanguage('en');
});

document.getElementById('bengaliBtn').addEventListener('click', () => {
  setLanguage('bn');
});

function setLanguage(language) {
  const elements = {
    'app-title': {
      'en': 'Projukti Bondhu - Your Technology Friend',
      'bn': 'প্রযুক্তি বন্ধু - আপনার প্রযুক্তি সাথী'
    },
    'ai-title': {
      'en': 'Agricultural AI - Expert Farmer',
      'bn': 'কৃষি সহায়তা AI - অভিজ্ঞ চাষী'
    },
    'ai-description': {
      'en': 'Get expert advice on farming and agriculture.',
      'bn': 'কৃষি ও চাষের পরামর্শ পান।'
    },
    'marketplace-title': {
      'en': 'Marketplace - Buy and Sell',
      'bn': 'বাজার - কিনুন এবং বিক্রি করুন'
    },
    'marketplace-description': {
      'en': 'Buy and sell crops, animals, and farming tools.',
      'bn': 'ফসল, পশু, এবং কৃষি সরঞ্জাম কিনুন এবং বিক্রি করুন।'
    },
    'weather-title': {
      'en': 'Weather Updates - Stay Updated',
      'bn': 'আবহাওয়ার খবর - সর্বশেষ খবর'
    },
    'weather-description': {
      'en': 'Stay updated with the latest weather conditions.',
      'bn': 'সর্বশেষ আবহাওয়ার খবর পান।'
    },
    'study-title': {
      'en': 'Study and Exams - SSC/HSC',
      'bn': 'শিক্ষা ও পরীক্ষা - এসএসসি/এইচএসসি'
    },
    'study-description': {
      'en': 'Learn through mini-games, practice exams for SSC/HSC.',
      'bn': 'এসএসসি/এইচএসসি পরীক্ষার প্রস্তুতির জন্য মিনি-গেমের মাধ্যমে শিখুন।'
    }
  };

  for (const elementId in elements) {
    document.getElementById(elementId).innerText = elements[elementId][language];
  }
}

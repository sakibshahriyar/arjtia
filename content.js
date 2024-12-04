
const categories = {
  "Religious Attention": {
   "keywords": [
      "পূজা", "ঈদ", "মুর্তি", "মিলাদ", "মাহফিল", "মসজিদ", "মাজার", "সনাতন", 
      "প্রতিমা", "ইসলামি", "ইসলামী", "মণ্ডপ", "সাম্প্রদায়িক", "খ্রিস্টান", "নামাজ", 
      "প্রার্থনা", "পবিত্র", "পূর্ণিমা", "ইজতেমা", "ইসলামবিরোধী", "ধর্মীয়","ধর্ম"
    ]
  },
  "Ethnic Attention": {
    "keywords": [
      "খাগড়াছড়ি", "রাঙ্গামাটি", "বান্দরবন", "পাহাড়", "পাহাড়ী", "পার্বত্য", 
      "সাজেক", "ঝর্ণা", "সেনাশাসন", "ইউপিডিএফ"
    ]
  },
  "Corruption Reports": {
    "keywords": [
      "অর্থ পাচার", "দুর্নীতি", "আত্মসাৎ", "সরকারী টাকা", "সরকারি টাকা", "দুর্নীতি", "দখল","অবৈধ","জব্দ",
      "চোরাই", "লুট", "লোপাট", "দুর্নীতিবাজ", "দুর্নীতিমুক্ত","পাচার","দাম", "বৃদ্ধি","নির্বাচন","দুর্নীতিবাজ","রাজনীতিবিদ","রাজনৈতিক","ক্ষমতা","জালিয়াতি" 
    ]
  },
  "Mob Justice": {
    "keywords": [
       "সন্দেহে হত্যা", "মারধর", "পিটিয়ে হত্যা", "গণপিটুনি", "হত্যাকাণ্ড","মব","গণহত্যা"
    ]
  },
  "Advisor": {
    "keywords": [
      "উপদেষ্টা", "ড. ইউনূস", "প্রধান উপদেষ্টা", "ক্রীড়া উপদেষ্টা", "গণশিক্ষা উপদেষ্টা", 
      "মৎস্য উপদেষ্টা", "পরিবেশ উপদেষ্টা", "রাজনীতিবিদ","সচিব","সরকার","সংস্কার","স্বরাষ্ট্র উপদেষ্টা","তথ্যপ্রযুক্তিউপদেষ্টা","তথ্যপ্রযুক্তিউপদেষ্টা","সংস্কৃতি বিষয়ক উপদেষ্টা","পররাষ্ট্র উপদেষ্টা","খাদ্য উপদেষ্টা","উপদেষ্টা মাহফুজ আলম।","অর্থ উপদেষ্টা","বাণিজ্য উপদেষ্টা","অন্তর্বর্তী সরকার","নৌপরিবহন উপদেষ্টা","তথ্য উপদেষ্টা","সম্পর্ক"
    ]
  },
  "Law and Order": {
    "keywords": [
      "গ্রেফতার", "মামলা", "জরিমানা","শহীদ","খালাস","জবানবন্দি","বন্দি","বন্দী","রিট","কারাগার", "গ্রেপ্তার","হত্যা","আপিল","রিমান্ড","নিষেধাজ্ঞা","বিশেষ","জব্দ","লুটপাট","লাঠিচার্জ","হুমকি","বিচার","গ্রেফতারী", "জেল", "সাজার", "অভিযোগ", "লাঠিচার্জ", "নিষিদ্ধ","বাধ্যতামূলক","প্রত্যাহার","আসামি","আদেশ","বাতিল","অভিযোগ","শেখ হাসিনা","ট্রাইবুনাল","সাবেক মন্ত্রী","সশস্ত্র বাহিনী","আইনি","নোটিশ","সেনাপ্রধান","সংঘর্ষ","গ্রেফতারী" ,"পরোয়ানা","অপহরণ" ,"দুর্ঘটনা","অপরাধী","নিহত","অভিযান","হত্যাচেষ্টা","সংবিধান সংস্কার","সংস্কার কমিশন","লুটপাট","জামিন","পুলিশ কর্মকর্তা","মন্ত্রণালয়","নিরাপত্তা"
  ,"আইনি","পদত্যাগ","খুন","বদলি","পদোন্নতি","চুক্তি","বাতিল","বিস্ফোরণ","অপরাধী","নিষিদ্ধ","সংগঠন","তদন্ত","জরিমানা","জবানবন্দি" ,"বহিষ্কার","মানবপাচার","স্থগিত","মৃত্যুদণ্ড","গণহত্যার" ,"মামলায়","চাকরিচ্যুত","নিষেধাজ্ঞা", "আদেশ", "বাতিল" ,"যৌথবাহিনী "]
  },
  "July Movement and Injured People Status": {
    "keywords": [
      "গণ-অভ্যুত্থান","শহীদ","বৈষম্যবিরোধী","জুলাই","বিপ্লব","আন্দোলন","ছাত্র-জনতা","চিকিৎসা","আবু সাঈদ","মুগ্ধ","শহীদ","ফাউন্ডেশন","জুলাই স্মৃতি ফাউন্ডেশন"
    ]
  },
  "Financial/Economic Progress": {
    "keywords": [
      "আয়", "রিজার্ভ", "রেমিটেন্স", "অর্থ", "ফাউন্ডেশন", "ডলার","আর্থিক","রপ্তানি","সূচক","মূদাস্ফিতি"
    ]
  },
  "Movement": {
    "keywords": [
      "আন্দোলন", "মিছিল", "সমাবেশ", "অবরোধ", "বিক্ষোভ","মানববন্ধন","ভাঙচুর","বিক্ষোভ","সভা","সড়ক","অবস্থান","আন্দোলন","অবরোধ"
    ]
  },
  "Public Opinion": {

    "keywords": [
      "মন্তব্য", "মতামত", "জনমত","অটোরিকশা","আলু","ডিম","শীতকালীন সবজি","দ্রব্যমূল্য","কাঁচাবাজার"
    ]
  },
  "Public Expectations from Government": {
    "keywords": [
      "দাবী", "সুপারিশ", "মন্তব্য", "প্রতিবাদ", "দাবি", "ফাউন্ডেশন"
    ]
  }
};

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function extractNameFromURL(url) {
  try {
    const hostname = new URL(url).hostname; // Extract hostname from the URL
    const parts = hostname.split('.'); // Split hostname into parts

    // If the domain has three parts (e.g., bangla.thedailystar.net), combine the first two parts
    if (parts.length > 2) {
      return `${parts[0]}${parts[1]}`;
    }

    // Otherwise, take the first part of the domain
    return parts[0];
  } catch (error) {
    console.warn("Invalid URL:", url);
    return "unknown";
  }
}


function logKeywords(category) {
  console.log(`Loaded Keywords for ${category}:`, categories[category]?.keywords || []);
}

function fetchTitles(category) {
  const links = document.querySelectorAll('a');
  if (links.length === 0) {
    console.warn("No links found on the current page.");
    return;
  }

  logKeywords(category);

  const seenTitles = new Set();
  const seenLinks = new Set();
  const matchedTitles = [];
  const currentDate = getCurrentDate();

  links.forEach((link) => {
    const text = link.textContent.trim();
    const href = link.href;

    if (
      categories[category]?.keywords.some((keyword) => text.includes(keyword)) &&
      !seenTitles.has(text) &&
      !seenLinks.has(href)
    ) {
      const name = extractNameFromURL(href);
      matchedTitles.push({ Title: text, Link: href, Date: currentDate, Name: name });
      seenTitles.add(text);
      seenLinks.add(href);
    }
  });

  if (matchedTitles.length > 0) {
    console.log("Matched Titles (Duplicates Removed):", matchedTitles);
    saveResultsToStorage(matchedTitles, category);
  } else {
    console.log("No matching titles found for the selected category.");
  }
}

function saveResultsToStorage(matchedTitles, category) {
  const resultsKey = `${category}_results`;
  chrome.storage.local.get([resultsKey], (result) => {
    const existingResults = result[resultsKey] || [];
    const combinedResults = [...existingResults, ...matchedTitles];

    const uniqueResults = combinedResults.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.Title === item.Title && t.Link === item.Link && t.Date === item.Date)
    );

    chrome.storage.local.set({ [resultsKey]: uniqueResults }, () => {
      console.log(`Updated results for ${category} saved to storage.`);
    });
  });
}

// Listen for messages from popup.js or the scheduler
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'filterTitles' || request.action === 'autoScrape') {
    if (request.category === 'all' || !request.category) {
      console.log('Scraping for all categories...');
      Object.keys(categories).forEach((category) => {
        console.log(`Scraping category: ${category}`);
        fetchTitles(category);
      });
    } else {
      const category = request.category;
      console.log(`Scraping for category: ${category}`);
      fetchTitles(category);
    }
  }
});

document.getElementById('categorySelect').addEventListener('change', function() {
  const selectedCategory = this.value;
  console.log('Selected Category:', selectedCategory);
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'filterTitles', category: selectedCategory });
  });
});

document.getElementById('viewResults').addEventListener('click', () => {
  const selectedCategory = document.getElementById('categorySelect').value;
  const resultsKey = `${selectedCategory}_results`;
  chrome.storage.local.get([resultsKey], (result) => {
    if (result[resultsKey]) {
      console.log(`Results for ${selectedCategory}:`, result[resultsKey]);
    } else {
      console.log(`No results found for ${selectedCategory}.`);
    }
  });
});

document.getElementById('exportAllResults').addEventListener('click', () => {
  chrome.storage.local.get(null, (allResults) => {
    const blob = new Blob([JSON.stringify(allResults, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `all_results.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('Exported all results.');
  });
});

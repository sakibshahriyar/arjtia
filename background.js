// Listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm named 'scraperScheduler' to trigger every 2 minutes after an initial delay of 1 minute
  chrome.alarms.create('scraperScheduler', { delayInMinutes: 1, periodInMinutes: 2 });
  console.log("Alarm 'scraperScheduler' has been set up to run every 2 minutes.");
});

// Listener for alarm events
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'scraperScheduler') {
    console.log(`Alarm '${alarm.name}' triggered at ${new Date().toISOString()}.`);
    
    // Query the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].id) {
        const activeTabId = tabs[0].id;
        console.log(`Sending 'autoScrape' action to active tab ID: ${activeTabId}`);

        // Send a message to the active tab's content script
        chrome.tabs.sendMessage(activeTabId, { action: 'autoScrape' });
      } else {
        console.warn("No active tab found to send the message.");
      }
    });
  }
});

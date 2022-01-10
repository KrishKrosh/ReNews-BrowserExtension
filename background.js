let color = '#FFFFFF';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
       sendServiceRequest(response.data);
    });
  });
  
  function sendServiceRequest(selectedText) {
    var serviceCall = 'http://www.google.com/search?q=' + selectedText;
    chrome.tabs.create({url: serviceCall});
  }
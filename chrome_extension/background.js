chrome.runtime.onInstalled.addListener(function() {
  fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => console.log("Loaded css selector lib"))


    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});

fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
  .then(response => response.text())
  .then(text => eval(text))
  .then(() => {console.log("Loaded css generator")});


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelection")
  {
      let my_selector_generator = new CssSelectorGenerator;
      let selection = window.getSelection();
      console.log("Selection: ", selection)
      if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        if (range) {
          containerElement = range.commonAncestorContainer;
          if (containerElement.nodeType != 1)
          {
            containerElement = containerElement.parentNode
          }
          console.log("Element: ", containerElement);
          let selector = my_selector_generator.getSelector(containerElement);
          console.log("Resp: ", JSON.stringify({selector: selector, url: window.location.href}));
          sendResponse({selection_found: true,selector: selector, url: window.location.href})
        }
        else {
          sendResponse({selection_found:false})
        }
      }
      else {
        sendResponse({selection_found:false})
      }
  }
  else
    sendResponse({}); // snub them.
});

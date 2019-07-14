fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
  .then(response => response.text())
  .then(text => eval(text))
  .then(() => {console.log("Loaded css generator")});


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  response = {}
  if (request.method == "getSelection")
  {
      let my_selector_generator = new CssSelectorGenerator;
      let selection = window.getSelection();
      console.log("Selection: ", selection)
      if (selection.rangeCount > 0 && selection.type === 'Range') {
        let range = selection.getRangeAt(0);
        if (range != undefined) {
          containerElement = range.commonAncestorContainer;
          if (containerElement.nodeType != 1)
          {
            containerElement = containerElement.parentNode
          }
          console.log("Element: ", containerElement);
          let selector = my_selector_generator.getSelector(containerElement);
          response = {selection_found: true,selector: selector, url: window.location.href}
          console.log("Resp: ", JSON.stringify(response));
          sendResponse(response)
        }
        else {
          response = {selection_found:false}
          console.log("Resp else 1: ", JSON.stringify(response));

          sendResponse(response)
        }
      }
      else {
        console.log("Resp else 2: ", JSON.stringify(response));

        sendResponse(response)
      }
  }
  else{
    console.log("Send Empty response")
    sendResponse(response); // snub them.
  }

});

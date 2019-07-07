chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(selection){
      fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
        .then(response => response.text())
        .then(text => eval(text))
        .then((selectionResp) => {
          console.log("Loaded css selector")
          let my_selector_generator = new CssSelectorGenerator;
          console.log("Selection: ", selectionResp)
          let selection = selectionResp.data
          if (selection.rangeCount < 0) {
            return;
          }
          let range = selection.getRangeAt(0);
          if (!range) {
            return;
          }
          containerElement = range.commonAncestorContainer;
          if (containerElement.nodeType != 1)
          {
            containerElement = containerElement.parentNode
          }
          console.log("Element: ", containerElement);
          let selector = my_selector_generator.getSelector(containerElement);
          console.log("Selector: ", selector);
          // Send selector to the server
          document.getElementById('text').innerHTML = selector
          // text.innerHTML = response.data;
          // on response show a url in the text box
        })
    })
});

function runCode(currentWindow) {
  fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => {
      console.log("Loaded css selector")
      let my_selector_generator = new CssSelectorGenerator;
      let selection = currentWindow.getSelection();
      if (selection.rangeCount < 0) {
        return;
      }
      let range = selection.getRangeAt(0);
      if (!range) {
        return;
      }
      containerElement = range.commonAncestorContainer;
      if (containerElement.nodeType != 1)
      {
        containerElement = containerElement.parentNode
      }
      console.log("Element: ", containerElement);
      let selector = my_selector_generator.getSelector(containerElement);
      console.log("Selector: ", selector);
      // Send selector to the server

      // on response show a url in the text box
    })
}

// fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
//   .then(response => response.text())
//   .then(text => eval(text))
//   .then(() => {
//
//     console.log("We did it!")
//     let my_selector_generator = new CssSelectorGenerator;
//     let selection = window.getSelection();
//     if (selection.rangeCount < 0) {
//       return;
//     }
//     let range = selection.getRangeAt(0);
//     if (!range) {
//       return;
//     }
//     containerElement = range.commonAncestorContainer;
//     if (containerElement.nodeType != 1)
//     {
//       containerElement = containerElement.parentNode
//     }
//     console.log("Element: ", containerElement);
//     let selector = my_selector_generator.getSelector(containerElement);
//     console.log("Selector: ", selector);
//     // given the css selector path, find the element in the DOM tree
//     let targetElement = document.querySelector(selector);
//     targetElement.scrollIntoView();
//     console.log("Found Element: ", targetElement);
//   })

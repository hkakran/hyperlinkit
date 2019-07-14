chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
      console.log("Response: ", JSON.stringify(response));
      if (response.selection_found) {
        fetch('https://wonder-ebi.begin.app/api/cats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({selector:response.selector, url:response.url})
        })
        .then(resp => {
            console.log("Response:", resp)
            url = "https://wonder-ebi.begin.app/api/cats/" + resp.key
            document.getElementById('text').innerHTML = url
          })
      }
      else
      {
          document.getElementById('text').innerHTML = "Nothing Selected."
      }

    })
});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//   chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: 'window.getSelection();'},
//       function(selection){
//         fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
//           .then(response => response.text())
//           .then(text => eval(text))
//           .then((selection) => {
//             console.log("Loaded css selector")
//             let my_selector_generator = new CssSelectorGenerator;
//             console.log("Selection: ", selection)
//             if (selection.rangeCount < 0) {
//               return;
//             }
//             let range = selection.getRangeAt(0);
//             if (!range) {
//               return;
//             }
//             containerElement = range.commonAncestorContainer;
//             if (containerElement.nodeType != 1)
//             {
//               containerElement = containerElement.parentNode
//             }
//             console.log("Element: ", containerElement);
//             let selector = my_selector_generator.getSelector(containerElement);
//             console.log("Selector: ", selector);
//             // Send selector to the server
//             document.getElementById('text').innerHTML = selector
//             // text.innerHTML = response.data;
//             // on response show a url in the text box
//           })
//       }
//     );
//   });

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //   chrome.tabs.executeScript(
  //       tabs[0].id,
  //       {code:  'console.log("I am here 1") \
  //           let my_selector_generator = new CssSelectorGenerator; \
  //           console.log("I am here 2") \
  //           let selection = window.getSelection(); \
  //           console.log("I am here 3")  \
  //           console.log("Selection: ", selection); \
  //           console.log("I am here 4") \
  //           '
  //       },
  //       function(selector) {
  //         document.getElementById('text').innerHTML = JSON.stringify(selector)
  //       }
  //     );
  //   });


  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //   chrome.tabs.executeScript(
  //       tabs[0].id,
  //       {code:  'window.getSelection().toString();'},
  //       function(selection){
  //         document.getElementById('text').innerHTML = selection
  //       }
  //     );
  //   });

// function runCode() {
//   return "fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js') \
//     .then(response => response.text()) \
//     .then(text => eval(text))  \
//     .then(() => { \
//       let my_selector_generator = new CssSelectorGenerator; \
//       let selection = window.getSelection(); \
//       if (selection.rangeCount < 0) { \
//         return; \
//       } \
//       let range = selection.getRangeAt(0); \
//       if (!range) { \
//         return; \
//       } \
//       containerElement = range.commonAncestorContainer; \
//       if (containerElement.nodeType != 1) \
//       { \
//         containerElement = containerElement.parentNode \
//       } \
//       let selector = my_selector_generator.getSelector(containerElement); \
//     })\";
// }

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

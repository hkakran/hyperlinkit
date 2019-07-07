fetch('https://raw.githubusercontent.com/fczbkk/css-selector-generator/master/build/css-selector-generator.min.js')
  .then(response => response.text())
  .then(text => eval(text))
  .then(() => {
    console.log("Loaded css selector")
    let my_selector_generator = new CssSelectorGenerator;
    let selection = window.getSelection();
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

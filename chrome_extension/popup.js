function onExecuted(result) {
  console.log("Result:", result)
  response = result[0]
  console.log("Response: ", JSON.stringify(response));
  if (!response) {
    return;
  }
  let url = 'http://localhost:3333/api/cats'; //'https://wonder-ebi.begin.app/api/cats'
  if (response.selection_found) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({selector:response.selector, url:response.url})
    })
    .then(resp => resp.json())
    .then (resp => {
        console.log("Response:", resp)
        url = url+ "/" + resp.key
        document.getElementById('text').innerHTML = url
      })
  }
  else
  {
      document.getElementById('text').innerHTML = "Nothing Selected."
  }
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
  tabs[0].Id,
  {
      file:"/selection.js",
      allFrames: false
  },
  onExecuted);
});

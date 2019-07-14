console.log("HERE")
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
      console.log("Response: ", JSON.stringify(response));
      if (response.selection_found) {
        let baseUrl =  'http://localhost:3333/' //'https://wonder-ebi.begin.app/'
        fetch(baseUrl + 'api/cats', {
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
            url = baseUrl + "api/cats/" + resp.key
            document.getElementById('text').innerHTML = url
          })
      }
      else
      {
          document.getElementById('text').innerHTML = "Nothing Selected."
      }

    })
});

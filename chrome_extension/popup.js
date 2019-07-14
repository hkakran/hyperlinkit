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

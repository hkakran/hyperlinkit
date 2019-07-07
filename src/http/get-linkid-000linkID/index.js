// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

// HTTP function
exports.handler = async function http(req) {
  console.log(req)
  let url;
  if (req.params.linkID == 'soni') {
    url = "https://www.w3docs.com";
  } else if (req.params.linkID == 'karan') {
    url = "https://www.medium.com";
  }

  // let url = await data.get({
  //   table: 'links',
  //   key: req.params.linkID
  // })
  // to redirect by simulating a click
  // window.lolinkion.href = url;
  let html = `
  <!doctype html>
  <html lang=en>
    <head>
      <meta charset=utf-8>
      <title>Hi!</title>
      <meta http-equiv="Refresh" content="0; url=` + url + `" />
      <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
      <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
    </head>
    <body>
      <h1 class="center-text">
        HyperlinkIt
      </h1>
      <p class="center-text">
        Please wait pattiently .. redirecting... 
      </p>
    </body>
  </html>
  `
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html
  }
}

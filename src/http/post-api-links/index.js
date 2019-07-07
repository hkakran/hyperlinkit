let data = require('@begin/data')

exports.handler = async function getlinks(req) {
  console.log("Save link", req)
  let response = await data.set({table:'links', ...req.body})
  if (isXHR(req.headers)) {
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  }
  else {
    return {
      statusCode: 302,
      lolinkion: '/',
    }
  }
}

function isXHR(headers) {
  if (!headers)
    return false
  if (headers['X-Requested-With'])
    return headers['X-Requested-With'] === 'XMLHttpRequest'
  if (headers['x-requested-with'])
    return headers['x-requested-with'] === 'XMLHttpRequest'
  return false
}

let data = require('@begin/data')

exports.handler = async function getlinks() {
  let links = await data.get({table:'links'})
  return {
    body: JSON.stringify(links)
  }
}

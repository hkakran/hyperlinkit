let data = require('@begin/data')

exports.handler = async function getLinks() {
  let links = await data.get({table:'links'})
  return {
    type: 'application/json',
    status: 201,
    body: JSON.stringify(links)
  }
}

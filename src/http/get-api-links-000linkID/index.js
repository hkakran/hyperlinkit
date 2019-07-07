let data = require('@begin/data')

exports.handler = async function getlinks(req) {
  let link = await data.get({
    table: 'links',
    key: req.params.linkID
  })
  return {
    body: JSON.stringify(link)
  }
}

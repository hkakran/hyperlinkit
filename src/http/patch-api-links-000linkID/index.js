let data = require('@begin/data')

exports.handler = async function getlinks(req) {
  await data.set({
    table: 'links',
    ...req.body,
  })
  return {
    statusCode: 201
  }
}

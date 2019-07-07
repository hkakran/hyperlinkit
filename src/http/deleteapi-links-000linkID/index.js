let data = require('@begin/data')

exports.handler = async function destroy(req) {
  await data.destroy({
    table: 'links',
    key: req.params.linkID
  })
  return {statusCode: 201}
}

let data = require('@begin/data')

exports.handler = async function getCats(req) {
  // <meta http-equiv="Refresh" content="5; url=https://www.w3docs.com" />
  // window.location.href = "https://www.w3docs.com";
  if (req.params.linkID == 'soni') {
    window.location.href = "https://www.w3docs.com";
  } else if (req.params.linkID == 'karan') {
    window.location.href = "https://www.medium.com";
  }
  // let cat = await data.get({
  //   table: 'cats',
  //   key: req.params.catID
  // })
  // return {
  //   body: JSON.stringify(cat)
  // }
}

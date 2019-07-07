let headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

async function create(link) {
  console.log('create', link)
  let response = await fetch('/api/links', {
    method: 'post',
    body: JSON.stringify(link),
    headers
  })
  console.log(response);
}

async function read(linkID) {
  console.log('read', linkID)
  let url = linkID? `/api/links/${linkID}` : '/api/links'
  let result = await fetch(url)
  return await result.json()
}

async function update(link) {
  console.log('update', link)
  await fetch(`/api/links/${link.key}`, {
    method: 'patch',
    body: JSON.stringify(link),
    headers
  })
}

async function destroy(linkID) {
  console.log('destroy', linkID)
  await fetch(`/api/links/${linkID}`, {
    method: 'delete',
    headers 
  })
}

export default {create, read, update, destroy}
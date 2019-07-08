@app
hyperlinkit

@http
get /
get /api/links
post /api/links
get /api/links/:linkID
delete /api/links/:linkID
get /link/:linkID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

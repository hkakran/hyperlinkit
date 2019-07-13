@app
design-8er

@http
get /
get /api/links
post /api/links
get /api/links/:linkID
delete /api/links/:linkID
get /link/:linkID
get /tests/links

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

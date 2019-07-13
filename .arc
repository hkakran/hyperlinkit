@app
design-8er

@http
get /
post /api/links
get /api/links/:linkID
delete /api/links/:linkID
get /link/:linkID
get /api/links

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

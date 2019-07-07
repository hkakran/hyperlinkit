@app
design-8er

@http
get /
get /api/links
get /api/links/:linkID
post /api/links
patch /api/links/:linkID
delete /api/links/:linkID
get /linkid/:linkID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

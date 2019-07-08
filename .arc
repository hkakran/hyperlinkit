@app
design-8er

@http
get /
get /api/links
post /api/links
get /api/links/:linkID
delete /api/links/:linkID
get /link/:linkID

@static
staging hk-design-8er-stage-bukkit
production hk-design-8er-prod-bukkit

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

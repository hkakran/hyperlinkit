@app
design-8er

@http
get /
patch /api/cats/:catID
delete /api/cats/:catID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

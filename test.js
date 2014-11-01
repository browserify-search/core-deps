var coreDeps = require('./index')
var path = require('path')


coreDeps('index.js', function(err, coreDeps){
  if (err) return console.error(err.message)
  console.log(coreDeps)
})
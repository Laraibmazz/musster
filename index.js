var express = require('express')

app = express()

app.get('/', function(req,res) {
  res.send('Heelo')
})

app.use('/indx', express.static('dist'))

app.listen(process.env.PORT || 3000)
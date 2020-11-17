var express = require('express')
app = express()

app.use('/test/:id', function (req, res) {
  res.send(`{"test": ${req.params.id}}`)
})

app.use('/', express.static('dist'))
app.use('/media', express.static('public/media'))
app.use('/css', express.static('dist/css'))
app.use('/js', express.static('dist/js'))
app.use('/img', express.static('dist/img'))

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app running at port: ${process.env.PORT || 3000}
  `)
})
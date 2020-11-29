var express = require('express')
const fileUpload = require('express-fileupload');

app = express()
app.use(fileUpload());

app.use('/test/:id', function (req, res) {
  res.send(`{"test": ${req.params.id}}`)
})

app.use('/upload', (req, res) => {
  a = req.params;
  res.send(`<script>console.log('${a}');</script>`)
  music = req.files.file;
  sampleFile.mv(`./public/media/${media}.mp3`, function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

});

app.use('/', express.static('dist'))
app.use('/media', express.static('public/media'))
app.use('/css', express.static('dist/css'))
app.use('/js', express.static('dist/js'))
app.use('/img', express.static('dist/img'))

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app running at port: ${process.env.PORT || 3000}`)
})
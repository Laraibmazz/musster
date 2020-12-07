var express = require('express')
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
const shortid = require('shortid');
var cors = require('cors')

const uri = "mongodb+srv://rrr:Devel166x6@cluster0.keh3e.gcp.mongodb.net/"
const dbName = 'musster';

app = express()
app.use(fileUpload());
app.use(cors());

app.get('/test/:id', function (req, res) {
  res.send(`{"test": ${req.params.id}}`)
})

app.post('/upload', (req, res) => {
  console.log()
  if (req.files == undefined) {
    res.sendStatus(403);
  } else {
    MongoClient.connect(uri, (err, client) => {
      const db = client.db(dbName);
      db.collection('songs').insertOne({
        id: shortid.generate(),
        track: req.body.title,
        singer: req.body.Singer
      })
    });
    sampleFile = req.files.file;
    sampleFile.mv(`./public/media/${req.files.file.name}.mp3`, function (err) {
      if (err)
        return res.status(500).send(err);
      res.send('File uploaded!');
    });
  }
});

app.get("/api/songs", cors(),  (req,res) => {
  var t = [];
  MongoClient.connect(uri, (err, client) => {
    const db = client.db(dbName);
    var cursor = db.collection('songs').find({})
    function iterateFunc(doc) {
      console.log(doc)
      t.push(doc)
   }
   cursor.forEach(iterateFunc, function() {
     res.send(t)
   });
  });
})

app.get("/api/song/:id", cors(),  (req,res) => {
  var t = [];
  MongoClient.connect(uri, (err, client) => {
    const db = client.db(dbName);
    var cursor = db.collection('songs').find({id: req.params.id})
    function iterateFunc(doc) {
      console.log(doc)
      t.push(doc)
   }
   cursor.forEach(iterateFunc, function() {
     res.send(t)
   });
  });
})

app.use('/', express.static('dist'))
app.use('/media', express.static('public/media'))
app.use('/css', express.static('dist/css'))
app.use('/js', express.static('dist/js'))
app.use('/img', express.static('dist/img'))

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app running at port: ${process.env.PORT || 3000}`)
})
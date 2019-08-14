const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());

const cors = require('cors');
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
 .then((client) => {
   const db = client.db('guests');
   const guestbookCollection = db.collection('guestbook');
   const guestbookRouter = createRouter(guestbookCollection);
   app.use('/api/guestbook', guestbookRouter);
 })
 .catch(console.err);
 
app.listen(3000, function () {
 console.log(`Listening on port ${ this.address().port }`);
});

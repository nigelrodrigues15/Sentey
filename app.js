const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const _twitter = require('twitter');
const keys = require('./keys');
// import {consumer_key, consumer_secret, bearer_token} from './keys';
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// create route to get single book by its isbn
// app.get('/books/:isbn', (request, response) => {
// make api call using fetch
// fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
// .then((response) => {
//     return response.text();
// }).then((body) => {
//     let results = JSON.parse(body)
//     console.log(results)   // logs to server
//     response.send(results) // sends to frontend
//   });
// });
const twitter = new _twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  bearer_token: keys.bearer_token
});
// create a search route
app.get('/search', (request, appResponse) => {
  // let p = new Promise((resolve, reject) => {
  // debugger
  twitter.get('search/tweets', {q: `${request.query.match_params}`, count: 100}, function(error, tweets, twitterResponse) {
    let b = appResponse;
    // debugger
    appResponse.send(tweets);
  });
  // });
  // return p;
});
// .then((body) => {
//   let results = JSON.parse(body);
//   console.log(results);
//   response.send(results);
// });

// {
//     "token_type": "bearer",
//     "access_token": "AAAAAAAAAAAAAAAAAAAAAKGQ8AAAAAAAzyO9xn2N1GPT2HiQRmjG1Hr3vtk%3DVBR4MFHNKRKkbc37FOQ5eVcqyNyIRXpeKek5f1zV3KyXzlYYj1"
// }

twitter.get('search/tweets', {q: '#foodie'}, function(error, tweets, response) {
  console.log(tweets);
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});

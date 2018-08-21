const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const _twitter = require('twitter');
const keys = require('./keys');
const MeaningCloud = require('meaning-cloud');
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const twitter = new _twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  bearer_token: keys.bearer_token
});
// create a twitter search route
app.get('/search/keyword', (request, appResponse) => {
  // let p = new Promise((resolve, reject) => {
    twitter.get('search/tweets', {q: `${request.query.match_params}`, count: 10, lang: 'en'}, function(error, tweets, twitterResponse) {
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

// create a analysis route
app.get('/analysis', (request, appResponse) => {
  const meaning = MeaningCloud({
    key: 'd2e78b07ec9970246fa928d905a24224',
    endpoints: {
      user_profiling          : '/userprofiling-2.0',
      text_classification     : '/class-1.1',
      topics_extraction       : '/topics-1.2',
      sentiment_analysis      : '/sentiment-2.0',
      language_identification : '/lang-1.1',
      parsing                 : '/parser-1.2',
      spelling                : '/stilus-1.2',
      reputation              : '/reputation-1.0'
    }
  });
  appResponse.send(meaning);
  });

    app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
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

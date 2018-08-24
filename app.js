const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const _twitter = require("twitter");
const keys = require("./keys");
const bodyParser = require("body-parser");
const axios = require("axios");
const language = require("@google-cloud/language");
// const MeaningCloud = require('meaning-cloud');
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const twitter = new _twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  bearer_token: process.env.bearer_token
});

const client = new language.LanguageServiceClient();
// create a twitter search route
app.get("/search/keyword", (request, appResponse) => {
  // let p = new Promise((resolve, reject) => {
  twitter.get(
    "search/tweets",
    { q: `${request.query.match_params}`, count: 50, lang: "en" },
    function(error, tweets, twitterResponse) {
      appResponse.send(tweets);
    }
  );
  // });
  // return p;
});

// Sentiment
app.post("/analysis", (request, appResponse) => {
// let p = new Promise((resolve, reject) => {
const document = {
  content: request.body.text,
  type: 'PLAIN_TEXT',
};
client
  .analyzeSentiment({ document: document })
  .then(results => {
    const sentiment = results[0].documentSentiment;
    console.log(`Text: ${request.body.text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    appResponse.send(sentiment);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
// });
// return p;
});

// .then((body) => {
//   let results = JSON.parse(body);
//   console.log(results);
//   response.send(results);
// });

// app.post("/analysis", (request, appResponse) => {
//   axios
//     .post(`https://api.meaningcloud.com/topics-2.0`, {
//       key: "d2e78b07ec9970246fa928d905a24224",
//       model: "IAB",
//       txt:
//         "Stuffed courgette flower finished with a herb oil & grated black truffle 🌼 Fancy a DISCOUNT? Dine with us using our Midweek Dining vouchers - see pinned tweet for vouchers, ends 31st of August. #FineDining #StAlbans #Foodie #Plating #Offer"
//     })
//     .then(resp => {
//       console.log(resp);
//     });
//   appResponse.send(request);
// });

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

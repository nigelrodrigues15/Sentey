// const axios = require('axios');
import axios from "axios";
// const wordChart = require('./wordCloud');
import { postFreq } from "./wordCloud";
import { handleTweets } from "./tweets";
import { handleSentiment } from "./sentiment";
document.addEventListener("DOMContentLoaded", () => {

  let posts;
  const twitterPosts = query => {
    axios
      .get(`/search/keyword?match_params=${query}`)
      .then(response => {
        console.log(response.data.statuses);
        posts = response.data.statuses;
        postFreq(posts);
        handleTweets(posts);
        handleSentiment(posts);
        // wordChart.postFreq(posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $(".submit").click(() => twitterPosts($(".filter").val()));

  const analysis = text => {
    axios
      .post(`/analysis`, {
        text: text
      })
      .then(response => {
        sentiment;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  window.twitterPosts = twitterPosts;
  window.analysis = analysis;
  // window.postFreq = postFreq;
});

// const axios = require('axios');
import axios from "axios";
// const wordChart = require('./wordCloud');
import { postFreq } from "./wordCloud";
document.addEventListener("DOMContentLoaded", () => {

  let posts;
  const twitterPosts = query => {
    axios
      .get(`/search/keyword?match_params=${query}`)
      .then(response => {
        console.log(response.data.statuses);
        postFreq(response.data.statuses);
        // wordChart.postFreq(posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  let $filter = $(".filter").val();
  // $(".submit").click(() => getTweets($filter, ".tweets"));

  // const getTweets =($filter, element) {
  //   posts = twitterPosts($filter);
  //   posts.forEach((el) => {
  //     $(element).append(el.text);
  //   });
  // }

  const analysis = text => {
    axios
      .post(`/analysis`, {
        text: text
      })
      .then(response => {
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

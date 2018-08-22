// const axios = require('axios');
import axios from 'axios';
// import { postFreq } from './wordCloud';
document.addEventListener('DOMContentLoaded', () => {
  //
  // let isbn = '0201558025';
  // axios.get(`/books/${isbn}`)
  // .then((response) => {
  //     console.log(response);
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });
  //

  let posts;
  const twitterPosts = (query) => {
    axios.get(`/search/keyword?match_params=${query}`)
    .then((response) => {
      console.log(response);
      posts = response.data.statuses;
      // postFreq(posts);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const analysis = (text) => {
    axios.post(`/analysis`, {
      text: text
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  window.twitterPosts = twitterPosts;
  window.analysis = analysis;
  // window.postFreq = postFreq;
});

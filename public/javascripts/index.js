// const axios = require('axios');
import axios from 'axios';

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
  const twitterPosts = (query) => {
    axios.get(`/search/keyword?match_params=${query}`)
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const analysis = () => {
    axios.post(`/analysis`, {post: "i like to play sports and eat icecream"})
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  window.twitterPosts = twitterPosts;
  window.analysis = analysis;
});

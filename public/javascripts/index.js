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
  const test = () => {
    let query = "food";
    // debugger
    axios.get(`/search/keyword?match_params=${query}`)
    .then((response) => {
      console.log(response);
      // debugger
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  window.test = test;
  test();
});

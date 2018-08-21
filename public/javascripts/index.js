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
    let query = "#foodie";
    // debugger
    axios.get(`/search?match_params=trump`)
    .then((response) => {
      console.log(response);
      // debugger
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  window.test = test;
  window.test2 = 5;


});

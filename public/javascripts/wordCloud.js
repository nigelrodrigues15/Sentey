export const postFreq = function(posts) {
  let freq = {};
  let data = [];
  let filler = [
    "a",
    "is",
    "the",
    "am",
    "of",
    "for",
    "in",
    "by",
    "on",
    "to",
    "he",
    "she",
    "him",
    "his",
    "her",
    "i",
    "i'm",
    "https"
  ];
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i].text.split(" ");
    // console.log(post)
    for (let j = 0; j < post.length; j++) {
      let word = post[j];
      if (!filler.includes(word.toLowerCase())) {
        freq[word] = freq[word] || 0;
        freq[word]++;
      }
    }
  }
  for (let k = 0; k < Object.keys(freq).length; k++) {
    let keys = Object.keys(freq);
    // && freq[keys[k]] > 1
    if (keys[k].length > 3 && freq[keys[k]] > 1) {
      data.push({
        name: keys[k],
        value: freq[keys[k]]
      });
    }
  }
  console.log(data);
  createChart(data);
  return data;
};

const echarts = require("echarts");
require("echarts-wordcloud");

// document.addEventListener("DOMContentLoaded", () => {
export const createChart = function(data) {
  const chart = echarts.init(document.getElementById("charts"));
  const maskImage = new Image();
  const option = {
    tooltip: {},
    series: [
      {
        type: "wordCloud",
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: "pentagon",
        // width: 700,
        // height: 400,
        // maskImage: maskImage,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            color: function() {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(",") +
                ")"
              );
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "#333"
          }
        },
        data: data
      }
    ]
  };

//   maskImage.onload = function() {
    // option.series[0].maskImage;
    chart.setOption(option);
//   };
    // maskImage.src = "./TwitterLogo.png";

  console.log(maskImage);
  window.onresize = function() {
    chart.resize();
  };

  //   chart.setOption(option);
  //   window.onresize = chart.resize;
};
// });

// define(function (require, exports, module){

// module.exports ={
//     postFreq: function(posts) {
//         let freq = {};
//         let data = [];
//         let filler = ["a", "is", "the", "am", "of", "for", "in"];
//         for (let i = 0; i < posts.length; i++) {
//             let post = posts[i].text;
//             for (let j = 0; j < post.length; j++) {
//                 let word = post[j];
//                 if (!filler.includes(word)) {
//                     freq[word] = freq[word] || 0;
//                     freq[word]++;
//                 }
//             }
//         }
//         for (let k = 0; k < Object.keys(freq); k++) {
//             let keys = Object.keys(freq);
//             data.push({
//                 name: keys[k],
//                 value: freq[keys[k]]
//             })
//         }
//         console.log(data);
//         return data;
//     }
// };
// });

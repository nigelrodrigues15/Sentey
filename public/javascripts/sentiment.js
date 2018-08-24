import axios from "axios";
// import {ldBar} from "../loading-bar";

export const handleSentiment = function(posts) {
  let sentiment = [];
  for (let i = 1; i < posts.length; i++) {
    let text = posts[i].text;
    axios
      .post(`/analysis`, {
        text: text
      })
      .then(response => {
        sentiment.push(response.data.magnitude);
        if (sentiment.length === posts.length - 1) {
          let averageSentiment =
            sentiment.reduce((acc, el) => acc + el, 0) / sentiment.length;
          averageSentiment = ((averageSentiment + 1) * 100) / 2;
          console.log(averageSentiment);

        //   $(".sentiment").html(``);
          //   $(".ldBar").text("60");

            let bar1 = new ldBar("#change");
          let bar2 = document.getElementById("#senti").ldBar;
          bar1.set(65);
          return averageSentiment;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

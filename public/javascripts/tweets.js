export const handleTweets = function(posts) {
  for (let i = 1; i < 5; i++) {
    let post = posts[i].text;
    let author = posts[i].user.screen_name;
    let image = posts[i].user.profile_image_url_https;
    let tweetI = ".tweet-" + `${i}` + "-img";
    let tweetA = ".tweet-" + `${i}` + "-author";
    let tweetP = ".tweet-" + `${i}` + "-post";
    $(tweetI).html(`<img id='profileImg' src='${image}'/>`);
    $(tweetA).text(`@${author}`);
    $(tweetP).text(`${post}`);
    debugger;
  }
};

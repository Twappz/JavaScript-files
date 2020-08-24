var tweet =prompt("Post your tweet");
var tweetCount = tweet.length;
var left = 140-tweetCount;
alert("You have " + "typed in " + tweetCount + " characters " + left + " left");

var tweety =tweet.slice(0,141);
alert(tweet);

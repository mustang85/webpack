const twitterApi = require('Api/twitter').default;

console.log('twitterApi', twitterApi);

module.exports = $scope => {
  $scope.tweets = twitterApi.getTweets();
  $scope.numberOfTweets = twitterApi.getTweetsCount();
};

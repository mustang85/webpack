const mockTweets = require('./mocks/MOCK_DATA');
console.log(mockTweets);
export default {
  getTweets() {
    return mockTweets;
  },
  getTweetsCount() {
    return mockTweets.length;
  }
};

const vader = require('vader-sentiment');

router.get('/search', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      params: {
        query: keyword,
        max_results: 10,
      },
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const tweets = response.data.data.map(tweet => {
      const sentiment = vader.SentimentIntensityAnalyzer.polarity_scores(tweet.text);
      return {
        ...tweet,
        sentiment: sentiment.compound,
      };
    });

    res.json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
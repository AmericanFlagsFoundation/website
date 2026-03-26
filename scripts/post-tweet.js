const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.X_APP_KEY,
  appSecret: process.env.X_APP_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

async function tweet(text) {
  try {
    const result = await client.v2.tweet(text);
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err.data || err.message || err);
  }
}

const text = process.argv[2] || 'Test from AFF Bot';
tweet(text);

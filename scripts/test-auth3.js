const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'Jf0tz4ORxvF0Yh8PiqFw5woCf',
  appSecret: '9YlQFiJXDuj3fKN4M0waOUU0opbP4ibPf0PIppk56MDxbhkZo1',
  accessToken: '1755307500268634112-OHqMn6npr8tiXGOksaq3KjmHlJ3yqs',
  accessSecret: 'pvBZNihTQVnWXUvq7hjDOhNuHDEjJS38XwvzrH8LPu4DP',
});

async function test() {
  try {
    const me = await client.v2.me();
    console.log('AUTH OK:', JSON.stringify(me));

    const tweet = await client.v2.tweet('Breaking the Silence: Why Mental Health Matters \u{1F499}\n\n1 in 5 Americans experience mental illness each year \u2014 yet fewer than half get help.\n\nWe\u2019re shattering the silence around mental health stigma.\n\nIf you\u2019re struggling, call 988. You are not alone.\n\n\u{1F517} americanflagsfoundation.org/blog\n\u2764\uFE0F americanflagsfoundation.org/donate\n\n#MentalHealth #EndTheStigma #988Lifeline');
    console.log('TWEET OK:', JSON.stringify(tweet));
  } catch (err) {
    console.error('ERROR:', JSON.stringify(err.data || err.message, null, 2));
  }
}

test();

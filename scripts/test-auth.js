const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'UNzWmyub3PMlpabzOMKl6bY7f',
  appSecret: 'Sn0txxcXRA08dVcddQ15QNjwt3LpA4iZCmla9IT0zFMccl3Vvp',
  accessToken: '1755307500268634112-r7gI7pciR4GXEy3fm6RWuhjXtlj4oX',
  accessSecret: 'p29l65LsnC9Mnlzzzy0EZGwf18ADBQlRJ179XCgnEHD5x',
});

async function test() {
  try {
    const me = await client.v2.me();
    console.log('READ OK:', JSON.stringify(me));
    
    const tweet = await client.v2.tweet('Test post from American Flags Foundation 🇺🇸');
    console.log('TWEET OK:', JSON.stringify(tweet));
  } catch (err) {
    console.error('ERROR:', JSON.stringify(err.data || err.message, null, 2));
    if (err.code) console.error('CODE:', err.code);
    if (err.headers) console.error('HEADERS:', JSON.stringify(Object.fromEntries(err.headers.entries())));
  }
}

test();

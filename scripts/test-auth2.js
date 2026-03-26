const { TwitterApi } = require('twitter-api-v2');

// Try OAuth 2.0 Bearer Token approach
const bearer = 'AAAAAAAAAAAAAAAAAAAAADwX8gEAAAAA6JQqN60jKYPL4acI7HGVY3XaMhk%3DIn0jV44PhqJxt0o2G0K9bUjRii1GFb5adv6Jx4Mds4Q0VzJ1oU';

const client = new TwitterApi(bearer);

async function test() {
  try {
    const me = await client.v2.me();
    console.log('Bearer READ OK:', JSON.stringify(me));
  } catch (err) {
    console.error('Bearer Error:', err.data || err.message);
  }
}

test();

const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: '2b8CiAGJAcw22S8m0EZDRNx9Z',
  appSecret: 'o7nibzK1evnWdEoI8MxHy12Vyz9CoT929siJceJTaXnrpw39Fs',
  accessToken: '1755307500268634112-EC6bReWYVCNXlDpzNE91Wv5VdeJIzT',
  accessSecret: 'FTrcEwFmtmAuBpkf0kq70AnYmLVmFYDFZbjF1yS0srxCw',
});

const text = `Breaking the Silence: Why Mental Health Matters 💙

1 in 5 Americans experience mental illness each year — yet fewer than half get help.

At the American Flags Foundation, we're shattering the silence around mental health stigma.

If you're struggling, call 988. You are not alone.

🔗 americanflagsfoundation.org/blog
❤️ americanflagsfoundation.org/donate

#MentalHealth #EndTheStigma #988Lifeline`;

client.v2.tweet(text)
  .then(r => console.log('Posted:', JSON.stringify(r, null, 2)))
  .catch(e => console.error('Error:', e.data || e.message));

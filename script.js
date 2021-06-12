const QUOTEBANK = [
  {
    author: 'Martin Luthor King Jr.',
    quote: 'The time is always right to do what is right.'
  },
  {
    author: 'Winston Churchill',
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
  },
  {
    author: 'Helen Keller',
    quote: 'Never bend your head. Always hold it high. Look the world straight in the eye.'
  },
  {
    author: 'Theodore Roosevelt',
    quote: "Believe you can and you're halfway there."
  },
  {
    author: 'Albert Einstein',
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
  }
];
window.onload = init;
function init() {
  generateQuote();
}

function randomQuote() {
  return QUOTEBANK[
    Math.floor(Math.random() * QUOTEBANK.length)
  ]
}

function generateQuote() {
  let quoteData = randomQuote();

  let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
  let quoteForTweet = quoteData.quote.replace(/\s/g, '%20');
  twitterLink += '"' + quoteForTweet + '"';
  let authForTweet = quoteData.author.replace(/\s/g, '%20');
  twitterLink += ' - ' + authForTweet;
  
  document.getElementById('text').innerText = quoteData.quote;
  document.getElementById('author').innerText = quoteData.author;
  document.getElementById('tweet-quote').href = twitterLink;
}

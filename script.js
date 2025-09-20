const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and follower',
    author: 'Steve Jobs',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    quote: 'In the middle of every difficulty lies opportunity',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'It always seems impossible until it’s done',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'Happiness is not something ready made. It comes from your own actions',
    author: 'Dalai Lama',
  },
  {
    quote:
      'Do not pray for an easy life, pray for the strength to endure a difficult one',
    author: 'Bruce Lee',
  },
  {
    quote: 'If you want to lift yourself up, lift up someone else',
    author: 'Booker T. Washington',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

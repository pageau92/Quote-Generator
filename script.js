const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

let apiQuotes = [];

// Show new quote
function newQuote() {
    authorText.textContent = apiQuotes.author;

    // // Check Quote Length to determine styling 
    // if (apiQuotes.text.length > 50) {
    //     quoteText.classList.add('long-quote'); 
    // } else {
    //     quoteText.classList.remove('long-quote'); 
    // }
    quoteText.textContent = apiQuotes.content;
}

 
// Get Ouotes from API
async function getQuotes() {
    const apiUrl = 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error here
    }
}


// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners 
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote); 

// On Load 
getQuotes();
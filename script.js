let apiQuotes = [];

// Get Ouotes from API
async function getQuotes() {
    const apiUrl = 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // Catch error here
    }
}

// On Load 
getQuotes();
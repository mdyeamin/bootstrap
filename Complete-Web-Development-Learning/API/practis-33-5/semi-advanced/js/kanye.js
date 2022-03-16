const kanyeQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayKanyeQuote(data))
}
const displayKanyeQuote = quote => {
    const quoteElement = document.getElementById('quote')
    // console.log(quote);
    quoteElement.innerText = quote.quote;
}
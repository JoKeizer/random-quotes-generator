/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [
    {
        id: 1,
        quote: "If you aren't going all the way why go at all?",
        author: "Joe Namath",
        year: "2020",
        citation: "keepinspiring.me",
        source: "quote-1.jpg",
        category: "Wisdom"
    },
    {
        id: 2,
        quote: "Never say never because limits, like fears are often just illusions",
        author: "Michael Jordon",
        year: "",
        citation: "",
        source: "quote-2.jpg",
        category: "Sport"

    },
    {
        id: 3,
        quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        author: "Norman Vincent Peale",
        year: "2020",
        citation: "Instagram",
        source: "quote-4.jpg",
        category: "Life"

    },
    {
        id: 4,
        quote: "And at the end of the day, your feet should be dirty, your hair messy and your eyes sparkling",
        author: "Shanti",
        year: "",
        citation: "",
        source: "quote-3.jpg",
        category: "Love"

    },    {
        id: 5,
        quote: "Wie rijk wil zijn, moet niet zijn vermogen vermeerderen maar zijn hebzucht verminderen.",
        author: "Plato",
        year: "",
        citation: "",
        source: "quote-5.jpg",
        category: "Filosofie"

    },
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    let newQuote = quotes[randomNumber];
    return newQuote;

}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/***
 * `printQuote` function
***/

function printQuote() {

    var getQuote = getRandomQuote();


    // var quote = getQuote.quote +  getQuote.author + getQuote.year;

    document.body.style.backgroundColor = getRandomColor();

    var string = '<p class="quote">' + getQuote.quote + '</p>';
    string += '<p class="source">' + getQuote.author + '</p>';

    if (getQuote.citation.length > 0)
        string += '<span class="citation">' + getQuote.citation + '</span>';

    if (getQuote.year.length > 0)
        string += '<span class="year">' + getQuote.year + '</span>';

    document.getElementById("quote-box").innerHTML = string;

    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = getQuote.category + ' ' + 'Quote';

    document.getElementById('imageBackground').style.backgroundImage="url(img/" + getQuote.source + ")";


}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);
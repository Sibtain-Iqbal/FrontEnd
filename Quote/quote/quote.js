const quote = document.getElementById("quote")
const head = document.getElementById("head")
const btn = document.getElementById("btn")


const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },

    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  ];




  btn.addEventListener('click',quotesrandom)


setInterval(quotesrandom,1000)

function quotesrandom (){
    const randomnuber =   Math.floor( Math.random() * quotes.length)

    const randomquote = quotes[randomnuber]
    console.log(randomquote);
    quote.innerText = randomquote.text
    

}
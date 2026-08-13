const quotes = [
    {
        quote: "Honesty is the best policy.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Success is not final; failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Great things are done by a series of small things.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        quote: "Difficult roads often lead to beautiful destinations.",
        author: "Unknown"
    },
    {
        quote: "Don't stop when you're tired. Stop when you're done.",
        author: "Unknown"
    },
    {
        quote: "The harder you work, the luckier you get.",
        author: "Samuel Goldwyn"
    },
    {
        quote: "Believe in yourself and all that you are.",
        author: "Unknown"
    },
    {
        quote: "Every moment is a fresh beginning.",
        author: "T. S. Eliot"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        quote: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
    },
    {
        quote: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    },
    {
        quote: "A winner is a dreamer who never gives up.",
        author: "Nelson Mandela"
    },
    {
        quote: "The best way out is always through.",
        author: "Robert Frost"
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "Quality is not an act, it is a habit.",
        author: "Aristotle"
    },
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon"
    },
    {
        quote: "Well begun is half done.",
        author: "Aristotle"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "Do not wait for the perfect moment. Take the moment and make it perfect.",
        author: "Unknown"
    },
    {
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Unknown"
    },
    {
        quote: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        quote: "You become what you believe.",
        author: "Oprah Winfrey"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Every accomplishment starts with the decision to try.",
        author: "John F. Kennedy"
    },
    {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Your limitation is only your imagination.",
        author: "Unknown"
    },
    {
        quote: "The best time to start was yesterday. The next best time is today.",
        author: "Unknown"
    },
    {
        quote: "Small steps every day lead to big results.",
        author: "Unknown"
    }
];

console.log(quotes[0].quote)

const h1 = document.querySelector("h1");
const btn= document.querySelector("button")

btn.addEventListener("click",()=>{
    msg=quotes[Math.floor(Math.random()*quotes.length)].quote;
    console.log(msg)
    h1.textContent=msg;
})
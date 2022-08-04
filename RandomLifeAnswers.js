var floor = Math.floor(1.8); //rounds the number down
var ceiling = Math.ceil( Math.PI ); // rounds up the number
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);

function d6() {
    return Math.floor(Math.random() * (6 - 1) + 1);
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Using the following array, write a function that will answer all of our questions by randomly choosing a response


function randomAnswer(question){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    var randomIndex = Math.floor(Math.random() * (lifesAnswers.length - 0) + 0); //Generate random number from 0 to 20

    return lifesAnswers[randomIndex];

}

var result = randomAnswer('What is the best language?')
console.log(result)


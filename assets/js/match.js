var cardsList = document.querySelectorAll('.card');
var daddy = document.getElementById('container');
var starter = document.getElementById('start');
var scoreBoard = document.getElementById("scoreKeeper");
var randomInt = 0
var score = 0
var locked = false;
let cardIsFlipped = false;
let firstCard = undefined;
let secondCard = undefined;

starter.addEventListener('click', shuffle);

function flipCard()
{
    if (locked || (this === firstCard))
    return;

    this.classList.add('flip');
    
    if(!cardIsFlipped)
    {
        cardIsFlipped = true;
        firstCard = this;
        return;
    }
    cardIsFlipped = false;
    secondCard = this; 
    isMatch();
}   
  
function isMatch()
{
    if(firstCard.dataset.handle === secondCard.dataset.handle) 
    {
        removeFromGame() 
        return;
    }
    returnToGame();
}

function removeFromGame()
{
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    firstCard = undefined;
    secondCard = undefined;
    increaseScore();
}

function returnToGame()
{
    locked = true;
    setTimeout(function()
    {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        firstCard = undefined;
        secondCard = undefined;
        locked = false
        increaseScore();
        }, 2000);
    }
function increaseScore()
{
    score += 1;
    scoreBoard.textContent=score;
}   
    


function shuffle() 
{
    var count = cardsList.length
    while(count)
    {
    randomInt = Math.floor(Math.random()*(count--));
    var shufflee = daddy.children[randomInt];
    daddy.appendChild(shufflee);
    }
    
    cardsList.forEach(function(card)
    {
        card.removeEventListener("click", flipCard)
        card.classList.remove('flip');
        card.addEventListener("click", flipCard);
        score = 0;
        scoreBoard.textContent=score;
     });
}

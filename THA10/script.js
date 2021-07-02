const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score=0;
let moves=0;
document.getElementById("score").innerHTML="SCORE: "+score+"  MOVES: "+moves;
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  score=score+10;
  moves++;
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  moves++;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  document.getElementById("score").innerHTML="SCORE: "+score+"  MOVES: "+moves;
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();
//  const play_again=document.getElementById("play_again");
//  const game_over=document.getElementById("game-over");
//  play_again.addEventListener('click',function(){
//    window.location.reload();
//  })
// function playAgain()
// {
//   game_over.style.display="flex";
//   play_again.style.display="block";
// }

// if(score===60)
// {
//   playAgain();
// }
 cards.forEach(card => card.addEventListener('click', flipCard));
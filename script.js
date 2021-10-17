document.querySelector('#userHit').addEventListener('click', userGame);
document.querySelector('#pcStand').addEventListener('click', botGame);

let blackJackGame = {
  you: { box: '#flex-box-container-1', score: '#your-score', scoreSum: 0 },
  dealer: { box: '#flex-box-container-2', score: '#bot-score', scoreSum: 0 },
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
  cards_map: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    A: [1, 10],
    J: 10,
    K: 10,
    Q: 10,
  },
  wins: 0,
  losses: 0,
  draws: 0,
};

function userGame() {
  const YOU = blackJackGame.you;
  addCard(YOU);
}

async function botGame() {
  const DEALER = blackJackGame.dealer;
  while (DEALER.scoreSum<15){
    addCard(DEALER);
  }
}

function addCard(player) {
  let gameCards = blackJackGame.cards[Math.floor(Math.random() * 13)];
  let imageDiv = document.createElement('img');
  imageDiv.src = `https://stackblitz.com/files/web-platform-d1dwgy/github/atif9010/web-platform-d1dwgy/master/blackjack_assets/images/${gameCards}.png`;
  document.querySelector(player.box).append(imageDiv);

  let score;

  if (gameCards == 'A' && player.scoreSum>15) {
    score = 1;
    console.log ('score is 1')
        
  } else if (gameCards == 'A' && player.scoreSum<15) {
    score = 10;
    console.log ('score is 10')
  } else {
    score = blackJackGame.cards_map[gameCards];
    console.log ('score is free')
      }
    console.log (gameCards, score);
  
    
  player.scoreSum += score;
 
  document.querySelector(player.score).innerText = player.scoreSum;
}

function winner () {

}

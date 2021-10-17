document.querySelector('#userHit').addEventListener('click', userGame);
document.querySelector('#pcStand').addEventListener('click', botGame);
document.querySelector('#Deal').addEventListener('click', dealIt);

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
  userBtnState: false,
  botBtnState: false,
};

function userGame() {
  if (blackJackGame.userBtnState === false) {
  const YOU = blackJackGame.you;
  addCard(YOU);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function botGame() {
  if (blackJackGame.botBtnState === false) {
  const DEALER = blackJackGame.dealer;
  while (DEALER.scoreSum < 15) {
    await sleep(1000);
    addCard(DEALER);
    }
  blackJackGame.botBtnState = true;
  console.log(blackJackGame.botBtnState);
  blackJackGame.userBtnState = true;
  }
  winner();
}

function dealIt() {
  document.querySelector('#flex-box-container-1').innerHTML = 'Your Score:';
  document.querySelector('#flex-box-container-2').innerHTML = 'Bot Score:';
}

function addCard(player) {
  let gameCards = blackJackGame.cards[Math.floor(Math.random() * 13)];
  let imageDiv = document.createElement('img');
  imageDiv.src = `https://stackblitz.com/files/web-platform-d1dwgy/github/atif9010/web-platform-d1dwgy/master/blackjack_assets/images/${gameCards}.png`;
  document.querySelector(player.box).append(imageDiv);

  let score;

  if (gameCards == 'A' && player.scoreSum > 15) {
    score = 1;
    console.log('score is 1');
  } else if (gameCards == 'A' && player.scoreSum < 15) {
    score = 10;
    console.log('score is 10');
  } else {
    score = blackJackGame.cards_map[gameCards];
    console.log('score is free');
  }
  console.log(gameCards, score);

  player.scoreSum += score;

  document.querySelector(player.score).innerText = player.scoreSum;
}

function winner() {
  let message = 0;
  let color = 0;
  if (
    blackJackGame.you.scoreSum <= 21 &&
    blackJackGame.you.scoreSum > blackJackGame.dealer.scoreSum
  ) {
    message = 'You Won';
    color = 'green';
  } else if (
    blackJackGame.you.scoreSum <= 21 &&
    blackJackGame.you.scoreSum === blackJackGame.dealer.scoreSum
  ) {
    message = 'Its Draw';
    color = 'yellow';
  } else if (
    blackJackGame.you.scoreSum <= 21 &&
    blackJackGame.you.scoreSum < blackJackGame.dealer.scoreSum
  ) {
    message = 'You lost';
    color = 'red';
  }

  document.querySelector('#showResultMessage').innerText = message;
  document.querySelector('#showResultMessage').style.color = color;
}

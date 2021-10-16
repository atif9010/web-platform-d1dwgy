document.querySelector('#userHit').addEventListener('click', userGame);

let blackJackGame = {
  you: { box: '#flex-box-container-1', score: '#your-score' },
  dealer: { box: '#flex-box-container-2', score: '#bot-score' },
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
  'cards-map': [2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 10], 10, 10, 10],
  wins: 0,
  losses: 0,
  draws: 0,
};

function userGame() {
  const YOU = blackJackGame.you;
  addCard(YOU);
}

function addCard(player) {
  let gameCards = blackJackGame.cards[Math.floor(Math.random() * 13)];
  let imageDiv = document.createElement('img');
  imageDiv.src = `blackjack_assets/image/${gameCards}.png`;
  document.querySelector(player.box).append(imageDiv);
}

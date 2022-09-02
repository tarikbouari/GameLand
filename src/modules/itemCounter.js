import { getGame } from './api.js';

const gameCounter = document.getElementById('games');

export default async function gamecount() {
  const data = await getGame();
  const count = data.length;
  console.log(count);
  gameCounter.textContent = `Games(${count})`;
}

import { loadCard } from './render.js';

const key = 'https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14';

export default async function () {
  const res = await fetch(key);
  const jsonData = await res.json();
  const gameData = jsonData.results;
  loadCard(gameData);
  const Comments = document.querySelector('.Comments');
  console.log(Comments);
}

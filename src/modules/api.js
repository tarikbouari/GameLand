import { loadCard } from "./render.js";

const key =
  "https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14";

const getGame = async () => {
  const res = await fetch(key);
  const jsonData = await res.json();
  const gameData = jsonData.results;
  console.log(gameData[0].id);
  loadCard(gameData);
};

export { getGame, key };

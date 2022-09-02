import { getGame } from "./api.js";
const gameCounter = document.getElementById("games");

const countgame = async () => {
  const data = await getGame();
  const count = data.length;
  console.log(count);
  gameCounter.textContent = `Games(${count})`;
};
countgame();

export { countgame };

const key =
  "https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14";

  const getGame = async (gameData) => {
  const res = await fetch(key);
  const jsonData = await res.json();
  gameData = jsonData.results;
  console.log(gameData);
};

export { getGame, key };

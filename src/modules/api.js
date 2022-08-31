const key = 'https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14';

const getGame = async () => {
  const res = await fetch(key);
  const jsonData = await res.json();
  const gameData = jsonData.results;
  // loadCard(gameData);
  return gameData;
};

// new indetifier
const id = 'AFFSRiO8tq3BNoRoizLk';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes/`;

// post likes
const postLikes = async (array) => {
  const res = await fetch(url, {
    method: 'Post',
    body: JSON.stringify(array),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  const storage = await res.json();
  return storage;
};

// get likes

const getLikes = async () => {
  const res = await fetch(url);
  const storage = await res.json();
  return storage;
};

export { getGame, postLikes, getLikes };

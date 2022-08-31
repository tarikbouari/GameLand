import { postLikes, getLikesData, getLikes } from "./api";

const container = document.getElementById("card-container");

const loadCard = (games) => {
  //initialize id for everyCard
  let gameId = 0;
  // render every game
  games.forEach((game, gameId) => {
    const div = document.createElement("div");
    div.classList.add("box-card");

    const divImg = document.createElement("div");
    divImg.classList.add("img-box");

    const image = document.createElement("img");
    image.setAttribute("src", `${game.background_image}`);

    divImg.appendChild(image);

    const box = document.createElement("div");
    box.classList.add("box-description", "text-wrap");

    const boxIcon = document.createElement("div");
    boxIcon.classList.add("box-icon");

    const h3 = document.createElement("span");
    h3.textContent = `${game.name}`;

    const iconLike = document.createElement("span");
    iconLike.classList.add("material-symbols-outlined");
    iconLike.textContent = "favorite";

    const span = document.createElement("span");
    span.classList.add("like-text");

    
    span.textContent = `${gameId} likes`;
    boxIcon.append(iconLike, span);

    box.append(h3);

    const comments = document.createElement("button");
    comments.classList.add("btn-comment", "mx-1");
    comments.textContent = "Comments";

    const reservations = document.createElement("button");
    reservations.classList.add("btn-reservation", "mx-1");
    reservations.textContent = "Reservations";

    div.append(divImg, box, boxIcon, comments, reservations);

    container.appendChild(div);
    gameId++;
    

    // function like games
    iconLike.addEventListener("click", (e) => {
      e.preventDefault();
      postLikes({
        item_id: `game${gameId}`,
      });
      console.log(gameId);

      // Async that get likes from API
      // displaysLikes();


    });
      return span;
  });
};

 

// Async that get likes from API
    const displaysLikes = async () => {
      const storage = await getLikes();
      // const wait = await loadCard();
      storage.forEach((item) => {
        console.log(item.likes)
        
      });
    }
    displaysLikes();
    // const waitLoad = async () => {
    //   const wait = await
    // }
 
export { loadCard, container };

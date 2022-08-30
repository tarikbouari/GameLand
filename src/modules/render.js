const container = document.getElementById("card-container");

const loadCard = (games) => {
  games.forEach((game) => {
    const div = document.createElement("div");
    div.classList.add("box-card");

    const divImg = document.createElement("div");
    divImg.classList.add("img-box");

    const image = document.createElement("img");
    image.setAttribute("src", `${game.background_image}`);

    divImg.appendChild(image);

    const box = document.createElement("div");
    box.classList.add("box-likes");

    const h3 = document.createElement("span");
    h3.textContent = `${game.name}`;

    const icon = document.createElement("i");
    icon.classList.add("icon");

    const span = document.createElement("span");
    span.textContent = `${game.id} likes`;

    box.append(h3, span, icon);

    const comments = document.createElement("button");
    comments.classList.add("btn-comment", "mx-1");
    comments.textContent = "Comments";

    const reservations = document.createElement("button");
    reservations.classList.add("btn-reservation", "mx-1");
    reservations.textContent = "Reservations";

    div.append(divImg, box, comments, reservations);

    container.appendChild(div);
  });
};

export { loadCard, container };

import { postLikes, getLikes, getGame } from './api.js';
import PostComment from './postComment.js';

const container = document.getElementById('card-container');

let count = 0;

// getComment();
const loadCard = () => {
  // initialize id for everyCard

  const getGameData = async () => {
    const games = await getGame();
    // render every game
    games.forEach((game, gameId) => {
      const div = document.createElement('div');
      div.classList.add('box-card');

      const divImg = document.createElement('div');
      divImg.classList.add('img-box');

      const image = document.createElement('img');
      image.setAttribute('src', `${game.background_image}`);

      divImg.appendChild(image);

      const box = document.createElement('div');
      box.classList.add('box-description', 'text-wrap');

      const boxIcon = document.createElement('div');
      boxIcon.classList.add('box-icon');

      const h3 = document.createElement('span');
      h3.textContent = `${game.name}`;

      const iconLike = document.createElement('span');
      iconLike.classList.add('material-symbols-outlined');
      iconLike.textContent = 'favorite';

      const span = document.createElement('span');
      span.classList.add('like-text');

      const displaysLikes = async () => {
        const storage = await getLikes();

        storage.filter((item) => {
          const game = `game${gameId}`;
          if (item.item_id === game) {
            span.textContent = `${item.likes} likes`;
          }

          return item.likes;
        });
      };
      displaysLikes();

      boxIcon.append(iconLike, span);

      box.append(h3);

      const comments = document.createElement('button');
      comments.classList.add('btn-comment', 'mx-1');
      comments.textContent = 'Comments';

      const reservations = document.createElement('button');
      reservations.classList.add('btn-reservation', 'mx-1');
      reservations.textContent = 'Reservations';

      div.append(divImg, box, boxIcon, comments, reservations);

      container.appendChild(div);
      gameId += 1;

      // function click likes buttom

      iconLike.addEventListener(
        'click',
        () => {
          // e.preventDefault();
          postLikes({
            item_id: `game${gameId}`,
          });
          // Async that get likes from API
          const displaysLikes = async () => {
            const storage = await getLikes();
            // console.log(storage);

            storage.filter((item) => {
              const game = `game${gameId}`;
              if (item.item_id === game) {
                span.textContent = `${item.likes + 1} likes`;
              }
              return item.likes + 1;
            });
          };

          displaysLikes();
        },
        { once: true },
      );

      // comment
      comments.addEventListener('click', (e) => {
        e.preventDefault();
        const commentsPop = document.querySelector('.comments-pop');
        commentsPop.style.display = 'block';
        const popup = document.createElement('div');
        popup.classList.add('comment-popup');

        const popupChild = document.createElement('div');
        popupChild.classList.add('comment-child');

        const popupCard = document.createElement('div');
        popupCard.classList.add('popupCard');

        const ImageDiv = document.createElement('div');
        ImageDiv.classList.add('imagePopBox');

        const popClose = document.createElement('div');
        popClose.classList.add('popClose');
        popClose.innerHTML = `
     <i class='bx bx-x-circle bx-tad'></i>
    `;

        const imagePop = document.createElement('img');
        imagePop.setAttribute('src', `${game.background_image}`);

        popClose.addEventListener('click', () => {
          commentsPop.style.display = 'none';
        });

        const title = document.createElement('span');
        title.classList.add('titlePop');
        title.innerText = `${game.name}`;

        const details = document.createElement('div');
        details.classList.add('details');
        const detail = document.createElement('ul');
        detail.classList.add('detail');
        detail.innerHTML = `<li>Released date: ${game.released}</li>
    <li>Playtime: ${game.playtime}</li>
    <li>Rating: ${game.rating}</li>
    <li>Updated: ${game.updated}</li>`;

        details.append(detail);

        const commentsCard = document.createElement('div');
        commentsCard.classList.add('comCard');
        const comTitle = document.createElement('span');
        comTitle.textContent = 'Comments';
        const commentsShow = document.createElement('div');
        commentsShow.classList.add('comShow');

        const getComment = async (gameId) => {
          const getApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments?item_id=${gameId}`;
          const request = new Request(getApi);
          const response = await fetch(request);
          const data = await response.json();
          count = data.length;
          commentsShow.innerHTML = `
          <p id="comment">Comment(${!count ? 0 : count})</p> 
          `;
          // display comment on
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.length; i++) {
            if (count > 0 && data.length > 0) {
              const CommentsDiv = document.createElement('div');
              CommentsDiv.classList.add('commentsDiv');
              const nameDiv = document.createElement('span');
              const commentDiv = document.createElement('span');
              const date = document.createElement('p');
              nameDiv.classList.add('font');
              commentDiv.classList.add('font');
              date.classList.add('date');
              // eslint-disable-next-line no-template-curly-in-string
              nameDiv.textContent = `Username: ${data[i].username}`;
              commentDiv.textContent = `Comment: ${data[i].comment}`;
              date.textContent = `Creation_date: ${data[i].creation_date}`;
              CommentsDiv.append(nameDiv, commentDiv, date);
              commentsShow.append(CommentsDiv);
            }
          }
          return data;
        };
        getComment(gameId);

        const addComment = document.createElement('div');
        addComment.classList.add('addCom');

        const addComTitle = document.createElement('span');
        addComTitle.textContent = 'Add your comments';

        //  creation of forms
        const form = document.createElement('form');

        const i = document.createElement('input');
        i.setAttribute('type', 'text');
        i.setAttribute('name', 'username');

        const text = document.createElement('textarea');
        text.setAttribute('type', 'text');
        text.setAttribute('value', 'input comment');

        const submit = document.createElement('input');
        submit.classList.add('submit');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Submit');

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (text.value && i.value === '');
          const data = {
            item_id: gameId,
            username: i.value,
            comment: text.value,
          };
          await PostComment(data);
          commentsShow.innerHTML = '';
          // eslint-disable-next-line no-restricted-globals
          getComment(gameId);
          form.reset();
        });
        form.append(i, text, submit);
        addComment.append(addComTitle, form);
        // commentsShow.append(CommentDiv);
        commentsCard.append(comTitle, commentsShow, addComment);
        ImageDiv.append(imagePop);
        popupCard.append(ImageDiv, title, details, commentsCard, popClose);
        popupChild.appendChild(popupCard);
        popup.appendChild(popupChild);
        commentsPop.appendChild(popup);
      });
    });
  };
  getGameData();
};

export { loadCard, container };

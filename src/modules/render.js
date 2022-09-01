import Post from './post.js';

const container = document.getElementById('card-container');

const loadCard = (games) => {
  games.forEach((game, id) => {
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

    const icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'favorite';

    const span = document.createElement('span');
    span.classList.add('like-text');
    span.textContent = `${game.id} likes`;
    boxIcon.append(icon, span);

    box.append(h3);

    const comments = document.createElement('button');
    comments.classList.add('btn-comment', 'mx-1');
    comments.textContent = 'Comments';

    const reservations = document.createElement('button');
    reservations.classList.add('btn-reservation', 'mx-1');
    reservations.textContent = 'Reservations';

    div.append(divImg, box, boxIcon, comments, reservations);

    container.appendChild(div);

    // comments
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
      detail.innerHTML = `<li>released date: ${game.released}</li>
  <li>playtime: ${game.playtime}</li>
  <li>rating: ${game.rating}</li>
  <li>Updated: ${game.updated}</li>`;

      details.append(detail);

      const commentsCard = document.createElement('div');
      commentsCard.classList.add('comCard');
      const comTitle = document.createElement('span');
      comTitle.textContent = 'Comments';
      const commentsShow = document.createElement('div');
      commentsShow.classList.add('comShow');
      commentsShow.innerHTML = `
      <p id="comment" >Comment()</p>
      <div class="Comments"></div>
      `;

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

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (text.value && i.value === '');
        const data = {
          item_id: id,
          username: i.value,
          comment: text.value,
        };
        Post(data);
        form.reset();
      });
      form.append(i, text, submit);
      addComment.append(addComTitle, form);
      commentsCard.append(comTitle, commentsShow, addComment);
      ImageDiv.append(imagePop);
      popupCard.append(ImageDiv, title, details, commentsCard, popClose);
      popupChild.appendChild(popupCard);
      popup.appendChild(popupChild);
      commentsPop.appendChild(popup);
    });
  });
};

export { loadCard, container };

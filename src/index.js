import './css/main.css';
import './css/desktop.css';
import './modules/menu.js';
import { loadCard } from './modules/render.js';
import countgame from './modules/itemCounter.js';

loadCard();
countgame();
const myButton = document.getElementById('Btn');

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

window.onscroll = function () {
  scrollFunction();
};

myButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

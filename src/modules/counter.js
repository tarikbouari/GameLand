const Counter = (id) => {
  const comment = document.querySelector('#comment');
  comment.innerText = (`${id}`);
  console.log(id);
};

export default Counter;
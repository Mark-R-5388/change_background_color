const btn = document.querySelector('button');
const body = document.querySelector('body');
console.log(btn);

btn.addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const indexNum = Math.floor(Math.random() * 4);
  return (body.style.background = colors[indexNum]);
});

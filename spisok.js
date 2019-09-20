
const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
const fruitsWrapperEl = document.querySelector('[data-fruits]');

for (let index = 0; index < 4; index++) {
  const liElement = document.createElement('li');
  let fruitName = fruits[index];

  liElement.innerText = fruitName === 'Apple' ? `only ${fruitName}` : fruitName;  
  fruitsWrapperEl.appendChild(liElement);
}

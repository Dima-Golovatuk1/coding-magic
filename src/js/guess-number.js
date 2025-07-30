const form = document.getElementById('form-guess');
const input = document.getElementById('guessInput');
const button = document.querySelector('.guess__btn');
const result = document.querySelector('.guess__result');

let randomNumber = Math.floor(Math.random() * 10);

button.addEventListener('click', onGuess);

function onGuess(e) {
  e.preventDefault();

  const userGuess = Number(input.value.trim());
  result.classList.remove('success', 'error');

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    result.textContent = 'Введіть число від 1 до 10';
    result.classList.add('error');
  } else if (userGuess === randomNumber) {
    result.textContent = 'Вітаю! Ви вгадали число!';
    result.classList.add('success');
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    result.textContent = `На жаль, це не ${userGuess}. Спробуйте ще раз!`;
    result.classList.add('error');
  }

  input.value = '';
}


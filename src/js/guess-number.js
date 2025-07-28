let secretNumber = Math.floor(Math.random() * 10) + 1;

document.querySelector('.guess__btn').addEventListener('click', function () {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.querySelector('.guess__result');

  result.className = "guess__result"; 

  if (isNaN(guess)) {
    result.textContent = "Введіть число!";
    result.classList.add("error");
    return;
  }

  if (guess === secretNumber) {
    result.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
    result.classList.add("success");
  } else {
    result.textContent = `Ви програли, комп’ютер загадав ${secretNumber}`;
    result.classList.add("error");
  }

  secretNumber = Math.floor(Math.random() * 10) + 1; 
});
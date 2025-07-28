const form = document.getElementById('form-leap');
const result = document.querySelector('.leap__year__result');
const button = document.querySelector('.leap__year__btn');

button.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  if (form.year.value % 4 === 0 && form.year.value > 0) {
    result.textContent = 'Ви народилися у високосний рік!';
    result.classList.add('leap-success');
  } else if (form.year.value % 4 !== 0 && form.year.value > 0) {
    result.textContent = 'Ви народилися не у високосний рік!';
    result.classList.add('leap-error');
  } else {
    result.textContent = 'Будь ласка, введіть коректний рік.';
    result.classList.add('leap-error');
  }
}

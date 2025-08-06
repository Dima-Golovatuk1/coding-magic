<<<<<<< Updated upstream
=======
const modal1 = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const closeBtn1 = document.getElementById('closeModalBtn');
const closeBtn2 = document.getElementById('closeModalBtn2');
const saveBtn = document.querySelector('.save__btn');
const input = document.getElementById('username');
const userNameDisplay = document.querySelector('.header__text__user-name');
const interactiveBtn = document.

modal1.style.display = 'block';

closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal1) modal1.style.display = 'none';
  if (e.target === modal2) modal2.style.display = 'none';
});

saveBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const name = input.value.trim();

  if (name) {
    localStorage.username = name;
    if (userNameDisplay) {
      userNameDisplay.textContent = name;
    }
    modal1.style.display = 'none';
    modal2.style.display = 'block';
  }
});
>>>>>>> Stashed changes

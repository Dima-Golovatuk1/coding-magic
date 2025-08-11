const backdrop1 = document.getElementById('modalBackdrop1');
const backdrop2 = document.getElementById('modalBackdrop2');
const modal1 = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const closeBtn1 = document.getElementById('closeModalBtn');
const closeBtn2 = document.getElementById('closeModalBtn2');
const saveBtn = document.querySelector('.save__btn');
const input = document.getElementById('username');
const userNameDisplay = document.querySelector('.header__text__user-name');

backdrop2.style.display = "none"
backdrop1.style.display = 'block';

// Close modal1
closeBtn1.addEventListener('click', () => {
  backdrop1.style.display = 'none';
});

// Close modal2
closeBtn2.addEventListener('click', () => {
  backdrop2.style.display = 'none';
});

// Close on outside click
window.addEventListener('click', e => {
  if (e.target === backdrop1) backdrop1.style.display = 'none';
  if (e.target === backdrop2) backdrop2.style.display = 'none';
});

// Save name and open modal2
saveBtn.addEventListener('click', e => {
  e.preventDefault();
  const name = input.value.trim();
  if (name) {
    localStorage.username = name;
    if (userNameDisplay) {
      userNameDisplay.textContent = name;
    }
    backdrop1.style.display = 'none';
    backdrop2.style.display = 'block';
  }
});

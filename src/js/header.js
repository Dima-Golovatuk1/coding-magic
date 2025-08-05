const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeModalBtn');
const saveBtn = document.querySelector('.save__btn');
modal.style.display = 'block';

// 2. Close modal on "X" click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 3. Optional: Close modal on clicking outside the modal content
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 4. Prevent form from submitting (page reload)
modal.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('username').value.trim();
  if (name) {
    localStorage.username = name;
    document.querySelector('.header__text__user-name').textContent = name;
    modal.style.display = 'none';
  }
});


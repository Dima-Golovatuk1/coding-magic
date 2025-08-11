const modal1 = document.getElementById('myModal');
const closeBtn2 = document.getElementById('closeModalBtn2');
const modal2 = document.getElementById('myModal2');

closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal1) modal1.style.display = 'none';
  if (e.target === modal2) modal2.style.display = 'none';
});
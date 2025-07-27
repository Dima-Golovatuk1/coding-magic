document.querySelector(".leap__year__btn").addEventListener("click", function () {
  const year = parseInt(document.getElementById("yearInput").value);
  const result = document.querySelector(".leap__year__result");

  result.className = "leap__year__result"; 

  if (isNaN(year)) {
    result.textContent = "Будь ласка, введіть коректний рік.";
    result.classList.add("leap-error");
    return;
  }

  const isLeap = (year % 4 === 0);

  if (isLeap) {
    result.textContent = "Ви народилися у високосний рік!";
    result.classList.add("leap-success");
  } else {
    result.textContent = "Ви народилися не у високосний рік!";
    result.classList.add("leap-error");
  }
});

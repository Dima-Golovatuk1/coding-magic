document.getElementById("checkBtn").addEventListener("click", function () {
  const year = parseInt(document.getElementById("yearInput").value);
  const result = document.getElementById("result");

  result.className = "leapyear_result"; 

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

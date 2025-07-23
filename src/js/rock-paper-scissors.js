const form = document.getElementById("rps-form")
const text = document.getElementById("rps-text-result")
const scoreUser = document.getElementById("rps-score-user")
const scorePc = document.getElementById("rps-score-pc")


const counter = {
    user: 0,
    pc: 0
}


const rpsData = {
    "stone": 1,
    "scissors": 2,
    "paper": 3
}


function onStartGame(event) {
    event.preventDefault();
    text.classList.remove(
        "rps-sesection__text-winner",
        "rps-sesection__text-loser",
        "rps-sesection__text-draw"
    );

    const selectedOption = document.querySelector('input[name="radio"]:checked');

    if (selectedOption) {
        const userChoice = rpsData[selectedOption.value];
        const computerChoice = Math.floor(Math.random() * 3) + 1;

        console.log(`${userChoice} vs ${computerChoice}`)

        if (userChoice === computerChoice) {
            text.textContent = "Нічия!";
            text.classList.add("rps-sesection__text-draw");
        } else if (
            (userChoice === 1 && computerChoice === 2) ||
            (userChoice === 2 && computerChoice === 3) ||
            (userChoice === 3 && computerChoice === 1)
        ){
            text.textContent = "Ви виграли раунд!";
            text.classList.add("rps-sesection__text-winner");
            counter["user"] += 1;
            scoreUser.textContent = counter["user"]
        } else {
            text.textContent = "Комп’ютер виграв раунд!";
            text.classList.add("rps-sesection__text-loser");
            counter["pc"] += 1;
            scorePc.textContent = counter["pc"]
        }

        console.log(counter);

    } else {
        text.textContent = "Нічого не вибрано";
    }
}

form.addEventListener("submit", onStartGame)


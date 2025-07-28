function convertTime() {
    // Get the value from the input box
    let inputValue = document.getElementById("secondsInput").value;
    let seconds = parseInt(inputValue);

    // Handle empty or invalid input
    if (isNaN(seconds) || seconds < 0) {
      document.getElementById("output").textContent = "Неправильне число";
      return;
    }

    // Calculate time parts
    let days = Math.floor(seconds / 86400);
    seconds = seconds % 86400;

    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // Format the result
    let result = days + " дн. " +
                 String(hours).padStart(2, '0') + ":" +
                 String(minutes).padStart(2, '0') + ":" +
                 String(seconds).padStart(2, '0');

    // Show it
    document.getElementById("output").textContent = result; 
}
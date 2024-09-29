function calculateLove() {
  const yourName = document.getElementById("yourname").value.trim();
  const partnerName = document.getElementById("partnername").value.trim();
  const answerElement = document.getElementById("answer");

  // Check if both names are provided
  if (yourName === "" || partnerName === "") {
    answerElement.innerText = "Please enter both names.";
    return;
  }

  // Generate random love percentage
  const lovePercentage = Math.floor(Math.random() * (101 - 50) + 50);
  answerElement.innerText = `${lovePercentage}%`;
}

// Set up initial variables
let lives = 5;
let score = 0;
let currentColor = "";
let rgbValueDisplay = document.getElementById("rgb-value");
let livesDisplay = document.getElementById("lives");
let scoreDisplay = document.getElementById("score");
let restartButton = document.getElementById("restart");
let colorOptionsDiv = document.querySelector(".color-options");

// Helper function to generate a random RGB value
function getRandomColorValue() {
    return Math.floor(Math.random() * 256); // Returns a number between 0 and 255
}

// Helper function to generate a random RGB color
function generateRandomRGB() {
    let r = getRandomColorValue();
    let g = getRandomColorValue();
    let b = getRandomColorValue();
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate color options and display them
function generateColorOptions() {
    colorOptionsDiv.innerHTML = ''; // Clear previous options
    let correctIndex = Math.floor(Math.random() * 3); // Choose a random index for the correct answer
    let options = [];

    // Generate two random incorrect options
    while (options.length < 3) {
        let color = generateRandomRGB();
        if (!options.includes(color)) {
            options.push(color);
        }
    }

    // Insert the correct color into the random options
    options[correctIndex] = currentColor;

    // Create and display color option buttons
    options.forEach((color, index) => {
        let optionButton = document.createElement("div");
        optionButton.classList.add("color-option");
        optionButton.style.backgroundColor = color;
        optionButton.addEventListener("click", function() {
            checkAnswer(color, correctIndex, index);
        });
        colorOptionsDiv.appendChild(optionButton);
    });
}

// Function to check if the player's guess is correct
function checkAnswer(selectedColor, correctIndex, selectedIndex) {
    if (selectedIndex === correctIndex) {
        score++;
        scoreDisplay.textContent = score;
        alert("Correct! 🎉");
    } else {
        lives--;
        livesDisplay.textContent = lives;
        alert("Incorrect. Try again!");
    }

    // Check if the game is over
    if (lives === 0) {
        endGame();
    } else {
        // Generate new RGB color for the next round
        startNewRound();
    }
}

// Function to start a new round
function startNewRound() {
    currentColor = generateRandomRGB();
    rgbValueDisplay.textContent = currentColor;
    generateColorOptions();
}

// Function to end the game
function endGame() {
    alert("Game Over! Your final score is " + score);
    restartButton.classList.remove("hidden"); // Show the restart button
}

// Event listener for the restart button
restartButton.addEventListener("click", function() {
    lives = 5;
    score = 0;
    livesDisplay.textContent = lives;
    scoreDisplay.textContent = score;
    restartButton.classList.add("hidden");
    startNewRound();
});

// Start the first round when the page loads
startNewRound();

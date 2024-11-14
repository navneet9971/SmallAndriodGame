// Game Data (images and corresponding answers for 40 levels) - with online image URLs
const gameData = [ 
  { image: "./img/dog.webp", question: "What animal is this?", answer: "dog" },
  { image: "./img/apple.webp", question: "What fruit is this?", answer: "apple" },
  { image: "./img/paris.webp", question: "What city is this?", answer: "paris" },
  { image: "./img/tesla.webp", question: "What car is this?", answer: "tesla" },
  { image: "./img/banana.webp", question: "What fruit is this?", answer: "banana" },
  { image: "./img/cat.webp", question: "What animal is this?", answer: "cat" },
  { image: "./img/eiffel tower.webp", question: "What landmark is this?", answer: "eiffel tower" },
  { image: "./img/orange.webp", question: "What fruit is this?", answer: "orange" },
  { image: "./img/mountain.webp", question: "What is this natural formation?", answer: "mountain" },
  { image: "./img/eagle.webp", question: "What type of bird is this?", answer: "eagle" },
  { image: "./img/pineapple.webp", question: "What is this fruit?", answer: "pineapple" },
  { image: "./img/elephant.webp", question: "What animal is this?", answer: "elephant" },
  { image: "./img/car.webp", question: "What is this?", answer: "car" },
  { image: "./img/rose.webp", question: "What flower is this?", answer: "rose" },
  { image: "./img/new york.webp", question: "What city is this?", answer: "new york" },
  { image: "./img/lion.webp", question: "What animal is this?", answer: "lion" },
  { image: "./img/pine.webp", question: "What tree is this?", answer: "pine" },
  { image: "./img/grape.webp", question: "What fruit is this?", answer: "grape" },
  { image: "./img/boat.webp", question: "What is this?", answer: "boat" },
  { image: "./img/tiger.webp", question: "What animal is this?", answer: "tiger" },
  { image: "./img/giraffe.webp", question: "What animal is this?", answer: "giraffe" },
  { image: "./img/colosseum.webp", question: "Where is this landmark?", answer: "colosseum" },
  { image: "./img/kiwi.webp", question: "What type of fruit is this?", answer: "kiwi" },
  { image: "./img/panda.webp", question: "What animal is this?", answer: "panda" },
  { image: "./img/plane.webp", question: "What is this?", answer: "plane" },
  { image: "./img/lily.webp", question: "What flower is this?", answer: "lily" },
  { image: "./img/london.webp", question: "What city is this?", answer: "london" },
  { image: "./img/oak.webp", question: "What type of tree is this?", answer: "oak" },
  { image: "./img/kangaroo.webp", question: "What animal is this?", answer: "kangaroo" },
  { image: "./img/watermelon.webp", question: "What fruit is this?", answer: "watermelon" },
  { image: "./img/penguin.webp", question: "What animal is this?", answer: "penguin" },
  { image: "./img/sunflower.webp", question: "What flower is this?", answer: "sunflower" },
  { image: "./img/great wall of china.webp", question: "Where is this?", answer: "great wall of china" },
  { image: "./img/peach.webp", question: "What is the name of this fruit?", answer: "peach" },
  { image: "./img/tokyo.webp", question: "What city is this?", answer: "tokyo" },
  { image: "./img/zebra.webp", question: "What animal is this?", answer: "zebra" },
  { image: "./img/parrot.webp", question: "What type of bird is this?", answer: "parrot" }
];

let currentIndex = 0;
let score = 0;

const imageElement = document.getElementById("gameImage");
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  if (currentIndex < gameData.length) {
    const { image, question } = gameData[currentIndex];
    imageElement.src = image;
    questionElement.textContent = question;
    answerInput.value = "";
    feedbackElement.textContent = "";
  } else {
    feedbackElement.textContent = `Game Over! Final Score: ${score}`;
    submitButton.disabled = true;
  }
}

function submitAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = gameData[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
    feedbackElement.style.color = "red";
  }

  scoreElement.textContent = `Score: ${score}`;
  currentIndex++;
  setTimeout(loadQuestion, 2000);
}

submitButton.addEventListener("click", submitAnswer);
loadQuestion();

// Update Background and Level
function updateLevel() {
  if (currentIndex % 5 === 0) {
    const level = Math.floor(currentIndex / 5) + 1;
    document.body.style.background = getBackgroundForLevel(level);
    feedbackElement.textContent = `Level ${level}`;
    feedbackElement.style.color = "green";
  }
}

// Get Background for Level
function getBackgroundForLevel(level) {
  const backgrounds = [
    "linear-gradient(135deg, #a8edea, #fed6e3)", // Level 1
    "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Level 2
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)", // Level 3
    "linear-gradient(135deg, #ffecd2, #fcb69f)", // Level 4
    "linear-gradient(135deg, #d4fc79, #96e6a1)"  // Level 5
  ];
  return backgrounds[(level - 1) % backgrounds.length];
}

// Modify Load Question to Update Level
function loadQuestion() {
  if (currentIndex < gameData.length) {
    const currentGameData = gameData[currentIndex];
    imageElement.src = currentGameData.image;
    questionElement.textContent = currentGameData.question;
    answerInput.value = "";
    feedbackElement.textContent = "";
    updateLevel(); // Call level update here
  } else {
    feedbackElement.textContent = "Game Over! Final Score: " + score;
    feedbackElement.style.color = "blue";
    submitButton.disabled = true;
  }
}



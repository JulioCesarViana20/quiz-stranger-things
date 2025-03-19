const startBtn = document.getElementById("start-btn");
const quizStart = document.getElementById("quiz-start");
const quizQuestion = document.getElementById("quiz-question");
const nextBtn = document.getElementById("next-btn");
const quizResult = document.getElementById("quiz-result");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score");
const gifContainer = document.getElementById("gif-container");
const options = document.getElementById("options");

let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "Em que ano foi lançada a série Stranger Things?",
    options: ["2016", "2014", "2018"],
    correctAnswer: "2016",
    
  },


  {
    question: "qual é o vilao da primeira temporada?",
    options: ["demongorgon", "devorador de mentes", "vecna"],
    correctAnswer: "demongorgon",
    
  },

  {
    question: "em que ano a 1 temporada se passa?",
    options: ["1990", "2011", "1983"],
    correctAnswer: "1983",
  },

  {
    question: "qual a comida preferida da jane(eleven)?",
    options: ["pizza", "waffles", "sorvete"],
    correctAnswer: "waffles",

  },


  {
    question: "Qual é o nome da cidade onde a história acontece?",
    options: ["florida", "california", "hawkins"],
    correctAnswer: "hawkins",

  },

  {
    question: "Quem é o chefe da polícia de hawkins?",
    options: ["Moscove", "James", "Hopper"],
    correctAnswer: "Hopper",
  },

  {
    question: "Quem é o responsável pelos experimentos do Hawkins National Laboratory?",
    options: ["dr. Walis Perti ", "dr. Fred Jum", "dr. Martin Brener"],
    correctAnswer: "dr. Martin Brener",
  },

  {
    question: "Quem são os principais amigos de Eleven?",
    options: ["Mike, Dustin e Lucas", "Jonathan, Nancy e Steve", "Billy, Max e Steve"],
    correctAnswer: "Mike, Dustin e Lucas"
  },

  {
    question: "Quem tem o poder de levitar objetos na série?",
    options: ["Will Byers", "Dustin Henderson", "Eleven"],
    correctAnswer: "Eleven"
  },

  {
    question: "O que é o Mundo Invertido?",
    options: ["Um outro mundo paralelo e sombrio", "O local onde Steve mora", "Uma dimensão fictícia de terror"],
    correctAnswer: "Um outro mundo paralelo e sombrio"
  },

  
];

function startQuiz() {
  quizStart.style.display = "none";  
  quizQuestion.style.display = "block";  
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.querySelector("h2").textContent = question.question;
  const optionsList = options;
  optionsList.innerHTML = ''; 

  question.options.forEach(option => {
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("option-btn");
    optionBtn.textContent = option;
    optionBtn.onclick = () => checkAnswer(option);
    optionsList.appendChild(optionBtn);
  });
}

function checkAnswer(selectedAnswer) {
  const question = questions[currentQuestion];
  if (selectedAnswer === question.correctAnswer) {
    score++; 
  }
  nextBtn.style.display = "block"; 
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();  
    nextBtn.style.display = "none";  
  } else {
    showResult();  
  }
}

function showResult() {
  quizQuestion.style.display = "none";  
  quizResult.style.display = "block"; 
  document.getElementById("score").textContent = `Voce acertou ${score} de ${questions.length} perguntas.`;

  scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;

  let gifContent = ""; // Variável que vai armazenar o conteúdo

  if (score === questions.length) {
    gifContent = "<img src='perfect.gif' alt='Parabéns!'>";
  } else if (score > questions.length / 2) {
    gifContent = "<img src='good.gif' alt='Bom trabalho!'>";
  } else {
    gifContent = "<img src='tryagain.gif' alt='Tente novamente!'>";
  }

  // Condições extras para GIFs baseados em pontuação específica
  if (score === questions.length) {
    gifContent = ` 
      <iframe src="https://giphy.com/embed/fDbzXb6Cv5L56" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/the-young-pope-candidimg18521-fDbzXb6Cv5L56">via GIPHY</a></p>
    `;
  } else if (score === 0) {
    gifContent = ` 
      <iframe src="https://giphy.com/embed/1jkV16ysq9vAFN2hYN" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/kimsconvenience-jean-umma-yoon-1jkV16ysq9vAFN2hYN">via GIPHY</a></p>
    `;
  } else {
    gifContent = ` 
      <iframe src="https://giphy.com/embed/l3q2K5jinAlChoCLS" width="407" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/mashable-l3q2K5jinAlChoCLS">via GIPHY</a></p>
    `;
  }

  // Coloca o conteúdo no gifContainer
  gifContainer.innerHTML = gifContent;
}



function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  quizResult.style.display = "none";  
  quizStart.style.display = "block";  
}


startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);
const img = document.createElement('img');
img.src = 'path/to/image.jpg';


const questions = [
  {
    type: "math",
    expression: "2 * 3",
    answer: 6
  },
  {
    type: "math",
    expression: "10 / 2",
    answer: 5
  },
  {
    type: "math",
    expression: "1 кг = ? гр",
    answer: 1000
  },
  {
    type: "math",
    expression: "5 * 4",
    answer: 20
  },
  {
    type: "math",
    expression: "15 / 3",
    answer: 5
  },
  {
    type: "math",
    expression: "1 м = ? см",
    answer: 100
  },
  {
    type: "math",
    expression: "2 * 4",
    answer: 8
  },
  {
    type: "math",
    expression: "18 / 3",
    answer: 6
  },
  {
    type: "math",
    expression: "1 л = ? мл",
    answer: 1000
  },
  {
    type: "math",
    expression: "3 * 7",
    answer: 21
  },
  {
    type: "math",
    expression: "20 / 4",
    answer: 5
  },
  {
    type: "math",
    expression: "1 дм = ? см",
    answer: 10
  },
  {
    type: "math",
    expression: "1000 гр = ? кг",
    answer: 1
  },
  {
    type: "math",
    expression: "150 см = ? дм",
    answer: 15
  }
];



let correctAnswers = 0;
let currentIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentIndex];
  document.getElementById("question").textContent = currentQuestion.expression;

  if (currentQuestion.type === "figure") {
    document.getElementById("figure-image").innerHTML = `<img src="${currentQuestion.image}" alt="${currentQuestion.answer}">`;
  } else {
    document.getElementById("figure-image").innerHTML = "";
  }

  document.getElementById("answer").value = "";
  document.getElementById("warning").classList.add("hidden");
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();
  const currentQuestion = questions[currentIndex];

  if (currentQuestion.type === "math") {
    if (parseInt(userAnswer) === currentQuestion.answer) {
      correctAnswers++;
    } else {
      document.getElementById("warning").classList.remove("hidden");
      return;
    }
  } else if (currentQuestion.type === "figure") {
    if (userAnswer === currentQuestion.answer.toLowerCase()) {
      correctAnswers++;
    } else {
      document.getElementById("warning").classList.remove("hidden");
      return;
    }
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("result").textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
  }
}


document.getElementById("submit").addEventListener("click", checkAnswer);

displayQuestion();

const img = document.createElement('img');
img.src = 'path/to/image.jpg';


const questions = [
  {
    type: "math",
    expression: "2 + 3",
    answer: 5
  },
  {
    type: "math",
    expression: "5 - 2",
    answer: 3
  },
  {
    type: "figure",
    expression: "Какая это фигура?",
    answer: "Круг",
    image: "C://Users//LG//Desktop//Siteeeeeeeeeeeeeeeeeee//img//circle.png"
  },
  {
    type: "math",
    expression: "3 + 4",
    answer: 7
  },
  {
    type: "figure",
    expression: "Какая это фигура?",
    answer: "Треугольник",
    image: "C://Users//LG//Desktop//Siteeeeeeeeeeeeeeeeeee//img//triangle.png"
  },
  {
    type: "math",
    expression: "10 - 2",
    answer: 8
  },
  {
    type: "math",
    expression: "4 + 4",
    answer: 8
  },
  {
    type: "math",
    expression: "7 - 2",
    answer: 5
  },
  {
    type: "math",
    expression: "6 + 1",
    answer: 7
  },
  {
    type: "math",
    expression: "9 - 4",
    answer: 5
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

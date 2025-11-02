const quizData = [
  {
    question: "What is the tallest mountain in the world?",
    choices: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Elbrus",
      "Mount McKinley",
    ],
    correct: "Mount Everest",
  },
  {
    question: "Which is the highest mountain in Africa?",
    choices: [
      "Mount Kilimanjaro",
      "Mount Kenya",
      "Mount Toubkal",
      "Mount Cameroon",
    ],
    correct: "Mount Kilimanjaro",
  },
  {
    question: "Which mountain is the highest in Europe?",
    choices: ["Mount Etna", "Mont Blanc", "Matterhorn", "Mount Elbrus"],
    correct: "Mount Elbrus",
  },
  {
    question: "Which is the tallest mountain in North America?",
    choices: [
      "Mount Saint Elias",
      "Mount Logan",
      "Mount Rainier",
      "Denali (Mount McKinley)",
    ],
    correct: "Denali (Mount McKinley)",
  },
  {
    question: "What is the highest mountain in South America?",
    choices: ["Ojos del Salado", "Aconcagua", "Huascarán", "Illimani"],
    correct: "Aconcagua",
  },
  {
    question: "What is the tallest mountain in Antarctica?",
    choices: [
      "Mount Vinson",
      "Mount Erebus",
      "Mount Sidley",
      "Mount Kirkpatrick",
    ],
    correct: "Mount Vinson",
  },
  {
    question: "Which mountain range is Mount Everest part of?",
    choices: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
    correct: "Himalayas",
  },
  {
    question: "Which country is Mount Fuji located in?",
    choices: ["China", "Japan", "South Korea", "Thailand"],
    correct: "Japan",
  },
  {
    question: "Which mountain is known as the 'Matterhorn of the Andes'?",
    choices: ["Alpamayo", "Fitz Roy", "Illimani", "Huascarán"],
    correct: "Fitz Roy",
  },
  {
    question: "Which mountain is the highest volcano in the world?",
    choices: ["Mauna Kea", "Mount Etna", "Ojos del Salado", "Mount Vesuvius"],
    correct: "Ojos del Salado",
  },
];

let Score = 0;
let currentQuiz = 0;
let userAnswers = new Array(quizData.length);

const CardContainer = document.getElementById("CardContainer");
const scoreDisplayCard = document.getElementById("ScoreCar");

function displaySavedInfo() {
  CardContainer.innerHTML = "";
  quizData.forEach((quiz, i) => {
    const progress = ((i + 1) / quizData.length) * 100;

    CardContainer.innerHTML += `
<section class="Card">
  <div class="card-content">
    <div class="card-title">
      <h3>Quiz ${i + 1}</h3>
      <div style="width: 100%; height: 2px;"></div>
      <div style="width: ${progress}%; height: 2px; background-color: black;"></div>
    </div>
    <div class="card-title">${quiz.question}</div>
  </div>
  <div class="Quiz-box">
    ${quiz.choices
      .map(
        (choice) => `
      <div class="Choice">
        <button class="btn" value="${choice}">${choice}</button>
      </div>`
      )
      .join("")}
  </div>
  <div class="controls">
    <button class="prevBtn">Previous</button>
    <button class="nextBtn">${
      i === quizData.length - 1 ? "Finish" : "Next"
    }</button>
  </div>
</section>`;
  });


}

function showQuiz(index) {
  const quizzes = document.querySelectorAll(".Card");
  quizzes.forEach((quiz, i) => {
    quiz.hidden = i !== index;
  });
}

function calculateScore() {
  Score = 0;
  userAnswers.forEach((answer, i) => {
    if (answer === quizData[i].correct) {
      Score += 20;
    }
  });
}

displaySavedInfo();
showQuiz(currentQuiz);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    userAnswers[currentQuiz] = event.target.value;
    calculateScore();
  }

  if (event.target.classList.contains("nextBtn")) {
    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      showQuiz(currentQuiz);
    } else {
      calculateScore();

      CardContainer.innerHTML = `
      <section class="Card">
        <div class="card-content">
          <div class="card-title">
            <h2>Quiz Completed!</h2>
          </div>
          <p class="card-title" >Your final score is: <strong>${Score}</strong> / ${
        quizData.length * 20
      }</p>
        </div>
      </section>
    `;
    }
  }

  if (event.target.classList.contains("prevBtn")) {
    if (currentQuiz > 0) {
      currentQuiz--;
      showQuiz(currentQuiz);
    }
  }
});



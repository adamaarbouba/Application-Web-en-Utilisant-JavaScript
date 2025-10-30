const quizData = [
  {
    question: "What is the tallest mountain in the world?",
    choices: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Elbrus",
      "Mount McKinley",
    ],
    correct: 0,
  },
  {
    question: "Which is the highest mountain in Africa?",
    choices: [
      "Mount Kilimanjaro",
      "Mount Kenya",
      "Mount Toubkal",
      "Mount Cameroon",
    ],
    correct: 0,
  },
  {
    question: "Which mountain is the highest in Europe?",
    choices: ["Mount Etna", "Mont Blanc", "Matterhorn", "Mount Elbrus"],
    correct: 3,
  },
  {
    question: "Which is the tallest mountain in North America?",
    choices: [
      "Mount Saint Elias",
      "Mount Logan",
      "Mount Rainier",
      "Denali (Mount McKinley)",
    ],
    correct: 3,
  },
  {
    question: "What is the highest mountain in South America?",
    choices: ["Ojos del Salado", "Aconcagua", "Huascarán", "Illimani"],
    correct: 1,
  },
];

function displaySavedInfo() {
  const CardContainer = document.getElementById("CardContainer");
  CardContainer.innerHTML = "";

  for (let i = 0; i < quizData.length; i++) {
    const progress = ((i + 1) / quizData.length) * 100;
    CardContainer.innerHTML += `
<section state="off" class="Card">
  <div class="card-content">
    <div class="card-title">
      <h3>Quiz ${i + 1}</h3>
      <div style="width: 100%; height: 2px;"></div>
      <div style="width: ${progress}%; height: 2px; background-color: black;"></div>
    </div>
    <div class="card-title">${quizData[i].question}</div>
  </div>
  <div class="Quiz-box">
    ${quizData[i].choices.map((choice) => `
      <div class="Choice">
        <button class="btn">${choice}</button>
      </div>`
    ).join("")}
  </div>
  <div class="controls">
    <button class="prevBtn">Previous</button>
    <button class="nextBtn">Next</button>
  </div>
</section>`;
  }
}



displaySavedInfo();

let currentQuiz = 0;
const quizzes = document.querySelectorAll(".Card");

function showQuiz(index) {
  quizzes.forEach((quiz, i) => {
    quiz.hidden = i !== index;
  });
}

showQuiz(currentQuiz);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nextBtn")) {
    if (currentQuiz < quizzes.length - 1) {
      currentQuiz++;
      showQuiz(currentQuiz);
    }
  }

  if (e.target.classList.contains("prevBtn")) {
    if (currentQuiz > 0) {
      currentQuiz--;
      showQuiz(currentQuiz);
    }
  }
});

const quizzes = document.querySelectorAll(".Card");
let currentQuiz = 0;

function showQuiz(index) {
  quizzes.forEach((quiz, i) => {
    quiz.hidden = i !== index;
  });
}

showQuiz(currentQuiz);

document.querySelectorAll(".nextBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentQuiz < quizzes.length - 1) {
      currentQuiz++;
      showQuiz(currentQuiz);
    }
  });
});

document.querySelectorAll(".prevBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentQuiz > 0) {
      currentQuiz--;
      showQuiz(currentQuiz);
    }
  });
});

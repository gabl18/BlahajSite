// Quiz Time
const quizContainer = document.getElementById("quiz");

if (quizContainer) {
    const quizData = [
        {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome", "Berlin"],
        answer: "Paris"
        },
        {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
        },
        // Add more questions here...
    ];
    
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;
    let isQuizFinished = false;
    
    function showQuestion() {
        selectedAnswer = null;
        const question = quizData[currentQuestion];
        questionElement.innerText = question.question;
    
        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.type = "button";
            button.addEventListener("click", (e) => {
                const buttons = optionsElement.querySelectorAll("button");
                buttons.forEach(btn => btn.style.borderColor = "#d0daf0")
                buttons.forEach(btn => btn.style.backgroundColor = "#f0f4f8")

                selectedAnswer = option;
                e.target.style.borderColor = "#2f5e8d";
                e.target.style.backgroundColor = "#e1ecf4";
            });
            optionsElement.appendChild(button);
        });
    }
    
    function showResult() {
        isQuizFinished = true;
        questionElement.innerHTML = `<h3>Quiz completed!</h3>`;
        optionsElement.innerHTML = `<p style="font-size: 1.2rem; margin-bottom: 20px;">You got <strong>${score}</strong> out of <strong>${quizData.length}</strong> questions right!</p>`;
        submitButton.innerText = "Play again";
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        isQuizFinished = false;
        submitButton.innerText = "Submit";
        showQuestion();
    }

    function handleSubmit() {
        if (isQuizFinished) {
            resetQuiz();
            return;
        }
        if (selectedAnswer === null) {
            alert("Please select an answer!");
            return;
        }

        const correctAnswer = quizData[currentQuestion].answer;
        if (selectedAnswer === correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    if (submitButton) {
        submitButton.addEventListener("click", handleSubmit);
    }
  
  showQuestion();
}
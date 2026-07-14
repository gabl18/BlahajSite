// Quiz Time
const quizContainer = document.getElementById("quiz");

if (quizContainer) {
    const quizData = [
        {
        question: "Where is Blåhaj from?",
        options: ["Norway", "Sweden", "Greece", "America"],
        answer: "Sweden"
        },
        {
        question: "What does the plush resemble?",
        options: ["Blue Shark", "Whale Shark", "Dolphin", "Beluga Whale"],
        answer: "Blue Shark"
        },
        {
        question: "What was IKEA's first shark-like plush called?",
        options: ["Blåhaj", "Grössby", "Klappar Haj", "Korall Haj"],
        answer: "Korall Haj"
        },
        {
        question: "When did IKEA's shark plush get released under the name of Blåhaj?",
        options: ["2012", "2008", "2014", "2006"],
        answer: "2014"
        },
        {
        question: "How much did Klappar Haj cost before getting renamed to Blåhaj?",
        options: ["$29.99", "$30", "$19.99", "$14.99"],
        answer: "$14.99"
        },
        {
        question: "For which anniversary did IKEA release the IKEA blind box in select asian markets?",
        options: ["40 Years Blåhaj", "25 Years Blåhaj", "60 Years IKEA", "80 Years IKEA"],
        answer: "80 Years IKEA"
        },
        {
        question: "Does Blåhaj have a instruction manual?",
        options: ["Yes", "No", "idk"],
        answer: "Yes"
        },
        {
        question: "What was NOT a IKEA marketing campaign with Blåhaj?",
        options: ["IKEA TinyHome Ad", "Blåhaj buns in Malaysia and Taiwan", "Partnership with The Ocean Foundation", "Introducing a manual for Blåhaj"],
        answer: "Partnership with The Ocean Foundation"
        },
        {
        question: "Which user in 2014 on tumblr was probably the reason why Blåhaj became that popular?",
        options: ["meatballover", "sharkhugger", "ikeamemes", "funnyplushphotos"],
        answer: "sharkhugger"
        },
        {
        question: "In an IKEA campaign promoting marriage equality, Blåhaj was featured sharing a bed with another plush.  Which one is it?",
        options: ["Polar Bear Snutting", "Brown Bear Djungelskog", "Wolf Lufsig", "Alien Aftonsparv"],
        answer: "Polar Bear Snutting"
        },
        {
        question: "What was a noteable giveaway hosted by IKEA Canada?",
        options: ["Lifetime free Meatballs", "100 Blåhaj for user sharkhugger", "Blåhaj in the transgender flag colors", "Custom made Blåhaj christmas topper"],
        answer: "Blåhaj in transgender flag colors"
        },
        {
        question: "In what television series did Blåhaj make a brief appearance?",
        options: ["The Mandalorian", "Hawkeye", "Family Guy", "Loki"],
        answer: "Hawkeye"
        },
    ];
    
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;
    let isQuizFinished = false;
    let isQuizStarted = false;

    function showStartScreen() {
        isQuizStarted = false;
        isQuizFinished = false;
        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;

        questionElement.innerHTML = `<p style="margin: 0; line-height: 1.6;">Prove everything you know about Blåhaj! <br> I would really suggest reading through the rest of the website first before starting this quiz.</p>`;
        optionsElement.innerHTML = "";
        submitButton.innerText = "Start Quiz";
    }
    
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

        confetti({
            particleCount: 150,
            spread: 80,
            origin: {y:0.6}
        });

        questionElement.innerHTML = `<h3>Quiz completed!</h3>`;
        optionsElement.innerHTML = `<p style="font-size: 1.2rem; margin-bottom: 20px;">Blåhajtastic! You got <strong>${score}</strong> out of <strong>${quizData.length}</strong> questions right!</p>`;
        submitButton.innerText = "Play again";
    }

    function handleSubmit() {
        if (!isQuizStarted) {
            isQuizStarted = true;
            submitButton.innerText = "Submit";
            showQuestion();
            return;
        }

        if (isQuizFinished) {
            showStartScreen();
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
  
  showStartScreen();
}
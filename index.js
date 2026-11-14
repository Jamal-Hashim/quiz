
const quizData = [

    // HTML Questions (1-9)

    {
        category: "HTML",
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        category: "HTML",
        question: "Which HTML tag is used to display an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },
    {
        category: "HTML",
        question: "What is the correct way to create a checkbox in HTML?",
        options: [
            "<input type='button'>",
            "<input type='checkbox'>",
            "<checkbox>",
            "<check>"
        ],
        answer: "<input type='checkbox'>"
    },
    {
        category: "HTML",
        question: "Which attribute is used to open a link in a new tab?",
        options: [
            "open='_blank'",
            "target='_blank'",
            "new='tab'",
            "tab='new'"
        ],
        answer: "target='_blank'"
    },
    {
        category: "HTML",
        question: "Which tag is used to insert a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        answer: "<br>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used for the largest heading?",
        options: ["<h1>", "<heading>", "<head>", "<h6>"],
        answer: "<h1>"
    },
    {
        category: "HTML",
        question: "Which tag is used to define a table row in HTML?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute specifies alternative text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        answer: "alt"
    },
    {
        category: "HTML",
        question: "Which tag is used to create an ordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ol>"
    },

    // CSS Questions (10-18)

    {
        category: "CSS",
        question: "Which property is used to change text color in CSS?",
        options: [
            "font-color",
            "color",
            "text-color",
            "background-color"
        ],
        answer: "color"
    },
    {
        category: "CSS",
        question: "How can you select an element with id 'box' in CSS?",
        options: [
            ".box { }",
            "*box { }",
            "#box { }",
            "box { }"
        ],
        answer: "#box { }"
    },
    {
        category: "CSS",
        question: "Which property is used to change background color?",
        options: [
            "color",
            "background",
            "bgcolor",
            "background-color"
        ],
        answer: "background-color"
    },
    {
        category: "CSS",
        question: "Which CSS property controls the text size?",
        options: [
            "font-size",
            "text-size",
            "font-style",
            "size"
        ],
        answer: "font-size"
    },
    {
        category: "CSS",
        question: "Which property is used to make text bold in CSS?",
        options: [
            "text-weight",
            "bold",
            "font-weight",
            "font-style"
        ],
        answer: "font-weight"
    },
    {
        category: "CSS",
        question: "How do you select all elements inside a div in CSS?",
        options: [
            "div *",
            "div.all",
            "div > all",
            "div.allElements"
        ],
        answer: "div *"
    },
    {
        category: "CSS",
        question: "Which property is used to set spacing between letters?",
        options: [
            "letter-spacing",
            "word-spacing",
            "text-spacing",
            "spacing"
        ],
        answer: "letter-spacing"
    },
    {
        category: "CSS",
        question: "Which CSS property is used to underline text?",
        options: [
            "text-decoration",
            "underline",
            "font-style",
            "line"
        ],
        answer: "text-decoration"
    },
    {
        category: "CSS",
        question: "What is the default position property of HTML elements?",
        options: [
            "relative",
            "absolute",
            "static",
            "fixed"
        ],
        answer: "static"
    },

    // JavaScript Questions (19-26)

    {
        category: "JavaScript",
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "**", "#"],
        answer: "//"
    },
    {
        category: "JavaScript",
        question: "Which keyword is used to declare a variable in JavaScript (ES6)?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        category: "JavaScript",
        question: "What is the output of console.log(2 + '2'); ?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22"
    },
    {
        category: "JavaScript",
        question: "Which function is used to parse a string to integer in JavaScript?",
        options: [
            "int()",
            "parseInt()",
            "parse()",
            "Number()"
        ],
        answer: "parseInt()"
    },
    {
        category: "JavaScript",
        question: "Which method is used to print something in the browser console?",
        options: [
            "print()",
            "console.print()",
            "console.log()",
            "log.print()"
        ],
        answer: "console.log()"
    },
    {
        category: "JavaScript",
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["-", "=", "==", "==="],
        answer: "="
    },
    {
        category: "JavaScript",
        question: "Which built-in method joins the elements of an array into a string?",
        options: ["concat()", "join()", "push()", "map()"],
        answer: "join()"
    },
    {
        category: "JavaScript",
        question: "Which company developed JavaScript?",
        options: ["Google", "Netscape", "Microsoft", "Oracle"],
        answer: "Netscape"
    }

];


// =====================================
// DOM ELEMENTS
// =====================================

const questionEl = document.getElementById("question");

const optionsEl = document.getElementById("options");

const nextBtn = document.getElementById("nextbtn");

const scoreEl = document.getElementById("score");

const questionCountEl = document.getElementById("question-count");

const progressEl = document.getElementById("progress");

const categoryEl = document.getElementById("question-category");

const answerStatus = document.getElementById("answer-status");

const quizSection = document.getElementById("quiz");

const resultSection = document.getElementById("result-section");

const finalScoreEl = document.getElementById("final-score");

const correctCountEl = document.getElementById("correct-count");

const wrongCountEl = document.getElementById("wrong-count");

const percentageEl = document.getElementById("percentage");

const resultMessageEl = document.getElementById("result-message");

const restartBtn = document.getElementById("restart-btn");


// =====================================
// QUIZ VARIABLES
// =====================================

let currentQuestion = 0;

let score = 0;

let answered = false;


// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {

    answered = false;

    const currentQuiz = quizData[currentQuestion];

    // Question
    questionEl.textContent = currentQuiz.question;

    // Category
    categoryEl.textContent = currentQuiz.category;

    // Question Counter
    questionCountEl.textContent =
        `${String(currentQuestion + 1).padStart(2, "0")} / ${quizData.length}`;

    // Score
    scoreEl.textContent = score;

    // Progress Bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    progressEl.style.width = `${progress}%`;

    // Clear Old Options
    optionsEl.innerHTML = "";

    // Reset Status
    answerStatus.textContent = "Select an answer to continue";

    answerStatus.className = "";

    // Disable Next Button
    nextBtn.disabled = true;

    nextBtn.innerHTML = currentQuestion === quizData.length - 1
        ? 'Finish Quiz <span>→</span>'
        : 'Next Question <span>→</span>';

    // Generate Options
    currentQuiz.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.classList.add("option");

        // Create option letter
        const letter = document.createElement("span");

        letter.classList.add("option-letter");

        letter.textContent = String.fromCharCode(65 + index);

        // Create option text
        const text = document.createElement("span");

        text.textContent = option;

        button.appendChild(letter);

        button.appendChild(text);

        // Click Event
        button.addEventListener("click", () => {

            checkAnswer(button, option, currentQuiz.answer);

        });

        optionsEl.appendChild(button);

    });

}


// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer(selectedBtn, selectedAnswer, correctAnswer) {

    // Prevent Multiple Clicks
    if (answered) return;

    answered = true;

    const allOptions = document.querySelectorAll(".option");

    // Disable All Options
    allOptions.forEach(button => {

        button.disabled = true;

        const optionText = button.lastElementChild.textContent;

        // Show Correct Answer
        if (optionText === correctAnswer) {

            button.classList.add("correct");

        }

    });


    // Check Selected Answer
    if (selectedAnswer === correctAnswer) {

        score++;

        selectedBtn.classList.add("selected");

        answerStatus.textContent = "✓ Correct Answer! Well done.";

        answerStatus.className = "correct-text";

    } else {

        selectedBtn.classList.add("wrong");

        answerStatus.textContent = "✗ Wrong Answer! Correct answer is highlighted.";

        answerStatus.className = "wrong-text";

    }

    // Update Score
    scoreEl.textContent = score;

    // Enable Next Button
    nextBtn.disabled = false;

}


// =====================================
// NEXT QUESTION
// =====================================

nextBtn.addEventListener("click", () => {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        showResult();

    }

});


// =====================================
// SHOW FINAL RESULT
// =====================================

function showResult() {

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    // Calculate Result
    const totalQuestions = quizData.length;

    const wrongAnswers = totalQuestions - score;

    const percentage = Math.round((score / totalQuestions) * 100);

    // Display Result
    finalScoreEl.textContent = `${score}/${totalQuestions}`;

    correctCountEl.textContent = score;

    wrongCountEl.textContent = wrongAnswers;

    percentageEl.textContent = `${percentage}%`;


    // Result Message
    if (percentage >= 80) {

        resultMessageEl.textContent = "Excellent! You are a Quiz Champion! 🏆";

    } else if (percentage >= 60) {

        resultMessageEl.textContent = "Great Job! Keep Learning! 🎉";

    } else if (percentage >= 40) {

        resultMessageEl.textContent = "Good Try! Practice More! 💪";

    } else {

        resultMessageEl.textContent = "Keep Practicing! You Can Do It! 🚀";

    }

}


// =====================================
// RESTART QUIZ
// =====================================

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    answered = false;

    resultSection.classList.add("hidden");

    quizSection.classList.remove("hidden");

    loadQuestion();

});


// =====================================
// START QUIZ
// =====================================

loadQuestion();
        

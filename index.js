console.log("Hello");

const quizData = [
    // HTML Questions
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },
    {
        question: "What is the correct way to create a checkbox in HTML?",
        options: ["<input type='button'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
        answer: "<input type='checkbox'>"
    },
    {
        question: "Which attribute is used to open a link in a new tab?",
        options: ["open='_blank'", "target='_blank'", "new='tab'", "tab='new'"],
        answer: "target='_blank'"
    },
    {
        question: "Which tag is used to insert a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h1>", "<heading>", "<head>", "<h6>"],
        answer: "<h1>"
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>"
    },
    {
        question: "Which HTML attribute specifies alternative text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        answer: "alt"
    },
    {
        question: "Which tag is used to create an ordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ol>"
    },

    // CSS Questions
    {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color", "color", "text-color", "background-color"],
        answer: "color"
    },
    {
        question: "How can you select an element with id 'box' in CSS?",
        options: [".box { }", "*box { }", "#box { }", "box { }"],
        answer: "#box { }"
    },
    {
        question: "Which property is used to change background color?",
        options: ["color", "background", "bgcolor", "background-color"],
        answer: "background-color"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "size"],
        answer: "font-size"
    },
    {
        question: "Which property is used to make text bold in CSS?",
        options: ["text-weight", "bold", "font-weight", "font-style"],
        answer: "font-weight"
    },
    {
        question: "How do you select all elements inside a div in CSS?",
        options: ["div *", "div.all", "div > all", "div.allElements"],
        answer: "div *"
    },
    {
        question: "Which property is used to set spacing between letters?",
        options: ["letter-spacing", "word-spacing", "text-spacing", "spacing"],
        answer: "letter-spacing"
    },
    {
        question: "Which CSS property is used to underline text?",
        options: ["text-decoration", "underline", "font-style", "line"],
        answer: "text-decoration"
    },
    {
        question: "What is the default position property of HTML elements?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: "static"
    },

    // JavaScript Questions
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "**", "#"],
        answer: "//"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript (ES6)?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the output of console.log(2 + '2'); ?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22"
    },
    {
        question: "Which function is used to parse a string to integer in JavaScript?",
        options: ["int()", "parseInt()", "parse()", "Number()"],
        answer: "parseInt()"
    },
    {
        question: "Which method is used to print something in the browser console?",
        options: ["print()", "console.print()", "console.log()", "log.print()"],
        answer: "console.log()"
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["-", "=", "==", "==="],
        answer: "="
    },
    {
        question: "Which built-in method joins the elements of an array into a string?",
        options: ["concat()", "join()", "push()", "map()"],
        answer: "join()"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Netscape", "Microsoft", "Oracle"],
        answer: "Netscape"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextbtn');
const resultsEl = document.getElementById('results');

function loadQestions() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option');
        btn.onclick = () => checkAnswer(btn, q.answer);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, correctAnswer) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    if (selectedBtn.textContent === correctAnswer) {
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQestions();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    resultsEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQestions();

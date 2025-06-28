let quizQuestions = [
  // HTML Questions (1–10)
  {
    id: 1,
    category: "HTML",
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    answer: "HyperText Markup Language",
  },
  {
    id: 2,
    category: "HTML",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    id: 3,
    category: "HTML",
    question: "Which attribute is used to provide an image source?",
    options: ["alt", "src", "href", "link"],
    answer: "src",
  },
  {
    id: 4,
    category: "HTML",
    question: "Which HTML tag is used for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: "<br>",
  },
  {
    id: 5,
    category: "HTML",
    question: "What is the correct doctype declaration for HTML5?",
    options: ["<!DOCTYPE html>", "<!HTML5>", "<!DOCTYPE HTML5>", "<!HTML>"],
    answer: "<!DOCTYPE html>",
  },
  {
    id: 6,
    category: "HTML",
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 7,
    category: "HTML",
    question: "Which tag is used to define a table row?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    answer: "<tr>",
  },
  {
    id: 8,
    category: "HTML",
    question: "Which element is used to input text in a form?",
    options: ["<input type='text'>", "<form>", "<textarea>", "<text>"],
    answer: "<input type='text'>",
  },
  {
    id: 9,
    category: "HTML",
    question: "Which tag is used to display a heading?",
    options: ["<head>", "<h1> to <h6>", "<title>", "<heading>"],
    answer: "<h1> to <h6>",
  },
  {
    id: 10,
    category: "HTML",
    question: "What does the <meta> tag do?",
    options: ["Provides metadata", "Displays an image", "Adds a comment", "Creates a link"],
    answer: "Provides metadata",
  },

  // CSS Questions (11–20)
  {
    id: 11,
    category: "CSS",
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    id: 12,
    category: "CSS",
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    answer: "font-size",
  },
  {
    id: 13,
    category: "CSS",
    question: "How do you apply a class selector in CSS?",
    options: [".classname", "#classname", "*classname", "classname"],
    answer: ".classname",
  },
  {
    id: 14,
    category: "CSS",
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bg-color", "background"],
    answer: "background-color",
  },
  {
    id: 15,
    category: "CSS",
    question: "How do you make a text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "bold: true;"],
    answer: "font-weight: bold;",
  },
  {
    id: 16,
    category: "CSS",
    question: "Which unit is relative to the parent element's font size?",
    options: ["em", "px", "%", "vh"],
    answer: "em",
  },
  {
    id: 17,
    category: "CSS",
    question: "Which property is used to set the spacing between lines of text?",
    options: ["line-height", "spacing", "letter-spacing", "padding"],
    answer: "line-height",
  },
  {
    id: 18,
    category: "CSS",
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "*demo", "demo"],
    answer: "#demo",
  },
  {
    id: 19,
    category: "CSS",
    question: "What is the default position value of an element?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    id: 20,
    category: "CSS",
    question: "Which property controls the order of overlapping elements?",
    options: ["z-index", "stack-order", "overlap", "priority"],
    answer: "z-index",
  },

  // JavaScript Questions (21–30)
  {
    id: 21,
    category: "JavaScript",
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Oracle"],
    answer: "Netscape",
  },
  {
    id: 22,
    category: "JavaScript",
    question: "Which keyword is used to declare a constant?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
  {
    id: 23,
    category: "JavaScript",
    question: "How do you write a comment in JavaScript?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment"],
    answer: "// comment",
  },
  {
    id: 24,
    category: "JavaScript",
    question: "Which method is used to convert JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    answer: "JSON.parse()",
  },
  {
    id: 25,
    category: "JavaScript",
    question: "What is the output of `typeof null`?",
    options: ["object", "null", "undefined", "boolean"],
    answer: "object",
  },
  {
    id: 26,
    category: "JavaScript",
    question: "What does `NaN` stand for?",
    options: ["Not a Number", "New and Null", "Number and Name", "Null and Nothing"],
    answer: "Not a Number",
  },
  {
    id: 27,
    category: "JavaScript",
    question: "Which symbol is used for strict equality?",
    options: ["===", "==", "!=", "!=="],
    answer: "===",
  },
  {
    id: 28,
    category: "JavaScript",
    question: "What is a closure in JavaScript?",
    options: [
      "A function inside another function that remembers its scope",
      "A loop inside another loop",
      "A function with no return value",
      "A variable defined in global scope",
    ],
    answer: "A function inside another function that remembers its scope",
  },
  {
    id: 29,
    category: "JavaScript",
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()",
  },
  {
    id: 30,
    category: "JavaScript",
    question: "What is the result of `2 + '2'`?",
    options: ["'22'", "4", "NaN", "Error"],
    answer: "'22'",
  },

  // React Questions (31–40)
  {
    id: 31,
    category: "React",
    question: "What is React primarily used for?",
    options: ["Building user interfaces", "Handling databases", "Styling web pages", "Routing"],
    answer: "Building user interfaces",
  },
  {
    id: 32,
    category: "React",
    question: "What is a component in React?",
    options: ["A reusable piece of UI", "A database schema", "A CSS class", "A backend module"],
    answer: "A reusable piece of UI",
  },
  {
    id: 33,
    category: "React",
    question: "Which hook is used for state in a functional component?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useState",
  },
  {
    id: 34,
    category: "React",
    question: "What is JSX?",
    options: ["JavaScript XML", "Java Standard Extension", "JavaScript Expression", "JSON with XML"],
    answer: "JavaScript XML",
  },
  {
    id: 35,
    category: "React",
    question: "Which method is used to pass data to child components?",
    options: ["Props", "State", "Emit", "Context"],
    answer: "Props",
  },
  {
    id: 36,
    category: "React",
    question: "What does the useEffect hook do?",
    options: ["Performs side effects", "Declares state", "Creates components", "Manages styles"],
    answer: "Performs side effects",
  },
  {
    id: 37,
    category: "React",
    question: "What is a key prop used for?",
    options: ["Identifying elements in a list", "Styling elements", "Creating event listeners", "Passing props"],
    answer: "Identifying elements in a list",
  },
  {
    id: 38,
    category: "React",
    question: "Which command creates a new React app?",
    options: ["npx create-react-app myApp", "npm install react", "npm start react", "react-new myApp"],
    answer: "npx create-react-app myApp",
  },
  {
    id: 39,
    category: "React",
    question: "Which of these is a valid React fragment?",
    options: ["<> </>", "<fragment></fragment>", "<div></div>", "<React.Fragment></React.Fragment>"],
    answer: "<> </>",
  },
  {
    id: 40,
    category: "React",
    question: "How do you update state in React?",
    options: ["By calling the setState or setFunctionName", "By directly modifying the state", "Using props", "Using context"],
    answer: "By calling the setState or setFunctionName",
  },
];

//  VARIABLE CREATED
let name = document.querySelector("#name");
let note = document.querySelector("#note");
let enterBtn = document.querySelector("#start-btn")
let nameValue = "";
let quizContainer = document.querySelector(".quiz-contianer");
let quizScore = 0
let currentQuestion = 0
let selectedQuestions = [];
let timerInterval;
let timeLeft = 15;
let attemptedQuestion = 0;
let correct = 0;
let wrong = 0;
let totalStartTime = null;


// TAKING INPUT FROM THE USER

function handleSubmit(event) {
  event.preventDefault();
  nameValue = name.value.trim();

  if (nameValue === "") {
    alert("Please enter your name")
  } else {
    const welcomeNote = document.querySelector("#welcome-note");
    welcomeNote.textContent = `Welcome ${nameValue} ! You can start the quiz now.`
    name.style.display = "none";
    enterBtn.style.display = "none";
    note.style.display = "none";
  }
}

// SELECTING THE CATEGORY

function startQuiz(category) {
  if (!nameValue) {
    alert("Enter your name first !")
    return;
  }

  selectedQuestions = quizQuestions
    .filter((question) => question.category === category)
    .sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  quizScore = 0;
  timeLeft = 15;
  document.querySelector(".logo").style.display = "none";
  document.querySelector("#category-btn").style.display = "none";
  displayQuestions()
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


// DISPLAY FUNCTION

function displayQuestions() {
  clearInterval(timerInterval);
  timeLeft = 15;

  quizContainer.innerHTML = "";
  quizContainer.style.background = "linear-gradient(to right, #4949c7, #6b6bf2)";

  let categoryHeading = document.createElement("h1");
  categoryHeading.className = "category-heading";
  categoryHeading.innerText = `${selectedQuestions[0].category} `;
  quizContainer.appendChild(categoryHeading);

  if (currentQuestion >= selectedQuestions.length) {
    showFinalResult();
    return;
  }

  let current = selectedQuestions[currentQuestion];

  let progressDiv = document.createElement("div")
  progressDiv.className = "progressDiv"
  quizContainer.appendChild(progressDiv)

  let timerScore = document.createElement("div")
  timerScore.className = "timerScore"
  let timer = document.createElement("p");
  timer.id = "timer";
  timer.innerText = `Time left: ${timeLeft}s`;
  timer.style.color = "white";
  timerScore.appendChild(timer);
  quizContainer.appendChild(timerScore);
  startTimer();

  let progress = document.createElement("div");
  progress.className = "progress-bar";
  progress.innerHTML = `<div class="progress" style="width: ${(currentQuestion / selectedQuestions.length) * 100}%"></div>`;
  progressDiv.appendChild(progress);

  // LIVE SCORE
  let scoreBoard = document.createElement("p");
  scoreBoard.id = "live-score";
  scoreBoard.innerText = `Score: ${quizScore}`;
  scoreBoard.style.color = "white";
  timerScore.appendChild(scoreBoard);

  let questionDiv = document.createElement("div")
  questionDiv.className = "questionDiv";
  let questionElem = document.createElement("h2");
  questionElem.className = "questionElem";
  questionElem.textContent = `Q${currentQuestion + 1}. ${current.question}`;
  questionDiv.appendChild(questionElem)
  quizContainer.appendChild(questionDiv);


  let optionDiv = document.createElement("div");
  optionDiv.className = "optionDiv";
  let ul = document.createElement('ul');
  const shuffledOptions = shuffleArray([...current.options]); // create a shuffled copy
  shuffledOptions.forEach((option) => {
    let li = document.createElement("li");
    li.innerText = option;
    li.classList.add("option");
    li.style.cursor = "pointer";
    li.addEventListener("click", () => checkAnswer(li, option));
    ul.appendChild(li);
  });
  optionDiv.appendChild(ul)
  quizContainer.appendChild(optionDiv);

  let nextBtnDiv = document.createElement("div");
  nextBtnDiv.className = "nextBtnDiv"
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "NEXT";
  nextBtn.style.display = "none";
  nextBtn.id = "next-btn";
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    attemptedQuestion++;
    displayQuestions();
  });

  nextBtnDiv.appendChild(nextBtn)
  quizContainer.appendChild(nextBtnDiv);
}

// CHECK ANSWER
function checkAnswer(selectedLi, selectedOption) {
  clearInterval(timerInterval);

  const allOptions = document.querySelectorAll(".option");

  const correctAnswer = selectedQuestions[currentQuestion].answer;

  allOptions.forEach(option => {
    option.style.pointerEvents = "none"; // Disable further clicking
    if (option.innerText === correctAnswer) {
      option.style.backgroundColor = "#8BC34A";// Green for correct

    } else if (option === selectedLi && selectedOption !== correctAnswer) {
      option.style.backgroundColor = "#F44336"; // Red for wrong
      wrong++

    }
  });
  if (selectedOption === correctAnswer) {
    quizScore++; // Increment first
    correct++
    document.querySelector("#live-score").innerText = `Score: ${quizScore}`;
  };

  document.querySelector("#next-btn").style.display = "block";
}

// Timer Function
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const timer = document.querySelector("#timer");
    if (timer) timer.innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      currentQuestion++;
      displayQuestions();
    }
  }, 1000);
}


// Final Result
function showFinalResult() {
  quizContainer.style.backgroundColor = "white";

  quizContainer.innerHTML = `<div id="finalHead">
  <h2 id="finalHeading">QUIZ RESULT</h2></div>

  <p id="finalPara">${nameValue} your result is :</p>
  <div id="finalSec">
  <div>
  <p id="finalP">Total Questions :</p>
  <p id="finalP">Attempted Questions :</p>
  <p id="finalP">Correct : </p>
  <p id="finalP">Wrong : </p>
  <p id="finalP">Total Percentage:</p></div>
  
  <div>
  <p> ${selectedQuestions.length}</p>
   <p> ${attemptedQuestion}</p>
    <p>${correct}</p>
     <p>${wrong}</p>
      <p> ${((quizScore / selectedQuestions.length) * 100).toFixed(2)}% </p>
  </div>
  </div>
  
  <div id="finalBtnSec">
  <button id="finalBtn" onclick="homePage()">HOME</button>
  <button id="finalBtn" onclick="playagain()">PLAY AGAIN</button>
  </div>
`;
}

function homePage() {
  id = "finalHeading"
  location.reload(); // refreshes the entire page
}

function playagain() {
  currentQuestion = 0;
  quizScore = 0;
  attemptedQuestion = 0;
  correct = 0;
  wrong = 0;
  timeLeft = 15;
  displayQuestions();
}
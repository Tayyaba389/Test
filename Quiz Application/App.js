var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];
  
  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var index = 0;
  var score = 0;
  var sec = 59;
  var min = 1;
  
  var timerElement = document.getElementById("timer");
  
  function timer() {
    timerElement.innerText = `${min}:${sec < 10 ? '0' + sec : sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }
  
  setInterval(timer, 1000);  // Set timer interval to 1 second
  
  function nextQuestion() {
    // Check if the quiz is complete
    if (index >= questions.length) {
      Swal.fire({
        title: "Good job!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}%`,
        icon: "success",
      });
      return; // Stop further execution
    }
  
    var options = document.getElementsByClassName("options");
  
    // Checking the answer for the previous question
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index - 1][`option${selectedOption}`];
        var corrAnswer = questions[index - 1]["corrAnswer"];
        if (getOption === corrAnswer) {
          score++;
        }
      }
      options[i].checked = false;
    }
  
    button.disabled = true; // Disable the button initially
  
    // Displaying the current question and options
    question.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
  
    index++; // Move to the next question
  }
  
  function clicked() {
    button.disabled = false; // Enable button when an option is clicked
  }
  
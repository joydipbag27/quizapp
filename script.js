const questionTab = document.querySelector(".question-tab");
const optionAText = document.querySelector(".option-a > h3");
const optionBText = document.querySelector(".option-b > h3");
const optionCText = document.querySelector(".option-c > h3");
const optionDText = document.querySelector(".option-d > h3");
const optionTab = document.querySelector(".option-tab");
const options = document.querySelectorAll(".options");
const timer = document.querySelector(".timer");
const nextBtn = document.querySelector(".next");
const questionNoOngoing = document.querySelector(".game-page-question-number");
const timeUp = document.querySelector(".timeUp");
const correctSound = document.querySelector(".correctSound");
const wrongSound = document.querySelector(".wrongSound");
const muteUnmute = document.querySelector(".muteUnmute");
const backgroundSound = document.querySelector(".backgroundSound");
let countdown = 31;
let questionNumber = 0;
let userResult = 0;

const questionSet = [
  [
    "What's the first thing most people do after waking up?",
    [
      "Check their phone",
      "Brush their teeth",
      "Make coffee",
      "Stretch",
      "option-a",
    ],
  ],
  [
    "Which meal is commonly known as the most important of the day?",
    ["Breakfast", "Lunch", "Dinner", "Snack", "option-a"],
  ],
  [
    "What's a common beverage consumed to wake up in the morning?",
    ["Tea", "Coffee", "Juice", "Milk", "option-a"],
  ],
  [
    "How many hours of sleep do adults generally need?",
    ["5-6", "6-7", "7-8", "8-9", "option-c"],
  ],
  [
    "What's a popular form of exercise that requires no equipment?",
    ["Yoga", "Cycling", "Weightlifting", "Swimming", "option-a"],
  ],
  [
    "What's a common way to relax after a long day?",
    [
      "Reading a book",
      "Watching TV",
      "Taking a walk",
      "All of the above",
      "option-d",
    ],
  ],
  [
    "What's typically used to brew tea?",
    ["Tea leaves", "Coffee beans", "Mint leaves", "Lemongrass", "option-a"],
  ],
  [
    "Which item is essential for brushing teeth?",
    ["Toothbrush", "Comb", "Razor", "Towel", "option-a"],
  ],
  [
    "What's a common form of public transport in cities?",
    ["Trains", "Buses", "Taxis", "All of the above", "option-d"],
  ],
  [
    "What's the most common fruit added to breakfast cereals?",
    ["Banana", "Apple", "Grapes", "Watermelon", "option-a"],
  ],
  [
    "What's a popular choice for a healthy afternoon snack?",
    ["Chips", "Nuts", "Chocolate", "Ice cream", "option-b"],
  ],
  [
    "What's the most used household appliance in the morning?",
    ["Microwave", "Toaster", "Washing machine", "Blender", "option-b"],
  ],
  [
    "Which fabric is commonly used for comfortable daily wear?",
    ["Wool", "Cotton", "Silk", "Velvet", "option-b"],
  ],
  [
    "What's a common weekend activity?",
    [
      "Grocery shopping",
      "Cleaning",
      "Watching a movie",
      "All of the above",
      "option-d",
    ],
  ],
  [
    "Which of these is a popular form of digital payment?",
    ["Credit card", "Cash", "Cryptocurrency", "QR code apps", "option-d"],
  ],
  [
    "What's a typical ingredient in a smoothie?",
    ["Bread", "Fruits", "Cheese", "Potatoes", "option-b"],
  ],
  [
    "What's an eco-friendly way to carry groceries?",
    ["Plastic bags", "Paper bags", "Cloth bags", "Cartons", "option-c"],
  ],
  [
    "What's a common household chore?",
    [
      "Vacuuming",
      "Painting walls",
      "Fixing the roof",
      "Changing the lights",
      "option-a",
    ],
  ],
  [
    "What's a common lunch item for office-goers?",
    ["Pizza", "Salad", "Ice cream", "Candy", "option-b"],
  ],
  [
    "Which of these is a nighttime skincare essential?",
    ["Face mask", "Night cream", "Sunscreen", "Hair gel", "option-b"],
  ],
  [
    "What's a common way to track physical activity?",
    ["Fitness app", "Pedometer", "Smartwatch", "All of the above", "option-d"],
  ],
  [
    "What's a good habit before going to bed?",
    [
      "Checking emails",
      "Drinking coffee",
      "Reading a book",
      "Watching TV",
      "option-c",
    ],
  ],
  [
    "What's a popular drink served chilled in the summer?",
    ["Hot chocolate", "Lemonade", "Green tea", "Espresso", "option-b"],
  ],
  [
    "What's a common activity during a power outage?",
    [
      "Reading a book",
      "Playing board games",
      "Lighting candles",
      "All of the above",
      "option-d",
    ],
  ],
  [
    "What's a popular mode of exercise in groups?",
    ["Dancing", "Group yoga", "Aerobics class", "All of the above", "option-d"],
  ],
];

questionTab.textContent = questionSet[0][0];
optionAText.textContent = questionSet[0][1][0];
optionBText.textContent = questionSet[0][1][1];
optionCText.textContent = questionSet[0][1][2];
optionDText.textContent = questionSet[0][1][3];



let countClearId = setInterval(() => {
  countdown--;
  timer.textContent = `00:${countdown}`;
  if (countdown <= 9) {
    timer.textContent = `00:0${countdown}`;
  }
  if (countdown == 0) {
    clearInterval(countClearId);
    timeUp.classList.add("timeUp-show");
  }

  if (countdown <= 30) {
    document.body.style.backgroundColor = "#CCE2C2";
    timer.style.backgroundColor = "#02a40a78";
    timer.style.boxShadow = "1px 4px #02a40ad4";
    nextBtn.style.color = "#01AB08";
  }
  if (countdown <= 15) {
    document.body.style.backgroundColor = "#E4E5C7";
    timer.style.backgroundColor = "#C5B1006E";
    timer.style.boxShadow = "1px 4px #c5b100bf";
    nextBtn.style.color = "#C58800";
  }
  if (countdown <= 5) {
    document.body.style.backgroundColor = "#DBADAD";
    timer.style.backgroundColor = "#C50C006E";
    timer.style.boxShadow = "1px 4px #c50d00ba";
    nextBtn.style.color = "#C50000";
  }
}, 1000);

nextBtn.addEventListener("click", () => {
  if (optionTab.style.pointerEvents === "none") {
    questionNumber++;

    if (questionNumber <= 8) {
      questionNoOngoing.textContent = `0${questionNumber + 1}/25`;
    } else {
      questionNoOngoing.textContent = `${questionNumber + 1}/25`;
    }

    countdown = 31;
    questionTab.textContent = questionSet[questionNumber][0];
    optionAText.textContent = questionSet[questionNumber][1][0];
    optionBText.textContent = questionSet[questionNumber][1][1];
    optionCText.textContent = questionSet[questionNumber][1][2];
    optionDText.textContent = questionSet[questionNumber][1][3];

    countClearId = setInterval(() => {
      countdown--;
      timer.textContent = `00:${countdown}`;
      if (countdown <= 9) {
        timer.textContent = `00:0${countdown}`;
      }
      if (countdown == 0) {
        clearInterval(countClearId);
        timeUp.classList.add("timeUp-show");
      }

      if (countdown <= 30) {
        document.body.style.backgroundColor = "#CCE2C2";
        timer.style.backgroundColor = "#02a40a78";
        timer.style.boxShadow = "1px 4px #02a40ad4";
        nextBtn.style.color = "#01AB08";
      }
      if (countdown <= 15) {
        document.body.style.backgroundColor = "#E4E5C7";
        timer.style.backgroundColor = "#C5B1006E";
        timer.style.boxShadow = "1px 4px #c5b100bf";
        nextBtn.style.color = "#C58800";
      }
      if (countdown <= 5) {
        document.body.style.backgroundColor = "#DBADAD";
        timer.style.backgroundColor = "#C50C006E";
        timer.style.boxShadow = "1px 4px #c50d00ba";
        nextBtn.style.color = "#C50000";
      }
    }, 1000);

    optionTab.style.pointerEvents = "auto";
    options.forEach((resetOption) => {
      if (
        (resetOption.childNodes[3].lastElementChild.style.display = "block")
      ) {
        resetOption.childNodes[3].lastElementChild.style.display = "none";
      }
      if (
        (resetOption.childNodes[3].firstElementChild.style.display = "block")
      ) {
        resetOption.childNodes[3].firstElementChild.style.display = "none";
      }
    });
  }
});

options.forEach((c) => {
  c.addEventListener("click", (e) => {
    if (countdown > 0) {
      console.log("clicked");
      optionTab.style.pointerEvents = "none";
      clearInterval(countClearId);

      if (questionNumber == 24) {
        nextBtn.textContent = "Show Result";
        nextBtn.setAttribute(
          "onclick",
          "window.location.href = 'resultPage.html'"
        );
      }

      if (e.target.classList.contains(questionSet[questionNumber][1][4])) {
        e.target.childNodes[3].lastElementChild.style.display = "block";
        e.target.childNodes[3].lastElementChild.src = "img/check-button.png";
        userResult++;
        localStorage.setItem("userResult", userResult);

        if (muteUnmute.checked) {
          correctSound.play();
        }
      } else {

        if (muteUnmute.checked) {
          wrongSound.play();
        }
        e.target.childNodes[3].lastElementChild.style.display = "block";
        e.target.childNodes[3].lastElementChild.src = "img/delete.png";
        e.target.childNodes[3].firstElementChild.style.display = "block";
        [...e.target.parentElement.childNodes].forEach((correctAnswer) => {
          if (
            correctAnswer.nodeType === Node.ELEMENT_NODE &&
            correctAnswer.classList.contains(questionSet[questionNumber][1][4])
          ) {
            console.log(correctAnswer);
            correctAnswer.childNodes[3].lastElementChild.style.display =
              "block";
            correctAnswer.childNodes[3].lastElementChild.src =
              "img/check-button.png";
          }
        });
      }
    }
  });
});

// end of resultPage

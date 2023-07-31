// let primary = document.querySelector(".primary");
// let btn = document.querySelector(".btn");
// let btnMinus = document.querySelector(".minus");
// let username = document.querySelector(".username");
// let userTitle = document.querySelector(".user-title");
// let addNameBtn = document.querySelector(".addname");
// let paragrapy = document.querySelector(".p");
// let count = 0;
// let primaryPlayer = 9;
// let secondPlayer = 9;

// addNameBtn.addEventListener("click", () => {
//   if (username.value === "") {
//     userTitle.innerHTML = "User";
//   } else {
//     userTitle.innerHTML = "";
//     userTitle.innerHTML = username.value;
//   }
// });

// btn.addEventListener("click", () => {
//   count++;
//   primary.innerHTML = count;
// });

// btnMinus.addEventListener("click", () => {
//   if (count < 1) {
//     count = 0;
//   } else {
//     count--;
//     primary.innerHTML = count;
//   }
// });

// let startBtn = document.querySelector(".start");

let playerLeftCount = document.querySelector(".left-count");
let playerRightCount = document.querySelector(".right-count");
let playerOneBtn = document.querySelector(".player-one-btn");
let playerTwoBtn = document.querySelector(".player-two-btn");
let winnerCountOne = document.querySelector(".winner-count-one");
let winnerCountTwo = document.querySelector(".winner-count-two");
let startBtn = document.querySelector(".start-btn");
let leftWin = document.querySelector(".left-win");
let rightWin = document.querySelector(".right-win");
let Draw = document.querySelector(".draw");
let secondDraw = document.querySelector(".second-draw");
let leftCount = 0;
let rightCount = 0;
let winnerLeftCount = 0;
let WinnerRightCount = 0;
let five = 5;
let leftPlayer = 0;
let rightPlayer = 0;

var timeInSecs;
var ticker;

function tick() {
  var secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  } else if (leftPlayer > rightPlayer) {
    winnerLeftCount++;
    winnerCountOne.innerHTML = winnerLeftCount;

    leftWin.classList.remove("hidden");

    clearInterval(ticker);
  } else if (leftPlayer < rightPlayer) {
    WinnerRightCount++;
    winnerCountTwo.innerHTML = WinnerRightCount;

    rightWin.classList.remove("hidden");

    clearInterval(ticker);
  } else {
    Draw.classList.remove("hidden");
    secondDraw.classList.remove("hidden");

    clearInterval(ticker);
  }

  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

  document.getElementById("countdown").innerHTML = pretty;
}

startBtn.addEventListener("click", () => {
  startButton();
});

function startButton() {
  clearInterval(ticker);

  setTimeout(() => {
    startTimer(5 * 60); // 4 minutes in seconds
    function startTimer(secs) {
      timeInSecs = parseInt(secs);
      ticker = setInterval("tick()", 1000);
    }
  }, 100);
  leftPlayer = 0;
  rightPlayer = 0;
  leftCount = 0;
  rightCount = 0;
  playerLeftCount.innerHTML = 0;
  playerRightCount.innerHTML = 0;
  Draw.classList.add("hidden");
  secondDraw.classList.add("hidden");
  rightWin.classList.add("hidden");
  leftWin.classList.add("hidden");
}

window.addEventListener("keypress", (e) => {
  if (e.key === "1") {
    leftCount++;
    playerLeftCount.innerHTML = leftCount;
    let primaryPlayer = parseInt(playerLeftCount.innerHTML);
    leftPlayer = primaryPlayer;
  } else if (e.key === "2") {
    rightCount++;
    playerRightCount.innerHTML = rightCount;
    let secondPlayer = parseInt(playerRightCount.innerHTML);
    rightPlayer = secondPlayer;
  } else if (e.key === "Enter") {
    startButton();
  }
});

playerOneBtn.addEventListener("click", () => {
  leftCount++;
  playerLeftCount.innerHTML = leftCount;
  let primaryPlayer = parseInt(playerLeftCount.innerHTML);
  leftPlayer = primaryPlayer;
});

playerTwoBtn.addEventListener("click", () => {
  rightCount++;
  playerRightCount.innerHTML = rightCount;
  let secondPlayer = parseInt(playerRightCount.innerHTML);
  rightPlayer = secondPlayer;
});

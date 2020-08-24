'use strict';

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');


const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    }else {
        startGame();
    }
    started =! started;
});

//start game
function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

//stop game
function stopGame() {
    stopGameTimer();
}

//view stop button
function showStopButton() {
    const icon = gameBtn.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

//Timer and Score view(visible)
function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

//Start Timter 
function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimeText(remainingTimeSec);   
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            return;
        }
        updateTimeText(--remainingTimeSec);
    }, 1000);
}

//Stop Timer
function stopGameTimer() {
    clearInterval(timer);
    hideGameButton();
    showPopUpWidthText('REPLAY?');
}

//Timer
function updateTimeText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 6;
    gameTimer.innerHTML = `${minutes}:${seconds}`;
}

function showPopUpWidthText(text) {
    popUpText.innerHTML = text;
    popUp.classList.remove('pop-up--hide');
}

//Item 배치
function initGame() {
    field.innerHTML = '';
    gameScore.innerHTML = CARROT_COUNT;

    addItem('carrot', 5, 'img/carrot.png');
    addItem('bug', 5, 'img/bug.png');
}

//Item 좌표
function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for(let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

//Random 좌표
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// const gameHeader = document.querySelector('.game__header');
// const startBtn = document.querySelector('.game__start__btn');
// const sections = document.querySelector('.carrot__game');
// const position = document.querySelector('.game__position');
// const pauseBtn = document.createElement('button');


// startBtn.addEventListener('click', gameStart);

// //game start button click
// function gameStart() {
//     startBtn.remove();
//     pauseBtn.setAttribute('class', 'game__pause__btn');
//     pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
//     gameHeader.prepend(pauseBtn);

//     timer();
//     bugImgPlace();
//     removeImg();
// }

// function bugImgPlace() {
//     position.innerHTML =`
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="0" type="carrot">
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="1" type="buh>
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="2">
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="3">
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="4">
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="5">
//     <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="6">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="7">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="8">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="9">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="10">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="11">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="12">
//     <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="13">
//     `

//     for(let i = 1; i < position.children.length; i++) {
//         const width = position.clientWidth - document.querySelector('.game__img__carrot').width;
//         const height = position.clientHeight - document.querySelector('.game__img__carrot').height;
//         const randPosX = Math.floor((Math.random()*width));
//         const randPosY = Math.floor((Math.random()*height));
//         position.children[i].style.top = randPosY+'px';
//         position.children[i].style.left = randPosX+'px';
//     }
// }


// //카운트 체크
// let count = 0;


// function removeImg() {
//     position.addEventListener('click', event => {
//         const gameCheck = document.querySelector('.game__check');
//         const id = event.target.dataset.id;
//         const bug =  document.querySelector(`.game__img__bug[data-id="${id}"]`);
//         const carrot =  document.querySelector(`.game__img__carrot[data-id="${id}"]`);
//         console.log(id);
//         if(id < 7) {
//             bug.remove();
//         }else  {
//             carrot.remove();
//             count++;
//             gameCheck.innerHTML = count;
//         }

//         if(count === 7) {
//             gameWin();
//         }
//     });
// }


// function gameWin() {
//     const rePlayBtn = document.querySelector(".game__replay");
//     const gameWinScreen = document.querySelector(".game__win");
//     const gameCheck = document.querySelector(".game__check");

//     gameWinScreen.classList.add('active');

//     rePlayBtn.addEventListener('click', () => {
//         gameWinScreen.classList.remove('active');
//         count = 0;
//         gameCheck.innerHTML = count;
//         pauseBtn.remove();
//         gameStart();
//     });
// }


// // function gameLoss() {
// //     const gameLossScreen = document.querySelector(".game__loss");
// //     gameLossScreen.classList.add('active');
    
// //     rePlayBtn.addEventListener('click', () => {
// //         gameWinScreen.classList.remove('active');
// //         count = 0;
// //         gameCheck.innerHTML = count;
// //         pauseBtn.remove();
// //         gameStart();
// //     });
// // }

// //Timer
// function timer() {
//     const gameTimeout = document.querySelector('.game__timeout');

//     let timeleft = 0;
//     let downloadTimer = setInterval(function(){
//       gameTimeout.innerHTML = `0 : ${10 - timeleft}`;
//       timeleft += 1;

//       if(timeleft > 10){
//         clearInterval(downloadTimer);
//         gameTimeout.innerHTML = '시간초과';
//       }else if(count === 7) {
//         clearInterval(downloadTimer);
//       }
//     }, 1000);
// }
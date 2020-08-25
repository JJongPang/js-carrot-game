'use strict'
import PopUp from './popup.js';
import Game from './game.js';

// const field = document.querySelector('.game__field');
// const fieldRect = field.getBoundingClientRect();

// const gameBtn = document.querySelector('.game__button');
// const gameTimer = document.querySelector('.game__timer');
// const gameScore = document.querySelector('.game__score');

// const popUp = document.querySelector('.pop-up');
// const popUpMessage = document.querySelector('.pop-up__message');
// const popUpRefresh = document.querySelector('.pop-up__refresh');

// const carrotSound = new Audio('./sound/carrot_pull.mp3');
// const bugSound = new Audio('./sound/bug_pull.mp3');
// const bgSound = new Audio('./sound/bg.mp3');
// const winSound = new Audio('./sound/game_win.mp3');
// const alertSound = new Audio('./sound/alert.wav');

// let started = false;
// let score = 0;
// let timer = undefined;

// const CARROT_SIZE = 80;
// const CARROT_COUNT = 5;
// const BUG_COUNT = 5;
//const GAME_DURATION_SEC = 5;

// field.addEventListener('click', onFieldClick);

// //field class
// const gameField = new Field(CARROT_COUNT, BUG_COUNT);
// gameField.setClickListener(onItemClick);

// //Item check
// function onItemClick(item) {
//     if(!started) {
//         return;
//     }
//     if(item === 'carrot') {
//         score++;
//         gameStart.updateScoreBoard();
//         //updateScoreBoard();
//         if(score === CARROT_COUNT) {
//             finishGame(true)
//         }
//     }else if(item === 'bug') {
//         gameStart.stopGameTimer();
//         //stopGameTimer();
//         finishGame(false);
//     }
// } 
//start button 'click'
// gameBtn.addEventListener('click', () => {
//     if(started) {
//         stopGame();
//     }else {
//         startGame();
//     }
// });

//popup class
const gameFinishBanner = new PopUp();
const game = new Game(5, 5, 5);
    game.setGameStopListener((reason) => {
        let message;
        switch(reason) {
            case 'cancel': message = 'REPLAY?';
                break;
            case 'win': message = 'YOU WON';
                break;
            case 'lose': message = 'YOU LOST';
                break;
            default:
                throw new Error('not valid reason');       
        }
        gameFinishBanner.showWidthText(message);
    });


gameFinishBanner.setClickListener(() => {
    game.start();
});

// popUpRefresh.addEventListener('click', () => {
//     startGame();
// });

//start game
// function startGame() {
//     started = true;
//     initGame();
//     gameStart.showStopButton();
//     gameStart.showTimerAndScore();
//     gameStart.gameTimer();
//     //showStopButton();
//     // showTimerAndScore();
//     // startGmaeTimer();
//     sound.playBg();
// }

// //stop game
// function stopGame() {
//     started = false;
//     gameStart.stopGameTimer();
//     gameStart.hideButton();
//     // stopGameTimer();
//     // hideGameButton();
//     gameFinishBanner.showWidthText('REPLAY?');
//     // showPopUpWidthText();
//     sound.playAlert();
//     sound.stopBg();
//     // playSound(alertSound);
//     // stopSound(bgSound);
// }

//finish game
// function finishGame(win) {
//     started = false;
//     gameStart.hideButton();
//     //hideGameButton();
//     if(win) {
//         sound.playWin();
//         //playSound(winSound);
//     }else {
//         sound.playBug();
//         //playSound(bugSound);
//     }
//     gameStart.stopGameTimer();
//     //stopGameTimer();
//     sound.stopBg();
//     //stopSound(bgSound);
//     gameFinishBanner.showWidthText(win ? 'YOU WON' : 'YOU LOST')
//     // showPopUpWidthText(win ? 'YOU WON' : 'YOU LOST');
// }

//change stop button
// function showStopButton() {
//     const icon = gameBtn.querySelector('.fas');
//     icon.classList.add('fa-stop');
//     icon.classList.remove('fa-play');
//     gameBtn.style.visibility = 'visible';
// }

//stop button hidden
// function hideGameButton() {
//     gameBtn.style.visibility = 'hidden';
// }

//view : timer, score style setting
// function showTimerAndScore() {
//     gameTimer.style.visibility = 'visible';
//     gameScore.style.visibility = 'visible';
// }

//GAME_DURATION 
// function startGmaeTimer() {
//     let remainingTimeSec = GAME_DURATION_SEC;
//     updateTimerText(remainingTimeSec);
//     timer = setInterval(() => {
//         if(remainingTimeSec <= 0) {
//             clearInterval(timer);
//             finishGame(CARROT_COUNT === score);
//             return;
//         }
//         updateTimerText(--remainingTimeSec);
//     }, 1000);
// }

//stop timer
// function stopGameTimer() {
//     clearInterval(timer);
// }

//innerText timer
// function updateTimerText(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     gameTimer.innerHTML = `${minutes}:${seconds}`;
// }

// //popup setting
// function showPopUpWidthText(text) {
//     popUpMessage.innerText = text;
//     popUp.classList.remove('pop-up--hide');
// }

//item init field
// function initGame() {
//     score = 0;
//     // field.innerHTML = '';
//     gameStart.gameScore.innerText = CARROT_COUNT;
//     gameField.init(); 
//     // addItem('carrot', CARROT_COUNT, 'img/carrot.png');
//     // addItem('bug', BUG_COUNT, 'img/bug.png');
// }

//sound
// function playSound(sound) {
//     sound.currentTime = 0;
//     sound.play();
// }

// function stopSound(sound) {
//     sound.pause();
// }

//innerText score
// function updateScoreBoard() {
//     gameScore.innerText = CARROT_COUNT - score;
// }

// //Random add Item
// function addItem(className, count, imgPath) {
//     const x1 = 0;
//     const y1 = 0;
//     const x2 = fieldRect.width - CARROT_SIZE;
//     const y2 = fieldRect.height - CARROT_SIZE;
//     for(let i = 0; i < count; i++) {
//         const item = document.createElement('img');
//         item.setAttribute('class', className);
//         item.setAttribute('src', imgPath);
//         item.style.position = 'absolute';
//         const x = randomNumber(x1, x2);
//         const y = randomNumber(y1, y2);
//         item.style.left = `${x}px`;
//         item.style.top = `${y}px`;
//         field.appendChild(item);
//     }
// }

// //Random item
// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }


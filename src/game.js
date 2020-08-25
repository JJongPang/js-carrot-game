'use strict'
import Field from './field.js';
import * as sound from './sound.js';

export default class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');

        //start button 'click'
        this.gameBtn.addEventListener('click', () => {
        if(this.started) {
            this.stop();
        }else {
            this.start();
        }
    });
        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    //Item check
    onItemClick =  item => {
        if(!this.started) {
            return;
        }
        if(item === 'carrot') {
            this.score++;
            this.updateScoreBoard();
            //updateScoreBoard();
        if(this.score === this.carrotCount) {
            this.finish(true)
        }
        }else if(item === 'bug') {
            // gameStart.stopGameTimer();
            //stopGameTimer();
            this.finish(false);
        }
    }

    //game end check
    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    //start game
    start() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
    //showStopButton();
    // showTimerAndScore();
    // startGmaeTimer();
        sound.playBg();
}
    //stop game
    stop() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        // stopGameTimer();
        // hideGameButton();
        //this.gameFinishBanner.showWidthText('REPLAY?');
        // showPopUpWidthText();
        sound.playAlert();
        sound.stopBg();
        this.onGameStop && this.onGameStop('cancel');
        // playSound(alertSound);
        // stopSound(bgSound);
    }
    //finish game
    finish(win) {
        this.started = false;
        this.hideGameButton();
        //hideGameButton();
        if(win) {
            sound.playWin();
            //playSound(winSound);
        }else {
            sound.playBug();
        }
        this.stopGameTimer();
        //stopGameTimer();
        sound.stopBg();
        //stopSound(bgSound);
        //gameFinishBanner.showWidthText(win ? 'YOU WON' : 'YOU LOST')
        // showPopUpWidthText(win ? 'YOU WON' : 'YOU LOST');
        this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    } 
    //change stop button
    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    //stop button hidden
    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }
    //view : timer, score style setting
    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }
    //GAME_DURATION 
    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if(remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.finish(this.carrotCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    //stop timer
    stopGameTimer() {
        clearInterval(this.timer);
    }

    //innerText timer
    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerHTML = `${minutes}:${seconds}`;
    }

    //innerText score
    updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }

    //item init field
    initGame() {
        this.score = 0;
    // field.innerHTML = '';
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init(); 
    // addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    // addItem('bug', BUG_COUNT, 'img/bug.png');
    }
}

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

//innerText score
// function updateScoreBoard() {
//     gameScore.innerText = CARROT_COUNT - score;
// }
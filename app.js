'use strict';

const gameHeader = document.querySelector('.game__header');
const startBtn = document.querySelector('.game__start__btn');

startBtn.addEventListener('click', gameStart);

function gameStart(event) {
    const pauseBtn = document.createElement('button');
    const gameTimeout = document.querySelector('.game__timeout');

    startBtn.remove();

    pauseBtn.setAttribute('class', 'game__pause__btn');
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

    gameHeader.prepend(pauseBtn);

    let timeleft = 0;
    let downloadTimer = setInterval(function(){
      gameTimeout.innerHTML = `0 : ${10 - timeleft}`;
      timeleft += 1;

      if(timeleft > 10){
        clearInterval(downloadTimer);
        gameTimeout.innerHTML = '시간초과';
      }
    }, 1000);
}
'use strict';

const gameHeader = document.querySelector('.game__header');
const startBtn = document.querySelector('.game__start__btn');
const sections = document.querySelector('.carrot__game');
const position = document.querySelector('.game__position');

startBtn.addEventListener('click', gameStart);

//game start button click
function gameStart() {
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

    bugImgPlace();
    removeImg();
}


function bugImgPlace() {

    position.innerHTML =`
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="0">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="1">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="2">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="3">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="4">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="5">
    <img src="img/bug.png" alt="bug" class="game__img__bug" data-id="6">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="7">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="8">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="9">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="10">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="11">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="12">
    <img src="img/carrot.png" alt="bug" class="game__img__carrot" data-id="13">
    `
    for(let i = 1; i < position.children.length; i++) {
        const width = position.clientWidth;
        const height = position.clientHeight;
        const randPosX = Math.floor((Math.random()*width));
        const randPosY = Math.floor((Math.random()*height));
        position.children[i].style.top = randPosY+'px';
        position.children[i].style.left = randPosX+'px';
    }
}

function removeImg() {
    
    position.addEventListener('click', event => {
        const id = event.target.dataset.id;
        const bug =  document.querySelector(`.game__img__bug[data-id="${id}"]`);
        const carrot =  document.querySelector(`.game__img__carrot[data-id="${id}"]`);
        const gameCheck = document.querySelector('.game__check');
        let count = 0;
        
        if(id < 7) {
            bug.remove();
        }else  {
            carrot.remove();
            count++;
            gameCheck.innerHTML = count;
        }
    });
}


'use strict'
import PopUp from './popup.js';
import GameBuilder from './game.js';

//popup class
const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .gameDuration(5)
    .carrotCount(5)
    .bugCount(5)
    .build();

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
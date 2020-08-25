'use strict'

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpMessage = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', () => {
        this.onClick && this.onClick();
        this.hide();
        });
    }

    //click listener update
    setClickListener(onClick) {
        this.onClick = onClick;
    }

    //popup setting
    showWidthText(text) {
        this.popUpMessage.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }

    //popup close
    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}
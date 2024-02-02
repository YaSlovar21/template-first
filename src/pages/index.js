import './tw.css';
import './index.css';

import '../images/favicon.svg';

import { initialPlayers } from '../utils/constants';

const playersContainer = document.querySelector('.players-container');
const playerTemplate = document.querySelector('#player-template').content;
const stepNavNumber = document.querySelector('.current-players-step');
const rightPlayersButton = document.querySelector('.players__nav-button_right');
const leftPlayersButton = document.querySelector('.players__nav-button_left');

let windowSize = window.innerWidth;


function addCard(name, titul) {
    const cardElement = playerTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__desc').textContent = titul;
    playersContainer.append(cardElement);
}

function upStep(step) {
    return step + 1 > 5 ? 0 : step + 1;
}

function downStep(step) {
    return step - 1 < 0 ? 5 : step - 1;
}

function updateSlidesAndPags() {
    stepNavNumber.textContent = step + 1;
    playersContainer.innerHTML= '';
    getArr(step).forEach(element => {
        addCard(element.name, element.titul);
    });
}

function getArr(index) {
     return windowSize < 768 
        ? [].concat(initialPlayers[index]) 
        : [].concat(initialPlayers[downStep(index)]).concat(initialPlayers[index]).concat(initialPlayers[upStep(index)])
}

let step = 1; //2
updateSlidesAndPags();
/*
setInterval(()=>{
    step = upStep(step);
    updateSlidesAndPags();
}, 4000);
*/
rightPlayersButton.addEventListener('click', ()=> {
    step = upStep(step);
    updateSlidesAndPags();
});

leftPlayersButton.addEventListener('click', ()=> {
    step = downStep(step);
    updateSlidesAndPags();
});

window.onresize = function() {
    step = 1;
    windowSize = window.innerWidth;
    updateSlidesAndPags();
};

/* STEPS */

let percentsPag = 0;

const stepListBlock = document.querySelector('.steps__list');
const stepNextButton = document.querySelector('.steps__nav-button_right');
const stepPrevButton = document.querySelector('.steps__nav-button_left');

stepNextButton.addEventListener('click', () => {
    if (percentsPag !== 400) {
        percentsPag+=100;
        stepListBlock.setAttribute('style',`transform:translateX(-${percentsPag}%);`);
    }
});

stepPrevButton.addEventListener('click', () => {
    if (percentsPag !== 0) {
        percentsPag-=100;
        stepListBlock.setAttribute('style',`transform:translateX(-${percentsPag}%);`);
    }
});
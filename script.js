'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, playing, activePlayer, scores;
const init = function () {
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


document.querySelector('.dice').classList.add('hidden');

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 1. Generating a random number 1 to 6

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled if true, switch to next player.
        if (dice !== 1) {
            //Add dice to current score

            // currentScore = currentScore + dice;
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to the active player's score
        scores[activePlayer] += currentScore;
        //scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // FINISH GAME

        if (scores[activePlayer] >= 100) {
            playing = false;

            // PLAY AGAIN

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // 2. Check if the player score is >= 100
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init
    //   console.log(`Button Presssed`);

    // Visible restore state


    //Internal State Variables back to Initial state.
    //   playing = true;
    //   currentScore = 0;
    //   score0El.textContent = 0;
    //   score1El.textContent = 0;
    //   // activePlayer = 0;
    //   document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    //   document.getElementById(`current--${activePlayer}`).textContent =
    //     currentScore;
    //   scores[activePlayer] = 0;
    );
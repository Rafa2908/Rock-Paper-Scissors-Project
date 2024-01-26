let gameButton = document.querySelectorAll('.game-icon');

let score = {
    win: 0,
    lose: 0,
    draw: 0
}
let scoreBoard  = document.querySelector('.score');
let gameResult = document.querySelector('.game-result');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let result;
let playerMove;
let computerMove;
let choice = document.querySelector('.choice');

rock.addEventListener('click', () => {
    playerMove = 'Rock';
});
paper.addEventListener('click', () => {
    playerMove = 'Paper';
});
scissor.addEventListener('click', () => {
    playerMove = 'Scissor';
});

function playGame() {
    gameButton.forEach((button) => {
        button.addEventListener('click', () => {

            let randomNumber = Math.random();

            if (randomNumber > 0 && randomNumber < 1/3) {
                computerMove = 'Rock';
            } else if (randomNumber > 1/3 && randomNumber < 2/3) {
                computerMove = 'Paper';
            } else if (randomNumber > 2/3 && randomNumber < 1) {
                computerMove = 'Scissor';
            } 
            
            if (computerMove === 'Rock' && playerMove === 'Rock') {
                result = 'Draw';
                score.draw++;
                gameResult.innerHTML = 'Draw, play again mate'

            } else if (computerMove === 'Paper' && playerMove === 'Rock') {
                result = 'Win';
                score.win++;
                gameResult.innerHTML = 'You won!!';

            } else if (computerMove === 'Scissor' && playerMove === 'Rock') {
                result ='Lose';
                score.lose++;
                gameResult.innerHTML = 'You lost, better luck next time';
            }

            if (computerMove === 'Rock' && playerMove === 'Paper') {
                result = 'Win';
                score.win++;
                gameResult.innerHTML = 'You won!!';

            } else if (computerMove === 'Paper' && playerMove === 'Paper') {
                result = 'Draw';
                score.draw++;
                gameResult.innerHTML = 'Draw, play again mate';

            } else if (computerMove === 'Scissor' && playerMove === 'Paper') {
                result ='Lose';
                score.lose++;
                gameResult.innerHTML = 'You lost, better luck next time';
            }

            if (computerMove === 'Rock' && playerMove === 'Scissor') {
                result = 'Lose';
                score.lose++;
                gameResult.innerHTML = 'You lost, better luck next time';

            } else if (computerMove === 'Paper' && playerMove === 'Scissor') {
                result = 'Win';
                score.win++;
                gameResult.innerHTML = 'You won!!';

            } else if (computerMove === 'Scissor' && playerMove === 'Scissor') {
                result ='Draw';
                score.draw++;
                gameResult.innerHTML = 'Draw, play again mate';
            }
            // Game Code end

            if (computerMove === 'Rock' && playerMove === 'Rock') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } else if (computerMove === 'Paper' && playerMove === 'Rock') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } if (computerMove === 'Scissor' && playerMove === 'Rock') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `
            }

            if (computerMove === 'Rock' && playerMove === 'Paper') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } else if (computerMove === 'Paper' && playerMove === 'Paper') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } if (computerMove === 'Scissor' && playerMove === 'Paper') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `
            }

            if (computerMove === 'Rock' && playerMove === 'Scissor') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } else if (computerMove === 'Paper' && playerMove === 'Scissor') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `

            } if (computerMove === 'Scissor' && playerMove === 'Scissor') {
                choice.innerHTML = 
                `
                Player's choice: ${playerMove} - Computer's Choice: ${computerMove}
                `
            }

            scoreBoard.innerHTML = `
            Win: ${score.win},
            Lose: ${score.lose},
            Draw: ${score.draw}
            `
            console.log(result);
            console.log(score);
        });
        

       
    });
    

    
}

playGame();
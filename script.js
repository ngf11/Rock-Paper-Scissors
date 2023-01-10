const gameArray = ['rock', 'paper', 'scissors' ];
let playerScore = 0;
let computerScore = 0;




       


function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    const result = determineRoundWinner(playerChoice, computerChoice);
    updateTally(result);
    displayResult(playerChoice, computerChoice, result);

    checkGameOver();

        }

        function determineRoundWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
              return 'Tie!';
            } else if (playerChoice === 'rock' && computerChoice === 'paper') {
                computerScore++;
              return 'You lose!';
            } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
                computerScore++;
              return 'You lose!';
            } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
                computerScore++;
              return 'You lose!';
            } else {
                playerScore++;
              return 'You win!';
            }
          }
            
          function updateTally(result) {
            if (result === 'You win!') {
                // playerScore ++;
              document.getElementById('human-score').innerText = playerScore;
            } else if (result === 'You lose!') {
                // computerScore ++;
              document.getElementById('machine-score').innerText = computerScore;
            }
          }

        //   function displayResult(playerChoice, computerChoice, result) {
        //     alert(`You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`);
        //   }

        // Displaying resuls in the html 
        function displayResult(playerChoice, computerChoice, result) {
            const resultContainer = document.getElementById("result-container");
            const roundResult = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
            resultContainer.innerHTML += `<p>${roundResult}</p>`;
          }

          function removeResult() {
            const resultContainer = document.getElementById("result-container");
            resultContainer.innerHTML = "";
          }
          
          function displayResult(playerChoice, computerChoice, result) {
            const resultContainer = document.getElementById("result-container");
            const roundResult = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
            resultContainer.innerHTML += `<p>${roundResult}</p>`;
          
            setTimeout(removeResult, 2000); // remove the result from the result container after 2000 milliseconds (2 seconds)
          }
    
          function checkGameOver() {
            if (playerScore === 3) {
              showWinModal();
            } else if (computerScore === 3) {
              showLoseModal();
            } else if (playerScore === 2 && computerScore === 2) {
              showTieModal();
            }
          }
             
            
function getComputerChoice(){
    return gameArray[ Math.floor(Math.random() * gameArray.length)];

}


document.getElementById('rock').addEventListener('click', function() { playRound('rock'); });
document.getElementById('paper').addEventListener('click', function() { playRound('paper'); });
document.getElementById('scissors').addEventListener('click', function() { playRound('scissors'); });



function darkMode(){
     const element = document.body;
           element.classList.toggle("dark-mode");
     const header = document.querySelector('header');
           header.classList.toggle('dark-mode');
    const footer = document.querySelector('footer');
          footer.classList.toggle('dark-mode');
    const modal = document.querySelector(".modal");
          modal.classList.toggle("dark-mode");
}


// Modals and play agian button 
function showLoseModal() {
    const modal = document.getElementById("lose-modal");
    modal.style.display = "block";
  }
  function showWinModal() {
    const modal = document.getElementById("win-modal");
    modal.style.display = "block";
  }

  function showTieModal() {
    const modal = document.getElementById("tie-modal");
    modal.style.display = "block";
  }

  function closeModal(modal) {
  
    modal.style.display = "none";
  }
  

  
const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach(button => {
  button.addEventListener("click", function() {
    const modal = this.closest('.modal');
    closeModal(modal);
  });
});

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("human-score").innerText = playerScore;
    document.getElementById("machine-score").innerText = computerScore;
    const modalWin = document.getElementById('win-modal');
    const modalTie = document.getElementById('tie-modal');
    const modalLose = document.getElementById('lose-modal');
    closeModal(modalWin);
    closeModal(modalTie);
    closeModal(modalLose);
  }


// buttons 

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("mouseenter", event => {
    event.target.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseleave", event => {
    event.target.style.transform = "scale(1)";
  });
});



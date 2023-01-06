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

          function displayResult(playerChoice, computerChoice, result) {
            alert(`You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`);
          }
    
          function checkGameOver() {
            if (playerScore === 3) {
              alert('You won the game!');
            } else if (computerScore === 3) {
              alert('You lost the game!');
              showLoseModal();
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

  function closeModal() {
    const modal = document.getElementById("lose-modal");
    modal.style.display = "none";
  }
  
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closeModal);



  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("human-score").innerText = playerScore;
    document.getElementById("machine-score").innerText = computerScore;
    closeModal();
  }










//-------- check wiiner Fuenction ---------
// function checkWinner(player, computer){
//     if (player == computer){
//         console.log('No one Wins!')
       
//        } else if (computer == 'Rock' && player== 'Scissors' ||
//                     computer == 'Scissors' && player == 'Paper' || 
//                     computer == 'Paper' && player== 'Rock') {
//             console.log('You lose')
            
//         } else if (player == 'Rock' && computer == 'Scissors' ||
//                     player == 'Scissors' && computer== 'Paper' || 
//                     player == 'Paper' && computer == 'Rock') {
//             console.log('You win')
//        }

// } this function was called to the playRound() fuctinton with a const






// ------------- SECOND TRY-----------------
// let playerSelection= prompt('Lets play!!Pick rock, paper, scissors. Type it in.');
//     playerSelection = playerSelection.toLowerCase();
// const computerSelection = gameArray[ Math.floor(Math.random() * gameArray.length)];
 
//     function playRound(playerSelection, computerSelection) {
//         if (playerSelection == computerSelection){
//          console.log('No one Wins!')
        
//         } else if (computerSelection == 'Rock' && playerSelection == 'Scissors' ||
//                      computerSelection == 'Scissors' && playerSelection == 'Paper' || 
//                      computerSelection == 'Paper' && playerSelection== 'Rock') {
//              console.log('You lose')
             
//          } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
//                      playerSelection == 'Scissors' && computerSelection == 'Paper' || 
//                      playerSelection == 'Paper' && computerSelection == 'Rock') {
//              console.log('You win')
//         }
        
//          }
         
//          playRound(playerSelection, computerSelection);
   
    
//    function game(){
//     for (let i = 0; i < 3; i++) {
//         playRound();
//         let playerSelection= prompt('Lets play!!Pick rock, paper, scissors. Type it in.');
//     playerSelection = playerSelection.toLowerCase();
      
//        }
//    }
//    game();
   
   
   // FIRST CHOISE 

   // function getComputerChoice (){
//    let random = gameArray[ Math.floor(Math.random() * gameArray.length)];
   
// }
//     getComputerChoice();
       // function playRound(playerSelection, computerSelection) {
    //    if ( playerSelection == 'Rock' && computerSelection == 'Scissors' ||
    //         playerSelection == 'Scissors' && computerSelection == 'Paper' || 
    //         playerSelection == 'Paper' && computerSelection == 'Rock'){

    //    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    //    }else{
    //        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    //    }
    //     }
        
      
    //   playRound();
    //   console.log(playRound(playerSelection, computerSelection));
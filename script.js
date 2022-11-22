const gameArray = ['rock', 'paper', 'scissors' ];

function game(){
  
    for (let i = 0; i <= 3; i++) {
        playRound(i);
    }
   
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
                 console.log('Tie!')
                
                } else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
                             computerSelection == 'scissors' && playerSelection == 'paper' || 
                             computerSelection == 'paper' && playerSelection== 'rock') {
                     console.log('You lose')
                     
                 } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
                             playerSelection == 'scissors' && computerSelection == 'paper' || 
                             playerSelection == 'paper' && computerSelection == 'rock') {
                     console.log('You win')
                }
                console.log(computerSelection);
                console.log(playerSelection);
            }


function playerChoice(){
    let input= prompt('Let\'s play!!Pick rock, paper, or scissors. Type it in.');
        input = input.toLowerCase();
        return input;
        
    
}


function getComputerChoice(){
    return gameArray[ Math.floor(Math.random() * gameArray.length)];
}

game();


























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
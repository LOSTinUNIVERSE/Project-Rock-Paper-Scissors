// revisit the exercise to change ot or change it and improve it
    // this function generates random number 
let computerChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    return choices [Math.floor(Math.random()* 3)] 
}

function winner(machine, person) {
    if (machine == person){
        console.log("both of you have equal amount of scores", "player = ",player,"and", "computer = ", computer);
    }
    else if (machine > person ){
        console.log("our computer wins today with score of ",computer) ;
    }
    else if (machine < person ){
        console.log("our computer is not  good enough, human wins today  with score of ", player)
    console.log( "human got ", player, " versus ", "computer got ", computer);
}
}


const cont = document.querySelector('#container')
const button1=document.createElement('button')
const button2=document.createElement('button')
const button3=document.createElement('button')  
const finalResult = document.createElement('p')
const playerResult = document.getElementById('playerResult')
const computerResult = document.getElementById('computerResult')
const rounds = document.createElement('p')
rounds.textContent = "Current round is : 1"

button1.textContent="rock"
button2.textContent="paper"
button3.textContent="scissors"
button1.style.margin = "10px"
button2.style.margin = "10px"
button3.style.margin = "10px"
    button1.addEventListener ('click', function(){
     playRound("rock", computerChoice())
     playerResult.textContent = `players results for this round ${player}`
     computerResult.textContent = `computer results for this round ${computer}`
     roundsCounter++
     rounds.textContent= `current round is ${roundsCounter}`
     selfDestruction();
    })
    button2.addEventListener ('click', () => {
playRound("paper", computerChoice())
playerResult.textContent = `players results for this round ${player}`
computerResult.textContent = `computer results for this round ${computer}`; 
    roundsCounter++
    rounds.textContent= `current round is ${roundsCounter}`;
    selfDestruction()
    });
    button3.addEventListener ('click', () => {playRound("scissors", computerChoice());
    playerResult.textContent = `players results for this round ${player}`
    computerResult.textContent = `computer results for this round ${computer}`; 
    roundsCounter ++
    rounds.textContent= `current round is ${roundsCounter}`;
    selfDestruction()
    })

    function selfDestruction(){
        if (player === 5 || computer === 5) 
            {
            if(player > computer){
            finalResult.textContent = `player wins with ${player}  score` 
            }
            else if (computer > player){
            finalResult.textContent = `computer wins with ${computer}     score`             
            }
            roundsCounter =0
            player = 0
            computer =0
            }
            
            }
cont.appendChild(finalResult)
cont.appendChild(button1)
cont.appendChild(button2)
cont.appendChild(button3)
cont.appendChild(rounds)

let computer =0 
let player = 0
let roundsCounter = 0
function playRound (choice1, choice2)
{  
    // condition 1
 if (choice1 == choice2 ){ 
console.log("no winner this round , but both of you get plus one score ")
player++, computer++; 

}    
// condition 2
else if ( choice1 == "scissors"){
    if (choice2 == "rock"){
        console.log("computer rock crashes humans scissors")
        computer ++

    }
else { 
    console.log("players scissors cut computer paper")
    player++ 
     ;
    
    } }
// condition 3
else if (choice1 =="paper"  ){ 
    if (choice2 == "scissors"){
    console.log("player paper lose to computer scissors")
    computer++
     ;

} 
else {
    console.log("player paper beats computers rock",) 
    player++}
     
    }
    // condition 4
    else if (choice1 =="rock"  ){ 
    if (choice2  == "scissors"){
    console.log("player rock beats  computer scissors", player++)
     } 
    else {
    console.log("player rock lose to computer paper", computer++) 
     }

    }
    winner(computer, player)
    }
    playerResult.textContent = player
    computerResult.textContent = computer






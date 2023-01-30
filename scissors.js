// this function generates random number 
let computerChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    return choices [Math.floor(Math.random()* 3)] 
}
let computer = 0
let player = 0
// this function takes 2 parameters and compares them as a result logging the winner 
// choice 1 is player nad choice 2 is computer



function playRound (choice1, choice2)
{  
    // condition 1 
if (choice1 == choice2 ){ 
console.log("no winner this round , but both of you get plus one score ") 
player++, computer++
}    
// condition 2
else if ( choice1 == "scissors"){
if (choice2 == "rock"){
    console.log("player scissors lose to computer rock", computer++)
    
}
else { 
    console.log("players scissors cut computer paper"), player++
    }
}
// condition 3
else if (choice1 =="paper"  ){ 
    if (choice2 == "scissors"){
    console.log("player paper lose to computer scissors")
    computer++
    } 
else {
    console.log("player paper beats computers rock")
    player++}
    }
    // condition 4
else if (choice1 =="rock"  ){ 
if (choice2  == "scissors"){
    console.log("player rock beats  computer scissors")
    player++
    } 
else {
    console.log("player rock lose to computer paper")
    computer++}
    }
}   
// let choice1= "rock"
  
let playerChoice = function () {
 return prompt (" what is your weapon").toLowerCase() } ;

function game (){
playRound (playerChoice(),computerChoice())  }

for (let i = 0; i < 3; i++) {  
 game () 
}
// console.log(playerChoice);


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

winner(computer, player)

    


// const playerSelection = prompt ("Hi ! Choose your weapon ?").toLowerCase();    
// const computerSelection = getComputerChoice ();
// console.log(computerSelection);
// const winner = console.log();
// function playRound(playerSelection,computerSelection){
//    if (playerSelection === computerSelection)  {
//     console.log("no winner today")}
//     else if (playerSelection === "rock" && computerSelection === "scissors", "paper") 
//     { console.log("winner")}
//     else if (playerSelection === ("scissors"|| "paper") && computerSelection === "rock" ) 
//     { console.log("ups ...")}
//     else if (playerSelection === "paper" && computerSelection === ("rock"|| "scissors")) 
//     { console.log("lost")}
//     else if (playerSelection === ("scissors" || "rock") && computerSelection === "paper") 
//     { console.log("good boy")}
//     else if (playerSelection == (0 || null)){
//         console.log("not good boy")}  
//     else {console.log("nothing")}
//     return playerSelection
// }


// console.log(playRound(playerSelection, computerSelection));


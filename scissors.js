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
let playerChoice = function () {
 return prompt (" what is your weapon").toLowerCase() } ;

function game (){
playRound (playerChoice(),computerChoice())  }

for (let i = 0; i < 3; i++) {  
 game () 
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

winner(computer, player)

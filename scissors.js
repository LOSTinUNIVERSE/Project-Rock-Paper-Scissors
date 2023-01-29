// this function generates random number 
let computerChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    return choices [Math.floor(Math.random()*3)] 
}
// here we made big mistake creating new function 
// this function takes 2 parameters and compares them as a result logging the winner 
    function playRound (choice1, choice2)
    {  
    if (choice1 === choice2 ){
        console.log("no winner today1") 
    } 

    if ( choice2 === "scissors"){
        console.log("comp lost 2" )
    }
    if (choice2 ==="paper") {
        console.log("comp wins3"  )
        }
    }   
const choice1 = "rock";
const choice2 = computerChoice () ;
// this function contains another function and random number generator 
function game (){
return playRound (choice1,computerChoice()) 
}
// this loop calls the function 5 times and 
for (let i = 0; i < 10; i++) {  
    game () 
}
// this variable shows computerChoice function, its made so because we do not want the function to be called again 

console.log (choice2)






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


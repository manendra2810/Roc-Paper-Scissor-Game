// let userScore = 0;
// let compScore = 0;
// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector(".msg");
// const user_score = document.querySelector(".user-score");
// const comp_score = document.querySelector(".computer-score");

// const showWinner = (userWin, userChoice, compChoice) => {
//     if(userWin){
//         userScore++;
//         msg.innerText = `You win. ${userChoice} beats comp ${compChoice}`;
//         msg.style.backgroundColor = "green";
//         user_score.innerText = userScore;
//     }
//     else{
//         compScore++;
//         msg.innerText = `You lose. comp ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor = "red";
//         comp_score.innerText = compScore;
//     }
// };

// const generateCompChoice = () => {
//     const options = ["rock", "paper", "scissor"];
//     const idx = Math.floor(Math.random()*3);
//     return options[idx];
// };

// const playGames = (userChoice) => {
//     const compChoice = generateCompChoice();

//     if(compChoice === userChoice){
//         msg.innerText = "Game was draw. Play again";
//         msg.style.backgroundColor = "#090924";
//     }
//     else{
//         let userWin = true;
//         if(userChoice === "rock"){
//             userWin = compChoice === "paper" ? false : true;
//         }
//         else if(userChoice === "paper"){
//             userWin = compChoice === "scissor" ? false : true ;
//         }
//         else{
//             userWin = compChoice === "rock" ? false : true;
//         }
//         showWinner(userWin, userChoice, compChoice);
//     }
// };

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         playGames(userChoice);
//     });
// });


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score"); 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win, ${userChoice} beats comp ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Your lose ! comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Game was draw. Play again.";
        msg.style.backgroundColor = "#090924";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}; 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
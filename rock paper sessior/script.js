let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score_para=document.querySelector("#user-choice")
const com_score_para=document.querySelector("#computer-choice")

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const showWinner = (userwin, userchoice, comchoice) => {
    if (userwin) {
        userscore++;
        user_score_para.innerText=userscore;
        console.log("You win");
        msg.innerText="You Win !"
        msg.style.backgroundColor="green"
        userscore++;
    } else {
        comscore++;
        com_score_para.innerText=comscore;
        console.log("You lose");
        msg.innerText="You Lose !"
        msg.style.backgroundColor="red"
        comscore++;
    }
    console.log(`User Score: ${userscore}, Computer Score: ${comscore}`);
};

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText="Game is Draw "
    msg.style.backgroundColor="orange";
};

const playGame = (userchoice) => {
    console.log("User choice:", userchoice);
    const comchoice = genCompchoice();
    console.log("Computer choice:", comchoice);

    if (userchoice === comchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = comchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = comchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userchoice);
        playGame(userchoice);
    });
});

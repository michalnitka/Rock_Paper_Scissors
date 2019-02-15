let userScore = 0;
let compScore = 0;

const userScore_span = document.querySelector(".userScore");
const compScore_span = document.querySelector(".compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const matchReult_div = document.querySelector(".matchResult");
const userPicImg_img = document.querySelector(".picBoard div.userPic img");
const compPicImg_img = document.querySelector(".picBoard div.compPic img");
const userPic_div = document.querySelector('.userPic');
const compPic_div = document.querySelector('.compPic');
const userRock_div = document.getElementById("rock");
const userPaper_div = document.getElementById("paper");
const userScissors_div = document.getElementById("scissors");



function getComputerChoice() {
    const choices = ['rock', 'paper', "scissors"];
    const index = Math.floor(Math.random() * 3);
    choice = choices[index];
    compPicImg_img.src = `img/${choice}.png`;
    return choice;
}

function win() {
    userScore++;
    userScore_span.textContent = userScore;
    userPic_div.style.backgroundColor = "green";
    compPic_div.style.backgroundColor = "red";
    matchReult_div.textContent = "Wygrałeś!!!! Dawaj dalej"

}

function lost() {
    compScore++;
    compScore_span.textContent = compScore;
    userPic_div.style.backgroundColor = "red";
    compPic_div.style.backgroundColor = "green";
    matchReult_div.textContent = "Przegrałeś. Nie poddawaj się!!!"

}

function draw() {
    userPic_div.style.backgroundColor = "grey";
    compPic_div.style.backgroundColor = "grey";
    matchReult_div.textContent = "Tym razem remis."

}



function start(userChoice) {

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lost();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }

};

function main() {
    userRock_div.addEventListener("click", () => {
        start("rock");
        userRock_div.classList.add('active');
        userPicImg_img.src = `img/rock.png`;
        userPaper_div.classList.remove('active');
        userScissors_div.classList.remove('active');
    });
    userPaper_div.addEventListener("click", () => {
        start("paper");
        userPaper_div.classList.add('active');
        userPicImg_img.src = `img/paper.png`;
        userScissors_div.classList.remove('active');
        userRock_div.classList.remove('active');
    });
    userScissors_div.addEventListener("click", () => {
        start("scissors");
        userScissors_div.classList.add('active');
        userPicImg_img.src = `img/scissors.png`;
        userPaper_div.classList.remove('active');
        userRock_div.classList.remove('active');
    });
}

main();
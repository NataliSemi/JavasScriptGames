let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.getElementById(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div =  document.getElementById("s")

function getComputerChoice(){
    const choices =['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    computerChoice = choices[randomNumber]
    console.log(computerChoice)
    return computerChoice;
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>  userChoice_div.classList.remove('green-glow'), 500);
}



function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const computerChoice_div = document.getElementById(computerChoice)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ` ${convertToWord(computerChoice)}${smallUserWord}  beats ${convertToWord(userChoice)}${smallCompWord} . You lost! `;
    computerChoice_div.classList.add('red-glow');
    setTimeout(() => computerChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord}. IT"S A DRAW! `;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 500);
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }   
}


function main(){
    rock_div.addEventListener('click', () => game("r"))
    
    paper_div.addEventListener('click', () => game("p"))
    
    scissors_div.addEventListener('click',() => game("s"))
}
main();
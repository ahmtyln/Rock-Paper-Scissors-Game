const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const signs = document.querySelectorAll(".sign");
const scissors = document.querySelector(".Scissors");
const userScor = document.querySelector(".userScor");
const compScor = document.querySelector(".compScor");
const resultText = document.querySelector(".text");
const result = document.querySelector(".result");
const loseSound = document.querySelector(".loseSound");
const winSound = document.querySelector(".winSound");

const compChoise = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
};
const redBorder = (classs) =>{
    signs.forEach(sign=>{
        if(sign.classList.contains(classs)){
            sign.classList.add("redBorder");
            setTimeout(function(){
                sign.classList.remove("redBorder");
            },300);
        } 
    })
};
const greenBorder = (classs) =>{
    signs.forEach(sign=>{
        if(sign.classList.contains(classs)){
            sign.classList.add("greenBorder");
            setTimeout(function(){
                sign.classList.remove("greenBorder");
            },300);
        }
    })
};
const grayBorder = (classs) =>{
    signs.forEach(sign=>{
        if(sign.classList.contains(classs)){
            sign.classList.add("grayBorder");
            setTimeout(function(){
                sign.classList.remove("grayBorder");
            },300);
        }
    })
};
const soundLose = ()=>{
    loseSound.currentTime=0;
    loseSound.play();
};
const soundWin = ()=>{
    winSound.currentTime=0;
    winSound.play();
}



const game = (x) => {
    const computerChoise = compChoise();
    const userChoice = x;
    const smallUser = "user".fontsize(2).sub();
    const smallComp = "comp".fontsize(2).sub();
    var userScorNumber = Number(userScor.textContent);
    var compScorNumber = Number(compScor.textContent);

    if (userChoice === computerChoise) {
        resultText.innerHTML = `${userChoice}${smallUser} equals ${computerChoise}${smallComp}.`;
        result.innerHTML = ` It's a draw`;
        grayBorder(x);
    } else if ((userChoice === "Rock" && computerChoise === "Scissors") || (userChoice === "Paper" && computerChoise === "Rock") || (userChoice === "Scissors" && computerChoise === "Paper")) {
        resultText.innerHTML = `${userChoice}${smallUser} beats ${computerChoise}${smallComp}.`;
        result.innerHTML = ` You Win!`;
        ++userScorNumber;
        userScor.innerHTML=`${userScorNumber}`;
        greenBorder(x);
        soundWin();
    } else if ((userChoice === "Scissors" && computerChoise === "Rock") || (userChoice === "Rock" && computerChoise === "Paper") || (userChoice === "Paper" && computerChoise === "Scissors")) {
        resultText.innerHTML = `${userChoice}${smallUser} loses ${computerChoise}${smallComp}.`;
        result.innerHTML = ` You Lose!`;
        ++compScorNumber;
        compScor.innerHTML = `${compScorNumber}`;
        redBorder(x);
        soundLose();
    }
}



rock.addEventListener("click", function () {
    game("Rock");
});

paper.addEventListener("click", function () {
    game("Paper");
});

scissors.addEventListener("click", function () {
    game("Scissors");
});
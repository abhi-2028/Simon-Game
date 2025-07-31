let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "green" , "purple"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 150);
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`; 

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    //random btn choose
    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
     
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
     btn.addEventListener("click", btnPress);
}
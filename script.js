let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "green" , "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btnContainer = document.querySelector(".btn-container");
let stBtn = document.querySelector(".st-btn");


document.querySelector(".st-btn").addEventListener("click", function(){
    if(started == false){
        started = true;
        btnContainer.classList.remove("before-start");
        stBtn.classList.add("before-start");
        setTimeout(levelup(), 9000);
    }
});

// document.addEventListener("keypress", function(){
//     if(started == false){
//         started = true;

//         levelup();
//     }
// });

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
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`; 

    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    //random btn choose
    gameFlash(randBtn);
}

function checkSeq(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
 
function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
     btn.addEventListener("click", btnPress);
}
 
function reset(){
    h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br>Press any key to start`;
    stBtn.innerText = "Restart";
    stBtn.classList.remove("before-start");
    btnContainer.classList.add("before-start");
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0; 
}
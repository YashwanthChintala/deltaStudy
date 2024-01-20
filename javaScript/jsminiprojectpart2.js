//simon game 

let gameSeq=[];
let userSeq =[];

let started = false;
let level=0;
let highestScore=0;
let btns=["pink","orange","quil","violet"]
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("Game started")
    started=true;

    levelup();
   }
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}|Highest score ${highestScore}`
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
// console.log("curr level:",level);
if(userSeq[idx]=== gameSeq[idx]){
   if (userSeq.length ==gameSeq.length){
    highestScore=Math.max(highestScore,level);
    setTimeout(levelup,1000);
   }

}
else{
    h2.innerHTML=`Game Over!Your score was <b>${level-1}</b>|Highest score ${highestScore}<br>Press any key to start the Game `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}

function btnPress(){
    // console.log(this);
    let btn = this;
    btnFlash(this);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq =[];
    level=0;
 }

 
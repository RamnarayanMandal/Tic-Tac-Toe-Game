let box = document.querySelectorAll(".box");
let restbtn = document.querySelector(".button-reset");
let msg = document.querySelector(".msg");
let msgHidden=document.querySelector("section");
let newbtn = document.createElement("button");
let player1 = document.querySelector(".player1");
console.log(player1);
newbtn.setAttribute("class", "button-new");
let turno =true; // playerx, player0


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



box.forEach((box) => {
    box.addEventListener("click", (e) => {
        if(turno){
            box.innerText = "O";
            box.style.background="rgba(255,20,90)";
            turno=false;
        }else{
            box.innerText = "X";
            box.style.background="rgba(255,0,0)";
            turno=true;
        }
        box.disabled=true;
        checkWin();

    });
});


const disabledebox=()=>{
    box.forEach((box) => {
        box.disabled=true;
    });
}


const enabledebox=()=>{
    box.forEach((box) => {
        box.disabled=false;
        msgHidden.setAttribute("class","msg-hidden");
        box.innerText="";
    });
}

const resetGame=()=>{
    turno = false; // turn;
    enabledebox();
    msg.innerText="";
    backgroundbox();
}

const backgroundbox=()=>{
    box.forEach((box) => {
        box.style.background="#ededed";
    });
}

const checkWin = ()=>{

   for(patter of winpattern){
    let pos1val = box[patter[0]].innerText;
    let pos2val = box[patter[1]].innerText;
    let pos3val = box[patter[2]].innerText;

    if(pos1val!=""&& pos2val!=""&& pos3val!=""){
        if(pos1val===pos2val&& pos2val===pos3val){
            msgHidden.setAttribute("class","msg-section");
            msgHidden.append(newbtn);
            newbtn.innerText="New Game";
            msg.innerText="Congratulations, Winner is "+pos1val;
            disabledebox();
        }

    }
}
}
restbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
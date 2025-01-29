let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset-btn");
let newgamebtn=document.querySelectorAll("#new-btn");
let msgconatiner=document.querySelectorAll("#msg.container");
let msg=document.querySelectorAll("#msg");
let turnO= true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=(()=> {
    turnO=true;
    enableboxes();
    msgContainer.classlist.add("hide");
});


boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
    });

});

const disableboxes=()=> {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=() => {
    for(let box of boxes) {
        box.disabled=false;
        box.innertext="";
    }
};
const showwinner=(winner) =>{
    msg.innertext=`congratulations,winner is ${winner}`;
    msgContainer.classlist.remove("hide");

};
const checkwinner=() =>{
   for(let pattern of winpatterns){
    console.log(pattern[0],pattern[1],pattern[2]);
    console.log(
        boxes[pattern[0]].innertext,
        boxes[pattern[1]].innertext,
        boxes[pattern[2]].innertext,
    );
    let pos1val=boxes[pattern[0]].innertext;
    let pos2val=boxes[pattern[0]].innertext;
    let pos3val=boxes[pattern[0]].innertext;

  if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val=== pos3val){
        console.log("winner",pos1val);
        showwinner(pos1val);
    }
  }
}
};
newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
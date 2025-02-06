let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".res-btn");
let msg=document.getElementById("msg");
let msgContainer=document.getElementsByClassName("msg-container")[0];
let btn=document.getElementById("new-btn");
let mainbox=document.getElementById("MainBox")
let turn0=true;//Player X ,player 0
// Multidimentional Array
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
boxes.forEach((val)=>
{
 val.addEventListener("click",()=>
{
    console.log("Box was clicked");
    if(turn0)
    {
        val.innerText="0";
        turn0=false;
    }
    else
    {
    val.innerText="X";
    turn0=true;
    }
    val.disabled=true;
    checkWinner();
});
});
const disableboxes=()=>
{  

  
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>
{    mainbox.classList.remove("hide");
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const showWinner=(win)=>{
    mainbox.classList.add("hide");
    msgContainer.classList.remove("hide"); 
    msg.innerText = `Congratulation Game Winner is ${win} `;
    disableboxes();

}
const checkWinner=()=>
{
    for(pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!==""&&pos2!==""&&pos3!=="")
        {
            if(pos1===pos2  && pos2===pos3)
            {
            
            showWinner(pos1);
            }
        }
    }

}
btn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
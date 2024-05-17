let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg-container");
let msgt=document.querySelector("#msg");

let turnO = true; // Player O, player X

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
 msgt.innerText=`Congraulation , Winner is ${winner}`;
 msg_container.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 === posval2 && posval2 === posval3) {
              // document.write ("You are winner");
               showWinner(posval1);
                boxes.forEach((box) => box.disabled = true);
                break;
            }
        }
    }
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});
newbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});
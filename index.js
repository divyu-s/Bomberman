const grid = 81;
const bom = 10;
const winingPoint = 71;
let points = 0;
let board = document.getElementsByClassName("board");
let resultDisplay = document.getElementById("resultDisplay");
var button = document.getElementById("resetButton");
let gameScore = document.getElementById("gameScore");
window.random = [];

genrateRandomBom();

function genrateRandomBom(){
for(let i=0;i<bom;i++){
    let randomValue = Math.floor(Math.random()*81)+1;
    while(random.includes(randomValue)){
           randomValue = Math.floor(Math.random()*81)+1;
    }
    console.log(randomValue);
    random.push(randomValue);

}
}

for(let i=1;i<=grid;i++){
    let cell = document.createElement("div");
    cell.setAttribute("id","cell_"+i);
    cell.setAttribute("class","cell");
    cell.addEventListener("click",handleClickCell);
    board[0].appendChild(cell);
}

function handleClickCell(clickCellEvent){
     let cell = clickCellEvent.target;
     let cellIndex = Number(cell.getAttribute("id").slice(5));
    // console.log(cellIndex);
     if(random.includes(cellIndex)){
          resultDisplay.innerHTML = "game over";
          displayEachBombIndex();
          removeEventListener();
          changeResetSatate();
     }
     else{
         points++;
         gameScore.innerHTML=points;
         cell.style.background="green";
         cell.removeEventListener("click",handleClickCell);
         if(points==winingPoint){
              resultDisplay.innerHTML="win";
              button.innerHTML="Play Again";
              removeEventListener();
         }
        
     }

 }

 function displayEachBombIndex(){
     random.forEach((index)=>{
     let cell = document.getElementById("cell_"+index);
     cell.style.background="red";
     cell.style.backgroundImage="url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
    // console.log(cell);
    }
     );
 }

 function removeEventListener(){
//       document.querySelectorAll("cell").forEach((cell)=>{
//       cell.removeEventListener("click",handleClickCell)
//    });
    let cells =  document.getElementsByClassName("cell");    
    for(let i=0;i<grid;i++){
       cells[i].removeEventListener("click",handleClickCell);
   }
  }
 
 function changeResetSatate(){
     button.innerHTML="Play Again";
 }

 function reset(){
    points = 0;
    gameScore.innerHTML=points;
    resultDisplay.innerHTML="";
    random = [];
    genrateRandomBom();
    button.innerHTML="Reset";
    addEventListener();

 }

 function addEventListener(){
    let cells =  document.getElementsByClassName("cell");    
    for(let i=0;i<grid;i++){
        cells[i].style.background="";
        cells[i].style.backgroundImage="";
       cells[i].addEventListener("click",handleClickCell);
   }
 }

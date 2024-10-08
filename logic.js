//Modules
const board = function(){
let boardArray;
let count=0;
let won=false;
const createBoard = (player1, player2,size=3,newGame=true)=>{
    boardArray= Array(size*size);
    if(newGame){
        this.player1 = new Player(player1, "X");
        this.player2 = new Player(player2, "O");
    }
    console.log(boardArray.length)
    updateScore(this.player1, this.player2)
    won=false;
    count=0;
     
}


const play = (index)=>{
 
    
    if(!won){    
        let character;
        if(count%2 == 0)
            character=this.player1;
        else 
            character=this.player2;

        if(boardArray[index]==null){
            boardArray[index]=character;

            if(count>=4){
               if(checkGameWin(character, index)){
                    declareWinner(character);
                    character.addScore();
                    declareWinner(character.name);
                    won=true;
                }
            }
            count++;
            
         displayChoice(character.image, index);
        }
    }
    
}

const checkGameWin = (player, choice) =>{
    let size= Math.sqrt(boardArray.length);
    let beginning = choice-(2*size)-2;
    let middle = choice-size-1;
    let end = choice+size+1;
    let won = false;
   
    for(let i=0; i<9; i++){
        if(i==4)
            i++;

        //checks cross with choice in the middle
        
        if(boardArray[beginning +((i%3)*2) +(2*size*Math.floor(i/3))]== boardArray[choice] && 
            boardArray[middle +(i%3) +(size*Math.floor(i/3))]== boardArray[choice])
            won=true;
        //checks diagonal todo with choice as the beginning or end
        if(boardArray[middle +(i%3) +(size*Math.floor(i/3))]== boardArray[choice] && 
            boardArray[end -(i%3) -(size*Math.floor(i/3))]== boardArray[choice])
            won=true;
    }
    return won;
}


const resetData = (parent, size)=>{
    
    parent.innerHTML="";
    let dimension;
    if(size>0)
        dimension=size;
    else   
        dimension=3;
    count=0;
    won=false;
    setup(this.player1.name, this.player2.name, dimension, false);
}

return {createBoard, play, resetData};
}();
 
//objects


//player constructor, function increases score 
function Player(name, operator){
    this.name=name;
    this.operator=operator;
    this.score=0;
    if(operator=="X")
        this.image="./assets/x.svg";
    else
    this.image="./assets/o.svg";
}

Player.prototype.addScore = function(){
    this.score++;
}



const drawBoard = document.querySelector(".board");
function setup(p1, p2, size=3, newGame=true){
    let widthTotal = window.innerWidth-(size*2);
    for(let i=0; i<size*size; i++)
    {
        const newChild = document.createElement("div");
        newChild.className=""+i;
        drawBoard.appendChild(newChild);
        drawBoard.style.cssText = "grid-template-columns: repeat("+ 
        size+ ",1fr);";
        newChild.addEventListener("click", (e)=>{board.play(e.target.classList.value);});

    }
    
    updateScore([p1, 0], [p2,0]);
    board.createBoard(p1, p2, size, newGame); 
    
    
} 
const submit = document.querySelector(".submit").addEventListener("click", getPlayerInfo);
const rematch = document.querySelector(".reset").addEventListener("click", ()=>
    {board.resetData(drawBoard, document.getElementById("grid-size").value)});

function getPlayerInfo(){
    const p1=document.getElementById("p1");
    const p2=document.getElementById("p2");
    const size=document.getElementById("grid-size");
    if(p1.value=="")
        p1.value="Player 1";
    if(p2.value=="")
        p2.value="Player 2";
    
    let dimension;
    if(size.value>0)
        dimension=size.value;
    else   
        dimension=3;
    drawBoard.innerHTML="";
    setup(p1.value, p2.value, dimension);
       
}  
const displayP1 = document.querySelector(".player1");
const displayP2 = document.querySelector(".player2");
function updateScore(p1, p2){
    
    displayP1.textContent=""+p1.name+": "+p1.score;
    displayP2.textContent=""+p2.name+": "+p2.score;
}

function displayChoice(image, index){
    let choices= document.querySelectorAll(".board div");
   choices[index].style.cssText="background-image: url("+image+");"
   +"background-size:"+(choices[index].offsetWidth*0.7)+"px;"+ "background-position: center;"  +"background-repeat: no-repeat";
  
}

function declareWinner(character){
    const disp = document.querySelector(".winner");
    disp.textContent=character+" Won!"
    
}
 
 
//Modules
const board = function(){
let boardArray;

const createBoard = (player1, player2,size=3)=>{
    boardArray= Array(size*size);
    this.player1 = new Player(player1, "X");
    this.player2 = new Player(player2, "O");
    console.log(boardArray.length)
    play(player1, player2, size*size);
}


const play = (player1, player2, size)=>{
 
   for(let i=0; i<boardArray.length;)
    {   
        let choice = prompt();
        let character;
        if(i%2 == 0)
            character=player1;
        else 
            character=player2;

        if(choice<boardArray.length && choice!="" && boardArray[choice]==null){
            boardArray[choice]=character;
            //if(i>=4)
               /* if(checkGameWin(character, choice)){
                    declareWinnir();
                    break;
                }*/
            i++;
        }

        console.log(boardArray);
        console.log(boardArray.length);
        console.log(i);
    }
}

const checkGameWin = (player, choice) =>{
    let rowSize= Math.sqrt(boardArray.length);
    let won = false;
    

    return won;
}

return {createBoard};
}();
 
//objects


//player constructor, function increases score and resetgame resets the score 
//and renames the same object because don't want to create new objects
function Player(name, operator){
    this.name=name;
    this.operator=operator;
    let score =0;
}

Player.prototype.addScore = ()=>{
    score++;
}

Player.prototype.resetGame = (name)=>{
    this.name=name;
    score = 0;
}
    



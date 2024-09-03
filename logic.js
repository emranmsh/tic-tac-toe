//Modules
const board = function(){
let boardArray;

const createBoard = (player1, player2,size=3)=>{
    boardArray= Array(size*size);
    this.player1 = new Player(player1, "X");
    this.player2 = new Player(player2, "O");
    console.log(boardArray.length)
    play(this.player1, this.player2);
}


const play = (player1, player2)=>{
 
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

            if(i>=4){
               if(checkGameWin(character, choice)){
                    declareWinner(character);
                    break;
                }
            }
            i++;
            
         console.log(character.character);
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

const declareWinner = (character)=>{
    console.log(character.name + "Won");
    character.addScore();
    console.log(character.score);
}

return {createBoard};
}();
 
//objects


//player constructor, function increases score and resetgame resets the score 
//and renames the same object because don't want to create new objects
function Player(name, operator){
    this.name=name;
    this.operator=operator;
    this.score=0;
}

Player.prototype.addScore = function(){
    this.score++;
}

Player.prototype.resetGame = function(name){
    this.name=name;
    this.score = 0;
}
    
 
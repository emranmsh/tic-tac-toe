const drawBoard = document.querySelector(".board");
function setup(size=3){
    let widthTotal = window.innerWidth-(size*2);
    for(let i=0; i<size*size; i++)
    {
        const newChild = document.createElement("div");
        newChild.className="div"+i;
        drawBoard.appendChild(newChild);
        drawBoard.style.cssText = "grid-template-columns: repeat("+ 
        size+ ",1fr);";
        //drawBoard.style.cssText= "background-color: white"; 
    }
    
}

setup(); 
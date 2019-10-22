let addBoardClass = () =>{
    let entireBoard= document.getElementById('board');
    let cells=entireBoard.children;

    for (o=0; o<cells.length; o++){
        cells[o].classList.add('square');

    }
    
    for (let j=0; j<cells.length; j++){
        cells[j].onmouseover= function(){cells[j].classList.toggle("hover",true)}
        cells[j].onmouseout= function(){cells[j].classList.toggle("hover",false)}
    }
    for (let o=0; o<cells.length; o++){
        cells[o].addEventListener("click",function(){

            if (gameState.length==0){
                cells[o].classList.add("X");
                cells[o].innerHTML=("X");
                game.push("X");
            }else{
                if (gameState[gameState.length-1]=='X'){
                    cells[o].classList.add("O");
                    cells[o].innerHTML=("O");
                    game.push("O");
            }else{
                cells[o].classList.add("X");
                cells[o].innerHTML=("X");
                game.push("X");

                }
            }
            });
        }
    }
    document.addEventListener('DOMContentLoaded', addBoardClass);
    var game=[];
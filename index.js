

const divMain = document.querySelector('.main');

createSketchBox(16);
function getNumberOfSquares(){
    const numberOfSquares = parseInt(prompt("Enter the number of squares needed in each side(3-100)"));
    const divContainer = document.querySelector(".container");
    divMain.removeChild(divContainer);
    createSketchBox(numberOfSquares)



}

function createSketchBox(numberOfSquares){
    const divContainer = document.createElement('div');
    divContainer.classList.add("container");
    divMain.appendChild(divContainer)
    
    for(let i=0;i<numberOfSquares;i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        for(let j=0;j<numberOfSquares;j++){
            const divSquare = document.createElement('div');
            divSquare.classList.add('square')
            divSquare.addEventListener('mouseover',()=>{
                divSquare.classList.add('on-hover');
            })
            divRow.appendChild(divSquare);
    
        }
        divContainer.appendChild(divRow)
    
    }
}



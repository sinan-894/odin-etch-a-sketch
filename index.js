

const divMain = document.querySelector('.main');

createSketchBox(16);
function getNumberOfSquares(){
    const numberOfSquares = parseInt(prompt("Enter the number of squares needed in each side(3-100)"));
    if (numberOfSquares>100||numberOfSquares<3){
        alert("enter a value between 3-100");
        return 0;
    }
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
                divSquare.style.backgroundColor = getRandomColor()
            })
            divRow.appendChild(divSquare);
    
        }
        divContainer.appendChild(divRow)
    
    }
}


function getRandomColor(){
    const randomValueRed = Math.floor(Math.random()*255);
    const randomValueBlue = Math.floor(Math.random()*255);
    const randomValueGreen = Math.floor(Math.random()*255);

    return `rgb(${randomValueRed},${randomValueBlue},${randomValueGreen})`


}

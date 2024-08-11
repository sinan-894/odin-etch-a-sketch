

const containerDiv = document.querySelector('.container');


for(let i=0;i<16;i++){
    const divRow = document.createElement('div');
    for(let j=0;j<16;j++){
        const divSquare = document.createElement('div');
        divRow.appendChild(divSquare);

    }
    containerDiv.appendChild(divRow)

}
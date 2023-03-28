/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/



document.querySelector(`button`),addEventListener(`click`, function(){
    let yourNumber = Math.floor(Math.random()*6)+1;
    let hisNumber = Math.floor(Math.random()*6)+1;


    document.querySelector(`#you`).innerHTML = `${yourNumber}`;
    document.querySelector(`#pc`).innerHTML = `${hisNumber}`
    console.log(yourNumber, hisNumber)
    
    if(yourNumber > hisNumber){
        document.querySelector(`#win`).innerHTML = `<h2>YOU WIN!</h2>`
    }else if(yourNumber == hisNumber){
        document.querySelector(`#win`).innerHTML = `<h2>IT'S A DRAW!!</h2>`
    }else{
        document.querySelector(`#win`).innerHTML = `<h2>YOU LOSE!</h2>`
    }
})
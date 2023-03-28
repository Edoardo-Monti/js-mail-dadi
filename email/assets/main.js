/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

const array = ["fracescotunztunz@gmail.com", "animalifelici@hotmail.it", "hellokitty666@gmail.com", "ilboss@libero.com", "eddoarddo@gmail.com"]



document.querySelector(`.button`).addEventListener(`click`, function(){

    let email = document.querySelector(`#email`).value
    console.log(email)
    let soldatino = false
    // console.log(`mi hai clicasto`)
    for (let e = 0; e < array.length; e++){
        if( array[e] == email){
            console.log(`you did it`)
            // document.querySelector(`.results`).innerHTML = `you did it`
             soldatino = true

        }else{
            // document.querySelector(`.results`).innerHTML = `you don't`
        }
    }
    console.log(soldatino)
    if(soldatino == true){
        document.querySelector(`.results`).innerHTML = `la tua email è corretta`
    }else{
        document.querySelector(`.results`).innerHTML = `la tua email non esiste`
    }
})

//all variabelen buiten die in functions staan die ik gebruik voor de selectors random numbers en functions
let userPoints = 100;
const pn = document.querySelector('.playerN');
const buttonlower = document.querySelector('.lager');
const buttonhigh = document.querySelector('.hoger');
const buttongelijk = document.querySelector('.gelijk');
const buttonreset = document.querySelector('.reset');
const playerpoints = document.querySelector('.points');
const scoretekst = document.querySelector('.score');
const buttonCpu = document.querySelector('.button1');
const cn = document.querySelector('.computerN');

//dit zorgt er voor dat de knoppn hoger lager gelijk uit staan als het spel start
document.querySelector('.hoger').disabled = true;
document.querySelector('.lager').disabled = true;
document.querySelector('.gelijk').disabled = true;

//function random number voor cpu en er voor zorgen dat de juist knoppen uit of aan gaan(hoger,lager,gelijk weer aan)(cpu knop weer uit)
function randompc() {
    if (userPoints > 0) {
        document.querySelector('.hoger').disabled = false;
        document.querySelector('.lager').disabled = false;
        document.querySelector('.gelijk').disabled = false;
        document.querySelector('.button1').disabled = true;
        computerNumber = Math.floor(Math.random() * 12) + 1;
        cn.textContent = computerNumber;
    } else (
        scoretekst.textContent = 'game over'
    )
}

//function button hoger knoppen (hoger,lager,gelijk) gaan hier ook mee uit
//dit geeft je ook punten als je goed gokt of punten er af als je het fout hebt
function randomPN() {
    document.querySelector('.button1').disabled = false;
    document.querySelector('.hoger').disabled = true;
    document.querySelector('.lager').disabled = true;
    document.querySelector('.gelijk').disabled = true;
    let playerNumber = Math.floor(Math.random() * 12) + 1;
    pn.textContent = playerNumber;
    if (playerNumber > computerNumber) {
        console.log('win')
        scoretekst.textContent = 'you won'
        userPoints = userPoints + 10
        playerpoints.textContent = userPoints;
    }
    else {
        console.log('verloren')
        scoretekst.textContent = 'you lost'
        userPoints = userPoints - 10
        playerpoints.textContent = userPoints
    }
}
//function button lager knoppen (hoger,lager,gelijk) gaan hier mee ook uit
//dit geeft je ook punten als je goed gokt of punten er af als je het fout hebt
function randompn2() {
    document.querySelector('.lager').disabled = true;
    document.querySelector('.button1').disabled = false;
    document.querySelector('.hoger').disabled = true;
    document.querySelector('.gelijk').disabled = true;
    let playerNumber = Math.floor(Math.random() * 12) + 1;
    pn.textContent = playerNumber;
    if (playerNumber < computerNumber) {
        console.log('win')
        scoretekst.textContent = 'you won'
        userPoints = userPoints + 10
        playerpoints.textContent = userPoints
    }
    else {
        console.log('verloren')
        scoretekst.textContent = 'you lost'
        userPoints = userPoints - 10
        playerpoints.textContent = userPoints
    }
}

//function button lager knoppen (hoger,lager,gelijk) gaan hier mee ook uit
//dit geeft je ook punten als je goed gokt of punten er af als je het fout hebt
function randompn3() {
    document.querySelector('.lager').disabled = true;
    document.querySelector('.button1').disabled = false;
    document.querySelector('.hoger').disabled = true;
    document.querySelector('.gelijk').disabled = true;
    let playerNumber = Math.floor(Math.random() * 12) + 1;
    pn.textContent = playerNumber;
    if (playerNumber === computerNumber) {
        console.log('win');
        scoretekst.textContent = 'big win';
        userPoints = userPoints + 100
        playerpoints.textContent = userPoints
    }
    else {
        console.log('verloren')
        scoretekst.textContent = 'big lost'
        userPoints = userPoints - 10
        playerpoints.textContent = userPoints
    }
}
// dit is de function waar mee je de website kan restten
function reset() {
    document.location.reload()
}
//hier staan alle eventlisteners 
buttonlower.addEventListener('click', randompn2);
buttonhigh.addEventListener('click', randomPN);
buttongelijk.addEventListener('click', randompn3);
buttonreset.addEventListener('click', reset);
buttonCpu.addEventListener('click', randompc);
//dit staat hier zodat je altijd de punten kan zien als je de website in laad zodat je weet
// met hoeveel punten je begint
playerpoints.textContent = userPoints
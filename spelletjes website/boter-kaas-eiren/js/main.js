console.log('load');
const boxes = document.querySelectorAll('.boxes');
const playerX = 'X'
const playerO = 'O'
let playerPointsX = 0
let playerPointsO = 0
let turn = playerX
let wonStatus = false
let boardstate = Array(boxes.length);
boardstate.fill('');
boxes.forEach(boxes => boxes.addEventListener('click', clickbox));
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', reset);
const playerwon = document.querySelector('.board-info');
let wonX = document.querySelector('.won-X');
let wonO = document.querySelector('.won-O');
const submitBtn = document.querySelector('.submit');
let inputField = document.querySelector('.input')
let inputField2 = document.querySelector('.input-2')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
const resetScoreBtn = document.querySelector('.reset-score')
resetScoreBtn.addEventListener('click',Resetstorage)
submitBtn.addEventListener('click', submitName)

player1.innerHTML = localStorage.getItem('playerX') ? localStorage.getItem('playerX') : 'Player X';
player2.innerHTML = localStorage.getItem('playerO') ? localStorage.getItem('playerO') : 'Player O';

function submitName() {
    console.log(inputField.value)
    player1.innerHTML = inputField.value
    player2.innerHTML = inputField2.value
    updateStorage();
    saveUserName();
}
function saveUserName(){
    localStorage.setItem('playerX', inputField.value);
    localStorage.setItem('playerO', inputField2.value);
    //inputField.innerHTML = username1
    //console.log(username1)
}
function updateStorage() {
    let gw = localStorage.getItem(`${playerX}`);
    if(gw === null){
        gw = 0
    }
    let go = localStorage.getItem(`${playerO}`);
    if(go === null){
        go = 0
    }
    

    gw  = parseInt(gw) + playerPointsX;
    localStorage.setItem(`${playerX}` , gw)
    playerPointsX = 0

    go  = parseInt(go) + playerPointsO;
    localStorage.setItem(`${playerO}` , go)
    playerPointsO = 0

    console.log(gw)
    console.log(go)
    wonX.innerHTML = getScores()[0];
    wonO.innerHTML = getScores()[1];
}
function Resetstorage(){
    localStorage.clear();
}
function getScores() {
    let gwx = localStorage.getItem(`${playerX}`);
    if(gwx === null){
        gwx = 0
    }
    let gwo = localStorage.getItem(`${playerO}`);
    if(gwo === null){
        gwo = 0
    }
    return [parseInt(gwx), parseInt(gwo)]
}

function reset() {
    boardstate = Array(boxes.length);
    boardstate.fill('');
    console.log(boardstate)
    wonStatus = false;
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.backgroundColor = 'rgb(0, 4, 255 , 0.2)';
        turn = playerX;
        playerwon.innerHTML = '';
    })
}


function clickbox(event) {

    if (wonStatus) {
        return;
    }
    const boxes = event.target;
    const boxNumber = boxes.dataset.index;
    if (boxes.innerText != "") {
        return;
    }
    if (turn === playerX) {
        boxes.innerText = playerX
        boardstate[boxNumber - 1] = playerX
        turn = playerO;
    } else {
        boxes.innerText = playerO
        boardstate[boxNumber - 1] = playerO
        turn = playerX;
    }

    checkWinner();
    botdef();
    console.log(boardstate)
}
function checkWinner() {
    checkWin.forEach(combinations => {
        const arrCombo = combinations.combo;
        const strikes = combinations.strikeClass;
        if (boardstate[arrCombo[0]] != '' &&
            boardstate[arrCombo[0]] === boardstate[arrCombo[1]] &&
            boardstate[arrCombo[1]] === boardstate[arrCombo[2]]) {
            console.log(strikes, typeof (strikes))
            if (turn == 'X') {
                console.log('o won')
                playerwon.innerHTML = 'O Won!'
                console.log(playerPointsO)
                playerPointsO++;
                updateStorage();
                wonO.innerHTML = getScores()[1];
            } else {
                console.log('x won')
                playerwon.innerHTML = 'X Won!';
                console.log(playerPointsX)
                playerPointsX++;
                updateStorage();
                wonX.innerHTML = getScores()[0];

            }
            if (strikes === '.row1') {
                const columns = document.querySelectorAll('.one, .two, .three');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.row2') {
                const columns = document.querySelectorAll('.four, .five, .six');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.row3') {
                const columns = document.querySelectorAll('.seven, .eight, .nine');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.column1') {
                const columns = document.querySelectorAll('.one, .four, .seven');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.column2') {
                const columns = document.querySelectorAll('.two, .five, .eight');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.column3') {
                const columns = document.querySelectorAll('.three, .six, .nine');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.dia1') {
                const columns = document.querySelectorAll('.one, .five, .nine');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            } else if (strikes === '.dia2') {
                const columns = document.querySelectorAll('.three, .five, .seven');
                columns.forEach(column => {
                    column.style.backgroundColor = 'green';
                })
                wonStatus = true;
            }
        }
    })
}
let checkWin = [
    { combo: [0, 1, 2], strikeClass: '.row1' },
    { combo: [3, 4, 5], strikeClass: '.row2' },
    { combo: [6, 7, 8], strikeClass: '.row3' },
    { combo: [0, 3, 6], strikeClass: '.column1' },
    { combo: [1, 4, 7], strikeClass: '.column2' },
    { combo: [2, 5, 8], strikeClass: '.column3' },
    { combo: [0, 4, 8], strikeClass: '.dia1' },
    { combo: [2, 4, 6], strikeClass: '.dia2' },
]
// bot 
function botdef() {
    botArrCheck.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]]){
                console.log('werkt nog')
            }if (boardstate[arrBot[1]] != '' &&
                boardstate[arrBot[1]] === boardstate[arrBot[2]]){
                console.log('werkt nog')
                 }if (boardstate[arrBot[0]] != '' &&
                    boardstate[arrBot[0]] === boardstate[arrBot[2]]){
                        console.log('werkt nog')

                 }
        }   
    )
}


let botArrCheck = [
    { combo: [0, 1 ,2], botClass: '.row1-01' },
    { combo: [1, 2], botClass: '.row1-12' },
    { combo: [0, 2], botClass: '.row1-02' },
]

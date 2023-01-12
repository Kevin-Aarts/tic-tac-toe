console.log('load')
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
submitBtn.addEventListener('click', submitName)
function submitName() {
    console.log(inputField.value)
    player1.innerHTML = inputField.value
    player2.innerHTML = inputField2.value
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
    botdefrow1();
    botdefrow2();
    botdefrow3();
    botdefcol1();
    botdefcol2();
    botdefcol3();
    botdefdia1();
    botdefdia2();
    botdefrandomMid();
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
                playerwon.innerHTML = 'game done'
                console.log(playerPointsO)
                playerPointsO++;
                wonO.innerHTML = playerPointsO;
            } else {
                console.log('x won')
                playerwon.innerHTML = 'game done';
                console.log(playerPointsX)
                playerPointsX++;
                wonX.innerHTML = playerPointsX;

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
let botArrRandom = [

    { combo: [0, 1, 2, 3, 4, 5, 6, 7, 8], strikeClass: '.row' },
]



// bot row 1
function botdefrow1() {
    botArrCheckRow1.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog row 1/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.three').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog row 1/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.one').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog row 1/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.two').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}


// bot row 2
function botdefrow2() {
    botArrCheckRow2.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog row 2/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.six').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog row 2/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.four').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog row 2/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.five').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}
//bot row 3
function botdefrow3() {
    botArrCheckRow3.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog row 3/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.nine').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog row 3/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.seven').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog row 3/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.eight').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}
//bot col 1
function botdefcol1() {
    botArrCheckCol1.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog col 1/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.seven').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog col1/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.one').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog col1/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.four').innerHTML = playerO
            checkWinner();
            turn = playerX;



        }
    }
    )
}


// bot col 2
function botdefcol2() {
    botArrCheckCol2.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] == 'X' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            checkWinner();
            console.log('werkt nog col2/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.eight').innerHTML = playerO

            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] == 'X' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog col2/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.two').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog col2/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.five').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}
//bot col 3
function botdefcol3() {
    botArrCheckCol3.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog col3/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.nine').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog col3/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.three').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] == 'X' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            checkWinner();
            console.log('werkt nog col3/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.six').innerHTML = playerO
            turn = playerX;
        }
    }
    )
}
//bot dia1
function botdefdia1() {
    botArrCheckdia1.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog dia1/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.nine').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog dia 1/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.one').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog dia 1/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.five').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}
//bot dia2
function botdefdia2() {
    botArrCheckdia2.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
        if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[1]] && boardstate[arrBot[2]] === '') {
            console.log('werkt nog dia 2/1')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.seven').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[1]] != '' &&
            boardstate[arrBot[1]] === boardstate[arrBot[2]] && boardstate[arrBot[0]] === '') {
            console.log('werkt nog dia 2/2')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.three').innerHTML = playerO
            checkWinner();
            turn = playerX;
        } if (turn !== playerX && boardstate[arrBot[0]] != '' &&
            boardstate[arrBot[0]] === boardstate[arrBot[2]] && boardstate[arrBot[1]] === '') {
            console.log('werkt nog dia 2/3')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.five').innerHTML = playerO
            checkWinner();
            turn = playerX;
        }
    }
    )
}

//bot random

function botdefrandomMid() {
    botArrRandom.forEach(combinations => {
        const arrBot = combinations.combo;
        const botStrikeClass = combinations.botClass;
         if ((turn !== playerX && boardstate[arrBot[0]] == 'X' && boardstate[arrBot[3]] == '' && boardstate[arrBot[6]] == 'O')) {

            console.log('nieuw5')
            boardstate[arrBot[3]] = playerO
            document.querySelector('.four').innerHTML = playerO
            turn = playerX;
            checkWinner();
        }
        if (turn !== playerX && boardstate[arrBot[4]] == '') {
        
            console.log('test in mindden')
            boardstate[arrBot[4]] = playerO
            document.querySelector('.five').innerHTML = playerO
            turn = playerX;
            checkWinner();
        } if ((turn !== playerX && boardstate[arrBot[8]] == '')) {
           
            console.log('testen eerste zet')
            boardstate[arrBot[8]] = playerO
            document.querySelector('.nine').innerHTML = playerO
            turn = playerX;
            checkWinner();
        } 
        if ((turn !== playerX && boardstate[arrBot[2]] == '')) {
        
            console.log('testen eerste zet 3de mog')
            boardstate[arrBot[2]] = playerO
            document.querySelector('.three').innerHTML = playerO
            turn = playerX;
            checkWinner();
        }  if ((turn !== playerX && boardstate[arrBot[3]] == 'X' && boardstate[arrBot[0]] == '' ) ) {
        
            console.log('testen eerste zet 4de mog')
            boardstate[arrBot[0]] = playerO
            document.querySelector('.one').innerHTML = playerO
            turn = playerX;
            checkWinner();
        } if ((turn !== playerX && boardstate[arrBot[2]] == 'O' && boardstate[arrBot[8]] == 'O' && boardstate[arrBot[5]] == 'X'  && boardstate[arrBot[1]] == ''   ) ) {
        
            console.log('testen eerste zet 5de mog')
            boardstate[arrBot[1]] = playerO
            document.querySelector('.two').innerHTML = playerO
            turn = playerX;
            checkWinner();
    }})
}


let botArrCheckRow1 = [
    { combo: [0, 1, 2], botClass: '.row1-01' },
    { combo: [0, 1, 2], botClass: '.row1-12' },
    { combo: [0, 1, 2], botClass: '.row1-02' },
]

let botArrCheckRow2 = [
    { combo: [3, 4, 5], botClass: '.row1-34' },
    { combo: [3, 4, 5], botClass: '.row1-45' },
    { combo: [3, 4, 5], botClass: '.row1-35' },
]
let botArrCheckRow3 = [
    { combo: [6, 7, 8], botClass: '.row1-67' },
    { combo: [6, 7, 8], botClass: '.row1-89' },
    { combo: [6, 7, 8], botClass: '.row1-79' },
]

let botArrCheckCol1 = [
    { combo: [0, 3, 6], botClass: '.col1-14' },
    { combo: [0, 3, 6], botClass: '.col1-47' },
    { combo: [0, 3, 6], botClass: '.col1-17' },
]

let botArrCheckCol2 = [
    { combo: [1, 4, 7], botClass: '.col2-25' },
    { combo: [1, 4, 7], botClass: '.col2-58' },
    { combo: [1, 4, 7], botClass: '.col2-28' },
]
let botArrCheckCol3 = [
    { combo: [2, 5, 8], botClass: '.col3-36' },
    { combo: [2, 5, 8], botClass: '.col3-69' },
    { combo: [2, 5, 8], botClass: '.col3-39' },
]
let botArrCheckdia1 = [
    { combo: [0, 4, 8], botClass: '.dia1-15' },
    { combo: [0, 4, 8], botClass: '.dia1-59' },
    { combo: [0, 4, 8], botClass: '.dia1-19' },
]
let botArrCheckdia2 = [
    { combo: [2, 4, 6], botClass: '.dia2-35' },
    { combo: [2, 4, 6], botClass: '.dia2-57' },
    { combo: [2, 4, 6], botClass: '.dia2-37' },
]
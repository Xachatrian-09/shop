let score = document.getElementById('score')
let win_block = document.getElementById('win_block')
let win_text = document.getElementById('win_text')
let container = document.getElementById('container')
let restart_btn = document.getElementById('restart')
let cont_btn = document.getElementById('cont')

let x_or_o = "X"
let x_win = 0
let o_win = 0
let winArray = [
    [0, 1, 2], [1, 4, 7],
    [3, 4, 5], [2, 5, 8],
    [6, 7, 8], [0, 4, 8],
    [0, 3, 6], [2, 4, 6]
]

function render() {
    for (let i = 0; i < 9; i++) {
        let content = document.createElement('div')
        content.classList.add('content')
        container.append(content)
        content.addEventListener('click', () => {
            if (!content.innerHTML) {
                content.innerHTML = x_or_o
                checkWin()
                x_or_o = x_or_o === "X" ? "O" : "X"
            }
        })
    }
}

function checkWin() {
    winArray.forEach(([a, b, c]) => {
        if (container.children[a].innerHTML &&
            container.children[a].innerHTML === container.children[b].innerHTML &&
            container.children[a].innerHTML === container.children[c].innerHTML) {

            document.querySelectorAll('.content').forEach(element => {
                element.style.pointerEvents = 'none'
                element.style.opacity = '0.7'
            });
            // win block visible 

            container.children[a].innerHTML === 'X' ? x_win++ : o_win++
            win_block.style.animation = 'win 3s ease-in-out forwards'
            win_text.innerHTML = container.children[a].innerHTML
            score.innerHTML = `${x_win} : ${o_win}`
            if (x_win === 3 || o_win === 3) {
                restart_btn.style.display = 'flex'
                cont_btn.style.display = 'none'
            }
        }
    })
}

function restart() {
    container.innerHTML = ""
    x_or_o = "X"
    x_win = 0
    o_win = 0
    win_block.style.animation = 'win_reverse 3s ease-in-out forwards'
    restart_btn.style.display = 'none'
    cont_btn.style.display = 'flex'
    score.innerHTML = `${x_win} : ${o_win}`
    render()
}

function cont() {
    container.innerHTML = ""
    x_or_o = "X"
    win_block.style.animation = 'win_reverse 3s ease-in-out forwards'
    render()
}

render()
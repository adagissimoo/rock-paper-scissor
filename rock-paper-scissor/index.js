const headerEl = document.getElementById("header-el")
const messageEl = document.getElementById("message-el")
const itemsEl = document.getElementById("items-el")
const items = ["👊", "🤚", "✌️"] // 0 - 1 - 2
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorBtn = document.getElementById("scissor-btn")
const randomBtn = document.getElementById("random-btn")
let givenChoice = "" // choice is filled in when string "givenChoice" is selected
let countBtnClick = 0

headerEl.textContent = "Rock 👊 - Paper 🤚 - Scissor ✌️"
messageEl.textContent = "Play Rock-Paper-Scissor with the computer!"

// addEventListeners to the buttons in HTML
rockBtn.addEventListener("click", getRock)
paperBtn.addEventListener("click", getPaper)
scissorBtn.addEventListener("click", getScissor)
randomBtn.addEventListener("click", getRandom)

// give each choice a string to return
function getRock() {
    givenChoice = "rock"
    renderGame()
}

function getPaper() {
    givenChoice = "paper"
    renderGame()
}

function getScissor() {
    givenChoice = "scissor"
    renderGame()
}

// string at the getRandom() is always empty and invokes the getRandomItem() function
function getRandom() {
    givenChoice = ""
    renderGame()
    countBtnClick += 1
    if (countBtnClick >= 125) {
        headerEl.textContent = "😂 Congratulations on archieving nothing! 😂"
    } else if (countBtnClick >= 100) {
        headerEl.textContent = "All the way up! 💯"
    } else if (countBtnClick >= 75) {
        headerEl.textContent = "Keep clicking buddy! 👍"
    } else if (countBtnClick >= 50) {
        headerEl.textContent = "You are on fire! 🔥"
    } else if (countBtnClick >= 25) {
        headerEl.textContent = "Why do you keep clicking me? 🤨"
    } else if (countBtnClick >= 10) {
        headerEl.textContent = "Why are you clicking me? 🤔"
    }
}

// render the game with the given string
function renderGame() {
    let player1Item
    
    if (givenChoice === "rock") {
        player1Item = "👊"
    } else if (givenChoice === "paper"){
        player1Item = "🤚"
    } else if (givenChoice === "scissor") {
        player1Item = "✌️"
    } else {
        player1Item = getRandomItem()
    }

    const player2Item = getRandomItem()
    itemsEl.textContent = player1Item + " vs " + player2Item 
    logicRules(player1Item, player2Item)
}

function getRandomItem() {
    const itemIndex = Math.floor(Math.random() * items.length) // generates random number between 0 - 1 - 2
    return items[itemIndex]
}

function logicRules(player1Item, player2Item) {
    if (player1Item === player2Item) {
        messageEl.textContent = "it's a Tie! 😮" // if item is excactly equal to opponent
    } else if (
        (player1Item === "👊" && player2Item === "✌️") ||
        (player1Item === "✌️" && player2Item === "🤚") ||
        (player1Item === "🤚" && player2Item === "👊") 
        ) {
        messageEl.textContent = "You Win! 🥳" // if rock beats scissor, scissor beats paper and paper beats rock
    } else {
        messageEl.textContent = "You Lose! 😩"
    }
}
// document.getElementById("count-el").innerText = 3

let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
    console.log("One more person has entered")
}

function decrement() {
    count -= 1
    countEl.textContent = count
    console.log("One more person has left")
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
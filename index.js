let homeEl = document.getElementById("home-el") 
let guestEl = document.getElementById("guest-el")


let homeScore = 0 
let guestScore = 0


function add1() {
    homeScore += 1
    homeEl.textContent = homeScore
}


function add2() {
    homeScore += 2
    homeEl.textContent = homeScore
}


function add3() {
    homeScore += 3
    homeEl.textContent = homeScore
}


function increment1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function increment2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function increment3() {
    guestScore += 3
    guestEl.textContent = guestScore
}

const numbers = 76
function displayDays() {
    let daysContainer = document.getElementById('days-container')

    for (let dayNumber = 1; dayNumber <= numbers; dayNumber++) {
        let dayNode = document.createElement('div')

        dayNode.innerText = dayNumber
        dayNode.classList.add('day')
        daysContainer.appendChild(dayNode)

    }

}
function randomizeNumber() {
    let randomNumber = Math.floor(Math.random() * 76) + 1
    return randomNumber
}

function selectNumber() {
    let randomfunc = randomizeNumber()
    let newNumNode = document.querySelectorAll(".day")


    for (let i = 1; i < newNumNode.length; i++) {

        if (randomfunc === parseInt(newNumNode[i].innerText)) {

            newNumNode[i].classList.add('selected-number')

        }
    }
}
function executeOnLoad() {
    displayDays()
}
window.onload = executeOnLoad 

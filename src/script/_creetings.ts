const blockCreetings = document.querySelector('.date-creetings')

class Creetings {
    constructor(){}
    innerCreetings () {
        const date: object = new Date();
        let partOfDay;
        if (date.getHours()<= 6) {
            partOfDay = "Night"
        } else if (date.getHours() <= 12) {
            partOfDay = "Morning"
        } else if (date.getHours() <= 18) {
            partOfDay = "Day"
        } else if (date.getHours() <= 24) {
            partOfDay = "Evening"
        }
        blockCreetings?.innerHTML =`
        <span>Good ${partOfDay}</span> <input class = "text-field-input" id = "input-id" type ="text" placeholder="[Enter name]">
        `
    }
    saveName() {
        const input = document.getElementById('input-id')
        localStorage.setItem('name', input?.value)
    }
    showName () {
        const input = document.getElementById('input-id')
        localStorage.getItem('name') ? input.value = localStorage.getItem('name'): false;
    }
}

export let innerCreetings = new Creetings().innerCreetings
export let saveName = new Creetings().saveName
export let showName = new Creetings().showName
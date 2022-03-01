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
        <span>Good ${partOfDay}</span>
        `
    }
}

export let innerCreetings = new Creetings().innerCreetings
export const blockUpdatePhrases = document.querySelector('.date-update')


let dataPhrase: object;
class Quotes {
    constructor(
    ) { }
    async getQuotes() {

        const url: string = 'https://type.fit/api/quotes';
        const res = await fetch(url);
        const data = await res.json()
        const phrase = data[Math.floor(Math.random() * 1600)]


        return dataPhrase = phrase;
        ;

    }
    innerQuotes() {
        const blockPhrase = document.querySelector(".date-phrase")
        getQuotes()
            .then(() => blockPhrase?.innerHTML = `
        <span>${dataPhrase.text}</span> </br>
        <span>${dataPhrase.author != null ? dataPhrase.author : '' }</span>
        `)
    }
    
}

export let getQuotes = new Quotes().getQuotes
export let innerQuotes = new Quotes().innerQuotes
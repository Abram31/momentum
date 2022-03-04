export const blockUpdatePhrases = document.querySelector('.date-update');

let dataPhrase: any;

export async function getQuotes() {
  const url = 'https://type.fit/api/quotes';
  const res = await fetch(url);
  const data = await res.json();
  const phrase = data[Math.floor(Math.random() * 1600)];
  dataPhrase = phrase;
}

export function innerQuotes() {
  const blockPhrase = document.querySelector('.date-phrase');
  getQuotes()
    .then(() => {
      blockPhrase!.innerHTML = `
        <span>${dataPhrase.text}</span> 
        <span>${dataPhrase.author != null ? dataPhrase.author : ''}</span>
        `;
    });
}

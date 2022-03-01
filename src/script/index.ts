import '../scss/style.scss';

import {innerDate, innerMonthDay} from './_date'
import {innerCreetings, saveName, showName} from './_creetings'
import {innerQuotes, getQuotes, blockUpdatePhrases} from './_quoteDay'
import { changeBackground, date} from './_changeBackground'

blockUpdatePhrases.addEventListener('click', innerQuotes)
date.addEventListener('click', changeBackground)

window.addEventListener('beforeunload', saveName)
window.addEventListener('load', showName)


setInterval(() => {
    innerDate(); innerMonthDay();
},1000) ;

innerCreetings();

innerQuotes();
 
// changeBackground();


import '../scss/style.scss';

import {innerDate, innerMonthDay} from './_date'
import {innerCreetings, saveName, showName} from './_creetings'
import {innerQuotes, getQuotes} from './_quoteDay'

window.addEventListener('beforeunload', saveName)
window.addEventListener('load', showName)

setInterval(() => {
    innerDate(); innerMonthDay();
},1000) ;

innerCreetings();

innerQuotes();
 
// getQuotes();


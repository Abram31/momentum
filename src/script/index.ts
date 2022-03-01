import '../scss/style.scss';

import {innerDate, innerMonthDay} from './_date'
import {innerCreetings} from './_creetings'

setInterval(() => {innerDate(); innerMonthDay(); innerCreetings()},1000) 



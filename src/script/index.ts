import '../scss/style.scss';
import '../scss/owfontRegular.scss';

import { innerDate, innerMonthDay } from './_date';
import { innerCreetings, saveName, showName } from './_creetings';
import { innerQuotes, getQuotes, blockUpdatePhrases } from './_quoteDay';
import { changeBackground, date, body } from './_changeBackground';

// -------------------------------Weather-------------------------------------------

// eslint-disable-next-line import/no-cycle
import {
  requestWeather, addIconsWeather, inputCity, changeCityWeather,
} from './_weather';

// -------------------------------------------Player----------------------------------------------

import { changeAudio } from './_playList';

blockUpdatePhrases?.addEventListener('click', innerQuotes);
body?.addEventListener('click', changeBackground);

window.addEventListener('beforeunload', saveName);
window.addEventListener('load', showName);

export const data:any = {
  weather: Object,
};

setInterval(() => {
  innerDate(); innerMonthDay();
}, 1000);

innerCreetings();

innerQuotes();

changeBackground();

requestWeather.then(() => { console.log(data); addIconsWeather(); });

inputCity?.addEventListener('keydown', changeCityWeather);

body?.addEventListener('click', changeAudio);

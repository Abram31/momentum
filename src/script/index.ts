/* eslint-disable import/no-cycle */

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

import { innerPlayList, playPauseAudio } from './_playList';

export const data: any = {
  weather: Object,
};
export const track: any = {
  numberAudio: Number,
};

blockUpdatePhrases?.addEventListener('click', innerQuotes);
body?.addEventListener('click', changeBackground);

window.addEventListener('beforeunload', saveName);
window.addEventListener('load', showName);

track.numberAudio = 0;

setInterval(() => {
  innerDate(); innerMonthDay();
}, 1000);

innerCreetings();

innerQuotes();

changeBackground();
innerPlayList();

requestWeather.then(() => { addIconsWeather(); });
body?.addEventListener('keydown', changeCityWeather);
body?.addEventListener('click', playPauseAudio);

/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { track } from './index';

const blockPlayList: HTMLBodyElement | null | any = document.querySelector('.play-list');
const blockPlayPause: HTMLBodyElement | null | any = document.querySelector('.player-arrows-play-pause');
const audio = new Audio();
const playList = [
  {
    title: 'Aqua Caelestis',
    src: 'assets/audio/AquaCaelestis.mp3',
  },
  {
    title: 'River Flows In You',
    src: 'assets/audio/River Flows In You.mp3',
  },
  {
    title: 'Ennio Morricone',
    src: 'assets/audio/Ennio Morricone.mp3',
  },
  {
    title: 'Summer Wind',
    src: 'assets/audio/Summer Wind.mp3',
  },
];

export const innerPlayList = () => {
  playList.forEach((trackObj) => {
    blockPlayList?.insertAdjacentHTML('beforeend', `<li class = "track">${trackObj.title}</li>`);
  });
};
const trackSwitching = (event: any) => {
  if (event.target.classList.contains('player-arrows-next')) {
    track.numberAudio += 1;
  }
  if (event.target.classList.contains('player-arrows-prev')) {
    track.numberAudio -= 1;
  }
  if (playList.length === track.numberAudio) {
    track.numberAudio = 0;
  }
  if (track.numberAudio < 0) {
    track.numberAudio = playList.length - 1;
    console.log(track.numberAudio);
  }
  Array.from(blockPlayList!.childNodes).forEach((element: any) => element.classList.remove('track-active'));
  blockPlayList!.childNodes[track.numberAudio].classList.add('track-active');
  blockPlayPause!.style.backgroundImage = 'url(./assets/img/pause.svg)';
  audio!.src = playList[track.numberAudio].src;
  audio!.play();
};

export const playPauseAudio = (event?: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  event.target.classList.contains('player-arrows-next') || event.target.classList.contains('player-arrows-prev') ? trackSwitching(event) : false;
  if (event.target.classList.contains('player-arrows-play-pause')) {
    if (audio.paused) {
      console.log(blockPlayPause);
      blockPlayPause!.style.backgroundImage = 'url(./assets/img/pause.svg)';
      audio!.src = playList[track.numberAudio].src;
      Array.from(blockPlayList!.childNodes).forEach((element:any) => element.classList.remove('track-active'));
      blockPlayList?.childNodes[track.numberAudio].classList.add('track-active');

      audio!.play();
    } else {
      blockPlayPause!.style.backgroundImage = 'url(./assets/img/play.svg)';
      audio.pause();
      Array.from(blockPlayList!.childNodes).forEach((element:any) => element.classList.remove('track-active'));
    }
  }
};

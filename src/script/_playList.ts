import { body } from './_changeBackground';

const audio = new Audio();
const playList = [
  {
    title: 'Aqua Caelestis',
    src: 'assets/sounds/AquaCaelestis.mp3',
    duration: '00:58',
  },
  {
    title: 'River Flows In You',
    src: '../assets/sounds/River Flows In You.mp3',
    duration: '03:50',
  },
];

export const changeAudio = (event: any) => {
  console.log();

  audio.src = playList[0].src;

  if (event.target.classList.contains('player-arrows-play-pause')) {
    // audio.play() ? audio.pause() :
    audio.play();
  }
};

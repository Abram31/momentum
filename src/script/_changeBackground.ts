export const body: HTMLBodyElement | null = document.querySelector('body');

export const date: HTMLBodyElement | null = document.querySelector('.date');

export const changeBackground = (event?: any) => {
  const data: Date = new Date();

  let pictureСounter = 1;
  localStorage.setItem('pictureNumber', '1');
  let partOfDay;
  if (event?.path[0].classList.contains('arrows-right')) {
    if (localStorage.getItem('pictureNumber')) {
      pictureСounter = +localStorage.getItem('pictureNumber')! + 1;
    }
    if (pictureСounter > 20) {
      localStorage.setItem('pictureNumber', (1).toString());
    } else { localStorage.setItem('pictureNumber', pictureСounter.toString()); }
  } else if (event?.path[0].classList.contains('arrows-left')) {
    if (localStorage.getItem('pictureNumber')) {
      pictureСounter = +localStorage.getItem('pictureNumber')! - 1;
    }
    if (pictureСounter < 1) {
      localStorage.setItem('pictureNumber', (20).toString());
    } else { localStorage.setItem('pictureNumber', pictureСounter.toString()); }
  }

  if (data.getHours() < 6) {
    partOfDay = 'night';
  } else if (data.getHours() < 12) {
    partOfDay = 'morning';
  } else if (data.getHours() < 18) {
    partOfDay = 'afternoon';
  } else if (data.getHours() < 24) {
    partOfDay = 'evening';
  }

  const urlPicture = new Image();
  if (localStorage.getItem('pictureNumber')!.length > 1) {
    urlPicture.src = `https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${partOfDay}/${localStorage.getItem('pictureNumber')}.jpg?raw=true`;
  } else {
    urlPicture.src = `https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${partOfDay}/0${localStorage.getItem('pictureNumber')}.jpg?raw=true`;
  }

  urlPicture.onload = () => {
    console.log(urlPicture.src);
    body!.style.backgroundImage = `url(${urlPicture.src})`;
  };
};

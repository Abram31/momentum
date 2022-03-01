const body = document.querySelector('body')

export const date = document.querySelector('.date')

class Background {
    constructor(){}
    changeBackground(event:Element) {
        console.log(event.path[0].classList.contains('arrows-right'));
        
        let pictureСounter = 1;
        if (event.path[0].classList.contains('arrows-right')) {
            console.log('rigth');
            localStorage.getItem('pictureNumber') ? pictureСounter = +localStorage.getItem('pictureNumber') + 1 : false; 
            pictureСounter > 20 ? localStorage.setItem('pictureNumber', (1).toString()) : localStorage.setItem('pictureNumber', pictureСounter.toString()) 
            
        } else if (event.path[0].classList.contains('arrows-left')) {
            console.log('left');
            localStorage.getItem('pictureNumber') ? pictureСounter = +localStorage.getItem('pictureNumber') - 1 : false;
            pictureСounter < 1 ? localStorage.setItem('pictureNumber', (20).toString()) : localStorage.setItem('pictureNumber', pictureСounter.toString())

        }
        if (localStorage.getItem('pictureNumber')?.length > 1) {
            body?.style.backgroundImage = `url(https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/afternoon/${localStorage.getItem('pictureNumber')}.jpg?raw=true)`
        } else {
            body?.style.backgroundImage = `url(https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/afternoon/0${localStorage.getItem('pictureNumber')}.jpg?raw=true)`

        }
    }
}

export let changeBackground = new Background().changeBackground
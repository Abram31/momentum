(()=>{"use strict";var e={229:(e,t,a)=>{a.r(t)},903:(e,t,a)=>{a.r(t)},337:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.changeBackground=t.date=t.body=void 0,t.body=document.querySelector("body"),t.date=document.querySelector(".date"),t.changeBackground=e=>{const a=new Date;let r,n=1;localStorage.setItem("pictureNumber","1"),(null==e?void 0:e.path[0].classList.contains("arrows-right"))?(localStorage.getItem("pictureNumber")&&(n=+localStorage.getItem("pictureNumber")+1),n>20?localStorage.setItem("pictureNumber",1..toString()):localStorage.setItem("pictureNumber",n.toString())):(null==e?void 0:e.path[0].classList.contains("arrows-left"))&&(localStorage.getItem("pictureNumber")&&(n=+localStorage.getItem("pictureNumber")-1),n<1?localStorage.setItem("pictureNumber",20..toString()):localStorage.setItem("pictureNumber",n.toString())),a.getHours()<6?r="night":a.getHours()<12?r="morning":a.getHours()<18?r="afternoon":a.getHours()<24&&(r="evening");const o=new Image;localStorage.getItem("pictureNumber").length>1?o.src=`https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${r}/${localStorage.getItem("pictureNumber")}.jpg?raw=true`:o.src=`https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${r}/0${localStorage.getItem("pictureNumber")}.jpg?raw=true`,o.onload=()=>{console.log(o.src),t.body.style.backgroundImage=`url(${o.src})`}}},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showName=t.saveName=t.innerCreetings=void 0;const a=document.querySelector(".date-creetings");t.innerCreetings=()=>{const e=new Date;let t;e.getHours()<6?t="Night":e.getHours()<12?t="Morning":e.getHours()<18?t="Day":e.getHours()<24&&(t="Evening"),a.innerHTML=`\n        <span>Good ${t}</span> <input class = "text-field-input" id = "input-id" type ="text" placeholder="[Enter name]">\n        `},t.saveName=()=>{const e=document.getElementById("input-id");localStorage.setItem("name",e.value)},t.showName=()=>{const e=document.getElementById("input-id");localStorage.getItem("name")&&(e.value=localStorage.getItem("name"))}},152:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.innerDay=t.innerMonthDay=t.innerDate=void 0;const a=document.querySelector(".date-time"),r=document.querySelector(".date-day-date");t.innerDate=()=>{const e=new Date;a.innerHTML=`\n            <span>${e.toLocaleTimeString("en-GB")}</span>\n             `},t.innerMonthDay=()=>{const e=new Date;let t,a;switch(e.getMonth()){case 0:t="January";break;case 1:t="February";break;case 2:t="March";break;case 3:t="April";break;case 4:t="May";break;case 5:t="June";break;case 6:t="July";break;case 7:t="August";break;case 8:t="September";break;case 9:t="October";break;case 10:t="November";break;case 11:t="December";break;default:t=""}switch(e.getDay()){case 0:a="Sunday";break;case 1:a="Monday";break;case 2:a="Tuesday";break;case 3:a="Wednesday";break;case 4:a="Thrusday";break;case 5:a="Friday";break;case 6:a="Saturday";break;default:a=""}r.innerHTML=`\n            <span>${a}, ${t}, ${e.getDate()}</span>\n            `},t.innerDay=()=>{new Date}},988:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playPauseAudio=t.innerPlayList=void 0;const r=a(113),n=document.querySelector(".play-list"),o=document.querySelector(".player-arrows-play-pause"),s=new Audio,i=[{title:"Aqua Caelestis",src:"assets/audio/AquaCaelestis.mp3"},{title:"River Flows In You",src:"assets/audio/River Flows In You.mp3"},{title:"Ennio Morricone",src:"assets/audio/Ennio Morricone.mp3"},{title:"Summer Wind",src:"assets/audio/Summer Wind.mp3"}];t.innerPlayList=()=>{i.forEach((e=>{null==n||n.insertAdjacentHTML("beforeend",`<li class = "track">${e.title}</li>`)}))},t.playPauseAudio=e=>{(e.target.classList.contains("player-arrows-next")||e.target.classList.contains("player-arrows-prev"))&&(e=>{e.target.classList.contains("player-arrows-next")&&(r.track.numberAudio+=1),e.target.classList.contains("player-arrows-prev")&&(r.track.numberAudio-=1),i.length===r.track.numberAudio&&(r.track.numberAudio=0),r.track.numberAudio<0&&(r.track.numberAudio=i.length-1,console.log(r.track.numberAudio)),Array.from(n.childNodes).forEach((e=>e.classList.remove("track-active"))),n.childNodes[r.track.numberAudio].classList.add("track-active"),o.style.backgroundImage="url(./assets/img/pause.svg)",s.src=i[r.track.numberAudio].src,s.play()})(e),e.target.classList.contains("player-arrows-play-pause")&&(s.paused?(console.log(o),o.style.backgroundImage="url(./assets/img/pause.svg)",s.src=i[r.track.numberAudio].src,Array.from(n.childNodes).forEach((e=>e.classList.remove("track-active"))),null==n||n.childNodes[r.track.numberAudio].classList.add("track-active"),s.play()):(o.style.backgroundImage="url(./assets/img/play.svg)",s.pause(),Array.from(n.childNodes).forEach((e=>e.classList.remove("track-active")))))}},20:function(e,t){var a=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))};let r;function n(){return a(this,void 0,void 0,(function*(){const e=yield fetch("https://type.fit/api/quotes"),t=(yield e.json())[Math.floor(1600*Math.random())];r=t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.innerQuotes=t.getQuotes=t.blockUpdatePhrases=void 0,t.blockUpdatePhrases=document.querySelector(".date-update"),t.getQuotes=n,t.innerQuotes=function(){const e=document.querySelector(".date-phrase");n().then((()=>{e.innerHTML=`\n        <span>${r.text}</span> \n        <span>${null!=r.author?r.author:""}</span>\n        `}))}},830:function(e,t,a){var r=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SendRequest=void 0;const n=a(113);t.SendRequest=class{constructor(e){this.adress=e}getRequest(e){return r(this,void 0,void 0,(function*(){const t=this.adress,a=yield fetch(t),r=yield a.json();n.data[e]=r}))}}},457:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.changeCityWeather=t.addIconsWeather=t.requestWeather=t.inputCity=void 0;const r=a(830),n=a(113),o=document.querySelector(".weather-city"),s=document.querySelector(".weather-icon"),i=document.querySelector(".weather-temperatur"),c=document.querySelector(".weather-windspeed"),u=document.querySelector(".weather-humidity");t.inputCity=document.getElementById("id-input-weather");let d="Минск",l=`https://api.openweathermap.org/data/2.5/weather?q=${d}&lang=en&units=metric&APPID=a5431f69a9a320c7854afa9b1e12fec4`;t.requestWeather=new r.SendRequest(l).getRequest("weather"),o.innerHTML='<input id ="id-input-weather" type="text" value="Minsk" placeholder="">',t.addIconsWeather=()=>{null==s||s.classList.add(`owf-${n.data.weather.weather[0].id}`),i.textContent=`${Math.round(n.data.weather.main.temp)}°C ${n.data.weather.weather[0].description}`,c.textContent=`Wind speed: ${Math.round(n.data.weather.wind.speed)} m/s`,u.textContent=`Humibity: ${n.data.weather.main.humidity}%`},t.changeCityWeather=function(e){("id-input-weather"===e.target.id&&"Enter"===e.code||"NumpadEnter"===e.code)&&(d=e.target.value,l=`https://api.openweathermap.org/data/2.5/weather?q=${d}&lang=en&units=metric&APPID=a5431f69a9a320c7854afa9b1e12fec4`,new r.SendRequest(l).getRequest("weather").then((()=>{console.log(n.data),(0,t.addIconsWeather)()})))}},113:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.track=t.data=void 0,a(903),a(229);const r=a(152),n=a(699),o=a(20),s=a(337),i=a(457),c=a(988);t.data={weather:Object},t.track={numberAudio:Number},null===o.blockUpdatePhrases||void 0===o.blockUpdatePhrases||o.blockUpdatePhrases.addEventListener("click",o.innerQuotes),null===s.body||void 0===s.body||s.body.addEventListener("click",s.changeBackground),window.addEventListener("beforeunload",n.saveName),window.addEventListener("load",(()=>{(0,n.showName)(),(0,n.innerCreetings)(),(0,o.innerQuotes)(),i.requestWeather.then((()=>{(0,i.addIconsWeather)()}))})),(0,c.innerPlayList)(),(0,s.changeBackground)(),t.track.numberAudio=0,setInterval((()=>{(0,r.innerDate)(),(0,r.innerMonthDay)()}),1e3),null===s.body||void 0===s.body||s.body.addEventListener("keydown",i.changeCityWeather),null===s.body||void 0===s.body||s.body.addEventListener("click",c.playPauseAudio)}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(113)})();
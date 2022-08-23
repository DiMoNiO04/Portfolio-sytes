import playList from './playList.js';

//----------------------------Settings-----------------------------------------//
const settingsBtn  = document.querySelector('.settings-button')
const setting = document.querySelector('.settings');
const weather = document.querySelector('.weather');
const saveBtn = document.querySelector('.save-settings')
const player = document.querySelector('.player')
const quotes = document.querySelector('.quote')
const greetingName = document.querySelector('.greeting-container')
const todoLogo = document.querySelector('.todo-logo')

settingsBtn.addEventListener('click', () => {
    setting.classList.toggle('none');
    setting.classList.toggle('visibly');
})

saveBtn.addEventListener('click', () => {
    setting.classList.toggle('none');
    setting.classList.toggle('visibly');
})

const displayWeather = () => {
    weather.classList.toggle('none');
    weather.classList.toggle('visibly');
}

const displayAudio = () => {
    player.classList.toggle('none');
    player.classList.toggle('visibly');
}

const displayDate = () => {
    data.classList.toggle('none');
    data.classList.toggle('visibly');
}

const displayTime = () => {
    time.classList.toggle('none');
    time.classList.toggle('visibly');
}

const displayQuote = () => {
    quotes.classList.toggle('none');
    quotes.classList.toggle('visibly');
}

const displayGreeting = () => {
    greetingName.classList.toggle('none');
    greetingName.classList.toggle('visibly');
}

const displayTodo = () => {
    todoLogo.classList.toggle('none');
    todoLogo.classList.toggle('visibly');
}

const selectTime = document.querySelector('.change-time');
const timeFormatAll = ['en-UK', 'en-UA'];
let timeFormat = '';

const changeTime = () => {
    let times = selectTime.value;
    if(times === 'en-UA'){
        timeFormat = timeFormatAll[0];
    }else{
        timeFormat = timeFormatAll[1];
    }
}

const changeTimeFormat = () => {
    selectTime.addEventListener('change', changeTime);
    changeTime()
}

const settings = () => {
    document.querySelector('.i-1').addEventListener('click', displayWeather);
    document.querySelector('.i-2').addEventListener('click', displayAudio);
    document.querySelector('.i-3').addEventListener('click', displayDate);
    document.querySelector('.i-4').addEventListener('click', displayTime);
    document.querySelector('.i-5').addEventListener('click', displayQuote);
    document.querySelector('.i-6').addEventListener('click', displayGreeting);
    document.querySelector('.i-7').addEventListener('click', displayTodo);
    changeTimeFormat();
}

settings()
//----------------------------------------------------------//


//---------------------------Translate-----------------------------------//
const selectLang = document.querySelector('.change-lang');
const allLang = ['en', 'ru'];
let hash = window.location.hash;

selectLang.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = selectLang.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    hash = hash.substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload()
    }
    selectLang.value = hash;
}

changeLanguage()
const settingsSpan = document.querySelectorAll('.setting-span');

const translateSettings = () => {
    settingsSpan[0].innerHTML = langArr['settings']['language'][hash];
    settingsSpan[1].innerHTML = langArr['settings']['timeFormat'][hash];
    settingsSpan[2].innerHTML = langArr['settings']['weather'][hash];
    settingsSpan[3].innerHTML = langArr['settings']['player'][hash];
    settingsSpan[4].innerHTML = langArr['settings']['date'][hash];
    settingsSpan[5].innerHTML = langArr['settings']['time'][hash];
    settingsSpan[6].innerHTML = langArr['settings']['quote'][hash];
    settingsSpan[7].innerHTML = langArr['settings']['greeting'][hash];
    settingsSpan[8].innerHTML = langArr['settings']['toDo'][hash];
    settingsSpan[9].innerHTML = langArr['settings']['image'][hash];
    saveBtn.innerHTML = langArr['settings']['save'][hash]
}
translateSettings()
//-------------------------------------------------------------------------//


//--------------------------Получение даты------------------//
const time = document.querySelector('.time');
const data = document.querySelector('.lng-date');
const greeting = document.querySelector('.lng-greeting');

function showDate(){
    const date = new Date();
    const options = {weekday:'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString(hash, options);
    data.textContent = currentDate;
}
//----------------------------------------------------------//

//--------------Получение времени суток----------------//
const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    const morning = 'morning', afternoon = 'afternoon', evening = 'evening', night = 'night'; 

    if(hours >= 6 && hours < 12){
        return morning;
    }else if(hours >=12 && hours < 18){
        return afternoon;
    }else if(hours >= 18 && hours <=23){
        return evening;
    }else{
        return night;
    }
}
//---------------------------------------------------//

//--------------Генерация времени суток----------//
const showGreeting = () => {
    const timeOfDay = getTimeOfDay();
    let greetingText = '';
    greetingText = langArr['greeting'][hash][timeOfDay];
    greeting.textContent = greetingText;
} 
//--------------------------------------------//


//------------Получение времени-------------//
const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(timeFormat);
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

showTime();
//--------------------------------------------//


//------------Ввод своего имени----------------------//
const name = document.querySelector('.name')
const placeholder = name.getAttribute('placeholder');

const setLocalStorage = () => localStorage.setItem('name', name.value);

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    name.placeholder = langArr['enterName'][hash];
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
//-----------------------------------------------------//


//-----------------------Background images-------------------//
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + min) + min);

//-----------------------Github-------------------------------//
const body = document.querySelector('body');
let timeOfDay = getTimeOfDay();
const max = 20, min = 1;
let randomNum = getRandomNum(min, max);

const getImageForGithub = () => {
    let bgNum = randomNum.toString().padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/dimonio04/momentum-backgrounds/main/${timeOfDay}/${bgNum}.webp`;

    img.addEventListener('load',() => {
        body.style.backgroundImage = `url(${img.src})`;
    })
}

const getSlideNextForGithub = () => {
    (randomNum !== max) ? randomNum++ : randomNum = min;
    getImageForGithub()
}

const getSlidePrevForGithub = () => {
    (randomNum !== min) ? randomNum-- : randomNum = max;
    getImageForGithub()
}
//--------------------------------------------------------------//

//---------------------------Flickr-----------------------------//
const inputText = document.querySelector('.input-text')
let inputApi = getTimeOfDay();

async function getLinkImageFick(){
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f89c883ba37fe693345bd28f1833a72&tags=${inputApi}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json()

    const maxFick = data.photos.photo.length, minFick = 0;
    let randomNum = getRandomNum(minFick, maxFick);

    const img = new Image();
    img.src = data.photos.photo[randomNum].url_l;

    img.addEventListener('load',() => {
        body.style.backgroundImage = `url(${img.src})`;
    })
}

function getImageForFick(){
    getLinkImageFick();

    inputText.addEventListener('keyup', event => {
        if(event.code === 'Enter'){
            inputApi = inputText.value;
            getLinkImageFick();
        }
    })
}
//-----------------------------------------------------------------//


//--------------------------Uniplash-------------------------------//
async function getLinkImageUniplash(){
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${inputApi}&client_id=rPPjkgf-ImtxXIwNWPEiPXRVXICNca0GRGPngvDn8Dk`;
    const res = await fetch(url);
    const data = await res.json();

    const img = new Image();
    img.src = data.urls.regular;

    img.addEventListener('load',() => {
        body.style.backgroundImage = `url(${img.src})`;
    })
}

function getImageForUniplash(){
    getLinkImageUniplash()

    inputText.addEventListener('keyup', event => {
        if(event.code === 'Enter'){
            inputApi = inputText.value;
            getLinkImageUniplash();
        }
    })
}
//-----------------------------------------------------------------//

//---------------------------SelectImage----------------------------//
const selectImage = document.querySelector('.change-image');

const changeImage = () => {
    let imageFormat = selectImage.value;
    if(imageFormat === 'git'){
        getImageForGithub()
        inputText.classList.add('hidden')
    }else if(imageFormat === 'unp'){
        getImageForUniplash()
        inputText.classList.remove('hidden')
    }else{
        getImageForFick()
        inputText.classList.remove('hidden')
    }
}

const changeImageFormat = () => {
    selectImage.addEventListener('change', changeImage);
    changeImage()
}

changeImageFormat()
//------------------------------------------------------------------//

//---------------------------Slider Buttons------------------------//
const slideNextBtn = document.querySelector('.slide-next');
const slidePrevBtn = document.querySelector('.slide-prev');

const nextSlide = () => {
    if(selectImage.value === 'git'){
        getSlideNextForGithub()
    }else if(selectImage.value === 'unp'){
        getLinkImageUniplash()
    }else{
        getLinkImageFick()
    }
}

const prevSlide = () => {
    if(selectImage.value === 'git'){
        getSlidePrevForGithub()
    }else if(selectImage.value === 'unp'){
        getLinkImageUniplash()
    }else{
        getLinkImageFick()
    }
}

slideNextBtn.addEventListener('click', nextSlide);
slidePrevBtn.addEventListener('click', prevSlide);
//-----------------------------------------------------------------------------//    
//-----------------------------------------------------------------------------//

//----------------------------Weather-------------------------------------------//
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.lng-weather-description');
const city = document.querySelector('.lng-city');
const wind = document.querySelector('.lng-wind');
const humidity = document.querySelector('.lng-humidity');

const getCityStart = () => city.textContent = langArr['city'][hash];
getCityStart();

async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=${hash}&appid=43ea8a9a149244e09ee334702788b8aa&units=metric`
    const res = await fetch(url);
    const data = await res.json();
   
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${langArr['wind speed'][hash]} ${data.wind.speed.toFixed(0)} m/s`;
    humidity.textContent = `${langArr['humidity'][hash]} ${data.main.humidity}%`;
}

function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
}
  
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
//------------------------------------------------------------------------------//


//---------------------Quote--------------------------------------------------//
const quote = document.querySelector('.lng-quote');
const author = document.querySelector('.lng-author');
const changeQuote = document.querySelector('.change-quote')
const minQuote = 0, maxQuote = 600;

const getRandomQuote = () => Math.floor(Math.random() * (maxQuote - minQuote) + minQuote);

async function getQuotes() {  
    const quoteEn = './json/quoteEn-min.json';
    const quoteRu = './json/quoteRu-min.json';
    let randomQuote = getRandomQuote();

    if(hash === 'en'){
        const resEn = await fetch(quoteEn);
        const dataEn = await resEn.json();
        quote.textContent = dataEn[randomQuote].text;
        author.textContent = dataEn[randomQuote].author;
    }else{
        const resRu = await fetch(quoteRu);
        const dataRu = await resRu.json();
        quote.textContent = dataRu[randomQuote].text;
        author.textContent = dataRu[randomQuote].author;
    }
}

document.addEventListener('DOMContentLoaded', getQuotes);
changeQuote.addEventListener('click', getQuotes)
//---------------------------------------------------------------------------//


//---------------------------Player---------------------------------------//
//--------------------------Audio------------------------------------------//
const audio = document.querySelector('audio')
const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');
const play = document.querySelector('.play');

const playAudio = () => {
    audio.play();
    play.classList.add('pause');
    isPlay = true;
    itemActive()
    getNameSong()
}

const pauseAudio = () => {
    play.classList.remove('pause');
    isPlay = false;
    audio.pause();
}

const playPause = () => (!isPlay) ? playAudio() : pauseAudio();

const playNext = () => {
    (playNum === countPlays) ? playNum = 0 : playNum +=1;

    audioPlayList()
    toggleButton()
    playAudio()
}

const playPrev = () => {
    (playNum === 0) ? playNum = countPlays : playNum -= 1;

    audioPlayList()
    toggleButton()
    playAudio()
}

const toggleButton = () => (!isPlay) ? play.classList.add('pause') : play.classList.remove('pause');

play.addEventListener('click', playPause);
audio.addEventListener("ended", playNext)
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev)
//-------------------------------------------------------------------------//

//----------------------Play List---------------------------------//
const playListContainer = document.querySelector('.play-list');
const nameSong = document.querySelector('.nameSong');
const countPlays = playList.length - 1;
let isPlay = false;
let playNum = 0;

const audioPlayList = () => audio.src = playList[playNum].src;
const getNameSong = () => nameSong.textContent = playList[playNum].title;

audioPlayList();
getNameSong()

const createPlayList = () => {
    for(let i = 0; i < playList.length; i++){
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = playList[i].title;
        playListContainer.append(li);
    }
}

createPlayList();
const playItem = document.querySelectorAll('.play-item');

const itemActive = () => {
    for(let i=0; i < playItem.length; i++){
        playItem[i].classList.remove('item-active');
    }
    playItem[playNum].classList.add('item-active')
}
//---------------------------------------------------------------//

//----------------------------Volume-----------------------//
const volumeBtn = document.querySelector('.volume');
const progressVolume = document.querySelector('.volume-progress');
const nowVolume = document.querySelector('.now-volume'); 

const volumeMute = () => {
    audio.volume = 0;
    volumeMin()
}

const volumeActive = () => {
    audio.volume = 1.0;
    volumeMax()
}

const volume = () => {
    if(volumeBtn.classList.contains('volume-active')){
        volumeBtn.classList.add('volume-mute');
        volumeBtn.classList.remove('volume-active')
        volumeMute()
    }else{
        volumeBtn.classList.remove('volume-mute')
        volumeBtn.classList.add('volume-active')
        volumeActive()
    }
}

progressVolume.addEventListener('click', function (event){
    let coordStart = progressVolume.getBoundingClientRect().left;
    let coordEnd = event.pageX;
    let p = (coordEnd - coordStart) / progressVolume.offsetWidth
    nowVolume.style.width = p.toFixed(3) * 100 + '%';
    audio.volume = p;
})

const volumeOver = () => progressVolume.classList.remove('hidden')
const volumeOut = () => progressVolume.classList.add('hidden');
const volumeMax = () => nowVolume.style.width = 100 + '%';
const volumeMin = () => nowVolume.style.width = 0;

volumeBtn.addEventListener('click', volume)
volumeBtn.addEventListener('mouseover', volumeOver);
document.addEventListener('click', volumeOut)
document.addEventListener('DOMContentLoaded', volumeMax)
//---------------------------------------------------------//


//-------------------Progress Bar--------------------------//
const start = document.querySelector('.start');
const end = document.querySelector('.end');
const progressBar = document.querySelector('.progress-bar');
const now = document.querySelector('.now');

const conversion = (value) => {
    let minute = Math.floor(value / 60);
    minute = minute.toString().length === 1 ? ('0' + minute) : minute;
    let second = Math.round(value % 60);
    second = second.toString().length === 1 ? ('0' + second) : second;
    return `${minute}:${second}`    
}

const getEndStartTime = () => {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
}

progressBar.addEventListener('click', function (event){
    let coordStart = progressBar.getBoundingClientRect().left;
    let coordEnd = event.pageX;
    let p = (coordEnd - coordStart) / progressBar.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%';
    audio.currentTime = p * audio.duration;
})

setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
}, 1000)

audio.addEventListener('loadedmetadata', getEndStartTime);
//------------------------------------------------------------//
//------------------------------------------------------------------------------//


//----------------------------------ToDo----------------------------------------//
const addMessage = document.querySelector('.todo-item-input');
const addButton = document.querySelector('.add-btn')
const todo = document.querySelector('.todo')
const todoBtn = document.querySelector('.todo-icon');
const toDo = document.querySelector('.todo_list');

let todoList = [];

todoBtn.addEventListener('click', () => {
    toDo.classList.toggle('none');
    toDo.classList.toggle('visibly');
})

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function () {
    if(!addMessage.value){
        return;
    }
    let newToDo = {
        todo: addMessage.value,
        checked: false
    }

    todoList.push(newToDo)
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
})

function displayMessages(){
    let displayMessage  = '';
    if(todoList === 0){
        todo.innerHTML = ''
    }
    todoList.forEach(function(item, index){
        displayMessage += `
            <li>
                <input type='checkbox' id='item-${index}' ${item.checked ? 'checked' : ''}>
                <label for='item-${index}'>${item.todo}</label>
                 <button class='delete-todo-item' id='delete-todo-item-${index}'>Delete</button>
            </li>
        `
        todo.innerHTML = displayMessage;
    })
}


const changeCheckedToDoItem = (event) => {

    let idInput = event.target.getAttribute('id')
    let forLabel = todo.querySelector('[for='+ idInput + ']')
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
}

const deleteToDoItem = (event) =>{
    let idInput = event.target.getAttribute('id')
    let indexDeleteButton = String(idInput).substr(-1);

    if(idInput === `delete-todo-item-${indexDeleteButton}`){
        todoList.splice(indexDeleteButton, 1)
        if(todoList.length === 0){
            todo.innerHTML = ''
        }
        localStorage.setItem('todo', JSON.stringify(todoList));
        displayMessages()
    }
}

todo.addEventListener('change',changeCheckedToDoItem)
todo.addEventListener('click',deleteToDoItem )


const todoTitle = document.querySelector('.todo-title');
todoTitle.textContent = langArr['toDo']['todoList'][hash]
addButton.textContent = langArr['toDo']['add'][hash];
//--------------------------------------------------------------------------------//
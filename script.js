let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

//import activities from 'activities.js'

class activity{
    constructor(type,time,url){
        this.type=type;
        this.time=time;
        this.url=url;
    }
}

const activities = [
    new activity('studing',1,'https://cripplemagazine.com/wp-content/uploads/2018/09/CN63QSUO8C.jpg'),
    new activity('meditation',0,'https://media.npr.org/assets/img/2014/01/07/mindfulness_wide-b20c3525971d5796eba9ad993463fffe8faf2bcb-s800-c85.jpg')
]

let showCurrentTime = function()
{
    let clock = document.getElementById('clock');
 
    let currentTime = new Date();
 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDay();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();

    let clockTime = hours + ':' + minutes + ':' + seconds + " || "
    + day + " / " + month + " / " + year ;
 
    clock.innerText = clockTime;
};

let updateClock=()=>{
  let time = new Date().getHours();
  let messageText;
  let image = 'https://cdns.kinguin.net/media/category/m/u/multiplay_1526300902_2.jpg'
  let timeEventJS = document.getElementById("timeEvent");
  let lolcatImageJS = document.getElementById('lolcatImage');

  activities.forEach(element => {
    if (element.time === time) {
      image = element.url
      messageText = `It's time for ${element.type}!`
    }
    
  });

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  showCurrentTime();
}



// Getting the clock to increment once a second
updateClock(activities);

const updatingClock = (time)=>{
  setInterval( updateClock, time);
}

let oneSecond = 1000;
updatingClock(oneSecond)

// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};


partyButton.addEventListener("click", partyEvent);
// partyEvent(); 










// Activates Wake-Up selector
let wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
let lunchTimeSelector =  document.getElementById("lunchTimeSelector");

let lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
let napTimeSelector =  document.getElementById("napTimeSelector");

let napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
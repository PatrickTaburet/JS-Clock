
// clock variables :
let minutesHand = document.querySelector(".minutesHand");
let secondsHand = document.querySelector(".secondsHand");
let hoursHand = document.querySelector(".hoursHand");

// alarm variables :

let alarmInput = document.querySelector(".alarmInput");
let alarmButton = document.querySelector(".alarmButton");
let rightBell = document.querySelector(".rightBell");
let leftBell = document.querySelector(".leftBell");
let dring = document.querySelector(".dring");
let littleWheel = document.querySelector(".littleWheel");
let bigWheel = document.querySelector(".bigWheel");
let secondLittleWheel = document.querySelector(".secondLittleWheel");
let myAudio = document.querySelector("#myAudio");

// Get the current date and houre from API

let currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

// Define the initial position of each Harm :

let initSec = -90 + (currentSecond * 6);
secondsHand.style.setProperty('transform', "rotate(" + initSec + "deg)");
let initMin = 90 + (currentMinute * 6);
minutesHand.style.setProperty('transform', "rotate(" + initMin + "deg)");
let initHour = -90 + ((currentHour > 12 ? (currentHour = currentHour-12) : currentHour=currentHour) * 30)  + (currentMinute * 0.5) ;
hoursHand.style.setProperty('transform', "rotate(" + initHour + "deg)");

// functions : calculate the rotation movement for each second

function rotateSeconds(){
    initSec = initSec + 3;
    return "rotate(" + initSec + "deg)";
}

function rotateMinutes(){
    initMin = initMin + 0.1;
    return "rotate(" + initMin + "deg)"
}

function rotateHours(){
    initHour = initHour + 0.00833;
    return "rotate(" + initHour + "deg)"
}

// Animation : apply the rotation on the html elements each second

setInterval(function(){
    secondsHand.style.setProperty('transform', rotateSeconds());
    minutesHand.style.setProperty('transform', rotateMinutes());
    hoursHand.style.setProperty('transform', rotateHours());
    littleWheel.style.setProperty("transform", rotateSeconds());
    secondLittleWheel.style.setProperty("transform", rotateWheel());
    bigWheel.style.setProperty("transform", rotateWheel());

}, 1000);

// Decoration wheels
let wheelSec = -90 + (currentSecond * 3);
function rotateWheel(){
    
    wheelSec = wheelSec + 6;
    return "rotate(" + (-wheelSec) + "deg)";
}
setInterval(function(){
    bigWheel.style.setProperty("transform", rotateWheel());
}, 500);

// ------ Bell Alarm ------

function getTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    let time = h + ':' + m + ':' + s
    return time;
}

let alarmState = false;
let alarmValue = "";
console.log(getTime());

function alarmCount(){ 
    setInterval(() => {
        if (alarmState == false){
            return;
        }
        if (alarmValue == getTime()){
            ringBell();
        }console.log(alarmValue);
    } ,1000);
}

function putAlarm(){
    alarmValue = alarmInput.value;
    alarmState = !alarmState;
    if (alarmState == true) {
        alarmButton.style.backgroundColor = "red";
        alarmCount();
        alarmButton.innerHTML = "ALARM ON";
        console.log(alarmState)  
    }
}

function removeAlarm(){
    alarmButton.style.backgroundColor = "white";
    alarmState = false;
    clearInterval(alarmCount());
    alarmButton.innerHTML = "ALARM OFF";
}


// Bell movement

function moveBell(){
    dring.style.setProperty('transform', 'rotate(90deg)')
    setTimeout(() => {
        dring.style.setProperty('transform', 'rotate(-70deg)')
    }, 250)
    rightBell.style.setProperty('transform', 'rotate(-3deg)')
    setTimeout(() => {
        rightBell.style.setProperty('transform', 'rotate(3deg)')
    }, 200)
    leftBell.style.setProperty('transform', 'rotate(-2deg)')
    setTimeout(() => {
        leftBell.style.setProperty('transform', 'rotate(2deg)')
    }, 250)
}

function ringBell(){
    myAudio.currentTime = 0;
    myAudio.currentTime = 18;
    myAudio.play();
    let interval = setInterval(moveBell, 450);
    setTimeout(() => {
        removeAlarm()
        clearInterval(interval)
        myAudio.pause() 
    }, 7000);
    
}


alarmButton.addEventListener("click", () => {
    if (alarmState == false){
        putAlarm();
    } else if (alarmState == true){
        removeAlarm();
        myAudio.pause()    
    }
});
// alarmButton.addEventListener("click", ringBell )

console.log(alarmState)

// Notes :
// 360deg -> 12*60 = 720 min = 43200sec


// 1min = 0.5 deg
// 720min = 360 deg

// 1sec = 0.1 deg
// 3600sec = 360 deg

// 60sec = 360 deg
// 1sec  = 6deg

// 24h -> 86400 sec
// 12 -> 43200sec
// 360/43200 = 0,00833
// 360deg   = 
// 43200sec = 1sec

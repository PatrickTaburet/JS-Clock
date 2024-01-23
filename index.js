let minutesHand = document.querySelector(".minutesHand");
let secondsHand = document.querySelector(".secondsHand");
let hoursHand = document.querySelector(".hoursHand");

let alarmInput = document.querySelector(".alarmInput");
let alarmButton = document.querySelector(".alarmButton");
let rightBell = document.querySelector(".rightBell");
let leftBell = document.querySelector(".leftBell");
let dring = document.querySelector(".dring");

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
let initHour = -90 + ((currentHour > 12 ? (currentHour = currentHour-12) : null) * 30) + (currentMinute * 0.5) ;
hoursHand.style.setProperty('transform', "rotate(" + initHour + "deg)");
// functions : calculate the rotation movement for each second

function rotateSeconds(){
    initSec = initSec + 6;
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
    // minutesHand.style.setProperty('transform', rotateMinutes());
    hoursHand.style.setProperty('transform', rotateHours());
}, 1000);

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

function getValue(){
    alarmValue = alarmInput.value;
    console.log(alarmState);
    if (alarmState == false){
        alarmState = true;
    }else{
        alarmState = false;
    }
    while(alarmState = true){
        if (alarmValue == getTime()){
            ringBell()
        }
    }
}
function moveBell(){
    dring.style.setProperty('transform', 'rotate(90deg)')
    setTimeout(() => {
        dring.style.setProperty('transform', 'rotate(-70deg)')
    }, 250)
}



function ringBell(){



    setInterval(function(){
        moveBell()
        
    }, 450);

    // for (i=0; i<20 ; i++){
    //     dring.style.setProperty('transform', 'rotate(70deg)')

    // }
}


// alarmButton.addEventListener("click", getValue )
alarmButton.addEventListener("click", ringBell )


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

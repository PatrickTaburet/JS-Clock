let minutesHand = document.querySelector(".minutesHand");
let secondsHand = document.querySelector(".secondsHand");
let numericClock = document.querySelector(".numericClock");


let currentDate = new Date();

let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();
console.log(currentMinute)
// Define the initial position of each Harm :

let initSec = -90 + (currentSecond * 6);
secondsHand.style.setProperty('transform', "rotate(" + initSec + "deg)");
let initMin = 90 + (currentMinute * 6);
minutesHand.style.setProperty('transform', "rotate(" + initMin + "deg)");


// function setCurrentHour(){
//    numericClock.value = (currentHour +" : "+ currentMinute + " : " + currentSecond);
  
// }


function rotateSeconds(){
    if (currentSecond == 59){
        currentSecond = 1;
    } else {
        currentSecond = currentSecond + 1;
    }
    initSec = initSec + 6;
    return "rotate(" + initSec + "deg)"
}

function rotateMinutes(){
    if (currentMinute == 3600){
        currentMinute = 1;
    } else {
        currentMinute = currentMinute + 1;
    }
    initMin = initMin + 0.1;
    return "rotate(" + initMin + "deg)"
   
}


setInterval(function(){
    // console.log(currentSecond)
    secondsHand.style.setProperty('transform', rotateSeconds())
}, 1000);

setInterval(function(){
    
    minutesHand.style.setProperty('transform', rotateMinutes())
}, 1000);

// setInterval(numericClock.value = (currentHour +" : "+ currentMinute +" : " + currentSecond), 60)
// function MAJHeure(){
//     // window.setTimeout('MAJHeure()', 1000);
   
    numericClock.value = (currentHour +" : "+ currentMinute + " : " + currentSecond);

// // }

//     setTimeout(() => {
        
//     });
// }

// Notes :
// 360deg -> 12*60 = 720 min = 43200sec


// 1min = 0.5 deg
// 720min = 360 deg

// 1sec = 0.1 deg
// 3600sec = 360 deg

// 60sec = 360 deg
// 1sec  = 6deg

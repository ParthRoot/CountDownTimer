//Date Object
let date = new Date();

// display countDownTime Location
const countDownEl = document.getElementsByClassName("display__time-left")[0];

//display back time location
const backTimeEl = document.getElementsByClassName("display__end-time")[0];

//display real time location
const realTimeEl = document.getElementsByClassName("display__end-time")[1];

//fetch Current time
let liveTime;

function liveClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours == 0) {
        hours = 0;
    }

    liveTime = `${changeValue(hours)} : ${changeValue(minutes)} : ${changeValue(
    seconds
  )}`;

    realTimeEl.innerHTML = `${liveTime}`;

    setTimeout(function() {
        liveClock();
    }, 1000);

    return liveTime;
}

// format time value like 00:00:00
function changeValue(liveNumber) {
    if (liveNumber >= 10) {
        liveNumber = liveNumber;
    } else {
        liveNumber = "0" + liveNumber;
    }
    return liveNumber;
}

liveClock();

let buttons = document.querySelectorAll(".timer__button");
let mytimeValue;

for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", function() {
        mytimeValue = this.value;
    });
}

document
    .getElementById("inputMin")
    .addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            mytimeValue = Number(this.value) * 60;
            if (Number(this.value) > 60) {
                alert("Please add value is less then 60");
                mytimeValue = 00;
                backTimeEl.innerHTML = "";
            }
        }
    });

//after click start this countdown
setInterval(function() {
    var minutes = Math.floor(mytimeValue / 60);
    var sec = mytimeValue % 60;

    // calculate total Minutes userInputMinutes + Current Minutes
    let a = date.getMinutes() + Number(changeValue(minutes)) + 1;

    // calculate back time value
    if (a > 59) {
        //format userInputMinutes + Current Minutes
        let b = Number(changeValue(minutes)) - (60 - date.getMinutes()) + 1;

        backTimeEl.innerHTML = `Be Back At ${changeValue(
      date.getHours() + 1
    )} : ${changeValue(b)}`;
    } else if ("0" + a === "0NaN") {
        backTimeEl.innerHTML = "";
    } else {
        //format minutes
        let b1 = Number(
            changeValue(date.getMinutes() + Number(changeValue(minutes)) + 1)
        );

        backTimeEl.innerHTML = `Be Back At ${changeValue(
      date.getHours()
    )} : ${changeValue(b1)}`;
    }

    if (mytimeValue > 0) {
        countDownEl.innerHTML = `${changeValue(minutes)} : ${changeValue(sec)}`;
    } else {
        countDownEl.innerHTML = "00" + ":" + "00";
    }
    mytimeValue--;
}, 1000);
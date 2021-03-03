// Import Statments 
import exptrcker,{insertrecord,} from './module.js';
import {db} from './indexDB.js';

// Location Accept
var para = new URLSearchParams(window.location.search);


// Variables
var ikubName = para.get("ikubName")
var begin_date = para.get("begin_date")
var interval = para.get("interval")
var amount_per_round = para.get("amount_per_round")
var punishment_fee = para.get("punishment_fee")

var team_member2 = JSON.parse(para.get("team_member2"))

var begin_date1 = begin_date.split("-")

var countDownDate = new Date(begin_date1[0], begin_date1[1], begin_date1[2], 0, 0, 0, 0);
var countDownDate2 = new Date(begin_date1[0], begin_date1[1], parseInt(begin_date1[2]) + parseInt(interval), 0, 0, 0, 0);
const cardday1 = document.querySelector(".cardday1")
const cardhour1 = document.querySelector(".cardhour1")
const cardmin1 = document.querySelector(".cardmin1")
const cardsec1 = document.querySelector(".cardsec1")


const cardday2 = document.querySelector(".cardday2")
const cardhour2 = document.querySelector(".cardhour2")
const cardmin2 = document.querySelector(".cardmin2")
const cardsec2 = document.querySelector(".cardsec2")
var countDownDate = new Date(begin_date1[0], begin_date1[1], begin_date1[2], 0, 0, 0, 0);
var countDownDate2 = new Date(begin_date1[0], begin_date1[1], parseInt(begin_date1[2]) + parseInt(interval), 0, 0, 0, 0);
const cardday1 = document.querySelector(".cardday1")
const cardhour1 = document.querySelector(".cardhour1")
const cardmin1 = document.querySelector(".cardmin1")
const cardsec1 = document.querySelector(".cardsec1")


const cardday2 = document.querySelector(".cardday2")
const cardhour2 = document.querySelector(".cardhour2")
const cardmin2 = document.querySelector(".cardmin2")
const cardsec2 = document.querySelector(".cardsec2")


// CountDown Function
var counter = setInterval(function() {

    var now = new Date().getTime();
    var timeleft1 = countDownDate.getTime() - now;
    var timeleft2 = countDownDate2.getTime() - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft1 % (1000 * 60)) / 1000);
        

    var days2 = Math.floor(timeleft2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((timeleft2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((timeleft2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((timeleft2 % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    cardsec1.innerHTML = seconds
    cardmin1.innerHTML = minutes
    cardhour1.innerHTML = hours
    cardday1.innerHTML = days


    cardsec2.innerHTML = seconds2
    cardmin2.innerHTML = minutes2
    cardhour2.innerHTML = hours2
    cardday2.innerHTML = days2
    
    // Display the message when countdown is over
    if (timeleft1 < 0) {
        clearInterval(counter);
        cardsec1.innerHTML = ""
        cardmin1.innerHTML = ""
        cardhour1.innerHTML = ""
        cardday1.innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    if (timeleft2 < 0) {
        clearInterval(counter);
        cardsec2.innerHTML = ""
        cardmin2.innerHTML = ""
        cardhour2.innerHTML = ""
        cardday2.innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
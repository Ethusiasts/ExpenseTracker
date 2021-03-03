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

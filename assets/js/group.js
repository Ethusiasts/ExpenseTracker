import exptrcker,{insertrecord,} from './module.js';
import {db} from './indexDB.js';


// receiving and storing the groupNAme and team members 
var para = new URLSearchParams(window.location.search);

var groupName = para.get("groupName")
var team_member = JSON.parse(para.get("team_member"))

// Variables for Recording group data

const total1 = document.querySelector(".total1")
const total2 = document.querySelector(".total2")
var y = 1;
var z = 1;
var share = "Expected Payment";


// Adding event listeners for inputs and buttons
total1.addEventListener("keyup", shareamount1)
total2.addEventListener("keyup", shareamount2)

// Adding functions for the above

function shareamount1() {
    share = parseInt(total1.value) / team_member.length
    records1.innerHTML = ""
    y = 1
    lister1()
}

function shareamount2() {
    share = parseInt(total2.value) / team_member.length
    records2.innerHTML = ""
    z = 1
    lister2()
}
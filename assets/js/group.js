import exptrcker,{insertrecord,} from './module.js';
import {db} from './indexDB.js';


// receiving and storing the groupNAme and team members 
var para = new URLSearchParams(window.location.search);

var groupName = para.get("groupName")
var team_member = JSON.parse(para.get("team_member"))

// Variables for Recording group data
const records1 = document.querySelector(".records1")
const records2 = document.querySelector(".records2")
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


//  Lister functions that list the team members info

lister1()
lister2()
function lister1() {
    team_member.forEach(element => {
        records1.innerHTML += `
        <div class="row">
            <div class="col-1">${y}</div>
            <div class="col-5">${element}</div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control groupName" placeholder="${share}" aria-label="Username" disabled>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control status1${y}" placeholder="Payment Status" aria-label="Username">
                </div>
            </div>
        </div>
    `
        y++
    });

}
function lister2() {
    team_member.forEach(element => {
        records2.innerHTML += `
        <div class="row">
            <div class="col-1">${z}</div>
            <div class="col-5">${element}</div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control share${z}" placeholder="${share}" aria-label="Username" disabled>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control status2${z}" placeholder="Payment Status" aria-label="Username">
                </div>
            </div>
        </div>
    `
        z++
    });

}



// main function to populate our database table groupExpense

function groupExpense(){
    insertrecord(db.group_expense, {
        groupName: groupName,
        category: groupCategory1.value || groupCategory2.value,
        team_member: team_member,
        date: datenow,
        info: array2,
    });
}
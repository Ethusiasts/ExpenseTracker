
import exptrcker,{insertrecord,} from './module.js';
import {db} from './indexDB.js';

//defining Ui variable
const category1 = document.querySelector(".category1")
const expense_type1 = document.querySelector(".expense_type1")
const amount1 = document.querySelector(".amount1")
const date1 = document.querySelector(".date1")
const time1 = document.querySelector(".time1")
const button1 = document.querySelector(".button1")


const category2 = document.querySelector(".category2")
const income_type2 = document.querySelector(".income_type2")
const amount2 = document.querySelector(".amount2")
const date2 = document.querySelector(".date2")
const time2 = document.querySelector(".time2")
const button2 = document.querySelector(".button2")


const acorda = document.querySelector(".acorda")
const acordb = document.querySelector(".acordb")
const acordc = document.querySelector(".acordc")

const acord1 = document.querySelector(".acord1")
const acord2 = document.querySelector(".acord2")
const acord3 = document.querySelector(".acord3")


const wrap = document.querySelector(".wrap")
const wrapIncome = document.querySelector(".wrapIncome")
// Action Listners
button1.addEventListener('click',createExpense);
button2.addEventListener('click',createIncome);


//Accepting username from index.html
var para = new URLSearchParams(window.location.search);

var nameLogin = para.get("nameLoginU")
var nameSign = para.get("nameSignUp")
// var log = "abe"

document.addEventListener('DOMContentLoaded', () => {
    expenseLoader();
    incomeLoader();
})

function expenseLoader(){
    let obj1 = new Array()
    let visited = {};
    db.expense.each(entity => {
    obj1.push(entity)}).then(()=>{
        wrap.innerHTML = ""
        console.log("I Love you")
        for (let i =0; i < obj1.length; i++){
            if(obj1[i].userName === nameSign || nameLogin){
                if(obj1[i].category in visited){
                    const accord = document.querySelector('.acord'+ `${visited[obj1[i].category]}`);
                    accord.innerHTML += `
                    <div class="row"> <div class="col-1">${i}</div> <div class="col-3">${obj1[i].income_type || obj1[i].expense_type}</div> <div class="col-2">${obj1[i].amount}</div> <div class="col-2">${obj1[i].date}</div> <div class="col-2">${obj1[i].time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div>             
                    `
                    visited[`${obj1[i].category}`] = i;
                }
                else{
                    var wrapper = document.createElement("div")
                    wrapper.innerHTML = 
                    `
                    <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-heading${i}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                                ${obj1[i].category}
                                </button>
                            </h2>
                            <div id="flush-collapse${i}" class="accordion-collapse collapse " aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body acord${i}"> 
                                    <div class="row"> <div class="col-1">No.</div> <div class="col-3">Expense_type</div> <div class="col-2">Amount</div> <div class="col-2">Date</div> <div class="col-2">Time</div> <div class="col-1">Edit</div><div class="col-1">Delete</div> </div>
                                    <div class="row"> <div class="col-1">${obj1[i].id}</div> <div class="col-3">${obj1[i].income_type || obj1[i].expense_type}</div> <div class="col-2">${obj1[i].amount}</div> <div class="col-2">${obj1[i].date}</div> <div class="col-2">${obj1[i].time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div>
                                </div>
                                
                            </div>
                    </div>
                    `
                    wrap.appendChild(wrapper)
                    visited[`${obj1[i].category}`] = i;
                }
                
            }
        }
})

}



function createExpense (){
    insertrecord(db.expense, {
        userName: nameSign || nameLogin,
        category: category1.value,
        expense_type: expense_type1.value,
        amount: amount1.value,
        date: date1.value,
        time: time1.value
    });
    // updateData( db.expense, wrap,category1.value, expense_type1.value, amount1.value, date1.value, time1.value)
    category1.value = expense_type1.value = amount1.value = date1.value = time1.value = ""
    expenseLoader();
}
function createIncome(){
    insertrecord(db.income, {
        userName: nameSign || nameLogin,
        category: category2.value,
        income_type: income_type2.value,
        amount: amount2.value,
        date: date2.value,
        time: time2.value
    });

    category2.value = income_type2.value = amount2.value = date2.value = time2.value = ""
    incomeLoader();
    // updateData( db.income, acord1, wrap)
    // updateData( db.income, acord2, wrap)
    // updateData( db.income, acord3, wrap)
}


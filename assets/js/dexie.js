
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




// On Document load 
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("id") == "1") {
        swapper1()
    }
    if (localStorage.getItem("id") == "2") {
        swapper2()
    }

});
// Ui Variables For Expense and Income Block
var click1 = document.querySelector(".click1")
var click2 = document.querySelector(".click2")
var click3 = document.querySelector(".click3")
var click4 = document.querySelector(".click4")
var block1 = document.querySelector(".block1")
var block2 = document.querySelector(".block2")
var block3 = document.querySelector(".block3")
var block4 = document.querySelector(".block4")

// Event Listner for Bottons
click1.addEventListener('click', swapper1)
click2.addEventListener('click', swapper2)
click3.addEventListener('click', swapper3)
click4.addEventListener('click', swapper4)

// Display Functions For the Divs of Expense And Income

function swapper1() {
    block1.classList.remove("blocka");
    block2.classList.add("blocka")
    block3.classList.add("blocka")
    block4.classList.add("blocka")
    console.log("successful1")
    localStorage.setItem("id", "1")
  // boxx1.children.style.transform = "translate()";
}
function swapper2() {
    block2.classList.remove("blocka");
    block1.classList.add("blocka")
    block3.classList.add("blocka")
    block4.classList.add("blocka")
    console.log("successful2")
    localStorage.setItem("id", "2")
}
function swapper3() {
  block3.classList.remove("blocka");
  block1.classList.add("blocka")
  block2.classList.add("blocka")
  block4.classList.add("blocka")
  console.log("successful3")
  localStorage.setItem("id", "3")
}
function swapper4() {
  block4.classList.remove("blocka");
  block1.classList.add("blocka")
  block2.classList.add("blocka")
  block3.classList.add("blocka")
  console.log("successful4")
  localStorage.setItem("id", "4")
}

// Increment amount value


var plus1 = document.querySelector(".plus1")
var minus1 = document.querySelector(".minus1")
var plus2 = document.querySelector(".plus2")
var minus2 = document.querySelector(".minus2")
var plus3 = document.querySelector(".plus3")
var minus3 = document.querySelector(".minus3")
var plus4 = document.querySelector(".plus4")
var minus4 = document.querySelector(".minus4")
var plus5 = document.querySelector(".plus5")
var minus5 = document.querySelector(".minus5")
var amount1 = document.querySelector(".amount1")
var amount2 = document.querySelector(".amount2")

// Increment value event listeners

plus1.addEventListener('click', increment1)
plus2.addEventListener('click', increment2)
plus3.addEventListener('click', increment3)
plus4.addEventListener('click', increment4)
plus5.addEventListener('click', increment5)
minus1.addEventListener('click', decrement1)
minus2.addEventListener('click', decrement2)
minus3.addEventListener('click', decrement3)
minus4.addEventListener('click', decrement4)
minus5.addEventListener('click', decrement5)
let y = "0.00"

// Increment value functions

function increment1() {
    if (amount1.value == "") {
      amount1.value = y
    }
    amount1.value = parseFloat(amount1.value) + 1.00
  }
  function increment2() {
    if (amount2.value == "") {
      amount2.value = y
    }
    amount2.value = parseFloat(amount2.value) + 1.00
  }
  function increment3() {
    if (days1.value == "") {
      days1.value = y
    }
    days1.value = parseFloat(days1.value) + 1.00
  }
  function increment4() {
    if (amntperrnd.value == "") {
      amntperrnd.value = y
    }
    amntperrnd.value = parseFloat(amntperrnd.value) + 1.00
  }
  function increment5() {
    if (pnshmntfee.value == "") {
      pnshmntfee.value = y
    }
    pnshmntfee.value = parseFloat(pnshmntfee.value) + 1.00
  }
  function decrement1() {
    if (amount1.value == "") {
      amount1.value = y
    }
    amount1.value = parseFloat(amount1.value) - 1.00
  }
  function decrement2() {
    if (amount2.value == "") {
      amount2.value = y
    }
    amount2.value = parseFloat(amount2.value) - 1.00
  }
  function decrement3() {
    if (days1.value == "") {
      days1.value = y
    }
    days1.value = parseFloat(days1.value) - 1.00
  }
  function decrement4() {
    if (amntperrnd.value == "") {
      amntperrnd.value = y
    }
    amntperrnd.value = parseFloat(amntperrnd.value) - 1.00
  }
  function decrement5() {
    if (pnshmntfee.value == "") {
      pnshmntfee.value = y
    }
    pnshmntfee.value = parseFloat(pnshmntfee.value) - 1.00
  }

  
//   End for Increment values
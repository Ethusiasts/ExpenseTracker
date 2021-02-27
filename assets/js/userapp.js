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


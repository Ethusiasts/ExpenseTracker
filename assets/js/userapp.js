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
var block1 = document.querySelector(".block1")
var block2 = document.querySelector(".block2")


// Event Listner for Bottons
click1.addEventListener('click', swapper1)
click2.addEventListener('click', swapper2)


// Display Functions For the Divs of Expense And Income

function swapper1() {
    block1.classList.remove("blocka");
    block2.classList.add("blocka")
    console.log("successful1")
    localStorage.setItem("id", "1")
}
function swapper2() {
    block2.classList.remove("blocka");
    block1.classList.add("blocka")
    console.log("successful2")
    localStorage.setItem("id", "2")
}

var swiper = new Swiper('.swiper-container', {
    pagination: {el:'.swiper-pagination',clickable: true},
    direction: 'vertical',
    spaceBetween: 20,
    mousewheel: {
      releaseOnEdges: true,
      slidesPerView: 1,
    },
    parallex: true,
    speed: 600,
  });



  
  // The third slides javascript file

  var cont3 = document.querySelector(".cont3")
  var cont4 = document.querySelector(".cont4")
  var cont5 = document.querySelector(".cont5")
  var boxx1 = document.querySelector(".boxx1")
  var boxx2 = document.querySelector(".boxx2")
  var boxx3 = document.querySelector(".boxx3")
  console.log(boxx2)
  cont3.addEventListener('mouseover', swap1)
  cont4.addEventListener('mouseover', swap2)
  cont5.addEventListener('mouseover', swap3)
  function swap1() {
    boxx1.className = "boxx"
    boxx2.classList.remove("boxx");
    boxx3.classList.remove("boxx");
    boxx2.className = "boxy"
    boxx3.className = "boxy"
    console.log(boxx1)
    // boxx1.children.style.transform = "translate()";
  }
  function swap2() {
    boxx2.className = "boxx"
    boxx1.classList.remove("boxx");
    boxx3.classList.remove("boxx");
    boxx1.className = "boxy"
    boxx3.className = "boxy"
    console.log(boxx2)
  }
  function swap3() {
    boxx3.className = "boxx"
    boxx1.classList.remove("boxx");
    boxx2.classList.remove("boxx");
    boxx1.className = "boxy"
    boxx2.className = "boxy"
    console.log(boxx3)
  }

  // Slide 3 ends here
  // login 
const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container1');
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})




// login and signup pages
const loginName = document.querySelector('#loginUserName');
const loginPassword = document.querySelector('#loginPassword');
const account = document.querySelector('#account');
const p = document.querySelector('#p');

const login = document.querySelector('#login')
const errorMessage = document.querySelector('#error_message')
const errorMessage2 = document.querySelector('#error_message2')
const errorMessage3 = document.querySelector('#error_message3')
const errorMessage4 = document.querySelector('#error_message4')
const errorMessage5 = document.querySelector('#error_message5')




login.addEventListener('click',join);

// login and signup pages


function join(){
    var arr = [];
    db.Users.each(user =>arr.push(user)).then(() => {
        for(var index = 0; index < arr.length; index++){
            errorMessage4.style.display = "none";
            errorMessage5.style.display = "none";
            if(arr[index].UserName.toString() === loginName.value.toString()){
                var pass = arr[index].Password;
                if(loginPassword.value !== pass){
                    errorMessage5.innerHTML = "Wrong password";
                    errorMessage5.style.display = "block";
                    errorMessage5.style.color = "#ff0000";
                    return;
                }
                else{
                    errorMessage5.style.display = "none";
                    return;
                }
            }
        }

        errorMessage4.innerHTML = "Wrong UserName";
        errorMessage4.style.display = "block";
        errorMessage4.style.color = "#ff0000";

    }
)};



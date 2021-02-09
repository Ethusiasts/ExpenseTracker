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
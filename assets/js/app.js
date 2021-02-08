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
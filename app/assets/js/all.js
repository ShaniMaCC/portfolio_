// var swiper_3 = new Swiper(".mySwiper-classlevel", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   //slidesPerGroup: 1,
//   grid: {
//     rows: 3,
//     fill: 'row' 
//   },
//   loop: false,
//   loopFillGroupWithBlank: false,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       grid: {
//         rows: 1,
//         fill: 'row' 
//       },
//       spaceBetween: 15
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       loop: false,
//     }
//   }
// });

//AOS
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: false, // class applied after initialization
  animatedClassName: 'animate__animated', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 80, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$(document).ready(function () {
  //top頁面滑動置頂效果
  $('.jq-btn-backtotop').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: 0 }, 1000);

  }).hover(function(){
      $(this).attr('title','top');
  });

  
});
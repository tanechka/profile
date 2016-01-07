document.addEventListener("DOMContentLoaded", function() {
  var menuEl =  $('.menu a');

  $('#js-slider').cslider({
  	bgincrement	: 50,
  	autoplay	: true,
  	interval	: 4000
  });
  setHeightSlider();

  menuEl.on('click', scrollEl)
});
function setHeightSlider(){
  var heightPage = window.innerHeight;
  var elementSlider = document.querySelector('#js-slider');
  elementSlider.style.height = heightPage - 68 + 'px';
}
function scrollEl(e) {
  e.preventDefault();
  var idScroll = $(this).attr('href');

  $('.menu a').removeClass('active');
  $(this).addClass('active');
  $('html, body').animate({
      scrollTop: $(idScroll).position().top - 60
    },
    600
  );

}

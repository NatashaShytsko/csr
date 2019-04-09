$(document).ready(function() { 

  pull = $('#pull');
 menu = $('.menu-mobile');
  submenu = $('.submenu-mobile');

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    $(this).toggleClass("cross");
  });

  $('.open').on('click', function(e) {
    e.preventDefault();
    var index = $(this).parent().index();
    var sub = $(this).toggleClass('icon-right1 icon-down').next('ul').attr("class");
    var s = $(this).toggleClass('icon-right1 icon-down').next('ul');
    
    $(this).toggleClass('icon-right1 icon-down').next('ul').slideToggle();

    uls = $('.submenu-mobile');
    
    $(uls).each(function() {
      var i = $(this).parent().index();
      if (index != i && $(this).attr('style') && sub == $(this).attr("class") && s != $(this)){

        $(this).removeAttr('style')
        $(this).prev('.open').removeClass('icon-down');
        $(this).prev('.open').addClass('icon-right1');
      }
    });
  });

  $('.menu>li')
  .mouseover(function() {
   if($(this).children('.submenu').length > 0){
    $(this).find('a').addClass('hover');
  }
  })
  .mouseout(function() {
   if($(this).children('.submenu').length > 0){
   $(this).find('a').removeClass('hover');
 }
  });

});

$(window).resize(function(){

  w = $(window).width();
  if(w > 992) {
    menu.attr('style', 'none');
    pull.removeClass("cross");
  
  };

});
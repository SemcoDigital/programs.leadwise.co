$(document).ready(function() {

  // scroll links menu
  $(".scroll-link").click(function() {
      var ScrollOffset = $(this).attr('data-soffset');
      //alert(ScrollOffset);
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - ScrollOffset + "px"
      }, {
          duration: 800,
          easing: "easeInOutCubic"
      });
      return false;
  });

  $(".openModal").click(function() {
    $('.modalDialog').show();
    $('#'+$(this).data('attr')).show();
    return false;
  });

  $(".close").click(function() {
      $('.information').hide();
      $('.modalDialog').hide();
  });

  //Partner Modal
 $("#partner-form").submit(function() {
   if ( $("#partner-form").parsley().isValid() ) {
     $("#become-partner").hide();
     $('.information').show();
   }
 });

  //tiny header
  var indexheader = $('.index-header');
  var scrolled = false;

  $(window).scroll(function () {

    if (200 < $(window).scrollTop() && !scrolled) {
      indexheader.addClass('headervisible').animate({ top: '0px' });
      scrolled = true;
    }

   if (200 > $(window).scrollTop() && scrolled) {
      indexheader.removeClass('headervisible').css('top', '-30px');
      scrolled = false;
    }
  });

  //close mobile header
  $(".sidebar_close").click(function() {
    $("#sidebartoggle").hide();
    return false;
  });

  $(document).on('click', function(e){
    if (e.target.id != 'main-menu' && e.target.id != 'sidebartoggle'){
      $('#sidebartoggle').removeAttr('checked');
    }
  });

});

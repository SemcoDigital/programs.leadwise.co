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

});

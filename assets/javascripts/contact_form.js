$(function() {
  var DOMAINS = ['hotmail.com', 'gmail.com', 'msn.com', 'icloud.com', 'mac.com', 'googlemail.com', 'att.net', 'ymail.com', 'aim.com', 'google.com', 'aol.com', 'me.com', 'pobox.com', 'terra.com.br', 'globo.com', 'yahoo.com.br', 'bol.com.br', 'ig.com.br', 'uol.com.br', 'semco.digital', 'semcostyle.org', 'leadwise.email'];

  // Parsley Form Validation
  $('form.signup_form').parsley({
    trigger: 'keyup',
  });
  window.Parsley.on('form:error', function() {
    this.$element.find('.parsley-error').effect( "highlight" );
  });

  // Email autocomplete
  $('form.signup_form input[type=email]').emailautocomplete({
    suggClass: 'emailautocomplete-suggestion', //default: "eac-sugg". your custom classname (optional)
    domains: DOMAINS //additional domains (optional)
  });
});

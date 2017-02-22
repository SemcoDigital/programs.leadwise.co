var handler = StripeCheckout.configure({
  //key: 'pk_live_u5FP8bbINVDrD8WSWJiSiLEg',
  key: 'pk_test_adnMLeo7qYydCnLtBuHytNsv',
  image: 'https://acdm.leadwise.co/assets/images/logo-leadwise.jpg',
  locale: 'auto',
  billingAddress: true,
  allowRememberMe: false,
  panelLabel: 'Total ',
  token: function(token) {
    $('<input>').attr({
      type: 'hidden',
      id: 'token',
      name: 'token',
      value: token.id,
  }).appendTo('form');
    $('<input>').attr({
      type: 'hidden',
      id: 'name',
      name: 'name',
      value: token.card.name,
    }).appendTo('form');
    $('<input>').attr({
      type: 'hidden',
      id: 'email',
      name: 'email',
      value: token.email,
    }).appendTo('form');

    $('form').submit();
  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name:        $('input[name="program_name"]').val(),
    description: $('input[name="meta[program]"]').val(),
    zipCode:     true,
    currency:    $('input[name=currency]').val().toLowerCase(),
    amount:      $('input[name=total]').val()
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});

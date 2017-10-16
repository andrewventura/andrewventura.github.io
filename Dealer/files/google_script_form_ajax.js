var $form = $('form#widgetu6559'),
    url = 'https://script.google.com/macros/s/AKfycbyoxd0GPJBYjDYC88JWTx-JyZMfday6mvMF9YLfhTMJGSAaV7U/exec'

$('#u6574-4').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyoxd0GPJBYjDYC88JWTx-JyZMfday6mvMF9YLfhTMJGSAaV7U/exec',
    method: "GET",
    dataType: "jsonp",
    data: $form.serializeObject(),
  })
})
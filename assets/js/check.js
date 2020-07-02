$("#check").on("click", function() {
  let empty = false;
  if($("#check").prop('checked')) {
    
    if(!empty) {
      $('#send').removeAttr('disabled');
      return;
    }
  }
  $('#send').attr('disabled', 'disabled');
});
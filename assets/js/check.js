$("#check").on("click", function() {
  let empty = false;
  if($("#check").prop('checked')) {
    
    if(!empty) {
      $('.send').removeClass('disabled');
      return;
    }
  }
  $('.send').addClass('disabled');
});
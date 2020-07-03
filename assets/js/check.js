$("#check").on("click", function() {
  let empty = false;
  if($("#check").prop('checked')) {
    
    if(!empty) {
      $('#send').removeAttr('disabled');
      $('#send-m').removeAttr('disabled');
      return;
    }
  }else{
  	$('#send').attr('disabled', true);
  	$('#send-m').attr('disabled', true);
  }
});
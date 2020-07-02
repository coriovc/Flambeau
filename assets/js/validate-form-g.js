function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$(".send").click(function () {		
		//email
		var emailfilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !emailfilter.test(trim($("#email").val())) )
		{
			$('.email').addClass('was-validated');
			$("#error_email").html('Ingrese un email correcto.');
			$("#error_email").show();
			$("#error_en_email").html('Please enter a correct email.');
			$("#error_en_email").show();
			$("#email").focus();
			return false;
		}
		else
		{
			$("#error_email").hide();
			$("#error_en_email").hide();			
			$('.send').attr('data-target','.modal2');
		}			
		
	});
});

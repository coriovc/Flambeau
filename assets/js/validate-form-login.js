function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$(".send").click(function () {
		//alert("hi");return false;
		//nombre
		if ( trim($("#user").val()) == '' )
		{
			$('.user').addClass('was-validated');
			$("#error_user").html('Por favor ingrese su usuario.');
			$("#error_user").show();
			$("#error_en_user").html('Please enter your username.');
			$("#error_en_user").show();
			$("#user").val('').focus();
			return false;
		}
		else
		{
			$("#error_user").hide();
			$("#error_en_user").hide();
		}
		//apellido
		if ( trim($("#password").val()) == '' )
		{
			$('.password').addClass('was-validated');
			$("#error_password").html('Por favor ingrese su contraseña.');
			$("#error_password").show();
			$("#error_en_password").html('Please enter your password.');
			$("#error_en_password").show();
			$("#password").val('').focus();
			return false;
		}
		else
		{
			$("#error_password").hide();
			$("#error_en_password").hide();
		}		
	});
});

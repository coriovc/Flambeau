function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$(".send").click(function () {
		//alert("hi");return false;
		//nombre
		if ( trim($("#name").val()) == '' )
		{
			$('.name').addClass('was-validated');
			$("#error_name").html('Por favor ingrese su nombre');
			$("#error_name").show();
			$("#error_en_name").html('Please enter your Name.');
			$("#error_en_name").show();
			$("#name").val('').focus();
			return false;
		}
		else
		{
			$("#error_name").hide();
		}
		//apellido
		if ( trim($("#last-name").val()) == '' )
		{
			$('.last-name').addClass('was-validated');
			$("#error_last-name").html('Por favor ingrese su apellido.');
			$("#error_last-name").show();
			$("#error_en_last-name").html('Please enter your last name.');
			$("#error_en_last-name").show();
			$("#last-name").val('').focus();
			return false;
		}
		else
		{
			$("#error_last-name").hide();
		}
		//telenono
		if ( trim($("#phone").val()) == '' )
		{
			$('.phone').addClass('was-validated');
			$("#error_phone").html('Por favor ingrese un numero de telefono.');
			$("#error_phone").show();
			$("#error_en_phone").html('Please enter a phone number.');
			$("#error_en_phone").show();
			$("#phone").val('').focus();
			return false;
		}
		else
		{
			var value = trim($("#phone").val());
			var phonefilter = /^(?!(0))\d{8}$/;
			if ( !phonefilter.test(value) )
			{
				$('.phone').addClass('was-validated');
				$("#error_phone").html('El numero de telefono debe tener 8 digitos.');
				$("#error_phone").show();
				$("#error_en_phone").html('The phone number must have 8 digits.');
				$("#error_en_phone").show();
				$("#phone").focus();
				return false;

			}
			else
			{
				$("#error_phone").hide();
			}
		}
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
		}
				
		//mensaje
		if ( trim($("#message").val()) == '' )
		{
			$('.message').addClass('was-validated');
			$("#error_message").html('Ingresa un mensaje.');
			$("#error_message").show();
			$("#error_en_message").html('Please enter a message.');
			$("#error_en_message").show();
			$("#message").val('').focus();
			return false;
		}
		else
		{
			$("#error_message").hide();
		}
	});
});

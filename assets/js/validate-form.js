function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$(".send").click(function () {
		//alert("hi");return false;
		//nombre y apellido
		if ( trim($("#name").val()) == '' )
		{
			$('.name').addClass('was-validated');
			$("#error_name").html('Por favor ingrese su nombre y apellido.');
			$("#error_name").show();
			$("#error_en_name").html('Please enter your first and last name.');
			$("#error_en_name").show();
			$("#name").val('').focus();
			return false;
		}
		else
		{
			$("#error_name").hide();
			$("#error_en_name").hide();
		}
		//email
		var emailfilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !emailfilter.test(trim($("#emailid").val())) )
		{
			$('.email').addClass('was-validated');
			$("#error_emailid").html('Ingrese un email correcto.');
			$("#error_emailid").show();
			$("#error_en_emailid").html('Please enter a correct email.');
			$("#error_en_emailid").show();
			$("#emailid").focus();
			return false;
		}
		else
		{
			$("#error_emailid").hide();
			$("#error_en_emailid").hide();
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
			var phonefilter = /^[0-9]+\d{7}$/;
			if ( !phonefilter.test(value) )
			{
				$('.phone').addClass('was-validated');
				$("#error_phone").html('El numero de telefono debe tener mas de 8 digitos.');
				$("#error_phone").show();
				$("#error_en_phone").html('The phone number must have more than 8 digits.');
				$("#error_en_phone").show();
				$("#phone").focus();
				return false;

			}
			else
			{
				$("#error_phone").hide();
				$("#error_en_phone").hide();
			}
		}
		//empresa
		if ( trim($("#company").val()) == '' )
		{
			$('.company').addClass('was-validated');
			$("#error_company").html('Ingrese el nombre de su empresa.');
			$("#error_company").show();
			$("#error_en_company").html('Enter your company name.');
			$("#error_en_company").show();
			$("#company").val('').focus();
			return false;
		}
		else
		{
			$("#error_company").hide();
			$("#error_en_company").hide();
		}
		//sector	
		if ( trim($("#sector").val()) == '' )
		{
			$('.sector').addClass('was-validated');
			$("#error_sector").html('Seleccione un sector.');
			$("#error_sector").show();
			$("#error_en_sector").html('Select a sector.');
			$("#error_en_sector").show();
			$("#sector").val('').focus();
			return false;
		}
		else
		{
			$("#error_sector").hide();
			$("#error_en_sector").hide();
		}
		//sitio web
		var webfilter  = /^([a-zA-Z])+\.(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !webfilter.test(trim($("#web").val())) )
		{
			$('.web').addClass('was-validated');
			$("#error_web").html('Ingrese un sitio web correcto. comenzando con WWW.');
			$("#error_web").show();
			$("#error_en_web").html('Please enter a correct website. starting with WWW.');
			$("#error_en_web").show();
			$("#web").val('').focus();
			return false;
		}
		else
		{
			$("#error_web").hide();
			$("#error_en_web").hide();
		}
		//ciudad
		if ( trim($("#city").val()) == '' )
		{
			$('.city').addClass('was-validated');
			$("#error_city").html('Indique su ciudad.');
			$("#error_city").show();
			$("#error_en_city").html('Indicate your city.');
			$("#error_en_city").show();
			$("#city").val('').focus();
			return false;
		}
		else
		{
			$("#error_city").hide();
			$("#error_en_city").hide();
		}
		//inversion
		if ( trim($("#inv").val()) == '' )
		{
			$('.inv').addClass('was-validated');
			$("#error_inv").html('seleccione un monto de inversion.');
			$("#error_inv").show();
			$("#error_en_inv").html('select an investment amount.');
			$("#error_en_inv").show();
			$("#inv").val('').focus();
			return false;
		}
		else
		{
			$("#error_inv").hide();
			$("#error_en_inv").hide();
		}

		//inversion previa
		
		
		

		//facturacion anual
		if ( trim($("#fau").val()) == '' )
		{
			$('.fau').addClass('was-validated');
			$("#error_fau").html('Indique su Facturacion anual en UDS.');
			$("#error_fau").show();
			$("#error_en_fau").html('Indicate your annual billing in UDS.');
			$("#error_en_fau").show();
			$("#fau").val('').focus();
			return false;
		}
		else
		{
			$("#error_fau").hide();
			$("#error_en_fau").hide();
		}
		
		//adjuntar propuesta
		var fileval = $('#file-input').val(); 
        if(fileval=='')
		{
			$('.ap').addClass('is-invalid');
			$("#error_ap").html('Ajunte una propuesta.');
			$("#error_ap").show();
			$("#error_en_ap").html('Attach a proposal.');
			$("#error_en_ap").show();
			$("#ap").val('').focus();
			return false;
		}
		else
		{
			$("#error_ap").hide();
			$("#error_en_ap").hide();
			$('.ap').removeClass('is-invalid');
		}
		//cuentanos sobre tu empresa
		if ( trim($("#cste").val()) == '' )
		{
			$('.cste').addClass('was-validated');
			$("#error_cste").html('Cuentanos algo sobre tu empresa.');
			$("#error_cste").show();
			$("#error_en_cste").html('Tell us something about your company.');
			$("#error_en_cste").show();
			$("#cste").val('').focus();
			return false;
		}
		else
		{
			$("#error_cste").hide();
			$("#error_en_cste").hide();
		}
	});
});

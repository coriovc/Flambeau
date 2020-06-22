function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$("#btn_send").click(function () {
		//alert("hi");return false;
		//nombre y apellido
		if ( trim($("#name").val()) == '' )
		{
			$('.name').addClass('was-validated');
			$("#error_name").html('Por favor ingrese su nombre y apellido.');
			$("#error_name").show();
			$("#name").val('').focus();
			return false;
		}
		else
		{
			$("#error_name").hide();
		}
		//email
		var emailfilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !emailfilter.test(trim($("#emailid").val())) )
		{
			$('.email').addClass('was-validated');
			$("#error_emailid").html('Ingrese un email correcto.');
			$("#error_emailid").show();
			$("#emailid").focus();
			return false;
		}
		else
		{
			$("#error_emailid").hide();
		}
		//telenono
		if ( trim($("#phone").val()) == '' )
		{
			$('.phone').addClass('was-validated');
			$("#error_phone").html('Por favor ingrese 10 digitos, sin iniciar con 0.');
			$("#error_phone").show();
			$("#phone").val('').focus();
			return false;
		}
		else
		{
			var value = trim($("#phone").val());
			var phonefilter = /^(?!(0))\d{3}\d{3}\d{4}$/;
			if ( !phonefilter.test(value) )
			{
				$('.phone').addClass('was-validated');
				$("#error_phone").html('Por favor ingrese 10 digitos, sin iniciar con 0.');
				$("#error_phone").show();
				$("#phone").focus();
				return false;

			}
			else
			{
				$("#error_phone").hide();
			}
		}
		//empresa
		if ( trim($("#company").val()) == '' )
		{
			$('.company').addClass('was-validated');
			$("#error_company").html('Ingrese su empresa.');
			$("#error_company").show();
			$("#company").val('').focus();
			return false;
		}
		else
		{
			$("#error_company").hide();
		}
		//sector	
		if ( trim($("#sector").val()) == '' )
		{
			$('.sector').addClass('was-validated');
			$("#error_sector").html('Seleccione un sector.');
			$("#error_sector").show();
			$("#sector").val('').focus();
			return false;
		}
		else
		{
			$("#error_sector").hide();
		}
		//sitio web
		if ( trim($("#web").val()) == '' )
		{
			$('.web').addClass('was-validated');
			$("#error_web").html('Ingrese un sitio web correcto.');
			$("#error_web").show();
			$("#web").val('').focus();
			return false;
		}
		else
		{
			$("#error_web").hide();
		}
		//ciudad
		if ( trim($("#city").val()) == '' )
		{
			$('.city').addClass('was-validated');
			$("#error_city").html('Indique su ciudad.');
			$("#error_city").show();
			$("#city").val('').focus();
			return false;
		}
		else
		{
			$("#error_city").hide();
		}
		//inversion
		if ( trim($("#inv").val()) == '' )
		{
			$('.inv').addClass('was-validated');
			$("#error_inv").html('seleccione un monto de inversion.');
			$("#error_inv").show();
			$("#inv").val('').focus();
			return false;
		}
		else
		{
			$("#error_inv").hide();
		}
		//facturacion anual
		if ( trim($("#fau").val()) == '' )
		{
			$('.fau').addClass('was-validated');
			$("#error_fau").html('Indique su Facturacion anual en UDS.');
			$("#error_fau").show();
			$("#fau").val('').focus();
			return false;
		}
		else
		{
			$("#error_fau").hide();
		}
		//linkedin
		if ( trim($("#linkedin").val()) == '' )
		{
			$('.linkedin').addClass('was-validated');
			$("#error_linkedin").html('ingrese un linkedin');
			$("#error_linkedin").show();
			$("#linkedin").val('').focus();
			return false;
		}
		else
		{
			$("#error_linkedin").hide();
		}
		//adjuntar propuesta
		if ( trim($("#ap").val()) == '' )
		{
			$('.ap').addClass('was-validated');
			$("#error_ap").html('Ajunte una propuesta.');
			$("#error_ap").show();
			$("#ap").val('').focus();
			return false;
		}
		else
		{
			$("#error_ap").hide();
		}
		//cuentanos sobre tu empresa
		if ( trim($("#cste").val()) == '' )
		{
			$('.cste').addClass('was-validated');
			$("#error_cste").html('Cuentanos algo sobre tu empresa.');
			$("#error_cste").show();
			$("#cste").val('').focus();
			return false;
		}
		else
		{
			$("#error_cste").hide();
		}
	});
});

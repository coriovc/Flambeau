function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	$("#btn_send").click(function () {
		//alert("hi");return false;
		//nombre y apellido
		if ( trim($("#name").val()) == '' )
		{
			$("#error_name").html('Por favor Introdusca su nombre');
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
			$("#error_emailid").html('Ingrese un email correcto');
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
			$("#error_phone").html('Please enter only 10 digits, not starting with 0. Valid Format : xxx-xxx-xxxx');
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
				$("#error_phone").html('Please enter only 10 digits, not starting with 0. Valid Format : xxx-xxx-xxxx');
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
			$("#error_company").html('company error');
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
			$("#error_sector").html('Please enter Last Name');
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
			$("#error_web").html('Please enter Last Name');
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
			$("#error_city").html('Please enter Last Name');
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
			$("#error_inv").html('Please enter Last Name');
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
			$("#error_fau").html('ingrese');
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
			$("#error_linkedin").html('ingrese linkedin');
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
			$("#error_ap").html('ingrese ap');
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
			$("#error_cste").html('text area');
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

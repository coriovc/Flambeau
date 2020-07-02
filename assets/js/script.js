	$(document).ready(function(){
		$(".redio").click(function(evento){						          
			var valor = $(this).val();							          
			if(valor == 'si'){
				$("#div-si").css("display", "block");

				$(".send").click(function () {		
	
					if ( trim($("#invpre").val()) == '' )
					{
						$('.invpre').addClass('was-validated');
						$("#error_invpre").html('Indique el detalle de la inversión previa.');
						$("#error_invpre").show();
						$("#error_en_invpre").html('Indicate the detail of the previous investment.');
						$("#error_en_invpre").show();
						$("#invpre").val('').focus();
						return false;
					}
					else
					{
						$("#error_invpre").hide();
					}
					});
			}else{
				$("#div-si").css("display", "none");
							            }
		});
	});

	
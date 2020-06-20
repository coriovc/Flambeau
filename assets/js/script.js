	$(document).ready(function(){
		$(".redio").click(function(evento){						          
			var valor = $(this).val();							          
			if(valor == 'inversion'){
				$("#div-si").css("display", "block");
				$("#div-no").css("display", "none");
			}else{
				$("#div-si").css("display", "none");
				$("#div-no").css("display", "block");
							            }
		});
	});
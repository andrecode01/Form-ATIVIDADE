function validar(){

	try{
		
		var nome =  document.getElementById('nome');
		var snome = document.getElementById('snome');
		var curr = document.getElementById('curr');

		if(nome.value == ''){

			if(nome.placeholder == ''){

			nome.style.background = 'rgba(255, 0, 0, .25)';
			nome.placeholder = 'Campo Obrigatório...';

			throw 'Campo Nome Obrigatório';
			}
		}
		if(snome.value == ''){

			if(snome.placeholder == ''){
			snome.style.background = 'rgba(255, 0, 0, .25)';
			snome.placeholder = 'Campo Obrigatório...';

			throw 'Campo Sobrenome Obrigatório';
			}
		}
		if(curr.value.length > 200){

			if(curr.style.background != 'rgba(255, 0, 0, .25)'){

			curr.style.background = 'rgba(255, 0, 0, .25)';

			throw 'Campo Curriculo não pode ter mais que 200 caractéres';
			}
		}

	}	
	catch(erro){

		alert(erro);

		validar();
	
	}

}
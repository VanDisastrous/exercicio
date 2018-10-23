var usuario = "";
var senha = "";

function Verifica(){
	usuario = document.getElementById('txtUsuario').value;
	senha = document.getElementById('txtSenha').value;
	if((usuario=="")||(senha=="")){ 
		alert("Campo(s) Vazio(s)!!!");
	}else{ 
		if((usuario=="barney")&&(senha=="1234")){
			window.location.href = "aula09_ex1.html";
		}else{
			alert("Usuario e/ou Senha Inválido(s)!!!");
			LimparCampos();
		}
	}
}

function LimparCampos(){
	document.getElementById('txtUsuario').value = "";
	document.getElementById('txtSenha').value = "";
}

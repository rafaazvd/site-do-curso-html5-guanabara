function mudaFoto(foto){
		document.getElementById("icone").src = foto;
	}
function calc_total(){
       var qtd = parseInt(document.getElementById('cqtd').value);
       var tpt = qtd * 1500;
       document.getElementById('cpt').value =tpt;
       

        }	
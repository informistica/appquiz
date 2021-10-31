function tiposelezionato(descL, valoreL, tipoL){

		desc=descL;valore=valoreL;tipo=tipoL;

		punteggio=0;

		switch(tipo){
			case 0: nbutton=2;
				break;
			case 1: nbutton=4;
				break;
		}

		var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/codici_sessioni.asp?id="+desc+"&tipo="+tipo;
		var xhttp = new XMLHttpRequest();
		var cont_selezionato=0;
		var stato1_selezionato, stato2_selezionato;
		
		aprimodal("Attendere prego...", "Caricamento in corso");
		
		xhttp.onreadystatechange = function() {
			
			stato1_selezionato=xhttp.readyState;
			stato2_selezionato=xhttp.status;
			testo_selezionato="";
			
			var tselezionato=setInterval(function(){
				
				if(stato1_selezionato==4 && stato2_selezionato==200 && testo_selezionato==""){
					chiudimodal();
					clearInterval(tselezionato);
					
					testo_selezionato = xhttp.responseText;
					sessione=testo_selezionato.split(",")[0];
					continua();
					
				}else if(stato1_selezionato!=4 && stato2_selezionato!=200 && testo_selezionato==""){
					cont_selezionato++;
					
					if(cont_selezionato==500){
						chiudimodal();
						clearInterval(tselezionato);
						
						aprimodal("Errore di connessione", "Impossibile connettersi, controllare la connessione");
						var tx = setInterval(function(){
							chiudimodal();
							window.location.href="index.html";
						}, 3000);	
					}
				}
			}, 30);
			
	  	};

		xhttp.open("GET", url, true);
		xhttp.send();
		
}
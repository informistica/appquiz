function invioquiz(x, t){

	var val = window.localStorage.getItem("valore");

	if(x=="Y"){
		
		aprimodal("Attendere prego...", "Invio del risultato in corso");
		
		var user = window.localStorage.getItem("userinvio");
		var batteria = testoJSON["batteria"];
		var totaledomande = testoJSON["totale"];
		var risultato = punteggio*100/totaledomande;
		
		var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/calcola_risultato.asp?DB=1&SessioneQuiz="+sessione+"&CodiceAllievo="+user+"&CodiceTest="+val+"&Risultato="+Math.round(risultato)+"&Quiz="+batteria+"&Tipo="+tipo;
		var xhttp = new XMLHttpRequest();

		var cont_invioquiz = 0;	  				
		xhttp.onreadystatechange = function() {			 
			var tinvioquiz=setInterval(function(){
			
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					clearInterval(tinvioquiz);
					classifica();
				}else{
					cont_invioquiz++;
					
					if(cont_invioquiz==500){
						chiudimodal();
						clearInterval(tinvioquiz);
								
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

		var it0=0;
		t1it0 = setInterval(function(){

			if(it0==1){
				clearInterval(t1it0);
				chiudimodal();
				aprimodal("Attendere prego...", "Caricamento della classifica in corso");
			}else{
				it0++;
			}
		}, 500);


	}else{

		tipo=t;
		desc=window.localStorage.getItem("desc");
		
		aprimodal("Attendere prego...", "Caricamento della classifica in corso");
		
		var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/codici_sessioni.asp?id="+desc+"&tipo="+tipo;
		
		var xhttp = new XMLHttpRequest();

		var cont_noinvio = 0;	  				
		xhttp.onreadystatechange = function() {			 
			var tnoinvio=setInterval(function(){
			
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					clearInterval(tnoinvio);
					var testo = xhttp.responseText;
					sessione=testo.split(",")[0];
	
					document.getElementById("riepilogopos").style.display="none";
					document.getElementById("selezionetipo").style.display="none";
					document.getElementById("svolgiquiz").style.display="block";
			
    				classifica();
					
				}else{
					cont_noinvio++;
					
					if(cont_noinvio==500){
						chiudimodal();
						clearInterval(tnoinvio);
								
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
}
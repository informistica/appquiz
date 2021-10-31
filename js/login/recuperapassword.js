function recuperapassword(email){

		if(email==""){
			aprimodalerror("Attenzione", "Devi inserire l'email!");
		}else{

			document.getElementById("emailrecupero").disabled=true;
			document.getElementById("btnRecupero").disabled=true;

			var url="http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/recuperapass.asp?email="+email;			
			
			var xhttp = new XMLHttpRequest();
		 
		  	var cont_recupero=0;
		 	var stato1_recupero, stato2_recupero, testo_recupero;
		  
		  	aprimodal("Attendere prego...", "Recupero password in corso");
		  				
		 	xhttp.onreadystatechange = function() {			 
			var trecp=setInterval(function(){
				
				stato1_recupero=xhttp.readyState;
				stato2_recupero=xhttp.status;
				testo_recupero=xhttp.responseText;
								
				if(stato1_recupero==4 && (stato2_recupero==200 || stato2_recupero==500)){
					
					clearInterval(trecp);

										
					if(stato1_recupero==4 && stato2_recupero==200){
						chiudimodal();
						clearInterval(trecp);
						
						aprimodal("Recupero effettuato", testo_recupero);
						var tx = setInterval(function(){
							chiudimodal();
							window.location.href="index.html";
						}, 3000);
							
					}else if(stato1_recupero == 4 && stato2_recupero == 500){
						chiudimodal();
						clearInterval(trecp);
						aprimodalerror("Attenzione", "Utente non ancora registrato");
						document.getElementById("emailrecupero").disabled=false;
						document.getElementById("btnRecupero").disabled=false;
					}
					
				}else{
					cont_recupero++;
					
					if(cont_recupero==500){
						chiudimodal();
						clearInterval(trecp);
						aprimodalerror("Errore di connessione", "Impossibile connettersi, controllare la connessione");

						login.user.disabled=false;
			  			login.pass.disabled=false;
			  			document.getElementById("chkSalva").disabled=false;
			  			document.getElementById("ospite").disabled=false;
			  			document.getElementById("utente").disabled=false;

					}
				}
			}, 30);
			
	  		};

			xhttp.open("GET", url, true);
			xhttp.send();
		}

	}

	/* --------------- FINE SCRIPT RECUPERO-PASSWORD ------------------- */
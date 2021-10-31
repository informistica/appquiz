function registrazioneutente(){

		var utente=registrazione.username.value.trim();
		var nome=registrazione.nome.value.trim();
		var cognome=registrazione.cognome.value.trim();
		var password=registrazione.password.value.trim();
		var conferma=registrazione.confpass.value.trim();
		var email=registrazione.email.value.trim();

		var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

		if(utente == "" || nome == "" || cognome == "" || password == "" || conferma == "" || email == ""){
			aprimodalerror("Attenzione", "Devi compilare tutti i campi!");
		}else if(!email_reg_exp.test(email)){
			aprimodalerror("Attenzione", "Email non valida!");
		}else if(password!=conferma){
			aprimodalerror("Attenzione", "Password non corrispondenti!");
		}else{

			registrazione.username.disabled=true;
			registrazione.nome.disabled=true;
			registrazione.cognome.disabled=true;
			registrazione.password.disabled=true;
			registrazione.confpass.disabled=true;
			registrazione.email.disabled=true;
			registrazione.puliscireg.disabled=true;
			registrazione.registrati.disabled=true;

			var url = "http://elexpo.net/expo2015Server/UECDL/script/cApp/registrati.asp?db=1&id_classe=6COM&username="+utente+"&cognome="+cognome+"&nome="+nome+"&password="+Sha256.hash(password)+"&password_conferma="+Sha256.hash(conferma)+"&email="+email;
			
			var xhttp = new XMLHttpRequest();		
			var cont_reg=0;
			var stato1_reg, stato2_reg, testo_reg;
			
			aprimodal("Attendere prego...", "Richiesta di registrazione in corso");
			
			xhttp.onreadystatechange = function() {			 
			var treg=setInterval(function(){
				
				stato1_reg=xhttp.readyState;
				stato2_reg=xhttp.status;
				
				if(stato1_reg==4 && stato2_reg==200){	
					
					clearInterval(treg);
					var testo = xhttp.responseText;
					var json = JSON.parse(testo);
					
					chiudimodal();
			
					if(json["stato"]=="0"){
				
						aprimodalerror("Attenzione", json["messaggio"]);
	
						registrazione.username.disabled=false;
						registrazione.nome.disabled=false;
						registrazione.cognome.disabled=false;
						registrazione.password.disabled=false;
						registrazione.confpass.disabled=false;
						registrazione.email.disabled=false;
						registrazione.puliscireg.disabled=false;
						registrazione.registrati.disabled=false;
	
					}else{
						aprimodal("Registrazione effettuata", json["messaggio"]);
						var tx = setInterval(function(){
							chiudimodal();
							window.location.href="index.html";
						}, 3000);	
					}
					
					
					
					
				}else{
					cont_reg++;
					if(cont_reg==500){
						chiudimodal();
						clearInterval(treg);
						aprimodalerror("Errore di connessione", "Impossibile connettersi, controllare la connessione");
						
						registrazione.username.disabled=false;
						registrazione.nome.disabled=false;
						registrazione.cognome.disabled=false;
						registrazione.password.disabled=false;
						registrazione.confpass.disabled=false;
						registrazione.email.disabled=false;
						registrazione.puliscireg.disabled=false;
						registrazione.registrati.disabled=false;
					}
				}
			}, 30);
			
	  		};

			xhttp.open("GET", url, true);
			xhttp.send();
	
	}
}

	/* --------------- FINE SCRIPT REGISTRAZIONE ------------------- */
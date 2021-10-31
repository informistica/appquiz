function controllodati(utente, password){

	  	if(utente!=null && password!=null){
			$("#user").val(utente);
			$("#pass").val(password);

			document.getElementById("chkSalva").checked=true;
			document.getElementById("secondatool").style.display="block";
		}else{
			document.getElementById("chkSalva").checked=false;
		}
	  }

	  function puliziadati(){
		  window.localStorage.removeItem("usernamesalvata");
		  window.localStorage.removeItem("passwordsalvata");

		  aprimodal("Operazione effettuata", "Dati di login eliminati correttamente");
		  var tx = setInterval(function(){
		  	chiudimodal();
			window.location.href="index.html";
		  }, 1500);	

	  }

	  /*----------------- FINE SCRIPT CONTROLLO DATI SALVATI ---------------------*/


	  function loginutente(x){

			switch(x){
				case 0:
					accessoumanet('ospite', 'ospite');
			break;
				case 1:
					var utente=login.user.value.trim();
					var password=login.pass.value.trim();

					if(utente=="" || password==""){
						aprimodalerror("Attenzione", "Devi compilare tutti i campi!");
					}else{
						accessoumanet(utente, password);
					}
			}
		}


	  function accessoumanet(utente, password){

		  login.user.disabled=true;
		  login.pass.disabled=true;
		  document.getElementById("chkSalva").disabled=true;
		  document.getElementById("ospite").disabled=true;
		  document.getElementById("utente").disabled=true;

		  var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/login.asp?DB=1&CodiceAllievo="+utente+"&PwdAllievo="+Sha256.hash(password);
						
		  var xhttp = new XMLHttpRequest();
		 
		  var cont_login=0;
		  var stato1_login, stato2_login, testo_login;
		  
		  aprimodal("Attendere prego...", "Login in corso");
		  				
		  xhttp.onreadystatechange = function() {			 
			var t1=setInterval(function(){
				
				stato1_login=xhttp.readyState;
				stato2_login=xhttp.status;
				testo_login=xhttp.responseText;
				
				if(stato1_login==4 && stato2_login==200){
					chiudimodal();
					clearInterval(t1);
					
					if(testo_login=="errore"){
					  aprimodalerror("Attenzione", "Username e/o Password errati!");
					  login.user.disabled=false;
					  login.pass.disabled=false;
					  document.getElementById("chkSalva").disabled=false;
					  document.getElementById("ospite").disabled=false;
					  document.getElementById("utente").disabled=false;
					}else{
						testo = xhttp.responseText;
						var json = JSON.parse(testo);
					  	window.localStorage.setItem("nome", json["utente"]);
					  	window.localStorage.setItem("userinvio", utente);
						window.location.href="home.html";
						
						if(utente!="ospite"){
						  if(document.getElementById("chkSalva").checked==true){
							  window.localStorage.setItem("usernamesalvata", utente);
							  window.localStorage.setItem("passwordsalvata", password);
						  }
					   }
					}
				}else{
					cont_login++;
					
					if(cont_login==500){
						chiudimodal();
						clearInterval(t1);
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
	

/* --------------- FINE SCRIPT LOGIN ------------------- */
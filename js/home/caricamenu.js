	var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/menu_moduli.asp";
	var xhttp = new XMLHttpRequest();
	
	aprimodal("Attendere prego...", "Caricamento in corso");
	
	var cont_cmenu = 0;	  				
	xhttp.onreadystatechange = function() {			 
		var tcmenu=setInterval(function(){
			
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				chiudimodal();
				clearInterval(tcmenu);
				var testo = xhttp.responseText;
				document.getElementById("menu").innerHTML=testo;
			}else{
				cont_cmenu++;
				
				if(cont_cmenu==500){
					chiudimodal();
					clearInterval(tcmenu);
							
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
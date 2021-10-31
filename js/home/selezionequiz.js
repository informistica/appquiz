if(window.localStorage.getItem("refresh")=="true"){
		quizselezionato(window.localStorage.getItem("desc"), window.localStorage.getItem("valore"));
	}

	var testoJSON, i, totale, tipo, time_iniz, t1, t2, i_mod, press, nbutton, punteggio, sessione, t1it0, t1it;
	var timervf, timers; //timervf per quiz vero/falso - timers per quiz a risposta singola
	timervf=11; /*11*/
	timers=16; /*16*/
	
function quizselezionato(desc, valore){

		clearInterval(t1);
		clearInterval(t2);
		clearInterval(t1it0);
		clearInterval(t1it);

		window.localStorage.setItem("desc", desc);
		window.localStorage.setItem("valore", valore);

		if(window.localStorage.getItem("refresh")=="false"){
			window.localStorage.setItem("refresh", "true");
			window.location.href="home.html";
		}else{
			window.localStorage.setItem("refresh", "false");
		}

		document.getElementById("menu-toggler").className="navbar-toggle menu-toggler pull-left";
		document.getElementById("sidebar").className="sidebar responsive";
		document.getElementById("istruzioni").style.display="none";


		var url = "http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/codici_sessioni.asp?id="+desc+"&tipo=0";
		
		var xhttp = new XMLHttpRequest();
		 
		  var cont_sessione=0;
		  var stato1_sessione, stato2_sessione, testo_sessione;
		  
		  aprimodal("Attendere prego...", "Caricamento in corso");
		  				
		  xhttp.onreadystatechange = function() {			 
			var tsessione=setInterval(function(){
				
				stato1_sessione=xhttp.readyState;
				stato2_sessione=xhttp.status;
				testo_sessione=xhttp.responseText;
				
				if(stato1_sessione==4 && stato2_sessione==200){
					chiudimodal();
					clearInterval(tsessione);
					
					document.getElementById("selezionetipo").style.display="block";
					document.getElementById("svolgiquiz").style.display="none";
	
					document.getElementById("titoloquiz").innerHTML=testo_sessione.split(",")[2];
					document.getElementById("descrizionequiz").innerHTML=testo_sessione.split(",")[4];
					
					
				}else{
					cont_sessione++;
					
					if(cont_sessione==500){
						chiudimodal();
						clearInterval(tsessione);
						
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

function continua(){
				
		var url = "http://umanetexpo.net/expo2015Server/UECDL/script/cApp/esegui_test.asp?CodiceTest="+valore+"&tipo="+tipo;
		var xhttp = new XMLHttpRequest();
		
		var cont_continua=0;
		var stato1_continua, stato2_continua, testo_continua;
		aprimodal("Attendere prego...", "Caricamento in corso");
		
		xhttp.onreadystatechange = function() {
			
			stato1_continua=xhttp.readyState;
			stato2_continua=xhttp.status;
			testo_continua="";
			
			var tcontinua=setInterval(function(){
			
				if (stato1_continua == 4 && stato2_continua == 200 && testo_continua=="") {
					chiudimodal();
					clearInterval(tcontinua);
					
					testo_continua = xhttp.responseText;					
					document.getElementById("footer-modalspiegazioni").style.display="block";
	
					/*ora hanno visibilità globale quindi non abbiamo più la necessità di rientrare nella function per potervi accedere*/
										
					try {
						testoJSON = JSON.parse(testo_continua);
					}
					catch(err) {
						aprimodal("Attenzione", "Si è verificato un errore. Riprovare");
						
						var tx = setInterval(function(){
							chiudimodal();
							window.location.href="home.html";
						}, 3000);						
					}
					
					totale = testoJSON["totale"];
					i_mod=1;
	
					//alert(i_mod);
	
					document.getElementById("selezionetipo").style.display="none";
					document.getElementById("spiegazionimodal").style.display="block";
	
					document.getElementById("ndomanda").innerHTML="Domanda n° "+(i_mod);
					document.getElementById("testodom").innerHTML="<b>"+testoJSON["domanda"+(i_mod)]+"</b>";
					document.getElementById("testospiegazione").innerHTML=testoJSON["spiegazione"+(i_mod)];
	
	
					$("#fleft").click(function(){
	
						if(i_mod!=1){
	
							//i maggiore di 0: bottone cliccabile
	
							i_mod--;
	
							//alert(i_mod);
	
							if(i_mod>0){
								document.getElementById("ndomanda").innerHTML="Domanda n° "+(i_mod);
								document.getElementById("testodom").innerHTML="<b>"+testoJSON["domanda"+(i_mod)]+"</b>";
								document.getElementById("testospiegazione").innerHTML=testoJSON["spiegazione"+(i_mod)];
							}
	
							if(i_mod==1){
								document.getElementById("fleft").style.color="#969696";
							}else{
								document.getElementById("fright").style.color="black";
							}
						}
	
					});
	
	
					$("#fright").click(function(){
	
						if(i_mod!=(totale-1)){
	
							//i minore del totale: bottone cliccabile
							i_mod++;
	
							//alert(i_mod);
	
							document.getElementById("ndomanda").innerHTML="Domanda n° "+(i_mod);
							document.getElementById("testodom").innerHTML="<b>"+testoJSON["domanda"+(i_mod)]+"</b>";
							document.getElementById("testospiegazione").innerHTML=testoJSON["spiegazione"+(i_mod)];
	
							if(i_mod==(totale-1)){
								document.getElementById("fright").style.color="#969696";
							}else{
								document.getElementById("fleft").style.color="black";
							}
						}
	
					});
	
	
					$("#okmodal").click(function(){
	
						i=1;
						totale--;
	
						document.getElementById("testodomanda_svolgimento").style.display="block";
						document.getElementById("testodomanda_svolgimento").style="font-size:16px";
						document.getElementById("tab-riferimenti").style="";
						document.getElementById("divisionequiz").style.display="block";
						document.getElementById("corpoquiz").style.display="block";
						document.getElementById("corpoquiz").style="width:100%";
						document.getElementById("divtabella").style.display="none";
	
						document.getElementById("spiegazionimodal").style.display="none";
						document.getElementById("svolgiquiz").style.display="block";
	
						document.getElementById("titoloquiz_svolgimento").innerHTML="SVOLGI QUIZ: "+testoJSON["titolo"];
						document.getElementById("rimanenti").innerHTML=totale;
						document.getElementById("testodomanda_svolgimento").innerHTML="<b>"+testoJSON["domanda"+(i)]+"</b>";
	
						if(tipo==0){
							document.getElementById("corpoquiz").innerHTML="<button id='button1' style='width:50%' onClick='buttonpress(1)' class='btn btn-primary'>Vero</button><div class='space-4'></div><button id='button2' style='width:50%' onClick='buttonpress(0)' class='btn btn-primary'>Falso</button>";
	
							timer(timervf);
	
						}else
						if(tipo==1){
							var r1=testoJSON["risposta"+i+".1"];
							var r2=testoJSON["risposta"+i+".2"];
							var r3=testoJSON["risposta"+i+".3"];
							var r4=testoJSON["risposta"+i+".4"];
	
							document.getElementById("corpoquiz").innerHTML="<button id='button1' style='width:75%' onClick='buttonpress(0)' class='btn btn-primary'>"+r1+"</button><div class='space-4'></div><button id='button2' onClick='buttonpress(1)' style='width:75%' class='btn btn-primary'>"+r2+"</button><div class='space-4'></div><button id='button3' onClick='buttonpress(2)' style='width:75%' class='btn btn-primary'>"+r3+"</button><div class='space-4'></div><button id='button4' onClick='buttonpress(3)' style='width:75%' class='btn btn-primary'>"+r4+"</button>";
	
							timer(timers);
	
						}
	
					});
	
	
				}else if(stato1_continua != 4 && stato2_continua != 200 && testo_continua==""){
					
					cont_continua++;
					
					if(cont_continua==500){
						chiudimodal();
						clearInterval(tcontinua);
						
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
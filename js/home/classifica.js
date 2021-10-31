function classifica(){
		
		var val = window.localStorage.getItem("valore");
		
		// chiamata visualizzazione classifica

		var url="http://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/calcola_wall_fame.asp?DB=1&SessioneQuiz="+sessione+"&CodiceTest="+val+"&Tipo="+tipo;
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {

					var testo = xhttp.responseText;
					var splittedtext = testo.split("$");

					//rendo non visibili elementi quiz
					document.getElementById("testodomanda_svolgimento").style.display="none";
					document.getElementById("tab-riferimenti").style.display="none";
					document.getElementById("divisionequiz").style.display="none";
					document.getElementById("corpoquiz").style.display="none";

					//stampo classifica
					document.getElementById("titoloquiz_svolgimento").innerHTML = "CLASSIFICA: "+splittedtext[0].split(",")[0];

					var tabellacomposizione="";
					var nome="", posizione="";

					for(var i=1; i<=splittedtext[0].split(",")[1]; i++){

						tabellacomposizione+="<tr style=\"font-size:14px\"><td class=\"center\">"+splittedtext[i].split(",")[1]+"</td><td>"+splittedtext[i].split(",")[2]+"</td><td class=\"center\">"+splittedtext[i].split(",")[3]+"</td><td class=\"center\">"+splittedtext[i].split(",")[4]+"</td></tr>";

						if(splittedtext[i].split(",")[2]==window.localStorage.getItem("nome")){
							nome=splittedtext[i].split(",")[2];
							posizione=splittedtext[i].split(",")[1];
						}

					}

					document.getElementById("riepilogopos").innerHTML="<b>Riepilogo dei tuoi risultati</b><br><span style=\"font-size:13px; color:black\">Posizione: "+posizione+"<br>Nome: "+nome+"</span>";
					document.getElementById("bodytable").innerHTML=tabellacomposizione;
					document.getElementById("altroquiz").innerHTML="<i>Per svolgere un altro Quiz premere sul pulsante in alto a sinistra e selezionarlo dal menu</i>";
					document.getElementById("divtabella").style.display="block";

					var it = 0;
					t1it = setInterval(function(){

						if(it==1){
							clearInterval(t1it);
							chiudimodal();
						}else{
							it++;
						}
					}, 500);

			}
		};

		xhttp.open("GET", url, true);
		xhttp.send();
	
	}
function buttonpress(id){
	
	var id_cond;
	
	clearInterval(t1);
	clearInterval(t2);

	rispostaesatta=testoJSON["rispostaesatta"+i];
	
	if(nbutton == 2){
		id_cond = id;
	}else{
		id_cond = (id+1);
	}
	
	if(id_cond==parseInt(rispostaesatta)){
		//risposta esatta

		punteggio++;

		switch(nbutton){
		case 2: $("#button1").prop("disabled", true);
						$("#button2").prop("disabled", true);

						switch(id){
							case 0: document.getElementById("button2").className = "btn btn-success";
								break;
							case 1: document.getElementById("button1").className = "btn btn-success";
								break;
						}

						break;

		case 4: $("#button1").prop("disabled", true);
						$("#button2").prop("disabled", true);
						$("#button3").prop("disabled", true);
						$("#button4").prop("disabled", true);

						switch(id){
							case 0: document.getElementById("button1").className = "btn btn-success";
								break;
							case 1: document.getElementById("button2").className = "btn btn-success";
								break;
							case 2: document.getElementById("button3").className = "btn btn-success";
								break;
							case 3: document.getElementById("button4").className = "btn btn-success";
								break;
						}

						break;
		}

	}else{

		//risposta errata

		switch(nbutton){
		case 2: $("#button1").prop("disabled", true);
						$("#button2").prop("disabled", true);

						switch(id){
							case 0: document.getElementById("button2").className = "btn btn-danger";
								break;
							case 1: document.getElementById("button1").className = "btn btn-danger";
								break;
						}

						break;

		case 4: $("#button1").prop("disabled", true);
						$("#button2").prop("disabled", true);
						$("#button3").prop("disabled", true);
						$("#button4").prop("disabled", true);

						switch(id){
							case 0: document.getElementById("button1").className = "btn btn-danger";
								break;
							case 1: document.getElementById("button2").className = "btn btn-danger";
								break;
							case 2: document.getElementById("button3").className = "btn btn-danger";
								break;
							case 3: document.getElementById("button4").className = "btn btn-danger";
								break;
						}

						break;
		}

	}

	document.getElementById("punti").innerHTML=punteggio;
	totale--;
	i++;

	var tempo=1;
	t2=setInterval(function(){

		if(tempo>0){
			tempo--;
		}else{

			clearInterval(t2);
			document.getElementById("rimanenti").innerHTML=totale+"";

			nuovadomanda(time_iniz);
		}

	}, 1000);

}
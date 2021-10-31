function timer(time){

	time_iniz=time-1;

	document.getElementById("tempo").style="color:black";
	document.getElementById("tempoicona").style="color:black";

	t1=setInterval(function(){

		if(time>0){

			time--;
			document.getElementById("tempo").innerHTML=time+"";

			if(time==0){
				clearInterval(t1);

				document.getElementById("tempo").style="color:red";
				document.getElementById("tempoicona").style="color:red";

				switch(nbutton){
				case 2: $("#button1").prop("disabled", true);
								$("#button2").prop("disabled", true);

								break;

				case 4: $("#button1").prop("disabled", true);
								$("#button2").prop("disabled", true);
								$("#button3").prop("disabled", true);
								$("#button4").prop("disabled", true);
				}

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

		}


	}, 1000);

}
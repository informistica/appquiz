function nuovadomanda(time_iniz){

		document.getElementById("punti").innerHTML=punteggio;

		if(totale>=0){

			document.getElementById("tempo").innerHTML=time_iniz;
			document.getElementById("rimanenti").innerHTML=totale+"";
			document.getElementById("testodomanda_svolgimento").innerHTML="<b>"+testoJSON["domanda"+i]+"</b>";

			if(tipo==0){
				document.getElementById("corpoquiz").innerHTML="<button id='button1' style='width:50%' onClick='buttonpress(1)' class='btn btn-primary'>Vero</button><div class='space-4'></div><button id='button2' style='width:50%' onClick='buttonpress(0)' class='btn btn-primary'>Falso</button>";

				timer(timervf);

	}else
			if(tipo==1){
				var r1=testoJSON["risposta"+i+".1"];
				var r2=testoJSON["risposta"+i+".2"];
				var r3=testoJSON["risposta"+i+".3"];
				var r4=testoJSON["risposta"+i+".4"];

				document.getElementById("corpoquiz").innerHTML="<button id='button1' style='width:75%' onClick='buttonpress(0)' class='btn btn-primary'>"+r1+"</button><div class='space-4'></div><button id='button2' onClick='buttonpress(1);' style='width:75%' class='btn btn-primary'>"+r2+"</button><div class='space-4'></div><button id='button3' onClick='buttonpress(2);' style='width:75%' class='btn btn-primary'>"+r3+"</button><div class='space-4'></div><button id='button4' onClick='buttonpress(3);' style='width:75%' class='btn btn-primary'>"+r4+"</button>";

				timer(timers);

	}

}else{

	//domande esaurite

	document.getElementById("rimanenti").innerHTML=0;
	invioquiz("Y", null);

}

}
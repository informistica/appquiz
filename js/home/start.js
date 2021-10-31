if(window.localStorage.getItem("refresh")=="true"){
		quizselezionato(window.localStorage.getItem("desc"), window.localStorage.getItem("valore"));
	}

	var testoJSON, i, totale, tipo, time_iniz, t1, t2, i_mod, press, nbutton, punteggio, sessione, t1it0, t1it;
	var timervf, timers; //timervf per quiz vero/falso - timers per quiz a risposta singola
	timervf=11; /*11*/
	timers=16; /*16*/
/* ---------- GESTIONE MODAL --------- */
		
		function aprimodal(x,y){
						
			//modal di avviso (non cliccabile dall'utente)
			
			bootbox.confirm({
				title: x,
				message: y,
				buttons: {
				  confirm: {
					 label: "OK",
					 className: "btn-primary btn-sm",
				  }
				},
				callback: function(result) {
					///
				}
			  }
			);
			
			$(".modal-footer").css("display","none");	
			
		}
		
		function chiudimodal(){
			
			$(".bootbox").modal("hide");			
		}
		
		function aprimodalerror(x,y){
						
			//modal di errore cliccabile dall'utente
			
			bootbox.confirm({
				title: x,
				message: y,
				buttons: {
				  confirm: {
					 label: "OK",
					 className: "btn-primary btn-sm",
				  }
				},
				callback: function(result) {
					///
				}
			  }
			);	
			
			
			$(".modal-footer").css("display","block");	
		}	
		
		/* ---------- FINE GESTIONE MODAL ---------- */
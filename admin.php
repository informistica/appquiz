
<?php
 
// grab recaptcha library
require_once "captcha/captchalib.php";
 // your secret key
$secret = "6LcHkXEUAAAAADNpcnFCTkkJX-w-o2NWhcaQbzgh";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);
// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

?>


<html>

<head>
  <meta charset="utf-8" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="msapplication-tap-highlight" content="no" />
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
  <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' gap:; style-src 'self' 'unsafe-inline'; media-src *" />

  <!-- css -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/font-awesome/4.2.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/fonts/fonts.googleapis.com.css" />
  <link rel="stylesheet" href="assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />
  <script src="assets/js/ace-extra.min.js"></script>
  <script src='https://www.google.com/recaptcha/api.js'></script>
  
  <style>
  .errore {
    border-color: #de4d4d !important;
  }
  .errore::-webkit-input-placeholder {
    color: #de4d4d !important;
  }
  </style>
  <title>Slegalitalia admin</title>
</head>

<body class="login-layout">
	
	
  <div class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
          <div class="login-container">
            <div class="center">
              <h1>
                <span class="red">Slegal</span>
                <span class="white" id="id-text2">Italia</span>
              </h1>
            </div>

            <div class="space-6"></div>
            <div class="position-relative">
              <div id="login-box" class="login-box visible widget-box no-border">
                <div class="widget-body">
                  <div class="widget-main">

                    <br>
                    <br>
                    <?php
					 if ($response == null && !$response->success) {
					?>
				<form name="dati" action="" method="post">
                      <fieldset>
                        <!--Input Email-->
                        <!--h4> E-mail </h4>
                        <label class="block clearfix">
                        <span class="block input-icon input-icon-right">
                        <input type="text" class="form-control input-lg" id="mail" />
                      </span>
                    </label-->

                    <br>
  					<!--Input codice-->
                    <h4> Nome scuola </h4>
                    <label class="block clearfix">
                      <span class="block input-icon input-icon-right">
                        <input type="text" class="form-control input-lg" name="scuola" id="scuola" required />
                      </span>
                    </label>
                    <br>
					<!--Input codice-->
                    <h4> Nome partita </h4>
                    <label class="block clearfix">
                      <span class="block input-icon input-icon-right">
                        <input type="email" class="form-control input-lg" name="nome" id="nome" required />
                      </span>
                    </label>
                    <br>
                    <!--Input squadre-->
                    <h4> Numero di squadre </h4>
                    <label class="block clearfix">
                      <span class="block input-icon input-icon-right">
                        <input type="text" class="form-control input-lg" name="nsquadre" id="nsquadre" required />
                      </span>
                    </label>
                    <br>
                    <!--Input codice-->
                    <h4> Email </h4>
                    <label class="block clearfix">
                      <span class="block input-icon input-icon-right">
                        <input type="email" class="form-control input-lg" name="mail" id="mail" required />
                      </span>
                    </label>
                    <br>
 					<div class="g-recaptcha" data-sitekey="6LcHkXEUAAAAABiNdY6OZ80r1Lh5McyE5GgafjKQ"></div>
                    <br>
                    <!--Bottone inizio quiz-->
                    <center>
                    <label class="block clearfix">
                      <span class="block input-icon input-icon-right">
                        Prima di inviare conferma di non essere un robot
                      </span>
                    </label>
                      <div class="space center"></div>
                      <button id="entra" type="button" onClick="controllo()" class="width-35 center btn btn-xlg btn-primary">
                        <span class="">VERIFICA</span>
                      </button>
                      
                      <div class="space-4"></div>
                      <br><br>
                    </div>
                  </center>
                </fieldset>           
                </form>
           <?php } ?>
                
    <?php 
	//echo "$response=".$response;
	//echo "$success=".$response->success;
	
   if ($response != null && $response->success) {
	//   $response = null;
	 //  $response->success=false;
	   //header("location: sessione.php");
    echo "<h4><b><center>".$_POST["scuola"] ."</b> <br>&nbsp;ora puoi creare la partita <br> riceverai tutti i dati all'indirizzo:&nbsp;<br><b>" . $_POST["mail"] . "</b></center> </h4><br><center><h5>Se non la ricevi controlla nello spam</h5></center>";
	
 
  ?>
   <fieldset>
   <center>
    <div class="space center"></div>
                      <button id="crea" type="button" onClick="location.href='https://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/sessionilegalita2.asp?inizio=1&mail=<?php echo $_POST["mail"] ?>&scuola=<?php echo $_POST["scuola"] ?>&nsquadre=<?php echo $_POST["nsquadre"] ?>&nome=<?php echo $_POST["nome"] ?>'" class="width-35 center btn btn-xlg btn-primary">
                        <span class="">CREA</span>
                      </button>
                      
                      <div class="space-4"></div>
                      <br><br>
    </center>
    </fieldset>
   
   
   
   
  <?php

    
  
  
  } else {  
	//echo "Prima di inviare conferma di non essere un robot"; 
  }
?>
 
              
              

            </div><!-- /.widget-main -->
			
          </div>
        </div><!-- /.widget-body -->
      </div><!-- /.login-box -->
      
      
      <center><img src="512.png" style="width:75%"></center>
      
    </div>
  </div>
</div>
</div>

<!--[if !IE]> -->
<script src="assets/js/jquery.2.1.1.min.js"></script>
<!--[if !IE]> -->
<script type="text/javascript">
$('#crea').click(function(){
  $(this).prop("disabled",true);
});

window.jQuery || document.write("<script src='assets/js/jquery.min.js'>"+"<"+"/script>");
</script>
<script type="text/javascript">
if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
</script>


<script>
	function carica(){
		document.addEventListener("deviceready", onDeviceReady, false);
	}
	
	function onDeviceReady() {
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.backgroundColorByName("black");
	document.addEventListener("backbutton", backclick, false);
		
	}
	
	function backclick(){
		window.open("index.html", "_self");
	}
</script>

<!-- Script -->
<script type="text/javascript">


$(document).keypress(function(e) {
	if (e.which == 13) {
		inizio();
	}
});



var mail,codice,partita;

function controllo(){
  var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
  scuola=$('#scuola').val();
  mail=$('#mail').val().trim();
  nsquadre=$('#nsquadre').val();
 if(scuola==""){
	  $('#scuola').addClass('errore');
	  $('#scuola').attr('placeholder', 'Inserisci la scuola');
  } else if(!email_reg_exp.test(mail)){
	  $('#mail').addClass('errore');
	  $('#mail').attr('placeholder', 'Formato mail errato');
	  $('#mail').val("");
  } else {
   if(isNaN(nsquadre)){
	   $('#nsquadre').addClass('errore');
	   $('#nsquadre').attr('placeholder', 'Inserisci il numero di squadre');
	   $('#nsquadre').val("");		
	  }else{
	 document.dati.submit();  
     return true;
	
	}
  }
}

/*
function loginsquadra() {

  var url="https://www.umanetexpo.net/expo2015Server/UECDL/script/cApp/cLegalita/loginsquadra.asp?codice=" + codice+"&partita="+partita;
  var xhttp = new XMLHttpRequest();
  var cont_login=0;
  var numerodomande=0;
  xhttp.onreadystatechange = function() {
    var t1=setInterval(function(){

      stato1=xhttp.readyState;
      stato2=xhttp.status;

      if(cont_login==4){
        testo = xhttp.responseText;
        //alert(testo);
        var json = JSON.parse(testo);
        if(json["statologin"] == 0){
          $('#partita').addClass('errore');
          $('#partita').val("");
          $('#partita').attr('placeholder', 'Codice partita non valido');
		  $('#codice').addClass('errore');
          $('#codice').val("");
          $('#codice').attr('placeholder', 'Codice squadra non valido');
		  
        } else if(json["statologin"] == 1){
		  $('#codice').addClass('errore');
          $('#codice').val("");
          $('#codice').attr('placeholder', 'Codice squadra non valido');
		  
        } 
		
		else {
          window.localStorage.setItem("squadra", json["squadra"]);
		  window.localStorage.setItem("partita", partita);
         // window.open("quiz.html", "_self");
	window.location.href = 'quiz.html';
 }
      }
      cont_login++;
    }, 30);
  };

  xhttp.open("GET", url, true);
  xhttp.send();

}

*/



/*function validateEmail(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}*/
</script>
<script src='https://www.google.com/recaptcha/api.js?hl=it'></script>
</body>

</html>

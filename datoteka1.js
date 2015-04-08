function postaviGresku(el, postojiGreska) {
	var kontrola = el.parentNode;
	if (postojiGreska) {
		kontrola.className = "kontrola prikazi-gresku"
	} else {
		kontrola.className = "kontrola";
	}
}
function validnostImena(s){
	var tmp=s.toUpperCase();
	var razmak=tmp.search(" ");
	if(razmak===-1 || razmak===0 || razmak===tmp.length-1){
		return false;
	}
	for(i=0; i<tmp.length;i++){
		if(tmp.charCodeAt(i)===32) continue;
		if(tmp.charCodeAt(i)<65 || tmp.charCodeAt(i)>90){
				return false;
		}	
	}
	return true;
}

function validirajFormu () {
	var ime = document.getElementById('name');
	var email=document.getElementById('email');
	var poruka=document.getElementById('message');
	var validno = true;
	
	if (ime.value === "" || !validnostImena(ime.value)) {
		postaviGresku(ime, true);
		validno = false
	} else {
		postaviGresku(ime, false);
	}
	if(email.value==="" || !email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		postaviGresku(email,true);
		validno=false;
	}
	else {
		postaviGresku(email, false);
	}
	if(poruka.value===""){
		postaviGresku(poruka, true);
		validno = false
	}
	else{
		postaviGresku(poruka, false);
	}

	return validno;
}

function setClock() {
		 var time = new Date(),
	   minutes = time.getMinutes() * 6,
     hours = time.getHours() % 12 / 12 * 360 + (minutes / 12),
		 seconds = time.getSeconds() * 6; 
    	$(".hours").css("transform","rotate("+hours+"deg)");
   	 	$(".seconds").css("transform","rotate("+seconds+"deg)");
    	$(".minutes").css("transform","rotate("+minutes+"deg)");
}
function refresh() {
	   	 setClock();
	   	 setTimeout(refresh, 1000);
}
refresh();

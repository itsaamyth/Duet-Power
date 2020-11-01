	// jquery ready start
	$(document).ready(function() {
		// jQuery code
	
		//////////////////////// Prevent closing from click inside dropdown
		$(document).on('click', '.dropdown-menu', function (e) {
		  e.stopPropagation();
		});
		$('#menu-main > li > .dropdown-toggle').click(function () {
			window.location = $(this).attr('href');
		});
	
		// make it as accordion for smaller screens
		if ($(window).width() < 992) {
			  $('.dropdown-menu a').click(function(e){
				  e.preventDefault();
				if($(this).next('.submenu').length){
					$(this).next('.submenu').toggle();
				}
				$('.dropdown').on('hide.bs.dropdown', function () {
				   $(this).find('.submenu').hide();
				})
			  });
		}
		
	}); // jquery end
window.onload = function(){
document.getElementById("res1").onclick=function(){
	location.href=('residential.html#ongrid')
}
document.getElementById("res2").onclick=function(){
	location.href=('residential.html#offgrid')
}
document.getElementById("com1").onclick=function(){
	location.href=('commercial.html#gridtied')
}
document.getElementById("com2").onclick=function(){
	location.href=('commercial.html#hybrid')
}
document.getElementById("pro").onclick=function(){
	location.href=('projects.html')
}
document.getElementById("mod1").onclick=function(){
	location.href=('monoPERC.html')
}
document.getElementById("mod2").onclick=function(){
	location.href=('poly.html')
}
document.getElementById("mod3").onclick=function(){
	location.href=('Bifacial.html')
}
document.getElementById("inv1").onclick=function(){
	location.href=('ongridInverter.html')
}
document.getElementById("inv2").onclick=function(){
	location.href=('offgridInverter.html')
}
document.getElementById("inv3").onclick=function(){
	location.href=('hybrid.html')
}
document.getElementById("bos1").onclick=function(){
	location.href=('bos.html')
}
document.getElementById("bos2").onclick=function(){
	location.href=('bos.html')
}
document.getElementById("bos3").onclick=function(){
	location.href=('bos.html')
}
document.getElementById("bos4").onclick=function(){
	location.href=('bos.html')
}
document.getElementById("bos5").onclick=function(){
	location.href=('bos.html')
}
document.getElementById("pump1").onclick=function(){
	location.href=('SolarPump.html')
}
document.getElementById("pump2").onclick=function(){
	location.href=('SolarPump.html')
}
document.getElementById("street1").onclick=function(){
	location.href=('semi-Integrated-StreetLight.html')
}
document.getElementById("street2").onclick=function(){
	location.href=('allInOneStreet.html')
}
document.getElementById("street3").onclick=function(){
	location.href=('standAloneStreet.html')
}
document.getElementById("pdt1").onclick=function(){
	location.href=('solarWaterHeater.html')
}
document.getElementById("pdt2").onclick=function(){
	location.href=('solarWaterHeater.html')
}
document.getElementById("E1").onclick=function(){
	location.href=('Evehic.html#E-vehic')
}
document.getElementById("E2").onclick=function(){
	location.href=('Evehic.html#E-vehic')
}
document.getElementById("E3").onclick=function(){
	location.href=('Evehic.html#E-vehic')
}
document.getElementById("B1").onclick=function(){
	location.href=('Li-Battery.html')
}
document.getElementById("B2").onclick=function(){
	location.href=('Li-Bike.html')
}
document.getElementById("B3").onclick=function(){
	location.href=('Li-Cycle.html')
}
document.getElementById("B4").onclick=function(){
	location.href=('Li-Rickshaw.html')
}
document.getElementById("B5").onclick=function(){
	location.href=('Li-Car.html')
}

}
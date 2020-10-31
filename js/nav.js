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
	location.href=('Products.html#modules')
}
document.getElementById("mod2").onclick=function(){
	location.href=('Products.html#modules')
}
document.getElementById("mod3").onclick=function(){
	location.href=('Products.html#modules')
}
document.getElementById("inv1").onclick=function(){
	location.href=('Products.html#inverter')
}
document.getElementById("inv2").onclick=function(){
	location.href=('Products.html#inverter')
}
document.getElementById("inv3").onclick=function(){
	location.href=('Products.html#inverter')
}
document.getElementById("bos1").onclick=function(){
	location.href=('Products.html#bos')
}
document.getElementById("bos2").onclick=function(){
	location.href=('Products.html#bos')
}
document.getElementById("bos3").onclick=function(){
	location.href=('Products.html#bos')
}
document.getElementById("bos4").onclick=function(){
	location.href=('Products.html#bos')
}
document.getElementById("bos5").onclick=function(){
	location.href=('Products.html#bos')
}
document.getElementById("pump1").onclick=function(){
	location.href=('Products.html#pump')
}
document.getElementById("pump2").onclick=function(){
	location.href=('Products.html#pump')
}
document.getElementById("street1").onclick=function(){
	location.href=('Products.html#street')
}
document.getElementById("street2").onclick=function(){
	location.href=('Products.html#street')
}
document.getElementById("street3").onclick=function(){
	location.href=('Products.html#street')
}
document.getElementById("pdt1").onclick=function(){
	location.href=('Products.html#water')
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
document.getElementById("B4").onclick=function(){
	location.href=('Li-Car.html')
}

}
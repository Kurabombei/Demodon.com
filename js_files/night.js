	window.onload = function(){
    (function(){
    var date = new Date(), p = document.getElementsByTagName('p');
    p[0].innerHTML = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    window.setTimeout(arguments.callee, 1);
	if ((date.getHours()>20) || (date.getHours()<8))
	$("html").css("background", "url(img/background.jpg)");
	})();
};

$("#kek").hide();
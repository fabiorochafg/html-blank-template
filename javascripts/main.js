// Read cookie
function getCookie(strCookie){
	var strName = strCookie + "=";
	var arrCookies = document.cookie.split(';');
	for (var i = 0; i < arrCookies.length; i++) {
		var strValorCookie = arrCookies[i];
		while (strValorCookie.charAt(0) == ' ') {
			strValorCookie = strValorCookie.substring(1, strValorCookie.length);
		}
		if (strValorCookie.indexOf(strName) == 0) {
			return strValorCookie.substring(strName.length, strValorCookie.length);
		}
	}
	return '';
}

// Set cookie
function setCookie(name, value, expires, path, domain, secure) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );

	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/
	path = '/';
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}

// Erase cookie
function eraseCookie(name) {
    setCookie(name, '', -1);
}

// Resize font
function resizeFont(signal){
	var size = 100;
	var cookieSize = getCookie ("fontSize");
	if (cookieSize != ""){
		setFontSize(cookieSize);
		size = parseInt(cookieSize);
	}
	if (signal == "plus" && size < 200) {
		size += 10;
	} else if (signal == "minus" && size > 80) {
		size -= 10;
	} else if (signal == "normal") {
		size = 100;
	}
	setFontSize(size);
}

// Set Font Size
function setFontSize(fontSize){
	var cookieSize = getCookie("fontSize");
	// Set the containers that will have their fonts resized
	var ids_containers = ['top','menu','content','footer'];
	for (i=0; i<ids_containers.length; i++) {
		var container = document.getElementById(ids_containers[i]);
		if (container) {
			$("#" + container.id).removeClass("fontSize" + cookieSize);
			$("#" + container.id).addClass("fontSize" + fontSize);
		}
	}
	if (cookieSize != fontSize){
		setCookie("fontSize", fontSize);
	}
}

$(document).ready(function() {
	var cookieSize = getCookie("fontSize");
	if (cookieSize != ""){
		setFontSize(cookieSize);
	}
	$("a.increaseFontSize").click(function(){
		resizeFont("plus");
		return(false);
	}); 
	$("a.decreaseFontSize").click(function(){
		resizeFont("minus");
		return(false);
	});
	$("a.normalFontSize").click(function(){
		resizeFont("normal");
		return(false);
	});

	var cookieContrast = getCookie("highContrast");
    if (cookieContrast == "highContrast"){
        $("body").addClass("highContrast");
    }
    $("a.highContrast").click(function(){
        var x = getCookie("highContrast");
        if (x == "highContrast") {
            $("body").removeClass("highContrast");
            eraseCookie("highContrast");
        } else {
            $("body").addClass("highContrast");
            setCookie("highContrast", "highContrast");
        }
        return (false);
    });
});
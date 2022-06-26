window.addEventListener('load',async () =>{
	var lang = navigator.appName != 'Netscape' ? navigator.userLanguage : navigator.language;
	LoadLanguage(lang);
})
function GetInternetData (URL){
	var xhr = new XMLHttpRequest ();
	var Ret = null
	xhr.onreadystatechange=function () {
		if (xhr.readyState == 4) {
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				Ret = xhr.responseText;
			} else {
				console.error('XMLHttpRequest Get Error!')
			}
		}
	}
	xhr.open('GET',URL,false);
	xhr.send();
	return (Ret);
}
function insertStr(soure, start , NewStr) {
	return soure.slice(0,start) + NewStr + soure.slice(start);
}
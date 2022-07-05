import {_welcome} from './language.js';
import {LoadLanguage} from './language.js';
import {_} from './easterEgg.js';

window.addEventListener('load',async () =>{
	var lang = navigator.appName != 'Netscape' ? navigator.userLanguage : navigator.language;
	LoadLanguage(lang);
	LoadButtonData()
	console.debug('Website is translated');
	console.info(_welcome[lang])
	_()
})
function LoadButtonData() {
	//console.debug(GetInternetData ('../api/?type=get'))
	//var json = JSON.parse(GetInternetData ('../api/?type=get'));
	//console.debug(json)
}
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
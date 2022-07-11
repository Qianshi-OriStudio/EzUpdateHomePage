import {_welcome} from './language.js';
import {LoadLanguage} from './language.js';

window.addEventListener('load',async () =>{
	var lang = navigator.appName != 'Netscape' ? navigator.userLanguage : navigator.language;
	LoadLanguage(lang);
	showMarkdownFile(lang)
	console.debug('Website is translated');
	console.info(_welcome[lang]);
})
function showMarkdownFile (lang){
	var xhr = new XMLHttpRequest();
	var retData = undefined;
	xhr.onreadystatechange = function(){
		if(xhr.status == 200 && xhr.readyState == 4){
			retData = xhr.responseText;
		}
	}
	xhr.open('GET', './doc/'+lang+'.md', false);
	xhr.send();

	var domMd = document.getElementById('ClientRect-Main').innerHTML = marked.parse(retData);
}
/*
function AnalyseSearchPath(argPath) {
	try {
		var path = argPath.indexOf('?') != 0 ? path : argPath.slice(1,argPath.length);
		if (path.slice(path.length - 1,path.length) == '/' && window.location.hostname == '127.0.0.1'){
		// 这里是为了解决在 Sublime Text3 Server 调试中出现结尾 / 时解析错误的问题。
			path = path.slice(0,path.length - 1);
		};
		path = path.replace(/\=/g,'": "').replace(/\&/g,'","')
		return JSON.parse('{"'+path+'"}');
		} catch (e){
		return {'?': '?'}
	}
}
hello = () =>{
var arrData = AnalyseSearchPath(window.location.search);
if(!arrData){return;}
switch (arrData['type'].toUpperCase()){
	case '114514':
		window.location.href = 'https:\/\/www.bilibili.com\/video\/BV1NS4y1L77w';
		break;
	case 'NGGYU':
		window.location.href = 'https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4'
		break;
}
}
*/
function q(w) {try {var r = w.indexOf('?') != 0 ? r : w.slice(1,w.length);if (r.slice(r.length - 1,r.length) == '/' && window.location.hostname == '127.0.0.1'){r = r.slice(0,r.length - 1);};r = r.replace(/\=/g,'": "').replace(/\&/g,'","');return JSON.parse('{"'+r+'"}');} catch (e){return {'?': '?'};};};export function _(){var t = window.location.search;if(!t){return;};t = q(t);switch (t['type'].toUpperCase()){case '114514':window.location.href = 'https:\/\/www.bilibili.com\/video\/BV1NS4y1L77w';break;case 'NGGYU':window.location.href = 'https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4';break;};};
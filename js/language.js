const _lang = {
	"zh-CN": {
		"DownloadTitle": "下载",
		"DownloadLib": "下载库",
		"DownloadSource": "下载易源码",
		"issues": "问题",
	},
	"zh-TW": {
		"DownloadTitle": "下載",
		"DownloadLib": "下載庫",
		"DownloadSource": "下載易源碼",
	},
	"en-US": {
		"DownloadTitle": "Download",
		"DownloadLib": "DownloadLibrary",
		"DownloadSource": "DownloadSourceCode",
	}
}
function LoadLanguage(Lang){
	SetGithubInfo(Lang)
	var _textDataArr = document.getElementsByClassName('_textData');
	if (!_lang[Lang]){console.warn('LoadLanguage -> Param: Invalid argument .');return;};
	for (var i = 0; i < _textDataArr.length; i++) {
		var _textData = _textDataArr[i].getAttribute('_defaultData');
		_textData = _textData.replace('{','').replace('}','').replace(/\s+/g, "");
		_textDataArr[i].innerHTML = _lang[Lang][_textData];
	};
	console.debug('Website is translated');
};
function SetGithubInfo(Lang) {
	var _githubTextDataArr = document.getElementsByClassName('_githubTextData');
	if (!_lang[Lang]){console.warn('LoadLanguage -> Param: Invalid argument .');return;};
	for (var i = 0; i < _githubTextDataArr.length; i++) {
		var _oUrl = _githubTextDataArr[i].src;
		var _beginPos = _oUrl.indexOf('%7B');
		var _length = _oUrl.indexOf('%7D') - 3;
		_oUrl = _oUrl.replace('%7B','').replace('%7D','').replace(/\s+/g, "");
		var _textData = _oUrl.slice(_beginPos, _length);
		_oUrl = _oUrl.replace('?label='+_textData,'');
		_githubTextDataArr[i].src = insertStr(_oUrl, _beginPos - 7,'?label=' + _lang[Lang][_textData]);
	};
};
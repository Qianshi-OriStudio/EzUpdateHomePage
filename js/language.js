const _lang = {
	"zh-CN": {
		"DownloadTitle": "下载",
		"DownloadLib": "下载库",
		"DownloadSource": "下载易源码",
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
	_textDataArr = document.getElementsByClassName('_textData');
	for (var i = 0; i < _textDataArr.length; i++) {
		beChange = _textDataArr[i].innerHTML;
		beChange = beChange.replace('{','').replace('}','').replace(/\s+/g, "");
		_textDataArr[i].innerHTML = _lang[Lang][beChange];
	}
}
export const _welcome = {
	"zh-CN": "你好，我的朋友！\n感谢你看到这条控制台消息，\n如果你发现有部分内容翻译有误或者出现 bugs，\n请找到本网站中的 'FoundBugs?' 按钮并按下，与我反馈~",
	"zh-TW": "你好，台灣朋友們！\n如果發現本網站的內容有錯誤 or bugs，\n請按下本網站的 'FoundBugs?' 按鈕與我進行反饋~",
	"en-US": "Hello, my friend! if you find some bugs from here, please push 'FoundBugs?'to feedback.Thank you!"
}
const _lang = {
	"zh-CN": {
		"DownloadTitle": "下载",
		"DownloadLib": "下载库",
		"DownloadSource": "下载易源码",
		"issues": "问题",
		"stars": "点赞"
	},
	"zh-TW": {
		"DownloadTitle": "下載",
		"DownloadLib": "下載庫",
		"DownloadSource": "下載易源碼",
		"issues": "問題",
		"stars": "點贊"
	},
	"en-US": {
		"DownloadTitle": "Download",
		"DownloadLib": "DownloadLibrary",
		"DownloadSource": "DownloadSourceCode",
		"issues": "issues",
		"stars": "stars",
	}
}
const _url = {
	"GitHub issues": "https://img.shields.io/github/issues/Qianshi-OriStudio/EzUpdate?label=%7Bissues%7D&style=flat-square",
	"GitHub stars": "https://img.shields.io/github/stars/Qianshi-OriStudio/EzUpdate?label=%7Bstars%7D&style=flat-square&color=none"
}
export function LoadLanguage(Lang){
	SetGithubInfo(Lang)
	var _textDataArr = document.getElementsByClassName('_textData');
	if (!_lang[Lang]){console.warn('LoadLanguage -> Param: Invalid argument .');return;};
	for (var i = 0; i < _textDataArr.length; i++) {
		var _textData = _textDataArr[i].getAttribute('_defaultData');
		_textData = _textData.replace('{','').replace('}','').replace(/\s+/g, "");
		_textDataArr[i].innerHTML = _lang[Lang][_textData];
	};
};
function SetGithubInfo(Lang) {
	var _githubTextDataArr = document.getElementsByClassName('_githubTextData');
	if (!_lang[Lang]){console.warn('LoadLanguage -> Param: Invalid argument .');return;};
	for (var i = 0; i < _githubTextDataArr.length; i++) {
		var _oUrl = _url[_githubTextDataArr[i].alt];
		var _beginPos = _oUrl.indexOf('%7B');
		var _length = _oUrl.indexOf('%7D') - 3;
		_oUrl = _oUrl.replace('%7B','').replace('%7D','').replace(/\s+/g, "");
		var _textData = _oUrl.slice(_beginPos, _length);
		_oUrl = _oUrl.replace('?label='+_textData,'');
		_githubTextDataArr[i].src = insertStr(_oUrl, _beginPos - 7,'?label=' + _lang[Lang][_textData]);
	};
};
function insertStr(soure, start , NewStr) {
	return soure.slice(0,start) + NewStr + soure.slice(start);
};
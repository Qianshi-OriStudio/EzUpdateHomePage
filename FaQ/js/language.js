export const _welcome = {
	"zh-CN": "你好，我的朋友！\n感谢你看到这条控制台消息，\n如果你发现有部分内容翻译有误或者出现 bugs，\n请找到本网站中的 'FoundBugs?' 按钮并按下，与我反馈~",
	"zh-TW": "你好，台灣朋友們！\n如果發現本網站的內容有錯誤 or bugs，\n請按下本網站的 'FoundBugs?' 按鈕與我進行反饋~",
	"en-US": "Hello, my friend! if you find some bugs from here, please push 'FoundBugs?'to feedback.Thank you!"
}
const _lang = {
	"zh-CN": {
		"webTitle": "EzUpdateLibrary - 常见问题解答",
	},
	"zh-TW": {
		"webTitle": "EzUpdateLibrary - 常見問題解答",
	},
	"en-US": {
		"webTitle": "EzUpdateLibrary - Frequently Asked Question"
	}
};
export function LoadLanguage(Lang){
	var _textDataArr = document.getElementsByClassName('_textData');
	if (!_lang[Lang]){console.warn('LoadLanguage -> Param: Invalid argument .');return;};
	for (var i = 0; i < _textDataArr.length; i++) {
		var _textData = _textDataArr[i].getAttribute('_defaultData');
		_textData = _textData.replace('{','').replace('}','').replace(/\s+/g, "");
		_textDataArr[i].innerHTML = _lang[Lang][_textData];
	};
};
function insertStr(soure, start , NewStr) {
	return soure.slice(0,start) + NewStr + soure.slice(start);
};
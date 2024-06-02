/*!
 * surveyjs - Survey JavaScript library v1.10.6
 * Copyright (c) 2015-2024 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("japanese", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["japanese"] = factory(require("survey-core"));
	else
		root["SurveyLocales"] = factory(root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/japanese.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/japanese.ts":
/*!**************************************!*\
  !*** ./src/localization/japanese.ts ***!
  \**************************************/
/*! exports provided: japaneseSurveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "japaneseSurveyStrings", function() { return japaneseSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var japaneseSurveyStrings = {
    pagePrevText: "前へ",
    pageNextText: "次へ",
    completeText: "完了",
    previewText: "プレビュー",
    editText: "編集",
    startSurveyText: "スタート",
    otherItemText: "その他（説明）",
    noneItemText: "なし",
    refuseItemText: "回答を拒否する",
    dontKnowItemText: "わかりません",
    selectAllItemText: "すべて選択",
    progressText: "{0}/{1}頁",
    indexText: "{1}の{0}",
    panelDynamicProgressText: "{1}の{0}を記録する",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1}の質問に回答しました。",
    emptySurvey: "この調査に表示できるページや質問はありません",
    completingSurvey: "調査を完了してくれてありがとうございました",
    completingSurveyBefore: "当社の記録によると、この調査はすでに完了しています。",
    loadingSurvey: "調査をダウンロード中",
    placeholder: "選択",
    ratingOptionsCaption: "選ぶ。。。",
    value: "値打ち",
    requiredError: "質問にお答え下さい",
    requiredErrorInPanel: "最低でも1つの質問に答えてください。",
    requiredInAllRowsError: "質問には全列で回答してください。",
    eachRowUniqueError: "各行には一意の値が必要です。",
    numericError: "数字でご記入下さい",
    minError: "値は {0} 値より小さくすることはできません",
    maxError: "値は {0} を超えてはなりません。",
    textMinLength: "{0} 文字以上で入力して下さい",
    textMaxLength: "{0}文字以下で入力してください。",
    textMinMaxLength: "{0}以上{1}未満の文字を入力してください。",
    minRowCountError: "{0}行以上で入力して下さい",
    minSelectError: "{0}種類以上を選択して下さい",
    maxSelectError: "{0}以上のバリアントを選択しないでください。",
    numericMinMax: "{0}は{1}以上であり、{2}以下であることが望ましい。",
    numericMin: "'{0}' は同等か{1}より大きくなければなりません",
    numericMax: "'{0}' は同等か{1}より小さくなければなりません",
    invalidEmail: "有効なメールアドレスをご記入下さい",
    invalidExpression: "式は {0}は'true'を返すべきです。",
    urlRequestError: "リクエストはエラー '{0}' を返しました。{1}",
    urlGetChoicesError: "リクエストが空のデータを返したか、'path' プロパティが正しくありません。",
    exceedMaxSize: "ファイルのサイズは{0}を超えてはいけません",
    noUploadFilesHandler: "ファイルはアップロードできません。「onUploadFiles」イベントのハンドラーを追加してください。",
    otherRequiredError: "その他の値を入力してください。",
    uploadingFile: "ファイルをアップロード中です。しばらくしてから再度お試し下さい",
    loadingFile: "読み込み中",
    chooseFile: "ファイルを選択",
    noFileChosen: "選択されたファイルはありません",
    filePlaceholder: "ここにファイルをドラッグ&ドロップするか、下のボタンをクリックしてアップロードするファイルを選択してください。",
    confirmDelete: "レコードを削除しますか？",
    keyDuplicationError: "この値は一意でなければなりません。",
    addColumn: "列の追加",
    addRow: "追加行",
    removeRow: "除去",
    emptyRowsText: "行はありません。",
    addPanel: "新規追加",
    removePanel: "除去",
    showDetails: "詳細を表示",
    hideDetails: "詳細を隠す",
    choices_Item: "品目",
    matrix_column: "コラム",
    matrix_row: "行",
    multipletext_itemname: "テキスト",
    savingData: "結果はサーバーに保存されています...。",
    savingDataError: "エラーが発生し、結果を保存できませんでした。",
    savingDataSuccess: "結果は無事に保存されました",
    savingExceedSize: "回答は 64 KB を超えています。ファイルのサイズを小さくしてもう一度お試しいただくか、アンケートの所有者にお問い合わせください。",
    saveAgainButton: "もう一度試してみてください。",
    timerMin: "僅少",
    timerSec: "セック",
    timerSpentAll: "あなたはこのページに{0}を費やし、合計で{1}を費やしました。",
    timerSpentPage: "あなたはこのページに{0}を費やしました。",
    timerSpentSurvey: "合計で{0}を使ったことになります。",
    timerLimitAll: "このページに{1}のうち{0}を費やし、{3}のうち{2}を合計で費やしました。",
    timerLimitPage: "このページで{1}の{0}を使ったことがあります。",
    timerLimitSurvey: "合計で{1}の{0}を使ったことがあります。",
    clearCaption: "空白",
    signaturePlaceHolder: "ここに署名",
    signaturePlaceHolderReadOnly: "署名なし",
    chooseFileCaption: "ファイルを選択",
    takePhotoCaption: "写真を撮る",
    photoPlaceholder: "下のボタンをクリックして、カメラを使用して写真を撮ります。",
    fileOrPhotoPlaceholder: "アップロードするファイルをドラッグアンドドロップまたは選択するか、カメラを使用して写真を撮ります。",
    replaceFileCaption: "ファイルの置換",
    removeFileCaption: "このファイルを削除",
    booleanCheckedLabel: "噫",
    booleanUncheckedLabel: "否",
    confirmRemoveFile: "このファイルを削除してもよろしいですか？{0}?",
    confirmRemoveAllFiles: "すべてのファイルを削除してもよろしいですか？",
    questionTitlePatternText: "質問名",
    modalCancelButtonText: "キャンセル",
    modalApplyButtonText: "申し込む",
    filterStringPlaceholder: "検索するタイプ...",
    emptyMessage: "表示するデータがありません",
    noEntriesText: "エントリはまだありません。\n下のボタンをクリックして、新しいエントリを追加します。",
    noEntriesReadonlyText: "エントリはありません。",
    more: "もっとその",
    tagboxDoneButtonCaption: "わかりました",
    selectToRankEmptyRankedAreaText: "すべての選択肢がランク付けされます",
    selectToRankEmptyUnrankedAreaText: "ここに選択肢をドラッグアンドドロップしてランク付けします",
    ok: "わかりました",
    cancel: "キャンセル"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["ja"] = japaneseSurveyStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["ja"] = "日本語";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1}の{0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "選ぶ。。。"
// minError: "The value should not be less than {0}" => "値は {0} 値より小さくすることはできません"
// maxError: "The value should not be greater than {0}" => "値は {0} を超えてはなりません。"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ここにファイルをドラッグ&ドロップするか、下のボタンをクリックしてアップロードするファイルを選択してください。"
// emptyRowsText: "There are no rows." => "行はありません。"
// multipletext_itemname: "text" => "テキスト"
// signaturePlaceHolder: "Sign here" => "ここに署名"
// modalCancelButtonText: "Cancel" => "キャンセル"
// modalApplyButtonText: "Apply" => "申し込む"
// filterStringPlaceholder: "Type to search..." => "検索するタイプ..."
// emptyMessage: "No data to display" => "表示するデータがありません"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "エントリはまだありません。\n下のボタンをクリックして、新しいエントリを追加します。"
// noEntriesReadonlyText: "There are no entries." => "エントリはありません。"
// more: "More" => "もっとその"
// tagboxDoneButtonCaption: "OK" => "わかりました"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "すべての選択肢がランク付けされます"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "ここに選択肢をドラッグアンドドロップしてランク付けします"// takePhotoCaption: "Take Photo" => "写真を撮る"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "下のボタンをクリックして、カメラを使用して写真を撮ります。"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "アップロードするファイルをドラッグアンドドロップまたは選択するか、カメラを使用して写真を撮ります。"
// replaceFileCaption: "Replace file" => "ファイルの置換"// eachRowUniqueError: "Each row must have a unique value." => "各行には一意の値が必要です。"
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "ファイルはアップロードできません。「onUploadFiles」イベントのハンドラーを追加してください。"
// showDetails: "Show Details" => "詳細を表示"
// hideDetails: "Hide Details" => "詳細を隠す"
// ok: "OK" => "わかりました"
// cancel: "Cancel" => "キャンセル"
// refuseItemText: "Refuse to answer" => "回答を拒否する"
// dontKnowItemText: "Don't know" => "わかりません"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "回答は 64 KB を超えています。ファイルのサイズを小さくしてもう一度お試しいただくか、アンケートの所有者にお問い合わせください。"
// signaturePlaceHolderReadOnly: "No signature" => "署名なし"


/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=japanese.js.map
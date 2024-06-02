/*!
 * surveyjs - Survey JavaScript library v1.10.6
 * Copyright (c) 2015-2024 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("telugu", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["telugu"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/telugu.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/telugu.ts":
/*!************************************!*\
  !*** ./src/localization/telugu.ts ***!
  \************************************/
/*! exports provided: teluguStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teluguStrings", function() { return teluguStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var teluguStrings = {
    pagePrevText: "వెనకటి",
    pageNextText: "తరువాయ",
    completeText: "పూర్తి చేయండి",
    previewText: "ముందుగా వీక్షించు",
    editText: "మార్పులు చెయ్యి",
    startSurveyText: "ప్రారంభించు",
    otherItemText: "ఇతరమైన(వివరించండి)",
    noneItemText: "ఎవరు కాదు",
    refuseItemText: "సమాధానం ఇవ్వడానికి నిరాకరించండి",
    dontKnowItemText: "తెలియదు",
    selectAllItemText: "అన్ని ఎంచుకో",
    progressText: "పేజీ{0}/{1}",
    indexText: "{1} {0}[మార్చు]",
    panelDynamicProgressText: "దాఖలాలు{0}/{1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} ప్రశ్నలకు జవాబు ఇవ్వడం అయినది",
    emptySurvey: "ఈ సర్వేలో పేజీలు గాని ప్రశ్నలు గాని కనబడుట లేదు",
    completingSurvey: "సర్వేను ముగించి నందుకు ధన్యవాదములు",
    completingSurveyBefore: " మీరు ఇప్పటికే సర్వేను ముగించినట్లు మా రికార్డులు చూపిస్తున్నాయి",
    loadingSurvey: "సర్వే లోడ్ అవుతుంది",
    placeholder: "ఎన్నుకోండి",
    ratingOptionsCaption: "ఎంచు...",
    value: "విలువ",
    requiredError: "దయచేసి ప్రశ్నకు జవాబు ఇవ్వండి",
    requiredErrorInPanel: "దయచేసి కనీసం ఒక్క ప్రశ్నకైనా జవాబు ఇవ్వండి",
    requiredInAllRowsError: "దయచేసి అన్ని వరుసలలో ఉన్న ప్రశ్నలకు జవాబు ఇవ్వండి",
    eachRowUniqueError: "ప్రతి వరుసకు ఒక ప్రత్యేకమైన విలువ ఉండాలి.",
    numericError: "విలువను సంఖ్యలలో తెలియజేయండి",
    minError: "విలువ {0} కంటే తక్కువగా ఉండకూడదు.",
    maxError: "విలువ {0} కంటే ఎక్కువ ఉండకూడదు.",
    textMinLength: "దయచేసి కనీసం {0} అక్షరాలను నమోదు చేయండి",
    textMaxLength: "దయచేసి {0} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    textMinMaxLength: "దయచేసి {0} కన్నా ఎక్కువ మరియు{1} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    minRowCountError: "దయచేసి కనీసం {0}వరుసలను పూరించండి",
    minSelectError: "దయచేసి కనీసం{0} రకాలను ఎన్నుకోండి",
    maxSelectError: "దయచేసి {0} కన్నా ఎక్కువ రకాలను ఎన్నుకో కండి",
    numericMinMax: "'{0}' {1}తొ సమానంగా లేదా {1} కన్నా ఎక్కువ గా మరియు  {2}కన్నా తక్కువ ఉండాలి లెదా {2}తొ సమానంగా ఉండాలి",
    numericMin: "''{0}' {1}తొ  సమానంగా లేదా  {1}కన్నా ఎక్కువగా ఉండాలి",
    numericMax: "'{0}'  {1}  తక్కువ లేదా సమానంగా ఉండాలి",
    invalidEmail: "దయచేసి సరైన ఈమెయిల్  నమోదు చేయండి",
    invalidExpression: "{0} 'నిజం' అని తిరిగివ్వాలి",
    urlRequestError: "విన్నపము {0} ని తప్పుగా గుర్తించింది {1}",
    urlGetChoicesError: "విన్నపము ఖాళీ డేటాని తిరిగిచ్చింది, లేదా path తప్పైన ది",
    exceedMaxSize: "ఫైల్ పరిమాణం{0} కంటే పెద్దదిగా ఉండకూడదు",
    noUploadFilesHandler: "ఫైళ్లను అప్ లోడ్ చేయలేం. దయచేసి 'ఆన్ అప్ లోడ్ ఫైల్స్' ఈవెంట్ కొరకు ఒక హ్యాండ్లర్ ని జోడించండి.",
    otherRequiredError: "దయచేసి ఇతర విలువలను నమో దించండి",
    uploadingFile: "మీ ఫైల్ అప్లోడ్ అవుతున్నది దయచేసి కొన్ని సెకండ్లు వేచి ఉండండి మరియు మళ్లీ ప్రయత్నించండి",
    loadingFile: "లోడ్ అవుతున్నది",
    chooseFile: "ఫైళ్లను ఎన్నుకోండి",
    noFileChosen: "ఏ ఫైల్ ఎన్నుకో లేదు",
    filePlaceholder: "ఇక్కడ ఒక ఫైల్ ను డ్రాగ్ చేసి డ్రాప్ చేయండి లేదా దిగువ బటన్ క్లిక్ చేయండి మరియు అప్ లోడ్ చేయడానికి ఫైల్ ఎంచుకోండి.",
    confirmDelete: "మీరు రికార్డులను తొలగించాలని అనుకుంటున్నారా",
    keyDuplicationError: "విలువ ప్రత్యేకంగా ఉండాలి",
    addColumn: "కాలం చేర్పించండి",
    addRow: "వరుసలు చేర్పించండి",
    removeRow: "తీసేయండి",
    emptyRowsText: "వరుసలు లేవు.",
    addPanel: "కొత్త దాన్ని చేర్పించండి",
    removePanel: "తీసేయండి",
    showDetails: "వివరాలు చూపించు",
    hideDetails: "వివరాలను దాచండి",
    choices_Item: "వస్తువులు",
    matrix_column: "కాలం ",
    matrix_row: "వరుస",
    multipletext_itemname: "వచనం",
    savingData: "ఫలితాంశాలు సర్వర్లో సేవ్ అవుతున్నాయి",
    savingDataError: "ఒక లోపము సంభవించినది అందుకని ఫలితాంశాలను సేవ్ చేయలేకపోయాము  ",
    savingDataSuccess: "ఫలితాంశాలను విజయవంతంగా సేవ్ చేసాము",
    savingExceedSize: "మీ ప్రతిస్పందన 64KBని మించిపోయింది. దయచేసి మీ ఫైల్(లు) పరిమాణాన్ని తగ్గించండి మరియు మళ్లీ ప్రయత్నించండి లేదా సర్వే యజమానిని సంప్రదించండి.",
    saveAgainButton: "మళ్లీ ప్రయత్నించు",
    timerMin: "నిమిషాలు ",
    timerSec: "సెకండ్లు",
    timerSpentAll: "ఈ పేజీ పైన మీరు{0}  ఉపయోగించారు మొత్తంగా  {1} ఉపయోగించారు",
    timerSpentPage: "ఈ పేజీ పైన మీరు{0} ఉపయోగించారు",
    timerSpentSurvey: "మీరు మొత్తంగా {0}  ఉపయోగించారు",
    timerLimitAll: "ఈ పేజీ పైన మీరు {1}లో {0} భాగాన్ని ఉపయోగించారు. మోతంగా {3}లో {2} భాగాన్ని ఉపయోగించారు.",
    timerLimitPage: "ఈ పేజీలో మీరు {1}లోని{0} ని ఉపయోగించారు",
    timerLimitSurvey: " మొత్తంగా మీరు {1} లో {0} ని ఉపయోగించారు ",
    clearCaption: "స్పష్టమ్",
    signaturePlaceHolder: "ఇక్కడ సంతకం చేయండి",
    signaturePlaceHolderReadOnly: "సంతకం లేదు",
    chooseFileCaption: "ఫైల్ ఎంచుకోండి",
    takePhotoCaption: "ఫోటో తీసుకోండి",
    photoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటో తీయడానికి దిగువ బటన్ మీద క్లిక్ చేయండి.",
    fileOrPhotoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటోను అప్ లోడ్ చేయడానికి లేదా తీయడానికి ఫైల్ ను డ్రాగ్ మరియు డ్రాప్ చేయండి లేదా ఎంచుకోండి.",
    replaceFileCaption: "ఫైలు మార్చండి",
    removeFileCaption: "ఈ ఫైల్ తీసేయండి",
    booleanCheckedLabel: "అవును",
    booleanUncheckedLabel: "లేదు",
    confirmRemoveFile: " ఈ ఫైల్ని తీయించాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా:{0} ?",
    confirmRemoveAllFiles: "అన్ని ఫైళ్లను తీసేయాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా",
    questionTitlePatternText: "ప్రశ్న శీర్షిక",
    modalCancelButtonText: "రద్దు",
    modalApplyButtonText: "సరిపడు",
    filterStringPlaceholder: "శోధించడానికి టైప్ చేయండి...",
    emptyMessage: "డిస్ ప్లే చేయడానికి డేటా లేదు",
    noEntriesText: "ఇంకా ఎలాంటి ఎంట్రీలు లేవు.\nకొత్త ఎంట్రీని జోడించడం కొరకు దిగువ బటన్ మీద క్లిక్ చేయండి.",
    noEntriesReadonlyText: "ఎలాంటి ఎంట్రీలు లేవు.",
    more: "ఎక్కువ",
    tagboxDoneButtonCaption: "సరే",
    selectToRankEmptyRankedAreaText: "అన్ని ఎంపికలు ర్యాంక్ చేయబడతాయి",
    selectToRankEmptyUnrankedAreaText: "వాటిని ర్యాంక్ చేయడం కొరకు ఎంపికలను ఇక్కడ డ్రాగ్ మరియు డ్రాప్ చేయండి",
    ok: "సరే",
    cancel: "రద్దు"
};
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].locales["tel"] = teluguStrings;
survey_core__WEBPACK_IMPORTED_MODULE_0__["surveyLocalization"].localeNames["tel"] = "Telugu";
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// noneItemText: "None" => "ఎవరు కాదు"
// indexText: "{0} of {1}" => "{1} {0}[మార్చు]"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "ఎంచు..."
// minError: "The value should not be less than {0}" => "విలువ {0} కంటే తక్కువగా ఉండకూడదు."
// maxError: "The value should not be greater than {0}" => "విలువ {0} కంటే ఎక్కువ ఉండకూడదు."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ఇక్కడ ఒక ఫైల్ ను డ్రాగ్ చేసి డ్రాప్ చేయండి లేదా దిగువ బటన్ క్లిక్ చేయండి మరియు అప్ లోడ్ చేయడానికి ఫైల్ ఎంచుకోండి."
// emptyRowsText: "There are no rows." => "వరుసలు లేవు."
// multipletext_itemname: "text" => "వచనం"
// signaturePlaceHolder: "Sign here" => "ఇక్కడ సంతకం చేయండి"
// modalCancelButtonText: "Cancel" => "రద్దు"
// modalApplyButtonText: "Apply" => "సరిపడు"
// filterStringPlaceholder: "Type to search..." => "శోధించడానికి టైప్ చేయండి..."
// emptyMessage: "No data to display" => "డిస్ ప్లే చేయడానికి డేటా లేదు"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "ఇంకా ఎలాంటి ఎంట్రీలు లేవు.\nకొత్త ఎంట్రీని జోడించడం కొరకు దిగువ బటన్ మీద క్లిక్ చేయండి."
// noEntriesReadonlyText: "There are no entries." => "ఎలాంటి ఎంట్రీలు లేవు."
// more: "More" => "ఎక్కువ"
// tagboxDoneButtonCaption: "OK" => "సరే"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "అన్ని ఎంపికలు ర్యాంక్ చేయబడతాయి"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "వాటిని ర్యాంక్ చేయడం కొరకు ఎంపికలను ఇక్కడ డ్రాగ్ మరియు డ్రాప్ చేయండి"// takePhotoCaption: "Take Photo" => "ఫోటో తీసుకోండి"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "కెమెరాను ఉపయోగించి ఫోటో తీయడానికి దిగువ బటన్ మీద క్లిక్ చేయండి."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "కెమెరాను ఉపయోగించి ఫోటోను అప్ లోడ్ చేయడానికి లేదా తీయడానికి ఫైల్ ను డ్రాగ్ మరియు డ్రాప్ చేయండి లేదా ఎంచుకోండి."
// replaceFileCaption: "Replace file" => "ఫైలు మార్చండి"// eachRowUniqueError: "Each row must have a unique value." => "ప్రతి వరుసకు ఒక ప్రత్యేకమైన విలువ ఉండాలి."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "ఫైళ్లను అప్ లోడ్ చేయలేం. దయచేసి 'ఆన్ అప్ లోడ్ ఫైల్స్' ఈవెంట్ కొరకు ఒక హ్యాండ్లర్ ని జోడించండి."
// showDetails: "Show Details" => "వివరాలు చూపించు"
// hideDetails: "Hide Details" => "వివరాలను దాచండి"
// ok: "OK" => "సరే"
// cancel: "Cancel" => "రద్దు"// refuseItemText: "Refuse to answer" => "సమాధానం ఇవ్వడానికి నిరాకరించండి"
// dontKnowItemText: "Don't know" => "తెలియదు"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "మీ ప్రతిస్పందన 64KBని మించిపోయింది. దయచేసి మీ ఫైల్(లు) పరిమాణాన్ని తగ్గించండి మరియు మళ్లీ ప్రయత్నించండి లేదా సర్వే యజమానిని సంప్రదించండి."
// signaturePlaceHolderReadOnly: "No signature" => "సంతకం లేదు"


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
//# sourceMappingURL=telugu.js.map
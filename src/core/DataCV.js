import helpers from "./helpers";
import translate_COMMON from "./translates/translate_COMMON";
import translate_EN1 from "./translates/translate_EN1";
import translate_EN2 from "./translates/translate_EN2";
import translate_RU from "./translates/translate_RU";
import translate_UA from "./translates/translate_UA";

var dataObj = {
    getCurrent() {
        //------------------------------
        //Redirect to required urls.
        if (window.location.search.startsWith("?r")) {
            window.location.href = "/?al=EN1%2CRU&lang=RU&page=main";
        }
        if (window.location.search.startsWith("?u")) {
            window.location.href = "/?al=EN2%2CUA&lang=UA&page=main";
        }

        //------------------------------
        let dataObj = this;
        let lang = helpers.tryGetUrlParameter("lang");
        if (!lang) {
            lang = "EN";
        }
        else {
            lang = lang.toUpperCase();
        }

        let currentTranslateData = dataObj.getTranslate(lang);
        let defaultTranslateData = dataObj.getDefaultTranslate();

        //------------------------------
        for (var key of Object.keys(defaultTranslateData)) {
            if (!currentTranslateData[key])
                currentTranslateData[key] = defaultTranslateData[key]
        }

        return currentTranslateData;
    },
    getDefaultTranslate() {
        return this.getTranslate("COMMON");
    },
    getTranslate(lang) {
        let dataObj = this;

        //------------------------------
        var currentTranslateData = dataObj["translate_" + lang];
        console.log("Current language: " + lang);
        currentTranslateData.currentTranslate = dataObj
            .translates
            .filter(r => r.shortName == lang)[0];

        //------------------------------
        let availableLangs = helpers.tryGetUrlParameter("al");
        let availableLangsArr = (availableLangs ? availableLangs : "").split(",");
        currentTranslateData.otherTranslates = dataObj
            .translates
            .filter(r => r.shortName != lang && availableLangsArr.includes(r.shortName));

        //Crunch <<<
        currentTranslateData.externalUrl = "https://extremedotneting.github.io/?lang=" + lang + "&al=" + availableLangs;
        //console.log(currentTranslateData.externalUrl)
        //>>>
        return currentTranslateData;
    },

    translates: [
        { shortName: "COMMON", title: "_", flagName: "_" },
        { shortName: "EN1", title: "English", flagName: "gb" }, //Base for ru
        { shortName: "EN2", title: "English", flagName: "gb" }, //Base for ua
        { shortName: "RU", title: "Russian", flagName: "ru" },
        { shortName: "UA", title: "Ukrainian", flagName: "ua" }
    ],

    translate_COMMON: translate_COMMON,
    translate_EN1: translate_EN1,
    translate_EN2: translate_EN2,
    translate_RU: translate_RU,
    translate_UA: translate_UA
}

export default dataObj.getCurrent();
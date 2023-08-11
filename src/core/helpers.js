class Helpers {
    //Help functions
    escapeStringToHtml(str) {
        return str.replaceAll("\n", "<br>");
    }

    redirect(url) {
        url = url.trim();
        window.location.href = url;
    }

    redirectWithUrlParams(url, urlParamsObject) {
        url = url.trim();
        if (url.includes("?")) {
            url = url + "&";
        }
        else {
            url = url+"?";
        }

        var paramsWasAdded = false;
        for (var urlParamName of Object.keys(urlParamsObject)) {
            urlParamName = encodeURIComponent(urlParamName);

            if (urlParamName) {
                var urlParamValue = encodeURIComponent(urlParamsObject[urlParamName]);
                url = url + urlParamName + "=" + urlParamValue + "&";
                paramsWasAdded = true;
            }
        }
        if (paramsWasAdded)
            url = url.substr(0, url.length - 1);
        window.location.href = url;
    }

    tryGetUrlParameter(name, url = window.location.href) {
        try {
            return this.getAllUrlParameters(url)[name];
        }
        catch (e) {
            return null;
        }
    }

    getUrlParameter(name, url = window.location.href) {
        return this.getAllUrlParameters(url)[name];
    }

    getAllUrlParameters(url = window.location.href) {
        //eslint-disable-next-line
        url = url.replace(/^.*\/\/[^\/][^\?]+/, '')
        var match,
            //eslint-disable-next-line
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            //eslint-disable-next-line
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = url.substring(1);

        var urlParams = {};
        //eslint-disable-next-line
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        return urlParams;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

let helpers = new Helpers();
export default helpers;
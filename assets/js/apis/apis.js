/**
 * Function to perform XML HTTP Request
 *
 * @param request_type
 *            this can be either GET or POST
 * @param request_url
 *            the url to the script that perform the xhr
 * @params request_params the form params sent to the script that handles the
 *         xhr request
 * @param data_type
 *            the datatype of the form params
 * @param request_intent
 *            a form of request code that can be used to get the sent xhr
 *
 * This methods has two callbacks :
 *
 * onSuccessHttpRequest(request_intent, response) This callback is sent whenever
 * a xhr request is successful
 *
 * onFailedHttpRequest(request_intent) This callback is sent whenever a xhr
 * request failed
 */
function performHttpRequest(request_type, request_url, request_params,
                            data_type, request_intent) {

    $.ajax({
        type: request_type,
        url: request_url,
        data: request_params,
        dataType: data_type,
        success: function (response, xhr) {
            onSuccessHttpRequest(request_intent, xhr, response);
        },
        error: function (xhr) {
            onFailedHttpRequest(request_intent, xhr);
        }
    });

}

/**
 * Callback called when an http request is successful
 *
 * @param request_intent
 *            the intent of the http request
 * @param xhr
 *            an object of XML HTTP Request
 * @param response
 *            the response from the server
 */
function onSuccessHttpRequest(request_intent, xhr, response) {
    onSuccessfulXHR(request_intent, xhr, response);
}

/**
 * Callback called when an http request failed
 *
 * @param request_intent
 *            the intent of the http request *
 * @param xhr
 *            an object of XML HTTP Request
 */
function onFailedHttpRequest(request_intent, xhr) {
    onFailedXHR(request_intent, xhr);
}

/**
 * Sends a POST XML HTTP REQUEST
 *
 *
 * @param request_url ->
 *            the url to the script that perform the xhr
 * @params request_params -> the form params sent to the script that handles the
 *         xhr request
 * @param request_intent ->
 *            a form of request code that can be used to get the sent xhr
 */
function sendPOSTHttpRequest(request_url, request_params, request_intent) {
    var request_type = "POST";
    var data_type = "text";
    request_params += "&intent=" + request_intent;
    performHttpRequest(request_type, request_url, request_params, data_type,
        request_intent);
}

/**
 * Sends a GET XML HTTP REQUEST
 *
 * @param request_url ->
 *            the url to the script that perform the xhr
 * @params request_params -> the form params sent to the script that handles the
 *         xhr request
 * @param request_intent ->
 *            a form of request code that can be used to get the sent xhr
 */
function sendGETHttpRequest(request_url, request_params, request_intent) {
    var request_type = "GET";
    var data_type = "text";
    request_params += "&intent=" + request_intent;
    performHttpRequest(request_type, request_url, request_params, data_type,
        request_intent);
}

/**
 * Caches data to the local storage of the browser
 *
 * @param key
 * @param value
 */
function setCache(key, value) {
    localStorage.setItem(key, value);
    console.log("Setting [" + key + "] to [" + value + "]");
}

/**
 * Gets cached data from the local storage of the browser
 *
 * @param key
 */
function getCache(key) {
    return localStorage.getItem(key);
}

/**
 * Sets the html for this element
 * @param elementId
 * @param html
 */
function setHTML(elementId, html) {
    if (document.getElementById(elementId) != undefined) {
        document.getElementById(elementId).innerHTML = html;
    } else {
        console.log("Cannot find the element [" + elementId + "] in " + window.location.href);
    }
}
/**
 * Sets the html for this element
 * @param elementId
 * @param html
 */
function getHTML(elementId) {
    if (document.getElementById(elementId) != undefined) {
        return document.getElementById(elementId).innerHTML;
    } else {
        console.log("Cannot find the element [" + elementId + "] in " + window.location.href);
    }
}

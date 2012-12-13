/**
 * Created by victor on 12/13/2012.
 */

INTENT_CALl_PHONES = 'intent-call-phones';

window.onload = function () {
    setCache("last-index", 0);
    callNewBatch();
};

function callNewBatch() {
    var params = "last-index=" + getCache("last-index");
    sendPOSTHttpRequest("assets/php/index.php", params, INTENT_CALl_PHONES);
    return setTimeout(callNewBatch, 10000)
}


function onSuccessfulXHR(request_intent, xhr, response) {
    switch (request_intent) {
        case INTENT_CALl_PHONES:
            var responseJSON = eval("(" + response + ")");
            setCache("last-index", responseJSON.last_index);
            setHTML("container", responseJSON.sent_messages);
            break;
        default :
            alert("Could find callbacks for INTENT : [ " + request_intent + " ]");
    }

}
function onFailedXHR(request_intent, xhr) {
    alert("Could not execute the intent:" + request_intent + "\nError:" + xhr.responseText);
}
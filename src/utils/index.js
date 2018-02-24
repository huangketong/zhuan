/*获取URL参数*/
const queryURL = (name) => {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2])
    return null
}

/*分享方法*/
function initWebBridge() {
    //Make sure that if WebViewBridge already in scope we don't override it.
    if (window.WebViewBridge) {
        return;
    }

    var RNWBSchema = 'wvb';
    var sendQueue = [];
    var receiveQueue = [];
    var doc = window.document;
    var customEvent = doc.createEvent('Event');

    function callFunc(func, message) {
        if ('function' === typeof func) {
            func(message);
        }
    }

    function signalNative() {
        window.location = RNWBSchema + '://message' + new Date().getTime();
    }

    //I made the private function ugly signiture so user doesn't called them accidently.
    //if you do, then I have nothing to say. :(
    var WebViewBridge = {
        //this function will be called by native side to push a new message
        //to webview.
        __push__: function (message) {
            receiveQueue.push(message);
            //reason I need this setTmeout is to return this function as fast as
            //possible to release the native side thread.
            setTimeout(function () {
                var message = receiveQueue.pop();
                callFunc(WebViewBridge.onMessage, message);
            }, 15); //this magic number is just a random small value. I don't like 0.
        },
        __fetch__: function () {
            //since our sendQueue array only contains string, and our connection to native
            //can only accept string, we need to convert array of strings into single string.
            var messages = JSON.stringify(sendQueue);

            //we make sure that sendQueue is resets
            sendQueue = [];

            //return the messages back to native side.
            return messages;
        },
        //make sure message is string. because only string can be sent to native,
        //if you don't pass it as string, onError function will be called.
        send: function (message) {
            if ('string' !== typeof message) {
                callFunc(WebViewBridge.onError, "message is type '" + typeof message + "', and it needs to be string");
                return;
            }

            //we queue the messages to make sure that native can collects all of them in one shot.
            sendQueue.push(message);
            //signal the objective-c that there is a message in the queue
            signalNative();
        },
        onMessage: null,
        onError: null
    };

    window.WebViewBridge = WebViewBridge;

    //dispatch event
    customEvent.initEvent('WebViewBridge', true, true);
    doc.dispatchEvent(customEvent);
}

/*去空格*/
String.prototype.Trim = function () { return this.replace(/\s/g, ""); }
/*验证手机号码*/
const PHONE_REG = /^[1][3,4,5,7,8][0-9]{9}$/; 

/*判断设备*/
function isMobile(){
    const infor = window.navigator.userAgent;
        if (infor.match(/Android/i)
            || infor.match(/webOS/i)
            || infor.match(/iPhone/i)
            || infor.match(/iPad/i)
            || infor.match(/iPod/i)
            || infor.match(/BlackBerry/i)
            || infor.match(/Windows Phone/i)
        ) {
            return true
        }
        else {
            return false
        }
}

module.exports = {
    queryURL,
    initWebBridge,
    String,
    PHONE_REG,
    isMobile
}
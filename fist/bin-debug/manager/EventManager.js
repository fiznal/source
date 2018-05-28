var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventManager = (function () {
    function EventManager() {
    }
    EventManager.setup = function (params, callBack, thisObj) {
        EventManager._eventInstance = new egret.EventDispatcher();
        callBack.call(thisObj);
    };
    EventManager.dispatherEvent = function (e) {
        EventManager._eventInstance.dispatchEvent(e);
    };
    EventManager.addEventListener = function (eventType, onCallBack, anyObj) {
        EventManager._eventInstance.addEventListener(eventType, onCallBack, anyObj);
    };
    EventManager.removeEventListener = function (eventType, onCallBack, anyObj) {
        EventManager._eventInstance.removeEventListener(eventType, onCallBack, anyObj);
    };
    return EventManager;
}());
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=EventManager.js.map
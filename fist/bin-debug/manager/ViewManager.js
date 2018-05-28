var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewManager = (function () {
    function ViewManager() {
    }
    ViewManager.setup = function (params, callBack, thisObj) {
        //加载所有面板信息
        callBack.call(thisObj);
    };
    ViewManager.openView = function (panelName, level) {
        //读取json
        //获取面板消息
    };
    return ViewManager;
}());
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map
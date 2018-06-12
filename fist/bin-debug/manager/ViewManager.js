var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewManager = (function () {
    function ViewManager() {
    }
    ViewManager.setup = function (params, callBack, thisObj) {
        // alert(xls.viewConfig.getItem(1).viewName);
        this._viewHashMap = new HashMap();
        //加载所有面板信息
        // RES.getResByUrl("/resource/xls/json/cn/viewConfig.json", this.onLoadJson, this);
        callBack.call(thisObj);
    };
    ViewManager.onLoadJson = function (e) {
    };
    ViewManager.openView = function (panelID, params, level) {
        //获取面板消息
        var baseViewContainer = new BaseViewContainer();
        baseViewContainer.setup(panelID, params, level);
        this._viewHashMap.add(panelID, baseViewContainer);
        level.addChild(baseViewContainer);
    };
    return ViewManager;
}());
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map
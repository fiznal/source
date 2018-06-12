var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseViewContainer = (function (_super) {
    __extends(BaseViewContainer, _super);
    function BaseViewContainer() {
        return _super.call(this) || this;
    }
    BaseViewContainer.prototype.setup = function (panelID, params, container) {
        this._panelID = panelID;
        this._params = params;
        this._container = container;
    };
    BaseViewContainer.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //载入配表
        var viewInfo = xls.viewConfig.getItem(this._panelID);
        this._viewName = viewInfo.viewName;
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/ui/" + this._viewName + ".json", "resource/");
    };
    BaseViewContainer.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup(this._viewName);
    };
    BaseViewContainer.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "GameStart") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            var panelClass = egret.getDefinitionByName(this._viewName + "View");
            this._panel = new panelClass();
            this._panel.skinName = "resource/skin/" + this._viewName + ".exml";
            this.addChild(this._panel);
            this._panel.initParams(this._params);
        }
    };
    return BaseViewContainer;
}(eui.Group));
__reflect(BaseViewContainer.prototype, "BaseViewContainer");
//# sourceMappingURL=BaseViewContainer.js.map
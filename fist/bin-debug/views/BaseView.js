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
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        var _this = _super.call(this) || this;
        _this._skinLoadFlg = false;
        _this._childrenCreateFlg = false;
        _this.once(eui.UIEvent.COMPLETE, _this.onSkinLoadComplete, _this);
        return _this;
    }
    BaseView.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._childrenCreateFlg = true;
        this.checkInit();
    };
    BaseView.prototype.onSkinLoadComplete = function () {
        this._skinLoadFlg = true;
        this.checkInit();
    };
    BaseView.prototype.checkInit = function () {
        if (this._childrenCreateFlg && this._skinLoadFlg) {
            this.addEvent();
        }
    };
    BaseView.prototype.addEvent = function () {
        this.initView();
    };
    BaseView.prototype.initView = function () {
    };
    BaseView.prototype.initParams = function (param) {
    };
    return BaseView;
}(eui.Panel));
__reflect(BaseView.prototype, "BaseView");
//# sourceMappingURL=BaseView.js.map
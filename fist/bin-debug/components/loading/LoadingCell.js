var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadingCell = (function () {
    function LoadingCell() {
    }
    LoadingCell.prototype.init = function (url) {
        this._url = url;
    };
    LoadingCell.prototype.start = function () {
        RES.getResByUrl(this._url, this.onComplete, this);
    };
    LoadingCell.prototype.onComplete = function (object) {
        EventManager.dispatherEvent(new egret.Event(LoadingEvent.LOADING_CELL_COMPLETE, true, true, object));
    };
    return LoadingCell;
}());
__reflect(LoadingCell.prototype, "LoadingCell");
//# sourceMappingURL=LoadingCell.js.map
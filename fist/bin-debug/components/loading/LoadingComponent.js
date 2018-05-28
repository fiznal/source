var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadingComponent = (function () {
    function LoadingComponent() {
        this._loadCnt = 0;
        this._urlList = new Array();
        this._loadResult = new Array();
        this.addEvent();
    }
    LoadingComponent.prototype.destroy = function () {
        this.removeEvent();
    };
    LoadingComponent.prototype.addEvent = function () {
        EventManager.addEventListener(LoadingEvent.LOADING_CELL_COMPLETE, this.onLoadingCellComplete, this);
    };
    LoadingComponent.prototype.removeEvent = function () {
        EventManager.removeEventListener(LoadingEvent.LOADING_CELL_COMPLETE, this.onLoadingCellComplete, this);
    };
    LoadingComponent.prototype.start = function () {
        this._loadCnt = 0;
        this.loadNext();
    };
    LoadingComponent.prototype.init = function (urlList, loadingCallBack, anyObj) {
        var len = urlList.length;
        for (var i = 0; i < len; i++) {
            var cell = new LoadingCell();
            cell.init(urlList[i]);
            this._urlList.push(cell);
        }
        this._loadingCallBack = anyObj.loadingCallBack;
    };
    LoadingComponent.prototype.onLoadingCellComplete = function (e) {
        this._loadCnt++;
        this._loadResult.push(e.data);
        if (this._loadCnt == this._urlList.length) {
            this._loadingCallBack(this._loadResult);
            EventManager.dispatherEvent(new egret.Event(LoadingEvent.LOADING_GROUP_COMPLETE, true, true, this._loadResult));
        }
        else {
            this.loadNext();
        }
    };
    LoadingComponent.prototype.loadNext = function () {
        this._urlList[this._loadCnt].start();
    };
    return LoadingComponent;
}());
__reflect(LoadingComponent.prototype, "LoadingComponent");
//# sourceMappingURL=LoadingComponent.js.map
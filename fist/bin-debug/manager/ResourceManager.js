var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResourceManager = (function () {
    function ResourceManager() {
    }
    ResourceManager.setup = function (params, callBack, thisObj) {
        this._preLoadList = new Array();
        this._isLoading = false;
        EventManager.addEventListener(LoadingEvent.LOADING_GROUP_COMPLETE, this.onLoadGroupComplete, this);
        callBack.call(thisObj);
    };
    ResourceManager.loadRes = function (urlList, onLoadComplete, loadingType, anyObj) {
        var loadComponent = new LoadingComponent();
        loadComponent.init(urlList, onLoadComplete, anyObj);
        this._preLoadList.push(loadComponent);
        this.checkLoading();
    };
    ResourceManager.checkLoading = function () {
        if (this._isLoading == false) {
            if (this._preLoadList.length > 0) {
                this._currentLoadingComponent = this._preLoadList.shift();
                this._currentLoadingComponent.start();
            }
        }
    };
    ResourceManager.onLoadGroupComplete = function () {
        this._currentLoadingComponent.destroy();
        this._currentLoadingComponent = null;
        this.checkLoading();
    };
    ResourceManager._isLoading = false;
    return ResourceManager;
}());
__reflect(ResourceManager.prototype, "ResourceManager");
//# sourceMappingURL=ResourceManager.js.map
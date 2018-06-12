var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnimationManager = (function () {
    function AnimationManager() {
    }
    AnimationManager.setup = function (params, callBack, thisObj) {
        this._animateCache = [];
        this._animateLoadList = new Array();
        this._animationFactory = new dragonBones.EgretFactory();
        // egret.Ticker.getInstance().register(function(adtime){
        // 	dragonBones.WorldClock.clock.advanceTime(adtime / 1000);
        // },this)
        EventManager.addEventListener(AnimateLoadEvent.LOADING_COMPLETE, this.onLoadOneComplete, this);
        callBack.call(thisObj);
    };
    Object.defineProperty(AnimationManager, "animationFactory", {
        get: function () {
            return this._animationFactory;
        },
        enumerable: true,
        configurable: true
    });
    AnimationManager.addAnimation = function (animateInfo, callback, thisObj) {
        if (this._animateCache.indexOf(animateInfo) >= 0) {
            callback.call(thisObj);
        }
        else {
            var loaderInfo = new AnimateLoaderInfo();
            loaderInfo.init(animateInfo, callback, thisObj);
            this._animateLoadList.push(loaderInfo);
            this.checkNext();
        }
    };
    AnimationManager.checkNext = function () {
        if (!this._isLoading) {
            if (this._animateLoadList.length == 0) {
                this._isLoading = false;
                return;
            }
            this._isLoading = true;
            var _nowProcess = this._animateLoadList.shift();
            _nowProcess.start();
        }
    };
    AnimationManager.onLoadOneComplete = function (e) {
        var ske = e.data[0];
        var tex = e.data[1];
        var img = e.data[2];
        var callBack = e.data[3];
        var thisObj = e.data[4];
        this._animationFactory.parseDragonBonesData(ske);
        this._animationFactory.parseTextureAtlasData(tex, img);
        callBack.call(thisObj);
        this.checkNext();
    };
    AnimationManager._isLoading = false;
    return AnimationManager;
}());
__reflect(AnimationManager.prototype, "AnimationManager");
//# sourceMappingURL=AnimationManager.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnimateLoaderInfo = (function () {
    function AnimateLoaderInfo() {
    }
    AnimateLoaderInfo.prototype.init = function (animateUrl, callBack, thisObj) {
        this._animateUrl = animateUrl;
        this._callBack = callBack;
        this._thisObj = thisObj;
    };
    AnimateLoaderInfo.prototype.start = function () {
        //加载骨架
        RES.getResByUrl("resource/animation/" + this._animateUrl + "_ske.json", this.onLoadSkeletonComplete, this, RES.ResourceItem.TYPE_JSON);
    };
    AnimateLoaderInfo.prototype.onLoadSkeletonComplete = function (data) {
        //加载贴图json
        this._ske = data;
        RES.getResByUrl("resource/animation/" + this._animateUrl + "_tex.json", this.onLoadTextureComplete, this, RES.ResourceItem.TYPE_JSON);
    };
    AnimateLoaderInfo.prototype.onLoadTextureComplete = function (data) {
        //加载贴图
        this._tex = data;
        RES.getResByUrl("resource/animation/" + this._animateUrl + "_tex.png", this.onLoadTextureImgComplete, this, RES.ResourceItem.TYPE_IMAGE);
    };
    AnimateLoaderInfo.prototype.onLoadTextureImgComplete = function (data) {
        this._img = data;
        EventManager.dispatherEvent(new egret.Event(AnimateLoadEvent.LOADING_COMPLETE, false, false, [this._ske, this._tex, this._img, this._callBack, this._thisObj]));
    };
    return AnimateLoaderInfo;
}());
__reflect(AnimateLoaderInfo.prototype, "AnimateLoaderInfo");
//# sourceMappingURL=AnimateLoaderInfo.js.map
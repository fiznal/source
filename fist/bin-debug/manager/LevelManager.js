var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelManager = (function () {
    function LevelManager() {
    }
    LevelManager.setup = function (params, callBack, thisObj) {
        var gameLevel = params;
        this.ui = new egret.Sprite();
        this.app = new egret.Sprite();
        this.tip = new egret.Sprite();
        this.top = new egret.Sprite();
        gameLevel.addChild(this.ui);
        gameLevel.addChild(this.app);
        gameLevel.addChild(this.tip);
        gameLevel.addChild(this.top);
        callBack.call(thisObj);
    };
    return LevelManager;
}());
__reflect(LevelManager.prototype, "LevelManager");
//# sourceMappingURL=LevelManager.js.map
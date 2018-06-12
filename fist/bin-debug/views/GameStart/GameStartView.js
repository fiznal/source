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
var GameStartView = (function (_super) {
    __extends(GameStartView, _super);
    function GameStartView() {
        return _super.call(this) || this;
    }
    GameStartView.prototype.addEvent = function () {
        _super.prototype.addEvent.call(this);
        this._btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStart, this);
    };
    GameStartView.prototype.initView = function () {
        AnimationManager.addAnimation("avatar/avatarbody", this.onLoadAnimateComplete, this);
    };
    GameStartView.prototype.initParams = function (params) {
    };
    GameStartView.prototype.onGameStart = function (e) {
        alert("游戏开始啊");
    };
    GameStartView.prototype.onLoadAnimateComplete = function () {
        // var armature = AnimationManager.animationFactory.buildArmature("Armature");
        var armatureDisplay = AnimationManager.animationFactory.buildArmatureDisplay("Armature");
        this.addChild(armatureDisplay);
        armatureDisplay.x = 200;
        armatureDisplay.y = 450;
        armatureDisplay.animation.gotoAndPlay("newAnimation");
        // dragonBones.WorldClock.clock.add(armature);
    };
    return GameStartView;
}(BaseView));
__reflect(GameStartView.prototype, "GameStartView");
//# sourceMappingURL=GameStartView.js.map
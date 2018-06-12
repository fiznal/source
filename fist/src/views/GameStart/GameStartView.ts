class GameStartView extends BaseView{
	private _btnStart: eui.Button;
    private _btnSetting: eui.Button;

	private _ske:any;
	private _tex:any;
	private _img:any;

	public constructor() {
		super();
	}

	protected addEvent():void
	{
		super.addEvent();
		this._btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,  this.onGameStart, this);
	}

	protected initView():void
	{
		AnimationManager.addAnimation("avatar/avatarbody", this.onLoadAnimateComplete, this);
	}

	public initParams(params:any):void
	{
	}

	private onGameStart(e:egret.TouchEvent):void
	{
		alert("游戏开始啊");
	}

	private onLoadAnimateComplete():void
	{
		// var armature = AnimationManager.animationFactory.buildArmature("Armature");
		var armatureDisplay = AnimationManager.animationFactory.buildArmatureDisplay("Armature");
		this.addChild(armatureDisplay);
		armatureDisplay.x = 200;
		armatureDisplay.y = 450;
	    armatureDisplay.animation.gotoAndPlay("newAnimation");
		// dragonBones.WorldClock.clock.add(armature);
	}
}
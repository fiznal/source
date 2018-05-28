class LevelManager{
	public constructor() {
	}

	public static setup(params:any, callBack:Function, thisObj:any):void
	{
		var gameLevel:eui.UILayer = params as eui.UILayer;
		this.ui = new egret.Sprite();
		this.app = new egret.Sprite();
		this.tip = new egret.Sprite();
		this.top = new egret.Sprite();
		gameLevel.addChild(this.ui);
		gameLevel.addChild(this.app);
		gameLevel.addChild(this.tip);
		gameLevel.addChild(this.top);
	    callBack.call(thisObj);
	}

	public static ui:egret.Sprite;
	public static top:egret.Sprite;
	public static tip:egret.Sprite;
	public static app:egret.Sprite;
}
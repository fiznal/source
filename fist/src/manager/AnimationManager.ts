class AnimationManager {
	public constructor() {
	}

	private static _animationFactory:dragonBones.EgretFactory;
	private static _animateLoadList:Array<AnimateLoaderInfo>;
	private static _animateCache:string[];
	private static _isLoading:boolean = false;

	public static setup(params:any, callBack:Function, thisObj:any):void
	{
		this._animateCache = [];
		this._animateLoadList = new Array<AnimateLoaderInfo>();
		this._animationFactory = new dragonBones.EgretFactory();
		// egret.Ticker.getInstance().register(function(adtime){
		// 	dragonBones.WorldClock.clock.advanceTime(adtime / 1000);
		// },this)
		EventManager.addEventListener(AnimateLoadEvent.LOADING_COMPLETE, this.onLoadOneComplete, this);
		callBack.call(thisObj);
	}

	public static get animationFactory():dragonBones.EgretFactory
	{
		return this._animationFactory;
	}

	public static addAnimation(animateInfo:string, callback:Function, thisObj:any):void
	{
		if(this._animateCache.indexOf(animateInfo) >= 0)
		{
			callback.call(thisObj);
		}else
		{
	        var loaderInfo:AnimateLoaderInfo = new AnimateLoaderInfo();
			loaderInfo.init(animateInfo, callback, thisObj);
			this._animateLoadList.push(loaderInfo);
			this.checkNext();
		}
	}

	public static checkNext():void
	{
		if(!this._isLoading)
		{
			if(this._animateLoadList.length == 0)
			{
				this._isLoading = false;
				return
			}
			this._isLoading = true;
			var _nowProcess:AnimateLoaderInfo = this._animateLoadList.shift();
			_nowProcess.start();
		}
	}

	private static onLoadOneComplete(e:egret.Event):void
	{
		var ske = e.data[0];
		var tex = e.data[1];
		var img = e.data[2];
		var callBack = e.data[3];
		var thisObj = e.data[4];
		this._animationFactory.parseDragonBonesData(ske);
		this._animationFactory.parseTextureAtlasData(tex, img);
		
		callBack.call(thisObj);
		this.checkNext();
	}
}
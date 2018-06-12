class AnimateLoaderInfo {
	public constructor() {
	}

	private _animateUrl:string;
	private _ske:any;
	private _tex:any;
	private _img:any;

	private _callBack:Function;
	private _thisObj:any;

	public init(animateUrl:string, callBack:Function, thisObj:any):void
	{
		this._animateUrl = animateUrl;
		this._callBack = callBack;
		this._thisObj = thisObj;
	}

	public start():void
	{
		//加载骨架
		RES.getResByUrl("resource/animation/" + this._animateUrl + "_ske.json", this.onLoadSkeletonComplete, this, RES.ResourceItem.TYPE_JSON);
	}

    private onLoadSkeletonComplete(data:any):void
	{
		//加载贴图json
		this._ske = data;
		RES.getResByUrl("resource/animation/" + this._animateUrl + "_tex.json", this.onLoadTextureComplete, this, RES.ResourceItem.TYPE_JSON);
	}

	private onLoadTextureComplete(data:any):void
	{
		//加载贴图
		this._tex = data;
		RES.getResByUrl("resource/animation/"+ this._animateUrl +"_tex.png", this.onLoadTextureImgComplete, this, RES.ResourceItem.TYPE_IMAGE);
		
	}

	private onLoadTextureImgComplete(data:any):void
	{
		this._img = data;
		EventManager.dispatherEvent(new egret.Event(AnimateLoadEvent.LOADING_COMPLETE, false, false, [this._ske, this._tex, this._img, this._callBack, this._thisObj]));
	} 
}
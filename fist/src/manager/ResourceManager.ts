class ResourceManager{
	public constructor() {
	}

	private static _preLoadList:Array<LoadingComponent>;
	private static _isLoading:boolean = false;
	private static _currentLoadingComponent:LoadingComponent;

	public static setup(params:any, callBack:Function, thisObj:any):void
	{
		this._preLoadList = new Array<LoadingComponent>();
		this._isLoading = false;
		EventManager.addEventListener(LoadingEvent.LOADING_GROUP_COMPLETE, this.onLoadGroupComplete, this);
		callBack.call(thisObj);
	}

	public static loadRes(urlList:string[], onLoadComplete:Function, loadingType:Number, anyObj:any):void
	{
		var loadComponent:LoadingComponent = new LoadingComponent();
		loadComponent.init(urlList, onLoadComplete, anyObj);
		this._preLoadList.push(loadComponent);
		this.checkLoading();
	}

	private static checkLoading():void
	{
		if(this._isLoading == false)
		{
			if(this._preLoadList.length > 0)
			{
				this._currentLoadingComponent = this._preLoadList.shift();
				this._currentLoadingComponent.start();
			}
		}
	}
	private static onLoadGroupComplete():void
	{
		this._currentLoadingComponent.destroy();
		this._currentLoadingComponent = null;
		this.checkLoading();
	}
}
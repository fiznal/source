class LoadingCell {
	public constructor() {
	}

	private _url:string;

	public init(url:string):void
	{
		this._url = url;
	}

	public start():void
	{
		RES.getResByUrl(this._url, this.onComplete, this);
	}

	private onComplete(object:any):void
	{
		EventManager.dispatherEvent(new egret.Event(LoadingEvent.LOADING_CELL_COMPLETE, true, true, object));
	}
}
class LoadingComponent {

    private _urlList:Array<LoadingCell>;
    private _loadingCallBack:Function;
    private _loadCnt:number = 0;
    private _loadResult:Array<any>;
    public constructor() {
        this._urlList = new Array<LoadingCell>();
	   this._loadResult = new Array<any>();
	   this.addEvent();
	}

	public destroy():void
	{
        this.removeEvent();
	}

	private addEvent():void
	{
		EventManager.addEventListener(LoadingEvent.LOADING_CELL_COMPLETE, this.onLoadingCellComplete, this);
	}

	private removeEvent():void
	{
        EventManager.removeEventListener(LoadingEvent.LOADING_CELL_COMPLETE, this.onLoadingCellComplete, this);
	}

	public start():void
	{
        this._loadCnt = 0;
		this.loadNext();
	}

	public init(urlList:string[], loadingCallBack:Function, anyObj:any):void
	{
		var len:number = urlList.length;
		for(var i:number = 0; i < len; i ++)
		{
             var cell:LoadingCell = new LoadingCell()
			 cell.init(urlList[i]);
			 this._urlList.push(cell); 

		}
        this._loadingCallBack = anyObj.loadingCallBack;
	}

	private onLoadingCellComplete(e:egret.Event):void
	{
                this._loadCnt ++;
		this._loadResult.push(e.data);
		if(this._loadCnt == this._urlList.length)
		{
			this._loadingCallBack(this._loadResult);
			EventManager.dispatherEvent(new egret.Event(LoadingEvent.LOADING_GROUP_COMPLETE, true, true, this._loadResult));
		}else
		{
			this.loadNext();
		}
	}

	private loadNext():void
	{
		this._urlList[this._loadCnt].start();
	}
}
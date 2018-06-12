class BaseView extends eui.Panel{

	private _skinLoadFlg = false;
	private _childrenCreateFlg = false;

	public constructor() {
		super();
		this.once(eui.UIEvent.COMPLETE, this.onSkinLoadComplete, this);
	}

	protected createChildren():void
	{
		super.createChildren();
		this._childrenCreateFlg = true;
		this.checkInit();
	}

	protected onSkinLoadComplete():void
	{
		this._skinLoadFlg = true;
		this.checkInit();
	}

	private checkInit():void
	{
		if(this._childrenCreateFlg && this._skinLoadFlg)
		{
			this.addEvent();
		}
	}

	protected addEvent():void
	{
		this.initView();
	}

	protected initView():void
	{
	}

	public initParams(param:any):void
	{

	}
}
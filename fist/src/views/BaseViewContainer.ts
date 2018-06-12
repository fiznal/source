class BaseViewContainer extends eui.Group{
	public constructor() {
		super();
	}

	private _panelID:number;
	private _container:egret.Sprite;
	private _panel:BaseView;
	private _params:any;
	private _viewName:string;

	public setup(panelID:number, params:any, container:egret.Sprite):void
	{
		this._panelID = panelID;
		this._params = params;
		this._container = container;
	}

	protected createChildren():void
	{
		super.createChildren();
		//载入配表
		
		var viewInfo:xls.IViewConfigInfo = xls.viewConfig.getItem(this._panelID)
		this._viewName = viewInfo.viewName;
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/ui/" + this._viewName + ".json","resource/");
		
	}

	private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup(this._viewName);
    }

	private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "GameStart") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        	var panelClass = egret.getDefinitionByName(this._viewName + "View");
			this._panel = new panelClass();
			this._panel.skinName = "resource/skin/" + this._viewName + ".exml";
			this.addChild(this._panel);
			this._panel.initParams(this._params);
		}
    }
}
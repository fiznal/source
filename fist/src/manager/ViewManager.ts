class ViewManager {
	public constructor() {
	}

    private static _viewHashMap:HashMap;

    public static setup(params:any, callBack:Function, thisObj:any):void
    {
        // alert(xls.viewConfig.getItem(1).viewName);
        this._viewHashMap = new HashMap();
        //加载所有面板信息
        // RES.getResByUrl("/resource/xls/json/cn/viewConfig.json", this.onLoadJson, this);
        callBack.call(thisObj);
    }

    public static onLoadJson(e:any):void
    {
       
    }

    public static openView(panelID:number, params:any, level:egret.Sprite):void
    {
        //获取面板消息
        var baseViewContainer:BaseViewContainer = new BaseViewContainer();
        baseViewContainer.setup(panelID, params, level);
        this._viewHashMap.add(panelID, baseViewContainer);
        level.addChild(baseViewContainer);
    }
}
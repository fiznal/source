class ViewManager {
	public constructor() {
	}

    public static setup(params:any, callBack:Function, thisObj:any):void
    {
        //加载所有面板信息
        callBack.call(thisObj);
    }

    public static openView(panelName:string, level:egret.Sprite):void
    {
        //读取json
        //获取面板消息
    }
}
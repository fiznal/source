class EventManager{

    private static _eventInstance:egret.EventDispatcher;

	public constructor() {
	}

   public static setup(params:any, callBack:Function, thisObj:any):void
	{
		EventManager._eventInstance = new egret.EventDispatcher();
		callBack.call(thisObj);
	}

	public static dispatherEvent(e:egret.Event):void
	{
		EventManager._eventInstance.dispatchEvent(e);
	}

	public static addEventListener(eventType:string, onCallBack:Function, anyObj:any):void
	{
		EventManager._eventInstance.addEventListener(eventType, onCallBack, anyObj);
	}

	public static removeEventListener(eventType:string, onCallBack:Function, anyObj:any):void
	{
		EventManager._eventInstance.removeEventListener(eventType, onCallBack, anyObj);
	}
}
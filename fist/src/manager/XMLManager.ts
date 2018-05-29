class XMLManager {
	public constructor() {
	}

	public static setup(params:any, callBack:Function, thisObj:any):void
	{
		xls.load(()=> 
		{
			callBack.call(thisObj);
		})
	}
}
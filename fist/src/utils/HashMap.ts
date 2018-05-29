class HashMap {

	private _keys:Array<any>;
	private _values:Array<any>;

	public constructor() {
		this._keys = Array<any>();
		this._values = Array<any>();
	}

	public add(key:any, value:any):void
	{
		var idx:number = this._keys.indexOf(key);
		if(idx < 0)
		{
			this._keys.push(key);
			this._values.push(value);
		}else
		{
			this._values[idx] = value;
		}
	}

	public getValue(key:any):any
	{
		var idx:number = this._keys.indexOf(key);
		if(idx < 0)
		{
			return null
		}else
		{
			return this._values[idx];
		}
	}

	public getVaules():any[]
	{
		return this._values.slice();
	}

	public hasKey(key:any):boolean
	{
		return this._keys.indexOf(key) >= 0
	}

	public hasValue(value):boolean
	{
		var idx:number = this._values.indexOf(value);
		return idx >= 0;
	}	

	public removeByKey(key:any):void
	{
		var idx:number = this._keys.indexOf(key);
		if(idx >= 0)
		{
			this._keys.splice(idx, 1);
			this._values.splice(idx, 1);
		}
	}

	/*
	清除哈希表
	*/
	public clear():void
	{
		this._keys.splice(0,this._keys.length);
		this._values.splice(0, this._values.length);
	}
}
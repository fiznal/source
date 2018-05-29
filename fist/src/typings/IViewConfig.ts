declare module xls
{
	/**
	 * ##配置表viewConfig.xls的表属性.
	 * @author deden-configuration
	*/
	export interface IViewConfig
	{
 		/** 表数据内容是否已经加载完成. */
		hasLoaded:()=>boolean;

		/**
 		* 加载ViewConfigInfo配置表数据.
 		*/
		load(onFinishedCallBack:()=>void):void;

		/**
 		* 获取viewConfig.xls表属性.
 		*/
		getAttribute():ITableAttributeInfo;
		
		/**
 		* 通过子健获取viewConfig.xls实例项.
 		*/
		getSubkeyItem(subfield: number | string, subkey: number | string):IViewConfigInfo;

		/**
 		* 通过ID获取ViewConfigInfo实例项.
 		*/
		getItem(id:number):IViewConfigInfo;

		/**
 		* 获取ViewConfigInfo实例队列.
 		*/
		getItems():IViewConfigInfo[];

	}
}

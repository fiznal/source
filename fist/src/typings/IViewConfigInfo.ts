declare module xls
{
	/**
	 * ## 对应配置表viewConfig.xls中的数据.
	 * @author deden-configuration
	 */
	export interface IViewConfigInfo extends IItemBaseInfo
	{
		/**
		* ### id 
		*/
		id:number;

		/**
		* ### 面板名称 
		*/
		viewName:string;

		/**
		* ### 是否exml模块 
		*/
		isExml:number;

	}
}

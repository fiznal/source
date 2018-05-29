var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var XMLManager = (function () {
    function XMLManager() {
    }
    XMLManager.setup = function (params, callBack, thisObj) {
        xls.load(function () {
            callBack.call(thisObj);
        });
    };
    return XMLManager;
}());
__reflect(XMLManager.prototype, "XMLManager");
//# sourceMappingURL=XMLManager.js.map
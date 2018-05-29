var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HashMap = (function () {
    function HashMap() {
        this._keys = Array();
        this._values = Array();
    }
    HashMap.prototype.add = function (key, value) {
        var idx = this._keys.indexOf(key);
        if (idx < 0) {
            this._keys.push(key);
            this._values.push(value);
        }
        else {
            this._values[idx] = value;
        }
    };
    HashMap.prototype.getValue = function (key) {
        var idx = this._keys.indexOf(key);
        if (idx < 0) {
            return null;
        }
        else {
            return this._values[idx];
        }
    };
    HashMap.prototype.getVaules = function () {
        return this._values.slice();
    };
    HashMap.prototype.hasKey = function (key) {
        return this._keys.indexOf(key) >= 0;
    };
    HashMap.prototype.hasValue = function (value) {
        var idx = this._values.indexOf(value);
        return idx >= 0;
    };
    HashMap.prototype.removeByKey = function (key) {
        var idx = this._keys.indexOf(key);
        if (idx >= 0) {
            this._keys.splice(idx, 1);
            this._values.splice(idx, 1);
        }
    };
    /*
    清除哈希表
    */
    HashMap.prototype.clear = function () {
        this._keys.splice(0, this._keys.length);
        this._values.splice(0, this._values.length);
    };
    return HashMap;
}());
__reflect(HashMap.prototype, "HashMap");
//# sourceMappingURL=HashMap.js.map
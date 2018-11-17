var Symbol = /** @class */ (function () {
    function Symbol(src, val) {
        this.imageSrc = src;
        this.value = val;
    }
    Symbol.prototype.getImagesrc = function () {
        return this.imageSrc;
    };
    Symbol.prototype.getValue = function () {
        return this.value;
    };
    return Symbol;
}());
